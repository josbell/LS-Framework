export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface MenuItem {
  text: string;
  route: string;
  icon?: string;
  submenu?: MenuItem[];
}

export interface FrameworkConfigSettings {
  title: string;
  menuItems: MenuItem[];
  socialIcons?: IconFiles[];
}
