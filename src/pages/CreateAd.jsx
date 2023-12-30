import { Button } from "@mui/joy";
import MediaAdCard from "../components/MediaAdCard";
import TextAdCard from "../components/TextAdCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAd() {
  const [navigateUrl, setNavigateUrl] = useState("");
  const navigate = useNavigate();

  return (
    <>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',padding:'5%'}}>
      <MediaAdCard setNavigateUrl={setNavigateUrl} />
      <TextAdCard setNavigateUrl={setNavigateUrl} />
    </div>

      <Button style={{justifyContent:'center',alignItems:'center',marginLeft:'65%'}} onClick={() => navigate(navigateUrl)}>Next</Button>
    </>
  );
}
