import ajax from './ajax'
const baseURL = `http://47.106.220.143:8080`
// 登录
export const loginRequest =(name,password)=>{
  return ajax(`${baseURL}/admin/login`,{name,password},'POST')
}

// 企业修改状态
export let modifyCompany =(id)=>{
    return ajax(`${baseURL}/admin/modifyCompany`,{id},'GET')
}
// 工作室修改状态
export let modifyWorker =(id)=>{
    return ajax(`${baseURL}/admin/modifyWorker`,{id},'GET')
}
// 企业分页
export let companyAudit =(page,size)=>{
    return ajax("http://47.106.220.143:8080/admin/findCompanys",{page,size},'GET')
}
// 工作室分页
export let  workRoom =(page,size)=>{
    return ajax(`${baseURL}/admin/findWorkers`,{page,size},'GET')

}
export let projetP= (page,size)=>{
    return ajax(`${baseURL}/admin/findProjects`,{page,size},'GET')
 }
