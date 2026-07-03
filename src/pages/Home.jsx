import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function Home() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <h1>🍌 Banana Security</h1>
      <h2>"Omdat jouw data te belangrijk is om aan apen over te laten."</h2>
      <section>
        <p>Welkom bij Banana Security — de meest a-peel-ing beveiligingsoplossing in de jungle van het internet.
          Wij geloven dat goede authenticatie niet hoeft te voelen als een bezoek aan de dierentuin. Geen chaos,
          geen aap die met jouw wachtwoord aan de haal gaat, gewoon soepele, betrouwbare beveiliging — gepeld tot op de kern.</p>
      </section>
      <section>
        <p>
          Klaar om jouw applicatie te beveiligen? Maak een account aan en ontdek hoe je in drie stappen van nul naar veilig gaat.
          Spoiler: stap één is niet "schrijf je wachtwoord op een post-it."
        </p>
        {!isAuthenticated ? (
             <button onClick={() => loginWithRedirect()}>
               Aan de slag!
             </button>
          ) : (
            <p> Bekijk de <Link to="/profile">Profielpagina</Link></p>
          )
        }
      </section>
    </>
  );
}

export default Home;
