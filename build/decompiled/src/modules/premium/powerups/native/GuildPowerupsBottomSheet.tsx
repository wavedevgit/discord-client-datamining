// modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx
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
        _fun102448: for (var _fun102448_ip = 0;;) switch (_fun102448_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var15 = var0.powerup;
                var0 = _closure1_slot9;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.bind(var3)(var4, var15);
                var4 = _closure1_slot0;
                var0 = 8;
                var0 = var2[var0];
                var5 = var4.bind(var3)(var0);
                var4 = var5.useCalculatePowerupCardStatus;
                var0 = false;
                var13 = var4.bind(var5)(var15, var6, var0);
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var7 = true;
                var0 = var0.bind(var3)(var15, var7);
                var1 = null;
                var1 = var1 != var0;
                var8 = '';
                if (!var1) {
                    _fun102448_ip = 120;
                    continue _fun102448
                }
            case 117:
                var8 = var0;
            case 120:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var17 = var2.bind(var4)(var1, var0);
                var1 = var15.skuId;
                var0 = _closure1_slot5;
                var14 = undefined;
                if (!(var1 === var0)) {
                    _fun102448_ip = 192;
                    continue _fun102448
                }
            case 188:
                var14 = '+';
            case 192:
                var5 = var15.skuId;
                var4 = _closure1_slot5;
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var10 = var15.type;
                var6 = _closure1_slot6;
                var6 = var6.LEVEL;
                if (!(var10 !== var6)) {
                    _fun102448_ip = 385;
                    continue _fun102448
                }
            case 234:
                if (!(var5 !== var4)) {
                    _fun102448_ip = 292;
                    continue _fun102448
                }
            case 238:
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 13;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.imageUrl = var8;
                var8 = var12.image;
                var4.style = var8;
                var4.isAnimated = var7;
                var5 = var6.bind(var3)(var5, var4);
                _fun102448_ip = 383;
                continue _fun102448;
            case 292:
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var4 = {};
                var8 = var12.image;
                var4.style = var8;
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 12;
                var8 = var16[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.GameServerHostingRive;
                var8 = {};
                var16 = 'SM_Auto';
                var8.stateMachine = var16;
                var16 = {};
                var16.reducedMotion = var17;
                var8.dataBinding = var16;
                var8 = var11.bind(var3)(var10, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 383:
                _fun102448_ip = 427;
                continue _fun102448;
            case 385:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 11;
                var4 = var8[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var8 = var12.gemContainer;
                var4.style = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 427:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var12.headerContainer;
                var5.style = var8;
                var17 = _closure1_slot7;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 14;
                var8 = var16[var8];
                var8 = var10.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {};
                var18 = 'heading-xl/bold';
                var8.variant = var18;
                var18 = var15.title;
                var8.children = var18;
                var11 = var17.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot7;
                var9 = 15;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.GuildPowerupsCardFooter;
                var9 = {};
                var15 = var15.cost;
                var9.cost = var15;
                var9.costDecorator = var14;
                var9.status = var13;
                var12 = var12.statusContainer;
                var9.style = var12;
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
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.powerup;
        var1 = _closure1_slot9;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var _closure2_slot0 = var5;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 16;
        var1 = var7[var1];
        var1 = var6.bind(var3)(var1);
        var6 = var1.bind(var3)(var2);
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var5.levelContainer;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            var0 = arg0;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var4 = undefined;
            var3 = var7.bind(var4)(var1);
            var2 = var3.getIconForPerk;
            var1 = var0.perkIcon;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = _closure2_slot0;
            var5 = var9.perkContainer;
            var1.style = var5;
            var10 = _closure1_slot7;
            var5 = 14;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var11 = var9.perkText;
            var5.style = var11;
            var11 = 'text-md/medium';
            var5.variant = var11;
            var11 = var0.description;
            var5.children = var11;
            var7 = var10.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var9.perkIcon;
            var6.style = var9;
            var6 = var7.bind(var4)(var8, var6);
            var5[1] = var6;
            var1.children = var5;
            var8 = var0.perkIcon;
            var0 = global;
            var0 = var0.HermesInternal;
            var7 = var0.concat;
            var6 = 'perk-';
            var5 = arg1;
            var0 = '-';
            var0 = var7.bind(var6)(var5, var0, var8);
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun102452: for (var _fun102452_ip = 0;;) switch (_fun102452_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.powerup;
                var1 = _closure1_slot9;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = var4.type;
                var1 = _closure1_slot6;
                var1 = var1.PERK;
                if (!(var1 !== var2)) {
                    _fun102452_ip = 80;
                    continue _fun102452
                }
            case 41:
                var1 = _closure1_slot6;
                var1 = var1.LEVEL;
                if (!(var1 !== var2)) {
                    _fun102452_ip = 57;
                    continue _fun102452
                }
            case 55:
                return var3;
            case 57:
                var6 = _closure1_slot7;
                var2 = _closure1_slot11;
                var1 = {};
                var1.powerup = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 80:
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 14;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var5 = var5.description;
                var0.style = var5;
                var5 = 'text-md/medium';
                var0.variant = var5;
                var4 = var4.description;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun102453: for (var _fun102453_ip = 0;;) switch (_fun102453_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var6 = var0.powerup;
                var0 = _closure1_slot9;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 18;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var6);
                var5 = var0.showToggleButton;
                var7 = var0.showConfigureButton;
                var12 = var0.isPowerupActive;
                var _closure2_slot0 = var12;
                var0 = 19;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var6, var12);
                var10 = var0.disabled;
                var19 = var0.reason;
                var0 = 20;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var6);
                var8 = var0.onActivate;
                var _closure2_slot1 = var8;
                var11 = var0.isLoading;
                var0 = 21;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var6);
                var _closure2_slot2 = var0;
                var0 = 22;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var16 = var0.bind(var3)(var1, var6);
                var8 = !var7;
                if (!var8) {
                    _fun102453_ip = 190;
                    continue _fun102453
                }
            case 187:
                var8 = var12;
            case 190:
                if (!var8) {
                    _fun102453_ip = 212;
                    continue _fun102453
                }
            case 193:
                var1 = var6.type;
                var0 = _closure1_slot6;
                var0 = var0.PERK;
                var8 = var1 === var0;
            case 212:
                if (var8) {
                    _fun102453_ip = 229;
                    continue _fun102453
                }
            case 215:
                var1 = var6.skuId;
                var0 = _closure1_slot5;
                var8 = var1 === var0;
            case 229:
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var17.footerContainer;
                var0.style = var4;
                if (!var8) {
                    _fun102453_ip = 363;
                    continue _fun102453
                }
            case 252:
                var15 = _closure1_slot7;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var4 = 14;
                var4 = var22[var4];
                var4 = var18.bind(var3)(var4);
                var14 = var4.Text;
                var4 = {};
                var17 = var17.description;
                var4.style = var17;
                var17 = 'text-md/bold';
                var4.variant = var17;
                var17 = 23;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var20 = var17.intl;
                var18 = var20.string;
                var21 = _closure1_slot1;
                var17 = 24;
                var17 = var22[var17];
                var17 = var21.bind(var3)(var17);
                var17 = var17["jo5++h"];
                var17 = var18.bind(var20)(var17);
                var4.children = var17;
                var8 = var15.bind(var3)(var14, var4);
            case 363:
                var4 = new Array(4);
                var4[0] = var8;
                var8 = var10;
                if (!var8) {
                    _fun102453_ip = 429;
                    continue _fun102453
                }
            case 377:
                var17 = _closure1_slot7;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 25;
                var14 = var18[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var18 = null;
                var20 = var18 != var19;
                var18 = '';
                if (!var20) {
                    _fun102453_ip = 419;
                    continue _fun102453
                }
            case 416:
                var18 = var19;
            case 419:
                var14.text = var18;
                var8 = var17.bind(var3)(var15, var14);
            case 429:
                var4[1] = var8;
                if (!var7) {
                    _fun102453_ip = 541;
                    continue _fun102453
                }
            case 436:
                var15 = _closure1_slot7;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 26;
                var8 = var21[var8];
                var8 = var18.bind(var3)(var8);
                var14 = var8.Button;
                var8 = {};
                var17 = 'primary';
                var8.variant = var17;
                var17 = 23;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var20 = _closure1_slot1;
                var17 = 24;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.g5Ds69;
                var17 = var18.bind(var19)(var17);
                var8.text = var17;
                var8.onPress = var16;
                var7 = var15.bind(var3)(var14, var8);
            case 541:
                var4[2] = var7;
                if (!var5) {
                    _fun102453_ip = 562;
                    continue _fun102453
                }
            case 548:
                var7 = var6.skuId;
                var6 = _closure1_slot5;
                var5 = var7 !== var6;
            case 562:
                if (!var5) {
                    _fun102453_ip = 718;
                    continue _fun102453
                }
            case 568:
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 26;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Button;
                var6 = {};
                var14 = 'primary';
                if (!var12) {
                    _fun102453_ip = 611;
                    continue _fun102453
                }
            case 607:
                var14 = 'secondary';
            case 611:
                var6.variant = var14;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 23;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var16 = _closure1_slot1;
                var13 = 24;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                if (var12) {
                    _fun102453_ip = 677;
                    continue _fun102453
                }
            case 664:
                var12 = var13.gSxlHf;
                var12 = var14.bind(var15)(var12);
                _fun102453_ip = 688;
                continue _fun102453;
            case 677:
                var13 = var13.TZsu1U;
                var12 = var14.bind(var15)(var13);
            case 688:
                var6.text = var12;
                var6.loading = var11;
                var6.disabled = var10;
                var9 = function() {
                    _fun102454: for (var _fun102454_ip = 0;;) switch (_fun102454_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun102454_ip = 32;
                                continue _fun102454
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102454_ip = 52;
                                continue _fun102454
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun102454_ip = 52;
                            continue _fun102454;
                        case 32:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102454_ip = 52;
                                continue _fun102454
                            }
                        case 42:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 718:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildPowerupType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
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
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginTop = var11;
    var11 = 'center';
    var8.alignItems = var11;
    var3.headerContainer = var8;
    var8 = {};
    var8.justifyContent = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var3.statusContainer = var8;
    var8 = {};
    var12 = 'column';
    var8.flexDirection = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginTop = var12;
    var3.levelContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.perkContainer = var8;
    var8 = {
        'width': 20,
        'height': 20
    };
    var3.perkIcon = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginStart = var12;
    var3.perkText = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.gap = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var3.footerContainer = var8;
    var8 = {
        'width': '100%',
        'height': 160
    };
    var3.image = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginHorizontal = var12;
    var8.textAlign = var11;
    var3.description = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.gemContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var12 = var0.guildId;
        var11 = var0.powerup;
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 27;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var4 = true;
        var0.startExpanded = var4;
        var6 = _closure1_slot8;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var7.container;
        var4.style = var7;
        var10 = _closure1_slot7;
        var9 = _closure1_slot10;
        var7 = {};
        var7.guildId = var12;
        var7.powerup = var11;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var13 = _closure1_slot7;
        var10 = _closure1_slot12;
        var9 = {};
        var9.guildId = var12;
        var9.powerup = var11;
        var9 = var13.bind(var3)(var10, var9);
        var7[1] = var9;
        var10 = _closure1_slot7;
        var9 = _closure1_slot13;
        var8 = {};
        var8.guildId = var12;
        var8.powerup = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 9998, 6741, 33, 1297, 671, 13360, 13378, 13382, 566, 13383, 3161, 13385, 3943, 13386, 13388, 13377, 13389, 13390, 13391, 13394, 13399, 1234, 1890, 13400, 4085, 4934, 2]);