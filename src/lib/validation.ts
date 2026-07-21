import { z } from "zod";
export const appointmentSchema=z.object({name:z.string().trim().min(2).max(80),phone:z.string().trim().min(7).max(20),date:z.string().optional().refine((value)=>!value||!Number.isNaN(Date.parse(value)),"Некорректная дата"),comment:z.string().trim().max(1000).optional(),consent:z.literal(true),website:z.string().max(200).optional()});
export type Appointment=z.infer<typeof appointmentSchema>;
