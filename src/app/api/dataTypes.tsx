export interface JsxProps {
  children: JSX.Element[] | JSX.Element;
}

export type UserInfo = {
  name: string;
  title: string;
  about: string;
};

export interface UserPropsInfo {
  userInfo: UserInfo;
}
export type SkillDetail = {
  id: string;
  key: string;
  level: [
    {
      id: string;
      key: string;
      value: [
        {
          id: string;
          skill: string;
        }
      ];
    }
  ];
};

export type SkillInfo = [SkillDetail];
export type Level = string;

export interface SkillPropsInfo {
  skillInfo: SkillInfo;
}

export type Identity = {
  id: string;
  key: string;
  value: string;
};

export type IdentityInfo = {
  identity: [Identity];
};

export interface IdentityPropsInfo {
  identityInfo: IdentityInfo;
}

export type Contact = {
  id: string;
  key: string;
  value: string;
};

export type ContactInfo = [Contact];
export interface ContactPropsInfo {
  contactInfo: ContactInfo;
}
