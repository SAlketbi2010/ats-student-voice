import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const suggestions = sqliteTable('suggestions', {
 id: text('id').primaryKey(), userId: text('user_id').notNull(), category: text('category').notNull(),
 title: text('title').notNull(), body: text('body').notNull(), status: text('status').notNull().default('received'),
 reply: text('reply').notNull().default(''), createdAt: integer('created_at').notNull(), updatedAt: integer('updated_at').notNull()
});
export const directory = sqliteTable('directory', { id: text('id').primaryKey(), kind: text('kind').notNull(), payload: text('payload').notNull() });
