import React from "react";
import Share from "../components/share-component/share";

export default{
    title: "Main/share",
    component: Share,
    argTypes: {
        border: {control: "color"}
    }
};

const template = (args) => <Share {...args}/>;

export const darkMode = template.bind({});

export const lightMode = template.bind({});

darkMode.args={
    backgroundColor: "black",
    color:'white',
    image:'white',
    label:'Share'
}

lightMode.args={
    backgroundColor: "white",
    color:'black',
    image:'black',
    label:'Share'
}