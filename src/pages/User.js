import React, { useState, useEffect } from "react";
import { getAgencies } from "../functions/travelAgents";
import { Hero, Recomend, Navbar } from "../components/landing_page";

export default function User() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Recomend/>
      </>
    </div>
  );
}
