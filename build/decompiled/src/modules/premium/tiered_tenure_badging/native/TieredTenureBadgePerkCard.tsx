// modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var7 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.badgeNameContainer = var8;
    var8 = {};
    var8.marginStart = var10;
    var3.tenureRequirements = var8;
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var3.image = var8;
    var8 = {
        'height': 238,
        'paddingVertical': 32
    };
    var3.imageContainer = var8;
    var8 = {};
    var10 = 0.4;
    var8.opacity = var10;
    var3.upcomingBadge = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.title = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun59398: for (var _fun59398_ip = 0;;) switch (_fun59398_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var16 = 6;
                var0 = var3[var16];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var0 = var5.useTieredTenureBadgeData;
                var14 = var0.bind(var5)();
                var _closure2_slot0 = var14;
                var0 = var3[var16];
                var5 = var2.bind(var4)(var0);
                var0 = var5.usePremiumSince;
                var19 = var0.bind(var5)();
                var0 = _closure1_slot9;
                var13 = var0.bind(var4)();
                var0 = 7;
                var0 = var3[var0];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var7.bind(var8)(var5, var0);
                var _closure2_slot1 = var7;
                var0 = 8;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useMobileTenureBadgeImages;
                var0 = null;
                var8 = var0 == var14;
                var2 = undefined;
                if (var8) {
                    _fun59398_ip = 146;
                    continue _fun59398
                }
            case 141:
                var2 = var14.id;
            case 146:
                var2 = var3.bind(var5)(var2);
                var3 = var0 == var2;
                var8 = undefined;
                if (var3) {
                    _fun59398_ip = 166;
                    continue _fun59398
                }
            case 160:
                var8 = var2.large;
            case 166:
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var9 = var0 == var14;
                var7 = undefined;
                if (var9) {
                    _fun59398_ip = 197;
                    continue _fun59398
                }
            case 192:
                var7 = var14.id;
            case 197:
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    _fun59400: for (var _fun59400_ip = 0;;) switch (_fun59400_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var7 = null;
                            if (!(var7 != var0)) {
                                _fun59400_ip = 227;
                                continue _fun59400
                            }
                        case 16:
                            var0 = _closure2_slot0;
                            var1 = var7 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var1) {
                                _fun59400_ip = 40;
                                continue _fun59400
                            }
                        case 31:
                            var1 = _closure2_slot0;
                            var0 = var1.id;
                        case 40:
                            if (!(var7 != var0)) {
                                _fun59400_ip = 117;
                                continue _fun59400
                            }
                        case 44:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.track;
                            var0 = _closure1_slot6;
                            var1 = var0.TIERED_TENURE_BADGE_PERK_CARD_CLICKED;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var7 = var7 == var4;
                            var4 = undefined;
                            if (var7) {
                                _fun59400_ip = 106;
                                continue _fun59400
                            }
                        case 97:
                            var7 = _closure2_slot0;
                            var4 = var7.id;
                        case 106:
                            var0.badge = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 117:
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var1 = var7[var1];
                            var4 = var2.bind(var6)(var1);
                            var3 = var4.openLazy;
                            var1 = _closure1_slot0;
                            var0 = 12;
                            var0 = var7[var0];
                            var8 = var1.bind(var6)(var0);
                            var0 = 11;
                            var2 = var7[var0];
                            var0 = var7.paths;
                            var2 = var8.bind(var6)(var2, var0);
                            var0 = 13;
                            var0 = var7[var0];
                            var0 = var1.bind(var6)(var0);
                            var1 = var0.TIERED_TENURE_BADGE_ACTION_SHEET_KEY;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var0.userId = var5;
                            var5 = false;
                            var0.shouldShowCTA = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 227:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var3.bind(var5)(var1, var2);
                if (!(var0 != var14)) {
                    _fun59398_ip = 1341;
                    continue _fun59398
                }
            case 219:
                var2 = var14.status;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var16];
                var1 = var3.bind(var4)(var1);
                var1 = var1.TieredTenureBadgeStatus;
                var1 = var1.UPCOMING;
                if (!(var2 !== var1)) {
                    _fun59398_ip = 314;
                    continue _fun59398
                }
            case 257:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var2 = var9[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var9[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["jyYgZ+"];
                var5 = var2.bind(var3)(var1);
                _fun59398_ip = 371;
                continue _fun59398;
            case 314:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 14;
                var2 = var10[var1];
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.O9TBwQ;
                var5 = var2.bind(var3)(var1);
            case 371:
                var1 = var0 != var19;
                var11 = var8;
                var18 = null;
                if (!var1) {
                    _fun59398_ip = 755;
                    continue _fun59398
                }
            case 386:
                var2 = var14.status;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var16];
                var1 = var3.bind(var4)(var1);
                var1 = var1.TieredTenureBadgeStatus;
                var1 = var1.EARNED;
                if (!(var2 !== var1)) {
                    _fun59398_ip = 652;
                    continue _fun59398
                }
            case 427:
                var9 = var14.status;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var16];
                var1 = var2.bind(var4)(var1);
                var1 = var1.TieredTenureBadgeStatus;
                var3 = var1.UPCOMING;
                var2 = var8;
                var1 = null;
                if (!(var9 === var3)) {
                    _fun59398_ip = 650;
                    continue _fun59398
                }
            case 473:
                var20 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 14;
                var3 = var12[var17];
                var3 = var20.bind(var4)(var3);
                var15 = var3.intl;
                var10 = var15.format;
                var3 = var12[var17];
                var3 = var20.bind(var4)(var3);
                var3 = var3.t;
                var9 = var3.vwLvec;
                var3 = {};
                var21 = var12[var17];
                var21 = var20.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.formatToPlainString;
                var17 = var12[var17];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var20 = var17["k2UNz+"];
                var17 = {};
                var23 = var14.daysLeft;
                var17.days = var23;
                var17 = var21.bind(var22)(var20, var17);
                var3.timeFrame = var17;
                var17 = global;
                var17 = var17.Date;
                var20 = var17.prototype;
                var20 = Object.create(var20, {
                    constructor: {
                        value: var17
                    }
                });
                var26 = var20;
                var25 = var19;
                var17 = new var26[var17](var25, var24);
                var17 = var17 instanceof Object ? var17 : var20;
                var3.date = var17;
                var1 = var10.bind(var15)(var9, var3);
                var10 = _closure1_slot1;
                var9 = 15;
                var9 = var12[var9];
                var2 = var10.bind(var4)(var9);
            case 650:
                _fun59398_ip = 749;
                continue _fun59398;
            case 652:
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var3 = 14;
                var10 = var15[var3];
                var10 = var9.bind(var4)(var10);
                var12 = var10.intl;
                var10 = var12.format;
                var3 = var15[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var9 = var3.Hu4jfi;
                var3 = {};
                var15 = global;
                var15 = var15.Date;
                var17 = var15.prototype;
                var17 = Object.create(var17, {
                    constructor: {
                        value: var15
                    }
                });
                var26 = var17;
                var25 = var19;
                var15 = new var26[var15](var25, var24);
                var15 = var15 instanceof Object ? var15 : var17;
                var3.date = var15;
                var1 = var10.bind(var12)(var9, var3);
                var2 = var8;
            case 749:
                var11 = var2;
                var18 = var1;
            case 755:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var9 = {};
                var8 = var13.badgeNameContainer;
                var9.style = var8;
                var17 = _closure1_slot7;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 16;
                var8 = var22[var19];
                var8 = var21.bind(var4)(var8);
                var12 = var8.Text;
                var10 = {
                    'variant': 'heading-md/medium',
                    'color': 'text-default'
                };
                var8 = 14;
                var15 = var22[var8];
                var15 = var21.bind(var4)(var15);
                var23 = var15.intl;
                var20 = var23.string;
                var15 = var14.nameUnformatted;
                var15 = var20.bind(var23)(var15);
                var10.children = var15;
                var12 = var17.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var12 = var22[var19];
                var12 = var21.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'heading-md/medium',
                    'color': 'text-muted'
                };
                var20 = var13.tenureRequirements;
                var12.style = var20;
                var20 = 17;
                var20 = var22[var20];
                var23 = var21.bind(var4)(var20);
                var22 = var23.getTenureBadgeRequirementString;
                var21 = var14.id;
                var20 = var14.tenureReqNumMonths;
                var20 = var22.bind(var23)(var21, var20);
                var12.children = var20;
                var12 = var17.bind(var4)(var15, var12);
                var10[1] = var12;
                var9.children = var10;
                var10 = var3.bind(var4)(var2, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var0 != var18;
                if (!var10) {
                    _fun59398_ip = 1033;
                    continue _fun59398
                }
            case 983:
                var17 = _closure1_slot7;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var19];
                var12 = var15.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'heading-sm/normal',
                    'color': 'text-muted'
                };
                var12.children = var18;
                var10 = var17.bind(var4)(var15, var12);
            case 1033:
                var9[1] = var10;
                var1.children = var9;
                var10 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot7;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 18;
                var1 = var12[var1];
                var2 = var9.bind(var4)(var1);
                var1 = {};
                var15 = _closure1_slot0;
                var17 = var12[var8];
                var17 = var15.bind(var4)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var12[var8];
                var17 = var15.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.rnsqpa;
                var17 = var18.bind(var19)(var17);
                var1.title = var17;
                var17 = var13.title;
                var1.titleStyle = var17;
                var1.bodyComponent = var10;
                var10 = var12[var8];
                var10 = var15.bind(var4)(var10);
                var17 = var10.intl;
                var10 = var17.string;
                var8 = var12[var8];
                var8 = var15.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.VsY8ZW;
                var8 = var10.bind(var17)(var8);
                var1.cta = var8;
                var1.buttonOnPress = var7;
                var7 = _closure1_slot4;
                var6 = {};
                var8 = var13.imageContainer;
                var6.style = var8;
                var8 = 19;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var10 = 'contain';
                var8.resizeMode = var10;
                var17 = var13.image;
                var10 = new Array(2);
                var10[0] = var17;
                var14 = var14.status;
                var12 = var12[var16];
                var12 = var15.bind(var4)(var12);
                var12 = var12.TieredTenureBadgeStatus;
                var12 = var12.UPCOMING;
                var12 = var14 === var12;
                if (!var12) {
                    _fun59398_ip = 1289;
                    continue _fun59398
                }
            case 1283:
                var12 = var13.upcomingBadge;
            case 1289:
                var10[1] = var12;
                var8.style = var10;
                var10 = {};
                var10.uri = var11;
                var8.source = var10;
                var8 = var3.bind(var4)(var9, var8);
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var1.headerComponent = var6;
                var1.pillText = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1341:
                return var0;
        }
    };
    var2.TieredTenureBadgePerkCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 33, 1297, 7284, 566, 7287, 795, 3239, 7312, 1307, 7312, 1234, 11946, 4841, 7313, 7262, 4669, 2]);