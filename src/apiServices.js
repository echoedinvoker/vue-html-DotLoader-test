export async function getRest() {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const data = await res.json()
  return data
}

