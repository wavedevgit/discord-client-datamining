// modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: dismissActionSheet, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var1 = _closure1_slot6;
        var1 = var2.bind(var3)(var1);
        return var0;
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
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HUB_PROGRESS_ACTION_SHEET_ID;
    var _closure1_slot6 = var6;
    var3 = var3.HUB_PROGRESS_NUM_TOTAL_STEPS;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsLocations;
    var _closure1_slot9 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot10 = var6;
    var3 = var3.Routes;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DirectoryChannelScrollBehavior;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsActions;
    var _closure1_slot13 = var6;
    var3 = var3.AnalyticsSetupTypes;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.container = var8;
    var8 = {
        'marginTop': 12,
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HubProgressActionSheet, environment: var1
        _fun91901: for (var _fun91901_ip = 0;;) switch (_fun91901_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var4 = var0.analyticsSource;
                var _closure2_slot1 = var4;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var12 = function() { // Original name: handleFinishPress, environment: var15
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var2 = var5[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot8;
                    var4 = var2.SERVER_SETUP_CTA_CLICKED;
                    var3 = {};
                    var2 = _closure1_slot14;
                    var2 = var2.HUB_PROGRESS;
                    var3.setup_type = var2;
                    var2 = _closure1_slot13;
                    var2 = var2.DISMISS;
                    var3.action = var2;
                    var2 = _closure1_slot7;
                    var3.num_total_actions = var2;
                    var8 = _closure2_slot3;
                    var3.num_actions_completed = var8;
                    var3 = var6.bind(var7)(var4, var3);
                    var4 = _closure1_slot0;
                    var3 = 13;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.skipHubProgress;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot18;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = _closure1_slot17;
                var9 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var2 = var7.useHubProgressBarCompletedSteps;
                var16 = var2.bind(var7)(var1);
                var _closure2_slot2 = var16;
                var21 = var16.size;
                _closure2_slot3 = var21;
                var2 = global;
                var8 = var2.Math;
                var7 = var8.max;
                var2 = 11;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.MIN_PROGRESS_PERCENT;
                var2 = 100;
                var10 = var2 * var21;
                var5 = _closure1_slot7;
                var5 = var10 / var5;
                var10 = var7.bind(var8)(var6, var5);
                var8 = var2 === var10;
                var5 = _closure1_slot3;
                var2 = var5.useRef;
                var2 = var2.bind(var5)(var4);
                var _closure2_slot4 = var2;
                var4 = var5.useEffect;
                var2 = function() { // Environment: var15
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var4 = var5.useEffect;
                var1 = var1.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var15
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot8;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = 'Hub Progress Action Sheet';
                    var1.type = var5;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.guild_id = var6;
                    var5 = _closure2_slot4;
                    var5 = var5.current;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var17 = 14;
                var2 = var1[var17];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var17];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                if (var8) {
                    _fun91901_ip = 276;
                    continue _fun91901
                }
            case 261:
                var5 = var1.hRVjpT;
                var11 = var2.bind(var4)(var5);
                _fun91901_ip = 289;
                continue _fun91901;
            case 276:
                var1 = var1.zQ4gGo;
                var11 = var2.bind(var4)(var1);
            case 289:
                var4 = _closure1_slot16;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var7 = _closure1_slot15;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var5 = 15;
                var5 = var19[var5];
                var5 = var18.bind(var3)(var5);
                var6 = var5.GuildProgressHeader;
                var5 = {};
                var5.title = var11;
                var11 = var19[var17];
                var11 = var18.bind(var3)(var11);
                var20 = var11.intl;
                var14 = var20.format;
                var11 = var19[var17];
                var11 = var18.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11.l6iRLs;
                var11 = {};
                var11.numFinished = var21;
                var21 = _closure1_slot7;
                var11.total = var21;
                var21 = function(arg0, arg1) { // Original name: stepsHook, environment: var15
                    var4 = _closure1_slot15;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 16;
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
                var11.stepsHook = var21;
                var11 = var14.bind(var20)(var13, var11);
                var5.subtitle = var11;
                var5.percentCompleted = var10;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(5);
                var5[0] = var6;
                var20 = _closure1_slot1;
                var6 = 17;
                var10 = var19[var6];
                var21 = var20.bind(var3)(var10);
                var10 = {};
                var11 = function() { // Original name: onPress, environment: var15
                    _fun91906: for (var _fun91906_ip = 0;;) switch (_fun91906_ip) {
                        case 0:
                            var4 = _closure1_slot5;
                            var3 = var4.getDefaultChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var1);
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun91906_ip = 154;
                                continue _fun91906
                            }
                        case 36:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 18;
                            var5 = var4[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.transitionTo;
                            var8 = _closure1_slot11;
                            var7 = var8.CHANNEL;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var1.id;
                            var2 = var7.bind(var8)(var2, var1);
                            var1 = {};
                            var7 = {};
                            var8 = _closure1_slot12;
                            var8 = var8.GUILD_LIST_TOP;
                            var7.scrollBehavior = var8;
                            var1.state = var7;
                            var1 = var5.bind(var6)(var2, var1);
                            var2 = _closure1_slot1;
                            var1 = 8;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.hideActionSheet;
                            var0 = _closure1_slot6;
                            var0 = var1.bind(var2)(var0);
                        case 154:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10.onPress = var11;
                var11 = 19;
                var11 = var19[var11];
                var11 = var20.bind(var3)(var11);
                var10.source = var11;
                var11 = var19[var17];
                var11 = var18.bind(var3)(var11);
                var14 = var11.intl;
                var13 = var14.string;
                var11 = var19[var17];
                var11 = var18.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.iNR25n;
                var11 = var13.bind(var14)(var11);
                var10.title = var11;
                var13 = var16.has;
                var14 = 20;
                var11 = var19[var14];
                var11 = var18.bind(var3)(var11);
                var11 = var11.HubProgressStep;
                var11 = var11.JOIN_GUILD;
                var11 = var13.bind(var16)(var11);
                var10.isCompleted = var11;
                var13 = _closure1_slot14;
                var11 = var13.HUB_PROGRESS;
                var10.analyticsSetupType = var11;
                var11 = _closure1_slot13;
                var22 = var11.JOIN_GUILD;
                var10.analyticsAction = var22;
                var10 = var7.bind(var3)(var21, var10);
                var5[1] = var10;
                var10 = var19[var6];
                var21 = var20.bind(var3)(var10);
                var10 = {};
                var22 = function() { // Original name: onPress, environment: var15
                    _fun91907: for (var _fun91907_ip = 0;;) switch (_fun91907_ip) {
                        case 0:
                            var5 = _closure1_slot5;
                            var4 = var5.getDefaultChannel;
                            var3 = _closure2_slot0;
                            var1 = var3.id;
                            var1 = var4.bind(var5)(var1);
                            var4 = var5.getChannels;
                            var3 = var3.id;
                            var5 = var4.bind(var5)(var3);
                            var4 = null;
                            var3 = var4 != var1;
                            if (!var3) {
                                _fun91907_ip = 59;
                                continue _fun91907
                            }
                        case 55:
                            var3 = var4 != var5;
                        case 59:
                            if (!var3) {
                                _fun91907_ip = 119;
                                continue _fun91907
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 21;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.handleOpenInviteActionsheet;
                            var10 = _closure2_slot0;
                            var9 = var1.id;
                            var0 = _closure1_slot10;
                            var7 = var0.HUB_PROGRESS;
                            var11 = var4;
                            var8 = var5;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                        case 119:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10.onPress = var22;
                var22 = 22;
                var22 = var19[var22];
                var22 = var20.bind(var3)(var22);
                var10.source = var22;
                var22 = var19[var17];
                var22 = var18.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var19[var17];
                var22 = var18.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["3NlTYU"];
                var22 = var23.bind(var24)(var22);
                var10.title = var22;
                var23 = var16.has;
                var22 = var19[var14];
                var22 = var18.bind(var3)(var22);
                var22 = var22.HubProgressStep;
                var22 = var22.INVITE_USER;
                var22 = var23.bind(var16)(var22);
                var10.isCompleted = var22;
                var22 = var13.HUB_PROGRESS;
                var10.analyticsSetupType = var22;
                var22 = var11.INVITE;
                var10.analyticsAction = var22;
                var10 = var7.bind(var3)(var21, var10);
                var5[2] = var10;
                var6 = var19[var6];
                var10 = var20.bind(var3)(var6);
                var6 = {};
                var15 = function() { // Original name: onPress, environment: var15
                    _fun91908: for (var _fun91908_ip = 0;;) switch (_fun91908_ip) {
                        case 0:
                            var4 = _closure2_slot2;
                            var3 = var4.has;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.HubProgressStep;
                            var2 = var2.CONTACT_SYNC;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun91908_ip = 109;
                                continue _fun91908
                            }
                        case 57:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 23;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openContactSyncModal;
                            var2 = _closure1_slot9;
                            var3 = var2.HUB_PROGRESS;
                            var2 = {};
                            var2 = var4.bind(var5)(var2, var3);
                            var1 = _closure1_slot18;
                            var1 = var1.bind(var0)();
                        case 109:
                            return var0;
                    }
                };
                var6.onPress = var15;
                var15 = 24;
                var15 = var19[var15];
                var15 = var20.bind(var3)(var15);
                var6.source = var15;
                var15 = var19[var17];
                var15 = var18.bind(var3)(var15);
                var21 = var15.intl;
                var20 = var21.string;
                var15 = var19[var17];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.HFvFte;
                var15 = var20.bind(var21)(var15);
                var6.title = var15;
                var15 = var16.has;
                var14 = var19[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.HubProgressStep;
                var14 = var14.CONTACT_SYNC;
                var14 = var15.bind(var16)(var14);
                var6.isCompleted = var14;
                var13 = var13.HUB_PROGRESS;
                var6.analyticsSetupType = var13;
                var11 = var11.CONTACT_SYNC;
                var6.analyticsAction = var11;
                var6 = var7.bind(var3)(var10, var6);
                var5[3] = var6;
                var6 = {};
                var10 = var9.footer;
                var9 = new Array(1);
                var9[0] = var10;
                var6.style = var9;
                var11 = _closure1_slot15;
                if (var8) {
                    _fun91901_ip = 1088;
                    continue _fun91901
                }
            case 951:
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 26;
                var8 = var14[var8];
                var8 = var18.bind(var3)(var8);
                var9 = var8.PressableOpacity;
                var8 = {};
                var10 = 'button';
                var8.accessibilityRole = var10;
                var8.onPress = var12;
                var10 = 16;
                var10 = var14[var10];
                var10 = var18.bind(var3)(var10);
                var13 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var15 = var14[var17];
                var15 = var18.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var17];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["9E36wf"];
                var14 = var15.bind(var16)(var14);
                var10.children = var14;
                var10 = var11.bind(var3)(var13, var10);
                var8.children = var10;
                var8 = var11.bind(var3)(var9, var8);
                _fun91901_ip = 1172;
                continue _fun91901;
            case 1088:
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 25;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
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
                var9.text = var13;
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1172:
                var6.children = var8;
                var6 = var7.bind(var3)(var2, var6);
                var5[4] = var6;
                var1.children = var5;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 27;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var5 = true;
                var0.startExpanded = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1662, 8305, 660, 8882, 10150, 33, 3237, 1297, 11878, 10148, 795, 8304, 1234, 10151, 3901, 10153, 1220, 10156, 1311, 8290, 10154, 10352, 10155, 4835, 4864, 4893, 2]);