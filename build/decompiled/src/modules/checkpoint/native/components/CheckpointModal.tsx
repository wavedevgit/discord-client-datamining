// modules/checkpoint/native/components/CheckpointModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: getScreenProps, environment: var1
        var0 = {
            'headerShown': false,
            'presentation': 'transparentModal'
        };
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.CardStyleInterpolators;
        var1 = var1.forFadeFromBottomAndroid;
        var0.cardStyleInterpolator = var1;
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: getStepName, environment: var1
        var1 = _closure1_slot14;
        var0 = arg0;
        var1 = var1[var0];
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: CheckpointColorContextSlideProvider, environment: var1
        var0 = arg0;
        var7 = var0.slide;
        var4 = var0.children;
        var5 = _closure1_slot27;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 16;
        var2 = var6[var2];
        var3 = undefined;
        var10 = var1.bind(var3)(var2);
        var9 = var10.useStateFromStores;
        var2 = _closure1_slot10;
        var8 = new Array(1);
        var8[0] = var2;
        var2 = function() { // Environment: var2
            var1 = _closure1_slot10;
            var0 = var1.getCheckpointData;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var9.bind(var10)(var8, var2);
        var2 = var2.cardId;
        var5 = var5.bind(var3)(var7, var2);
        var2 = _closure1_slot18;
        var0 = 17;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.CheckpointColorContext;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: useColors, environment: var1
        var4 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun86384: for (var _fun86384_ip = 0;;) switch (_fun86384_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var7 = 28;
                    var0 = var0[var7];
                    var6 = undefined;
                    var0 = var1.bind(var6)(var0);
                    var1 = var0.CHECKPOINT_PERSONA_COLORS;
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun86384_ip = 56;
                        continue _fun86384
                    }
                case 44:
                    var0 = _closure1_slot12;
                    var0 = var0.ONE;
                    _fun86384_ip = 60;
                    continue _fun86384;
                case 56:
                    var0 = _closure2_slot1;
                case 60:
                    var2 = var1[var0];
                    var5 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.END;
                    var0 = var2;
                    if (!(var5 !== var1)) {
                        _fun86384_ip = 143;
                        continue _fun86384
                    }
                case 85:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.CHECKPOINT_SLIDE_COLORS;
                    var3 = _closure2_slot0;
                    var8 = var4[var3];
                    var9 = var1;
                    var3 = copyDataProperties(var9, var8);
                    var3 = var2.backgroundOverlayColor;
                    var2 = 'backgroundOverlayColor';
                    var1[var2] = var3;
                    var0 = var1;
                case 143:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: CheckpointModal, environment: var1
        _fun86385: for (var _fun86385_ip = 0;;) switch (_fun86385_ip) {
            case 0:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 29;
                var0 = var7[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var _closure2_slot0 = var0;
                var1 = 30;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var36 = var1.bind(var3)(var0);
                var1 = _closure1_slot21;
                var25 = var1.bind(var3)();
                var1 = 31;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var24 = var1.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var6 = 0;
                var4 = var1.bind(var2)(var6);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var3)(var4, var1);
                var5 = var1[var6];
                var _closure2_slot1 = var5;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot2 = var1;
                var4 = _closure1_slot0;
                var1 = 32;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useNavigation;
                var7 = var1.bind(var4)();
                var _closure2_slot3 = var7;
                var19 = var0[var5];
                var _closure2_slot4 = var19;
                var1 = _closure1_slot11;
                var38 = var1[var19];
                var1 = var0.length;
                var1 = var1 - var2;
                var1 = var0[var1];
                var29 = var19 === var1;
                var _closure2_slot5 = var29;
                var1 = _closure1_slot14;
                var1 = var1.WELCOME;
                var20 = var19 === var1;
                var _closure2_slot6 = var20;
                var21 = !var29;
                var18 = var21;
                if (var29) {
                    _fun86385_ip = 232;
                    continue _fun86385
                }
            case 218:
                var1 = _closure1_slot14;
                var1 = var1.END_REWARD;
                var18 = var19 !== var1;
            case 232:
                var4 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 33;
                var2 = var17[var1];
                var8 = var4.bind(var3)(var2);
                var2 = 34;
                var2 = var17[var2];
                var2 = var4.bind(var3)(var2);
                var9 = var8.bind(var3)(var2);
                var _closure2_slot7 = var9;
                var2 = var17[var1];
                var8 = var4.bind(var3)(var2);
                var2 = 35;
                var2 = var17[var2];
                var2 = var4.bind(var3)(var2);
                var8 = var8.bind(var3)(var2);
                var _closure2_slot8 = var8;
                var1 = var17[var1];
                var2 = var4.bind(var3)(var1);
                var1 = 36;
                var1 = var17[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var2.bind(var3)(var1);
                var _closure2_slot9 = var1;
                var4 = _closure1_slot5;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var6);
                var _closure2_slot10 = var2;
                var6 = _closure1_slot5;
                var4 = var6.useCallback;
                var2 = new Array(4);
                var2[0] = var19;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var1;
                var1 = function(arg0) { // Environment: var22
                    _fun86386: for (var _fun86386_ip = 0;;) switch (_fun86386_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot14;
                            var1 = var1.END_CLAIM;
                            if (!(var2 !== var1)) {
                                _fun86386_ip = 85;
                                continue _fun86386
                            }
                        case 20:
                            var1 = _closure1_slot14;
                            var1 = var1.END_SUMMARY;
                            if (!(var2 !== var1)) {
                                _fun86386_ip = 70;
                                continue _fun86386
                            }
                        case 34:
                            var3 = _closure1_slot15;
                            var2 = var3.has;
                            var1 = _closure2_slot4;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun86386_ip = 98;
                                continue _fun86386
                            }
                        case 58:
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun86386_ip = 98;
                            continue _fun86386;
                        case 70:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun86386_ip = 98;
                            continue _fun86386;
                        case 85:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var1, var2);
                var _closure2_slot11 = var6;
                var8 = _closure1_slot5;
                var4 = var8.useCallback;
                var2 = new Array(5);
                var2[0] = var29;
                var2[1] = var7;
                var2[2] = var5;
                var2[3] = var0;
                var2[4] = var6;
                var1 = function() { // Environment: var22
                    _fun86387: for (var _fun86387_ip = 0;;) switch (_fun86387_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = 500;
                            var3 = var2 + var0;
                            var0 = global;
                            var4 = var0.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            if (!(!(var3 > var2))) {
                                _fun86387_ip = 203;
                                continue _fun86387
                            }
                        case 46:
                            var2 = _closure2_slot10;
                            var3 = var0.Date;
                            var0 = var3.now;
                            var0 = var0.bind(var3)();
                            var2.current = var0;
                            var2 = _closure2_slot5;
                            var0 = null;
                            var7 = null;
                            if (var2) {
                                _fun86387_ip = 101;
                                continue _fun86387
                            }
                        case 82:
                            var3 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var2 = 1;
                            var2 = var4 + var2;
                            var7 = var3[var2];
                        case 101:
                            if (!(var0 == var7)) {
                                _fun86387_ip = 142;
                                continue _fun86387
                            }
                        case 105:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 37;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var0 = var2.pop;
                            var0 = var0.bind(var2)();
                            _fun86387_ip = 203;
                            continue _fun86387;
                        case 142:
                            var5 = _closure2_slot11;
                            var3 = _closure2_slot1;
                            var0 = 1;
                            var4 = var3 + var0;
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var6 = _closure2_slot3;
                            var5 = var6.navigate;
                            var4 = _closure1_slot11;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var1 = _closure2_slot2;
                            var0 = var3 + var0;
                            var0 = var1.bind(var2)(var0);
                        case 203:
                            var0 = undefined;
                            return var0;
                    }
                };
                var27 = var4.bind(var8)(var1, var2);
                var _closure2_slot12 = var27;
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(5);
                var1[0] = var20;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var0;
                var0 = function() { // Environment: var22
                    _fun86388: for (var _fun86388_ip = 0;;) switch (_fun86388_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (var0) {
                                _fun86388_ip = 151;
                                continue _fun86388
                            }
                        case 13:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = 500;
                            var3 = var2 + var0;
                            var0 = global;
                            var4 = var0.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            if (!(!(var3 > var2))) {
                                _fun86388_ip = 151;
                                continue _fun86388
                            }
                        case 53:
                            var2 = _closure2_slot10;
                            var3 = var0.Date;
                            var0 = var3.now;
                            var0 = var0.bind(var3)();
                            var2.current = var0;
                            var5 = _closure2_slot11;
                            var3 = _closure2_slot1;
                            var0 = 1;
                            var4 = var3 - var0;
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var5 = _closure2_slot0;
                            var4 = var3 - var0;
                            var7 = var5[var4];
                            var6 = _closure2_slot3;
                            var5 = var6.navigate;
                            var4 = _closure1_slot11;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var1 = _closure2_slot2;
                            var0 = var3 - var0;
                            var0 = var1.bind(var2)(var0);
                        case 151:
                            var0 = undefined;
                            return var0;
                    }
                };
                var35 = var2.bind(var4)(var0, var1);
                var _closure2_slot13 = var35;
                var0 = function(arg0, arg1, arg2) { // Original name: useScreens, environment: var22
                    var6 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var4;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useNavigatorScreens;
                    var1 = new Array(3);
                    var1[0] = var6;
                    var1[1] = var5;
                    var1[2] = var4;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var2 = _closure1_slot13;
                        var7 = var2.WELCOME;
                        var2 = {};
                        var6 = _closure1_slot24;
                        var5 = undefined;
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var4 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.WELCOME;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 19;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var4 = 'render';
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.MESSAGES;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.MESSAGES;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 20;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.EMOJIS;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.EMOJIS;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 21;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.VOICE;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.VOICE;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 22;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.GUILDS;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.GUILDS;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 23;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.FRIENDS;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.FRIENDS;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 24;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var8 = _closure3_slot0;
                            var4.step = var8;
                            var8 = _closure3_slot1;
                            var4.onNextStep = var8;
                            var7 = _closure3_slot2;
                            var4.onPreviousStep = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.GAMING;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.GAMING;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 25;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var2 = _closure1_slot13;
                        var7 = var2.QUESTS;
                        var2 = {};
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var8 = copyDataProperties(var10, var9);
                        var8 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.QUESTS;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 26;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2[var4] = var8;
                        var0[var7] = var2;
                        var1 = _closure1_slot13;
                        var2 = var1.END;
                        var1 = {};
                        var9 = var6.bind(var5)();
                        var10 = var1;
                        var5 = copyDataProperties(var10, var9);
                        var3 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot18;
                            var2 = _closure1_slot26;
                            var1 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.END;
                            var1.slide = var4;
                            var6 = _closure1_slot18;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 27;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var8 = _closure3_slot0;
                            var4.step = var8;
                            var7 = _closure3_slot1;
                            var4.onNext = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1[var4] = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var16 = var0.bind(var3)(var19, var27, var35);
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var0 = _closure1_slot14;
                var0 = var0.WELCOME;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot14 = var0;
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var0 = null;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot15 = var0;
                var14 = _closure1_slot0;
                var0 = 16;
                var0 = var17[var0];
                var4 = var14.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var1 = _closure1_slot10;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot16 = var0;
                var1 = _closure1_slot27;
                var0 = var0.cardId;
                var4 = var1.bind(var3)(var38, var0);
                var30 = var4.primaryColor;
                var5 = _closure1_slot5;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var19;
                var0 = function() { // Environment: var22
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot16;
                    var2 = var1.CHECKPOINT_SCREENSHOT_TAKEN;
                    var1 = {};
                    var6 = _closure1_slot25;
                    var5 = _closure2_slot4;
                    var5 = var6.bind(var0)(var5);
                    var1.step_name = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var _closure2_slot17 = var0;
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var19;
                var1 = function() { // Environment: var22
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 38;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot16;
                    var4 = var2.CHECKPOINT_STEP_VIEWED;
                    var3 = {};
                    var7 = _closure1_slot25;
                    var2 = _closure2_slot4;
                    var7 = var7.bind(var0)(var2);
                    var3.step_name = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot14;
                    var1.current = var2;
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var2);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var2 = function() { // Environment: var22
                    var0 = function() { // Environment: var0
                        _fun86404: for (var _fun86404_ip = 0;;) switch (_fun86404_ip) {
                            case 0:
                                var0 = _closure2_slot14;
                                var1 = var0.current;
                                var0 = _closure1_slot14;
                                var0 = var0.END_SUMMARY;
                                if (!(var1 === var0)) {
                                    _fun86404_ip = 90;
                                    continue _fun86404
                                }
                            case 29:
                                var1 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 39;
                                var0 = var7[var0];
                                var4 = undefined;
                                var2 = var1.bind(var4)(var0);
                                var1 = var2.fireSurveyAction;
                                var3 = _closure1_slot0;
                                var0 = 40;
                                var0 = var7[var0];
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.SurveyActionTypes;
                                var0 = var0.CHECKPOINT_COMPLETED;
                                var0 = var1.bind(var2)(var0);
                            case 90:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 38;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot16;
                                var2 = var1.CHECKPOINT_CLOSED;
                                var1 = {};
                                var6 = _closure1_slot25;
                                var5 = _closure2_slot14;
                                var5 = var5.current;
                                var5 = var6.bind(var0)(var5);
                                var1.step_name = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var2, var1);
                var5 = _closure1_slot5;
                var2 = var5.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var1 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var3 = var4.addListener;
                    var2 = _closure2_slot17;
                    var0 = 'screenshotTaken';
                    var0 = var3.bind(var4)(var0, var2);
                    var1.current = var0;
                    var0 = function() { // Environment: var0
                        _fun86406: for (var _fun86406_ip = 0;;) switch (_fun86406_ip) {
                            case 0:
                                var1 = _closure2_slot15;
                                var3 = var1.current;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun86406_ip = 28;
                                    continue _fun86406
                                }
                            case 18:
                                var2 = var3.remove;
                                var2 = var2.bind(var3)();
                            case 28:
                                var0 = _closure2_slot15;
                                var0.current = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var5 = _closure1_slot5;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var27;
                var1[1] = var35;
                var0 = function() { // Environment: var22
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 41;
                    var0 = var8[var0];
                    var6 = undefined;
                    var0 = var7.bind(var6)(var0);
                    var1 = var0.Gesture;
                    var0 = var1.Pan;
                    var2 = var0.bind(var1)();
                    var1 = var2.onEnd;
                    var0 = function(arg0) { // Original name: t, environment: var0
                        _fun86408: for (var _fun86408_ip = 0;;) switch (_fun86408_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.translationX;
                                var1 = 50;
                                if (!(!(var2 > var1))) {
                                    _fun86408_ip = 80;
                                    continue _fun86408
                                }
                            case 16:
                                var1 = var0.translationX;
                                var0 = -50;
                                if (!(var1 < var0)) {
                                    _fun86408_ip = 126;
                                    continue _fun86408
                                }
                            case 32:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 42;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot12;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                                _fun86408_ip = 126;
                                continue _fun86408;
                            case 80:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 42;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot13;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 126:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = {};
                    var5 = 50;
                    var4.SWIPE_DISTANCE = var5;
                    var5 = 42;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.runOnJS;
                    var4.runOnJS = var5;
                    var6 = _closure2_slot13;
                    var4.handlePrevious = var6;
                    var5 = _closure2_slot12;
                    var4.handleNext = var5;
                    var0.__closure = var4;
                    var4 = 12321771151540.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot23;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot18;
                var0 = 17;
                var0 = var17[var0];
                var0 = var14.bind(var3)(var0);
                var0 = var0.CheckpointColorContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot18;
                var4 = 43;
                var4 = var17[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.ThemeContextProvider;
                var4 = {};
                var7 = _closure1_slot17;
                var7 = var7.DARK;
                var4.theme = var7;
                var9 = _closure1_slot18;
                var7 = 41;
                var7 = var17[var7];
                var7 = var14.bind(var3)(var7);
                var8 = var7.GestureDetector;
                var7 = {};
                var7.gesture = var10;
                var12 = _closure1_slot19;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var25.container;
                var10.style = var13;
                var15 = _closure1_slot18;
                var13 = 44;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Modal;
                var13 = {
                    'useContainer': false,
                    'cardOverlayEnabled': false,
                    'cardShadowEnabled': false,
                    'hideTitle': true
                };
                var28 = true;
                var13.screens = var16;
                var16 = _closure1_slot13;
                var16 = var16.WELCOME;
                var13.initialRouteName = var16;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(4);
                var13[0] = var14;
                var23 = !var20;
                var14 = var23;
                if (var20) {
                    _fun86385_ip = 1215;
                    continue _fun86385
                }
            case 990:
                var17 = _closure1_slot19;
                var16 = _closure1_slot6;
                var15 = {};
                var32 = var25.logoContainer;
                var31 = new Array(2);
                var31[0] = var32;
                var32 = {};
                var33 = var24.top;
                var32.marginTop = var33;
                var31[1] = var32;
                var15.style = var31;
                var33 = _closure1_slot18;
                var32 = _closure1_slot7;
                var31 = {};
                var41 = _closure1_slot1;
                var42 = _closure1_slot2;
                var34 = 45;
                var34 = var42[var34];
                var34 = var41.bind(var3)(var34);
                var31.source = var34;
                var34 = var25.logo;
                var31.style = var34;
                var31.tintColor = var30;
                var32 = var33.bind(var3)(var32, var31);
                var31 = new Array(2);
                var31[0] = var32;
                var34 = _closure1_slot18;
                var32 = 46;
                var32 = var42[var32];
                var33 = var41.bind(var3)(var32);
                var32 = {};
                var37 = 'display-sm';
                var32.variant = var37;
                var39 = var25.logoText;
                var37 = new Array(1);
                var37[0] = var39;
                var32.style = var37;
                var39 = _closure1_slot0;
                var37 = 47;
                var37 = var42[var37];
                var37 = var39.bind(var3)(var37);
                var40 = var37.intl;
                var39 = var40.string;
                var37 = 48;
                var37 = var42[var37];
                var37 = var41.bind(var3)(var37);
                var37 = var37["CdU/PF"];
                var37 = var39.bind(var40)(var37);
                var32.children = var37;
                var32 = var34.bind(var3)(var33, var32);
                var31[1] = var32;
                var15.children = var31;
                var14 = var17.bind(var3)(var16, var15);
            case 1215:
                var13[1] = var14;
                var16 = _closure1_slot19;
                var15 = _closure1_slot6;
                var14 = {};
                var31 = var25.headerActions;
                var17 = new Array(2);
                var17[0] = var31;
                var31 = {};
                var32 = var24.right;
                var31.marginRight = var32;
                var32 = var24.top;
                var31.marginTop = var32;
                var17[1] = var31;
                var14.style = var17;
                var32 = _closure1_slot18;
                var39 = _closure1_slot1;
                var37 = _closure1_slot2;
                var17 = 49;
                var17 = var37[var17];
                var31 = var39.bind(var3)(var17);
                var17 = {};
                var31 = var32.bind(var3)(var31, var17);
                var17 = new Array(2);
                var17[0] = var31;
                var34 = _closure1_slot18;
                var41 = _closure1_slot0;
                var31 = 50;
                var31 = var37[var31];
                var31 = var41.bind(var3)(var31);
                var33 = var31.HeaderActionButton;
                var31 = {};
                var32 = 51;
                var32 = var37[var32];
                var32 = var39.bind(var3)(var32);
                var31.source = var32;
                var32 = 37;
                var32 = var37[var32];
                var32 = var39.bind(var3)(var32);
                var32 = var32.pop;
                var31.onPress = var32;
                var32 = 47;
                var39 = var37[var32];
                var39 = var41.bind(var3)(var39);
                var40 = var39.intl;
                var39 = var40.string;
                var37 = var37[var32];
                var37 = var41.bind(var3)(var37);
                var37 = var37.t;
                var37 = var37.cpT0Cq;
                var37 = var39.bind(var40)(var37);
                var31.accessibilityLabel = var37;
                var37 = {};
                var37.tintColor = var30;
                var31.imageStyle = var37;
                var37 = var25.closeButton;
                var31.style = var37;
                var31 = var34.bind(var3)(var33, var31);
                var17[1] = var31;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var16 = _closure1_slot19;
                var15 = _closure1_slot6;
                var14 = {};
                var17 = var25.footer;
                var14.style = var17;
                var31 = var23;
                if (var20) {
                    _fun86385_ip = 1682;
                    continue _fun86385
                }
            case 1504:
                var34 = _closure1_slot18;
                var37 = _closure1_slot0;
                var40 = _closure1_slot2;
                var17 = 52;
                var17 = var40[var17];
                var17 = var37.bind(var3)(var17);
                var33 = var17.PressableOpacity;
                var17 = {};
                var39 = var40[var32];
                var39 = var37.bind(var3)(var39);
                var42 = var39.intl;
                var41 = var42.string;
                var39 = var40[var32];
                var39 = var37.bind(var3)(var39);
                var39 = var39.t;
                var39 = var39["13/7kX"];
                var39 = var41.bind(var42)(var39);
                var17.accessibilityLabel = var39;
                var41 = var25.backButton;
                var39 = new Array(2);
                var39[0] = var41;
                var41 = {};
                var42 = var24.left;
                var41.marginLeft = var42;
                var42 = var24.bottom;
                var41.marginBottom = var42;
                var39[1] = var41;
                var17.style = var39;
                var17.onPress = var35;
                var39 = _closure1_slot18;
                var35 = 53;
                var35 = var40[var35];
                var35 = var37.bind(var3)(var35);
                var37 = var35.ArrowLargeLeftIcon;
                var35 = {};
                var40 = {};
                var40.tintColor = var30;
                var35.style = var40;
                var35 = var39.bind(var3)(var37, var35);
                var17.children = var35;
                var31 = var34.bind(var3)(var33, var17);
            case 1682:
                var17 = new Array(5);
                var17[0] = var31;
                if (var29) {
                    _fun86385_ip = 1696;
                    continue _fun86385
                }
            case 1693:
                var21 = var23;
            case 1696:
                if (!var21) {
                    _fun86385_ip = 1844;
                    continue _fun86385
                }
            case 1702:
                var31 = _closure1_slot18;
                var29 = _closure1_slot6;
                var23 = {};
                var34 = var25.stepContainer;
                var33 = new Array(2);
                var33[0] = var34;
                var34 = {};
                var35 = var24.bottom;
                var34.marginBottom = var35;
                var33[1] = var34;
                var23.style = var33;
                var35 = _closure1_slot18;
                var34 = _closure1_slot0;
                var37 = _closure1_slot2;
                var33 = 54;
                var33 = var37[var33];
                var33 = var34.bind(var3)(var33);
                var34 = var33.ModalStepIndicator;
                var33 = {};
                var37 = var36.indexOf;
                var37 = var37.bind(var36)(var38);
                var33.currentStep = var37;
                var36 = var36.length;
                var33.totalSteps = var36;
                var33.activeColor = var30;
                var33.inactiveColor = var30;
                var36 = 0.4;
                var33.inactiveOpacity = var36;
                var33 = var35.bind(var3)(var34, var33);
                var23.children = var33;
                var21 = var31.bind(var3)(var29, var23);
            case 1844:
                var17[1] = var21;
                if (!var20) {
                    _fun86385_ip = 2012;
                    continue _fun86385
                }
            case 1854:
                var29 = _closure1_slot18;
                var23 = _closure1_slot6;
                var21 = {};
                var33 = var25.musicAttribution;
                var31 = new Array(2);
                var31[0] = var33;
                var33 = {};
                var34 = var24.bottom;
                var33.marginBottom = var34;
                var31[1] = var33;
                var21.style = var31;
                var34 = _closure1_slot18;
                var36 = _closure1_slot1;
                var39 = _closure1_slot2;
                var31 = 46;
                var31 = var39[var31];
                var33 = var36.bind(var3)(var31);
                var31 = {};
                var35 = 'text-md/semibold';
                var31.variant = var35;
                var37 = _closure1_slot0;
                var35 = var39[var32];
                var35 = var37.bind(var3)(var35);
                var38 = var35.intl;
                var37 = var38.format;
                var35 = 48;
                var35 = var39[var35];
                var35 = var36.bind(var3)(var35);
                var36 = var35.g476ZL;
                var35 = {};
                var39 = 'Exyl';
                var35.name = var39;
                var35 = var37.bind(var38)(var36, var35);
                var31.children = var35;
                var31 = var34.bind(var3)(var33, var31);
                var21.children = var31;
                var20 = var29.bind(var3)(var23, var21);
            case 2012:
                var17[2] = var20;
                if (!var18) {
                    _fun86385_ip = 2203;
                    continue _fun86385
                }
            case 2022:
                var23 = _closure1_slot18;
                var21 = _closure1_slot1;
                var31 = _closure1_slot2;
                var20 = 55;
                var20 = var31[var20];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var20.muteSound = var28;
                var28 = _closure1_slot0;
                var29 = var31[var32];
                var29 = var28.bind(var3)(var29);
                var34 = var29.intl;
                var33 = var34.string;
                var29 = var31[var32];
                var29 = var28.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.PDTjLN;
                var29 = var33.bind(var34)(var29);
                var20.accessibilityLabel = var29;
                var33 = var25.nextButton;
                var29 = new Array(2);
                var29[0] = var33;
                var33 = {};
                var34 = var24.right;
                var33.marginRight = var34;
                var34 = var24.bottom;
                var33.marginBottom = var34;
                var29[1] = var33;
                var20.style = var29;
                var20.onPress = var27;
                var29 = _closure1_slot18;
                var27 = 56;
                var27 = var31[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.ArrowLargeRightIcon;
                var27 = {};
                var31 = {};
                var31.tintColor = var30;
                var27.style = var31;
                var27 = var29.bind(var3)(var28, var27);
                var20.children = var27;
                var18 = var23.bind(var3)(var21, var20);
            case 2203:
                var17[3] = var18;
                var18 = _closure1_slot14;
                var18 = var18.END_SUMMARY;
                var18 = var19 === var18;
                if (!var18) {
                    _fun86385_ip = 2494;
                    continue _fun86385
                }
            case 2227:
                var21 = _closure1_slot18;
                var27 = _closure1_slot1;
                var29 = _closure1_slot2;
                var19 = 55;
                var19 = var29[var19];
                var20 = var27.bind(var3)(var19);
                var19 = {};
                var22 = function() { // Original name: onPress, environment: var22
                    var2 = _closure1_slot9;
                    var0 = {};
                    var1 = '';
                    var0.content = var1;
                    var3 = {};
                    var1 = 20;
                    var3.type = var1;
                    var1 = {};
                    var5 = _closure2_slot16;
                    var5 = var5.cardId;
                    var1.cardId = var5;
                    var3.checkpointData = var1;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var0.components = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var6 = var0;
                    var0 = new var7[var2](var6, var5);
                    var5 = var0 instanceof Object ? var0 : var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openForwardModal;
                    var1 = {};
                    var1.message = var5;
                    var5 = 'checkpoint';
                    var1.source = var5;
                    var4 = _closure1_slot22;
                    var1.customSendHandler = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var19.onPress = var22;
                var23 = var25.nextButton;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = {};
                var28 = var24.right;
                var23.marginRight = var28;
                var24 = var24.bottom;
                var23.marginBottom = var24;
                var22[1] = var23;
                var19.style = var22;
                var24 = _closure1_slot19;
                var23 = _closure1_slot6;
                var22 = {};
                var25 = var25.shareButton;
                var22.style = var25;
                var31 = _closure1_slot18;
                var25 = 46;
                var25 = var29[var25];
                var28 = var27.bind(var3)(var25);
                var25 = {};
                var27 = 'eyebrow';
                var25.variant = var27;
                var27 = _closure1_slot0;
                var33 = var29[var32];
                var33 = var27.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var32 = var29[var32];
                var32 = var27.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.RDE0Sc;
                var32 = var33.bind(var34)(var32);
                var25.children = var32;
                var28 = var31.bind(var3)(var28, var25);
                var25 = new Array(2);
                var25[0] = var28;
                var28 = _closure1_slot18;
                var26 = 57;
                var26 = var29[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.LinkExternalSmallIcon;
                var26 = {};
                var29 = {};
                var29.tintColor = var30;
                var26.style = var29;
                var29 = 'xs';
                var26.size = var29;
                var26 = var28.bind(var3)(var27, var26);
                var25[1] = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 2494:
                var17[4] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 2;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.View;
    var _closure1_slot6 = var3;
    var3 = var6.Image;
    var _closure1_slot7 = var3;
    var3 = var6.NativeModules;
    var7 = var6.NativeEventEmitter;
    var6 = var6.ActivityIndicator;
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.CHECKPOINT_STEPS_TO_SLIDE;
    var _closure1_slot11 = var8;
    var8 = var6.CheckpointPersonas;
    var _closure1_slot12 = var8;
    var8 = var6.CheckpointSlides;
    var _closure1_slot13 = var8;
    var8 = var6.CheckpointSteps;
    var _closure1_slot14 = var8;
    var6 = var6.SILENT_STEPS;
    var _closure1_slot15 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot16 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot17 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot18 = var8;
    var6 = var6.jsxs;
    var _closure1_slot19 = var6;
    var18 = var3.ScreenshotHelper;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var19 = var6;
    var3 = new var19[var7](var18, var17);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot20 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 11;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var8.backgroundColor = var13;
    var3.loader = var8;
    var8 = {};
    var13 = '100%';
    var8.height = var13;
    var3.container = var8;
    var8 = {
        'top': null,
        'right': null,
        'position': 'absolute',
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'flexGrow': 0
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var13 = -var13;
    var8.top = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var8.right = var13;
    var13 = 'absolute';
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_40;
    var8.gap = var14;
    var3.headerActions = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var8.borderRadius = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.padding = var14;
    var8.flexGrow = var11;
    var3.closeButton = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.left = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var3.logoContainer = var8;
    var8 = {
        'width': 28,
        'height': 28
    };
    var3.logo = var8;
    var8 = {
        'textTransform': 'uppercase',
        'lineHeight': 32
    };
    var3.logoText = var8;
    var8 = {
        'height': null,
        'bottom': 0,
        'width': '100%',
        'position': 'absolute'
    };
    var11 = 12;
    var14 = var5[var11];
    var14 = var4.bind(var0)(var14);
    var14 = var14.NAV_BAR_HEIGHT;
    var8.height = var14;
    var3.footer = var8;
    var8 = {
        'width': '100%',
        'alignItems': 'center'
    };
    var3.stepContainer = var8;
    var8 = {};
    var8.position = var13;
    var14 = var5[var11];
    var14 = var4.bind(var0)(var14);
    var14 = var14.NAV_BAR_HEIGHT;
    var15 = var14 / var12;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var14 = var15 - var14;
    var8.bottom = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.left = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.padding = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var8.borderRadius = var14;
    var3.backButton = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'alignItems': 'center'
    };
    var14 = var5[var11];
    var14 = var4.bind(var0)(var14);
    var14 = var14.NAV_BAR_HEIGHT;
    var15 = var14 / var12;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var14 = var15 - var14;
    var8.bottom = var14;
    var3.musicAttribution = var8;
    var8 = {};
    var8.position = var13;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var12 = var11 / var12;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var11 = var12 - var11;
    var8.bottom = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.right = var11;
    var3.nextButton = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.gap = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.shareButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun86412: for (var _fun86412_ip = 0;;) switch (_fun86412_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86412_ip = 126;
                            continue _fun86412
                        }
                    case 7:
                        var1 = arg1;
                        var2 = var1.withMessage;
                        var3 = undefined;
                        SaveGenerator(address = 22);
                    case 20:
                        return var3;
                    case 22:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun86412_ip = 123;
                            continue _fun86412
                        }
                    case 28:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 14;
                        var5 = var7[var5];
                        var8 = var6.bind(var3)(var5);
                        var7 = var8.sendCheckpointMessage;
                        var6 = {};
                        var6.withMessage = var2;
                        var5 = arg0;
                        var2 = arg2;
                        var2 = var7.bind(var8)(var5, var6, var2);
                        SaveGenerator(address = 81);
                    case 79:
                        return var2;
                    case 81:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86412_ip = 120;
                            continue _fun86412
                        }
                    case 87:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 15;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.closeForwardModal;
                        var4 = var4.bind(var5)();
                        return var3;
                    case 120:
                        return var2;
                    case 123:
                        return var1;
                    case 126:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = 'function CheckpointModalTsx1(event){const{SWIPE_DISTANCE,runOnJS,handlePrevious,handleNext}=this.__closure;if(event.translationX>SWIPE_DISTANCE){runOnJS(handlePrevious)();}else if(event.translationX<-SWIPE_DISTANCE){runOnJS(handleNext)();}}';
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = 59;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointLoaderWrapper, environment: var1
        _fun86414: for (var _fun86414_ip = 0;;) switch (_fun86414_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 58;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = _closure1_slot21;
                var5 = var2.bind(var4)();
                var3 = _closure1_slot18;
                if (var0) {
                    _fun86414_ip = 88;
                    continue _fun86414
                }
            case 44:
                var2 = _closure1_slot6;
                var0 = {};
                var5 = var5.loader;
                var0.style = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot8;
                var5 = {};
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun86414_ip = 100;
                continue _fun86414;
            case 88:
                var2 = _closure1_slot28;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 100:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 3060, 11134, 9123, 660, 483, 33, 1297, 671, 4665, 5749, 11135, 8838, 566, 11136, 5747, 11137, 11152, 11158, 11173, 11175, 11176, 11179, 11180, 11182, 9122, 11185, 11186, 1568, 1469, 11146, 11187, 11147, 11188, 4524, 795, 11189, 11196, 4923, 3679, 3118, 7465, 10408, 11143, 1234, 2267, 11197, 5283, 5284, 4864, 4668, 11199, 11145, 11200, 6393, 11201, 2]);