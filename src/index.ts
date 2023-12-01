import dotevn from 'dotenv'

dotevn.config()

import app from './app'

app.listen(app.get('PORT'), () => {
  console.log('PORT' + process.env.PORT)
  console.log(`Server runnning in port ${app.get('PORT')}`)
})

