const {main: baseMain} = require('@zcong/otel-tracing')
const { EggInstrumentation } = require('opentelemetry-instrumentation-egg')

const main = () => {
  baseMain([new EggInstrumentation({
    ignoreLayers: [],
  })])
}

main()
 