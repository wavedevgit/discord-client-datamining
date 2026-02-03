// stores/DimensionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun38628: for (var _fun38628_ip = 0;;) switch (_fun38628_ip) {
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
                _fun38628_ip = 74;
                continue _fun38628;
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
    var0 = function arg0() {
        var0 = {
            'guildId': null,
            'scrollTop': null,
            'scrollTo': null
        };
        var1 = arg0;
        var0.guildId = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun38632: for (var _fun38632_ip = 0;;) switch (_fun38632_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot7;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun38632_ip = 24;
                    continue _fun38632
                }
            case 20:
                var2 = undefined;
                return var2;
            case 24:
                var0 = _closure1_slot7;
                var0 = var0[var1];
                var1 = var0.scrollTop;
                var2 = var0.scrollHeight;
                var0 = var0.offsetHeight;
                var0 = var2 - var0;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var6 = 0;
    var1 = var4[var6];
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
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var1.scrollTop = var6;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun38634: for (var _fun38634_ip = 0;;) switch (_fun38634_ip) {
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
                        _fun38634_ip = 69;
                        continue _fun38634
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38634_ip = 105;
                    continue _fun38634;
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
        var0 = 'percentageScrolled';
        var4.key = var0;
        var0 = function arg0() {
            _fun38635: for (var _fun38635_ip = 0;;) switch (_fun38635_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot7;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun38635_ip = 25;
                        continue _fun38635
                    }
                case 20:
                    var2 = 1;
                    return var2;
                case 25:
                    var0 = _closure1_slot7;
                    var0 = var0[var1];
                    var1 = var0.scrollTop;
                    var0 = var0.scrollHeight;
                    var0 = var1 / var0;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelDimensions';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot7;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildDimensions';
        var4.key = var6;
        var6 = function arg0() {
            _fun38637: for (var _fun38637_ip = 0;;) switch (_fun38637_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot8;
                    var0 = var0[var3];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun38637_ip = 31;
                        continue _fun38637
                    }
                case 20:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildListDimensions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isAtBottom';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'DimensionStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun38640: for (var _fun38640_ip = 0;;) switch (_fun38640_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var7 = var0.scrollTop;
                var6 = var0.scrollHeight;
                var4 = var0.offsetHeight;
                var2 = _closure1_slot7;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var7)) {
                    _fun38640_ip = 121;
                    continue _fun38640
                }
            case 43:
                if (!(var2 != var6)) {
                    _fun38640_ip = 121;
                    continue _fun38640
                }
            case 47:
                if (!(var2 != var4)) {
                    _fun38640_ip = 121;
                    continue _fun38640
                }
            case 51:
                var5 = {};
                var5.channelId = var1;
                var5.scrollTop = var7;
                var5.scrollHeight = var6;
                var5.offsetHeight = var4;
                if (!(var2 != var3)) {
                    _fun38640_ip = 107;
                    continue _fun38640
                }
            case 76:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 5;
                var4 = var6[var4];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var4 = var4.bind(var6)(var3, var5);
                if (var4) {
                    _fun38640_ip = 117;
                    continue _fun38640
                }
            case 107:
                var4 = _closure1_slot7;
                var4[var1] = var5;
                _fun38640_ip = 133;
                continue _fun38640;
            case 117:
                var4 = false;
                return var4;
            case 121:
                if (!(var2 != var3)) {
                    _fun38640_ip = 137;
                    continue _fun38640
                }
            case 125:
                var0 = _closure1_slot7;
                var0 = delete var0[var1];
            case 133:
                var0 = undefined;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var1.UPDATE_CHANNEL_DIMENSIONS = var7;
    var7 = function arg0() {
        _fun38641: for (var _fun38641_ip = 0;;) switch (_fun38641_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var6 = var0.scrollTop;
                var2 = var0.scrollTo;
                var0 = _closure1_slot8;
                var1 = var0[var5];
                var0 = null;
                if (!(var0 == var1)) {
                    _fun38641_ip = 56;
                    continue _fun38641
                }
            case 37:
                var4 = _closure1_slot8;
                var7 = _closure1_slot11;
                var1 = undefined;
                var1 = var7.bind(var1)(var5);
                var4[var5] = var1;
            case 56:
                var4 = undefined;
                if (!(var4 !== var6)) {
                    _fun38641_ip = 76;
                    continue _fun38641
                }
            case 62:
                var1 = _closure1_slot8;
                var1 = var1[var5];
                var1.scrollTop = var6;
            case 76:
                var1 = false;
                if (!(var4 !== var2)) {
                    _fun38641_ip = 110;
                    continue _fun38641
                }
            case 82:
                var4 = _closure1_slot8;
                var3 = var4[var5];
                var3 = var3.scrollTo;
                var1 = var3 !== var2;
                var4 = var4[var5];
                var4.scrollTo = var2;
            case 110:
                var0 = var0 != var2;
                if (var0) {
                    _fun38641_ip = 120;
                    continue _fun38641
                }
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var1.UPDATE_CHANNEL_LIST_DIMENSIONS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.scrollTop;
        var0 = _closure1_slot9;
        var0.scrollTop = var1;
        var0 = undefined;
        return var0;
    };
    var1.UPDATE_GUILD_LIST_DIMENSIONS = var7;
    var3 = function arg0() {
        _fun38643: for (var _fun38643_ip = 0;;) switch (_fun38643_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = _closure1_slot12;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                if (!var3) {
                    _fun38643_ip = 33;
                    continue _fun38643
                }
            case 25:
                var1 = _closure1_slot7;
                var1 = delete var1[var2];
            case 33:
                return var0;
        }
    };
    var1.CALL_CREATE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/DimensionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 628, 566, 806, 2]);