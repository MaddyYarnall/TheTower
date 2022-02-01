import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CommentsSchema } from '../models/Comments.js';
import { TowerEventSchema } from '../models/TowerEvent.js';
import { ValueSchema } from '../models/Value'
import { AttendeesSchema } from '../models/Attendees.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  TowerEvents = mongoose.model('TowerEvent', TowerEventSchema);
  Comments = mongoose.model('Comment', CommentsSchema);
  Attendees = mongoose.model('Attendee', AttendeesSchema);
}

export const dbContext = new DbContext()
