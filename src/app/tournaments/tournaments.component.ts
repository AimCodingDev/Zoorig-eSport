import {Component, OnInit} from '@angular/core';
import {Tournament} from '../model/tournament.model';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.sass']
})
export class TournamentsComponent implements OnInit {
  tournaments: Tournament[] = [
    new Tournament(
      '23. - 24. Februar 2019'
      , 'Call of Duty BlackOps4 Turnier'
      , 'call-of-duty'
      , 'eParadise Zürich'
      , ''
      , '../../../assets/image/turniere/23._24.02.2019.jpeg'
    ),
    new Tournament(
      '22. Dezember 2018'
      , 'FIFA 19 Turnier'
      , 'fifa'
      , 'E-Challenge Bar, Zürich'
      , `Das erste FIFA 19 Turnier in der E-Challenge Bar in Zürich Örlikon.

        Folgende Spieler traten an:
        @eDayDinho
        @ZRG_Mr.Black
        @TwisTah7

        Unsere Spieler konnten sich fürs Finale Qualifizieren wo @ZRG_Mr.Black den Sieg nach Verlängerung gegen
        @eDayDinho für sich sichern konnte.
        1ter. und 2ter Platz.`
      , '../../../assets/image/turniere/22.12.2018.png'
    ),
    new Tournament(
      '01. - 02. Dezember 2018'
      , 'Call of Duty BlackOps4 Turnier'
      , 'call-of-duty'
      , 'eParadise Zürich'
      , `Das erste Call of Duty BlackOps4 Turnier von unserem CoD-Youth Team, im eParadise Zürich.

        Folgende Spieler traten an:
        @KarumaEU
        @RReiskout
        @Arcadis
        @KKency
        @Daplye (Pick-Up)

        Unsere Youth Spieler erreichten den 3ten Platz von 16 Teams.`
      , '../../../assets/image/turniere/01._02.12.2018.jpeg'
    ),
    new Tournament(
      '10. November 2018'
      , '2v2 FIFA 18 Turnier'
      , 'fifa'
      , 'Sportanlage Bützel, Staad'
      , `Unsere FIFA Spieler spielten am Bodensee ihr erstes Duo 2v2 FIFA 19 Turnier.

        Folgende Spieler traten an:
        @ZRG_Mr.Black
        @eDayDinho

        Sie erreichten das Viertel Finale.`
      , '../../../assets/image/turniere/10.11.2018.jpg'
    ),
    new Tournament(
      '20. Oktober 2018'
      , ' 2v2 Fortnite Turnier'
      , 'E-Challenge Bar, Zürich'
      , 'fortnite'
      , `Das erste 2v2 Fortnite Turnier in der Brandneuen E-Challenge Bar in Zürich Örlikon.

        Folgende Spieler traten an:
        @Don_Ferox
        @zMxmo_btw

        Unsere Spieler erreichten das Finale und Gewinnen
        das erste 2v2 Fortnitw Turnier in der E-Challenge Bar.
        1ter. Platz.`
      , '../../../assets/image/turniere/20.10.2018.png'
    ),
    new Tournament(
      '12. Oktober 2018'
      , 'Call of Duty BlackOps4 Turnier'
      , 'call-of-duty'
      , 'Herofest Bern'
      , `Das erste Call of Duty BlackOps 4 Turnier in der DACH Region. Gameturnier hat Unsere Organisation eingeladen mit 3 anderen Kotrahenten.

                    Folgende Spieler traten an:
                    @smallnavy
                    @oNostra
                    @FiinzOG
                    @Daplye
                    @OhhSayjayin

                    Sie errichten das Finale und den 2te Platz gegen Vertex.`
      , '../../../assets/image/turniere/12.10.2018.jpg'
    ),
    new Tournament(
      '21. September 2018'
      , 'Fortnite Online Tournament'
      , 'fortnite'
      , 'eParadise Zürich'
      , `Ein Online 1v1 Fortnite Turnier wo man Weltweit auf einem Costum Server, wo sich die besten der Welt messen.

                    Folgende Spieler traten an:
                    @X2Hiigh4YouX
                    @Don_Ferox`
      , '../../../assets/image/turniere/21.09.2018.jpg'
    ),
    new Tournament(
      '15. September 2018'
      , 'Grösstes 2v2 Fortnite Turnier der Schweiz'
      , 'fortnite'
      , 'Zürich Gameshow'
      , `Unser nächstes Fortnite Turnier an der Zürich Gameshow mit einem Preispool von 5000 Chf.

                    Folgende Spieler Traten an.
                    @X2Hiigh4YouX
                    @DiMeNsioN240

                    Sie erreichten das Grande-Final und wurden
                    7ter. Platz von ca.1000 Spieler.      `
      , '../../../assets/image/turniere/15.09.2018.jpg'
    ),
    new Tournament(
      '04. August 2018'
      , ' Fortnite Battle Royal Turnier by GameTurnier'
      , 'fortnite'
      , 'Online Turnier'
      , `Unser nächstes Online-Turnier im 2vs2 Modus in Fortnite auf der PS4. Dieses mal für Zoorig eSport waren folgende am Start: @X2Hiigh4You @DiMeNsioN240`
      , '../../../assets/image/turniere/04.08.2018.jpg'
    ),
    new Tournament(
      '28. Juli 2018'
      , 'FIFA 18 Virtual League Finals'
      , 'fifa'
      , 'Messeturm Basel'
      , `Unter Nächstes FIFA 18 Turnier, dieses Mal an der Virtual League in Basel würdig Vertreten durch: @EDaydinho @eMamijunior`
      , '../../../assets/image/turniere/28.07.2018.jpg'
    ),
    new Tournament(
      '21. - 22. Juli 2018'
      , 'Call of Duty WWII Turnier by GameTurnier'
      , 'call-of-duty'
      , 'Fehraltdorf im Heiget Huus'
      , `Du bist ein leidenschaftlicher Spieler und möchtest dich gegen andere Leute messen? Dann bring deine Freunde zusammen und mache dich bereit, Ein Turnier, in dem sich max. 32 Teams mit je vier Spielern um den Preispool von 3000.- CHF batteln. Es wird nach den Call of Duty World League Regeln gespielt, und die Mannschaften testen sich gegenseitig in den Modi: Stellung, Suchen und Zerstören und Capture the Flag.`
      , '../../../assets/image/turniere/21._22.07.2018.jpg'
    ),
    new Tournament(
      '23. Juni 2018'
      , 'FIFA 18 E-Sport Turnier 2vs2'
      , 'fifa'
      , 'Shoppi Tivoli '
      , `An der SportBar wird am Samstag, 23. Juni 2018, die Weltmeisterschaft nachgespielt. FIFA-Begeisterte können sich als Duo anmelden und an dem E-Sport Turnier teilnehmen. Mit etwas Glück, Geschicklichkeit und Können landen Sie auf dem Podest und gewinnen Shoppi Tivoli Gutscheine im Wert von bis zu CHF 800.–. Die Online-Plätze sind bereits vergeben, aber eventuell haben Sie Glück und erhalten vor Ort noch einen Platz.`
      , '../../../assets/image/turniere/23.06.2018(2).jpg'
    ),
    new Tournament(
      '23. Juni 2018'
      , 'Fortnite Battle Royal Turnier'
      , 'fortnite'
      , 'eParadise Zürich'
      , 'Neues Turnier, gleiches Ziel. An die Spitze mit unseren Top-Spielern von Fortnite wollen wir aufs Podest und die Krone holen. Seid am Samstag 23 Juni live dabei und Unterstützt uns.'
      , '../../../assets/image/turniere/23.06.2018.jpg'
    ),
    new Tournament(
      '10. Mai 2018'
      , 'FIFA 18 Schweizer Meisterschaften'
      , 'fifa'
      , 'Fantasy Basel'
      , 'Das Grand Final der diesjährigen FIFA 18 Schweizer Meisterschaft steht an! Am Donnerstag den 10. Mai 2018 duellieren sich die Besten 24 Spieler in 4x 6er Gruppen an der Fantasy Basel Messe gegeneinander! Mit dabei unser FIFA 18 Star - Fabio aka Cobraa (vordere Reihe, 4te von links)'
      , '../../../assets/image/turniere/10.05.2018.png'
    ),
    new Tournament(
      '05. Mai 2018'
      , 'FIFA 18 Blick eSport Cup'
      , 'fifa'
      , 'Congress Center Basel'
      , 'Am 5. Mai steigt in Basel mit dem BLICK eSports Cup das grösste FIFA-Turnier der Schweiz! Bis am 8. April können sich FIFA-Spieler aus der Schweiz, Deutschland und Österreich für einen von 240 Startplätzen bewerben. Im Congress Center Basel messen sich diese dann mit der absoluten eSport-Elite des deutschsprachigen Raums.'
      , '../../../assets/image/turniere/05.05.2018.jpg'
    ),
    new Tournament(
      '21. April 2018'
      , 'Call of Duty WWII by GAMETURNIER'
      , 'call-of-duty'
      , 'Fehraltdorf im Heiget Huus'
      , 'Die Schlacht geht in eine weitere Runde. Macht euer Squad bereit für die Revanche! Wer wird das Battle in Fehraltorf Zürich für sich entscheiden? Mit unserem Neuen Call of Duty Team werden wir unseren Titel verteidigen, also seid live dabei auf Twitch oder direkt in Fehraltdorf.'
      , '../../../assets/image/turniere/21.04.2018.jpeg'
    ),
    new Tournament(
      '14. April 2018'
      , 'FIFA Offline Qualifikation'
      , 'fifa'
      , 'MediaMarkt Oftringen'
      , 'Um unsere Organisatzion Zoorig eSport im Ramen der Fantay Basel an der FIFA 18 Meisterschaft zu vertretten, werden unsere FIFA-Stars an der Offline Qualifikation im MediaMarkt Oftringen am Start sein.'
      , '../../../assets/image/turniere/14.04.2018.jpg'
    ),
    new Tournament(
      '06. April 2018'
      , 'Fortnite Battle Royal Turnier'
      , 'fortnite'
      , 'eParadise Zürich'
      , 'Mit dem Ziel unsere #ZoorigFamily zu erweitern stossen wir nun auch in das Hype-Spiel Fortnite Battle Royal vor.  Mit 2 Teilnehmern werden wir zum Start alles geben, um auch in der SESL Fuss zu fassen.'
      , '../../../assets/image/turniere/06.04.2018.jpeg'
    ),
    new Tournament(
      '01. April 2018'
      , 'FIFA 18 1vs1 eSport Cup'
      , 'fifa'
      , 'eParadise Zürich'
      , 'Erneut treffen wir uns bei unserem Partner im eParadise in Zürich für ein Turnier unserer FIFA-Stars. Mit Freude und Spass tretten wir an, doch mit dem Sieg fest im Blick legen wir richtig los.'
      , '../../../assets/image/turniere/01.04.2018.png'
    ),
    new Tournament(
      '09. - 11. März 2018'
      , 'Call of Duty World League'
      , 'call-of-duty'
      , 'CWL Atlanta'
      , `Wir gratulieren dem Team von Zoorig eSport um PrimeeBOT, Kivi, TPiece und PieroCOD Ihrer grossartigen Leistung an der CWL Atlanta zum Platz 49. \n
                    \n
                    Das gesamte Organisatzion ist Stolz vom ersten auftreten bei der Call of Duty World League und bedankt sich bei allen Unterstützern.`
      , '../../../assets/image/turniere/09._11.03.2018.jpeg'
    ),
    new Tournament(
      '03. März 2018'
      , 'Call of Duty WWII by GAMETURNIER'
      , 'call-of-duty'
      , 'Fehraltdorf im Heiget Huus'
      , `1. Platz: Zoorig Bodensee
                   3. Platz: Zoorig Bodensee

                   Wir werden wieder am GAMETURNIER im Heiget Huus in Fehraltdorf teilnehmen und freuen uns wieder auf ein geniales Turnier mit guten Gegnern und werden viel Spass haben.`
      , '../../../assets/image/turniere/03.03.2018.jpg'
    ),
    new Tournament(
      '03. Februar 18'
      , 'FIFA 18 1vs1 eSport Cup'
      , 'fifa'
      , 'eParadise Zürich'
      , 'Mit grosser Freude begehen wir bei unserem Sponsor und Partner eParadise am FIFA 18 eSport Cup antreten zu dürfen. Dies wird ausserdem unser erstes FIFA 18 Turnier überhaupt als eSport Organisation sein und dabei geben wir alles.'
      , '../../../assets/image/turniere/03.03.2018(2).jpg'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
