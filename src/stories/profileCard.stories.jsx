import React from "react";
import Profile from "../components/share-component/profileCard";

export default{
    title: "Main/profile",
    component: Profile,
}

const template = (args)=> <Profile {...args}/>;

export const defaultMode = template.bind({});

defaultMode.args={
  title: "Profile Name",
  image: "https://www.linkpicture.com/q/48_48.png",
}