// modules/activity_status/native/ActivityStatus.tsx
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DOT_UNICODE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.Fragment;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.container = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.icon = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.emoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/native/ActivityStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68647: for (var _fun68647_ip = 0;;) switch (_fun68647_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.userId;
                var _closure2_slot0 = var17;
                var9 = var0.guildId;
                var2 = var0.iconStyle;
                var _closure2_slot1 = var2;
                var13 = var0.textStyle;
                var _closure2_slot2 = var13;
                var19 = var0.emojiSize;
                var4 = undefined;
                if (!(var19 === var4)) {
                    _fun68647_ip = 54;
                    continue _fun68647
                }
            case 51:
                var19 = 14;
            case 54:
                var12 = var0.maxFontSizeMultiplier;
                var _closure2_slot3 = var12;
                var20 = var0.animate;
                if (!(var20 === var4)) {
                    _fun68647_ip = 76;
                    continue _fun68647
                }
            case 74:
                var20 = true;
            case 76:
                var8 = var0.hideEmoji;
                if (!(var8 === var4)) {
                    _fun68647_ip = 90;
                    continue _fun68647
                }
            case 88:
                var8 = false;
            case 90:
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var0 = _closure1_slot13;
                var5 = var0.bind(var4)();
                _closure2_slot4 = var5;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 9;
                var0 = var10[var6];
                var7 = var14.bind(var4)(var0);
                var3 = var7.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var7)(var2, var0);
                var0 = var10[var6];
                var15 = var14.bind(var4)(var0);
                var7 = var15.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getActivities;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var15)(var3, var0);
                _closure2_slot5 = var7;
                var3 = _closure1_slot1;
                var0 = 10;
                var0 = var10[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)(var17);
                _closure2_slot6 = var0;
                var0 = 11;
                var0 = var10[var0];
                var16 = var14.bind(var4)(var0);
                var14 = var16.useVoiceActivityStatusMobileExperiment;
                var0 = {};
                var15 = 'ActivityStatus';
                var0.location = var15;
                var0 = var14.bind(var16)(var0);
                var14 = var0.voiceActivityStatusEnabled;
                var0 = 12;
                var0 = var10[var0];
                var3 = var3.bind(var4)(var0);
                var0 = {};
                var10 = undefined;
                if (!var14) {
                    _fun68647_ip = 314;
                    continue _fun68647
                }
            case 311:
                var10 = var17;
            case 314:
                var0.userId = var10;
                var0.guildId = var9;
                var0 = var3.bind(var4)(var0);
                var14 = var0.voiceChannel;
                _closure2_slot7 = var14;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 13;
                var9 = var0[var9];
                var10 = var3.bind(var4)(var9);
                var9 = var10.useCanSeeHangStatus;
                var9 = var9.bind(var10)(var15, var14);
                _closure2_slot8 = var9;
                var14 = _closure1_slot3;
                var15 = var14.useMemo;
                var10 = new Array(3);
                var10[0] = var7;
                var10[1] = var9;
                var10[2] = var17;
                var9 = function() { // Environment: var1
                    _fun68650: for (var _fun68650_ip = 0;;) switch (_fun68650_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun68650_ip = 63;
                                continue _fun68650
                            }
                        case 14:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun68650_ip = 63;
                                continue _fun68650
                            }
                        case 27:
                            var2 = _closure2_slot5;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun68650_ip = 63;
                                continue _fun68650
                            }
                        case 40:
                            var3 = _closure2_slot5;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot9;
                                var0 = var0.HANG_STATUS;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var16 = var15.bind(var14)(var9, var10);
                var10 = var14.useMemo;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var1
                    _fun68652: for (var _fun68652_ip = 0;;) switch (_fun68652_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            var4 = var0 == var1;
                            var2 = undefined;
                            if (var4) {
                                _fun68652_ip = 41;
                                continue _fun68652
                            }
                        case 18:
                            var5 = _closure2_slot5;
                            var4 = var5.find;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot9;
                                var0 = var0.CUSTOM_STATUS;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var4.bind(var5)(var3);
                        case 41:
                            if (!(var0 != var2)) {
                                _fun68652_ip = 118;
                                continue _fun68652
                            }
                        case 45:
                            var4 = var2.state;
                            var3 = var0 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun68652_ip = 69;
                                continue _fun68652
                            }
                        case 59:
                            var3 = var4.trim;
                            var1 = var3.bind(var4)();
                        case 69:
                            var4 = var0 != var1;
                            var3 = null;
                            if (!var4) {
                                _fun68652_ip = 81;
                                continue _fun68652
                            }
                        case 78:
                            var3 = var1;
                        case 81:
                            var4 = '';
                            var1 = null;
                            if (!(var4 !== var3)) {
                                _fun68652_ip = 94;
                                continue _fun68652
                            }
                        case 91:
                            var1 = var3;
                        case 94:
                            if (!(var0 == var1)) {
                                _fun68652_ip = 113;
                                continue _fun68652
                            }
                        case 98:
                            var1 = var2.emoji;
                            var3 = var0 == var1;
                            var1 = null;
                            if (var3) {
                                _fun68652_ip = 116;
                                continue _fun68652
                            }
                        case 113:
                            var1 = var2;
                        case 116:
                            return var1;
                        case 118:
                            return var0;
                    }
                };
                var21 = var10.bind(var14)(var7, var9);
                var0 = var0[var6];
                var7 = var3.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.isBlockedOrIgnored;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var6.bind(var7)(var3, var0);
                var0 = null;
                if (var3) {
                    _fun68647_ip = 1098;
                    continue _fun68647
                }
            case 484:
                var6 = var0 == var2;
                var3 = undefined;
                if (var6) {
                    _fun68647_ip = 499;
                    continue _fun68647
                }
            case 493:
                var3 = var2.bot;
            case 499:
                var2 = true;
                var2 = var2 === var3;
                _closure2_slot9 = var2;
                var3 = var0 == var21;
                var2 = undefined;
                if (var3) {
                    _fun68647_ip = 523;
                    continue _fun68647
                }
            case 518:
                var2 = var21.state;
            case 523:
                var2 = var0 != var2;
                _closure2_slot10 = var2;
                var1 = function() { // Environment: var1
                    _fun68655: for (var _fun68655_ip = 0;;) switch (_fun68655_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var7 = null;
                            if (!(var7 == var0)) {
                                _fun68655_ip = 293;
                                continue _fun68655
                            }
                        case 16:
                            var0 = _closure2_slot5;
                            var0 = var7 == var0;
                            var5 = undefined;
                            var6 = undefined;
                            if (var0) {
                                _fun68655_ip = 54;
                                continue _fun68655
                            }
                        case 31:
                            var2 = _closure2_slot5;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun68656: for (var _fun68656_ip = 0;;) switch (_fun68656_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.type;
                                        var0 = _closure1_slot9;
                                        var0 = var0.CUSTOM_STATUS;
                                        var0 = var2 !== var0;
                                        if (!var0) {
                                            _fun68656_ip = 42;
                                            continue _fun68656
                                        }
                                    case 28:
                                        var1 = _closure1_slot9;
                                        var1 = var1.HANG_STATUS;
                                        var0 = var2 !== var1;
                                    case 42:
                                        return var0;
                                }
                            };
                            var6 = var1.bind(var2)(var0);
                        case 54:
                            if (!(var7 == var6)) {
                                _fun68655_ip = 185;
                                continue _fun68655
                            }
                        case 61:
                            var0 = _closure2_slot7;
                            var1 = var7 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun68655_ip = 183;
                                continue _fun68655
                            }
                        case 74:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 17;
                            var1 = var8[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = {};
                            var8 = _closure2_slot7;
                            var1.channel = var8;
                            var8 = _closure2_slot4;
                            var9 = var8.icon;
                            var8 = new Array(2);
                            var8[0] = var9;
                            var9 = _closure2_slot1;
                            var8[1] = var9;
                            var1.iconStyle = var8;
                            var8 = _closure2_slot2;
                            var1.textStyle = var8;
                            var8 = _closure2_slot3;
                            var1.maxFontSizeMultiplier = var8;
                            var8 = _closure2_slot9;
                            var1.hideIcon = var8;
                            var8 = _closure2_slot10;
                            var1.hideText = var8;
                            var0 = var3.bind(var5)(var2, var1);
                        case 183:
                            _fun68655_ip = 291;
                            continue _fun68655;
                        case 185:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 16;
                            var1 = var8[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = {};
                            var1.activity = var6;
                            var6 = _closure2_slot4;
                            var8 = var6.icon;
                            var6 = new Array(2);
                            var6[0] = var8;
                            var8 = _closure2_slot1;
                            var6[1] = var8;
                            var1.iconStyle = var6;
                            var6 = _closure2_slot2;
                            var1.textStyle = var6;
                            var6 = _closure2_slot3;
                            var1.maxFontSizeMultiplier = var6;
                            var6 = _closure2_slot9;
                            var1.hideIcon = var6;
                            var6 = _closure2_slot10;
                            var1.hideText = var6;
                            var0 = var3.bind(var5)(var2, var1);
                        case 291:
                            return var0;
                        case 293:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure2_slot5;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun68655_ip = 371;
                                continue _fun68655
                            }
                        case 337:
                            var8 = _closure2_slot5;
                            var7 = var8.find;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 15;
                            var6 = var10[var6];
                            var6 = var9.bind(var2)(var6);
                            var5 = var7.bind(var8)(var6);
                        case 371:
                            var0.game = var5;
                            var5 = _closure2_slot4;
                            var6 = var5.icon;
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = _closure2_slot1;
                            var5[1] = var6;
                            var0.iconStyle = var5;
                            var5 = _closure2_slot2;
                            var0.textStyle = var5;
                            var5 = _closure2_slot3;
                            var0.maxFontSizeMultiplier = var5;
                            var5 = _closure2_slot9;
                            var0.hideIcon = var5;
                            var4 = _closure2_slot10;
                            var0.hideText = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var7 = var1.bind(var4)();
                if (!(var0 == var21)) {
                    _fun68647_ip = 558;
                    continue _fun68647
                }
            case 546:
                var1 = var0 == var16;
                var6 = null;
                if (var1) {
                    _fun68647_ip = 973;
                    continue _fun68647
                }
            case 558:
                if (!(var0 == var16)) {
                    _fun68647_ip = 770;
                    continue _fun68647
                }
            case 565:
                var2 = var0 != var21;
                var1 = null;
                if (!var2) {
                    _fun68647_ip = 762;
                    continue _fun68647
                }
            case 577:
                var9 = _closure1_slot12;
                var3 = _closure1_slot11;
                var2 = {};
                var10 = var21.emoji;
                var14 = var0 != var10;
                if (!var14) {
                    _fun68647_ip = 603;
                    continue _fun68647
                }
            case 600:
                var14 = !var8;
            case 603:
                if (!var14) {
                    _fun68647_ip = 668;
                    continue _fun68647
                }
            case 606:
                var18 = _closure1_slot10;
                var15 = _closure1_slot1;
                var22 = _closure1_slot2;
                var10 = 21;
                var10 = var22[var10];
                var15 = var15.bind(var4)(var10);
                var10 = {};
                var22 = var21.emoji;
                var10.emoji = var22;
                var10.size = var19;
                var10.animate = var20;
                var20 = var5.emoji;
                var10.style = var20;
                var14 = var18.bind(var4)(var15, var10);
            case 668:
                var10 = new Array(2);
                var10[0] = var14;
                var14 = var21.state;
                var14 = var0 != var14;
                if (!var14) {
                    _fun68647_ip = 748;
                    continue _fun68647
                }
            case 688:
                var20 = _closure1_slot10;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var15 = 20;
                var15 = var22[var15];
                var18 = var18.bind(var4)(var15);
                var15 = {};
                var22 = 'text-xs/normal';
                var15.variant = var22;
                var15.style = var13;
                var15.maxFontSizeMultiplier = var12;
                var21 = var21.state;
                var15.children = var21;
                var14 = var20.bind(var4)(var18, var15);
            case 748:
                var10[1] = var14;
                var2.children = var10;
                var1 = var9.bind(var4)(var3, var2);
            case 762:
                var6 = var1;
                _fun68647_ip = 973;
                continue _fun68647;
            case 770:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getHangStatusText;
                var15 = var1.bind(var2)(var17, var16);
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var1 = {};
                var9 = !var8;
                if (!var9) {
                    _fun68647_ip = 896;
                    continue _fun68647
                }
            case 818:
                var14 = _closure1_slot10;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 19;
                var8 = var18[var8];
                var10 = var10.bind(var4)(var8);
                var8 = {};
                var8.userId = var17;
                var8.size = var19;
                var18 = var5.emoji;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var18.width = var19;
                var18.height = var19;
                var17[1] = var18;
                var8.emojiStyle = var17;
                var8.hangStatusActivity = var16;
                var9 = var14.bind(var4)(var10, var8);
            case 896:
                var8 = new Array(2);
                var8[0] = var9;
                var14 = _closure1_slot10;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 20;
                var9 = var16[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var16 = 'text-xs/normal';
                var9.variant = var16;
                var9.style = var13;
                var9.maxFontSizeMultiplier = var12;
                var9.children = var15;
                var9 = var14.bind(var4)(var10, var9);
                var8[1] = var9;
                var1.children = var8;
                var6 = var3.bind(var4)(var2, var1);
            case 973:
                var3 = _closure1_slot12;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.container;
                var1.style = var5;
                var5 = new Array(3);
                var5[0] = var7;
                var7 = var0 != var7;
                if (!var7) {
                    _fun68647_ip = 1011;
                    continue _fun68647
                }
            case 1007:
                var7 = var0 != var6;
            case 1011:
                if (!var7) {
                    _fun68647_ip = 1078;
                    continue _fun68647
                }
            case 1014:
                var10 = _closure1_slot10;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 20;
                var8 = var14[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {
                    'variant': 'text-xs/normal',
                    'style': null,
                    'maxFontSizeMultiplier': null,
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no-hide-descendants'
                };
                var8.style = var13;
                var8.maxFontSizeMultiplier = var12;
                var11 = _closure1_slot8;
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 1078:
                var5[1] = var7;
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1098:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3607, 3102, 1621, 8456, 660, 33, 1297, 566, 8457, 8458, 8459, 8460, 8461, 8466, 8467, 8475, 8477, 8479, 8465, 8486, 2]);