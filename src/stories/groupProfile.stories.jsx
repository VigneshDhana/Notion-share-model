import React from "react";
import GroupProfile from "../components/share-component/groupCard";

export default{
    title: "Main/Group profile",
    component: GroupProfile,
    argsTypes: {

    }
}

const template = (args)=> <GroupProfile {...args}/>;

export const defaultMode = template.bind({});

defaultMode.args={
    title:"Developers"
}