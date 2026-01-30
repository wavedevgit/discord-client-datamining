// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function() { // Original name: configureProps, environment: var1
        _fun33924: for (var _fun33924_ip = 0;;) switch (_fun33924_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 1;
                var2 = var0[var8];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.PropsAllowlists;
                var7 = var2.NATIVE_THREAD_PROPS_WHITELIST;
                for (var3 in var7)
                    case 48: {
                        case 57: var6 = var3;
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var8];
                        var2 = var10.bind(var0)(var2);
                        var2 = var2.PropsAllowlists;
                        var2 = var2.UI_THREAD_PROPS_WHITELIST;
                        var2 = var6 in var2;
                        if (!var2) {
                            _fun33924_ip = 48;
                            continue _fun33924
                        }
                        case 96: var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 2;
                        var2 = var4[var2];
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ReanimatedError;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var3 = 'Property `';
                        var2 = '` was whitelisted both as UI and native prop. Please remove it from one of the lists.';
                        var12 = var5.bind(var3)(var6, var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var13 = var3;
                        var2 = new var13[var4](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    }
            case 175:
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 3;
                var2 = var1[var2];
                var4 = var7.bind(var0)(var2);
                var3 = var4.jsiConfigureProps;
                var5 = global;
                var9 = var5.Object;
                var6 = var9.keys;
                var2 = var1[var8];
                var2 = var7.bind(var0)(var2);
                var2 = var2.PropsAllowlists;
                var2 = var2.UI_THREAD_PROPS_WHITELIST;
                var2 = var6.bind(var9)(var2);
                var6 = var5.Object;
                var5 = var6.keys;
                var1 = var1[var8];
                var1 = var7.bind(var0)(var1);
                var1 = var1.PropsAllowlists;
                var1 = var1.NATIVE_THREAD_PROPS_WHITELIST;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function(arg0) { // Original name: addWhitelistedUIProps, environment: var1
        _fun33925: for (var _fun33925_ip = 0;;) switch (_fun33925_ip) {
            case 0:
                var4 = global;
                var8 = var4.Object;
                var5 = var8.keys;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var3 = var7[var2];
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var3 = var3.PropsAllowlists;
                var3 = var3.UI_THREAD_PROPS_WHITELIST;
                var3 = var5.bind(var8)(var3);
                var3 = var3.length;
                var5 = var7[var2];
                var5 = var6.bind(var0)(var5);
                var8 = var5.PropsAllowlists;
                var12 = var4.Object;
                var11 = var12.assign;
                var5 = var7[var2];
                var5 = var6.bind(var0)(var5);
                var5 = var5.PropsAllowlists;
                var10 = var5.UI_THREAD_PROPS_WHITELIST;
                var9 = {};
                var5 = arg0;
                var5 = var11.bind(var12)(var9, var10, var5);
                var8.UI_THREAD_PROPS_WHITELIST = var5;
                var5 = var4.Object;
                var4 = var5.keys;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.PropsAllowlists;
                var2 = var2.UI_THREAD_PROPS_WHITELIST;
                var2 = var4.bind(var5)(var2);
                var2 = var2.length;
                if (!(var3 !== var2)) {
                    _fun33925_ip = 179;
                    continue _fun33925
                }
            case 171:
                var1 = _closure1_slot4;
                var1 = var1.bind(var0)();
            case 179:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var7 = var7.bind(var0)(var6);
    var6 = var7.shouldBeUseWeb;
    var6 = var6.bind(var7)();
    var _closure1_slot2 = var6;
    var5 = var5.Set;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var14 = var6;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot3 = var5;
    var5 = var4.bind(var0)();
    var2.configureProps = var4;
    var4 = function(arg0) { // Original name: addWhitelistedNativeProps, environment: var1
        _fun33926: for (var _fun33926_ip = 0;;) switch (_fun33926_ip) {
            case 0:
                var4 = global;
                var8 = var4.Object;
                var5 = var8.keys;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var3 = var7[var2];
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var3 = var3.PropsAllowlists;
                var3 = var3.NATIVE_THREAD_PROPS_WHITELIST;
                var3 = var5.bind(var8)(var3);
                var3 = var3.length;
                var5 = var7[var2];
                var5 = var6.bind(var0)(var5);
                var8 = var5.PropsAllowlists;
                var12 = var4.Object;
                var11 = var12.assign;
                var5 = var7[var2];
                var5 = var6.bind(var0)(var5);
                var5 = var5.PropsAllowlists;
                var10 = var5.NATIVE_THREAD_PROPS_WHITELIST;
                var9 = {};
                var5 = arg0;
                var5 = var11.bind(var12)(var9, var10, var5);
                var8.NATIVE_THREAD_PROPS_WHITELIST = var5;
                var5 = var4.Object;
                var4 = var5.keys;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.PropsAllowlists;
                var2 = var2.NATIVE_THREAD_PROPS_WHITELIST;
                var2 = var4.bind(var5)(var2);
                var2 = var2.length;
                if (!(var3 !== var2)) {
                    _fun33926_ip = 179;
                    continue _fun33926
                }
            case 171:
                var1 = _closure1_slot4;
                var1 = var1.bind(var0)();
            case 179:
                return var0;
        }
    };
    var2.addWhitelistedNativeProps = var4;
    var2.addWhitelistedUIProps = var3;
    var3 = function(arg0) { // Original name: configureReanimatedLogger, environment: var1
        _fun33927: for (var _fun33927_ip = 0;;) switch (_fun33927_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 4;
                var3 = var0[var6];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.updateLoggerConfig;
                var3 = var3.bind(var4)(var2);
                var3 = _closure1_slot2;
                if (var3) {
                    _fun33927_ip = 97;
                    continue _fun33927
                }
            case 46:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 3;
                var3 = var1[var3];
                var4 = var5.bind(var0)(var3);
                var3 = var4.executeOnUIRuntimeSync;
                var1 = var1[var6];
                var1 = var5.bind(var0)(var1);
                var1 = var1.updateLoggerConfig;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var0)(var2);
            case 97:
                return var0;
        }
    };
    var2.configureReanimatedLogger = var3;
    var1 = function(arg0) { // Original name: adaptViewConfig, environment: var1
        _fun33928: for (var _fun33928_ip = 0;;) switch (_fun33928_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.uiViewClassName;
                var6 = var0.validAttributes;
                var4 = _closure1_slot3;
                var3 = var4.has;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun33928_ip = 101;
                    continue _fun33928
                }
            case 37:
                var4 = {};
                var _closure2_slot0 = var4;
                var3 = global;
                var5 = var3.Object;
                var3 = var5.keys;
                var5 = var3.bind(var5)(var6);
                var3 = var5.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun33929: for (var _fun33929_ip = 0;;) switch (_fun33929_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 1;
                            var1 = var0[var5];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.PropsAllowlists;
                            var1 = var1.NATIVE_THREAD_PROPS_WHITELIST;
                            var1 = var3 in var1;
                            if (var1) {
                                _fun33929_ip = 80;
                                continue _fun33929
                            }
                        case 47:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var5];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.PropsAllowlists;
                            var2 = var2.UI_THREAD_PROPS_WHITELIST;
                            var1 = var3 in var2;
                        case 80:
                            if (var1) {
                                _fun33929_ip = 96;
                                continue _fun33929
                            }
                        case 83:
                            var2 = _closure2_slot0;
                            var1 = true;
                            var2[var3] = var1;
                        case 96:
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot5;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                var1 = _closure1_slot3;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var2.adaptViewConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3683, 3693, 3691, 3724, 3684]);