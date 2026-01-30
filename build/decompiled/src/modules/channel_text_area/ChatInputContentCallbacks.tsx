// modules/channel_text_area/ChatInputContentCallbacks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: areMemberGroupsHydrated, environment: var1
        _fun90019: for (var _fun90019_ip = 0;;) switch (_fun90019_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.length;
                var2 = 1;
                var0 = var0 > var2;
                if (var0) {
                    _fun90019_ip = 74;
                    continue _fun90019
                }
            case 18:
                var1 = var3.length;
                var1 = var2 === var1;
                if (!var1) {
                    _fun90019_ip = 49;
                    continue _fun90019
                }
            case 30:
                var2 = 0;
                var2 = var3[var2];
                var4 = var2.type;
                var2 = 'GROUP';
                var1 = var2 === var4;
            case 49:
                if (!var1) {
                    _fun90019_ip = 71;
                    continue _fun90019
                }
            case 52:
                var2 = 0;
                var2 = var3[var2];
                var3 = var2.id;
                var2 = 'unknown';
                var1 = var2 === var3;
            case 71:
                var0 = !var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: tryUpdateSubscriptionForHereMention, environment: var1
        _fun90020: for (var _fun90020_ip = 0;;) switch (_fun90020_ip) {
            case 0:
                var5 = arg0;
                var7 = arg2;
                var6 = arg3;
                var1 = _closure1_slot7;
                var2 = _closure1_slot5;
                var0 = var2.getProps;
                var0 = var0.bind(var2)(var7, var6);
                var0 = var0.groups;
                var9 = undefined;
                var1 = var1.bind(var9)(var0);
                var0 = !var1;
                var0 = !var0;
                if (var1) {
                    _fun90020_ip = 174;
                    continue _fun90020
                }
            case 54:
                var2 = var5.length;
                var1 = 5;
                var2 = var2 < var1;
                if (var2) {
                    _fun90020_ip = 81;
                    continue _fun90020
                }
            case 69:
                var4 = var5.length;
                var1 = arg1;
                var2 = var4 > var1;
            case 81:
                var1 = !var2;
                if (var2) {
                    _fun90020_ip = 171;
                    continue _fun90020
                }
            case 87:
                var4 = var5.indexOf;
                var2 = _closure1_slot6;
                var4 = var4.bind(var5)(var2);
                var2 = -1;
                var2 = var2 !== var4;
                if (!var2) {
                    _fun90020_ip = 168;
                    continue _fun90020
                }
            case 115:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 3;
                var3 = var10[var3];
                var5 = var8.bind(var9)(var3);
                var4 = var5.subscribeChannel;
                var3 = 4;
                var3 = var10[var3];
                var3 = var8.bind(var9)(var3);
                var3 = var3.DEFAULT_RANGES;
                var3 = var4.bind(var5)(var7, var6, var3);
                var2 = true;
            case 168:
                var1 = var2;
            case 171:
                var0 = var1;
            case 174:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = '@here';
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_text_area/ChatInputContentCallbacks.tsx';
    var4 = var5.bind(var6)(var4);
    var2.tryUpdateSubscriptionForHereMention = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: useHereMentionCallback, environment: var1
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = var2.bind(var0)();
        var _closure2_slot3 = var2;
        var4 = _closure1_slot4;
        var9 = var4.useState;
        var8 = false;
        var9 = var9.bind(var4)(var8);
        var8 = _closure1_slot3;
        var3 = 2;
        var8 = var8.bind(var0)(var9, var3);
        var3 = 0;
        var9 = var8[var3];
        var _closure2_slot4 = var9;
        var3 = 1;
        var3 = var8[var3];
        var _closure2_slot5 = var3;
        var8 = var4.useMemo;
        var3 = new Array(3);
        var3[0] = var2;
        var3[1] = var6;
        var3[2] = var5;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.debounce;
            var2 = {};
            var0 = 500;
            var2.maxWait = var0;
            var1 = function(arg0) { // Environment: var0
                _fun90023: for (var _fun90023_ip = 0;;) switch (_fun90023_ip) {
                    case 0:
                        var6 = _closure1_slot8;
                        var9 = _closure2_slot3;
                        var8 = _closure2_slot1;
                        var7 = _closure2_slot2;
                        var0 = undefined;
                        var10 = arg0;
                        var11 = undefined;
                        var2 = var11[var6](var10, var9, var8, var7, var6);
                        if (!var2) {
                            _fun90023_ip = 47;
                            continue _fun90023
                        }
                    case 36:
                        var2 = _closure2_slot5;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                    case 47:
                        return var0;
                }
            };
            var0 = 200;
            var0 = var3.bind(var4)(var1, var0, var2);
            return var0;
        };
        var8 = var8.bind(var4)(var2, var3);
        var _closure2_slot6 = var8;
        var3 = var4.useEffect;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() { // Environment: var1
            _fun90024: for (var _fun90024_ip = 0;;) switch (_fun90024_ip) {
                case 0:
                    var5 = _closure1_slot5;
                    var3 = var5.getProps;
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var5)(var4, var2);
                    var3 = var2.groups;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun90024_ip = 100;
                        continue _fun90024
                    }
                case 42:
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    if (var1) {
                        _fun90024_ip = 100;
                        continue _fun90024
                    }
                case 56:
                    var1 = _closure2_slot4;
                    if (var1) {
                        _fun90024_ip = 100;
                        continue _fun90024
                    }
                case 63:
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = _closure2_slot6;
                    var0 = 'text-changed';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot0;
                        var2 = var3.removeListener;
                        var1 = _closure2_slot6;
                        var0 = 'text-changed';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useHereMentionCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5617, 7707, 5636, 7627, 22, 2]);