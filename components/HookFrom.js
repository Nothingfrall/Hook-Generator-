import React, { useState } from 'react';

const HookForm = () => {
  const [config, setConfig] = useState({
    exampleField: '',
    anotherField: '',
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const generateCode = () => {
    const code = `
      // Generated Hook
      const hookConfig = {
        exampleField: '${config.exampleField}',
        anotherField: '${config.anotherField}',
      };
    `;
    setGeneratedCode(code);
  };

  return (
    <div>
      <input
        name="exampleField"
        placeholder="Contoh Field"
        value={config.exampleField}
        onChange={handleChange}
      />
      <input
        name="anotherField"
        placeholder="Field Lain"
        value={config.anotherField}
        onChange={handleChange}
      />
      <button onClick={generateCode}>Generate Code</button>
      <h2>Generated Code:</h2>
      <pre>{generatedCode}</pre>
    </div>
  );
};

export default HookForm;