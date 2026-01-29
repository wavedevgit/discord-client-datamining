// modules/checkpoint/native/components/screens/CheckpointVoiceScreen.tsx
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
        'height': '100%'
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
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.imageContainer = var8;
    var8 = {
        'height': '100%',
        'aspectRatio': 1
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
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/screens/CheckpointVoiceScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointVoiceScreen, environment: var1
        _fun86866: for (var _fun86866_ip = 0;;) switch (_fun86866_ip) {
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
                var0 = function() { // Environment: var23
                    var1 = _closure1_slot5;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.voice;
                if (!(var3 === var0)) {
                    _fun86866_ip = 106;
                    continue _fun86866
                }
            case 75:
                var1 = {
                    'totalVoiceMinutes': 0,
                    'totalVoiceMinutesPercentile': 0
                };
                var4 = 0;
                var2 = {};
                var2.month = var4;
                var1.topMonth = var2;
                var0 = var1;
            case 106:
                var2 = var0.totalVoiceMinutes;
                var25 = var0.totalVoiceMinutesPercentile;
                var0 = var0.topMonth;
                var7 = var0.month;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var5 = var4[var0];
                var6 = var1.bind(var3)(var5);
                var5 = var6.getDurationAndUnit;
                var5 = var5.bind(var6)(var2);
                var26 = var5.unit;
                var21 = var5.duration;
                var5 = 9;
                var5 = var4[var5];
                var5 = var1.bind(var3)(var5);
                var5 = var5.TimeUnits;
                var24 = var5.HOURS;
                var8 = _closure1_slot3;
                var6 = var8.useContext;
                var5 = 10;
                var5 = var4[var5];
                var5 = var1.bind(var3)(var5);
                var5 = var5.CheckpointColorContext;
                var5 = var6.bind(var8)(var5);
                var6 = 11;
                var6 = var4[var6];
                var8 = var1.bind(var3)(var6);
                var6 = var8.useToken;
                var5 = var5.primaryColor;
                var28 = var6.bind(var8)(var5);
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useCheckpointPercentileAltData;
                var18 = 12;
                var0 = var4[var18];
                var0 = var1.bind(var3)(var0);
                var0 = var0.intl;
                var0 = var0.currentLocale;
                var0 = var5.bind(var6)(var7, var0);
                var22 = var0.monthName;
                var0 = 0;
                var17 = var2 <= var0;
                var0 = 13;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsScreenLandscape;
                var13 = var0.bind(var1)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 14;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot6;
                var4 = var4.VOICE;
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
                    _fun86866_ip = 409;
                    continue _fun86866
                }
            case 405:
                var9 = 'row';
            case 409:
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
                    _fun86866_ip = 462;
                    continue _fun86866
                }
            case 456:
                var12 = '100%';
            case 462:
                var11.height = var12;
                var10[1] = var11;
                var7.style = var10;
                var20 = _closure1_slot7;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 15;
                var10 = var13[var10];
                var11 = var14.bind(var3)(var10);
                var10 = {};
                var12 = 16;
                var12 = var13[var12];
                var12 = var14.bind(var3)(var12);
                var10.uri = var12;
                var12 = var16.image;
                var10.style = var12;
                var10 = var20.bind(var3)(var11, var10);
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
                var19 = _closure1_slot0;
                var12 = 17;
                var12 = var13[var12];
                var12 = var19.bind(var3)(var12);
                var19 = var12.MicrophoneIcon;
                var12 = {};
                var27 = 'xs';
                var12.size = var27;
                var27 = {};
                var27.tintColor = var28;
                var12.style = var27;
                var19 = var20.bind(var3)(var19, var12);
                var12 = new Array(2);
                var12[0] = var19;
                var19 = 18;
                var13 = var13[var19];
                var14 = var14.bind(var3)(var13);
                var13 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var27 = var16.titleText;
                var13.style = var27;
                if (var17) {
                    _fun86866_ip = 806;
                    continue _fun86866
                }
            case 672:
                if (!(var26 !== var24)) {
                    _fun86866_ip = 742;
                    continue _fun86866
                }
            case 676:
                var26 = _closure1_slot0;
                var29 = _closure1_slot2;
                var24 = var29[var18];
                var24 = var26.bind(var3)(var24);
                var28 = var24.intl;
                var27 = var28.format;
                var26 = _closure1_slot1;
                var24 = 19;
                var24 = var29[var24];
                var24 = var26.bind(var3)(var24);
                var26 = var24.UZbUtl;
                var24 = {};
                var24.numMinutes = var21;
                var24 = var27.bind(var28)(var26, var24);
                _fun86866_ip = 804;
                continue _fun86866;
            case 742:
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = var30[var18];
                var26 = var27.bind(var3)(var26);
                var29 = var26.intl;
                var28 = var29.format;
                var27 = _closure1_slot1;
                var26 = 19;
                var26 = var30[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.Xu0QsX;
                var26 = {};
                var26.numHours = var21;
                var24 = var28.bind(var29)(var27, var26);
            case 804:
                _fun86866_ip = 862;
                continue _fun86866;
            case 806:
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = var30[var18];
                var26 = var27.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var29 = _closure1_slot1;
                var26 = 19;
                var26 = var30[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26["OBeYX/"];
                var24 = var27.bind(var28)(var26);
            case 862:
                var13.children = var24;
                var13 = var20.bind(var3)(var14, var13);
                var12[1] = var13;
                var11.children = var12;
                var12 = var10.bind(var3)(var9, var11);
                var11 = new Array(4);
                var11[0] = var12;
                var12 = !var17;
                if (var17) {
                    _fun86866_ip = 936;
                    continue _fun86866
                }
            case 900:
                var20 = _closure1_slot7;
                var14 = _closure1_slot1;
                var24 = _closure1_slot2;
                var13 = 20;
                var13 = var24[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.end = var21;
                var12 = var20.bind(var3)(var14, var13);
            case 936:
                var11[1] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var19];
                var13 = var13.bind(var3)(var12);
                var12 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 3
                };
                if (var17) {
                    _fun86866_ip = 1150;
                    continue _fun86866
                }
            case 981:
                var17 = null;
                if (!(var17 == var25)) {
                    _fun86866_ip = 1065;
                    continue _fun86866
                }
            case 987:
                var19 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = var24[var18];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var20 = var21.format;
                var19 = _closure1_slot1;
                var17 = 19;
                var17 = var24[var17];
                var17 = var19.bind(var3)(var17);
                var19 = var17.VaydtR;
                var17 = {};
                var17.month = var22;
                var22 = function(arg0, arg1) { // Original name: monthHook, environment: var23
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
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
                var17.monthHook = var22;
                var17 = var20.bind(var21)(var19, var17);
                _fun86866_ip = 1148;
                continue _fun86866;
            case 1065:
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = var24[var18];
                var19 = var20.bind(var3)(var19);
                var22 = var19.intl;
                var21 = var22.format;
                var20 = _closure1_slot1;
                var19 = 19;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19["36PZwu"];
                var19 = {};
                var24 = 100;
                var24 = var24 - var25;
                var19.percent = var24;
                var23 = function(arg0, arg1) { // Original name: percentHook, environment: var23
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
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
                var19.percentHook = var23;
                var17 = var21.bind(var22)(var20, var19);
            case 1148:
                _fun86866_ip = 1206;
                continue _fun86866;
            case 1150:
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var21 = _closure1_slot1;
                var18 = 19;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.MyO0sh;
                var17 = var19.bind(var20)(var18);
            case 1206:
                var12.children = var17;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 22;
                var12 = var17[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = var16.knickKnacks;
                var12.style = var16;
                var15 = _closure1_slot6;
                var15 = var15.VOICE;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11128, 9119, 33, 1297, 671, 566, 6806, 3486, 11130, 3110, 1234, 5319, 11132, 11135, 11168, 10737, 11137, 2267, 11148, 11151, 11144, 2]);