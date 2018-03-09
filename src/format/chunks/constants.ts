export const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

export enum Chunks {
  // Critical Chunks
  IHDR = 0x49484452,

  
  IEND = 0x49454e44,
  IDAT = 0x49444154,
  PLTE = 0x504c5445,
  tRNS = 0x74524e53,
  gAMA = 0x67414d41,
}