// modules/user_settings/LocaleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun19142: for (var _fun19142_ip = 0;;) switch (_fun19142_ip) {
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
                _fun19142_ip = 74;
                continue _fun19142;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function() { // Original name: _getSystemLocale, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun19147: for (var _fun19147_ip = 0;;) switch (_fun19147_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun19147_ip = 195;
                            continue _fun19147
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 8;
                        var1 = var1[var6];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = null;
                        var5 = var3 == var1;
                        var1 = undefined;
                        if (var5) {
                            _fun19147_ip = 84;
                            continue _fun19147
                        }
                    case 46:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var6];
                        var5 = var7.bind(var4)(var5);
                        var5 = var5.app;
                        var7 = var3 == var5;
                        var1 = undefined;
                        if (var7) {
                            _fun19147_ip = 84;
                            continue _fun19147
                        }
                    case 78:
                        var1 = var5.getPreferredSystemLanguages;
                    case 84:
                        if (!(var3 != var1)) {
                            _fun19147_ip = 160;
                            continue _fun19147
                        }
                    case 88:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var5.bind(var4)(var1);
                        var5 = var1.app;
                        var1 = var5.getPreferredSystemLanguages;
                        var6 = var1.bind(var5)();
                        var5 = var6.then;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = 0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 142);
                    case 140:
                        return var1;
                    case 142:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun19147_ip = 192;
                            continue _fun19147
                        }
                    case 148:
                        if (!(var3 != var1)) {
                            _fun19147_ip = 160;
                            continue _fun19147
                        }
                    case 152:
                        var3 = '';
                        if (!(var3 === var1)) {
                            _fun19147_ip = 189;
                            continue _fun19147
                        }
                    case 160:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.systemLocale;
                        return var2;
                    case 189:
                        return var1;
                    case 192:
                        return var1;
                    case 195:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var8 = function() { // Original name: handleUpdate, environment: var3
        _fun19149: for (var _fun19149_ip = 0;;) switch (_fun19149_ip) {
            case 0:
                var0 = _closure1_slot10;
                var0 = var0.settings;
                var1 = var0.localization;
                var0 = null;
                var5 = var0 == var1;
                var3 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun19149_ip = 52;
                    continue _fun19149
                }
            case 32:
                var1 = var1.locale;
                var5 = var0 == var1;
                var2 = undefined;
                if (var5) {
                    _fun19149_ip = 52;
                    continue _fun19149
                }
            case 47:
                var2 = var1.value;
            case 52:
                var0 = var0 != var2;
                if (!var0) {
                    _fun19149_ip = 67;
                    continue _fun19149
                }
            case 59:
                var1 = '';
                var0 = var1 !== var2;
            case 67:
                if (!var0) {
                    _fun19149_ip = 78;
                    continue _fun19149
                }
            case 70:
                var1 = _closure1_slot11;
                var0 = var2 !== var1;
            case 78:
                if (!var0) {
                    _fun19149_ip = 96;
                    continue _fun19149
                }
            case 81:
                var1 = _closure1_slot9;
                _closure1_slot11 = var2;
                var1 = var1.bind(var3)(var2);
                var0 = true;
            case 96:
                return var0;
        }
    };
    var _closure1_slot15 = var8;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.setAppLocale;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var7 = var5[var1];
    var7 = var4.bind(var0)(var7);
    var7 = var7.intl;
    var7 = var7.currentLocale;
    var _closure1_slot11 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.systemLocale;
    var _closure1_slot12 = var1;
    var1 = function() { // Original name: getSystemLocale, environment: var3
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var9 = var1.bind(var0)();
    var7 = var9.then;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = var7.bind(var9)(var1);
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: LocaleStore, environment: var5
            _fun19153: for (var _fun19153_ip = 0;;) switch (_fun19153_ip) {
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
                        _fun19153_ip = 69;
                        continue _fun19153
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun19153_ip = 105;
                    continue _fun19153;
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
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var0 = _closure1_slot10;
            var0 = var2.bind(var3)(var0);
            var2 = _closure1_slot15;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var2 = _closure1_slot9;
            var1 = _closure1_slot11;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'locale';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'systemLocale';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LocaleStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.OVERLAY_INITIALIZE = var8;
    var1.CACHE_LOADED = var8;
    var1.CONNECTION_OPEN = var8;
    var1.USER_SETTINGS_PROTO_UPDATE = var8;
    var3 = function(arg0) { // Original name: handleLocaleOverride, environment: var3
        var0 = arg0;
        var2 = var0.locale;
        _closure1_slot11 = var2;
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.USER_SETTINGS_LOCALE_OVERRIDE = var3;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/LocaleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 1677, 1310, 3033, 1234, 566, 806, 2]);