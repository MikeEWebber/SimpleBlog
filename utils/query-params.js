

export function queryParam(url, param){
  const paramValue = new URL(url).searchParams;
  return paramValue.get(param);
}