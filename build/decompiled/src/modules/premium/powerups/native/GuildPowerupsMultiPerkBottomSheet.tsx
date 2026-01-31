// modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun102527: for (var _fun102527_ip = 0;;) switch (_fun102527_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var20 = var0.powerup;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var3 = undefined;
                var7 = var5.bind(var3)(var0);
                var6 = var7.isThemeLight;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var6.bind(var7)(var0);
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)(var6);
                var0 = 7;
                var6 = var4[var0];
                var6 = var2.bind(var3)(var6);
                var6 = var6.bind(var3)(var1, var20);
                var7 = 8;
                var7 = var4[var7];
                var9 = var5.bind(var3)(var7);
                var8 = var9.useCalculatePowerupCardStatus;
                var7 = false;
                var21 = var8.bind(var9)(var20, var6, var7);
                var0 = var4[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.isPowerupActiveStatusActive;
                var13 = var0.bind(var5)(var6);
                var _closure2_slot0 = var13;
                var0 = 9;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var13);
                var22 = var0.textColor;
                var0 = 10;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var0 = true;
                var18 = var5.bind(var3)(var20, var0);
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var20, var13);
                var15 = var0.disabled;
                var0 = 12;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var20);
                var5 = var0.onActivate;
                var _closure2_slot1 = var5;
                var14 = var0.isLoading;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var20);
                var _closure2_slot2 = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var11.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var15;
                if (!var5) {
                    _fun102527_ip = 307;
                    continue _fun102527
                }
            case 302:
                var5 = var11.disabled;
            case 307:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot3;
                var4 = {};
                var8 = var11.imageContainer;
                var7 = new Array(4);
                var7[0] = var8;
                var17 = null;
                var8 = var17 == var21;
                var9 = undefined;
                if (var8) {
                    _fun102527_ip = 355;
                    continue _fun102527
                }
            case 350:
                var9 = var21.type;
            case 355:
                var8 = 'active';
                var8 = var8 === var9;
                if (!var8) {
                    _fun102527_ip = 372;
                    continue _fun102527
                }
            case 366:
                var8 = var11.imageContainerActive;
            case 372:
                var7[1] = var8;
                var8 = var17 == var21;
                var9 = undefined;
                if (var8) {
                    _fun102527_ip = 390;
                    continue _fun102527
                }
            case 385:
                var9 = var21.type;
            case 390:
                var8 = 'expiring';
                var8 = var8 === var9;
                if (!var8) {
                    _fun102527_ip = 409;
                    continue _fun102527
                }
            case 403:
                var8 = var11.imageContainerExpiring;
            case 409:
                var7[2] = var8;
                var8 = var17 == var21;
                var9 = undefined;
                if (var8) {
                    _fun102527_ip = 427;
                    continue _fun102527
                }
            case 422:
                var9 = var21.type;
            case 427:
                var8 = 'removing';
                var8 = var8 === var9;
                if (!var8) {
                    _fun102527_ip = 446;
                    continue _fun102527
                }
            case 440:
                var8 = var11.imageContainerRemoving;
            case 446:
                var7[3] = var8;
                var4.style = var7;
                var9 = _closure1_slot4;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 14;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var19 = var17 != var18;
                var10 = '';
                if (!var19) {
                    _fun102527_ip = 494;
                    continue _fun102527
                }
            case 491:
                var10 = var18;
            case 494:
                var7.imageUrl = var10;
                var10 = var11.image;
                var7.style = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var11.bodyContainer;
                var5.style = var8;
                var10 = _closure1_slot5;
                var9 = _closure1_slot3;
                var8 = {};
                var11 = var11.titleContainer;
                var8.style = var11;
                var19 = _closure1_slot4;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var11 = 15;
                var11 = var23[var11];
                var11 = var18.bind(var3)(var11);
                var18 = var11.Text;
                var11 = {};
                var23 = 'heading-md/semibold';
                var11.variant = var23;
                var11.color = var22;
                var22 = var20.title;
                var11.children = var22;
                var18 = var19.bind(var3)(var18, var11);
                var11 = new Array(2);
                var11[0] = var18;
                if (!(var17 == var21)) {
                    _fun102527_ip = 696;
                    continue _fun102527
                }
            case 645:
                var19 = _closure1_slot4;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 16;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GuildPowerupCardFooterCost;
                var17 = {};
                var20 = var20.cost;
                var17.cost = var20;
                var17 = var19.bind(var3)(var18, var17);
                _fun102527_ip = 738;
                continue _fun102527;
            case 696:
                var20 = _closure1_slot4;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 16;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.GuildPowerupCardFooterStatus;
                var18 = {};
                var18.status = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 738:
                var11[1] = var17;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 17;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.disabled = var15;
                var9.loading = var14;
                var14 = 'primary';
                if (!var13) {
                    _fun102527_ip = 812;
                    continue _fun102527
                }
            case 808:
                var14 = 'secondary';
            case 812:
                var9.variant = var14;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 18;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 19;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                if (var13) {
                    _fun102527_ip = 877;
                    continue _fun102527
                }
            case 869:
                var13 = var16.gSxlHf;
                _fun102527_ip = 883;
                continue _fun102527;
            case 877:
                var13 = var16.TZsu1U;
            case 883:
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = function() {
                    _fun102528: for (var _fun102528_ip = 0;;) switch (_fun102528_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun102528_ip = 22;
                                continue _fun102528
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun102528_ip = 32;
                            continue _fun102528;
                        case 22:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun102529: for (var _fun102529_ip = 0;;) switch (_fun102529_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var7 = 3;
                var3 = var4[var7];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var1.gap = var3;
                var0.container = var1;
                var1 = {};
                var3 = var4[var7];
                var3 = var6.bind(var5)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_24;
                var1.gap = var3;
                var3 = var4[var7];
                var3 = var6.bind(var5)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_16;
                var1.marginHorizontal = var3;
                var0.cardsContainer = var1;
                var3 = 4;
                var1 = {
                    'flexDirection': 'column',
                    'gap': 4
                };
                var0.titleContainer = var1;
                var1 = {
                    'justifyContent': 'space-between',
                    'alignItems': 'center',
                    'flexDirection': 'row'
                };
                var0.bodyContainer = var1;
                var1 = {};
                var8 = var4[var7];
                var8 = var6.bind(var5)(var8);
                var8 = var8.radii;
                var8 = var8.md;
                var1.borderRadius = var8;
                var8 = 1;
                var1.borderWidth = var8;
                var8 = var4[var7];
                var8 = var6.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_MUTED;
                var1.borderColor = var8;
                var8 = 'solid';
                var1.borderStyle = var8;
                var4 = var4[var3];
                var6 = var6.bind(var5)(var4);
                var4 = '#ffffff';
                var8 = arg0;
                if (!var8) {
                    _fun102529_ip = 239;
                    continue _fun102529
                }
            case 235:
                var4 = '#000000';
            case 239:
                var8 = var6.bind(var5)(var4);
                var6 = var8.alpha;
                var4 = 0.04;
                var6 = var6.bind(var8)(var4);
                var4 = var6.hex;
                var4 = var4.bind(var6)();
                var1.backgroundColor = var4;
                var0.imageContainer = var1;
                var1 = {};
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = var2[var3];
                var8 = var6.bind(var5)(var4);
                var4 = var2[var7];
                var4 = var6.bind(var5)(var4);
                var4 = var4.unsafe_rawColors;
                var4 = var4.GREEN_360;
                var9 = var8.bind(var5)(var4);
                var8 = var9.alpha;
                var4 = 0.35;
                var9 = var8.bind(var9)(var4);
                var8 = var9.hex;
                var8 = var8.bind(var9)();
                var1.borderColor = var8;
                var0.imageContainerActive = var1;
                var1 = {};
                var8 = var2[var3];
                var9 = var6.bind(var5)(var8);
                var8 = var2[var7];
                var8 = var6.bind(var5)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.YELLOW_300;
                var9 = var9.bind(var5)(var8);
                var8 = var9.alpha;
                var9 = var8.bind(var9)(var4);
                var8 = var9.hex;
                var8 = var8.bind(var9)();
                var1.borderColor = var8;
                var0.imageContainerExpiring = var1;
                var1 = {};
                var3 = var2[var3];
                var3 = var6.bind(var5)(var3);
                var2 = var2[var7];
                var2 = var6.bind(var5)(var2);
                var2 = var2.unsafe_rawColors;
                var2 = var2.YELLOW_300;
                var3 = var3.bind(var5)(var2);
                var2 = var3.alpha;
                var3 = var2.bind(var3)(var4);
                var2 = var3.hex;
                var2 = var2.bind(var3)();
                var1.borderColor = var2;
                var0.imageContainerRemoving = var1;
                var1 = {
                    'width': '75%',
                    'height': 180,
                    'resizeMode': 'contain'
                };
                var0.image = var1;
                var1 = {};
                var2 = 0.5;
                var1.opacity = var2;
                var0.disabled = var1;
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var3.cardsContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginBottom = var9;
    var3.disabledReasonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102530: for (var _fun102530_ip = 0;;) switch (_fun102530_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var13 = var0.listing;
                var0 = _closure1_slot7;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 20;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var20 = var0.bind(var4)(var1, var13);
                var11 = null;
                var1 = var11 == var20;
                var0 = null;
                if (var1) {
                    _fun102530_ip = 361;
                    continue _fun102530
                }
            case 73:
                var3 = _closure1_slot4;
                var6 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 21;
                var1 = var16[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var7 = _closure1_slot5;
                var5 = 22;
                var5 = var16[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.BottomSheetScrollView;
                var5 = {};
                var15 = _closure1_slot4;
                var10 = _closure1_slot1;
                var8 = 23;
                var8 = var16[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var16 = var20.title;
                var8.title = var16;
                var16 = var20.description;
                var8.description = var16;
                var10 = var15.bind(var4)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var10 = var20.disabledReason;
                var10 = var11 != var10;
                if (!var10) {
                    _fun102530_ip = 280;
                    continue _fun102530
                }
            case 208:
                var16 = _closure1_slot4;
                var15 = _closure1_slot3;
                var11 = {};
                var17 = var14.disabledReasonContainer;
                var11.style = var17;
                var19 = _closure1_slot4;
                var18 = _closure1_slot1;
                var21 = _closure1_slot2;
                var17 = 24;
                var17 = var21[var17];
                var18 = var18.bind(var4)(var17);
                var17 = {};
                var20 = var20.disabledReason;
                var17.text = var20;
                var17 = var19.bind(var4)(var18, var17);
                var11.children = var17;
                var10 = var16.bind(var4)(var15, var11);
            case 280:
                var8[1] = var10;
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var9 = {};
                var14 = var14.cardsContainer;
                var9.style = var14;
                var14 = var13.powerups;
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.guildId = var1;
                    var2.powerup = var0;
                    var1 = var0.skuId;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 361:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 669, 3116, 3205, 13302, 13320, 13318, 13324, 13332, 13333, 13336, 13327, 3900, 13328, 4043, 1234, 1881, 13349, 4894, 4896, 13344, 13342, 2]);