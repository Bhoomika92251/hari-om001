import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🏛️  Initializing DreamSpace Full-Stack Environment...\n');

// 1. Spawn Backend Process
const backend = spawn('cmd.exe', ['/c', 'npm', 'start'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'pipe',
  shell: true,
});

backend.stdout.on('data', (chunk) => {
  const lines = chunk.toString().split('\n');
  lines.forEach((line) => {
    if (line.trim()) console.log(`\x1b[36m[BACKEND]\x1b[0m ${line}`);
  });
});

backend.stderr.on('data', (chunk) => {
  const lines = chunk.toString().split('\n');
  lines.forEach((line) => {
    if (line.trim()) console.error(`\x1b[31m[BACKEND ERR]\x1b[0m ${line}`);
  });
});

// 2. Spawn Frontend Process
const frontend = spawn('cmd.exe', ['/c', 'npm', 'run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'pipe',
  shell: true,
});

frontend.stdout.on('data', (chunk) => {
  const lines = chunk.toString().split('\n');
  lines.forEach((line) => {
    if (line.trim()) console.log(`\x1b[32m[FRONTEND]\x1b[0m ${line}`);
  });
});

frontend.stderr.on('data', (chunk) => {
  const lines = chunk.toString().split('\n');
  lines.forEach((line) => {
    if (line.trim()) console.error(`\x1b[33m[FRONTEND ERR]\x1b[0m ${line}`);
  });
});

// Graceful cleanup on Ctrl+C
const shutdown = () => {
  console.log('\n\x1b[35m[SYSTEM] Terminating Backend & Frontend processes...\x1b[0m');
  try {
    spawn('taskkill', ['/pid', backend.pid, '/f', '/t']);
    spawn('taskkill', ['/pid', frontend.pid, '/f', '/t']);
  } catch (e) {
    backend.kill();
    frontend.kill();
  }
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

