import axios from "axios";
import { ChangeEvent, FC, memo, MouseEvent, useState } from "react";
import ModalContainer from "./ModalContainer";

const PostCreateModal: FC<{
  show: boolean;
  onClose: () => void;
}> = ({ ...props }) => {
  const [previewSrc, setPreviewSrc] = useState<string>("");
  const [myFiles, setMyFiles] = useState<FileList | null>(null);

  const handleLoadfile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setMyFiles(files);
      encodeFileToBase64(files[0]);
    }
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uploadImage", myFiles![0]);

    const config = {
      Header: {
        "content-type": "multipart/form-data",
      },
    };

    // axios.post('url', formData, config);
  };

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setPreviewSrc(reader.result as string);
        resolve();
      };
    });
  };

  return (
    <ModalContainer title="Create new post" {...props}>
      <div className="relative flex flex-col min-h-[40vh] space-y-2">
        <div>
          <strong>uploaded image</strong>
          <div className="preview">
            {previewSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewSrc}
                className="relative max-w-40 max-h-40"
                alt="preview-img"
              />
            )}
          </div>
        </div>
        <form className="flex flex-col items-start space-y-4">
          <label
            className="w-full text-center px-6 py-3 bg-gray-700 rounded-lg text-white cursor-pointer"
            htmlFor="image"
          >
            이미지 업로드
          </label>
          <input
            className="hidden"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleLoadfile}
          />
          <button
            className="px-10 text-lg h-12 rounded-lg bg-slate-700 dark:bg-gray-500 text-slate-100 hover:bg-slate-600 focus:bg-slate-600 transition-colors bg-slate focus:shadow-outline duration-150 cursor-pointer w-full"
            type="submit"
            onClick={handleSubmit}
          >
            제출
          </button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default memo(PostCreateModal);