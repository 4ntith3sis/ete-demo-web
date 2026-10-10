import Image from "next/image";
import type { AboutTeamMember } from "@/types/about";

/**
 * Team member card (`team-card`): photo, name, position, license, bio.
 */
export function TeamCard({ member }: { member: AboutTeamMember }) {
  const { photo, name, position, licenseLevel, bio } = member;
  return (
    <article className="team-card">
      <div className="team-img-wrapper">
        <Image src={photo} alt={name} fill sizes="20vw" className="team-img" />
      </div>
      <div className="team-info">
        {licenseLevel ? <span className="team-professional-label">LICENSED TAX CONSULTANT</span> : null}
        <h3>{name}</h3>
        <p className="team-position">{position}</p>
        {licenseLevel ? <strong className="team-license"><i className="fa-solid fa-certificate" aria-hidden="true" /> Lisensi Konsultan Pajak: {licenseLevel}</strong> : null}
        <p className="team-bio">{bio}</p>
      </div>
    </article>
  );
}
