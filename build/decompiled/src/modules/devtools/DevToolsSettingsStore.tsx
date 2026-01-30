// modules/devtools/DevToolsSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun85651: for (var _fun85651_ip = 0;;) switch (_fun85651_ip) {
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
                _fun85651_ip = 76;
                continue _fun85651;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
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
    var3 = {
        'sidebarWidth': 460,
        'lastOpenTabId': null,
        'displayTools': false,
        'showDevWidget': false
    };
    var1 = 460;
    var7 = {
        'x': 0,
        'y': 0
    };
    var3.devWidgetPosition = var7;
    var7 = new Array(0);
    var3.sortedScreenKeys = var7;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.DeviceSettingsStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: DevToolsSettingsStore, environment: var5
            _fun85655: for (var _fun85655_ip = 0;;) switch (_fun85655_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun85655_ip = 69;
                        continue _fun85655
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun85655_ip = 105;
                    continue _fun85655;
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
            _fun85656: for (var _fun85656_ip = 0;;) switch (_fun85656_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun85656_ip = 16;
                        continue _fun85656
                    }
                case 9:
                    var2 = _closure1_slot8;
                case 16:
                    _closure1_slot8 = var2;
                    var3 = var2.sortedScreenKeys;
                    if (!(var0 == var3)) {
                        _fun85656_ip = 37;
                        continue _fun85656
                    }
                case 33:
                    var3 = new Array(0);
                case 37:
                    var0 = {};
                    var4 = _closure1_slot8;
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var2 = 'sortedScreenKeys';
                    var0[var2] = var3;
                    _closure1_slot8 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.actionLogger;
                    var1 = _closure1_slot7;
                    var1 = var1.isDeveloper;
                    var2.persist = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'sidebarWidth';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun85658: for (var _fun85658_ip = 0;;) switch (_fun85658_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.displayTools;
                    var0 = 0;
                    if (!var1) {
                        _fun85658_ip = 27;
                        continue _fun85658
                    }
                case 14:
                    var1 = _closure1_slot8;
                    var0 = var1.sidebarWidth;
                case 27:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'lastOpenTabId';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun85659: for (var _fun85659_ip = 0;;) switch (_fun85659_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var1 = var0.lastOpenTabId;
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun85659_ip = 25;
                        continue _fun85659
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'displayTools';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun85660: for (var _fun85660_ip = 0;;) switch (_fun85660_ip) {
                case 0:
                    var0 = _closure1_slot7;
                    var0 = var0.isDeveloper;
                    if (!var0) {
                        _fun85660_ip = 26;
                        continue _fun85660
                    }
                case 16:
                    var1 = _closure1_slot8;
                    var0 = var1.displayTools;
                case 26:
                    return var0;
            }
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'showDevWidget';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun85661: for (var _fun85661_ip = 0;;) switch (_fun85661_ip) {
                case 0:
                    var0 = _closure1_slot7;
                    var0 = var0.isDeveloper;
                    if (!var0) {
                        _fun85661_ip = 26;
                        continue _fun85661
                    }
                case 16:
                    var1 = _closure1_slot8;
                    var0 = var1.showDevWidget;
                case 26:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'devWidgetPosition';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.devWidgetPosition;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'sortedScreenKeys';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.sortedScreenKeys;
            return var0;
        };
        var4.get = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'DevToolsSettingsStore';
    var7.displayName = var3;
    var7.persistKey = var3;
    var3 = 6;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = {};
    var4 = function(arg0) { // Original name: handleDevToolsSettingsUpdate, environment: var4
        _fun85664: for (var _fun85664_ip = 0;;) switch (_fun85664_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.isDeveloper;
                if (!var0) {
                    _fun85664_ip = 49;
                    continue _fun85664
                }
            case 16:
                var0 = {};
                var3 = _closure1_slot8;
                var4 = var0;
                var2 = copyDataProperties(var4, var3);
                var2 = arg0;
                var3 = var2.settings;
                var4 = var0;
                var2 = copyDataProperties(var4, var3);
                _closure1_slot8 = var0;
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var3.DEV_TOOLS_SETTINGS_UPDATE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var7](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/DevToolsSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DEVTOOLS_SIDEBAR_MIN_WIDTH = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 10349, 806, 566, 2]);