// modules/cache/deserializeChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun18871: for (var _fun18871_ip = 0;;) switch (_fun18871_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18871_ip = 46;
                    continue _fun18871
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18871_ip = 55;
                    continue _fun18871
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18871_ip = 343;
                    continue _fun18871
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18871_ip = 323;
                    continue _fun18871
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18871_ip = 283;
                    continue _fun18871
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18871_ip = 270;
                    continue _fun18871
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
                    _fun18871_ip = 163;
                    continue _fun18871
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18871_ip = 179;
                    continue _fun18871
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18871_ip = 249;
                    continue _fun18871
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18871_ip = 249;
                    continue _fun18871
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18871_ip = 234;
                    continue _fun18871
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18871_ip = 247;
                    continue _fun18871
                }
            case 234:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18871_ip = 265;
                continue _fun18871;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18871_ip = 283;
                continue _fun18871;
            case 270:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18871_ip = 323;
                    continue _fun18871
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
                    _fun18871_ip = 330;
                    continue _fun18871
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18872: for (var _fun18872_ip = 0;;) switch (_fun18872_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18872_ip = 56;
                                continue _fun18872
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
                            _fun18872_ip = 67;
                            continue _fun18872;
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
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        _fun18873: for (var _fun18873_ip = 0;;) switch (_fun18873_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18873_ip = 23;
                    continue _fun18873
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18873_ip = 33;
                    continue _fun18873
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
                    _fun18873_ip = 70;
                    continue _fun18873
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18873_ip = 55;
                    continue _fun18873
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var3 = function arg0() {
        _fun18874: for (var _fun18874_ip = 0;;) switch (_fun18874_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var5 = var2.bind(var0)(var1);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = 1;
                var3 = null;
                if (var1) {
                    _fun18874_ip = 168;
                    continue _fun18874
                }
            case 37:
                var1 = var2.value;
                var11 = var1.permissionOverwrites_;
                if (!(var3 != var11)) {
                    _fun18874_ip = 153;
                    continue _fun18874
                }
            case 52:
                var9 = var11;
                for (var1 in var9)
                    case 63: {
                        case 72: var12 = var1;
                        var13 = var11[var12];
                        var14 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var15 = var12[var4];
                        var17 = var14.bind(var0)(var15);
                        var16 = var17.deserialize;
                        var15 = var13.allow;
                        var15 = var16.bind(var17)(var15);
                        var13.allow = var15;
                        var12 = var12[var4];
                        var15 = var14.bind(var0)(var12);
                        var14 = var15.deserialize;
                        var12 = var13.deny;
                        var12 = var14.bind(var15)(var12);
                        var13.deny = var12;
                        _fun18874_ip = 63;
                        continue _fun18874;
                    }
            case 153:
                var7 = var5.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun18874_ip = 37;
                    continue _fun18874
                }
            case 168:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/cache/deserializeChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun18875: for (var _fun18875_ip = 0;;) switch (_fun18875_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var6 = var2.bind(var0)(var1);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun18875_ip = 84;
                    continue _fun18875
                }
            case 37:
                var8 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var0)(var8, var5);
                var8 = var1[var4];
                var8 = _closure1_slot5;
                var1 = var1[var3];
                var1 = var8.bind(var0)(var1);
                var8 = var6.bind(var0)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun18875_ip = 37;
                    continue _fun18875
                }
            case 84:
                return var0;
        }
    };
    var2.deserializeChannelEntries = var3;
    var1 = function arg0() {
        _fun18876: for (var _fun18876_ip = 0;;) switch (_fun18876_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.permissionOverwrites_;
                var1 = null;
                if (!(var1 != var9)) {
                    _fun18876_ip = 124;
                    continue _fun18876
                }
            case 15:
                var7 = var9;
                var2 = 1;
                var1 = undefined;
                for (var4 in var7)
                    case 34: {
                        case 43: var10 = var4;
                        var11 = var9[var10];
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var13 = var10[var2];
                        var15 = var12.bind(var1)(var13);
                        var14 = var15.deserialize;
                        var13 = var11.allow;
                        var13 = var14.bind(var15)(var13);
                        var11.allow = var13;
                        var10 = var10[var2];
                        var13 = var12.bind(var1)(var10);
                        var12 = var13.deserialize;
                        var10 = var11.deny;
                        var10 = var12.bind(var13)(var10);
                        var11.deny = var10;
                        _fun18876_ip = 34;
                        continue _fun18876;
                    }
            case 124:
                return var0;
        }
    };
    var2.deserializeChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 484, 2]);