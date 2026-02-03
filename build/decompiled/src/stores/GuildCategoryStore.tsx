// stores/GuildCategoryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun41611: for (var _fun41611_ip = 0;;) switch (_fun41611_ip) {
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
                _fun41611_ip = 74;
                continue _fun41611;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun41614: for (var _fun41614_ip = 0;;) switch (_fun41614_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41614_ip = 46;
                    continue _fun41614
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41614_ip = 55;
                    continue _fun41614
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41614_ip = 343;
                    continue _fun41614
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41614_ip = 323;
                    continue _fun41614
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41614_ip = 283;
                    continue _fun41614
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41614_ip = 270;
                    continue _fun41614
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
                    _fun41614_ip = 163;
                    continue _fun41614
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41614_ip = 179;
                    continue _fun41614
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41614_ip = 249;
                    continue _fun41614
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41614_ip = 249;
                    continue _fun41614
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41614_ip = 234;
                    continue _fun41614
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41614_ip = 247;
                    continue _fun41614
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41614_ip = 265;
                continue _fun41614;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41614_ip = 283;
                continue _fun41614;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41614_ip = 323;
                    continue _fun41614
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
                    _fun41614_ip = 330;
                    continue _fun41614
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41615: for (var _fun41615_ip = 0;;) switch (_fun41615_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41615_ip = 56;
                                continue _fun41615
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
                            _fun41615_ip = 67;
                            continue _fun41615;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun41616: for (var _fun41616_ip = 0;;) switch (_fun41616_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41616_ip = 23;
                    continue _fun41616
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41616_ip = 33;
                    continue _fun41616
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
                    _fun41616_ip = 70;
                    continue _fun41616
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41616_ip = 55;
                    continue _fun41616
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        var1 = arg1;
        var0 = arg0;
        var0.index = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var4 = _closure1_slot12;
        var0 = var4.getChannels;
        var4 = var0.bind(var4)(var2);
        var0 = {};
        var5 = new Array(0);
        var0._categories = var5;
        var5 = new Array(0);
        var0.null = var5;
        var _closure2_slot0 = var0;
        var5 = function arg0() {
            _fun41619: for (var _fun41619_ip = 0;;) switch (_fun41619_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.channel;
                    var4 = _closure2_slot0;
                    var2 = var3.parent_id;
                    var1 = null;
                    var5 = var1 != var2;
                    var2 = 'null';
                    if (!var5) {
                        _fun41619_ip = 40;
                        continue _fun41619
                    }
                case 34:
                    var2 = var3.parent_id;
                case 40:
                    var2 = var4[var2];
                    if (!(var1 == var2)) {
                        _fun41619_ip = 58;
                        continue _fun41619
                    }
                case 48:
                    var0 = _closure2_slot0;
                    var2 = var0.null;
                case 58:
                    var1 = var2.push;
                    var0 = {};
                    var0.channel = var3;
                    var3 = -1;
                    var0.index = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = _closure1_slot14;
        var6 = var6.GUILD_CATEGORY;
        var7 = var4[var6];
        var6 = var7.forEach;
        var3 = function(arg0) { // Environment: var3
            var0 = arg0;
            var0 = var0.channel;
            var2 = _closure2_slot0;
            var4 = var2._categories;
            var3 = var4.push;
            var1 = {};
            var1.channel = var0;
            var5 = -1;
            var1.index = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var0.id;
            var0 = new Array(0);
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot10;
        var6 = var4[var3];
        var3 = var6.forEach;
        var3 = var3.bind(var6)(var5);
        var3 = _closure1_slot11;
        var4 = var4[var3];
        var3 = var4.forEach;
        var3 = var3.bind(var4)(var5);
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 11;
        var3 = var5[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = var0._categories;
        var5 = var4.bind(var5)(var3, var0);
        var4 = var5.forEach;
        var3 = _closure1_slot23;
        var3 = var4.bind(var5)(var3);
        var1 = _closure1_slot17;
        var1[var2] = var0;
        return var0;
    };
    var _closure1_slot24 = var0;
    var11 = function() {
        _fun41621: for (var _fun41621_ip = 0;;) switch (_fun41621_ip) {
            case 0:
                var1 = {};
                _closure1_slot17 = var1;
                var2 = _closure1_slot16;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun41621_ip = 34;
                    continue _fun41621
                }
            case 19:
                var2 = _closure1_slot24;
                var1 = _closure1_slot16;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 34:
                var0 = undefined;
                return var0;
        }
    };
    var10 = function arg0() {
        _fun41622: for (var _fun41622_ip = 0;;) switch (_fun41622_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var2 = var0.id;
                var3 = _closure1_slot17;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot16;
                if (!(var3 === var2)) {
                    _fun41622_ip = 43;
                    continue _fun41622
                }
            case 34:
                var1 = _closure1_slot24;
                var1 = var1.bind(var0)(var2);
            case 43:
                return var0;
        }
    };
    var9 = function arg0() {
        _fun41623: for (var _fun41623_ip = 0;;) switch (_fun41623_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.guild_id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun41623_ip = 51;
                    continue _fun41623
                }
            case 19:
                var3 = _closure1_slot17;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot16;
                if (!(var3 === var2)) {
                    _fun41623_ip = 49;
                    continue _fun41623
                }
            case 40:
                var1 = _closure1_slot24;
                var1 = var1.bind(var0)(var2);
            case 49:
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var8 = function arg0() {
        _fun41624: for (var _fun41624_ip = 0;;) switch (_fun41624_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var3 = _closure1_slot17;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot16;
                if (!(var2 === var3)) {
                    _fun41624_ip = 38;
                    continue _fun41624
                }
            case 29:
                var1 = _closure1_slot24;
                var1 = var1.bind(var0)(var2);
            case 38:
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun41625: for (var _fun41625_ip = 0;;) switch (_fun41625_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                _closure1_slot18 = var0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun41625_ip = 83;
                    continue _fun41625
                }
            case 19:
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                if (!(var0 != var1)) {
                    _fun41625_ip = 83;
                    continue _fun41625
                }
            case 33:
                var1 = var3.getGuildId;
                var4 = var1.bind(var3)();
                var0 = var0 != var4;
                if (!var0) {
                    _fun41625_ip = 81;
                    continue _fun41625
                }
            case 50:
                var1 = _closure1_slot17;
                var3 = undefined;
                var1[var4] = var3;
                var5 = _closure1_slot16;
                var0 = true;
                if (!(var4 === var5)) {
                    _fun41625_ip = 81;
                    continue _fun41625
                }
            case 70:
                var2 = _closure1_slot24;
                var2 = var2.bind(var3)(var4);
                var0 = true;
            case 81:
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var2 = _closure1_slot24;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var12 = var0.Object;
    var7 = var12.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var12)(var2, var0, var1);
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
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var7 = var5[var1];
    var7 = var4.bind(var0)(var7);
    var12 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot10 = var12;
    var7 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot11 = var7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ChannelTypes;
    var _closure1_slot14 = var7;
    var1 = var1.FAVORITES;
    var _closure1_slot15 = var1;
    var1 = null;
    var _closure1_slot16 = var1;
    var7 = {};
    var _closure1_slot17 = var7;
    var _closure1_slot18 = var1;
    var1 = {};
    var7 = new Array(0);
    var1._categories = var7;
    var7 = new Array(0);
    var1.null = var7;
    var _closure1_slot19 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun41628: for (var _fun41628_ip = 0;;) switch (_fun41628_ip) {
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
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41628_ip = 69;
                        continue _fun41628
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41628_ip = 105;
                    continue _fun41628;
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
        var0 = function() {
            var3 = this;
            var7 = var3.waitFor;
            var12 = _closure1_slot12;
            var11 = _closure1_slot13;
            var10 = _closure1_slot8;
            var9 = _closure1_slot9;
            var4 = _closure1_slot7;
            var13 = var3;
            var8 = var4;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot26;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCategories';
        var4.key = var6;
        var5 = function arg0() {
            _fun41630: for (var _fun41630_ip = 0;;) switch (_fun41630_ip) {
                case 0:
                    var4 = arg0;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun41630_ip = 18;
                        continue _fun41630
                    }
                case 9:
                    var0 = _closure1_slot19;
                    _fun41630_ip = 47;
                    continue _fun41630;
                case 18:
                    var1 = _closure1_slot17;
                    var1 = var1[var4];
                    if (!(var3 == var1)) {
                        _fun41630_ip = 44;
                        continue _fun41630
                    }
                case 33:
                    var3 = _closure1_slot24;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
                case 44:
                    var0 = var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildCategoryStore';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var12 = function arg0() {
        _fun41631: for (var _fun41631_ip = 0;;) switch (_fun41631_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = null;
                var1 = var3 != var4;
                var0 = null;
                if (!var1) {
                    _fun41631_ip = 22;
                    continue _fun41631
                }
            case 19:
                var0 = var4;
            case 22:
                _closure1_slot16 = var0;
                var0 = var3 != var4;
                if (!var0) {
                    _fun41631_ip = 67;
                    continue _fun41631
                }
            case 36:
                var1 = _closure1_slot17;
                var1 = var1[var4];
                var1 = var3 == var1;
                if (!var1) {
                    _fun41631_ip = 64;
                    continue _fun41631
                }
            case 51:
                var3 = _closure1_slot24;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = undefined;
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var12;
    var1.CONNECTION_OPEN = var11;
    var1.OVERLAY_INITIALIZE = var11;
    var1.CACHE_LOADED_LAZY = var11;
    var1.GUILD_CREATE = var10;
    var1.GUILD_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = var0.id;
        var0 = _closure1_slot17;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var10;
    var1.CHANNEL_CREATE = var9;
    var1.CHANNEL_DELETE = var9;
    var9 = function arg0() {
        _fun41633: for (var _fun41633_ip = 0;;) switch (_fun41633_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot21;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var4 = null;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun41633_ip = 105;
                    continue _fun41633
                }
            case 44:
                var1 = var3.value;
                var9 = var1.guild_id;
                if (!(var4 != var9)) {
                    _fun41633_ip = 87;
                    continue _fun41633
                }
            case 58:
                var1 = _closure1_slot17;
                var1[var9] = var7;
                var1 = _closure1_slot16;
                var2 = true;
                if (!(var1 === var9)) {
                    _fun41633_ip = 87;
                    continue _fun41633
                }
            case 76:
                var1 = _closure1_slot24;
                var1 = var1.bind(var7)(var9);
                var2 = true;
            case 87:
                var10 = var6.bind(var7)();
                var1 = var10.done;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun41633_ip = 44;
                    continue _fun41633
                }
            case 105:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var9;
    var9 = function arg0() {
        _fun41634: for (var _fun41634_ip = 0;;) switch (_fun41634_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = var0.user;
                var4 = _closure1_slot8;
                var3 = var4.getId;
                var3 = var3.bind(var4)();
                var0 = var0.id;
                if (!(var3 === var0)) {
                    _fun41634_ip = 68;
                    continue _fun41634
                }
            case 39:
                var3 = _closure1_slot17;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot16;
                if (!(var2 === var3)) {
                    _fun41634_ip = 66;
                    continue _fun41634
                }
            case 57:
                var1 = _closure1_slot24;
                var1 = var1.bind(var0)(var2);
            case 66:
                return var0;
            case 68:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_MEMBER_UPDATE = var9;
    var9 = function() {
        _fun41635: for (var _fun41635_ip = 0;;) switch (_fun41635_ip) {
            case 0:
                var2 = _closure1_slot16;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun41635_ip = 30;
                    continue _fun41635
                }
            case 13:
                var2 = _closure1_slot24;
                var1 = _closure1_slot16;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 30:
                var0 = false;
                return var0;
        }
    };
    var1.CURRENT_USER_UPDATE = var9;
    var1.GUILD_ROLE_CREATE = var8;
    var1.GUILD_ROLE_UPDATE = var8;
    var1.GUILD_ROLE_DELETE = var8;
    var1.IMPERSONATE_UPDATE = var8;
    var1.IMPERSONATE_STOP = var8;
    var8 = function arg0() {
        _fun41636: for (var _fun41636_ip = 0;;) switch (_fun41636_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun41636_ip = 25;
                    continue _fun41636
                }
            case 14:
                var0 = _closure1_slot18;
                if (!(var4 == var0)) {
                    _fun41636_ip = 56;
                    continue _fun41636
                }
            case 25:
                var3 = _closure1_slot25;
                var2 = _closure1_slot9;
                var0 = var2.getChannel;
                var2 = var0.bind(var2)(var5);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var5);
                _fun41636_ip = 86;
                continue _fun41636;
            case 56:
                var3 = _closure1_slot25;
                var5 = _closure1_slot9;
                var2 = var5.getChannel;
                var1 = _closure1_slot18;
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var0 = var3.bind(var1)(var2, var4);
            case 86:
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var8;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun41638: for (var _fun41638_ip = 0;;) switch (_fun41638_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var5 = var0.channelId;
                    var4 = var0.sessionId;
                    var3 = _closure1_slot8;
                    var0 = var3.getSessionId;
                    var3 = var0.bind(var3)();
                    var0 = var2;
                    if (!(var3 === var4)) {
                        _fun41638_ip = 76;
                        continue _fun41638
                    }
                case 41:
                    var4 = _closure1_slot25;
                    var3 = _closure1_slot9;
                    var1 = var3.getChannel;
                    var3 = var1.bind(var3)(var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var5);
                    if (var1) {
                        _fun41638_ip = 73;
                        continue _fun41638
                    }
                case 70:
                    var1 = var2;
                case 73:
                    var0 = var1;
                case 76:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildCategoryStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1375, 1216, 1372, 1671, 1410, 660, 4576, 566, 806, 2]);