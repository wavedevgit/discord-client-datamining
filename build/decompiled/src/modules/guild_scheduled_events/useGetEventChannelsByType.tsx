// modules/guild_scheduled_events/useGetEventChannelsByType.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun65429: for (var _fun65429_ip = 0;;) switch (_fun65429_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun65429_ip = 46;
                    continue _fun65429
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun65429_ip = 55;
                    continue _fun65429
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun65429_ip = 343;
                    continue _fun65429
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun65429_ip = 323;
                    continue _fun65429
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun65429_ip = 283;
                    continue _fun65429
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun65429_ip = 270;
                    continue _fun65429
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun65429_ip = 163;
                    continue _fun65429
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun65429_ip = 179;
                    continue _fun65429
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun65429_ip = 249;
                    continue _fun65429
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun65429_ip = 249;
                    continue _fun65429
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun65429_ip = 234;
                    continue _fun65429
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun65429_ip = 247;
                    continue _fun65429
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun65429_ip = 265;
                continue _fun65429;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun65429_ip = 283;
                continue _fun65429;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun65429_ip = 323;
                    continue _fun65429
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun65429_ip = 330;
                    continue _fun65429
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun65430: for (var _fun65430_ip = 0;;) switch (_fun65430_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun65430_ip = 56;
                                continue _fun65430
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun65430_ip = 67;
                            continue _fun65430;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun65431: for (var _fun65431_ip = 0;;) switch (_fun65431_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun65431_ip = 23;
                    continue _fun65431
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun65431_ip = 33;
                    continue _fun65431
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun65431_ip = 70;
                    continue _fun65431
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun65431_ip = 55;
                    continue _fun65431
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function arg0, arg1() {
        _fun65432: for (var _fun65432_ip = 0;;) switch (_fun65432_ip) {
            case 0:
                var7 = arg1;
                var2 = arguments[2];
                var6 = undefined;
                if (!(var2 === var6)) {
                    _fun65432_ip = 30;
                    continue _fun65432
                }
            case 12:
                var1 = _closure1_slot3;
                var0 = new Array(1);
                var0[0] = var1;
                var2 = var0;
            case 30:
                var1 = var2;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var2 = var1().value;
                var1 = var0;
                var1 = var1 === var6;
                var4 = undefined;
                if (var1) {
                    _fun65432_ip = 55;
                    continue _fun65432
                }
            case 52:
                var4 = var2;
            case 55:
                if (var1) {
                    _fun65432_ip = 61;
                    continue _fun65432
                }
            case 58:
                var0.return();
            case 61:
                var0 = null;
                if (!(var0 != var7)) {
                    _fun65432_ip = 259;
                    continue _fun65432
                }
            case 70:
                var0 = new Array(0);
                var2 = _closure1_slot8;
                var3 = var4.getChannels;
                var1 = arg0;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot4;
                var1 = var3[var1];
                var4 = var2.bind(var6)(var1);
                var2 = var4.bind(var6)();
                var1 = var2.done;
                var3 = 5;
                if (var1) {
                    _fun65432_ip = 257;
                    continue _fun65432
                }
            case 126:
                var1 = var2.value;
                var8 = var1.channel;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var9 = var9.bind(var6)(var1);
                var1 = var9.getManageResourcePermissions;
                var1 = var1.bind(var9)(var8);
                var10 = var1.canCreateGuildEvent;
                var1 = var1.canManageAllEvents;
                if (var10) {
                    _fun65432_ip = 182;
                    continue _fun65432
                }
            case 179:
                var10 = var1;
            case 182:
                var1 = var8.type;
                if (!(var1 === var7)) {
                    _fun65432_ip = 242;
                    continue _fun65432
                }
            case 191:
                var1 = var8.isGuildVoice;
                var1 = var1.bind(var8)();
                if (!var1) {
                    _fun65432_ip = 207;
                    continue _fun65432
                }
            case 204:
                var1 = var10;
            case 207:
                if (var1) {
                    _fun65432_ip = 229;
                    continue _fun65432
                }
            case 210:
                var9 = var8.isGuildStageVoice;
                var9 = var9.bind(var8)();
                if (!var9) {
                    _fun65432_ip = 226;
                    continue _fun65432
                }
            case 223:
                var9 = var10;
            case 226:
                var1 = var9;
            case 229:
                if (!var1) {
                    _fun65432_ip = 242;
                    continue _fun65432
                }
            case 232:
                var1 = var0.push;
                var1 = var1.bind(var0)(var8);
            case 242:
                var8 = var4.bind(var6)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun65432_ip = 126;
                    continue _fun65432
                }
            case 257:
                return var0;
            case 259:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot6 = var7;
    var4 = var4.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useGetEventChannelsByType.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun65433: for (var _fun65433_ip = 0;;) switch (_fun65433_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var1 = var7[var4];
                var5 = undefined;
                var11 = var6.bind(var5)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var1;
                var8 = new Array(1);
                var8[0] = var3;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var1 = _closure1_slot7;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var10.bind(var11)(var9, var1, var8);
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var0);
                var0 = var3.isGuildStageVoice;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun65433_ip = 124;
                    continue _fun65433
                }
            case 121:
                var0 = var1;
            case 124:
                if (!var0) {
                    _fun65433_ip = 133;
                    continue _fun65433
                }
            case 127:
                var1 = null;
                var0 = var1 == var2;
            case 133:
                return var0;
        }
    };
    var2.useCanCreateEventInStageChannel = var4;
    var4 = function arg0() {
        _fun65436: for (var _fun65436_ip = 0;;) switch (_fun65436_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var1 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var0, var1);
                var0 = var2.isGuildVoice;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun65436_ip = 87;
                    continue _fun65436
                }
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.useCanCreateEventInVoiceChannel = var4;
    var2.getEventChannelsByType = var3;
    var1 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = _closure1_slot3;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGetEventChannelsByType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1377, 1662, 3052, 8054, 566, 8053, 2]);