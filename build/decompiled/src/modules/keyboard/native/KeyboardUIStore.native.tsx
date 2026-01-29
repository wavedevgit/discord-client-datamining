// modules/keyboard/native/KeyboardUIStore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16931: for (var _fun16931_ip = 0;;) switch (_fun16931_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function(arg0, arg1, arg2) { // Original name: getCustomKeyboardHeight, environment: var1
                _fun16932: for (var _fun16932_ip = 0;;) switch (_fun16932_ip) {
                    case 0:
                        var9 = arg0;
                        var3 = arg2;
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var8 = 4;
                        var0 = var0[var8];
                        var4 = undefined;
                        var0 = var1.bind(var4)(var0);
                        var6 = var0.Storage;
                        var5 = var6.get;
                        var0 = _closure1_slot6;
                        var1 = 253;
                        var0 = var5.bind(var6)(var0, var1);
                        var5 = null;
                        var5 = var5 != var0;
                        if (!var5) {
                            _fun16932_ip = 67;
                            continue _fun16932
                        }
                    case 64:
                        var1 = var0;
                    case 67:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 5;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.KeyboardTypes;
                        var5 = var0.SYSTEM;
                        var0 = arg1;
                        if (!(var0 === var5)) {
                            _fun16932_ip = 222;
                            continue _fun16932
                        }
                    case 106:
                        var5 = 0;
                        if (!(var5 !== var9)) {
                            _fun16932_ip = 222;
                            continue _fun16932
                        }
                    case 112:
                        var0 = global;
                        var7 = var0.Math;
                        var6 = var7.max;
                        var0 = 200;
                        var0 = var6.bind(var7)(var9, var0);
                        if (!(var0 !== var1)) {
                            _fun16932_ip = 176;
                            continue _fun16932
                        }
                    case 138:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var6 = var7.bind(var4)(var6);
                        var8 = var6.Storage;
                        var7 = var8.set;
                        var6 = _closure1_slot6;
                        var6 = var7.bind(var8)(var6, var0);
                    case 176:
                        var5 = 0;
                        if (!var3) {
                            _fun16932_ip = 216;
                            continue _fun16932
                        }
                    case 181:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.getSafeAreaInsets;
                        var6 = var6.bind(var7)();
                        var5 = var6.bottom;
                    case 216:
                        var0 = var0 - var5;
                        return var0;
                    case 222:
                        var0 = 0;
                        if (!var3) {
                            _fun16932_ip = 262;
                            continue _fun16932
                        }
                    case 227:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getSafeAreaInsets;
                        var2 = var2.bind(var3)();
                        var0 = var2.bottom;
                    case 262:
                        var0 = var1 - var0;
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = function(arg0) { // Original name: getSystemKeyboardHeight, environment: var1
                _fun16933: for (var _fun16933_ip = 0;;) switch (_fun16933_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.keyboardHeight;
                        var3 = var0.excludeSafeAreaInsets;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 7;
                        var0 = var4[var0];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.isAndroid;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun16933_ip = 105;
                            continue _fun16933
                        }
                    case 53:
                        var0 = 0;
                        if (!(var0 !== var5)) {
                            _fun16933_ip = 103;
                            continue _fun16933
                        }
                    case 59:
                        var2 = 0;
                        if (!var3) {
                            _fun16933_ip = 99;
                            continue _fun16933
                        }
                    case 64:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.getSafeAreaInsets;
                        var6 = var6.bind(var7)();
                        var2 = var6.bottom;
                    case 99:
                        var0 = var5 - var2;
                    case 103:
                        _fun16933_ip = 136;
                        continue _fun16933;
                    case 105:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.getImeInsets;
                        var0 = var1.bind(var2)(var3);
                    case 136:
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function(arg0) { // Original name: updateSystemKeyboardStoreState, environment: var1
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.setState;
                    var0 = function(arg0) { // Environment: var0
                        _fun16936: for (var _fun16936_ip = 0;;) switch (_fun16936_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = _closure2_slot0;
                                var9 = var1.keyboardDuration;
                                var11 = null;
                                if (!(var11 == var9)) {
                                    _fun16936_ip = 28;
                                    continue _fun16936
                                }
                            case 22:
                                var9 = var0.keyboardDuration;
                            case 28:
                                var3 = _closure1_slot11;
                                var2 = {};
                                var4 = _closure2_slot0;
                                var4 = var4.keyboardHeight;
                                if (!(var11 == var4)) {
                                    _fun16936_ip = 57;
                                    continue _fun16936
                                }
                            case 51:
                                var4 = var0.keyboardHeight;
                            case 57:
                                var2.keyboardHeight = var4;
                                var16 = false;
                                var2.excludeSafeAreaInsets = var16;
                                var12 = undefined;
                                var8 = var3.bind(var12)(var2);
                                var3 = _closure1_slot11;
                                var2 = {};
                                var4 = _closure2_slot0;
                                var4 = var4.keyboardHeight;
                                if (!(var11 == var4)) {
                                    _fun16936_ip = 102;
                                    continue _fun16936
                                }
                            case 96:
                                var4 = var0.keyboardHeight;
                            case 102:
                                var2.keyboardHeight = var4;
                                var10 = true;
                                var2.excludeSafeAreaInsets = var10;
                                var7 = var3.bind(var12)(var2);
                                var2 = _closure2_slot0;
                                var2 = var2.keyboardType;
                                var3 = var11 == var2;
                                var5 = undefined;
                                if (var3) {
                                    _fun16936_ip = 143;
                                    continue _fun16936
                                }
                            case 138:
                                var5 = var2.type;
                            case 143:
                                if (!(var11 == var5)) {
                                    _fun16936_ip = 153;
                                    continue _fun16936
                                }
                            case 147:
                                var5 = var0.keyboardType;
                            case 153:
                                var2 = var0.keyboardType;
                                if (!(var5 === var2)) {
                                    _fun16936_ip = 171;
                                    continue _fun16936
                                }
                            case 163:
                                var4 = var0.keyboardTypePrevious;
                                _fun16936_ip = 177;
                                continue _fun16936;
                            case 171:
                                var4 = var0.keyboardType;
                            case 177:
                                var2 = _closure1_slot10;
                                var3 = var2.bind(var12)(var8, var5, var16);
                                var2 = var2.bind(var12)(var8, var5, var10);
                                var10 = var0.keyboardContexts;
                                var15 = var10[var5];
                                var10 = _closure2_slot0;
                                var13 = var10.keyboardType;
                                var14 = var11 == var13;
                                var10 = undefined;
                                if (var14) {
                                    _fun16936_ip = 229;
                                    continue _fun16936
                                }
                            case 224:
                                var10 = var13.context;
                            case 229:
                                var13 = var15;
                                if (!(var11 != var10)) {
                                    _fun16936_ip = 239;
                                    continue _fun16936
                                }
                            case 236:
                                var13 = var10;
                            case 239:
                                var14 = 'object';
                                var10 = typeof var15;
                                if (!(var14 === var10)) {
                                    _fun16936_ip = 257;
                                    continue _fun16936
                                }
                            case 250:
                                var10 = typeof var13;
                                if (!(var14 !== var10)) {
                                    _fun16936_ip = 263;
                                    continue _fun16936
                                }
                            case 257:
                                var10 = var15 !== var13;
                                _fun16936_ip = 292;
                                continue _fun16936;
                            case 263:
                                var17 = _closure1_slot1;
                                var18 = _closure1_slot2;
                                var14 = 10;
                                var14 = var18[var14];
                                var14 = var17.bind(var12)(var14);
                                var14 = var14.bind(var12)(var15, var13);
                                var10 = !var14;
                            case 292:
                                var6 = _closure2_slot0;
                                var6 = var6.systemKeyboardOpen;
                                if (!(var11 == var6)) {
                                    _fun16936_ip = 312;
                                    continue _fun16936
                                }
                            case 306:
                                var6 = var0.systemKeyboardOpen;
                            case 312:
                                if (!var6) {
                                    _fun16936_ip = 366;
                                    continue _fun16936
                                }
                            case 315:
                                var14 = var0.keyboardContexts;
                                var15 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var19 = 5;
                                var11 = var11[var19];
                                var11 = var15.bind(var12)(var11);
                                var11 = var11.KeyboardTypes;
                                var11 = var11.SYSTEM;
                                var11 = var14[var11];
                                var11 = var11.keyboardWillOpen;
                                if (var11) {
                                    _fun16936_ip = 402;
                                    continue _fun16936
                                }
                            case 366:
                                var14 = var0.keyboardContexts;
                                if (var10) {
                                    _fun16936_ip = 380;
                                    continue _fun16936
                                }
                            case 375:
                                var10 = var14;
                                _fun16936_ip = 400;
                                continue _fun16936;
                            case 380:
                                var11 = {};
                                var22 = var11;
                                var21 = var14;
                                var14 = copyDataProperties(var22, var21);
                                var11[var5] = var13;
                                var10 = var11;
                            case 400:
                                _fun16936_ip = 503;
                                continue _fun16936;
                            case 402:
                                var11 = {};
                                var21 = var0.keyboardContexts;
                                var22 = var11;
                                var13 = copyDataProperties(var22, var21);
                                var18 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var13 = var15[var19];
                                var13 = var18.bind(var12)(var13);
                                var13 = var13.KeyboardTypes;
                                var14 = var13.SYSTEM;
                                var13 = {};
                                var17 = var0.keyboardContexts;
                                var15 = var15[var19];
                                var15 = var18.bind(var12)(var15);
                                var15 = var15.KeyboardTypes;
                                var15 = var15.SYSTEM;
                                var21 = var17[var15];
                                var22 = var13;
                                var15 = copyDataProperties(var22, var21);
                                var15 = 'keyboardWillOpen';
                                var13[var15] = var16;
                                var11[var14] = var13;
                                var10 = var11;
                            case 503:
                                var11 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var1 = 10;
                                var1 = var13[var1];
                                var11 = var11.bind(var12)(var1);
                                var1 = var0.keyboardContexts;
                                var1 = var11.bind(var12)(var1, var10);
                                var1 = !var1;
                                var11 = var0.keyboardDuration;
                                if (!(var11 === var9)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 548:
                                if (var1) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 551:
                                var1 = var0.keyboardHeight;
                                if (!(var1 === var8)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 561:
                                var1 = var0.keyboardHeightExcludingSafeAreaInsets;
                                if (!(var1 === var7)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 571:
                                var1 = var0.keyboardType;
                                if (!(var1 === var5)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 581:
                                var1 = var0.customKeyboardHeight;
                                if (!(var1 === var3)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 591:
                                var1 = var0.customKeyboardHeightExcludingSafeAreaInsets;
                                if (!(var1 === var2)) {
                                    _fun16936_ip = 611;
                                    continue _fun16936
                                }
                            case 601:
                                var1 = var0.systemKeyboardOpen;
                                if (!(var1 !== var6)) {
                                    _fun16936_ip = 661;
                                    continue _fun16936
                                }
                            case 611:
                                var1 = {};
                                var1.keyboardContexts = var10;
                                var1.keyboardDuration = var9;
                                var1.keyboardHeight = var8;
                                var1.keyboardHeightExcludingSafeAreaInsets = var7;
                                var1.systemKeyboardOpen = var6;
                                var1.keyboardType = var5;
                                var1.keyboardTypePrevious = var4;
                                var1.customKeyboardHeight = var3;
                                var1.customKeyboardHeightExcludingSafeAreaInsets = var2;
                                var0 = var1;
                            case 661:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot12 = var0;
            var3 = global;
            var9 = var3.Object;
            var8 = var9.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var4);
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var10 = var4.Keyboard;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.AppLauncherRouteName;
            var _closure1_slot3 = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.ExpressionPickerViewType;
            var _closure1_slot4 = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.MediaKeyboardTarget;
            var _closure1_slot5 = var4;
            var4 = 'customKeyboardHeight';
            var _closure1_slot6 = var4;
            var4 = var3.Set;
            var8 = var4.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var4
                }
            });
            var15 = var8;
            var4 = new var15[var4](var14);
            var4 = var4 instanceof Object ? var4 : var8;
            var _closure1_slot7 = var4;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var15 = var4;
            var3 = new var15[var3](var14);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot8 = var3;
            var3 = 7;
            var4 = var6[var3];
            var8 = var5.bind(var0)(var4);
            var4 = var8.isAndroid;
            var4 = var4.bind(var8)();
            var11 = 'keyboardWillShow';
            if (!var4) {
                _fun16931_ip = 275;
                continue _fun16931
            }
        case 269:
            var11 = 'keyboardDidShow';
        case 275:
            var3 = var6[var3];
            var4 = var5.bind(var0)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            var9 = 'keyboardWillHide';
            if (!var3) {
                _fun16931_ip = 309;
                continue _fun16931
            }
        case 303:
            var9 = 'keyboardDidHide';
        case 309:
            var3 = 11;
            var3 = var6[var3];
            var8 = var5.bind(var0)(var3);
            var4 = var8.create;
            var3 = function() { // Environment: var1
                var0 = {};
                var10 = _closure1_slot10;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var5 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var5);
                var5 = var5.KeyboardTypes;
                var8 = var5.SYSTEM;
                var7 = 0;
                var5 = false;
                var8 = var10.bind(var2)(var7, var8, var5);
                var0.customKeyboardHeight = var8;
                var8 = var4[var1];
                var8 = var3.bind(var2)(var8);
                var8 = var8.KeyboardTypes;
                var9 = var8.SYSTEM;
                var8 = true;
                var8 = var10.bind(var2)(var7, var9, var8);
                var0.customKeyboardHeightExcludingSafeAreaInsets = var8;
                var8 = {};
                var9 = var4[var1];
                var9 = var3.bind(var2)(var9);
                var9 = var9.KeyboardTypes;
                var10 = var9.SYSTEM;
                var9 = {};
                var9.keyboardWillOpen = var5;
                var8[var10] = var9;
                var9 = var4[var1];
                var9 = var3.bind(var2)(var9);
                var9 = var9.KeyboardTypes;
                var10 = var9.EXPRESSION;
                var9 = _closure1_slot4;
                var9 = var9.EMOJI;
                var8[var10] = var9;
                var9 = var4[var1];
                var9 = var3.bind(var2)(var9);
                var9 = var9.KeyboardTypes;
                var10 = var9.MEDIA;
                var9 = {};
                var11 = _closure1_slot5;
                var11 = var11.CHAT;
                var9.target = var11;
                var8[var10] = var9;
                var9 = var4[var1];
                var9 = var3.bind(var2)(var9);
                var9 = var9.KeyboardTypes;
                var10 = var9.APP_LAUNCHER;
                var9 = {};
                var11 = _closure1_slot3;
                var11 = var11.HOME;
                var9.initialRouteName = var11;
                var8[var10] = var9;
                var0.keyboardContexts = var8;
                var0.keyboardDuration = var7;
                var7 = _closure1_slot11;
                var6 = {
                    'keyboardHeight': 0,
                    'excludeSafeAreaInsets': false
                };
                var6 = var7.bind(var2)(var6);
                var0.keyboardHeight = var6;
                var6 = {
                    'keyboardHeight': 0,
                    'excludeSafeAreaInsets': true
                };
                var6 = var7.bind(var2)(var6);
                var0.keyboardHeightExcludingSafeAreaInsets = var6;
                var0.systemKeyboardOpen = var5;
                var5 = var4[var1];
                var5 = var3.bind(var2)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                var0.keyboardType = var5;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.SYSTEM;
                var0.keyboardTypePrevious = var1;
                return var0;
            };
            var3 = var4.bind(var8)(var3);
            var _closure1_slot9 = var3;
            var8 = var10.addListener;
            var4 = function(arg0) { // Environment: var1
                var0 = arg0;
                var4 = var0.duration;
                var0 = var0.endCoordinates;
                var6 = var0.height;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 12;
                var2 = var5[var0];
                var0 = undefined;
                var7 = var3.bind(var0)(var2);
                var3 = var7.reactNativeKeyboardDidShow;
                var2 = 'KeyboardUIStore';
                var2 = var3.bind(var7)(var6, var2);
                var3 = _closure1_slot12;
                var2 = {};
                var2.keyboardHeight = var6;
                var2.keyboardDuration = var4;
                var4 = true;
                var2.systemKeyboardOpen = var4;
                var2 = var3.bind(var0)(var2);
                var3 = _closure1_slot0;
                var2 = 13;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.onKeyboardChanged;
                var2 = var2.bind(var3)(var4);
                var3 = _closure1_slot8;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var4 = var8.bind(var10)(var11, var4);
            var8 = var10.addListener;
            var4 = function() { // Environment: var1
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 12;
                var2 = var5[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.reactNativeKeyboardDidHide;
                var2 = 'KeyboardUIStore';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot12;
                var4 = false;
                var2 = {
                    'keyboardHeight': 0,
                    'systemKeyboardOpen': false
                };
                var2 = var3.bind(var0)(var2);
                var3 = _closure1_slot0;
                var2 = 13;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.onKeyboardChanged;
                var2 = var2.bind(var3)(var4);
                var3 = _closure1_slot8;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var4 = var8.bind(var10)(var9, var4);
            var4 = 14;
            var4 = var6[var4];
            var7 = var7.bind(var0)(var4);
            var4 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.bottom;
                var2 = _closure1_slot12;
                var1 = {};
                var1.keyboardImeInsetBottom = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var4 = var7.bind(var0)(var4);
            var4 = 15;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var3 = function(arg0) { // Original name: setKeyboardType, environment: var1
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot7;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot8;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun16945: for (var _fun16945_ip = 0;;) switch (_fun16945_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = var1.type;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.KeyboardTypes;
                            var1 = var1.SYSTEM;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun16945_ip = 88;
                                continue _fun16945
                            }
                        case 56:
                            var0 = _closure2_slot0;
                            var0 = var0.context;
                            var3 = null;
                            var4 = var3 == var0;
                            var3 = undefined;
                            if (var4) {
                                _fun16945_ip = 82;
                                continue _fun16945
                            }
                        case 76:
                            var3 = var0.keyboardWillOpen;
                        case 82:
                            var0 = true;
                            var1 = var0 === var3;
                        case 88:
                            var0 = arg0;
                            var0 = var0.bind(var2)(var1);
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot12;
                var1 = {};
                var1.keyboardType = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2.setKeyboardType = var3;
            var3 = function(arg0) { // Original name: addKeyboardWillOpenChangedListener, environment: var1
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot8;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.delete;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var0;
            };
            var2.addKeyboardWillOpenChangedListener = var3;
            var1 = function(arg0) { // Original name: addKeyboardTypeChangedListener, environment: var1
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot7;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.delete;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var0;
            };
            var2.addKeyboardTypeChangedListener = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1468, 1565, 1566, 587, 1567, 1568, 478, 1580, 802, 628, 629, 1581, 1582, 1584, 2]);