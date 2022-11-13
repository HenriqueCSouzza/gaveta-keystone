import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  password,
  timestamp,
} from "@keystone-6/core/fields";

export const User = list({
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    password: password({ validation: { isRequired: true } }),
    projects: relationship({ ref: "Project.author", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default User;
