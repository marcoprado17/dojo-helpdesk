"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleClick = async () => {
    setIsLoading(true);

    const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (json.error) {
      console.log(json.error);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }

    setIsLoading(false);
  }

  return (
    <button
      className="btn-primary"
      onClick={handleClick}
      disabled={isLoading}
    >
      {
        isLoading && (
          <>
            <TiDelete/>
            Deleting...
          </>
        )
      }
      {
        !isLoading && (
          <>
            <TiDelete/>
            Delete ticket
          </>
        )
      }
    </button>
  )
}