type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />

      <button>Lets create another user</button>
    </form>
  );
}
