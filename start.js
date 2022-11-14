require('./trace');

const { start } = require('egg');

const main = async () => {
  const options = {
    baseDir: __dirname,
    ignoreWarning: true,
    mode: 'single',
    typescript: true,
  }

  const server = await start(options)

  server.listen(7001, () => {
    console.log('egg start at 7001');
  });
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
