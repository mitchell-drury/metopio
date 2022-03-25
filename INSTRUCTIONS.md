# Metopio Tech Challenge

Fork this sandbox template by clicking "Fork" in the top-right.

Please write code for the following problem.

You are welcome to use any standard or third-party library to complete this challenge!

This challenge should take you **4 hours or less**.

## Background

The Chicago Health Atlas [API](https://chicagohealthatlas.org/) is a platform built by Metopio that provides health-related data across communities.

Every "topic" (such as unemployment rate or median income) belongs to one or more "subcategories", each of which belongs to exactly one "category".

For example, the topic Unemployment Rate belongs to the "Employment" subcategory, which belongs to the "Jobs" category.

Please note, that some topics could appear in multiple subcategories. For example "Demographics" can be found in the Demographic category under the Age subcategory as well as under the Gender subcategory. For this assignment, "Demographics" would appear in both places.

## Instructions

Please use the [Chicago Health Atlas API](https://chicagohealthatlas.org/api/v1/) to produce an interactive table of categories, subcategories, and topics.

The "name" attribute should be included for each Category and Subcategory as well as the following attributes for each Topic:
"name"
"key"
"description"
"units"

**_Categories, Subcategories, and Topics should all be sortable alphabetically using their "name" attribute._** If a topic appears in multiple subcategories, it should appear multiple times in the table. Subcategories should not be included if they have no topics.

Additionally, **_please include filters that would allow users to filter the table by Categories._**

**Please note** - in the Topics endpoint, each topic's subcategories are listed in an attribute named "categories". You will see that they refer to subcategories and not to categories.

Use this time to let us see your creative side. Create a table to visualize the data in the best way possible.

Do not hesitate to contact us if you have any questions.

Happy coding!
