"use client";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/product"}>Product</Link>
      <br />
      <Link href={"/product/men"}>Product Men</Link>
      <br />
      <Link href={"/product/women"}>Product Women</Link>
      <br />
      <Link href={"/profile"}>Profile</Link>
      <br />
    </div>
  );
}
