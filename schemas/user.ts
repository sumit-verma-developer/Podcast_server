import { list } from "@keystone-6/core";
import { text, relationship, password, timestamp, checkbox } from "@keystone-6/core/fields";

export const User = list({
    access: {
        operation: {
            query: () => true,
            create: () => true,
            update: ({ session }) => !!session,
            delete: ({ session }) => !!session,
        },
    },
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        password: password({ validation: { isRequired: true } }),
        favoritePodcasts: relationship({ ref: 'Podcast.favoritedBy', many: true }),
        // role: select({ options: ['USER', 'ADMIN'], defaultValue: 'USER' }),
        createdAt: timestamp({ defaultValue: { kind: 'now' } }),
        isAdmin: checkbox({ defaultValue: false })
    },
});