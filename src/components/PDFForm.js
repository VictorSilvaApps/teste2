import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const PDFForm = ({ onGeneratePDF }) => {
  const { handleSubmit, control, setValue, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (onGeneratePDF) {
      onGeneratePDF(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Texto:</label>
        <textarea {...control.register('text', { required: 'Texto é obrigatório' })} />
        {errors.text && <p>{errors.text.message}</p>}
      </div>
      <div>
        <label>Imagem:</label>
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setValue('image', e.target.files[0]);
              }}
            />
          )}
        />
        {errors.image && <p>{errors.image.message}</p>}
      </div>
      <button type="submit">Gerar PDF</button>
    </form>
  );
};

export default PDFForm;
