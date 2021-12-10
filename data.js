var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15316154660357384,
        "pitch": -0.11886518434246796,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.335028875028625,
          "pitch": -0.1886067760629988,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7232636795026792,
          "pitch": -0.006224638830074625,
          "title": "Faculty of Engineering",
          "text": "Let's explore Faculty of Engineering and find out what students do here!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3770906516358039,
        "pitch": -0.1650910085787629,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.605101984827165,
          "pitch": 0.08832441410340586,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.14430851939434497,
          "pitch": 0.028961352745877633,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3770906516358039,
          "pitch": -0.1650910085787629,
          "title": "Engineering Auditorium&nbsp;",
          "text": "This is where students have their lectures and tutorials.&nbsp;"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.6349026381060945,
        "pitch": -0.14208282841229547,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -3.052400098072722,
          "pitch": -0.020992967580045985,
          "rotation": 10.210176124166829,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4192919281359746,
          "pitch": 0.35204882345528077,
          "title": "Engineering Auditorium Atrium",
          "text": "This is where students are able to study and do their projects here over a cup of coffee!"
        }
      ]
    }
  ],
  "name": "FoE web tour ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
