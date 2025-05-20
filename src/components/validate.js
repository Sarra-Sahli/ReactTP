import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long"),
  price: z.number().min(1).max(1000, "The price must be between 1 and 1000"),
  description: z.string().min(10, "The description must contain at least 10 characters"),
  nbTickets: z.number().min(1).max(100, "Tickets must be between 1 and 100"),
  nbParticipants: z.number().min(1, "The number of participants must be at least 1"),
});