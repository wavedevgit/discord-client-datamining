// modules/poggermode/trackPoggermodeSettingsUpdated.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: getScreenshakeLocationName, environment: var1
        _fun54576: for (var _fun54576_ip = 0;;) switch (_fun54576_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot2;
                var2 = var2.CHAT_INPUT;
                if (!(var2 !== var1)) {
                    _fun54576_ip = 66;
                    continue _fun54576
                }
            case 20:
                var2 = _closure1_slot2;
                var2 = var2.MENTION;
                if (!(var2 !== var1)) {
                    _fun54576_ip = 60;
                    continue _fun54576
                }
            case 34:
                var0 = _closure1_slot2;
                var0 = var0.VOICE_USER;
                if (!(var0 !== var1)) {
                    _fun54576_ip = 52;
                    continue _fun54576
                }
            case 48:
                var0 = undefined;
                return var0;
            case 52:
                var0 = 'voice_user';
                return var0;
            case 60:
                var0 = 'mention';
                return var0;
            case 66:
                var0 = 'chat_input';
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: getConfettiLocationName, environment: var1
        _fun54577: for (var _fun54577_ip = 0;;) switch (_fun54577_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot3;
                var2 = var2.CHAT_INPUT;
                if (!(var2 !== var1)) {
                    _fun54577_ip = 88;
                    continue _fun54577
                }
            case 20:
                var2 = _closure1_slot3;
                var2 = var2.MEMBER_USER;
                if (!(var2 !== var1)) {
                    _fun54577_ip = 80;
                    continue _fun54577
                }
            case 34:
                var2 = _closure1_slot3;
                var2 = var2.REACTION;
                if (!(var2 !== var1)) {
                    _fun54577_ip = 74;
                    continue _fun54577
                }
            case 48:
                var0 = _closure1_slot3;
                var0 = var0.CALL_TILE;
                if (!(var0 !== var1)) {
                    _fun54577_ip = 66;
                    continue _fun54577
                }
            case 62:
                var0 = undefined;
                return var0;
            case 66:
                var0 = 'call_tile';
                return var0;
            case 74:
                var0 = 'reaction';
                return var0;
            case 80:
                var0 = 'member_user';
                return var0;
            case 88:
                var0 = 'chat_input';
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: getListOfEnabledLocations, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun54579: for (var _fun54579_ip = 0;;) switch (_fun54579_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var0 = var3().value;
                    var0 = var1;
                    var5 = undefined;
                    var2 = var0 === var5;
                    var0 = undefined;
                    if (var2) {
                        _fun54579_ip = 49;
                        continue _fun54579
                    }
                case 24:
                    var4 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var0 = undefined;
                    var2 = var3;
                    if (var3) {
                        _fun54579_ip = 49;
                        continue _fun54579
                    }
                case 43:
                    var0 = var4;
                    var2 = var3;
                case 49:
                    if (var2) {
                        _fun54579_ip = 55;
                        continue _fun54579
                    }
                case 52:
                    var1.return();
                case 55:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun54580: for (var _fun54580_ip = 0;;) switch (_fun54580_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1[Symbol.iterator];
                    var1 = var0().next;
                    var3 = var1().value;
                    var1 = var0;
                    var2 = undefined;
                    var1 = var1 === var2;
                    var4 = undefined;
                    if (var1) {
                        _fun54580_ip = 27;
                        continue _fun54580
                    }
                case 24:
                    var4 = var3;
                case 27:
                    if (var1) {
                        _fun54580_ip = 33;
                        continue _fun54580
                    }
                case 30:
                    var0.return();
                case 33:
                    var1 = _closure2_slot0;
                    var0 = global;
                    var3 = var0.Number;
                    var0 = var3.parseInt;
                    var0 = var0.bind(var3)(var4);
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.ShakeLocation;
    var _closure1_slot2 = var7;
    var3 = var3.ConfettiLocation;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var6 = var7.throttle;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var15 = var0.enabled;
        var14 = var0.combosEnabled;
        var13 = var0.combosRequiredCount;
        var11 = var0.screenshakeEnabled;
        var6 = var0.shakeIntensity;
        var12 = var0.screenshakeEnabledLocations;
        var10 = var0.confettiEnabled;
        var9 = var0.confettiSize;
        var8 = var0.confettiCount;
        var7 = var0.confettiEnabledLocations;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.POGGERMODE_SETTINGS_UPDATED;
        var1 = {};
        var1.enabled = var15;
        var1.combos_enabled = var14;
        var1.combos_required_count = var13;
        var1.screenshake_enabled = var11;
        var1.shake_intensity = var6;
        var6 = _closure1_slot7;
        var11 = _closure1_slot5;
        var11 = var6.bind(var0)(var12, var11);
        var1.screenshake_enabled_locations = var11;
        var1.confetti_enabled = var10;
        var1.confetti_size = var9;
        var1.confetti_count = var8;
        var5 = _closure1_slot6;
        var5 = var6.bind(var0)(var7, var5);
        var1.confetti_enabled_locations = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1 = 5000;
    var1 = var6.bind(var7)(var3, var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/poggermode/trackPoggermodeSettingsUpdated.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6493, 660, 22, 795, 2]);