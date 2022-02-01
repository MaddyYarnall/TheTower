import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentsSchema = new Schema(
  {
    body: { type: String, required: true },
    eventId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})