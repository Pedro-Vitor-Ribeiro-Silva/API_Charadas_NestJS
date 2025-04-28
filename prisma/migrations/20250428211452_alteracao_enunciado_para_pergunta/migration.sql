/*
  Warnings:

  - You are about to drop the column `enunciado` on the `charadas` table. All the data in the column will be lost.
  - Added the required column `pergunta` to the `charadas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_charadas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_charadas" ("createdAt", "id", "resposta", "updatedAt") SELECT "createdAt", "id", "resposta", "updatedAt" FROM "charadas";
DROP TABLE "charadas";
ALTER TABLE "new_charadas" RENAME TO "charadas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
