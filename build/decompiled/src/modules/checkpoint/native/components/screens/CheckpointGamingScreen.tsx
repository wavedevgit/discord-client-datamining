// modules/checkpoint/native/components/screens/CheckpointGamingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: CheckpointGame, environment: var3
        _fun86992: for (var _fun86992_ip = 0;;) switch (_fun86992_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.index;
                var9 = var1.id;
                var _closure2_slot0 = var9;
                var18 = var1.name;
                var6 = var1.icon;
                var7 = var1.coverImageHash;
                var16 = var1.numDaysPlayed;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot13;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getCoverImageUrl;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var2, var1);
                var8 = null;
                if (!(var8 == var4)) {
                    _fun86992_ip = 164;
                    continue _fun86992
                }
            case 114:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.getApplicationIconSource;
                var1 = {};
                var1.id = var9;
                if (!(var8 != var7)) {
                    _fun86992_ip = 153;
                    continue _fun86992
                }
            case 150:
                var6 = var7;
            case 153:
                var1.icon = var6;
                var14 = var2.bind(var5)(var1);
                _fun86992_ip = 195;
                continue _fun86992;
            case 164:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.makeSource;
                var14 = var1.bind(var2)(var4);
            case 195:
                var2 = _closure1_slot5;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CheckpointColorContext;
                var1 = var2.bind(var3)(var1);
                var2 = 13;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useToken;
                var1 = var1.primaryColor;
                var15 = var2.bind(var4)(var1);
                var4 = _closure1_slot6;
                var2 = 0;
                var1 = {
                    'width': 0,
                    'height': 0
                };
                var5 = var4.bind(var3)(var1);
                var4 = _closure1_slot3;
                var1 = 2;
                var1 = var4.bind(var3)(var5, var1);
                var22 = var1[var2];
                var20 = 1;
                var1 = var1[var20];
                _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.layout;
                    var0 = var1.height;
                    var3 = var1.width;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var1.width = var3;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var7 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var12.gameContainer;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot7;
                var4 = {};
                var4.onLayout = var7;
                var11 = _closure1_slot11;
                var9 = _closure1_slot7;
                var7 = {};
                var17 = var12.gameBorder;
                var13 = new Array(2);
                var13[0] = var17;
                var17 = {};
                var19 = var22.width;
                var17.width = var19;
                var19 = var22.height;
                var17.height = var19;
                var17.borderColor = var15;
                var13[1] = var17;
                var7.style = var13;
                var9 = var11.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                if (!(var8 == var14)) {
                    _fun86992_ip = 582;
                    continue _fun86992
                }
            case 442:
                var11 = _closure1_slot11;
                var9 = _closure1_slot7;
                var8 = {};
                var17 = var12.image;
                var13 = new Array(3);
                var13[0] = var17;
                var17 = var12.unknownImage;
                var13[1] = var17;
                var17 = {};
                var17.borderColor = var15;
                var19 = '100%';
                var17.width = var19;
                var23 = var22.width;
                var19 = 1.3333333333333333;
                var19 = var19 * var23;
                var17.height = var19;
                var13[2] = var17;
                var8.style = var13;
                var19 = _closure1_slot11;
                var17 = _closure1_slot0;
                var23 = _closure1_slot2;
                var13 = 15;
                var13 = var23[var13];
                var13 = var17.bind(var3)(var13);
                var17 = var13.UnknownGameIcon;
                var13 = {};
                var23 = 'lg';
                var13.size = var23;
                var13 = var19.bind(var3)(var17, var13);
                var8.children = var13;
                var8 = var11.bind(var3)(var9, var8);
                _fun86992_ip = 680;
                continue _fun86992;
            case 582:
                var13 = _closure1_slot11;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 14;
                var9 = var17[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var19 = var12.image;
                var17 = new Array(2);
                var17[0] = var19;
                var19 = {};
                var19.borderColor = var15;
                var23 = '100%';
                var19.width = var23;
                var23 = var22.width;
                var22 = 1.3333333333333333;
                var22 = var22 * var23;
                var19.height = var22;
                var17[1] = var19;
                var9.style = var17;
                var9.source = var14;
                var8 = var13.bind(var3)(var11, var9);
            case 680:
                var7[1] = var8;
                var11 = _closure1_slot11;
                var9 = _closure1_slot7;
                var8 = {};
                var14 = var12.rank;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var14.backgroundColor = var15;
                var13[1] = var14;
                var8.style = var13;
                var19 = _closure1_slot12;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 16;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {
                    'variant': 'text-md/semibold',
                    'color': 'black'
                };
                var22 = var12.numeric;
                var13.style = var22;
                var21 = var21 + var20;
                var20 = ['#'];
                var20[1] = var21;
                var13.children = var20;
                var13 = var19.bind(var3)(var15, var13);
                var8.children = var13;
                var8 = var11.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var12.gameLabel;
                var5.style = var8;
                var15 = _closure1_slot11;
                var13 = _closure1_slot1;
                var9 = 17;
                var8 = var17[var9];
                var11 = var13.bind(var3)(var8);
                var8 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'lineClamp': 2
                };
                var19 = var12.titleText;
                var8.style = var19;
                var8.children = var18;
                var11 = var15.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot11;
                var9 = var17[var9];
                var10 = var13.bind(var3)(var9);
                var9 = {};
                var15 = 'text-xs/semibold';
                var9.variant = var15;
                var12 = var12.stat;
                var9.style = var12;
                var12 = 18;
                var12 = var17[var12];
                var12 = var14.bind(var3)(var12);
                var15 = var12.intl;
                var14 = var15.format;
                var12 = 19;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.MugpMu;
                var12 = {};
                var12.numSessions = var16;
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.useCallback;
    var _closure1_slot4 = var7;
    var7 = var4.useContext;
    var _closure1_slot5 = var7;
    var4 = var4.useState;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.CheckpointSlides;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var13 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center'
    };
    var4.container = var9;
    var9 = {};
    var10 = '30%';
    var9.width = var10;
    var4.gameContainer = var9;
    var9 = {
        'position': 'absolute',
        'backgroundColor': 'transparent',
        'borderWidth': 1,
        'left': 6,
        'top': 6
    };
    var4.gameBorder = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var4.title = var9;
    var9 = {};
    var10 = 800;
    var9.fontWeight = var10;
    var4.titleText = var9;
    var12 = 'uppercase';
    var9 = {
        'textTransform': 'uppercase',
        'paddingTop': 10
    };
    var4.display = var9;
    var9 = {
        'resizeMode': 'cover',
        'borderWidth': 1
    };
    var4.image = var9;
    var9 = {
        'backgroundColor': 'black',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.unknownImage = var9;
    var9 = {};
    var10 = var13.CODE_NORMAL;
    var9.fontFamily = var10;
    var4.numeric = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'padding': 4
    };
    var4.rank = var9;
    var9 = {
        'marginTop': null,
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'flexWrap': 'wrap'
    };
    var10 = 9;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var9.marginTop = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.gap = var14;
    var4.games = var9;
    var9 = {};
    var13 = var13.CODE_BOLD;
    var9.fontFamily = var13;
    var9.textTransform = var12;
    var4.stat = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginTop = var12;
    var4.gameLabel = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginTop = var10;
    var4.knickKnacks = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/components/screens/CheckpointGamingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: CheckpointGamingScreen, environment: var3
        _fun86995: for (var _fun86995_ip = 0;;) switch (_fun86995_ip) {
            case 0:
                var0 = _closure1_slot13;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var1 = _closure1_slot9;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.applications;
                if (!(var3 === var0)) {
                    _fun86995_ip = 96;
                    continue _fun86995
                }
            case 75:
                var1 = {};
                var2 = 0;
                var1.totalGamesPlayed = var2;
                var2 = new Array(0);
                var1.applications = var2;
                var0 = var1;
            case 96:
                var22 = var0.totalGamesPlayed;
                var18 = var0.applications;
                var1 = _closure1_slot5;
                var20 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 12;
                var0 = var13[var0];
                var0 = var20.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var0 = var1.bind(var3)(var0);
                var1 = 13;
                var1 = var13[var1];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useToken;
                var0 = var0.primaryColor;
                var23 = var1.bind(var2)(var0);
                var2 = _closure1_slot11;
                var9 = _closure1_slot1;
                var0 = 20;
                var0 = var13[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var11 = _closure1_slot10;
                var4 = var11.GAMING;
                var0.slide = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = var12.container;
                var4.style = var7;
                var15 = _closure1_slot12;
                var14 = _closure1_slot7;
                var7 = {};
                var10 = var12.title;
                var7.style = var10;
                var19 = _closure1_slot11;
                var10 = 21;
                var10 = var13[var10];
                var10 = var20.bind(var3)(var10);
                var17 = var10.GameControllerIcon;
                var10 = {};
                var21 = 'xs';
                var10.size = var21;
                var21 = {};
                var21.tintColor = var23;
                var10.style = var21;
                var10 = var19.bind(var3)(var17, var10);
                var21 = new Array(2);
                var21[0] = var10;
                var25 = _closure1_slot11;
                var10 = 17;
                var17 = var13[var10];
                var24 = var9.bind(var3)(var17);
                var23 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var17 = var12.titleText;
                var23.style = var17;
                var19 = 18;
                var17 = var13[var19];
                var17 = var20.bind(var3)(var17);
                var28 = var17.intl;
                var27 = var28.string;
                var17 = 19;
                var26 = var13[var17];
                var26 = var9.bind(var3)(var26);
                var26 = var26.dW6EBf;
                var26 = var27.bind(var28)(var26);
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var21[1] = var23;
                var7.children = var21;
                var14 = var15.bind(var3)(var14, var7);
                var7 = new Array(5);
                var7[0] = var14;
                var21 = _closure1_slot11;
                var14 = var13[var10];
                var15 = var9.bind(var3)(var14);
                var14 = {
                    'variant': 'display-lg',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var23 = var12.display;
                var14.style = var23;
                var23 = var13[var19];
                var23 = var20.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var13[var19];
                var23 = var20.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.URyqtP;
                var23 = var24.bind(var25)(var23);
                var14.children = var23;
                var14 = var21.bind(var3)(var15, var14);
                var7[1] = var14;
                var15 = _closure1_slot11;
                var10 = var13[var10];
                var14 = var9.bind(var3)(var10);
                var10 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 4
                };
                var19 = var13[var19];
                var19 = var20.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.format;
                var17 = var13[var17];
                var17 = var9.bind(var3)(var17);
                var19 = var17.gzlOml;
                var17 = {};
                var17.numGames = var22;
                var22 = function(arg0, arg1) { // Original name: gamesHook, environment: var16
                    var4 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = 'heading-lg/medium';
                    var1.variant = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var17.gamesHook = var22;
                var17 = var20.bind(var21)(var19, var17);
                var10.children = var17;
                var10 = var15.bind(var3)(var14, var10);
                var7[2] = var10;
                var15 = _closure1_slot11;
                var14 = _closure1_slot7;
                var10 = {};
                var17 = var12.games;
                var10.style = var17;
                var17 = var18.map;
                var16 = function(arg0, arg1) { // Environment: var16
                    var0 = arg0;
                    var4 = arg1;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var1.index = var4;
                    var7 = var0.game;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var5 = var0.numDaysPlayed;
                    var0 = 'numDaysPlayed';
                    var1[var0] = var5;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var16 = var17.bind(var18)(var16);
                var10.children = var16;
                var10 = var15.bind(var3)(var14, var10);
                var7[3] = var10;
                var10 = _closure1_slot11;
                var8 = 22;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var12 = var12.knickKnacks;
                var8.style = var12;
                var11 = var11.GAMING;
                var8.slide = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.CheckpointGame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4633, 11134, 9123, 483, 33, 1297, 671, 566, 1417, 11136, 3110, 4666, 7806, 3901, 11143, 1234, 2267, 11138, 5288, 11150, 2]);