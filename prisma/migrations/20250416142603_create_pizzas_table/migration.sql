-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL DEFAULT 'No Description',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 4.99,
    "pic_id" TEXT NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("public_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_public_id_key" ON "Pizza"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_name_key" ON "Pizza"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_pic_id_key" ON "Pizza"("pic_id");
