import Ajv from 'ajv';

export function validate(obj: unknown): Valid<GApiData> {
  const ajv = new Ajv({ allErrors: true });
  const schema = {
    title: 'GApiData',
    type: 'object',
    properties: {
      apiKey: {
        type: 'string',
      },
      clientId: {
        type: 'string',
      },
      spreadsheetId: {
        type: 'string',
      },
      sheetData: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          required: ['title', 'headers'],
          properties: {
            title: {
              type: 'string',
            },
            headers: {
              type: 'array',
              minItems: 1,
              items: {
                type: 'object',
                required: ['title'],
                properties: {
                  title: {
                    type: 'string',
                  },
                  values: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    additionalProperties: false,
    required: ['apiKey', 'clientId', 'spreadsheetId', 'sheetData'],
  };
  const test = ajv.compile(schema);
  if (test(obj)) {
    return {
      valid: true,
      value: obj as GApiData,
    };
  }
  return { valid: false, errors: test.errors };
}
