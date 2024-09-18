import configs from "./app-config.json";

const getLogLevel = () => {
  return configs.logLevel;
};

export default { getLogLevel };
