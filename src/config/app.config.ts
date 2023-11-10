interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Tutor'],
  customerRoles: ['Guest'],
  tenantRoles: ['Tutor', 'Student'],
  tenantName: 'Tutor',
  applicationName: 'Kite',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View tutor information'],
  ownerAbilities: [
    'Manage tutor information',
    'Edit user information',
    'Assign tutor to user',
    'Manage own information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/81a40b8f-4367-4352-8868-5878d756bc11',
};
