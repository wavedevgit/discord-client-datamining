// modules/activities/DeveloperActivityShelfStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun59049: for (var _fun59049_ip = 0;;) switch (_fun59049_ip) {
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
                _fun59049_ip = 74;
                continue _fun59049;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ApplicationFlags;
    var _closure1_slot7 = var1;
    var1 = {
        'lastUsedObject': null,
        'useActivityUrlOverride': false,
        'activityUrlOverride': null,
        'filter': ''
    };
    var3 = {};
    var1.lastUsedObject = var3;
    var _closure1_slot8 = var1;
    var1 = {};
    var3 = 'INITIALIZED';
    var1.INITIALIZED = var3;
    var3 = 'LOADING';
    var1.LOADING = var3;
    var3 = 'LOADED';
    var1.LOADED = var3;
    var3 = 'ERROR';
    var1.ERROR = var3;
    var _closure1_slot9 = var1;
    var3 = var1.INITIALIZED;
    var _closure1_slot10 = var3;
    var3 = new Array(0);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun59053: for (var _fun59053_ip = 0;;) switch (_fun59053_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun59053_ip = 69;
                        continue _fun59053
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun59053_ip = 105;
                    continue _fun59053;
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
        var0 = function arg0() {
            _fun59054: for (var _fun59054_ip = 0;;) switch (_fun59054_ip) {
                case 0:
                    var0 = arg0;
                    var1 = {
                        'lastUsedObject': null,
                        'useActivityUrlOverride': false,
                        'activityUrlOverride': null,
                        'filter': ''
                    };
                    var2 = {};
                    var1.lastUsedObject = var2;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun59054_ip = 33;
                        continue _fun59054
                    }
                case 31:
                    var0 = {};
                case 33:
                    var4 = var1;
                    var3 = var0;
                    var0 = copyDataProperties(var4, var3);
                    _closure1_slot8 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getIsEnabled';
        var4.key = var6;
        var6 = function() {
            _fun59056: for (var _fun59056_ip = 0;;) switch (_fun59056_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.DeveloperMode;
                    var0 = var2.getSetting;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun59056_ip = 59;
                        continue _fun59056
                    }
                case 44:
                    var1 = _closure1_slot11;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastUsedObject';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            var0 = var0.lastUsedObject;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUseActivityUrlOverride';
        var4.key = var6;
        var6 = function() {
            _fun59058: for (var _fun59058_ip = 0;;) switch (_fun59058_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getIsEnabled;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun59058_ip = 29;
                        continue _fun59058
                    }
                case 16:
                    var1 = _closure1_slot8;
                    var0 = var1.useActivityUrlOverride;
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getActivityUrlOverride';
        var4.key = var6;
        var6 = function() {
            _fun59059: for (var _fun59059_ip = 0;;) switch (_fun59059_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getIsEnabled;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    if (!var1) {
                        _fun59059_ip = 31;
                        continue _fun59059
                    }
                case 18:
                    var1 = _closure1_slot8;
                    var0 = var1.activityUrlOverride;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getFilter';
        var4.key = var6;
        var6 = function() {
            _fun59061: for (var _fun59061_ip = 0;;) switch (_fun59061_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getIsEnabled;
                    var1 = var0.bind(var1)();
                    var0 = '';
                    if (!var1) {
                        _fun59061_ip = 32;
                        continue _fun59061
                    }
                case 20:
                    var1 = _closure1_slot8;
                    var0 = var1.filter;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getDeveloperShelfItems';
        var4.key = var6;
        var6 = function() {
            _fun59062: for (var _fun59062_ip = 0;;) switch (_fun59062_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getIsEnabled;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun59062_ip = 22;
                        continue _fun59062
                    }
                case 16:
                    var0 = new Array(0);
                    _fun59062_ip = 29;
                    continue _fun59062;
                case 22:
                    var0 = _closure1_slot11;
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'inDevModeForApplication';
        var4.key = var6;
        var5 = function arg0() {
            _fun59063: for (var _fun59063_ip = 0;;) switch (_fun59063_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = var2.getIsEnabled;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun59063_ip = 53;
                        continue _fun59063
                    }
                case 25:
                    var3 = _closure1_slot11;
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var0 = var1 != var2;
                case 53:
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'DeveloperActivityShelfStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(1);
    var9 = function(arg0) { // Environment: var4
        var1 = arg0;
        var0 = delete var1.isEnabled;
        var0 = {};
        var3 = var0;
        var2 = var1;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var3[0] = var9;
    var8.migrations = var3;
    var3 = 9;
    var3 = var6[var3];
    var12 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var0 = {
            'lastUsedObject': null,
            'useActivityUrlOverride': false,
            'activityUrlOverride': null,
            'filter': ''
        };
        var1 = {};
        var0.lastUsedObject = var1;
        _closure1_slot8 = var0;
        var0 = _closure1_slot9;
        var0 = var0.INITIALIZED;
        _closure1_slot10 = var0;
        var0 = new Array(0);
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var9;
    var9 = function() {
        var1 = _closure1_slot8;
        var0 = var1.useActivityUrlOverride;
        var0 = !var0;
        var1.useActivityUrlOverride = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.activityUrlOverride;
        var0 = _closure1_slot8;
        var0.activityUrlOverride = var1;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE = var9;
    var9 = function arg0() {
        _fun59069: for (var _fun59069_ip = 0;;) switch (_fun59069_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var _closure2_slot0 = var2;
                var1 = var0.timestamp;
                var5 = _closure1_slot11;
                var4 = var5.find;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun59069_ip = 66;
                    continue _fun59069
                }
            case 48:
                var0 = _closure1_slot8;
                var0 = var0.lastUsedObject;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var3.DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED = var9;
    var9 = function() {
        var0 = _closure1_slot9;
        var0 = var0.LOADING;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_FETCH_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.applications;
        var0 = _closure1_slot9;
        var0 = var0.LOADED;
        _closure1_slot10 = var0;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            _fun59073: for (var _fun59073_ip = 0;;) switch (_fun59073_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.flags;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun59073_ip = 69;
                        continue _fun59073
                    }
                case 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.hasFlag;
                    var2 = var2.flags;
                    var1 = _closure1_slot7;
                    var1 = var1.EMBEDDED;
                    var0 = var3.bind(var4)(var2, var1);
                case 69:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.type;
        var0 = _closure1_slot9;
        var0 = var0.ERROR;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.filter;
        var0 = _closure1_slot8;
        var0.filter = var1;
        var0 = undefined;
        return var0;
    };
    var3.DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER = var9;
    var4 = function() {
        var0 = undefined;
        return var0;
    };
    var3.USER_SETTINGS_PROTO_UPDATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/DeveloperActivityShelfStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DevShelfFetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 1384, 1348, 566, 806, 2]);