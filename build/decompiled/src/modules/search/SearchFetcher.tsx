// modules/search/SearchFetcher.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun71822: for (var _fun71822_ip = 0;;) switch (_fun71822_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot4;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = _closure1_slot12;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun71822_ip = 51;
                    continue _fun71822
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun71822_ip = 92;
                continue _fun71822;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun71822_ip = 71;
                    continue _fun71822
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot4;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun71823: for (var _fun71823_ip = 0;;) switch (_fun71823_ip) {
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
                _fun71823_ip = 76;
                continue _fun71823;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.SearchTypes;
    var _closure1_slot9 = var4;
    var3 = var3.Endpoints;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot8;
        var2 = function(arg0, arg1, arg2) { // Original name: SearchFetcher, environment: var5
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.isCanceled = var1;
            var1 = arg0;
            var2.searchId = var1;
            var1 = arg1;
            var2.searchType = var1;
            var1 = arg2;
            var2.query = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'fetch';
        var4.key = var1;
        var6 = _closure1_slot6;
        var1 = undefined;
        var0 = function*(arg0, arg1, arg2) { // Environment: var5
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun71829: for (var _fun71829_ip = 0;;) switch (_fun71829_ip) {
                    case 0:
                        StartGenerator();
                        var10 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71829_ip = 440;
                            continue _fun71829
                        }
                    case 13:
                        var5 = arg0;
                        var6 = arg1;
                        var2 = arg2;
                        var1 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var3 = var10.isCanceled;
                        if (var3) {
                            _fun71829_ip = 437;
                            continue _fun71829
                        }
                    case 42: // try_start_0
                        var9 = var10.makeRequest;
                        var3 = {};
                        var11 = false;
                        var3.rejectWithError = var11;
                        var3 = var9.bind(var10)(var3);
                        SaveGenerator(address = 67);
                    case 65:
                        return var3;
                    case 67:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun71829_ip = 368;
                            continue _fun71829
                        }
                    case 76:
                        var4 = var3;
                        var12 = null;
                        if (!(var12 != var3)) {
                            _fun71829_ip = 365;
                            continue _fun71829
                        }
                    case 88:
                        var9 = var10.isCanceled;
                        if (var9) {
                            _fun71829_ip = 362;
                            continue _fun71829
                        }
                    case 100:
                        var9 = var4;
                        var11 = var9.status;
                        var9 = 200;
                        if (!(var9 !== var11)) {
                            _fun71829_ip = 355;
                            continue _fun71829
                        }
                    case 118:
                        var9 = var4;
                        var11 = var9.status;
                        var9 = 202;
                        if (!(var9 === var11)) {
                            _fun71829_ip = 360;
                            continue _fun71829
                        }
                    case 136:
                        var9 = var10.query;
                        var11 = var10.query;
                        var11 = var11.attempts;
                        var7 = var11;
                        var13 = var12 != var11;
                        var11 = 0;
                        var12 = 0;
                        if (!var13) {
                            _fun71829_ip = 171;
                            continue _fun71829
                        }
                    case 168:
                        var12 = var7;
                    case 171:
                        var7 = 1;
                        var7 = var12 + var7;
                        var9.attempts = var7;
                        var7 = var10.query;
                        var9 = var7.attempts;
                        var7 = 5;
                        if (!(!(var9 > var7))) {
                            _fun71829_ip = 352;
                            continue _fun71829
                        }
                    case 206:
                        var7 = global;
                        var12 = var7.parseInt;
                        var9 = var4;
                        var9 = var9.headers;
                        var9 = var9["retry-after"];
                        var9 = var12.bind(var1)(var9);
                        var8 = var9;
                        var7 = var7.isNaN;
                        var9 = var7.bind(var1)(var9);
                        var12 = 5000;
                        var7 = var12;
                        if (var9) {
                            _fun71829_ip = 312;
                            continue _fun71829
                        }
                    case 260:
                        var9 = var8;
                        var7 = var12;
                        if (!(var11 !== var9)) {
                            _fun71829_ip = 312;
                            continue _fun71829
                        }
                    case 270:
                        var9 = var8;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var8 = 7;
                        var8 = var12[var8];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.Millis;
                        var8 = var8.SECOND;
                        var7 = var9 * var8;
                    case 312:
                        var10.retryDelay = var7;
                        var9 = var10.retryLater;
                        var8 = var5;
                        var7 = var6;
                        var6 = var2;
                        var6 = var9.bind(var10)(var8, var7, var6);
                        var6 = var4;
                        var6 = var7.bind(var1)(var6);
                        _fun71829_ip = 360;
                        continue _fun71829;
                    case 352: // try_end0
                        return var1;
                    case 355: // try_start_1
                        var4 = var5.bind(var1)(var4);
                    case 360: // try_end1
                        _fun71829_ip = 437;
                        continue _fun71829;
                    case 362:
                        return var1;
                    case 365:
                        return var1;
                    case 368:
                        return var3;
                    case 371: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 8;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = 'SearchFetcher';
                        var17 = var5;
                        var4 = new var17[var6](var16, var15);
                        var5 = var4 instanceof Object ? var4 : var5;
                        var4 = var5.error;
                        var4 = var4.bind(var5)(var3);
                        var2 = var2.bind(var1)(var3);
                    case 437:
                        return var1;
                    case 440:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() { // Original name: fetch, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'cancel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun71831: for (var _fun71831_ip = 0;;) switch (_fun71831_ip) {
                case 0:
                    var0 = this;
                    var1 = true;
                    var0.isCanceled = var1;
                    var2 = var0.indexingPollId;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun71831_ip = 44;
                        continue _fun71831
                    }
                case 23:
                    var1 = global;
                    var2 = var1.clearTimeout;
                    var1 = var0.indexingPollId;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'retryLater';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun71832: for (var _fun71832_ip = 0;;) switch (_fun71832_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.indexingPollId;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun71832_ip = 36;
                        continue _fun71832
                    }
                case 15:
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var1 = var2.indexingPollId;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                case 36:
                    var0 = global;
                    var4 = var0.setTimeout;
                    var6 = var2.fetch;
                    var5 = var6.bind;
                    var9 = arg0;
                    var8 = arg1;
                    var7 = arg2;
                    var11 = var6;
                    var10 = var2;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
                    var1 = var2.retryDelay;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var1);
                    var2.indexingPollId = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: SearchFetcherImpl, environment: var5
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot7;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot11;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'getEndpoint';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun71835: for (var _fun71835_ip = 0;;) switch (_fun71835_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.searchType;
                    var2 = _closure1_slot9;
                    var2 = var2.FAVORITES;
                    if (!(var2 !== var3)) {
                        _fun71835_ip = 224;
                        continue _fun71835
                    }
                case 29:
                    var2 = _closure1_slot9;
                    var2 = var2.GUILD;
                    if (!(var2 !== var3)) {
                        _fun71835_ip = 171;
                        continue _fun71835
                    }
                case 46:
                    var2 = _closure1_slot9;
                    var2 = var2.CHANNEL;
                    if (!(var2 !== var3)) {
                        _fun71835_ip = 118;
                        continue _fun71835
                    }
                case 60:
                    var2 = global;
                    var4 = var2.Error;
                    var5 = var1.searchType;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '[SearchFetcher] Unhandled search type: ';
                    var6 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 118:
                    var3 = var1.searchId;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun71835_ip = 167;
                        continue _fun71835
                    }
                case 130:
                    var3 = var1.searchId;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun71835_ip = 167;
                        continue _fun71835
                    }
                case 144:
                    var4 = _closure1_slot10;
                    var3 = var4.SEARCH_CHANNEL;
                    var2 = var1.searchId;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 167:
                    var2 = undefined;
                    return var2;
                case 171:
                    var3 = var1.searchId;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun71835_ip = 220;
                        continue _fun71835
                    }
                case 183:
                    var3 = var1.searchId;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun71835_ip = 220;
                        continue _fun71835
                    }
                case 197:
                    var3 = _closure1_slot10;
                    var2 = var3.SEARCH_GUILD;
                    var1 = var1.searchId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 220:
                    var1 = undefined;
                    return var1;
                case 224:
                    var0 = _closure1_slot10;
                    var0 = var0.SEARCH_FAVORITES;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'makeRequest';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun71836: for (var _fun71836_ip = 0;;) switch (_fun71836_ip) {
                case 0:
                    var5 = this;
                    var0 = arg0;
                    var4 = var0.rejectWithError;
                    var0 = var5.getEndpoint;
                    var7 = var0.bind(var5)();
                    var0 = null;
                    var1 = var0 == var7;
                    if (var1) {
                        _fun71836_ip = 125;
                        continue _fun71836
                    }
                case 30:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 9;
                    var1 = var9[var1];
                    var8 = undefined;
                    var1 = var2.bind(var8)(var1);
                    var3 = var1.HTTP;
                    var2 = var3.get;
                    var1 = {};
                    var1.url = var7;
                    var7 = _closure1_slot1;
                    var6 = 10;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.stringify;
                    var5 = var5.query;
                    var5 = var6.bind(var7)(var5);
                    var1.query = var5;
                    var5 = true;
                    var1.oldFormErrors = var5;
                    var1.rejectWithError = var4;
                    var0 = var2.bind(var3)(var1);
                case 125:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1, arg2, arg3) { // Original name: SearchTabFetcherImpl, environment: var5
            var4 = this;
            var1 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot11;
            var0 = new Array(3);
            var5 = arg0;
            var0[0] = var5;
            var5 = arg1;
            var0[1] = var5;
            var5 = arg2;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            var1 = arg3;
            var0.payload = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'getEndpoint';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun71839: for (var _fun71839_ip = 0;;) switch (_fun71839_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.searchType;
                    var2 = _closure1_slot9;
                    var2 = var2.DMS;
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 258;
                        continue _fun71839
                    }
                case 29:
                    var2 = _closure1_slot9;
                    var2 = var2.GUILD_CHANNEL;
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 205;
                        continue _fun71839
                    }
                case 46:
                    var2 = _closure1_slot9;
                    var2 = var2.GUILD;
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 205;
                        continue _fun71839
                    }
                case 63:
                    var2 = _closure1_slot9;
                    var2 = var2.THREAD;
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 205;
                        continue _fun71839
                    }
                case 80:
                    var2 = _closure1_slot9;
                    var2 = var2.CHANNEL;
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 152;
                        continue _fun71839
                    }
                case 94:
                    var2 = global;
                    var4 = var2.Error;
                    var5 = var1.searchType;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '[SearchFetcher] Unhandled search type: ';
                    var6 = var3.bind(var2)(var5);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 152:
                    var3 = var1.searchId;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun71839_ip = 201;
                        continue _fun71839
                    }
                case 164:
                    var3 = var1.searchId;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 201;
                        continue _fun71839
                    }
                case 178:
                    var4 = _closure1_slot10;
                    var3 = var4.SEARCH_TABS_CHANNEL;
                    var2 = var1.searchId;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 201:
                    var2 = undefined;
                    return var2;
                case 205:
                    var3 = var1.searchId;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun71839_ip = 254;
                        continue _fun71839
                    }
                case 217:
                    var3 = var1.searchId;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun71839_ip = 254;
                        continue _fun71839
                    }
                case 231:
                    var3 = _closure1_slot10;
                    var2 = var3.SEARCH_TABS_GUILD;
                    var1 = var1.searchId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 254:
                    var1 = undefined;
                    return var1;
                case 258:
                    var0 = _closure1_slot10;
                    var0 = var0.SEARCH_TABS_DMS;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'makeRequest';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun71840: for (var _fun71840_ip = 0;;) switch (_fun71840_ip) {
                case 0:
                    var5 = this;
                    var0 = arg0;
                    var4 = var0.rejectWithError;
                    var0 = var5.getEndpoint;
                    var6 = var0.bind(var5)();
                    var0 = null;
                    var1 = var0 == var6;
                    if (var1) {
                        _fun71840_ip = 98;
                        continue _fun71840
                    }
                case 30:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {};
                    var1.url = var6;
                    var5 = var5.payload;
                    var1.body = var5;
                    var5 = true;
                    var1.oldFormErrors = var5;
                    var1.rejectWithError = var4;
                    var0 = var2.bind(var3)(var1);
                case 98:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/SearchFetcher.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SearchFetcher = var4;
    var2.SearchFetcherImpl = var3;
    var2.SearchTabFetcherImpl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 5, 6, 7, 660, 667, 3, 507, 1454, 2]);