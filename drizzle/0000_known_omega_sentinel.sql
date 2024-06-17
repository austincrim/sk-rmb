CREATE TABLE `notes` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text DEFAULT '',
	`updated` integer DEFAULT current_timestamp
);
