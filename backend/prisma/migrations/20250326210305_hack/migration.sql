-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "parentContactNumber" TEXT NOT NULL,
    "resume" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
