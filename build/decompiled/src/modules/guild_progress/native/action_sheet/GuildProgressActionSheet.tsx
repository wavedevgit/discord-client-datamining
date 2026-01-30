// modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: GuildProgressHeader, environment: var3
        _fun80039: for (var _fun80039_ip = 0;;) switch (_fun80039_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.title;
                var8 = var0.subtitle;
                var18 = var0.percentCompleted;
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.header;
                var0.style = var4;
                var11 = _closure1_slot15;
                var7 = _closure1_slot5;
                var4 = {};
                var6 = var9.progress;
                var4.style = var6;
                var12 = _closure1_slot14;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 31;
                var6 = var14[var6];
                var10 = var10.bind(var3)(var6);
                var6 = {};
                var14 = 96;
                var6.size = var14;
                var6.percent = var18;
                var6 = var12.bind(var3)(var10, var6);
                var12 = new Array(3);
                var12[0] = var6;
                var14 = _closure1_slot14;
                var10 = _closure1_slot5;
                var6 = {};
                var16 = var9.progressCenter;
                var15 = new Array(2);
                var15[0] = var16;
                var17 = 100;
                var16 = null;
                if (!(var17 === var18)) {
                    _fun80039_ip = 163;
                    continue _fun80039
                }
            case 157:
                var16 = var9.progressCenterCompleted;
            case 163:
                var15[1] = var16;
                var6.style = var15;
                var6 = var14.bind(var3)(var10, var6);
                var12[1] = var6;
                var17 = _closure1_slot14;
                var14 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 32;
                var15 = var10[var6];
                var16 = var14.bind(var3)(var15);
                var15 = {};
                var18 = var9.progressArt;
                var15.style = var18;
                var18 = 33;
                var18 = var10[var18];
                var18 = var14.bind(var3)(var18);
                var15.source = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12[2] = var15;
                var4.children = var12;
                var7 = var11.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var11 = _closure1_slot14;
                var6 = var10[var6];
                var7 = var14.bind(var3)(var6);
                var6 = {};
                var12 = var9.progressSparkles;
                var6.style = var12;
                var12 = 34;
                var12 = var10[var12];
                var12 = var14.bind(var3)(var12);
                var6.source = var12;
                var6 = var11.bind(var3)(var7, var6);
                var4[1] = var6;
                var12 = _closure1_slot14;
                var6 = _closure1_slot0;
                var7 = 26;
                var7 = var10[var7];
                var7 = var6.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var14 = var9.headerTitle;
                var7.style = var14;
                var7.children = var13;
                var7 = var12.bind(var3)(var11, var7);
                var4[2] = var7;
                var7 = _closure1_slot14;
                var5 = 35;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var9 = var9.headerSubtitle;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var14.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsSetupTypes;
    var _closure1_slot8 = var7;
    var4 = var4.AnalyticsActions;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.ComponentActions;
    var _closure1_slot12 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 16;
    var9.padding = var11;
    var4.container = var9;
    var11 = 'center';
    var9 = {
        'alignItems': 'center',
        'paddingTop': 8,
        'paddingBottom': 16
    };
    var4.header = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'position': 'relative',
        'marginBottom': 12
    };
    var4.progress = var9;
    var9 = {
        'position': 'absolute',
        'backgroundColor': null,
        'width': 84,
        'height': 84,
        'borderRadius': 44
    };
    var13 = 9;
    var13 = var6[var13];
    var13 = var5.bind(var0)(var13);
    var13 = var13.PROGRESS_BACKGROUND_COLOR;
    var9.backgroundColor = var13;
    var4.progressCenter = var9;
    var9 = {};
    var13 = 10;
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var9.backgroundColor = var15;
    var4.progressCenterCompleted = var9;
    var9 = {
        'position': 'absolute',
        'width': 56,
        'height': 46
    };
    var4.progressArt = var9;
    var9 = {
        'position': 'absolute',
        'top': 8,
        'width': 160,
        'height': 51
    };
    var4.progressSparkles = var9;
    var9 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var4.headerTitle = var9;
    var9 = {
        'fontSize': 14,
        'fontWeight': '500'
    };
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var9.color = var13;
    var4.headerSubtitle = var9;
    var9 = {};
    var9.marginTop = var12;
    var4.footer = var9;
    var9 = {};
    var9.alignItems = var11;
    var4.center = var9;
    var9 = {};
    var9.flex = var10;
    var4.button = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: GuildProgressActionSheet, environment: var3
        _fun80040: for (var _fun80040_ip = 0;;) switch (_fun80040_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot16;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 11;
                var0 = var15[var2];
                var7 = var16.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var20
                    var2 = _closure1_slot7;
                    var1 = var2.getDefaultChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var7)(var5, var0);
                var _closure2_slot1 = var0;
                var0 = 9;
                var5 = var15[var0];
                var6 = var16.bind(var3)(var5);
                var5 = var6.useIOSCompletionStates;
                var5 = var5.bind(var6)(var1);
                var6 = var5.guildPopulated;
                var11 = var5.guildPersonalized;
                var10 = var5.guildMessaged;
                var22 = var5.numFinished;
                var _closure2_slot2 = var22;
                var21 = var5.totalSteps;
                var _closure2_slot3 = var21;
                var2 = var15[var2];
                var8 = var16.bind(var3)(var2);
                var7 = var8.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var20
                    var1 = _closure1_slot6;
                    var0 = var1.getErrors;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var8)(var5, var2);
                var _closure2_slot4 = var2;
                var1 = var1.id;
                var _closure2_slot5 = var1;
                var7 = _closure1_slot4;
                var8 = var7.useLayoutEffect;
                var2 = var2.message;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var20
                    _fun80043: for (var _fun80043_ip = 0;;) switch (_fun80043_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.message;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80043_ip = 63;
                                continue _fun80043
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.presentError;
                            var0 = _closure2_slot4;
                            var0 = var0.message;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var7)(var2, var5);
                var8 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var1;
                var2 = function() { // Environment: var20
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var5 = 'Guild Progress Sheet';
                    var1.type = var5;
                    var5 = _closure2_slot5;
                    var1.guild_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var8.bind(var7)(var2, var5);
                var5 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var1;
                var2[1] = var21;
                var2[2] = var22;
                var1 = function() { // Environment: var20
                    _fun80045: for (var _fun80045_ip = 0;;) switch (_fun80045_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            if (!(var2 === var1)) {
                                _fun80045_ip = 55;
                                continue _fun80045
                            }
                        case 15:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.markCompletedProgressSeen;
                            var0 = _closure2_slot5;
                            var0 = var1.bind(var2)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var1, var2);
                var7 = _closure1_slot14;
                var13 = _closure1_slot1;
                var1 = 15;
                var2 = var15[var1];
                var5 = var13.bind(var3)(var2);
                var2 = {};
                var8 = function() { // Original name: onPress, environment: var20
                    _fun80046: for (var _fun80046_ip = 0;;) switch (_fun80046_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80046_ip = 70;
                                continue _fun80046
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.showInstantInviteActionSheet;
                            var1 = _closure2_slot1;
                            var0 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.GUILD_PROGRESS;
                            var0.source = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onPress = var8;
                var8 = 17;
                var8 = var15[var8];
                var8 = var13.bind(var3)(var8);
                var2.source = var8;
                var17 = 18;
                var8 = var15[var17];
                var8 = var16.bind(var3)(var8);
                var14 = var8.intl;
                var9 = var14.string;
                var8 = var15[var17];
                var8 = var16.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.q9n0Ta;
                var8 = var9.bind(var14)(var8);
                var2.title = var8;
                var2.isCompleted = var6;
                var9 = _closure1_slot8;
                var6 = var9.GUILD_PROGRESS;
                var2.analyticsSetupType = var6;
                var6 = _closure1_slot9;
                var8 = var6.INVITE;
                var2.analyticsAction = var8;
                var8 = var7.bind(var3)(var5, var2);
                var2 = function() { // Environment: var20
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun80049: for (var _fun80049_ip = 0;;) switch (_fun80049_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun80049_ip = 183;
                                        continue _fun80049
                                    }
                                case 10:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var7 = 19;
                                    var1 = var6[var7];
                                    var2 = undefined;
                                    var9 = var5.bind(var2)(var1);
                                    var8 = var9.init;
                                    var1 = _closure2_slot5;
                                    var1 = var8.bind(var9)(var1);
                                    var8 = _closure1_slot0;
                                    var1 = 9;
                                    var1 = var6[var1];
                                    var9 = var8.bind(var2)(var1);
                                    var8 = var9.hideActionSheet;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var1 = var8.bind(var9)(var1);
                                    var1 = 20;
                                    var1 = var6[var1];
                                    var6 = var5.bind(var2)(var1);
                                    var5 = var6.openImagePicker;
                                    var1 = {};
                                    var8 = _closure1_slot10;
                                    var1.size = var8;
                                    var1 = var5.bind(var6)(var1);
                                    SaveGenerator(address = 126);
                                case 124:
                                    return var1;
                                case 126:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun80049_ip = 180;
                                        continue _fun80049
                                    }
                                case 132:
                                    var6 = var1.base64;
                                    var5 = null;
                                    if (!(var5 != var6)) {
                                        _fun80049_ip = 177;
                                        continue _fun80049
                                    }
                                case 144:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var7];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.updateIcon;
                                    var3 = _closure2_slot5;
                                    var3 = var4.bind(var5)(var3, var6);
                                case 177:
                                    return var2;
                                case 180:
                                    return var1;
                                case 183:
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
                var14 = var2.bind(var3)();
                var7 = _closure1_slot14;
                var2 = var15[var1];
                var5 = var13.bind(var3)(var2);
                var2 = {};
                var2.onPress = var14;
                var14 = 21;
                var14 = var15[var14];
                var14 = var13.bind(var3)(var14);
                var2.source = var14;
                var14 = var15[var17];
                var14 = var16.bind(var3)(var14);
                var19 = var14.intl;
                var18 = var19.string;
                var14 = var15[var17];
                var14 = var16.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.DWB2YZ;
                var14 = var18.bind(var19)(var14);
                var2.title = var14;
                var2.isCompleted = var11;
                var11 = var9.GUILD_PROGRESS;
                var2.analyticsSetupType = var11;
                var11 = var6.PERSONALIZE_SERVER;
                var2.analyticsAction = var11;
                var7 = var7.bind(var3)(var5, var2);
                var5 = _closure1_slot14;
                var1 = var15[var1];
                var2 = var13.bind(var3)(var1);
                var1 = {};
                var11 = function() { // Original name: onPress, environment: var20
                    _fun80051: for (var _fun80051_ip = 0;;) switch (_fun80051_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun80051_ip = 58;
                                continue _fun80051
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.transitionToChannel;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 23;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var2);
                            var2 = var5.hideActionSheet;
                            var2 = var2.bind(var5)();
                            var2 = _closure2_slot1;
                            var2 = var4 != var2;
                            var4 = undefined;
                            if (!var2) {
                                _fun80051_ip = 124;
                                continue _fun80051
                            }
                        case 106:
                            var2 = {};
                            var3 = _closure2_slot1;
                            var3 = var3.id;
                            var2.channelId = var3;
                            var4 = var2;
                        case 124:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 24;
                            var2 = var5[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.ComponentDispatch;
                            var2 = var3.dispatch;
                            var1 = _closure1_slot12;
                            var1 = var1.TEXTAREA_FOCUS;
                            var1 = var2.bind(var3)(var1, var4);
                            return var0;
                    }
                };
                var1.onPress = var11;
                var11 = 25;
                var11 = var15[var11];
                var11 = var13.bind(var3)(var11);
                var1.source = var11;
                var11 = var15[var17];
                var11 = var16.bind(var3)(var11);
                var14 = var11.intl;
                var13 = var14.string;
                var11 = var15[var17];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.dNktpr;
                var11 = var13.bind(var14)(var11);
                var1.title = var11;
                var1.isCompleted = var10;
                var9 = var9.GUILD_PROGRESS;
                var1.analyticsSetupType = var9;
                var6 = var6.SEND_MESSAGE;
                var1.analyticsAction = var6;
                var6 = var5.bind(var3)(var2, var1);
                var9 = var22 === var21;
                var1 = global;
                var5 = var1.Math;
                var2 = var5.max;
                var0 = var15[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.MIN_PROGRESS_PERCENT;
                var0 = 100;
                var0 = var0 * var22;
                var0 = var0 / var21;
                var13 = var2.bind(var5)(var1, var0);
                var14 = function() { // Original name: handleDismissGuildProgress, environment: var20
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 14;
                    var1 = var3[var0];
                    var0 = undefined;
                    var8 = var2.bind(var0)(var1);
                    var7 = var8.dismissProgress;
                    var1 = _closure2_slot0;
                    var4 = var1.id;
                    var4 = var7.bind(var8)(var4);
                    var4 = 23;
                    var4 = var3[var4];
                    var7 = var2.bind(var0)(var4);
                    var4 = var7.hideActionSheet;
                    var9 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var1 = 'guild-progress-';
                    var1 = var8.bind(var1)(var9);
                    var1 = var4.bind(var7)(var1);
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.SERVER_SETUP_CTA_CLICKED;
                    var1 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.DISMISS_GUILD_PROGRESS;
                    var1.action = var7;
                    var6 = _closure1_slot8;
                    var6 = var6.GUILD_PROGRESS;
                    var1.setup_type = var6;
                    var6 = _closure2_slot3;
                    var1.num_total_actions = var6;
                    var5 = _closure2_slot2;
                    var1.num_actions_completed = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var12.container;
                var0.style = var5;
                var11 = _closure1_slot14;
                var10 = _closure1_slot17;
                var5 = {};
                var18 = var15[var17];
                var18 = var16.bind(var3)(var18);
                var23 = var18.intl;
                var19 = var23.string;
                var18 = var15[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["tu/tr8"];
                var18 = var19.bind(var23)(var18);
                var5.title = var18;
                var18 = var15[var17];
                var18 = var16.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.format;
                var15 = var15[var17];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.l6iRLs;
                var15 = {};
                var15.numFinished = var22;
                var15.total = var21;
                var20 = function(arg0, arg1) { // Original name: stepsHook, environment: var20
                    var4 = _closure1_slot14;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 26;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15.stepsHook = var20;
                var15 = var18.bind(var19)(var16, var15);
                var5.subtitle = var15;
                var5.percentCompleted = var13;
                var10 = var11.bind(var3)(var10, var5);
                var5 = new Array(5);
                var5[0] = var10;
                var5[1] = var8;
                var5[2] = var7;
                var5[3] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var6 = {};
                var11 = var12.footer;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = null;
                if (var9) {
                    _fun80040_ip = 957;
                    continue _fun80040
                }
            case 951:
                var11 = var12.center;
            case 957:
                var10[1] = var11;
                var6.style = var10;
                var12 = _closure1_slot14;
                if (var9) {
                    _fun80040_ip = 1116;
                    continue _fun80040
                }
            case 975:
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 28;
                var9 = var16[var9];
                var9 = var20.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var11 = 'button';
                var9.accessibilityRole = var11;
                var9.onPress = var14;
                var15 = _closure1_slot14;
                var11 = 26;
                var11 = var16[var11];
                var11 = var20.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var18 = var16[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var17];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["9E36wf"];
                var16 = var18.bind(var19)(var16);
                var11.children = var16;
                var11 = var15.bind(var3)(var13, var11);
                var9.children = var11;
                var9 = var12.bind(var3)(var10, var9);
                _fun80040_ip = 1200;
                continue _fun80040;
            case 1116:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 27;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.onPress = var14;
                var16 = _closure1_slot0;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["0/5zhg"];
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1200:
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[4] = var6;
                var0.children = var5;
                var7 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot14;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 29;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var6 = _closure1_slot14;
                var4 = 30;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {
                    'showGradient': true,
                    'startExpanded': true
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.GuildProgressHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 8116, 1662, 10150, 660, 33, 1297, 10148, 671, 566, 3106, 795, 10152, 10153, 8290, 10154, 1234, 8115, 3972, 10155, 3903, 3237, 1229, 10156, 3901, 4835, 4864, 4859, 5170, 10157, 4666, 10159, 10160, 4838, 2]);