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
        _fun103050: for (var _fun103050_ip = 0;;) switch (_fun103050_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var20 = var0.powerup;
                var8 = var0.isNewPerk;
                var6 = var0.forceStaticImage;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var3 = undefined;
                var9 = var5.bind(var3)(var0);
                var7 = var9.isThemeLight;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var7 = var7.bind(var9)(var0);
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)(var7);
                var0 = 7;
                var7 = var4[var0];
                var7 = var2.bind(var3)(var7);
                var7 = var7.bind(var3)(var1, var20);
                var9 = 8;
                var9 = var4[var9];
                var13 = var5.bind(var3)(var9);
                var10 = var13.useCalculatePowerupCardStatus;
                var9 = false;
                var21 = var10.bind(var13)(var20, var7, var9);
                var0 = var4[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.isPowerupActiveStatusActive;
                var13 = var0.bind(var5)(var7);
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
                var19 = var5.bind(var3)(var20, var0, var6);
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
                    _fun103050_ip = 320;
                    continue _fun103050
                }
            case 315:
                var5 = var11.disabled;
            case 320:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var9 = var11.imageContainer;
                var7 = new Array(4);
                var7[0] = var9;
                var17 = null;
                var9 = var17 == var21;
                var10 = undefined;
                if (var9) {
                    _fun103050_ip = 368;
                    continue _fun103050
                }
            case 363:
                var10 = var21.type;
            case 368:
                var9 = 'active';
                var9 = var9 === var10;
                if (!var9) {
                    _fun103050_ip = 385;
                    continue _fun103050
                }
            case 379:
                var9 = var11.imageContainerActive;
            case 385:
                var7[1] = var9;
                var9 = var17 == var21;
                var10 = undefined;
                if (var9) {
                    _fun103050_ip = 403;
                    continue _fun103050
                }
            case 398:
                var10 = var21.type;
            case 403:
                var9 = 'expiring';
                var9 = var9 === var10;
                if (!var9) {
                    _fun103050_ip = 422;
                    continue _fun103050
                }
            case 416:
                var9 = var11.imageContainerExpiring;
            case 422:
                var7[2] = var9;
                var9 = var17 == var21;
                var10 = undefined;
                if (var9) {
                    _fun103050_ip = 440;
                    continue _fun103050
                }
            case 435:
                var10 = var21.type;
            case 440:
                var9 = 'removing';
                var9 = var9 === var10;
                if (!var9) {
                    _fun103050_ip = 459;
                    continue _fun103050
                }
            case 453:
                var9 = var11.imageContainerRemoving;
            case 459:
                var7[3] = var9;
                var4.style = var7;
                var10 = _closure1_slot4;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var7 = 14;
                var7 = var18[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var23 = var17 != var19;
                var18 = '';
                if (!var23) {
                    _fun103050_ip = 507;
                    continue _fun103050
                }
            case 504:
                var18 = var19;
            case 507:
                var7.imageUrl = var18;
                var18 = var11.image;
                var7.style = var18;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun103050_ip = 638;
                    continue _fun103050
                }
            case 539:
                var18 = _closure1_slot4;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var9 = 15;
                var9 = var26[var9];
                var9 = var25.bind(var3)(var9);
                var10 = var9.TextBadge;
                var9 = {};
                var19 = 16;
                var23 = var26[var19];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var19 = var26[var19];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.y2b7CA;
                var19 = var23.bind(var24)(var19);
                var9.text = var19;
                var19 = var11.badge;
                var9.style = var19;
                var8 = var18.bind(var3)(var10, var9);
            case 638:
                var7[1] = var8;
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
                var11 = 17;
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
                    _fun103050_ip = 823;
                    continue _fun103050
                }
            case 772:
                var19 = _closure1_slot4;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 18;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GuildPowerupCardFooterCost;
                var17 = {};
                var20 = var20.cost;
                var17.cost = var20;
                var17 = var19.bind(var3)(var18, var17);
                _fun103050_ip = 865;
                continue _fun103050;
            case 823:
                var20 = _closure1_slot4;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 18;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.GuildPowerupCardFooterStatus;
                var18 = {};
                var18.status = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 865:
                var11[1] = var17;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 19;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.disabled = var15;
                var9.loading = var14;
                var14 = 'primary';
                if (!var13) {
                    _fun103050_ip = 939;
                    continue _fun103050
                }
            case 935:
                var14 = 'secondary';
            case 939:
                var9.variant = var14;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 16;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 20;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                if (var13) {
                    _fun103050_ip = 1004;
                    continue _fun103050
                }
            case 996:
                var13 = var16.gSxlHf;
                _fun103050_ip = 1010;
                continue _fun103050;
            case 1004:
                var13 = var16.TZsu1U;
            case 1010:
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = function() {
                    _fun103051: for (var _fun103051_ip = 0;;) switch (_fun103051_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun103051_ip = 22;
                                continue _fun103051
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun103051_ip = 32;
                            continue _fun103051;
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
        _fun103052: for (var _fun103052_ip = 0;;) switch (_fun103052_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 3;
                var6 = var3[var5];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var1.gap = var6;
                var0.container = var1;
                var1 = {};
                var6 = var3[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_24;
                var1.gap = var6;
                var6 = var3[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.marginHorizontal = var6;
                var0.cardsContainer = var1;
                var6 = 4;
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
                var8 = var3[var5];
                var8 = var7.bind(var4)(var8);
                var8 = var8.radii;
                var8 = var8.md;
                var1.borderRadius = var8;
                var8 = 1;
                var1.borderWidth = var8;
                var8 = var3[var5];
                var8 = var7.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_MUTED;
                var1.borderColor = var8;
                var8 = 'solid';
                var1.borderStyle = var8;
                var3 = var3[var6];
                var7 = var7.bind(var4)(var3);
                var3 = '#ffffff';
                var8 = arg0;
                if (!var8) {
                    _fun103052_ip = 239;
                    continue _fun103052
                }
            case 235:
                var3 = '#000000';
            case 239:
                var8 = var7.bind(var4)(var3);
                var7 = var8.alpha;
                var3 = 0.04;
                var7 = var7.bind(var8)(var3);
                var3 = var7.hex;
                var3 = var3.bind(var7)();
                var1.backgroundColor = var3;
                var0.imageContainer = var1;
                var1 = {};
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var6];
                var8 = var3.bind(var4)(var7);
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.GREEN_360;
                var9 = var8.bind(var4)(var7);
                var7 = var9.alpha;
                var8 = 0.35;
                var9 = var7.bind(var9)(var8);
                var7 = var9.hex;
                var7 = var7.bind(var9)();
                var1.borderColor = var7;
                var0.imageContainerActive = var1;
                var1 = {};
                var7 = var2[var6];
                var9 = var3.bind(var4)(var7);
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.YELLOW_300;
                var9 = var9.bind(var4)(var7);
                var7 = var9.alpha;
                var9 = var7.bind(var9)(var8);
                var7 = var9.hex;
                var7 = var7.bind(var9)();
                var1.borderColor = var7;
                var0.imageContainerExpiring = var1;
                var1 = {};
                var6 = var2[var6];
                var7 = var3.bind(var4)(var6);
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.YELLOW_300;
                var7 = var7.bind(var4)(var6);
                var6 = var7.alpha;
                var7 = var6.bind(var7)(var8);
                var6 = var7.hex;
                var6 = var6.bind(var7)();
                var1.borderColor = var6;
                var0.imageContainerRemoving = var1;
                var1 = {
                    'width': '75%',
                    'height': 180,
                    'resizeMode': 'contain'
                };
                var0.image = var1;
                var1 = {};
                var6 = 0.5;
                var1.opacity = var6;
                var0.disabled = var1;
                var1 = {};
                var6 = 'absolute';
                var1.position = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var1.top = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_8;
                var1.right = var2;
                var0.badge = var1;
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
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103053: for (var _fun103053_ip = 0;;) switch (_fun103053_ip) {
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
                var0 = 21;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var10 = var0.bottom;
                var0 = 22;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var20 = var0.bind(var4)(var1, var13);
                var _closure2_slot1 = var20;
                var11 = null;
                var1 = var11 == var20;
                var0 = null;
                if (var1) {
                    _fun103053_ip = 398;
                    continue _fun103053
                }
            case 98:
                var3 = _closure1_slot4;
                var6 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 23;
                var1 = var16[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var7 = _closure1_slot5;
                var5 = 24;
                var5 = var16[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.BottomSheetScrollView;
                var5 = {};
                var8 = {};
                var8.paddingBottom = var10;
                var5.contentContainerStyle = var8;
                var15 = _closure1_slot4;
                var10 = _closure1_slot1;
                var8 = 25;
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
                    _fun103053_ip = 317;
                    continue _fun103053
                }
            case 245:
                var16 = _closure1_slot4;
                var15 = _closure1_slot3;
                var11 = {};
                var17 = var14.disabledReasonContainer;
                var11.style = var17;
                var19 = _closure1_slot4;
                var18 = _closure1_slot1;
                var21 = _closure1_slot2;
                var17 = 26;
                var17 = var21[var17];
                var18 = var18.bind(var4)(var17);
                var17 = {};
                var20 = var20.disabledReason;
                var17.text = var20;
                var17 = var19.bind(var4)(var18, var17);
                var11.children = var17;
                var10 = var16.bind(var4)(var15, var11);
            case 317:
                var8[1] = var10;
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var9 = {};
                var14 = var14.cardsContainer;
                var9.style = var14;
                var14 = var13.powerups;
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    _fun103054: for (var _fun103054_ip = 0;;) switch (_fun103054_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot4;
                            var3 = _closure1_slot8;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2.guildId = var1;
                            var2.powerup = var0;
                            var1 = _closure2_slot1;
                            var9 = var1.newPowerupSkuIdSet;
                            var1 = null;
                            var7 = var1 == var9;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun103054_ip = 71;
                                continue _fun103054
                            }
                        case 55:
                            var8 = var9.has;
                            var7 = var0.skuId;
                            var6 = var8.bind(var9)(var7);
                        case 71:
                            var2.isNewPerk = var6;
                            var5 = _closure2_slot1;
                            var5 = var5.forceStaticImages;
                            var2.forceStaticImage = var5;
                            var0 = var0.skuId;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 398:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 669, 3159, 3247, 13403, 13421, 13419, 13425, 13433, 13434, 13437, 13428, 8346, 1234, 3942, 13429, 4084, 1892, 1568, 13450, 4933, 4935, 13445, 13443, 2]);