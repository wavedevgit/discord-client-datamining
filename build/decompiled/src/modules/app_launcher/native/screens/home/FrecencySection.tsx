// modules/app_launcher/native/screens/home/FrecencySection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function() {
        var0 = _closure1_slot13;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 12;
        var4 = var2[var0];
        var7 = var1.bind(var3)(var4);
        var6 = var7.usePlaceholderWidth;
        var4 = 20;
        var5 = 90;
        var15 = var6.bind(var7)(var4, var5);
        var0 = var2[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.usePlaceholderWidth;
        var0 = 70;
        var14 = var1.bind(var2)(var4, var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var12.commandContainer;
        var0.style = var4;
        var6 = _closure1_slot11;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var12.loadingCommandIcon;
        var4.style = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot12;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = _closure1_slot11;
        var8 = {};
        var13 = var12.loadingTextPlaceholder;
        var11 = new Array(2);
        var11[0] = var13;
        var13 = {};
        var13.width = var15;
        var11[1] = var13;
        var8.style = var11;
        var10 = var10.bind(var3)(var6, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var11 = _closure1_slot11;
        var10 = _closure1_slot5;
        var9 = {};
        var13 = var12.loadingTextPlaceholderSmall;
        var12 = new Array(2);
        var12[0] = var13;
        var13 = {};
        var13.width = var14;
        var12[1] = var13;
        var9.style = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun107371: for (var _fun107371_ip = 0;;) switch (_fun107371_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.context;
                var _closure2_slot0 = var16;
                var9 = var1.app;
                var _closure2_slot1 = var9;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var1 = var2[var1];
                var5 = var4.bind(var3)(var1);
                var1 = var5.useAppLauncherContext;
                var1 = var1.bind(var5)();
                var12 = var1.entrypoint;
                var13 = var1.onActivityItemSelected;
                var5 = _closure1_slot4;
                var1 = var5.useId;
                var11 = var1.bind(var5)();
                var1 = 14;
                var1 = var2[var1];
                var8 = var4.bind(var3)(var1);
                var6 = var8.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    _fun107372: for (var _fun107372_ip = 0;;) switch (_fun107372_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var0 = var2.isLaunchingActivity;
                            var2 = var0.bind(var2)();
                            var0 = new Array(2);
                            var0[0] = var2;
                            var4 = _closure1_slot7;
                            var3 = var4.getLaunchState;
                            var1 = _closure2_slot1;
                            var2 = var1.applicationId;
                            var1 = _closure2_slot0;
                            var7 = var1.type;
                            var6 = 'channel';
                            var1 = undefined;
                            if (!(var6 === var7)) {
                                _fun107372_ip = 80;
                                continue _fun107372
                            }
                        case 66:
                            var5 = _closure2_slot0;
                            var5 = var5.channel;
                            var1 = var5.id;
                        case 80:
                            var1 = var3.bind(var4)(var2, var1);
                            var0[1] = var1;
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var5, var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var5 = var5.bind(var3)(var6, var1);
                var1 = 0;
                var6 = var5[var1];
                var1 = 1;
                var1 = var5[var1];
                var10 = 30;
                var2 = var2[var10];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useActivityAction;
                var2 = {};
                var2.context = var16;
                var8 = var9.applicationId;
                var2.applicationId = var8;
                var8 = var4.bind(var5)(var2);
                var2 = null;
                var5 = var2 != var1;
                if (!var5) {
                    _fun107371_ip = 211;
                    continue _fun107371
                }
            case 205:
                var5 = var1.isLaunching;
            case 211:
                if (!var5) {
                    _fun107371_ip = 224;
                    continue _fun107371
                }
            case 214:
                var1 = var1.componentId;
                var5 = var1 === var11;
            case 224:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 22;
                var1 = var15[var1];
                var4 = var14.bind(var3)(var1);
                var2 = var4.useHandleActivityItemSelected;
                var1 = {};
                var17 = var9.applicationId;
                var1.applicationId = var17;
                var1.context = var16;
                var16 = 15;
                var16 = var15[var16];
                var16 = var14.bind(var3)(var16);
                var16 = var16.AppLauncherSectionName;
                var16 = var16.RECENT_APPS;
                var1.sectionName = var16;
                var1.onActivityItemSelected = var13;
                var13 = 31;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ApplicationCommandTriggerLocations;
                var13 = var13.APP_LAUNCHER_HOME;
                var1.location = var13;
                var1.entrypoint = var12;
                var1.launchingComponentId = var11;
                var11 = false;
                var1.fetchesApplication = var11;
                var1 = var2.bind(var4)(var1);
                var11 = var1.handleActivityItemSelected;
                _closure2_slot2 = var11;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot18;
                var0 = {};
                var0.app = var9;
                if (var6) {
                    _fun107371_ip = 440;
                    continue _fun107371
                }
            case 407:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var7 = var9.bind(var3)(var7);
                var7 = var7.ActivityAction;
                var7 = var7.LEAVE;
                var6 = var8 === var7;
            case 440:
                var0.disabled = var6;
                var0.submitting = var5;
                var0.onAppSelected = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun107374: for (var _fun107374_ip = 0;;) switch (_fun107374_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.app;
                var _closure2_slot0 = var1;
                var8 = var0.disabled;
                var11 = var0.submitting;
                var5 = undefined;
                if (!(var11 === var5)) {
                    _fun107374_ip = 34;
                    continue _fun107374
                }
            case 32:
                var11 = false;
            case 34:
                var0 = var0.onAppSelected;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot13;
                var10 = var0.bind(var5)();
                var2 = var1.section;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun107374_ip = 340;
                    continue _fun107374
                }
            case 69:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 22;
                var2 = var9[var2];
                var12 = var3.bind(var5)(var2);
                var4 = var12.getAppLauncherIconSource;
                var2 = var1.section;
                var2 = var2.application;
                var13 = var4.bind(var12)(var2);
                var4 = _closure1_slot12;
                var2 = 29;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.PressableOpacity;
                var2 = {};
                if (var8) {
                    _fun107374_ip = 145;
                    continue _fun107374
                }
            case 137:
                var9 = var10.appContainer;
                _fun107374_ip = 151;
                continue _fun107374;
            case 145:
                var9 = var10.appContainerDisabled;
            case 151:
                var2.style = var9;
                var2.disabled = var8;
                var8 = true;
                var2.accessible = var8;
                var8 = var1.section;
                var9 = var8.application;
                var12 = var0 == var9;
                var8 = undefined;
                if (var12) {
                    _fun107374_ip = 189;
                    continue _fun107374
                }
            case 184:
                var8 = var9.name;
            case 189:
                var2.accessibilityLabel = var8;
                var6 = function() {
                    _fun107375: for (var _fun107375_ip = 0;;) switch (_fun107375_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun107375_ip = 34;
                                continue _fun107375
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var2 = var2.section;
                            var2 = var2.application;
                            var1 = var3 != var2;
                        case 34:
                            if (!var1) {
                                _fun107375_ip = 108;
                                continue _fun107375
                            }
                        case 37:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.section;
                            var0 = var0.application;
                            var1.application = var0;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.AppLauncherSectionName;
                            var3 = var3.RECENT_APPS;
                            var1.sectionName = var3;
                            var0 = var2.bind(var0)(var1);
                        case 108:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onPress = var6;
                var8 = var0 != var13;
                if (!var8) {
                    _fun107374_ip = 257;
                    continue _fun107374
                }
            case 211:
                var12 = _closure1_slot11;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 32;
                var6 = var14[var6];
                var9 = var9.bind(var5)(var6);
                var6 = {};
                var14 = var10.appIcon;
                var6.style = var14;
                var6.source = var13;
                var8 = var12.bind(var5)(var9, var6);
            case 257:
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot11;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 33;
                var7 = var12[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.SubmittingOverlay;
                var7 = {};
                var7.submitting = var11;
                var10 = var10.submittingOverlay;
                var7.style = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var1.applicationId;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            case 340:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var8 = 0;
    var1 = var6[var8];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var7 = 1;
    var4 = var6[var7];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var4 = var6[var1];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.FrecencySectionSelection;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot11 = var4;
    var1 = var1.jsxs;
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var4 = var9.createStyles;
    var1 = {};
    var10 = {};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginBottom = var13;
    var1.container = var10;
    var15 = 'row';
    var13 = 'center';
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var1.headerContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10.gap = var14;
    var1.header = var10;
    var10 = {
        'marginTop': 8,
        'overflow': 'visible'
    };
    var1.scrollView = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10.gap = var14;
    var1.scrollViewContentContainer = var10;
    var14 = 16;
    var10 = {
        'height': 16,
        'width': 16
    };
    var1.contextMenuIcon = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.CARD_BACKGROUND_DEFAULT;
    var10.backgroundColor = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10.borderRadius = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.shadows;
    var18 = var16.SHADOW_LOW;
    var19 = var10;
    var16 = copyDataProperties(var19, var18);
    var1.appContainer = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.CARD_BACKGROUND_DEFAULT;
    var10.backgroundColor = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10.borderRadius = var16;
    var16 = 0.4;
    var10.opacity = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.shadows;
    var18 = var16.SHADOW_LOW;
    var19 = var10;
    var16 = copyDataProperties(var19, var18);
    var1.appContainerDisabled = var10;
    var10 = {};
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.CARD_BACKGROUND_DEFAULT;
    var10.backgroundColor = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var10.borderRadius = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var10.paddingLeft = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var10.paddingRight = var16;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var10.paddingVertical = var16;
    var10.flexDirection = var15;
    var10.justifyContent = var13;
    var10.alignItems = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.gap = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.shadows;
    var18 = var13.SHADOW_LOW;
    var19 = var10;
    var13 = copyDataProperties(var19, var18);
    var1.commandContainer = var10;
    var10 = {
        'width': 36,
        'height': 36
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var1.commandIcon = var10;
    var10 = {
        'width': 60,
        'height': 60
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var1.appIcon = var10;
    var10 = {
        'width': 36,
        'height': 36
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var13;
    var1.loadingCommandIcon = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var13;
    var10.height = var14;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var13 = 'flex-start';
    var10.alignSelf = var13;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10.marginBottom = var15;
    var1.loadingTextPlaceholder = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var15;
    var10.height = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10.borderRadius = var14;
    var10.alignSelf = var13;
    var1.loadingTextPlaceholderSmall = var10;
    var10 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': 60,
        'height': 60
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10.borderRadius = var11;
    var1.submittingOverlay = var10;
    var1 = var4.bind(var9)(var1);
    var _closure1_slot13 = var1;
    var1 = {};
    var1.APPS = var8;
    var4 = 'APPS';
    var1[var8] = var4;
    var1.COMMANDS = var7;
    var4 = 'COMMANDS';
    var1[var7] = var4;
    var _closure1_slot14 = var1;
    var4 = {};
    var7 = "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}";
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/FrecencySection.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun107376: for (var _fun107376_ip = 0;;) switch (_fun107376_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.context;
                var _closure2_slot0 = var1;
                var1 = var0.sectionDescriptors;
                var _closure2_slot1 = var1;
                var17 = var0.commands;
                var _closure2_slot2 = var17;
                var10 = var0.loading;
                var _closure2_slot3 = var10;
                var18 = var0.apps;
                var _closure2_slot4 = var18;
                var1 = var0.onAppSelected;
                var _closure2_slot5 = var1;
                var1 = var0.onCommandSelected;
                var _closure2_slot6 = var1;
                var0 = var0.onViewAllSelected;
                var _closure2_slot7 = var0;
                var3 = undefined;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var0 = _closure1_slot13;
                var13 = var0.bind(var3)();
                var _closure2_slot8 = var13;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 13;
                var0 = var8[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var1.useAppLauncherContext;
                var0 = var0.bind(var1)();
                var1 = var0.entrypoint;
                var2 = _closure1_slot4;
                var0 = var2.useState;
                var11 = false;
                var2 = var0.bind(var2)(var11);
                var0 = _closure1_slot3;
                var6 = 2;
                var0 = var0.bind(var3)(var2, var6);
                var21 = 0;
                var7 = var0[var21];
                var _closure2_slot9 = var7;
                var2 = 1;
                var0 = var0[var2];
                var _closure2_slot10 = var0;
                var0 = 14;
                var12 = var8[var0];
                var16 = var4.bind(var3)(var12);
                var15 = var16.useStateFromStores;
                var12 = _closure1_slot8;
                var14 = new Array(1);
                var14[0] = var12;
                var12 = function() { // Environment: var9
                    var1 = _closure1_slot8;
                    var0 = var1.getSelection;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var15.bind(var16)(var14, var12);
                var0 = var8[var0];
                var14 = var4.bind(var3)(var0);
                var8 = var14.useStateFromStores;
                var0 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var9
                    var1 = _closure1_slot7;
                    var0 = var1.isLaunchingActivity;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var8.bind(var14)(var4, var0);
                var8 = _closure1_slot4;
                var4 = var8.useState;
                var0 = var17.length;
                if (!(var0 > var21)) {
                    _fun107376_ip = 320;
                    continue _fun107376
                }
            case 306:
                var0 = _closure1_slot9;
                var0 = var0.COMMANDS;
                if (!(var12 !== var0)) {
                    _fun107376_ip = 332;
                    continue _fun107376
                }
            case 320:
                var0 = _closure1_slot14;
                var0 = var0.APPS;
                _fun107376_ip = 342;
                continue _fun107376;
            case 332:
                var12 = _closure1_slot14;
                var0 = var12.COMMANDS;
            case 342:
                var4 = var4.bind(var8)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var6);
                var4 = var0[var21];
                _closure2_slot11 = var4;
                var0 = var0[var2];
                _closure2_slot12 = var0;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 15;
                var0 = var15[var0];
                var0 = var12.bind(var3)(var0);
                var0 = var0.AppLauncherEntrypoint;
                var0 = var0.VOICE;
                var0 = var1 === var0;
                _closure2_slot13 = var0;
                var8 = _closure1_slot4;
                var6 = var8.useEffect;
                var1 = var17.length;
                var2 = new Array(4);
                var2[0] = var1;
                var1 = var18.length;
                var2[1] = var1;
                var2[2] = var10;
                var2[3] = var4;
                var1 = function() { // Environment: var9
                    _fun107379: for (var _fun107379_ip = 0;;) switch (_fun107379_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun107379_ip = 44;
                                continue _fun107379
                            }
                        case 10:
                            var1 = _closure2_slot2;
                            var1 = var1.length;
                            var3 = 0;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun107379_ip = 41;
                                continue _fun107379
                            }
                        case 28:
                            var2 = _closure2_slot4;
                            var2 = var2.length;
                            var1 = var3 === var2;
                        case 41:
                            var0 = var1;
                        case 44:
                            if (var0) {
                                _fun107379_ip = 267;
                                continue _fun107379
                            }
                        case 50:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var0 = var2[var0];
                            var6 = undefined;
                            var3 = var1.bind(var6)(var0);
                            var2 = var3.trackWithMetadata;
                            var0 = _closure1_slot10;
                            var1 = var0.APP_LAUNCHER_FRECENTS_SEEN;
                            var0 = {};
                            var8 = _closure2_slot11;
                            var7 = _closure1_slot14;
                            var7 = var7.APPS;
                            if (!(var8 !== var7)) {
                                _fun107379_ip = 122;
                                continue _fun107379
                            }
                        case 111:
                            var7 = _closure2_slot2;
                            var7 = var7.length;
                            _fun107379_ip = 131;
                            continue _fun107379;
                        case 122:
                            var8 = _closure2_slot4;
                            var7 = var8.length;
                        case 131:
                            var0.num = var7;
                            var7 = _closure2_slot11;
                            var5 = _closure1_slot14;
                            var5 = var5.APPS;
                            if (!(var7 !== var5)) {
                                _fun107379_ip = 188;
                                continue _fun107379
                            }
                        case 154:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 15;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.AppLauncherSectionName;
                            var5 = var5.RECENT_COMMANDS;
                            _fun107379_ip = 220;
                            continue _fun107379;
                        case 188:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 15;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.AppLauncherSectionName;
                            var5 = var7.RECENT_APPS;
                        case 220:
                            var0.section_name = var5;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 15;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.AppLauncherLocations;
                            var4 = var4.HOME;
                            var0.location = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 267:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var2);
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var2 = new Array(1);
                var2[0] = var18;
                var1 = function() { // Environment: var9
                    var3 = _closure2_slot4;
                    var2 = var3.slice;
                    var1 = 0;
                    var0 = 8;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var14 = var6.bind(var8)(var1, var2);
                var1 = {};
                var1.apps = var14;
                var1.onlyActivityApps = var0;
                var0 = function arg0() {
                    var0 = arg0;
                    var6 = var0.apps;
                    var _closure3_slot0 = var6;
                    var5 = var0.onlyActivityApps;
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot4;
                    var3 = var4.useMemo;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            _fun107383: for (var _fun107383_ip = 0;;) switch (_fun107383_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2.section;
                                    var4 = null;
                                    var1 = var4 == var0;
                                    var0 = null;
                                    if (var1) {
                                        _fun107383_ip = 119;
                                        continue _fun107383
                                    }
                                case 19:
                                    var1 = var2.section;
                                    var1 = var1.application;
                                    var3 = var4 != var1;
                                    var1 = null;
                                    if (!var3) {
                                        _fun107383_ip = 116;
                                        continue _fun107383
                                    }
                                case 38:
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 9;
                                    var5 = var5[var3];
                                    var3 = undefined;
                                    var6 = var6.bind(var3)(var5);
                                    var5 = var6.isEmbeddedApp;
                                    var3 = var2.section;
                                    var3 = var3.application;
                                    var3 = var5.bind(var6)(var3);
                                    var1 = null;
                                    if (!var3) {
                                        _fun107383_ip = 116;
                                        continue _fun107383
                                    }
                                case 89:
                                    var3 = _closure3_slot1;
                                    var1 = null;
                                    if (!var3) {
                                        _fun107383_ip = 116;
                                        continue _fun107383
                                    }
                                case 101:
                                    var2 = var2.section;
                                    var2 = var2.application;
                                    var1 = var2.id;
                                case 116:
                                    var0 = var1;
                                case 119:
                                    return var0;
                            }
                        };
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.filter;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 10;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.isNotNullish;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var1, var2);
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var0.bind(var3)(var1);
                var0 = 17;
                var0 = var15[var0];
                var2 = var12.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun107384: for (var _fun107384_ip = 0;;) switch (_fun107384_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 18;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.withTiming;
                            var5 = _closure2_slot9;
                            var1 = '0deg';
                            if (!var5) {
                                _fun107384_ip = 56;
                                continue _fun107384
                            }
                        case 50:
                            var1 = '-180deg';
                        case 56:
                            var1 = var3.bind(var4)(var1);
                            var2.rotate = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var6 = {};
                var8 = 18;
                var8 = var15[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.withTiming;
                var6.withTiming = var8;
                var6.isRecentsMenuOpen = var7;
                var0.__closure = var6;
                var6 = 4528534448308.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot15;
                var0.__initData = var6;
                var0 = var1.bind(var2)(var0);
                _closure2_slot14 = var0;
                var0 = var17.length;
                if (!(var21 === var0)) {
                    _fun107376_ip = 636;
                    continue _fun107376
                }
            case 624:
                var0 = var18.length;
                if (!(var21 !== var0)) {
                    _fun107376_ip = 1537;
                    continue _fun107376
                }
            case 636:
                var0 = {};
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var25 = 19;
                var2 = var1[var25];
                var2 = var7.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var1 = var1[var25];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.XRBNsN;
                var1 = var2.bind(var6)(var1);
                var0.label = var1;
                var1 = _closure1_slot14;
                var2 = var1.COMMANDS;
                var1 = undefined;
                if (!(var4 === var2)) {
                    _fun107376_ip = 741;
                    continue _fun107376
                }
            case 715:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 20;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var1 = var2.CheckmarkSmallBoldIcon;
            case 741:
                var0.IconComponent = var1;
                var1 = function() {
                    var3 = _closure2_slot12;
                    var0 = _closure1_slot14;
                    var2 = var0.COMMANDS;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 21;
                    var2 = var7[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.setFrecencySectionSelection;
                    var2 = _closure1_slot9;
                    var2 = var2.COMMANDS;
                    var2 = var3.bind(var4)(var2);
                    var2 = 16;
                    var2 = var7[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot10;
                    var2 = var1.APP_LAUNCHER_FRECENTS_TOGGLED;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.length;
                    var1.num = var5;
                    var5 = 15;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.AppLauncherSectionName;
                    var5 = var5.RECENT_COMMANDS;
                    var1.section_name = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.action = var1;
                var12 = new Array(2);
                var12[0] = var0;
                var0 = {};
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var25];
                var2 = var7.bind(var3)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var1 = var1[var25];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.TCAk0p;
                var1 = var2.bind(var6)(var1);
                var0.label = var1;
                var1 = _closure1_slot14;
                var2 = var1.APPS;
                var1 = undefined;
                if (!(var4 === var2)) {
                    _fun107376_ip = 866;
                    continue _fun107376
                }
            case 840:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 20;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var1 = var2.CheckmarkSmallBoldIcon;
            case 866:
                var0.IconComponent = var1;
                var1 = function() {
                    var3 = _closure2_slot12;
                    var0 = _closure1_slot14;
                    var2 = var0.APPS;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 21;
                    var2 = var7[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.setFrecencySectionSelection;
                    var2 = _closure1_slot9;
                    var2 = var2.APPS;
                    var2 = var3.bind(var4)(var2);
                    var2 = 16;
                    var2 = var7[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot10;
                    var2 = var1.APP_LAUNCHER_FRECENTS_TOGGLED;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var5 = var5.length;
                    var1.num = var5;
                    var5 = 15;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.AppLauncherSectionName;
                    var5 = var5.RECENT_APPS;
                    var1.section_name = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.action = var1;
                var12[1] = var0;
                var1 = var17.slice;
                var0 = 8;
                var2 = var1.bind(var17)(var21, var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var9
                    _fun107387: for (var _fun107387_ip = 0;;) switch (_fun107387_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot1;
                            var2 = var3.find;
                            var0 = function(arg0) { // Environment: var6
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.applicationId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var0);
                            var _closure3_slot1 = var2;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 22;
                            var0 = var4[var0];
                            var5 = undefined;
                            var8 = var3.bind(var5)(var0);
                            var4 = var8.getAppLauncherIconSource;
                            var0 = null;
                            var9 = var0 == var2;
                            var3 = undefined;
                            if (var9) {
                                _fun107387_ip = 84;
                                continue _fun107387
                            }
                        case 79:
                            var3 = var2.application;
                        case 84:
                            var10 = var4.bind(var8)(var3);
                            if (!(var0 != var2)) {
                                _fun107387_ip = 506;
                                continue _fun107387
                            }
                        case 96:
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 9;
                            var3 = var3[var4];
                            var8 = var8.bind(var5)(var3);
                            var3 = var8.getSectionName;
                            var2 = var2.application;
                            if (!(var0 == var2)) {
                                _fun107387_ip = 154;
                                continue _fun107387
                            }
                        case 131:
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var4];
                            var9 = var11.bind(var5)(var9);
                            var2 = var9.FAKE_BUILT_IN_APP;
                        case 154:
                            var14 = var3.bind(var8)(var2);
                            var3 = var1.type;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 23;
                            var2 = var9[var2];
                            var2 = var8.bind(var5)(var2);
                            var2 = var2.ApplicationCommandType;
                            var2 = var2.PRIMARY_ENTRY_POINT;
                            if (!(var3 !== var2)) {
                                _fun107387_ip = 207;
                                continue _fun107387
                            }
                        case 200:
                            var18 = var1.displayName;
                            _fun107387_ip = 240;
                            continue _fun107387;
                        case 207:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.formatPrimaryEntryPointCommandName;
                            var2 = var1.displayName;
                            var18 = var3.bind(var4)(var2);
                        case 240:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 24;
                            var2 = var8[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.PressableScale;
                            var2 = {};
                            var7 = _closure2_slot8;
                            var7 = var7.commandContainer;
                            var2.style = var7;
                            var6 = function() {
                                var3 = _closure2_slot6;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var2.onPress = var6;
                            var7 = var0 != var10;
                            if (!var7) {
                                _fun107387_ip = 349;
                                continue _fun107387
                            }
                        case 304:
                            var9 = _closure1_slot11;
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var6 = 25;
                            var6 = var11[var6];
                            var8 = var8.bind(var5)(var6);
                            var6 = {};
                            var11 = 36;
                            var6.iconSize = var11;
                            var6.iconSource = var10;
                            var7 = var9.bind(var5)(var8, var6);
                        case 349:
                            var6 = new Array(2);
                            var6[0] = var7;
                            var9 = _closure1_slot12;
                            var8 = _closure1_slot5;
                            var7 = {};
                            var17 = _closure1_slot11;
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var11 = 26;
                            var10 = var15[var11];
                            var10 = var12.bind(var5)(var10);
                            var16 = var10.Text;
                            var10 = {
                                'variant': 'text-sm/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var10.children = var18;
                            var16 = var17.bind(var5)(var16, var10);
                            var10 = new Array(2);
                            var10[0] = var16;
                            var13 = _closure1_slot11;
                            var11 = var15[var11];
                            var11 = var12.bind(var5)(var11);
                            var12 = var11.Text;
                            var11 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-subtle'
                            };
                            var11.children = var14;
                            var11 = var13.bind(var5)(var12, var11);
                            var10[1] = var11;
                            var7.children = var10;
                            var7 = var9.bind(var5)(var8, var7);
                            var6[1] = var7;
                            var2.children = var6;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        case 506:
                            return var0;
                    }
                };
                var6 = var1.bind(var2)(var0);
                var2 = var6.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var0 = var8[var1];
                var0 = var7.bind(var3)(var0);
                var0 = var0.isNotNullish;
                var0 = var2.bind(var6)(var0);
                var6 = var14.map;
                var2 = function(arg0) { // Environment: var9
                    _fun107390: for (var _fun107390_ip = 0;;) switch (_fun107390_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.section;
                            var3 = null;
                            var1 = var3 == var0;
                            var0 = null;
                            if (var1) {
                                _fun107390_ip = 179;
                                continue _fun107390
                            }
                        case 22:
                            var1 = var2.section;
                            var1 = var1.application;
                            if (!(var3 != var1)) {
                                _fun107390_ip = 95;
                                continue _fun107390
                            }
                        case 36:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 9;
                            var1 = var5[var1];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var1);
                            var4 = var5.isEmbeddedApp;
                            var1 = var2.section;
                            var1 = var1.application;
                            var1 = var4.bind(var5)(var1);
                            if (!var1) {
                                _fun107390_ip = 95;
                                continue _fun107390
                            }
                        case 85:
                            var1 = _closure2_slot13;
                            if (var1) {
                                _fun107390_ip = 141;
                                continue _fun107390
                            }
                        case 95:
                            var9 = _closure1_slot11;
                            var8 = _closure1_slot18;
                            var5 = {};
                            var5.app = var2;
                            var1 = _closure2_slot5;
                            var5.onAppSelected = var1;
                            var4 = var2.applicationId;
                            var1 = undefined;
                            var1 = var9.bind(var1)(var8, var5, var4);
                            _fun107390_ip = 176;
                            continue _fun107390;
                        case 141:
                            var5 = _closure1_slot11;
                            var4 = _closure1_slot17;
                            var3 = {};
                            var7 = _closure2_slot0;
                            var3.context = var7;
                            var3.app = var2;
                            var2 = var2.applicationId;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 176:
                            var0 = var1;
                        case 179:
                            return var0;
                    }
                };
                var6 = var6.bind(var14)(var2);
                var2 = var6.filter;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var6)(var1);
                var1 = var17.length;
                if (!(var21 === var1)) {
                    _fun107376_ip = 1012;
                    continue _fun107376
                }
            case 1003:
                var1 = var18.length;
                if (!(!(var1 > var21))) {
                    _fun107376_ip = 1048;
                    continue _fun107376
                }
            case 1012:
                var1 = var17.length;
                var20 = var4;
                if (!(var1 > var21)) {
                    _fun107376_ip = 1046;
                    continue _fun107376
                }
            case 1024:
                var1 = var18.length;
                var20 = var4;
                if (!(var21 === var1)) {
                    _fun107376_ip = 1046;
                    continue _fun107376
                }
            case 1036:
                var1 = _closure1_slot14;
                var20 = var1.COMMANDS;
            case 1046:
                _fun107376_ip = 1058;
                continue _fun107376;
            case 1048:
                var1 = _closure1_slot14;
                var20 = var1.APPS;
            case 1058:
                _closure2_slot15 = var20;
                var1 = _closure1_slot14;
                var1 = var1.COMMANDS;
                var8 = var2;
                if (!(var20 === var1)) {
                    _fun107376_ip = 1082;
                    continue _fun107376
                }
            case 1079:
                var8 = var0;
            case 1082:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var7 = _closure1_slot12;
                var6 = _closure1_slot5;
                var4 = {};
                var14 = var13.headerContainer;
                var4.style = var14;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 27;
                var14 = var22[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.ContextMenu;
                var14 = {};
                var17 = var17.length;
                var17 = var17 > var21;
                if (!var17) {
                    _fun107376_ip = 1174;
                    continue _fun107376
                }
            case 1165:
                var18 = var18.length;
                var17 = var18 > var21;
            case 1174:
                var14.enabled = var17;
                var14.items = var12;
                var12 = true;
                var14.triggerOnTap = var12;
                var17 = function() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var14.onOpen = var17;
                var17 = function() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var14.onClose = var17;
                var17 = function arg0() {
                    _fun107393: for (var _fun107393_ip = 0;;) switch (_fun107393_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = var2.ref;
                            var7 = null;
                            var1 = Object.create(var7);
                            var8 = 0;
                            var1.ref = var8;
                            var18 = {};
                            var17 = var2;
                            var16 = var1;
                            var17 = copyDataProperties(var18, var17, var16);
                            var3 = _closure1_slot12;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var5 = _closure2_slot8;
                            var5 = var5.header;
                            var1.style = var5;
                            var18 = var1;
                            var0 = copyDataProperties(var18, var17);
                            var0 = 'ref';
                            var1[var0] = var4;
                            var6 = _closure1_slot11;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var0 = 26;
                            var4 = var15[var0];
                            var0 = undefined;
                            var4 = var14.bind(var0)(var4);
                            var5 = var4.Text;
                            var4 = {
                                'variant': 'text-lg/bold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var10 = 19;
                            var11 = var15[var10];
                            var11 = var14.bind(var0)(var11);
                            var13 = var11.intl;
                            var11 = var13.string;
                            var10 = var15[var10];
                            var10 = var14.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10.acSE0h;
                            var10 = var11.bind(var13)(var10);
                            var4.children = var10;
                            var4 = var6.bind(var0)(var5, var4);
                            var5 = new Array(2);
                            var5[0] = var4;
                            var4 = _closure2_slot2;
                            var4 = var4.length;
                            var6 = var4 > var8;
                            var4 = null;
                            if (!var6) {
                                _fun107393_ip = 332;
                                continue _fun107393
                            }
                        case 207:
                            var6 = _closure2_slot4;
                            var6 = var6.length;
                            var6 = var6 > var8;
                            var4 = null;
                            if (!var6) {
                                _fun107393_ip = 332;
                                continue _fun107393
                            }
                        case 225:
                            var8 = _closure1_slot11;
                            var7 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var6 = 17;
                            var6 = var13[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.View;
                            var6 = {};
                            var10 = _closure2_slot14;
                            var6.style = var10;
                            var11 = _closure1_slot11;
                            var10 = _closure1_slot0;
                            var9 = 28;
                            var9 = var13[var9];
                            var9 = var10.bind(var0)(var9);
                            var10 = var9.ChevronSmallDownIcon;
                            var9 = {};
                            var13 = 'interactive-text-default';
                            var9.color = var13;
                            var12 = _closure2_slot8;
                            var12 = var12.contextMenuIcon;
                            var9.style = var12;
                            var9 = var11.bind(var0)(var10, var9);
                            var6.children = var9;
                            var4 = var8.bind(var0)(var7, var6);
                        case 332:
                            var5[1] = var4;
                            var4 = 'children';
                            var1[var4] = var5;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot11;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 29;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.PressableOpacity;
                var15 = {};
                var18 = _closure1_slot14;
                var18 = var18.APPS;
                var18 = var20 === var18;
                if (!var18) {
                    _fun107376_ip = 1290;
                    continue _fun107376
                }
            case 1287:
                var18 = var19;
            case 1290:
                var15.disabled = var18;
                var18 = function() {
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot15;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var18;
                var18 = 'button';
                var15.accessibilityRole = var18;
                var20 = _closure1_slot11;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 26;
                var18 = var21[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var22 = var21[var25];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var25];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["/qG8v7"];
                var21 = var22.bind(var23)(var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var4.children = var14;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var14 = var13.scrollView;
                var5.style = var14;
                var13 = var13.scrollViewContentContainer;
                var5.contentContainerStyle = var13;
                var5.horizontal = var12;
                var5.showsHorizontalScrollIndicator = var11;
                if (!var10) {
                    _fun107376_ip = 1511;
                    continue _fun107376
                }
            case 1486:
                var11 = [1, 2, 3, 4, 5];
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot16;
                    var2 = undefined;
                    var1 = {};
                    var0 = arg1;
                    var0 = var4.bind(var2)(var3, var1, var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 1511:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1537:
                var0 = null;
                return var0;
        }
    };
    var2.default = var3;
    var2.SectionItemType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 13887, 660, 33, 1297, 671, 4674, 1304, 6909, 13888, 7760, 566, 7761, 4303, 3722, 4098, 1234, 5776, 13889, 13885, 1645, 7053, 10584, 3943, 8972, 7394, 4905, 13890, 4548, 4705, 13892, 2]);