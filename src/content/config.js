import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		link: z.string(),
		order: z.number(),
		has_dropdown: z.boolean(),
		items: z.array(

			z.object({
				title: z.string(),
				link: z.string(),
				order: z.number(),
			})

		).optional(),

	})

})

export const collections = {

	"header": headerCollection

}
