import React from "react";
import Share from "../components/share-component/share";

export default{
    title: "Main/Share",
    component: Share,
    argTypes: {
        border: {control: "color"},
    }
};

const template = (args) => <Share {...args}/>;

export const darkMode = template.bind({});

export const defaultMode = template.bind({});

darkMode.args={
    backgroundColor: "black",
    color:'white',
    image:'white',
    label:'Share'
}

defaultMode.args={
    backgroundColor: "white",
    color:'black',
    image:'black',
    label:'Share'
}