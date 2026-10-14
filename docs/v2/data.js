/* Published values from Table 2; verified against the supplied paper. */
window.NATASHA_DATA = {
  "tasks": [
    {
      "code": "En–Nso",
      "name": "English → Northern Sotho",
      "size": "30K",
      "corpus": "Autshumato"
    },
    {
      "code": "En–Af",
      "name": "English → Afrikaans",
      "size": "50K",
      "corpus": "Autshumato"
    },
    {
      "code": "De–En",
      "name": "German → English",
      "size": "160K",
      "corpus": "IWSLT14"
    },
    {
      "code": "Tr–En",
      "name": "Turkish → English",
      "size": "190K",
      "corpus": "SETIMES2"
    },
    {
      "code": "Ro–En",
      "name": "Romanian → English",
      "size": "610K",
      "corpus": "WMT16"
    }
  ],
  "models": [
    {
      "name": "E1",
      "bleu": [
        22.8,
        30.3,
        34.3,
        16.3,
        33.0
      ],
      "ter": [
        69.2,
        59.1,
        52.2,
        74.4,
        55.3
      ]
    },
    {
      "name": "E3",
      "bleu": [
        24.1,
        33.9,
        35.1,
        17.6,
        34.0
      ],
      "ter": [
        68.0,
        54.9,
        51.6,
        72.6,
        54.6
      ]
    },
    {
      "name": "E6",
      "bleu": [
        24.3,
        34.6,
        35.4,
        18.1,
        34.1
      ],
      "ter": [
        68.8,
        54.4,
        51.1,
        72.1,
        54.8
      ]
    },
    {
      "name": "E12",
      "bleu": [
        24.3,
        34.0,
        34.7,
        18.0,
        34.3
      ],
      "ter": [
        67.7,
        55.2,
        51.5,
        71.8,
        54.2
      ]
    },
    {
      "name": "NATASHA-E6",
      "bleu": [
        25.9,
        35.9,
        36.4,
        18.7,
        34.4
      ],
      "ter": [
        65.0,
        52.7,
        49.9,
        70.3,
        53.9
      ]
    },
    {
      "name": "NATASHA-E12",
      "bleu": [
        25.4,
        35.5,
        37.0,
        19.4,
        35.3
      ],
      "ter": [
        65.7,
        52.4,
        49.5,
        70.0,
        53.5
      ]
    }
  ]
};
