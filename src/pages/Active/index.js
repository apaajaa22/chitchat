import { Button } from "@components";
import { signOut } from "firebase/auth";
import { Auth } from "@fire";

function Active() {
  const TEXT = {
    LOGOUT: "Logout",
  };

  async function onLogout() {
    await signOut(Auth);
  }

  return (
    <div>
      <Button onClick={onLogout} label={TEXT.LOGOUT} />
    </div>
  );
}

export default Active;
