// ../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = function arg0, arg1, arg2() {
        _fun47771: for (var _fun47771_ip = 0;;) switch (_fun47771_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun47771_ip = 51;
                    continue _fun47771
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun47771_ip = 92;
                continue _fun47771;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun47771_ip = 71;
                    continue _fun47771
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
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun47772: for (var _fun47772_ip = 0;;) switch (_fun47772_ip) {
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
                _fun47772_ip = 74;
                continue _fun47772;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var10 = 0;
    var3 = var8[var10];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var9 = 1;
    var3 = var8[var9];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var6 = 2;
    var3 = var8[var6];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var4 = 3;
    var3 = var8[var4];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var5 = {};
    var5.UNSPECIFIED_DISCLOSURE = var10;
    var3 = 'UNSPECIFIED_DISCLOSURE';
    var5[var10] = var3;
    var5.IP_LOCATION = var9;
    var3 = 'IP_LOCATION';
    var5[var9] = var3;
    var5.DISPLAYS_ADVERTISEMENTS = var6;
    var3 = 'DISPLAYS_ADVERTISEMENTS';
    var5[var6] = var3;
    var5.PARTNER_SDK_DATA_SHARING_MESSAGE = var4;
    var3 = 'PARTNER_SDK_DATA_SHARING_MESSAGE';
    var5[var4] = var3;
    var _closure1_slot8 = var5;
    var6 = 6;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot10;
            var0 = {
                'no': 1,
                'name': 'metadata',
                'kind': 'map',
                'K': 9
            };
            var5 = {
                'kind': 'scalar',
                'T': 9
            };
            var0.V = var5;
            var5 = new Array(4);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'platform_name',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'platform_username',
                'kind': 'scalar',
                'T': 9
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'version',
                'kind': 'scalar',
                'T': 6
            };
            var5[3] = var0;
            var0 = ['discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection'];
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
            _fun47777: for (var _fun47777_ip = 0;;) switch (_fun47777_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'metadata': null,
                        'platformName': '',
                        'platformUsername': '',
                        'version': '0'
                    };
                    var1 = {};
                    var0.metadata = var1;
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
                        _fun47777_ip = 130;
                        continue _fun47777
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
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun47778: for (var _fun47778_ip = 0;;) switch (_fun47778_ip) {
                case 0:
                    var18 = arg0;
                    var17 = arg2;
                    var0 = arg3;
                    var16 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun47778_ip = 27;
                        continue _fun47778
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
                    var12 = 6;
                    var11 = true;
                    var10 = false;
                    var9 = 'throw';
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun47778_ip = 450;
                        continue _fun47778
                    }
                case 88:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var14)(var19, var6);
                    var27 = var1[var4];
                    var26 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun47778_ip = 407;
                        continue _fun47778
                    }
                case 122:
                    if (!(var6 !== var27)) {
                        _fun47778_ip = 384;
                        continue _fun47778
                    }
                case 129:
                    if (!(var7 !== var27)) {
                        _fun47778_ip = 361;
                        continue _fun47778
                    }
                case 136:
                    if (!(var8 !== var27)) {
                        _fun47778_ip = 328;
                        continue _fun47778
                    }
                case 143:
                    var21 = var17.readUnknownField;
                    if (!(var9 !== var21)) {
                        _fun47778_ip = 248;
                        continue _fun47778
                    }
                case 153:
                    var1 = var18.skip;
                    var1 = var1.bind(var18)(var26);
                    var20 = var21;
                    var19 = var1;
                    if (!(var10 !== var21)) {
                        _fun47778_ip = 432;
                        continue _fun47778
                    }
                case 177:
                    var23 = var21;
                    if (!(var11 === var21)) {
                        _fun47778_ip = 213;
                        continue _fun47778
                    }
                case 184:
                    var24 = _closure1_slot0;
                    var22 = _closure1_slot1;
                    var22 = var22[var12];
                    var22 = var24.bind(var14)(var22);
                    var22 = var22.UnknownFieldHandler;
                    var23 = var22.onRead;
                case 213:
                    var32 = var16.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var26;
                    var28 = var1;
                    var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                    var20 = var21;
                    var19 = var1;
                    _fun47778_ip = 432;
                    continue _fun47778;
                case 248:
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
                case 328:
                    var1 = var18.fixed64;
                    var21 = var1.bind(var18)();
                    var1 = var21.toString;
                    var1 = var1.bind(var21)();
                    var0.version = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun47778_ip = 432;
                    continue _fun47778;
                case 361:
                    var1 = var18.string;
                    var1 = var1.bind(var18)();
                    var0.platformUsername = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun47778_ip = 432;
                    continue _fun47778;
                case 384:
                    var1 = var18.string;
                    var1 = var1.bind(var18)();
                    var0.platformName = var1;
                    var20 = var3;
                    var19 = var2;
                    _fun47778_ip = 432;
                    continue _fun47778;
                case 407:
                    var21 = var16.binaryReadMap1;
                    var1 = var0.metadata;
                    var1 = var21.bind(var16)(var1, var18, var17);
                    var20 = var3;
                    var19 = var2;
                case 432:
                    var1 = var18.pos;
                    var3 = var20;
                    var2 = var19;
                    if (var1 < var15) {
                        _fun47778_ip = 88;
                        continue _fun47778
                    }
                case 450:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun47779: for (var _fun47779_ip = 0;;) switch (_fun47779_ip) {
                case 0:
                    var11 = arg1;
                    var0 = var11.uint32;
                    var1 = var0.bind(var11)();
                    var0 = var11.pos;
                    var10 = var0 + var1;
                    var0 = var11.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var6 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = undefined;
                    if (!var2) {
                        _fun47779_ip = 172;
                        continue _fun47779
                    }
                case 55:
                    var2 = var11.tag;
                    var12 = var2.bind(var11)();
                    var2 = _closure1_slot2;
                    var12 = var2.bind(var0)(var12, var9);
                    var2 = var12[var6];
                    var12 = var12[var8];
                    if (!(var8 !== var2)) {
                        _fun47779_ip = 142;
                        continue _fun47779
                    }
                case 86:
                    if (!(var9 !== var2)) {
                        _fun47779_ip = 131;
                        continue _fun47779
                    }
                case 90:
                    var2 = global;
                    var2 = var2.globalThis;
                    var13 = var2.Error;
                    var2 = var13.prototype;
                    var12 = Object.create(var2, {
                        constructor: {
                            value: var13
                        }
                    });
                    var15 = 'unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata';
                    var16 = var12;
                    var2 = new var16[var13](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var12;
                    throw var2;
                case 131:
                    var2 = var11.string;
                    var12 = var2.bind(var11)();
                    _fun47779_ip = 154;
                    continue _fun47779;
                case 142:
                    var2 = var11.string;
                    var4 = var2.bind(var11)();
                    var12 = var3;
                case 154:
                    var2 = var11.pos;
                    var3 = var12;
                    var5 = var4;
                    var1 = var3;
                    if (var2 < var10) {
                        _fun47779_ip = 55;
                        continue _fun47779
                    }
                case 172:
                    var4 = null;
                    var6 = var4 != var5;
                    var3 = '';
                    var2 = var3;
                    if (!var6) {
                        _fun47779_ip = 191;
                        continue _fun47779
                    }
                case 188:
                    var2 = var5;
                case 191:
                    var4 = var4 != var1;
                    if (!var4) {
                        _fun47779_ip = 201;
                        continue _fun47779
                    }
                case 198:
                    var3 = var1;
                case 201:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun47780: for (var _fun47780_ip = 0;;) switch (_fun47780_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = var4.metadata;
                    var8 = var2.bind(var3)(var1);
                    var1 = var8.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    var9 = 2;
                    if (!var2) {
                        _fun47780_ip = 230;
                        continue _fun47780
                    }
                case 61:
                    var12 = var8[var7];
                    var11 = var0.tag;
                    var13 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var10 = var2[var6];
                    var10 = var13.bind(var3)(var10);
                    var10 = var10.WireType;
                    var10 = var10.LengthDelimited;
                    var11 = var11.bind(var0)(var5, var10);
                    var10 = var11.fork;
                    var14 = var10.bind(var11)();
                    var11 = var14.tag;
                    var10 = var2[var6];
                    var10 = var13.bind(var3)(var10);
                    var10 = var10.WireType;
                    var10 = var10.LengthDelimited;
                    var11 = var11.bind(var14)(var5, var10);
                    var10 = var11.string;
                    var11 = var10.bind(var11)(var12);
                    var10 = var11.tag;
                    var2 = var2[var6];
                    var2 = var13.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var11 = var10.bind(var11)(var9, var2);
                    var10 = var11.string;
                    var2 = var4.metadata;
                    var2 = var2[var12];
                    var10 = var10.bind(var11)(var2);
                    var2 = var10.join;
                    var2 = var2.bind(var10)();
                    var7 = var7 + 1;
                    var2 = var8.length;
                    if (var7 < var2) {
                        _fun47780_ip = 61;
                        continue _fun47780
                    }
                case 230:
                    var2 = var4.platformName;
                    var7 = '';
                    if (!(var7 !== var2)) {
                        _fun47780_ip = 299;
                        continue _fun47780
                    }
                case 244:
                    var8 = var0.tag;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var9, var2);
                    var8 = var9.string;
                    var2 = var4.platformName;
                    var2 = var8.bind(var9)(var2);
                case 299:
                    var2 = var4.platformUsername;
                    if (!(var7 !== var2)) {
                        _fun47780_ip = 367;
                        continue _fun47780
                    }
                case 309:
                    var8 = var0.tag;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var8 = var8.bind(var0)(var2, var7);
                    var7 = var8.string;
                    var2 = var4.platformUsername;
                    var2 = var7.bind(var8)(var2);
                case 367:
                    var7 = var4.version;
                    var2 = '0';
                    if (!(var2 !== var7)) {
                        _fun47780_ip = 442;
                        continue _fun47780
                    }
                case 383:
                    var8 = var0.tag;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.WireType;
                    var7 = var2.Bit64;
                    var2 = 4;
                    var8 = var8.bind(var0)(var2, var7);
                    var7 = var8.fixed64;
                    var2 = var4.version;
                    var2 = var7.bind(var8)(var2);
                case 442:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun47780_ip = 506;
                        continue _fun47780
                    }
                case 457:
                    if (!(var5 == var2)) {
                        _fun47780_ip = 490;
                        continue _fun47780
                    }
                case 461:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 490:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 506:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
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
    var14 = var4;
    var3 = new var14[var3](var13);
    var4 = var3 instanceof Object ? var3 : var4;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
    var9 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot10;
            var0 = {
                'no': 1,
                'name': 'disclosure_type',
                'kind': 'enum'
            };
            var5 = function() {
                var1 = _closure1_slot8;
                var0 = ['discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'acked_at',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var6;
            var5[1] = var0;
            var0 = ['discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure'];
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
            _fun47785: for (var _fun47785_ip = 0;;) switch (_fun47785_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.disclosureType = var1;
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
                        _fun47785_ip = 117;
                        continue _fun47785
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
            _fun47786: for (var _fun47786_ip = 0;;) switch (_fun47786_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun47786_ip = 27;
                        continue _fun47786
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
                        _fun47786_ip = 423;
                        continue _fun47786
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun47786_ip = 383;
                        continue _fun47786
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun47786_ip = 311;
                        continue _fun47786
                    }
                case 126:
                    var20 = var16.readUnknownField;
                    if (!(var7 !== var20)) {
                        _fun47786_ip = 231;
                        continue _fun47786
                    }
                case 136:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var8 !== var20)) {
                        _fun47786_ip = 405;
                        continue _fun47786
                    }
                case 160:
                    var22 = var20;
                    if (!(var9 === var20)) {
                        _fun47786_ip = 196;
                        continue _fun47786
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
                    _fun47786_ip = 405;
                    continue _fun47786;
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
                    var22 = var1.Timestamp;
                    var21 = var22.internalBinaryRead;
                    var1 = var17.uint32;
                    var30 = var1.bind(var17)();
                    var28 = var0.ackedAt;
                    var32 = var22;
                    var31 = var17;
                    var29 = var16;
                    var1 = var32[var21](var31, var30, var29, var28, var27);
                    var0.ackedAt = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun47786_ip = 405;
                    continue _fun47786;
                case 383:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.disclosureType = var1;
                    var19 = var3;
                    var18 = var2;
                case 405:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun47786_ip = 85;
                        continue _fun47786
                    }
                case 423:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun47787: for (var _fun47787_ip = 0;;) switch (_fun47787_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var3 = var4.disclosureType;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun47787_ip = 88;
                        continue _fun47787
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
                    var3 = var5.int32;
                    var2 = var4.disclosureType;
                    var2 = var3.bind(var5)(var2);
                case 88:
                    var2 = var4.ackedAt;
                    if (!var2) {
                        _fun47787_ip = 203;
                        continue _fun47787
                    }
                case 97:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.ackedAt;
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
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun47787_ip = 277;
                        continue _fun47787
                    }
                case 215:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun47787_ip = 259;
                        continue _fun47787
                    }
                case 222:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 259:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 277:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var9);
    var9 = var3.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var3
        }
    });
    var14 = var9;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot9 = var3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot10;
            var0 = {
                'no': 1,
                'name': 'acked_disclosures',
                'kind': 'message',
                'repeat': 1
            };
            var5 = function() {
                var0 = _closure1_slot9;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures'];
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
            _fun47791: for (var _fun47791_ip = 0;;) switch (_fun47791_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.ackedDisclosures = var1;
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
                        _fun47791_ip = 119;
                        continue _fun47791
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
            _fun47792: for (var _fun47792_ip = 0;;) switch (_fun47792_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun47792_ip = 27;
                        continue _fun47792
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
                        _fun47792_ip = 368;
                        continue _fun47792
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun47792_ip = 301;
                        continue _fun47792
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun47792_ip = 221;
                        continue _fun47792
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun47792_ip = 350;
                        continue _fun47792
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun47792_ip = 186;
                        continue _fun47792
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
                    _fun47792_ip = 350;
                    continue _fun47792;
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
                    var20 = var0.ackedDisclosures;
                    var19 = var20.push;
                    var22 = _closure1_slot9;
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
                        _fun47792_ip = 82;
                        continue _fun47792
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
            _fun47793: for (var _fun47793_ip = 0;;) switch (_fun47793_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.ackedDisclosures;
                    var1 = var1.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 6;
                    var3 = undefined;
                    var5 = 1;
                    if (!var7) {
                        _fun47793_ip = 143;
                        continue _fun47793
                    }
                case 40:
                    var11 = _closure1_slot9;
                    var10 = var11.internalBinaryWrite;
                    var7 = var4.ackedDisclosures;
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
                    var7 = var4.ackedDisclosures;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun47793_ip = 40;
                        continue _fun47793
                    }
                case 143:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun47793_ip = 204;
                        continue _fun47793
                    }
                case 155:
                    if (!(var5 == var2)) {
                        _fun47793_ip = 188;
                        continue _fun47793
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
    var1 = var1.bind(var0)(var6);
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var14 = var6;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx';
    var6 = var7.bind(var8)(var6);
    var2.ApplicationDisclosureType = var5;
    var2.ApplicationUserRoleConnection = var4;
    var2.AcknowledgedApplicationDisclosure = var3;
    var2.AcknowledgedApplicationDisclosures = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 1341, 2]);