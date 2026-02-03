// modules/dismissible_content/DismissibleContentFrameworkStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun15636: for (var _fun15636_ip = 0;;) switch (_fun15636_ip) {
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
            case 70: // try_end0
                _fun15636_ip = 74;
                continue _fun15636;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun15639: for (var _fun15639_ip = 0;;) switch (_fun15639_ip) {
            case 0:
                var0 = _closure1_slot9;
                var2 = var0.seenForGuildId;
                var1 = var2.get;
                var0 = arg1;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun15639_ip = 48;
                    continue _fun15639
                }
            case 35:
                var2 = var3.has;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 48:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot8 = var1;
    var1 = {
        'numberOfDCsShownToday': 0,
        'dailyCapPeriodStart': null,
        'dismissibleContentSeenDuringSession': null,
        'dailyCapOverridden': false,
        'newUserMinAgeRequiredOverridden': false,
        'renderedAtTimestamps': null,
        'lastDCDismissed': null
    };
    var8 = var7.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var1.dismissibleContentSeenDuringSession = var8;
    var8 = var7.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var1.renderedAtTimestamps = var8;
    var7 = var7.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var1.seenForGuildId = var7;
    var _closure1_slot9 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun15641: for (var _fun15641_ip = 0;;) switch (_fun15641_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun15641_ip = 69;
                        continue _fun15641
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15641_ip = 105;
                    continue _fun15641;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun15642: for (var _fun15642_ip = 0;;) switch (_fun15642_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun15642_ip = 108;
                        continue _fun15642
                    }
                case 9:
                    var4 = _closure1_slot9;
                    var5 = var0.numberOfDCsShownToday;
                    var6 = var1 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun15642_ip = 34;
                        continue _fun15642
                    }
                case 31:
                    var3 = var5;
                case 34:
                    var4.numberOfDCsShownToday = var3;
                    var4 = _closure1_slot9;
                    var3 = var0.dailyCapPeriodStart;
                    var4.dailyCapPeriodStart = var3;
                    var4 = _closure1_slot9;
                    var5 = var0.dailyCapOverridden;
                    var3 = var1 != var5;
                    if (!var3) {
                        _fun15642_ip = 76;
                        continue _fun15642
                    }
                case 73:
                    var3 = var5;
                case 76:
                    var4.dailyCapOverridden = var3;
                    var2 = _closure1_slot9;
                    var3 = var0.newUserMinAgeRequiredOverridden;
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun15642_ip = 102;
                        continue _fun15642
                    }
                case 99:
                    var0 = var3;
                case 102:
                    var2.newUserMinAgeRequiredOverridden = var0;
                case 108:
                    var4 = _closure1_slot9;
                    var2 = global;
                    var3 = var2.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var5;
                    var3 = new var7[var3](var6);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var4.dismissibleContentSeenDuringSession = var3;
                    var3 = _closure1_slot9;
                    var2 = var2.Map;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var4;
                    var2 = new var7[var2](var6);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3.seenForGuildId = var2;
                    var0 = _closure1_slot9;
                    var0.lastDCDismissed = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'dailyCapOverridden';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.dailyCapOverridden;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'newUserMinAgeRequiredOverridden';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.newUserMinAgeRequiredOverridden;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'lastDCDismissed';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var0 = var0.lastDCDismissed;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRenderedAtTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot9;
            var2 = var0.renderedAtTimestamps;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasUserHitDCCap';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun15648: for (var _fun15648_ip = 0;;) switch (_fun15648_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun15648_ip = 75;
                        continue _fun15648
                    }
                case 12:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                    var4 = var1.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                    var1 = var4.has;
                    var1 = var1.bind(var4)(var3);
                    if (var1) {
                        _fun15648_ip = 324;
                        continue _fun15648
                    }
                case 59:
                    var0 = _closure1_slot9;
                    var0 = var0.dailyCapOverridden;
                    if (var0) {
                        _fun15648_ip = 324;
                        continue _fun15648
                    }
                case 75:
                    if (!(var2 != var3)) {
                        _fun15648_ip = 183;
                        continue _fun15648
                    }
                case 79:
                    var0 = var2 != var5;
                    if (!var0) {
                        _fun15648_ip = 122;
                        continue _fun15648
                    }
                case 86:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var1 = var4.isGuildDismissibleContent;
                    var0 = var1.bind(var4)(var3);
                case 122:
                    if (!var0) {
                        _fun15648_ip = 150;
                        continue _fun15648
                    }
                case 125:
                    if (!(var2 != var5)) {
                        _fun15648_ip = 150;
                        continue _fun15648
                    }
                case 129:
                    var4 = _closure1_slot11;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var5);
                    if (var1) {
                        _fun15648_ip = 320;
                        continue _fun15648
                    }
                case 150:
                    if (var0) {
                        _fun15648_ip = 183;
                        continue _fun15648
                    }
                case 153:
                    var0 = _closure1_slot9;
                    var1 = var0.dismissibleContentSeenDuringSession;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var3);
                    if (!var0) {
                        _fun15648_ip = 183;
                        continue _fun15648
                    }
                case 179:
                    var0 = false;
                    return var0;
                case 183:
                    var0 = global;
                    var0 = var0.Date;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var0](var10);
                    var6 = var0 instanceof Object ? var0 : var1;
                    var0 = var6.setHours;
                    var3 = 0;
                    var11 = var6;
                    var10 = 0;
                    var9 = 0;
                    var8 = 0;
                    var7 = 0;
                    var0 = var11[var0](var10, var9, var8, var7, var6);
                    var1 = _closure1_slot9;
                    var1 = var1.dailyCapPeriodStart;
                    var1 = var2 != var1;
                    if (!var1) {
                        _fun15648_ip = 278;
                        continue _fun15648
                    }
                case 254:
                    var4 = _closure1_slot9;
                    var5 = var4.dailyCapPeriodStart;
                    var4 = var6.getTime;
                    var4 = var4.bind(var6)();
                    var1 = var5 < var4;
                case 278:
                    if (!var1) {
                        _fun15648_ip = 301;
                        continue _fun15648
                    }
                case 281:
                    var1 = _closure1_slot9;
                    var1.numberOfDCsShownToday = var3;
                    var1 = _closure1_slot9;
                    var1.dailyCapPeriodStart = var2;
                case 301:
                    var0 = _closure1_slot9;
                    var1 = var0.numberOfDCsShownToday;
                    var0 = 3;
                    var0 = var1 >= var0;
                    return var0;
                case 320:
                    var0 = false;
                    return var0;
                case 324:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'DismissibleContentFrameworkStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        var0 = {};
        var2 = arg0;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 10;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var1 = {};
        var5 = _closure1_slot9;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var2 = global;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var7 = var4;
        var3 = new var7[var3](var6);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = 'dismissibleContentSeenDuringSession';
        var1[var3] = var4;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var7 = var4;
        var3 = new var7[var3](var6);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = 'renderedAtTimestamps';
        var1[var3] = var4;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var7 = var3;
        var2 = new var7[var2](var6);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = 'seenForGuildId';
        var1[var2] = var3;
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.value;
        var0 = _closure1_slot9;
        var0.dailyCapOverridden = var1;
        var0 = undefined;
        return var0;
    };
    var1.DCF_DAILY_CAP_OVERRIDE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.value;
        var0 = _closure1_slot9;
        var0.newUserMinAgeRequiredOverridden = var1;
        var0 = undefined;
        return var0;
    };
    var1.DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE = var8;
    var8 = function arg0() {
        _fun15653: for (var _fun15653_ip = 0;;) switch (_fun15653_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.dismissibleContent;
                var7 = var0.guildId;
                var1 = global;
                var0 = var1.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var12 = var2;
                var0 = new var12[var0](var11);
                var4 = var0 instanceof Object ? var0 : var2;
                var0 = _closure1_slot9;
                var3 = var0.renderedAtTimestamps;
                var2 = var3.set;
                var0 = var4.getTime;
                var0 = var0.bind(var4)();
                var0 = var2.bind(var3)(var6, var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var2 = var3.has;
                var2 = var2.bind(var3)(var6);
                if (var2) {
                    _fun15653_ip = 525;
                    continue _fun15653
                }
            case 120:
                var2 = _closure1_slot9;
                var2 = var2.dailyCapOverridden;
                if (var2) {
                    _fun15653_ip = 525;
                    continue _fun15653
                }
            case 136:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isGuildDismissibleContent;
                var3 = var2.bind(var3)(var6);
                if (!var3) {
                    _fun15653_ip = 176;
                    continue _fun15653
                }
            case 170:
                var2 = null;
                var3 = var2 != var7;
            case 176:
                if (var3) {
                    _fun15653_ip = 205;
                    continue _fun15653
                }
            case 179:
                var2 = _closure1_slot9;
                var4 = var2.dismissibleContentSeenDuringSession;
                var2 = var4.has;
                var2 = var2.bind(var4)(var6);
                if (var2) {
                    _fun15653_ip = 525;
                    continue _fun15653
                }
            case 205:
                if (!var3) {
                    _fun15653_ip = 224;
                    continue _fun15653
                }
            case 208:
                var2 = _closure1_slot11;
                var2 = var2.bind(var0)(var6, var7);
                if (var2) {
                    _fun15653_ip = 525;
                    continue _fun15653
                }
            case 224:
                var2 = _closure1_slot9;
                if (var3) {
                    _fun15653_ip = 249;
                    continue _fun15653
                }
            case 231:
                var4 = var2.dismissibleContentSeenDuringSession;
                var3 = var4.add;
                var3 = var3.bind(var4)(var6);
                _fun15653_ip = 328;
                continue _fun15653;
            case 249:
                var3 = var2.seenForGuildId;
                var2 = var3.get;
                var4 = var2.bind(var3)(var7);
                var2 = null;
                if (!(var2 == var4)) {
                    _fun15653_ip = 297;
                    continue _fun15653
                }
            case 271:
                var2 = var1.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var3;
                var2 = new var12[var2](var11);
                var4 = var2 instanceof Object ? var2 : var3;
            case 297:
                var2 = var4.add;
                var2 = var2.bind(var4)(var6);
                var2 = _closure1_slot9;
                var3 = var2.seenForGuildId;
                var2 = var3.set;
                var2 = var2.bind(var3)(var7, var4);
            case 328:
                var2 = _closure1_slot9;
                var3 = var2.dailyCapPeriodStart;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun15653_ip = 411;
                    continue _fun15653
                }
            case 344:
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = var2;
                var1 = new var12[var1](var11);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.setHours;
                var12 = var3;
                var11 = 0;
                var10 = 0;
                var9 = 0;
                var8 = 0;
                var1 = var12[var2](var11, var10, var9, var8, var7);
                var2 = _closure1_slot9;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var2.dailyCapPeriodStart = var1;
            case 411:
                var2 = _closure1_slot9;
                var3 = var2.numberOfDCsShownToday;
                var1 = 1;
                var1 = var3 + var1;
                var2.numberOfDCsShownToday = var1;
                var1 = _closure1_slot9;
                var2 = var1.numberOfDCsShownToday;
                var1 = 3;
                if (!(var2 > var1)) {
                    _fun15653_ip = 525;
                    continue _fun15653
                }
            case 451:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot8;
                var2 = var1.DCF_CAP_EXCEEDED;
                var1 = {};
                var7 = 'daily_cap';
                var1.cap_type = var7;
                var1.dismissible_content = var6;
                var5 = _closure1_slot9;
                var5 = var5.numberOfDCsShownToday;
                var1.shown_dcs = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 525:
                return var0;
        }
    };
    var1.DCF_HANDLE_DC_SHOWN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.dismissibleContent;
        var1 = _closure1_slot9;
        var1.lastDCDismissed = var2;
        var0 = _closure1_slot9;
        var1 = var0.renderedAtTimestamps;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.DCF_HANDLE_DC_DISMISSED = var8;
    var8 = function arg0() {
        _fun15655: for (var _fun15655_ip = 0;;) switch (_fun15655_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.dismissibleContent;
                var1 = _closure1_slot9;
                var0 = null;
                var3 = var0 != var2;
                if (!var3) {
                    _fun15655_ip = 28;
                    continue _fun15655
                }
            case 25:
                var0 = var2;
            case 28:
                var1.lastDCDismissed = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.DCF_OVERRIDE_LAST_DC_DISMISSED = var8;
    var3 = function() {
        var2 = _closure1_slot9;
        var1 = null;
        var2.dailyCapPeriodStart = var1;
        var3 = _closure1_slot9;
        var2 = 0;
        var3.numberOfDCsShownToday = var2;
        var4 = _closure1_slot9;
        var2 = global;
        var3 = var2.Set;
        var5 = var3.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var3
            }
        });
        var6 = var5;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var5;
        var4.dismissibleContentSeenDuringSession = var3;
        var3 = _closure1_slot9;
        var2 = var2.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var2
            }
        });
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var3.seenForGuildId = var2;
        var0 = _closure1_slot9;
        var0.lastDCDismissed = var1;
        var0 = undefined;
        return var0;
    };
    var1.DCF_RESET = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dismissible_content/DismissibleContentFrameworkStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 1363, 1359, 795, 566, 806, 2]);