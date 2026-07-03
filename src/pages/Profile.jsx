import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user } = useAuth0();

    return (
    <>
        <h1>Profielpagina</h1>
        <section>
            <h2>Accountgegevens</h2>
            <p><strong>E-mail:</strong> {user.email}</p>
            <p><strong>Naam:</strong> {user.name}</p>
        </section>
        <section>
            <h2>Strikt geheime profiel-content</h2>
            <p>
                Welkom in de beveiligde zone. Alleen ingelogde gebruikers zien dit
                gedeelte. Je bent succesvol geauthenticeerd via Auth0 — zonder een
                eigen backend of localStorage-token.
            </p>
        </section>
        <Link to="/">← Terug naar de homepagina</Link>
    </>
    );
 }

export default Profile;