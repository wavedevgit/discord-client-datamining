// modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function() { // Original name: VibingWumpusScreen, environment: var3
        _fun72333: for (var _fun72333_ip = 0;;) switch (_fun72333_ip) {
            case 0:
                var0 = _closure1_slot15;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var16 = var1[var0];
                var _closure2_slot0 = var16;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot1 = var0;
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var0 = null;
                var11 = var1.bind(var2)(var0);
                var _closure2_slot2 = var11;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 10;
                var0 = var18[var0];
                var4 = var15.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var17
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var13 = var2.bind(var4)(var1, var0);
                var _closure2_slot3 = var13;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var17
                    var1 = global;
                    var1 = var1.Date;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var8 = var2;
                    var1 = new var8[var1](var7);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.playVibingWumpusMusic;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = 12;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.VIBING_WUMPUS_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.INAPPROPRIATE_CONVERSATION;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = function() { // Environment: var0
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 12;
                        var2 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var2);
                        var5 = var6.track;
                        var2 = _closure1_slot11;
                        var4 = var2.VIBING_WUMPUS_CLOSED;
                        var2 = {};
                        var7 = global;
                        var7 = var7.Date;
                        var8 = var7.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = var8;
                        var7 = new var12[var7](var11);
                        var8 = var7 instanceof Object ? var7 : var8;
                        var7 = var8.getTime;
                        var8 = var7.bind(var8)();
                        var9 = _closure3_slot0;
                        var7 = var9.getTime;
                        var7 = var7.bind(var9)();
                        var7 = var8 - var7;
                        var2.duration_open_ms = var7;
                        var7 = _closure1_slot10;
                        var7 = var7.INAPPROPRIATE_CONVERSATION;
                        var2.source = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = _closure1_slot0;
                        var1 = 11;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.stopVibingWumpusMusic;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = _closure1_slot1;
                var7 = 13;
                var7 = var18[var7];
                var7 = var9.bind(var3)(var7);
                var4.source = var7;
                var7 = var12.rings;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var12.container;
                var5.style = var8;
                var10 = _closure1_slot12;
                var8 = 14;
                var8 = var18[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var14 = 15;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var8.source = var14;
                var8.ref = var11;
                var11 = !var13;
                var8.autoPlay = var11;
                var11 = true;
                var8.loop = var11;
                var11 = var12.wumpus;
                var8.style = var11;
                var11 = undefined;
                if (!var13) {
                    _fun72333_ip = 326;
                    continue _fun72333
                }
            case 316:
                var11 = 0.8;
            case 326:
                var8.progress = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot13;
                var10 = _closure1_slot6;
                var9 = {};
                var13 = var12.warningText;
                var9.style = var13;
                var21 = _closure1_slot12;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 16;
                var13 = var18[var15];
                var13 = var14.bind(var3)(var13);
                var20 = var13.Text;
                var13 = {
                    'variant': 'heading-xl/semibold',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var22 = var12.takeoverHeader;
                var13.style = var22;
                var23 = 17;
                var22 = var18[var23];
                var22 = var14.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var18[var23];
                var22 = var14.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.L4ifkZ;
                var22 = var24.bind(var25)(var22);
                var13.children = var22;
                var20 = var21.bind(var3)(var20, var13);
                var13 = new Array(2);
                var13[0] = var20;
                var21 = _closure1_slot12;
                var15 = var18[var15];
                var15 = var14.bind(var3)(var15);
                var20 = var15.Text;
                var15 = {};
                var22 = 'text-md/medium';
                var15.variant = var22;
                var22 = var12.takeoverDescription;
                var15.style = var22;
                var22 = var18[var23];
                var22 = var14.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var18[var23];
                var22 = var14.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.R8LCMZ;
                var22 = var24.bind(var25)(var22);
                var15.children = var22;
                var15 = var21.bind(var3)(var20, var15);
                var13[1] = var15;
                var9.children = var13;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot13;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var12.ctaContainer;
                var9.style = var12;
                var20 = _closure1_slot12;
                var13 = 18;
                var12 = var18[var13];
                var12 = var14.bind(var3)(var12);
                var15 = var12.Button;
                var12 = {
                    'variant': 'primary',
                    'size': 'lg',
                    'text': null,
                    'grow': true
                };
                var21 = var18[var23];
                var21 = var14.bind(var3)(var21);
                var24 = var21.intl;
                var22 = var24.string;
                var21 = var18[var23];
                var21 = var14.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["8eKkaf"];
                var21 = var22.bind(var24)(var21);
                var12.text = var21;
                var21 = function() { // Original name: onPress, environment: var17
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 12;
                    var2 = var4[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot11;
                    var5 = var2.VIBING_WUMPUS_ACTION;
                    var2 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.BACK_TO_CONVERSATION;
                    var2.action = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = 19;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.popWithKey;
                    var1 = _closure1_slot8;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12.onPress = var21;
                var15 = var20.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = _closure1_slot12;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Button;
                var13 = {
                    'variant': 'tertiary',
                    'size': 'lg',
                    'text': null,
                    'grow': true
                };
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var21 = var18[var23];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var18[var23];
                var18 = var20.bind(var3)(var18);
                var20 = var18.t;
                if (var16) {
                    _fun72333_ip = 822;
                    continue _fun72333
                }
            case 809:
                var18 = var20.ZcgDJX;
                var18 = var21.bind(var22)(var18);
                _fun72333_ip = 833;
                continue _fun72333;
            case 822:
                var20 = var20.RscU7I;
                var18 = var21.bind(var22)(var20);
            case 833:
                var13.text = var18;
                var17 = function() { // Original name: onPress, environment: var17
                    _fun72338: for (var _fun72338_ip = 0;;) switch (_fun72338_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var3 = var4[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            if (var2) {
                                _fun72338_ip = 100;
                                continue _fun72338
                            }
                        case 35:
                            var2 = var3.pauseVibingWumpusMusic;
                            var2 = var2.bind(var3)();
                            var5 = _closure1_slot1;
                            var2 = 12;
                            var2 = var4[var2];
                            var8 = var5.bind(var0)(var2);
                            var7 = var8.track;
                            var2 = _closure1_slot11;
                            var5 = var2.VIBING_WUMPUS_ACTION;
                            var2 = {};
                            var9 = _closure1_slot9;
                            var9 = var9.PAUSE;
                            var2.action = var9;
                            var2 = var7.bind(var8)(var5, var2);
                            _fun72338_ip = 163;
                            continue _fun72338;
                        case 100:
                            var2 = var3.playVibingWumpusMusic;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot1;
                            var2 = 12;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot11;
                            var3 = var2.VIBING_WUMPUS_ACTION;
                            var2 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.PLAY;
                            var2.action = var6;
                            var2 = var4.bind(var5)(var3, var2);
                        case 163:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun72338_ip = 204;
                                continue _fun72338
                            }
                        case 170:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun72338_ip = 204;
                                continue _fun72338
                            }
                        case 177:
                            var2 = _closure2_slot2;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72338_ip = 243;
                                continue _fun72338
                            }
                        case 192:
                            var2 = var3.resume;
                            var2 = var2.bind(var3)();
                            _fun72338_ip = 243;
                            continue _fun72338;
                        case 204:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun72338_ip = 243;
                                continue _fun72338
                            }
                        case 211:
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun72338_ip = 243;
                                continue _fun72338
                            }
                        case 218:
                            var2 = _closure2_slot2;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72338_ip = 243;
                                continue _fun72338
                            }
                        case 233:
                            var2 = var3.pause;
                            var2 = var2.bind(var3)();
                        case 243:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var13.onPress = var17;
                var18 = _closure1_slot12;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                if (var16) {
                    _fun72333_ip = 885;
                    continue _fun72333
                }
            case 865:
                var16 = 21;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var17 = var16.PauseIcon;
                _fun72333_ip = 903;
                continue _fun72333;
            case 885:
                var16 = 20;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var17 = var16.PlayIcon;
            case 903:
                var16 = {};
                var20 = 'md';
                var16.size = var20;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 9;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.colors;
                var19 = var19.REDESIGN_BUTTON_TERTIARY_TEXT;
                var16.color = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.icon = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = var12.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.VIBING_WUMPUS_MODAL_KEY;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.VibingWumpusAction;
    var _closure1_slot9 = var7;
    var4 = var4.VibingWumpusSource;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': null,
        'gap': null,
        'height': '100%'
    };
    var10 = 'center';
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9.padding = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.gap = var13;
    var4.container = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginBottom = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var4.warningText = var9;
    var9 = {
        'display': 'flex',
        'alignItems': 'center',
        'alignSelf': 'stretch'
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.gap = var11;
    var4.ctaContainer = var9;
    var9 = {};
    var9.textAlign = var10;
    var4.takeoverHeader = var9;
    var9 = {};
    var9.textAlign = var10;
    var4.takeoverDescription = var9;
    var9 = {};
    var10 = 187;
    var9.height = var10;
    var4.wumpus = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': 440,
        'top': 120
    };
    var4.rings = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: VibingWumpusModal, environment: var3
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 22;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var4 = {};
        var5 = {
            'title': '',
            'fullscreen': true,
            'headerShown': false
        };
        var6 = function() { // Original name: render, environment: var6
            var3 = _closure1_slot12;
            var2 = _closure1_slot16;
            var1 = undefined;
            var0 = {};
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var5.render = var6;
        var4.VIBING_WUMPUS = var5;
        var0.screens = var4;
        var4 = 'VIBING_WUMPUS';
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.VibingWumpusScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 9005, 9020, 660, 33, 1297, 671, 632, 9021, 795, 9022, 6560, 9023, 4838, 1234, 4043, 4524, 5832, 8811, 5747, 2]);