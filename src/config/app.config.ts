interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Maintenance Staff', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'bike rental system ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
