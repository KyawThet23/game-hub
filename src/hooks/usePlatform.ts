import UseData from "./useData"

export interface Platform {
  id: string,
  name: string,
  slug: string
}

const UsePlatforms = () => UseData<Platform>('/platforms/lists/parents');

export default UsePlatforms;