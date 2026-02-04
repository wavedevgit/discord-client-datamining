// modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.DEFAULT_CONTENT_PADDING;
    var _closure1_slot6 = var12;
    var3 = var3.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
    var _closure1_slot7 = var3;
    var6 = 4;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = {};
    var3.bottom = var6;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': '100%',
        'backgroundColor': null,
        'flex': 1,
        'flexDirection': 'column',
        'paddingBottom': 12
    };
    var10 = 6;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'height': 24,
        'backgroundColor': null,
        'paddingHorizontal': null,
        'marginBottom': 12
    };
    var9 = 'center';
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var8.paddingHorizontal = var12;
    var3.header = var8;
    var8 = {};
    var8.paddingHorizontal = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var8.paddingBottom = var10;
    var3.list = var8;
    var8 = {};
    var10 = 7;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.BACK_BUTTON_SIZE;
    var8.width = var11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.BACK_BUTTON_SIZE;
    var8.height = var10;
    var8.alignItems = var9;
    var8.justifyContent = var9;
    var3.backButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108260: for (var _fun108260_ip = 0;;) switch (_fun108260_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.route;
                var2 = var0.params;
                var11 = var2.context;
                var _closure2_slot0 = var11;
                var25 = var2.analyticsLocation;
                var _closure2_slot1 = var25;
                var5 = var2.sectionItemType;
                var0 = var2.sectionName;
                var19 = var2.sectionOverallPosition;
                var _closure2_slot2 = var19;
                var16 = var2.applications;
                var _closure2_slot3 = var16;
                var22 = var2.commands;
                var _closure2_slot4 = var22;
                var12 = var2.sectionDescriptors;
                var _closure2_slot5 = var12;
                var6 = var2.title;
                var _closure2_slot6 = var6;
                var18 = var2.promotedApplicationIds;
                var _closure2_slot7 = var18;
                var1 = var1.navigation;
                var _closure2_slot8 = var1;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var2 = null;
                var2 = var2 != var0;
                var23 = 'frecency_view_all';
                if (!var2) {
                    _fun108260_ip = 181;
                    continue _fun108260
                }
            case 178:
                var23 = var0;
            case 181:
                _closure2_slot9 = var23;
                var2 = _closure1_slot11;
                var4 = var2.bind(var3)();
                _closure2_slot10 = var4;
                var7 = _closure1_slot1;
                var21 = _closure1_slot2;
                var2 = 8;
                var2 = var21[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var7 = var2.bottom;
                var2 = _closure1_slot6;
                var9 = var7 + var2;
                _closure2_slot11 = var9;
                var7 = _closure1_slot0;
                var2 = 9;
                var2 = var21[var2];
                var8 = var7.bind(var3)(var2);
                var2 = var8.useRequiredAppLauncherContext;
                var8 = var2.bind(var8)();
                var15 = var8.chatInputRef;
                _closure2_slot12 = var15;
                var2 = var8.keyboardCloseReasonRef;
                _closure2_slot13 = var2;
                var13 = var8.entrypoint;
                _closure2_slot14 = var13;
                var24 = _closure1_slot3;
                var14 = var24.useCallback;
                var10 = new Array(3);
                var10[0] = var15;
                var10[1] = var2;
                var10[2] = var1;
                var8 = function() { // Environment: var17
                    _fun108261: for (var _fun108261_ip = 0;;) switch (_fun108261_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = var2.canGoBack;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun108261_ip = 94;
                                continue _fun108261
                            }
                        case 20:
                            var2 = _closure2_slot13;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.AppLauncherKeyboardCloseReason;
                            var1 = var1.BACK;
                            var2.current = var1;
                            var1 = _closure2_slot12;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108261_ip = 108;
                                continue _fun108261
                            }
                        case 82:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                            _fun108261_ip = 108;
                            continue _fun108261;
                        case 94:
                            var1 = _closure2_slot8;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 108:
                            var0 = undefined;
                            return var0;
                    }
                };
                var20 = var14.bind(var24)(var8, var10);
                _closure2_slot15 = var20;
                var14 = var24.useCallback;
                var10 = new Array(4);
                var10[0] = var25;
                var10[1] = var11;
                var10[2] = var13;
                var10[3] = var1;
                var8 = function(arg0) { // Environment: var17
                    _fun108262: for (var _fun108262_ip = 0;;) switch (_fun108262_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.application;
                            var5 = var0.sectionName;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleApplicationSelected;
                            var1 = {};
                            var9 = _closure2_slot1;
                            var8 = null;
                            if (!(var8 == var9)) {
                                _fun108262_ip = 94;
                                continue _fun108262
                            }
                        case 60:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 11;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.ApplicationCommandTriggerLocations;
                            var7 = var7.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                            _fun108262_ip = 98;
                            continue _fun108262;
                        case 94:
                            var7 = _closure2_slot1;
                        case 98:
                            var1.location = var7;
                            var1.application = var6;
                            var6 = _closure2_slot8;
                            var1.navigation = var6;
                            var6 = _closure2_slot0;
                            var1.context = var6;
                            var1.sectionName = var5;
                            var4 = _closure2_slot14;
                            var1.entrypoint = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var8 = var14.bind(var24)(var8, var10);
                _closure2_slot16 = var8;
                var14 = var24.useCallback;
                var10 = new Array(5);
                var10[0] = var25;
                var10[1] = var11;
                var10[2] = var13;
                var10[3] = var1;
                var10[4] = var12;
                var1 = function(arg0, arg1, arg2) { // Environment: var17
                    _fun108263: for (var _fun108263_ip = 0;;) switch (_fun108263_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleApplicationCommandSelected;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var6 = null;
                            if (!(var6 == var7)) {
                                _fun108263_ip = 80;
                                continue _fun108263
                            }
                        case 46:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 11;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.ApplicationCommandTriggerLocations;
                            var5 = var5.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                            _fun108263_ip = 84;
                            continue _fun108263;
                        case 80:
                            var5 = _closure2_slot1;
                        case 84:
                            var1.location = var5;
                            var5 = _closure2_slot0;
                            var1.context = var5;
                            var5 = arg0;
                            var1.command = var5;
                            var5 = arg1;
                            var1.section = var5;
                            var5 = _closure2_slot5;
                            var1.sectionDescriptors = var5;
                            var5 = '';
                            var1.query = var5;
                            var5 = _closure2_slot8;
                            var1.navigation = var5;
                            var5 = arg2;
                            var1.sectionName = var5;
                            var4 = _closure2_slot14;
                            var1.entrypoint = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var14.bind(var24)(var1, var10);
                _closure2_slot17 = var1;
                var14 = var24.useMemo;
                var10 = new Array(4);
                var10[0] = var20;
                var20 = var4.backButton;
                var10[1] = var20;
                var20 = var4.header;
                var10[2] = var20;
                var10[3] = var6;
                var6 = function() { // Environment: var17
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var0 = _closure2_slot10;
                    var0 = var0.header;
                    var1.style = var0;
                    var7 = _closure1_slot8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 12;
                    var4 = var10[var0];
                    var0 = undefined;
                    var4 = var9.bind(var0)(var4);
                    var5 = var4.PressableOpacity;
                    var4 = {};
                    var8 = _closure2_slot10;
                    var8 = var8.backButton;
                    var4.style = var8;
                    var8 = 13;
                    var12 = var10[var8];
                    var12 = var9.bind(var0)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8["13/7kX"];
                    var8 = var12.bind(var13)(var8);
                    var4.accessibilityLabel = var8;
                    var8 = 'button';
                    var4.accessibilityRole = var8;
                    var8 = _closure2_slot15;
                    var4.onPress = var8;
                    var8 = 14;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var12 = var8.ArrowLargeLeftIcon;
                    var8 = {};
                    var6 = _closure1_slot1;
                    var13 = 6;
                    var13 = var10[var13];
                    var13 = var6.bind(var0)(var13);
                    var13 = var13.colors;
                    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
                    var8.color = var13;
                    var8 = var7.bind(var0)(var12, var8);
                    var4.children = var8;
                    var5 = var7.bind(var0)(var5, var4);
                    var4 = new Array(3);
                    var4[0] = var5;
                    var5 = 15;
                    var5 = var10[var5];
                    var5 = var9.bind(var0)(var5);
                    var8 = var5.Text;
                    var5 = {
                        'lineClamp': 1,
                        'variant': 'heading-lg/bold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var11 = _closure2_slot6;
                    var5.children = var11;
                    var5 = var7.bind(var0)(var8, var5);
                    var4[1] = var5;
                    var5 = 16;
                    var5 = var10[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = {};
                    var8 = 7;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.BACK_BUTTON_SIZE;
                    var5.size = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[2] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6 = var14.bind(var24)(var6, var10);
                var14 = var24.useCallback;
                var10 = new Array(4);
                var10[0] = var16;
                var10[1] = var18;
                var10[2] = var8;
                var10[3] = var23;
                var8 = function(arg0) { // Environment: var17
                    _fun108265: for (var _fun108265_ip = 0;;) switch (_fun108265_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var _closure3_slot0 = var0;
                            var9 = var1.index;
                            var1 = _closure2_slot3;
                            var7 = null;
                            var5 = var7 != var1;
                            if (!var5) {
                                _fun108265_ip = 55;
                                continue _fun108265
                            }
                        case 35:
                            var1 = _closure2_slot3;
                            var2 = var1.length;
                            var1 = 1;
                            var1 = var2 - var1;
                            var5 = var9 === var1;
                        case 55:
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.application = var0;
                            var8 = function() {
                                var2 = _closure2_slot16;
                                var1 = {};
                                var3 = _closure3_slot0;
                                var1.application = var3;
                                var0 = _closure2_slot9;
                                var1.sectionName = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var8;
                            var8 = 0;
                            var8 = var8 === var9;
                            var1.isFirstRow = var8;
                            var1.isLastRow = var5;
                            var5 = _closure2_slot7;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun108265_ip = 149;
                                continue _fun108265
                            }
                        case 130:
                            var8 = _closure2_slot7;
                            var7 = var8.has;
                            var6 = var0.id;
                            var5 = var7.bind(var8)(var6);
                        case 149:
                            var1.showsPromoted = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var14 = var14.bind(var24)(var8, var10);
                var10 = var24.useCallback;
                var8 = new Array(2);
                var8[0] = var15;
                var8[1] = var2;
                var2 = function() { // Environment: var17
                    _fun108267: for (var _fun108267_ip = 0;;) switch (_fun108267_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108267_ip = 28;
                                continue _fun108267
                            }
                        case 18:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                        case 28:
                            var2 = _closure2_slot13;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.AppLauncherKeyboardCloseReason;
                            var1 = var1.COMMAND;
                            var2.current = var1;
                            return var0;
                    }
                };
                var10 = var10.bind(var24)(var2, var8);
                _closure2_slot18 = var10;
                var8 = var24.useCallback;
                var2 = new Array(6);
                var2[0] = var12;
                var2[1] = var11;
                var11 = var22.length;
                var2[2] = var11;
                var2[3] = var10;
                var2[4] = var23;
                var2[5] = var1;
                var1 = function(arg0) { // Environment: var17
                    _fun108268: for (var _fun108268_ip = 0;;) switch (_fun108268_ip) {
                        case 0:
                            var0 = arg0;
                            var13 = var0.item;
                            var _closure3_slot0 = var13;
                            var11 = var0.index;
                            var4 = undefined;
                            var _closure3_slot1 = var4;
                            var1 = _closure2_slot5;
                            var0 = null;
                            var1 = var0 == var1;
                            var7 = undefined;
                            if (var1) {
                                _fun108268_ip = 64;
                                continue _fun108268
                            }
                        case 43:
                            var3 = _closure2_slot5;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var12
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.applicationId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var7 = var2.bind(var3)(var1);
                        case 64:
                            _closure3_slot1 = var7;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var5 = var3.bind(var4)(var2);
                            var3 = var5.getAppLauncherIconSource;
                            var8 = var0 == var7;
                            var2 = undefined;
                            if (var8) {
                                _fun108268_ip = 111;
                                continue _fun108268
                            }
                        case 106:
                            var2 = var7.application;
                        case 111:
                            var9 = var3.bind(var5)(var2);
                            var2 = _closure2_slot4;
                            var3 = var2.length;
                            var2 = 1;
                            var10 = var3 - var2;
                            if (!(var0 != var7)) {
                                _fun108268_ip = 330;
                                continue _fun108268
                            }
                        case 139:
                            var5 = var0 != var9;
                            if (!var5) {
                                _fun108268_ip = 191;
                                continue _fun108268
                            }
                        case 146:
                            var8 = _closure1_slot8;
                            var3 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var2 = 18;
                            var2 = var14[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var2.iconSource = var9;
                            var9 = 36;
                            var2.iconSize = var9;
                            var5 = var8.bind(var4)(var3, var2);
                        case 191:
                            var3 = _closure1_slot8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 19;
                            var1 = var9[var1];
                            var1 = var8.bind(var4)(var1);
                            var2 = var1.CommandRow;
                            var1 = {};
                            var1.command = var13;
                            var12 = function() {
                                var4 = _closure2_slot17;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var1 = _closure2_slot9;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                            };
                            var1.onPressCommand = var12;
                            var12 = _closure2_slot18;
                            var1.onExecuteCommand = var12;
                            var12 = 0;
                            var12 = var12 === var11;
                            var1.isFirstRow = var12;
                            var10 = var11 === var10;
                            var1.isLastRow = var10;
                            var10 = _closure2_slot0;
                            var1.context = var10;
                            var1.section = var7;
                            var7 = 11;
                            var7 = var9[var7];
                            var7 = var8.bind(var4)(var7);
                            var7 = var7.ApplicationCommandTriggerLocations;
                            var7 = var7.APP_LAUNCHER_FRECENTS_VIEW_ALL;
                            var1.location = var7;
                            var6 = _closure2_slot9;
                            var1.sectionName = var6;
                            var1.icon = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 330:
                            return var0;
                    }
                };
                var20 = var8.bind(var24)(var1, var2);
                var1 = 20;
                var1 = var21[var1];
                var2 = var7.bind(var3)(var1);
                var1 = var2.useBottomSheetFlashListBottomViewabilityInset;
                var1 = var1.bind(var2)();
                var11 = var1.flashListRef;
                var10 = var1.bottomVisibilityInsetRef;
                var1 = 21;
                var1 = var21[var1];
                var2 = var7.bind(var3)(var1);
                var1 = var2.useTrackAppLauncherItemImpressionOnFirstView;
                var1 = var1.bind(var2)();
                var2 = var1.trackAppLauncherItemImpressionOnFirstView;
                _closure2_slot19 = var2;
                var1 = 22;
                var8 = var21[var1];
                var12 = var7.bind(var3)(var8);
                var8 = var12.useAppLauncherFlashListProps;
                var8 = var8.bind(var12)();
                var15 = var24.useMemo;
                var12 = new Array(2);
                var12[0] = var9;
                var9 = var4.list;
                var12[1] = var9;
                var9 = function() { // Environment: var17
                    var0 = {};
                    var2 = _closure2_slot10;
                    var3 = var2.list;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot11;
                    var1 = 'paddingBottom';
                    var0[var1] = var2;
                    return var0;
                };
                var18 = var15.bind(var24)(var9, var12);
                var15 = var24.useMemo;
                var12 = new Array(3);
                var12[0] = var23;
                var12[1] = var19;
                var12[2] = var2;
                var9 = function() { // Environment: var17
                    var1 = {};
                    var0 = _closure1_slot7;
                    var1.viewabilityConfig = var0;
                    var0 = function arg0() {
                        var0 = arg0;
                        var2 = var0.viewableItems;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.item;
                            var4 = var1.index;
                            var2 = _closure2_slot19;
                            var1 = {};
                            var7 = var0.id;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'applicationId:';
                            var5 = var6.bind(var5)(var7);
                            var1.itemKey = var5;
                            var5 = _closure2_slot9;
                            var1.sectionName = var5;
                            var1.sectionPosition = var4;
                            var3 = _closure2_slot2;
                            var1.sectionOverallPosition = var3;
                            var0 = var0.id;
                            var1.applicationId = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onViewableItemsChanged = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var9 = var15.bind(var24)(var9, var12);
                var15 = var24.useMemo;
                var12 = new Array(3);
                var12[0] = var23;
                var12[1] = var19;
                var12[2] = var2;
                var2 = function() { // Environment: var17
                    var1 = {};
                    var0 = _closure1_slot7;
                    var1.viewabilityConfig = var0;
                    var0 = function arg0() {
                        var0 = arg0;
                        var2 = var0.viewableItems;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.item;
                            var4 = var1.index;
                            var2 = _closure2_slot19;
                            var1 = {};
                            var7 = var0.id;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'commandId:';
                            var5 = var6.bind(var5)(var7);
                            var1.itemKey = var5;
                            var5 = _closure2_slot9;
                            var1.sectionName = var5;
                            var1.sectionPosition = var4;
                            var3 = _closure2_slot2;
                            var1.sectionOverallPosition = var3;
                            var3 = var0.applicationId;
                            var1.applicationId = var3;
                            var0 = var0.id;
                            var1.commandId = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onViewableItemsChanged = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var15 = var15.bind(var24)(var2, var12);
                var19 = var24.useMemo;
                var2 = var16.length;
                var12 = new Array(1);
                var12[0] = var2;
                var2 = function() { // Environment: var17
                    var0 = {};
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var1 = var2 * var1;
                    var0.height = var1;
                    var1 = 500;
                    var0.width = var1;
                    return var0;
                };
                var12 = var19.bind(var24)(var2, var12);
                var23 = var24.useMemo;
                var2 = var22.length;
                var19 = new Array(1);
                var19[0] = var2;
                var2 = function() { // Environment: var17
                    var0 = {};
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var1 = var2 * var1;
                    var0.height = var1;
                    var1 = 500;
                    var0.width = var1;
                    return var0;
                };
                var19 = var23.bind(var24)(var2, var19);
                var2 = 23;
                var2 = var21[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.SectionItemType;
                var2 = var2.APPS;
                if (!(var5 !== var2)) {
                    _fun108260_ip = 1077;
                    continue _fun108260
                }
            case 884:
                var7 = _closure1_slot8;
                var5 = _closure1_slot1;
                var21 = _closure1_slot2;
                var2 = var21[var1];
                var5 = var5.bind(var3)(var2);
                var2 = {
                    'preserveScrollMomentum': true,
                    'estimatedFirstItemOffset': 10
                };
                var2.contentContainerStyle = var18;
                var23 = _closure1_slot10;
                var2.scrollIndicatorInsets = var23;
                var23 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2.keyExtractor = var23;
                var2.data = var22;
                var2.renderItem = var20;
                var20 = 'radiogroup';
                var2.accessibilityRole = var20;
                var20 = _closure1_slot5;
                var2.estimatedItemSize = var20;
                var2.estimatedListSize = var19;
                var20 = _closure1_slot0;
                var19 = 24;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.AppLauncherEntrypoint;
                var20 = var19.VOICE;
                var19 = var11;
                if (!(var13 === var20)) {
                    _fun108260_ip = 1019;
                    continue _fun108260
                }
            case 1013:
                var19 = var8.scrollerRef;
            case 1019:
                var2.ref = var19;
                var2.bottomViewabilityInsetRef = var10;
                var2.viewabilityConfigCallbackPairs = var15;
                var15 = var8.onScroll;
                var2.animatedOnScroll = var15;
                var15 = var8.gestureRef;
                var2.simultaneousHandlers = var15;
                var15 = var8.animatedProps;
                var2.animatedProps = var15;
                var5 = var7.bind(var3)(var5, var2);
                _fun108260_ip = 1262;
                continue _fun108260;
            case 1077:
                var7 = _closure1_slot8;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = var15[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {
                    'preserveScrollMomentum': true,
                    'estimatedFirstItemOffset': 10
                };
                var1.contentContainerStyle = var18;
                var18 = _closure1_slot10;
                var1.scrollIndicatorInsets = var18;
                var17 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var1.keyExtractor = var17;
                var1.data = var16;
                var1.renderItem = var14;
                var14 = 'radiogroup';
                var1.accessibilityRole = var14;
                var14 = _closure1_slot5;
                var1.estimatedItemSize = var14;
                var1.estimatedListSize = var12;
                var14 = _closure1_slot0;
                var12 = 24;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.AppLauncherEntrypoint;
                var12 = var12.VOICE;
                if (!(var13 === var12)) {
                    _fun108260_ip = 1209;
                    continue _fun108260
                }
            case 1203:
                var11 = var8.scrollerRef;
            case 1209:
                var1.ref = var11;
                var1.bottomViewabilityInsetRef = var10;
                var1.viewabilityConfigCallbackPairs = var9;
                var9 = var8.onScroll;
                var1.animatedOnScroll = var9;
                var9 = var8.gestureRef;
                var1.simultaneousHandlers = var9;
                var8 = var8.animatedProps;
                var1.animatedProps = var8;
                var5 = var7.bind(var3)(var2, var1);
            case 1262:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4870, 1468, 33, 1297, 671, 13934, 1568, 7736, 13859, 4547, 4902, 1234, 4706, 3941, 9282, 13897, 10564, 13932, 13902, 13904, 13746, 13860, 7737, 2]);