import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AttendeesSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: 'TowerEvent', required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

AttendeesSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

AttendeesSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'TowerEvent'
})