import { get } from "./base"

//获取轮播
export function getRecommend(){
  return get("/api/getRecommend")
}