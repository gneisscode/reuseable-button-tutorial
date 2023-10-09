import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div className="w-fit">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "default btn",
  },
};

export const Filled: Story = {
  args: {
    children: "filled btn",
    style: "filled",
  },
};

export const Outlined: Story = {
  args: {
    children: "outlined btn",
    style: "outlined",
  },
};
