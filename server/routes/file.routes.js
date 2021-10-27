const Router = require("express")
const router = new Router()
const fileController = require('../controllers/fileController')

const authMiddleware = require("../middleware/auth.middleware.js")


router.post('/',authMiddleware, fileController.createDir )
router.post('/upload',authMiddleware, fileController.uploadFile )
router.post('/avatar',authMiddleware, fileController.uploadAvatar )
router.get('/',authMiddleware, fileController.getFiles )
router.get('/download',authMiddleware, fileController.downloadFile )
router.delete('/',authMiddleware, fileController.deleteFile)
router.delete('/avatar',authMiddleware, fileController.deleteAvatar)
router.get('/search', authMiddleware, fileController.searchFile)

module.exports = router