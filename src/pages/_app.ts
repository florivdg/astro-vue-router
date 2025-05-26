import type { App } from 'vue'
import { clientRouter } from './_clientRouter'

export default (app: App) => {
  if (clientRouter) app.use(clientRouter)
}
