import React from "react";
import Access from "../components/share-component/access";

export default{
    title: "Main/Access",
    component: Access,
    argTypes:{

    }
}

const template = (args)=> <Access {...args}/>

export const defaultMode = template.bind({});

defaultMode.args = {
    title: "Title",
    subtext: "Subtext",
    access: "Full access",
    image: "https://www.linkpicture.com/q/48_48.png"
}