let status = {
	envs: {}
}

export default {
	setEnv: (envInfo) => status.envs[envInfo.name] = envInfo
  , getEnv: (envName) => status.envs[envName]
}
