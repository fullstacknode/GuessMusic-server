import Ajv from 'ajv';

const ajv = Ajv({
  useDefaults: true,
  coerceTypes: true
});

export default {
  schemademo: ajv.compile({
    type: 'object'
  }),
  justfortest: ajv.compile({

  })
};
