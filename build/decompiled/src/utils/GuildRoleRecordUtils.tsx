// utils/GuildRoleRecordUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun19081: for (var _fun19081_ip = 0;;) switch (_fun19081_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun19081_ip = 46;
                    continue _fun19081
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun19081_ip = 55;
                    continue _fun19081
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun19081_ip = 343;
                    continue _fun19081
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun19081_ip = 323;
                    continue _fun19081
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun19081_ip = 283;
                    continue _fun19081
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun19081_ip = 270;
                    continue _fun19081
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
                    _fun19081_ip = 163;
                    continue _fun19081
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun19081_ip = 179;
                    continue _fun19081
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun19081_ip = 249;
                    continue _fun19081
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun19081_ip = 249;
                    continue _fun19081
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun19081_ip = 234;
                    continue _fun19081
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun19081_ip = 247;
                    continue _fun19081
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun19081_ip = 265;
                continue _fun19081;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun19081_ip = 283;
                continue _fun19081;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun19081_ip = 323;
                    continue _fun19081
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
                    _fun19081_ip = 330;
                    continue _fun19081
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun19082: for (var _fun19082_ip = 0;;) switch (_fun19082_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun19082_ip = 56;
                                continue _fun19082
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
                            _fun19082_ip = 67;
                            continue _fun19082;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun19083: for (var _fun19083_ip = 0;;) switch (_fun19083_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun19083_ip = 23;
                    continue _fun19083
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun19083_ip = 33;
                    continue _fun19083
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
                    _fun19083_ip = 70;
                    continue _fun19083
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun19083_ip = 55;
                    continue _fun19083
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var5 = function arg0, arg1() {
        _fun19084: for (var _fun19084_ip = 0;;) switch (_fun19084_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot9;
                var1 = {};
                var0 = var3.id;
                var1.id = var0;
                var0 = var3.name;
                var1.name = var0;
                var0 = arg0;
                var1.guildId = var0;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.deserialize;
                var4 = var3.permissions;
                var4 = var5.bind(var6)(var4);
                var1.permissions = var4;
                var4 = var3.mentionable;
                var1.mentionable = var4;
                var4 = var3.position;
                var1.position = var4;
                var4 = var3.color;
                var1.color = var4;
                var8 = var3.color;
                var4 = null;
                var5 = 0;
                var6 = null;
                if (!(var5 !== var8)) {
                    _fun19084_ip = 161;
                    continue _fun19084
                }
            case 125:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 3;
                var8 = var10[var8];
                var10 = var9.bind(var0)(var8);
                var9 = var10.int2hex;
                var8 = var3.color;
                var6 = var9.bind(var10)(var8);
            case 161:
                var1.colorString = var6;
                var8 = var3.colors;
                var9 = var4 != var8;
                var6 = null;
                if (!var9) {
                    _fun19084_ip = 183;
                    continue _fun19084
                }
            case 180:
                var6 = var8;
            case 183:
                var1.colors = var6;
                var6 = var3.colors;
                var8 = var4 != var6;
                var6 = null;
                if (!var8) {
                    _fun19084_ip = 237;
                    continue _fun19084
                }
            case 201:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 4;
                var7 = var9[var7];
                var9 = var8.bind(var0)(var7);
                var8 = var9.extractColorStringsFromServerColors;
                var7 = var3.colors;
                var6 = var8.bind(var9)(var7);
            case 237:
                var1.colorStrings = var6;
                var6 = var3.hoist;
                var1.hoist = var6;
                var7 = var3.managed;
                var6 = var4 != var7;
                if (!var6) {
                    _fun19084_ip = 269;
                    continue _fun19084
                }
            case 266:
                var6 = var7;
            case 269:
                var1.managed = var6;
                var6 = var3.tags;
                if (!(var4 == var6)) {
                    _fun19084_ip = 286;
                    continue _fun19084
                }
            case 284:
                var6 = {};
            case 286:
                var1.tags = var6;
                var6 = var3.icon;
                var1.icon = var6;
                var6 = var3.unicode_emoji;
                var1.unicodeEmoji = var6;
                var6 = var3.flags;
                var7 = var4 != var6;
                var5 = 0;
                if (!var7) {
                    _fun19084_ip = 328;
                    continue _fun19084
                }
            case 325:
                var5 = var6;
            case 328:
                var1.flags = var5;
                var5 = var3.description;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun19084_ip = 349;
                    continue _fun19084
                }
            case 346:
                var4 = var5;
            case 349:
                var1.description = var4;
                var3 = var3.version;
                var1.version = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function arg0() {
        var3 = _closure1_slot3;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var _closure1_slot9 = var4;
    var3 = function arg0, arg1() {
        _fun19086: for (var _fun19086_ip = 0;;) switch (_fun19086_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot9;
                var1 = {};
                var0 = var3.id;
                var1.id = var0;
                var0 = var3.name;
                var1.name = var0;
                var0 = arg0;
                var1.guildId = var0;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var4 = var4[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var5 = var7.deserialize;
                var4 = var3.permissions;
                var4 = var5.bind(var7)(var4);
                var1.permissions = var4;
                var4 = var3.mentionable;
                var1.mentionable = var4;
                var4 = var3.position;
                var1.position = var4;
                var4 = var3.color;
                var1.color = var4;
                var5 = var3.color;
                var4 = null;
                var7 = var4 != var5;
                var5 = null;
                if (!var7) {
                    _fun19086_ip = 175;
                    continue _fun19086
                }
            case 126:
                var8 = var3.color;
                var7 = 0;
                var5 = null;
                if (!(var7 !== var8)) {
                    _fun19086_ip = 175;
                    continue _fun19086
                }
            case 139:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 3;
                var7 = var9[var7];
                var9 = var8.bind(var0)(var7);
                var8 = var9.int2hex;
                var7 = var3.color;
                var5 = var8.bind(var9)(var7);
            case 175:
                var1.colorString = var5;
                var7 = var3.colors;
                var8 = var4 != var7;
                var5 = null;
                if (!var8) {
                    _fun19086_ip = 197;
                    continue _fun19086
                }
            case 194:
                var5 = var7;
            case 197:
                var1.colors = var5;
                var5 = var3.colors;
                var7 = var4 != var5;
                var5 = null;
                if (!var7) {
                    _fun19086_ip = 251;
                    continue _fun19086
                }
            case 215:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 4;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.extractColorStringsFromServerColors;
                var6 = var3.colors;
                var5 = var7.bind(var8)(var6);
            case 251:
                var1.colorStrings = var5;
                var5 = var3.hoist;
                var1.hoist = var5;
                var6 = var3.managed;
                var5 = var4 != var6;
                if (!var5) {
                    _fun19086_ip = 283;
                    continue _fun19086
                }
            case 280:
                var5 = var6;
            case 283:
                var1.managed = var5;
                var5 = var3.tags;
                if (!(var4 == var5)) {
                    _fun19086_ip = 300;
                    continue _fun19086
                }
            case 298:
                var5 = {};
            case 300:
                var1.tags = var5;
                var5 = var3.icon;
                var1.icon = var5;
                var5 = var3.unicodeEmoji;
                var1.unicodeEmoji = var5;
                var6 = var3.flags;
                var7 = var4 != var6;
                var5 = 0;
                if (!var7) {
                    _fun19086_ip = 342;
                    continue _fun19086
                }
            case 339:
                var5 = var6;
            case 342:
                var1.flags = var5;
                var5 = var3.description;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun19086_ip = 363;
                    continue _fun19086
                }
            case 360:
                var4 = var5;
            case 363:
                var1.description = var4;
                var3 = var3.version;
                var1.version = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var9 = var6.constructInPlace;
    var _closure1_slot3 = var9;
    var6 = var6.objectIsPlainRecordOfType;
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.GuildRoleRecordTypeTag;
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/GuildRoleRecordUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0() {
        var3 = _closure1_slot4;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.isGuildRoleRecord = var6;
    var6 = function arg0, arg1() {
        _fun19088: for (var _fun19088_ip = 0;;) switch (_fun19088_ip) {
            case 0:
                var6 = arg0;
                var0 = {};
                var2 = _closure1_slot6;
                var4 = undefined;
                var1 = arg1;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun19088_ip = 73;
                    continue _fun19088
                }
            case 34:
                var8 = var2.value;
                var7 = var8.id;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)(var6, var8);
                var0[var7] = var1;
                var7 = var3.bind(var4)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun19088_ip = 34;
                    continue _fun19088
                }
            case 73:
                return var0;
        }
    };
    var2.fromServerArray = var6;
    var2.fromServer = var5;
    var2.constructGuildRoleInPlace = var4;
    var2.fromSerialized = var3;
    var3 = function arg0, arg1() {
        _fun19089: for (var _fun19089_ip = 0;;) switch (_fun19089_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var0 = {};
                var6 = var8;
                var1 = undefined;
                for (var3 in var6)
                    case 24: {
                        case 33: var11 = var3;
                        var12 = _closure1_slot10;
                        var10 = var8[var11];
                        var10 = var12.bind(var1)(var9, var10);
                        var0[var11] = var10;
                        _fun19089_ip = 24;
                        continue _fun19089;
                    }
            case 56:
                return var0;
        }
    };
    var2.fromSerializedPartition = var3;
    var1 = function arg0() {
        _fun19090: for (var _fun19090_ip = 0;;) switch (_fun19090_ip) {
            case 0:
                var7 = arg0;
                var0 = {};
                var5 = var7;
                var1 = 'permissions';
                for (var2 in var5)
                    case 20: {
                        case 29: var9 = var2;
                        var10 = var7[var9];
                        var8 = {};
                        var13 = var8;
                        var12 = var10;
                        var11 = copyDataProperties(var13, var12);
                        var11 = var10.permissions;
                        var10 = var11.toString;
                        var10 = var10.bind(var11)();
                        var8[var1] = var10;
                        var0[var9] = var8;
                        _fun19090_ip = 20;
                        continue _fun19090;
                    }
            case 74:
                return var0;
        }
    };
    var2.toSerializedPartition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1411, 1675, 484, 668, 1677, 2]);