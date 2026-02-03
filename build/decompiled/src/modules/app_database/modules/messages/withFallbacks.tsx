// modules/app_database/modules/messages/withFallbacks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun40184: for (var _fun40184_ip = 0;;) switch (_fun40184_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40184_ip = 46;
                    continue _fun40184
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40184_ip = 55;
                    continue _fun40184
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40184_ip = 343;
                    continue _fun40184
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40184_ip = 323;
                    continue _fun40184
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40184_ip = 283;
                    continue _fun40184
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40184_ip = 270;
                    continue _fun40184
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
                    _fun40184_ip = 163;
                    continue _fun40184
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40184_ip = 179;
                    continue _fun40184
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40184_ip = 249;
                    continue _fun40184
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40184_ip = 249;
                    continue _fun40184
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40184_ip = 234;
                    continue _fun40184
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40184_ip = 247;
                    continue _fun40184
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40184_ip = 265;
                continue _fun40184;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40184_ip = 283;
                continue _fun40184;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40184_ip = 323;
                    continue _fun40184
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
                    _fun40184_ip = 330;
                    continue _fun40184
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40185: for (var _fun40185_ip = 0;;) switch (_fun40185_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40185_ip = 56;
                                continue _fun40185
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
                            _fun40185_ip = 67;
                            continue _fun40185;
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
        _fun40186: for (var _fun40186_ip = 0;;) switch (_fun40186_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40186_ip = 23;
                    continue _fun40186
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40186_ip = 33;
                    continue _fun40186
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
                    _fun40186_ip = 70;
                    continue _fun40186
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40186_ip = 55;
                    continue _fun40186
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun40187: for (var _fun40187_ip = 0;;) switch (_fun40187_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot5;
                var0 = var0.DM;
                var0 = var3 === var0;
                if (var0) {
                    _fun40187_ip = 47;
                    continue _fun40187
                }
            case 28:
                var4 = var2.type;
                var3 = _closure1_slot5;
                var3 = var3.GROUP_DM;
                var0 = var4 === var3;
            case 47:
                if (var0) {
                    _fun40187_ip = 69;
                    continue _fun40187
                }
            case 50:
                var2 = var2.type;
                var1 = _closure1_slot5;
                var1 = var1.GUILD_TEXT;
                var0 = var2 === var1;
            case 69:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun40188: for (var _fun40188_ip = 0;;) switch (_fun40188_ip) {
            case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = var3.hasExtended;
                var0 = var4.id;
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun40188_ip = 79;
                    continue _fun40188
                }
            case 27:
                var2 = var3.put;
                var1 = var4.id;
                var0 = {};
                var5 = arg0;
                var0.guildId = var5;
                var5 = var4.id;
                var0.channelId = var5;
                var4 = var4.type;
                var0.channelType = var4;
                var4 = true;
                var0.fallback = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun40189: for (var _fun40189_ip = 0;;) switch (_fun40189_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = _closure1_slot6;
                var1 = var3.allEntries;
                var1 = var1.bind(var3)();
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun40189_ip = 102;
                    continue _fun40189
                }
            case 52:
                var9 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var7)(var9, var5);
                var10 = var1[var4];
                var9 = var1[var3];
                var1 = var0.put;
                var1 = var1.bind(var0)(var10, var9);
                var9 = var6.bind(var7)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun40189_ip = 52;
                    continue _fun40189
                }
            case 102:
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/messages/withFallbacks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun40190: for (var _fun40190_ip = 0;;) switch (_fun40190_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var1 = var0.totalLength;
                if (!(!(var1 >= var5))) {
                    _fun40190_ip = 441;
                    continue _fun40190
                }
            case 19:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var7 = var1.ExtendedMemoryLru;
                var28 = var0.primaryCapacity;
                var27 = var0.extendedCapacity;
                var4 = var7.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var7
                    }
                });
                var29 = var4;
                var1 = new var29[var7](var28, var27, var26);
                var1 = var1 instanceof Object ? var1 : var4;
                var4 = var0.totalLength;
                var15 = var5 - var4;
                var5 = _closure1_slot6;
                var6 = _closure1_slot4;
                var4 = var6.getGuildFolders;
                var4 = var4.bind(var6)();
                var14 = var5.bind(var3)(var4);
                var5 = var14.bind(var3)();
                var4 = var5.done;
                var13 = global;
                var12 = 0;
                var11 = 6;
                var10 = 5;
                var9 = var5;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun40190_ip = 429;
                    continue _fun40190
                }
            case 151:
                var16 = _closure1_slot6;
                var4 = var9.value;
                var4 = var4.guildIds;
                var18 = var16.bind(var3)(var4);
                var16 = var18.bind(var3)();
                var4 = var16.done;
                var17 = var16;
                var16 = var5;
                var5 = var16;
                if (var4) {
                    _fun40190_ip = 411;
                    continue _fun40190
                }
            case 195:
                var22 = var17.value;
                var20 = var13.Object;
                var19 = var20.values;
                var21 = _closure1_slot3;
                var4 = var21.getMutableBasicGuildChannelsForGuild;
                var4 = var4.bind(var21)(var22);
                var20 = var19.bind(var20)(var4);
                var4 = var20.length;
                var4 = var12 < var4;
                var19 = 0;
                var21 = 0;
                if (!var4) {
                    _fun40190_ip = 367;
                    continue _fun40190
                }
            case 247:
                var24 = var20[var19];
                var4 = _closure1_slot8;
                var4 = var4.bind(var3)(var24);
                if (!var4) {
                    _fun40190_ip = 291;
                    continue _fun40190
                }
            case 263:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var10];
                var25 = var25.bind(var3)(var23);
                var23 = var25.isReadableChannel;
                var4 = var23.bind(var25)(var24);
            case 291:
                if (!var4) {
                    _fun40190_ip = 325;
                    continue _fun40190
                }
            case 294:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var11];
                var25 = var25.bind(var3)(var23);
                var23 = var25.isLimitedChannel;
                var23 = var23.bind(var25)(var24);
                var4 = !var23;
            case 325:
                if (!var4) {
                    _fun40190_ip = 339;
                    continue _fun40190
                }
            case 328:
                var4 = _closure1_slot9;
                var4 = var4.bind(var3)(var22, var24, var1);
            case 339:
                var4 = var1.totalLength;
                if (!(!(var4 >= var15))) {
                    _fun40190_ip = 399;
                    continue _fun40190
                }
            case 349:
                var19 = var19 + 1;
                var4 = var20.length;
                var16 = var24;
                var21 = var19;
                if (var21 < var4) {
                    _fun40190_ip = 247;
                    continue _fun40190
                }
            case 367:
                var23 = var18.bind(var3)();
                var4 = var23.done;
                var7 = var21;
                var17 = var23;
                var8 = var22;
                var6 = var20;
                var5 = var16;
                if (var4) {
                    _fun40190_ip = 411;
                    continue _fun40190
                }
            case 394:
                _fun40190_ip = 195;
                continue _fun40190;
            case 399:
                var4 = _closure1_slot10;
                var4 = var4.bind(var3)(var1, var0);
                return var1;
            case 411:
                var16 = var14.bind(var3)();
                var4 = var16.done;
                var9 = var16;
                if (!var4) {
                    _fun40190_ip = 151;
                    continue _fun40190
                }
            case 429:
                var2 = _closure1_slot10;
                var2 = var2.bind(var3)(var1, var0);
                return var1;
            case 441:
                return var0;
        }
    };
    var2.withFallbacks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1372, 4372, 660, 4365, 4369, 4370, 2]);