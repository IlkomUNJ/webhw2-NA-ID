import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class AuthMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = '/sign-in'

  async handle(ctx: HttpContext, next: NextFn) {
    // await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo })
    // return next()

    if (ctx.session.get('isAdmin')) {
      return next()
    }
    return ctx.response.redirect(this.redirectTo, true)
  }
}
