import fetch from 'utils/fetch';

// 资产分析报表数据查询
export function getAssetsReport(query) {
  return fetch({
    url: '/api/things/stations/getAssetsReport',
    method: 'get',
    params: query
  });
}


export function fetchTree(query) {
  return fetch({
    url: '/api/things/stations/tree',
    method: 'get',
    params: query
  });
}

export function page(query) {
  return fetch({
    url: '/api/things/stations/page',
    method: 'get',
    params: query
  });
}

export function getStationList(query) {
  return fetch({
    url: '/api/things/stations/all',
    method: 'get',
    params: query
  });
}

export function addObj(obj) {
  return fetch({
    url: '/api/things/stations',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/api/things/stations/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/api/things/stations/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/api/things/stations/' + id,
    method: 'put',
    data: obj
  })
}
