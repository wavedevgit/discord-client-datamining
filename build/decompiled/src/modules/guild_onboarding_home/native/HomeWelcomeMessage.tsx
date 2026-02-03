// modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun104749: for (var _fun104749_ip = 0;;) switch (_fun104749_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var15 = arg2;
                var1 = var2.split;
                var0 = /\[@username\]/g;
                var1 = var1.bind(var2)(var0);
                var0 = new Array(0);
                var2 = var1.length;
                var8 = 1;
                var2 = var2 - var8;
                var10 = 19;
                var6 = undefined;
                var9 = 'text-sm/normal';
                var13 = 'text-sm/bold';
                var12 = global;
                var11 = '@';
                var5 = '';
                var4 = '-user';
                var14 = 0;
                if (!(var14 < var2)) {
                    _fun104749_ip = 266;
                    continue _fun104749
                }
            case 94:
                var18 = var0.push;
                var20 = _closure1_slot8;
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var16 = var2[var10];
                var16 = var17.bind(var6)(var16);
                var19 = var16.Text;
                var16 = {};
                var16.variant = var9;
                var21 = var7.message;
                var16.style = var21;
                var21 = var1[var14];
                var16.children = var21;
                var16 = var20.bind(var6)(var19, var16, var14);
                var16 = var18.bind(var0)(var16);
                var16 = var0.push;
                var19 = _closure1_slot8;
                var2 = var2[var10];
                var2 = var17.bind(var6)(var2);
                var18 = var2.Text;
                var17 = {};
                var17.variant = var13;
                var2 = var7.message;
                var17.style = var2;
                var2 = var12.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var11)(var15);
                var17.children = var2;
                var2 = var12.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var14, var4);
                var2 = var19.bind(var6)(var18, var17, var2);
                var2 = var16.bind(var0)(var2);
                var14 = var14 + 1;
                var2 = var1.length;
                var2 = var2 - var8;
                if (var14 < var2) {
                    _fun104749_ip = 94;
                    continue _fun104749
                }
            case 266:
                var2 = var0.push;
                var5 = _closure1_slot8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var3 = var4.bind(var6)(var3);
                var4 = var3.Text;
                var3 = {};
                var3.variant = var9;
                var7 = var7.message;
                var3.style = var7;
                var7 = var1.length;
                var7 = var7 - var8;
                var7 = var1[var7];
                var3.children = var7;
                var1 = var1.length;
                var1 = var5.bind(var6)(var4, var3, var1);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 'relative';
    var8.position = var10;
    var3.relativeContainer = var8;
    var8 = {
        'marginHorizontal': 12,
        'marginVertical': 16,
        'borderRadius': null,
        'padding': 2,
        'display': 'flex',
        'flexDirection': 'column'
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.welcomeContainer = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'paddingHorizontal': 12,
        'paddingBottom': 12,
        'paddingTop': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.welcomeContent = var8;
    var8 = {
        'position': 'absolute',
        'zIndex': 2,
        'top': 0,
        'left': 28,
        'width': 40,
        'height': 40
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.avatarBackground = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967294,
        'zIndex': 4294967295,
        'left': 26,
        'width': 44,
        'height': 44
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var3.avatarBorder = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'zIndex': 3,
        'left': 28
    };
    var3.avatar = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 4,
        'paddingLeft': 44
    };
    var3.adminUsernameContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var12 = 8;
    var8.paddingLeft = var12;
    var3.adminUsername = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var8.color = var10;
    var3.message = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104750: for (var _fun104750_ip = 0;;) switch (_fun104750_ip) {
            case 0:
                var0 = arg0;
                var30 = var0.guildId;
                var _closure2_slot0 = var30;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot10;
                var22 = var0.bind(var4)();
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var0 = var5[var1];
                var9 = var6.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var0;
                var3 = function() { // Environment: var2
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var23 = var8.bind(var9)(var7, var3);
                var3 = var5[var1];
                var9 = var6.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot7;
                    var1 = var2.getWelcomeMessage;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var8.bind(var9)(var7, var3);
                var _closure2_slot1 = var20;
                var3 = var5[var1];
                var7 = var6.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    _fun104753: for (var _fun104753_ip = 0;;) switch (_fun104753_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getUser;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun104753_ip = 47;
                                continue _fun104753
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var4 = var3.authorIds;
                            var3 = 0;
                            var0 = var4[var3];
                        case 47:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var29 = var6.bind(var7)(var3, var0);
                var _closure2_slot2 = var29;
                var3 = _closure1_slot1;
                var0 = 9;
                var0 = var5[var0];
                var5 = var3.bind(var4)(var0);
                var0 = null;
                var6 = var0 == var29;
                var3 = undefined;
                if (var6) {
                    _fun104750_ip = 195;
                    continue _fun104750
                }
            case 190:
                var3 = var29.id;
            case 195:
                var6 = var5.bind(var4)(var3, var30);
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 10;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.user = var29;
                var3.displayProfile = var6;
                var3 = var5.bind(var4)(var3);
                var5 = var3.theme;
                var15 = var3.primaryColor;
                var13 = var3.secondaryColor;
                var12 = ['#B8CDFF', '#8CD9FF'];
                var6 = _closure1_slot0;
                var1 = var7[var1];
                var9 = var6.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var3, var1);
                _closure2_slot3 = var1;
                var3 = 11;
                var3 = var7[var3];
                var8 = var6.bind(var4)(var3);
                var7 = var8.useSubscribeGuildMembers;
                var6 = {};
                var9 = var0 == var20;
                var3 = undefined;
                if (var9) {
                    _fun104750_ip = 347;
                    continue _fun104750
                }
            case 341:
                var3 = var20.authorIds;
            case 347:
                if (!(var0 == var3)) {
                    _fun104750_ip = 355;
                    continue _fun104750
                }
            case 351:
                var3 = new Array(0);
            case 355:
                var6[var30] = var3;
                var3 = 'HomeWelcomeMessage';
                var3 = var7.bind(var8)(var6, var3);
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var3 = new Array(2);
                var3[0] = var29;
                var3[1] = var1;
                var2 = function() { // Environment: var2
                    _fun104755: for (var _fun104755_ip = 0;;) switch (_fun104755_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var7 = null;
                            var0 = var7 == var0;
                            if (var0) {
                                _fun104755_ip = 30;
                                continue _fun104755
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var2.isNonUserBot;
                            var0 = var1.bind(var2)();
                        case 30:
                            if (var0) {
                                _fun104755_ip = 146;
                                continue _fun104755
                            }
                        case 33:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var8 = _closure2_slot2;
                            var2 = var8.id;
                            var5 = var8.getAvatarURL;
                            var0 = _closure2_slot3;
                            var0 = var7 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun104755_ip = 95;
                                continue _fun104755
                            }
                        case 86:
                            var0 = _closure2_slot3;
                            var1 = var0.id;
                        case 95:
                            var0 = 80;
                            var1 = var5.bind(var8)(var1, var0);
                            var0 = {};
                            var5 = true;
                            var0.dispatchWait = var5;
                            var5 = _closure2_slot3;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun104755_ip = 135;
                                continue _fun104755
                            }
                        case 126:
                            var6 = _closure2_slot3;
                            var5 = var6.id;
                        case 135:
                            var0.guildId = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 146:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var3);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useName;
                var19 = var2.bind(var3)(var23);
                if (!(var0 != var20)) {
                    _fun104750_ip = 1173;
                    continue _fun104750
                }
            case 444:
                if (!(var0 != var23)) {
                    _fun104750_ip = 1173;
                    continue _fun104750
                }
            case 451:
                if (!(var0 != var29)) {
                    _fun104750_ip = 1173;
                    continue _fun104750
                }
            case 458:
                var18 = var0 != var1;
                if (!var18) {
                    _fun104750_ip = 480;
                    continue _fun104750
                }
            case 465:
                var2 = var1.ownerId;
                var1 = var29.id;
                var18 = var2 === var1;
            case 480:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var1.theme = var5;
                var1.primaryColor = var15;
                var1.secondaryColor = var13;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var22.relativeContainer;
                var5.style = var8;
                var8 = var29.avatarDecoration;
                var8 = var0 == var8;
                var9 = null;
                if (!var8) {
                    _fun104750_ip = 653;
                    continue _fun104750
                }
            case 562:
                var11 = _closure1_slot8;
                var10 = _closure1_slot4;
                var8 = {};
                var16 = var22.avatarBorder;
                var14 = new Array(2);
                var14[0] = var16;
                var16 = {};
                if (!(var0 == var15)) {
                    _fun104750_ip = 600;
                    continue _fun104750
                }
            case 592:
                var17 = 0;
                var17 = var12[var17];
                _fun104750_ip = 635;
                continue _fun104750;
            case 600:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var24 = 15;
                var24 = var26[var24];
                var26 = var25.bind(var4)(var24);
                var25 = var26.int2rgba;
                var24 = 1;
                var17 = var25.bind(var26)(var15, var24);
            case 635:
                var16.backgroundColor = var17;
                var14[1] = var16;
                var8.style = var14;
                var9 = var11.bind(var4)(var10, var8);
            case 653:
                var8 = new Array(4);
                var8[0] = var9;
                var10 = _closure1_slot8;
                var14 = _closure1_slot4;
                var9 = {};
                var11 = var22.avatarBackground;
                var9.style = var11;
                var9 = var10.bind(var4)(var14, var9);
                var8[1] = var9;
                var11 = _closure1_slot8;
                var28 = _closure1_slot1;
                var31 = _closure1_slot2;
                var9 = 16;
                var9 = var31[var9];
                var10 = var28.bind(var4)(var9);
                var9 = {};
                var16 = var22.avatar;
                var9.style = var16;
                var9.user = var29;
                var17 = _closure1_slot0;
                var16 = 17;
                var16 = var31[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.NORMAL;
                var9.size = var16;
                var27 = true;
                var9.disableStatus = var27;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var11 = _closure1_slot8;
                var9 = 18;
                var9 = var31[var9];
                var10 = var28.bind(var4)(var9);
                var9 = {};
                var16 = var22.welcomeContainer;
                var9.containerStyle = var16;
                var9.primaryColor = var15;
                var9.secondaryColor = var13;
                var9.fallbackBackground = var12;
                var13 = _closure1_slot9;
                var12 = {};
                var15 = var22.welcomeContent;
                var12.style = var15;
                var15 = {};
                var16 = var22.adminUsernameContainer;
                var15.style = var16;
                var25 = _closure1_slot8;
                var24 = 19;
                var16 = var31[var24];
                var16 = var17.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {};
                var26 = var22.adminUsername;
                var16.style = var26;
                var26 = 'text-md/semibold';
                var16.variant = var26;
                var26 = 20;
                var26 = var31[var26];
                var28 = var28.bind(var4)(var26);
                var26 = var28.getName;
                var26 = var26.bind(var28)(var30, var0, var29);
                var16.children = var26;
                var17 = var25.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = null;
                if (!var18) {
                    _fun104750_ip = 1028;
                    continue _fun104750
                }
            case 941:
                var26 = _closure1_slot8;
                var29 = _closure1_slot1;
                var30 = _closure1_slot2;
                var28 = 21;
                var18 = var30[var28];
                var25 = var29.bind(var4)(var18);
                var18 = {};
                var28 = var30[var28];
                var28 = var29.bind(var4)(var28);
                var28 = var28.Sizes;
                var28 = var28.REFRESH_SMALL_16;
                var18.size = var28;
                var28 = var22.icon;
                var18.style = var28;
                var28 = 22;
                var28 = var30[var28];
                var28 = var29.bind(var4)(var28);
                var18.source = var28;
                var18.disableColor = var27;
                var17 = var26.bind(var4)(var25, var18);
            case 1028:
                var16[1] = var17;
                var15.children = var16;
                var16 = var13.bind(var4)(var14, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot8;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var24];
                var16 = var17.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {};
                var24 = 'text-sm/normal';
                var16.variant = var24;
                var21 = _closure1_slot11;
                var20 = var20.message;
                if (!(var0 == var19)) {
                    _fun104750_ip = 1106;
                    continue _fun104750
                }
            case 1101:
                var19 = var23.username;
            case 1106:
                var19 = var21.bind(var4)(var22, var20, var19);
                var16.children = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var13.bind(var4)(var14, var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1173:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 1613, 4304, 33, 1297, 671, 632, 6946, 6954, 7738, 6947, 3227, 3150, 668, 5729, 5447, 6963, 3932, 3952, 4077, 8135, 2]);