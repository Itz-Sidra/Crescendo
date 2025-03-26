import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAssignments = async (req, res) => {
  try {
    const assignments = await prisma.assignment.findMany({
      include: { batch: true, submittedBy: true },
    });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assignments" });
  }
};

export const createAssignment = async (req, res) => {
  try {
    const { batchId, title, content, deadline } = req.body;
    const newAssignment = await prisma.assignment.create({
      data: { batchId, title, content, deadline },
    });
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ error: "Error creating assignment" });
  }
};
