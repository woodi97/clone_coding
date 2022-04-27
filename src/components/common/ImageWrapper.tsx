import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => <NextImage onLoad={() => <div>abc</div>} {...rest} />

export default Image