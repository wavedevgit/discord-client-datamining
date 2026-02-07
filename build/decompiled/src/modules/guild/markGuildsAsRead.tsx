// modules/guild/markGuildsAsRead.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun97060: for (var _fun97060_ip = 0;;) switch (_fun97060_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun97060_ip = 46;
                    continue _fun97060
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun97060_ip = 55;
                    continue _fun97060
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun97060_ip = 345;
                    continue _fun97060
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun97060_ip = 323;
                    continue _fun97060
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun97060_ip = 283;
                    continue _fun97060
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun97060_ip = 270;
                    continue _fun97060
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
                    _fun97060_ip = 163;
                    continue _fun97060
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun97060_ip = 179;
                    continue _fun97060
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun97060_ip = 249;
                    continue _fun97060
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun97060_ip = 249;
                    continue _fun97060
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun97060_ip = 234;
                    continue _fun97060
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun97060_ip = 247;
                    continue _fun97060
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun97060_ip = 265;
                continue _fun97060;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun97060_ip = 283;
                continue _fun97060;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun97060_ip = 323;
                    continue _fun97060
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
                    _fun97060_ip = 330;
                    continue _fun97060
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun97061: for (var _fun97061_ip = 0;;) switch (_fun97061_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun97061_ip = 56;
                                continue _fun97061
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
                            _fun97061_ip = 67;
                            continue _fun97061;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun97062: for (var _fun97062_ip = 0;;) switch (_fun97062_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun97062_ip = 23;
                    continue _fun97062
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun97062_ip = 33;
                    continue _fun97062
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
                    _fun97062_ip = 70;
                    continue _fun97062
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun97062_ip = 55;
                    continue _fun97062
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/markGuildsAsRead.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var7 = arg0;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var3 = var4[var2];
        var2 = undefined;
        var8 = var5.bind(var2)(var3);
        var6 = var8.flatMap;
        var3 = function(arg0) { // Environment: var1
            _fun97064: for (var _fun97064_ip = 0;;) switch (_fun97064_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot5;
                    var0 = var3.getSelectableChannelIds;
                    var2 = var0.bind(var3)(var5);
                    var0 = var3.getVocalChannelIds;
                    var4 = var0.bind(var3)(var5);
                    var0 = new Array(0);
                    var13 = 0;
                    var15 = var0;
                    var14 = var2;
                    var13 = arraySpread(var15, var14, var13);
                    var15 = var0;
                    var14 = var4;
                    var3 = arraySpread(var15, var14, var13);
                    var4 = _closure1_slot4;
                    var3 = var4.getActiveJoinedThreadsForGuild;
                    var6 = var3.bind(var4)(var5);
                    var1 = _closure1_slot9;
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = null;
                    if (var1) {
                        _fun97064_ip = 163;
                        continue _fun97064
                    }
                case 98:
                    var1 = var2.value;
                    var1 = var6[var1];
                    if (!(var3 == var1)) {
                        _fun97064_ip = 113;
                        continue _fun97064
                    }
                case 111:
                    var1 = {};
                case 113:
                    var9 = var1;
                    for (var1 in var9)
                        case 124: {
                            case 133: var12 = var1;
                            var11 = var0.push;
                            var11 = var11.bind(var0)(var12);
                            _fun97064_ip = 124;
                            continue _fun97064;
                        }
                case 148:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun97064_ip = 98;
                        continue _fun97064
                    }
                case 163:
                    return var0;
            }
        };
        var8 = var6.bind(var8)(var7, var3);
        var6 = var8.map;
        var3 = function(arg0) { // Environment: var1
            var3 = arg0;
            var0 = {};
            var0.channelId = var3;
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL;
            var0.readStateType = var2;
            var2 = _closure1_slot6;
            var1 = var2.lastMessageId;
            var1 = var1.bind(var2)(var3);
            var0.messageId = var1;
            return var0;
        };
        var3 = var6.bind(var8)(var3);
        var _closure2_slot0 = var3;
        var6 = var7.forEach;
        var1 = function(arg0) { // Environment: var1
            var6 = arg0;
            var3 = _closure2_slot0;
            var2 = var3.push;
            var1 = {};
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 7;
            var5 = var9[var7];
            var0 = undefined;
            var10 = var8.bind(var0)(var5);
            var5 = var10.cast;
            var5 = var5.bind(var10)(var6);
            var1.channelId = var5;
            var5 = _closure1_slot8;
            var10 = var5.GUILD_EVENT;
            var1.readStateType = var10;
            var12 = _closure1_slot6;
            var11 = var12.lastMessageId;
            var10 = var5.GUILD_EVENT;
            var10 = var11.bind(var12)(var6, var10);
            var1.messageId = var10;
            var1 = var2.bind(var3)(var1);
            var2 = var3.push;
            var1 = {};
            var7 = var9[var7];
            var8 = var8.bind(var0)(var7);
            var7 = var8.cast;
            var7 = var7.bind(var8)(var6);
            var1.channelId = var7;
            var5 = var5.GUILD_ONBOARDING_QUESTION;
            var1.readStateType = var5;
            var5 = _closure1_slot3;
            var4 = var5.ackIdForGuild;
            var4 = var4.bind(var5)(var6);
            var1.messageId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var6.bind(var7)(var1);
        var1 = 8;
        var1 = var4[var1];
        var7 = var5.bind(var2)(var1);
        var6 = var7.track;
        var1 = _closure1_slot7;
        var5 = var1.MARK_AS_READ;
        var1 = {};
        var8 = arg1;
        var1.source = var8;
        var8 = 'guild';
        var1.type = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = _closure1_slot0;
        var0 = 9;
        var0 = var4[var0];
        var2 = var1.bind(var2)(var0);
        var1 = var2.bulkAck;
        var0 = arg2;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4688, 4550, 1673, 3948, 660, 4304, 22, 21, 795, 4574, 2]);