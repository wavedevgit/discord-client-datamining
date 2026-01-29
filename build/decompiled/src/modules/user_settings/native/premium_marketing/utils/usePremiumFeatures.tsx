// modules/user_settings/native/premium_marketing/utils/usePremiumFeatures.tsx
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
    var6 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot4 = var6;
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TOTAL_PREMIUM_GROUP_USERS;
    var _closure1_slot6 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/utils/usePremiumFeatures.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: usePremiumFeatures, environment: var1
        _fun61493: for (var _fun61493_ip = 0;;) switch (_fun61493_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var4 = arguments[2];
                var _closure2_slot0 = var6;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun61493_ip = 23;
                    continue _fun61493
                }
            case 21:
                var5 = false;
            case 23:
                var _closure2_slot1 = var5;
                if (!(var4 === var3)) {
                    _fun61493_ip = 66;
                    continue _fun61493
                }
            case 31:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.PremiumSubscriptionGroupRole;
                var4 = var1.UNSPECIFIED;
            case 66:
                var _closure2_slot2 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 4;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.FriendsIcon;
                    var1.IconComponent = var3;
                    var10 = 5;
                    var3 = var8[var10];
                    var3 = var7.bind(var6)(var3);
                    var9 = var3.intl;
                    var5 = var9.formatToPlainString;
                    var14 = _closure1_slot1;
                    var13 = 6;
                    var3 = var8[var13];
                    var3 = var14.bind(var6)(var3);
                    var4 = var3.gsE005;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var3.totalSeats = var11;
                    var3 = var5.bind(var9)(var4, var3);
                    var1.label = var3;
                    var9 = global;
                    var11 = var9.Set;
                    var4 = _closure1_slot5;
                    var5 = var4.TIER_2;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var5 = var11.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var11
                        }
                    });
                    var25 = var5;
                    var24 = var3;
                    var3 = new var25[var11](var24, var23);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var1.premiumTypes = var3;
                    var5 = 3;
                    var3 = var8[var5];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.PremiumSubscriptionGroupRole;
                    var11 = var3.PRIMARY;
                    var3 = new Array(1);
                    var3[0] = var11;
                    var1.premiumGroupRoles = var3;
                    var11 = false;
                    var1.availableOnFractional = var11;
                    var3 = new Array(10);
                    var3[0] = var1;
                    var1 = {};
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.FriendsIcon;
                    var1.IconComponent = var2;
                    var2 = var8[var10];
                    var2 = var7.bind(var6)(var2);
                    var15 = var2.intl;
                    var12 = var15.string;
                    var2 = var8[var13];
                    var2 = var14.bind(var6)(var2);
                    var2 = var2["G6K/+s"];
                    var2 = var12.bind(var15)(var2);
                    var1.label = var2;
                    var15 = var9.Set;
                    var12 = var4.TIER_2;
                    var2 = new Array(1);
                    var2[0] = var12;
                    var12 = var15.prototype;
                    var12 = Object.create(var12, {
                        constructor: {
                            value: var15
                        }
                    });
                    var25 = var12;
                    var24 = var2;
                    var2 = new var25[var15](var24, var23);
                    var2 = var2 instanceof Object ? var2 : var12;
                    var1.premiumTypes = var2;
                    var2 = var8[var5];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.PremiumSubscriptionGroupRole;
                    var12 = var2.MEMBER;
                    var2 = new Array(1);
                    var2[0] = var12;
                    var1.premiumGroupRoles = var2;
                    var1.availableOnFractional = var11;
                    var3[1] = var1;
                    var1 = {};
                    var2 = 7;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.UploadIcon;
                    var1.IconComponent = var2;
                    var2 = var8[var10];
                    var2 = var7.bind(var6)(var2);
                    var17 = var2.intl;
                    var15 = var17.formatToPlainString;
                    var2 = var8[var10];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var12 = var2.oEudy7;
                    var2 = {};
                    var18 = 8;
                    var18 = var8[var18];
                    var21 = var7.bind(var6)(var18);
                    var20 = var21.getMaxFileSizeForPremiumType;
                    var19 = _closure2_slot0;
                    var18 = {};
                    var18.useSpace = var11;
                    var18 = var20.bind(var21)(var19, var18);
                    var2.uploadSize = var18;
                    var2 = var15.bind(var17)(var12, var2);
                    var1.label = var2;
                    var15 = var9.Set;
                    var12 = var4.TIER_0;
                    var2 = new Array(2);
                    var2[0] = var12;
                    var12 = var4.TIER_2;
                    var2[1] = var12;
                    var12 = var15.prototype;
                    var12 = Object.create(var12, {
                        constructor: {
                            value: var15
                        }
                    });
                    var25 = var12;
                    var24 = var2;
                    var2 = new var25[var15](var24, var23);
                    var2 = var2 instanceof Object ? var2 : var12;
                    var1.premiumTypes = var2;
                    var2 = var8[var5];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.PremiumSubscriptionGroupRole;
                    var12 = var2.UNSPECIFIED;
                    var2 = new Array(2);
                    var2[0] = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var12 = var12.PRIMARY;
                    var2[1] = var12;
                    var1.premiumGroupRoles = var2;
                    var2 = true;
                    var1.availableOnFractional = var2;
                    var3[2] = var1;
                    var1 = {};
                    var12 = 9;
                    var12 = var8[var12];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.ReactionIcon;
                    var1.IconComponent = var12;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var17 = var12.intl;
                    var15 = var17.string;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12.E1NP2x;
                    var12 = var15.bind(var17)(var12);
                    var1.label = var12;
                    var17 = var9.Set;
                    var15 = var4.TIER_0;
                    var12 = new Array(2);
                    var12[0] = var15;
                    var15 = var4.TIER_2;
                    var12[1] = var15;
                    var15 = var17.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var17
                        }
                    });
                    var25 = var15;
                    var24 = var12;
                    var12 = new var25[var17](var24, var23);
                    var12 = var12 instanceof Object ? var12 : var15;
                    var1.premiumTypes = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var15 = var12.UNSPECIFIED;
                    var12 = new Array(3);
                    var12[0] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.PRIMARY;
                    var12[1] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.MEMBER;
                    var12[2] = var15;
                    var1.premiumGroupRoles = var12;
                    var1.availableOnFractional = var2;
                    var3[3] = var1;
                    var1 = {};
                    var12 = 10;
                    var12 = var8[var12];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.SuperReactionIcon;
                    var1.IconComponent = var12;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var17 = var12.intl;
                    var15 = var17.string;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12["taMwg/"];
                    var12 = var15.bind(var17)(var12);
                    var1.label = var12;
                    var17 = var9.Set;
                    var15 = var4.TIER_2;
                    var12 = new Array(1);
                    var12[0] = var15;
                    var15 = var17.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var17
                        }
                    });
                    var25 = var15;
                    var24 = var12;
                    var12 = new var25[var17](var24, var23);
                    var12 = var12 instanceof Object ? var12 : var15;
                    var1.premiumTypes = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var15 = var12.UNSPECIFIED;
                    var12 = new Array(3);
                    var12[0] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.PRIMARY;
                    var12[1] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.MEMBER;
                    var12[2] = var15;
                    var1.premiumGroupRoles = var12;
                    var1.availableOnFractional = var2;
                    var3[4] = var1;
                    var1 = {};
                    var12 = 11;
                    var12 = var8[var12];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.NitroWheelIcon;
                    var1.IconComponent = var12;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var17 = var12.intl;
                    var15 = var17.string;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12.oyfAMZ;
                    var12 = var15.bind(var17)(var12);
                    var1.label = var12;
                    var17 = var9.Set;
                    var15 = var4.TIER_0;
                    var12 = new Array(1);
                    var12[0] = var15;
                    var15 = var17.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var17
                        }
                    });
                    var25 = var15;
                    var24 = var12;
                    var12 = new var25[var17](var24, var23);
                    var12 = var12 instanceof Object ? var12 : var15;
                    var1.premiumTypes = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var15 = var12.UNSPECIFIED;
                    var12 = new Array(1);
                    var12[0] = var15;
                    var1.premiumGroupRoles = var12;
                    var1.availableOnFractional = var2;
                    var3[5] = var1;
                    var1 = {};
                    var12 = 12;
                    var12 = var8[var12];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.ScreenStreamIcon;
                    var1.IconComponent = var12;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var17 = var12.intl;
                    var15 = var17.string;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12.myyAEr;
                    var12 = var15.bind(var17)(var12);
                    var1.label = var12;
                    var17 = var9.Set;
                    var15 = var4.TIER_2;
                    var12 = new Array(1);
                    var12[0] = var15;
                    var15 = var17.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var17
                        }
                    });
                    var25 = var15;
                    var24 = var12;
                    var12 = new var25[var17](var24, var23);
                    var12 = var12 instanceof Object ? var12 : var15;
                    var1.premiumTypes = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var15 = var12.UNSPECIFIED;
                    var12 = new Array(3);
                    var12[0] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.PRIMARY;
                    var12[1] = var15;
                    var15 = var8[var5];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.PremiumSubscriptionGroupRole;
                    var15 = var15.MEMBER;
                    var12[2] = var15;
                    var1.premiumGroupRoles = var12;
                    var1.availableOnFractional = var2;
                    var3[6] = var1;
                    var1 = {};
                    var12 = 13;
                    var15 = var8[var12];
                    var15 = var7.bind(var6)(var15);
                    var15 = var15.BoostGemIcon;
                    var1.IconComponent = var15;
                    var15 = var8[var10];
                    var15 = var7.bind(var6)(var15);
                    var17 = var15.intl;
                    var15 = var17.formatToPlainString;
                    var13 = var8[var13];
                    var13 = var14.bind(var6)(var13);
                    var14 = var13.HVCRVf;
                    var13 = {};
                    var16 = _closure1_slot4;
                    var13.numBoosts = var16;
                    var13 = var15.bind(var17)(var14, var13);
                    var1.label = var13;
                    var15 = var9.Set;
                    var14 = var4.TIER_2;
                    var13 = new Array(1);
                    var13[0] = var14;
                    var14 = var15.prototype;
                    var14 = Object.create(var14, {
                        constructor: {
                            value: var15
                        }
                    });
                    var25 = var14;
                    var24 = var13;
                    var13 = new var25[var15](var24, var23);
                    var13 = var13 instanceof Object ? var13 : var14;
                    var1.premiumTypes = var13;
                    var13 = var8[var5];
                    var13 = var7.bind(var6)(var13);
                    var13 = var13.PremiumSubscriptionGroupRole;
                    var14 = var13.PRIMARY;
                    var13 = new Array(1);
                    var13[0] = var14;
                    var1.premiumGroupRoles = var13;
                    var1.availableOnFractional = var11;
                    var3[7] = var1;
                    var1 = {};
                    var12 = var8[var12];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.BoostGemIcon;
                    var1.IconComponent = var12;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var15 = var12.intl;
                    var14 = var15.formatToPlainString;
                    var12 = var8[var10];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.t;
                    var13 = var12.DbkNFj;
                    var12 = {};
                    var12.numBoosts = var16;
                    var12 = var14.bind(var15)(var13, var12);
                    var1.label = var12;
                    var14 = var9.Set;
                    var13 = var4.TIER_2;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var13 = var14.prototype;
                    var13 = Object.create(var13, {
                        constructor: {
                            value: var14
                        }
                    });
                    var25 = var13;
                    var24 = var12;
                    var12 = new var25[var14](var24, var23);
                    var12 = var12 instanceof Object ? var12 : var13;
                    var1.premiumTypes = var12;
                    var12 = var8[var5];
                    var12 = var7.bind(var6)(var12);
                    var12 = var12.PremiumSubscriptionGroupRole;
                    var13 = var12.UNSPECIFIED;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var1.premiumGroupRoles = var12;
                    var1.availableOnFractional = var11;
                    var3[8] = var1;
                    var1 = {};
                    var11 = 14;
                    var11 = var8[var11];
                    var11 = var7.bind(var6)(var11);
                    var11 = var11.UserSquareIcon;
                    var1.IconComponent = var11;
                    var11 = var8[var10];
                    var11 = var7.bind(var6)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var8[var10];
                    var10 = var7.bind(var6)(var10);
                    var10 = var10.t;
                    var10 = var10.vlHicE;
                    var10 = var11.bind(var12)(var10);
                    var1.label = var10;
                    var10 = var9.Set;
                    var9 = var4.TIER_2;
                    var4 = new Array(1);
                    var4[0] = var9;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var10
                        }
                    });
                    var25 = var9;
                    var24 = var4;
                    var4 = new var25[var10](var24, var23);
                    var4 = var4 instanceof Object ? var4 : var9;
                    var1.premiumTypes = var4;
                    var4 = var8[var5];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.PremiumSubscriptionGroupRole;
                    var9 = var4.UNSPECIFIED;
                    var4 = new Array(3);
                    var4[0] = var9;
                    var9 = var8[var5];
                    var9 = var7.bind(var6)(var9);
                    var9 = var9.PremiumSubscriptionGroupRole;
                    var9 = var9.PRIMARY;
                    var4[1] = var9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.PremiumSubscriptionGroupRole;
                    var5 = var5.MEMBER;
                    var4[2] = var5;
                    var1.premiumGroupRoles = var4;
                    var1.availableOnFractional = var2;
                    var3[9] = var1;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun61495: for (var _fun61495_ip = 0;;) switch (_fun61495_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = var2.premiumTypes;
                                var3 = var4.has;
                                var0 = _closure2_slot0;
                                var0 = var3.bind(var4)(var0);
                                if (!var0) {
                                    _fun61495_ip = 48;
                                    continue _fun61495
                                }
                            case 29:
                                var1 = _closure2_slot1;
                                var1 = !var1;
                                if (var1) {
                                    _fun61495_ip = 45;
                                    continue _fun61495
                                }
                            case 39:
                                var1 = var2.availableOnFractional;
                            case 45:
                                var0 = var1;
                            case 48:
                                return var0;
                        }
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0.premiumGroupRoles;
                        var1 = var2.includes;
                        var0 = _closure2_slot2;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var4 = arg0;
                        var5 = var0;
                        var1 = copyDataProperties(var5, var4);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.unsafe_rawColors;
                        var2 = var1.WHITE;
                        var1 = 'color';
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1615, 3083, 1629, 3108, 1234, 2395, 7634, 3068, 7636, 6974, 5707, 5282, 7638, 7640, 671, 2]);