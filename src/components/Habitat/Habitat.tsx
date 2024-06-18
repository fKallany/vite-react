import { Container } from "./Habitat.styles.tsx";
import { HabitatProps } from "./Habitat.type";

export default function Habitat({ title, banner }: HabitatProps) {

  return (
    <Container banner={banner}>
      <div className='habitat'>
        <p className='habitat__title'>{title}</p>
      </div>
    </Container>
  );
}
