// modules/app_database/modules/messages/KvMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun40345: for (var _fun40345_ip = 0;;) switch (_fun40345_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40345_ip = 46;
                    continue _fun40345
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40345_ip = 55;
                    continue _fun40345
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40345_ip = 343;
                    continue _fun40345
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40345_ip = 323;
                    continue _fun40345
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40345_ip = 283;
                    continue _fun40345
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40345_ip = 270;
                    continue _fun40345
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
                    _fun40345_ip = 163;
                    continue _fun40345
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40345_ip = 179;
                    continue _fun40345
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40345_ip = 249;
                    continue _fun40345
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40345_ip = 249;
                    continue _fun40345
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40345_ip = 234;
                    continue _fun40345
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40345_ip = 247;
                    continue _fun40345
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40345_ip = 265;
                continue _fun40345;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40345_ip = 283;
                continue _fun40345;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40345_ip = 323;
                    continue _fun40345
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
                    _fun40345_ip = 330;
                    continue _fun40345
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40346: for (var _fun40346_ip = 0;;) switch (_fun40346_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40346_ip = 56;
                                continue _fun40346
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
                            _fun40346_ip = 67;
                            continue _fun40346;
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
        _fun40347: for (var _fun40347_ip = 0;;) switch (_fun40347_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40347_ip = 23;
                    continue _fun40347
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40347_ip = 33;
                    continue _fun40347
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
                    _fun40347_ip = 70;
                    continue _fun40347
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40347_ip = 55;
                    continue _fun40347
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            var3 = _closure1_slot1;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var0 = {};
        var2 = 'fromMessage';
        var0.key = var2;
        var2 = function arg0, arg1, arg2, arg3() {
            var3 = arg2;
            var2 = _closure2_slot0;
            var1 = var2.deriveMemberUsers;
            var0 = arg0;
            var4 = var1.bind(var2)(var0, var3);
            var2 = _closure1_slot0;
            var1 = undefined;
            var0 = 2;
            var1 = var2.bind(var1)(var4, var0);
            var0 = 0;
            var2 = var1[var0];
            var0 = 1;
            var1 = var1[var0];
            var0 = {};
            var4 = var3.id;
            var0.id = var4;
            var4 = arg1;
            var0.channelId = var4;
            var0.message = var3;
            var0.members = var2;
            var0.users = var1;
            var1 = arg3;
            var0.connectionId = var1;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'deriveMemberUsers';
        var0.key = var5;
        var1 = function arg0, arg1() {
            _fun40351: for (var _fun40351_ip = 0;;) switch (_fun40351_ip) {
                case 0:
                    var10 = arg0;
                    var1 = arg1;
                    var0 = global;
                    var2 = var0.Set;
                    var0 = var1.author;
                    var9 = null;
                    var4 = var9 == var0;
                    var8 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun40351_ip = 38;
                        continue _fun40351
                    }
                case 33:
                    var3 = var0.id;
                case 38:
                    var0 = new Array(2);
                    var0[0] = var3;
                    var4 = var1.interaction;
                    var5 = var9 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun40351_ip = 71;
                        continue _fun40351
                    }
                case 61:
                    var4 = var4.user;
                    var3 = var4.id;
                case 71:
                    var0[1] = var3;
                    var5 = var1.mentions;
                    var1 = var9 == var5;
                    var3 = undefined;
                    if (var1) {
                        _fun40351_ip = 107;
                        continue _fun40351
                    }
                case 90:
                    var4 = var5.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var1);
                case 107:
                    if (!(var9 == var3)) {
                        _fun40351_ip = 115;
                        continue _fun40351
                    }
                case 111:
                    var3 = new Array(0);
                case 115:
                    var16 = 2;
                    var18 = var0;
                    var17 = var3;
                    var1 = arraySpread(var18, var17, var16);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var19 = var1;
                    var18 = var0;
                    var0 = new var19[var2](var18, var17);
                    var3 = var0 instanceof Object ? var0 : var1;
                    var2 = new Array(0);
                    var1 = new Array(0);
                    var0 = _closure1_slot6;
                    var6 = var0.bind(var8)(var3);
                    var3 = var6.bind(var8)();
                    var0 = var3.done;
                    var5 = var3;
                    var4 = undefined;
                    var3 = undefined;
                    if (var0) {
                        _fun40351_ip = 296;
                        continue _fun40351
                    }
                case 190:
                    var14 = var5.value;
                    if (!(var9 != var14)) {
                        _fun40351_ip = 281;
                        continue _fun40351
                    }
                case 199:
                    var11 = _closure1_slot4;
                    var0 = var11.getUser;
                    var11 = var0.bind(var11)(var14);
                    var13 = _closure1_slot3;
                    var12 = var13.getTrueMember;
                    var0 = var10;
                    if (!(var9 == var0)) {
                        _fun40351_ip = 235;
                        continue _fun40351
                    }
                case 231:
                    var0 = _closure1_slot5;
                case 235:
                    var0 = var12.bind(var13)(var0, var14);
                    if (!(var9 != var11)) {
                        _fun40351_ip = 255;
                        continue _fun40351
                    }
                case 245:
                    var12 = var1.push;
                    var12 = var12.bind(var1)(var11);
                case 255:
                    var4 = var11;
                    var3 = var0;
                    if (!(var9 != var0)) {
                        _fun40351_ip = 281;
                        continue _fun40351
                    }
                case 265:
                    var12 = var2.push;
                    var12 = var12.bind(var2)(var0);
                    var4 = var11;
                    var3 = var0;
                case 281:
                    var11 = var6.bind(var8)();
                    var0 = var11.done;
                    var5 = var11;
                    if (!var0) {
                        _fun40351_ip = 190;
                        continue _fun40351
                    }
                case 296:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/messages/KvMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var2.KvMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1681, 1621, 660, 2]);