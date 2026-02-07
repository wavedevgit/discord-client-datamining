// modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var0 = function arg0() {
        _fun108458: for (var _fun108458_ip = 0;;) switch (_fun108458_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isFirstRow;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun108458_ip = 17;
                    continue _fun108458
                }
            case 15:
                var5 = false;
            case 17:
                var4 = var0.isLastRow;
                if (!(var4 === var3)) {
                    _fun108458_ip = 29;
                    continue _fun108458
                }
            case 27:
                var4 = false;
            case 29:
                var0 = _closure1_slot16;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 11;
                var2 = var7[var0];
                var11 = var1.bind(var3)(var2);
                var10 = var11.usePlaceholderWidth;
                var8 = 10;
                var2 = 50;
                var18 = var10.bind(var11)(var8, var2);
                var0 = var7[var0];
                var10 = var1.bind(var3)(var0);
                var8 = var10.usePlaceholderWidth;
                var2 = 30;
                var0 = 90;
                var14 = var8.bind(var10)(var2, var0);
                var2 = _closure1_slot13;
                var0 = 12;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var10 = _closure1_slot13;
                var8 = _closure1_slot6;
                var7 = {};
                var11 = var9.loadingTextPlaceholder;
                var15 = new Array(2);
                var15[0] = var11;
                var16 = {};
                var11 = global;
                var12 = var11.HermesInternal;
                var17 = var12.concat;
                var13 = '';
                var12 = '%';
                var17 = var17.bind(var13)(var18, var12);
                var16.width = var17;
                var15[1] = var16;
                var7.style = var15;
                var7 = var10.bind(var3)(var8, var7);
                var0.label = var7;
                var8 = _closure1_slot13;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var9.loadingTextPlaceholderSmall;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = var11.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var13)(var14, var12);
                var10.width = var11;
                var9[1] = var10;
                var6.style = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.subLabel = var6;
                var6 = 1;
                var0.subLabelLineClamp = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var1 = function arg0() {
        _fun108459: for (var _fun108459_ip = 0;;) switch (_fun108459_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.command;
                var _closure2_slot0 = var12;
                var1 = var0.onPressCommand;
                var _closure2_slot1 = var1;
                var14 = var0.isFirstRow;
                var6 = var0.isLastRow;
                var11 = var0.context;
                var _closure2_slot2 = var11;
                var8 = var0.onExecuteCommand;
                var1 = var0.section;
                var _closure2_slot3 = var1;
                var1 = var0.location;
                var _closure2_slot4 = var1;
                var10 = var0.installOnDemand;
                var7 = var0.sectionName;
                var _closure2_slot5 = var7;
                var5 = var0.icon;
                var1 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 13;
                var0 = var13[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.useAppLauncherContext;
                var0 = var0.bind(var2)();
                var0 = var0.entrypoint;
                var _closure2_slot6 = var0;
                var0 = _closure1_slot8;
                var2 = true;
                var0 = var0.bind(var3)(var2, var2);
                var0 = _closure1_slot7;
                var0 = var0.bind(var3)(var11, var2, var2);
                var2 = _closure1_slot13;
                var0 = 12;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.start = var14;
                var0.end = var6;
                var6 = var12.displayName;
                var0.label = var6;
                var6 = 1;
                var0.labelLineClamp = var6;
                var14 = var12.displayDescription;
                var0.subLabel = var14;
                var0.subLabelLineClamp = var6;
                var0.icon = var5;
                var5 = function() {
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var0.onPress = var5;
                var6 = _closure1_slot13;
                var5 = _closure1_slot1;
                var4 = 14;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.command = var12;
                var4.context = var11;
                var11 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 15;
                    var0 = var7[var4];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var0);
                    var1 = var2.trackCommandSelected;
                    var0 = {};
                    var8 = _closure2_slot0;
                    var0.command = var8;
                    var8 = _closure2_slot4;
                    var0.location = var8;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.getCommandTriggerSection;
                    var4 = _closure2_slot3;
                    var4 = var5.bind(var6)(var4);
                    var0.triggerSection = var4;
                    var3 = _closure2_slot5;
                    var0.sectionName = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.beforeExecuteCommand = var11;
                var4.onExecuteCommand = var8;
                var8 = undefined;
                if (!var10) {
                    _fun108459_ip = 303;
                    continue _fun108459
                }
            case 292:
                var9 = function() { // Environment: var9
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun108464: for (var _fun108464_ip = 0;;) switch (_fun108464_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108464_ip = 176;
                                        continue _fun108464
                                    }
                                case 10:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 16;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var3.bind(var2)(var1);
                                    var3 = var4.installApplicationOnDemandIfNeeded;
                                    var1 = {};
                                    var5 = _closure2_slot0;
                                    var5 = var5.applicationId;
                                    var1.applicationId = var5;
                                    var5 = _closure2_slot2;
                                    var8 = var5.type;
                                    var7 = 'channel';
                                    var5 = undefined;
                                    if (!(var7 === var8)) {
                                        _fun108464_ip = 87;
                                        continue _fun108464
                                    }
                                case 78:
                                    var7 = _closure2_slot2;
                                    var5 = var7.channel;
                                case 87:
                                    var1.channel = var5;
                                    var5 = _closure2_slot0;
                                    var5 = var5.integration_types;
                                    var1.commandIntegrationTypes = var5;
                                    var5 = {};
                                    var7 = _closure2_slot6;
                                    var5.entrypoint = var7;
                                    var7 = _closure2_slot4;
                                    var5.location = var7;
                                    var6 = _closure2_slot5;
                                    var5.sectionName = var6;
                                    var1.appLauncherContext = var5;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 148);
                                case 146:
                                    return var1;
                                case 148:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun108464_ip = 173;
                                        continue _fun108464
                                    }
                                case 154:
                                    var3 = var1.isAuthorized;
                                    if (!var3) {
                                        _fun108464_ip = 170;
                                        continue _fun108464
                                    }
                                case 163:
                                    var3 = arg0;
                                    var3 = var3.bind(var2)();
                                case 170:
                                    return var2;
                                case 173:
                                    return var1;
                                case 176:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var8 = var9.bind(var3)();
            case 303:
                var4.tryExecuteCommand = var8;
                var4.sectionName = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var11 = 0;
    var7 = var6[var11];
    var0 = undefined;
    var7 = var17.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var10 = 1;
    var7 = var6[var10];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.useContextIndexState;
    var _closure1_slot7 = var8;
    var7 = var7.useUserIndexState;
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var14 = var7.DEFAULT_CONTENT_PADDING;
    var _closure1_slot9 = var14;
    var15 = var7.SCREEN_BACKGROUND_COLOR;
    var7 = var7.useAppLauncherNavigation;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot11 = var7;
    var8 = 6;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var7 = var7.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var9 = var7.jsx;
    var _closure1_slot13 = var9;
    var9 = var7.jsxs;
    var _closure1_slot14 = var9;
    var7 = var7.Fragment;
    var _closure1_slot15 = var7;
    var7 = 8;
    var7 = var6[var7];
    var12 = var5.bind(var0)(var7);
    var9 = var12.createStyles;
    var7 = {};
    var13 = {};
    var13.backgroundColor = var15;
    var13.flex = var10;
    var7.container = var13;
    var13 = {};
    var15 = 9;
    var16 = var6[var15];
    var16 = var5.bind(var0)(var16);
    var16 = var16.EXPANDED_HEADER_HEIGHT;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.SHEET_HANDLE_CONTAINER_HEIGHT;
    var15 = var16 - var15;
    var13.height = var15;
    var7.headerSpacer = var13;
    var13 = {};
    var13.paddingHorizontal = var14;
    var7.list = var13;
    var14 = 'center';
    var13 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var7.commandsHeaderContainer = var13;
    var13 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'gap': 8
    };
    var7.commandsHeaderTextContainer = var13;
    var13 = {};
    var16 = 10;
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var13.borderRadius = var15;
    var7.viewContainerStyle = var13;
    var13 = {
        'backgroundColor': null,
        'paddingHorizontal': 12,
        'paddingVertical': 16
    };
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.CARD_BACKGROUND_DEFAULT;
    var13.backgroundColor = var15;
    var18 = 16;
    var7.mainContainerStyle = var13;
    var13 = {
        'right': 16,
        'bottom': 16
    };
    var7.expandDescriptionCTAStyle = var13;
    var13 = {};
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var13.marginLeft = var15;
    var7.monetizationDisclosureTextStyle = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var13.marginBottom = var15;
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var13.gap = var15;
    var7.monetizationDisclosureContainerStyle = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.monetizationDisclosureStyle = var13;
    var13 = {
        'backgroundColor': null,
        'height': 16,
        'marginBottom': 4,
        'borderRadius': null,
        'alignSelf': 'flex-start'
    };
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var13.backgroundColor = var15;
    var15 = var6[var16];
    var15 = var17.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var13.borderRadius = var15;
    var15 = 'flex-start';
    var7.loadingTextPlaceholder = var13;
    var13 = {};
    var19 = var6[var16];
    var19 = var17.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_MOD_SUBTLE;
    var13.backgroundColor = var19;
    var13.height = var18;
    var16 = var6[var16];
    var16 = var17.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var13.borderRadius = var16;
    var13.alignSelf = var15;
    var7.loadingTextPlaceholderSmall = var13;
    var13 = {};
    var13.alignItems = var14;
    var7.noCommandsTextContainer = var13;
    var7 = var9.bind(var12)(var7);
    var _closure1_slot16 = var7;
    var9 = {};
    var9.PLACEHOLDER = var11;
    var7 = 'PLACEHOLDER';
    var9[var11] = var7;
    var9.COMMAND = var10;
    var7 = 'COMMAND';
    var9[var10] = var7;
    var _closure1_slot17 = var9;
    var4 = var4.Array;
    var7 = var4.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var4
        }
    });
    var23 = var7;
    var22 = var8;
    var4 = new var23[var4](var22, var21);
    var8 = var4 instanceof Object ? var4 : var7;
    var7 = var8.fill;
    var4 = {};
    var9 = var9.PLACEHOLDER;
    var4.type = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun108466: for (var _fun108466_ip = 0;;) switch (_fun108466_ip) {
            case 0:
                var1 = arg0;
                var25 = var1.context;
                var _closure2_slot0 = var25;
                var12 = var1.application;
                var _closure2_slot1 = var12;
                var10 = var1.lockableScrollableContentOffsetY;
                var11 = var1.onPressBack;
                var36 = var1.installOnDemand;
                var _closure2_slot2 = var36;
                var35 = var1.sectionName;
                var _closure2_slot3 = var35;
                var45 = var1.onActivityItemSelected;
                var43 = var1.entrypoint;
                var _closure2_slot4 = var43;
                var0 = var1.onCommandExecuted;
                var _closure2_slot5 = var0;
                var1 = var1.onAauth2Cancel;
                var _closure2_slot6 = var1;
                var3 = undefined;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var1 = _closure1_slot16;
                var32 = var1.bind(var3)();
                var _closure2_slot7 = var32;
                var7 = _closure1_slot1;
                var18 = _closure1_slot3;
                var1 = 18;
                var1 = var18[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.bottom;
                var15 = _closure1_slot0;
                var2 = 13;
                var2 = var18[var2];
                var4 = var15.bind(var3)(var2);
                var2 = var4.useRequiredAppLauncherContext;
                var2 = var2.bind(var4)();
                var16 = var2.chatInputRef;
                var _closure2_slot8 = var16;
                var13 = var2.keyboardCloseReasonRef;
                var _closure2_slot9 = var13;
                var2 = 17;
                var2 = var18[var2];
                var4 = var15.bind(var3)(var2);
                var2 = var4.useFontScale;
                var2 = var2.bind(var4)();
                var4 = global;
                var6 = var4.Math;
                var4 = var6.max;
                var41 = 36;
                var2 = var41 * var2;
                var2 = var2 - var41;
                var44 = 0;
                var4 = var4.bind(var6)(var2, var44);
                var2 = 60;
                var17 = var2 + var4;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var18[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useDiscovery;
                var2 = {};
                var2.context = var25;
                var9 = {};
                var14 = 20;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.ApplicationCommandType;
                var15 = var14.CHAT;
                var14 = new Array(1);
                var14[0] = var15;
                var9.commandTypes = var14;
                var2.filters = var9;
                var9 = {
                    'placeholderCount': 0,
                    'limit': null,
                    'includeFrecency': true
                };
                var14 = _closure1_slot12;
                var9.limit = var14;
                var15 = true;
                var9.allowApplicationState = var36;
                var9.installOnDemand = var36;
                var14 = var12.id;
                var9.applicationId = var14;
                var2.options = var9;
                var2.allowFetch = var15;
                var4 = var4.bind(var6)(var2);
                var2 = var4.filterSection;
                var _closure2_slot10 = var2;
                var9 = var4.commandsByActiveSection;
                var6 = var4.sectionDescriptors;
                var _closure2_slot11 = var6;
                var14 = var4.loading;
                var _closure2_slot12 = var14;
                var4 = 21;
                var4 = var18[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var18 = var12.id;
                var4.sectionId = var18;
                var4.commandsByActiveSection = var9;
                var4 = var7.bind(var3)(var4);
                var33 = var4.sortOrder;
                var7 = var4.setSortOrder;
                var _closure2_slot13 = var7;
                var40 = var4.commands;
                var _closure2_slot14 = var40;
                var29 = var4.canSort;
                var4 = _closure1_slot8;
                var4 = var4.bind(var3)(var15, var15);
                var7 = var4.result;
                var27 = null;
                var9 = var27 == var7;
                var4 = undefined;
                if (var9) {
                    _fun108466_ip = 547;
                    continue _fun108466
                }
            case 532:
                var9 = var7.sections;
                var7 = var12.id;
                var4 = var9[var7];
            case 547:
                var4 = var27 == var4;
                var26 = !var14;
                if (!var26) {
                    _fun108466_ip = 566;
                    continue _fun108466
                }
            case 557:
                var7 = var40.length;
                var26 = var44 === var7;
            case 566:
                var9 = var26;
                if (!var9) {
                    _fun108466_ip = 575;
                    continue _fun108466
                }
            case 572:
                var9 = var4;
            case 575:
                if (!var9) {
                    _fun108466_ip = 612;
                    continue _fun108466
                }
            case 578:
                var7 = _closure1_slot0;
                var18 = _closure1_slot3;
                var4 = 22;
                var4 = var18[var4];
                var7 = var7.bind(var3)(var4);
                var4 = var7.isEmbeddedApp;
                var4 = var4.bind(var7)(var12);
                var9 = !var4;
            case 612:
                var4 = _closure1_slot5;
                var19 = var4.useMemo;
                var18 = new Array(3);
                var18[0] = var14;
                var18[1] = var40;
                var7 = var25.type;
                var18[2] = var7;
                var7 = function() { // Environment: var8
                    _fun108467: for (var _fun108467_ip = 0;;) switch (_fun108467_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.type;
                            var1 = 'channel';
                            if (!(var1 === var2)) {
                                _fun108467_ip = 61;
                                continue _fun108467
                            }
                        case 20:
                            var1 = _closure2_slot12;
                            if (var1) {
                                _fun108467_ip = 52;
                                continue _fun108467
                            }
                        case 27:
                            var2 = _closure2_slot14;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = _closure1_slot17;
                                var1 = var1.COMMAND;
                                var0.type = var1;
                                var1 = arg0;
                                var0.command = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun108467_ip = 59;
                            continue _fun108467;
                        case 52:
                            var0 = _closure1_slot18;
                        case 59:
                            _fun108467_ip = 65;
                            continue _fun108467;
                        case 61:
                            var0 = new Array(0);
                        case 65:
                            return var0;
                    }
                };
                var18 = var19.bind(var4)(var7, var18);
                var19 = var4.useEffect;
                var20 = var12.id;
                var7 = new Array(2);
                var7[0] = var20;
                var7[1] = var2;
                var2 = function() { // Environment: var8
                    var2 = _closure2_slot10;
                    var0 = _closure2_slot1;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var19.bind(var4)(var2, var7);
                var2 = _closure1_slot10;
                var2 = var2.bind(var3)();
                _closure2_slot15 = var2;
                var19 = var4.useCallback;
                var7 = new Array(7);
                var7[0] = var25;
                var7[1] = var43;
                var7[2] = var36;
                var7[3] = var2;
                var7[4] = var0;
                var7[5] = var6;
                var7[6] = var35;
                var2 = function(arg0, arg1) { // Environment: var8
                    _fun108470: for (var _fun108470_ip = 0;;) switch (_fun108470_ip) {
                        case 0:
                            var4 = arguments[2];
                            var0 = undefined;
                            if (!(var4 === var0)) {
                                _fun108470_ip = 44;
                                continue _fun108470
                            }
                        case 9:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 23;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.ApplicationCommandTriggerLocations;
                            var4 = var1.APP_LAUNCHER_APPLICATION_VIEW;
                        case 44:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleApplicationCommandSelected;
                            var1 = {};
                            var1.location = var4;
                            var5 = _closure2_slot0;
                            var1.context = var5;
                            var5 = arg0;
                            var1.command = var5;
                            var5 = arg1;
                            var1.section = var5;
                            var5 = _closure2_slot11;
                            var1.sectionDescriptors = var5;
                            var5 = '';
                            var1.query = var5;
                            var5 = _closure2_slot15;
                            var1.navigation = var5;
                            var5 = _closure2_slot2;
                            var1.installOnDemand = var5;
                            var5 = _closure2_slot3;
                            var1.sectionName = var5;
                            var5 = _closure2_slot4;
                            var1.entrypoint = var5;
                            var4 = _closure2_slot5;
                            var1.onCommandExecuted = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var39 = var19.bind(var4)(var2, var7);
                _closure2_slot16 = var39;
                var7 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var13;
                var2[2] = var0;
                var0 = function() { // Environment: var8
                    _fun108471: for (var _fun108471_ip = 0;;) switch (_fun108471_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var2 = var0.current;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun108471_ip = 28;
                                continue _fun108471
                            }
                        case 18:
                            var0 = var2.closeCustomKeyboard;
                            var0 = var0.bind(var2)();
                        case 28:
                            var4 = _closure2_slot9;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.AppLauncherKeyboardCloseReason;
                            var2 = var2.COMMAND;
                            var4.current = var2;
                            var2 = _closure2_slot5;
                            if (!(var3 != var2)) {
                                _fun108471_ip = 91;
                                continue _fun108471
                            }
                        case 83:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 91:
                            return var0;
                    }
                };
                var37 = var7.bind(var4)(var0, var2);
                _closure2_slot17 = var37;
                var2 = var6.find;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var38 = var2.bind(var6)(var0);
                _closure2_slot18 = var38;
                var6 = var4.useCallback;
                var2 = new Array(7);
                var2[0] = var39;
                var0 = var40.length;
                var2[1] = var0;
                var2[2] = var25;
                var2[3] = var37;
                var2[4] = var38;
                var2[5] = var36;
                var2[6] = var35;
                var0 = function(arg0) { // Environment: var8
                    _fun108473: for (var _fun108473_ip = 0;;) switch (_fun108473_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.item;
                            var5 = var0.index;
                            var3 = var2.type;
                            var0 = _closure1_slot17;
                            var0 = var0.PLACEHOLDER;
                            if (!(var3 !== var0)) {
                                _fun108473_ip = 220;
                                continue _fun108473
                            }
                        case 38:
                            var4 = var2.type;
                            var0 = _closure1_slot17;
                            var3 = var0.COMMAND;
                            var0 = null;
                            if (!(var4 === var3)) {
                                _fun108473_ip = 218;
                                continue _fun108473
                            }
                        case 62:
                            var6 = _closure1_slot13;
                            var4 = _closure1_slot20;
                            var3 = {};
                            var2 = var2.command;
                            var3.command = var2;
                            var2 = _closure2_slot16;
                            var3.onPressCommand = var2;
                            var2 = 0;
                            var2 = var2 === var5;
                            var3.isFirstRow = var2;
                            var2 = _closure2_slot14;
                            var8 = var2.length;
                            var2 = 1;
                            var2 = var8 - var2;
                            var2 = var5 === var2;
                            var3.isLastRow = var2;
                            var2 = _closure2_slot0;
                            var3.context = var2;
                            var2 = _closure2_slot17;
                            var3.onExecuteCommand = var2;
                            var2 = _closure2_slot18;
                            var3.section = var2;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 23;
                            var8 = var8[var2];
                            var2 = undefined;
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.ApplicationCommandTriggerLocations;
                            var8 = var8.APP_LAUNCHER_APPLICATION_VIEW;
                            var3.location = var8;
                            var8 = _closure2_slot2;
                            var3.installOnDemand = var8;
                            var7 = _closure2_slot3;
                            var3.sectionName = var7;
                            var0 = var6.bind(var2)(var4, var3);
                        case 218:
                            _fun108473_ip = 274;
                            continue _fun108473;
                        case 220:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot19;
                            var2 = {};
                            var6 = 0;
                            var6 = var6 === var5;
                            var2.isFirstRow = var6;
                            var1 = _closure1_slot18;
                            var6 = var1.length;
                            var1 = 1;
                            var1 = var6 - var1;
                            var1 = var5 === var1;
                            var2.isLastRow = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 274:
                            return var0;
                    }
                };
                var19 = var6.bind(var4)(var0, var2);
                var0 = _closure1_slot9;
                var1 = var1 + var0;
                _closure2_slot19 = var1;
                var7 = _closure1_slot1;
                var28 = _closure1_slot3;
                var0 = 25;
                var0 = var28[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.width;
                _closure2_slot20 = var6;
                var0 = 26;
                var0 = var28[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.maximum;
                _closure2_slot21 = var0;
                var16 = var4.useMemo;
                var13 = new Array(4);
                var13[0] = var12;
                var2 = var32.monetizationDisclosureContainerStyle;
                var13[1] = var2;
                var2 = var32.monetizationDisclosureStyle;
                var13[2] = var2;
                var2 = var32.monetizationDisclosureTextStyle;
                var13[3] = var2;
                var2 = function() { // Environment: var8
                    _fun108474: for (var _fun108474_ip = 0;;) switch (_fun108474_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 27;
                            var0 = var3[var0];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isAndroid;
                            var3 = var0.bind(var2)();
                            if (!var3) {
                                _fun108474_ip = 76;
                                continue _fun108474
                            }
                        case 38:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 22;
                            var0 = var5[var0];
                            var5 = var2.bind(var4)(var0);
                            var2 = var5.isApplicationMonetizedWithIAP;
                            var0 = _closure2_slot1;
                            var3 = var2.bind(var5)(var0);
                        case 76:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 22;
                            var0 = var5[var0];
                            var6 = var2.bind(var4)(var0);
                            var2 = var6.isApplicationAdSupported;
                            var0 = _closure2_slot1;
                            var2 = var2.bind(var6)(var0);
                            var6 = null;
                            if (!var2) {
                                _fun108474_ip = 324;
                                continue _fun108474
                            }
                        case 122:
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot6;
                            var7 = {};
                            var14 = _closure2_slot7;
                            var10 = var14.monetizationDisclosureStyle;
                            var7.style = var10;
                            var12 = _closure1_slot13;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot3;
                            var10 = 28;
                            var10 = var18[var10];
                            var10 = var17.bind(var4)(var10);
                            var11 = var10.BillIcon;
                            var10 = {
                                'size': 'sm',
                                'color': 'icon-muted'
                            };
                            var11 = var12.bind(var4)(var11, var10);
                            var10 = new Array(2);
                            var10[0] = var11;
                            var13 = _closure1_slot13;
                            var11 = 29;
                            var11 = var18[var11];
                            var11 = var17.bind(var4)(var11);
                            var12 = var11.Text;
                            var11 = {
                                'style': null,
                                'variant': 'text-xs/normal',
                                'color': 'text-subtle',
                                'lineClamp': 1
                            };
                            var14 = var14.monetizationDisclosureTextStyle;
                            var11.style = var14;
                            var14 = 30;
                            var15 = var18[var14];
                            var15 = var17.bind(var4)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var18[var14];
                            var14 = var17.bind(var4)(var14);
                            var14 = var14.t;
                            var14 = var14["5khEk8"];
                            var14 = var15.bind(var16)(var14);
                            var11.children = var14;
                            var11 = var13.bind(var4)(var12, var11);
                            var10[1] = var11;
                            var7.children = var10;
                            var6 = var9.bind(var4)(var8, var7);
                        case 324:
                            var7 = null;
                            if (!var3) {
                                _fun108474_ip = 534;
                                continue _fun108474
                            }
                        case 332:
                            var10 = _closure1_slot14;
                            var9 = _closure1_slot6;
                            var8 = {};
                            var15 = _closure2_slot7;
                            var11 = var15.monetizationDisclosureStyle;
                            var8.style = var11;
                            var13 = _closure1_slot13;
                            var18 = _closure1_slot0;
                            var19 = _closure1_slot3;
                            var11 = 31;
                            var11 = var19[var11];
                            var11 = var18.bind(var4)(var11);
                            var12 = var11.ShopIcon;
                            var11 = {
                                'size': 'sm',
                                'color': 'icon-muted'
                            };
                            var12 = var13.bind(var4)(var12, var11);
                            var11 = new Array(2);
                            var11[0] = var12;
                            var14 = _closure1_slot13;
                            var12 = 29;
                            var12 = var19[var12];
                            var12 = var18.bind(var4)(var12);
                            var13 = var12.Text;
                            var12 = {
                                'style': null,
                                'variant': 'text-xs/normal',
                                'color': 'text-subtle',
                                'lineClamp': 1
                            };
                            var15 = var15.monetizationDisclosureTextStyle;
                            var12.style = var15;
                            var15 = 30;
                            var16 = var19[var15];
                            var16 = var18.bind(var4)(var16);
                            var17 = var16.intl;
                            var16 = var17.string;
                            var15 = var19[var15];
                            var15 = var18.bind(var4)(var15);
                            var15 = var15.t;
                            var15 = var15["8z5B2U"];
                            var15 = var16.bind(var17)(var15);
                            var12.children = var15;
                            var12 = var14.bind(var4)(var13, var12);
                            var11[1] = var12;
                            var8.children = var11;
                            var7 = var10.bind(var4)(var9, var8);
                        case 534:
                            if (var3) {
                                _fun108474_ip = 542;
                                continue _fun108474
                            }
                        case 537:
                            var0 = null;
                            if (!var2) {
                                _fun108474_ip = 588;
                                continue _fun108474
                            }
                        case 542:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var5 = _closure2_slot7;
                            var5 = var5.monetizationDisclosureContainerStyle;
                            var1.style = var5;
                            var5 = new Array(2);
                            var5[0] = var7;
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 588:
                            return var0;
                    }
                };
                var24 = var16.bind(var4)(var2, var13);
                var16 = var4.useMemo;
                var13 = new Array(2);
                var13[0] = var1;
                var2 = var32.list;
                var13[1] = var2;
                var2 = function() { // Environment: var8
                    var0 = {};
                    var2 = _closure2_slot7;
                    var3 = var2.list;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot19;
                    var1 = 'paddingBottom';
                    var0[var1] = var2;
                    return var0;
                };
                var21 = var16.bind(var4)(var2, var13);
                var13 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    var0 = {};
                    var1 = _closure2_slot19;
                    var0.bottom = var1;
                    return var0;
                };
                var20 = var13.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    var0 = {};
                    var2 = _closure2_slot20;
                    var0.width = var2;
                    var1 = _closure2_slot21;
                    var0.height = var1;
                    return var0;
                };
                var16 = var2.bind(var4)(var0, var1);
                var30 = _closure1_slot0;
                var6 = 32;
                var0 = var28[var6];
                var1 = var30.bind(var3)(var0);
                var0 = var1.useAppLauncherFlashListProps;
                var4 = var0.bind(var1)();
                var2 = _closure1_slot14;
                var1 = _closure1_slot15;
                var0 = {};
                var13 = _closure1_slot13;
                var6 = var28[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var22 = {};
                var34 = _closure1_slot13;
                var31 = _closure1_slot6;
                var23 = {};
                var42 = var32.headerSpacer;
                var23.style = var42;
                var31 = var34.bind(var3)(var31, var23);
                var23 = new Array(7);
                var23[0] = var31;
                var31 = 22;
                var28 = var28[var31];
                var30 = var30.bind(var3)(var28);
                var28 = var30.isEmbeddedApp;
                var28 = var28.bind(var30)(var12);
                var42 = _closure1_slot13;
                var34 = _closure1_slot1;
                var46 = _closure1_slot3;
                if (var28) {
                    _fun108466_ip = 1273;
                    continue _fun108466
                }
            case 1214:
                var28 = 34;
                var28 = var46[var28];
                var30 = var34.bind(var3)(var28);
                var28 = {};
                var28.application = var12;
                var47 = var32.viewContainerStyle;
                var28.viewContainerStyle = var47;
                var47 = var32.mainContainerStyle;
                var28.mainContainerStyle = var47;
                var47 = var32.expandDescriptionCTAStyle;
                var28.expandDescriptionCTAStyle = var47;
                var28 = var42.bind(var3)(var30, var28);
                _fun108466_ip = 1330;
                continue _fun108466;
            case 1273:
                var30 = 33;
                var30 = var46[var30];
                var34 = var34.bind(var3)(var30);
                var30 = {};
                var30.application = var12;
                var30.context = var25;
                var30.sectionName = var35;
                var30.onActivityItemSelected = var45;
                var30.entrypoint = var43;
                var43 = var40.length;
                var43 = var43 > var44;
                var30.hasCommands = var43;
                var28 = var42.bind(var3)(var34, var30);
            case 1330:
                var23[1] = var28;
                var34 = _closure1_slot13;
                var30 = _closure1_slot1;
                var42 = _closure1_slot3;
                var28 = 35;
                var28 = var42[var28];
                var30 = var30.bind(var3)(var28);
                var28 = {};
                var43 = var27 == var24;
                var42 = 24;
                if (var43) {
                    _fun108466_ip = 1400;
                    continue _fun108466
                }
            case 1370:
                var44 = _closure1_slot1;
                var45 = _closure1_slot3;
                var43 = 10;
                var43 = var45[var43];
                var43 = var44.bind(var3)(var43);
                var43 = var43.spacing;
                var42 = var43.PX_16;
            case 1400:
                var28.size = var42;
                var28 = var34.bind(var3)(var30, var28);
                var23[2] = var28;
                var23[3] = var24;
                var28 = var40.length;
                var24 = 1;
                var24 = var28 > var24;
                if (!var24) {
                    _fun108466_ip = 1436;
                    continue _fun108466
                }
            case 1433:
                var24 = !var14;
            case 1436:
                if (!var24) {
                    _fun108466_ip = 1452;
                    continue _fun108466
                }
            case 1439:
                var30 = var25.type;
                var28 = 'channel';
                var24 = var28 === var30;
            case 1452:
                if (!var24) {
                    _fun108466_ip = 1517;
                    continue _fun108466
                }
            case 1455:
                var34 = _closure1_slot13;
                var30 = _closure1_slot1;
                var28 = _closure1_slot3;
                var28 = var28[var41];
                var30 = var30.bind(var3)(var28);
                var28 = {};
                var28.context = var25;
                var28.allCommands = var40;
                var28.onPressCommand = var39;
                var28.section = var38;
                var28.onExecuteCommand = var37;
                var28.installOnDemand = var36;
                var28.sectionName = var35;
                var24 = var34.bind(var3)(var30, var28);
            case 1517:
                var23[4] = var24;
                var24 = null;
                if (!var26) {
                    _fun108466_ip = 1697;
                    continue _fun108466
                }
            case 1529:
                var30 = _closure1_slot0;
                var28 = _closure1_slot3;
                var28 = var28[var31];
                var30 = var30.bind(var3)(var28);
                var28 = var30.isEmbeddedApp;
                var28 = var28.bind(var30)(var12);
                var24 = null;
                if (var28) {
                    _fun108466_ip = 1697;
                    continue _fun108466
                }
            case 1565:
                var31 = _closure1_slot13;
                var30 = _closure1_slot6;
                var28 = {};
                var34 = var32.noCommandsTextContainer;
                var28.style = var34;
                var36 = _closure1_slot13;
                var40 = _closure1_slot0;
                var41 = _closure1_slot3;
                var34 = 29;
                var34 = var41[var34];
                var34 = var40.bind(var3)(var34);
                var35 = var34.Text;
                var34 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var37 = 30;
                var38 = var41[var37];
                var38 = var40.bind(var3)(var38);
                var39 = var38.intl;
                var38 = var39.string;
                var37 = var41[var37];
                var37 = var40.bind(var3)(var37);
                var37 = var37.t;
                var37 = var37["w8+YDM"];
                var37 = var38.bind(var39)(var37);
                var34.children = var37;
                var34 = var36.bind(var3)(var35, var34);
                var28.children = var34;
                var24 = var31.bind(var3)(var30, var28);
            case 1697:
                var23[5] = var24;
                var24 = null;
                if (var26) {
                    _fun108466_ip = 1953;
                    continue _fun108466
                }
            case 1709:
                var26 = var25.type;
                var25 = 'channel';
                var24 = null;
                if (!(var25 === var26)) {
                    _fun108466_ip = 1953;
                    continue _fun108466
                }
            case 1727:
                var27 = _closure1_slot14;
                var26 = _closure1_slot6;
                var25 = {};
                var28 = var32.commandsHeaderContainer;
                var25.style = var28;
                var31 = _closure1_slot13;
                var30 = _closure1_slot6;
                var28 = {};
                var32 = var32.commandsHeaderTextContainer;
                var28.style = var32;
                var35 = _closure1_slot13;
                var39 = _closure1_slot0;
                var40 = _closure1_slot3;
                var32 = 29;
                var32 = var40[var32];
                var32 = var39.bind(var3)(var32);
                var34 = var32.Text;
                var32 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var36 = 30;
                var37 = var40[var36];
                var37 = var39.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var40[var36];
                var36 = var39.bind(var3)(var36);
                var36 = var36.t;
                var36 = var36.GOXqks;
                var36 = var37.bind(var38)(var36);
                var32.children = var36;
                var32 = var35.bind(var3)(var34, var32);
                var28.children = var32;
                var30 = var31.bind(var3)(var30, var28);
                var28 = new Array(2);
                var28[0] = var30;
                if (!var29) {
                    _fun108466_ip = 1939;
                    continue _fun108466
                }
            case 1890:
                var32 = _closure1_slot13;
                var31 = _closure1_slot1;
                var34 = _closure1_slot3;
                var30 = 37;
                var30 = var34[var30];
                var31 = var31.bind(var3)(var30);
                var30 = {};
                var30.sortOrder = var33;
                var33 = function arg0() {
                    var2 = _closure2_slot13;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var30.onSortOptionPress = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 1939:
                var28[1] = var29;
                var25.children = var28;
                var24 = var27.bind(var3)(var26, var25);
            case 1953:
                var23[6] = var24;
                var22.children = var23;
                var22 = var2.bind(var3)(var1, var22);
                var6.ListHeaderComponent = var22;
                var6.contentContainerStyle = var21;
                var6.scrollIndicatorInsets = var20;
                var6.renderItem = var19;
                var6.data = var18;
                var6.estimatedItemSize = var17;
                var6.estimatedListSize = var16;
                var6.preserveScrollMomentum = var15;
                var6.lockableScrollableContentOffsetY = var10;
                var15 = false;
                var6.automaticallyAdjustsScrollIndicatorInsets = var15;
                var15 = 'none';
                var6.keyboardDismissMode = var15;
                var15 = var4.onScroll;
                var6.animatedOnScroll = var15;
                var15 = var4.scrollerRef;
                var6.ref = var15;
                var15 = var4.gestureRef;
                var6.simultaneousHandlers = var15;
                var4 = var4.animatedProps;
                var6.animatedProps = var4;
                var4 = undefined;
                if (!var14) {
                    _fun108466_ip = 2079;
                    continue _fun108466
                }
            case 2075:
                var4 = 'loading';
            case 2079:
                var6 = var13.bind(var3)(var7, var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot13;
                var6 = _closure1_slot1;
                var13 = _closure1_slot3;
                var5 = 9;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.application = var12;
                var5.onPressBack = var11;
                var5.scrollOffsetY = var10;
                var5.showsAddCTA = var9;
                var8 = function arg0() {
                    _fun108479: for (var _fun108479_ip = 0;;) switch (_fun108479_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.installAppProps;
                            var0 = undefined;
                            var _closure3_slot0 = var0;
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 38;
                            var2 = var8[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            var6 = _closure2_slot9;
                            var7 = _closure1_slot0;
                            var3 = 13;
                            var3 = var8[var3];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.AppLauncherKeyboardCloseReason;
                            var3 = var3.OAUTH_MODAL;
                            var6.current = var3;
                            var3 = _closure2_slot8;
                            var7 = var3.current;
                            var3 = null;
                            if (!(var3 != var7)) {
                                _fun108479_ip = 116;
                                continue _fun108479
                            }
                        case 106:
                            var6 = var7.closeCustomKeyboard;
                            var6 = var6.bind(var7)();
                        case 116:
                            var7 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 23;
                            var6 = var9[var6];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.ApplicationCommandTriggerLocations;
                            var6 = var6.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU;
                            var7.location = var6;
                            var6 = _closure2_slot1;
                            var6 = var6.id;
                            var7.application_id = var6;
                            var6 = _closure2_slot3;
                            var7.section_name = var6;
                            var2 = _closure2_slot4;
                            var7.source = var2;
                            _closure3_slot0 = var7;
                            var2 = var5.customInstallUrl;
                            if (!(var3 == var2)) {
                                _fun108479_ip = 241;
                                continue _fun108479
                            }
                        case 199:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var2 = 39;
                            var2 = var6[var2];
                            var6 = var3.bind(var0)(var2);
                            var3 = var6.trackWithMetadata;
                            var2 = _closure1_slot11;
                            var2 = var2.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                            var2 = var3.bind(var6)(var2, var7);
                        case 241:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 40;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.installApplication;
                            var1 = {};
                            var11 = var1;
                            var10 = var5;
                            var5 = copyDataProperties(var11, var10);
                            var6 = 'app_launcher_app_details';
                            var5 = 'source';
                            var1[var5] = var6;
                            var5 = function arg0() {
                                _fun108480: for (var _fun108480_ip = 0;;) switch (_fun108480_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.canceled;
                                        var0 = var0.location;
                                        var2 = null;
                                        if (var1) {
                                            _fun108480_ip = 79;
                                            continue _fun108480
                                        }
                                    case 19:
                                        if (!(var2 != var0)) {
                                            _fun108480_ip = 100;
                                            continue _fun108480
                                        }
                                    case 23:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var1 = 39;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.trackWithMetadata;
                                        var0 = _closure1_slot11;
                                        var1 = var0.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                                        var0 = _closure3_slot0;
                                        var0 = var3.bind(var4)(var1, var0);
                                        _fun108480_ip = 100;
                                        continue _fun108480;
                                    case 79:
                                        var1 = _closure2_slot6;
                                        if (!(var2 != var1)) {
                                            _fun108480_ip = 100;
                                            continue _fun108480
                                        }
                                    case 90:
                                        var1 = _closure2_slot6;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 100:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = 'oauth2Callback';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5.onAddAppMenuClick = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = 24;
    var2.BETWEEN_SECTIONS_MARGIN = var3;
    var2.CommandRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 4674, 1468, 660, 4545, 33, 1297, 14001, 671, 13930, 4900, 7804, 13974, 4544, 8054, 4090, 1568, 7669, 1647, 14004, 4673, 4547, 13927, 1464, 11422, 478, 14006, 3942, 1234, 10596, 13814, 14008, 5412, 9352, 14014, 14016, 3279, 4302, 7884, 2]);