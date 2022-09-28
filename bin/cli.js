#!/usr/bin/env node
const { execSync } = require('node:child_process')

const runCommand = (command) => {
  try {
    execSync(`${command}`, { sudo: 'inherit' })
    return true
  } catch (err) {
    console.log(`Failed to execute ${command}`, e)
    return false
  }
}

const repoName = process.argv[2] || 'express-mongo-boilerplate'
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
