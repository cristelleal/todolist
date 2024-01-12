export default async function removeTaskOnServer(id) {
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}
