// modules/checkpoint/native/components/screens/CheckpointMessagesScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CheckpointSlides;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden'
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_40;
    var8.gap = var11;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.title = var8;
    var8 = {};
    var11 = 800;
    var8.fontWeight = var11;
    var3.titleText = var8;
    var8 = {
        'flexGrow': 1,
        'display': 'flex',
        'justifyContent': 'center'
    };
    var3.imageContainer = var8;
    var8 = {
        'height': '100%',
        'aspectRatio': 0.75
    };
    var3.image = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.knickKnacks = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/screens/CheckpointMessagesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointMessagesScreen, environment: var1
        _fun86526: for (var _fun86526_ip = 0;;) switch (_fun86526_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var1 = _closure1_slot5;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.messages;
                if (!(var3 === var0)) {
                    _fun86526_ip = 106;
                    continue _fun86526
                }
            case 75:
                var1 = {
                    'numMessagesSent': 0,
                    'numMessagesSentPercentile': 0
                };
                var4 = 0;
                var2 = {};
                var2.month = var4;
                var1.topMonth = var2;
                var0 = var1;
            case 106:
                var21 = var0.numMessagesSent;
                var24 = var0.numMessagesSentPercentile;
                var0 = var0.topMonth;
                var6 = var0.month;
                var5 = _closure1_slot3;
                var2 = var5.useContext;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var0 = var2.bind(var5)(var0);
                var2 = 9;
                var2 = var4[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useToken;
                var0 = var0.primaryColor;
                var23 = var2.bind(var5)(var0);
                var0 = 10;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useCheckpointPercentileAltData;
                var19 = 11;
                var0 = var4[var19];
                var0 = var1.bind(var3)(var0);
                var0 = var0.intl;
                var0 = var0.currentLocale;
                var0 = var2.bind(var5)(var6, var0);
                var25 = var0.monthName;
                var0 = 12;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsScreenLandscape;
                var13 = var0.bind(var1)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot6;
                var4 = var4.MESSAGES;
                var0.slide = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var16.container;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var9 = 'column';
                if (!var13) {
                    _fun86526_ip = 348;
                    continue _fun86526
                }
            case 344:
                var9 = 'row';
            case 348:
                var8.flexDirection = var9;
                var7[1] = var8;
                var4.style = var7;
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var16.imageContainer;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var12 = '50%';
                if (!var13) {
                    _fun86526_ip = 401;
                    continue _fun86526
                }
            case 395:
                var12 = '100%';
            case 401:
                var11.height = var12;
                var10[1] = var11;
                var7.style = var10;
                var14 = _closure1_slot7;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 14;
                var10 = var17[var10];
                var11 = var13.bind(var3)(var10);
                var10 = {};
                var12 = 15;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var10.uri = var12;
                var12 = var16.image;
                var10.style = var12;
                var10 = var14.bind(var3)(var11, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = {};
                var12 = var16.title;
                var11.style = var12;
                var27 = _closure1_slot0;
                var12 = 16;
                var12 = var17[var12];
                var12 = var27.bind(var3)(var12);
                var18 = var12.ChatIcon;
                var12 = {};
                var20 = 'xs';
                var12.size = var20;
                var20 = {};
                var20.tintColor = var23;
                var12.style = var20;
                var12 = var14.bind(var3)(var18, var12);
                var18 = new Array(2);
                var18[0] = var12;
                var12 = 17;
                var20 = var17[var12];
                var26 = var13.bind(var3)(var20);
                var20 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var23 = var16.titleText;
                var20.style = var23;
                var23 = var17[var19];
                var23 = var27.bind(var3)(var23);
                var30 = var23.intl;
                var29 = var30.format;
                var23 = 18;
                var27 = var17[var23];
                var27 = var13.bind(var3)(var27);
                var28 = var27.nPTMHj;
                var27 = {};
                var27.numMessages = var21;
                var27 = var29.bind(var30)(var28, var27);
                var20.children = var27;
                var20 = var14.bind(var3)(var26, var20);
                var18[1] = var20;
                var11.children = var18;
                var18 = var10.bind(var3)(var9, var11);
                var11 = new Array(4);
                var11[0] = var18;
                var18 = 19;
                var18 = var17[var18];
                var20 = var13.bind(var3)(var18);
                var18 = {};
                var18.end = var21;
                var18 = var14.bind(var3)(var20, var18);
                var11[1] = var18;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 3
                };
                var17 = null;
                if (!(var17 == var24)) {
                    _fun86526_ip = 823;
                    continue _fun86526
                }
            case 748:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var19];
                var18 = var20.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.format;
                var18 = _closure1_slot1;
                var17 = var17[var23];
                var17 = var18.bind(var3)(var17);
                var18 = var17["Zd+Ej+"];
                var17 = {};
                var17.month = var25;
                var25 = function(arg0, arg1) { // Original name: monthHook, environment: var22
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var17.monthHook = var25;
                var17 = var20.bind(var21)(var18, var17);
                _fun86526_ip = 903;
                continue _fun86526;
            case 823:
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var19];
                var19 = var20.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.format;
                var19 = _closure1_slot1;
                var18 = var18[var23];
                var18 = var19.bind(var3)(var18);
                var19 = var18.ixvOza;
                var18 = {};
                var23 = 100;
                var23 = var23 - var24;
                var18.percent = var23;
                var22 = function(arg0, arg1) { // Original name: percentHook, environment: var22
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = true;
                    var1.forcePosition = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var18.percentHook = var22;
                var17 = var20.bind(var21)(var19, var18);
            case 903:
                var12.children = var17;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 21;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = var16.knickKnacks;
                var12.style = var16;
                var15 = _closure1_slot6;
                var15 = var15.MESSAGES;
                var12.slide = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11134, 9123, 33, 1297, 671, 566, 11136, 3110, 6809, 1234, 5323, 11138, 11141, 11153, 4800, 11143, 2267, 11154, 11157, 11150, 2]);