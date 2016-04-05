const router = express.Router();
const v1Root = Routes.api.v1;

router.use('/profile', v1Root.profile);
router.use('/songs/itunes', v1Root.audios.itunes);

export default router;
