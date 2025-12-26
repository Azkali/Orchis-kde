var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1024x576": "",
                    "ItemGeometries-1280x720": "",
                    "ItemGeometries-720x1280": "",
                    "ItemGeometriesHorizontal": "",
                    "ItemGeometriesVertical": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "positions": "{\"1280x720\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Linux4Switch/images/Linux4Switch.png",
                    "SlidePaths": "/home/az/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4.888888888888889,
            "hiding": "dodgewindows",
            "location": "bottom",
            "maximumLength": 56.888888888888886,
            "minimumLength": 56.888888888888886,
            "offset": 0
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.888888888888889,
            "hiding": "dodgewindows",
            "location": "top",
            "maximumLength": 56.888888888888886,
            "minimumLength": 56.888888888888886,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "start-here"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.888888888888889,
            "hiding": "dodgewindows",
            "location": "top",
            "maximumLength": 56.888888888888886,
            "minimumLength": 56.888888888888886,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
