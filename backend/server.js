import 'dotenv/config';
import app from './src/app.js';
import { config } from './src/config/index.js';
import { connectDB } from './src/models/connection.js';

const PORT = config.port;

// Try MongoDB — but NEVER crash if it fails
try {
  await connectDB();
} catch (err) {
  console.warn('⚠️  DB init warning:', err.message);
}

const server = app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🏛️  DreamSpace Atelier — Backend REST API is LIVE          ║
║                                                               ║
║   Port:         ${PORT}                                          ║
║   Environment:  ${config.nodeEnv}                             ║
║   API Base:     http://localhost:${PORT}/api                  ║
║   Health Check: http://localhost:${PORT}/api/health           ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err.message);
  process.exit(1);
});

// Graceful Shutdown
function handleShutdown(signal) {
  console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('[Server] HTTP server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('[Server] Forced shutdown after timeout.');
    process.exit(1);
  }, 5000);
}

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));

export default server;
