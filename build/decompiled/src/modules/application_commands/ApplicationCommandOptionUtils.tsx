// modules/application_commands/ApplicationCommandOptionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var11;
    var0 = function arg0, arg1() {
        _fun64377: for (var _fun64377_ip = 0;;) switch (_fun64377_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun64377_ip = 46;
                    continue _fun64377
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun64377_ip = 55;
                    continue _fun64377
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun64377_ip = 343;
                    continue _fun64377
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun64377_ip = 323;
                    continue _fun64377
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun64377_ip = 283;
                    continue _fun64377
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun64377_ip = 270;
                    continue _fun64377
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
                    _fun64377_ip = 163;
                    continue _fun64377
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun64377_ip = 179;
                    continue _fun64377
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun64377_ip = 249;
                    continue _fun64377
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun64377_ip = 249;
                    continue _fun64377
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun64377_ip = 234;
                    continue _fun64377
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun64377_ip = 247;
                    continue _fun64377
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun64377_ip = 265;
                continue _fun64377;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun64377_ip = 283;
                continue _fun64377;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun64377_ip = 323;
                    continue _fun64377
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
                    _fun64377_ip = 330;
                    continue _fun64377
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun64378: for (var _fun64378_ip = 0;;) switch (_fun64378_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun64378_ip = 56;
                                continue _fun64378
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
                            _fun64378_ip = 67;
                            continue _fun64378;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun64379: for (var _fun64379_ip = 0;;) switch (_fun64379_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun64379_ip = 23;
                    continue _fun64379
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun64379_ip = 33;
                    continue _fun64379
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
                    _fun64379_ip = 70;
                    continue _fun64379
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun64379_ip = 55;
                    continue _fun64379
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var8 = function arg0() {
        _fun64380: for (var _fun64380_ip = 0;;) switch (_fun64380_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun64380_ip = 32;
                    continue _fun64380
                }
            case 15:
                var1 = var2.filter;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun64381: for (var _fun64381_ip = 0;;) switch (_fun64381_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = arg1;
                            var1 = var2.type;
                            var0 = 'text';
                            var0 = var0 !== var1;
                            if (var0) {
                                _fun64381_ip = 92;
                                continue _fun64381
                            }
                        case 22:
                            var1 = 0;
                            if (!(var3 > var1)) {
                                _fun64381_ip = 51;
                                continue _fun64381
                            }
                        case 28:
                            var1 = _closure2_slot0;
                            var4 = var1.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            if (!(!(var3 < var1))) {
                                _fun64381_ip = 76;
                                continue _fun64381
                            }
                        case 51:
                            var3 = var2.text;
                            var1 = var3.trim;
                            var3 = var1.bind(var3)();
                            var1 = '';
                            var1 = var1 !== var3;
                            _fun64381_ip = 89;
                            continue _fun64381;
                        case 76:
                            var3 = var2.text;
                            var2 = '';
                            var1 = var2 !== var3;
                        case 89:
                            var0 = var1;
                        case 92:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun64380_ip = 36;
                continue _fun64380;
            case 32:
                var0 = new Array(0);
            case 36:
                return var0;
        }
    };
    var _closure1_slot9 = var8;
    var7 = function arg0, arg1() {
        _fun64382: for (var _fun64382_ip = 0;;) switch (_fun64382_ip) {
            case 0:
                var2 = _closure1_slot9;
                var3 = arg0;
                var1 = arg1;
                var1 = var3[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var5 = var4[var1];
                var8 = var3.bind(var6)(var5);
                var5 = var2.length;
                var7 = var1 === var5;
                var5 = 'Contains multiple values';
                var5 = var8.bind(var6)(var7, var5);
                var1 = var4[var1];
                var5 = var3.bind(var6)(var1);
                var1 = 0;
                var3 = var2[var1];
                var4 = null;
                var7 = var4 == var3;
                var4 = undefined;
                if (var7) {
                    _fun64382_ip = 96;
                    continue _fun64382
                }
            case 91:
                var4 = var3.type;
            case 96:
                var3 = 'text';
                var4 = var3 === var4;
                var3 = 'First value is not text';
                var3 = var5.bind(var6)(var4, var3);
                var1 = var2[var1];
                var1 = var1.text;
                var0 = _closure1_slot6;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot10 = var7;
    var6 = function arg0, arg1() {
        _fun64383: for (var _fun64383_ip = 0;;) switch (_fun64383_ip) {
            case 0:
                var2 = _closure1_slot9;
                var3 = arg0;
                var1 = arg1;
                var1 = var3[var1];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 1;
                var4 = var3[var0];
                var7 = var2.bind(var5)(var4);
                var4 = var1.length;
                var6 = var0 === var4;
                var4 = 'Contains multiple values';
                var4 = var7.bind(var5)(var6, var4);
                var0 = var3[var0];
                var4 = var2.bind(var5)(var0);
                var0 = 0;
                var2 = var1[var0];
                var3 = null;
                var6 = var3 == var2;
                var3 = undefined;
                if (var6) {
                    _fun64383_ip = 96;
                    continue _fun64383
                }
            case 91:
                var3 = var2.type;
            case 96:
                var2 = 'channelMention';
                var3 = var2 === var3;
                var2 = 'First value is not a channel mention';
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1[var0];
                var0 = var0.channelId;
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function arg0, arg1() {
        _fun64384: for (var _fun64384_ip = 0;;) switch (_fun64384_ip) {
            case 0:
                var2 = _closure1_slot9;
                var3 = arg0;
                var1 = arg1;
                var1 = var3[var1];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 1;
                var4 = var3[var0];
                var7 = var2.bind(var5)(var4);
                var4 = var1.length;
                var6 = var0 === var4;
                var4 = 'Contains multiple values';
                var4 = var7.bind(var5)(var6, var4);
                var0 = var3[var0];
                var4 = var2.bind(var5)(var0);
                var0 = 0;
                var2 = var1[var0];
                var3 = null;
                var6 = var3 == var2;
                var3 = undefined;
                if (var6) {
                    _fun64384_ip = 96;
                    continue _fun64384
                }
            case 91:
                var3 = var2.type;
            case 96:
                var2 = 'userMention';
                var3 = var2 === var3;
                var2 = 'First value is not a user mention';
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1[var0];
                var0 = var0.userId;
                return var0;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function arg0, arg1() {
        _fun64385: for (var _fun64385_ip = 0;;) switch (_fun64385_ip) {
            case 0:
                var2 = _closure1_slot9;
                var3 = arg0;
                var1 = arg1;
                var1 = var3[var1];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 1;
                var4 = var3[var0];
                var7 = var2.bind(var5)(var4);
                var4 = var1.length;
                var6 = var0 === var4;
                var4 = 'Contains multiple values';
                var4 = var7.bind(var5)(var6, var4);
                var0 = var3[var0];
                var4 = var2.bind(var5)(var0);
                var0 = 0;
                var2 = var1[var0];
                var3 = null;
                var6 = var3 == var2;
                var3 = undefined;
                if (var6) {
                    _fun64385_ip = 96;
                    continue _fun64385
                }
            case 91:
                var3 = var2.type;
            case 96:
                var2 = 'roleMention';
                var3 = var2 === var3;
                var2 = 'First value is not a role mention';
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1[var0];
                var0 = var0.roleId;
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function arg0, arg1() {
        _fun64386: for (var _fun64386_ip = 0;;) switch (_fun64386_ip) {
            case 0:
                var1 = _closure1_slot7;
                var2 = arg0;
                var0 = arg1;
                var0 = var2[var0];
                var23 = undefined;
                var22 = var1.bind(var23)(var0);
                var0 = var22.bind(var23)();
                var1 = var0.done;
                var21 = '';
                var20 = global;
                var19 = '<@';
                var18 = '>';
                var17 = '<#';
                var16 = '<@&';
                var15 = '~';
                var14 = 0;
                var13 = '<';
                var12 = ':';
                var11 = 'a';
                var10 = 'customEmoji';
                var9 = 'emoji';
                var8 = 'roleMention';
                var7 = 'channelMention';
                var6 = 'userMention';
                var5 = 'textMention';
                var4 = 'text';
                var3 = var0;
                var2 = var21;
                var0 = var2;
                if (var1) {
                    _fun64386_ip = 416;
                    continue _fun64386
                }
            case 126:
                var1 = var3.value;
                var25 = var1.type;
                if (!(var4 !== var25)) {
                    _fun64386_ip = 383;
                    continue _fun64386
                }
            case 143:
                if (!(var5 !== var25)) {
                    _fun64386_ip = 383;
                    continue _fun64386
                }
            case 150:
                if (!(var6 !== var25)) {
                    _fun64386_ip = 355;
                    continue _fun64386
                }
            case 157:
                if (!(var7 !== var25)) {
                    _fun64386_ip = 327;
                    continue _fun64386
                }
            case 164:
                if (!(var8 !== var25)) {
                    _fun64386_ip = 298;
                    continue _fun64386
                }
            case 171:
                if (!(var9 !== var25)) {
                    _fun64386_ip = 286;
                    continue _fun64386
                }
            case 175:
                var24 = var2;
                if (!(var10 === var25)) {
                    _fun64386_ip = 392;
                    continue _fun64386
                }
            case 185:
                var25 = var1.animated;
                var28 = var21;
                if (!var25) {
                    _fun64386_ip = 200;
                    continue _fun64386
                }
            case 197:
                var28 = var11;
            case 200:
                var27 = var1.name;
                var26 = var27.replace;
                var25 = /:/g;
                var26 = var26.bind(var27)(var25, var21);
                var25 = var26.split;
                var25 = var25.bind(var26)(var15);
                var32 = var25[var14];
                var30 = var1.emojiId;
                var25 = var20.HermesInternal;
                var25 = var25.concat;
                var35 = var13;
                var34 = var28;
                var33 = var12;
                var31 = var12;
                var29 = var18;
                var25 = var35[var25](var34, var33, var32, var31, var30, var29, var28);
                var24 = var2 + var25;
                _fun64386_ip = 392;
                continue _fun64386;
            case 286:
                var25 = var1.surrogate;
                var24 = var2 + var25;
                _fun64386_ip = 392;
                continue _fun64386;
            case 298:
                var26 = var1.roleId;
                var25 = var20.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var16)(var26, var18);
                var24 = var2 + var25;
                _fun64386_ip = 392;
                continue _fun64386;
            case 327:
                var26 = var1.channelId;
                var25 = var20.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var17)(var26, var18);
                var24 = var2 + var25;
                _fun64386_ip = 392;
                continue _fun64386;
            case 355:
                var26 = var1.userId;
                var25 = var20.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var19)(var26, var18);
                var24 = var2 + var25;
                _fun64386_ip = 392;
                continue _fun64386;
            case 383:
                var1 = var1.text;
                var24 = var2 + var1;
            case 392:
                var25 = var22.bind(var23)();
                var1 = var25.done;
                var2 = var24;
                var3 = var25;
                var0 = var2;
                if (!var1) {
                    _fun64386_ip = 126;
                    continue _fun64386
                }
            case 416:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var9);
    var0 = 0;
    var9 = var11[var0];
    var0 = undefined;
    var9 = var10.bind(var0)(var9);
    var9 = var9.TRUE_OPTION_NAME;
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/application_commands/ApplicationCommandOptionUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.filterEmpty = var8;
    var2.getBoolean = var7;
    var7 = function arg0, arg1() {
        _fun64387: for (var _fun64387_ip = 0;;) switch (_fun64387_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4[var3];
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun64387_ip = 34;
                    continue _fun64387
                }
            case 19:
                var2 = _closure1_slot10;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 34:
                return var0;
        }
    };
    var2.getOptionalBoolean = var7;
    var2.getChannelId = var6;
    var6 = function arg0, arg1() {
        _fun64388: for (var _fun64388_ip = 0;;) switch (_fun64388_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4[var3];
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun64388_ip = 34;
                    continue _fun64388
                }
            case 19:
                var2 = _closure1_slot11;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 34:
                return var0;
        }
    };
    var2.getOptionalChannelId = var6;
    var2.getUserId = var5;
    var5 = function arg0, arg1() {
        _fun64389: for (var _fun64389_ip = 0;;) switch (_fun64389_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4[var3];
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun64389_ip = 34;
                    continue _fun64389
                }
            case 19:
                var2 = _closure1_slot12;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 34:
                return var0;
        }
    };
    var2.getOptionalUserId = var5;
    var2.getRoleId = var4;
    var4 = function arg0, arg1() {
        _fun64390: for (var _fun64390_ip = 0;;) switch (_fun64390_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4[var3];
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun64390_ip = 34;
                    continue _fun64390
                }
            case 19:
                var2 = _closure1_slot13;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 34:
                return var0;
        }
    };
    var2.getOptionalRoleId = var4;
    var2.getString = var3;
    var3 = function arg0, arg1() {
        _fun64391: for (var _fun64391_ip = 0;;) switch (_fun64391_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4[var3];
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun64391_ip = 34;
                    continue _fun64391
                }
            case 19:
                var2 = _closure1_slot14;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 34:
                return var0;
        }
    };
    var2.getOptionalString = var3;
    var3 = function arg0, arg1() {
        _fun64392: for (var _fun64392_ip = 0;;) switch (_fun64392_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var1 = _closure1_slot5;
                if (!(var2 !== var1)) {
                    _fun64392_ip = 223;
                    continue _fun64392
                }
            case 20:
                var _closure1_slot5 = var2;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 2;
                var1 = var1[var5];
                var7 = undefined;
                var1 = var3.bind(var7)(var1);
                var1 = var1.numberParts;
                var1 = var1[var2];
                var2 = null;
                if (!(var2 == var1)) {
                    _fun64392_ip = 91;
                    continue _fun64392
                }
            case 62:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var7)(var2);
                var2 = var2.numberParts;
                var1 = var2["en-US"];
            case 91:
                var10 = var1.group;
                var6 = var1.decimal;
                var3 = global;
                var11 = var3.RegExp;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 3;
                var5 = var8[var1];
                var9 = var2.bind(var7)(var5);
                var5 = var9.escape;
                var13 = var5.bind(var9)(var10);
                var5 = var11.prototype;
                var10 = Object.create(var5, {
                    constructor: {
                        value: var11
                    }
                });
                var5 = 'g';
                var14 = var10;
                var12 = var5;
                var9 = new var14[var11](var13, var12, var11);
                var9 = var9 instanceof Object ? var9 : var10;
                var _closure1_slot3 = var9;
                var3 = var3.RegExp;
                var1 = var8[var1];
                var2 = var2.bind(var7)(var1);
                var1 = var2.escape;
                var13 = var1.bind(var2)(var6);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var2;
                var1 = new var14[var3](var13, var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure1_slot4 = var1;
            case 223:
                var3 = var4.replace;
                var2 = _closure1_slot3;
                var1 = '';
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.replace;
                var1 = _closure1_slot4;
                var0 = '.';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.normalizeNumericString = var3;
    var1 = function arg0, arg1() {
        _fun64393: for (var _fun64393_ip = 0;;) switch (_fun64393_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = {};
                var _closure2_slot1 = var0;
                var5 = function arg0() {
                    _fun64394: for (var _fun64394_ip = 0;;) switch (_fun64394_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot0;
                            var7 = var3.options;
                            var5 = null;
                            var4 = var5 == var7;
                            var6 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun64394_ip = 49;
                                continue _fun64394
                            }
                        case 34:
                            var4 = var7.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure3_slot0;
                                var0 = var0.name;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var4.bind(var7)(var0);
                        case 49:
                            var7 = var1.type;
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 4;
                            var0 = var8[var0];
                            var0 = var4.bind(var6)(var0);
                            var0 = var0.ApplicationCommandOptionType;
                            var6 = var0.ATTACHMENT;
                            var0 = 0;
                            if (!(var7 !== var6)) {
                                _fun64394_ip = 125;
                                continue _fun64394
                            }
                        case 95:
                            if (!(var5 != var3)) {
                                _fun64394_ip = 110;
                                continue _fun64394
                            }
                        case 99:
                            var3 = var3.autocomplete;
                            var0 = 0;
                            if (var3) {
                                _fun64394_ip = 125;
                                continue _fun64394
                            }
                        case 110:
                            var3 = _closure2_slot1;
                            var2 = var1.name;
                            var3[var2] = var1;
                            var0 = undefined;
                        case 125:
                            return var0;
                    }
                };
                var2 = _closure1_slot7;
                var4 = undefined;
                var1 = arg1;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun64393_ip = 74;
                    continue _fun64393
                }
            case 49:
                var1 = var2.value;
                var1 = var5.bind(var4)(var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun64393_ip = 49;
                    continue _fun64393
                }
            case 74:
                return var0;
        }
    };
    var2.getInitialValuesFromInteractionOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4546, 44, 8013, 3328, 1645, 2]);