// modules/chat/useTypingText.tsx
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
        _fun89625: for (var _fun89625_ip = 0;;) switch (_fun89625_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89625_ip = 46;
                    continue _fun89625
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89625_ip = 55;
                    continue _fun89625
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89625_ip = 345;
                    continue _fun89625
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89625_ip = 323;
                    continue _fun89625
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89625_ip = 283;
                    continue _fun89625
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89625_ip = 270;
                    continue _fun89625
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
                    _fun89625_ip = 163;
                    continue _fun89625
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89625_ip = 179;
                    continue _fun89625
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89625_ip = 249;
                    continue _fun89625
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89625_ip = 249;
                    continue _fun89625
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89625_ip = 234;
                    continue _fun89625
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89625_ip = 247;
                    continue _fun89625
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89625_ip = 265;
                continue _fun89625;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89625_ip = 283;
                continue _fun89625;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89625_ip = 323;
                    continue _fun89625
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
                    _fun89625_ip = 330;
                    continue _fun89625
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89626: for (var _fun89626_ip = 0;;) switch (_fun89626_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89626_ip = 56;
                                continue _fun89626
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
                            _fun89626_ip = 67;
                            continue _fun89626;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun89627: for (var _fun89627_ip = 0;;) switch (_fun89627_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89627_ip = 23;
                    continue _fun89627
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89627_ip = 33;
                    continue _fun89627
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
                    _fun89627_ip = 70;
                    continue _fun89627
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89627_ip = 55;
                    continue _fun89627
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/useTypingText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89628: for (var _fun89628_ip = 0;;) switch (_fun89628_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channelId;
                var _closure2_slot0 = var10;
                var9 = var0.guildId;
                var _closure2_slot1 = var9;
                var8 = var0.typingUserIds;
                var _closure2_slot2 = var8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var3 = var3[var0];
                var7 = undefined;
                var6 = var4.bind(var7)(var3);
                var5 = var6.useStateFromStoresArray;
                var3 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(3);
                var3[0] = var10;
                var3[1] = var9;
                var3[2] = var8;
                var1 = function() { // Environment: var1
                    _fun89629: for (var _fun89629_ip = 0;;) switch (_fun89629_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot5;
                            var1 = _closure2_slot2;
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var2 = var5.bind(var6)();
                            var1 = var2.done;
                            var4 = 3;
                            var3 = null;
                            if (var1) {
                                _fun89629_ip = 129;
                                continue _fun89629
                            }
                        case 42:
                            var10 = var2.value;
                            var9 = _closure1_slot4;
                            var1 = var9.getUser;
                            var13 = var1.bind(var9)(var10);
                            if (!(var3 != var13)) {
                                _fun89629_ip = 114;
                                continue _fun89629
                            }
                        case 66:
                            var9 = var0.push;
                            var10 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var4];
                            var12 = var10.bind(var6)(var1);
                            var11 = var12.getName;
                            var10 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var11.bind(var12)(var10, var1, var13);
                            var1 = var9.bind(var0)(var1);
                        case 114:
                            var9 = var5.bind(var6)();
                            var1 = var9.done;
                            var2 = var9;
                            if (!var1) {
                                _fun89629_ip = 42;
                                continue _fun89629
                            }
                        case 129:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var4, var1, var3);
                var1 = _closure1_slot3;
                var8 = 4;
                var1 = var1.bind(var7)(var3, var8);
                var3 = 0;
                var6 = var1[var3];
                var3 = 1;
                var10 = var1[var3];
                var11 = var1[var0];
                var0 = 3;
                var3 = var1[var0];
                var1 = null;
                var4 = var1 == var6;
                var0 = null;
                if (var4) {
                    _fun89628_ip = 435;
                    continue _fun89628
                }
            case 157:
                if (!(var1 != var10)) {
                    _fun89628_ip = 371;
                    continue _fun89628
                }
            case 164:
                if (!(var1 != var11)) {
                    _fun89628_ip = 303;
                    continue _fun89628
                }
            case 171:
                if (!(var1 != var3)) {
                    _fun89628_ip = 231;
                    continue _fun89628
                }
            case 175:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var8];
                var3 = var5.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var1[var8];
                var1 = var5.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.uVDhqZ;
                var1 = var3.bind(var4)(var1);
                _fun89628_ip = 301;
                continue _fun89628;
            case 231:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var8];
                var5 = var4.bind(var7)(var5);
                var9 = var5.intl;
                var5 = var9.format;
                var3 = var3[var8];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.StKThj;
                var3 = {};
                var3.a = var6;
                var3.b = var10;
                var3.c = var11;
                var1 = var5.bind(var9)(var4, var3);
            case 301:
                _fun89628_ip = 369;
                continue _fun89628;
            case 303:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var8];
                var5 = var4.bind(var7)(var5);
                var9 = var5.intl;
                var5 = var9.format;
                var3 = var3[var8];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.rB0CUa;
                var3 = {};
                var3.a = var6;
                var3.b = var10;
                var1 = var5.bind(var9)(var4, var3);
            case 369:
                _fun89628_ip = 432;
                continue _fun89628;
            case 371:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var8];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var2 = var2[var8];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.lJ9sZX;
                var2 = {};
                var2.a = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 432:
                var0 = var1;
            case 435:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1621, 566, 3961, 1234, 2]);