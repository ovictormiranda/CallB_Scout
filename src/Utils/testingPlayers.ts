import { v4 as uuidv4 } from 'uuid';

export const testingPlayers = [
  //First Player
  {
    id: uuidv4(),
    bioInfo: {
      name: "Victor Miranda",
      height:"181",
      weight: "84",
      nationality: "Brazilian",
      birthDate: "27/08/1996",
      foot: "Right", // Right, Left or Both
    },
    team: "Botafogo",
    position: ["Defender", "Defensive Midfilder"],
    scouts: {
      goalScored: [
        {
          machId: "idFromEspecificGame",
          scoutId: "idFromSomeKickResultingInGoal"
        }
      ],
      assistance: [
        {
          machId: "idFromEspecificGame",
          scoutId: "idFromSomePassResultingInGoal"
        }
      ],
      yellowCard: [
        {
          machId: "idFromEspecificGame",
          scoutId: "idFromSomeActionResultingInGoal"
        }
      ],
      redCard: [
        {
          machId: "idFromEspecificGame",
          scoutId: "idFromSomeActionResultingInGoal"
        }
      ],
      postive: {
        shortPass: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "273.98",
            positionY: "78.71"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "253.92",
            positionY: "26.72"    
          }
        ],
        kick: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "73.98",
            positionY: "28.71"  
            //foigol? true  
            //levoucartãoamarelo? false
            //levoucartaovermelhoe? false
            //foiassistencia? false
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "23.92",
            positionY: "26.72"    
          }
        ],
        cornerKick: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "73.98",
            positionY: "7.71"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "23.92",
            positionY: "50.72"    
          }
        ],
        cross: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "76.98",
            positionY: "40.71"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "256.92",
            positionY: "36.72"    
          }
        ],
        foul: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "243.50",
            positionY: "38.75"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "211.11",
            positionY: "40.2"    
          }
        ],
        tackle: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "27.99",
            positionY: "77.7"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "22.22",
            positionY: "48.77"    
          }
        ],
        stolenBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "123.4",
            positionY: "48.71"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "143.94",
            positionY: "26.72"    
          }
        ],
        passBLines: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "28.76",
            positionY: "90.1"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "173.52",
            positionY: "98.24"    
          }
        ],
        firstBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "146.9",
            positionY: "76.73"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "122.92",
            positionY: "56.71"    
          }
        ],
        secondBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "143.65",
            positionY: "56.79"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "104.92",
            positionY: "56.72"    
          }
        ],
      },
      negatives: {
        shortPass: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "223.95",
            positionY: "67.66"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "192.55",
            positionY: "33.56"    
          }
        ],
        kick: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "172.98",
            positionY: "76.71"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "256.92",
            positionY: "28.72"    
          }
        ],
        cornerKick: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "198.98",
            positionY: "88.31"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "113.2",
            positionY: "62.52"    
          }
        ],
        cross: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "199.01",
            positionY: "68.98"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "222.41",
            positionY: "13.99"    
          }
        ],
        foul: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "149.17",
            positionY: "56.48"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "279.03",
            positionY: "70.09"    
          }
        ],
        tackle: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "270.81",
            positionY: "73.77"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "204.32",
            positionY: "68.45"    
          }
        ],
        looseBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "78.43",
            positionY: "20.83"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "91.07",
            positionY: "50.77"    
          }
        ],
        passBLines: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "139.36",
            positionY: "84.9"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "187.65",
            positionY: "45.95"    
          }
        ],
        firstBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "168.22",
            positionY: "18.49"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "246.56",
            positionY: "38.72"    
          }
        ],
        secondBall: [
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "244",
            positionY: "56.99"    
          },
          {
            id: uuidv4(),
            matchId: "idFromEspecificGame",
            positionX: "254.92",
            positionY: "28.72"    
          }
        ],
      }
    }
  }
]
