import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

import { FieldValues } from "react-hook-form";

import Form from "components/common/Form";
import { useNavigate } from "react-router-dom";

const CreateProperty = () => {
    const navigate = useNavigate();
    const {data: user } = useGetIdentity();
    const [propertyImage, setPropertyImage] = useState({ name: '', url: ''});
    const {refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm();

    const handleImageChange = (file: File) => {
      const reader = (readFile: File) =>
          new Promise<string>((resolve, reject) => {
              const fileReader = new FileReader();
              fileReader.onload = () => resolve(fileReader.result as string);
              fileReader.readAsDataURL(readFile);
          });

      reader(file).then((result: string) =>
          setPropertyImage({ name: file?.name, url: result }),
      );
    };

    
    const onFinshHandler = () => {}

  return (
    <Form
      type= "Create"
      register = {register}
      onFinish = {onFinish}
      formLoading = {formLoading}
      handleSubmit = {handleSubmit}
      handleImageChange = {handleImageChange}
      onFinishHandler = {onFinshHandler}
      propertyImage = {propertyImage}
      
    />
  )
}

export default CreateProperty