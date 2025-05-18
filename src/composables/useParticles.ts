export interface Particle {
  randomPosX: number;
  randomPosY: number;
  randomSize: number;
  velocity: {
    X: number;
    Y: number;
    max: number;
  };
}

const velocityRange = {
  X: { min: -0.03, max: 0.05 },
  Y: { min: 0.02, max: 0.1 },
};

let particles: Particle[] = [];
let lastTime = 0;
let ctx: CanvasRenderingContext2D;

export function useParticles(canvas: HTMLCanvasElement) {
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#c0c0c0";

  particles = Array.from({ length: 50 }, () =>
    createParticle(canvas.width, canvas.height)
  );
  requestAnimationFrame(drawParticles);

  function createParticle(
    width: number,
    height: number,
    fixedY: number | null = null
  ): Particle {
    const randomSize = 3 * Math.random() + 1;
    const velocityY = computeVelocityY(randomSize);

    return {
      randomPosX: Math.random() * width,
      randomPosY: fixedY ?? Math.random() * height,
      randomSize,
      velocity: {
        X: 0,
        Y: velocityY,
        max: 2 * velocityY,
      },
    };
  }

  function computeVelocityY(size: number): number {
    const min = velocityRange.Y.min;
    return min + ((size - 1) / 3) * (velocityRange.Y.max - min);
  }

  function varyVelocity(
    velocity: Particle["velocity"],
    axis: "X" | "Y"
  ): number {
    const min = velocityRange[axis].min;
    const max = axis === "Y" ? velocity.max : velocityRange[axis].max;
    const variation = 0.1 * (max - min);
    const newVelocity =
      velocity[axis] + Math.random() * variation - variation / 2;
    return Math.max(min, Math.min(newVelocity, max));
  }

  function updatePosition(
    particle: Particle,
    deltaTime: number,
    width: number,
    height: number
  ) {
    particle.randomPosX -= particle.velocity.X * deltaTime;
    particle.randomPosY -= particle.velocity.Y * deltaTime;

    if (particle.randomPosX < 0 || particle.randomPosY < 0) {
      const index = particles.indexOf(particle);
      if (index !== -1) {
        particles[index] = createParticle(width, height, height + 10);
      }
    }
  }

  function draw(particle: Particle) {
    ctx.beginPath();
    ctx.arc(
      particle.randomPosX,
      particle.randomPosY,
      particle.randomSize,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  function drawParticles(timestamp: number) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (const particle of particles) {
      particle.velocity.X = varyVelocity(particle.velocity, "X");
      particle.velocity.Y = varyVelocity(particle.velocity, "Y");
      updatePosition(particle, timestamp - lastTime, canvasWidth, canvasHeight);
      draw(particle);
    }

    lastTime = timestamp;
    requestAnimationFrame(drawParticles);
  }
}
