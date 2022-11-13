import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  password,
  timestamp,
} from "@keystone-6/core/fields";

export const Description = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: password({ validation: { isRequired: true } }),
    author: relationship({ ref: "User.projects", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default Description;
