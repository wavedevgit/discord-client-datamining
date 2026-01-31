// ../discord_common/js/packages/flux/createFetchStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun7057: for (var _fun7057_ip = 0;;) switch (_fun7057_ip) {
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
                _fun7057_ip = 74;
                continue _fun7057;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function arg0, arg1() {
        _fun7060: for (var _fun7060_ip = 0;;) switch (_fun7060_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var4);
                if (!var1) {
                    _fun7060_ip = 46;
                    continue _fun7060
                }
            case 27:
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun7060_ip = 66;
                    continue _fun7060
                }
            case 46:
                var1 = var0.Object;
                var0 = var1.is;
                var0 = var0.bind(var1)(var4, var3);
                _fun7060_ip = 103;
                continue _fun7060;
            case 66:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.areArraysShallowEqual;
                var0 = var1.bind(var2)(var4, var3);
            case 103:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun7061: for (var _fun7061_ip = 0;;) switch (_fun7061_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot13;
                var0 = var2 instanceof var0;
                if (!var0) {
                    _fun7061_ip = 53;
                    continue _fun7061
                }
            case 17:
                var3 = var2.status;
                var1 = 500;
                var1 = var3 >= var1;
                if (var1) {
                    _fun7061_ip = 50;
                    continue _fun7061
                }
            case 35:
                var3 = var2.status;
                var2 = 429;
                var1 = var2 === var3;
            case 50:
                var0 = var1;
            case 53:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot18 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useCallback;
    var _closure1_slot10 = var8;
    var8 = var7.useEffect;
    var _closure1_slot11 = var8;
    var7 = var7.useState;
    var _closure1_slot12 = var7;
    var3 = var3.Error;
    var6 = var6.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun7064: for (var _fun7064_ip = 0;;) switch (_fun7064_ip) {
                case 0:
                    var4 = this;
                    var1 = 0;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot7;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun7064_ip = 86;
                        continue _fun7064
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun7064_ip = 120;
                    continue _fun7064;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = 'HTTPResponseError';
                    var0.name = var2;
                    var0.status = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot6;
        var4 = {};
        var5 = 'setStatus';
        var4.key = var5;
        var0 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.status = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {
            'isLoading': false,
            'error': null
        };
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var5 = var2;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.backoff = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/createFetchStore.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun7067: for (var _fun7067_ip = 0;;) switch (_fun7067_ip) {
            case 0:
                var0 = arg1;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = var0.getQueryId;
                var _closure2_slot1 = var2;
                var2 = var0.get;
                var _closure2_slot2 = var2;
                var2 = var0.load;
                var _closure2_slot3 = var2;
                var2 = var0.getIsLoading;
                var _closure2_slot4 = var2;
                var2 = var0.getError;
                var _closure2_slot5 = var2;
                var0 = var0.retryConfig;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun7067_ip = 75;
                    continue _fun7067
                }
            case 73:
                var0 = {};
            case 75:
                var2 = var0.maxRetries;
                if (!(var2 === var3)) {
                    _fun7067_ip = 88;
                    continue _fun7067
                }
            case 85:
                var2 = 5;
            case 88:
                var _closure2_slot6 = var2;
                var2 = var0.backoff;
                if (!(var2 === var3)) {
                    _fun7067_ip = 109;
                    continue _fun7067
                }
            case 102:
                var2 = _closure1_slot18;
            case 109:
                var _closure2_slot7 = var2;
                var0 = var0.retryableErrors;
                if (!(var0 === var3)) {
                    _fun7067_ip = 130;
                    continue _fun7067
                }
            case 123:
                var0 = _closure1_slot17;
            case 130:
                var _closure2_slot8 = var0;
                var _closure2_slot9 = var3;
                var0 = function arg0() {
                    _fun7068: for (var _fun7068_ip = 0;;) switch (_fun7068_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun7068_ip = 92;
                                continue _fun7068
                            }
                        case 9:
                            var3 = _closure2_slot9;
                            var0 = var3.get;
                            var0 = var0.bind(var3)(var4);
                            if (!(var1 == var0)) {
                                _fun7068_ip = 90;
                                continue _fun7068
                            }
                        case 30:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.create;
                            var1 = function() { // Environment: var1
                                var0 = {
                                    'isLoading': false,
                                    'error': null
                                };
                                var2 = _closure2_slot7;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                var0.backoff = var1;
                                return var0;
                            };
                            var1 = var3.bind(var5)(var1);
                            var3 = _closure2_slot9;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4, var1);
                            var0 = var1;
                        case 90:
                            return var0;
                        case 92:
                            var0 = _closure1_slot14;
                            return var0;
                    }
                };
                var _closure2_slot10 = var0;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot12;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot11 = var0;
                var0 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*(arg0) { // Environment: var1
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun7073: for (var _fun7073_ip = 0;;) switch (_fun7073_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun7073_ip = 488;
                                        continue _fun7073
                                    }
                                case 15:
                                    var11 = var1.queryId;
                                    var _closure5_slot0 = var11;
                                    var2 = var1.args;
                                    var7 = var2;
                                    var _closure5_slot1 = var2;
                                    var8 = var1.refetch;
                                    var2 = undefined;
                                    if (!(var8 === var2)) {
                                        _fun7073_ip = 52;
                                        continue _fun7073
                                    }
                                case 50:
                                    var8 = false;
                                case 52:
                                    var _closure5_slot2 = var8;
                                    var1 = var1.useStoreState;
                                    if (!(var1 === var2)) {
                                        _fun7073_ip = 78;
                                        continue _fun7073
                                    }
                                case 66:
                                    var9 = _closure2_slot10;
                                    var1 = var9.bind(var2)(var11);
                                case 78:
                                    var4 = var1;
                                    var _closure5_slot3 = var1;
                                    var5 = undefined;
                                    var _closure5_slot4 = var2;
                                    SaveGenerator(address = 95);
                                case 93:
                                    return var2;
                                case 95:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun7073_ip = 485;
                                        continue _fun7073
                                    }
                                case 104:
                                    var9 = var4;
                                    var6 = var9.getState;
                                    var6 = var6.bind(var9)();
                                    var6 = var6.backoff;
                                    var5 = var6;
                                    _closure5_slot4 = var6;
                                    var10 = _closure2_slot4;
                                    var9 = null;
                                    var12 = var9 == var10;
                                    var10 = undefined;
                                    if (var12) {
                                        _fun7073_ip = 180;
                                        continue _fun7073
                                    }
                                case 148:
                                    var13 = _closure2_slot4;
                                    var17 = var7;
                                    var12 = new Array(0);
                                    var16 = 0;
                                    var18 = var12;
                                    var14 = arraySpread(var18, var17, var16);
                                    var18 = var13;
                                    var17 = var12;
                                    var16 = undefined;
                                    var10 = apply(var18, var17, var16);
                                case 180:
                                    if (!(var9 == var10)) {
                                        _fun7073_ip = 203;
                                        continue _fun7073
                                    }
                                case 184:
                                    var13 = var4;
                                    var12 = var13.getState;
                                    var12 = var12.bind(var13)();
                                    var10 = var12.isLoading;
                                case 203:
                                    if (!(var9 != var11)) {
                                        _fun7073_ip = 482;
                                        continue _fun7073
                                    }
                                case 210:
                                    if (var10) {
                                        _fun7073_ip = 482;
                                        continue _fun7073
                                    }
                                case 216:
                                    if (var8) {
                                        _fun7073_ip = 258;
                                        continue _fun7073
                                    }
                                case 219:
                                    var10 = _closure2_slot2;
                                    var17 = var7;
                                    var8 = new Array(0);
                                    var16 = 0;
                                    var18 = var8;
                                    var11 = arraySpread(var18, var17, var16);
                                    var18 = var10;
                                    var17 = var8;
                                    var16 = undefined;
                                    var8 = apply(var18, var17, var16);
                                    if (!(var9 == var8)) {
                                        _fun7073_ip = 482;
                                        continue _fun7073
                                    }
                                case 258: // try_start_0
                                    var10 = var4;
                                    var9 = var10.setState;
                                    var8 = {};
                                    var11 = true;
                                    var8.isLoading = var11;
                                    var8 = var9.bind(var10)(var8);
                                    var8 = _closure2_slot3;
                                    var17 = var7;
                                    var7 = new Array(0);
                                    var16 = 0;
                                    var18 = var7;
                                    var9 = arraySpread(var18, var17, var16);
                                    var18 = var8;
                                    var17 = var7;
                                    var16 = undefined;
                                    var7 = apply(var18, var17, var16);
                                    SaveGenerator(address = 317);
                                case 315:
                                    return var7;
                                case 317:
                                    ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                    if (var8) {
                                        _fun7073_ip = 362;
                                        continue _fun7073
                                    }
                                case 323:
                                    var9 = var5;
                                    var8 = var9.succeed;
                                    var8 = var8.bind(var9)();
                                    var10 = var4;
                                    var9 = var10.setState;
                                    var8 = {
                                        'error': null,
                                        'isLoading': false
                                    };
                                    var8 = var9.bind(var10)(var8);
                                case 360: // try_end0
                                    _fun7073_ip = 482;
                                    continue _fun7073;
                                case 362:
                                    return var7;
                                case 365: // catch_target0
                                    CatchBlockStart(arg_register = 8);
                                    var7 = function arg0() {
                                        _fun7074: for (var _fun7074_ip = 0;;) switch (_fun7074_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = global;
                                                var2 = var1.Error;
                                                var2 = var0 instanceof var2;
                                                if (var2) {
                                                    _fun7074_ip = 315;
                                                    continue _fun7074
                                                }
                                            case 21:
                                                var3 = 'object';
                                                var2 = typeof var0;
                                                if (!(var3 === var2)) {
                                                    _fun7074_ip = 65;
                                                    continue _fun7074
                                                }
                                            case 32:
                                                var4 = null;
                                                if (!(var4 != var0)) {
                                                    _fun7074_ip = 65;
                                                    continue _fun7074
                                                }
                                            case 38:
                                                var2 = 'status';
                                                var2 = var2 in var0;
                                                if (!var2) {
                                                    _fun7074_ip = 65;
                                                    continue _fun7074
                                                }
                                            case 49:
                                                var2 = var0.status;
                                                var5 = 'number';
                                                var2 = typeof var2;
                                                if (!(var5 !== var2)) {
                                                    _fun7074_ip = 106;
                                                    continue _fun7074
                                                }
                                            case 65:
                                                var6 = var1.Error;
                                                var5 = var1.String;
                                                var2 = undefined;
                                                var7 = var5.bind(var2)(var0);
                                                var5 = var6.prototype;
                                                var5 = Object.create(var5, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var8 = var5;
                                                var2 = new var8[var6](var7, var6);
                                                var2 = var2 instanceof Object ? var2 : var5;
                                                return var2;
                                            case 106:
                                                var2 = 'body';
                                                var2 = var2 in var0;
                                                if (!var2) {
                                                    _fun7074_ip = 154;
                                                    continue _fun7074
                                                }
                                            case 117:
                                                var2 = var0.body;
                                                if (!(var4 != var2)) {
                                                    _fun7074_ip = 154;
                                                    continue _fun7074
                                                }
                                            case 126:
                                                var2 = var0.body;
                                                var2 = typeof var2;
                                                if (!(var3 === var2)) {
                                                    _fun7074_ip = 154;
                                                    continue _fun7074
                                                }
                                            case 138:
                                                var3 = var0.body;
                                                var2 = 'message';
                                                var2 = var2 in var3;
                                                if (var2) {
                                                    _fun7074_ip = 247;
                                                    continue _fun7074
                                                }
                                            case 154:
                                                var3 = var1.Object;
                                                var2 = var3.entries;
                                                var4 = var2.bind(var3)(var0);
                                                var3 = var4.map;
                                                var2 = function(arg0) { // Environment: var2
                                                    _fun7075: for (var _fun7075_ip = 0;;) switch (_fun7075_ip) {
                                                        case 0:
                                                            var4 = arg0;
                                                            var0 = var4[Symbol.iterator];
                                                            var4 = var0().next;
                                                            var2 = var4().value;
                                                            var1 = var0;
                                                            var3 = undefined;
                                                            var1 = var1 === var3;
                                                            var5 = undefined;
                                                            if (var1) {
                                                                _fun7075_ip = 27;
                                                                continue _fun7075
                                                            }
                                                        case 24:
                                                            var5 = var2;
                                                        case 27:
                                                            var2 = undefined;
                                                            if (var1) {
                                                                _fun7075_ip = 57;
                                                                continue _fun7075
                                                            }
                                                        case 32:
                                                            var6 = var4().value;
                                                            var4 = var0;
                                                            var4 = var4 === var3;
                                                            var2 = undefined;
                                                            var1 = var4;
                                                            if (var4) {
                                                                _fun7075_ip = 57;
                                                                continue _fun7075
                                                            }
                                                        case 51:
                                                            var2 = var6;
                                                            var1 = var4;
                                                        case 57:
                                                            if (var1) {
                                                                _fun7075_ip = 63;
                                                                continue _fun7075
                                                            }
                                                        case 60:
                                                            var0.return();
                                                        case 63:
                                                            var0 = global;
                                                            var1 = var0.String;
                                                            var9 = var1.bind(var3)(var2);
                                                            var0 = var0.HermesInternal;
                                                            var3 = var0.concat;
                                                            var12 = '';
                                                            var10 = ': [';
                                                            var8 = ']';
                                                            var11 = var5;
                                                            var0 = var12[var3](var11, var10, var9, var8, var7);
                                                            return var0;
                                                    }
                                                };
                                                var5 = var3.bind(var4)(var2);
                                                var4 = _closure1_slot13;
                                                var3 = var5.join;
                                                var2 = ',';
                                                var7 = var3.bind(var5)(var2);
                                                var3 = var4.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var8 = var3;
                                                var2 = new var8[var4](var7, var6);
                                                var2 = var2 instanceof Object ? var2 : var3;
                                                var4 = var2.setStatus;
                                                var3 = var0.status;
                                                var3 = var4.bind(var2)(var3);
                                                return var2;
                                            case 247:
                                                var3 = _closure1_slot13;
                                                var4 = var1.String;
                                                var1 = var0.body;
                                                var2 = var1.message;
                                                var1 = undefined;
                                                var7 = var4.bind(var1)(var2);
                                                var2 = var3.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var8 = var2;
                                                var1 = new var8[var3](var7, var6);
                                                var1 = var1 instanceof Object ? var1 : var2;
                                                var3 = var1.setStatus;
                                                var2 = var0.status;
                                                var2 = var3.bind(var1)(var2);
                                                return var1;
                                            case 315:
                                                return var0;
                                        }
                                    };
                                    var8 = var7.bind(var2)(var8);
                                    var9 = var4;
                                    var7 = var9.setState;
                                    var4 = {};
                                    var4.error = var8;
                                    var10 = false;
                                    var4.isLoading = var10;
                                    var4 = var7.bind(var9)(var4);
                                    var7 = _closure2_slot8;
                                    var7 = var7.bind(var2)(var8);
                                    var4 = var7;
                                    if (!var7) {
                                        _fun7073_ip = 433;
                                        continue _fun7073
                                    }
                                case 419:
                                    var6 = _closure2_slot6;
                                    var5 = var5.fails;
                                    var4 = var6 > var5;
                                case 433:
                                    if (!var4) {
                                        _fun7073_ip = 482;
                                        continue _fun7073
                                    }
                                case 436:
                                    var4 = global;
                                    var5 = var4.Promise;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var18 = function(arg0, arg1) { // Environment: var3
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var1 = arg1;
                                        var _closure6_slot1 = var1;
                                        var2 = _closure5_slot4;
                                        var1 = var2.fail;
                                        var0 = function() { // Environment: var0
                                            var2 = _closure2_slot11;
                                            var1 = {};
                                            var3 = _closure5_slot0;
                                            var1.queryId = var3;
                                            var3 = _closure5_slot1;
                                            var1.args = var3;
                                            var3 = _closure5_slot3;
                                            var1.useStoreState = var3;
                                            var0 = _closure5_slot2;
                                            var1.refetch = var0;
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.then;
                                            var2 = _closure6_slot0;
                                            var1 = _closure6_slot1;
                                            var1 = var3.bind(var4)(var2, var1);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var19 = var4;
                                    var3 = new var19[var5](var18, var17);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    SaveGenerator(address = 473);
                                case 471:
                                    return var3;
                                case 473:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (!var4) {
                                        _fun7073_ip = 482;
                                        continue _fun7073
                                    }
                                case 479:
                                    return var3;
                                case 482:
                                    return var2;
                                case 485:
                                    return var1;
                                case 488:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot12 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot12 = var0;
                var0 = function arg0() {
                    _fun7078: for (var _fun7078_ip = 0;;) switch (_fun7078_ip) {
                        case 0:
                            var7 = 0;
                            var17 = 0;
                            var3 = copyRestArgs(var17);
                            var4 = undefined;
                            var _closure3_slot1 = var4;
                            var _closure3_slot2 = var4;
                            var0 = _closure1_slot12;
                            var6 = var0.bind(var4)(var3);
                            var5 = _closure1_slot4;
                            var0 = 2;
                            var5 = var5.bind(var4)(var6, var0);
                            var6 = var5[var7];
                            var0 = 1;
                            var0 = var5[var0];
                            var5 = var3 === var6;
                            if (var5) {
                                _fun7078_ip = 95;
                                continue _fun7078
                            }
                        case 63:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 9;
                            var8 = var10[var8];
                            var9 = var9.bind(var4)(var8);
                            var8 = var9.areArraysShallowEqual;
                            var5 = var8.bind(var9)(var3, var6);
                        case 95:
                            if (var5) {
                                _fun7078_ip = 103;
                                continue _fun7078
                            }
                        case 98:
                            var0 = var0.bind(var4)(var3);
                        case 103:
                            var _closure3_slot0 = var6;
                            var0 = global;
                            var8 = var0.Array;
                            var5 = var8.isArray;
                            var3 = _closure2_slot0;
                            var5 = var5.bind(var8)(var3);
                            var3 = _closure2_slot0;
                            if (var5) {
                                _fun7078_ip = 149;
                                continue _fun7078
                            }
                        case 139:
                            var8 = new Array(1);
                            var8[0] = var3;
                            _fun7078_ip = 152;
                            continue _fun7078;
                        case 149:
                            var8 = var3;
                        case 152:
                            var5 = _closure2_slot1;
                            var3 = new Array(0);
                            var17 = var3;
                            var16 = var6;
                            var15 = 0;
                            var7 = arraySpread(var17, var16, var15);
                            var17 = var5;
                            var16 = var3;
                            var15 = undefined;
                            var7 = apply(var17, var16, var15);
                            _closure3_slot1 = var7;
                            var0 = _closure2_slot10;
                            var5 = var0.bind(var4)(var7);
                            _closure3_slot2 = var5;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var10 = 12;
                            var0 = var0[var10];
                            var11 = var3.bind(var4)(var0);
                            var9 = var11.useStateFromStores;
                            var3 = new Array(1);
                            var3[0] = var6;
                            var0 = function() { // Environment: var1
                                _fun7079: for (var _fun7079_ip = 0;;) switch (_fun7079_ip) {
                                    case 0:
                                        var2 = _closure2_slot4;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun7079_ip = 54;
                                            continue _fun7079
                                        }
                                    case 18:
                                        var2 = _closure2_slot4;
                                        var7 = _closure3_slot0;
                                        var1 = new Array(0);
                                        var6 = 0;
                                        var8 = var1;
                                        var4 = arraySpread(var8, var7, var6);
                                        var8 = var2;
                                        var7 = var1;
                                        var6 = undefined;
                                        var0 = apply(var8, var7, var6);
                                    case 54:
                                        return var0;
                                }
                            };
                            var0 = var9.bind(var11)(var8, var0, var3);
                            var3 = function(arg0) { // Environment: var1
                                _fun7080: for (var _fun7080_ip = 0;;) switch (_fun7080_ip) {
                                    case 0:
                                        var1 = _closure2_slot4;
                                        var0 = null;
                                        var0 = var0 == var1;
                                        if (!var0) {
                                            _fun7080_ip = 25;
                                            continue _fun7080
                                        }
                                    case 16:
                                        var1 = arg0;
                                        var0 = var1.isLoading;
                                    case 25:
                                        return var0;
                                }
                            };
                            var3 = var5.bind(var4)(var3);
                            var9 = null;
                            var13 = var8;
                            if (!(var9 != var0)) {
                                _fun7078_ip = 268;
                                continue _fun7078
                            }
                        case 265:
                            var3 = var0;
                        case 268:
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var10];
                            var12 = var8.bind(var4)(var0);
                            var11 = var12.useStateFromStores;
                            var8 = new Array(1);
                            var8[0] = var6;
                            var0 = function() { // Environment: var1
                                _fun7081: for (var _fun7081_ip = 0;;) switch (_fun7081_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun7081_ip = 54;
                                            continue _fun7081
                                        }
                                    case 18:
                                        var2 = _closure2_slot5;
                                        var7 = _closure3_slot0;
                                        var1 = new Array(0);
                                        var6 = 0;
                                        var8 = var1;
                                        var4 = arraySpread(var8, var7, var6);
                                        var8 = var2;
                                        var7 = var1;
                                        var6 = undefined;
                                        var0 = apply(var8, var7, var6);
                                    case 54:
                                        return var0;
                                }
                            };
                            var0 = var11.bind(var12)(var13, var0, var8);
                            var8 = function(arg0) { // Environment: var1
                                _fun7082: for (var _fun7082_ip = 0;;) switch (_fun7082_ip) {
                                    case 0:
                                        var1 = _closure2_slot5;
                                        var0 = null;
                                        var1 = var0 == var1;
                                        if (!var1) {
                                            _fun7082_ip = 24;
                                            continue _fun7082
                                        }
                                    case 16:
                                        var1 = arg0;
                                        var0 = var1.error;
                                    case 24:
                                        return var0;
                                }
                            };
                            var8 = var5.bind(var4)(var8);
                            if (!(var9 != var0)) {
                                _fun7078_ip = 327;
                                continue _fun7078
                            }
                        case 324:
                            var8 = var0;
                        case 327:
                            var9 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var10];
                            var12 = var9.bind(var4)(var0);
                            var11 = var12.useStateFromStores;
                            var10 = new Array(1);
                            var10[0] = var6;
                            var14 = _closure1_slot16;
                            var16 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var5 = _closure3_slot0;
                                var1 = new Array(0);
                                var4 = 0;
                                var6 = var1;
                                var0 = arraySpread(var6, var5, var4);
                                var4 = undefined;
                                var6 = var2;
                                var5 = var1;
                                var0 = apply(var6, var5, var4);
                                return var0;
                            };
                            var18 = var12;
                            var17 = var13;
                            var15 = var10;
                            var9 = var18[var11](var17, var16, var15, var14, var13);
                            var11 = _closure1_slot11;
                            var10 = new Array(3);
                            var10[0] = var7;
                            var10[1] = var6;
                            var10[2] = var5;
                            var0 = function() { // Environment: var1
                                var2 = _closure2_slot11;
                                var1 = {};
                                var3 = _closure3_slot1;
                                var1.queryId = var3;
                                var3 = _closure3_slot0;
                                var1.args = var3;
                                var0 = _closure3_slot2;
                                var1.useStoreState = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var11.bind(var4)(var0, var10);
                            var0 = {};
                            var0.data = var9;
                            var0.error = var8;
                            var0.isLoading = var3;
                            var3 = _closure1_slot10;
                            var2 = new Array(3);
                            var2[0] = var7;
                            var2[1] = var6;
                            var2[2] = var5;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot11;
                                var1 = {};
                                var3 = _closure3_slot1;
                                var1.queryId = var3;
                                var3 = _closure3_slot0;
                                var1.args = var3;
                                var0 = _closure3_slot2;
                                var1.useStoreState = var0;
                                var0 = true;
                                var1.refetch = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            var0.refetch = var1;
                            return var0;
                    }
                };
                var2 = global;
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
                _closure2_slot9 = var2;
                var2 = _closure1_slot3;
                var1 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun7087: for (var _fun7087_ip = 0;;) switch (_fun7087_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun7087_ip = 145;
                                    continue _fun7087
                                }
                            case 10:
                                var10 = 0;
                                var5 = copyRestArgs(var10);
                                var3 = undefined;
                                SaveGenerator(address = 22);
                            case 20:
                                return var3;
                            case 22:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun7087_ip = 142;
                                    continue _fun7087
                                }
                            case 28:
                                var6 = _closure2_slot1;
                                var4 = new Array(0);
                                var10 = var4;
                                var9 = var5;
                                var8 = 0;
                                var7 = arraySpread(var10, var9, var8);
                                var10 = var6;
                                var9 = var4;
                                var8 = undefined;
                                var6 = apply(var10, var9, var8);
                                var4 = _closure2_slot10;
                                var7 = var4.bind(var3)(var6);
                                var4 = var7.getState;
                                var4 = var4.bind(var7)();
                                var7 = var4.backoff;
                                var4 = var7.succeed;
                                var4 = var4.bind(var7)();
                                var4 = _closure2_slot11;
                                var2 = {};
                                var2.queryId = var6;
                                var2.args = var5;
                                var5 = true;
                                var2.refetch = var5;
                                var2 = var4.bind(var3)(var2);
                                SaveGenerator(address = 130);
                            case 128:
                                return var2;
                            case 130:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun7087_ip = 139;
                                    continue _fun7087
                                }
                            case 136:
                                return var3;
                            case 139:
                                return var2;
                            case 142:
                                return var1;
                            case 145:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.refetch = var1;
                return var0;
        }
    };
    var2.createFetchStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 6, 7, 15, 17, 18, 162, 31, 628, 561, 629, 632, 2]);