import React from "react";
import Pill from "../components/share-component/pill";

export default{
    title: "Main/Pill",
    component: Pill,
}

const template=(args)=> <Pill {...args}/>;

export const defaultMode = template.bind({});

defaultMode.args={
    title: "Profile Name"
}