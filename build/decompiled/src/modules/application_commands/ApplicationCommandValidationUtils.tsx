// modules/application_commands/ApplicationCommandValidationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun90321: for (var _fun90321_ip = 0;;) switch (_fun90321_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun90321_ip = 46;
                    continue _fun90321
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun90321_ip = 55;
                    continue _fun90321
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun90321_ip = 345;
                    continue _fun90321
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun90321_ip = 323;
                    continue _fun90321
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun90321_ip = 283;
                    continue _fun90321
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun90321_ip = 270;
                    continue _fun90321
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
                    _fun90321_ip = 163;
                    continue _fun90321
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun90321_ip = 179;
                    continue _fun90321
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 249;
                    continue _fun90321
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 249;
                    continue _fun90321
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 234;
                    continue _fun90321
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun90321_ip = 247;
                    continue _fun90321
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun90321_ip = 265;
                continue _fun90321;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun90321_ip = 283;
                continue _fun90321;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun90321_ip = 323;
                    continue _fun90321
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
                    _fun90321_ip = 330;
                    continue _fun90321
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun90322: for (var _fun90322_ip = 0;;) switch (_fun90322_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun90322_ip = 56;
                                continue _fun90322
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
                            _fun90322_ip = 67;
                            continue _fun90322;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun90323: for (var _fun90323_ip = 0;;) switch (_fun90323_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun90323_ip = 23;
                    continue _fun90323
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun90323_ip = 33;
                    continue _fun90323
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
                    _fun90323_ip = 70;
                    continue _fun90323
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun90323_ip = 55;
                    continue _fun90323
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var1 = function arg0() {
        _fun90324: for (var _fun90324_ip = 0;;) switch (_fun90324_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.option;
                var5 = var0.content;
                var11 = var0.guildId;
                var10 = var0.channelId;
                var1 = var0.allowEmptyValues;
                var9 = var0.commandOrigin;
                var6 = undefined;
                if (!(var9 === var6)) {
                    _fun90324_ip = 77;
                    continue _fun90324
                }
            case 42:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var0 = var2.bind(var6)(var0);
                var0 = var0.CommandOrigin;
                var9 = var0.CHAT;
            case 77:
                var8 = null;
                var0 = var8 != var5;
                var2 = '';
                var3 = var2;
                if (!var0) {
                    _fun90324_ip = 148;
                    continue _fun90324
                }
            case 93:
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 2;
                var0 = var12[var0];
                var13 = var7.bind(var6)(var0);
                var12 = var13.getString;
                var7 = {};
                var7.content = var5;
                var0 = 'content';
                var7 = var12.bind(var13)(var7, var0);
                var0 = var7.trim;
                var3 = var0.bind(var7)();
            case 148:
                var0 = var4.required;
                if (!(var8 != var5)) {
                    _fun90324_ip = 411;
                    continue _fun90324
                }
            case 161:
                if (!(var2 !== var3)) {
                    _fun90324_ip = 297;
                    continue _fun90324
                }
            case 168:
                var7 = var5.length;
                var2 = 1;
                if (!(!(var7 > var2))) {
                    _fun90324_ip = 188;
                    continue _fun90324
                }
            case 180:
                var2 = 0;
                var7 = var5[var2];
                _fun90324_ip = 205;
                continue _fun90324;
            case 188:
                var2 = {};
                var5 = 'text';
                var2.type = var5;
                var2.text = var3;
                var7 = var2;
            case 205:
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 4;
                var2 = var12[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var4.type;
                var2 = var5[var2];
                var19 = var5;
                var18 = var7;
                var17 = var4;
                var16 = var10;
                var15 = var11;
                var14 = var9;
                var2 = var19[var2](var18, var17, var16, var15, var14, var13);
                var5 = var2.success;
                if (var5) {
                    _fun90324_ip = 277;
                    continue _fun90324
                }
            case 268:
                var7 = var2.error;
                var5 = var8 != var7;
            case 277:
                if (var5) {
                    _fun90324_ip = 295;
                    continue _fun90324
                }
            case 280:
                var3 = _closure1_slot3;
                var3 = var3.bind(var6)(var4);
                var2.error = var3;
            case 295:
                return var2;
            case 297:
                if (var1) {
                    _fun90324_ip = 397;
                    continue _fun90324
                }
            case 300:
                var2 = {};
                var1 = false;
                var2.success = var1;
                if (var0) {
                    _fun90324_ip = 333;
                    continue _fun90324
                }
            case 315:
                var1 = _closure1_slot3;
                var1 = var1.bind(var6)(var4);
                var2.error = var1;
                var1 = var2;
                _fun90324_ip = 395;
                continue _fun90324;
            case 333:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 3;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.JZJQL2;
                var3 = var4.bind(var5)(var3);
                var2.error = var3;
                var1 = var2;
            case 395:
                _fun90324_ip = 409;
                continue _fun90324;
            case 397:
                var2 = {};
                var3 = true;
                var2.success = var3;
                var1 = var2;
            case 409:
                return var1;
            case 411:
                if (var0) {
                    _fun90324_ip = 425;
                    continue _fun90324
                }
            case 414:
                var0 = {};
                var1 = true;
                var0.success = var1;
                _fun90324_ip = 499;
                continue _fun90324;
            case 425:
                var1 = {};
                var2 = false;
                var1.success = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.JZJQL2;
                var2 = var3.bind(var4)(var2);
                var1.error = var2;
                var0 = var1;
            case 499:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.getValidationErrorText;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandValidationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun90325: for (var _fun90325_ip = 0;;) switch (_fun90325_ip) {
            case 0:
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var6 = arg4;
                var0 = {};
                var1 = arg0;
                var2 = var1.options;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun90325_ip = 127;
                    continue _fun90325
                }
            case 28:
                var1 = _closure1_slot4;
                var4 = undefined;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun90325_ip = 125;
                    continue _fun90325
                }
            case 54:
                var13 = var2.value;
                var1 = var13.name;
                var12 = var9[var1];
                var10 = var13.name;
                var11 = _closure1_slot6;
                var1 = {};
                var1.option = var13;
                var1.content = var12;
                var1.guildId = var8;
                var1.channelId = var7;
                var1.allowEmptyValues = var6;
                var1 = var11.bind(var4)(var1);
                var0[var10] = var1;
                var10 = var3.bind(var4)();
                var1 = var10.done;
                var2 = var10;
                if (!var1) {
                    _fun90325_ip = 54;
                    continue _fun90325
                }
            case 125:
                return var0;
            case 127:
                return var0;
        }
    };
    var2.getValidationResults = var3;
    var2.validateOptionContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4546, 4548, 8012, 1234, 11745, 2]);