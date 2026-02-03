// utils/MentionGuardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun73954: for (var _fun73954_ip = 0;;) switch (_fun73954_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun73954_ip = 46;
                    continue _fun73954
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun73954_ip = 55;
                    continue _fun73954
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun73954_ip = 345;
                    continue _fun73954
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun73954_ip = 323;
                    continue _fun73954
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun73954_ip = 283;
                    continue _fun73954
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun73954_ip = 270;
                    continue _fun73954
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
                    _fun73954_ip = 163;
                    continue _fun73954
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun73954_ip = 179;
                    continue _fun73954
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun73954_ip = 249;
                    continue _fun73954
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun73954_ip = 249;
                    continue _fun73954
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun73954_ip = 234;
                    continue _fun73954
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun73954_ip = 247;
                    continue _fun73954
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun73954_ip = 265;
                continue _fun73954;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun73954_ip = 283;
                continue _fun73954;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun73954_ip = 323;
                    continue _fun73954
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
                    _fun73954_ip = 330;
                    continue _fun73954
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun73955: for (var _fun73955_ip = 0;;) switch (_fun73955_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun73955_ip = 56;
                                continue _fun73955
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
                            _fun73955_ip = 67;
                            continue _fun73955;
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
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun73956: for (var _fun73956_ip = 0;;) switch (_fun73956_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun73956_ip = 23;
                    continue _fun73956
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun73956_ip = 33;
                    continue _fun73956
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
                    _fun73956_ip = 70;
                    continue _fun73956
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun73956_ip = 55;
                    continue _fun73956
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var6 = function arg0, arg1() {
        _fun73957: for (var _fun73957_ip = 0;;) switch (_fun73957_ip) {
            case 0:
                var2 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = 0;
                var _closure2_slot1 = var1;
                var3 = var2.isThread;
                var3 = var3.bind(var2)();
                if (var3) {
                    _fun73957_ip = 94;
                    continue _fun73957
                }
            case 31:
                var6 = _closure1_slot3;
                var5 = var6.getProps;
                var3 = var2.getGuildId;
                var4 = var3.bind(var2)();
                var3 = var2.id;
                var3 = var5.bind(var6)(var4, var3);
                var5 = var3.groups;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var0
                    _fun73958: for (var _fun73958_ip = 0;;) switch (_fun73958_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure2_slot0;
                            var2 = '@everyone';
                            var2 = var2 !== var3;
                            if (!var2) {
                                _fun73958_ip = 45;
                                continue _fun73958
                            }
                        case 23:
                            var4 = var0.id;
                            var3 = _closure1_slot6;
                            var3 = var3.OFFLINE;
                            var2 = var4 === var3;
                        case 45:
                            if (var2) {
                                _fun73958_ip = 66;
                                continue _fun73958
                            }
                        case 48:
                            var2 = _closure2_slot1;
                            var0 = var0.count;
                            var0 = var2 + var0;
                            _closure2_slot1 = var0;
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var0 = _closure2_slot1;
                _fun73957_ip = 117;
                continue _fun73957;
            case 94:
                var2 = var2.memberCount;
                var3 = null;
                var3 = var3 != var2;
                var1 = 0;
                if (!var3) {
                    _fun73957_ip = 114;
                    continue _fun73957
                }
            case 111:
                var1 = var2;
            case 114:
                var0 = var1;
            case 117:
                return var0;
        }
    };
    var _closure1_slot10 = var6;
    var0 = function arg0() {
        _fun73959: for (var _fun73959_ip = 0;;) switch (_fun73959_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.content;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun73959_ip = 123;
                    continue _fun73959
                }
            case 19:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.isArray;
                var1 = var0.content;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun73959_ip = 189;
                    continue _fun73959
                }
            case 48:
                var2 = _closure1_slot8;
                var1 = var0.content;
                var6 = undefined;
                var5 = var2.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var1 = null;
                var4 = var3;
                if (var2) {
                    _fun73959_ip = 121;
                    continue _fun73959
                }
            case 84:
                var3 = _closure1_slot11;
                var2 = var4.value;
                var2 = var3.bind(var6)(var2);
                if (!(var1 == var2)) {
                    _fun73959_ip = 119;
                    continue _fun73959
                }
            case 102:
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if (var3) {
                    _fun73959_ip = 121;
                    continue _fun73959
                }
            case 117:
                _fun73959_ip = 84;
                continue _fun73959;
            case 119:
                return var2;
            case 121:
                return var1;
            case 123:
                var2 = var0.type;
                var1 = 'inlineCode';
                if (!(var1 !== var2)) {
                    _fun73959_ip = 217;
                    continue _fun73959
                }
            case 136:
                var2 = var0.type;
                var1 = 'codeBlock';
                if (!(var1 !== var2)) {
                    _fun73959_ip = 217;
                    continue _fun73959
                }
            case 149:
                var5 = var0.content;
                var0 = null;
                var1 = var0 == var5;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun73959_ip = 185;
                    continue _fun73959
                }
            case 167:
                var4 = var5.match;
                var1 = _closure1_slot7;
                var2 = var4.bind(var5)(var1);
            case 185:
                if (!(var0 == var2)) {
                    _fun73959_ip = 193;
                    continue _fun73959
                }
            case 189:
                var0 = null;
                return var0;
            case 193:
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var1[var0];
                return var0;
            case 217:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Permissions;
    var _closure1_slot5 = var8;
    var7 = var7.StatusTypes;
    var _closure1_slot6 = var7;
    var8 = var1.RegExp;
    var1 = var8.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var13 = /@(:?everyone|here)/;
    var14 = var7;
    var1 = new var14[var8](var13, var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot7 = var1;
    var1 = {};
    var7 = function arg0, arg1() {
        _fun73960: for (var _fun73960_ip = 0;;) switch (_fun73960_ip) {
            case 0:
                var4 = arg1;
                var0 = var4.getGuildId;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = 'isGuildChannel with null guildId';
                var0 = var2.bind(var3)(var5, var0);
                var2 = _closure1_slot10;
                var0 = arg0;
                var2 = var2.bind(var3)(var0, var4);
                var0 = 30;
                var0 = var2 > var0;
                if (!var0) {
                    _fun73960_ip = 99;
                    continue _fun73960
                }
            case 73:
                var3 = _closure1_slot4;
                var2 = var3.can;
                var1 = _closure1_slot5;
                var1 = var1.MENTION_EVERYONE;
                var0 = var2.bind(var3)(var1, var4);
            case 99:
                return var0;
        }
    };
    var1.shouldShowEveryoneGuard = var7;
    var1.everyoneMemberCount = var6;
    var3 = function arg0, arg1() {
        _fun73961: for (var _fun73961_ip = 0;;) switch (_fun73961_ip) {
            case 0:
                var1 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var0 = var3[var0];
                var5 = undefined;
                var4 = var2.bind(var5)(var0);
                var3 = var4.parsePreprocessor;
                var2 = arg1;
                var0 = arg0;
                var0 = var3.bind(var4)(var2, var0);
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var0 = null;
                var3 = var2;
                if (var1) {
                    _fun73961_ip = 106;
                    continue _fun73961
                }
            case 69:
                var2 = _closure1_slot11;
                var1 = var3.value;
                var1 = var2.bind(var5)(var1);
                if (!(var0 == var1)) {
                    _fun73961_ip = 104;
                    continue _fun73961
                }
            case 87:
                var7 = var4.bind(var5)();
                var2 = var7.done;
                var3 = var7;
                if (var2) {
                    _fun73961_ip = 106;
                    continue _fun73961
                }
            case 102:
                _fun73961_ip = 69;
                continue _fun73961;
            case 104:
                return var1;
            case 106:
                return var0;
        }
    };
    var1.extractEveryoneRole = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/MentionGuardUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5656, 3091, 660, 44, 5588, 2]);