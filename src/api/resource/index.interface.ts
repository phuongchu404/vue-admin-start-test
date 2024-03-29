export interface IGetAllResourceParams {
  name?: string
  type?: string
  id?: number | ''
}

/** 1 目录，2 菜单，3 页面级操作 */
export type IResourceTypes = 1 | 2 | 3

export interface IRouteResourceInfo {
  /** 节点id */
  id: number

  /** 父节点id */
  parent_id: number

  /** 资源名称 */
  name: string

  /** 资源类型 */
  type: IResourceTypes

  /** 排序值（升序） */
  order: number

  /** 权限标识，页面级必选，全站保持唯一，不可重复 */
  node_name: string

  /** 资源图标（svg-icon 的 icon-class 值） */
  icon: string

  /** 路由名称（应与组件name一致，否则无法正确cache） */
  route_name: string

  /** 路由地址 */
  route_path: string

  /** 路由映射组件名（同组件的 name） */
  route_component: string

  /** 该路由是否作为菜单项可见 */
  route_hidden: number

  /** 当该路由对象的子级只存在一个时，是否任然显示 */
  route_always_show: number

  /** 该路由组件是否被 <keep-alive> 缓存 */
  route_no_cache: number

  /** 如果设置为false，则不会在breadcrumb面包屑中显示 */
  route_breadcrumb: number

  sub: IRouteResourceInfo[]
}

export type TAddResourceParams = Omit<IRouteResourceInfo, 'id' | 'sub' | 'node_name'>
export type TAddPageResourceParams = Pick<
  IRouteResourceInfo,
  'type' | 'parent_id' | 'name' | 'node_name'
>

export type IResourceParams = TAddResourceParams | TAddPageResourceParams
