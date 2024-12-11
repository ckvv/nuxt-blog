import { createReadStream } from 'node:fs'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'

export async function readdir(path: string) {
  return (await fs.readdir(join((env as any).STATIC, path), {
    withFileTypes: true,
  })).map((v) => {
    return {
      name: v.name,
      directory: v.isDirectory(),
      // path: join(v.parentPath, v.name),
      path: join(path, v.name),
    }
  })
};

export async function reafile(path: string) {
  return createReadStream(path)
};
