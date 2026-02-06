// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun78681: for (var _fun78681_ip = 0;;) switch (_fun78681_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot16;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var _closure2_slot0 = var9;
                var6 = var0.features;
                var _closure2_slot1 = var6;
                var8 = var0.isVisible;
                var _closure2_slot2 = var8;
                var13 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 21;
                var2 = var5[var0];
                var10 = var13.bind(var3)(var2);
                var7 = var10.useAnimatedStyle;
                var2 = function() {
                    _fun78682: for (var _fun78682_ip = 0;;) switch (_fun78682_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var13 = 21;
                            var1 = var1[var13];
                            var12 = undefined;
                            var4 = var2.bind(var12)(var1);
                            var3 = var4.withDelay;
                            var5 = _closure2_slot2;
                            var2 = 0;
                            if (!var5) {
                                _fun78682_ip = 48;
                                continue _fun78682
                            }
                        case 45:
                            var2 = 150;
                        case 48:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 22;
                            var5 = var9[var5];
                            var6 = var6.bind(var12)(var5);
                            var5 = var6.withTiming;
                            var1 = _closure2_slot2;
                            var7 = 0;
                            if (!var1) {
                                _fun78682_ip = 85;
                                continue _fun78682
                            }
                        case 82:
                            var7 = 1;
                        case 85:
                            var1 = {};
                            var9 = 150;
                            var1.duration = var9;
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var9 = var8[var13];
                            var9 = var11.bind(var12)(var9);
                            var10 = var9.Easing;
                            var9 = var10.inOut;
                            var8 = var8[var13];
                            var8 = var11.bind(var12)(var8);
                            var8 = var8.Easing;
                            var8 = var8.quad;
                            var8 = var9.bind(var10)(var8);
                            var1.easing = var8;
                            var1 = var5.bind(var6)(var7, var1);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var11 = {};
                var12 = var5[var0];
                var12 = var13.bind(var3)(var12);
                var12 = var12.withDelay;
                var11.withDelay = var12;
                var11.isVisible = var8;
                var12 = 150;
                var11.TIER_FEATURE_ANIMATION_DURATION_MS = var12;
                var12 = 22;
                var12 = var5[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.withTiming;
                var11.withTiming = var12;
                var12 = var5[var0];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Easing;
                var11.Easing = var12;
                var2.__closure = var11;
                var11 = 13329849944491.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot17;
                var2.__initData = var11;
                var7 = var7.bind(var10)(var2);
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var5 = !var8;
                var0.accessibilityElementsHidden = var5;
                var5 = 'no-hide-descendants';
                if (!var8) {
                    _fun78681_ip = 233;
                    continue _fun78681
                }
            case 231:
                var5 = undefined;
            case 233:
                var0.importantForAccessibility = var5;
                var10 = var9.cardFeatures;
                var5 = new Array(3);
                var5[0] = var10;
                var8 = !var8;
                if (!var8) {
                    _fun78681_ip = 264;
                    continue _fun78681
                }
            case 258:
                var8 = var9.cardFeaturesInvisible;
            case 264:
                var5[1] = var8;
                var5[2] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun78683: for (var _fun78683_ip = 0;;) switch (_fun78683_ip) {
                        case 0:
                            var10 = arg0;
                            var4 = arg1;
                            var3 = _closure1_slot12;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var0 = _closure2_slot0;
                            var5 = var0.cardFeature;
                            var0 = new Array(3);
                            var0[0] = var5;
                            var5 = var10.isIncluded;
                            var5 = !var5;
                            if (!var5) {
                                _fun78683_ip = 62;
                                continue _fun78683
                            }
                        case 52:
                            var7 = _closure2_slot0;
                            var5 = var7.cardFeatureExcluded;
                        case 62:
                            var0[1] = var5;
                            var5 = _closure2_slot1;
                            var7 = var5.length;
                            var5 = 1;
                            var5 = var7 - var5;
                            var5 = var4 === var5;
                            if (!var5) {
                                _fun78683_ip = 99;
                                continue _fun78683
                            }
                        case 89:
                            var7 = _closure2_slot0;
                            var5 = var7.cardFeatureLast;
                        case 99:
                            var0[2] = var5;
                            var1.style = var0;
                            var8 = _closure1_slot11;
                            var7 = var10.IconComponent;
                            var5 = {
                                'size': 'custom',
                                'style': null,
                                'color': 'white'
                            };
                            var0 = _closure2_slot0;
                            var0 = var0.cardFeatureIcon;
                            var5.style = var0;
                            var0 = undefined;
                            var7 = var8.bind(var0)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = _closure1_slot11;
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 23;
                            var6 = var11[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'style': null,
                                'color': 'always-white',
                                'variant': 'text-md/semibold'
                            };
                            var11 = var10.isIncluded;
                            var11 = !var11;
                            if (!var11) {
                                _fun78683_ip = 227;
                                continue _fun78683
                            }
                        case 217:
                            var9 = _closure2_slot0;
                            var11 = var9.cardFeatureExcludedCopy;
                        case 227:
                            var9 = new Array(1);
                            var9[0] = var11;
                            var6.style = var9;
                            var9 = var10.getCopy;
                            var9 = var9.bind(var10)();
                            var6.children = var9;
                            var6 = var8.bind(var0)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var16 = true;
    var3.value = var16;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot8 = var6;
    var6 = var3.BoostedGuildTiers;
    var _closure1_slot9 = var6;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BoostedGuildFeatures;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot11 = var8;
    var8 = var3.jsxs;
    var _closure1_slot12 = var8;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = {};
    var8 = var6.TIER_1;
    var3.tier = var8;
    var9 = {
        'orderCollapsed': 0,
        'isIncluded': true
    };
    var15 = 7;
    var8 = var5[var15];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ReactionIcon;
    var9.IconComponent = var8;
    var8 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Tlz0x1;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_1;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.emoji;
        var0.numEmojiSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var8;
    var8 = new Array(11);
    var8[0] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var22 = 9;
    var11 = var5[var22];
    var11 = var4.bind(var0)(var11);
    var11 = var11.StickerIcon;
    var9.IconComponent = var11;
    var11 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.WgHNGI;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_1;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stickers;
        var0.numStickerSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var11;
    var8[1] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var11 = 10;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ScreenArrowIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Jbg8oY;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_1;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.screenShareQualityResolution;
        var0.resolution = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[2] = var9;
    var9 = {
        'orderCollapsed': 2,
        'isIncluded': true
    };
    var21 = 11;
    var12 = var5[var21];
    var12 = var4.bind(var0)(var12);
    var12 = var12.VoiceNormalIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.vBfZzD;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.w1gmLt;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_1;
        var8 = var9[var8];
        var8 = var8.limits;
        var9 = var8.bitrate;
        var8 = 1000;
        var8 = var9 / var8;
        var4.bitrate = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.bitrate = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[3] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var20 = 12;
    var12 = var5[var20];
    var12 = var4.bind(var0)(var12);
    var12 = var12.StageIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Mrvzjg;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_1;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stageVideoUsers;
        var0.numStageSeats = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[4] = var9;
    var9 = {
        'orderCollapsed': 1,
        'isIncluded': true
    };
    var19 = 13;
    var12 = var5[var19];
    var12 = var4.bind(var0)(var12);
    var12 = var12.GifIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.PbAyub;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[5] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var17 = 14;
    var12 = var5[var17];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ServerGridIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.tzGY0q;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[6] = var9;
    var9 = {};
    var24 = false;
    var9.isIncluded = var24;
    var18 = 15;
    var12 = var5[var18];
    var12 = var4.bind(var0)(var12);
    var12 = var12.UploadIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.aFRl53;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.pIn7Af;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_2;
        var8 = var9[var8];
        var8 = var8.limits;
        var8 = var8.fileSize;
        var9 = 1024;
        var8 = var8 / var9;
        var8 = var8 / var9;
        var4.size = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.uploadSizeLimit = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[7] = var9;
    var9 = {};
    var9.isIncluded = var24;
    var12 = var5[var17];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ServerGridIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["1a5rjl"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[8] = var9;
    var9 = {};
    var9.isIncluded = var24;
    var12 = var5[var15];
    var12 = var4.bind(var0)(var12);
    var12 = var12.ReactionIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["6PV6Qc"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var12;
    var8[9] = var9;
    var9 = {};
    var9.isIncluded = var24;
    var12 = 16;
    var23 = var5[var12];
    var23 = var4.bind(var0)(var23);
    var23 = var23.LinkIcon;
    var9.IconComponent = var23;
    var23 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.adNGjW;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var23;
    var8[10] = var9;
    var3.features = var8;
    var8 = new Array(3);
    var8[0] = var3;
    var3 = {};
    var9 = var6.TIER_2;
    var3.tier = var9;
    var23 = {};
    var23.isIncluded = var16;
    var9 = var5[var15];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ReactionIcon;
    var23.IconComponent = var9;
    var9 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Tlz0x1;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_2;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.emoji;
        var0.numEmojiSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var9;
    var9 = new Array(11);
    var9[0] = var23;
    var23 = {};
    var23.isIncluded = var16;
    var25 = var5[var22];
    var25 = var4.bind(var0)(var25);
    var25 = var25.StickerIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.WgHNGI;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_2;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stickers;
        var0.numStickerSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[1] = var23;
    var23 = {
        'orderCollapsed': 0,
        'isIncluded': true
    };
    var25 = var5[var11];
    var25 = var4.bind(var0)(var25);
    var25 = var25.ScreenArrowIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Jbg8oY;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_2;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.screenShareQualityResolution;
        var0.resolution = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[2] = var23;
    var23 = {};
    var23.isIncluded = var16;
    var25 = var5[var21];
    var25 = var4.bind(var0)(var25);
    var25 = var25.VoiceNormalIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.vBfZzD;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.w1gmLt;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_2;
        var8 = var9[var8];
        var8 = var8.limits;
        var9 = var8.bitrate;
        var8 = 1000;
        var8 = var9 / var8;
        var4.bitrate = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.bitrate = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[3] = var23;
    var23 = {};
    var23.isIncluded = var16;
    var25 = var5[var20];
    var25 = var4.bind(var0)(var25);
    var25 = var25.StageIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Mrvzjg;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_2;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stageVideoUsers;
        var0.numStageSeats = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[4] = var23;
    var23 = {};
    var23.isIncluded = var16;
    var25 = var5[var19];
    var25 = var4.bind(var0)(var25);
    var25 = var25.GifIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.PbAyub;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[5] = var23;
    var23 = {};
    var23.isIncluded = var16;
    var25 = var5[var17];
    var25 = var4.bind(var0)(var25);
    var25 = var25.ServerGridIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.tzGY0q;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[6] = var23;
    var23 = {
        'orderCollapsed': 1,
        'isIncluded': true
    };
    var25 = var5[var18];
    var25 = var4.bind(var0)(var25);
    var25 = var25.UploadIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.aFRl53;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.pIn7Af;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_2;
        var8 = var9[var8];
        var8 = var8.limits;
        var8 = var8.fileSize;
        var9 = 1024;
        var8 = var8 / var9;
        var8 = var8 / var9;
        var4.size = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.uploadSizeLimit = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[7] = var23;
    var23 = {
        'orderCollapsed': 3,
        'isIncluded': true
    };
    var25 = var5[var17];
    var25 = var4.bind(var0)(var25);
    var25 = var25.ServerGridIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["1a5rjl"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[8] = var23;
    var23 = {
        'orderCollapsed': 2,
        'isIncluded': true
    };
    var25 = var5[var15];
    var25 = var4.bind(var0)(var25);
    var25 = var25.ReactionIcon;
    var23.IconComponent = var25;
    var25 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["6PV6Qc"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var23.getCopy = var25;
    var9[9] = var23;
    var23 = {};
    var23.isIncluded = var24;
    var24 = var5[var12];
    var24 = var4.bind(var0)(var24);
    var24 = var24.LinkIcon;
    var23.IconComponent = var24;
    var24 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.adNGjW;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var23.getCopy = var24;
    var9[10] = var23;
    var3.features = var9;
    var8[1] = var3;
    var3 = {};
    var6 = var6.TIER_3;
    var3.tier = var6;
    var9 = {};
    var9.isIncluded = var16;
    var6 = var5[var15];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ReactionIcon;
    var9.IconComponent = var6;
    var6 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Tlz0x1;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_3;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.emoji;
        var0.numEmojiSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var6;
    var6 = new Array(11);
    var6[0] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var22 = var5[var22];
    var22 = var4.bind(var0)(var22);
    var22 = var22.StickerIcon;
    var9.IconComponent = var22;
    var22 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.WgHNGI;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_3;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stickers;
        var0.numStickerSlots = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var22;
    var6[1] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var22 = var5[var11];
    var22 = var4.bind(var0)(var22);
    var22 = var22.ScreenArrowIcon;
    var9.IconComponent = var22;
    var22 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Jbg8oY;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_3;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.screenShareQualityResolution;
        var0.resolution = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var22;
    var6[2] = var9;
    var9 = {
        'orderCollapsed': 2,
        'isIncluded': true
    };
    var21 = var5[var21];
    var21 = var4.bind(var0)(var21);
    var21 = var21.VoiceNormalIcon;
    var9.IconComponent = var21;
    var21 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.vBfZzD;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.w1gmLt;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_3;
        var8 = var9[var8];
        var8 = var8.limits;
        var9 = var8.bitrate;
        var8 = 1000;
        var8 = var9 / var8;
        var4.bitrate = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.bitrate = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var21;
    var6[3] = var9;
    var9 = {
        'orderCollapsed': 4,
        'isIncluded': true
    };
    var20 = var5[var20];
    var20 = var4.bind(var0)(var20);
    var20 = var20.StageIcon;
    var9.IconComponent = var20;
    var20 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 8;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Mrvzjg;
        var0 = {};
        var5 = _closure1_slot10;
        var4 = _closure1_slot9;
        var4 = var4.TIER_3;
        var4 = var5[var4];
        var4 = var4.limits;
        var4 = var4.stageVideoUsers;
        var0.numStageSeats = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var20;
    var6[4] = var9;
    var9 = {
        'orderCollapsed': 3,
        'isIncluded': true
    };
    var19 = var5[var19];
    var19 = var4.bind(var0)(var19);
    var19 = var19.GifIcon;
    var9.IconComponent = var19;
    var19 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.PbAyub;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var19;
    var6[5] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var19 = var5[var17];
    var19 = var4.bind(var0)(var19);
    var19 = var19.ServerGridIcon;
    var9.IconComponent = var19;
    var19 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.tzGY0q;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var19;
    var6[6] = var9;
    var9 = {
        'orderCollapsed': 1,
        'isIncluded': true
    };
    var18 = var5[var18];
    var18 = var4.bind(var0)(var18);
    var18 = var18.UploadIcon;
    var9.IconComponent = var18;
    var18 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var0 = var10[var4];
        var5 = undefined;
        var0 = var9.bind(var5)(var0);
        var3 = var0.intl;
        var2 = var3.formatToPlainString;
        var0 = var10[var4];
        var0 = var9.bind(var5)(var0);
        var0 = var0.t;
        var1 = var0.aFRl53;
        var0 = {};
        var6 = var10[var4];
        var6 = var9.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var10[var4];
        var4 = var9.bind(var5)(var4);
        var4 = var4.t;
        var5 = var4.pIn7Af;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot9;
        var8 = var8.TIER_3;
        var8 = var9[var8];
        var8 = var8.limits;
        var8 = var8.fileSize;
        var9 = 1024;
        var8 = var8 / var9;
        var8 = var8 / var9;
        var4.size = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.uploadSizeLimit = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.getCopy = var18;
    var6[7] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var17 = var5[var17];
    var17 = var4.bind(var0)(var17);
    var17 = var17.ServerGridIcon;
    var9.IconComponent = var17;
    var17 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["1a5rjl"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var17;
    var6[8] = var9;
    var9 = {};
    var9.isIncluded = var16;
    var15 = var5[var15];
    var15 = var4.bind(var0)(var15);
    var15 = var15.ReactionIcon;
    var9.IconComponent = var15;
    var15 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["6PV6Qc"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var15;
    var6[9] = var9;
    var9 = {
        'orderCollapsed': 0,
        'isIncluded': true
    };
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.LinkIcon;
    var9.IconComponent = var12;
    var12 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.adNGjW;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9.getCopy = var12;
    var6[10] = var9;
    var3.features = var6;
    var8[2] = var3;
    var _closure1_slot14 = var8;
    var6 = var8.map;
    var3 = function(arg0, arg1) { // Environment: var1
        var1 = arg1;
        var0 = 1;
        var1 = var1 + var0;
        var0 = 300;
        var0 = var0 * var1;
        return var0;
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = 17;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginRight': 10,
        'width': 290
    };
    var3.cardWrapper = var9;
    var9 = {};
    var12 = 18;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderRadius = var15;
    var15 = '100%';
    var9.height = var15;
    var3.card = var9;
    var9 = {
        'display': 'flex',
        'padding': 24,
        'height': '100%'
    };
    var3.cardContent = var9;
    var9 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'height': '100%'
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderRadius = var15;
    var3.pressableWrapper = var9;
    var9 = {
        'alignItems': 'baseline',
        'display': 'flex',
        'flexDirection': 'row',
        'flexGrow': 0,
        'flexShrink': 0,
        'marginBottom': 16
    };
    var3.cardHeading = var9;
    var9 = {};
    var9.marginRight = var11;
    var3.cardTierName = var9;
    var9 = {};
    var11 = 0.7;
    var9.opacity = var11;
    var3.cardTierBoostcount = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 0
    };
    var3.cardFeatures = var9;
    var11 = 'absolute';
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'height': '100%',
        'width': '100%'
    };
    var3.cardFeaturesInvisible = var9;
    var9 = {
        'alignSelf': 'stretch',
        'flexGrow': 1,
        'position': 'relative'
    };
    var3.cardFeaturesWrapper = var9;
    var9 = {
        'alignItems': 'center',
        'display': 'flex',
        'flexDirection': 'row',
        'marginBottom': 10
    };
    var3.cardFeature = var9;
    var9 = {};
    var15 = 0.5;
    var9.opacity = var15;
    var3.cardFeatureExcluded = var9;
    var9 = {};
    var15 = 'line-through';
    var9.textDecorationLine = var15;
    var3.cardFeatureExcludedCopy = var9;
    var9 = {};
    var9.marginBottom = var14;
    var3.cardFeatureLast = var9;
    var9 = {};
    var9.flex = var10;
    var10 = 19;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PROGRESS_BAR_SPACING;
    var9.marginTop = var10;
    var3.cardsScroller = var9;
    var10 = 20;
    var9 = {
        'alignItems': 'flex-start',
        'display': 'flex',
        'flexDirection': 'row',
        'paddingHorizontal': 8,
        'paddingTop': 16,
        'paddingBottom': 20
    };
    var3.cardsScrollerContent = var9;
    var9 = {
        'height': 24,
        'marginRight': 6,
        'width': 24
    };
    var3.cardFeatureIcon = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'marginTop': 24
    };
    var3.cardFooter = var9;
    var9 = {
        'flexGrow': 0,
        'flexShrink': 0,
        'height': 24,
        'marginLeft': 8,
        'width': 24
    };
    var3.cardFooterIcon = var9;
    var9 = {
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'position': 'absolute',
        'top': 4294967280,
        'left': 24
    };
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var3.cardTierBadge = var9;
    var9 = {};
    var12 = 'uppercase';
    var9.textTransform = var12;
    var3.cardTierBadgeCopy = var9;
    var9 = {};
    var9.position = var11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK;
    var9.tintColor = var10;
    var3.sparkleStar = var9;
    var9 = {
        'height': 15,
        'width': 18
    };
    var3.sparkleStarPointed = var9;
    var9 = {
        'height': 45,
        'width': 23
    };
    var3.sparkleStarElongated = var9;
    var9 = {
        'top': 4294967289,
        'right': 35
    };
    var3.sparkleStarPointed1 = var9;
    var9 = {
        'top': 20,
        'right': 55
    };
    var3.sparkleStarPointed2 = var9;
    var9 = {
        'bottom': 4294967289,
        'left': 70
    };
    var3.sparkleStarPointed3 = var9;
    var9 = {
        'right': 15,
        'top': 10
    };
    var3.sparkleStarElongated1 = var9;
    var9 = {
        'position': 'absolute',
        'height': 1,
        'width': 60
    };
    var3.gradientHighlight = var9;
    var9 = {
        'right': 15,
        'top': 0
    };
    var3.gradientHighlightTop = var9;
    var9 = {
        'left': 48,
        'bottom': 0
    };
    var3.gradientHighlightBottom = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var6 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun78718: for (var _fun78718_ip = 0;;) switch (_fun78718_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot16;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var0 = var2.guild;
                var37 = var2.features;
                var _closure2_slot0 = var37;
                var30 = var2.isExpanded;
                var17 = var2.onCardPress;
                var6 = var2.tier;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 24;
                var2 = var4[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var37;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.orderCollapsed;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun78721: for (var _fun78721_ip = 0;;) switch (_fun78721_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var0 = var2.orderCollapsed;
                                var4 = null;
                                var3 = var4 == var0;
                                var0 = 0;
                                if (var3) {
                                    _fun78721_ip = 87;
                                    continue _fun78721
                                }
                            case 23:
                                var3 = var1.orderCollapsed;
                                var3 = var4 == var3;
                                var0 = 0;
                                if (var3) {
                                    _fun78721_ip = 87;
                                    continue _fun78721
                                }
                            case 38:
                                var4 = var2.orderCollapsed;
                                var3 = var1.orderCollapsed;
                                var0 = 0;
                                if (!(var4 !== var3)) {
                                    _fun78721_ip = 87;
                                    continue _fun78721
                                }
                            case 56:
                                var2 = var2.orderCollapsed;
                                var1 = var1.orderCollapsed;
                                var2 = var2 > var1;
                                var1 = -1;
                                if (!var2) {
                                    _fun78721_ip = 84;
                                    continue _fun78721
                                }
                            case 81:
                                var1 = 1;
                            case 84:
                                var0 = var1;
                            case 87:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var35 = var7.bind(var8)(var1, var5);
                var1 = var0.premiumTier;
                var7 = var1 === var6;
                var0 = var0.premiumTier;
                var24 = 1;
                var0 = var0 + var24;
                var16 = var6 === var0;
                var1 = _closure1_slot0;
                var0 = 25;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var1 = var0.bind(var1)(var2);
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var18 = 18;
                var0 = var0[var18];
                var0 = var2.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var1) {
                    _fun78718_ip = 195;
                    continue _fun78718
                }
            case 187:
                var21 = var0.GUILD_BOOSTING_PINK;
                _fun78718_ip = 201;
                continue _fun78718;
            case 195:
                var21 = var0.WHITE;
            case 201:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var22 = 8;
                var1 = var0[var22];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var22];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                if (var30) {
                    _fun78718_ip = 263;
                    continue _fun78718
                }
            case 248:
                var4 = var0.agC5xg;
                var33 = var1.bind(var2)(var4);
                _fun78718_ip = 276;
                continue _fun78718;
            case 263:
                var0 = var0.DFwxsR;
                var33 = var1.bind(var2)(var0);
            case 276:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var14.cardWrapper;
                var0.style = var4;
                var4 = arg1;
                var0.ref = var4;
                var8 = _closure1_slot11;
                var13 = _closure1_slot1;
                var29 = _closure1_slot2;
                var10 = 26;
                var4 = var29[var10];
                var5 = var13.bind(var3)(var4);
                var4 = {};
                var9 = 45;
                var4.angle = var9;
                var9 = {
                    'x': 0.5,
                    'y': 0.5
                };
                var4.angleCenter = var9;
                var9 = var29[var18];
                var9 = var13.bind(var3)(var9);
                var9 = var9.unsafe_rawColors;
                var12 = var9.GUILD_BOOSTING_BLUE;
                var9 = new Array(2);
                var9[0] = var12;
                var12 = var29[var18];
                var12 = var13.bind(var3)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.GUILD_BOOSTING_PURPLE;
                var9[1] = var12;
                var4.colors = var9;
                var9 = [0, 1];
                var4.locations = var9;
                var9 = var14.card;
                var4.style = var9;
                var13 = true;
                var4.useAngle = var13;
                var15 = _closure1_slot11;
                var12 = _closure1_slot5;
                var9 = {};
                var19 = var14.pressableWrapper;
                var9.style = var19;
                var23 = _closure1_slot12;
                var31 = _closure1_slot0;
                var19 = 27;
                var19 = var29[var19];
                var19 = var31.bind(var3)(var19);
                var20 = var19.PressableHighlight;
                var19 = {};
                var19.onPress = var17;
                var17 = var14.cardContent;
                var19.style = var17;
                var17 = 'button';
                var19.accessibilityRole = var17;
                var17 = {};
                var17.expanded = var30;
                var19.accessibilityState = var17;
                var19.accessibilityLabel = var33;
                var27 = _closure1_slot12;
                var26 = _closure1_slot5;
                var25 = {};
                var17 = var14.cardHeading;
                var25.style = var17;
                var34 = _closure1_slot11;
                var17 = 23;
                var28 = var29[var17];
                var28 = var31.bind(var3)(var28);
                var32 = var28.Text;
                var28 = {
                    'color': 'always-white',
                    'style': null,
                    'variant': 'heading-xxl/extrabold'
                };
                var36 = var14.cardTierName;
                var28.style = var36;
                var36 = 28;
                var36 = var29[var36];
                var39 = var31.bind(var3)(var36);
                var38 = var39.getTierName;
                var36 = {};
                var40 = false;
                var36.useLevels = var40;
                var36 = var38.bind(var39)(var6, var36);
                var28.children = var36;
                var32 = var34.bind(var3)(var32, var28);
                var28 = new Array(2);
                var28[0] = var32;
                var36 = _closure1_slot11;
                var32 = var29[var17];
                var32 = var31.bind(var3)(var32);
                var34 = var32.Text;
                var32 = {
                    'color': 'always-white',
                    'style': null,
                    'variant': 'text-md/medium'
                };
                var38 = var14.cardTierBoostcount;
                var32.style = var38;
                var38 = var29[var22];
                var38 = var31.bind(var3)(var38);
                var41 = var38.intl;
                var40 = var41.format;
                var38 = var29[var22];
                var38 = var31.bind(var3)(var38);
                var38 = var38.t;
                var39 = var38.gDsyB9;
                var38 = {};
                var42 = _closure1_slot8;
                var42 = var42[var6];
                var38.numSubscriptions = var42;
                var38 = var40.bind(var41)(var39, var38);
                var32.children = var38;
                var32 = var36.bind(var3)(var34, var32);
                var28[1] = var32;
                var25.children = var28;
                var26 = var27.bind(var3)(var26, var25);
                var25 = new Array(3);
                var25[0] = var26;
                var28 = _closure1_slot12;
                var27 = _closure1_slot5;
                var26 = {};
                var32 = var14.cardFeaturesWrapper;
                var26.style = var32;
                var34 = _closure1_slot11;
                var36 = _closure1_slot19;
                var32 = {};
                var32.features = var35;
                var35 = !var30;
                var32.isVisible = var35;
                var34 = var34.bind(var3)(var36, var32);
                var32 = new Array(2);
                var32[0] = var34;
                var35 = _closure1_slot11;
                var34 = {};
                var34.features = var37;
                var34.isVisible = var30;
                var34 = var35.bind(var3)(var36, var34);
                var32[1] = var34;
                var26.children = var32;
                var26 = var28.bind(var3)(var27, var26);
                var25[1] = var26;
                var28 = _closure1_slot12;
                var27 = _closure1_slot5;
                var26 = {};
                var32 = var14.cardFooter;
                var26.style = var32;
                var32 = _closure1_slot11;
                var29 = var29[var17];
                var29 = var31.bind(var3)(var29);
                var31 = var29.Text;
                var29 = {
                    'color': 'always-white',
                    'variant': 'text-md/semibold'
                };
                var29.children = var33;
                var31 = var32.bind(var3)(var31, var29);
                var29 = new Array(2);
                var29[0] = var31;
                var32 = _closure1_slot11;
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                if (var30) {
                    _fun78718_ip = 986;
                    continue _fun78718
                }
            case 966:
                var30 = 30;
                var30 = var34[var30];
                var30 = var33.bind(var3)(var30);
                var31 = var30.ChevronLargeDownIcon;
                _fun78718_ip = 1004;
                continue _fun78718;
            case 986:
                var30 = 29;
                var30 = var34[var30];
                var30 = var33.bind(var3)(var30);
                var31 = var30.ChevronLargeUpIcon;
            case 1004:
                var30 = {};
                var34 = _closure1_slot1;
                var33 = _closure1_slot2;
                var33 = var33[var18];
                var33 = var34.bind(var3)(var33);
                var33 = var33.colors;
                var33 = var33.WHITE;
                var30.color = var33;
                var33 = var14.cardFooterIcon;
                var30.style = var33;
                var30 = var32.bind(var3)(var31, var30);
                var29[1] = var30;
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var25[2] = var26;
                var19.children = var25;
                var19 = var23.bind(var3)(var20, var19);
                var9.children = var19;
                var9 = var15.bind(var3)(var12, var9);
                var4.children = var9;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var16;
                if (var5) {
                    _fun78718_ip = 1136;
                    continue _fun78718
                }
            case 1116:
                if (!var7) {
                    _fun78718_ip = 1133;
                    continue _fun78718
                }
            case 1119:
                var8 = _closure1_slot9;
                var8 = var8.TIER_3;
                var7 = var6 === var8;
            case 1133:
                var5 = var7;
            case 1136:
                if (!var5) {
                    _fun78718_ip = 1418;
                    continue _fun78718
                }
            case 1142:
                var9 = _closure1_slot11;
                var19 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = var12[var10];
                var8 = var19.bind(var3)(var7);
                var7 = {};
                var15 = 3;
                var7.angle = var15;
                var15 = {
                    'x': 0.5,
                    'y': 0.2
                };
                var7.angleCenter = var15;
                var15 = var12[var18];
                var15 = var19.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var20 = var15.GUILD_BOOSTING_BLUE;
                var15 = new Array(2);
                var15[0] = var20;
                var18 = var12[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.unsafe_rawColors;
                var18 = var18.GUILD_BOOSTING_PURPLE;
                var15[1] = var18;
                var7.colors = var15;
                var15 = [0, 1];
                var7.locations = var15;
                var15 = var14.cardTierBadge;
                var7.style = var15;
                var7.useAngle = var13;
                var15 = _closure1_slot11;
                var13 = _closure1_slot0;
                var12 = var12[var17];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'color': 'always-white',
                    'style': null,
                    'variant': 'text-xs/bold'
                };
                var17 = var14.cardTierBadgeCopy;
                var12.style = var17;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var22];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var22];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                if (var16) {
                    _fun78718_ip = 1385;
                    continue _fun78718
                }
            case 1370:
                var16 = var17["9JbE3J"];
                var16 = var18.bind(var19)(var16);
                _fun78718_ip = 1398;
                continue _fun78718;
            case 1385:
                var17 = var17["9NBo7c"];
                var16 = var18.bind(var19)(var17);
            case 1398:
                var12.children = var16;
                var12 = var15.bind(var3)(var13, var12);
                var7.children = var12;
                var5 = var9.bind(var3)(var8, var7);
            case 1418:
                var4[1] = var5;
                var5 = _closure1_slot9;
                var5 = var5.TIER_3;
                var5 = var6 === var5;
                if (!var5) {
                    _fun78718_ip = 2154;
                    continue _fun78718
                }
            case 1442:
                var8 = _closure1_slot12;
                var7 = _closure1_slot13;
                var6 = {};
                var13 = _closure1_slot11;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = var16[var10];
                var12 = var15.bind(var3)(var9);
                var9 = {};
                var19 = _closure1_slot0;
                var18 = 31;
                var17 = var16[var18];
                var22 = var19.bind(var3)(var17);
                var17 = var22.hexWithOpacity;
                var20 = 0;
                var22 = var17.bind(var22)(var21, var20);
                var17 = new Array(3);
                var17[0] = var22;
                var22 = var16[var18];
                var23 = var19.bind(var3)(var22);
                var22 = var23.hexWithOpacity;
                var22 = var22.bind(var23)(var21, var24);
                var17[1] = var22;
                var22 = var16[var18];
                var23 = var19.bind(var3)(var22);
                var22 = var23.hexWithOpacity;
                var22 = var22.bind(var23)(var21, var20);
                var17[2] = var22;
                var9.colors = var17;
                var17 = {
                    'x': 0,
                    'y': 0
                };
                var9.start = var17;
                var17 = {
                    'x': 1,
                    'y': 0
                };
                var9.end = var17;
                var17 = [0, 0.5, 1];
                var9.locations = var17;
                var22 = var14.gradientHighlight;
                var17 = new Array(2);
                var17[0] = var22;
                var22 = var14.gradientHighlightTop;
                var17[1] = var22;
                var9.style = var17;
                var12 = var13.bind(var3)(var12, var9);
                var9 = new Array(6);
                var9[0] = var12;
                var13 = _closure1_slot11;
                var10 = var16[var10];
                var12 = var15.bind(var3)(var10);
                var10 = {};
                var17 = var16[var18];
                var22 = var19.bind(var3)(var17);
                var17 = var22.hexWithOpacity;
                var22 = var17.bind(var22)(var21, var20);
                var17 = new Array(3);
                var17[0] = var22;
                var22 = var16[var18];
                var23 = var19.bind(var3)(var22);
                var22 = var23.hexWithOpacity;
                var22 = var22.bind(var23)(var21, var24);
                var17[1] = var22;
                var18 = var16[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.hexWithOpacity;
                var18 = var18.bind(var19)(var21, var20);
                var17[2] = var18;
                var10.colors = var17;
                var17 = {
                    'x': 0,
                    'y': 0
                };
                var10.start = var17;
                var17 = {
                    'x': 1,
                    'y': 0
                };
                var10.end = var17;
                var17 = [0, 0.5, 1];
                var10.locations = var17;
                var18 = var14.gradientHighlight;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var14.gradientHighlightBottom;
                var17[1] = var18;
                var10.style = var17;
                var10 = var13.bind(var3)(var12, var10);
                var9[1] = var10;
                var17 = _closure1_slot11;
                var10 = 32;
                var12 = var16[var10];
                var13 = var15.bind(var3)(var12);
                var12 = {};
                var18 = 33;
                var19 = var16[var18];
                var19 = var15.bind(var3)(var19);
                var12.source = var19;
                var20 = var14.sparkleStar;
                var19 = new Array(3);
                var19[0] = var20;
                var20 = var14.sparkleStarPointed;
                var19[1] = var20;
                var20 = var14.sparkleStarPointed1;
                var19[2] = var20;
                var12.style = var19;
                var12 = var17.bind(var3)(var13, var12);
                var9[2] = var12;
                var17 = _closure1_slot11;
                var12 = var16[var10];
                var13 = var15.bind(var3)(var12);
                var12 = {};
                var19 = var16[var18];
                var19 = var15.bind(var3)(var19);
                var12.source = var19;
                var20 = var14.sparkleStar;
                var19 = new Array(3);
                var19[0] = var20;
                var20 = var14.sparkleStarPointed;
                var19[1] = var20;
                var20 = var14.sparkleStarPointed2;
                var19[2] = var20;
                var12.style = var19;
                var12 = var17.bind(var3)(var13, var12);
                var9[3] = var12;
                var17 = _closure1_slot11;
                var12 = var16[var10];
                var13 = var15.bind(var3)(var12);
                var12 = {};
                var18 = var16[var18];
                var18 = var15.bind(var3)(var18);
                var12.source = var18;
                var19 = var14.sparkleStar;
                var18 = new Array(3);
                var18[0] = var19;
                var19 = var14.sparkleStarPointed;
                var18[1] = var19;
                var19 = var14.sparkleStarPointed3;
                var18[2] = var19;
                var12.style = var18;
                var12 = var17.bind(var3)(var13, var12);
                var9[4] = var12;
                var12 = _closure1_slot11;
                var10 = var16[var10];
                var11 = var15.bind(var3)(var10);
                var10 = {};
                var13 = 34;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var10.source = var13;
                var15 = var14.sparkleStar;
                var13 = new Array(3);
                var13[0] = var15;
                var15 = var14.sparkleStarElongated;
                var13[1] = var15;
                var14 = var14.sparkleStarElongated1;
                var13[2] = var14;
                var10.style = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[5] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2154:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.DeprecatedLayoutAnimation;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot4;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = !var0;
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var _closure2_slot6 = var0;
        var0 = _closure1_slot16;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var0 = arg0;
        var1 = var0.guild;
        var _closure2_slot0 = var1;
        var8 = _closure1_slot4;
        var0 = var8.useRef;
        var2 = null;
        var7 = var0.bind(var8)(var2);
        var _closure2_slot1 = var7;
        var0 = var8.useRef;
        var0 = var0.bind(var8)(var2);
        var _closure2_slot2 = var0;
        var2 = var8.useState;
        var0 = false;
        var9 = var2.bind(var8)(var0);
        var2 = _closure1_slot3;
        var0 = 2;
        var2 = var2.bind(var3)(var9, var0);
        var0 = 0;
        var0 = var2[var0];
        var _closure2_slot3 = var0;
        var0 = 1;
        var0 = var2[var0];
        var _closure2_slot4 = var0;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 35;
        var0 = var9[var0];
        var10 = var2.bind(var3)(var0);
        var9 = var10.useStateFromStores;
        var0 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var4
            var0 = _closure1_slot7;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var0 = var9.bind(var10)(var2, var0);
        var _closure2_slot5 = var0;
        var2 = var8.useEffect;
        var9 = var1.premiumTier;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var0;
        var0 = function() { // Environment: var4
            var1 = global;
            var4 = var1.window;
            var3 = var4.setTimeout;
            var2 = function() { // Environment: var0
                _fun78727: for (var _fun78727_ip = 0;;) switch (_fun78727_ip) {
                    case 0:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun78727_ip = 47;
                            continue _fun78727
                        }
                    case 18:
                        var0 = _closure2_slot2;
                        var2 = var0.current;
                        var1 = var2.measure;
                        var0 = function(arg0) { // Environment: var0
                            _fun78728: for (var _fun78728_ip = 0;;) switch (_fun78728_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var1 = var0.current;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun78728_ip = 66;
                                        continue _fun78728
                                    }
                                case 18:
                                    var0 = _closure2_slot1;
                                    var2 = var0.current;
                                    var1 = var2.scrollTo;
                                    var0 = {};
                                    var5 = arg0;
                                    var4 = 8;
                                    var4 = var5 - var4;
                                    var0.x = var4;
                                    var3 = _closure2_slot5;
                                    var3 = !var3;
                                    var0.animated = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 66:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                    case 47:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = 400;
            var1 = var3.bind(var4)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.window;
                var1 = var2.clearTimeout;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var8)(var0, var1);
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {
            'centerContent': true,
            'contentContainerStyle': null,
            'decelerationRate': 0.1,
            'horizontal': true
        };
        var8 = var6.cardsScrollerContent;
        var0.contentContainerStyle = var8;
        var0.ref = var7;
        var7 = _closure1_slot15;
        var0.snapToOffsets = var7;
        var6 = var6.cardsScroller;
        var0.style = var6;
        var6 = _closure1_slot14;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            var1 = arg0;
            var4 = var1.tier;
            var7 = var1.features;
            var1 = global;
            var9 = var1.Math;
            var8 = var9.min;
            var2 = _closure1_slot9;
            var3 = var2.TIER_3;
            var6 = _closure2_slot0;
            var10 = var6.premiumTier;
            var2 = 1;
            var2 = var10 + var2;
            var2 = var8.bind(var9)(var3, var2);
            var2 = var4 === var2;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot11;
            var2 = _closure1_slot18;
            var1 = {};
            var1.features = var7;
            var1.guild = var6;
            var6 = _closure2_slot3;
            var1.isExpanded = var6;
            var5 = _closure2_slot6;
            var1.onCardPress = var5;
            var0 = function arg0() {
                _fun78731: for (var _fun78731_ip = 0;;) switch (_fun78731_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        if (!var0) {
                            _fun78731_ip = 26;
                            continue _fun78731
                        }
                    case 10:
                        var1 = _closure2_slot2;
                        var0 = arg0;
                        var1.current = var0;
                    case 26:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.ref = var0;
            var1.tier = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 660, 1623, 33, 7703, 1234, 8821, 10018, 4866, 4863, 9240, 10020, 7701, 3256, 1297, 671, 10010, 4875, 3722, 4098, 3943, 3248, 3208, 4099, 4905, 6731, 10022, 10024, 3242, 4087, 10026, 10027, 566, 4898, 2]);