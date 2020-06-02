$(document).ready(function () {
    let Cards_spindle_data = [
        {
            title: 'Spindle Motor Water Colling',
            image: 'images/bootstrap/spindle-kit/card-image-spindlemotor-water.jpg',
            description: 'Power: 2.2Kw <br> Colled: Water Colling <br> RPM: 0-24000rpm',
            price: '280$'
        },
        {
            title: '2.2KW Inverter',
            image: 'images/bootstrap/spindle-kit/card-image-bestinverter.jpeg',
            description: 'Power: 2.2Kw <br> Input/output Phase:2Phase/3Phase <br> Hz: 0-1000hz',
            price: '250$'
        }
    ];
    let func = (cards, template, container) => {
        container.children().remove();
        for (let i = 0; i < cards.length; i++){
            let html = template.replace('__image__', cards[i].image);
            html = html.replace('__title__', cards[i].title);
            html = html.replace('__description__', cards[i].description);
            html = html.replace('__price__', cards[i].price);

            container.append(html);
        }
    };
    let template = null;
    $.get('cards-spindlemotorkit.html', function (tmp) {
        func(Cards_spindle_data, tmp, $('#v-pills-spindle-motor > div'));
        template = tmp;
        console.log(template);
    });

    let cards_machinery_data = [
        {
            image:"images/bootstrap/mini-cnc-card.jpeg",
            title:"Mini 4020 Cnc Machinery",
            description:"Material: Aliuminum <br> Size: 400mm x 200mm x 50mm<br>Working-Size: 350mm x 150mm x 50mm<br>Spindle-Motor: 500w 12000rpm<br>" +
                        "Step-Motors: Nema17 1.8 Degre 3 Axis",
            price:"800$"
        },
        {
            image:"images/bootstrap/cnc-6040-card.jpg",
            title:"Cnc 6040 Machinery",
            description:"Material: Aliuminum and Metal <br> Size: 600mm x 400mm x 120mm<br>Working-Size: 550mm x 350mm x 100mm<br>Spindle-Motor: 800w 18000rpm<br>" +
                "Step-Motors: Nema23 1.8 Degre 3 Axis",
            price:"1700$"
        },
        {
            image:"images/bootstrap/cnc-9060-card.png",
            title:"Cnc 9060 Machinery",
            description:"Material: Aliuminum and Metal <br> Size: 900mm x 600mm x 150mm<br>Working-Size: 850mm x 550mm x 140mm<br>Spindle-Motor: 1500w 18000rpm<br>" +
                "Step-Motors: Nema23 1.8 Degre 3 Axis",
            price:"2200$"
        },
        {
            image:"images/bootstrap/cnc-12060-card.jpg",
            title:"Cnc 1375 Machinery",
            description:"Material: Aliuminum and Metal <br> Size: 1200mm x 600mm x 160mm<br>Working-Size: 1000mm x 600mm x 150mm<br>Spindle-Motor: 2200w 24000rpm<br>" +
                "Step-Motors: Nema23 1.8 Degre 3 Axis",
            price:"2800$"
        },
        {
            image:"images/bootstrap/cnc-1325-card.jpg",
            title:"Cnc 1325 Machinery",
            description:"Material:Metal <br> Size: 1300mm x 2500mm x 160mm<br>Working-Size: 1200mm x 2100mm x 150mm<br>Spindle-Motor: 2200w 24000rpm<br>" +
                "Step-Motors: Nema34 1.8 Degre 3 Axis",
            price:"5800$"
        },
    ];

    $('.vertical-menu .notification-type-pc').text(cards_machinery_data.length);

    $.get('machinery-card.html', function (tmp) {
        func(cards_machinery_data, tmp, $('#v-pills-machinery > div'));
        template = tmp;
    });

    let card_program_data = [
        {
            image:"images/bootstrap/mach3-program-card.jpeg",
            title:"Mach3 Mill + Crack : LPT",
            description:"Install+Crack File <br> Disk Format: CD <br> Mach3Mill,Mach3Plasma,Mach3Turn <br> The Program " +
                        "Is Designed For All LPT Output Computers <br>Windows: Windows XP, Windows 7 32bit",
            price:"20$"
        },
        {
            image:"images/bootstrap/mach3-program-card.jpeg",
            title:"Mach3 Mill + Crack : USB",
            description:"Install + Crack + USB Plugin <br> Disk Format: CD <br> Mach3Mill,Mach3Plasma,Mach3Turn" +
                        "The Program Is Designed For All LPT and USB Output Computers <br> Windows: Windows XP, Windows 7 32bit",
            price:"30$"
        },
        {
            image:"images/bootstrap/artcam-program-card.jpg",
            title:"Artcam Pro 2008",
            description:"Install + Crack + 15Model STL <br> Disk Format: DVD <br> Program Size: 1.2GB <br> 15pc 3D Models In " +
                        "STL Format <br> Windows : Windows 7 64Bit,2GB Ram,1GB Video Card",
            price:"35$"
        },
        {
            image:"images/bootstrap/corel-program-card.jpg",
            title:"CorelDraw 2019",
            description:"Install + Crack + 15Model STL <br> Disk Format: DVD<br> Program Size: 1.2GB <br> 15pc 3D Models In " +
                "STL Format <br> Windows : Windows 7 64Bit,2GB Ram,1GB Video Card",
            price:"70$"
        }
    ];

    $('.vertical-menu .notification-type-program').text(card_program_data.length);

    $.get('card-program.html', function (tmp) {
        func(card_program_data, tmp, $('#v-pills-program > div'));
        template = tmp;
    });

    let card_cuttingtools_data = [
        {

        }
    ]

});