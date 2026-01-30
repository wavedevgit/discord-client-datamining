// modules/applications/ApplicationFrecencyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun42961: for (var _fun42961_ip = 0;;) switch (_fun42961_ip) {
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
                _fun42961_ip = 74;
                continue _fun42961;
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
    var0 = function(arg0) { // Original name: trackApplicationUsage, environment: var3
        var3 = arg0;
        var1 = _closure1_slot11;
        var4 = var1.pendingUsages;
        var2 = var4.push;
        var1 = {};
        var1.key = var3;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var5 = var5.bind(var6)();
        var1.timestamp = var5;
        var1 = var2.bind(var4)(var1);
        var2 = _closure1_slot12;
        var1 = var2.track;
        var1 = var1.bind(var2)(var3);
        var1 = _closure1_slot12;
        var0 = var1.compute;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: handleUserSettingsProtoStoreChange, environment: var3
        _fun42965: for (var _fun42965_ip = 0;;) switch (_fun42965_ip) {
            case 0:
                var0 = _closure1_slot8;
                var0 = var0.frecencyWithoutFetchingLatest;
                var3 = var0.applicationFrecency;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun42965_ip = 38;
                    continue _fun42965
                }
            case 32:
                var7 = var3.applications;
            case 38:
                if (!(var2 == var7)) {
                    _fun42965_ip = 44;
                    continue _fun42965
                }
            case 42:
                var7 = {};
            case 44:
                var4 = _closure1_slot12;
                var3 = var4.overwriteHistory;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 11;
                var2 = var6[var2];
                var6 = var5.bind(var0)(var2);
                var5 = var6.mapValues;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.recentUses;
                    var2 = var3.map;
                    var1 = global;
                    var1 = var1.Number;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'recentUses';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var5.bind(var6)(var7, var2);
                var1 = _closure1_slot11;
                var1 = var1.pendingUsages;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.FREQUENCY_ITEM_LIMIT;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot9 = var1;
    var8 = 9;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ApplicationCommandType;
    var9 = var1.CHAT;
    var1 = new Array(2);
    var1[0] = var9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ApplicationCommandType;
    var8 = var8.PRIMARY_ENTRY_POINT;
    var1[1] = var8;
    var _closure1_slot10 = var1;
    var1 = {};
    var8 = new Array(0);
    var1.pendingUsages = var8;
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() { // Original name: computeBonus, environment: var3
        var0 = 100;
        return var0;
    };
    var1.computeBonus = var9;
    var9 = function(arg0) { // Original name: lookupKey, environment: var3
        var0 = arg0;
        return var0;
    };
    var1.lookupKey = var9;
    var9 = function() { // Original name: afterCompute, environment: var3
        var0 = undefined;
        return var0;
    };
    var1.afterCompute = var9;
    var1.numFrequentlyItems = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var12 = var1;
    var1 = new var13[var8](var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot12 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ApplicationFrecencyStore, environment: var5
            _fun42972: for (var _fun42972_ip = 0;;) switch (_fun42972_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42972_ip = 69;
                        continue _fun42972
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42972_ip = 105;
                    continue _fun42972;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun42973: for (var _fun42973_ip = 0;;) switch (_fun42973_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun42973_ip = 19;
                        continue _fun42973
                    }
                case 12:
                    _closure1_slot11 = var1;
                case 19:
                    var4 = var3.waitFor;
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot8;
                    var1 = var4.bind(var3)(var2, var1);
                    var2 = var3.syncWith;
                    var4 = _closure1_slot8;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot15;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            var0 = var0.pendingUsages;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getApplicationFrecencyWithoutLoadingLatest';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getScoreWithoutLoadingLatest';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun42977: for (var _fun42977_ip = 0;;) switch (_fun42977_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getScore;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun42977_ip = 35;
                        continue _fun42977
                    }
                case 32:
                    var0 = var1;
                case 35:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getTopApplicationsWithoutLoadingLatest';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var0 = var0.frequently;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationFrecencyStore';
    var7.displayName = var1;
    var1 = 'ApplicationFrecency';
    var7.persistKey = var1;
    var1 = 13;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleApplicationCommandUsed, environment: var3
        _fun42979: for (var _fun42979_ip = 0;;) switch (_fun42979_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.command;
                var4 = _closure1_slot10;
                var1 = var4.includes;
                var0 = var2.type;
                var0 = var1.bind(var4)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun42979_ip = 102;
                    continue _fun42979
                }
            case 40:
                var5 = _closure1_slot7;
                var4 = var5.getLaunchState;
                var1 = var2.applicationId;
                var4 = var4.bind(var5)(var1);
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun42979_ip = 78;
                    continue _fun42979
                }
            case 69:
                var4 = var4.isLaunching;
                var1 = !var4;
            case 78:
                if (!var1) {
                    _fun42979_ip = 99;
                    continue _fun42979
                }
            case 81:
                var4 = _closure1_slot14;
                var3 = var2.applicationId;
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var1 = undefined;
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_USED = var8;
    var8 = function(arg0) { // Original name: handleEmbeddedActivityOpen, environment: var3
        var0 = arg0;
        var2 = var0.applicationId;
        var1 = _closure1_slot14;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.EMBEDDED_ACTIVITY_OPEN = var8;
    var3 = function(arg0) { // Original name: handleUserSettingsProtoUpdate, environment: var3
        _fun42981: for (var _fun42981_ip = 0;;) switch (_fun42981_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var3 = var1.type;
                var1 = var0.wasSaved;
                var2 = _closure1_slot9;
                var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                if (!(var3 === var2)) {
                    _fun42981_ip = 58;
                    continue _fun42981
                }
            case 37:
                if (!var1) {
                    _fun42981_ip = 58;
                    continue _fun42981
                }
            case 40:
                var1 = _closure1_slot11;
                var0 = new Array(0);
                var1.pendingUsages = var0;
                var0 = undefined;
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var3;
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
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/ApplicationFrecencyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1371, 1310, 3444, 665, 1636, 3566, 22, 566, 806, 2]);