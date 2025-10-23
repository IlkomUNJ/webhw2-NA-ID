import env from '#start/env'
import { authValidator } from '#validators/auth_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async index({ view }: HttpContext) {
    // logger.info('Login page requested.')
    return view.render('pages/sign-in')
  }

  async signIn({ request, response, session }: HttpContext) {
    // logger.info('Login attempt received.')

    const adminUsername = env.get('ADMIN_USERNAME')
    const adminPassword = env.get('ADMIN_PASSWORD')

    const { username, password } = await request.validateUsing(authValidator)

    const isUsernameValid = username === adminUsername
    const isPasswordValid = password === adminPassword

    if (isUsernameValid && isPasswordValid) {
      session.put('isAdmin', true)
      return response.redirect().toRoute('dashboard')
    } else {
      session.flash('error', 'Invalid credentials')
      return response.redirect().toRoute('signIn')
    }
  }

  async signOut({ response, session }: HttpContext) {
    session.forget('isAdmin')
    return response.redirect().toRoute('signIn')
  }
}
