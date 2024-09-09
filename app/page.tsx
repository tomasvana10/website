"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BasePage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/home");
  }, [push]);

  return <p></p>;
}
