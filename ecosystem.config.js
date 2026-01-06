module.exports = {
  apps: [
    {
      name: "novationcloud",
      script: "npm",
      args: "start",
      cwd: "/home/github-runner/novationcloud.com",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};