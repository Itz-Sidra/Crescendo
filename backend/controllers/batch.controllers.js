import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBatches = async (req, res) => {
  try {
    const batches = await prisma.batch.findMany({
      include: { students: true, assignments: true },
    });
    res.json(batches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch batches" });
  }
};

export const createBatch = async (req, res) => {
  try {
    const { name, pptLinks } = req.body;
    const newBatch = await prisma.batch.create({
      data: { name, pptLinks },
    });
    res.status(201).json(newBatch);
  } catch (error) {
    res.status(500).json({ error: "Error creating batch" });
  }
};
