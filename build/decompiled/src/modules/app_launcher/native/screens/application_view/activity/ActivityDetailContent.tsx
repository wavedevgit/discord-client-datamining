// modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.tagName;
        var6 = var0.icon;
        var0 = _closure1_slot15;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var9.tag;
        var0.style = var4;
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot11;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 10;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var10 = 'text-sm/normal';
        var5.variant = var10;
        var9 = var9.tagText;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun107878: for (var _fun107878_ip = 0;;) switch (_fun107878_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.applicationId;
                var _closure2_slot0 = var12;
                var2 = var1.context;
                var19 = var1.sectionName;
                var0 = var1.primaryEntryPointCommand;
                var _closure2_slot1 = var0;
                var6 = var1.disabled;
                var16 = var1.onActivityItemSelected;
                var15 = var1.entrypoint;
                var14 = var1.activityAction;
                var _closure2_slot2 = var14;
                var4 = undefined;
                var _closure2_slot6 = var4;
                var7 = _closure1_slot6;
                var5 = var7.useId;
                var11 = var5.bind(var7)();
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 11;
                var5 = var8[var5];
                var7 = var9.bind(var4)(var5);
                var5 = var7.useRequiredAppLauncherContext;
                var5 = var5.bind(var7)();
                var17 = var5.chatInputRef;
                var _closure2_slot3 = var17;
                var5 = var5.keyboardCloseReasonRef;
                var _closure2_slot4 = var5;
                var13 = _closure1_slot6;
                var10 = var13.useCallback;
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var5;
                var5 = function() { // Environment: var3
                    _fun107879: for (var _fun107879_ip = 0;;) switch (_fun107879_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.AppLauncherKeyboardCloseReason;
                            var2 = var2.ACTIVITY;
                            var3.current = var2;
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107879_ip = 75;
                                continue _fun107879
                            }
                        case 65:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                        case 75:
                            return var0;
                    }
                };
                var13 = var10.bind(var13)(var5, var7);
                var _closure2_slot5 = var13;
                var7 = _closure1_slot1;
                var5 = 12;
                var5 = var8[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.applicationId = var12;
                var5.context = var2;
                var5.launchingComponentId = var11;
                var10 = 13;
                var8 = var8[var10];
                var8 = var9.bind(var4)(var8);
                var8 = var8.ActivityAction;
                var9 = var8.LEAVE;
                var8 = undefined;
                if (!(var14 !== var9)) {
                    _fun107878_ip = 237;
                    continue _fun107878
                }
            case 234:
                var8 = var13;
            case 237:
                var5.onSubmissionComplete = var8;
                var5 = var7.bind(var4)(var5);
                var9 = var5.submitting;
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var5 = 14;
                var5 = var18[var5];
                var8 = var17.bind(var4)(var5);
                var7 = var8.useHandleActivityItemSelected;
                var5 = {};
                var5.applicationId = var12;
                var5.context = var2;
                var5.sectionName = var19;
                var5.onActivityItemSelected = var16;
                var16 = 15;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.ApplicationCommandTriggerLocations;
                var16 = var16.APP_LAUNCHER_APPLICATION_VIEW;
                var5.location = var16;
                var5.entrypoint = var15;
                var5.launchingComponentId = var11;
                var5 = var7.bind(var8)(var5);
                var15 = var5.handleActivityItemSelected;
                _closure2_slot6 = var15;
                var8 = _closure1_slot6;
                var7 = var8.useMemo;
                var0 = var0.displayName;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.formatPrimaryEntryPointCommandName;
                    var0 = _closure2_slot1;
                    var0 = var0.displayName;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var0, var5);
                var0 = null;
                if (!(var0 == var7)) {
                    _fun107878_ip = 450;
                    continue _fun107878
                }
            case 393:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var5 = 17;
                var8 = var17[var5];
                var8 = var16.bind(var4)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.zKX8Nu;
                var7 = var8.bind(var11)(var5);
            case 450:
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var5 = var8.bind(var4)(var5);
                var5 = var5.ActivityAction;
                var5 = var5.JOIN;
                if (!(var14 !== var5)) {
                    _fun107878_ip = 586;
                    continue _fun107878
                }
            case 483:
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var5 = var8.bind(var4)(var5);
                var5 = var5.ActivityAction;
                var5 = var5.LEAVE;
                var8 = 'primary';
                if (!(var14 === var5)) {
                    _fun107878_ip = 647;
                    continue _fun107878
                }
            case 523:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var5 = 17;
                var10 = var17[var5];
                var10 = var16.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["Hi1/aQ"];
                var7 = var10.bind(var11)(var5);
                var8 = 'destructive';
                _fun107878_ip = 647;
                continue _fun107878;
            case 586:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var5 = 17;
                var10 = var17[var5];
                var10 = var16.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.d9PsMj;
                var7 = var10.bind(var11)(var5);
                var8 = 'active';
            case 647:
                var11 = _closure1_slot6;
                var10 = var11.useCallback;
                var5 = new Array(4);
                var5[0] = var15;
                var5[1] = var14;
                var5[2] = var13;
                var5[3] = var12;
                var3 = function() { // Environment: var3
                    _fun107881: for (var _fun107881_ip = 0;;) switch (_fun107881_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var0 = 18;
                            var1 = var5[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.track;
                            var1 = _closure1_slot10;
                            var3 = var1.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                            var2 = {};
                            var8 = _closure2_slot0;
                            var2.application_id = var8;
                            var4 = _closure1_slot0;
                            var8 = 19;
                            var8 = var5[var8];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.EntryPointCommandButtonActions;
                            var8 = var8.USE_APP_COMMAND;
                            var2.button_action = var8;
                            var2 = var6.bind(var7)(var3, var2);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var0)();
                            var3 = _closure2_slot2;
                            var2 = 13;
                            var2 = var5[var2];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.ActivityAction;
                            var2 = var2.LEAVE;
                            if (!(var3 === var2)) {
                                _fun107881_ip = 141;
                                continue _fun107881
                            }
                        case 133:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 141:
                            return var0;
                    }
                };
                var5 = var10.bind(var11)(var3, var5);
                var3 = var2.type;
                var2 = 'channel';
                var0 = null;
                if (!(var2 === var3)) {
                    _fun107878_ip = 771;
                    continue _fun107878
                }
            case 704:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 20;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Button;
                var1 = {};
                var10 = 'lg';
                var1.size = var10;
                var1.loading = var9;
                var1.variant = var8;
                var1.text = var7;
                var1.disabled = var6;
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 771:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun107882: for (var _fun107882_ip = 0;;) switch (_fun107882_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.botUserId;
                var _closure2_slot0 = var10;
                var9 = var0.applicationId;
                var _closure2_slot1 = var9;
                var8 = var0.analyticsLocations;
                var _closure2_slot2 = var8;
                var1 = var0.context;
                var5 = _closure1_slot6;
                var4 = var5.useState;
                var3 = false;
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot5;
                var3 = undefined;
                var4 = 2;
                var5 = var5.bind(var3)(var6, var4);
                var4 = 0;
                var6 = var5[var4];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot3 = var4;
                var7 = _closure1_slot6;
                var5 = var7.useRef;
                var4 = null;
                var4 = var5.bind(var7)(var4);
                var _closure2_slot4 = var4;
                var7 = _closure1_slot6;
                var5 = var7.useCallback;
                var4 = _closure1_slot4;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun107884: for (var _fun107884_ip = 0;;) switch (_fun107884_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun107884_ip = 294;
                                    continue _fun107884
                                }
                            case 10:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot3;
                                var1 = 18;
                                var2 = var10[var1];
                                var1 = undefined;
                                var7 = var3.bind(var1)(var2);
                                var6 = var7.track;
                                var2 = _closure1_slot10;
                                var4 = var2.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
                                var3 = {};
                                var8 = _closure2_slot1;
                                var3.application_id = var8;
                                var9 = _closure1_slot0;
                                var8 = 19;
                                var8 = var10[var8];
                                var8 = var9.bind(var1)(var8);
                                var8 = var8.EntryPointCommandButtonActions;
                                var8 = var8.OPEN_APP_DM;
                                var3.button_action = var8;
                                var3 = var6.bind(var7)(var4, var3);
                                var6 = _closure2_slot4;
                                var3 = global;
                                var8 = var3.setTimeout;
                                var7 = function() { // Environment: var4
                                    var2 = _closure2_slot3;
                                    var0 = undefined;
                                    var1 = true;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var4 = 250;
                                var4 = var8.bind(var1)(var7, var4);
                                var6.current = var4;
                            case 139: // try_start_0
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var4 = 21;
                                var4 = var7[var4];
                                var7 = var6.bind(var1)(var4);
                                var6 = var7.openPrivateChannel;
                                var4 = {};
                                var8 = _closure2_slot0;
                                var4.recipientIds = var8;
                                var4 = var6.bind(var7)(var4);
                                SaveGenerator(address = 185);
                            case 183:
                                return var4;
                            case 185:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun107884_ip = 255;
                                    continue _fun107884
                                }
                            case 191:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var5 = 22;
                                var5 = var7[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = {};
                                var7 = _closure2_slot1;
                                var5.targetApplicationId = var7;
                                var5.channelId = var4;
                                var7 = _closure2_slot2;
                                var5.analyticsLocations = var7;
                                var5 = var6.bind(var1)(var5);
                                SaveGenerator(address = 244);
                            case 242:
                                return var5;
                            case 244:
                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun107884_ip = 252;
                                    continue _fun107884
                                }
                            case 250: // try_end0
                                _fun107884_ip = 260;
                                continue _fun107884;
                            case 252:
                                return var5;
                            case 255:
                                return var4;
                            case 258: // catch_target0
                                CatchBlockStart(arg_register = 4);
                            case 260:
                                var4 = var3.clearTimeout;
                                var3 = _closure2_slot4;
                                var3 = var3.current;
                                var3 = var4.bind(var1)(var3);
                                var3 = _closure2_slot3;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            case 294:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var4.bind(var3)(var2);
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var4 = var5.bind(var7)(var4, var2);
                var2 = var1.type;
                var5 = 'primary';
                var1 = 'channel';
                if (!(var1 === var2)) {
                    _fun107882_ip = 178;
                    continue _fun107882
                }
            case 174:
                var5 = 'secondary';
            case 178:
                var2 = _closure1_slot11;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 20;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var7 = 'lg';
                var0.size = var7;
                var0.loading = var6;
                var0.variant = var5;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.AUM8hY;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var13 = 4;
    var3 = var5[var13];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var12.bind(var0)(var3);
    var3 = var3.spacing;
    var10 = var3.PX_12;
    var _closure1_slot14 = var10;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var11 = 'hidden';
    var8.overflow = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var8.paddingBottom = var10;
    var3.cardContainer = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.activityHeroDetailsLandscape = var8;
    var8 = {};
    var11 = '65%';
    var8.width = var11;
    var3.heroMediaContainerLandscape = var8;
    var8 = {};
    var11 = '35%';
    var8.width = var11;
    var3.detailsContainerLandscape = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': null,
        'rowGap': 4
    };
    var11 = 16;
    var8.paddingHorizontal = var10;
    var3.details = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'marginTop': null,
        'columnGap': 4,
        'rowGap': 6
    };
    var10 = var5[var9];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.marginTop = var10;
    var3.tagList = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingHorizontal': 12,
        'paddingVertical': 4
    };
    var10 = 'center';
    var14 = var5[var9];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var14;
    var14 = var5[var9];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var8.borderRadius = var14;
    var3.tag = var8;
    var8 = {};
    var14 = -1;
    var8.top = var14;
    var3.tagText = var8;
    var8 = {};
    var8.marginRight = var13;
    var3.tagIcon = var8;
    var8 = {};
    var8.paddingTop = var11;
    var3.buttonContainer = var8;
    var8 = {};
    var11 = -4;
    var8.marginTop = var11;
    var3.activityUrlOverrideInputContainer = var8;
    var8 = {
        'right': 0,
        'bottom': 0
    };
    var3.expandDescriptionCTAStyle = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginTop = var11;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var8.color = var11;
    var8.textAlign = var10;
    var3.primaryEntryPointButtonDisabledCTA = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.tryItOutButtonContainerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 42;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107886: for (var _fun107886_ip = 0;;) switch (_fun107886_ip) {
            case 0:
                var0 = arg0;
                var30 = var0.application;
                var _closure2_slot0 = var30;
                var15 = var0.context;
                var18 = var0.sectionName;
                var13 = var0.onActivityItemSelected;
                var12 = var0.entrypoint;
                var2 = var0.hasCommands;
                var0 = _closure1_slot15;
                var3 = undefined;
                var39 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 11;
                var0 = var7[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useRequiredAppLauncherContext;
                var0 = var0.bind(var1)();
                var32 = var0.width;
                var0 = 23;
                var0 = var7[var0];
                var4 = var6.bind(var3)(var0);
                var1 = var4.useGetPrimaryAppCommand;
                var0 = var30.id;
                var17 = var1.bind(var4)(var15, var0);
                var5 = _closure1_slot1;
                var0 = 24;
                var1 = var7[var0];
                var4 = var5.bind(var3)(var1);
                var1 = 25;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.APP_DETAIL;
                var1 = var4.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var1 = 26;
                var1 = var7[var1];
                var5 = var6.bind(var3)(var1);
                var1 = var5.useIsScreenLandscape;
                var1 = var1.bind(var5)();
                var5 = 19;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AppLauncherEntrypoint;
                var5 = var5.VOICE;
                var24 = var12 !== var5;
                if (!var24) {
                    _fun107886_ip = 221;
                    continue _fun107886
                }
            case 218:
                var24 = var1;
            case 221:
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 27;
                var1 = var5[var1];
                var9 = var7.bind(var3)(var1);
                var8 = var9.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var29
                    var0 = {};
                    var2 = _closure1_slot8;
                    var3 = var2.inDevModeForApplication;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var2)(var1);
                    var0.isDeveloperOfThisApp = var1;
                    var1 = var2.getActivityUrlOverride;
                    var1 = var1.bind(var2)();
                    var0.activityUrlOverride = var1;
                    var1 = var2.getUseActivityUrlOverride;
                    var1 = var1.bind(var2)();
                    var0.useActivityUrlOverride = var1;
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var1);
                var1 = var6.isDeveloperOfThisApp;
                var26 = var6.activityUrlOverride;
                var11 = var6.useActivityUrlOverride;
                var6 = 16;
                var5 = var5[var6];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isRealApplication;
                var5 = var5.bind(var7)(var30);
                if (var5) {
                    _fun107886_ip = 352;
                    continue _fun107886
                }
            case 316:
                var5 = global;
                var8 = var5.Error;
                var5 = var8.prototype;
                var7 = Object.create(var5, {
                    constructor: {
                        value: var8
                    }
                });
                var42 = 'ActivityDetailContent was passed the Built-in App, which is not supported.';
                var43 = var7;
                var5 = new var43[var8](var42, var41);
                var5 = var5 instanceof Object ? var5 : var7;
                throw var5;
            case 352:
                var5 = _closure1_slot9;
                var5 = var30 instanceof var5;
                if (var5) {
                    _fun107886_ip = 371;
                    continue _fun107886
                }
            case 363:
                var5 = var30.max_participants;
                _fun107886_ip = 377;
                continue _fun107886;
            case 371:
                var5 = var30.maxParticipants;
            case 377:
                var28 = null;
                var7 = var28 != var5;
                var36 = 0;
                if (!var7) {
                    _fun107886_ip = 391;
                    continue _fun107886
                }
            case 388:
                var36 = var5;
            case 391:
                var21 = null;
                if (!var1) {
                    _fun107886_ip = 785;
                    continue _fun107886
                }
            case 399:
                var8 = _closure1_slot12;
                var7 = _closure1_slot7;
                var5 = {};
                var9 = {};
                var10 = _closure1_slot14;
                var9.marginTop = var10;
                var10 = 0;
                if (var11) {
                    _fun107886_ip = 431;
                    continue _fun107886
                }
            case 424:
                var14 = _closure1_slot14;
                var10 = -var14;
            case 431:
                var9.marginBottom = var10;
                var5.style = var9;
                var14 = _closure1_slot11;
                var31 = _closure1_slot0;
                var19 = _closure1_slot3;
                var9 = 28;
                var9 = var19[var9];
                var9 = var31.bind(var3)(var9);
                var10 = var9.TableRowDivider;
                var9 = {};
                var10 = var14.bind(var3)(var10, var9);
                var9 = new Array(3);
                var9[0] = var10;
                var16 = _closure1_slot11;
                var25 = 29;
                var10 = var19[var25];
                var10 = var31.bind(var3)(var10);
                var14 = var10.FormSwitchRow;
                var10 = {};
                var20 = 17;
                var22 = var19[var20];
                var22 = var31.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var20 = var19[var20];
                var20 = var31.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["3TSGuD"];
                var20 = var22.bind(var23)(var20);
                var10.label = var20;
                var10.value = var11;
                var20 = _closure1_slot2;
                var23 = 30;
                var19 = var19[var23];
                var19 = var20.bind(var3)(var19);
                var19 = var19.toggleUseActivityUrlOverride;
                var10.onValueChange = var19;
                var19 = true;
                var10.end = var19;
                var10 = var16.bind(var3)(var14, var10);
                var9[1] = var10;
                var10 = null;
                if (!var11) {
                    _fun107886_ip = 771;
                    continue _fun107886
                }
            case 617:
                var16 = _closure1_slot11;
                var14 = _closure1_slot7;
                var11 = {};
                var19 = var39.activityUrlOverrideInputContainer;
                var11.style = var19;
                var22 = _closure1_slot11;
                var20 = _closure1_slot0;
                var19 = _closure1_slot3;
                var19 = var19[var25];
                var19 = var20.bind(var3)(var19);
                var20 = var19.FormInput;
                var19 = {
                    'showTopContainer': false,
                    'placeholder': 'e.g. http://192.168.1.1:3000'
                };
                var31 = var28 != var26;
                var25 = undefined;
                if (!var31) {
                    _fun107886_ip = 690;
                    continue _fun107886
                }
            case 687:
                var25 = var26;
            case 690:
                var19.value = var25;
                var25 = _closure1_slot2;
                var26 = _closure1_slot3;
                var23 = var26[var23];
                var23 = var25.bind(var3)(var23);
                var23 = var23.setActivityUrlOverride;
                var19.onChange = var23;
                var25 = _closure1_slot0;
                var23 = 31;
                var23 = var26[var23];
                var23 = var25.bind(var3)(var23);
                var23 = var23.ClearButtonVisibility;
                var23 = var23.WITH_CONTENT;
                var19.clearButtonVisibility = var23;
                var19 = var22.bind(var3)(var20, var19);
                var11.children = var19;
                var10 = var16.bind(var3)(var14, var11);
            case 771:
                var9[2] = var10;
                var5.children = var9;
                var21 = var8.bind(var3)(var7, var5);
            case 785:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 32;
                var5 = var8[var5];
                var8 = var7.bind(var3)(var5);
                var7 = var8.useGetOrFetchApplication;
                var5 = var30.id;
                var5 = var7.bind(var8)(var5);
                var7 = var28 == var5;
                var16 = undefined;
                if (var7) {
                    _fun107886_ip = 836;
                    continue _fun107886
                }
            case 830:
                var16 = var5.bot;
            case 836:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 13;
                var5 = var8[var5];
                var10 = var7.bind(var3)(var5);
                var9 = var10.useActivityAction;
                var5 = {};
                var5.context = var15;
                var11 = var30.id;
                var5.applicationId = var11;
                var9 = var9.bind(var10)(var5);
                var5 = 33;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useDelayedSwapToActivityActionLeave;
                var10 = var5.bind(var7)(var9);
                var7 = _closure1_slot1;
                var5 = 34;
                var5 = var8[var5];
                var9 = var7.bind(var3)(var5);
                var5 = {};
                var5.context = var15;
                var5.application = var30;
                var5.activityAction = var10;
                var5 = var9.bind(var3)(var5);
                var14 = var5.disabled;
                var11 = var5.reason;
                var5 = 35;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.context = var15;
                var5.application = var30;
                var9 = var28 == var16;
                var8 = undefined;
                if (var9) {
                    _fun107886_ip = 988;
                    continue _fun107886
                }
            case 983:
                var8 = var16.id;
            case 988:
                var5.botUserId = var8;
                var8 = var7.bind(var3)(var5);
                if (!(var28 == var17)) {
                    _fun107886_ip = 1207;
                    continue _fun107886
                }
            case 1005:
                if (!var1) {
                    _fun107886_ip = 1011;
                    continue _fun107886
                }
            case 1008:
                var1 = !var2;
            case 1011:
                if (!var1) {
                    _fun107886_ip = 1042;
                    continue _fun107886
                }
            case 1014:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var5 = var5.bind(var3)(var2);
                var2 = var5.isEmbeddedApp;
                var1 = var2.bind(var5)(var30);
            case 1042:
                var23 = undefined;
                var22 = undefined;
                if (!var1) {
                    _fun107886_ip = 1511;
                    continue _fun107886
                }
            case 1052:
                var5 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var6 = var39.buttonContainer;
                var1.style = var6;
                var9 = _closure1_slot11;
                var7 = _closure1_slot1;
                var31 = _closure1_slot3;
                var19 = 36;
                var6 = var31[var19];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var20 = _closure1_slot0;
                var19 = var31[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.HelpMessageTypes;
                var19 = var19.WARNING;
                var6.messageType = var19;
                var19 = 17;
                var25 = var31[var19];
                var25 = var20.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.format;
                var19 = var31[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["s/3hjE"];
                var19 = {};
                var19 = var25.bind(var26)(var20, var19);
                var6.children = var19;
                var6 = var9.bind(var3)(var7, var6);
                var1.children = var6;
                var22 = var5.bind(var3)(var2, var1);
                var23 = undefined;
                _fun107886_ip = 1511;
                continue _fun107886;
            case 1207:
                var5 = _closure1_slot12;
                var2 = _closure1_slot13;
                var1 = {};
                var9 = _closure1_slot11;
                var7 = _closure1_slot17;
                var6 = {};
                var19 = var30.id;
                var6.applicationId = var19;
                var6.context = var15;
                var6.sectionName = var18;
                var6.primaryEntryPointCommand = var17;
                var6.disabled = var14;
                var6.onActivityItemSelected = var13;
                var6.entrypoint = var12;
                var6.activityAction = var10;
                var7 = var9.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = null;
                if (!var8) {
                    _fun107886_ip = 1385;
                    continue _fun107886
                }
            case 1288:
                var9 = var28 == var16;
                var8 = undefined;
                if (var9) {
                    _fun107886_ip = 1302;
                    continue _fun107886
                }
            case 1297:
                var8 = var16.id;
            case 1302:
                var8 = var28 != var8;
                var7 = null;
                if (!var8) {
                    _fun107886_ip = 1385;
                    continue _fun107886
                }
            case 1311:
                var10 = _closure1_slot11;
                var9 = _closure1_slot7;
                var8 = {};
                var12 = var39.tryItOutButtonContainerStyle;
                var8.style = var12;
                var14 = _closure1_slot11;
                var13 = _closure1_slot18;
                var12 = {};
                var16 = var16.id;
                var12.botUserId = var16;
                var16 = var30.id;
                var12.applicationId = var16;
                var12.analyticsLocations = var4;
                var12.context = var15;
                var12 = var14.bind(var3)(var13, var12);
                var8.children = var12;
                var7 = var10.bind(var3)(var9, var8);
            case 1385:
                var6[1] = var7;
                var1.children = var6;
                var7 = var5.bind(var3)(var2, var1);
                var5 = _closure1_slot12;
                var2 = _closure1_slot7;
                var1 = {};
                var6 = var39.buttonContainer;
                var1.style = var6;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var28 != var11;
                if (!var7) {
                    _fun107886_ip = 1495;
                    continue _fun107886
                }
            case 1434:
                var10 = _closure1_slot11;
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 10;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                var12 = 'text-sm/normal';
                var8.variant = var12;
                var12 = var39.primaryEntryPointButtonDisabledCTA;
                var8.style = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1495:
                var6[1] = var7;
                var1.children = var6;
                var23 = var5.bind(var3)(var2, var1);
                var22 = undefined;
            case 1511:
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot11;
                var4 = 37;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.RedesignCompat;
                var4 = {};
                var7 = true;
                var4.enabled = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot7;
                var7 = {};
                var11 = var39.container;
                var10 = new Array(1);
                var10[0] = var11;
                var7.style = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot7;
                var10 = {};
                var13 = var39.cardContainer;
                var10.style = var13;
                var15 = _closure1_slot12;
                var14 = _closure1_slot7;
                var13 = {};
                var16 = var24;
                if (!var24) {
                    _fun107886_ip = 1643;
                    continue _fun107886
                }
            case 1637:
                var16 = var39.activityHeroDetailsLandscape;
            case 1643:
                var13.style = var16;
                var18 = _closure1_slot11;
                var17 = _closure1_slot7;
                var16 = {};
                var19 = var24;
                if (!var24) {
                    _fun107886_ip = 1669;
                    continue _fun107886
                }
            case 1663:
                var19 = var39.heroMediaContainerLandscape;
            case 1669:
                var16.style = var19;
                var25 = _closure1_slot11;
                var20 = _closure1_slot1;
                var26 = _closure1_slot3;
                var19 = 38;
                var19 = var26[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var26 = var30.id;
                var19.applicationId = var26;
                var26 = var32;
                if (!var24) {
                    _fun107886_ip = 1728;
                    continue _fun107886
                }
            case 1714:
                var31 = 65;
                var32 = var31 * var32;
                var31 = 100;
                var26 = var32 / var31;
            case 1728:
                var19.width = var26;
                var19 = var25.bind(var3)(var20, var19);
                var16.children = var19;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot12;
                var18 = _closure1_slot7;
                var17 = {};
                var25 = var39.details;
                var20 = new Array(2);
                var20[0] = var25;
                if (!var24) {
                    _fun107886_ip = 1789;
                    continue _fun107886
                }
            case 1783:
                var24 = var39.detailsContainerLandscape;
            case 1789:
                var20[1] = var24;
                var17.style = var20;
                var25 = _closure1_slot11;
                var24 = _closure1_slot1;
                var37 = _closure1_slot3;
                var20 = 39;
                var20 = var37[var20];
                var24 = var24.bind(var3)(var20);
                var20 = {};
                var20.application = var30;
                var26 = var39.expandDescriptionCTAStyle;
                var20.expandDescriptionCTAStyle = var26;
                var24 = var25.bind(var3)(var24, var20);
                var20 = new Array(5);
                var20[0] = var24;
                var26 = _closure1_slot12;
                var25 = _closure1_slot7;
                var24 = {};
                var31 = var39.tagList;
                var24.style = var31;
                var33 = _closure1_slot11;
                var32 = _closure1_slot16;
                var31 = {};
                var34 = _closure1_slot0;
                var27 = 40;
                var27 = var37[var27];
                var27 = var34.bind(var3)(var27);
                var38 = var27.GroupIcon;
                var27 = {};
                var39 = var39.tagIcon;
                var27.style = var39;
                var39 = 'xs';
                var27.size = var39;
                var27 = var33.bind(var3)(var38, var27);
                var31.icon = var27;
                var27 = 41;
                var27 = var37[var27];
                var34 = var34.bind(var3)(var27);
                var27 = var34.getItemSubtitleForMaxPlayersShort;
                var37 = var28 != var36;
                var35 = 0;
                if (!var37) {
                    _fun107886_ip = 1964;
                    continue _fun107886
                }
            case 1961:
                var35 = var36;
            case 1964:
                var27 = var27.bind(var34)(var35);
                var31.tagName = var27;
                var27 = 'participants';
                var31 = var33.bind(var3)(var32, var31, var27);
                var27 = new Array(2);
                var27[0] = var31;
                var31 = var30.tags;
                var30 = var28 == var31;
                var28 = undefined;
                if (var30) {
                    _fun107886_ip = 2025;
                    continue _fun107886
                }
            case 2008:
                var30 = var31.map;
                var29 = function(arg0) { // Environment: var29
                    var4 = arg0;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var1.tagName = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var28 = var30.bind(var31)(var29);
            case 2025:
                var27[1] = var28;
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var20[1] = var24;
                var20[2] = var23;
                var20[3] = var22;
                var20[4] = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 7216, 3446, 660, 33, 671, 1297, 3932, 7728, 13929, 13852, 13847, 4543, 4668, 1234, 795, 7729, 4075, 3936, 7973, 7977, 5721, 5574, 5357, 566, 4864, 5373, 7974, 5402, 6874, 13930, 13931, 13932, 6437, 4892, 13876, 5355, 4848, 13933, 2]);