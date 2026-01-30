// ../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun57895: for (var _fun57895_ip = 0;;) switch (_fun57895_ip) {
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
                _fun57895_ip = 74;
                continue _fun57895;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: BillingSettingsNitroGiftBanner$Type, environment: var5
            _fun57899: for (var _fun57899_ip = 0;;) switch (_fun57899_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = new Array(9);
                    var5 = {
                        'no': 1,
                        'name': 'asset_url',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[0] = var5;
                    var5 = {
                        'no': 2,
                        'name': 'header',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[1] = var5;
                    var5 = {
                        'no': 3,
                        'name': 'body',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[2] = var5;
                    var5 = {
                        'no': 4,
                        'name': 'background_asset_url',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[3] = var5;
                    var5 = {
                        'no': 5,
                        'name': 'gradient',
                        'kind': 'message'
                    };
                    var7 = function() { // Original name: T, environment: var6
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.Gradient;
                        return var0;
                    };
                    var5.T = var7;
                    var0[4] = var5;
                    var5 = {
                        'no': 6,
                        'name': 'text_color',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[5] = var5;
                    var5 = {
                        'no': 7,
                        'name': 'additional_terms',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[6] = var5;
                    var5 = {
                        'no': 8,
                        'name': 'asset',
                        'kind': 'message'
                    };
                    var7 = function() { // Original name: T, environment: var6
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.ThemeAwareAsset;
                        return var0;
                    };
                    var5.T = var7;
                    var0[7] = var5;
                    var5 = {
                        'no': 9,
                        'name': 'background_asset',
                        'kind': 'message'
                    };
                    var6 = function() { // Original name: T, environment: var6
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.ThemeAwareAsset;
                        return var0;
                    };
                    var5.T = var6;
                    var0[8] = var5;
                    var8 = ['discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner'];
                    var8[1] = var0;
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun57899_ip = 267;
                        continue _fun57899
                    }
                case 254:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun57899_ip = 301;
                    continue _fun57899;
                case 267:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 301:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun57903: for (var _fun57903_ip = 0;;) switch (_fun57903_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'assetUrl': '',
                        'header': '',
                        'body': '',
                        'backgroundAssetUrl': '',
                        'textColor': '',
                        'additionalTerms': ''
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 8;
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
                        _fun57903_ip = 122;
                        continue _fun57903
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
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun57904: for (var _fun57904_ip = 0;;) switch (_fun57904_ip) {
                case 0:
                    var22 = arg0;
                    var21 = arg2;
                    var0 = arg3;
                    var20 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun57904_ip = 27;
                        continue _fun57904
                    }
                case 18:
                    var1 = var20.create;
                    var0 = var1.bind(var20)();
                case 27:
                    var2 = var22.pos;
                    var1 = arg1;
                    var19 = var2 + var1;
                    var1 = var22.pos;
                    var1 = var1 < var19;
                    var18 = undefined;
                    var16 = 6;
                    var15 = 7;
                    var14 = 8;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 9;
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun57904_ip = 757;
                        continue _fun57904
                    }
                case 100:
                    var1 = var22.tag;
                    var23 = var1.bind(var22)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var18)(var23, var6);
                    var31 = var1[var4];
                    var30 = var1[var5];
                    if (!(var5 !== var31)) {
                        _fun57904_ip = 718;
                        continue _fun57904
                    }
                case 134:
                    if (!(var6 !== var31)) {
                        _fun57904_ip = 695;
                        continue _fun57904
                    }
                case 141:
                    if (!(var7 !== var31)) {
                        _fun57904_ip = 672;
                        continue _fun57904
                    }
                case 148:
                    if (!(var8 !== var31)) {
                        _fun57904_ip = 649;
                        continue _fun57904
                    }
                case 155:
                    if (!(var9 !== var31)) {
                        _fun57904_ip = 577;
                        continue _fun57904
                    }
                case 162:
                    if (!(var16 !== var31)) {
                        _fun57904_ip = 551;
                        continue _fun57904
                    }
                case 169:
                    if (!(var15 !== var31)) {
                        _fun57904_ip = 525;
                        continue _fun57904
                    }
                case 176:
                    if (!(var14 !== var31)) {
                        _fun57904_ip = 450;
                        continue _fun57904
                    }
                case 183:
                    if (!(var10 !== var31)) {
                        _fun57904_ip = 375;
                        continue _fun57904
                    }
                case 190:
                    var25 = var21.readUnknownField;
                    if (!(var11 !== var25)) {
                        _fun57904_ip = 295;
                        continue _fun57904
                    }
                case 200:
                    var1 = var22.skip;
                    var1 = var1.bind(var22)(var30);
                    var24 = var25;
                    var23 = var1;
                    if (!(var12 !== var25)) {
                        _fun57904_ip = 739;
                        continue _fun57904
                    }
                case 224:
                    var27 = var25;
                    if (!(var13 === var25)) {
                        _fun57904_ip = 260;
                        continue _fun57904
                    }
                case 231:
                    var28 = _closure1_slot0;
                    var26 = _closure1_slot1;
                    var26 = var26[var14];
                    var26 = var28.bind(var18)(var26);
                    var26 = var26.UnknownFieldHandler;
                    var27 = var26.onRead;
                case 260:
                    var36 = var20.typeName;
                    var37 = undefined;
                    var35 = var0;
                    var34 = var31;
                    var33 = var30;
                    var32 = var1;
                    var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                    var24 = var25;
                    var23 = var1;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 295:
                    var1 = global;
                    var25 = var1.globalThis;
                    var26 = var25.Error;
                    var32 = var20.typeName;
                    var1 = var1.HermesInternal;
                    var28 = var1.concat;
                    var37 = 'Unknown field ';
                    var35 = ' (wire type ';
                    var33 = ') for ';
                    var36 = var31;
                    var34 = var30;
                    var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                    var25 = var26.prototype;
                    var25 = Object.create(var25, {
                        constructor: {
                            value: var26
                        }
                    });
                    var37 = var25;
                    var1 = new var37[var26](var36, var35);
                    var1 = var1 instanceof Object ? var1 : var25;
                    throw var1;
                case 375:
                    var25 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var25.bind(var18)(var1);
                    var27 = var1.ThemeAwareAsset;
                    var26 = var27.internalBinaryRead;
                    var1 = var22.uint32;
                    var35 = var1.bind(var22)();
                    var33 = var0.backgroundAsset;
                    var37 = var27;
                    var36 = var22;
                    var34 = var21;
                    var1 = var37[var26](var36, var35, var34, var33, var32);
                    var0.backgroundAsset = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 450:
                    var25 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var25.bind(var18)(var1);
                    var27 = var1.ThemeAwareAsset;
                    var26 = var27.internalBinaryRead;
                    var1 = var22.uint32;
                    var35 = var1.bind(var22)();
                    var33 = var0.asset;
                    var37 = var27;
                    var36 = var22;
                    var34 = var21;
                    var1 = var37[var26](var36, var35, var34, var33, var32);
                    var0.asset = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 525:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.additionalTerms = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 551:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.textColor = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 577:
                    var25 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var16];
                    var1 = var25.bind(var18)(var1);
                    var27 = var1.Gradient;
                    var26 = var27.internalBinaryRead;
                    var1 = var22.uint32;
                    var35 = var1.bind(var22)();
                    var33 = var0.gradient;
                    var37 = var27;
                    var36 = var22;
                    var34 = var21;
                    var1 = var37[var26](var36, var35, var34, var33, var32);
                    var0.gradient = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 649:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.backgroundAssetUrl = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 672:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.body = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 695:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.header = var1;
                    var24 = var3;
                    var23 = var2;
                    _fun57904_ip = 739;
                    continue _fun57904;
                case 718:
                    var1 = var22.string;
                    var1 = var1.bind(var22)();
                    var0.assetUrl = var1;
                    var24 = var3;
                    var23 = var2;
                case 739:
                    var1 = var22.pos;
                    var3 = var24;
                    var2 = var23;
                    if (var1 < var19) {
                        _fun57904_ip = 100;
                        continue _fun57904
                    }
                case 757:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun57905: for (var _fun57905_ip = 0;;) switch (_fun57905_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.assetUrl;
                    var3 = '';
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 89;
                        continue _fun57905
                    }
                case 23:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 1;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.assetUrl;
                    var2 = var5.bind(var6)(var2);
                case 89:
                    var2 = var4.header;
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 163;
                        continue _fun57905
                    }
                case 98:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 2;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.header;
                    var2 = var5.bind(var6)(var2);
                case 163:
                    var2 = var4.body;
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 237;
                        continue _fun57905
                    }
                case 172:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 3;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.body;
                    var2 = var5.bind(var6)(var2);
                case 237:
                    var2 = var4.backgroundAssetUrl;
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 313;
                        continue _fun57905
                    }
                case 247:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 4;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.backgroundAssetUrl;
                    var2 = var5.bind(var6)(var2);
                case 313:
                    var2 = var4.gradient;
                    if (!var2) {
                        _fun57905_ip = 428;
                        continue _fun57905
                    }
                case 322:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 6;
                    var2 = var11[var2];
                    var8 = undefined;
                    var2 = var10.bind(var8)(var2);
                    var7 = var2.Gradient;
                    var6 = var7.internalBinaryWrite;
                    var5 = var4.gradient;
                    var9 = var0.tag;
                    var2 = 8;
                    var2 = var11[var2];
                    var2 = var10.bind(var8)(var2);
                    var2 = var2.WireType;
                    var8 = var2.LengthDelimited;
                    var2 = 5;
                    var8 = var9.bind(var0)(var2, var8);
                    var2 = var8.fork;
                    var2 = var2.bind(var8)();
                    var5 = var6.bind(var7)(var5, var2, var1);
                    var2 = var5.join;
                    var2 = var2.bind(var5)();
                case 428:
                    var2 = var4.textColor;
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 504;
                        continue _fun57905
                    }
                case 438:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.LengthDelimited;
                    var2 = 6;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.string;
                    var2 = var4.textColor;
                    var2 = var5.bind(var6)(var2);
                case 504:
                    var2 = var4.additionalTerms;
                    if (!(var3 !== var2)) {
                        _fun57905_ip = 580;
                        continue _fun57905
                    }
                case 514:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 7;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.additionalTerms;
                    var2 = var3.bind(var5)(var2);
                case 580:
                    var2 = var4.asset;
                    if (!var2) {
                        _fun57905_ip = 692;
                        continue _fun57905
                    }
                case 589:
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = 7;
                    var3 = var2[var3];
                    var9 = undefined;
                    var3 = var10.bind(var9)(var3);
                    var6 = var3.ThemeAwareAsset;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.asset;
                    var8 = var0.tag;
                    var7 = 8;
                    var2 = var2[var7];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var7 = var8.bind(var0)(var7, var2);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 692:
                    var2 = var4.backgroundAsset;
                    if (!var2) {
                        _fun57905_ip = 807;
                        continue _fun57905
                    }
                case 701:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.ThemeAwareAsset;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.backgroundAsset;
                    var8 = var0.tag;
                    var2 = 8;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 9;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 807:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun57905_ip = 881;
                        continue _fun57905
                    }
                case 819:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun57905_ip = 863;
                        continue _fun57905
                    }
                case 826:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 863:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 881:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BillingSettingsNitroGiftBanner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 7046, 7048, 1313, 2]);