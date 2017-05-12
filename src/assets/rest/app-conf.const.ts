const HOST = 'http://localhost:3000/';


export const APP_CONF = {
  'REST': {
    'RECOMMENDATIONS': HOST + 'recommendations',
    'ACCEPT': HOST + 'recommendations/{id}/accept',
    'REJECT': HOST + 'recommendations/{id}/reject/',

    'RECOMMENDATIONS_FILE': 'assets/temporary/recommendations.data.json',
  },
  'ROUTES': {
    'ROOT': '',
    'RECOMMENDATIONS': 'recommendations'
  }
};

export function addParams(uri, args: any) {
  for (let p = 0; p < args.length; p++) {
    uri.replace(args.key, args.value);
  }
}
