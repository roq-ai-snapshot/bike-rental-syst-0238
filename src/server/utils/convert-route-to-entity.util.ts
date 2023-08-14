const mapping: Record<string, string> = {
  bikes: 'bike',
  organizations: 'organization',
  rentals: 'rental',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
