// modules/voice_filters/VoiceFilterStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun39866: for (var _fun39866_ip = 0;;) switch (_fun39866_ip) {
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
                _fun39866_ip = 74;
                continue _fun39866;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun39869: for (var _fun39869_ip = 0;;) switch (_fun39869_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39869_ip = 46;
                    continue _fun39869
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun39869_ip = 55;
                    continue _fun39869
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun39869_ip = 343;
                    continue _fun39869
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39869_ip = 323;
                    continue _fun39869
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39869_ip = 283;
                    continue _fun39869
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39869_ip = 270;
                    continue _fun39869
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
                    _fun39869_ip = 163;
                    continue _fun39869
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun39869_ip = 179;
                    continue _fun39869
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39869_ip = 249;
                    continue _fun39869
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39869_ip = 249;
                    continue _fun39869
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39869_ip = 234;
                    continue _fun39869
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39869_ip = 247;
                    continue _fun39869
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun39869_ip = 265;
                continue _fun39869;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun39869_ip = 283;
                continue _fun39869;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun39869_ip = 323;
                    continue _fun39869
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
                    _fun39869_ip = 330;
                    continue _fun39869
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39870: for (var _fun39870_ip = 0;;) switch (_fun39870_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39870_ip = 56;
                                continue _fun39870
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
                            _fun39870_ip = 67;
                            continue _fun39870;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun39871: for (var _fun39871_ip = 0;;) switch (_fun39871_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39871_ip = 23;
                    continue _fun39871
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39871_ip = 33;
                    continue _fun39871
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
                    _fun39871_ip = 70;
                    continue _fun39871
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39871_ip = 55;
                    continue _fun39871
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun39872: for (var _fun39872_ip = 0;;) switch (_fun39872_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.available;
                var0 = 0;
                if (var2) {
                    _fun39872_ip = 32;
                    continue _fun39872
                }
            case 14:
                var2 = var1.temporarilyAvailable;
                var1 = 2;
                if (!var2) {
                    _fun39872_ip = 29;
                    continue _fun39872
                }
            case 26:
                var1 = 1;
            case 29:
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun39873: for (var _fun39873_ip = 0;;) switch (_fun39873_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun39873_ip = 186;
                    continue _fun39873
                }
            case 12:
                var3 = global;
                var0 = var3.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var0 = new var9[var0](var8);
                var0 = var0 instanceof Object ? var0 : var1;
                var5 = var3.Date;
                var8 = var2.current_set_start;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var5 = var1 instanceof Object ? var1 : var4;
                var6 = var3.Date;
                var8 = var2.current_set_end;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var4;
                var1 = new var9[var6](var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                var7 = var3.Date;
                var8 = var2.next_set_start;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var4 = new var9[var7](var8, var7);
                var4 = var4 instanceof Object ? var4 : var6;
                var7 = var3.Date;
                var8 = var2.next_set_end;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var3 = new var9[var7](var8, var7);
                var3 = var3 instanceof Object ? var3 : var6;
                if (!(var0 >= var5)) {
                    _fun39873_ip = 178;
                    continue _fun39873
                }
            case 174:
                if (!(!(var0 < var1))) {
                    _fun39873_ip = 228;
                    continue _fun39873
                }
            case 178:
                if (!(var0 >= var4)) {
                    _fun39873_ip = 186;
                    continue _fun39873
                }
            case 182:
                if (!(!(var0 < var3))) {
                    _fun39873_ip = 206;
                    continue _fun39873
                }
            case 186:
                var0 = {};
                var4 = new Array(0);
                var0.currentSet = var4;
                var4 = undefined;
                var0.catalogUpdateTime = var4;
                return var0;
            case 206:
                var0 = {};
                var4 = var2.next_set;
                var0.currentSet = var4;
                var0.catalogUpdateTime = var3;
                return var0;
            case 228:
                var0 = {};
                var2 = var2.current_set;
                var0.currentSet = var2;
                var0.catalogUpdateTime = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.sort;
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot16;
            var0 = arg0;
            var4 = 1;
            var0 = var0[var4];
            var2 = undefined;
            var1 = var3.bind(var2)(var0);
            var0 = arg1;
            var0 = var0[var4];
            var0 = var3.bind(var2)(var0);
            var0 = var1 - var0;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun39876: for (var _fun39876_ip = 0;;) switch (_fun39876_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0[Symbol.iterator];
                    var0 = var1().next;
                    var3 = var0().value;
                    var2 = var1;
                    var0 = undefined;
                    var2 = var2 === var0;
                    if (var2) {
                        _fun39876_ip = 25;
                        continue _fun39876
                    }
                case 22:
                    var0 = var3;
                case 25:
                    if (var2) {
                        _fun39876_ip = 31;
                        continue _fun39876
                    }
                case 28:
                    var1.return();
                case 31:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var9 = function() {
        var4 = _closure1_slot17;
        var0 = _closure1_slot11;
        var3 = var0.limitedTimeVoices;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot11;
        var3 = var3.catalogUpdateTime;
        var4.catalogUpdateTime = var3;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.keys;
        var3 = _closure1_slot11;
        var3 = var3.voiceFilters;
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var2
            var3 = arg0;
            var0 = _closure1_slot11;
            var0 = var0.voiceFilters;
            var1 = var0[var3];
            var0 = _closure2_slot0;
            var2 = var0.currentSet;
            var0 = var2.includes;
            var0 = var0.bind(var2)(var3);
            var1.temporarilyAvailable = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var3 = _closure1_slot18;
        var1 = var2.voiceFilters;
        var1 = var3.bind(var0)(var1);
        var2.sortedVoiceFilters = var1;
        return var0;
    };
    var _closure1_slot19 = var9;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.voiceFilterContent;
    var _closure1_slot8 = var1;
    var1 = {};
    var3 = 'ERROR_DOWNLOADING_DEPENDENCY';
    var1.ERROR_DOWNLOADING_DEPENDENCY = var3;
    var3 = 'ERROR_ACTIVATING_VOICE_FILTER';
    var1.ERROR_ACTIVATING_VOICE_FILTER = var3;
    var _closure1_slot9 = var1;
    var3 = 6;
    var3 = var6[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var10 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var3 = 'VoiceFilterStore';
    var15 = var10;
    var14 = var3;
    var8 = new var15[var8](var14, var13);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot10 = var8;
    var10 = {};
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.VoiceFilterNativeModuleState;
    var8 = var8.UNINITIALIZED;
    var10.nativeVoiceFilterModuleState = var8;
    var8 = {};
    var10.models = var8;
    var8 = {};
    var10.voiceFilters = var8;
    var8 = {};
    var10.modelState = var8;
    var8 = new Array(0);
    var10.sortedVoiceFilters = var8;
    var8 = false;
    var10.catalogFetchFailed = var8;
    var10.catalogLastFetchTime = var0;
    var10.catalogUpdateTime = var0;
    var10.limitedTimeVoices = var0;
    var8 = null;
    var10.error = var8;
    var _closure1_slot11 = var10;
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var10 = var8.Store;
    var8 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun39880: for (var _fun39880_ip = 0;;) switch (_fun39880_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39880_ip = 69;
                        continue _fun39880
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39880_ip = 105;
                    continue _fun39880;
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
        var0 = 'getVoiceFilterModels';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot11;
            var0 = var0.models;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'getVoiceFilters';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.voiceFilters;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getVoiceFilter';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot11;
            var1 = var0.voiceFilters;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getModelState';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot11;
            var1 = var0.modelState;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getOngoingDownloads';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.fromEntries;
            var4 = var0.Object;
            var3 = var4.entries;
            var0 = _closure1_slot11;
            var0 = var0.modelState;
            var4 = var3.bind(var4)(var0);
            var3 = var4.filter;
            var0 = function(arg0) { // Environment: var0
                _fun39886: for (var _fun39886_ip = 0;;) switch (_fun39886_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var6 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        var7 = var5().value;
                        var8 = var1;
                        var8 = var8 === var6;
                        var2 = var8;
                        if (var8) {
                            _fun39886_ip = 32;
                            continue _fun39886
                        }
                    case 29:
                        var4 = var7;
                    case 32:
                        var4 = undefined;
                        var7 = var2;
                        if (var7) {
                            _fun39886_ip = 60;
                            continue _fun39886
                        }
                    case 40:
                        var5 = var5().value;
                        var7 = var1;
                        var7 = var7 === var6;
                        var2 = var7;
                        if (var7) {
                            _fun39886_ip = 60;
                            continue _fun39886
                        }
                    case 57:
                        var4 = var5;
                    case 60: // try_start_0
                        var3 = var4.status;
                    case 65: // try_end0
                        var4 = var2;
                        if (var4) {
                            _fun39886_ip = 74;
                            continue _fun39886
                        }
                    case 71:
                        var1.return();
                    case 74:
                        var4 = var3;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 7;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.VoiceFilterModelStatus;
                        var3 = var3.DOWNLOADING;
                        var3 = var4 === var3;
                        return var3;
                    case 118: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        _fun39886_ip = 124;
                        continue _fun39886;
                    case 122:
                        CatchBlockStart(arg_register = 0);
                    case 124:
                        if (var2) {
                            _fun39886_ip = 130;
                            continue _fun39886
                        }
                    case 127:
                        var1.return();
                    case 130:
                        throw var0;
                }
            };
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isVoiceFilterDownloaded';
        var4.key = var6;
        var6 = function arg0() {
            _fun39887: for (var _fun39887_ip = 0;;) switch (_fun39887_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure1_slot11;
                    var3 = var0.voiceFilters;
                    var0 = arg0;
                    var4 = var3[var0];
                    var3 = null;
                    var5 = var3 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun39887_ip = 52;
                        continue _fun39887
                    }
                case 44:
                    var0 = var4.modelIds;
                case 52:
                    if (!(var3 == var0)) {
                        _fun39887_ip = 58;
                        continue _fun39887
                    }
                case 56:
                    var0 = {};
                case 58:
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        _fun39888: for (var _fun39888_ip = 0;;) switch (_fun39888_ip) {
                            case 0:
                                var1 = _closure1_slot11;
                                var2 = var1.modelState;
                                var1 = arg0;
                                var2 = var2[var1];
                                var1 = null;
                                var4 = var1 == var2;
                                var3 = undefined;
                                var1 = undefined;
                                if (var4) {
                                    _fun39888_ip = 38;
                                    continue _fun39888
                                }
                            case 33:
                                var1 = var2.status;
                            case 38:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 7;
                                var0 = var4[var0];
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.VoiceFilterModelStatus;
                                var0 = var0.DOWNLOADED;
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isModelDownloaded';
        var4.key = var6;
        var6 = function arg0() {
            _fun39889: for (var _fun39889_ip = 0;;) switch (_fun39889_ip) {
                case 0:
                    var1 = _closure1_slot11;
                    var2 = var1.modelState;
                    var1 = arg0;
                    var2 = var2[var1];
                    var1 = null;
                    var4 = var1 == var2;
                    var3 = undefined;
                    var1 = undefined;
                    if (var4) {
                        _fun39889_ip = 38;
                        continue _fun39889
                    }
                case 33:
                    var1 = var2.status;
                case 38:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var0 = var4[var0];
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.VoiceFilterModelStatus;
                    var0 = var0.DOWNLOADED;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSortedVoiceFilters';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var2 = var0.sortedVoiceFilters;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = _closure1_slot11;
                var1 = var0.voiceFilters;
                var0 = arg0;
                var0 = var1[var0];
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getCatalogLastFetchTime';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.catalogLastFetchTime;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getCatalogUpdateTime';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.catalogUpdateTime;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getLimitedTimeVoices';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.limitedTimeVoices;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isNativeModuleLoaded';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var1 = var1.nativeVoiceFilterModuleState;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.VoiceFilterNativeModuleState;
            var0 = var0.LOADED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isNativeModuleLoading';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var1 = var1.nativeVoiceFilterModuleState;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.VoiceFilterNativeModuleState;
            var0 = var0.LOADING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'hasNativeModuleFailed';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var1 = var1.nativeVoiceFilterModuleState;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.VoiceFilterNativeModuleState;
            var0 = var0.FAILED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getCatalogFetchFailed';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.catalogFetchFailed;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.error;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getLastReportedLagTimestamp';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var10);
    var8.displayName = var3;
    var3 = 11;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.modelId;
        var1 = _closure1_slot11;
        var2 = var1.modelState;
        var1 = {};
        var4 = _closure1_slot11;
        var4 = var4.modelState;
        var6 = var4[var3];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var4.VoiceFilterModelStatus;
        var5 = var4.DOWNLOADING;
        var4 = 'status';
        var1[var4] = var5;
        var5 = 0;
        var4 = 'downloadedBytes';
        var1[var4] = var5;
        var2[var3] = var1;
        return var0;
    };
    var3.VOICE_FILTER_DOWNLOAD_STARTED = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.modelId;
        var5 = var0.downloadedBytes;
        var4 = var0.totalBytes;
        var0 = _closure1_slot11;
        var1 = var0.modelState;
        var0 = {};
        var3 = _closure1_slot11;
        var3 = var3.modelState;
        var6 = var3[var2];
        var7 = var0;
        var3 = copyDataProperties(var7, var6);
        var3 = 'downloadedBytes';
        var0[var3] = var5;
        var3 = 'totalBytes';
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_DOWNLOAD_PROGRESS = var10;
    var10 = function arg0() {
        _fun39903: for (var _fun39903_ip = 0;;) switch (_fun39903_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.modelId;
                var3 = var0.error;
                var0 = _closure1_slot11;
                var0 = var0.modelState;
                var4 = var0[var6];
                var2 = null;
                var7 = var2 == var4;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun39903_ip = 49;
                    continue _fun39903
                }
            case 44:
                var5 = var4.status;
            case 49:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = 7;
                var4 = var4[var9];
                var4 = var7.bind(var0)(var4);
                var4 = var4.VoiceFilterModelStatus;
                var4 = var4.DOWNLOADED;
                if (!(var5 !== var4)) {
                    _fun39903_ip = 199;
                    continue _fun39903
                }
            case 85:
                var4 = _closure1_slot11;
                var5 = var4.modelState;
                var4 = {};
                var7 = _closure1_slot11;
                var7 = var7.modelState;
                var10 = var7[var6];
                var11 = var4;
                var7 = copyDataProperties(var11, var10);
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.VoiceFilterModelStatus;
                var8 = var7.MISSING;
                var7 = 'status';
                var4[var7] = var8;
                var5[var6] = var4;
                if (!(var2 == var3)) {
                    _fun39903_ip = 166;
                    continue _fun39903
                }
            case 164:
                var3 = {};
            case 166:
                var2 = 'USER_CANCELED_DOWNLOAD';
                var2 = var2 in var3;
                if (var2) {
                    _fun39903_ip = 199;
                    continue _fun39903
                }
            case 179:
                var2 = _closure1_slot11;
                var1 = _closure1_slot9;
                var1 = var1.ERROR_DOWNLOADING_DEPENDENCY;
                var2.error = var1;
            case 199:
                return var0;
        }
    };
    var3.VOICE_FILTER_DOWNLOAD_FAILED = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.modelId;
        var1 = _closure1_slot11;
        var2 = var1.modelState;
        var1 = {};
        var4 = _closure1_slot11;
        var4 = var4.modelState;
        var6 = var4[var3];
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var4.VoiceFilterModelStatus;
        var5 = var4.DOWNLOADED;
        var4 = 'status';
        var1[var4] = var5;
        var4 = 'downloadedBytes';
        var1[var4] = var0;
        var2[var3] = var1;
        return var0;
    };
    var3.VOICE_FILTER_FILE_READY = var10;
    var10 = function arg0() {
        _fun39905: for (var _fun39905_ip = 0;;) switch (_fun39905_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.catalog;
                var2 = var0.initialModelState;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = 8;
                var4 = var0[var8];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = null;
                var5 = var4 == var5;
                var6 = undefined;
                if (var5) {
                    _fun39905_ip = 84;
                    continue _fun39905
                }
            case 51:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var7 = var5.remoteApp;
                var5 = var7.getVersion;
                var6 = var5.bind(var7)();
            case 84:
                var5 = '0.0.0';
                var15 = var5 === var6;
                var6 = _closure1_slot11;
                var5 = false;
                var6.catalogFetchFailed = var5;
                var6 = _closure1_slot11;
                var5 = var3.models;
                var6.models = var5;
                var6 = _closure1_slot11;
                var5 = var3.limited_time_voices;
                var6.limitedTimeVoices = var5;
                var6 = {};
                var7 = _closure1_slot17;
                var5 = _closure1_slot11;
                var5 = var5.limitedTimeVoices;
                var14 = var7.bind(var0)(var5);
                var7 = _closure1_slot11;
                var5 = var14.catalogUpdateTime;
                var7.catalogUpdateTime = var5;
                if (!var15) {
                    _fun39905_ip = 284;
                    continue _fun39905
                }
            case 180:
                var5 = global;
                var8 = var5.Object;
                var7 = var8.keys;
                var5 = _closure1_slot8;
                var12 = var7.bind(var8)(var5);
                var5 = var12.length;
                var11 = 0;
                var5 = var11 < var5;
                var10 = 'id';
                var9 = 'modelIds';
                var8 = true;
                var7 = 'available';
                if (!var5) {
                    _fun39905_ip = 284;
                    continue _fun39905
                }
            case 232:
                var13 = var12[var11];
                var5 = {};
                var16 = _closure1_slot8;
                var21 = var16[var13];
                var22 = var5;
                var16 = copyDataProperties(var22, var21);
                var5[var10] = var13;
                var5[var9] = var0;
                var5[var7] = var8;
                var6[var13] = var5;
                var11 = var11 + 1;
                var5 = var12.length;
                if (var11 < var5) {
                    _fun39905_ip = 232;
                    continue _fun39905
                }
            case 284:
                var5 = _closure1_slot14;
                var3 = var3.voices;
                var13 = var5.bind(var0)(var3);
                var7 = var13.bind(var0)();
                var5 = var7.done;
                var12 = 'available';
                var11 = 'temporarilyAvailable';
                var10 = 'id';
                var9 = 'modelIds';
                var3 = !var15;
                var8 = !var3;
                var3 = global;
                if (var5) {
                    _fun39905_ip = 470;
                    continue _fun39905
                }
            case 342:
                var5 = var7.value;
                var16 = var5.id;
                var17 = var5.models;
                var18 = var5.available;
                var20 = var3.Object;
                var19 = var20.hasOwn;
                var5 = _closure1_slot8;
                var5 = var19.bind(var20)(var5, var16);
                if (!var5) {
                    _fun39905_ip = 455;
                    continue _fun39905
                }
            case 389:
                var5 = {};
                var19 = _closure1_slot8;
                var21 = var19[var16];
                var22 = var5;
                var19 = copyDataProperties(var22, var21);
                var5[var10] = var16;
                var5[var9] = var17;
                var17 = var8;
                if (var15) {
                    _fun39905_ip = 425;
                    continue _fun39905
                }
            case 422:
                var17 = var18;
            case 425:
                var5[var12] = var17;
                var18 = var14.currentSet;
                var17 = var18.includes;
                var17 = var17.bind(var18)(var16);
                var5[var11] = var17;
                var6[var16] = var5;
            case 455:
                var16 = var13.bind(var0)();
                var5 = var16.done;
                var7 = var16;
                if (!var5) {
                    _fun39905_ip = 342;
                    continue _fun39905
                }
            case 470:
                var5 = _closure1_slot11;
                var5.voiceFilters = var6;
                var6 = _closure1_slot11;
                var7 = _closure1_slot18;
                var5 = var6.voiceFilters;
                var5 = var7.bind(var0)(var5);
                var6.sortedVoiceFilters = var5;
                var6 = _closure1_slot11;
                var5 = var3.Date;
                var7 = var5.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var5
                    }
                });
                var23 = var7;
                var5 = new var23[var5](var22);
                var5 = var5 instanceof Object ? var5 : var7;
                var6.catalogLastFetchTime = var5;
                if (!(var4 != var2)) {
                    _fun39905_ip = 614;
                    continue _fun39905
                }
            case 545:
                var5 = var3.Object;
                var4 = var5.keys;
                var3 = _closure1_slot11;
                var3 = var3.modelState;
                var3 = var4.bind(var5)(var3);
                var4 = var3.length;
                var3 = 0;
                if (!(!(var4 > var3))) {
                    _fun39905_ip = 604;
                    continue _fun39905
                }
            case 582:
                var5 = _closure1_slot10;
                var4 = var5.warn;
                var3 = 'Attempted to replace existing model state with initial model state';
                var3 = var4.bind(var5)(var3);
                _fun39905_ip = 614;
                continue _fun39905;
            case 604:
                var1 = _closure1_slot11;
                var1.modelState = var2;
            case 614:
                return var0;
        }
    };
    var3.VOICE_FILTER_CATALOG_FETCH_SUCCESS = var10;
    var10 = function() {
        var1 = _closure1_slot11;
        var0 = true;
        var1.catalogFetchFailed = var0;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_CATALOG_FETCH_FAILED = var10;
    var3.VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES = var9;
    var9 = function arg0() {
        _fun39907: for (var _fun39907_ip = 0;;) switch (_fun39907_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.timeInSeconds;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 9;
                var2 = var0[var5];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.addSeconds;
                var2 = global;
                var2 = var2.Date;
                var7 = var2.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var7;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var7;
                var6 = var3.bind(var4)(var2, var6);
                var2 = _closure1_slot11;
                var3 = var2.limitedTimeVoices;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun39907_ip = 114;
                    continue _fun39907
                }
            case 92:
                var4 = _closure1_slot10;
                var3 = var4.warn;
                var2 = 'No limited time voices available to update';
                var2 = var3.bind(var4)(var2);
                _fun39907_ip = 232;
                continue _fun39907;
            case 114:
                var2 = _closure1_slot11;
                var3 = var2.limitedTimeVoices;
                var2 = var6.toISOString;
                var2 = var2.bind(var6)();
                var3.current_set_end = var2;
                var2 = _closure1_slot11;
                var3 = var2.limitedTimeVoices;
                var2 = var6.toISOString;
                var2 = var2.bind(var6)();
                var3.next_set_start = var2;
                var2 = _closure1_slot11;
                var3 = var2.limitedTimeVoices;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var5 = var4.bind(var0)(var2);
                var4 = var5.addMinutes;
                var2 = 2;
                var4 = var4.bind(var5)(var6, var2);
                var2 = var4.toISOString;
                var2 = var2.bind(var4)();
                var3.next_set_end = var2;
                var1 = _closure1_slot19;
                var1 = var1.bind(var0)();
            case 232:
                return var0;
        }
    };
    var3.VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME = var9;
    var9 = function arg0() {
        var1 = _closure1_slot11;
        var0 = arg0;
        var0 = var0.state;
        var1.nativeVoiceFilterModuleState = var0;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE = var9;
    var9 = function() {
        var1 = _closure1_slot11;
        var0 = _closure1_slot9;
        var0 = var0.ERROR_ACTIVATING_VOICE_FILTER;
        var1.error = var0;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_APPLY_FAILED = var9;
    var9 = function() {
        var1 = _closure1_slot11;
        var0 = null;
        var1.error = var0;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_REQUEST_SWITCH = var9;
    var4 = function() {
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_FILTER_LAGGING = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_filters/VoiceFilterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VoiceFilterError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4323, 3, 3517, 3076, 2721, 566, 806, 2]);