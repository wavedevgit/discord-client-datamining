// stores/GuildChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function() {
        _fun18924: for (var _fun18924_ip = 0;;) switch (_fun18924_ip) {
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
                _fun18924_ip = 74;
                continue _fun18924;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot38 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        _fun18927: for (var _fun18927_ip = 0;;) switch (_fun18927_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18927_ip = 46;
                    continue _fun18927
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18927_ip = 55;
                    continue _fun18927
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18927_ip = 343;
                    continue _fun18927
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18927_ip = 323;
                    continue _fun18927
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18927_ip = 283;
                    continue _fun18927
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18927_ip = 270;
                    continue _fun18927
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
                    _fun18927_ip = 163;
                    continue _fun18927
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18927_ip = 179;
                    continue _fun18927
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18927_ip = 249;
                    continue _fun18927
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18927_ip = 249;
                    continue _fun18927
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18927_ip = 234;
                    continue _fun18927
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18927_ip = 247;
                    continue _fun18927
                }
            case 234:
                var8 = _closure1_slot40;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18927_ip = 265;
                continue _fun18927;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18927_ip = 283;
                continue _fun18927;
            case 270:
                var6 = _closure1_slot40;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18927_ip = 323;
                    continue _fun18927
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
                    _fun18927_ip = 330;
                    continue _fun18927
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18928: for (var _fun18928_ip = 0;;) switch (_fun18928_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18928_ip = 56;
                                continue _fun18928
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
                            _fun18928_ip = 67;
                            continue _fun18928;
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
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1() {
        _fun18929: for (var _fun18929_ip = 0;;) switch (_fun18929_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18929_ip = 23;
                    continue _fun18929
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18929_ip = 33;
                    continue _fun18929
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
                    _fun18929_ip = 70;
                    continue _fun18929
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18929_ip = 55;
                    continue _fun18929
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var9 = function arg0() {
        var0 = {};
        var1 = arg0;
        var0.id = var1;
        var3 = _closure1_slot26;
        var2 = new Array(0);
        var0[var3] = var2;
        var3 = _closure1_slot27;
        var2 = new Array(0);
        var0[var3] = var2;
        var2 = _closure1_slot23;
        var2 = var2.GUILD_CATEGORY;
        var3 = _closure1_slot34;
        var1 = new Array(1);
        var1[0] = var3;
        var0[var2] = var1;
        var2 = 0;
        var1 = 'count';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot41 = var9;
    var0 = function arg0, arg1() {
        var0 = arg0;
        var1 = var0.comparator;
        var0 = arg1;
        var0 = var0.comparator;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function arg0() {
        _fun18932: for (var _fun18932_ip = 0;;) switch (_fun18932_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot22;
                if (!(var3 !== var0)) {
                    _fun18932_ip = 86;
                    continue _fun18932
                }
            case 14:
                var0 = {};
                var2 = _closure1_slot16;
                var1 = var2.getMutableGuildChannelsForGuild;
                var6 = var1.bind(var2)(var3);
                var4 = var6;
                for (var1 in var4)
                    case 42: {
                        case 51: var8 = var1;
                        var7 = {};
                        var10 = var6[var8];
                        var7.channel = var10;
                        var10 = var6[var8];
                        var10 = var10.position;
                        var7.comparator = var10;
                        var0[var8] = var7;
                        _fun18932_ip = 42;
                        continue _fun18932;
                    }
            case 84:
                return var0;
            case 86:
                var0 = {};
                var2 = _closure1_slot10;
                var1 = var2.getFavoriteChannels;
                var8 = var1.bind(var2)();
                var6 = var8;
                var2 = undefined;
                var1 = null;
                for (var3 in var6)
                    case 117: {
                        case 126: var11 = var3;
                        var12 = _closure1_slot16;
                        var10 = var12.getChannel;
                        var13 = var10.bind(var12)(var11);
                        if (var1 == var13) {
                            _fun18932_ip = 117;
                            continue _fun18932
                        }
                        case 147: var12 = var8[var11];
                        var10 = _closure1_slot11;
                        var12 = var10.bind(var2)(var8, var12, var13);
                        var10 = {};
                        var10.channel = var12;
                        var12 = var12.position;
                        var10.comparator = var12;
                        var0[var11] = var10;
                        _fun18932_ip = 117;
                        continue _fun18932;
                    }
            case 184:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = var0.id;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot43;
        var5 = undefined;
        var4 = var3.bind(var5)(var4);
        var3 = _closure1_slot1;
        var6 = _closure1_slot3;
        var2 = 17;
        var2 = var6[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun18934: for (var _fun18934_ip = 0;;) switch (_fun18934_ip) {
                case 0:
                    var2 = arg0;
                    var4 = var2.channel;
                    var3 = _closure2_slot0;
                    var5 = var3.count;
                    var1 = 1;
                    var1 = var5 + var1;
                    var3.count = var1;
                    var6 = _closure1_slot13;
                    var5 = var6.has;
                    var1 = var4.type;
                    var1 = var5.bind(var6)(var1);
                    if (!var1) {
                        _fun18934_ip = 133;
                        continue _fun18934
                    }
                case 59:
                    var6 = _closure1_slot19;
                    var5 = var6.can;
                    var1 = _closure1_slot24;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var5.bind(var6)(var1, var4);
                    if (var1) {
                        _fun18934_ip = 133;
                        continue _fun18934
                    }
                case 88:
                    var7 = _closure1_slot9;
                    var6 = var7.isChannelGated;
                    var5 = var4.guild_id;
                    var1 = var4.id;
                    var1 = var6.bind(var7)(var5, var1);
                    if (var1) {
                        _fun18934_ip = 133;
                        continue _fun18934
                    }
                case 117:
                    var5 = var4.id;
                    var1 = _closure1_slot32;
                    if (!(var5 === var1)) {
                        _fun18934_ip = 281;
                        continue _fun18934
                    }
                case 133:
                    var1 = var4.type;
                    var5 = _closure1_slot12;
                    var6 = undefined;
                    var5 = var5.bind(var6)(var1);
                    if (var5) {
                        _fun18934_ip = 170;
                        continue _fun18934
                    }
                case 152:
                    var5 = _closure1_slot14;
                    var5 = var5.bind(var6)(var1);
                    if (!var5) {
                        _fun18934_ip = 168;
                        continue _fun18934
                    }
                case 164:
                    var1 = _closure1_slot27;
                case 168:
                    _fun18934_ip = 174;
                    continue _fun18934;
                case 170:
                    var1 = _closure1_slot26;
                case 174:
                    var5 = var4.type;
                    var4 = _closure1_slot23;
                    var4 = var4.GUILD_DIRECTORY;
                    if (!(var5 === var4)) {
                        _fun18934_ip = 249;
                        continue _fun18934
                    }
                case 193:
                    var5 = _closure1_slot33;
                    var4 = _closure2_slot1;
                    var5 = var5[var4];
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun18934_ip = 227;
                        continue _fun18934
                    }
                case 211:
                    var6 = _closure1_slot33;
                    var5 = _closure2_slot1;
                    var4 = new Array(0);
                    var6[var5] = var4;
                case 227:
                    var4 = _closure1_slot33;
                    var3 = _closure2_slot1;
                    var4 = var4[var3];
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var2);
                case 249:
                    var3 = _closure2_slot0;
                    var4 = var3[var1];
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun18934_ip = 281;
                        continue _fun18934
                    }
                case 263:
                    var0 = _closure2_slot0;
                    var1 = var0[var1];
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 281:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var _closure1_slot44 = var0;
    var13 = function() {
        _fun18935: for (var _fun18935_ip = 0;;) switch (_fun18935_ip) {
            case 0:
                var1 = {};
                _closure1_slot29 = var1;
                var1 = {};
                _closure1_slot33 = var1;
                var1 = {};
                _closure1_slot30 = var1;
                var1 = {};
                _closure1_slot31 = var1;
                var2 = _closure1_slot28;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun18935_ip = 52;
                    continue _fun18935
                }
            case 37:
                var2 = _closure1_slot45;
                var1 = _closure1_slot28;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 52:
                var0 = undefined;
                return var0;
        }
    };
    var0 = function arg0() {
        var3 = arg0;
        var0 = _closure1_slot41;
        var2 = undefined;
        var0 = var0.bind(var2)(var3);
        var5 = _closure1_slot29;
        var5[var3] = var0;
        var6 = _closure1_slot33;
        var5 = new Array(0);
        var6[var3] = var5;
        var5 = _closure1_slot44;
        var5 = var5.bind(var2)(var0);
        var5 = _closure1_slot26;
        var7 = var0[var5];
        var5 = var7.sort;
        var6 = _closure1_slot42;
        var5 = var5.bind(var7)(var6);
        var5 = _closure1_slot27;
        var7 = var0[var5];
        var5 = var7.sort;
        var5 = var5.bind(var7)(var6);
        var4 = _closure1_slot23;
        var4 = var4.GUILD_CATEGORY;
        var5 = var0[var4];
        var4 = var5.sort;
        var4 = var4.bind(var5)(var6);
        var4 = function arg0() {
            var2 = arg0;
            var5 = _closure1_slot30;
            var4 = var2.id;
            var3 = {};
            var5[var4] = var3;
            var _closure3_slot0 = var3;
            var3 = {};
            var _closure3_slot1 = var3;
            var1 = _closure1_slot26;
            var2 = var2[var1];
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun18938: for (var _fun18938_ip = 0;;) switch (_fun18938_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.channel;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 18;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.computeChannelName;
                        var2 = _closure1_slot21;
                        var1 = _closure1_slot20;
                        var2 = var3.bind(var4)(var5, var2, var1);
                        var3 = global;
                        var1 = var3.Object;
                        var1 = var1.prototype;
                        var7 = var1.hasOwnProperty;
                        var6 = var7.call;
                        var4 = _closure3_slot1;
                        var7 = var6.bind(var7)(var4, var2);
                        var4 = null;
                        var6 = null;
                        if (!var7) {
                            _fun18938_ip = 106;
                            continue _fun18938
                        }
                    case 98:
                        var7 = _closure3_slot1;
                        var6 = var7[var2];
                    case 106:
                        if (!(var4 != var6)) {
                            _fun18938_ip = 151;
                            continue _fun18938
                        }
                    case 110:
                        var7 = _closure3_slot1;
                        var4 = 1;
                        var4 = var6 + var4;
                        var7[var2] = var4;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = '~';
                        var3 = var4.bind(var3)(var6);
                        var4 = var2 + var3;
                        _fun18938_ip = 165;
                        continue _fun18938;
                    case 151:
                        var6 = _closure3_slot1;
                        var3 = 1;
                        var6[var2] = var3;
                        var4 = var2;
                    case 165:
                        var3 = _closure3_slot0;
                        var2 = var5.id;
                        var1 = {};
                        var5 = var5.id;
                        var1.id = var5;
                        var1.name = var4;
                        var3[var2] = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var4.bind(var2)(var0);
        var1 = function arg0() {
            _fun18939: for (var _fun18939_ip = 0;;) switch (_fun18939_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot21;
                    var0 = var3.getCurrentUser;
                    var9 = var0.bind(var3)();
                    var3 = _closure1_slot18;
                    var0 = var3.getGuild;
                    var5 = var0.bind(var3)(var2);
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun18939_ip = 59;
                        continue _fun18939
                    }
                case 39:
                    var4 = _closure1_slot46;
                    var0 = undefined;
                    var4 = var4.bind(var0)(var9, var5);
                    var0 = true;
                    if (var4) {
                        _fun18939_ip = 226;
                        continue _fun18939
                    }
                case 59:
                    var4 = _closure1_slot29;
                    var4 = var4[var2];
                    if (!(var3 == var4)) {
                        _fun18939_ip = 82;
                        continue _fun18939
                    }
                case 71:
                    var5 = _closure1_slot45;
                    var3 = undefined;
                    var4 = var5.bind(var3)(var2);
                case 82:
                    var3 = _closure1_slot26;
                    var5 = var4[var3];
                    var3 = _closure1_slot27;
                    var4 = var4[var3];
                    var3 = _closure1_slot39;
                    var8 = undefined;
                    var6 = var3.bind(var8)(var5);
                    var5 = var6.bind(var8)();
                    var3 = var5.done;
                    if (var3) {
                        _fun18939_ip = 161;
                        continue _fun18939
                    }
                case 121:
                    var10 = _closure1_slot46;
                    var3 = var5.value;
                    var3 = var3.channel;
                    var3 = var10.bind(var8)(var9, var3);
                    var0 = true;
                    if (var3) {
                        _fun18939_ip = 226;
                        continue _fun18939
                    }
                case 146:
                    var10 = var6.bind(var8)();
                    var3 = var10.done;
                    var5 = var10;
                    if (!var3) {
                        _fun18939_ip = 121;
                        continue _fun18939
                    }
                case 161:
                    var3 = _closure1_slot39;
                    var6 = var3.bind(var8)(var4);
                    var4 = var6.bind(var8)();
                    var3 = var4.done;
                    var0 = false;
                    if (var3) {
                        _fun18939_ip = 226;
                        continue _fun18939
                    }
                case 184:
                    var10 = _closure1_slot46;
                    var3 = var4.value;
                    var3 = var3.channel;
                    var3 = var10.bind(var8)(var9, var3);
                    var0 = true;
                    if (var3) {
                        _fun18939_ip = 226;
                        continue _fun18939
                    }
                case 209:
                    var10 = var6.bind(var8)();
                    var3 = var10.done;
                    var4 = var10;
                    var0 = false;
                    if (!var3) {
                        _fun18939_ip = 184;
                        continue _fun18939
                    }
                case 226:
                    var1 = _closure1_slot31;
                    if (var0) {
                        _fun18939_ip = 239;
                        continue _fun18939
                    }
                case 233:
                    var0 = delete var1[var2];
                    _fun18939_ip = 245;
                    continue _fun18939;
                case 239:
                    var0 = true;
                    var1[var2] = var0;
                case 245:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var _closure1_slot45 = var0;
    var12 = function arg0() {
        _fun18940: for (var _fun18940_ip = 0;;) switch (_fun18940_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var2 = var0.id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18940_ip = 51;
                    continue _fun18940
                }
            case 19:
                var3 = _closure1_slot29;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot28;
                if (!(var3 === var2)) {
                    _fun18940_ip = 49;
                    continue _fun18940
                }
            case 40:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 49:
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var11 = function arg0() {
        _fun18941: for (var _fun18941_ip = 0;;) switch (_fun18941_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.guild_id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18941_ip = 51;
                    continue _fun18941
                }
            case 19:
                var3 = _closure1_slot29;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot28;
                if (!(var2 === var3)) {
                    _fun18941_ip = 49;
                    continue _fun18941
                }
            case 40:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 49:
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var10 = function arg0() {
        _fun18942: for (var _fun18942_ip = 0;;) switch (_fun18942_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var3 = _closure1_slot29;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot28;
                if (!(var2 === var3)) {
                    _fun18942_ip = 38;
                    continue _fun18942
                }
            case 29:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 38:
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        var5 = _closure1_slot2;
        var6 = _closure1_slot3;
        var1 = 19;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.hasAny;
        var1 = 20;
        var1 = var6[var1];
        var5 = var5.bind(var4)(var1);
        var4 = var5.computePermissions;
        var1 = {};
        var6 = arg0;
        var1.user = var6;
        var6 = arg1;
        var1.context = var6;
        var6 = false;
        var1.checkElevated = var6;
        var1 = var4.bind(var5)(var1);
        var0 = _closure1_slot25;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function arg0, arg1() {
        _fun18944: for (var _fun18944_ip = 0;;) switch (_fun18944_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                _closure1_slot32 = var0;
                var3 = null;
                var2 = var3 == var5;
                var0 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun18944_ip = 36;
                    continue _fun18944
                }
            case 26:
                var2 = var5.getGuildId;
                var4 = var2.bind(var5)();
            case 36:
                var5 = var3 != var4;
                var2 = null;
                if (!var5) {
                    _fun18944_ip = 48;
                    continue _fun18944
                }
            case 45:
                var2 = var4;
            case 48:
                if (!(var3 != var2)) {
                    _fun18944_ip = 79;
                    continue _fun18944
                }
            case 52:
                var3 = _closure1_slot29;
                var3[var2] = var0;
                var3 = _closure1_slot28;
                if (!(var2 === var3)) {
                    _fun18944_ip = 77;
                    continue _fun18944
                }
            case 68:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 77:
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function() {
        var2 = _closure1_slot45;
        var1 = _closure1_slot22;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.createFavoritesChannelRecord;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.isGuildSelectableChannelType;
    var _closure1_slot12 = var3;
    var3 = var1.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot13 = var3;
    var3 = var1.isGuildVocalChannelType;
    var _closure1_slot14 = var3;
    var16 = var1.createChannelRecord;
    var1 = 9;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 10;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 11;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 12;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 13;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 14;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 15;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 16;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.FAVORITES;
    var _closure1_slot22 = var3;
    var17 = var1.ChannelTypes;
    var _closure1_slot23 = var17;
    var3 = var1.Permissions;
    var _closure1_slot24 = var3;
    var3 = var1.ElevatedPermissions;
    var _closure1_slot25 = var3;
    var4 = var1.NULL_STRING_GUILD_ID;
    var18 = var1.NULL_STRING_CHANNEL_ID;
    var3 = 'SELECTABLE';
    var _closure1_slot26 = var3;
    var1 = 'VOCAL';
    var _closure1_slot27 = var1;
    var14 = null;
    var _closure1_slot28 = var14;
    var15 = {};
    var _closure1_slot29 = var15;
    var15 = {};
    var _closure1_slot30 = var15;
    var15 = {};
    var _closure1_slot31 = var15;
    var _closure1_slot32 = var14;
    var14 = {};
    var _closure1_slot33 = var14;
    var14 = {};
    var15 = -1;
    var14.comparator = var15;
    var15 = {};
    var15.id = var18;
    var17 = var17.GUILD_CATEGORY;
    var15.type = var17;
    var17 = 'Uncategorized';
    var15.name = var17;
    var15 = var16.bind(var0)(var15);
    var14.channel = var15;
    var _closure1_slot34 = var14;
    var4 = var9.bind(var0)(var4);
    var _closure1_slot35 = var4;
    var4 = new Array(0);
    var _closure1_slot36 = var4;
    var4 = {};
    var _closure1_slot37 = var4;
    var4 = 21;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun18947: for (var _fun18947_ip = 0;;) switch (_fun18947_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot38;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18947_ip = 69;
                        continue _fun18947
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun18947_ip = 105;
                    continue _fun18947;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var10 = var3.waitFor;
            var18 = _closure1_slot15;
            var17 = _closure1_slot16;
            var16 = _closure1_slot10;
            var15 = _closure1_slot9;
            var14 = _closure1_slot17;
            var13 = _closure1_slot18;
            var12 = _closure1_slot19;
            var11 = _closure1_slot21;
            var19 = var3;
            var1 = var19[var10](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            var2 = var3.syncWith;
            var4 = _closure1_slot10;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot48;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'getAllGuilds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getChannels';
        var4.key = var6;
        var6 = function arg0() {
            _fun18950: for (var _fun18950_ip = 0;;) switch (_fun18950_ip) {
                case 0:
                    var4 = arg0;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun18950_ip = 18;
                        continue _fun18950
                    }
                case 9:
                    var0 = _closure1_slot35;
                    _fun18950_ip = 47;
                    continue _fun18950;
                case 18:
                    var1 = _closure1_slot29;
                    var1 = var1[var4];
                    if (!(var3 == var1)) {
                        _fun18950_ip = 44;
                        continue _fun18950
                    }
                case 33:
                    var3 = _closure1_slot45;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
                case 44:
                    var0 = var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getFirstChannelOfType';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun18951: for (var _fun18951_ip = 0;;) switch (_fun18951_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getChannels;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg2;
                    var2 = var1[var0];
                    var1 = var2.find;
                    var0 = arg1;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun18951_ip = 51;
                        continue _fun18951
                    }
                case 46:
                    var0 = var1.channel;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFirstChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18952: for (var _fun18952_ip = 0;;) switch (_fun18952_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var3 = arguments[2];
                    var4 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun18952_ip = 20;
                        continue _fun18952
                    }
                case 18:
                    var3 = false;
                case 20:
                    var1 = var4.getFirstChannelOfType;
                    var0 = _closure1_slot26;
                    var0 = var1.bind(var4)(var6, var5, var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun18952_ip = 71;
                        continue _fun18952
                    }
                case 46:
                    var1 = null;
                    if (!var3) {
                        _fun18952_ip = 68;
                        continue _fun18952
                    }
                case 51:
                    var3 = var4.getFirstChannelOfType;
                    var2 = _closure1_slot27;
                    var1 = var3.bind(var4)(var6, var5, var2);
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getDefaultChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun18953: for (var _fun18953_ip = 0;;) switch (_fun18953_ip) {
                case 0:
                    var4 = arguments[1];
                    var1 = arguments[2];
                    var3 = this;
                    var2 = undefined;
                    if (!(var4 === var2)) {
                        _fun18953_ip = 19;
                        continue _fun18953
                    }
                case 17:
                    var4 = false;
                case 19:
                    if (!(var1 === var2)) {
                        _fun18953_ip = 36;
                        continue _fun18953
                    }
                case 23:
                    var2 = _closure1_slot24;
                    var1 = var2.VIEW_CHANNEL;
                case 36:
                    var _closure3_slot0 = var1;
                    var2 = var3.getFirstChannel;
                    var1 = arg0;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot19;
                        var2 = var3.can;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0.channel;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSFWDefaultChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun18955: for (var _fun18955_ip = 0;;) switch (_fun18955_ip) {
                case 0:
                    var4 = arguments[1];
                    var1 = arguments[2];
                    var3 = this;
                    var2 = undefined;
                    if (!(var4 === var2)) {
                        _fun18955_ip = 19;
                        continue _fun18955
                    }
                case 17:
                    var4 = false;
                case 19:
                    if (!(var1 === var2)) {
                        _fun18955_ip = 36;
                        continue _fun18955
                    }
                case 23:
                    var2 = _closure1_slot24;
                    var1 = var2.VIEW_CHANNEL;
                case 36:
                    var _closure3_slot0 = var1;
                    var2 = var3.getFirstChannel;
                    var1 = arg0;
                    var0 = function(arg0) { // Environment: var0
                        _fun18956: for (var _fun18956_ip = 0;;) switch (_fun18956_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure1_slot19;
                                var3 = var4.can;
                                var2 = _closure3_slot0;
                                var0 = var1.channel;
                                var0 = var3.bind(var4)(var2, var0);
                                if (!var0) {
                                    _fun18956_ip = 51;
                                    continue _fun18956
                                }
                            case 37:
                                var1 = var1.channel;
                                var1 = var1.nsfw;
                                var0 = !var1;
                            case 51:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSelectableChannelIds';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getChannels;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot26;
            var2 = var1[var0];
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.channel;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getSelectableChannels';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getChannels;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot26;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getVocalChannelIds';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getChannels;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot27;
            var2 = var1[var0];
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.channel;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getDirectoryChannelIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun18962: for (var _fun18962_ip = 0;;) switch (_fun18962_ip) {
                case 0:
                    var2 = _closure1_slot33;
                    var0 = arg0;
                    var5 = var2[var0];
                    var2 = null;
                    var3 = var2 == var5;
                    var0 = undefined;
                    if (var3) {
                        _fun18962_ip = 42;
                        continue _fun18962
                    }
                case 25:
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.channel;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var4.bind(var5)(var3);
                case 42:
                    if (!(var2 == var0)) {
                        _fun18962_ip = 50;
                        continue _fun18962
                    }
                case 46:
                    var0 = _closure1_slot36;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'hasSelectableChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var1 = var2.getSelectableChannelIds;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.includes;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'hasElevatedPermissions';
        var4.key = var6;
        var6 = function arg0() {
            _fun18965: for (var _fun18965_ip = 0;;) switch (_fun18965_ip) {
                case 0:
                    var1 = _closure1_slot31;
                    var0 = arg0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun18965_ip = 19;
                        continue _fun18965
                    }
                case 17:
                    var0 = false;
                case 19:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'hasChannels';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getChannels;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var1 = var0.count;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasCategories';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getChannels;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot23;
            var0 = var0.GUILD_CATEGORY;
            var0 = var1[var0];
            var1 = var0.length;
            var0 = 1;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getTextChannelNameDisambiguations';
        var4.key = var6;
        var5 = function arg0() {
            _fun18968: for (var _fun18968_ip = 0;;) switch (_fun18968_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun18968_ip = 24;
                        continue _fun18968
                    }
                case 9:
                    var0 = _closure1_slot30;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun18968_ip = 31;
                        continue _fun18968
                    }
                case 24:
                    var0 = _closure1_slot37;
                case 31:
                    return var0;
            }
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'GuildChannelStore';
    var9.displayName = var4;
    var4 = 22;
    var4 = var7[var4];
    var21 = var8.bind(var0)(var4);
    var4 = {};
    var4.BACKGROUND_SYNC = var13;
    var14 = function arg0() {
        _fun18969: for (var _fun18969_ip = 0;;) switch (_fun18969_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = null;
                var1 = var3 != var4;
                var0 = null;
                if (!var1) {
                    _fun18969_ip = 22;
                    continue _fun18969
                }
            case 19:
                var0 = var4;
            case 22:
                _closure1_slot28 = var0;
                var0 = var3 != var4;
                if (!var0) {
                    _fun18969_ip = 67;
                    continue _fun18969
                }
            case 36:
                var1 = _closure1_slot29;
                var1 = var1[var4];
                var1 = var3 == var1;
                if (!var1) {
                    _fun18969_ip = 64;
                    continue _fun18969
                }
            case 51:
                var3 = _closure1_slot45;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = undefined;
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var4.CHANNEL_SELECT = var14;
    var4.CONNECTION_OPEN = var13;
    var4.OVERLAY_INITIALIZE = var13;
    var4.CACHE_LOADED_LAZY = var13;
    var4.GUILD_CREATE = var12;
    var4.GUILD_UPDATE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = var0.id;
        var2 = _closure1_slot29;
        var2 = delete var2[var1];
        var2 = _closure1_slot30;
        var2 = delete var2[var1];
        var2 = _closure1_slot31;
        var2 = delete var2[var1];
        var0 = _closure1_slot33;
        var0 = delete var0[var1];
        var0 = true;
        return var0;
    };
    var4.GUILD_DELETE = var12;
    var12 = function arg0() {
        _fun18971: for (var _fun18971_ip = 0;;) switch (_fun18971_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = var0.user;
                var4 = _closure1_slot15;
                var3 = var4.getId;
                var3 = var3.bind(var4)();
                var0 = var0.id;
                if (!(var3 === var0)) {
                    _fun18971_ip = 68;
                    continue _fun18971
                }
            case 39:
                var3 = _closure1_slot29;
                var0 = undefined;
                var3[var2] = var0;
                var3 = _closure1_slot28;
                if (!(var2 === var3)) {
                    _fun18971_ip = 66;
                    continue _fun18971
                }
            case 57:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 66:
                return var0;
            case 68:
                var0 = false;
                return var0;
        }
    };
    var4.GUILD_MEMBER_UPDATE = var12;
    var4.CHANNEL_CREATE = var11;
    var4.CHANNEL_DELETE = var11;
    var11 = function arg0() {
        _fun18972: for (var _fun18972_ip = 0;;) switch (_fun18972_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot39;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var4 = null;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun18972_ip = 105;
                    continue _fun18972
                }
            case 44:
                var1 = var3.value;
                var9 = var1.guild_id;
                if (!(var4 != var9)) {
                    _fun18972_ip = 87;
                    continue _fun18972
                }
            case 58:
                var1 = _closure1_slot29;
                var1[var9] = var7;
                var1 = _closure1_slot28;
                var2 = true;
                if (!(var1 === var9)) {
                    _fun18972_ip = 87;
                    continue _fun18972
                }
            case 76:
                var1 = _closure1_slot45;
                var1 = var1.bind(var7)(var9);
                var2 = true;
            case 87:
                var10 = var6.bind(var7)();
                var1 = var10.done;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun18972_ip = 44;
                    continue _fun18972
                }
            case 105:
                return var0;
        }
    };
    var4.CHANNEL_UPDATES = var11;
    var4.GUILD_ROLE_CREATE = var10;
    var4.GUILD_ROLE_UPDATE = var10;
    var4.GUILD_ROLE_DELETE = var10;
    var4.IMPERSONATE_UPDATE = var10;
    var4.IMPERSONATE_STOP = var10;
    var10 = function arg0() {
        _fun18973: for (var _fun18973_ip = 0;;) switch (_fun18973_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun18973_ip = 25;
                    continue _fun18973
                }
            case 14:
                var0 = _closure1_slot32;
                if (!(var4 == var0)) {
                    _fun18973_ip = 56;
                    continue _fun18973
                }
            case 25:
                var3 = _closure1_slot47;
                var2 = _closure1_slot16;
                var0 = var2.getChannel;
                var2 = var0.bind(var2)(var5);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var5);
                _fun18973_ip = 86;
                continue _fun18973;
            case 56:
                var3 = _closure1_slot47;
                var5 = _closure1_slot16;
                var2 = var5.getChannel;
                var1 = _closure1_slot32;
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var0 = var3.bind(var1)(var2, var4);
            case 86:
                return var0;
        }
    };
    var4.VOICE_CHANNEL_SELECT = var10;
    var10 = function arg0() {
        _fun18974: for (var _fun18974_ip = 0;;) switch (_fun18974_ip) {
            case 0:
                var3 = _closure1_slot16;
                var2 = var3.getBasicChannel;
                var0 = arg0;
                var0 = var0.id;
                var0 = var2.bind(var3)(var0);
                var4 = null;
                var2 = var4 != var0;
                if (!var2) {
                    _fun18974_ip = 44;
                    continue _fun18974
                }
            case 35:
                var3 = var0.guild_id;
                var2 = var4 != var3;
            case 44:
                if (!var2) {
                    _fun18974_ip = 63;
                    continue _fun18974
                }
            case 47:
                var2 = _closure1_slot45;
                var1 = var0.guild_id;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 63:
                var0 = undefined;
                return var0;
        }
    };
    var4.VOICE_CHANNEL_STATUS_UPDATE = var10;
    var5 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18976: for (var _fun18976_ip = 0;;) switch (_fun18976_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var5 = var0.channelId;
                    var4 = var0.sessionId;
                    var3 = _closure1_slot15;
                    var0 = var3.getSessionId;
                    var3 = var0.bind(var3)();
                    var0 = var2;
                    if (!(var3 === var4)) {
                        _fun18976_ip = 76;
                        continue _fun18976
                    }
                case 41:
                    var4 = _closure1_slot47;
                    var3 = _closure1_slot16;
                    var1 = var3.getChannel;
                    var3 = var1.bind(var3)(var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var5);
                    if (var1) {
                        _fun18976_ip = 73;
                        continue _fun18976
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
    var4.VOICE_STATE_UPDATES = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var22 = var5;
    var20 = var4;
    var4 = new var22[var9](var21, var20, var19);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/GuildChannelStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.GUILD_SELECTABLE_CHANNELS_KEY = var3;
    var2.GUILD_VOCAL_CHANNELS_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1672, 1375, 3090, 1376, 1216, 1372, 1681, 1410, 3091, 3100, 1621, 660, 22, 4792, 484, 3096, 566, 806, 2]);