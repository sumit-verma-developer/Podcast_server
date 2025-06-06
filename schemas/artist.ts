import { list } from "@keystone-6/core";
import { text, relationship } from "@keystone-6/core/fields";
export const Artist = list({
  access: {
	operation: {
	  query: () => true,
	  create: ({ session }) => !!session,
	  update: ({ session }) => !!session,
	  delete: ({ session }) => !!session,
	},
  },
  fields: {
	name: text({ validation: { isRequired: true } }),
	bio: text(),
	photo: text(),
	podcasts: relationship({ ref: "Podcast.artist", many: true }),
  },
});
