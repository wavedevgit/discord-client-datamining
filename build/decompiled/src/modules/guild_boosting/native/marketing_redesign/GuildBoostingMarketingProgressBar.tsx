// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var14 = 2;
    var1 = var6[var14];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var16 = 4;
    var1 = var6[var16];
    var1 = var5.bind(var0)(var1);
    var7 = var1.BoostedGuildTiers;
    var _closure1_slot7 = var7;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot8 = var4;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'display': 'flex',
        'alignItems': 'center',
        'width': '100%',
        'marginTop': 40
    };
    var1 = 40;
    var13 = 7;
    var11 = var6[var13];
    var11 = var5.bind(var0)(var11);
    var11 = var11.MARKER_DIMENSIONS;
    var15 = var11 / var14;
    var11 = 34;
    var11 = var15 + var11;
    var10.paddingHorizontal = var11;
    var4.progressBarContainer = var10;
    var10 = {
        'height': 54,
        'maxWidth': 660,
        'width': '100%'
    };
    var4.progressBar = var10;
    var10 = {};
    var11 = 8;
    var10.height = var11;
    var15 = var6[var13];
    var15 = var5.bind(var0)(var15);
    var15 = var15.MARKER_DIMENSIONS;
    var15 = var15 / var14;
    var15 = var15 - var16;
    var10.top = var15;
    var13 = var6[var13];
    var13 = var5.bind(var0)(var13);
    var13 = var13.MARKER_DIMENSIONS;
    var13 = var13 / var14;
    var13 = var13 + var14;
    var10.marginHorizontal = var13;
    var4.progressBarScrubber = var10;
    var10 = {
        'borderRadius': 8,
        'height': '100%',
        'width': '100%',
        'position': 'absolute',
        'zIndex': 0
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.SPINE_DEFAULT;
    var10.backgroundColor = var11;
    var4.progressBarTrack = var10;
    var10 = {
        'borderRadius': 8,
        'position': 'absolute',
        'height': '100%',
        'left': 0,
        'zIndex': 1
    };
    var4.progressBarFill = var10;
    var10 = {
        'height': '100%',
        'width': '100%',
        'borderRadius': 8
    };
    var4.progressBarGradientFill = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var8 = var7.NONE;
    var4 = new Array(4);
    var4[0] = var8;
    var8 = var7.TIER_1;
    var4[1] = var8;
    var8 = var7.TIER_2;
    var4[2] = var8;
    var7 = var7.TIER_3;
    var4[3] = var7;
    var _closure1_slot11 = var4;
    var4 = {
        'stiffness': 27,
        'damping': 10
    };
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+"%"};}';
    var4.code = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}';
    var4.code = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}';
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun78597: for (var _fun78597_ip = 0;;) switch (_fun78597_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot10;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 9;
                var0 = var17[var0];
                var0 = var12.bind(var3)(var0);
                var16 = var0.bind(var3)();
                var15 = _closure1_slot0;
                var0 = 10;
                var0 = var17[var0];
                var5 = var15.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var7
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var0 = var4.bind(var5)(var2, var0);
                var _closure2_slot1 = var0;
                var9 = 11;
                var2 = var17[var9];
                var5 = var15.bind(var3)(var2);
                var4 = var5.useSharedValue;
                var2 = 0;
                var5 = var4.bind(var5)(var2);
                var _closure2_slot2 = var5;
                var4 = _closure1_slot4;
                var10 = var4.useState;
                var21 = _closure1_slot7;
                var6 = var21.NONE;
                var11 = var10.bind(var4)(var6);
                var10 = _closure1_slot3;
                var6 = 2;
                var6 = var10.bind(var3)(var11, var6);
                var20 = var6[var2];
                var _closure2_slot3 = var20;
                var2 = 1;
                var19 = var6[var2];
                var _closure2_slot4 = var19;
                var2 = var17[var9];
                var10 = var15.bind(var3)(var2);
                var6 = var10.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '%';
                    var1 = var3.bind(var2)(var4, var1);
                    var0.width = var1;
                    return var0;
                };
                var11 = {};
                var11.width = var5;
                var2.__closure = var11;
                var11 = 8013193810386.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot13;
                var2.__initData = var11;
                var14 = var6.bind(var10)(var2);
                var2 = var17[var9];
                var11 = var15.bind(var3)(var2);
                var10 = var11.useAnimatedReaction;
                var6 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = {};
                var2.width = var5;
                var6.__closure = var2;
                var2 = 5482324713221.0;
                var6.__workletHash = var2;
                var2 = _closure1_slot14;
                var6.__initData = var2;
                var2 = function arg0() {
                    _fun78601: for (var _fun78601_ip = 0;;) switch (_fun78601_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure1_slot7;
                            var2 = var0.NONE;
                            var0 = 28.33;
                            if (!(var3 >= var0)) {
                                _fun78601_ip = 40;
                                continue _fun78601
                            }
                        case 30:
                            var0 = _closure1_slot7;
                            var2 = var0.TIER_1;
                        case 40:
                            var0 = 61.67;
                            if (!(var3 >= var0)) {
                                _fun78601_ip = 64;
                                continue _fun78601
                            }
                        case 54:
                            var0 = _closure1_slot7;
                            var2 = var0.TIER_2;
                        case 64:
                            var0 = 95;
                            if (!(var3 >= var0)) {
                                _fun78601_ip = 81;
                                continue _fun78601
                            }
                        case 71:
                            var0 = _closure1_slot7;
                            var2 = var0.TIER_3;
                        case 81:
                            var3 = _closure2_slot3;
                            if (!(var2 !== var3)) {
                                _fun78601_ip = 133;
                                continue _fun78601
                            }
                        case 92:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot4;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 133:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = {};
                var18.BoostedGuildTiers = var21;
                var21 = 5;
                var18.TIER_REACHED_OFFSET = var21;
                var18.revealedTier = var20;
                var20 = var17[var9];
                var20 = var15.bind(var3)(var20);
                var20 = var20.runOnJS;
                var18.runOnJS = var20;
                var18.setRevealedTier = var19;
                var2.__closure = var18;
                var18 = 4844648302516.0;
                var2.__workletHash = var18;
                var18 = _closure1_slot15;
                var2.__initData = var18;
                var2 = var10.bind(var11)(var6, var2);
                var6 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var7
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getGuildBoostingProgressBarFillFactor;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var4)(var1, var2);
                var6 = var1.fillFactor;
                var _closure2_slot5 = var6;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var7
                    _fun78603: for (var _fun78603_ip = 0;;) switch (_fun78603_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = 100;
                            var3 = var2 * var3;
                            var _closure3_slot0 = var3;
                            var2 = -1;
                            var _closure3_slot1 = var2;
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun78603_ip = 72;
                                continue _fun78603
                            }
                        case 37:
                            var2 = global;
                            var6 = var2.setTimeout;
                            var5 = undefined;
                            var4 = function() { // Environment: var0
                                var3 = _closure2_slot2;
                                var2 = var3.set;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 13;
                                var4 = var4[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.withSpring;
                                var4 = _closure3_slot0;
                                var1 = _closure1_slot12;
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = 750;
                            var2 = var6.bind(var5)(var4, var2);
                            _closure3_slot1 = var2;
                            _fun78603_ip = 86;
                            continue _fun78603;
                        case 72:
                            var2 = _closure2_slot2;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                        case 86:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.window;
                                var1 = var2.clearTimeout;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var13.progressBarContainer;
                var0.style = var4;
                var5 = _closure1_slot9;
                var4 = {};
                var6 = var13.progressBar;
                var4.style = var6;
                var6 = {};
                var10 = var13.progressBarScrubber;
                var6.style = var10;
                var9 = var17[var9];
                var9 = var12.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var18 = var13.progressBarFill;
                var11 = new Array(2);
                var11[0] = var18;
                var11[1] = var14;
                var9.style = var11;
                var11 = 14;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {
                    'useAngle': true,
                    'angle': 90
                };
                var14 = 15;
                var14 = var17[var14];
                var15 = var15.bind(var3)(var14);
                var14 = var15.isThemeDark;
                var14 = var14.bind(var15)(var16);
                var15 = '#515359';
                if (var14) {
                    _fun78597_ip = 648;
                    continue _fun78597
                }
            case 617:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 8;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.unsafe_rawColors;
                var15 = var14.PRIMARY_160;
            case 648:
                var14 = new Array(2);
                var14[0] = var15;
                var15 = '#AB77F2';
                var14[1] = var15;
                var11.colors = var14;
                var14 = [0.1577, 0.9905];
                var11.locations = var14;
                var14 = var13.progressBarGradientFill;
                var11.style = var14;
                var11 = var2.bind(var3)(var12, var11);
                var9.children = var11;
                var10 = var2.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = var13.progressBarTrack;
                var10.style = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var9 = var5.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var9 = _closure1_slot11;
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    _fun78606: for (var _fun78606_ip = 0;;) switch (_fun78606_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var9 = 7;
                            var0 = var0[var9];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.guild = var5;
                            var0.tier = var4;
                            var8 = _closure2_slot3;
                            var0.revealedTier = var8;
                            var8 = _closure2_slot1;
                            var0.useReducedMotion = var8;
                            var5 = var5.premiumTier;
                            var5 = var5 <= var4;
                            if (!var5) {
                                _fun78606_ip = 116;
                                continue _fun78606
                            }
                        case 81:
                            var7 = _closure2_slot5;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var6 = var8.bind(var2)(var6);
                            var6 = var6.TierMarkerPositions;
                            var6 = var6[var4];
                            var5 = var7 > var6;
                        case 116:
                            var0.isDisabled = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var7 = var8.bind(var9)(var7);
                var6[1] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.PROGRESS_BAR_SPACING = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 660, 33, 1297, 9984, 671, 3246, 632, 3720, 6707, 4081, 4098, 3206, 2]);