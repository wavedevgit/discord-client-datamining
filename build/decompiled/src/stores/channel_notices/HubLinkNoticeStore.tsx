// stores/channel_notices/HubLinkNoticeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun96192: for (var _fun96192_ip = 0;;) switch (_fun96192_ip) {
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
            case 72: // try_end0
                _fun96192_ip = 76;
                continue _fun96192;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun96195: for (var _fun96195_ip = 0;;) switch (_fun96195_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96195_ip = 46;
                    continue _fun96195
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun96195_ip = 55;
                    continue _fun96195
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun96195_ip = 345;
                    continue _fun96195
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96195_ip = 323;
                    continue _fun96195
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96195_ip = 283;
                    continue _fun96195
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96195_ip = 270;
                    continue _fun96195
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
                    _fun96195_ip = 163;
                    continue _fun96195
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun96195_ip = 179;
                    continue _fun96195
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96195_ip = 249;
                    continue _fun96195
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96195_ip = 249;
                    continue _fun96195
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96195_ip = 234;
                    continue _fun96195
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96195_ip = 247;
                    continue _fun96195
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun96195_ip = 265;
                continue _fun96195;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun96195_ip = 283;
                continue _fun96195;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun96195_ip = 323;
                    continue _fun96195
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
                    _fun96195_ip = 330;
                    continue _fun96195
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96196: for (var _fun96196_ip = 0;;) switch (_fun96196_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96196_ip = 56;
                                continue _fun96196
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
                            _fun96196_ip = 67;
                            continue _fun96196;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun96197: for (var _fun96197_ip = 0;;) switch (_fun96197_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96197_ip = 23;
                    continue _fun96197
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96197_ip = 33;
                    continue _fun96197
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
                    _fun96197_ip = 70;
                    continue _fun96197
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96197_ip = 55;
                    continue _fun96197
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun96198: for (var _fun96198_ip = 0;;) switch (_fun96198_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = var2.getGuild;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun96198_ip = 75;
                    continue _fun96198
                }
            case 29:
                var4 = var1.features;
                var2 = var4.has;
                var1 = _closure1_slot7;
                var1 = var1.HUB;
                var1 = var2.bind(var4)(var1);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun96198_ip = 72;
                    continue _fun96198
                }
            case 64:
                var2 = true;
                _closure1_slot8 = var2;
                var1 = true;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = true;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildFeatures;
    var _closure1_slot7 = var1;
    var1 = false;
    var _closure1_slot8 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun96201: for (var _fun96201_ip = 0;;) switch (_fun96201_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96201_ip = 69;
                        continue _fun96201
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96201_ip = 105;
                    continue _fun96201;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot6;
            var4 = _closure1_slot5;
            var1 = var2.bind(var3)(var1, var4);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot13;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'channelNoticePredicate';
        var4.key = var6;
        var5 = function arg0() {
            _fun96203: for (var _fun96203_ip = 0;;) switch (_fun96203_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.features;
                    var2 = var3.has;
                    var0 = _closure1_slot7;
                    var0 = var0.LINKED_TO_HUB;
                    var0 = var2.bind(var3)(var0);
                    var2 = !var0;
                    var0 = !var2;
                    if (var2) {
                        _fun96203_ip = 48;
                        continue _fun96203
                    }
                case 41:
                    var1 = _closure1_slot8;
                    var0 = !var1;
                case 48:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'HubLinkNoticeStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun96204: for (var _fun96204_ip = 0;;) switch (_fun96204_ip) {
            case 0:
                var1 = _closure1_slot10;
                var0 = arg0;
                var0 = var0.guilds;
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun96204_ip = 78;
                    continue _fun96204
                }
            case 35:
                var5 = _closure1_slot12;
                var0 = var1.value;
                var0 = var0.id;
                var0 = var5.bind(var3)(var0);
                if (var0) {
                    _fun96204_ip = 74;
                    continue _fun96204
                }
            case 57:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (var0) {
                    _fun96204_ip = 78;
                    continue _fun96204
                }
            case 72:
                _fun96204_ip = 35;
                continue _fun96204;
            case 74:
                var0 = true;
                return var0;
            case 78:
                var0 = false;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var8;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot12;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.GUILD_CREATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/channel_notices/HubLinkNoticeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8323, 1410, 660, 566, 806, 2]);