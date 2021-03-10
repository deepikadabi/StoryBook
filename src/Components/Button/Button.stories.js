import React from "react";
import Button from "./Button";

export default {
  title: "form/CustomButton",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Args",
};

export const Seconday = Template.bind({});
Seconday.args = {
  variant: "secondary",
  children: "secondary Args",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "success Args",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "danger Args",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled",
  children: "disabled Args",
};