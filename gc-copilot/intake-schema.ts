import { z } from 'zod';

export const gcCopilotIntakeSchema = z.object({
  matterId: z.string().min(1),
  requestType: z.enum([
    'product_launch_review',
    'privacy_review',
    'contract_review',
    'vendor_review',
    'policy_question',
    'board_briefing_request',
  ]),
  businessOwner: z.string().min(1),
  summary: z.string().min(1),
  jurisdictions: z.array(z.string()).default([]),
  documentsProvided: z.array(z.string()).default([]),
  deadline: z.string().nullable().default(null),
  sourceIds: z.array(z.string()).default([]),
  assumptions: z.array(z.string()).default([]),
  missingInformation: z.array(z.string()).default([]),
  humanReviewerRequired: z.literal(true),
  synthetic: z.literal(true),
});

export type GcCopilotIntake = z.infer<typeof gcCopilotIntakeSchema>;

export const syntheticProductLaunchRequest: GcCopilotIntake = {
  matterId: 'synthetic-product-launch-001',
  requestType: 'product_launch_review',
  businessOwner: 'product',
  summary:
    'Synthetic request: review a proposed AI feature that lets EU enterprise users ask questions about uploaded internal policy documents.',
  jurisdictions: ['EU'],
  documentsProvided: ['synthetic-feature-brief.md'],
  deadline: null,
  sourceIds: [],
  assumptions: ['No customer data is used for model training, according to the requester.'],
  missingInformation: ['Vendor terms have not been reviewed.', 'Customer-facing claims need review.'],
  humanReviewerRequired: true,
  synthetic: true,
};

export function createReviewerQueueNote(intake: GcCopilotIntake) {
  return {
    matterId: intake.matterId,
    requestType: intake.requestType,
    summary: intake.summary,
    reviewRequired: intake.humanReviewerRequired,
    missingInformation: intake.missingInformation,
    limitation: 'Synthetic example only. Not legal advice or a real reviewer decision.',
  };
}
