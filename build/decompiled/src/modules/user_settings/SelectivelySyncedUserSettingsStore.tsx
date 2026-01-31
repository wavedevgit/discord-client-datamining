// modules/user_settings/SelectivelySyncedUserSettingsStore.tsx
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
        _fun15487: for (var _fun15487_ip = 0;;) switch (_fun15487_ip) {
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
                _fun15487_ip = 74;
                continue _fun15487;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
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
    var1 = var1.UserSettingsSections;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: SelectivelySyncedUserSettingsStore, environment: var5
            _fun15491: for (var _fun15491_ip = 0;;) switch (_fun15491_ip) {
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
                        _fun15491_ip = 69;
                        continue _fun15491
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15491_ip = 105;
                    continue _fun15491;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun15492: for (var _fun15492_ip = 0;;) switch (_fun15492_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun15492_ip = 11;
                        continue _fun15492
                    }
                case 9:
                    var1 = {};
                case 11:
                    _closure1_slot9 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldSync';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15494: for (var _fun15494_ip = 0;;) switch (_fun15494_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun15494_ip = 31;
                        continue _fun15494
                    }
                case 25:
                    var1 = var0.shouldSync;
                case 31:
                    var0 = false;
                    var0 = var0 !== var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getTextSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun15495: for (var _fun15495_ip = 0;;) switch (_fun15495_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var1 = var0.text;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun15495_ip = 29;
                        continue _fun15495
                    }
                case 23:
                    var0 = var1.settings;
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAppearanceSettings';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun15496: for (var _fun15496_ip = 0;;) switch (_fun15496_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var1 = var0.appearance;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun15496_ip = 30;
                        continue _fun15496
                    }
                case 24:
                    var0 = var1.settings;
                case 30:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SelectivelySyncedUserSettingsStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(2);
    var8 = function() { // Environment: var3
        _fun15497: for (var _fun15497_ip = 0;;) switch (_fun15497_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 7;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = var0.Storage;
                var0 = var1.get;
                var3 = 'UserSettingsSync';
                var6 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun15497_ip = 55;
                    continue _fun15497
                }
            case 53:
                var6 = {};
            case 55:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var5.bind(var4)(var1);
                var8 = var1.Storage;
                var5 = var8.get;
                var1 = 'UserSettingsStore';
                var5 = var5.bind(var8)(var1);
                if (!(var0 == var5)) {
                    _fun15497_ip = 100;
                    continue _fun15497
                }
            case 98:
                var5 = {};
            case 100:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var1.bind(var4)(var0);
                var1 = var0.Storage;
                var0 = var1.remove;
                var0 = var0.bind(var1)(var3);
                var0 = {};
                var1 = _closure1_slot8;
                var1 = var1.TEXT;
                var1 = var6[var1];
                var3 = false;
                if (!(var3 === var1)) {
                    _fun15497_ip = 216;
                    continue _fun15497
                }
            case 156:
                var1 = {};
                var1.shouldSync = var3;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 8;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.pick;
                var7 = ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay', 'defaultReactionEmoji'];
                var7 = var8.bind(var9)(var5, var7);
                var1.settings = var7;
                var0.text = var1;
            case 216:
                var1 = _closure1_slot8;
                var1 = var1.APPEARANCE;
                var1 = var6[var1];
                if (!(var3 === var1)) {
                    _fun15497_ip = 294;
                    continue _fun15497
                }
            case 234:
                var1 = {};
                var1.shouldSync = var3;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.pick;
                var2 = ['theme', 'clientThemeSettings', 'developerMode'];
                var2 = var3.bind(var4)(var5, var2);
                var1.settings = var2;
                var0.appearance = var1;
            case 294:
                return var0;
        }
    };
    var1[0] = var8;
    var8 = function(arg0) { // Environment: var3
        _fun15498: for (var _fun15498_ip = 0;;) switch (_fun15498_ip) {
            case 0:
                var1 = arg0;
                var4 = null;
                var2 = var4 == var1;
                var0 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun15498_ip = 52;
                    continue _fun15498
                }
            case 16:
                var2 = var1.appearance;
                var5 = var4 == var2;
                var3 = undefined;
                if (var5) {
                    _fun15498_ip = 52;
                    continue _fun15498
                }
            case 31:
                var2 = var2.settings;
                var4 = var4 == var2;
                var3 = undefined;
                if (var4) {
                    _fun15498_ip = 52;
                    continue _fun15498
                }
            case 46:
                var3 = var2.theme;
            case 52:
                var2 = 'amoled';
                if (!(var2 !== var3)) {
                    _fun15498_ip = 64;
                    continue _fun15498
                }
            case 62:
                return var0;
            case 64:
                var0 = {};
                var7 = var0;
                var6 = var1;
                var2 = copyDataProperties(var7, var6);
                var2 = {};
                var6 = var1.appearance;
                var7 = var2;
                var3 = copyDataProperties(var7, var6);
                var3 = {};
                var1 = var1.appearance;
                var6 = var1.settings;
                var7 = var3;
                var1 = copyDataProperties(var7, var6);
                var4 = 'midnight';
                var1 = 'theme';
                var3[var1] = var4;
                var1 = 'settings';
                var2[var1] = var3;
                var1 = 'appearance';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[1] = var8;
    var7.migrations = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleSelectivelySyncedUserSettingsUpdate, environment: var3
        _fun15499: for (var _fun15499_ip = 0;;) switch (_fun15499_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.changes;
                var16 = var18;
                var0 = undefined;
                var11 = false;
                var10 = null;
                var9 = true;
                var19 = undefined;
                for (var13 in var16)
                    case 36: {
                        case 48: var8 = var13;
                        var1 = var18[var8];
                        var3 = var1.shouldSync;
                        var7 = var1.settings;
                        if (!(var9 === var3)) {
                            _fun15499_ip = 81;
                            continue _fun15499
                        }
                        case 71: var1 = _closure1_slot9;
                        var1 = delete var1[var8];
                        _fun15499_ip = 36;
                        continue _fun15499;
                        case 81: if (!(var11 === var3)) {
                            _fun15499_ip = 107;
                            continue _fun15499
                        }
                        case 85: var2 = _closure1_slot9;
                        var1 = {};
                        var1.shouldSync = var3;
                        var3 = {};
                        var1.settings = var3;
                        var2[var8] = var1;
                        case 107: var1 = _closure1_slot9;
                        var6 = var1[var8];
                        var2 = var10 == var6;
                        var1 = undefined;
                        if (var2) {
                            _fun15499_ip = 130;
                            continue _fun15499
                        }
                        case 124: var1 = var6.shouldSync;
                        case 130: var19 = var6;
                        if (var11 !== var1) {
                            _fun15499_ip = 36;
                            continue _fun15499
                        }
                        case 137: var4 = var7;
                        var19 = var6;
                        ForInLoopInit(obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var5 === undefined) {
                            _fun15499_ip = 36;
                            continue _fun15499
                        }
                        case 151: var19 = var6;
                        ForInLoopNextIter(next_value_register = 1, obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var1 === undefined) {
                            _fun15499_ip = 36;
                            continue _fun15499
                        }
                        case 163: var21 = var1;
                        var19 = _closure1_slot9;
                        var19 = var19[var8];
                        var20 = var19.settings;
                        var19 = var7[var21];
                        var20[var21] = var19;
                        _fun15499_ip = 151;
                        continue _fun15499;
                    }
            case 190:
                return var0;
        }
    };
    var1.SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE = var8;
    var3 = function() { // Original name: handleLogOut, environment: var3
        var0 = {};
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/SelectivelySyncedUserSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 566, 587, 22, 806, 2]);