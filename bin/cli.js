#! /usr/bin/env node

const childProcess = require('child_process')

const runCommand = (command) => {
  try {
    childProcess.exec(`${command}`, { sudo: 'inherit' })
  } catch (err) {
    console.log(`Failed to execute ${command}`, e)
    return false
  }
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ahmmedabir9/express-rest-boilerplate.git ${repoName}`
const installDepsCom = `cd ${repoName} && npm install`

console.log(`Cloning the repository with the name ${repoName}`)
const checkout = runCommand(gitCheckoutCommand)

if (!checkout) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCom)

if (!installedDeps) process.exit(-1)

console.log(
  `Congratulations! You are ready. Follow the following commands to sart.`,
)
console.log(`cd ${repoName} && npm start`)
