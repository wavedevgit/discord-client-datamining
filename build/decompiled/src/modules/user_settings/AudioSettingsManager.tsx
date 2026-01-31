// modules/user_settings/AudioSettingsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun112667: for (var _fun112667_ip = 0;;) switch (_fun112667_ip) {
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
                _fun112667_ip = 76;
                continue _fun112667;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun112670: for (var _fun112670_ip = 0;;) switch (_fun112670_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun112670_ip = 46;
                    continue _fun112670
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun112670_ip = 55;
                    continue _fun112670
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun112670_ip = 345;
                    continue _fun112670
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun112670_ip = 323;
                    continue _fun112670
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun112670_ip = 283;
                    continue _fun112670
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun112670_ip = 270;
                    continue _fun112670
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
                    _fun112670_ip = 163;
                    continue _fun112670
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun112670_ip = 179;
                    continue _fun112670
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun112670_ip = 249;
                    continue _fun112670
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun112670_ip = 249;
                    continue _fun112670
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun112670_ip = 234;
                    continue _fun112670
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun112670_ip = 247;
                    continue _fun112670
                }
            case 234:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun112670_ip = 265;
                continue _fun112670;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun112670_ip = 283;
                continue _fun112670;
            case 270:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun112670_ip = 323;
                    continue _fun112670
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
                    _fun112670_ip = 330;
                    continue _fun112670
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun112671: for (var _fun112671_ip = 0;;) switch (_fun112671_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun112671_ip = 56;
                                continue _fun112671
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
                            _fun112671_ip = 67;
                            continue _fun112671;
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
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun112672: for (var _fun112672_ip = 0;;) switch (_fun112672_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun112672_ip = 23;
                    continue _fun112672
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun112672_ip = 33;
                    continue _fun112672
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
                    _fun112672_ip = 70;
                    continue _fun112672
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun112672_ip = 55;
                    continue _fun112672
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun112673: for (var _fun112673_ip = 0;;) switch (_fun112673_ip) {
            case 0:
                var0 = arg1;
                var5 = arg2;
                var2 = undefined;
                var4 = undefined;
                if (!(var4 === var4)) {
                    _fun112673_ip = 16;
                    continue _fun112673
                }
            case 14:
                var4 = true;
            case 16:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var6 = var6.bind(var2)(var1);
                var1 = var6.coerceAudioContextForProto;
                var6 = var1.bind(var6)(var5);
                var7 = null;
                if (!(var7 != var6)) {
                    _fun112673_ip = 264;
                    continue _fun112673
                }
            case 59:
                var1 = arg0;
                var1 = var1[var6];
                var6 = var1[var0];
                if (!(var7 == var6)) {
                    _fun112673_ip = 133;
                    continue _fun112673
                }
            case 74:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 13;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var9 = var7.AudioContextSetting;
                var8 = var9.create;
                var7 = {};
                var10 = false;
                var7.muted = var10;
                var10 = _closure1_slot15;
                var10 = var10.bind(var2)(var5);
                var7.volume = var10;
                var6 = var8.bind(var9)(var7);
            case 133:
                var1[var0] = var6;
                var7 = var1[var0];
                var6 = arg3;
                var6 = var6.bind(var2)(var7);
                var7 = var1[var0];
                var6 = global;
                var8 = var6.String;
                var9 = var6.Date;
                var6 = var9.now;
                var6 = var6.bind(var9)();
                var6 = var8.bind(var2)(var6);
                var7.modifiedAt = var6;
                if (!var4) {
                    _fun112673_ip = 246;
                    continue _fun112673
                }
            case 190:
                var4 = var1[var0];
                var4 = var4.volume;
                var3 = _closure1_slot15;
                var3 = var3.bind(var2)(var5);
                var3 = var4 !== var3;
                if (var3) {
                    _fun112673_ip = 226;
                    continue _fun112673
                }
            case 216:
                var4 = var1[var0];
                var3 = var4.muted;
            case 226:
                if (var3) {
                    _fun112673_ip = 239;
                    continue _fun112673
                }
            case 229:
                var4 = var1[var0];
                var3 = var4.soundboardMuted;
            case 239:
                if (var3) {
                    _fun112673_ip = 246;
                    continue _fun112673
                }
            case 242:
                var0 = delete var1[var0];
            case 246:
                var0 = function arg0() {
                    _fun112674: for (var _fun112674_ip = 0;;) switch (_fun112674_ip) {
                        case 0:
                            var9 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.entries;
                            var3 = var1.bind(var2)(var9);
                            var7 = var3.length;
                            var6 = 300;
                            if (!(!(var7 <= var6))) {
                                _fun112674_ip = 122;
                                continue _fun112674
                            }
                        case 54:
                            var2 = var3.sort;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun112675: for (var _fun112675_ip = 0;;) switch (_fun112675_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var1 = var4[Symbol.iterator];
                                        var4 = var1().next;
                                        var9 = undefined;
                                        var2 = undefined;
                                        var3 = undefined;
                                        var5 = var4().value;
                                        var8 = var1;
                                        var8 = var8 === var9;
                                        var2 = var8;
                                        if (var8) {
                                            _fun112675_ip = 32;
                                            continue _fun112675
                                        }
                                    case 29:
                                        var3 = var5;
                                    case 32:
                                        var3 = undefined;
                                        var5 = var2;
                                        if (var5) {
                                            _fun112675_ip = 60;
                                            continue _fun112675
                                        }
                                    case 40:
                                        var4 = var4().value;
                                        var5 = var1;
                                        var5 = var5 === var9;
                                        var2 = var5;
                                        if (var5) {
                                            _fun112675_ip = 60;
                                            continue _fun112675
                                        }
                                    case 57:
                                        var3 = var4;
                                    case 60: // try_start_0
                                        var7 = var3.modifiedAt;
                                    case 66: // try_end0
                                        var3 = var2;
                                        if (var3) {
                                            _fun112675_ip = 75;
                                            continue _fun112675
                                        }
                                    case 72:
                                        var1.return();
                                    case 75:
                                        var10 = arg1;
                                        var4 = var10[Symbol.iterator];
                                        var10 = var4().next;
                                        var5 = undefined;
                                        var8 = undefined;
                                        var11 = var10().value;
                                        var12 = var4;
                                        var12 = var12 === var9;
                                        var5 = var12;
                                        if (var12) {
                                            _fun112675_ip = 105;
                                            continue _fun112675
                                        }
                                    case 102:
                                        var8 = var11;
                                    case 105:
                                        var8 = undefined;
                                        var11 = var5;
                                        if (var11) {
                                            _fun112675_ip = 133;
                                            continue _fun112675
                                        }
                                    case 113:
                                        var10 = var10().value;
                                        var11 = var4;
                                        var11 = var11 === var9;
                                        var5 = var11;
                                        if (var11) {
                                            _fun112675_ip = 133;
                                            continue _fun112675
                                        }
                                    case 130:
                                        var8 = var10;
                                    case 133: // try_start_1
                                        var6 = var8.modifiedAt;
                                    case 139: // try_end1
                                        var8 = var5;
                                        if (var8) {
                                            _fun112675_ip = 148;
                                            continue _fun112675
                                        }
                                    case 145:
                                        var4.return();
                                    case 148:
                                        var8 = global;
                                        var10 = var8.Number;
                                        var7 = var10.bind(var9)(var7);
                                        var8 = var8.Number;
                                        var6 = var8.bind(var9)(var6);
                                        var6 = var7 - var6;
                                        return var6;
                                    case 178: // catch_target1
                                        CatchBlockStart(arg_register = 3);
                                        _fun112675_ip = 184;
                                        continue _fun112675;
                                    case 182:
                                        CatchBlockStart(arg_register = 3);
                                    case 184:
                                        if (var5) {
                                            _fun112675_ip = 190;
                                            continue _fun112675
                                        }
                                    case 187:
                                        var4.return();
                                    case 190:
                                        throw var3;
                                    case 192: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        _fun112675_ip = 198;
                                        continue _fun112675;
                                    case 196:
                                        CatchBlockStart(arg_register = 0);
                                    case 198:
                                        if (var2) {
                                            _fun112675_ip = 204;
                                            continue _fun112675
                                        }
                                    case 201:
                                        var1.return();
                                    case 204:
                                        throw var0;
                                }
                            };
                            var5 = var2.bind(var3)(var1);
                            var1 = var7 - var6;
                            var4 = 0;
                            var3 = 1;
                            var2 = 0;
                            if (!(var2 < var1)) {
                                _fun112674_ip = 122;
                                continue _fun112674
                            }
                        case 89:
                            var10 = _closure1_slot8;
                            var1 = var5[var2];
                            var1 = var10.bind(var0)(var1, var3);
                            var1 = var1[var4];
                            var1 = delete var9[var1];
                            var2 = var2 + 1;
                            var1 = var7 - var6;
                            if (var2 < var1) {
                                _fun112674_ip = 89;
                                continue _fun112674
                            }
                        case 122:
                            return var0;
                    }
                };
                var0 = var0.bind(var2)(var1);
                var0 = true;
                return var0;
            case 264:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var1 = function() {
            _fun112677: for (var _fun112677_ip = 0;;) switch (_fun112677_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var5 = _closure1_slot14;
                    var6 = _closure1_slot11;
                    var2 = var6.getId;
                    var2 = var2.bind(var6)();
                    var2 = var5.bind(var0)(var2);
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun112677_ip = 140;
                        continue _fun112677
                    }
                case 67:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var4 = var3[var1];
                    var4 = var2.bind(var0)(var4);
                    var5 = var4.PreloadedUserSettingsActionCreators;
                    var4 = var5.updateAsync;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.UserSettingsDelay;
                    var3 = var1.AUTOMATED;
                    var2 = 'audioContextSettings';
                    var1 = function(arg0) { // Environment: var1
                        _fun112678: for (var _fun112678_ip = 0;;) switch (_fun112678_ip) {
                            case 0:
                                var29 = arg0;
                                var28 = global;
                                var3 = var28.Object;
                                var2 = var3.entries;
                                var4 = _closure1_slot12;
                                var0 = var4.getState;
                                var0 = var0.bind(var4)();
                                var0 = var0.settingsByContext;
                                var27 = var2.bind(var3)(var0);
                                var0 = var27.length;
                                var26 = 0;
                                var2 = var26 < var0;
                                var25 = false;
                                var6 = undefined;
                                var4 = true;
                                var24 = null;
                                var23 = 2;
                                var22 = 1;
                                var21 = 300;
                                var20 = 16;
                                var19 = 'volume';
                                var18 = false;
                                var17 = 0;
                                var16 = undefined;
                                var15 = undefined;
                                var14 = undefined;
                                var13 = undefined;
                                var12 = undefined;
                                var11 = undefined;
                                var10 = undefined;
                                var9 = undefined;
                                var8 = undefined;
                                var7 = undefined;
                                var5 = undefined;
                                var3 = undefined;
                                var0 = false;
                                if (!var2) {
                                    _fun112678_ip = 776;
                                    continue _fun112678
                                }
                            case 119:
                                var30 = var27[var17];
                                var2 = _closure1_slot8;
                                var2 = var2.bind(var6)(var30, var23);
                                var34 = var2[var26];
                                var2 = var2[var22];
                                var31 = _closure1_slot0;
                                var30 = _closure1_slot2;
                                var30 = var30[var20];
                                var31 = var31.bind(var6)(var30);
                                var30 = var31.coerceAudioContextForProto;
                                var33 = var30.bind(var31)(var34);
                                var30 = var18;
                                var32 = var5;
                                var31 = var3;
                                if (!(var24 != var33)) {
                                    _fun112678_ip = 749;
                                    continue _fun112678
                                }
                            case 185:
                                var43 = var29[var33];
                                var35 = var28.String;
                                var36 = var28.Date;
                                var33 = var36.now;
                                var33 = var33.bind(var36)();
                                var42 = var35.bind(var6)(var33);
                                var41 = {};
                                var36 = var28.Object;
                                var35 = var36.entries;
                                var33 = var2.localMutes;
                                var40 = var35.bind(var36)(var33);
                                var33 = var40.length;
                                var33 = var26 < var33;
                                var35 = 0;
                                var39 = 0;
                                if (!var33) {
                                    _fun112678_ip = 328;
                                    continue _fun112678
                                }
                            case 256:
                                var36 = var40[var35];
                                var33 = _closure1_slot8;
                                var33 = var33.bind(var6)(var36, var23);
                                var36 = var33[var26];
                                var37 = var33[var22];
                                var33 = {};
                                var33.muted = var37;
                                var37 = _closure1_slot15;
                                var37 = var37.bind(var6)(var34);
                                var33.volume = var37;
                                var33.modifiedAt = var42;
                                var33.soundboardMuted = var25;
                                var41[var36] = var33;
                                var35 = var35 + 1;
                                var33 = var40.length;
                                var39 = var35;
                                if (var39 < var33) {
                                    _fun112678_ip = 256;
                                    continue _fun112678
                                }
                            case 328:
                                var35 = var28.Object;
                                var33 = var35.entries;
                                var2 = var2.localVolumes;
                                var38 = var33.bind(var35)(var2);
                                var2 = var38.length;
                                var2 = var26 < var2;
                                var33 = 0;
                                var37 = 0;
                                if (!var2) {
                                    _fun112678_ip = 465;
                                    continue _fun112678
                                }
                            case 367:
                                var35 = var38[var33];
                                var2 = _closure1_slot8;
                                var2 = var2.bind(var6)(var35, var23);
                                var35 = var2[var26];
                                var45 = var2[var22];
                                var2 = {};
                                var2.muted = var25;
                                var2.modifiedAt = var42;
                                var48 = var41[var35];
                                var49 = var2;
                                var36 = copyDataProperties(var49, var48);
                                var44 = _closure1_slot0;
                                var36 = _closure1_slot2;
                                var36 = var36[var20];
                                var44 = var44.bind(var6)(var36);
                                var36 = var44.snapVolumeToDefault;
                                var36 = var36.bind(var44)(var45, var34);
                                var2[var19] = var36;
                                var41[var35] = var2;
                                var33 = var33 + 1;
                                var2 = var38.length;
                                var37 = var33;
                                if (var37 < var2) {
                                    _fun112678_ip = 367;
                                    continue _fun112678
                                }
                            case 465:
                                var33 = var28.Object;
                                var2 = var33.keys;
                                var2 = var2.bind(var33)(var43);
                                var36 = var2.length;
                                var33 = _closure1_slot19;
                                var34 = var28.Object;
                                var2 = var34.entries;
                                var34 = var2.bind(var34)(var41);
                                var2 = var34.entries;
                                var2 = var2.bind(var34)();
                                var35 = var33.bind(var6)(var2);
                                var44 = var35.bind(var6)();
                                var2 = var44.done;
                                var34 = var18;
                                var33 = var44;
                                var30 = var34;
                                var16 = var43;
                                var15 = var42;
                                var14 = var41;
                                var13 = var39;
                                var12 = var40;
                                var11 = var37;
                                var10 = var38;
                                var9 = var33;
                                var8 = var36;
                                var7 = var35;
                                var32 = var5;
                                var31 = var3;
                                if (var2) {
                                    _fun112678_ip = 749;
                                    continue _fun112678
                                }
                            case 582:
                                var44 = var33.value;
                                var2 = _closure1_slot8;
                                var44 = var2.bind(var6)(var44, var23);
                                var2 = var44[var26];
                                var45 = _closure1_slot8;
                                var44 = var44[var22];
                                var44 = var45.bind(var6)(var44, var23);
                                var45 = var44[var26];
                                var44 = var44[var22];
                                var46 = var21 - var36;
                                var2 = var2 + var22;
                                var2 = var46 - var2;
                                var9 = var33;
                                var30 = var34;
                                var16 = var43;
                                var15 = var42;
                                var14 = var41;
                                var13 = var39;
                                var12 = var40;
                                var11 = var37;
                                var10 = var38;
                                var8 = var36;
                                var7 = var35;
                                var32 = var45;
                                var31 = var44;
                                if (!(!(var2 <= var26))) {
                                    _fun112678_ip = 749;
                                    continue _fun112678
                                }
                            case 678:
                                var2 = var43[var45];
                                if (!(var24 == var2)) {
                                    _fun112678_ip = 692;
                                    continue _fun112678
                                }
                            case 686:
                                var43[var45] = var44;
                                var34 = true;
                            case 692:
                                var46 = var35.bind(var6)();
                                var2 = var46.done;
                                var33 = var46;
                                var30 = var34;
                                var16 = var43;
                                var15 = var42;
                                var14 = var41;
                                var13 = var39;
                                var12 = var40;
                                var11 = var37;
                                var10 = var38;
                                var9 = var33;
                                var8 = var36;
                                var7 = var35;
                                var32 = var45;
                                var31 = var44;
                                if (!var2) {
                                    _fun112678_ip = 582;
                                    continue _fun112678
                                }
                            case 749:
                                var17 = var17 + 1;
                                var2 = var27.length;
                                var18 = var30;
                                var5 = var32;
                                var3 = var31;
                                var0 = var18;
                                if (var17 < var2) {
                                    _fun112678_ip = 119;
                                    continue _fun112678
                                }
                            case 776:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 14;
                                var2 = var5[var2];
                                var2 = var3.bind(var6)(var2);
                                var3 = var2.Storage;
                                var2 = var3.set;
                                var5 = _closure1_slot14;
                                var7 = _closure1_slot11;
                                var1 = var7.getId;
                                var1 = var1.bind(var7)();
                                var1 = var5.bind(var6)(var1);
                                var1 = var2.bind(var3)(var1, var4);
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var2, var1, var3);
                case 140:
                    return var0;
            }
        };
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 15;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var5 = var4.PreloadedUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.UserSettingsDelay;
        var3 = var1.INFREQUENT_USER_ACTION;
        var2 = 'audioContextSettings';
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = false;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.drainPendingAudioSettings;
            var1 = function(arg0, arg1, arg2) { // Environment: var0
                _fun112681: for (var _fun112681_ip = 0;;) switch (_fun112681_ip) {
                    case 0:
                        var0 = arg2;
                        var _closure4_slot0 = var0;
                        var6 = _closure1_slot21;
                        var10 = _closure3_slot0;
                        var0 = undefined;
                        var9 = arg1;
                        var8 = arg0;
                        var7 = function(arg0) { // Environment: var1
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            var0 = undefined;
                            return var0;
                        };
                        var11 = undefined;
                        var3 = var11[var6](var10, var9, var8, var7, var6);
                        var1 = _closure3_slot1;
                        if (var1) {
                            _fun112681_ip = 54;
                            continue _fun112681
                        }
                    case 51:
                        var1 = var3;
                    case 54:
                        _closure3_slot1 = var1;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot1;
            return var0;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun112683: for (var _fun112683_ip = 0;;) switch (_fun112683_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.context;
                var5 = var0.userId;
                var7 = var0.volume;
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                if (!(var5 !== var1)) {
                    _fun112683_ip = 160;
                    continue _fun112683
                }
            case 40:
                var2 = _closure1_slot9;
                var1 = var2.getRemoteSessionId;
                var4 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var4)) {
                    _fun112683_ip = 110;
                    continue _fun112683
                }
            case 60:
                var3 = _closure1_slot17;
                var2 = {};
                var8 = _closure1_slot12;
                var1 = var8.isLocalMute;
                var1 = var1.bind(var8)(var5, var6);
                var2.muted = var1;
                var2.volume = var7;
                var13 = undefined;
                var12 = var4;
                var11 = var5;
                var10 = var6;
                var9 = var2;
                var1 = var13[var3](var12, var11, var10, var9, var8);
            case 110:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updatePendingSettings;
                var2 = {};
                var2.volume = var7;
                var2 = var3.bind(var4)(var6, var5, var2);
                var0 = _closure1_slot16;
                var0 = var0.bind(var1)();
            case 160:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun112684: for (var _fun112684_ip = 0;;) switch (_fun112684_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.context;
                var5 = var0.userId;
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                if (!(var5 !== var1)) {
                    _fun112684_ip = 114;
                    continue _fun112684
                }
            case 34:
                var2 = _closure1_slot12;
                var1 = var2.isLocalMute;
                var7 = var1.bind(var2)(var5, var6);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updatePendingSettings;
                var2 = {};
                var2.muted = var7;
                var2 = var3.bind(var4)(var6, var5, var2);
                var3 = _closure1_slot16;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var0 = _closure1_slot23;
                var0 = var0.bind(var1)();
            case 114:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun112685: for (var _fun112685_ip = 0;;) switch (_fun112685_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.context;
                var5 = var0.userId;
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                if (!(var5 !== var1)) {
                    _fun112685_ip = 113;
                    continue _fun112685
                }
            case 34:
                var2 = _closure1_slot10;
                var1 = var2.isLocalSoundboardMuted;
                var7 = var1.bind(var2)(var5);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updatePendingSettings;
                var2 = {};
                var2.soundboardMuted = var7;
                var2 = var3.bind(var4)(var6, var5, var2);
                var3 = _closure1_slot16;
                var2 = var3.cancel;
                var2 = var2.bind(var3)();
                var0 = _closure1_slot23;
                var0 = var0.bind(var1)();
            case 113:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun112686: for (var _fun112686_ip = 0;;) switch (_fun112686_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun112686_ip = 89;
                    continue _fun112686
                }
            case 9:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var5 = var4[var2];
                var0 = undefined;
                var5 = var3.bind(var0)(var5);
                var6 = var5.PreloadedUserSettingsActionCreators;
                var5 = var6.updateAsync;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.UserSettingsDelay;
                var4 = var2.INFREQUENT_USER_ACTION;
                var3 = 'audioContextSettings';
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var1.user = var0;
                    var0 = {};
                    var1.stream = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2, var4);
                return var0;
            case 89:
                var8 = "Cannot destructure 'undefined' or 'null'.";
                var9 = var1;
                var0 = throwTypeError(var9, var8);
                var0 = undefined;
                throw var0;
        }
    };
    var _closure1_slot27 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'AudioContextSettingsMigrated:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        _fun112689: for (var _fun112689_ip = 0;;) switch (_fun112689_ip) {
            case 0:
                var0 = _closure1_slot13;
                var2 = var0.STREAM;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun112689_ip = 56;
                    continue _fun112689
                }
            case 20:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.AudioSettingsDefaultVolumes;
                var0 = var0.USER;
                _fun112689_ip = 90;
                continue _fun112689;
            case 56:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AudioSettingsDefaultVolumes;
                var0 = var1.STREAM;
            case 90:
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 17;
    var7 = var5[var3];
    var10 = var6.bind(var0)(var7);
    var9 = var10.debounce;
    var8 = function() { // Environment: var1
        var1 = _closure1_slot23;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var7 = 2000;
    var7 = var9.bind(var10)(var8, var7);
    var _closure1_slot16 = var7;
    var3 = var5[var3];
    var10 = var6.bind(var0)(var3);
    var9 = var10.debounce;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.remoteAudioSettingsUpdate;
    var7 = {};
    var3 = 500;
    var7.maxWait = var3;
    var3 = var9.bind(var10)(var8, var3, var7);
    var _closure1_slot17 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun112692: for (var _fun112692_ip = 0;;) switch (_fun112692_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun112692_ip = 84;
                        continue _fun112692
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun112692_ip = 118;
                    continue _fun112692;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot22;
                    var1.POST_CONNECTION_OPEN = var3;
                    var3 = _closure1_slot24;
                    var1.AUDIO_SET_LOCAL_VOLUME = var3;
                    var3 = _closure1_slot25;
                    var1.AUDIO_TOGGLE_LOCAL_MUTE = var3;
                    var3 = _closure1_slot26;
                    var1.AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE = var3;
                    var2 = _closure1_slot27;
                    var1.MEDIA_ENGINE_RESET_SETTINGS = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var15 = var3;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/AudioSettingsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 57, 3478, 3915, 1216, 3435, 3469, 8172, 21, 1311, 587, 1355, 8171, 22, 12340, 8255, 4263, 2]);