// modules/poggermode/PoggermodeSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun54330: for (var _fun54330_ip = 0;;) switch (_fun54330_ip) {
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
                _fun54330_ip = 74;
                continue _fun54330;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var10 = var1.ShakeLocation;
    var8 = var1.ConfettiLocation;
    var11 = false;
    var _closure1_slot5 = var11;
    var1 = {
        'settingsVisible': false,
        'enabled': false,
        'combosEnabled': true,
        'combosRequiredCount': 5,
        'comboSoundsEnabled': true,
        'screenshakeEnabled': true,
        'screenshakeEnabledLocations': null,
        'shakeIntensity': 1,
        'confettiEnabled': true,
        'confettiEnabledLocations': null,
        'confettiSize': 16,
        'confettiCount': 5,
        'warningSeen': false
    };
    var3 = {};
    var12 = var10.CHAT_INPUT;
    var3[var12] = var9;
    var12 = var10.VOICE_USER;
    var3[var12] = var11;
    var10 = var10.MENTION;
    var3[var10] = var11;
    var1.screenshakeEnabledLocations = var3;
    var3 = {};
    var10 = var8.CHAT_INPUT;
    var3[var10] = var9;
    var10 = var8.REACTION;
    var3[var10] = var9;
    var10 = var8.MEMBER_USER;
    var3[var10] = var9;
    var8 = var8.CALL_TILE;
    var3[var8] = var9;
    var1.confettiEnabledLocations = var3;
    var3 = 6;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var3 = var8.cloneDeep;
    var3 = var3.bind(var8)(var1);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.DeviceSettingsStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun54334: for (var _fun54334_ip = 0;;) switch (_fun54334_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54334_ip = 69;
                        continue _fun54334
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54334_ip = 105;
                    continue _fun54334;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            var1 = {};
            var3 = _closure1_slot6;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            var3 = arg0;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            _closure1_slot6 = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'settingsVisible';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.settingsVisible;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isEnabled';
        var4.key = var6;
        var6 = function() {
            _fun54338: for (var _fun54338_ip = 0;;) switch (_fun54338_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun54338_ip = 11;
                        continue _fun54338
                    }
                case 9:
                    var0 = {};
                case 11:
                    var5 = var0.confettiLocation;
                    var4 = var0.shakeLocation;
                    var0 = null;
                    var2 = var0 == var5;
                    if (var2) {
                        _fun54338_ip = 69;
                        continue _fun54338
                    }
                case 36:
                    var1 = _closure1_slot6;
                    var1 = var1.confettiEnabled;
                    if (!var1) {
                        _fun54338_ip = 66;
                        continue _fun54338
                    }
                case 52:
                    var3 = _closure1_slot6;
                    var3 = var3.confettiEnabledLocations;
                    var1 = var3[var5];
                case 66:
                    var2 = var1;
                case 69:
                    var1 = var0 == var4;
                    if (var1) {
                        _fun54338_ip = 109;
                        continue _fun54338
                    }
                case 76:
                    var0 = _closure1_slot6;
                    var0 = var0.screenshakeEnabled;
                    if (!var0) {
                        _fun54338_ip = 106;
                        continue _fun54338
                    }
                case 92:
                    var3 = _closure1_slot6;
                    var3 = var3.screenshakeEnabledLocations;
                    var0 = var3[var4];
                case 106:
                    var1 = var0;
                case 109:
                    var0 = this;
                    var0 = var0.settingsVisible;
                    if (!var0) {
                        _fun54338_ip = 131;
                        continue _fun54338
                    }
                case 121:
                    var3 = _closure1_slot5;
                    var0 = !var3;
                case 131:
                    if (!var0) {
                        _fun54338_ip = 146;
                        continue _fun54338
                    }
                case 134:
                    var3 = _closure1_slot6;
                    var0 = var3.enabled;
                case 146:
                    if (!var0) {
                        _fun54338_ip = 152;
                        continue _fun54338
                    }
                case 149:
                    var0 = var2;
                case 152:
                    if (!var0) {
                        _fun54338_ip = 158;
                        continue _fun54338
                    }
                case 155:
                    var0 = var1;
                case 158:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'shakeIntensity';
        var4.key = var6;
        var6 = function() {
            _fun54339: for (var _fun54339_ip = 0;;) switch (_fun54339_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isEnabled;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    if (!var1) {
                        _fun54339_ip = 31;
                        continue _fun54339
                    }
                case 18:
                    var1 = _closure1_slot6;
                    var0 = var1.shakeIntensity;
                case 31:
                    return var0;
            }
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'combosRequiredCount';
        var4.key = var6;
        var6 = function() {
            _fun54340: for (var _fun54340_ip = 0;;) switch (_fun54340_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isEnabled;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    if (!var1) {
                        _fun54340_ip = 31;
                        continue _fun54340
                    }
                case 18:
                    var1 = _closure1_slot6;
                    var0 = var1.combosRequiredCount;
                case 31:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'screenshakeEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.screenshakeEnabled;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'screenshakeEnabledLocations';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.screenshakeEnabledLocations;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'combosEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.combosEnabled;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'comboSoundsEnabled';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot6;
            var0 = var0.comboSoundsEnabled;
            return var0;
        };
        var4.get = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'PoggermodeSettingsStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 8;
    var3 = var6[var3];
    var15 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.settings;
        var1 = {};
        var4 = _closure1_slot6;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var3.POGGERMODE_SETTINGS_UPDATE = var9;
    var4 = function() {
        var0 = true;
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var3.POGGERMODE_TEMPORARILY_DISABLED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var16 = var4;
    var14 = var3;
    var3 = new var16[var8](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/poggermode/PoggermodeSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.initialState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6555, 22, 566, 806, 2]);