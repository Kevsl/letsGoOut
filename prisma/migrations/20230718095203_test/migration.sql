/*
  Warnings:

  - You are about to drop the `annee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bi_semaine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bookmarks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chronomode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `entreprise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `infractions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `journee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mois` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `semaine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tri_semaine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_userId_fkey";

-- DropTable
DROP TABLE "annee";

-- DropTable
DROP TABLE "bi_semaine";

-- DropTable
DROP TABLE "bookmarks";

-- DropTable
DROP TABLE "chronomode";

-- DropTable
DROP TABLE "entreprise";

-- DropTable
DROP TABLE "infractions";

-- DropTable
DROP TABLE "journee";

-- DropTable
DROP TABLE "mois";

-- DropTable
DROP TABLE "semaine";

-- DropTable
DROP TABLE "tri_semaine";

-- CreateTable
CREATE TABLE "activity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "maxParticipant" INTEGER NOT NULL,
    "participant" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "material" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);
