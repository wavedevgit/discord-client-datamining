// modules/voice_panel/native/VoicePanelController.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun110459: for (var _fun110459_ip = 0;;) switch (_fun110459_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110459_ip = 46;
                    continue _fun110459
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110459_ip = 55;
                    continue _fun110459
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110459_ip = 345;
                    continue _fun110459
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110459_ip = 323;
                    continue _fun110459
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110459_ip = 283;
                    continue _fun110459
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110459_ip = 270;
                    continue _fun110459
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun110459_ip = 163;
                    continue _fun110459
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110459_ip = 179;
                    continue _fun110459
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110459_ip = 249;
                    continue _fun110459
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110459_ip = 249;
                    continue _fun110459
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110459_ip = 234;
                    continue _fun110459
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110459_ip = 247;
                    continue _fun110459
                }
            case 234:
                var8 = _closure1_slot45;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110459_ip = 265;
                continue _fun110459;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110459_ip = 283;
                continue _fun110459;
            case 270:
                var6 = _closure1_slot45;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110459_ip = 323;
                    continue _fun110459
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun110459_ip = 330;
                    continue _fun110459
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110460: for (var _fun110460_ip = 0;;) switch (_fun110460_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110460_ip = 56;
                                continue _fun110460
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun110460_ip = 67;
                            continue _fun110460;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0, arg1() {
        _fun110461: for (var _fun110461_ip = 0;;) switch (_fun110461_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110461_ip = 23;
                    continue _fun110461
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110461_ip = 33;
                    continue _fun110461
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun110461_ip = 70;
                    continue _fun110461
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110461_ip = 55;
                    continue _fun110461
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        _fun110462: for (var _fun110462_ip = 0;;) switch (_fun110462_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.windowDimensions;
                var _closure2_slot0 = var8;
                var10 = var0.safeArea;
                var _closure2_slot1 = var10;
                var14 = var0.contentDimensions;
                var _closure2_slot2 = var14;
                var3 = var0.isConnected;
                var _closure2_slot3 = var3;
                var11 = var0.layoutManager;
                var _closure2_slot4 = var11;
                var6 = var0.items;
                var13 = var0.pushToTalk;
                var0 = undefined;
                var _closure2_slot13 = var0;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getWindowDimensions;
                    var0 = var0.bind(var1)();
                    var2 = var0.width;
                    var1 = var0.height;
                    var0 = {};
                    var0.width = var2;
                    var0.height = var1;
                    var1 = var2 > var1;
                    var0.landscape = var1;
                    return var0;
                };
                var5 = var5.bind(var7)(var4);
                var4 = _closure1_slot3;
                var18 = 2;
                var4 = var4.bind(var0)(var5, var18);
                var9 = 0;
                var7 = var4[var9];
                var _closure2_slot5 = var7;
                var5 = 1;
                var15 = var4[var5];
                var _closure2_slot6 = var15;
                var19 = _closure1_slot4;
                var17 = var19.useState;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 32;
                var4 = var16[var4];
                var20 = var12.bind(var0)(var4);
                var4 = var20.getSafeAreaInsets;
                var4 = var4.bind(var20)();
                var17 = var17.bind(var19)(var4);
                var4 = _closure1_slot3;
                var4 = var4.bind(var0)(var17, var18);
                var9 = var4[var9];
                var _closure2_slot7 = var9;
                var4 = var4[var5];
                var _closure2_slot8 = var4;
                var5 = 34;
                var5 = var16[var5];
                var12 = var12.bind(var0)(var5);
                var5 = var12.useManagerSubscription;
                var12 = var5.bind(var12)(var11);
                var _closure2_slot9 = var12;
                var17 = _closure1_slot4;
                var16 = var17.useRef;
                var5 = {};
                var18 = -1;
                var5.timeout = var18;
                var5.layoutKey = var12;
                var5.connected = var3;
                var5.windowState = var7;
                var5.safeAreaState = var9;
                var18 = {
                    'width': 0,
                    'height': 0
                };
                var5.contentDimensions = var18;
                var16 = var16.bind(var17)(var5);
                var _closure2_slot10 = var16;
                var5 = {};
                var5.isConnected = var3;
                var5.updateRefs = var16;
                var5.windowState = var7;
                var5.safeAreaState = var9;
                var5.setWindowState = var15;
                var5.setSafeAreaState = var4;
                var4 = function arg0() {
                    _fun110464: for (var _fun110464_ip = 0;;) switch (_fun110464_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.isConnected;
                            var1 = var2.updateRefs;
                            var _closure3_slot0 = var1;
                            var10 = var2.windowState;
                            var9 = var2.safeAreaState;
                            var4 = var2.setWindowState;
                            var2 = var2.setSafeAreaState;
                            var5 = var1.current;
                            var5 = var5.connected;
                            var5 = var3 === var5;
                            if (!var5) {
                                _fun110464_ip = 111;
                                continue _fun110464
                            }
                        case 63:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 22;
                            var7 = var7[var6];
                            var6 = undefined;
                            var8 = var8.bind(var6)(var7);
                            var7 = var8.cheapWorkletShallowEqual;
                            var6 = var1.current;
                            var6 = var6.windowState;
                            var5 = var7.bind(var8)(var6, var10);
                        case 111:
                            if (!var5) {
                                _fun110464_ip = 162;
                                continue _fun110464
                            }
                        case 114:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 22;
                            var7 = var7[var6];
                            var6 = undefined;
                            var8 = var8.bind(var6)(var7);
                            var7 = var8.cheapWorkletShallowEqual;
                            var6 = var1.current;
                            var6 = var6.safeAreaState;
                            var5 = var7.bind(var8)(var6, var9);
                        case 162:
                            if (var5) {
                                _fun110464_ip = 202;
                                continue _fun110464
                            }
                        case 165:
                            var1 = var1.current;
                            var1.connected = var3;
                            var1 = undefined;
                            var3 = function(arg0) { // Environment: var0
                                _fun110465: for (var _fun110465_ip = 0;;) switch (_fun110465_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 31;
                                        var1 = var6[var1];
                                        var4 = undefined;
                                        var2 = var5.bind(var4)(var1);
                                        var1 = var2.getWindowDimensions;
                                        var1 = var1.bind(var2)();
                                        var9 = var1.width;
                                        var8 = var1.height;
                                        var2 = _closure3_slot0;
                                        var7 = var2.current;
                                        var3 = {};
                                        var3.width = var9;
                                        var3.height = var8;
                                        var8 = var9 > var8;
                                        var3.landscape = var8;
                                        var7.windowState = var3;
                                        var3 = 22;
                                        var3 = var6[var3];
                                        var4 = var5.bind(var4)(var3);
                                        var3 = var4.cheapWorkletShallowEqual;
                                        var2 = var2.current;
                                        var2 = var2.windowState;
                                        var2 = var3.bind(var4)(var0, var2);
                                        if (var2) {
                                            _fun110465_ip = 138;
                                            continue _fun110465
                                        }
                                    case 123:
                                        var1 = _closure3_slot0;
                                        var1 = var1.current;
                                        var0 = var1.windowState;
                                    case 138:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var1)(var3);
                            var0 = function(arg0) { // Environment: var0
                                _fun110466: for (var _fun110466_ip = 0;;) switch (_fun110466_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure3_slot0;
                                        var7 = var2.current;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 32;
                                        var3 = var6[var3];
                                        var4 = undefined;
                                        var8 = var5.bind(var4)(var3);
                                        var3 = var8.getSafeAreaInsets;
                                        var3 = var3.bind(var8)();
                                        var7.safeAreaState = var3;
                                        var3 = 22;
                                        var3 = var6[var3];
                                        var4 = var5.bind(var4)(var3);
                                        var3 = var4.cheapWorkletShallowEqual;
                                        var2 = var2.current;
                                        var2 = var2.safeAreaState;
                                        var2 = var3.bind(var4)(var0, var2);
                                        if (var2) {
                                            _fun110466_ip = 109;
                                            continue _fun110466
                                        }
                                    case 94:
                                        var1 = _closure3_slot0;
                                        var1 = var1.current;
                                        var0 = var1.safeAreaState;
                                    case 109:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                        case 202:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var0)(var5);
                var16 = _closure1_slot4;
                var15 = var16.useCallback;
                var5 = function() { // Environment: var1
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var2 = _closure2_slot10;
                    var0 = var2.current;
                    var3 = var0.timeout;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var2 = var2.current;
                    var4 = var1.setTimeout;
                    var3 = function() { // Environment: var1
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot10;
                        var0 = var0.current;
                        var1 = var0.timeout;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 41;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.batchUpdates;
                        var1 = function() { // Environment: var1
                            var4 = _closure2_slot6;
                            var0 = undefined;
                            var3 = function(arg0) { // Environment: var1
                                _fun110470: for (var _fun110470_ip = 0;;) switch (_fun110470_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 22;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.cheapWorkletShallowEqual;
                                        var2 = _closure2_slot10;
                                        var2 = var2.current;
                                        var2 = var2.windowState;
                                        var2 = var3.bind(var4)(var2, var0);
                                        if (var2) {
                                            _fun110470_ip = 76;
                                            continue _fun110470
                                        }
                                    case 61:
                                        var1 = _closure2_slot10;
                                        var1 = var1.current;
                                        var0 = var1.windowState;
                                    case 76:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot8;
                            var1 = function(arg0) { // Environment: var1
                                _fun110471: for (var _fun110471_ip = 0;;) switch (_fun110471_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 22;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.cheapWorkletShallowEqual;
                                        var2 = _closure2_slot10;
                                        var2 = var2.current;
                                        var2 = var2.safeAreaState;
                                        var2 = var3.bind(var4)(var2, var0);
                                        if (var2) {
                                            _fun110471_ip = 76;
                                            continue _fun110471
                                        }
                                    case 61:
                                        var1 = _closure2_slot10;
                                        var1 = var1.current;
                                        var0 = var1.safeAreaState;
                                    case 76:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = 60;
                    var1 = var4.bind(var0)(var3, var1);
                    var2.timeout = var1;
                    return var0;
                };
                var4 = new Array(0);
                var4 = var15.bind(var16)(var5, var4);
                var _closure2_slot11 = var4;
                var17 = _closure1_slot4;
                var16 = var17.useLayoutEffect;
                var15 = new Array(1);
                var15[0] = var4;
                var5 = function() { // Environment: var1
                    var3 = function arg0() {
                        _fun110473: for (var _fun110473_ip = 0;;) switch (_fun110473_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var3 = var5.cheapWorkletShallowEqual;
                                var2 = _closure2_slot10;
                                var2 = var2.current;
                                var2 = var2.safeAreaState;
                                var2 = var3.bind(var5)(var2, var4);
                                if (var2) {
                                    _fun110473_ip = 96;
                                    continue _fun110473
                                }
                            case 61:
                                var2 = _closure2_slot10;
                                var3 = var2.current;
                                var2 = {};
                                var7 = var2;
                                var6 = var4;
                                var4 = copyDataProperties(var7, var6);
                                var3.safeAreaState = var2;
                                var1 = _closure2_slot11;
                                var1 = var1.bind(var0)();
                            case 96:
                                return var0;
                        }
                    };
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var6 = var5[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var6);
                    var6 = var6.bind(var2)(var3);
                    var _closure3_slot0 = var6;
                    var6 = _closure1_slot0;
                    var1 = 32;
                    var1 = var5[var1];
                    var6 = var6.bind(var2)(var1);
                    var1 = var6.getSafeAreaInsets;
                    var1 = var1.bind(var6)();
                    var1 = var3.bind(var2)(var1);
                    var1 = function() {
                        _fun110474: for (var _fun110474_ip = 0;;) switch (_fun110474_ip) {
                            case 0:
                                var1 = arguments[0];
                                var0 = undefined;
                                if (!(var1 === var0)) {
                                    _fun110474_ip = 42;
                                    continue _fun110474
                                }
                            case 9:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 31;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getWindowDimensions;
                                var1 = var2.bind(var3)();
                            case 42:
                                var2 = var1.width;
                                var1 = var1.height;
                                var3 = {};
                                var3.width = var2;
                                var3.height = var1;
                                var1 = var2 > var1;
                                var3.landscape = var1;
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 22;
                                var1 = var4[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.cheapWorkletShallowEqual;
                                var2 = _closure2_slot10;
                                var2 = var2.current;
                                var2 = var2.windowState;
                                var2 = var4.bind(var5)(var2, var3);
                                if (var2) {
                                    _fun110474_ip = 150;
                                    continue _fun110474
                                }
                            case 127:
                                var2 = _closure2_slot10;
                                var2 = var2.current;
                                var2.windowState = var3;
                                var1 = _closure2_slot11;
                                var1 = var1.bind(var0)();
                            case 150:
                                return var0;
                        }
                    };
                    var3 = 43;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.bind(var2)(var1);
                    var _closure3_slot1 = var3;
                    var1 = var1.bind(var2)();
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var5 = var16.bind(var17)(var5, var15);
                var15 = _closure1_slot4;
                var5 = var15.useId;
                var5 = var5.bind(var15)();
                var _closure2_slot12 = var5;
                var17 = _closure1_slot4;
                var16 = var17.useLayoutEffect;
                var15 = new Array(2);
                var15[0] = var3;
                var15[1] = var5;
                var5 = function() { // Environment: var1
                    _fun110476: for (var _fun110476_ip = 0;;) switch (_fun110476_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun110476_ip = 14;
                                continue _fun110476
                            }
                        case 10:
                            var0 = undefined;
                            return var0;
                        case 14:
                            var1 = _closure1_slot9;
                            var0 = var1.getState;
                            var2 = var0.bind(var1)();
                            var1 = var2.requestSafeAreaDisableLock;
                            var0 = {};
                            var3 = _closure2_slot12;
                            var0.key = var3;
                            var3 = true;
                            var0.lockEnabled = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot9;
                                var0 = var1.getState;
                                var2 = var0.bind(var1)();
                                var1 = var2.requestSafeAreaDisableLock;
                                var0 = {};
                                var3 = _closure2_slot12;
                                var0.key = var3;
                                var3 = false;
                                var0.lockEnabled = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var5 = var16.bind(var17)(var5, var15);
                var16 = _closure1_slot4;
                var15 = var16.useLayoutEffect;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    _fun110478: for (var _fun110478_ip = 0;;) switch (_fun110478_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 31;
                            var1 = var4[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var1 = var3.getWindowDimensions;
                            var1 = var1.bind(var3)();
                            var5 = var1.width;
                            var1 = var1.height;
                            var3 = {};
                            var3.width = var5;
                            var3.height = var1;
                            var1 = var5 > var1;
                            var3.landscape = var1;
                            var1 = 22;
                            var1 = var4[var1];
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.cheapWorkletShallowEqual;
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var2 = var2.windowState;
                            var2 = var4.bind(var5)(var2, var3);
                            if (var2) {
                                _fun110478_ip = 132;
                                continue _fun110478
                            }
                        case 109:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var2.windowState = var3;
                            var1 = _closure2_slot11;
                            var1 = var1.bind(var0)();
                        case 132:
                            return var0;
                    }
                };
                var4 = var15.bind(var16)(var4, var5);
                var5 = var11.updateState;
                var4 = {};
                var15 = var7.width;
                var4.windowWidth = var15;
                var15 = var7.height;
                var4.windowHeight = var15;
                var15 = var9.left;
                var4.safeAreaLeft = var15;
                var15 = var9.right;
                var4.safeAreaRight = var15;
                var15 = var9.top;
                var4.safeAreaTop = var15;
                var15 = var9.bottom;
                var4.safeAreaBottom = var15;
                if (var13) {
                    _fun110462_ip = 559;
                    continue _fun110462
                }
            case 553:
                var13 = _closure1_slot17;
                _fun110462_ip = 563;
                continue _fun110462;
            case 559:
                var13 = _closure1_slot18;
            case 563:
                var4.controlBarSize = var13;
                var4 = var5.bind(var11)(var6, var4);
                var4 = var11.getContentDimensions;
                var13 = var4.bind(var11)();
                _closure2_slot13 = var13;
                var6 = _closure1_slot4;
                var5 = var6.useLayoutEffect;
                var4 = new Array(9);
                var4[0] = var14;
                var4[1] = var13;
                var4[2] = var12;
                var4[3] = var11;
                var4[4] = var10;
                var4[5] = var9;
                var4[6] = var8;
                var4[7] = var7;
                var4[8] = var3;
                var3 = function() { // Environment: var1
                    var0 = _closure2_slot10;
                    var2 = var0.current;
                    var0 = _closure2_slot9;
                    var2.layoutKey = var0;
                    var7 = function() {
                        var1 = _closure2_slot4;
                        var0 = var1.handleLayoutEffect;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var _closure3_slot0 = var7;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var2 = var10[var8];
                    var0 = undefined;
                    var4 = var9.bind(var0)(var2);
                    var2 = var4.runOnUI;
                    var1 = function arg0() {
                        _fun110481: for (var _fun110481_ip = 0;;) switch (_fun110481_ip) {
                            case 0:
                                var0 = arg0;
                                var7 = var0.windowState;
                                var4 = var0.safeAreaState;
                                var3 = var0.contentState;
                                var0 = _closure2_slot3;
                                if (!var0) {
                                    _fun110481_ip = 84;
                                    continue _fun110481
                                }
                            case 31:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 22;
                                var5 = var5[var1];
                                var1 = undefined;
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.cheapWorkletShallowEqual;
                                var8 = _closure2_slot2;
                                var1 = var8.get;
                                var1 = var1.bind(var8)();
                                var1 = var5.bind(var6)(var1, var3);
                                var0 = !var1;
                            case 84:
                                if (!var0) {
                                    _fun110481_ip = 101;
                                    continue _fun110481
                                }
                            case 87:
                                var1 = _closure2_slot2;
                                var0 = var1.set;
                                var0 = var0.bind(var1)(var3);
                            case 101:
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var6 = 22;
                                var3 = var0[var6];
                                var0 = undefined;
                                var8 = var5.bind(var0)(var3);
                                var5 = var8.cheapWorkletShallowEqual;
                                var9 = _closure2_slot0;
                                var3 = var9.get;
                                var3 = var3.bind(var9)();
                                var3 = var5.bind(var8)(var3, var7);
                                if (var3) {
                                    _fun110481_ip = 168;
                                    continue _fun110481
                                }
                            case 154:
                                var5 = _closure2_slot0;
                                var3 = var5.set;
                                var3 = var3.bind(var5)(var7);
                            case 168:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var6 = var5.bind(var0)(var3);
                                var5 = var6.cheapWorkletShallowEqual;
                                var7 = _closure2_slot1;
                                var3 = var7.get;
                                var3 = var3.bind(var7)();
                                var3 = var5.bind(var6)(var3, var4);
                                if (var3) {
                                    _fun110481_ip = 227;
                                    continue _fun110481
                                }
                            case 213:
                                var3 = _closure2_slot1;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var4);
                            case 227:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 21;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                    var6 = {};
                    var11 = _closure2_slot3;
                    var6.isConnected = var11;
                    var11 = 22;
                    var11 = var10[var11];
                    var11 = var9.bind(var0)(var11);
                    var11 = var11.cheapWorkletShallowEqual;
                    var6.cheapWorkletShallowEqual = var11;
                    var11 = _closure2_slot2;
                    var6.contentDimensions = var11;
                    var11 = _closure2_slot0;
                    var6.windowDimensions = var11;
                    var11 = _closure2_slot1;
                    var6.safeArea = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.runOnJS;
                    var6.runOnJS = var8;
                    var6.executeLayoutManagerEffect = var7;
                    var1.__closure = var6;
                    var6 = 13791383688018.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot39;
                    var1.__initData = var5;
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var4 = _closure2_slot5;
                    var1.windowState = var4;
                    var4 = _closure2_slot7;
                    var1.safeAreaState = var4;
                    var3 = _closure2_slot13;
                    var1.contentState = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot4;
                var3 = var4.useLayoutEffect;
                var2 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot10;
                        var0 = var0.current;
                        var1 = var0.timeout;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.isConnected;
        var _closure2_slot0 = var11;
        var10 = var0.selectedMode;
        var _closure2_slot1 = var10;
        var8 = var0.manualFocusedItem;
        var _closure2_slot2 = var8;
        var7 = var0.isNonVoiceEmbeddedActivityInPanelMode;
        var _closure2_slot3 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 29;
        var3 = var3[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            _fun110485: for (var _fun110485_ip = 0;;) switch (_fun110485_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var4 = var0.bind(var1)();
                    var3 = null;
                    var0 = var3 == var4;
                    var5 = undefined;
                    if (var0) {
                        _fun110485_ip = 33;
                        continue _fun110485
                    }
                case 28:
                    var5 = var4.applicationId;
                case 33:
                    var0 = {};
                    var0.applicationId = var5;
                    var6 = var3 == var4;
                    var1 = undefined;
                    if (var6) {
                        _fun110485_ip = 54;
                        continue _fun110485
                    }
                case 48:
                    var1 = var4.compositeInstanceId;
                case 54:
                    var0.instanceId = var1;
                    if (!(var3 != var5)) {
                        _fun110485_ip = 82;
                        continue _fun110485
                    }
                case 63:
                    var4 = _closure1_slot6;
                    var1 = var4.getOrientationLockStateForApp;
                    var1 = var1.bind(var4)(var5);
                    if (!(var3 == var1)) {
                        _fun110485_ip = 92;
                        continue _fun110485
                    }
                case 82:
                    var2 = _closure1_slot24;
                    var1 = var2.UNLOCKED;
                case 92:
                    var0.activityOrientationLockState = var1;
                    return var0;
            }
        };
        var3 = var5.bind(var6)(var4, var3);
        var12 = var3.applicationId;
        var _closure2_slot4 = var12;
        var9 = var3.activityOrientationLockState;
        var _closure2_slot5 = var9;
        var3 = var3.instanceId;
        var _closure2_slot6 = var3;
        var6 = _closure1_slot4;
        var5 = var6.useLayoutEffect;
        var4 = new Array(7);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4[5] = var7;
        var4[6] = var3;
        var3 = function() { // Environment: var1
            _fun110486: for (var _fun110486_ip = 0;;) switch (_fun110486_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    if (var0) {
                        _fun110486_ip = 406;
                        continue _fun110486
                    }
                case 13:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot15;
                    var2 = var2.PANEL;
                    if (!(var3 === var2)) {
                        _fun110486_ip = 41;
                        continue _fun110486
                    }
                case 34:
                    var2 = _closure2_slot0;
                    if (var2) {
                        _fun110486_ip = 78;
                        continue _fun110486
                    }
                case 41:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 36;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.restoreDefaultOrientation;
                    var2 = var2.bind(var3)();
                    _fun110486_ip = 406;
                    continue _fun110486;
                case 78:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun110486_ip = 364;
                        continue _fun110486
                    }
                case 91:
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 44;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.getEmbeddedActivityParticipantId;
                    var2 = {};
                    var7 = _closure2_slot4;
                    var2.applicationId = var7;
                    var7 = _closure2_slot6;
                    var2.instanceId = var7;
                    var2 = var5.bind(var6)(var2);
                    if (!(var4 === var2)) {
                        _fun110486_ip = 364;
                        continue _fun110486
                    }
                case 154:
                    var2 = _closure2_slot5;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 35;
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.isIpadOS;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun110486_ip = 406;
                        continue _fun110486
                    }
                case 194:
                    var1 = _closure1_slot24;
                    var1 = var1.UNLOCKED;
                    if (!(var1 !== var2)) {
                        _fun110486_ip = 322;
                        continue _fun110486
                    }
                case 208:
                    var1 = _closure1_slot24;
                    var1 = var1.PORTRAIT;
                    if (!(var1 !== var2)) {
                        _fun110486_ip = 282;
                        continue _fun110486
                    }
                case 222:
                    var1 = _closure1_slot24;
                    var1 = var1.LANDSCAPE;
                    if (!(var1 === var2)) {
                        _fun110486_ip = 406;
                        continue _fun110486
                    }
                case 239:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 36;
                    var1 = var4[var1];
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.lockOrientation;
                    var2 = 'LANDSCAPE';
                    var1 = true;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun110486_ip = 406;
                    continue _fun110486;
                case 282:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 36;
                    var1 = var4[var1];
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.lockOrientation;
                    var2 = 'PORTRAIT';
                    var1 = true;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun110486_ip = 406;
                    continue _fun110486;
                case 322:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 36;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.unlockOrientation;
                    var1 = {};
                    var4 = true;
                    var1.unlockAfterRotatingToPreviousLock = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun110486_ip = 406;
                    continue _fun110486;
                case 364:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.unlockOrientation;
                    var0 = {};
                    var3 = false;
                    var0.unlockAfterRotatingToPreviousLock = var3;
                    var0 = var1.bind(var2)(var0);
                case 406:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var4 = _closure1_slot4;
        var3 = var4.useLayoutEffect;
        var2 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 36;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.restoreDefaultOrientation;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.VoicePanelModes;
    var _closure1_slot15 = var6;
    var3 = var3.getAnalyticsNameForVoicePanelMode;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CONTROLS_HEIGHT;
    var _closure1_slot17 = var6;
    var6 = var3.CONTROLS_HEIGHT_PTT;
    var _closure1_slot18 = var6;
    var6 = var3.CONTROLS_HIDE_TIMEOUT;
    var _closure1_slot19 = var6;
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot21 = var6;
    var6 = var3.ComponentActions;
    var _closure1_slot22 = var6;
    var3 = var3.InputModes;
    var _closure1_slot23 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OrientationLockState;
    var _closure1_slot24 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot25 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isActivityParticipant;
    var _closure1_slot26 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MorphablePanelModes;
    var _closure1_slot27 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot28 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}';
    var3.code = var6;
    var _closure1_slot29 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}';
    var3.code = var6;
    var _closure1_slot30 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}';
    var3.code = var6;
    var _closure1_slot31 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}';
    var3.code = var6;
    var _closure1_slot32 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}';
    var3.code = var6;
    var _closure1_slot33 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}';
    var3.code = var6;
    var _closure1_slot34 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}';
    var3.code = var6;
    var _closure1_slot35 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}';
    var3.code = var6;
    var _closure1_slot36 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}';
    var3.code = var6;
    var _closure1_slot37 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}';
    var3.code = var6;
    var _closure1_slot38 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}';
    var3.code = var6;
    var _closure1_slot39 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}';
    var3.code = var6;
    var _closure1_slot40 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}';
    var3.code = var6;
    var _closure1_slot41 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}';
    var3.code = var6;
    var _closure1_slot42 = var3;
    var3 = {};
    var6 = 'function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||currentMode===VoicePanelModes.PANEL&&(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}';
    var3.code = var6;
    var _closure1_slot43 = var3;
    var3 = 62;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/VoicePanelController.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110489: for (var _fun110489_ip = 0;;) switch (_fun110489_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channelId;
                var _closure2_slot0 = var13;
                var15 = var1.guildId;
                var _closure2_slot1 = var15;
                var6 = var1.children;
                var21 = var1.transitionState;
                var7 = var1.transitionCleanUp;
                var3 = undefined;
                var _closure2_slot31 = var3;
                var _closure2_slot32 = var3;
                var _closure2_slot33 = var3;
                var _closure2_slot34 = var3;
                var _closure2_slot35 = var3;
                var _closure2_slot36 = var3;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = 29;
                var1 = var10[var14];
                var9 = var8.bind(var3)(var1);
                var5 = var9.useStateFromStores;
                var1 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot12;
                    var1 = var2.getMode;
                    var1 = var1.bind(var2)();
                    var0 = _closure1_slot23;
                    var0 = var0.PUSH_TO_TALK;
                    var0 = var1 === var0;
                    return var0;
                };
                var26 = var5.bind(var9)(var2, var1);
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 52;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = _closure1_slot12;
                    var0 = var1.getMediaEngine;
                    var4 = var0.bind(var1)();
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2 = var2.bind(var5)(var1);
                var1 = _closure1_slot3;
                var5 = 1;
                var2 = var1.bind(var3)(var2, var5);
                var1 = 0;
                var2 = var2[var1];
                var _closure2_slot2 = var2;
                var12 = _closure1_slot4;
                var11 = var12.useEffect;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = var1.cleanUp;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var9);
                var9 = _closure1_slot1;
                var2 = 53;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)(var13, var15);
                var27 = var2.items;
                var12 = var2.isConnected;
                var2 = function arg0, arg1() {
                    var5 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var6;
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var0 = function() { // Environment: var1
                        var0 = global;
                        var0 = var0.Set;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var2 = var1;
                        var0 = new var2[var0](var1);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var7 = var3.bind(var4)(var0);
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var0 = 1;
                    var3 = var4.bind(var3)(var7, var0);
                    var0 = 0;
                    var0 = var3[var0];
                    var _closure3_slot2 = var0;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(3);
                    var2[0] = var6;
                    var2[1] = var5;
                    var2[2] = var0;
                    var1 = function() { // Environment: var1
                        _fun110496: for (var _fun110496_ip = 0;;) switch (_fun110496_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                if (var2) {
                                    _fun110496_ip = 30;
                                    continue _fun110496
                                }
                            case 12:
                                var2 = _closure3_slot2;
                                var1 = var2.clear;
                                var1 = var1.bind(var2)();
                                var1 = undefined;
                                return var1;
                            case 30:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 51;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.runAfterInteractions;
                                var2 = function() { // Environment: var0
                                    _fun110497: for (var _fun110497_ip = 0;;) switch (_fun110497_ip) {
                                        case 0:
                                            var1 = _closure3_slot2;
                                            var0 = var1.clear;
                                            var0 = var0.bind(var1)();
                                            var2 = _closure1_slot44;
                                            var1 = _closure3_slot0;
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.bind(var0)();
                                            var1 = var2.done;
                                            if (var1) {
                                                _fun110497_ip = 86;
                                                continue _fun110497
                                            }
                                        case 47:
                                            var1 = var2.value;
                                            var6 = _closure3_slot2;
                                            var5 = var6.add;
                                            var1 = var1.id;
                                            var1 = var5.bind(var6)(var1);
                                            var5 = var3.bind(var0)();
                                            var1 = var5.done;
                                            var2 = var5;
                                            if (!var1) {
                                                _fun110497_ip = 47;
                                                continue _fun110497
                                            }
                                        case 86:
                                            return var0;
                                    }
                                };
                                var1 = 100;
                                var1 = var3.bind(var4)(var2, var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    _fun110498: for (var _fun110498_ip = 0;;) switch (_fun110498_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun110498_ip = 27;
                                                continue _fun110498
                                            }
                                        case 13:
                                            var1 = _closure4_slot0;
                                            var0 = var1.cancel;
                                            var0 = var0.bind(var1)();
                                        case 27:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var2 = var2.bind(var3)(var27, var12);
                var _closure2_slot3 = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun110499: for (var _fun110499_ip = 0;;) switch (_fun110499_ip) {
                        case 0:
                            var3 = arg0;
                            var10 = arg1;
                            var _closure3_slot0 = var3;
                            var1 = arg2;
                            var _closure3_slot1 = var1;
                            var1 = arg3;
                            var _closure3_slot2 = var1;
                            var2 = _closure1_slot11;
                            var1 = var2.getChannel;
                            var3 = var1.bind(var2)(var3);
                            var4 = null;
                            var2 = var4 == var3;
                            var18 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun110499_ip = 66;
                                continue _fun110499
                            }
                        case 56:
                            var2 = var3.isDM;
                            var1 = var2.bind(var3)();
                        case 66:
                            var13 = var4 != var1;
                            if (!var13) {
                                _fun110499_ip = 76;
                                continue _fun110499
                            }
                        case 73:
                            var13 = var1;
                        case 76:
                            var17 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var16 = 21;
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var20 = var1.bind(var2)(var10);
                            var1 = var19[var16];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.useSharedValue;
                            var1 = _closure1_slot15;
                            var1 = var1.PANEL;
                            var11 = var2.bind(var3)(var1);
                            var _closure3_slot3 = var11;
                            var1 = 31;
                            var1 = var19[var1];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.getWindowDimensions;
                            var5 = var1.bind(var2)();
                            var _closure3_slot4 = var5;
                            var1 = var19[var16];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.useSharedValue;
                            var1 = {};
                            var6 = var5.width;
                            var1.width = var6;
                            var6 = var5.height;
                            var1.height = var6;
                            var7 = var5.width;
                            var6 = var5.height;
                            var6 = var7 > var6;
                            var1.landscape = var6;
                            var7 = var2.bind(var3)(var1);
                            var1 = 32;
                            var1 = var19[var1];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.getSafeAreaInsets;
                            var8 = var1.bind(var2)();
                            var _closure3_slot5 = var8;
                            var1 = var19[var16];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.useSharedValue;
                            var1 = {};
                            var27 = var1;
                            var26 = var8;
                            var6 = copyDataProperties(var27, var26);
                            var9 = var2.bind(var3)(var1);
                            var6 = 33;
                            var1 = var19[var6];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.getMaxPanelWidth;
                            var1 = {};
                            var12 = var5.width;
                            var1.windowWidth = var12;
                            var1.connected = var10;
                            var10 = var8.left;
                            var1.safeAreaLeft = var10;
                            var8 = var8.right;
                            var1.safeAreaRight = var8;
                            var12 = var2.bind(var3)(var1);
                            var1 = var19[var16];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.useSharedValue;
                            var1 = {};
                            var8 = var5.height;
                            var1.drawerHeight = var8;
                            var1.drawerWidth = var12;
                            var6 = var19[var6];
                            var10 = var17.bind(var18)(var6);
                            var8 = var10.getPanelX;
                            var6 = var5.width;
                            var6 = var8.bind(var10)(var6, var12);
                            var1.drawerX = var6;
                            var5 = var5.height;
                            var1.drawerY = var5;
                            var5 = -1;
                            var1.pipX = var5;
                            var1.pipY = var5;
                            var5 = true;
                            var1.animated = var5;
                            var5 = _closure1_slot15;
                            var5 = var5.PANEL;
                            var1.mode = var5;
                            var6 = var2.bind(var3)(var1);
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var22 = 0;
                            var8 = var1.bind(var2)(var22);
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var3 = false;
                            var15 = var1.bind(var2)(var3);
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var14 = var1.bind(var2)(var4);
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var10 = var1.bind(var2)(var22);
                            var1 = var19[var16];
                            var2 = var17.bind(var18)(var1);
                            var1 = var2.useSharedValue;
                            var5 = var1.bind(var2)(var3);
                            var _closure3_slot6 = var5;
                            var4 = _closure1_slot4;
                            var3 = var4.useCallback;
                            var2 = function arg0() {
                                var2 = _closure3_slot6;
                                var1 = var2.set;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = {};
                            var1.isFocusedVideoZoomed = var5;
                            var2.__closure = var1;
                            var1 = 13885070318174.0;
                            var2.__workletHash = var1;
                            var1 = _closure1_slot33;
                            var2.__initData = var1;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var4 = var3.bind(var4)(var2, var1);
                            var1 = var19[var16];
                            var3 = var17.bind(var18)(var1);
                            var2 = var3.useSharedValue;
                            var1 = _closure1_slot5;
                            var1 = var1.useReducedMotion;
                            var3 = var2.bind(var3)(var1);
                            var _closure3_slot7 = var3;
                            var23 = _closure1_slot4;
                            var12 = var23.useEffect;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = function() { // Environment: var0
                                var3 = function() {
                                    var0 = _closure1_slot5;
                                    var2 = var0.useReducedMotion;
                                    var1 = _closure3_slot7;
                                    var0 = var1.set;
                                    var0 = var0.bind(var1)(var2);
                                    var0 = undefined;
                                    return var0;
                                };
                                var _closure4_slot0 = var3;
                                var2 = _closure1_slot5;
                                var1 = var2.addReactChangeListener;
                                var1 = var1.bind(var2)(var3);
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot5;
                                    var1 = var2.removeReactChangeListener;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = var12.bind(var23)(var1, var2);
                            var1 = var19[var16];
                            var12 = var17.bind(var18)(var1);
                            var2 = var12.useSharedValue;
                            var1 = {
                                'gestureActive': false,
                                'x': 0,
                                'y': 0
                            };
                            var2 = var2.bind(var12)(var1);
                            var1 = var19[var16];
                            var23 = var17.bind(var18)(var1);
                            var12 = var23.useDerivedValue;
                            var1 = function() {
                                _fun110504: for (var _fun110504_ip = 0;;) switch (_fun110504_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var0 = var1.get;
                                        var2 = var0.bind(var1)();
                                        var1 = _closure1_slot15;
                                        var1 = var1.PANEL;
                                        if (!(var1 !== var2)) {
                                            _fun110504_ip = 71;
                                            continue _fun110504
                                        }
                                    case 33:
                                        var1 = _closure1_slot15;
                                        var1 = var1.PIP;
                                        if (!(var1 !== var2)) {
                                            _fun110504_ip = 59;
                                            continue _fun110504
                                        }
                                    case 47:
                                        var1 = _closure1_slot27;
                                        var1 = var1.UNDEFINED;
                                        return var1;
                                    case 59:
                                        var1 = _closure1_slot27;
                                        var1 = var1.PIP;
                                        return var1;
                                    case 71:
                                        var0 = _closure1_slot27;
                                        var0 = var0.PANEL;
                                        return var0;
                                }
                            };
                            var24 = {};
                            var24.mode = var11;
                            var25 = _closure1_slot15;
                            var24.VoicePanelModes = var25;
                            var25 = _closure1_slot27;
                            var24.MorphablePanelModes = var25;
                            var1.__closure = var24;
                            var24 = 931249605381.0;
                            var1.__workletHash = var24;
                            var24 = _closure1_slot34;
                            var1.__initData = var24;
                            var1 = var12.bind(var23)(var1);
                            var24 = _closure1_slot4;
                            var23 = var24.useState;
                            var12 = function() { // Environment: var0
                                _fun110505: for (var _fun110505_ip = 0;;) switch (_fun110505_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 34;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var8 = _closure3_slot0;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var9 = var1;
                                        var0 = new var9[var2](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        var3 = var0.updateState;
                                        var2 = _closure3_slot1;
                                        var1 = {};
                                        var6 = _closure3_slot4;
                                        var6 = var6.width;
                                        var1.windowWidth = var6;
                                        var6 = _closure3_slot4;
                                        var6 = var6.height;
                                        var1.windowHeight = var6;
                                        var6 = _closure3_slot5;
                                        var6 = var6.left;
                                        var1.safeAreaLeft = var6;
                                        var6 = _closure3_slot5;
                                        var6 = var6.right;
                                        var1.safeAreaRight = var6;
                                        var6 = _closure3_slot5;
                                        var6 = var6.top;
                                        var1.safeAreaTop = var6;
                                        var6 = _closure3_slot5;
                                        var6 = var6.bottom;
                                        var1.safeAreaBottom = var6;
                                        var4 = _closure3_slot2;
                                        if (var4) {
                                            _fun110505_ip = 161;
                                            continue _fun110505
                                        }
                                    case 155:
                                        var4 = _closure1_slot17;
                                        _fun110505_ip = 165;
                                        continue _fun110505;
                                    case 161:
                                        var4 = _closure1_slot18;
                                    case 165:
                                        var1.controlBarSize = var4;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var24 = var23.bind(var24)(var12);
                            var23 = _closure1_slot3;
                            var12 = 1;
                            var12 = var23.bind(var18)(var24, var12);
                            var12 = var12[var22];
                            var _closure3_slot8 = var12;
                            var23 = _closure1_slot4;
                            var22 = var23.useLayoutEffect;
                            var21 = new Array(1);
                            var21[0] = var12;
                            var0 = function() { // Environment: var0
                                var0 = function() { // Environment: var0
                                    var1 = _closure3_slot8;
                                    var0 = var1.cleanUp;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var22.bind(var23)(var0, var21);
                            var0 = {};
                            var0.connected = var20;
                            var16 = var19[var16];
                            var18 = var17.bind(var18)(var16);
                            var17 = var18.useSharedValue;
                            var16 = var12.getContentDimensions;
                            var16 = var16.bind(var12)();
                            var16 = var17.bind(var18)(var16);
                            var0.contentDimensions = var16;
                            var0.dragScrolling = var15;
                            var0.focused = var14;
                            var0.isCall = var13;
                            var0.layoutManager = var12;
                            var0.mode = var11;
                            var0.preJoinContentSize = var10;
                            var0.safeArea = var9;
                            var0.scrollPosition = var8;
                            var0.windowDimensions = var7;
                            var0.wrapperDimensions = var6;
                            var0.isFocusedVideoZoomed = var5;
                            var0.setIsFocusedVideoZoomed = var4;
                            var0.useReducedMotion = var3;
                            var0.wrapperOffset = var2;
                            var0.morphablePanelMode = var1;
                            return var0;
                    }
                };
                var34 = undefined;
                var33 = var13;
                var32 = var12;
                var31 = var27;
                var30 = var26;
                var2 = var34[var2](var33, var32, var31, var30, var29);
                var18 = var2.connected;
                var _closure2_slot4 = var18;
                var28 = var2.contentDimensions;
                var _closure2_slot5 = var28;
                var9 = var2.dragScrolling;
                var _closure2_slot6 = var9;
                var19 = var2.focused;
                var _closure2_slot7 = var19;
                var9 = var2.isCall;
                var _closure2_slot8 = var9;
                var20 = var2.layoutManager;
                var _closure2_slot9 = var20;
                var9 = var2.mode;
                var _closure2_slot10 = var9;
                var11 = var2.preJoinContentSize;
                var _closure2_slot11 = var11;
                var23 = var2.safeArea;
                var _closure2_slot12 = var23;
                var11 = var2.scrollPosition;
                var _closure2_slot13 = var11;
                var22 = var2.windowDimensions;
                var _closure2_slot14 = var22;
                var11 = var2.wrapperDimensions;
                var _closure2_slot15 = var11;
                var11 = var2.isFocusedVideoZoomed;
                var _closure2_slot16 = var11;
                var11 = var2.setIsFocusedVideoZoomed;
                var _closure2_slot17 = var11;
                var11 = var2.useReducedMotion;
                var _closure2_slot18 = var11;
                var11 = var2.wrapperOffset;
                var _closure2_slot19 = var11;
                var2 = var2.morphablePanelMode;
                var _closure2_slot20 = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun110508: for (var _fun110508_ip = 0;;) switch (_fun110508_ip) {
                        case 0:
                            var20 = arg0;
                            var10 = arg1;
                            var13 = arg2;
                            var14 = arg3;
                            var _closure3_slot0 = var20;
                            var _closure3_slot1 = var10;
                            var _closure3_slot2 = var13;
                            var _closure3_slot3 = var14;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 21;
                            var1 = var1[var8];
                            var17 = undefined;
                            var3 = var2.bind(var17)(var1);
                            var2 = var3.useSharedValue;
                            var1 = {};
                            var4 = _closure1_slot20;
                            var4 = var4.FLOATING_DEFAULT;
                            var1.mode = var4;
                            var4 = false;
                            var1.locked = var4;
                            if (!var14) {
                                _fun110508_ip = 90;
                                continue _fun110508
                            }
                        case 87:
                            if (var10) {
                                _fun110508_ip = 96;
                                continue _fun110508
                            }
                        case 90:
                            var4 = _closure1_slot17;
                            _fun110508_ip = 100;
                            continue _fun110508;
                        case 96:
                            var4 = _closure1_slot18;
                        case 100:
                            var1.height = var4;
                            var1.pushToTalk = var14;
                            var1 = var2.bind(var3)(var1);
                            var _closure3_slot4 = var1;
                            var4 = _closure1_slot4;
                            var3 = var4.useRef;
                            var2 = -1;
                            var2 = var3.bind(var4)(var2);
                            var _closure3_slot5 = var2;
                            var5 = _closure1_slot4;
                            var4 = var5.useCallback;
                            var3 = function() { // Environment: var0
                                _fun110509: for (var _fun110509_ip = 0;;) switch (_fun110509_ip) {
                                    case 0:
                                        var1 = _closure3_slot5;
                                        var2 = var1.current;
                                        var1 = -1;
                                        if (!(var1 !== var2)) {
                                            _fun110509_ip = 56;
                                            continue _fun110509
                                        }
                                    case 22:
                                        var2 = global;
                                        var4 = var2.clearTimeout;
                                        var2 = _closure3_slot5;
                                        var3 = var2.current;
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var0 = _closure3_slot5;
                                        var0.current = var1;
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = new Array(0);
                            var7 = var4.bind(var5)(var3, var2);
                            var _closure3_slot6 = var7;
                            var5 = _closure1_slot4;
                            var4 = var5.useCallback;
                            var3 = new Array(3);
                            var3[0] = var1;
                            var3[1] = var7;
                            var3[2] = var20;
                            var2 = function() { // Environment: var0
                                _fun110510: for (var _fun110510_ip = 0;;) switch (_fun110510_ip) {
                                    case 0:
                                        var2 = _closure3_slot6;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)();
                                        var2 = _closure3_slot5;
                                        var3 = var2.current;
                                        var2 = -1;
                                        if (!(var2 === var3)) {
                                            _fun110510_ip = 72;
                                            continue _fun110510
                                        }
                                    case 32:
                                        var2 = _closure3_slot5;
                                        var1 = global;
                                        var4 = var1.setTimeout;
                                        var3 = _closure1_slot19;
                                        var1 = function() { // Environment: var1
                                            _fun110511: for (var _fun110511_ip = 0;;) switch (_fun110511_ip) {
                                                case 0:
                                                    var2 = _closure3_slot6;
                                                    var0 = undefined;
                                                    var2 = var2.bind(var0)();
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.get;
                                                    var3 = var2.bind(var3)();
                                                    var2 = _closure1_slot15;
                                                    var2 = var2.PANEL;
                                                    if (!(var3 === var2)) {
                                                        _fun110511_ip = 146;
                                                        continue _fun110511
                                                    }
                                                case 43:
                                                    var3 = _closure3_slot4;
                                                    var2 = var3.get;
                                                    var2 = var2.bind(var3)();
                                                    var3 = var2.mode;
                                                    var2 = _closure1_slot20;
                                                    var2 = var2.FLOATING_DEFAULT;
                                                    var2 = var3 !== var2;
                                                    if (var2) {
                                                        _fun110511_ip = 97;
                                                        continue _fun110511
                                                    }
                                                case 78:
                                                    var5 = _closure3_slot4;
                                                    var3 = var5.get;
                                                    var3 = var3.bind(var5)();
                                                    var2 = var3.locked;
                                                case 97:
                                                    if (var2) {
                                                        _fun110511_ip = 146;
                                                        continue _fun110511
                                                    }
                                                case 100:
                                                    var3 = _closure1_slot1;
                                                    var5 = _closure1_slot2;
                                                    var2 = 37;
                                                    var2 = var5[var2];
                                                    var3 = var3.bind(var0)(var2);
                                                    var2 = _closure3_slot4;
                                                    var1 = {};
                                                    var4 = _closure1_slot20;
                                                    var4 = var4.HIDDEN;
                                                    var1.mode = var4;
                                                    var1 = var3.bind(var0)(var2, var1);
                                                case 146:
                                                    return var0;
                                            }
                                        };
                                        var1 = var4.bind(var0)(var1, var3);
                                        var2.current = var1;
                                    case 72:
                                        return var0;
                                }
                            };
                            var21 = var4.bind(var5)(var2, var3);
                            var _closure3_slot7 = var21;
                            var5 = _closure1_slot4;
                            var4 = var5.useMemo;
                            var3 = new Array(2);
                            var3[0] = var1;
                            var3[1] = var21;
                            var2 = function() { // Environment: var0
                                var4 = function arg0, arg1() {
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 37;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = _closure3_slot4;
                                    var2 = {};
                                    var5 = arg0;
                                    var2.mode = var5;
                                    var5 = arg1;
                                    var2.returnMode = var5;
                                    var2 = var4.bind(var0)(var3, var2);
                                    var1 = _closure3_slot7;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var _closure4_slot0 = var4;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 38;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.debounce;
                                var0 = 200;
                                var0 = var2.bind(var3)(var4, var0);
                                var _closure4_slot1 = var0;
                                var0 = {};
                                var2 = function() {
                                    var1 = _closure4_slot1;
                                    var0 = var1.cancel;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0.cancelControlsDebounce = var2;
                                var1 = function arg0() {
                                    _fun110515: for (var _fun110515_ip = 0;;) switch (_fun110515_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var3 = var1.mode;
                                            var5 = var1.debounce;
                                            var0 = undefined;
                                            if (!(var5 === var0)) {
                                                _fun110515_ip = 22;
                                                continue _fun110515
                                            }
                                        case 20:
                                            var5 = false;
                                        case 22:
                                            var2 = var1.returnMode;
                                            if (!(var2 === var0)) {
                                                _fun110515_ip = 45;
                                                continue _fun110515
                                            }
                                        case 32:
                                            var1 = _closure1_slot20;
                                            var2 = var1.FLOATING_DEFAULT;
                                        case 45:
                                            var1 = _closure4_slot1;
                                            if (var5) {
                                                _fun110515_ip = 77;
                                                continue _fun110515
                                            }
                                        case 55:
                                            var5 = var1.cancel;
                                            var5 = var5.bind(var1)();
                                            var4 = _closure4_slot0;
                                            var4 = var4.bind(var0)(var3, var2);
                                            _fun110515_ip = 83;
                                            continue _fun110515;
                                        case 77:
                                            var1 = var1.bind(var0)(var3, var2);
                                        case 83:
                                            return var0;
                                    }
                                };
                                var0.setControlsMode = var1;
                                return var0;
                            };
                            var2 = var4.bind(var5)(var2, var3);
                            var11 = var2.cancelControlsDebounce;
                            var _closure3_slot8 = var11;
                            var4 = var2.setControlsMode;
                            var _closure3_slot9 = var4;
                            var5 = _closure1_slot4;
                            var3 = var5.useRef;
                            var2 = global;
                            var2 = var2.Set;
                            var9 = var2.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var25 = var9;
                            var2 = new var25[var2](var24);
                            var2 = var2 instanceof Object ? var2 : var9;
                            var2 = var3.bind(var5)(var2);
                            var _closure3_slot10 = var2;
                            var9 = _closure1_slot4;
                            var5 = var9.useCallback;
                            var3 = new Array(3);
                            var3[0] = var1;
                            var3[1] = var21;
                            var3[2] = var7;
                            var2 = function(arg0) { // Environment: var0
                                _fun110516: for (var _fun110516_ip = 0;;) switch (_fun110516_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = null;
                                        if (!(var2 == var0)) {
                                            _fun110516_ip = 46;
                                            continue _fun110516
                                        }
                                    case 11:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 39;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.v4;
                                        var0 = var2.bind(var3)();
                                    case 46:
                                        var _closure4_slot0 = var0;
                                        var0 = {};
                                        var2 = function arg0() {
                                            _fun110517: for (var _fun110517_ip = 0;;) switch (_fun110517_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = _closure3_slot10;
                                                    var5 = var2.current;
                                                    var4 = var5.has;
                                                    var3 = _closure4_slot0;
                                                    var3 = var4.bind(var5)(var3);
                                                    if (var3) {
                                                        _fun110517_ip = 140;
                                                        continue _fun110517
                                                    }
                                                case 35:
                                                    var4 = _closure3_slot6;
                                                    var3 = undefined;
                                                    var4 = var4.bind(var3)();
                                                    var4 = _closure3_slot10;
                                                    var5 = var4.current;
                                                    var4 = var5.add;
                                                    var2 = _closure4_slot0;
                                                    var2 = var4.bind(var5)(var2);
                                                    var2 = {};
                                                    var4 = _closure3_slot10;
                                                    var4 = var4.current;
                                                    var5 = var4.size;
                                                    var4 = 0;
                                                    var4 = var5 > var4;
                                                    var2.locked = var4;
                                                    var4 = null;
                                                    if (!(var4 != var1)) {
                                                        _fun110517_ip = 107;
                                                        continue _fun110517
                                                    }
                                                case 101:
                                                    var2.mode = var1;
                                                case 107:
                                                    var4 = _closure1_slot1;
                                                    var5 = _closure1_slot2;
                                                    var1 = 37;
                                                    var1 = var5[var1];
                                                    var1 = var4.bind(var3)(var1);
                                                    var0 = _closure3_slot4;
                                                    var0 = var1.bind(var3)(var0, var2);
                                                case 140:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.lock = var2;
                                        var1 = function arg0() {
                                            _fun110518: for (var _fun110518_ip = 0;;) switch (_fun110518_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = _closure3_slot10;
                                                    var5 = var2.current;
                                                    var4 = var5.has;
                                                    var3 = _closure4_slot0;
                                                    var3 = var4.bind(var5)(var3);
                                                    if (!var3) {
                                                        _fun110518_ip = 140;
                                                        continue _fun110518
                                                    }
                                                case 35:
                                                    var3 = _closure3_slot10;
                                                    var4 = var3.current;
                                                    var3 = var4.delete;
                                                    var2 = _closure4_slot0;
                                                    var2 = var3.bind(var4)(var2);
                                                    var4 = {};
                                                    var2 = _closure3_slot10;
                                                    var2 = var2.current;
                                                    var3 = var2.size;
                                                    var2 = 0;
                                                    var2 = var3 > var2;
                                                    var4.locked = var2;
                                                    var2 = null;
                                                    if (!(var2 != var1)) {
                                                        _fun110518_ip = 97;
                                                        continue _fun110518
                                                    }
                                                case 91:
                                                    var4.mode = var1;
                                                case 97:
                                                    var3 = _closure1_slot1;
                                                    var2 = _closure1_slot2;
                                                    var1 = 37;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var3 = var3.bind(var1)(var2);
                                                    var2 = _closure3_slot4;
                                                    var2 = var3.bind(var1)(var2, var4);
                                                    var0 = _closure3_slot7;
                                                    var0 = var0.bind(var1)();
                                                case 140:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.unlock = var1;
                                        return var0;
                                }
                            };
                            var5 = var5.bind(var9)(var2, var3);
                            var12 = _closure1_slot4;
                            var9 = var12.useCallback;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var2 = function() { // Environment: var0
                                _fun110519: for (var _fun110519_ip = 0;;) switch (_fun110519_ip) {
                                    case 0:
                                        var1 = arguments[0];
                                        var0 = undefined;
                                        if (!(var1 === var0)) {
                                            _fun110519_ip = 21;
                                            continue _fun110519
                                        }
                                    case 9:
                                        var2 = {};
                                        var3 = false;
                                        var2.debounce = var3;
                                        var1 = var2;
                                    case 21:
                                        var3 = var1.debounce;
                                        var2 = _closure3_slot9;
                                        var1 = {};
                                        var4 = _closure1_slot20;
                                        var4 = var4.HIDDEN;
                                        var1.mode = var4;
                                        var1.debounce = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var2 = var9.bind(var12)(var2, var3);
                            var15 = _closure1_slot4;
                            var12 = var15.useCallback;
                            var9 = new Array(2);
                            var9[0] = var4;
                            var9[1] = var1;
                            var3 = function() { // Environment: var0
                                _fun110520: for (var _fun110520_ip = 0;;) switch (_fun110520_ip) {
                                    case 0:
                                        var0 = arguments[0];
                                        var2 = undefined;
                                        if (!(var0 === var2)) {
                                            _fun110520_ip = 11;
                                            continue _fun110520
                                        }
                                    case 9:
                                        var0 = {};
                                    case 11:
                                        var3 = var0.debounce;
                                        if (!(var3 === var2)) {
                                            _fun110520_ip = 23;
                                            continue _fun110520
                                        }
                                    case 21:
                                        var3 = false;
                                    case 23:
                                        var1 = _closure3_slot9;
                                        var0 = {};
                                        var5 = _closure3_slot4;
                                        var4 = var5.get;
                                        var4 = var4.bind(var5)();
                                        var4 = var4.returnMode;
                                        var5 = null;
                                        if (!(var5 == var4)) {
                                            _fun110520_ip = 70;
                                            continue _fun110520
                                        }
                                    case 57:
                                        var5 = _closure1_slot20;
                                        var4 = var5.FLOATING_DEFAULT;
                                    case 70:
                                        var0.mode = var4;
                                        var0.debounce = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var3 = var12.bind(var15)(var3, var9);
                            var9 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var12 = var18[var8];
                            var19 = var9.bind(var17)(var12);
                            var16 = var19.useAnimatedReaction;
                            var15 = function() {
                                var1 = _closure3_slot0;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var12 = {};
                            var12.mode = var20;
                            var15.__closure = var12;
                            var12 = 12140218650562.0;
                            var15.__workletHash = var12;
                            var12 = _closure1_slot35;
                            var15.__initData = var12;
                            var12 = function arg0() {
                                _fun110522: for (var _fun110522_ip = 0;;) switch (_fun110522_ip) {
                                    case 0:
                                        var1 = _closure1_slot15;
                                        var2 = var1.PANEL;
                                        var1 = arg0;
                                        if (!(var1 !== var2)) {
                                            _fun110522_ip = 65;
                                            continue _fun110522
                                        }
                                    case 20:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 21;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var4 = var3.bind(var2)(var1);
                                        var3 = var4.runOnJS;
                                        var1 = _closure3_slot6;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = var1.bind(var2)();
                                        _fun110522_ip = 108;
                                        continue _fun110522;
                                    case 65:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 21;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure3_slot7;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 108:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var20 = {};
                            var22 = _closure1_slot15;
                            var20.VoicePanelModes = var22;
                            var22 = var18[var8];
                            var22 = var9.bind(var17)(var22);
                            var22 = var22.runOnJS;
                            var20.runOnJS = var22;
                            var20._queueHideControls = var21;
                            var20._clearHideControlsQueue = var7;
                            var12.__closure = var20;
                            var20 = 7742206515980.0;
                            var12.__workletHash = var20;
                            var20 = _closure1_slot36;
                            var12.__initData = var20;
                            var12 = var16.bind(var19)(var15, var12);
                            var16 = _closure1_slot4;
                            var15 = var16.useLayoutEffect;
                            var12 = new Array(3);
                            var12[0] = var14;
                            var12[1] = var1;
                            var12[2] = var10;
                            var10 = function() { // Environment: var0
                                _fun110523: for (var _fun110523_ip = 0;;) switch (_fun110523_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 37;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = _closure3_slot4;
                                        var1 = {};
                                        var5 = _closure3_slot3;
                                        if (!var5) {
                                            _fun110523_ip = 48;
                                            continue _fun110523
                                        }
                                    case 41:
                                        var5 = _closure3_slot1;
                                        if (var5) {
                                            _fun110523_ip = 54;
                                            continue _fun110523
                                        }
                                    case 48:
                                        var5 = _closure1_slot17;
                                        _fun110523_ip = 58;
                                        continue _fun110523;
                                    case 54:
                                        var5 = _closure1_slot18;
                                    case 58:
                                        var1.height = var5;
                                        var4 = _closure3_slot3;
                                        var1.pushToTalk = var4;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var10 = var15.bind(var16)(var10, var12);
                            var8 = var18[var8];
                            var12 = var9.bind(var17)(var8);
                            var10 = var12.useAnimatedReaction;
                            var9 = function() {
                                var1 = _closure3_slot2;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var8 = {};
                            var8.connected = var13;
                            var9.__closure = var8;
                            var8 = 16653595323628.0;
                            var9.__workletHash = var8;
                            var8 = _closure1_slot37;
                            var9.__initData = var8;
                            var8 = function arg0() {
                                _fun110525: for (var _fun110525_ip = 0;;) switch (_fun110525_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 37;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = _closure3_slot4;
                                        var1 = {};
                                        var5 = _closure3_slot3;
                                        if (!var5) {
                                            _fun110525_ip = 47;
                                            continue _fun110525
                                        }
                                    case 41:
                                        var5 = arg0;
                                        if (var5) {
                                            _fun110525_ip = 53;
                                            continue _fun110525
                                        }
                                    case 47:
                                        var5 = _closure1_slot17;
                                        _fun110525_ip = 57;
                                        continue _fun110525;
                                    case 53:
                                        var5 = _closure1_slot18;
                                    case 57:
                                        var1.height = var5;
                                        var4 = _closure3_slot3;
                                        var1.pushToTalk = var4;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var13 = {};
                            var16 = _closure1_slot1;
                            var15 = 37;
                            var15 = var18[var15];
                            var15 = var16.bind(var17)(var15);
                            var13.updateSharedValueIfChanged = var15;
                            var13.controlsSpecs = var1;
                            var13.pushToTalk = var14;
                            var14 = _closure1_slot18;
                            var13.CONTROLS_HEIGHT_PTT = var14;
                            var14 = _closure1_slot17;
                            var13.CONTROLS_HEIGHT = var14;
                            var8.__closure = var13;
                            var13 = 2154816141018.0;
                            var8.__workletHash = var13;
                            var13 = _closure1_slot38;
                            var8.__initData = var13;
                            var8 = var10.bind(var12)(var9, var8);
                            var10 = _closure1_slot4;
                            var9 = var10.useLayoutEffect;
                            var8 = new Array(2);
                            var8[0] = var11;
                            var8[1] = var7;
                            var7 = function() { // Environment: var0
                                var0 = function() { // Environment: var0
                                    var2 = _closure3_slot8;
                                    var0 = undefined;
                                    var2 = var2.bind(var0)();
                                    var1 = _closure3_slot6;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                return var0;
                            };
                            var7 = var9.bind(var10)(var7, var8);
                            var8 = _closure1_slot4;
                            var7 = var8.useEffect;
                            var6 = new Array(1);
                            var6[0] = var4;
                            var0 = function() { // Environment: var0
                                var4 = function() {
                                    var2 = _closure3_slot9;
                                    var1 = {};
                                    var0 = _closure1_slot20;
                                    var0 = var0.FLOATING_DEFAULT;
                                    var1.mode = var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var _closure4_slot0 = var4;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 40;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var5.bind(var2)(var3);
                                var3 = var2.ComponentDispatch;
                                var2 = var3.subscribe;
                                var1 = _closure1_slot22;
                                var1 = var1.VOICE_PANEL_TIV_CLOSE;
                                var1 = var2.bind(var3)(var1, var4);
                                var0 = function() { // Environment: var0
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 40;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var4 = var2.ComponentDispatch;
                                    var3 = var4.unsubscribe;
                                    var1 = _closure1_slot22;
                                    var2 = var1.VOICE_PANEL_TIV_CLOSE;
                                    var1 = _closure4_slot0;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var7.bind(var8)(var0, var6);
                            var0 = {};
                            var0.generateStateLocker = var5;
                            var0.setControlsMode = var4;
                            var0.showControls = var3;
                            var0.hideControls = var2;
                            var0.controlsSpecs = var1;
                            return var0;
                    }
                };
                var33 = var9;
                var32 = var12;
                var31 = var18;
                var30 = var26;
                var2 = var34[var2](var33, var32, var31, var30, var29);
                var11 = var2.generateStateLocker;
                var _closure2_slot21 = var11;
                var24 = var2.controlsSpecs;
                var _closure2_slot22 = var24;
                var11 = var2.showControls;
                var _closure2_slot23 = var11;
                var11 = var2.hideControls;
                var _closure2_slot24 = var11;
                var11 = var2.setControlsMode;
                var _closure2_slot25 = var11;
                var16 = {};
                var16.channelId = var13;
                var16.isConnected = var12;
                var16.mode = var9;
                var16.connected = var18;
                var16.transitionState = var21;
                var16.controlsSpecs = var24;
                var16.setControlsMode = var11;
                var2 = function arg0() {
                    var1 = arg0;
                    var10 = var1.channelId;
                    var _closure3_slot0 = var10;
                    var2 = var1.isConnected;
                    var _closure3_slot1 = var2;
                    var8 = var1.mode;
                    var _closure3_slot2 = var8;
                    var9 = var1.connected;
                    var _closure3_slot3 = var9;
                    var2 = var1.transitionState;
                    var _closure3_slot4 = var2;
                    var7 = var1.controlsSpecs;
                    var _closure3_slot5 = var7;
                    var6 = var1.setControlsMode;
                    var _closure3_slot6 = var6;
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var2 = _closure1_slot15;
                    var2 = var2.PANEL;
                    var5 = var3.bind(var4)(var2);
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = 2;
                    var4 = var4.bind(var3)(var5, var2);
                    var2 = 0;
                    var3 = var4[var2];
                    var _closure3_slot7 = var3;
                    var2 = 1;
                    var2 = var4[var2];
                    var _closure3_slot8 = var2;
                    var11 = _closure1_slot4;
                    var5 = var11.useLayoutEffect;
                    var4 = function() { // Environment: var0
                        _fun110532: for (var _fun110532_ip = 0;;) switch (_fun110532_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var0 = _closure3_slot7;
                                var0 = var2.bind(var3)(var0);
                                var3 = _closure3_slot4;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 45;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.TransitionStates;
                                var2 = var2.YEETED;
                                if (!(var3 !== var2)) {
                                    _fun110532_ip = 84;
                                    continue _fun110532
                                }
                            case 66:
                                var3 = _closure3_slot3;
                                var2 = var3.set;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var3)(var1);
                            case 84:
                                return var0;
                        }
                    };
                    var4 = var5.bind(var11)(var4);
                    var5 = _closure1_slot4;
                    var4 = var5.useCallback;
                    var1 = new Array(5);
                    var1[0] = var10;
                    var1[1] = var9;
                    var1[2] = var8;
                    var1[3] = var7;
                    var1[4] = var6;
                    var0 = function() { // Environment: var0
                        _fun110533: for (var _fun110533_ip = 0;;) switch (_fun110533_ip) {
                            case 0:
                                var1 = _closure3_slot5;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                var3 = var0.mode;
                                var0 = _closure1_slot20;
                                var0 = var0.DRAWER;
                                if (!(var3 !== var0)) {
                                    _fun110533_ip = 145;
                                    continue _fun110533
                                }
                            case 38:
                                var3 = _closure3_slot3;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                if (var0) {
                                    _fun110533_ip = 87;
                                    continue _fun110533
                                }
                            case 54:
                                var3 = _closure1_slot14;
                                var0 = var3.getState;
                                var4 = var0.bind(var3)();
                                var3 = var4.closeChannel;
                                var0 = _closure3_slot0;
                                var0 = var3.bind(var4)(var0);
                                var0 = true;
                                _fun110533_ip = 143;
                                continue _fun110533;
                            case 87:
                                var4 = _closure3_slot2;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var3 = _closure1_slot15;
                                var3 = var3.PANEL;
                                var3 = var4 === var3;
                                if (!var3) {
                                    _fun110533_ip = 140;
                                    continue _fun110533
                                }
                            case 117:
                                var6 = _closure3_slot8;
                                var4 = _closure1_slot15;
                                var5 = var4.PIP;
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var3 = true;
                            case 140:
                                var0 = var3;
                            case 143:
                                _fun110533_ip = 174;
                                continue _fun110533;
                            case 145:
                                var3 = _closure3_slot6;
                                var2 = {};
                                var1 = _closure1_slot20;
                                var1 = var1.FLOATING_DEFAULT;
                                var2.mode = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var0 = true;
                            case 174:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var0, var1);
                    var0 = {};
                    var0.selectedMode = var3;
                    var0.setMode = var2;
                    var0.dismissPanel = var1;
                    return var0;
                };
                var16 = var2.bind(var3)(var16);
                var2 = var16.selectedMode;
                var _closure2_slot26 = var2;
                var17 = var16.setMode;
                var _closure2_slot27 = var17;
                var16 = var16.dismissPanel;
                var _closure2_slot28 = var16;
                var16 = {};
                var16.guildId = var15;
                var16.channelId = var13;
                var16.layoutManager = var20;
                var16.focused = var19;
                var15 = function arg0() {
                    _fun110534: for (var _fun110534_ip = 0;;) switch (_fun110534_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = var1.guildId;
                            var _closure3_slot0 = var7;
                            var6 = var1.channelId;
                            var _closure3_slot1 = var6;
                            var9 = var1.layoutManager;
                            var11 = var1.focused;
                            var _closure3_slot2 = var11;
                            var5 = undefined;
                            var _closure3_slot6 = var5;
                            var _closure3_slot7 = var5;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 29;
                            var1 = var4[var1];
                            var8 = var2.bind(var5)(var1);
                            var4 = var8.useStateFromStores;
                            var1 = _closure1_slot7;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = function() { // Environment: var0
                                var2 = _closure1_slot7;
                                var1 = var2.getSelectedParticipantId;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var4.bind(var8)(var2, var1);
                            var _closure3_slot3 = var1;
                            var10 = _closure1_slot4;
                            var8 = var10.useCallback;
                            var4 = new Array(2);
                            var4[0] = var7;
                            var4[1] = var6;
                            var2 = function(arg0) { // Environment: var0
                                _fun110536: for (var _fun110536_ip = 0;;) switch (_fun110536_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = null;
                                        var0 = var0 == var3;
                                        if (var0) {
                                            _fun110536_ip = 61;
                                            continue _fun110536
                                        }
                                    case 12:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 46;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var5 = var4.bind(var1)(var2);
                                        var4 = var5.isVoicePanelParticipantFocusable;
                                        var2 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var0 = var4.bind(var5)(var2, var1, var3);
                                    case 61:
                                        if (!var0) {
                                            _fun110536_ip = 108;
                                            continue _fun110536
                                        }
                                    case 64:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 47;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.selectParticipant;
                                        var0 = _closure3_slot1;
                                        var0 = var1.bind(var2)(var0, var3);
                                    case 108:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var8.bind(var10)(var2, var4);
                            var _closure3_slot4 = var2;
                            var8 = _closure1_slot4;
                            var4 = var8.useRef;
                            var4 = var4.bind(var8)(var5);
                            var _closure3_slot5 = var4;
                            var8 = var9.getTargetDimensions;
                            var4 = null;
                            var10 = var4 != var1;
                            var4 = undefined;
                            if (!var10) {
                                _fun110534_ip = 182;
                                continue _fun110534
                            }
                        case 179:
                            var4 = var1;
                        case 182:
                            var4 = var8.bind(var9)(var4);
                            _closure3_slot6 = var4;
                            var10 = _closure1_slot4;
                            var9 = var10.useLayoutEffect;
                            var8 = new Array(3);
                            var8[0] = var11;
                            var8[1] = var1;
                            var8[2] = var4;
                            var4 = function() { // Environment: var0
                                _fun110537: for (var _fun110537_ip = 0;;) switch (_fun110537_ip) {
                                    case 0:
                                        var0 = _closure3_slot3;
                                        var2 = null;
                                        var0 = var2 != var0;
                                        var3 = null;
                                        if (!var0) {
                                            _fun110537_ip = 42;
                                            continue _fun110537
                                        }
                                    case 18:
                                        var0 = {};
                                        var4 = _closure3_slot3;
                                        var0.id = var4;
                                        var9 = _closure3_slot6;
                                        var10 = var0;
                                        var4 = copyDataProperties(var10, var9);
                                        var3 = var0;
                                    case 42:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 22;
                                        var4 = var4[var0];
                                        var0 = undefined;
                                        var6 = var5.bind(var0)(var4);
                                        var5 = var6.cheapWorkletShallowEqual;
                                        var7 = var2 != var3;
                                        var4 = undefined;
                                        if (!var7) {
                                            _fun110537_ip = 85;
                                            continue _fun110537
                                        }
                                    case 82:
                                        var4 = var3;
                                    case 85:
                                        var7 = _closure3_slot5;
                                        var7 = var7.current;
                                        var8 = var2 != var7;
                                        var2 = undefined;
                                        if (!var8) {
                                            _fun110537_ip = 106;
                                            continue _fun110537
                                        }
                                    case 103:
                                        var2 = var7;
                                    case 106:
                                        var2 = var5.bind(var6)(var4, var2);
                                        if (var2) {
                                            _fun110537_ip = 139;
                                            continue _fun110537
                                        }
                                    case 115:
                                        var2 = _closure3_slot5;
                                        var2.current = var3;
                                        var2 = _closure3_slot2;
                                        var1 = var2.set;
                                        var1 = var1.bind(var2)(var3);
                                    case 139:
                                        return var0;
                                }
                            };
                            var4 = var9.bind(var10)(var4, var8);
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 46;
                            var4 = var9[var4];
                            var4 = var8.bind(var5)(var4);
                            var4 = var4.bind(var5)(var7, var6, var1);
                            _closure3_slot7 = var4;
                            var7 = _closure1_slot4;
                            var6 = var7.useEffect;
                            var5 = new Array(3);
                            var5[0] = var1;
                            var5[1] = var4;
                            var5[2] = var2;
                            var4 = function() { // Environment: var0
                                _fun110538: for (var _fun110538_ip = 0;;) switch (_fun110538_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var2 = null;
                                        if (!(var2 != var1)) {
                                            _fun110538_ip = 31;
                                            continue _fun110538
                                        }
                                    case 13:
                                        var1 = _closure3_slot7;
                                        if (var1) {
                                            _fun110538_ip = 31;
                                            continue _fun110538
                                        }
                                    case 20:
                                        var1 = _closure3_slot4;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 31:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = var6.bind(var7)(var4, var5);
                            var5 = _closure1_slot4;
                            var4 = var5.useEffect;
                            var3 = new Array(1);
                            var3[0] = var2;
                            var0 = function() { // Environment: var0
                                var0 = function() { // Environment: var0
                                    var2 = _closure3_slot4;
                                    var1 = undefined;
                                    var0 = null;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = {};
                            var0.setFocused = var2;
                            var0.manualFocusedItem = var1;
                            return var0;
                    }
                };
                var15 = var15.bind(var3)(var16);
                var16 = var15.manualFocusedItem;
                var15 = var15.setFocused;
                var _closure2_slot29 = var15;
                var14 = var10[var14];
                var29 = var8.bind(var3)(var14);
                var25 = var29.useStateFromStores;
                var14 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var14;
                var14 = function() { // Environment: var0
                    _fun110541: for (var _fun110541_ip = 0;;) switch (_fun110541_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var0 = var2.getConnectedActivityLocation;
                            var3 = var0.bind(var2)();
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 54;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var0 = var2.getEmbeddedActivityLocationChannelId;
                            var4 = var0.bind(var2)(var3);
                            var2 = _closure1_slot6;
                            var0 = var2.getActivityPanelMode;
                            var2 = var0.bind(var2)();
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun110541_ip = 84;
                                continue _fun110541
                            }
                        case 73:
                            var3 = _closure2_slot0;
                            var0 = var4 !== var3;
                        case 84:
                            if (!var0) {
                                _fun110541_ip = 101;
                                continue _fun110541
                            }
                        case 87:
                            var1 = _closure1_slot25;
                            var1 = var1.PANEL;
                            var0 = var2 === var1;
                        case 101:
                            return var0;
                    }
                };
                var15 = var25.bind(var29)(var15, var14);
                var _closure2_slot30 = var15;
                var25 = _closure1_slot46;
                var14 = {};
                var14.isConnected = var12;
                var14.windowDimensions = var22;
                var14.contentDimensions = var28;
                var14.safeArea = var23;
                var14.layoutManager = var20;
                var14.items = var27;
                var14.pushToTalk = var26;
                var14 = var25.bind(var3)(var14);
                var27 = _closure1_slot4;
                var26 = var27.useLayoutEffect;
                var25 = new Array(2);
                var25[0] = var2;
                var25[1] = var15;
                var14 = function() { // Environment: var0
                    _fun110542: for (var _fun110542_ip = 0;;) switch (_fun110542_ip) {
                        case 0:
                            var3 = _closure2_slot26;
                            var1 = _closure1_slot15;
                            var1 = var1.PANEL;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun110542_ip = 31;
                                continue _fun110542
                            }
                        case 27:
                            var1 = _closure2_slot30;
                        case 31:
                            if (!var1) {
                                _fun110542_ip = 77;
                                continue _fun110542
                            }
                        case 34:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.updateActivityPanelMode;
                            var0 = _closure1_slot25;
                            var0 = var0.PIP;
                            var0 = var1.bind(var2)(var0);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var26.bind(var27)(var14, var25);
                var25 = {};
                var25.mode = var9;
                var25.controlsSpecs = var24;
                var14 = function arg0() {
                    var0 = arg0;
                    var11 = var0.mode;
                    var _closure3_slot0 = var11;
                    var10 = var0.controlsSpecs;
                    var _closure3_slot1 = var10;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 21;
                    var2 = var9[var7];
                    var0 = undefined;
                    var4 = var8.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        var2 = _closure3_slot0;
                        var0 = var2.get;
                        var2 = var0.bind(var2)();
                        var0 = new Array(2);
                        var0[0] = var2;
                        var2 = _closure3_slot1;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var1 = var1.mode;
                        var0[1] = var1;
                        return var0;
                    };
                    var6 = {};
                    var6.mode = var11;
                    var6.controlsSpecs = var10;
                    var2.__closure = var6;
                    var6 = 10791754460802.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot42;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun110545: for (var _fun110545_ip = 0;;) switch (_fun110545_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var2);
                                var3 = var7.cheapWorkletArrayShallowEqual;
                                var5 = null;
                                var8 = var5 != var6;
                                var2 = undefined;
                                if (!var8) {
                                    _fun110545_ip = 51;
                                    continue _fun110545
                                }
                            case 48:
                                var2 = var6;
                            case 51:
                                var2 = var3.bind(var7)(var4, var2);
                                if (var2) {
                                    _fun110545_ip = 225;
                                    continue _fun110545
                                }
                            case 63:
                                var3 = _closure1_slot3;
                                var2 = 2;
                                var3 = var3.bind(var0)(var4, var2);
                                var4 = 0;
                                var7 = var3[var4];
                                var2 = 1;
                                var3 = var3[var2];
                                var2 = _closure1_slot20;
                                var2 = var2.DRAWER;
                                var2 = var3 !== var2;
                                if (var2) {
                                    _fun110545_ip = 120;
                                    continue _fun110545
                                }
                            case 106:
                                var3 = _closure1_slot15;
                                var3 = var3.PANEL;
                                var2 = var7 !== var3;
                            case 120:
                                if (var2) {
                                    _fun110545_ip = 170;
                                    continue _fun110545
                                }
                            case 123:
                                var3 = _closure1_slot15;
                                var3 = var3.PANEL;
                                var3 = var7 === var3;
                                if (!var3) {
                                    _fun110545_ip = 167;
                                    continue _fun110545
                                }
                            case 140:
                                var7 = var5 == var6;
                                var5 = undefined;
                                if (var7) {
                                    _fun110545_ip = 153;
                                    continue _fun110545
                                }
                            case 149:
                                var5 = var6[var4];
                            case 153:
                                var4 = _closure1_slot15;
                                var4 = var4.PANEL;
                                var3 = var5 !== var4;
                            case 167:
                                var2 = var3;
                            case 170:
                                if (!var2) {
                                    _fun110545_ip = 225;
                                    continue _fun110545
                                }
                            case 173:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 21;
                                var1 = var5[var1];
                                var3 = var4.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = 50;
                                var1 = var5[var1];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.dismissKeyboard;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                            case 225:
                                return var0;
                        }
                    };
                    var6 = {};
                    var10 = 22;
                    var10 = var9[var10];
                    var10 = var8.bind(var0)(var10);
                    var10 = var10.cheapWorkletArrayShallowEqual;
                    var6.cheapWorkletArrayShallowEqual = var10;
                    var10 = _closure1_slot20;
                    var6.VoicePanelControlsModes = var10;
                    var10 = _closure1_slot15;
                    var6.VoicePanelModes = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.runOnJS;
                    var6.runOnJS = var7;
                    var7 = 50;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.dismissKeyboard;
                    var6.dismissKeyboard = var7;
                    var1.__closure = var6;
                    var6 = 12319127684124.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot43;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var14 = var14.bind(var3)(var25);
                var14 = {};
                var14.channelId = var13;
                var14.transitionState = var21;
                var14.transitionCleanUp = var7;
                var14.connected = var18;
                var14.mode = var9;
                var14.setMode = var17;
                var7 = function arg0() {
                    var0 = arg0;
                    var2 = var0.channelId;
                    var _closure3_slot0 = var2;
                    var15 = var0.transitionState;
                    var _closure3_slot1 = var15;
                    var3 = var0.transitionCleanUp;
                    var _closure3_slot2 = var3;
                    var13 = var0.connected;
                    var _closure3_slot3 = var13;
                    var12 = var0.mode;
                    var _closure3_slot4 = var12;
                    var7 = var0.setMode;
                    var _closure3_slot5 = var7;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var4 = var10[var8];
                    var0 = undefined;
                    var6 = var9.bind(var0)(var4);
                    var4 = var6.useSharedValue;
                    var11 = var4.bind(var6)(var15);
                    var _closure3_slot6 = var11;
                    var14 = _closure1_slot4;
                    var6 = var14.useLayoutEffect;
                    var4 = new Array(4);
                    var4[0] = var15;
                    var4[1] = var11;
                    var4[2] = var3;
                    var4[3] = var2;
                    var3 = function() { // Environment: var1
                        _fun110547: for (var _fun110547_ip = 0;;) switch (_fun110547_ip) {
                            case 0:
                                var3 = _closure3_slot6;
                                var2 = var3.set;
                                var5 = _closure3_slot1;
                                var2 = var2.bind(var3)(var5);
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 45;
                                var3 = var4[var3];
                                var4 = undefined;
                                var3 = var6.bind(var4)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                if (!(var5 !== var3)) {
                                    _fun110547_ip = 66;
                                    continue _fun110547
                                }
                            case 64:
                                return var4;
                            case 66:
                                var3 = _closure1_slot8;
                                var2 = var3.getState;
                                var6 = var2.bind(var3)();
                                var5 = var6.requestFreezeLock;
                                var3 = {};
                                var2 = false;
                                var3.lockEnabled = var2;
                                var9 = _closure3_slot0;
                                var2 = global;
                                var7 = var2.HermesInternal;
                                var8 = var7.concat;
                                var7 = 'voice-panel-freeze-';
                                var7 = var8.bind(var7)(var9);
                                var3.key = var7;
                                var3 = var5.bind(var6)(var3);
                                var3 = var2.setTimeout;
                                var2 = _closure3_slot2;
                                var1 = 500;
                                var1 = var3.bind(var4)(var2, var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var3 = var6.bind(var14)(var3, var4);
                    var6 = _closure1_slot4;
                    var4 = var6.useLayoutEffect;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var1
                        var0 = function() { // Environment: var0
                            var1 = _closure1_slot8;
                            var0 = var1.getState;
                            var2 = var0.bind(var1)();
                            var1 = var2.requestFreezeLock;
                            var0 = {};
                            var3 = false;
                            var0.lockEnabled = var3;
                            var5 = _closure3_slot0;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = 'voice-panel-freeze-';
                            var3 = var4.bind(var3)(var5);
                            var0.key = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                    };
                    var2 = var4.bind(var6)(var2, var3);
                    var2 = var10[var8];
                    var4 = var9.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        var2 = _closure3_slot3;
                        var0 = var2.get;
                        var2 = var0.bind(var2)();
                        var0 = new Array(3);
                        var0[0] = var2;
                        var3 = _closure3_slot4;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0[1] = var2;
                        var2 = _closure3_slot6;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0[2] = var1;
                        return var0;
                    };
                    var6 = {};
                    var6.connected = var13;
                    var6.mode = var12;
                    var6.sharedTransitionState = var11;
                    var2.__closure = var6;
                    var6 = 7656858903152.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot40;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun110552: for (var _fun110552_ip = 0;;) switch (_fun110552_ip) {
                            case 0:
                                var5 = arg0;
                                var7 = arg1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var2);
                                var3 = var6.cheapWorkletArrayShallowEqual;
                                var4 = null;
                                var8 = var4 != var7;
                                var2 = undefined;
                                if (!var8) {
                                    _fun110552_ip = 51;
                                    continue _fun110552
                                }
                            case 48:
                                var2 = var7;
                            case 51:
                                var2 = var3.bind(var6)(var5, var2);
                                if (var2) {
                                    _fun110552_ip = 447;
                                    continue _fun110552
                                }
                            case 63:
                                var3 = _closure1_slot3;
                                var2 = 3;
                                var9 = var3.bind(var0)(var5, var2);
                                var8 = 0;
                                var2 = var9[var8];
                                var6 = 1;
                                var3 = var9[var6];
                                var5 = 2;
                                var9 = var9[var5];
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var5 = 45;
                                var5 = var11[var5];
                                var5 = var10.bind(var0)(var5);
                                var5 = var5.TransitionStates;
                                var5 = var5.YEETED;
                                if (!(var9 !== var5)) {
                                    _fun110552_ip = 381;
                                    continue _fun110552
                                }
                            case 135:
                                var5 = _closure1_slot15;
                                var5 = var5.DISMISSED;
                                if (!(var3 !== var5)) {
                                    _fun110552_ip = 254;
                                    continue _fun110552
                                }
                            case 149:
                                var5 = var2;
                                if (var5) {
                                    _fun110552_ip = 174;
                                    continue _fun110552
                                }
                            case 155:
                                var10 = var4 == var7;
                                var9 = undefined;
                                if (var10) {
                                    _fun110552_ip = 168;
                                    continue _fun110552
                                }
                            case 164:
                                var9 = var7[var8];
                            case 168:
                                var8 = true;
                                var5 = var8 !== var9;
                            case 174:
                                if (var5) {
                                    _fun110552_ip = 191;
                                    continue _fun110552
                                }
                            case 177:
                                var8 = _closure1_slot15;
                                var8 = var8.PIP;
                                var5 = var3 !== var8;
                            case 191:
                                if (var5) {
                                    _fun110552_ip = 447;
                                    continue _fun110552
                                }
                            case 197:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 21;
                                var5 = var9[var5];
                                var9 = var8.bind(var0)(var5);
                                var8 = var9.runOnJS;
                                var5 = _closure3_slot5;
                                var8 = var8.bind(var9)(var5);
                                var5 = _closure1_slot15;
                                var5 = var5.PANEL;
                                var5 = var8.bind(var0)(var5);
                                _fun110552_ip = 447;
                                continue _fun110552;
                            case 254:
                                var8 = var4 == var7;
                                var5 = undefined;
                                if (var8) {
                                    _fun110552_ip = 267;
                                    continue _fun110552
                                }
                            case 263:
                                var5 = var7[var6];
                            case 267:
                                if (!(var4 == var5)) {
                                    _fun110552_ip = 281;
                                    continue _fun110552
                                }
                            case 271:
                                var4 = _closure1_slot15;
                                var5 = var4.PANEL;
                            case 281:
                                var4 = _closure1_slot15;
                                var4 = var4.PANEL;
                                if (!(var4 !== var5)) {
                                    _fun110552_ip = 321;
                                    continue _fun110552
                                }
                            case 295:
                                var4 = _closure1_slot15;
                                var4 = var4.PIP;
                                if (!(var4 !== var5)) {
                                    _fun110552_ip = 321;
                                    continue _fun110552
                                }
                            case 309:
                                var4 = _closure1_slot15;
                                var4 = var4.PANEL;
                                _fun110552_ip = 337;
                                continue _fun110552;
                            case 321:
                                var4 = var5;
                                if (var2) {
                                    _fun110552_ip = 337;
                                    continue _fun110552
                                }
                            case 327:
                                var2 = _closure1_slot15;
                                var4 = var2.PANEL;
                            case 337:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 21;
                                var2 = var6[var2];
                                var6 = var5.bind(var0)(var2);
                                var5 = var6.runOnJS;
                                var2 = _closure3_slot5;
                                var2 = var5.bind(var6)(var2);
                                var2 = var2.bind(var0)(var4);
                                _fun110552_ip = 447;
                                continue _fun110552;
                            case 381:
                                var2 = _closure1_slot15;
                                var2 = var2.DISMISSED;
                                if (!(var3 !== var2)) {
                                    _fun110552_ip = 447;
                                    continue _fun110552
                                }
                            case 395:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 21;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure3_slot5;
                                var2 = var3.bind(var4)(var2);
                                var1 = _closure1_slot15;
                                var1 = var1.DISMISSED;
                                var1 = var2.bind(var0)(var1);
                            case 447:
                                return var0;
                        }
                    };
                    var6 = {};
                    var11 = 22;
                    var11 = var10[var11];
                    var11 = var9.bind(var0)(var11);
                    var11 = var11.cheapWorkletArrayShallowEqual;
                    var6.cheapWorkletArrayShallowEqual = var11;
                    var11 = 45;
                    var11 = var10[var11];
                    var11 = var9.bind(var0)(var11);
                    var11 = var11.TransitionStates;
                    var6.TransitionStates = var11;
                    var11 = _closure1_slot15;
                    var6.VoicePanelModes = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.runOnJS;
                    var6.runOnJS = var8;
                    var6.setMode = var7;
                    var1.__closure = var6;
                    var6 = 5740547237317.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot41;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var7 = var7.bind(var3)(var14);
                var7 = 55;
                var7 = var10[var7];
                var14 = var8.bind(var3)(var7);
                var10 = var14.useControllerPIPState;
                var7 = {};
                var7.channelId = var13;
                var7.connected = var12;
                var8 = null;
                var25 = var8 != var16;
                var21 = undefined;
                if (!var25) {
                    _fun110489_ip = 866;
                    continue _fun110489
                }
            case 863:
                var21 = var16;
            case 866:
                var7.focusedId = var21;
                var7.layoutManager = var20;
                var7.mode = var2;
                var7 = var10.bind(var14)(var7);
                var14 = _closure1_slot1;
                var10 = _closure1_slot2;
                var20 = 56;
                var20 = var10[var20];
                var21 = var14.bind(var3)(var20);
                var20 = {};
                var20.mode = var9;
                var20.controlsSpecs = var24;
                var20.safeArea = var23;
                var20.windowDimensions = var22;
                var20 = var21.bind(var3)(var20);
                _closure2_slot31 = var20;
                var21 = {};
                var21.channelId = var13;
                var21.selectedMode = var2;
                var21.manualFocusedItem = var16;
                var20 = function arg0() {
                    var1 = arg0;
                    var2 = var1.channelId;
                    var _closure3_slot0 = var2;
                    var7 = var1.selectedMode;
                    var _closure3_slot1 = var7;
                    var6 = var1.manualFocusedItem;
                    var5 = _closure1_slot4;
                    var4 = var5.useRef;
                    var3 = null;
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot2 = var3;
                    var5 = _closure1_slot4;
                    var4 = var5.useLayoutEffect;
                    var3 = new Array(3);
                    var3[0] = var7;
                    var3[1] = var6;
                    var3[2] = var2;
                    var2 = function() { // Environment: var0
                        _fun110554: for (var _fun110554_ip = 0;;) switch (_fun110554_ip) {
                            case 0:
                                var2 = _closure1_slot13;
                                var0 = var2.getRTCConnection;
                                var2 = var0.bind(var2)();
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun110554_ip = 51;
                                    continue _fun110554
                                }
                            case 26:
                                var4 = _closure1_slot13;
                                var3 = var4.getChannelId;
                                var4 = var3.bind(var4)();
                                var3 = _closure3_slot0;
                                var0 = var4 === var3;
                            case 51:
                                if (!var0) {
                                    _fun110554_ip = 173;
                                    continue _fun110554
                                }
                            case 54:
                                var0 = _closure3_slot2;
                                var4 = var0.current;
                                var0 = _closure1_slot15;
                                var0 = var0.PIP;
                                if (!(var4 !== var0)) {
                                    _fun110554_ip = 113;
                                    continue _fun110554
                                }
                            case 80:
                                var4 = _closure3_slot1;
                                var0 = _closure1_slot15;
                                var0 = var0.PIP;
                                if (!(var4 === var0)) {
                                    _fun110554_ip = 113;
                                    continue _fun110554
                                }
                            case 98:
                                var4 = var2.setPipOpen;
                                var0 = true;
                                var0 = var4.bind(var2)(var0);
                                _fun110554_ip = 173;
                                continue _fun110554;
                            case 113:
                                var0 = _closure3_slot2;
                                var4 = var0.current;
                                var0 = _closure1_slot15;
                                var0 = var0.PIP;
                                var0 = var4 === var0;
                                if (!var0) {
                                    _fun110554_ip = 157;
                                    continue _fun110554
                                }
                            case 139:
                                var3 = _closure3_slot1;
                                var1 = _closure1_slot15;
                                var1 = var1.PIP;
                                var0 = var3 !== var1;
                            case 157:
                                if (!var0) {
                                    _fun110554_ip = 173;
                                    continue _fun110554
                                }
                            case 160:
                                var1 = var2.setPipOpen;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 173:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = _closure1_slot4;
                    var1 = var2.useLayoutEffect;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot2;
                        var0 = _closure3_slot1;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var20 = var20.bind(var3)(var21);
                var21 = {};
                var21.channelId = var13;
                var21.focused = var19;
                var21.pipState = var7;
                var21.manuallyFocusedId = var16;
                var20 = function arg0() {
                    var2 = arg0;
                    var0 = var2.channelId;
                    var _closure3_slot0 = var0;
                    var12 = var2.focused;
                    var _closure3_slot1 = var12;
                    var11 = var2.pipState;
                    var _closure3_slot2 = var11;
                    var6 = var2.manuallyFocusedId;
                    var _closure3_slot3 = var6;
                    var7 = _closure1_slot4;
                    var4 = var7.useCallback;
                    var3 = new Array(1);
                    var3[0] = var0;
                    var2 = function(arg0) { // Environment: var1
                        _fun110557: for (var _fun110557_ip = 0;;) switch (_fun110557_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = var0.focusedId;
                                var10 = var0.pipParticipantId;
                                var2 = _closure1_slot10;
                                var0 = var2.shouldReactToSeriousThermalStateWhenActivityFocused;
                                var3 = var0.bind(var2)();
                                var0 = var2.consumedRequestToRespondToSeriousThermalState;
                                var2 = var0.bind(var2)();
                                var8 = null;
                                var5 = var8 != var9;
                                if (!var5) {
                                    _fun110557_ip = 87;
                                    continue _fun110557
                                }
                            case 53:
                                var6 = _closure1_slot26;
                                var7 = _closure1_slot7;
                                var4 = var7.getParticipant;
                                var0 = _closure3_slot0;
                                var4 = var4.bind(var7)(var0, var9);
                                var0 = undefined;
                                var5 = var6.bind(var0)(var4);
                            case 87:
                                var4 = var8 != var10;
                                var0 = undefined;
                                var6 = undefined;
                                if (!var4) {
                                    _fun110557_ip = 121;
                                    continue _fun110557
                                }
                            case 98:
                                var9 = _closure1_slot7;
                                var7 = var9.getParticipant;
                                var4 = _closure3_slot0;
                                var6 = var7.bind(var9)(var4, var10);
                            case 121:
                                var7 = var8 == var6;
                                var4 = undefined;
                                if (var7) {
                                    _fun110557_ip = 136;
                                    continue _fun110557
                                }
                            case 130:
                                var4 = var6.streamId;
                            case 136:
                                var4 = var8 != var4;
                                if (!var4) {
                                    _fun110557_ip = 179;
                                    continue _fun110557
                                }
                            case 143:
                                var9 = var8 == var6;
                                var7 = undefined;
                                if (var9) {
                                    _fun110557_ip = 173;
                                    continue _fun110557
                                }
                            case 152:
                                var6 = var6.voiceState;
                                var8 = var8 == var6;
                                var7 = undefined;
                                if (var8) {
                                    _fun110557_ip = 173;
                                    continue _fun110557
                                }
                            case 167:
                                var7 = var6.selfVideo;
                            case 173:
                                var6 = true;
                                var4 = var6 === var7;
                            case 179:
                                if (!var5) {
                                    _fun110557_ip = 436;
                                    continue _fun110557
                                }
                            case 185:
                                if (!var3) {
                                    _fun110557_ip = 436;
                                    continue _fun110557
                                }
                            case 191:
                                if (var2) {
                                    _fun110557_ip = 436;
                                    continue _fun110557
                                }
                            case 197:
                                var3 = _closure1_slot12;
                                var2 = var3.isVideoEnabled;
                                var2 = var2.bind(var3)();
                                var3 = var2;
                                if (var3) {
                                    _fun110557_ip = 220;
                                    continue _fun110557
                                }
                            case 217:
                                var3 = var4;
                            case 220:
                                if (!var3) {
                                    _fun110557_ip = 370;
                                    continue _fun110557
                                }
                            case 226:
                                var8 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 23;
                                var3 = var5[var3];
                                var7 = var8.bind(var0)(var3);
                                var6 = var7.open;
                                var3 = {
                                    'key': 'EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE',
                                    'icon': null,
                                    'content': null,
                                    'disableAnimations': true,
                                    'toastDurationMs': 3000
                                };
                                var4 = 24;
                                var4 = var5[var4];
                                var4 = var8.bind(var0)(var4);
                                var3.icon = var4;
                                var4 = _closure1_slot0;
                                var8 = 25;
                                var9 = var5[var8];
                                var9 = var4.bind(var0)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var8 = var5[var8];
                                var8 = var4.bind(var0)(var8);
                                var8 = var8.t;
                                var8 = var8.O2IlPT;
                                var8 = var9.bind(var10)(var8);
                                var3.content = var8;
                                var3 = var6.bind(var7)(var3);
                                var3 = 26;
                                var3 = var5[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.trackActivityThermalStateNoticeShown;
                                var3 = var3.bind(var4)();
                            case 370:
                                if (!var2) {
                                    _fun110557_ip = 406;
                                    continue _fun110557
                                }
                            case 373:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 27;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.setVideoEnabled;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                            case 406:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 28;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.consumeRequestToReactToSeriousThermalState;
                                var1 = var1.bind(var2)();
                            case 436:
                                return var0;
                        }
                    };
                    var7 = var4.bind(var7)(var2, var3);
                    var _closure3_slot4 = var7;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(4);
                    var2[0] = var6;
                    var2[1] = var11;
                    var2[2] = var7;
                    var2[3] = var0;
                    var0 = function() { // Environment: var1
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.BatchedStoreListener;
                        var2 = _closure1_slot10;
                        var3 = new Array(2);
                        var3[0] = var2;
                        var1 = _closure1_slot7;
                        var3[1] = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = function() { // Environment: var0
                            _fun110559: for (var _fun110559_ip = 0;;) switch (_fun110559_ip) {
                                case 0:
                                    var2 = _closure3_slot4;
                                    var1 = {};
                                    var4 = _closure3_slot3;
                                    var0 = null;
                                    var5 = var0 != var4;
                                    var0 = undefined;
                                    var4 = undefined;
                                    if (!var5) {
                                        _fun110559_ip = 30;
                                        continue _fun110559
                                    }
                                case 26:
                                    var4 = _closure3_slot3;
                                case 30:
                                    var1.focusedId = var4;
                                    var3 = _closure3_slot2;
                                    var3 = var3.id;
                                    var1.pipParticipantId = var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var8 = var2;
                        var7 = var3;
                        var1 = new var8[var4](var7, var6, var5);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var _closure4_slot0 = var3;
                        var2 = var3.attach;
                        var5 = _closure3_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = 'thermal-state-reactions-';
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var1);
                        var0 = function() { // Environment: var0
                            var1 = _closure4_slot0;
                            var0 = var1.detach;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var2 = var10[var8];
                    var0 = undefined;
                    var4 = var9.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        _fun110561: for (var _fun110561_ip = 0;;) switch (_fun110561_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var2 = null;
                                var3 = var2 == var0;
                                var2 = undefined;
                                if (var3) {
                                    _fun110561_ip = 32;
                                    continue _fun110561
                                }
                            case 27:
                                var2 = var0.id;
                            case 32:
                                var0 = new Array(2);
                                var0[0] = var2;
                                var1 = _closure3_slot2;
                                var1 = var1.id;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.focused = var12;
                    var6.pipState = var11;
                    var2.__closure = var6;
                    var6 = 94735519164.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot31;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun110562: for (var _fun110562_ip = 0;;) switch (_fun110562_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var3 = var5.cheapWorkletArrayShallowEqual;
                                var2 = null;
                                var7 = var2 != var6;
                                var2 = undefined;
                                if (!var7) {
                                    _fun110562_ip = 51;
                                    continue _fun110562
                                }
                            case 48:
                                var2 = var6;
                            case 51:
                                var2 = var3.bind(var5)(var4, var2);
                                if (var2) {
                                    _fun110562_ip = 140;
                                    continue _fun110562
                                }
                            case 60:
                                var3 = _closure1_slot3;
                                var2 = 2;
                                var3 = var3.bind(var0)(var4, var2);
                                var2 = 0;
                                var4 = var3[var2];
                                var2 = 1;
                                var3 = var3[var2];
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 21;
                                var1 = var5[var1];
                                var5 = var2.bind(var0)(var1);
                                var2 = var5.runOnJS;
                                var1 = _closure3_slot4;
                                var2 = var2.bind(var5)(var1);
                                var1 = {};
                                var1.focusedId = var4;
                                var1.pipParticipantId = var3;
                                var1 = var2.bind(var0)(var1);
                            case 140:
                                return var0;
                        }
                    };
                    var6 = {};
                    var11 = 22;
                    var11 = var10[var11];
                    var11 = var9.bind(var0)(var11);
                    var11 = var11.cheapWorkletArrayShallowEqual;
                    var6.cheapWorkletArrayShallowEqual = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.runOnJS;
                    var6.runOnJS = var8;
                    var6.handleStateUpdates = var7;
                    var1.__closure = var6;
                    var6 = 15246095289306.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot32;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var20 = var20.bind(var3)(var21);
                var20 = {};
                var20.channelId = var13;
                var20.focused = var19;
                var20.mode = var9;
                var20.connected = var18;
                var19 = function arg0() {
                    var2 = arg0;
                    var0 = var2.channelId;
                    var _closure3_slot0 = var0;
                    var13 = var2.focused;
                    var _closure3_slot1 = var13;
                    var12 = var2.mode;
                    var _closure3_slot2 = var12;
                    var11 = var2.connected;
                    var _closure3_slot3 = var11;
                    var4 = _closure1_slot4;
                    var3 = var4.useCallback;
                    var2 = new Array(1);
                    var2[0] = var0;
                    var0 = function(arg0) { // Environment: var1
                        _fun110564: for (var _fun110564_ip = 0;;) switch (_fun110564_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.focusedParticipantId;
                                var2 = var0.voicePanelMode;
                                var0 = var0.connectedValue;
                                if (!var0) {
                                    _fun110564_ip = 41;
                                    continue _fun110564
                                }
                            case 24:
                                var1 = _closure1_slot15;
                                var1 = var1.PANEL;
                                var0 = var2 === var1;
                            case 41:
                                var1 = null;
                                var2 = var1 != var6;
                                if (!var2) {
                                    _fun110564_ip = 87;
                                    continue _fun110564
                                }
                            case 50:
                                var4 = _closure1_slot26;
                                var5 = _closure1_slot7;
                                var3 = var5.getParticipant;
                                var1 = _closure3_slot0;
                                var3 = var3.bind(var5)(var1, var6);
                                var1 = undefined;
                                var2 = var4.bind(var1)(var3);
                            case 87:
                                if (!var2) {
                                    _fun110564_ip = 93;
                                    continue _fun110564
                                }
                            case 90:
                                var2 = var0;
                            case 93:
                                var1 = _closure1_slot14;
                                var0 = var1.getState;
                                var1 = var0.bind(var1)();
                                var0 = var1.setIsActivityFocused;
                                var0 = var0.bind(var1)(var2);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = var3.bind(var4)(var0, var2);
                    var _closure3_slot4 = var7;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var2 = var10[var8];
                    var0 = undefined;
                    var4 = var9.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        _fun110565: for (var _fun110565_ip = 0;;) switch (_fun110565_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var2 = null;
                                var3 = var2 == var0;
                                var2 = undefined;
                                if (var3) {
                                    _fun110565_ip = 32;
                                    continue _fun110565
                                }
                            case 27:
                                var2 = var0.id;
                            case 32:
                                var0 = new Array(3);
                                var0[0] = var2;
                                var3 = _closure3_slot2;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var0[1] = var2;
                                var2 = _closure3_slot3;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var0[2] = var1;
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.focused = var13;
                    var6.mode = var12;
                    var6.connected = var11;
                    var2.__closure = var6;
                    var6 = 16641161683997.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot29;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun110566: for (var _fun110566_ip = 0;;) switch (_fun110566_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg1;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var3 = var5.cheapWorkletArrayShallowEqual;
                                var2 = null;
                                var7 = var2 != var6;
                                var2 = undefined;
                                if (!var7) {
                                    _fun110566_ip = 51;
                                    continue _fun110566
                                }
                            case 48:
                                var2 = var6;
                            case 51:
                                var2 = var3.bind(var5)(var4, var2);
                                if (var2) {
                                    _fun110566_ip = 152;
                                    continue _fun110566
                                }
                            case 60:
                                var3 = _closure1_slot3;
                                var2 = 3;
                                var3 = var3.bind(var0)(var4, var2);
                                var2 = 0;
                                var5 = var3[var2];
                                var2 = 1;
                                var4 = var3[var2];
                                var2 = 2;
                                var3 = var3[var2];
                                var2 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 21;
                                var1 = var6[var1];
                                var6 = var2.bind(var0)(var1);
                                var2 = var6.runOnJS;
                                var1 = _closure3_slot4;
                                var2 = var2.bind(var6)(var1);
                                var1 = {};
                                var1.focusedParticipantId = var5;
                                var1.voicePanelMode = var4;
                                var1.connectedValue = var3;
                                var1 = var2.bind(var0)(var1);
                            case 152:
                                return var0;
                        }
                    };
                    var6 = {};
                    var11 = 22;
                    var11 = var10[var11];
                    var11 = var9.bind(var0)(var11);
                    var11 = var11.cheapWorkletArrayShallowEqual;
                    var6.cheapWorkletArrayShallowEqual = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.runOnJS;
                    var6.runOnJS = var8;
                    var6.handleAnimatedReaction = var7;
                    var1.__closure = var6;
                    var6 = 15290799116693.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot30;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var19 = var19.bind(var3)(var20);
                var19 = {};
                var19.setControlsMode = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var5 = var0.setControlsMode;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.useCallback;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = {};
                        var0 = _closure1_slot20;
                        var0 = var0.FLOATING_DEFAULT;
                        var1.mode = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var1, var2);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var1.onTransition = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var11.bind(var3)(var19);
                var11 = 57;
                var11 = var10[var11];
                var11 = var14.bind(var3)(var11);
                var34 = undefined;
                var33 = var13;
                var32 = var9;
                var31 = var17;
                var30 = var18;
                var11 = var34[var11](var33, var32, var31, var30, var29);
                var11 = 58;
                var11 = var10[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.bind(var3)();
                var14 = _closure1_slot47;
                var11 = {};
                var11.isConnected = var12;
                var11.selectedMode = var2;
                var11.manualFocusedItem = var16;
                var11.isNonVoiceEmbeddedActivityInPanelMode = var15;
                var11 = var14.bind(var3)(var11);
                var11 = {};
                var11.channelId = var13;
                var11.isConnected = var12;
                var11.selectedMode = var2;
                var2 = function arg0() {
                    var1 = arg0;
                    var5 = var1.channelId;
                    var _closure3_slot0 = var5;
                    var4 = var1.isConnected;
                    var _closure3_slot1 = var4;
                    var6 = var1.selectedMode;
                    var _closure3_slot2 = var6;
                    var3 = _closure1_slot4;
                    var2 = var3.useEffect;
                    var1 = new Array(3);
                    var1[0] = var6;
                    var1[1] = var5;
                    var1[2] = var4;
                    var0 = function() { // Environment: var0
                        _fun110570: for (var _fun110570_ip = 0;;) switch (_fun110570_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var0 = _closure1_slot15;
                                var0 = var0.DISMISSED;
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun110570_ip = 31;
                                    continue _fun110570
                                }
                            case 27:
                                var0 = _closure3_slot1;
                            case 31:
                                if (!var0) {
                                    _fun110570_ip = 135;
                                    continue _fun110570
                                }
                            case 34:
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 48;
                                var0 = var8[var0];
                                var7 = undefined;
                                var3 = var1.bind(var7)(var0);
                                var2 = var3.track;
                                var0 = _closure1_slot21;
                                var1 = var0.VIDEO_LAYOUT_TOGGLED;
                                var0 = {};
                                var9 = _closure1_slot16;
                                var6 = _closure3_slot2;
                                var6 = var9.bind(var7)(var6);
                                var0.video_layout = var6;
                                var6 = _closure1_slot0;
                                var5 = 49;
                                var5 = var8[var5];
                                var6 = var6.bind(var7)(var5);
                                var5 = var6.collectVoiceAnalyticsMetadata;
                                var4 = _closure3_slot0;
                                var10 = var5.bind(var6)(var4);
                                var11 = var0;
                                var4 = copyDataProperties(var11, var10);
                                var0 = var2.bind(var3)(var1, var0);
                            case 135:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var2 = var2.bind(var3)(var11);
                var2 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot4;
                    var4 = var5.useRef;
                    var2 = -1;
                    var2 = var4.bind(var5)(var2);
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.useSharedValue;
                    var2 = null;
                    var2 = var4.bind(var5)(var2);
                    var _closure3_slot2 = var2;
                    var6 = _closure1_slot4;
                    var5 = var6.useCallback;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var2;
                    var1 = function(arg0) { // Environment: var0
                        _fun110572: for (var _fun110572_ip = 0;;) switch (_fun110572_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure3_slot0;
                                var0 = var2.get;
                                var4 = var0.bind(var2)();
                                var2 = _closure1_slot15;
                                var2 = var2.PANEL;
                                if (!(var4 === var2)) {
                                    _fun110572_ip = 133;
                                    continue _fun110572
                                }
                            case 36:
                                var4 = _closure3_slot2;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var3);
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun110572_ip = 133;
                                    continue _fun110572
                                }
                            case 56:
                                var2 = global;
                                var5 = var2.clearTimeout;
                                var1 = _closure3_slot1;
                                var3 = var1.current;
                                var4 = undefined;
                                var3 = var5.bind(var4)(var3);
                                var3 = var2.setTimeout;
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 30;
                                var0 = var5[var0];
                                var0 = var2.bind(var4)(var0);
                                var2 = var0.FLOATING_CTA_HIDE_TIMEOUT;
                                var0 = function() { // Environment: var0
                                    var2 = _closure3_slot2;
                                    var1 = var2.set;
                                    var0 = null;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var0, var2);
                                var1.current = var0;
                            case 133:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    var5 = _closure1_slot4;
                    var4 = var5.useLayoutEffect;
                    var3 = function() { // Environment: var0
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var2 = var0.clearTimeout;
                            var0 = _closure3_slot1;
                            var1 = var0.current;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = new Array(0);
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = {};
                    var0.showFloatingCTA = var2;
                    var0.setShowFloatingCTA = var1;
                    return var0;
                };
                var2 = var2.bind(var3)(var9);
                var9 = var2.showFloatingCTA;
                _closure2_slot32 = var9;
                var2 = var2.setShowFloatingCTA;
                _closure2_slot33 = var2;
                var9 = _closure1_slot4;
                var2 = var9.useRef;
                var2 = var2.bind(var9)(var3);
                _closure2_slot34 = var2;
                var9 = _closure1_slot0;
                var2 = 21;
                var2 = var10[var2];
                var9 = var9.bind(var3)(var2);
                var2 = var9.useAnimatedRef;
                var2 = var2.bind(var9)();
                _closure2_slot35 = var2;
                var9 = _closure1_slot4;
                var2 = var9.useRef;
                var2 = var2.bind(var9)(var1);
                _closure2_slot36 = var2;
                var11 = _closure1_slot4;
                var10 = var11.useEffect;
                var9 = function() { // Environment: var0
                    var1 = _closure2_slot36;
                    var0 = 0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var9 = var2.current;
                if (!(var8 != var9)) {
                    _fun110489_ip = 1394;
                    continue _fun110489
                }
            case 1280:
                var9 = var2.current;
                var9 = var9 + 1;
                var2.current = var9;
                var10 = var2.current;
                var9 = 10;
                if (!(var10 > var9)) {
                    _fun110489_ip = 1394;
                    continue _fun110489
                }
            case 1306:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 59;
                var9 = var11[var9];
                var11 = var10.bind(var3)(var9);
                var10 = var11.addBreadcrumb;
                var9 = {};
                var12 = 'voice-panel';
                var9.category = var12;
                var15 = var2.current;
                var12 = global;
                var12 = var12.HermesInternal;
                var14 = var12.concat;
                var13 = 'VoicePanelController is rendering too many times (>';
                var12 = ')';
                var12 = var14.bind(var13)(var15, var12);
                var9.message = var12;
                var9 = var10.bind(var11)(var9);
                var2.current = var8;
            case 1394:
                var8 = _closure1_slot4;
                var2 = var8.useState;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.channelId = var2;
                    var2 = _closure2_slot4;
                    var0.connected = var2;
                    var2 = _closure2_slot5;
                    var0.contentDimensions = var2;
                    var2 = _closure2_slot22;
                    var0.controlsSpecs = var2;
                    var2 = _closure2_slot28;
                    var0.dismissPanel = var2;
                    var2 = _closure2_slot34;
                    var0.dismissToPIPGestureRef = var2;
                    var2 = _closure2_slot6;
                    var0.dragScrolling = var2;
                    var2 = _closure2_slot7;
                    var0.focused = var2;
                    var2 = _closure2_slot21;
                    var0.generateStateLocker = var2;
                    var2 = _closure2_slot1;
                    var0.guildId = var2;
                    var2 = _closure2_slot24;
                    var0.hideControls = var2;
                    var2 = _closure2_slot8;
                    var0.isCall = var2;
                    var2 = _closure2_slot16;
                    var0.isFocusedVideoZoomed = var2;
                    var2 = _closure2_slot9;
                    var0.layoutManager = var2;
                    var2 = _closure2_slot10;
                    var0.mode = var2;
                    var2 = _closure2_slot20;
                    var0.morphablePanelMode = var2;
                    var2 = _closure2_slot3;
                    var0.mountedCards = var2;
                    var2 = _closure2_slot31;
                    var0.pipAvoidanceSpecs = var2;
                    var2 = _closure2_slot35;
                    var0.pipContainerRef = var2;
                    var2 = _closure2_slot11;
                    var0.preJoinContentSize = var2;
                    var2 = _closure2_slot12;
                    var0.safeArea = var2;
                    var2 = _closure2_slot13;
                    var0.scrollPosition = var2;
                    var2 = _closure2_slot25;
                    var0.setControlsMode = var2;
                    var2 = _closure2_slot29;
                    var0.setFocused = var2;
                    var2 = _closure2_slot17;
                    var0.setIsFocusedVideoZoomed = var2;
                    var2 = _closure2_slot27;
                    var0.setMode = var2;
                    var2 = _closure2_slot33;
                    var0.setShowFloatingCTA = var2;
                    var2 = _closure2_slot23;
                    var0.showControls = var2;
                    var2 = _closure2_slot32;
                    var0.showFloatingCTA = var2;
                    var2 = _closure2_slot2;
                    var0.streamOutputSinkStack = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 60;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.usePIPState;
                    var0.usePIPState = var2;
                    var2 = _closure2_slot18;
                    var0.useReducedMotion = var2;
                    var2 = _closure2_slot14;
                    var0.windowDimensions = var2;
                    var2 = _closure2_slot15;
                    var0.wrapperDimensions = var2;
                    var1 = _closure2_slot19;
                    var0.wrapperOffset = var1;
                    return var0;
                };
                var2 = var2.bind(var8)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var5);
                var5 = var0[var1];
                var2 = _closure1_slot28;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 61;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Provider;
                var0 = {};
                var0.value = var5;
                var5 = _closure1_slot0;
                var4 = 60;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.VoicePanelPIPStateContext;
                var5 = var4.Provider;
                var4 = {};
                var4.value = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 1371, 3939, 13594, 8071, 7890, 1372, 3467, 3509, 7872, 11803, 11801, 660, 3448, 7909, 3514, 11804, 33, 14226, 3711, 5297, 3139, 14227, 1234, 14228, 8203, 7907, 566, 14229, 1464, 1568, 14236, 11805, 1309, 7812, 5296, 22, 491, 1229, 802, 1584, 5251, 3944, 4019, 14237, 7873, 795, 4298, 3709, 5846, 14238, 14239, 3072, 14240, 14246, 14247, 14192, 1207, 14248, 11802, 2]);