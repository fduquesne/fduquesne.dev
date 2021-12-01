import { PrismaClient } from '@prisma/client';

// Prevent instantiating extra `PrismaClient` on development environment
// due to hot reloading that creates multiple connections to the database.
// @see https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

if (process.env.NODE_ENV !== 'production' && !global.prisma) {
  global.prisma = new PrismaClient();
}

const prisma = process.env.NODE_ENV !== 'production' ? global.prisma : new PrismaClient();

export default prisma;
