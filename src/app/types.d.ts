interface ErrorPageProps {
  error: () => void;
}
export default function Error({ error: reset }: ErrorPageProps): JSX.Element;
