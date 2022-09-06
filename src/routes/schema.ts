import z from 'zod'

export const itemIdentifiers = z.object({
  uniqueId: z.string(),
  groupId: z.string(),
  metadata: z.record(z.any(), z.any()),
})

export const contentItem = itemIdentifiers.extend({
  translations: z.record(z.string(), z.string()),
})

export const apiError = z.object({
  message: z.string(),
  statusCode: z.number(),
})