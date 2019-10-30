import fetch from '../fetch'
const PREFIX = '/api/v1/mp'

export default async (url, data, method = 'GET') => fetch(`${PREFIX}${url}`, data, method)
