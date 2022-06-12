#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const os = require('os')

const chalk = require('chalk')

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (e) {
    console.error(`Failed to execute command "${command}"`, e)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCmd = `git clone --depth 1 git@github.com:hugotox/nextjs-chakra-starter.git ${repoName}`
const installCmd = `cd ${repoName} && yarn install`
const cleanupCmd = `cd ${repoName} && rm -rf .git && rm -rf packages/create-nextjs-chakra-app`

const renameRepo = () => {
  try {
    const packageJson = JSON.parse(fs.readFileSync(`${repoName}/package.json`, 'utf8'))
    // change the name of the root level package
    packageJson.name = repoName
    fs.writeFileSync(`${repoName}/package.json`, JSON.stringify(packageJson, null, 2) + os.EOL)
  } catch (err) {
    console.error(err)
    process.exit(-1)
  }
}

if (!repoName) {
  console.error('Please specify the project directory:')
  console.log(
    `  npx ${chalk.cyan('@hugotox/create-nextjs-chakra-app')} ${chalk.green('<project-directory>')}`
  )
  console.log()
  console.log('For example:')
  console.log(
    `  npx ${chalk.cyan('@hugotox/create-nextjs-chakra-app')} ${chalk.green('my-turbo-app')}`
  )
  process.exit(-1)
}

console.log(`Cloning the repo to "${repoName}"`)
const checkedOut = runCommand(gitCheckoutCmd)
if (!checkedOut) {
  process.exit(-1)
}

runCommand(cleanupCmd)

renameRepo()

console.log('Installing dependencies...')
const installed = runCommand(installCmd)
if (!installed) {
  process.exit(-1)
}

console.log(`Done! Now run "cd ${repoName} && yarn dev" to start hacking!`)
