// modules/connections/ConnectionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var6[var8];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 1;
    var3 = var6[var7];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.MetadataFields;
    var _closure1_slot6 = var4;
    var3 = var3.OperatorTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Permissions;
    var _closure1_slot8 = var4;
    var3 = var3.PlatformTypes;
    var _closure1_slot9 = var3;
    var3 = {};
    var3.AND = var8;
    var4 = 'AND';
    var3[var8] = var4;
    var3.OR = var7;
    var4 = 'OR';
    var3[var7] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/ConnectionsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
    var2.officialApplicationIds = var4;
    var2.ConnectionConfigurationRuleOperator = var3;
    var3 = function arg0() {
        _fun40826: for (var _fun40826_ip = 0;;) switch (_fun40826_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var7 = undefined;
                var2 = var1.bind(var7)(var0);
                var1 = var2.toURLSafe;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun40826_ip = 83;
                    continue _fun40826
                }
            case 45:
                var1 = {};
                var2 = global;
                var2 = var2.URLSearchParams;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var3;
                var2 = new var14[var2](var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var1.searchParams = var2;
                var0 = var1;
            case 83:
                var3 = var0.searchParams;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.fromEntries;
                var1 = var1.bind(var2)(var3);
                var4 = var1.code;
                var3 = var1.state;
                var2 = var1.error;
                var1 = var1.error_description;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 6;
                var9 = var8[var5];
                var11 = var6.bind(var7)(var9);
                var10 = var0.Array;
                var9 = var10.isArray;
                var9 = var9.bind(var10)(var4);
                var10 = !var9;
                var9 = 'Received multiple query param values for code';
                var9 = var11.bind(var7)(var10, var9);
                var9 = var8[var5];
                var11 = var6.bind(var7)(var9);
                var10 = var0.Array;
                var9 = var10.isArray;
                var9 = var9.bind(var10)(var3);
                var10 = !var9;
                var9 = 'Received multiple query param values for state';
                var9 = var11.bind(var7)(var10, var9);
                var9 = var8[var5];
                var11 = var6.bind(var7)(var9);
                var10 = var0.Array;
                var9 = var10.isArray;
                var9 = var9.bind(var10)(var2);
                var10 = !var9;
                var9 = 'Received multiple query param values for error';
                var9 = var11.bind(var7)(var10, var9);
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var0.Array;
                var0 = var5.isArray;
                var0 = var0.bind(var5)(var1);
                var5 = !var0;
                var0 = 'Received multiple query param values for error_description';
                var0 = var6.bind(var7)(var5, var0);
                var0 = {};
                var0.code = var4;
                var0.state = var3;
                var0.error = var2;
                var0.errorDescription = var1;
                return var0;
        }
    };
    var2.getCallbackParamsFromURL = var3;
    var3 = function arg0() {
        _fun40827: for (var _fun40827_ip = 0;;) switch (_fun40827_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.connectionType;
                var7 = var1.connectionMetadataField;
                var6 = var1.operator;
                var0 = var1.operatorText;
                var10 = var1.value;
                var9 = global;
                var4 = var9.Math;
                var2 = var4.round;
                var1 = var9.Number;
                var3 = undefined;
                var1 = var1.bind(var3)(var10);
                var10 = var2.bind(var4)(var1);
                var _closure2_slot0 = var10;
                var2 = _closure1_slot7;
                var2 = var2.EQUAL;
                if (!(var2 !== var6)) {
                    _fun40827_ip = 322;
                    continue _fun40827
                }
            case 89:
                var2 = _closure1_slot7;
                var2 = var2.NOT_EQUAL;
                if (!(var2 !== var6)) {
                    _fun40827_ip = 287;
                    continue _fun40827
                }
            case 106:
                var2 = _closure1_slot7;
                var2 = var2.LESS_THAN;
                if (!(var2 !== var6)) {
                    _fun40827_ip = 219;
                    continue _fun40827
                }
            case 120:
                var2 = _closure1_slot7;
                var2 = var2.GREATER_THAN;
                if (!(var2 !== var6)) {
                    _fun40827_ip = 151;
                    continue _fun40827
                }
            case 134:
                if (!(var3 !== var6)) {
                    _fun40827_ip = 147;
                    continue _fun40827
                }
            case 138:
                var4 = null;
                if (!(var4 === var6)) {
                    _fun40827_ip = 422;
                    continue _fun40827
                }
            case 147:
                var2 = null;
                return var2;
            case 151:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var2 = var12[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.wCVDHn;
                var14 = var9.Math;
                var13 = var14.max;
                var11 = 1;
                var12 = var10 + var11;
                var11 = 0;
                var11 = var13.bind(var14)(var11, var12);
                _closure2_slot0 = var11;
                _fun40827_ip = 422;
                continue _fun40827;
            case 219:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var2 = var12[var2];
                var2 = var11.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2["3ru8/N"];
                var12 = var9.Math;
                var11 = var12.max;
                var9 = 1;
                var10 = var10 - var9;
                var9 = 0;
                var9 = var11.bind(var12)(var9, var10);
                _closure2_slot0 = var9;
                _fun40827_ip = 422;
                continue _fun40827;
            case 287:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 7;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2["D9B/q2"];
                _fun40827_ip = 422;
                continue _fun40827;
            case 322:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 7;
                var2 = var2[var10];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var9 = var2.H97H4S;
                var2 = _closure1_slot9;
                var2 = var2.PAYPAL;
                var2 = var8 === var2;
                if (!var2) {
                    _fun40827_ip = 386;
                    continue _fun40827
                }
            case 372:
                var11 = _closure1_slot6;
                var11 = var11.PAYPAL_VERIFIED;
                var2 = var7 === var11;
            case 386:
                var4 = var9;
                if (!var2) {
                    _fun40827_ip = 422;
                    continue _fun40827
                }
            case 392:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2["N95b+f"];
            case 422:
                var2 = null;
                if (!(var2 != var0)) {
                    _fun40827_ip = 431;
                    continue _fun40827
                }
            case 428:
                var4 = var0;
            case 431:
                var0 = var4;
                if (!(var2 != var0)) {
                    _fun40827_ip = 2350;
                    continue _fun40827
                }
            case 441:
                var0 = var4;
                if (!(var2 != var6)) {
                    _fun40827_ip = 2350;
                    continue _fun40827
                }
            case 451:
                var6 = _closure1_slot9;
                var6 = var6.REDDIT;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 2085;
                    continue _fun40827
                }
            case 468:
                var6 = _closure1_slot9;
                var6 = var6.STEAM;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 1809;
                    continue _fun40827
                }
            case 485:
                var6 = _closure1_slot9;
                var6 = var6.BLUESKY;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 1603;
                    continue _fun40827
                }
            case 502:
                var6 = _closure1_slot9;
                var6 = var6.TWITTER;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 1327;
                    continue _fun40827
                }
            case 519:
                var6 = _closure1_slot9;
                var6 = var6.PAYPAL;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 1191;
                    continue _fun40827
                }
            case 536:
                var6 = _closure1_slot9;
                var6 = var6.EBAY;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 845;
                    continue _fun40827
                }
            case 553:
                var6 = _closure1_slot9;
                var6 = var6.TIKTOK;
                if (!(var6 !== var8)) {
                    _fun40827_ip = 569;
                    continue _fun40827
                }
            case 567:
                return var2;
            case 569:
                var6 = _closure1_slot6;
                var6 = var6.TIKTOK_VERIFIED;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 792;
                    continue _fun40827
                }
            case 586:
                var6 = _closure1_slot6;
                var6 = var6.TIKTOK_FOLLOWER_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 739;
                    continue _fun40827
                }
            case 603:
                var6 = _closure1_slot6;
                var6 = var6.TIKTOK_FOLLOWING_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 686;
                    continue _fun40827
                }
            case 617:
                var6 = _closure1_slot6;
                var6 = var6.TIKTOK_LIKES_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 633;
                    continue _fun40827
                }
            case 631:
                return var2;
            case 633:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["ar0WW+"];
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 686:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.zRta4X;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 739:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.qIPDRy;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 792:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.uv7ety;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 845:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1138;
                    continue _fun40827
                }
            case 862:
                var6 = _closure1_slot6;
                var6 = var6.EBAY_TOP_RATED_SELLER;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1085;
                    continue _fun40827
                }
            case 879:
                var6 = _closure1_slot6;
                var6 = var6.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1032;
                    continue _fun40827
                }
            case 896:
                var6 = _closure1_slot6;
                var6 = var6.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 979;
                    continue _fun40827
                }
            case 910:
                var6 = _closure1_slot6;
                var6 = var6.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 926;
                    continue _fun40827
                }
            case 924:
                return var2;
            case 926:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["6ZFYdK"];
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 979:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.QP5W1R;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1032:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.rl9Vgy;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.value = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1085:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.TEEYwa;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1138:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1191:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1274;
                    continue _fun40827
                }
            case 1205:
                var6 = _closure1_slot6;
                var6 = var6.PAYPAL_VERIFIED;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1221;
                    continue _fun40827
                }
            case 1219:
                return var2;
            case 1221:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.slSQuB;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1274:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1327:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1550;
                    continue _fun40827
                }
            case 1344:
                var6 = _closure1_slot6;
                var6 = var6.TWITTER_VERIFIED;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1497;
                    continue _fun40827
                }
            case 1361:
                var6 = _closure1_slot6;
                var6 = var6.TWITTER_FOLLOWERS_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1444;
                    continue _fun40827
                }
            case 1375:
                var6 = _closure1_slot6;
                var6 = var6.TWITTER_STATUSES_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1391;
                    continue _fun40827
                }
            case 1389:
                return var2;
            case 1391:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.MI7NKi;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1444:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.bkajar;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1497:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.xRygZL;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1550:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1603:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1756;
                    continue _fun40827
                }
            case 1620:
                var6 = _closure1_slot6;
                var6 = var6.BLUESKY_FOLLOWERS_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1703;
                    continue _fun40827
                }
            case 1634:
                var6 = _closure1_slot6;
                var6 = var6.BLUESKY_STATUSES_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1650;
                    continue _fun40827
                }
            case 1648:
                return var2;
            case 1650:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["dy3+NR"];
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1703:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.xIdKU8;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1756:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1809:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 2032;
                    continue _fun40827
                }
            case 1826:
                var6 = _closure1_slot6;
                var6 = var6.STEAM_GAME_COUNT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1979;
                    continue _fun40827
                }
            case 1843:
                var6 = _closure1_slot6;
                var6 = var6.STEAM_ITEM_COUNT_TF2;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1926;
                    continue _fun40827
                }
            case 1857:
                var6 = _closure1_slot6;
                var6 = var6.STEAM_ITEM_COUNT_DOTA2;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 1873;
                    continue _fun40827
                }
            case 1871:
                return var2;
            case 1873:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.dMnRar;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1926:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.MceZJ6;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 1979:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.H9eLoe;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 2032:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var9 = var6.intl;
                var8 = var9.format;
                var6 = {};
                var10 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6.platformQuantityHook = var10;
                var0 = var8.bind(var9)(var4, var6);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 2085:
                var6 = _closure1_slot6;
                var6 = var6.CREATED_AT;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 2302;
                    continue _fun40827
                }
            case 2102:
                var6 = _closure1_slot6;
                var6 = var6.REDDIT_TOTAL_KARMA;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 2252;
                    continue _fun40827
                }
            case 2119:
                var6 = _closure1_slot6;
                var6 = var6.REDDIT_GOLD;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 2202;
                    continue _fun40827
                }
            case 2133:
                var6 = _closure1_slot6;
                var6 = var6.REDDIT_MOD;
                if (!(var6 !== var7)) {
                    _fun40827_ip = 2149;
                    continue _fun40827
                }
            case 2147:
                return var2;
            case 2149:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.format;
                var2 = {};
                var8 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["9rPbEs"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2.platformQuantityHook = var8;
                var0 = var6.bind(var7)(var4, var2);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 2202:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.format;
                var2 = {};
                var8 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["+/5TCx"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2.platformQuantityHook = var8;
                var0 = var6.bind(var7)(var4, var2);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 2252:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.format;
                var2 = {};
                var8 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.P2JAEc;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.karma = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.platformQuantityHook = var8;
                var0 = var6.bind(var7)(var4, var2);
                _fun40827_ip = 2350;
                continue _fun40827;
            case 2302:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.intl;
                var2 = var3.format;
                var1 = {};
                var5 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var5[var0];
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.TPbtEu;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.days = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1.platformQuantityHook = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 2350:
                return var0;
        }
    };
    var2.getConnectionsCheckText = var3;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.tags;
            var1 = var0.guild_connections;
            var0 = null;
            var0 = var0 === var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isVerifiedRolesChannelVisible = var3;
    var3 = function arg0() {
        _fun40856: for (var _fun40856_ip = 0;;) switch (_fun40856_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildMember;
                var _closure2_slot0 = var4;
                var2 = var0.guild;
                var3 = var0.sortedGuildRoles;
                var7 = var0.channel;
                var5 = var0.onlyChannelConnectionRoles;
                var6 = undefined;
                if (!(var5 === var6)) {
                    _fun40856_ip = 45;
                    continue _fun40856
                }
            case 43:
                var5 = false;
            case 45:
                var0 = null;
                if (!(var0 != var4)) {
                    _fun40856_ip = 256;
                    continue _fun40856
                }
            case 54:
                var4 = var0 == var2;
                if (!var4) {
                    _fun40856_ip = 65;
                    continue _fun40856
                }
            case 61:
                var4 = var0 != var7;
            case 65:
                if (!var4) {
                    _fun40856_ip = 95;
                    continue _fun40856
                }
            case 68:
                var9 = _closure1_slot4;
                var8 = var9.getGuild;
                var4 = var7.getGuildId;
                var4 = var4.bind(var7)();
                var2 = var8.bind(var9)(var4);
            case 95:
                if (!(var0 != var2)) {
                    _fun40856_ip = 254;
                    continue _fun40856
                }
            case 102:
                var8 = var2.id;
                if (!(var0 == var3)) {
                    _fun40856_ip = 129;
                    continue _fun40856
                }
            case 111:
                var4 = _closure1_slot3;
                var2 = var4.getSortedRoles;
                var3 = var2.bind(var4)(var8);
            case 129:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun40857: for (var _fun40857_ip = 0;;) switch (_fun40857_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.tags;
                            var2 = var0.guild_connections;
                            var0 = null;
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun40857_ip = 52;
                                continue _fun40857
                            }
                        case 24:
                            var2 = _closure2_slot0;
                            var3 = var2.roles;
                            var2 = var3.includes;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 52:
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var1);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var3 = var8.bind(var6)(var1);
                var2 = var3.intersection;
                var1 = 9;
                var1 = var9[var1];
                var1 = var8.bind(var6)(var1);
                var1 = var1.bind(var6)(var7);
                var3 = var2.bind(var3)(var4, var1);
                var1 = var3.length;
                var2 = 0;
                if (!(!(var1 > var2))) {
                    _fun40856_ip = 233;
                    continue _fun40856
                }
            case 207:
                var1 = null;
                if (var5) {
                    _fun40856_ip = 231;
                    continue _fun40856
                }
            case 212:
                var5 = var4[var2];
                var6 = var0 != var5;
                var4 = null;
                if (!var6) {
                    _fun40856_ip = 228;
                    continue _fun40856
                }
            case 225:
                var4 = var5;
            case 228:
                var1 = var4;
            case 231:
                _fun40856_ip = 252;
                continue _fun40856;
            case 233:
                var3 = var3[var2];
                var4 = var0 != var3;
                var2 = null;
                if (!var4) {
                    _fun40856_ip = 249;
                    continue _fun40856
                }
            case 246:
                var2 = var3;
            case 249:
                var1 = var2;
            case 252:
                return var1;
            case 254:
                return var0;
            case 256:
                return var0;
        }
    };
    var2.getVisibleConnectionsRole = var3;
    var3 = function arg0, arg1() {
        _fun40858: for (var _fun40858_ip = 0;;) switch (_fun40858_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun40858_ip = 118;
                    continue _fun40858
                }
            case 9:
                var1 = '';
                if (!(var1 !== var4)) {
                    _fun40858_ip = 118;
                    continue _fun40858
                }
            case 17:
                var2 = global;
                var1 = var2.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var3;
                var7 = var4;
                var1 = new var8[var1](var7, var6);
                var5 = var1 instanceof Object ? var1 : var3;
                var1 = var2.Date;
                var3 = var5 instanceof var1;
                var1 = null;
                if (!var3) {
                    _fun40858_ip = 116;
                    continue _fun40858
                }
            case 63:
                var4 = var2.isNaN;
                var2 = var5.getTime;
                var3 = var2.bind(var5)();
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = null;
                if (var2) {
                    _fun40858_ip = 116;
                    continue _fun40858
                }
            case 91:
                var4 = var5.toLocaleDateString;
                var3 = arg1;
                var2 = {
                    'month': 'short',
                    'day': 'numeric',
                    'year': 'numeric'
                };
                var1 = var4.bind(var5)(var3, var2);
            case 116:
                return var1;
            case 118:
                return var0;
        }
    };
    var2.getCreatedAtDate = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun40860: for (var _fun40860_ip = 0;;) switch (_fun40860_ip) {
                case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getSortedRoles;
                    var5 = _closure2_slot0;
                    var0 = var5.id;
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.some;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.tags;
                        var1 = var0.guild_connections;
                        var0 = null;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
                    var2 = var8[var2];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.UNSAFE_isDismissibleContentDismissed;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.CONNECTIONS_NUX;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot5;
                    var3 = var4.can;
                    var1 = _closure1_slot8;
                    var1 = var1.MANAGE_ROLES;
                    var1 = var3.bind(var4)(var1, var5);
                    var0 = !var0;
                    if (!var0) {
                        _fun40860_ip = 140;
                        continue _fun40860
                    }
                case 137:
                    var0 = var2;
                case 140:
                    if (!var0) {
                        _fun40860_ip = 146;
                        continue _fun40860
                    }
                case 143:
                    var0 = var1;
                case 146:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useShowLinkedRolesAdminNux = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1674, 1410, 3091, 4523, 660, 1457, 44, 1234, 22, 4524, 566, 3212, 1358, 2]);