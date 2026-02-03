// stores/CollapsedVoiceChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun41343: for (var _fun41343_ip = 0;;) switch (_fun41343_ip) {
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
                _fun41343_ip = 74;
                continue _fun41343;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.keys;
        var1 = _closure1_slot9;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun41347: for (var _fun41347_ip = 0;;) switch (_fun41347_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var3 = var2.bind(var3)(var1);
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun41347_ip = 34;
                        continue _fun41347
                    }
                case 26:
                    var0 = _closure1_slot9;
                    var0 = delete var0[var1];
                case 34:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun41349: for (var _fun41349_ip = 0;;) switch (_fun41349_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41349_ip = 69;
                        continue _fun41349
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41349_ip = 105;
                    continue _fun41349;
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
            _fun41350: for (var _fun41350_ip = 0;;) switch (_fun41350_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot7;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun41350_ip = 34;
                        continue _fun41350
                    }
                case 30:
                    var1 = _closure1_slot8;
                case 34:
                    _closure1_slot9 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCollapsed';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isCollapsed';
        var4.key = var6;
        var5 = function arg0() {
            _fun41353: for (var _fun41353_ip = 0;;) switch (_fun41353_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun41353_ip = 19;
                        continue _fun41353
                    }
                case 17:
                    var0 = false;
                case 19:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'CollapsedVoiceChannelStore';
    var6.displayName = var1;
    var1 = 'collapsedChannels';
    var6.persistKey = var1;
    var1 = 8;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var7;
    var1.OVERLAY_INITIALIZE = var7;
    var3 = function arg0() {
        _fun41354: for (var _fun41354_ip = 0;;) switch (_fun41354_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = _closure1_slot9;
                var3 = var0[var2];
                var0 = _closure1_slot9;
                if (var3) {
                    _fun41354_ip = 34;
                    continue _fun41354
                }
            case 26:
                var3 = true;
                var0[var2] = var3;
                _fun41354_ip = 38;
                continue _fun41354;
            case 34:
                var0 = delete var0[var2];
            case 38:
                var0 = {};
                var4 = _closure1_slot9;
                var5 = var0;
                var2 = copyDataProperties(var5, var4);
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_COLLAPSE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/CollapsedVoiceChannelStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 21, 566, 806, 2]);