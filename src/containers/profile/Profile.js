import React, { useState, useEffect, lazy, Suspense } from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

const renderLoader = () => <Loading />;

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.ok && res.json())
      .then((data) => setProfile(data.data.user))
      .catch((err) => {
        console.error("GitHub profile fetch failed:", err);
        setProfile("error");
      });
  }, []);

  if (profile && typeof profile !== "string") {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={profile} key={profile.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
