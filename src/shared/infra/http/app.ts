import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from '@shared/infra/http/routes'
import routerError from '@shared/errors/RouterError'
import { uploadsFolder } from '@shared/config/files'

import typeorm from '@shared/infra/typeorm'

import '@shared/containers'
import '@shared/providers'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use('/files', express.static(uploadsFolder))

app.use(errors())
app.use(routerError)

export { app, typeorm }
