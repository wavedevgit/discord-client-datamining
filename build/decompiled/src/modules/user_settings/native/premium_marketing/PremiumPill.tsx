// modules/user_settings/native/premium_marketing/PremiumPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun57828: for (var _fun57828_ip = 0;;) switch (_fun57828_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'backgroundColor': null,
                    'borderRadius': null,
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'paddingHorizontal': 8,
                    'paddingVertical': 1
                };
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 4;
                var3 = var3[var5];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = arg0;
                if (var3) {
                    _fun57828_ip = 60;
                    continue _fun57828
                }
            case 47:
                var3 = var6.colors;
                var3 = var3.WHITE;
                _fun57828_ip = 71;
                continue _fun57828;
            case 60:
                var6 = var6.unsafe_rawColors;
                var3 = var6.BLACK;
            case 71:
                var1.backgroundColor = var3;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var2 = 'center';
                var0.pillContainer = var1;
                var1 = {};
                var1.textAlign = var2;
                var0.discountPillText = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/PremiumPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun57829: for (var _fun57829_ip = 0;;) switch (_fun57829_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.discountOffer;
                var _closure2_slot0 = var15;
                var14 = var2.shouldShowDiscountUpsell;
                var4 = undefined;
                if (!(var14 === var4)) {
                    _fun57829_ip = 29;
                    continue _fun57829
                }
            case 27:
                var14 = false;
            case 29:
                var _closure2_slot1 = var14;
                var16 = var2.isActiveDiscount;
                if (!(var16 === var4)) {
                    _fun57829_ip = 45;
                    continue _fun57829
                }
            case 43:
                var16 = false;
            case 45:
                var _closure2_slot2 = var16;
                var12 = var2.premiumType;
                var _closure2_slot3 = var12;
                var13 = var2.trialOffer;
                var _closure2_slot4 = var13;
                var10 = var2.style;
                var1 = var2.useWhiteBackground;
                if (!(var1 === var4)) {
                    _fun57829_ip = 86;
                    continue _fun57829
                }
            case 84:
                var1 = false;
            case 86:
                var6 = var2.hideTrialCountdown;
                if (!(var6 === var4)) {
                    _fun57829_ip = 98;
                    continue _fun57829
                }
            case 96:
                var6 = false;
            case 98:
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useTheme;
                var3 = var2.bind(var3)();
                var2 = !var1;
                if (!var2) {
                    _fun57829_ip = 157;
                    continue _fun57829
                }
            case 149:
                var1 = 'light';
                var2 = var1 === var3;
            case 157:
                var9 = 'black';
                if (!var2) {
                    _fun57829_ip = 168;
                    continue _fun57829
                }
            case 164:
                var9 = 'white';
            case 168:
                var1 = _closure1_slot6;
                var7 = var1.bind(var4)(var2);
                var3 = _closure1_slot3;
                var8 = var3.useMemo;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var0
                    _fun57830: for (var _fun57830_ip = 0;;) switch (_fun57830_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Date;
                            var1 = var2.parse;
                            var3 = _closure2_slot4;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun57830_ip = 42;
                                continue _fun57830
                            }
                        case 32:
                            var4 = _closure2_slot4;
                            var3 = var4.expires_at;
                        case 42:
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun57830_ip = 56;
                                continue _fun57830
                            }
                        case 53:
                            var0 = var3;
                        case 56:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var3)(var1, var2);
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 6;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = 60000;
                var8 = var2.bind(var4)(var8, var1);
                _closure2_slot6 = var8;
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.usePremiumTrialOfferPremiumType;
                var11 = var1.bind(var2)();
                _closure2_slot7 = var11;
                var2 = var3.useMemo;
                var1 = new Array(8);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var1[4] = var12;
                var1[5] = var11;
                var8 = var8.days;
                var1[6] = var8;
                var1[7] = var6;
                var0 = function() { // Environment: var0
                    _fun57831: for (var _fun57831_ip = 0;;) switch (_fun57831_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun57831_ip = 365;
                                continue _fun57831
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun57831_ip = 33;
                                continue _fun57831
                            }
                        case 23:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun57831_ip = 277;
                                continue _fun57831
                            }
                        case 33:
                            var0 = _closure2_slot4;
                            var1 = var3 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun57831_ip = 275;
                                continue _fun57831
                            }
                        case 49:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot7;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun57831_ip = 275;
                                continue _fun57831
                            }
                        case 66:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun57831_ip = 210;
                                continue _fun57831
                            }
                        case 76:
                            var6 = global;
                            var3 = var6.Number;
                            var2 = var3.isNaN;
                            var1 = _closure2_slot6;
                            var1 = var1.days;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun57831_ip = 210;
                                continue _fun57831
                            }
                        case 108:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 8;
                            var3 = var8[var1];
                            var2 = undefined;
                            var3 = var7.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var8[var1];
                            var1 = var7.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1["+FgdjP"];
                            var1 = {};
                            var9 = var6.Math;
                            var8 = var9.max;
                            var6 = _closure2_slot6;
                            var7 = var6.days;
                            var6 = 1;
                            var6 = var8.bind(var9)(var7, var6);
                            var1.days = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun57831_ip = 272;
                            continue _fun57831;
                        case 210:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 8;
                            var3 = var8[var2];
                            var6 = undefined;
                            var3 = var7.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.qVcfa0;
                            var1 = var3.bind(var4)(var2);
                        case 272:
                            var0 = var1;
                        case 275:
                            _fun57831_ip = 363;
                            continue _fun57831;
                        case 277:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 8;
                            var3 = var7[var1];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1.iiLbvu;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.discount;
                            var5 = var5.amount;
                            var1.percent = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 363:
                            _fun57831_ip = 427;
                            continue _fun57831;
                        case 365:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 8;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.EyjDRE;
                            var0 = var2.bind(var3)(var1);
                        case 427:
                            return var0;
                    }
                };
                var8 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 == var8;
                if (var1) {
                    _fun57829_ip = 451;
                    continue _fun57829
                }
            case 338:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = var7.pillContainer;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var10;
                var1.style = var6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 9;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var10 = 'text-xs/bold';
                var5.variant = var10;
                var5.color = var9;
                var7 = var7.discountPillText;
                var5.style = var7;
                var7 = var8.toUpperCase;
                var7 = var7.bind(var8)();
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 451:
                return var0;
        }
    };
    var2.PremiumPill = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3246, 7082, 7089, 1234, 3941, 2]);