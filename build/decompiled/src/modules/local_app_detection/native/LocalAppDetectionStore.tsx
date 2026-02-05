// modules/local_app_detection/native/LocalAppDetectionStore.tsx
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
        _fun95612: for (var _fun95612_ip = 0;;) switch (_fun95612_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95612_ip = 46;
                    continue _fun95612
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95612_ip = 55;
                    continue _fun95612
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95612_ip = 345;
                    continue _fun95612
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95612_ip = 323;
                    continue _fun95612
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95612_ip = 283;
                    continue _fun95612
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95612_ip = 270;
                    continue _fun95612
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
                    _fun95612_ip = 163;
                    continue _fun95612
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95612_ip = 179;
                    continue _fun95612
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95612_ip = 249;
                    continue _fun95612
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95612_ip = 249;
                    continue _fun95612
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95612_ip = 234;
                    continue _fun95612
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95612_ip = 247;
                    continue _fun95612
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95612_ip = 265;
                continue _fun95612;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95612_ip = 283;
                continue _fun95612;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95612_ip = 323;
                    continue _fun95612
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
                    _fun95612_ip = 330;
                    continue _fun95612
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95613: for (var _fun95613_ip = 0;;) switch (_fun95613_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95613_ip = 56;
                                continue _fun95613
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
                            _fun95613_ip = 67;
                            continue _fun95613;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun95614: for (var _fun95614_ip = 0;;) switch (_fun95614_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95614_ip = 23;
                    continue _fun95614
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95614_ip = 33;
                    continue _fun95614
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
                    _fun95614_ip = 70;
                    continue _fun95614
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95614_ip = 55;
                    continue _fun95614
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        _fun95615: for (var _fun95615_ip = 0;;) switch (_fun95615_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun95615_ip = 76;
                continue _fun95615;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Consents;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = false;
    var3.detected = var7;
    var3.lastScannedAt = var0;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = {};
    var3.apps = var7;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun95619: for (var _fun95619_ip = 0;;) switch (_fun95619_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 8;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.POST_CONNECTION_OPEN = var6;
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleLocalAppDetectionComplete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.LOCAL_APP_DETECTION_COMPLETE = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun95619_ip = 124;
                        continue _fun95619
                    }
                case 111:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun95619_ip = 158;
                    continue _fun95619;
                case 124:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 158:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun95622: for (var _fun95622_ip = 0;;) switch (_fun95622_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun95622_ip = 19;
                        continue _fun95622
                    }
                case 12:
                    var1 = _closure1_slot12;
                case 19:
                    _closure1_slot12 = var1;
                    var1 = var2.waitFor;
                    var0 = _closure1_slot9;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAppState';
        var4.key = var6;
        var6 = function arg0() {
            _fun95624: for (var _fun95624_ip = 0;;) switch (_fun95624_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getUserAgnosticState;
                    var0 = var0.bind(var1)();
                    var1 = var0.apps;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun95624_ip = 39;
                        continue _fun95624
                    }
                case 32:
                    var0 = _closure1_slot11;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isAppInstalled';
        var4.key = var6;
        var6 = function arg0() {
            _fun95625: for (var _fun95625_ip = 0;;) switch (_fun95625_ip) {
                case 0:
                    var3 = this;
                    var2 = _closure1_slot9;
                    var1 = var2.hasConsented;
                    var0 = _closure1_slot10;
                    var0 = var0.PERSONALIZATION;
                    var0 = var1.bind(var2)(var0);
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun95625_ip = 60;
                        continue _fun95625
                    }
                case 40:
                    var2 = var3.getAppState;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var0 = var1.detected;
                case 60:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handlePostConnectionOpen';
        var4.key = var6;
        var6 = function() {
            _fun95626: for (var _fun95626_ip = 0;;) switch (_fun95626_ip) {
                case 0:
                    var9 = this;
                    var3 = new Array(0);
                    var4 = _closure1_slot13;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.ALL_DETECTABLE_APP_NAMES;
                    var8 = var4.bind(var0)(var2);
                    var4 = var8.bind(var0)();
                    var2 = var4.done;
                    var7 = global;
                    var6 = 86400000;
                    var5 = null;
                    if (var2) {
                        _fun95626_ip = 155;
                        continue _fun95626
                    }
                case 69:
                    var10 = var4.value;
                    var2 = var9.getAppState;
                    var11 = var2.bind(var9)(var10);
                    var2 = var11.lastScannedAt;
                    var2 = var5 == var2;
                    if (var2) {
                        _fun95626_ip = 127;
                        continue _fun95626
                    }
                case 98:
                    var13 = var7.Date;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var11 = var11.lastScannedAt;
                    var11 = var12 - var11;
                    var2 = var11 > var6;
                case 127:
                    if (!var2) {
                        _fun95626_ip = 140;
                        continue _fun95626
                    }
                case 130:
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var10);
                case 140:
                    var10 = var8.bind(var0)();
                    var2 = var10.done;
                    var4 = var10;
                    if (!var2) {
                        _fun95626_ip = 69;
                        continue _fun95626
                    }
                case 155:
                    var4 = var3.length;
                    var2 = 0;
                    if (!(var4 > var2)) {
                        _fun95626_ip = 197;
                        continue _fun95626
                    }
                case 166:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.detectLocalApps;
                    var1 = var1.bind(var2)(var3);
                case 197:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleLocalAppDetectionComplete';
        var4.key = var6;
        var6 = function arg0() {
            _fun95627: for (var _fun95627_ip = 0;;) switch (_fun95627_ip) {
                case 0:
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.entries;
                    var1 = arg0;
                    var1 = var1.result;
                    var9 = var2.bind(var3)(var1);
                    var1 = var9.length;
                    var8 = 0;
                    if (!(var8 !== var1)) {
                        _fun95627_ip = 154;
                        continue _fun95627
                    }
                case 39:
                    var1 = var0.Date;
                    var0 = var1.now;
                    var7 = var0.bind(var1)();
                    var2 = {};
                    var13 = _closure1_slot12;
                    var14 = var2;
                    var0 = copyDataProperties(var14, var13);
                    var0 = var9.length;
                    var3 = var8 < var0;
                    var0 = undefined;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    if (!var3) {
                        _fun95627_ip = 148;
                        continue _fun95627
                    }
                case 92:
                    var10 = var9[var4];
                    var3 = _closure1_slot3;
                    var3 = var3.bind(var0)(var10, var6);
                    var11 = var3[var8];
                    var12 = var3[var5];
                    var10 = var2.apps;
                    var3 = {};
                    var3.detected = var12;
                    var3.lastScannedAt = var7;
                    var10[var11] = var3;
                    var4 = var4 + 1;
                    var3 = var9.length;
                    if (var4 < var3) {
                        _fun95627_ip = 92;
                        continue _fun95627
                    }
                case 148:
                    _closure1_slot12 = var2;
                    return var0;
                case 154:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'DEV_resetState';
        var4.key = var6;
        var5 = function() {
            var1 = {};
            var0 = {};
            var1.apps = var0;
            _closure1_slot12 = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'AppDetectionStore';
    var1.displayName = var3;
    var1.persistKey = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/local_app_detection/native/LocalAppDetectionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 4559, 660, 806, 12495, 12496, 566, 2]);