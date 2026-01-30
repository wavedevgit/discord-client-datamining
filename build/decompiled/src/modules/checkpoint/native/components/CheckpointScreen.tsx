// modules/checkpoint/native/components/CheckpointScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CheckpointPersonas;
    var _closure1_slot6 = var6;
    var7 = var3.CheckpointSlides;
    var _closure1_slot7 = var7;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot9 = var9;
    var9 = var3.Fragment;
    var _closure1_slot10 = var9;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.spacing;
    var3 = var3.PX_8;
    var _closure1_slot12 = var3;
    var3 = {};
    var9 = var7.WELCOME;
    var8 = ['#25724B', '#103924'];
    var3[var9] = var8;
    var9 = var7.MESSAGES;
    var8 = ['#942581', '#381126'];
    var3[var9] = var8;
    var9 = var7.EMOJIS;
    var8 = ['#4A268B', '#231037'];
    var3[var9] = var8;
    var9 = var7.VOICE;
    var8 = ['#958027', '#4F360D'];
    var3[var9] = var8;
    var9 = var7.GUILDS;
    var8 = ['#369383', '#15453C'];
    var3[var9] = var8;
    var9 = var7.FRIENDS;
    var8 = ['#381297', '#1E094F'];
    var3[var9] = var8;
    var9 = var7.GAMING;
    var8 = ['#90490C', '#351D08'];
    var3[var9] = var8;
    var9 = var7.QUESTS;
    var8 = ['#4A268B', '#231037'];
    var3[var9] = var8;
    var8 = var7.END;
    var7 = ['#25724B', '#103924'];
    var3[var8] = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var8 = var6.ZERO;
    var7 = ['#25724B', '#103924'];
    var3[var8] = var7;
    var8 = var6.ONE;
    var7 = ['#369383', '#15453C'];
    var3[var8] = var7;
    var8 = var6.TWO;
    var7 = ['#381297', '#1E094F'];
    var3[var8] = var7;
    var8 = var6.THREE;
    var7 = ['#4A268B', '#231037'];
    var3[var8] = var7;
    var8 = var6.FOUR;
    var7 = ['#942581', '#381126'];
    var3[var8] = var7;
    var8 = var6.FIVE;
    var7 = ['#963556', '#54172C'];
    var3[var8] = var7;
    var8 = var6.SIX;
    var7 = ['#90490C', '#351D08'];
    var3[var8] = var7;
    var8 = var6.SEVEN;
    var7 = ['#958027', '#4F360D'];
    var3[var8] = var7;
    var8 = var6.EIGHT;
    var7 = ['#806B45', '#44321A'];
    var3[var8] = var7;
    var7 = var6.NINE;
    var6 = ['#8E8E8E', '#414141'];
    var3[var7] = var6;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': '100%',
        'backgroundColor': 'rgba(0,0,0,0.8)',
        'width': '100%'
    };
    var3.container = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.background = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CheckpointScreen, environment: var1
        _fun86483: for (var _fun86483_ip = 0;;) switch (_fun86483_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.children;
                var14 = var0.allowFullScreen;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun86483_ip = 22;
                    continue _fun86483
                }
            case 20:
                var14 = false;
            case 22:
                var2 = var0.slide;
                var0 = _closure1_slot15;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var13 = var0.insets;
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useIsScreenLandscape;
                var8 = var0.bind(var5)();
                var0 = 10;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var4.bind(var5)(var1, var0);
                var1 = _closure1_slot13;
                var6 = var1[var2];
                var1 = _closure1_slot14;
                var0 = var0.cardId;
                var4 = null;
                if (!(var4 == var0)) {
                    _fun86483_ip = 173;
                    continue _fun86483
                }
            case 163:
                var4 = _closure1_slot6;
                var0 = var4.ONE;
            case 173:
                var0 = var1[var0];
                var1 = _closure1_slot7;
                var1 = var1.END;
                if (!(var2 === var1)) {
                    _fun86483_ip = 194;
                    continue _fun86483
                }
            case 191:
                var6 = var0;
            case 194:
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = _closure1_slot9;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var4 = 11;
                var4 = var17[var4];
                var5 = var16.bind(var3)(var4);
                var4 = {};
                var4.colors = var6;
                var6 = _closure1_slot8;
                var11 = var6.START;
                var4.start = var11;
                var6 = var6.END;
                var4.end = var6;
                var6 = var10.background;
                var4.style = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var11 = {};
                var15 = 12;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var11.uri = var15;
                var5.source = var11;
                var11 = var10.background;
                var5.style = var11;
                var11 = 'cover';
                var5.resizeMode = var11;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var10.container;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var16 = 0;
                if (var14) {
                    _fun86483_ip = 377;
                    continue _fun86483
                }
            case 364:
                var18 = var13.left;
                var17 = _closure1_slot12;
                var16 = var18 + var17;
            case 377:
                var11.paddingLeft = var16;
                var16 = 0;
                if (var14) {
                    _fun86483_ip = 400;
                    continue _fun86483
                }
            case 387:
                var18 = var13.right;
                var17 = _closure1_slot12;
                var16 = var18 + var17;
            case 400:
                var11.paddingRight = var16;
                var15 = 0;
                if (var14) {
                    _fun86483_ip = 450;
                    continue _fun86483
                }
            case 410:
                var17 = var13.bottom;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 6;
                var16 = var19[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_96;
                var15 = var17 + var16;
            case 450:
                var11.paddingBottom = var15;
                var16 = var13.top;
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 6;
                var13 = var17[var13];
                var13 = var15.bind(var3)(var13);
                var15 = var13.spacing;
                if (var8) {
                    _fun86483_ip = 500;
                    continue _fun86483
                }
            case 488:
                var13 = var15.PX_64;
                var13 = var16 + var13;
                _fun86483_ip = 510;
                continue _fun86483;
            case 500:
                var15 = var15.PX_40;
                var13 = var16 + var15;
            case 510:
                var11.paddingTop = var13;
                var10[1] = var11;
                var5.style = var10;
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                if (var8) {
                    _fun86483_ip = 575;
                    continue _fun86483
                }
            case 538:
                var8 = 14;
                var8 = var13[var8];
                var8 = var10.bind(var3)(var8);
                var9 = var8.CheckpointModalContent;
                var8 = {};
                var8.allowFullscreen = var14;
                var8.children = var12;
                var8 = var11.bind(var3)(var9, var8);
                _fun86483_ip = 605;
                continue _fun86483;
            case 575:
                var9 = 13;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.ModalContent;
                var9 = {};
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 605:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11134, 9123, 660, 33, 671, 1297, 4855, 5323, 566, 4057, 11139, 6401, 11140, 2]);