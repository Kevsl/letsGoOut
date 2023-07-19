/*
  Warnings:

  - The `photo` column on the `activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "activity" DROP COLUMN "photo",
ADD COLUMN     "photo" TEXT[];
