import PayoskyLogo from "../app/[lang]/components/atoms/PaysokyLogo/PaysoskyLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PayoskyLogo> = {
  component: PayoskyLogo,
  title: "Branding/Logo",
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["isotype", "logotype"] },
    contrast: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    theme: {
      control: { type: "inline-radio" },
      options: ["light", "dark"],
    },
    size: {
      control: { type: "range", min: 48, max: 320 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Isotype: Story = {
  args: { type: "isotype" },
};
export const Logotype: Story = {
  args: { type: "logotype" },
};
