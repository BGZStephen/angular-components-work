import { Component, OnInit } from '@angular/core';

interface player {
  id: number,
  name: string,
  position: string,
  dateOfBirth: string,
  countryOfBirth: string,
  nationality: string,
  role: string,
}

@Component({
  selector: 'football-view',
  templateUrl: './view.component.html',
})
export class View implements OnInit {
  availablePlayers: Array<player> = [];
  selectedAttackers: number = 0;
  selectedGoalkeepers: number = 0;
  selectedDefenders: number = 0;
  selectedMidfielders: number = 0;
  selectedCoach: number = 0;

  selectedPlayers: Array<player> = [];
  constructor() {
    this.availablePlayers = [
      {
        "id": 3176,
        "name": "Matthias Ginter",
        "position": "Defender",
        "dateOfBirth": "1994-01-03T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 3185,
        "name": "Lars Stindl",
        "position": "Midfielder",
        "dateOfBirth": "1988-01-04T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 3470,
        "name": "Yann Sommer",
        "position": "Goalkeeper",
        "dateOfBirth": "1988-01-04T00:00:00Z",
        "countryOfBirth": "Switzerland",
        "nationality": "Switzerland",
        "role": "PLAYER"
      },
      {
        "id": 3475,
        "name": "Nico Elvedi",
        "position": "Defender",
        "dateOfBirth": "1996-01-01T00:00:00Z",
        "countryOfBirth": "Switzerland",
        "nationality": "Switzerland",
        "role": "PLAYER"
      },
      {
        "id": 3480,
        "name": "Josip Drmić",
        "position": "Attacker",
        "dateOfBirth": "1991-12-30T00:00:00Z",
        "countryOfBirth": "Switzerland",
        "nationality": "Switzerland",
        "role": "PLAYER"
      },
      {
        "id": 3655,
        "name": "Thorgan Hazard",
        "position": "Midfielder",
        "dateOfBirth": "1993-01-04T00:00:00Z",
        "countryOfBirth": "Belgium",
        "nationality": "Belgium",
        "role": "PLAYER"
      },
      {
        "id": 6666,
        "name": "Christofer Heimeroth",
        "position": "Goalkeeper",
        "dateOfBirth": "1980-12-29T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6667,
        "name": "Tobias Sippel",
        "position": "Goalkeeper",
        "dateOfBirth": "1988-01-04T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6668,
        "name": "Moritz Nicolas",
        "position": "Goalkeeper",
        "dateOfBirth": "1996-12-30T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6669,
        "name": "Oscar Wendt",
        "position": "Defender",
        "dateOfBirth": "1984-12-31T00:00:00Z",
        "countryOfBirth": "Sweden",
        "nationality": "Sweden",
        "role": "PLAYER"
      },
      {
        "id": 6670,
        "name": "Tony Jantschke",
        "position": "Defender",
        "dateOfBirth": "1990-01-01T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6671,
        "name": "Jannik Vestergaard",
        "position": "Defender",
        "dateOfBirth": "1991-12-30T00:00:00Z",
        "countryOfBirth": "Denmark",
        "nationality": "Denmark",
        "role": "PLAYER"
      },
      {
        "id": 6672,
        "name": "Mamadou Doucouré",
        "position": "Defender",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "Senegal",
        "nationality": "France",
        "role": "PLAYER"
      },
      {
        "id": 6673,
        "name": "Justin Hoffmans",
        "position": "Defender",
        "dateOfBirth": "1996-12-30T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6674,
        "name": "Marcel Benger",
        "position": "Defender",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6675,
        "name": "Florian Mayer",
        "position": "Defender",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6676,
        "name": "Mandela Egbo",
        "position": "Defender",
        "dateOfBirth": "1996-12-30T00:00:00Z",
        "countryOfBirth": "England",
        "nationality": "England",
        "role": "PLAYER"
      },
      {
        "id": 6677,
        "name": "Reece Oxford",
        "position": "Defender",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "England",
        "nationality": "England",
        "role": "PLAYER"
      },
      {
        "id": 6678,
        "name": "Louis Beyer",
        "position": "Defender",
        "dateOfBirth": "2000-01-03T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6679,
        "name": "Ibrahima Traoré",
        "position": "Midfielder",
        "dateOfBirth": "1988-01-04T00:00:00Z",
        "countryOfBirth": "France",
        "nationality": "Guinea",
        "role": "PLAYER"
      },
      {
        "id": 6680,
        "name": "Patrick Herrmann",
        "position": "Midfielder",
        "dateOfBirth": "1990-12-31T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6681,
        "name": "Jonas Hofmann",
        "position": "Midfielder",
        "dateOfBirth": "1991-12-30T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6682,
        "name": "Christoph Kramer",
        "position": "Midfielder",
        "dateOfBirth": "1990-12-31T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6683,
        "name": "Tobias Strobl",
        "position": "Midfielder",
        "dateOfBirth": "1990-01-01T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6684,
        "name": "László Bénes",
        "position": "Midfielder",
        "dateOfBirth": "1996-12-30T00:00:00Z",
        "countryOfBirth": "Slovakia",
        "nationality": "Slovakia",
        "role": "PLAYER"
      },
      {
        "id": 6685,
        "name": "Nils Rütten",
        "position": "Midfielder",
        "dateOfBirth": "1995-01-02T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6686,
        "name": "Vincenzo Grifo",
        "position": "Midfielder",
        "dateOfBirth": "1993-01-04T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6687,
        "name": "Denis Zakaria",
        "position": "Midfielder",
        "dateOfBirth": "1996-01-01T00:00:00Z",
        "countryOfBirth": "Congo DR",
        "nationality": "Switzerland",
        "role": "PLAYER"
      },
      {
        "id": 6688,
        "name": "Mickaël Cuisance",
        "position": "Midfielder",
        "dateOfBirth": "1999-01-04T00:00:00Z",
        "countryOfBirth": "France",
        "nationality": "France",
        "role": "PLAYER"
      },
      {
        "id": 6689,
        "name": "Aaron Herzog",
        "position": "Midfielder",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6690,
        "name": "Fabian Johnson",
        "position": "Attacker",
        "dateOfBirth": "1986-12-29T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "United States",
        "role": "PLAYER"
      },
      {
        "id": 6691,
        "name": "Raffael",
        "position": "Attacker",
        "dateOfBirth": "1984-12-31T00:00:00Z",
        "countryOfBirth": "Brazil",
        "nationality": "Brazil",
        "role": "PLAYER"
      },
      {
        "id": 6692,
        "name": "Ba-Muaka Simakala",
        "position": "Attacker",
        "dateOfBirth": "1996-12-30T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Congo",
        "role": "PLAYER"
      },
      {
        "id": 6693,
        "name": "Mike Feigenspan",
        "position": "Attacker",
        "dateOfBirth": "1995-01-02T00:00:00Z",
        "countryOfBirth": "Germany",
        "nationality": "Germany",
        "role": "PLAYER"
      },
      {
        "id": 6694,
        "name": "Julio Villalba",
        "position": "Attacker",
        "dateOfBirth": "1997-12-29T00:00:00Z",
        "countryOfBirth": "Paraguay",
        "nationality": "Paraguay",
        "role": "PLAYER"
      },
      {
        "id": 6695,
        "name": "Raúl Bobadilla",
        "position": "Attacker",
        "dateOfBirth": "1986-12-29T00:00:00Z",
        "countryOfBirth": "Argentina",
        "nationality": "Paraguay",
        "role": "PLAYER"
      },
    ]; 
  } 

  ngOnInit() {}

  selectAvailablePlayer(player) {
    if (player.position === 'Goalkeeper' && this.selectedGoalkeepers >= 1) {
      return;
    }

    if (this.selectedPlayers.length === 11) {
      return;
    }

    if (player.position === 'Goalkeeper') this.selectedGoalkeepers += 1;

    this.selectedPlayers.push(player)

    for (let i = 0; i < this.availablePlayers.length; i++) {
      if (this.availablePlayers[i].id === player.id) {
        this.availablePlayers.splice(i, 1);
      }
    }
  }

  removeSelectedPlayer(player) {
    if (player.position === 'Goalkeeper') this.selectedGoalkeepers -= 1;

    this.availablePlayers.push(player)

    for (let i = 0; i < this.selectedPlayers.length; i++) {
      if (this.selectedPlayers[i].id === player.id) {
        this.selectedPlayers.splice(i, 1);
      }
    }
  }
}