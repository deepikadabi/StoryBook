import React from 'react'
import Buttons from './buttons'

export default {
    title: 'Buttons',
    component : Buttons
}

const Template = (args) => <Buttons {...args} />;

export const PrimarywithTopToolTip = Template.bind({});
PrimarywithTopToolTip.args = {
  variant: 'primary',
  tooltip: {content : 'Top Tool Tip' , position : 'top'},
  label: 'Button',
};

export const SecondarywithBottomToolTip = Template.bind({});
SecondarywithBottomToolTip.args = {
  label: 'Button',
  variant:'Secondary',
  tooltip: {content : 'Top Tool Tip' , position : 'bottom'},
};

export const SuccesswithLeftToolTip = Template.bind({});
SuccesswithLeftToolTip.args = {
  variant:'success',
  tooltip: {content : 'Top Tool Tip' , position : 'left'},
  label: 'Button',
};

export const DangerwithRightToolTip = Template.bind({});
DangerwithRightToolTip.args = {
  variant : 'danger',
  tooltip: {content : 'Top Tool Tip' , position : 'right'},
  label: 'Button',
};

export const Disabled = Template.bind({});
DangerwithRightToolTip.args = {
  disabled : true,
  tooltip: {content : 'Top Tool Tip' , position : 'right'},
  label: 'Button',
};