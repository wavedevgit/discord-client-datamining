// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12173: for (var _fun12173_ip = 0;;) switch (_fun12173_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var4 = this;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var7 = var6[var0];
            var3 = metroImportDefault;
            var0 = undefined;
            var3 = var3.bind(var0)(var7);
            var _closure1_slot2 = var3;
            var3 = var4;
            if (!var3) {
                _fun12173_ip = 86;
                continue _fun12173
            }
        case 80:
            var3 = var4.__awaiter;
        case 86:
            if (var3) {
                _fun12173_ip = 94;
                continue _fun12173
            }
        case 89:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12174: for (var _fun12174_ip = 0;;) switch (_fun12174_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12174_ip = 48;
                            continue _fun12174
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12175: for (var _fun12175_ip = 0;;) switch (_fun12175_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun12176: for (var _fun12176_ip = 0;;) switch (_fun12176_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12176_ip = 52;
                                                continue _fun12176;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun12177: for (var _fun12177_ip = 0;;) switch (_fun12177_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12177_ip = 53;
                                                continue _fun12177;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun12178: for (var _fun12178_ip = 0;;) switch (_fun12178_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12178_ip = 54;
                                                    continue _fun12178
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun12179: for (var _fun12179_ip = 0;;) switch (_fun12179_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12179_ip = 52;
                                                                continue _fun12179
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12178_ip = 73;
                                                continue _fun12178;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12175_ip = 70;
                                        continue _fun12175
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 94:
            var _closure1_slot3 = var3;
            var3 = {};
            var4 = 1;
            var7 = var6[var4];
            var7 = var5.bind(var0)(var7);
            var7 = var7.SDK_NAME;
            var3.name = var7;
            var8 = {};
            var7 = var6[var4];
            var7 = var5.bind(var0)(var7);
            var7 = var7.SDK_PACKAGE_NAME;
            var8.name = var7;
            var7 = var6[var4];
            var7 = var5.bind(var0)(var7);
            var7 = var7.SDK_VERSION;
            var8.version = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var3.packages = var7;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.SDK_VERSION;
            var3.version = var4;
            var _closure1_slot4 = var3;
            var2.defaultSdkInfo = var3;
            var1 = function() { // Original name: sdkInfoIntegration, environment: var1
                var2 = function() { // Original name: createCachedFetchNativeSdkInfo, environment: var1
                    _fun12182: for (var _fun12182_ip = 0;;) switch (_fun12182_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var4 = 2;
                            var2 = var2[var4];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.notWeb;
                            var2 = var2.bind(var5)();
                            if (!var2) {
                                _fun12182_ip = 96;
                                continue _fun12182
                            }
                        case 47:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.isExpoGo;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun12182_ip = 96;
                                continue _fun12182
                            }
                        case 77:
                            var1 = false;
                            var _closure3_slot1 = var1;
                            var1 = null;
                            var _closure3_slot2 = var1;
                            var1 = function() { // Environment: var0
                                var3 = _closure1_slot3;
                                var7 = _closure3_slot0;
                                var4 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun12186: for (var _fun12186_ip = 0;;) switch (_fun12186_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun12186_ip = 153;
                                                    continue _fun12186
                                                }
                                            case 10:
                                                var2 = _closure3_slot1;
                                                if (var2) {
                                                    _fun12186_ip = 146;
                                                    continue _fun12186
                                                }
                                            case 23: // try_start_0
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var2 = 3;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var2 = var4.bind(var2)(var3);
                                                var3 = var2.NATIVE;
                                                var2 = var3.fetchNativeSdkInfo;
                                                var2 = var2.bind(var3)();
                                                SaveGenerator(address = 68);
                                            case 66:
                                                return var2;
                                            case 68:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                                if (var3) {
                                                    _fun12186_ip = 86;
                                                    continue _fun12186
                                                }
                                            case 74:
                                                _closure3_slot2 = var2;
                                                var3 = true;
                                                _closure3_slot1 = var3;
                                            case 84: // try_end0
                                                _fun12186_ip = 139;
                                                continue _fun12186;
                                            case 86:
                                                return var2;
                                            case 89: // catch_target0
                                                CatchBlockStart(arg_register = 5);
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var2 = 4;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var2 = var4.bind(var2)(var3);
                                                var4 = var2.debug;
                                                var3 = var4.warn;
                                                var2 = 'Could not fetch native sdk info.';
                                                var2 = var3.bind(var4)(var2, var5);
                                            case 139:
                                                var2 = _closure3_slot2;
                                                return var2;
                                            case 146:
                                                var1 = _closure3_slot2;
                                                return var1;
                                            case 153:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var8 = undefined;
                                var6 = undefined;
                                var5 = undefined;
                                var0 = var8[var3](var7, var6, var5, var4, var3);
                                return var0;
                            };
                            return var1;
                        case 96:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.Promise;
                                var1 = var2.resolve;
                                var0 = null;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var2.bind(var0)();
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'SdkInfo';
                var0.name = var2;
                var2 = function() { // Original name: setupOnce, environment: var1
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var2;
                var1 = function(arg0) { // Original name: processEvent, environment: var1
                    var3 = _closure2_slot0;
                    var2 = function(arg0, arg1) { // Original name: _processEvent, environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var3 = _closure1_slot3;
                        var7 = this;
                        var4 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun12191: for (var _fun12191_ip = 0;;) switch (_fun12191_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun12191_ip = 271;
                                            continue _fun12191
                                        }
                                    case 10:
                                        var1 = _closure4_slot1;
                                        var9 = undefined;
                                        var1 = var1.bind(var9)();
                                        SaveGenerator(address = 27);
                                    case 25:
                                        return var1;
                                    case 27:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun12191_ip = 268;
                                            continue _fun12191
                                        }
                                    case 36:
                                        var4 = _closure4_slot0;
                                        var3 = var4.platform;
                                        if (var3) {
                                            _fun12191_ip = 53;
                                            continue _fun12191
                                        }
                                    case 49:
                                        var3 = 'javascript';
                                    case 53:
                                        var4.platform = var3;
                                        var4 = _closure4_slot0;
                                        var3 = var4.sdk;
                                        if (var3) {
                                            _fun12191_ip = 74;
                                            continue _fun12191
                                        }
                                    case 72:
                                        var3 = {};
                                    case 74:
                                        var4.sdk = var3;
                                        var3 = _closure4_slot0;
                                        var4 = var3.sdk;
                                        var3 = var3.sdk;
                                        var3 = var3.name;
                                        if (var3) {
                                            _fun12191_ip = 116;
                                            continue _fun12191
                                        }
                                    case 104:
                                        var5 = _closure1_slot4;
                                        var3 = var5.name;
                                    case 116:
                                        var4.name = var3;
                                        var3 = _closure4_slot0;
                                        var4 = var3.sdk;
                                        var3 = var3.sdk;
                                        var3 = var3.version;
                                        if (var3) {
                                            _fun12191_ip = 160;
                                            continue _fun12191
                                        }
                                    case 147:
                                        var5 = _closure1_slot4;
                                        var3 = var5.version;
                                    case 160:
                                        var4.version = var3;
                                        var5 = _closure4_slot0;
                                        var4 = var5.sdk;
                                        var7 = new Array(0);
                                        var6 = var7.concat;
                                        var8 = _closure1_slot2;
                                        var5 = var5.sdk;
                                        var5 = var5.packages;
                                        if (var5) {
                                            _fun12191_ip = 211;
                                            continue _fun12191
                                        }
                                    case 207:
                                        var5 = new Array(0);
                                    case 211:
                                        var5 = var8.bind(var9)(var5);
                                        var8 = _closure1_slot2;
                                        var3 = var1;
                                        if (!var3) {
                                            _fun12191_ip = 237;
                                            continue _fun12191
                                        }
                                    case 226:
                                        var10 = new Array(1);
                                        var10[0] = var1;
                                        var3 = var10;
                                    case 237:
                                        if (var3) {
                                            _fun12191_ip = 244;
                                            continue _fun12191
                                        }
                                    case 240:
                                        var3 = new Array(0);
                                    case 244:
                                        var3 = var8.bind(var9)(var3);
                                        var3 = var6.bind(var7)(var5, var3);
                                        var4.packages = var3;
                                        var2 = _closure4_slot0;
                                        return var2;
                                    case 268:
                                        return var1;
                                    case 271:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var8 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var0 = var8[var3](var7, var6, var5, var4, var3);
                        return var0;
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0, var3);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
            };
            var2.sdkInfoIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 1109, 999, 998, 817]);