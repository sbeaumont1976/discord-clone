import { Server, Member, Profile } from '@prisma/client'

export type TServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile})[]
}