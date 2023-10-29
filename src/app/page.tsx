import { use } from "react";

import User from "./components/home/User";
import Identity from "./components/home/Identity";
import Contact from "./components/home/Contact";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Project from "./components/home/Project";

import {
  getUserInfoData,
  getSkillsInfoData,
  getIdentityInfoData,
  getContactInfoData,
} from "./api/data";

import {
  JsxProps,
  UserInfo,
  SkillInfo,
  IdentityInfo,
  ContactInfo,
} from "./api/dataTypes";

export default function Home(prop: JsxProps): JSX.Element {
  const userInfo: UserInfo = use(getUserInfoData());
  const skillInfo: SkillInfo = use(getSkillsInfoData());
  const identityInfo: IdentityInfo = use(getIdentityInfoData());
  const contactInfo: ContactInfo = use(getContactInfoData());
  return (
    <main>
      <User userInfo={userInfo} />
      <div className="flex flex-row justify-end">
        <div>
          <Project />
          <Experience />
        </div>
        <div>
          <Skills skillInfo={skillInfo} />
        </div>
      </div>

      <Identity identityInfo={identityInfo} />

      <Contact contactInfo={contactInfo} />
    </main>
  );
}
