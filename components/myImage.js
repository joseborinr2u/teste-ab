import Image from "next/dist/client/image"

export default function MyImage() {
    return <Image onClick={() => alert('Obrigado por Clicar!')} src='/images/logo.png' height={132} width={320} alt='Nosso Logo'/>;
}