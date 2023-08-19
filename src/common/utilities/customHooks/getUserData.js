export default function getUserData() {
  const id = localStorage.getItem("user_id");
  const name = localStorage.getItem("user_name");
  const type = localStorage.getItem("user_type");
  const token = localStorage.getItem("access_token");
  const data = {
    id,
    name,
    type,
    token
  };
  return data;
}
