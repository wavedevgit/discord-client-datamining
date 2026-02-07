// ../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var45 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var46 = dependencyMap;
    var _closure1_slot0 = var45;
    var _closure1_slot1 = var46;
    var0 = function arg0, arg1, arg2() {
        _fun28516: for (var _fun28516_ip = 0;;) switch (_fun28516_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot49;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun28516_ip = 51;
                    continue _fun28516
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun28516_ip = 92;
                continue _fun28516;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun28516_ip = 71;
                    continue _fun28516
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function() {
        _fun28517: for (var _fun28517_ip = 0;;) switch (_fun28517_ip) {
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
                _fun28517_ip = 74;
                continue _fun28517;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot49 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var7 = 0;
    var1 = var46[var7];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var6 = 1;
    var1 = var46[var6];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var5 = 2;
    var1 = var46[var5];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var4 = 3;
    var1 = var46[var4];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var3 = 4;
    var1 = var46[var3];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var46[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var43 = {};
    var43.UNSPECIFIED = var7;
    var1 = 'UNSPECIFIED';
    var43[var7] = var1;
    var43.EXCLUDE = var6;
    var8 = 'EXCLUDE';
    var43[var6] = var8;
    var43.OVERRIDE = var5;
    var8 = 'OVERRIDE';
    var43[var5] = var8;
    var43.REQUIRE = var4;
    var8 = 'REQUIRE';
    var43[var4] = var8;
    var _closure1_slot8 = var43;
    var42 = {};
    var42.REGULAR = var7;
    var8 = 'REGULAR';
    var42[var7] = var8;
    var42.HOLDOUT = var6;
    var8 = 'HOLDOUT';
    var42[var6] = var8;
    var _closure1_slot9 = var42;
    var41 = {};
    var41.UNSPECIFIED = var7;
    var41[var7] = var1;
    var41.USER = var6;
    var1 = 'USER';
    var41[var6] = var1;
    var41.CLIENT = var5;
    var1 = 'CLIENT';
    var41[var5] = var1;
    var41.GUILD = var4;
    var1 = 'GUILD';
    var41[var4] = var1;
    var41.UTILITY = var3;
    var1 = 'UTILITY';
    var41[var3] = var1;
    var1 = 6;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'type',
                'kind': 'enum'
            };
            var5 = function() {
                var1 = _closure1_slot8;
                var0 = ['discord_protos.discord_experimentation.v1.Rule.Type'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(5);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'filters',
                'kind': 'message',
                'repeat': 1
            };
            var7 = function() {
                var0 = _closure1_slot11;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'override',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot10;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'is_sunset_rule',
                'kind': 'scalar',
                'T': 8
            };
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'subtype',
                'kind': 'enum'
            };
            var6 = function() {
                var1 = _closure1_slot9;
                var0 = ['discord_protos.discord_experimentation.v1.Rule.Subtype'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var6;
            var5[4] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Rule'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28526: for (var _fun28526_ip = 0;;) switch (_fun28526_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'type': 0,
                        'filters': null,
                        'isSunsetRule': false,
                        'subtype': 0
                    };
                    var1 = new Array(0);
                    var0.filters = var1;
                    var10 = false;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28526_ip = 132;
                        continue _fun28526
                    }
                case 102:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 132:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28527: for (var _fun28527_ip = 0;;) switch (_fun28527_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var17 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28527_ip = 27;
                        continue _fun28527
                    }
                case 18:
                    var1 = var17.create;
                    var0 = var1.bind(var17)();
                case 27:
                    var2 = var19.pos;
                    var1 = arg1;
                    var16 = var2 + var1;
                    var1 = var19.pos;
                    var1 = var1 < var16;
                    var15 = undefined;
                    var13 = 6;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28527_ip = 536;
                        continue _fun28527
                    }
                case 91:
                    var1 = var19.tag;
                    var20 = var1.bind(var19)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var15)(var20, var6);
                    var28 = var1[var4];
                    var27 = var1[var5];
                    if (!(var5 !== var28)) {
                        _fun28527_ip = 496;
                        continue _fun28527
                    }
                case 125:
                    if (!(var6 !== var28)) {
                        _fun28527_ip = 445;
                        continue _fun28527
                    }
                case 132:
                    if (!(var7 !== var28)) {
                        _fun28527_ip = 392;
                        continue _fun28527
                    }
                case 139:
                    if (!(var8 !== var28)) {
                        _fun28527_ip = 365;
                        continue _fun28527
                    }
                case 146:
                    if (!(var9 !== var28)) {
                        _fun28527_ip = 338;
                        continue _fun28527
                    }
                case 153:
                    var22 = var18.readUnknownField;
                    if (!(var10 !== var22)) {
                        _fun28527_ip = 258;
                        continue _fun28527
                    }
                case 163:
                    var1 = var19.skip;
                    var1 = var1.bind(var19)(var27);
                    var21 = var22;
                    var20 = var1;
                    if (!(var11 !== var22)) {
                        _fun28527_ip = 518;
                        continue _fun28527
                    }
                case 187:
                    var24 = var22;
                    if (!(var12 === var22)) {
                        _fun28527_ip = 223;
                        continue _fun28527
                    }
                case 194:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var13];
                    var23 = var25.bind(var15)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 223:
                    var33 = var17.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var27;
                    var29 = var1;
                    var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                    var21 = var22;
                    var20 = var1;
                    _fun28527_ip = 518;
                    continue _fun28527;
                case 258:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var29 = var17.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var27;
                    var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var34 = var22;
                    var1 = new var34[var23](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 338:
                    var1 = var19.int32;
                    var1 = var1.bind(var19)();
                    var0.subtype = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28527_ip = 518;
                    continue _fun28527;
                case 365:
                    var1 = var19.bool;
                    var1 = var1.bind(var19)();
                    var0.isSunsetRule = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28527_ip = 518;
                    continue _fun28527;
                case 392:
                    var24 = _closure1_slot10;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.override;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.override = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28527_ip = 518;
                    continue _fun28527;
                case 445:
                    var23 = var0.filters;
                    var22 = var23.push;
                    var25 = _closure1_slot11;
                    var24 = var25.internalBinaryRead;
                    var1 = var19.uint32;
                    var1 = var1.bind(var19)();
                    var1 = var24.bind(var25)(var19, var1, var18);
                    var1 = var22.bind(var23)(var1);
                    var21 = var3;
                    var20 = var2;
                    _fun28527_ip = 518;
                    continue _fun28527;
                case 496:
                    var1 = var19.int32;
                    var1 = var1.bind(var19)();
                    var0.type = var1;
                    var21 = var3;
                    var20 = var2;
                case 518:
                    var1 = var19.pos;
                    var3 = var21;
                    var2 = var20;
                    if (var1 < var16) {
                        _fun28527_ip = 91;
                        continue _fun28527
                    }
                case 536:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28528: for (var _fun28528_ip = 0;;) switch (_fun28528_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.type;
                    var8 = 0;
                    if (!(var8 !== var1)) {
                        _fun28528_ip = 86;
                        continue _fun28528
                    }
                case 20:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.type;
                    var1 = var3.bind(var5)(var1);
                case 86:
                    var1 = var4.filters;
                    var1 = var1.length;
                    var5 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var9 = 2;
                    var7 = 0;
                    if (!var5) {
                        _fun28528_ip = 220;
                        continue _fun28528
                    }
                case 117:
                    var12 = _closure1_slot11;
                    var11 = var12.internalBinaryWrite;
                    var5 = var4.filters;
                    var10 = var5[var7];
                    var13 = var0.tag;
                    var14 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var14.bind(var3)(var5);
                    var5 = var5.WireType;
                    var5 = var5.LengthDelimited;
                    var13 = var13.bind(var0)(var9, var5);
                    var5 = var13.fork;
                    var5 = var5.bind(var13)();
                    var10 = var11.bind(var12)(var10, var5, var2);
                    var5 = var10.join;
                    var5 = var5.bind(var10)();
                    var7 = var7 + 1;
                    var5 = var4.filters;
                    var5 = var5.length;
                    if (var7 < var5) {
                        _fun28528_ip = 117;
                        continue _fun28528
                    }
                case 220:
                    var5 = var4.override;
                    if (!var5) {
                        _fun28528_ip = 313;
                        continue _fun28528
                    }
                case 229:
                    var10 = _closure1_slot10;
                    var9 = var10.internalBinaryWrite;
                    var7 = var4.override;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var11.bind(var3)(var5);
                    var5 = var5.WireType;
                    var11 = var5.LengthDelimited;
                    var5 = 3;
                    var11 = var12.bind(var0)(var5, var11);
                    var5 = var11.fork;
                    var5 = var5.bind(var11)();
                    var7 = var9.bind(var10)(var7, var5, var2);
                    var5 = var7.join;
                    var5 = var5.bind(var7)();
                case 313:
                    var7 = var4.isSunsetRule;
                    var5 = false;
                    if (!(var5 !== var7)) {
                        _fun28528_ip = 384;
                        continue _fun28528
                    }
                case 325:
                    var10 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.WireType;
                    var9 = var7.Varint;
                    var7 = 4;
                    var10 = var10.bind(var0)(var7, var9);
                    var9 = var10.bool;
                    var7 = var4.isSunsetRule;
                    var7 = var9.bind(var10)(var7);
                case 384:
                    var7 = var4.subtype;
                    if (!(var8 !== var7)) {
                        _fun28528_ip = 453;
                        continue _fun28528
                    }
                case 394:
                    var9 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.Varint;
                    var7 = 5;
                    var9 = var9.bind(var0)(var7, var8);
                    var8 = var9.int32;
                    var7 = var4.subtype;
                    var7 = var8.bind(var9)(var7);
                case 453:
                    var2 = var2.writeUnknownFields;
                    if (!(var5 !== var2)) {
                        _fun28528_ip = 515;
                        continue _fun28528
                    }
                case 463:
                    var5 = 1;
                    if (!(var5 == var2)) {
                        _fun28528_ip = 499;
                        continue _fun28528
                    }
                case 470:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 499:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 515:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var40 = var3 instanceof Object ? var3 : var4;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'variation_id',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Override'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28531: for (var _fun28531_ip = 0;;) switch (_fun28531_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.variationId = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28531_ip = 117;
                        continue _fun28531
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28532: for (var _fun28532_ip = 0;;) switch (_fun28532_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28532_ip = 27;
                        continue _fun28532
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28532_ip = 338;
                        continue _fun28532
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28532_ip = 298;
                        continue _fun28532
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28532_ip = 218;
                        continue _fun28532
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28532_ip = 320;
                        continue _fun28532
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28532_ip = 186;
                        continue _fun28532
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28532_ip = 320;
                    continue _fun28532;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.int32;
                    var1 = var1.bind(var16)();
                    var0.variationId = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28532_ip = 82;
                        continue _fun28532
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28533: for (var _fun28533_ip = 0;;) switch (_fun28533_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.variationId;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun28533_ip = 85;
                        continue _fun28533
                    }
                case 18:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.variationId;
                    var1 = var2.bind(var3)(var1);
                case 85:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28533_ip = 162;
                        continue _fun28533
                    }
                case 100:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28533_ip = 144;
                        continue _fun28533
                    }
                case 107:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 144:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 162:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var39 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot10 = var39;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 2,
                'name': 'client_version',
                'kind': 'message',
                'oneof': 'filter'
            };
            var5 = function() {
                var0 = _closure1_slot28;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(23);
            var5[0] = var0;
            var0 = {
                'no': 3,
                'name': 'client_os',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot23;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 4,
                'name': 'staff',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot12;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 5,
                'name': 'user_in_guild',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot13;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 6,
                'name': 'user_ids',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot14;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 7,
                'name': 'client_locale',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 8,
                'name': 'client_location',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot18;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 9,
                'name': 'client_ip',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot22;
                return var0;
            };
            var0.T = var7;
            var5[7] = var0;
            var0 = {
                'no': 10,
                'name': 'user_locale',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot15;
                return var0;
            };
            var0.T = var7;
            var5[8] = var0;
            var0 = {
                'no': 11,
                'name': 'bot',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot34;
                return var0;
            };
            var0.T = var7;
            var5[9] = var0;
            var0 = {
                'no': 12,
                'name': 'user_age_range',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot35;
                return var0;
            };
            var0.T = var7;
            var5[10] = var0;
            var0 = {
                'no': 13,
                'name': 'user_id_range',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot37;
                return var0;
            };
            var0.T = var7;
            var5[11] = var0;
            var0 = {
                'no': 14,
                'name': 'user_has_flag',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot38;
                return var0;
            };
            var0.T = var7;
            var5[12] = var0;
            var0 = {
                'no': 15,
                'name': 'unit_id_in_range_by_hash',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot39;
                return var0;
            };
            var0.T = var7;
            var5[13] = var0;
            var0 = {
                'no': 16,
                'name': 'client_release_channel',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot40;
                return var0;
            };
            var0.T = var7;
            var5[14] = var0;
            var0 = {
                'no': 17,
                'name': 'always',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot41;
                return var0;
            };
            var0.T = var7;
            var5[15] = var0;
            var0 = {
                'no': 18,
                'name': 'client_system_locale',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot17;
                return var0;
            };
            var0.T = var7;
            var5[16] = var0;
            var0 = {
                'no': 19,
                'name': 'unit_id_in_experiment',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot42;
                return var0;
            };
            var0.T = var7;
            var5[17] = var0;
            var0 = {
                'no': 20,
                'name': 'user_premium_type',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot43;
                return var0;
            };
            var0.T = var7;
            var5[18] = var0;
            var0 = {
                'no': 21,
                'name': 'unit_id_matches_filter_snapshot',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot44;
                return var0;
            };
            var0.T = var7;
            var5[19] = var0;
            var0 = {
                'no': 22,
                'name': 'guild_ids',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot45;
                return var0;
            };
            var0.T = var7;
            var5[20] = var0;
            var0 = {
                'no': 25,
                'name': 'guild_member_count_range',
                'kind': 'message',
                'oneof': 'filter'
            };
            var7 = function() {
                var0 = _closure1_slot46;
                return var0;
            };
            var0.T = var7;
            var5[21] = var0;
            var0 = {
                'no': 26,
                'name': 'guild_has_feature',
                'kind': 'message',
                'oneof': 'filter'
            };
            var6 = function() {
                var0 = _closure1_slot47;
                return var0;
            };
            var0.T = var6;
            var5[22] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Filter'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28559: for (var _fun28559_ip = 0;;) switch (_fun28559_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var5 = undefined;
                    var1.oneofKind = var5;
                    var0.filter = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28559_ip = 121;
                        continue _fun28559
                    }
                case 91:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 121:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28560: for (var _fun28560_ip = 0;;) switch (_fun28560_ip) {
                case 0:
                    var41 = arg0;
                    var40 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun28560_ip = 27;
                        continue _fun28560
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var41.pos;
                    var2 = arg1;
                    var39 = var3 + var2;
                    var2 = var41.pos;
                    var2 = var2 < var39;
                    var38 = undefined;
                    var36 = 6;
                    var35 = true;
                    var34 = false;
                    var33 = 'throw';
                    var32 = 'clientVersion';
                    var31 = 'clientOs';
                    var30 = 'staff';
                    var29 = 'userInGuild';
                    var28 = 'userIds';
                    var27 = 'clientLocale';
                    var26 = 'clientLocation';
                    var25 = 'clientIp';
                    var24 = 'userLocale';
                    var23 = 'bot';
                    var22 = 'userAgeRange';
                    var21 = 'userIdRange';
                    var20 = 'userHasFlag';
                    var19 = 'unitIdInRangeByHash';
                    var18 = 'clientReleaseChannel';
                    var17 = 'always';
                    var16 = 'clientSystemLocale';
                    var15 = 'unitIdInExperiment';
                    var14 = 'userPremiumType';
                    var13 = 'unitIdMatchesFilterSnapshot';
                    var12 = 'guildIds';
                    var11 = 'guildMemberCountRange';
                    var10 = 'guildHasFeature';
                    var9 = 2;
                    var8 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun28560_ip = 2010;
                        continue _fun28560
                    }
                case 174:
                    var2 = var41.tag;
                    var6 = var2.bind(var41)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var38)(var6, var9);
                    var7 = var2[var8];
                    var6 = var2[var5];
                    SwitchImm(value_reg = 7, jump_table_address = 2092, default_jump_address = 1895, unsigned_min_value = 2, unsigned_max_value = 26) // Switch table: [1825, 1752, 1679, 1606, 1533, 1460, 1387, 1314, 1241, 1168, 1095, 1022, 949, 876, 803, 730, 657, 584, 511, 438, 365, 1895, 1895, 292, 219];
                case 219:
                    var2 = {};
                    var2.oneofKind = var10;
                    var45 = _closure1_slot47;
                    var44 = var45.internalBinaryRead;
                    var42 = var41.uint32;
                    var51 = var42.bind(var41)();
                    var42 = var0.filter;
                    var49 = var42.guildHasFeature;
                    var53 = var45;
                    var52 = var41;
                    var50 = var40;
                    var42 = var53[var44](var52, var51, var50, var49, var48);
                    var2.guildHasFeature = var42;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 292:
                    var2 = {};
                    var2.oneofKind = var11;
                    var47 = _closure1_slot46;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.guildMemberCountRange;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.guildMemberCountRange = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 365:
                    var2 = {};
                    var2.oneofKind = var12;
                    var47 = _closure1_slot45;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.guildIds;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.guildIds = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 438:
                    var2 = {};
                    var2.oneofKind = var13;
                    var47 = _closure1_slot44;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.unitIdMatchesFilterSnapshot;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.unitIdMatchesFilterSnapshot = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 511:
                    var2 = {};
                    var2.oneofKind = var14;
                    var47 = _closure1_slot43;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userPremiumType;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userPremiumType = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 584:
                    var2 = {};
                    var2.oneofKind = var15;
                    var47 = _closure1_slot42;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.unitIdInExperiment;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.unitIdInExperiment = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 657:
                    var2 = {};
                    var2.oneofKind = var16;
                    var47 = _closure1_slot17;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientSystemLocale;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientSystemLocale = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 730:
                    var2 = {};
                    var2.oneofKind = var17;
                    var47 = _closure1_slot41;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.always;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.always = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 803:
                    var2 = {};
                    var2.oneofKind = var18;
                    var47 = _closure1_slot40;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientReleaseChannel;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientReleaseChannel = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 876:
                    var2 = {};
                    var2.oneofKind = var19;
                    var47 = _closure1_slot39;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.unitIdInRangeByHash;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.unitIdInRangeByHash = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 949:
                    var2 = {};
                    var2.oneofKind = var20;
                    var47 = _closure1_slot38;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userHasFlag;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userHasFlag = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1022:
                    var2 = {};
                    var2.oneofKind = var21;
                    var47 = _closure1_slot37;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userIdRange;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userIdRange = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1095:
                    var2 = {};
                    var2.oneofKind = var22;
                    var47 = _closure1_slot35;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userAgeRange;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userAgeRange = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1168:
                    var2 = {};
                    var2.oneofKind = var23;
                    var47 = _closure1_slot34;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.bot;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.bot = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1241:
                    var2 = {};
                    var2.oneofKind = var24;
                    var47 = _closure1_slot15;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userLocale;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userLocale = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1314:
                    var2 = {};
                    var2.oneofKind = var25;
                    var47 = _closure1_slot22;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientIp;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientIp = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1387:
                    var2 = {};
                    var2.oneofKind = var26;
                    var47 = _closure1_slot18;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientLocation;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientLocation = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1460:
                    var2 = {};
                    var2.oneofKind = var27;
                    var47 = _closure1_slot16;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientLocale;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientLocale = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1533:
                    var2 = {};
                    var2.oneofKind = var28;
                    var47 = _closure1_slot14;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userIds;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userIds = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1606:
                    var2 = {};
                    var2.oneofKind = var29;
                    var47 = _closure1_slot13;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.userInGuild;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.userInGuild = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1679:
                    var2 = {};
                    var2.oneofKind = var30;
                    var47 = _closure1_slot12;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.staff;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.staff = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1752:
                    var2 = {};
                    var2.oneofKind = var31;
                    var47 = _closure1_slot23;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientOs;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientOs = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1825:
                    var2 = {};
                    var2.oneofKind = var32;
                    var47 = _closure1_slot28;
                    var46 = var47.internalBinaryRead;
                    var44 = var41.uint32;
                    var51 = var44.bind(var41)();
                    var44 = var0.filter;
                    var49 = var44.clientVersion;
                    var53 = var47;
                    var52 = var41;
                    var50 = var40;
                    var44 = var53[var46](var52, var51, var50, var49, var48);
                    var2.clientVersion = var44;
                    var0.filter = var2;
                    var43 = var4;
                    var42 = var3;
                    _fun28560_ip = 1992;
                    continue _fun28560;
                case 1895:
                    var44 = var40.readUnknownField;
                    if (!(var33 !== var44)) {
                        _fun28560_ip = 2012;
                        continue _fun28560
                    }
                case 1905:
                    var2 = var41.skip;
                    var2 = var2.bind(var41)(var6);
                    var43 = var44;
                    var42 = var2;
                    if (!(var34 !== var44)) {
                        _fun28560_ip = 1992;
                        continue _fun28560
                    }
                case 1926:
                    var46 = var44;
                    if (!(var35 === var44)) {
                        _fun28560_ip = 1962;
                        continue _fun28560
                    }
                case 1933:
                    var47 = _closure1_slot0;
                    var45 = _closure1_slot1;
                    var45 = var45[var36];
                    var45 = var47.bind(var38)(var45);
                    var45 = var45.UnknownFieldHandler;
                    var46 = var45.onRead;
                case 1962:
                    var52 = var1.typeName;
                    var53 = undefined;
                    var51 = var0;
                    var50 = var7;
                    var49 = var6;
                    var48 = var2;
                    var45 = var53[var46](var52, var51, var50, var49, var48, var47);
                    var43 = var44;
                    var42 = var2;
                case 1992:
                    var2 = var41.pos;
                    var4 = var43;
                    var3 = var42;
                    if (var2 < var39) {
                        _fun28560_ip = 174;
                        continue _fun28560
                    }
                case 2010:
                    return var0;
                case 2012:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var48 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var53 = 'Unknown field ';
                    var51 = ' (wire type ';
                    var49 = ') for ';
                    var52 = var7;
                    var50 = var6;
                    var52 = var53[var4](var52, var51, var50, var49, var48, var47);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var53 = var1;
                    var0 = new var53[var2](var52, var51);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28561: for (var _fun28561_ip = 0;;) switch (_fun28561_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientVersion';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 125;
                        continue _fun28561
                    }
                case 28:
                    var6 = _closure1_slot28;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 125:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientOs';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 241;
                        continue _fun28561
                    }
                case 144:
                    var6 = _closure1_slot23;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientOs;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 241:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'staff';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 357;
                        continue _fun28561
                    }
                case 260:
                    var6 = _closure1_slot12;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.staff;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 357:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userInGuild';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 473;
                        continue _fun28561
                    }
                case 376:
                    var6 = _closure1_slot13;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userInGuild;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 5;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 473:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userIds';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 586;
                        continue _fun28561
                    }
                case 492:
                    var6 = _closure1_slot14;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userIds;
                    var8 = var0.tag;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 6;
                    var9 = var2[var7];
                    var2 = undefined;
                    var2 = var10.bind(var2)(var9);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var7 = var8.bind(var0)(var7, var2);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 586:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientLocale';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 702;
                        continue _fun28561
                    }
                case 605:
                    var6 = _closure1_slot16;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientLocale;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 7;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 702:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientLocation';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 818;
                        continue _fun28561
                    }
                case 721:
                    var6 = _closure1_slot18;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientLocation;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 8;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 818:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientIp';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 934;
                        continue _fun28561
                    }
                case 837:
                    var6 = _closure1_slot22;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientIp;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 9;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 934:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userLocale';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1050;
                        continue _fun28561
                    }
                case 953:
                    var6 = _closure1_slot15;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userLocale;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 10;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1050:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'bot';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1166;
                        continue _fun28561
                    }
                case 1069:
                    var6 = _closure1_slot34;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.bot;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 11;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1166:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userAgeRange';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1282;
                        continue _fun28561
                    }
                case 1185:
                    var6 = _closure1_slot35;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userAgeRange;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 12;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1282:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userIdRange';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1398;
                        continue _fun28561
                    }
                case 1301:
                    var6 = _closure1_slot37;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userIdRange;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 13;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1398:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userHasFlag';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1514;
                        continue _fun28561
                    }
                case 1417:
                    var6 = _closure1_slot38;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userHasFlag;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 14;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1514:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'unitIdInRangeByHash';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1630;
                        continue _fun28561
                    }
                case 1533:
                    var6 = _closure1_slot39;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.unitIdInRangeByHash;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 15;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1630:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientReleaseChannel';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1746;
                        continue _fun28561
                    }
                case 1649:
                    var6 = _closure1_slot40;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientReleaseChannel;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 16;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1746:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'always';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1862;
                        continue _fun28561
                    }
                case 1765:
                    var6 = _closure1_slot41;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.always;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 17;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1862:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'clientSystemLocale';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 1978;
                        continue _fun28561
                    }
                case 1881:
                    var6 = _closure1_slot17;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.clientSystemLocale;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 18;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1978:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'unitIdInExperiment';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2094;
                        continue _fun28561
                    }
                case 1997:
                    var6 = _closure1_slot42;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.unitIdInExperiment;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 19;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2094:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'userPremiumType';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2210;
                        continue _fun28561
                    }
                case 2113:
                    var6 = _closure1_slot43;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.userPremiumType;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 20;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2210:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'unitIdMatchesFilterSnapshot';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2326;
                        continue _fun28561
                    }
                case 2229:
                    var6 = _closure1_slot44;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.unitIdMatchesFilterSnapshot;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 21;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2326:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'guildIds';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2442;
                        continue _fun28561
                    }
                case 2345:
                    var6 = _closure1_slot45;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.guildIds;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 22;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2442:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'guildMemberCountRange';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2558;
                        continue _fun28561
                    }
                case 2461:
                    var6 = _closure1_slot46;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.guildMemberCountRange;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 25;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2558:
                    var2 = var4.filter;
                    var3 = var2.oneofKind;
                    var2 = 'guildHasFeature';
                    if (!(var2 === var3)) {
                        _fun28561_ip = 2674;
                        continue _fun28561
                    }
                case 2577:
                    var6 = _closure1_slot47;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.filter;
                    var3 = var3.guildHasFeature;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 26;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 2674:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28561_ip = 2748;
                        continue _fun28561
                    }
                case 2686:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28561_ip = 2730;
                        continue _fun28561
                    }
                case 2693:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 2730:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 2748:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var38 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot11 = var38;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'work_accounts',
                'kind': 'scalar',
                'T': 8
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'personal_accounts',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.StaffUsers'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28564: for (var _fun28564_ip = 0;;) switch (_fun28564_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'workAccounts': false,
                        'personalAccounts': false
                    };
                    var10 = false;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28564_ip = 118;
                        continue _fun28564
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28565: for (var _fun28565_ip = 0;;) switch (_fun28565_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28565_ip = 27;
                        continue _fun28565
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28565_ip = 372;
                        continue _fun28565
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28565_ip = 332;
                        continue _fun28565
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28565_ip = 308;
                        continue _fun28565
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28565_ip = 228;
                        continue _fun28565
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28565_ip = 354;
                        continue _fun28565
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28565_ip = 193;
                        continue _fun28565
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28565_ip = 354;
                    continue _fun28565;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.personalAccounts = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28565_ip = 354;
                    continue _fun28565;
                case 332:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.workAccounts = var1;
                    var18 = var3;
                    var17 = var2;
                case 354:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28565_ip = 82;
                        continue _fun28565
                    }
                case 372:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28566: for (var _fun28566_ip = 0;;) switch (_fun28566_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.workAccounts;
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun28566_ip = 85;
                        continue _fun28566
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.workAccounts;
                    var2 = var3.bind(var5)(var2);
                case 85:
                    var2 = var4.personalAccounts;
                    if (!(var1 !== var2)) {
                        _fun28566_ip = 162;
                        continue _fun28566
                    }
                case 95:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 2;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.personalAccounts;
                    var2 = var3.bind(var5)(var2);
                case 162:
                    var2 = arg2;
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28566_ip = 237;
                        continue _fun28566
                    }
                case 175:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28566_ip = 219;
                        continue _fun28566
                    }
                case 182:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 219:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 237:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var37 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot12 = var37;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'guild_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserInGuild'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28569: for (var _fun28569_ip = 0;;) switch (_fun28569_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.guildIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28569_ip = 119;
                        continue _fun28569
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28570: for (var _fun28570_ip = 0;;) switch (_fun28570_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28570_ip = 27;
                        continue _fun28570
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28570_ip = 498;
                        continue _fun28570
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun28570_ip = 309;
                        continue _fun28570
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28570_ip = 229;
                        continue _fun28570
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28570_ip = 477;
                        continue _fun28570
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28570_ip = 191;
                        continue _fun28570
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28570_ip = 477;
                    continue _fun28570;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28570_ip = 387;
                        continue _fun28570
                    }
                case 341:
                    var22 = var0.guildIds;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28570_ip = 477;
                    continue _fun28570;
                case 387:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28570_ip = 477;
                        continue _fun28570
                    }
                case 424:
                    var23 = var0.guildIds;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28570_ip = 424;
                        continue _fun28570
                    }
                case 477:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28570_ip = 84;
                        continue _fun28570
                    }
                case 498:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28571: for (var _fun28571_ip = 0;;) switch (_fun28571_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28571_ip = 151;
                        continue _fun28571
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28571_ip = 142;
                        continue _fun28571
                    }
                case 103:
                    var3 = var0.fixed64;
                    var1 = var4.guildIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28571_ip = 103;
                        continue _fun28571
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28571_ip = 228;
                        continue _fun28571
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28571_ip = 210;
                        continue _fun28571
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var36 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot13 = var36;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'user_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserIds'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28574: for (var _fun28574_ip = 0;;) switch (_fun28574_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.userIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28574_ip = 119;
                        continue _fun28574
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28575: for (var _fun28575_ip = 0;;) switch (_fun28575_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28575_ip = 27;
                        continue _fun28575
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28575_ip = 498;
                        continue _fun28575
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun28575_ip = 309;
                        continue _fun28575
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28575_ip = 229;
                        continue _fun28575
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28575_ip = 477;
                        continue _fun28575
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28575_ip = 191;
                        continue _fun28575
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28575_ip = 477;
                    continue _fun28575;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28575_ip = 387;
                        continue _fun28575
                    }
                case 341:
                    var22 = var0.userIds;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28575_ip = 477;
                    continue _fun28575;
                case 387:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28575_ip = 477;
                        continue _fun28575
                    }
                case 424:
                    var23 = var0.userIds;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28575_ip = 424;
                        continue _fun28575
                    }
                case 477:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28575_ip = 84;
                        continue _fun28575
                    }
                case 498:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28576: for (var _fun28576_ip = 0;;) switch (_fun28576_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.userIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28576_ip = 151;
                        continue _fun28576
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.userIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28576_ip = 142;
                        continue _fun28576
                    }
                case 103:
                    var3 = var0.fixed64;
                    var1 = var4.userIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.userIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28576_ip = 103;
                        continue _fun28576
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28576_ip = 228;
                        continue _fun28576
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28576_ip = 210;
                        continue _fun28576
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var35 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot14 = var35;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'locales',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserLocale'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28579: for (var _fun28579_ip = 0;;) switch (_fun28579_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.locales = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28579_ip = 119;
                        continue _fun28579
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28580: for (var _fun28580_ip = 0;;) switch (_fun28580_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28580_ip = 27;
                        continue _fun28580
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28580_ip = 347;
                        continue _fun28580
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28580_ip = 298;
                        continue _fun28580
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28580_ip = 218;
                        continue _fun28580
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28580_ip = 329;
                        continue _fun28580
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28580_ip = 186;
                        continue _fun28580
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28580_ip = 329;
                    continue _fun28580;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.locales;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28580_ip = 82;
                        continue _fun28580
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28581: for (var _fun28581_ip = 0;;) switch (_fun28581_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.locales;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28581_ip = 114;
                        continue _fun28581
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.locales;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.locales;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28581_ip = 37;
                        continue _fun28581
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28581_ip = 178;
                        continue _fun28581
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28581_ip = 162;
                        continue _fun28581
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var34 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot15 = var34;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'locales',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientLocale'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28584: for (var _fun28584_ip = 0;;) switch (_fun28584_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.locales = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28584_ip = 119;
                        continue _fun28584
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28585: for (var _fun28585_ip = 0;;) switch (_fun28585_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28585_ip = 27;
                        continue _fun28585
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28585_ip = 347;
                        continue _fun28585
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28585_ip = 298;
                        continue _fun28585
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28585_ip = 218;
                        continue _fun28585
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28585_ip = 329;
                        continue _fun28585
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28585_ip = 186;
                        continue _fun28585
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28585_ip = 329;
                    continue _fun28585;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.locales;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28585_ip = 82;
                        continue _fun28585
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28586: for (var _fun28586_ip = 0;;) switch (_fun28586_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.locales;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28586_ip = 114;
                        continue _fun28586
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.locales;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.locales;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28586_ip = 37;
                        continue _fun28586
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28586_ip = 178;
                        continue _fun28586
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28586_ip = 162;
                        continue _fun28586
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var33 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot16 = var33;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'locales',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientSystemLocale'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28589: for (var _fun28589_ip = 0;;) switch (_fun28589_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.locales = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28589_ip = 119;
                        continue _fun28589
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28590: for (var _fun28590_ip = 0;;) switch (_fun28590_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28590_ip = 27;
                        continue _fun28590
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28590_ip = 347;
                        continue _fun28590
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28590_ip = 298;
                        continue _fun28590
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28590_ip = 218;
                        continue _fun28590
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28590_ip = 329;
                        continue _fun28590
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28590_ip = 186;
                        continue _fun28590
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28590_ip = 329;
                    continue _fun28590;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.locales;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28590_ip = 82;
                        continue _fun28590
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28591: for (var _fun28591_ip = 0;;) switch (_fun28591_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.locales;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28591_ip = 114;
                        continue _fun28591
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.locales;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.locales;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28591_ip = 37;
                        continue _fun28591
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28591_ip = 178;
                        continue _fun28591
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28591_ip = 162;
                        continue _fun28591
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var32 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot17 = var32;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'locations',
                'kind': 'message',
                'repeat': 1
            };
            var5 = function() {
                var0 = _closure1_slot21;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientLocation'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28595: for (var _fun28595_ip = 0;;) switch (_fun28595_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.locations = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28595_ip = 119;
                        continue _fun28595
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28596: for (var _fun28596_ip = 0;;) switch (_fun28596_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28596_ip = 27;
                        continue _fun28596
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28596_ip = 368;
                        continue _fun28596
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28596_ip = 301;
                        continue _fun28596
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28596_ip = 221;
                        continue _fun28596
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28596_ip = 350;
                        continue _fun28596
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28596_ip = 186;
                        continue _fun28596
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28596_ip = 350;
                    continue _fun28596;
                case 221:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 301:
                    var20 = var0.locations;
                    var19 = var20.push;
                    var22 = _closure1_slot21;
                    var21 = var22.internalBinaryRead;
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var1 = var21.bind(var22)(var16, var1, var15);
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 350:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28596_ip = 82;
                        continue _fun28596
                    }
                case 368:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28597: for (var _fun28597_ip = 0;;) switch (_fun28597_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.locations;
                    var1 = var1.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var7) {
                        _fun28597_ip = 143;
                        continue _fun28597
                    }
                case 40:
                    var11 = _closure1_slot21;
                    var10 = var11.internalBinaryWrite;
                    var7 = var4.locations;
                    var9 = var7[var8];
                    var12 = var0.tag;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var12 = var12.bind(var0)(var5, var7);
                    var7 = var12.fork;
                    var7 = var7.bind(var12)();
                    var9 = var10.bind(var11)(var9, var7, var2);
                    var7 = var9.join;
                    var7 = var7.bind(var9)();
                    var8 = var8 + 1;
                    var7 = var4.locations;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun28597_ip = 40;
                        continue _fun28597
                    }
                case 143:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28597_ip = 204;
                        continue _fun28597
                    }
                case 155:
                    if (!(var5 == var2)) {
                        _fun28597_ip = 188;
                        continue _fun28597
                    }
                case 159:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 188:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 204:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var31 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot18 = var31;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(3);
            var0 = {
                'no': 1,
                'name': 'city',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'subdivision',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'country',
                'kind': 'scalar',
                'T': 9
            };
            var5[2] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientLocation.Place'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28600: for (var _fun28600_ip = 0;;) switch (_fun28600_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'city': '',
                        'subdivision': '',
                        'country': ''
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28600_ip = 122;
                        continue _fun28600
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28601: for (var _fun28601_ip = 0;;) switch (_fun28601_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28601_ip = 27;
                        continue _fun28601
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28601_ip = 403;
                        continue _fun28601
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun28601_ip = 364;
                        continue _fun28601
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun28601_ip = 341;
                        continue _fun28601
                    }
                case 126:
                    if (!(var7 !== var26)) {
                        _fun28601_ip = 318;
                        continue _fun28601
                    }
                case 133:
                    var20 = var16.readUnknownField;
                    if (!(var8 !== var20)) {
                        _fun28601_ip = 238;
                        continue _fun28601
                    }
                case 143:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var9 !== var20)) {
                        _fun28601_ip = 385;
                        continue _fun28601
                    }
                case 167:
                    var22 = var20;
                    if (!(var10 === var20)) {
                        _fun28601_ip = 203;
                        continue _fun28601
                    }
                case 174:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 203:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun28601_ip = 385;
                    continue _fun28601;
                case 238:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 318:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.country = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28601_ip = 385;
                    continue _fun28601;
                case 341:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.subdivision = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28601_ip = 385;
                    continue _fun28601;
                case 364:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.city = var1;
                    var19 = var3;
                    var18 = var2;
                case 385:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28601_ip = 85;
                        continue _fun28601
                    }
                case 403:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28602: for (var _fun28602_ip = 0;;) switch (_fun28602_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.city;
                    var2 = '';
                    if (!(var2 !== var1)) {
                        _fun28602_ip = 86;
                        continue _fun28602
                    }
                case 20:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.city;
                    var1 = var3.bind(var5)(var1);
                case 86:
                    var1 = var4.subdivision;
                    if (!(var2 !== var1)) {
                        _fun28602_ip = 162;
                        continue _fun28602
                    }
                case 96:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.subdivision;
                    var1 = var3.bind(var5)(var1);
                case 162:
                    var1 = var4.country;
                    if (!(var2 !== var1)) {
                        _fun28602_ip = 238;
                        continue _fun28602
                    }
                case 172:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 3;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.string;
                    var1 = var4.country;
                    var1 = var2.bind(var3)(var1);
                case 238:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28602_ip = 315;
                        continue _fun28602
                    }
                case 253:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28602_ip = 297;
                        continue _fun28602
                    }
                case 260:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 297:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 315:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var30 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot19 = var30;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'iso_country',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'iso_subdivision',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientLocation.ISORegion'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28605: for (var _fun28605_ip = 0;;) switch (_fun28605_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'isoCountry': '',
                        'isoSubdivision': ''
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28605_ip = 122;
                        continue _fun28605
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28606: for (var _fun28606_ip = 0;;) switch (_fun28606_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28606_ip = 27;
                        continue _fun28606
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28606_ip = 370;
                        continue _fun28606
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28606_ip = 331;
                        continue _fun28606
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28606_ip = 308;
                        continue _fun28606
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28606_ip = 228;
                        continue _fun28606
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28606_ip = 352;
                        continue _fun28606
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28606_ip = 193;
                        continue _fun28606
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28606_ip = 352;
                    continue _fun28606;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var0.isoSubdivision = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28606_ip = 352;
                    continue _fun28606;
                case 331:
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var0.isoCountry = var1;
                    var18 = var3;
                    var17 = var2;
                case 352:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28606_ip = 82;
                        continue _fun28606
                    }
                case 370:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28607: for (var _fun28607_ip = 0;;) switch (_fun28607_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.isoCountry;
                    var2 = '';
                    if (!(var2 !== var1)) {
                        _fun28607_ip = 86;
                        continue _fun28607
                    }
                case 20:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.isoCountry;
                    var1 = var3.bind(var5)(var1);
                case 86:
                    var1 = var4.isoSubdivision;
                    if (!(var2 !== var1)) {
                        _fun28607_ip = 162;
                        continue _fun28607
                    }
                case 96:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 2;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.string;
                    var1 = var4.isoSubdivision;
                    var1 = var2.bind(var3)(var1);
                case 162:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28607_ip = 239;
                        continue _fun28607
                    }
                case 177:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28607_ip = 221;
                        continue _fun28607
                    }
                case 184:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 221:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 239:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var29 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot20 = var29;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'iso_region',
                'kind': 'message',
                'oneof': 'location'
            };
            var5 = function() {
                var0 = _closure1_slot20;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(3);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'is_eu',
                'kind': 'scalar',
                'oneof': 'location',
                'T': 8
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'place',
                'kind': 'message',
                'oneof': 'location'
            };
            var6 = function() {
                var0 = _closure1_slot19;
                return var0;
            };
            var0.T = var6;
            var5[2] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientLocation.Location'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28612: for (var _fun28612_ip = 0;;) switch (_fun28612_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var5 = undefined;
                    var1.oneofKind = var5;
                    var0.location = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28612_ip = 121;
                        continue _fun28612
                    }
                case 91:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 121:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28613: for (var _fun28613_ip = 0;;) switch (_fun28613_ip) {
                case 0:
                    var20 = arg0;
                    var19 = arg2;
                    var0 = arg3;
                    var18 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28613_ip = 27;
                        continue _fun28613
                    }
                case 18:
                    var1 = var18.create;
                    var0 = var1.bind(var18)();
                case 27:
                    var2 = var20.pos;
                    var1 = arg1;
                    var17 = var2 + var1;
                    var1 = var20.pos;
                    var1 = var1 < var17;
                    var16 = undefined;
                    var15 = 'isoRegion';
                    var13 = 'isEu';
                    var12 = 'place';
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28613_ip = 522;
                        continue _fun28613
                    }
                case 97:
                    var1 = var20.tag;
                    var21 = var1.bind(var20)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var16)(var21, var6);
                    var29 = var1[var4];
                    var28 = var1[var5];
                    if (!(var5 !== var29)) {
                        _fun28613_ip = 436;
                        continue _fun28613
                    }
                case 131:
                    if (!(var6 !== var29)) {
                        _fun28613_ip = 400;
                        continue _fun28613
                    }
                case 138:
                    if (!(var7 !== var29)) {
                        _fun28613_ip = 330;
                        continue _fun28613
                    }
                case 145:
                    var23 = var19.readUnknownField;
                    if (!(var8 !== var23)) {
                        _fun28613_ip = 250;
                        continue _fun28613
                    }
                case 155:
                    var1 = var20.skip;
                    var1 = var1.bind(var20)(var28);
                    var22 = var23;
                    var21 = var1;
                    if (!(var9 !== var23)) {
                        _fun28613_ip = 504;
                        continue _fun28613
                    }
                case 179:
                    var25 = var23;
                    if (!(var10 === var23)) {
                        _fun28613_ip = 215;
                        continue _fun28613
                    }
                case 186:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var11];
                    var24 = var26.bind(var16)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 215:
                    var34 = var18.typeName;
                    var35 = undefined;
                    var33 = var0;
                    var32 = var29;
                    var31 = var28;
                    var30 = var1;
                    var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                    var22 = var23;
                    var21 = var1;
                    _fun28613_ip = 504;
                    continue _fun28613;
                case 250:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var30 = var18.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') for ';
                    var34 = var29;
                    var32 = var28;
                    var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var35 = var23;
                    var1 = new var35[var24](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 330:
                    var1 = {};
                    var1.oneofKind = var12;
                    var26 = _closure1_slot19;
                    var25 = var26.internalBinaryRead;
                    var23 = var20.uint32;
                    var33 = var23.bind(var20)();
                    var23 = var0.location;
                    var31 = var23.place;
                    var35 = var26;
                    var34 = var20;
                    var32 = var19;
                    var23 = var35[var25](var34, var33, var32, var31, var30);
                    var1.place = var23;
                    var0.location = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28613_ip = 504;
                    continue _fun28613;
                case 400:
                    var1 = {};
                    var1.oneofKind = var13;
                    var23 = var20.bool;
                    var23 = var23.bind(var20)();
                    var1.isEu = var23;
                    var0.location = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28613_ip = 504;
                    continue _fun28613;
                case 436:
                    var1 = {};
                    var1.oneofKind = var15;
                    var26 = _closure1_slot20;
                    var25 = var26.internalBinaryRead;
                    var23 = var20.uint32;
                    var33 = var23.bind(var20)();
                    var23 = var0.location;
                    var31 = var23.isoRegion;
                    var35 = var26;
                    var34 = var20;
                    var32 = var19;
                    var23 = var35[var25](var34, var33, var32, var31, var30);
                    var1.isoRegion = var23;
                    var0.location = var1;
                    var22 = var3;
                    var21 = var2;
                case 504:
                    var1 = var20.pos;
                    var3 = var22;
                    var2 = var21;
                    if (var1 < var17) {
                        _fun28613_ip = 97;
                        continue _fun28613
                    }
                case 522:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28614: for (var _fun28614_ip = 0;;) switch (_fun28614_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.location;
                    var3 = var2.oneofKind;
                    var2 = 'isoRegion';
                    if (!(var2 === var3)) {
                        _fun28614_ip = 125;
                        continue _fun28614
                    }
                case 28:
                    var6 = _closure1_slot20;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.location;
                    var3 = var3.isoRegion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 125:
                    var2 = var4.location;
                    var3 = var2.oneofKind;
                    var2 = 'isEu';
                    if (!(var2 === var3)) {
                        _fun28614_ip = 216;
                        continue _fun28614
                    }
                case 144:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 2;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.location;
                    var2 = var2.isEu;
                    var2 = var3.bind(var5)(var2);
                case 216:
                    var2 = var4.location;
                    var3 = var2.oneofKind;
                    var2 = 'place';
                    if (!(var2 === var3)) {
                        _fun28614_ip = 332;
                        continue _fun28614
                    }
                case 235:
                    var6 = _closure1_slot19;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.location;
                    var3 = var3.place;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 332:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28614_ip = 406;
                        continue _fun28614
                    }
                case 344:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28614_ip = 388;
                        continue _fun28614
                    }
                case 351:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 388:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 406:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var28 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot21 = var28;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'blocks',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientIP'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28617: for (var _fun28617_ip = 0;;) switch (_fun28617_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.blocks = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28617_ip = 119;
                        continue _fun28617
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28618: for (var _fun28618_ip = 0;;) switch (_fun28618_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28618_ip = 27;
                        continue _fun28618
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28618_ip = 347;
                        continue _fun28618
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28618_ip = 298;
                        continue _fun28618
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28618_ip = 218;
                        continue _fun28618
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28618_ip = 329;
                        continue _fun28618
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28618_ip = 186;
                        continue _fun28618
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28618_ip = 329;
                    continue _fun28618;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.blocks;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28618_ip = 82;
                        continue _fun28618
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28619: for (var _fun28619_ip = 0;;) switch (_fun28619_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.blocks;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28619_ip = 114;
                        continue _fun28619
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.blocks;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.blocks;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28619_ip = 37;
                        continue _fun28619
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28619_ip = 178;
                        continue _fun28619
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28619_ip = 162;
                        continue _fun28619
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var27 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot22 = var27;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'ios_version',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(7);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'android_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'macos_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'windows_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'playstation_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'xbox_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 7,
                'name': 'linux_version',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot24;
                return var0;
            };
            var0.T = var6;
            var5[6] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientOperatingSystem'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28629: for (var _fun28629_ip = 0;;) switch (_fun28629_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28629_ip = 110;
                        continue _fun28629
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28630: for (var _fun28630_ip = 0;;) switch (_fun28630_ip) {
                case 0:
                    var20 = arg0;
                    var19 = arg2;
                    var0 = arg3;
                    var18 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28630_ip = 27;
                        continue _fun28630
                    }
                case 18:
                    var1 = var18.create;
                    var0 = var1.bind(var18)();
                case 27:
                    var2 = var20.pos;
                    var1 = arg1;
                    var17 = var2 + var1;
                    var1 = var20.pos;
                    var1 = var1 < var17;
                    var16 = undefined;
                    var14 = 6;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 7;
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28630_ip = 754;
                        continue _fun28630
                    }
                case 94:
                    var1 = var20.tag;
                    var21 = var1.bind(var20)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var16)(var21, var6);
                    var29 = var1[var4];
                    var28 = var1[var5];
                    if (!(var5 !== var29)) {
                        _fun28630_ip = 685;
                        continue _fun28630
                    }
                case 128:
                    if (!(var6 !== var29)) {
                        _fun28630_ip = 632;
                        continue _fun28630
                    }
                case 135:
                    if (!(var7 !== var29)) {
                        _fun28630_ip = 579;
                        continue _fun28630
                    }
                case 142:
                    if (!(var8 !== var29)) {
                        _fun28630_ip = 523;
                        continue _fun28630
                    }
                case 149:
                    if (!(var9 !== var29)) {
                        _fun28630_ip = 467;
                        continue _fun28630
                    }
                case 156:
                    if (!(var14 !== var29)) {
                        _fun28630_ip = 411;
                        continue _fun28630
                    }
                case 163:
                    if (!(var10 !== var29)) {
                        _fun28630_ip = 355;
                        continue _fun28630
                    }
                case 170:
                    var23 = var19.readUnknownField;
                    if (!(var11 !== var23)) {
                        _fun28630_ip = 275;
                        continue _fun28630
                    }
                case 180:
                    var1 = var20.skip;
                    var1 = var1.bind(var20)(var28);
                    var22 = var23;
                    var21 = var1;
                    if (!(var12 !== var23)) {
                        _fun28630_ip = 736;
                        continue _fun28630
                    }
                case 204:
                    var25 = var23;
                    if (!(var13 === var23)) {
                        _fun28630_ip = 240;
                        continue _fun28630
                    }
                case 211:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var14];
                    var24 = var26.bind(var16)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 240:
                    var34 = var18.typeName;
                    var35 = undefined;
                    var33 = var0;
                    var32 = var29;
                    var31 = var28;
                    var30 = var1;
                    var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                    var22 = var23;
                    var21 = var1;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 275:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var30 = var18.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') for ';
                    var34 = var29;
                    var32 = var28;
                    var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var35 = var23;
                    var1 = new var35[var24](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 355:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.linuxVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.linuxVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 411:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.xboxVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.xboxVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 467:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.playstationVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.playstationVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 523:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.windowsVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.windowsVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 579:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.macosVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.macosVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 632:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.androidVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.androidVersion = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28630_ip = 736;
                    continue _fun28630;
                case 685:
                    var25 = _closure1_slot24;
                    var24 = var25.internalBinaryRead;
                    var1 = var20.uint32;
                    var33 = var1.bind(var20)();
                    var31 = var0.iosVersion;
                    var35 = var25;
                    var34 = var20;
                    var32 = var19;
                    var1 = var35[var24](var34, var33, var32, var31, var30);
                    var0.iosVersion = var1;
                    var22 = var3;
                    var21 = var2;
                case 736:
                    var1 = var20.pos;
                    var3 = var22;
                    var2 = var21;
                    if (var1 < var17) {
                        _fun28630_ip = 94;
                        continue _fun28630
                    }
                case 754:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28631: for (var _fun28631_ip = 0;;) switch (_fun28631_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.iosVersion;
                    if (!var2) {
                        _fun28631_ip = 110;
                        continue _fun28631
                    }
                case 18:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.iosVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 110:
                    var2 = var4.androidVersion;
                    if (!var2) {
                        _fun28631_ip = 211;
                        continue _fun28631
                    }
                case 119:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.androidVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 211:
                    var2 = var4.macosVersion;
                    if (!var2) {
                        _fun28631_ip = 312;
                        continue _fun28631
                    }
                case 220:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.macosVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 312:
                    var2 = var4.windowsVersion;
                    if (!var2) {
                        _fun28631_ip = 413;
                        continue _fun28631
                    }
                case 321:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.windowsVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 413:
                    var2 = var4.playstationVersion;
                    if (!var2) {
                        _fun28631_ip = 514;
                        continue _fun28631
                    }
                case 422:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.playstationVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 5;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 514:
                    var2 = var4.xboxVersion;
                    if (!var2) {
                        _fun28631_ip = 612;
                        continue _fun28631
                    }
                case 523:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.xboxVersion;
                    var8 = var0.tag;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 6;
                    var9 = var2[var7];
                    var2 = undefined;
                    var2 = var10.bind(var2)(var9);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var7 = var8.bind(var0)(var7, var2);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 612:
                    var2 = var4.linuxVersion;
                    if (!var2) {
                        _fun28631_ip = 713;
                        continue _fun28631
                    }
                case 621:
                    var6 = _closure1_slot24;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.linuxVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 7;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 713:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28631_ip = 787;
                        continue _fun28631
                    }
                case 725:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28631_ip = 769;
                        continue _fun28631
                    }
                case 732:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 769:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 787:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var26 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot23 = var26;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'ranges',
                'kind': 'message',
                'repeat': 1
            };
            var5 = function() {
                var0 = _closure1_slot25;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'work_around_pyoto_bug',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.SDKVersion'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28635: for (var _fun28635_ip = 0;;) switch (_fun28635_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.ranges = var1;
                    var10 = false;
                    var0.workAroundPyotoBug = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28635_ip = 124;
                        continue _fun28635
                    }
                case 94:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 124:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28636: for (var _fun28636_ip = 0;;) switch (_fun28636_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28636_ip = 27;
                        continue _fun28636
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28636_ip = 399;
                        continue _fun28636
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28636_ip = 332;
                        continue _fun28636
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28636_ip = 308;
                        continue _fun28636
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28636_ip = 228;
                        continue _fun28636
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28636_ip = 381;
                        continue _fun28636
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28636_ip = 193;
                        continue _fun28636
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28636_ip = 381;
                    continue _fun28636;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.workAroundPyotoBug = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28636_ip = 381;
                    continue _fun28636;
                case 332:
                    var20 = var0.ranges;
                    var19 = var20.push;
                    var22 = _closure1_slot25;
                    var21 = var22.internalBinaryRead;
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var1 = var21.bind(var22)(var16, var1, var15);
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 381:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28636_ip = 82;
                        continue _fun28636
                    }
                case 399:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28637: for (var _fun28637_ip = 0;;) switch (_fun28637_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.ranges;
                    var1 = var1.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var7) {
                        _fun28637_ip = 143;
                        continue _fun28637
                    }
                case 40:
                    var11 = _closure1_slot25;
                    var10 = var11.internalBinaryWrite;
                    var7 = var4.ranges;
                    var9 = var7[var8];
                    var12 = var0.tag;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var12 = var12.bind(var0)(var5, var7);
                    var7 = var12.fork;
                    var7 = var7.bind(var12)();
                    var9 = var10.bind(var11)(var9, var7, var2);
                    var7 = var9.join;
                    var7 = var7.bind(var9)();
                    var8 = var8 + 1;
                    var7 = var4.ranges;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun28637_ip = 40;
                        continue _fun28637
                    }
                case 143:
                    var8 = var4.workAroundPyotoBug;
                    var7 = false;
                    if (!(var7 !== var8)) {
                        _fun28637_ip = 214;
                        continue _fun28637
                    }
                case 155:
                    var10 = var0.tag;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.WireType;
                    var9 = var8.Varint;
                    var8 = 2;
                    var10 = var10.bind(var0)(var8, var9);
                    var9 = var10.bool;
                    var8 = var4.workAroundPyotoBug;
                    var8 = var9.bind(var10)(var8);
                case 214:
                    var2 = var2.writeUnknownFields;
                    if (!(var7 !== var2)) {
                        _fun28637_ip = 273;
                        continue _fun28637
                    }
                case 224:
                    if (!(var5 == var2)) {
                        _fun28637_ip = 257;
                        continue _fun28637
                    }
                case 228:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 257:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 273:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var25 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot24 = var25;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'lower_bound',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot26;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'upper_bound',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot26;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.SDKVersionRange'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28642: for (var _fun28642_ip = 0;;) switch (_fun28642_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28642_ip = 110;
                        continue _fun28642
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28643: for (var _fun28643_ip = 0;;) switch (_fun28643_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28643_ip = 27;
                        continue _fun28643
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28643_ip = 430;
                        continue _fun28643
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28643_ip = 361;
                        continue _fun28643
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28643_ip = 308;
                        continue _fun28643
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28643_ip = 228;
                        continue _fun28643
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28643_ip = 412;
                        continue _fun28643
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28643_ip = 193;
                        continue _fun28643
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28643_ip = 412;
                    continue _fun28643;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var21 = _closure1_slot26;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.upperBound;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.upperBound = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28643_ip = 412;
                    continue _fun28643;
                case 361:
                    var21 = _closure1_slot26;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.lowerBound;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.lowerBound = var1;
                    var18 = var3;
                    var17 = var2;
                case 412:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28643_ip = 82;
                        continue _fun28643
                    }
                case 430:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28644: for (var _fun28644_ip = 0;;) switch (_fun28644_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.lowerBound;
                    if (!var2) {
                        _fun28644_ip = 110;
                        continue _fun28644
                    }
                case 18:
                    var6 = _closure1_slot26;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.lowerBound;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 110:
                    var2 = var4.upperBound;
                    if (!var2) {
                        _fun28644_ip = 211;
                        continue _fun28644
                    }
                case 119:
                    var6 = _closure1_slot26;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.upperBound;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 211:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28644_ip = 285;
                        continue _fun28644
                    }
                case 223:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28644_ip = 267;
                        continue _fun28644
                    }
                case 230:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 267:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 285:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var24 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot25 = var24;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'version',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot27;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'inclusive',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.SDKVersionRangeBound'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28648: for (var _fun28648_ip = 0;;) switch (_fun28648_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.inclusive = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28648_ip = 115;
                        continue _fun28648
                    }
                case 85:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 115:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28649: for (var _fun28649_ip = 0;;) switch (_fun28649_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28649_ip = 27;
                        continue _fun28649
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28649_ip = 401;
                        continue _fun28649
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28649_ip = 332;
                        continue _fun28649
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28649_ip = 308;
                        continue _fun28649
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28649_ip = 228;
                        continue _fun28649
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28649_ip = 383;
                        continue _fun28649
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28649_ip = 193;
                        continue _fun28649
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28649_ip = 383;
                    continue _fun28649;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.inclusive = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28649_ip = 383;
                    continue _fun28649;
                case 332:
                    var21 = _closure1_slot27;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.version;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.version = var1;
                    var18 = var3;
                    var17 = var2;
                case 383:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28649_ip = 82;
                        continue _fun28649
                    }
                case 401:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28650: for (var _fun28650_ip = 0;;) switch (_fun28650_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.version;
                    if (!var1) {
                        _fun28650_ip = 110;
                        continue _fun28650
                    }
                case 18:
                    var6 = _closure1_slot27;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.version;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 1;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 110:
                    var3 = var4.inclusive;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28650_ip = 189;
                        continue _fun28650
                    }
                case 122:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 6;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.WireType;
                    var5 = var3.Varint;
                    var3 = 2;
                    var6 = var6.bind(var0)(var3, var5);
                    var5 = var6.bool;
                    var3 = var4.inclusive;
                    var3 = var5.bind(var6)(var3);
                case 189:
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28650_ip = 261;
                        continue _fun28650
                    }
                case 199:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28650_ip = 243;
                        continue _fun28650
                    }
                case 206:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 243:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 261:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var23 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot26 = var23;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'version',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.SDKVersionSpecifier'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28653: for (var _fun28653_ip = 0;;) switch (_fun28653_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.version = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28653_ip = 117;
                        continue _fun28653
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28654: for (var _fun28654_ip = 0;;) switch (_fun28654_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28654_ip = 27;
                        continue _fun28654
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28654_ip = 338;
                        continue _fun28654
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28654_ip = 298;
                        continue _fun28654
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28654_ip = 218;
                        continue _fun28654
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28654_ip = 320;
                        continue _fun28654
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28654_ip = 186;
                        continue _fun28654
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28654_ip = 320;
                    continue _fun28654;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.int32;
                    var1 = var1.bind(var16)();
                    var0.version = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28654_ip = 82;
                        continue _fun28654
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28655: for (var _fun28655_ip = 0;;) switch (_fun28655_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.version;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun28655_ip = 85;
                        continue _fun28655
                    }
                case 18:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.version;
                    var1 = var2.bind(var3)(var1);
                case 85:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28655_ip = 162;
                        continue _fun28655
                    }
                case 100:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28655_ip = 144;
                        continue _fun28655
                    }
                case 107:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 144:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 162:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var22 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot27 = var22;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'ios_version',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot29;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(6);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'android_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot29;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'web_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot29;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'native_version',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot29;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 6,
                'name': 'allow_non_native_web',
                'kind': 'scalar',
                'T': 8
            };
            var5[4] = var0;
            var0 = {
                'no': 5,
                'name': 'client_required_changes',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot33;
                return var0;
            };
            var0.T = var6;
            var5[5] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientPlatform'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28663: for (var _fun28663_ip = 0;;) switch (_fun28663_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.allowNonNativeWeb = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28663_ip = 115;
                        continue _fun28663
                    }
                case 85:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 115:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28664: for (var _fun28664_ip = 0;;) switch (_fun28664_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var17 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28664_ip = 27;
                        continue _fun28664
                    }
                case 18:
                    var1 = var17.create;
                    var0 = var1.bind(var17)();
                case 27:
                    var2 = var19.pos;
                    var1 = arg1;
                    var16 = var2 + var1;
                    var1 = var19.pos;
                    var1 = var1 < var16;
                    var15 = undefined;
                    var13 = 6;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28664_ip = 659;
                        continue _fun28664
                    }
                case 91:
                    var1 = var19.tag;
                    var20 = var1.bind(var19)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var15)(var20, var6);
                    var28 = var1[var4];
                    var27 = var1[var5];
                    if (!(var5 !== var28)) {
                        _fun28664_ip = 590;
                        continue _fun28664
                    }
                case 125:
                    if (!(var6 !== var28)) {
                        _fun28664_ip = 537;
                        continue _fun28664
                    }
                case 132:
                    if (!(var7 !== var28)) {
                        _fun28664_ip = 484;
                        continue _fun28664
                    }
                case 139:
                    if (!(var8 !== var28)) {
                        _fun28664_ip = 428;
                        continue _fun28664
                    }
                case 146:
                    if (!(var13 !== var28)) {
                        _fun28664_ip = 401;
                        continue _fun28664
                    }
                case 153:
                    if (!(var9 !== var28)) {
                        _fun28664_ip = 345;
                        continue _fun28664
                    }
                case 160:
                    var22 = var18.readUnknownField;
                    if (!(var10 !== var22)) {
                        _fun28664_ip = 265;
                        continue _fun28664
                    }
                case 170:
                    var1 = var19.skip;
                    var1 = var1.bind(var19)(var27);
                    var21 = var22;
                    var20 = var1;
                    if (!(var11 !== var22)) {
                        _fun28664_ip = 641;
                        continue _fun28664
                    }
                case 194:
                    var24 = var22;
                    if (!(var12 === var22)) {
                        _fun28664_ip = 230;
                        continue _fun28664
                    }
                case 201:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var13];
                    var23 = var25.bind(var15)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 230:
                    var33 = var17.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var27;
                    var29 = var1;
                    var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                    var21 = var22;
                    var20 = var1;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 265:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var29 = var17.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var27;
                    var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var34 = var22;
                    var1 = new var34[var23](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 345:
                    var24 = _closure1_slot33;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.clientRequiredChanges;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.clientRequiredChanges = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 401:
                    var1 = var19.bool;
                    var1 = var1.bind(var19)();
                    var0.allowNonNativeWeb = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 428:
                    var24 = _closure1_slot29;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.nativeVersion;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.nativeVersion = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 484:
                    var24 = _closure1_slot29;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.webVersion;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.webVersion = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 537:
                    var24 = _closure1_slot29;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.androidVersion;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.androidVersion = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun28664_ip = 641;
                    continue _fun28664;
                case 590:
                    var24 = _closure1_slot29;
                    var23 = var24.internalBinaryRead;
                    var1 = var19.uint32;
                    var32 = var1.bind(var19)();
                    var30 = var0.iosVersion;
                    var34 = var24;
                    var33 = var19;
                    var31 = var18;
                    var1 = var34[var23](var33, var32, var31, var30, var29);
                    var0.iosVersion = var1;
                    var21 = var3;
                    var20 = var2;
                case 641:
                    var1 = var19.pos;
                    var3 = var21;
                    var2 = var20;
                    if (var1 < var16) {
                        _fun28664_ip = 91;
                        continue _fun28664
                    }
                case 659:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28665: for (var _fun28665_ip = 0;;) switch (_fun28665_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.iosVersion;
                    if (!var1) {
                        _fun28665_ip = 110;
                        continue _fun28665
                    }
                case 18:
                    var6 = _closure1_slot29;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.iosVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 1;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 110:
                    var1 = var4.androidVersion;
                    if (!var1) {
                        _fun28665_ip = 211;
                        continue _fun28665
                    }
                case 119:
                    var6 = _closure1_slot29;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.androidVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 2;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 211:
                    var1 = var4.webVersion;
                    if (!var1) {
                        _fun28665_ip = 312;
                        continue _fun28665
                    }
                case 220:
                    var6 = _closure1_slot29;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.webVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 3;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 312:
                    var1 = var4.nativeVersion;
                    if (!var1) {
                        _fun28665_ip = 413;
                        continue _fun28665
                    }
                case 321:
                    var6 = _closure1_slot29;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.nativeVersion;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 4;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 413:
                    var3 = var4.allowNonNativeWeb;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28665_ip = 489;
                        continue _fun28665
                    }
                case 425:
                    var6 = var0.tag;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var5 = 6;
                    var7 = var3[var5];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    var3 = var3.WireType;
                    var3 = var3.Varint;
                    var6 = var6.bind(var0)(var5, var3);
                    var5 = var6.bool;
                    var3 = var4.allowNonNativeWeb;
                    var3 = var5.bind(var6)(var3);
                case 489:
                    var3 = var4.clientRequiredChanges;
                    if (!var3) {
                        _fun28665_ip = 590;
                        continue _fun28665
                    }
                case 498:
                    var7 = _closure1_slot33;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.clientRequiredChanges;
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 6;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var10.bind(var3)(var8);
                    var3 = var3.WireType;
                    var8 = var3.LengthDelimited;
                    var3 = 5;
                    var8 = var9.bind(var0)(var3, var8);
                    var3 = var8.fork;
                    var3 = var3.bind(var8)();
                    var5 = var6.bind(var7)(var5, var3, var2);
                    var3 = var5.join;
                    var3 = var3.bind(var5)();
                case 590:
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28665_ip = 662;
                        continue _fun28665
                    }
                case 600:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28665_ip = 644;
                        continue _fun28665
                    }
                case 607:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 644:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 662:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var21 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot28 = var21;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'ranges',
                'kind': 'message',
                'repeat': 1
            };
            var5 = function() {
                var0 = _closure1_slot30;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'work_around_pyoto_bug',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.PlatformVersion'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28669: for (var _fun28669_ip = 0;;) switch (_fun28669_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.ranges = var1;
                    var10 = false;
                    var0.workAroundPyotoBug = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28669_ip = 124;
                        continue _fun28669
                    }
                case 94:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 124:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28670: for (var _fun28670_ip = 0;;) switch (_fun28670_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28670_ip = 27;
                        continue _fun28670
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28670_ip = 399;
                        continue _fun28670
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28670_ip = 332;
                        continue _fun28670
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28670_ip = 308;
                        continue _fun28670
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28670_ip = 228;
                        continue _fun28670
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28670_ip = 381;
                        continue _fun28670
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28670_ip = 193;
                        continue _fun28670
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28670_ip = 381;
                    continue _fun28670;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.workAroundPyotoBug = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28670_ip = 381;
                    continue _fun28670;
                case 332:
                    var20 = var0.ranges;
                    var19 = var20.push;
                    var22 = _closure1_slot30;
                    var21 = var22.internalBinaryRead;
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var1 = var21.bind(var22)(var16, var1, var15);
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 381:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28670_ip = 82;
                        continue _fun28670
                    }
                case 399:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28671: for (var _fun28671_ip = 0;;) switch (_fun28671_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.ranges;
                    var1 = var1.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var7) {
                        _fun28671_ip = 143;
                        continue _fun28671
                    }
                case 40:
                    var11 = _closure1_slot30;
                    var10 = var11.internalBinaryWrite;
                    var7 = var4.ranges;
                    var9 = var7[var8];
                    var12 = var0.tag;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var13.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var12 = var12.bind(var0)(var5, var7);
                    var7 = var12.fork;
                    var7 = var7.bind(var12)();
                    var9 = var10.bind(var11)(var9, var7, var2);
                    var7 = var9.join;
                    var7 = var7.bind(var9)();
                    var8 = var8 + 1;
                    var7 = var4.ranges;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun28671_ip = 40;
                        continue _fun28671
                    }
                case 143:
                    var8 = var4.workAroundPyotoBug;
                    var7 = false;
                    if (!(var7 !== var8)) {
                        _fun28671_ip = 214;
                        continue _fun28671
                    }
                case 155:
                    var10 = var0.tag;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.WireType;
                    var9 = var8.Varint;
                    var8 = 2;
                    var10 = var10.bind(var0)(var8, var9);
                    var9 = var10.bool;
                    var8 = var4.workAroundPyotoBug;
                    var8 = var9.bind(var10)(var8);
                case 214:
                    var2 = var2.writeUnknownFields;
                    if (!(var7 !== var2)) {
                        _fun28671_ip = 273;
                        continue _fun28671
                    }
                case 224:
                    if (!(var5 == var2)) {
                        _fun28671_ip = 257;
                        continue _fun28671
                    }
                case 228:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 257:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 273:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var20 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot29 = var20;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'lower_bound',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot31;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'upper_bound',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot31;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.PlatformVersionRange'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28676: for (var _fun28676_ip = 0;;) switch (_fun28676_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28676_ip = 110;
                        continue _fun28676
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28677: for (var _fun28677_ip = 0;;) switch (_fun28677_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28677_ip = 27;
                        continue _fun28677
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28677_ip = 430;
                        continue _fun28677
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28677_ip = 361;
                        continue _fun28677
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28677_ip = 308;
                        continue _fun28677
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28677_ip = 228;
                        continue _fun28677
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28677_ip = 412;
                        continue _fun28677
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28677_ip = 193;
                        continue _fun28677
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28677_ip = 412;
                    continue _fun28677;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var21 = _closure1_slot31;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.upperBound;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.upperBound = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28677_ip = 412;
                    continue _fun28677;
                case 361:
                    var21 = _closure1_slot31;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.lowerBound;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.lowerBound = var1;
                    var18 = var3;
                    var17 = var2;
                case 412:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28677_ip = 82;
                        continue _fun28677
                    }
                case 430:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28678: for (var _fun28678_ip = 0;;) switch (_fun28678_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.lowerBound;
                    if (!var2) {
                        _fun28678_ip = 110;
                        continue _fun28678
                    }
                case 18:
                    var6 = _closure1_slot31;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.lowerBound;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 110:
                    var2 = var4.upperBound;
                    if (!var2) {
                        _fun28678_ip = 211;
                        continue _fun28678
                    }
                case 119:
                    var6 = _closure1_slot31;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.upperBound;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 211:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28678_ip = 285;
                        continue _fun28678
                    }
                case 223:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28678_ip = 267;
                        continue _fun28678
                    }
                case 230:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 267:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 285:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var19 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot30 = var19;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'version',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot32;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'inclusive',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.PlatformVersionRangeBound'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28682: for (var _fun28682_ip = 0;;) switch (_fun28682_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.inclusive = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28682_ip = 115;
                        continue _fun28682
                    }
                case 85:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 115:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28683: for (var _fun28683_ip = 0;;) switch (_fun28683_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28683_ip = 27;
                        continue _fun28683
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28683_ip = 401;
                        continue _fun28683
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28683_ip = 332;
                        continue _fun28683
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28683_ip = 308;
                        continue _fun28683
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28683_ip = 228;
                        continue _fun28683
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28683_ip = 383;
                        continue _fun28683
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28683_ip = 193;
                        continue _fun28683
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28683_ip = 383;
                    continue _fun28683;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.inclusive = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28683_ip = 383;
                    continue _fun28683;
                case 332:
                    var21 = _closure1_slot32;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.version;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.version = var1;
                    var18 = var3;
                    var17 = var2;
                case 383:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28683_ip = 82;
                        continue _fun28683
                    }
                case 401:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28684: for (var _fun28684_ip = 0;;) switch (_fun28684_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.version;
                    if (!var1) {
                        _fun28684_ip = 110;
                        continue _fun28684
                    }
                case 18:
                    var6 = _closure1_slot32;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.version;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var7 = var7[var1];
                    var1 = undefined;
                    var1 = var9.bind(var1)(var7);
                    var1 = var1.WireType;
                    var7 = var1.LengthDelimited;
                    var1 = 1;
                    var7 = var8.bind(var0)(var1, var7);
                    var1 = var7.fork;
                    var1 = var1.bind(var7)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 110:
                    var3 = var4.inclusive;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28684_ip = 189;
                        continue _fun28684
                    }
                case 122:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 6;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var5);
                    var3 = var3.WireType;
                    var5 = var3.Varint;
                    var3 = 2;
                    var6 = var6.bind(var0)(var3, var5);
                    var5 = var6.bool;
                    var3 = var4.inclusive;
                    var3 = var5.bind(var6)(var3);
                case 189:
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28684_ip = 261;
                        continue _fun28684
                    }
                case 199:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28684_ip = 243;
                        continue _fun28684
                    }
                case 206:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 243:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 261:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var18 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot31 = var18;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(3);
            var0 = {
                'no': 1,
                'name': 'major',
                'kind': 'scalar',
                'T': 13
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'minor',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'build',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt64Value;
                return var0;
            };
            var0.T = var6;
            var5[2] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.PlatformVersionSpecifier'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28689: for (var _fun28689_ip = 0;;) switch (_fun28689_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.major = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28689_ip = 117;
                        continue _fun28689
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28690: for (var _fun28690_ip = 0;;) switch (_fun28690_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28690_ip = 27;
                        continue _fun28690
                    }
                case 18:
                    var1 = var16.create;
                    var0 = var1.bind(var16)();
                case 27:
                    var2 = var18.pos;
                    var1 = arg1;
                    var15 = var2 + var1;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var14 = undefined;
                    var12 = 7;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28690_ip = 505;
                        continue _fun28690
                    }
                case 88:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var6);
                    var27 = var1[var4];
                    var26 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun28690_ip = 465;
                        continue _fun28690
                    }
                case 122:
                    if (!(var6 !== var27)) {
                        _fun28690_ip = 393;
                        continue _fun28690
                    }
                case 129:
                    if (!(var7 !== var27)) {
                        _fun28690_ip = 321;
                        continue _fun28690
                    }
                case 136:
                    var21 = var17.readUnknownField;
                    if (!(var8 !== var21)) {
                        _fun28690_ip = 241;
                        continue _fun28690
                    }
                case 146:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var26);
                    var20 = var21;
                    var19 = var1;
                    if (!(var9 !== var21)) {
                        _fun28690_ip = 487;
                        continue _fun28690
                    }
                case 170:
                    var23 = var21;
                    if (!(var10 === var21)) {
                        _fun28690_ip = 206;
                        continue _fun28690
                    }
                case 177:
                    var24 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var22 = var22[var11];
                    var22 = var24.bind(var14)(var22);
                    var22 = var22.UnknownFieldHandler;
                    var23 = var22.onRead;
                case 206:
                    var32 = var16.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var26;
                    var28 = var1;
                    var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                    var20 = var21;
                    var19 = var1;
                    _fun28690_ip = 487;
                    continue _fun28690;
                case 241:
                    var1 = global;
                    var21 = var1.globalThis;
                    var22 = var21.Error;
                    var28 = var16.typeName;
                    var1 = var1.HermesInternal;
                    var24 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var26;
                    var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var21 = var22.prototype;
                    var21 = Object.create(var21, {
                        constructor: {
                            value: var22
                        }
                    });
                    var33 = var21;
                    var1 = new var33[var22](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var21;
                    throw var1;
                case 321:
                    var21 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var21.bind(var14)(var1);
                    var23 = var1.UInt64Value;
                    var22 = var23.internalBinaryRead;
                    var1 = var18.uint32;
                    var31 = var1.bind(var18)();
                    var29 = var0.build;
                    var33 = var23;
                    var32 = var18;
                    var30 = var17;
                    var1 = var33[var22](var32, var31, var30, var29, var28);
                    var0.build = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun28690_ip = 487;
                    continue _fun28690;
                case 393:
                    var21 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var12];
                    var1 = var21.bind(var14)(var1);
                    var23 = var1.UInt32Value;
                    var22 = var23.internalBinaryRead;
                    var1 = var18.uint32;
                    var31 = var1.bind(var18)();
                    var29 = var0.minor;
                    var33 = var23;
                    var32 = var18;
                    var30 = var17;
                    var1 = var33[var22](var32, var31, var30, var29, var28);
                    var0.minor = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun28690_ip = 487;
                    continue _fun28690;
                case 465:
                    var1 = var18.uint32;
                    var1 = var1.bind(var18)();
                    var0.major = var1;
                    var20 = var3;
                    var19 = var2;
                case 487:
                    var1 = var18.pos;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun28690_ip = 88;
                        continue _fun28690
                    }
                case 505:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28691: for (var _fun28691_ip = 0;;) switch (_fun28691_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var3 = var4.major;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun28691_ip = 88;
                        continue _fun28691
                    }
                case 21:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.uint32;
                    var2 = var4.major;
                    var2 = var3.bind(var5)(var2);
                case 88:
                    var2 = var4.minor;
                    if (!var2) {
                        _fun28691_ip = 203;
                        continue _fun28691
                    }
                case 97:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.minor;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 203:
                    var2 = var4.build;
                    if (!var2) {
                        _fun28691_ip = 318;
                        continue _fun28691
                    }
                case 212:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt64Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.build;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 318:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28691_ip = 392;
                        continue _fun28691
                    }
                case 330:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28691_ip = 374;
                        continue _fun28691
                    }
                case 337:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 374:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 392:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var17 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot32 = var17;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'commit_hashes',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'pr_numbers',
                'kind': 'scalar',
                'repeat': 1,
                'T': 5
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientRequiredChanges'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28694: for (var _fun28694_ip = 0;;) switch (_fun28694_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.commitHashes = var1;
                    var1 = new Array(0);
                    var0.prNumbers = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28694_ip = 128;
                        continue _fun28694
                    }
                case 98:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 128:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28695: for (var _fun28695_ip = 0;;) switch (_fun28695_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28695_ip = 27;
                        continue _fun28695
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28695_ip = 523;
                        continue _fun28695
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var5];
                    var21 = var1[var6];
                    if (!(var6 !== var27)) {
                        _fun28695_ip = 468;
                        continue _fun28695
                    }
                case 118:
                    if (!(var7 !== var27)) {
                        _fun28695_ip = 316;
                        continue _fun28695
                    }
                case 125:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28695_ip = 236;
                        continue _fun28695
                    }
                case 135:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28695_ip = 502;
                        continue _fun28695
                    }
                case 162:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28695_ip = 198;
                        continue _fun28695
                    }
                case 169:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 198:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28695_ip = 502;
                    continue _fun28695;
                case 236:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 316:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28695_ip = 385;
                        continue _fun28695
                    }
                case 348:
                    var22 = var0.prNumbers;
                    var21 = var22.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28695_ip = 502;
                    continue _fun28695;
                case 385:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28695_ip = 502;
                        continue _fun28695
                    }
                case 422:
                    var23 = var0.prNumbers;
                    var22 = var23.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28695_ip = 422;
                        continue _fun28695
                    }
                case 466:
                    _fun28695_ip = 502;
                    continue _fun28695;
                case 468:
                    var22 = var0.commitHashes;
                    var21 = var22.push;
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                case 502:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28695_ip = 84;
                        continue _fun28695
                    }
                case 523:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28696: for (var _fun28696_ip = 0;;) switch (_fun28696_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.commitHashes;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 0;
                    if (!var2) {
                        _fun28696_ip = 116;
                        continue _fun28696
                    }
                case 39:
                    var9 = var0.tag;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var10 = var9.bind(var0)(var5, var2);
                    var9 = var10.string;
                    var2 = var4.commitHashes;
                    var2 = var2[var8];
                    var2 = var9.bind(var10)(var2);
                    var8 = var8 + 1;
                    var2 = var4.commitHashes;
                    var2 = var2.length;
                    if (var8 < var2) {
                        _fun28696_ip = 39;
                        continue _fun28696
                    }
                case 116:
                    var2 = var4.prNumbers;
                    var2 = var2.length;
                    if (!var2) {
                        _fun28696_ip = 250;
                        continue _fun28696
                    }
                case 130:
                    var9 = var0.tag;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.WireType;
                    var8 = var2.LengthDelimited;
                    var2 = 2;
                    var8 = var9.bind(var0)(var2, var8);
                    var2 = var8.fork;
                    var2 = var2.bind(var8)();
                    var2 = var4.prNumbers;
                    var2 = var2.length;
                    var2 = var7 < var2;
                    var7 = 0;
                    if (!var2) {
                        _fun28696_ip = 241;
                        continue _fun28696
                    }
                case 202:
                    var8 = var0.int32;
                    var2 = var4.prNumbers;
                    var2 = var2[var7];
                    var2 = var8.bind(var0)(var2);
                    var7 = var7 + 1;
                    var2 = var4.prNumbers;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28696_ip = 202;
                        continue _fun28696
                    }
                case 241:
                    var2 = var0.join;
                    var2 = var2.bind(var0)();
                case 250:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28696_ip = 314;
                        continue _fun28696
                    }
                case 265:
                    if (!(var5 == var2)) {
                        _fun28696_ip = 298;
                        continue _fun28696
                    }
                case 269:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 298:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 314:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var16 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot33 = var16;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'is_bot',
                'kind': 'scalar',
                'T': 8
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserIsBot'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28699: for (var _fun28699_ip = 0;;) switch (_fun28699_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.isBot = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28699_ip = 115;
                        continue _fun28699
                    }
                case 85:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 115:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28700: for (var _fun28700_ip = 0;;) switch (_fun28700_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28700_ip = 27;
                        continue _fun28700
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28700_ip = 338;
                        continue _fun28700
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28700_ip = 298;
                        continue _fun28700
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28700_ip = 218;
                        continue _fun28700
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28700_ip = 320;
                        continue _fun28700
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28700_ip = 186;
                        continue _fun28700
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28700_ip = 320;
                    continue _fun28700;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.isBot = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28700_ip = 82;
                        continue _fun28700
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28701: for (var _fun28701_ip = 0;;) switch (_fun28701_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.isBot;
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun28701_ip = 85;
                        continue _fun28701
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.isBot;
                    var2 = var3.bind(var5)(var2);
                case 85:
                    var2 = arg2;
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28701_ip = 160;
                        continue _fun28701
                    }
                case 98:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28701_ip = 142;
                        continue _fun28701
                    }
                case 105:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 142:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 160:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var15 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot34 = var15;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'min_age_years',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'max_age_years',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserAgeRange'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28706: for (var _fun28706_ip = 0;;) switch (_fun28706_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28706_ip = 110;
                        continue _fun28706
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28707: for (var _fun28707_ip = 0;;) switch (_fun28707_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28707_ip = 27;
                        continue _fun28707
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28707_ip = 471;
                        continue _fun28707
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun28707_ip = 383;
                        continue _fun28707
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun28707_ip = 311;
                        continue _fun28707
                    }
                case 126:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun28707_ip = 231;
                        continue _fun28707
                    }
                case 136:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun28707_ip = 453;
                        continue _fun28707
                    }
                case 160:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun28707_ip = 196;
                        continue _fun28707
                    }
                case 167:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 196:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun28707_ip = 453;
                    continue _fun28707;
                case 231:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 311:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.UInt32Value;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.maxAgeYears;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.maxAgeYears = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28707_ip = 453;
                    continue _fun28707;
                case 383:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.UInt32Value;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.minAgeYears;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.minAgeYears = var1;
                    var19 = var3;
                    var18 = var2;
                case 453:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28707_ip = 85;
                        continue _fun28707
                    }
                case 471:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28708: for (var _fun28708_ip = 0;;) switch (_fun28708_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.minAgeYears;
                    if (!var2) {
                        _fun28708_ip = 124;
                        continue _fun28708
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.minAgeYears;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var2 = var4.maxAgeYears;
                    if (!var2) {
                        _fun28708_ip = 239;
                        continue _fun28708
                    }
                case 133:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.maxAgeYears;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 239:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28708_ip = 313;
                        continue _fun28708
                    }
                case 251:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28708_ip = 295;
                        continue _fun28708
                    }
                case 258:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 295:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 313:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var14 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot35 = var14;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Fixed64Value'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28711: for (var _fun28711_ip = 0;;) switch (_fun28711_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28711_ip = 120;
                        continue _fun28711
                    }
                case 90:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 120:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28712: for (var _fun28712_ip = 0;;) switch (_fun28712_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28712_ip = 27;
                        continue _fun28712
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28712_ip = 347;
                        continue _fun28712
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28712_ip = 298;
                        continue _fun28712
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28712_ip = 218;
                        continue _fun28712
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28712_ip = 329;
                        continue _fun28712
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28712_ip = 186;
                        continue _fun28712
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28712_ip = 329;
                    continue _fun28712;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.fixed64;
                    var19 = var1.bind(var16)();
                    var1 = var19.toString;
                    var1 = var1.bind(var19)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28712_ip = 82;
                        continue _fun28712
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28713: for (var _fun28713_ip = 0;;) switch (_fun28713_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun28713_ip = 87;
                        continue _fun28713
                    }
                case 21:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Bit64;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.fixed64;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 87:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28713_ip = 164;
                        continue _fun28713
                    }
                case 102:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28713_ip = 146;
                        continue _fun28713
                    }
                case 109:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 146:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 164:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var13 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot36 = var13;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'min_id',
                'kind': 'message'
            };
            var5 = function() {
                var0 = _closure1_slot36;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'max_id',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot36;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserIDRange'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28718: for (var _fun28718_ip = 0;;) switch (_fun28718_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28718_ip = 110;
                        continue _fun28718
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28719: for (var _fun28719_ip = 0;;) switch (_fun28719_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28719_ip = 27;
                        continue _fun28719
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28719_ip = 430;
                        continue _fun28719
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun28719_ip = 361;
                        continue _fun28719
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun28719_ip = 308;
                        continue _fun28719
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28719_ip = 228;
                        continue _fun28719
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28719_ip = 412;
                        continue _fun28719
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28719_ip = 193;
                        continue _fun28719
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28719_ip = 412;
                    continue _fun28719;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var21 = _closure1_slot36;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.maxId;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.maxId = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun28719_ip = 412;
                    continue _fun28719;
                case 361:
                    var21 = _closure1_slot36;
                    var20 = var21.internalBinaryRead;
                    var1 = var16.uint32;
                    var29 = var1.bind(var16)();
                    var27 = var0.minId;
                    var31 = var21;
                    var30 = var16;
                    var28 = var15;
                    var1 = var31[var20](var30, var29, var28, var27, var26);
                    var0.minId = var1;
                    var18 = var3;
                    var17 = var2;
                case 412:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28719_ip = 82;
                        continue _fun28719
                    }
                case 430:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28720: for (var _fun28720_ip = 0;;) switch (_fun28720_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.minId;
                    if (!var2) {
                        _fun28720_ip = 110;
                        continue _fun28720
                    }
                case 18:
                    var6 = _closure1_slot36;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.minId;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 110:
                    var2 = var4.maxId;
                    if (!var2) {
                        _fun28720_ip = 211;
                        continue _fun28720
                    }
                case 119:
                    var6 = _closure1_slot36;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.maxId;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 6;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 211:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28720_ip = 285;
                        continue _fun28720
                    }
                case 223:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28720_ip = 267;
                        continue _fun28720
                    }
                case 230:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 267:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 285:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var12 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot37 = var12;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'mask',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserHasFlag'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28723: for (var _fun28723_ip = 0;;) switch (_fun28723_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.mask = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28723_ip = 121;
                        continue _fun28723
                    }
                case 91:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 121:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28724: for (var _fun28724_ip = 0;;) switch (_fun28724_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28724_ip = 27;
                        continue _fun28724
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28724_ip = 347;
                        continue _fun28724
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28724_ip = 298;
                        continue _fun28724
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28724_ip = 218;
                        continue _fun28724
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28724_ip = 329;
                        continue _fun28724
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28724_ip = 186;
                        continue _fun28724
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28724_ip = 329;
                    continue _fun28724;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.fixed64;
                    var19 = var1.bind(var16)();
                    var1 = var19.toString;
                    var1 = var1.bind(var19)();
                    var0.mask = var1;
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28724_ip = 82;
                        continue _fun28724
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28725: for (var _fun28725_ip = 0;;) switch (_fun28725_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.mask;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun28725_ip = 89;
                        continue _fun28725
                    }
                case 22:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Bit64;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.fixed64;
                    var1 = var4.mask;
                    var1 = var2.bind(var3)(var1);
                case 89:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28725_ip = 166;
                        continue _fun28725
                    }
                case 104:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28725_ip = 148;
                        continue _fun28725
                    }
                case 111:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 148:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 166:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var11 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot38 = var11;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(3);
            var0 = {
                'no': 1,
                'name': 'hash_key',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'stop_ring_position',
                'kind': 'scalar',
                'T': 13
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'start_ring_position',
                'kind': 'scalar',
                'T': 13
            };
            var5[2] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UnitIdInRangeByHash'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_UTILITY';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28728: for (var _fun28728_ip = 0;;) switch (_fun28728_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'hashKey': '',
                        'stopRingPosition': 0,
                        'startRingPosition': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28728_ip = 122;
                        continue _fun28728
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28729: for (var _fun28729_ip = 0;;) switch (_fun28729_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28729_ip = 27;
                        continue _fun28729
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28729_ip = 405;
                        continue _fun28729
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun28729_ip = 366;
                        continue _fun28729
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun28729_ip = 342;
                        continue _fun28729
                    }
                case 126:
                    if (!(var7 !== var26)) {
                        _fun28729_ip = 318;
                        continue _fun28729
                    }
                case 133:
                    var20 = var16.readUnknownField;
                    if (!(var8 !== var20)) {
                        _fun28729_ip = 238;
                        continue _fun28729
                    }
                case 143:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var9 !== var20)) {
                        _fun28729_ip = 387;
                        continue _fun28729
                    }
                case 167:
                    var22 = var20;
                    if (!(var10 === var20)) {
                        _fun28729_ip = 203;
                        continue _fun28729
                    }
                case 174:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 203:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun28729_ip = 387;
                    continue _fun28729;
                case 238:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 318:
                    var1 = var17.uint32;
                    var1 = var1.bind(var17)();
                    var0.startRingPosition = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28729_ip = 387;
                    continue _fun28729;
                case 342:
                    var1 = var17.uint32;
                    var1 = var1.bind(var17)();
                    var0.stopRingPosition = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28729_ip = 387;
                    continue _fun28729;
                case 366:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.hashKey = var1;
                    var19 = var3;
                    var18 = var2;
                case 387:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28729_ip = 85;
                        continue _fun28729
                    }
                case 405:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28730: for (var _fun28730_ip = 0;;) switch (_fun28730_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.hashKey;
                    var1 = '';
                    if (!(var1 !== var2)) {
                        _fun28730_ip = 86;
                        continue _fun28730
                    }
                case 20:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.string;
                    var1 = var4.hashKey;
                    var1 = var2.bind(var3)(var1);
                case 86:
                    var1 = var4.stopRingPosition;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun28730_ip = 165;
                        continue _fun28730
                    }
                case 98:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.uint32;
                    var1 = var4.stopRingPosition;
                    var1 = var3.bind(var5)(var1);
                case 165:
                    var1 = var4.startRingPosition;
                    if (!(var2 !== var1)) {
                        _fun28730_ip = 242;
                        continue _fun28730
                    }
                case 175:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 3;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.uint32;
                    var1 = var4.startRingPosition;
                    var1 = var2.bind(var3)(var1);
                case 242:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28730_ip = 319;
                        continue _fun28730
                    }
                case 257:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28730_ip = 301;
                        continue _fun28730
                    }
                case 264:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 301:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 319:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var10 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot39 = var10;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'release_channels',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.ClientReleaseChannel'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_CLIENT';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28733: for (var _fun28733_ip = 0;;) switch (_fun28733_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.releaseChannels = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28733_ip = 119;
                        continue _fun28733
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28734: for (var _fun28734_ip = 0;;) switch (_fun28734_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28734_ip = 27;
                        continue _fun28734
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28734_ip = 347;
                        continue _fun28734
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28734_ip = 298;
                        continue _fun28734
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28734_ip = 218;
                        continue _fun28734
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28734_ip = 329;
                        continue _fun28734
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28734_ip = 186;
                        continue _fun28734
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28734_ip = 329;
                    continue _fun28734;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.releaseChannels;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28734_ip = 82;
                        continue _fun28734
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28735: for (var _fun28735_ip = 0;;) switch (_fun28735_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.releaseChannels;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28735_ip = 114;
                        continue _fun28735
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.releaseChannels;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.releaseChannels;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28735_ip = 37;
                        continue _fun28735
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28735_ip = 178;
                        continue _fun28735
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28735_ip = 162;
                        continue _fun28735
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var9 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot40 = var9;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 8
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Always'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_UTILITY';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28738: for (var _fun28738_ip = 0;;) switch (_fun28738_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.value = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28738_ip = 114;
                        continue _fun28738
                    }
                case 84:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 114:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28739: for (var _fun28739_ip = 0;;) switch (_fun28739_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28739_ip = 27;
                        continue _fun28739
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28739_ip = 338;
                        continue _fun28739
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28739_ip = 298;
                        continue _fun28739
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28739_ip = 218;
                        continue _fun28739
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28739_ip = 320;
                        continue _fun28739
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28739_ip = 186;
                        continue _fun28739
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28739_ip = 320;
                    continue _fun28739;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28739_ip = 82;
                        continue _fun28739
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28740: for (var _fun28740_ip = 0;;) switch (_fun28740_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun28740_ip = 83;
                        continue _fun28740
                    }
                case 17:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.value;
                    var2 = var3.bind(var5)(var2);
                case 83:
                    var2 = arg2;
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28740_ip = 158;
                        continue _fun28740
                    }
                case 96:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28740_ip = 140;
                        continue _fun28740
                    }
                case 103:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 140:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 158:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var8 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot41 = var8;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'experiment_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'variation_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 5
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UnitIdInExperiment'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_UTILITY';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28743: for (var _fun28743_ip = 0;;) switch (_fun28743_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.experimentId = var1;
                    var1 = new Array(0);
                    var0.variationIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28743_ip = 130;
                        continue _fun28743
                    }
                case 100:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 130:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28744: for (var _fun28744_ip = 0;;) switch (_fun28744_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28744_ip = 27;
                        continue _fun28744
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28744_ip = 523;
                        continue _fun28744
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var5];
                    var21 = var1[var6];
                    if (!(var6 !== var27)) {
                        _fun28744_ip = 468;
                        continue _fun28744
                    }
                case 118:
                    if (!(var7 !== var27)) {
                        _fun28744_ip = 316;
                        continue _fun28744
                    }
                case 125:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28744_ip = 236;
                        continue _fun28744
                    }
                case 135:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28744_ip = 502;
                        continue _fun28744
                    }
                case 162:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28744_ip = 198;
                        continue _fun28744
                    }
                case 169:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 198:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28744_ip = 502;
                    continue _fun28744;
                case 236:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 316:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28744_ip = 385;
                        continue _fun28744
                    }
                case 348:
                    var22 = var0.variationIds;
                    var21 = var22.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28744_ip = 502;
                    continue _fun28744;
                case 385:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28744_ip = 502;
                        continue _fun28744
                    }
                case 422:
                    var23 = var0.variationIds;
                    var22 = var23.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28744_ip = 422;
                        continue _fun28744
                    }
                case 466:
                    _fun28744_ip = 502;
                    continue _fun28744;
                case 468:
                    var1 = var17.fixed64;
                    var21 = var1.bind(var17)();
                    var1 = var21.toString;
                    var1 = var1.bind(var21)();
                    var0.experimentId = var1;
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                case 502:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28744_ip = 84;
                        continue _fun28744
                    }
                case 523:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28745: for (var _fun28745_ip = 0;;) switch (_fun28745_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.experimentId;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun28745_ip = 89;
                        continue _fun28745
                    }
                case 22:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Bit64;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.fixed64;
                    var1 = var4.experimentId;
                    var1 = var2.bind(var3)(var1);
                case 89:
                    var1 = var4.variationIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28745_ip = 234;
                        continue _fun28745
                    }
                case 106:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 2;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.variationIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28745_ip = 225;
                        continue _fun28745
                    }
                case 186:
                    var3 = var0.int32;
                    var1 = var4.variationIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.variationIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28745_ip = 186;
                        continue _fun28745
                    }
                case 225:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 234:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28745_ip = 311;
                        continue _fun28745
                    }
                case 249:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28745_ip = 293;
                        continue _fun28745
                    }
                case 256:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 293:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 311:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var7 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot42 = var7;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'premium_types',
                'kind': 'scalar',
                'repeat': 1,
                'T': 5
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UserPremiumType'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_USER';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28748: for (var _fun28748_ip = 0;;) switch (_fun28748_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.premiumTypes = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28748_ip = 119;
                        continue _fun28748
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28749: for (var _fun28749_ip = 0;;) switch (_fun28749_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28749_ip = 27;
                        continue _fun28749
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28749_ip = 480;
                        continue _fun28749
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun28749_ip = 309;
                        continue _fun28749
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28749_ip = 229;
                        continue _fun28749
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28749_ip = 459;
                        continue _fun28749
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28749_ip = 191;
                        continue _fun28749
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28749_ip = 459;
                    continue _fun28749;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28749_ip = 378;
                        continue _fun28749
                    }
                case 341:
                    var22 = var0.premiumTypes;
                    var21 = var22.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28749_ip = 459;
                    continue _fun28749;
                case 378:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28749_ip = 459;
                        continue _fun28749
                    }
                case 415:
                    var23 = var0.premiumTypes;
                    var22 = var23.push;
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28749_ip = 415;
                        continue _fun28749
                    }
                case 459:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28749_ip = 84;
                        continue _fun28749
                    }
                case 480:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28750: for (var _fun28750_ip = 0;;) switch (_fun28750_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.premiumTypes;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28750_ip = 151;
                        continue _fun28750
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.premiumTypes;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28750_ip = 142;
                        continue _fun28750
                    }
                case 103:
                    var3 = var0.int32;
                    var1 = var4.premiumTypes;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.premiumTypes;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28750_ip = 103;
                        continue _fun28750
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28750_ip = 228;
                        continue _fun28750
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28750_ip = 210;
                        continue _fun28750
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var6 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot43 = var6;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(2);
            var0 = {
                'no': 1,
                'name': 'filter_snapshot_name',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'target_filter_values',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_UTILITY';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28753: for (var _fun28753_ip = 0;;) switch (_fun28753_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '';
                    var0.filterSnapshotName = var1;
                    var1 = new Array(0);
                    var0.targetFilterValues = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28753_ip = 128;
                        continue _fun28753
                    }
                case 98:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 128:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28754: for (var _fun28754_ip = 0;;) switch (_fun28754_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28754_ip = 27;
                        continue _fun28754
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28754_ip = 531;
                        continue _fun28754
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var5];
                    var21 = var1[var6];
                    if (!(var6 !== var27)) {
                        _fun28754_ip = 486;
                        continue _fun28754
                    }
                case 118:
                    if (!(var7 !== var27)) {
                        _fun28754_ip = 316;
                        continue _fun28754
                    }
                case 125:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28754_ip = 236;
                        continue _fun28754
                    }
                case 135:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28754_ip = 510;
                        continue _fun28754
                    }
                case 162:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28754_ip = 198;
                        continue _fun28754
                    }
                case 169:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 198:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28754_ip = 510;
                    continue _fun28754;
                case 236:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 316:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28754_ip = 394;
                        continue _fun28754
                    }
                case 348:
                    var22 = var0.targetFilterValues;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28754_ip = 510;
                    continue _fun28754;
                case 394:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28754_ip = 510;
                        continue _fun28754
                    }
                case 431:
                    var23 = var0.targetFilterValues;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28754_ip = 431;
                        continue _fun28754
                    }
                case 484:
                    _fun28754_ip = 510;
                    continue _fun28754;
                case 486:
                    var1 = var17.string;
                    var1 = var1.bind(var17)();
                    var0.filterSnapshotName = var1;
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                case 510:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28754_ip = 84;
                        continue _fun28754
                    }
                case 531:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28755: for (var _fun28755_ip = 0;;) switch (_fun28755_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.filterSnapshotName;
                    var1 = '';
                    if (!(var1 !== var2)) {
                        _fun28755_ip = 86;
                        continue _fun28755
                    }
                case 20:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.string;
                    var1 = var4.filterSnapshotName;
                    var1 = var2.bind(var3)(var1);
                case 86:
                    var1 = var4.targetFilterValues;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28755_ip = 231;
                        continue _fun28755
                    }
                case 103:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 2;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.targetFilterValues;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28755_ip = 222;
                        continue _fun28755
                    }
                case 183:
                    var3 = var0.fixed64;
                    var1 = var4.targetFilterValues;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.targetFilterValues;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28755_ip = 183;
                        continue _fun28755
                    }
                case 222:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 231:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28755_ip = 308;
                        continue _fun28755
                    }
                case 246:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28755_ip = 290;
                        continue _fun28755
                    }
                case 253:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 290:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 308:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var5 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot44 = var5;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'guild_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.GuildIds'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_GUILD';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28758: for (var _fun28758_ip = 0;;) switch (_fun28758_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.guildIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28758_ip = 119;
                        continue _fun28758
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28759: for (var _fun28759_ip = 0;;) switch (_fun28759_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28759_ip = 27;
                        continue _fun28759
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 6;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28759_ip = 498;
                        continue _fun28759
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun28759_ip = 309;
                        continue _fun28759
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun28759_ip = 229;
                        continue _fun28759
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun28759_ip = 477;
                        continue _fun28759
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun28759_ip = 191;
                        continue _fun28759
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun28759_ip = 477;
                    continue _fun28759;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun28759_ip = 387;
                        continue _fun28759
                    }
                case 341:
                    var22 = var0.guildIds;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun28759_ip = 477;
                    continue _fun28759;
                case 387:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun28759_ip = 477;
                        continue _fun28759
                    }
                case 424:
                    var23 = var0.guildIds;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun28759_ip = 424;
                        continue _fun28759
                    }
                case 477:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28759_ip = 84;
                        continue _fun28759
                    }
                case 498:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28760: for (var _fun28760_ip = 0;;) switch (_fun28760_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun28760_ip = 151;
                        continue _fun28760
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun28760_ip = 142;
                        continue _fun28760
                    }
                case 103:
                    var3 = var0.fixed64;
                    var1 = var4.guildIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.guildIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun28760_ip = 103;
                        continue _fun28760
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28760_ip = 228;
                        continue _fun28760
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28760_ip = 210;
                        continue _fun28760
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var51 = var4;
    var3 = new var51[var3](var50);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot45 = var4;
    var3 = var46[var1];
    var3 = var45.bind(var0)(var3);
    var47 = var3.MessageType;
    var3 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var0 = {
                'no': 1,
                'name': 'min_count',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'max_count',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UInt32Value;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.GuildMemberCountRange'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_GUILD';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28765: for (var _fun28765_ip = 0;;) switch (_fun28765_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28765_ip = 110;
                        continue _fun28765
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28766: for (var _fun28766_ip = 0;;) switch (_fun28766_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28766_ip = 27;
                        continue _fun28766
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28766_ip = 471;
                        continue _fun28766
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun28766_ip = 383;
                        continue _fun28766
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun28766_ip = 311;
                        continue _fun28766
                    }
                case 126:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun28766_ip = 231;
                        continue _fun28766
                    }
                case 136:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun28766_ip = 453;
                        continue _fun28766
                    }
                case 160:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun28766_ip = 196;
                        continue _fun28766
                    }
                case 167:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var10];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 196:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun28766_ip = 453;
                    continue _fun28766;
                case 231:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 311:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.UInt32Value;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.maxCount;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.maxCount = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28766_ip = 453;
                    continue _fun28766;
                case 383:
                    var20 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var20.bind(var13)(var1);
                    var22 = var1.UInt32Value;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.minCount;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.minCount = var1;
                    var19 = var3;
                    var18 = var2;
                case 453:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28766_ip = 85;
                        continue _fun28766
                    }
                case 471:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28767: for (var _fun28767_ip = 0;;) switch (_fun28767_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.minCount;
                    if (!var2) {
                        _fun28767_ip = 124;
                        continue _fun28767
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.minCount;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var2 = var4.maxCount;
                    if (!var2) {
                        _fun28767_ip = 239;
                        continue _fun28767
                    }
                case 133:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.UInt32Value;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.maxCount;
                    var8 = var0.tag;
                    var2 = 6;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 239:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28767_ip = 313;
                        continue _fun28767
                    }
                case 251:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28767_ip = 295;
                        continue _fun28767
                    }
                case 258:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 295:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 313:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var47);
    var47 = var3.prototype;
    var47 = Object.create(var47, {
        constructor: {
            value: var3
        }
    });
    var51 = var47;
    var3 = new var51[var3](var50);
    var3 = var3 instanceof Object ? var3 : var47;
    var _closure1_slot46 = var3;
    var1 = var46[var1];
    var1 = var45.bind(var0)(var1);
    var47 = var1.MessageType;
    var1 = function(arg0) { // Environment: var44
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot48;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'features',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.GuildHasFeature'];
            var0[1] = var5;
            var5 = {};
            var6 = 'FILTER_CATEGORY_GUILD';
            var5['discord_protos.discord_experimentation.v1.filter_category'] = var6;
            var0[2] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28770: for (var _fun28770_ip = 0;;) switch (_fun28770_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.features = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28770_ip = 119;
                        continue _fun28770
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28771: for (var _fun28771_ip = 0;;) switch (_fun28771_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28771_ip = 27;
                        continue _fun28771
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28771_ip = 347;
                        continue _fun28771
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun28771_ip = 298;
                        continue _fun28771
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun28771_ip = 218;
                        continue _fun28771
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun28771_ip = 329;
                        continue _fun28771
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun28771_ip = 186;
                        continue _fun28771
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun28771_ip = 329;
                    continue _fun28771;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.features;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun28771_ip = 82;
                        continue _fun28771
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28772: for (var _fun28772_ip = 0;;) switch (_fun28772_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.features;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun28772_ip = 114;
                        continue _fun28772
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.features;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.features;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun28772_ip = 37;
                        continue _fun28772
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun28772_ip = 178;
                        continue _fun28772
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun28772_ip = 162;
                        continue _fun28772
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var47);
    var47 = var1.prototype;
    var47 = Object.create(var47, {
        constructor: {
            value: var1
        }
    });
    var51 = var47;
    var1 = new var51[var1](var50);
    var1 = var1 instanceof Object ? var1 : var47;
    var _closure1_slot47 = var1;
    var44 = 8;
    var44 = var46[var44];
    var46 = var45.bind(var0)(var44);
    var45 = var46.fileFinishedImporting;
    var44 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx';
    var44 = var45.bind(var46)(var44);
    var2.Rule_Type = var43;
    var2.Rule_Subtype = var42;
    var2.FilterCategory = var41;
    var2.Rule = var40;
    var2.Override = var39;
    var2.Filter = var38;
    var2.StaffUsers = var37;
    var2.UserInGuild = var36;
    var2.UserIds = var35;
    var2.UserLocale = var34;
    var2.ClientLocale = var33;
    var2.ClientSystemLocale = var32;
    var2.ClientLocation = var31;
    var2.ClientLocation_Place = var30;
    var2.ClientLocation_ISORegion = var29;
    var2.ClientLocation_Location = var28;
    var2.ClientIP = var27;
    var2.ClientOperatingSystem = var26;
    var2.SDKVersion = var25;
    var2.SDKVersionRange = var24;
    var2.SDKVersionRangeBound = var23;
    var2.SDKVersionSpecifier = var22;
    var2.ClientPlatform = var21;
    var2.PlatformVersion = var20;
    var2.PlatformVersionRange = var19;
    var2.PlatformVersionRangeBound = var18;
    var2.PlatformVersionSpecifier = var17;
    var2.ClientRequiredChanges = var16;
    var2.UserIsBot = var15;
    var2.UserAgeRange = var14;
    var2.Fixed64Value = var13;
    var2.UserIDRange = var12;
    var2.UserHasFlag = var11;
    var2.UnitIdInRangeByHash = var10;
    var2.ClientReleaseChannel = var9;
    var2.Always = var8;
    var2.UnitIdInExperiment = var7;
    var2.UserPremiumType = var6;
    var2.UnitIdMatchesFilterSnapshot = var5;
    var2.GuildIds = var4;
    var2.GuildMemberCountRange = var3;
    var2.GuildHasFeature = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 1342, 2]);