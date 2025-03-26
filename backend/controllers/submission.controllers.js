import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.studentAssignment.findMany({
      include: { student: true, assignment: true },
    });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
};

export const submitAssignment = async (req, res) => {
  try {
    const { studentId, assignmentId, fileUrl } = req.body;
    const newSubmission = await prisma.studentAssignment.create({
      data: { studentId, assignmentId, fileUrl },
    });
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(500).json({ error: "Error submitting assignment" });
  }
};
