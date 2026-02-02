import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response('Invalid email', { status: 400 });
    }
    const dir = path.join(process.cwd(), 'data');
    const file = path.join(dir, 'subscribers.csv');
    await fs.promises.mkdir(dir, { recursive: true });
    const line = `${new Date().toISOString()},${email.replace(/\r|\n/g,'')}`;
    await fs.promises.appendFile(file, (await fileExists(file) ? '\n' : '') + line, 'utf-8');
    return new Response('OK');
  } catch (e) {
    return new Response('Error', { status: 500 });
  }
}

async function fileExists(p: string) {
  try { await fs.promises.access(p); return true; } catch { return false; }
}
