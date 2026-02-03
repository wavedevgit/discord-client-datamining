// modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun104439: for (var _fun104439_ip = 0;;) switch (_fun104439_ip) {
        case 0:
            var6 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var7;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var17 = 0;
            var4 = var7[var17];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot3 = var3;
            var13 = 1;
            var3 = var7[var13];
            var3 = var6.bind(var0)(var3);
            var16 = var3.CHAT_INPUT_HEIGHT;
            var14 = 2;
            var3 = var7[var14];
            var3 = var6.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot4 = var3;
            var11 = 3;
            var3 = var7[var11];
            var3 = var12.bind(var0)(var3);
            var3 = var3.spacing;
            var10 = var3.PX_48;
            var _closure1_slot5 = var10;
            var4 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useICYMIEnabled;
                var2 = 'useTabBarStyles';
                var4 = var3.bind(var4)(var2);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun104441: for (var _fun104441_ip = 0;;) switch (_fun104441_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = 2;
                            if (!var0) {
                                _fun104441_ip = 16;
                                continue _fun104441
                            }
                        case 13:
                            var2 = 3;
                        case 16:
                            var7 = 3;
                            if (!(var7 !== var2)) {
                                _fun104441_ip = 58;
                                continue _fun104441
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var1 = var0[var7];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var0 = var0.spacing;
                            var3 = var0.PX_32;
                            _fun104441_ip = 91;
                            continue _fun104441;
                        case 58:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var1 = var0[var7];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var1);
                            var0 = var0.spacing;
                            var3 = var0.PX_12;
                        case 91:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var4 = 5;
                            var4 = var1[var4];
                            var6 = undefined;
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.DRAWER_LEFT_WIDTH_MIN;
                            var5 = _closure1_slot1;
                            var1 = var1[var7];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.spacing;
                            var1 = var1.PX_8;
                            var1 = var4 - var1;
                            var1 = var1 - var3;
                            var0 = _closure1_slot5;
                            var0 = var0 * var2;
                            var0 = var1 - var0;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot6 = var4;
            var3 = 6;
            var3 = var7[var3];
            var8 = var6.bind(var0)(var3);
            var5 = var8.createStyles;
            var3 = {};
            var9 = {};
            var9.borderTopWidth = var13;
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BORDER_SUBTLE;
            var9.borderTopColor = var15;
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_SURFACE_HIGH;
            var9.backgroundColor = var15;
            var3.tabBar = var9;
            var9 = {};
            var9.borderTopWidth = var17;
            var3.tabBarYou = var9;
            var9 = {};
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_BASE_LOWER;
            var9.backgroundColor = var15;
            var3.tabBarTablet = var9;
            var9 = {};
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_8;
            var16 = var16 + var15;
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_4;
            var15 = var15 / var14;
            var18 = var16 - var15;
            var15 = var7[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_4;
            var16 = var15 / var14;
            var15 = 7;
            var19 = var7[var15];
            var20 = var6.bind(var0)(var19);
            var19 = var20.isAndroid;
            var19 = var19.bind(var20)();
            if (!var19) {
                _fun104439_ip = 409;
                continue _fun104439
            }
        case 381:
            var19 = var7[var11];
            var19 = var12.bind(var0)(var19);
            var19 = var19.spacing;
            var19 = var19.PX_4;
            var19 = var19 / var14;
            var17 = var19 / var14;
        case 409:
            var16 = var16 / var14;
            var16 = var18 - var16;
            var16 = var16 - var17;
            var9.height = var16;
            var3.tabBarTabletHeight = var9;
            var9 = {};
            var16 = var7[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.radii;
            var16 = var16.sm;
            var9.borderRadius = var16;
            var16 = var7[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BORDER_SUBTLE;
            var9.borderColor = var16;
            var9.borderWidth = var13;
            var3.tabBarNux = var9;
            var9 = {};
            var16 = var7[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOWEST;
            var9.backgroundColor = var16;
            var3.tabBarNuxBackground = var9;
            var9 = {};
            var15 = var7[var15];
            var16 = var6.bind(var0)(var15);
            var15 = var16.isIOS;
            var16 = var15.bind(var16)();
            var15 = undefined;
            if (!var16) {
                _fun104439_ip = 554;
                continue _fun104439
            }
        case 548:
            var15 = -1;
        case 554:
            var9.marginLeft = var15;
            var3.tabBarIcon = var9;
            var9 = {};
            var15 = 'none';
            var9.display = var15;
            var3.tabBarGuildsTablet = var9;
            var9 = {
                'position': 'absolute',
                'top': 0
            };
            var15 = var14 * var10;
            var14 = var7[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var14 = var15 + var14;
            var9.right = var14;
            var9.width = var10;
            var3.tabBarIcymTablet = var9;
            var9 = {
                'position': 'absolute',
                'top': 0
            };
            var14 = var13 * var10;
            var13 = var7[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_8;
            var13 = var14 + var13;
            var9.right = var13;
            var9.width = var10;
            var3.tabBarNotificationsTablet = var9;
            var9 = {
                'position': 'absolute',
                'top': 0
            };
            var11 = var7[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var9.right = var11;
            var9.width = var10;
            var3.tabBarSettingsTablet = var9;
            var9 = {
                'position': 'absolute',
                'left': 0,
                'top': 0
            };
            var3.tabBarYouTablet = var9;
            var3 = var5.bind(var8)(var3);
            var _closure1_slot7 = var3;
            var5 = 16;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarStyles.tsx';
            var5 = var6.bind(var7)(var5);
            var2.useTabletIconYouWidth = var4;
            var2.useTabBarStyles = var3;
            var1 = function() {
                _fun104442: for (var _fun104442_ip = 0;;) switch (_fun104442_ip) {
                    case 0:
                        var2 = _closure1_slot7;
                        var3 = undefined;
                        var15 = var2.bind(var3)();
                        var _closure2_slot0 = var15;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var5 = var6[var2];
                        var7 = var4.bind(var3)(var5);
                        var5 = var7.useGradientBottom;
                        var11 = var5.bind(var7)();
                        var _closure2_slot1 = var11;
                        var2 = var6[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.useGradientMidpoint;
                        var14 = var2.bind(var4)();
                        var _closure2_slot2 = var14;
                        var5 = _closure1_slot1;
                        var2 = 9;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var17 = var2.bind(var3)();
                        var2 = 10;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        var8 = var2.theme;
                        var _closure2_slot3 = var8;
                        var5 = var2.primaryColor;
                        var _closure2_slot4 = var5;
                        var2 = null;
                        if (!(var2 != var8)) {
                            _fun104442_ip = 141;
                            continue _fun104442
                        }
                    case 138:
                        var17 = var8;
                    case 141:
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 11;
                        var2 = var12[var6];
                        var10 = var13.bind(var3)(var2);
                        var9 = var10.useToken;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var7 = var12[var2];
                        var7 = var4.bind(var3)(var7);
                        var7 = var7.colors;
                        var7 = var7.INTERACTIVE_TEXT_DEFAULT;
                        var10 = var9.bind(var10)(var7);
                        var _closure2_slot5 = var10;
                        var7 = var12[var6];
                        var16 = var13.bind(var3)(var7);
                        var9 = var16.useToken;
                        var7 = var12[var2];
                        var7 = var4.bind(var3)(var7);
                        var7 = var7.colors;
                        var7 = var7.INTERACTIVE_TEXT_ACTIVE;
                        var9 = var9.bind(var16)(var7);
                        var _closure2_slot6 = var9;
                        var7 = var12[var6];
                        var18 = var13.bind(var3)(var7);
                        var16 = var18.useToken;
                        var7 = var12[var2];
                        var7 = var4.bind(var3)(var7);
                        var7 = var7.colors;
                        var7 = var7.INTERACTIVE_TEXT_DEFAULT;
                        var7 = var16.bind(var18)(var7, var17);
                        var _closure2_slot7 = var7;
                        var6 = var12[var6];
                        var16 = var13.bind(var3)(var6);
                        var6 = var16.useToken;
                        var2 = var12[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.colors;
                        var2 = var2.INTERACTIVE_TEXT_ACTIVE;
                        var6 = var6.bind(var16)(var2, var17);
                        var _closure2_slot8 = var6;
                        var2 = 12;
                        var2 = var12[var2];
                        var13 = var13.bind(var3)(var2);
                        var2 = var13.useLaunchWelcomeNuxVisible;
                        var2 = var2.bind(var13)();
                        var16 = var2.isNuxVisible;
                        var _closure2_slot9 = var16;
                        var2 = 13;
                        var2 = var12[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        var13 = var2.bottom;
                        var _closure2_slot10 = var13;
                        var2 = 14;
                        var2 = var12[var2];
                        var2 = var4.bind(var3)(var2);
                        var12 = var2.bind(var3)();
                        var _closure2_slot11 = var12;
                        var2 = _closure1_slot6;
                        var4 = var2.bind(var3)();
                        var _closure2_slot12 = var4;
                        var3 = _closure1_slot3;
                        var2 = var3.useMemo;
                        var1 = new Array(13);
                        var1[0] = var16;
                        var1[1] = var15;
                        var1[2] = var14;
                        var1[3] = var13;
                        var1[4] = var12;
                        var1[5] = var11;
                        var1[6] = var10;
                        var1[7] = var9;
                        var1[8] = var8;
                        var1[9] = var7;
                        var1[10] = var6;
                        var1[11] = var5;
                        var1[12] = var4;
                        var0 = function() { // Environment: var0
                            _fun104443: for (var _fun104443_ip = 0;;) switch (_fun104443_ip) {
                                case 0:
                                    var0 = _closure2_slot9;
                                    var2 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 63;
                                        continue _fun104443
                                    }
                                case 12:
                                    var0 = _closure2_slot0;
                                    var1 = var0.tabBarNux;
                                    var0 = new Array(2);
                                    var0[0] = var1;
                                    var3 = _closure2_slot2;
                                    var1 = null;
                                    if (!(var1 == var3)) {
                                        _fun104443_ip = 52;
                                        continue _fun104443
                                    }
                                case 40:
                                    var1 = _closure2_slot0;
                                    var1 = var1.tabBarNuxBackground;
                                    _fun104443_ip = 56;
                                    continue _fun104443;
                                case 52:
                                    var1 = _closure2_slot2;
                                case 56:
                                    var0[1] = var1;
                                    var2 = var0;
                                case 63:
                                    var0 = _closure2_slot0;
                                    var0 = var0.tabBarTabletHeight;
                                    var1 = new Array(2);
                                    var1[0] = var0;
                                    var0 = {};
                                    var3 = _closure2_slot10;
                                    var0.marginBottom = var3;
                                    var1[1] = var0;
                                    var0 = _closure2_slot11;
                                    var5 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 143;
                                        continue _fun104443
                                    }
                                case 104:
                                    var0 = _closure2_slot0;
                                    var3 = var0.tabBarYouTablet;
                                    var0 = new Array(3);
                                    var0[0] = var3;
                                    var3 = {};
                                    var4 = _closure2_slot12;
                                    var3.width = var4;
                                    var0[1] = var3;
                                    var0[2] = var1;
                                    var5 = var0;
                                case 143:
                                    var0 = _closure2_slot11;
                                    var9 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 177;
                                        continue _fun104443
                                    }
                                case 152:
                                    var0 = _closure2_slot0;
                                    var3 = var0.tabBarIcymTablet;
                                    var0 = new Array(2);
                                    var0[0] = var3;
                                    var0[1] = var1;
                                    var9 = var0;
                                case 177:
                                    var0 = _closure2_slot11;
                                    var7 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 211;
                                        continue _fun104443
                                    }
                                case 186:
                                    var0 = _closure2_slot0;
                                    var3 = var0.tabBarNotificationsTablet;
                                    var0 = new Array(2);
                                    var0[0] = var3;
                                    var0[1] = var1;
                                    var7 = var0;
                                case 211:
                                    var0 = _closure2_slot11;
                                    var4 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 245;
                                        continue _fun104443
                                    }
                                case 220:
                                    var0 = _closure2_slot0;
                                    var3 = var0.tabBarSettingsTablet;
                                    var0 = new Array(2);
                                    var0[0] = var3;
                                    var0[1] = var1;
                                    var4 = var0;
                                case 245:
                                    var0 = _closure2_slot11;
                                    var10 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 264;
                                        continue _fun104443
                                    }
                                case 254:
                                    var0 = _closure2_slot0;
                                    var10 = var0.tabBarGuildsTablet;
                                case 264:
                                    var0 = _closure2_slot0;
                                    var1 = var0.tabBarIcon;
                                    var12 = {};
                                    var13 = var0.tabBar;
                                    var14 = var12;
                                    var0 = copyDataProperties(var14, var13);
                                    var13 = _closure2_slot1;
                                    var14 = var12;
                                    var0 = copyDataProperties(var14, var13);
                                    var0 = _closure2_slot11;
                                    var8 = undefined;
                                    if (!var0) {
                                        _fun104443_ip = 380;
                                        continue _fun104443
                                    }
                                case 309:
                                    var0 = {};
                                    var11 = _closure2_slot1;
                                    var3 = null;
                                    if (!(var3 == var11)) {
                                        _fun104443_ip = 333;
                                        continue _fun104443
                                    }
                                case 321:
                                    var3 = _closure2_slot0;
                                    var3 = var3.tabBarTablet;
                                    _fun104443_ip = 335;
                                    continue _fun104443;
                                case 333:
                                    var3 = {};
                                case 335:
                                    var14 = var0;
                                    var13 = var3;
                                    var3 = copyDataProperties(var14, var13);
                                    var3 = _closure2_slot0;
                                    var3 = var3.tabBarTabletHeight;
                                    var11 = var3.height;
                                    var3 = _closure2_slot10;
                                    var11 = var11 + var3;
                                    var3 = 'height';
                                    var0[var3] = var11;
                                    var8 = var0;
                                case 380:
                                    var0 = {};
                                    var3 = {};
                                    var11 = new Array(2);
                                    var11[0] = var12;
                                    var11[1] = var8;
                                    var3.tabBarStyle = var11;
                                    var11 = _closure2_slot11;
                                    var11 = !var11;
                                    var3.tabBarShowLabel = var11;
                                    var11 = _closure2_slot5;
                                    var3.tabBarInactiveTintColor = var11;
                                    var11 = _closure2_slot6;
                                    var3.tabBarActiveTintColor = var11;
                                    var0.tabBarStyles = var3;
                                    var3 = {};
                                    var3.tabBarItemStyle = var10;
                                    var0.tabBarStylesGuilds = var3;
                                    var3 = {};
                                    var3.tabBarItemStyle = var9;
                                    var0.tabBarStylesIcym = var3;
                                    var3 = {};
                                    var3.tabBarItemStyle = var9;
                                    var0.tabBarStylesDiscovery = var3;
                                    var3 = {};
                                    var3.tabBarItemStyle = var7;
                                    var0.tabBarStylesNotifications = var3;
                                    var3 = {};
                                    var9 = _closure2_slot3;
                                    var7 = null;
                                    if (!(var7 != var9)) {
                                        _fun104443_ip = 508;
                                        continue _fun104443
                                    }
                                case 496:
                                    var7 = _closure2_slot0;
                                    var9 = var7.tabBarYou;
                                    _fun104443_ip = 518;
                                    continue _fun104443;
                                case 508:
                                    var7 = _closure2_slot0;
                                    var9 = var7.tabBar;
                                case 518:
                                    var7 = new Array(2);
                                    var7[0] = var9;
                                    var7[1] = var8;
                                    var3.tabBarStyle = var7;
                                    var7 = function() {
                                        var3 = _closure1_slot4;
                                        var1 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 15;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = {};
                                        var5 = _closure2_slot3;
                                        var0.theme = var5;
                                        var4 = _closure2_slot4;
                                        var0.backgroundColor = var4;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var3.tabBarBackground = var7;
                                    var7 = _closure2_slot7;
                                    var3.tabBarInactiveTintColor = var7;
                                    var6 = _closure2_slot8;
                                    var3.tabBarActiveTintColor = var6;
                                    var3.tabBarItemStyle = var5;
                                    var0.tabBarStylesYouTab = var3;
                                    var3 = {};
                                    var3.tabBarItemStyle = var4;
                                    var0.tabBarStylesSettings = var3;
                                    var0.tabBarItemStyle = var2;
                                    var0.tabBarIconStyle = var1;
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var2.useTabBarStylesComputed = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11591, 33, 671, 8860, 9848, 1297, 478, 8891, 3237, 13608, 3142, 13604, 1568, 7680, 13609, 2]);