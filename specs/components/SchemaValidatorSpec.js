describe('components, SchemaValidator', () => {
  const validator = Components.SchemaValidator;

  it.only('should validate demo', () => {
    console.log(Components.SchemaValidator);
    const r = validator.schemademo(
      { type: 'object' }
    );
  });
});
