const router = express.Router();
const apiRoot = Routes.api;

router.use('/v1', apiRoot.v1.index);

export default router;
