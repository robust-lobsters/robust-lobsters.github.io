import { CaretLeftIcon } from '@radix-ui/react-icons';
import { Button } from '../btn';

export function BackBtn() {
  return (
    <Button as="Link" href={'/'}>
      <CaretLeftIcon width="1.5rem" height="1.5rem" />
    </Button>
  );
}
