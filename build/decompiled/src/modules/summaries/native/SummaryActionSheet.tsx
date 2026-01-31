// modules/summaries/native/SummaryActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsSections;
    var _closure1_slot8 = var6;
    var3 = var3.MessageFlags;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 11;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.container = var8;
    var13 = 'center';
    var8 = {
        'padding': 16,
        'margin': 16,
        'marginBottom': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.summaryContainer = var8;
    var8 = {};
    var8.textAlign = var13;
    var3.summaryContent = var8;
    var8 = {
        'marginBottom': 8,
        'borderRadius': null,
        'border': 1,
        'overflow': 'hidden',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var8.backgroundColor = var13;
    var3.summaryIconContainer = var8;
    var8 = {
        'margin': 8,
        'width': 20,
        'height': 20
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var8.tintColor = var13;
    var3.summaryIcon = var8;
    var8 = {};
    var8.marginBottom = var12;
    var3.summaryTopic = var8;
    var8 = {};
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-evenly',
        'marginBottom': 16
    };
    var3.actionsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/summaries/native/SummaryActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: SummaryActionSheet, environment: var1
        _fun77813: for (var _fun77813_ip = 0;;) switch (_fun77813_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.summary;
                var _closure2_slot0 = var17;
                var1 = _closure1_slot12;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useRef;
                var1 = null;
                var4 = var2.bind(var4)(var1);
                var6 = _closure1_slot5;
                var5 = var6.getChannel;
                var2 = var17.channelId;
                var7 = var5.bind(var6)(var2);
                var _closure2_slot1 = var7;
                var8 = _closure1_slot6;
                var6 = var8.getMessage;
                var5 = var17.channelId;
                var2 = var17.startId;
                var6 = var6.bind(var8)(var5, var2);
                var _closure2_slot2 = var6;
                var12 = var1 != var6;
                if (!var12) {
                    _fun77813_ip = 126;
                    continue _fun77813
                }
            case 105:
                var5 = var6.hasFlag;
                var2 = _closure1_slot9;
                var2 = var2.HAS_THREAD;
                var12 = var5.bind(var6)(var2);
            case 126:
                var13 = var1 != var7;
                if (!var13) {
                    _fun77813_ip = 137;
                    continue _fun77813
                }
            case 133:
                var13 = var1 != var6;
            case 137:
                if (!var13) {
                    _fun77813_ip = 164;
                    continue _fun77813
                }
            case 140:
                var5 = var6.hasFlag;
                var2 = _closure1_slot9;
                var2 = var2.HAS_THREAD;
                var2 = var5.bind(var6)(var2);
                var13 = !var2;
            case 164:
                if (!var13) {
                    _fun77813_ip = 199;
                    continue _fun77813
                }
            case 167:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.computeCanStartPublicThread;
                var13 = var2.bind(var5)(var7, var6);
            case 199:
                var8 = _closure1_slot3;
                var5 = var8.useCallback;
                var2 = var1 == var7;
                var1 = undefined;
                if (var2) {
                    _fun77813_ip = 222;
                    continue _fun77813
                }
            case 217:
                var1 = var7.guild_id;
            case 222:
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun77814: for (var _fun77814_ip = 0;;) switch (_fun77814_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 7;
                            var1 = var0[var3];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.hideActionSheet;
                            var1 = var1.bind(var4)();
                            var1 = _closure2_slot1;
                            var7 = null;
                            var4 = var7 == var1;
                            var1 = undefined;
                            if (var4) {
                                _fun77814_ip = 62;
                                continue _fun77814
                            }
                        case 53:
                            var4 = _closure2_slot1;
                            var1 = var4.guild_id;
                        case 62:
                            if (!(var7 != var1)) {
                                _fun77814_ip = 164;
                                continue _fun77814
                            }
                        case 66:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = var1[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 9;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 13;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = _closure2_slot1;
                            var7 = var7 == var1;
                            var1 = undefined;
                            if (var7) {
                                _fun77814_ip = 147;
                                continue _fun77814
                            }
                        case 138:
                            var6 = _closure2_slot1;
                            var1 = var6.guild_id;
                        case 147:
                            var2.guildId = var1;
                            var1 = 'GuildHighlightsNotifications';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 164:
                            return var0;
                    }
                };
                var14 = var5.bind(var8)(var1, var2);
                var5 = _closure1_slot3;
                var8 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var17;
                var2[1] = var7;
                var1 = function() { // Environment: var0
                    _fun77815: for (var _fun77815_ip = 0;;) switch (_fun77815_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun77815_ip = 133;
                                continue _fun77815
                            }
                        case 48:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 14;
                            var2 = var8[var2];
                            var4 = var7.bind(var0)(var2);
                            var3 = var4.presentFailedToast;
                            var2 = 15;
                            var5 = var8[var2];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2.gvkcQl;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
                            _fun77815_ip = 313;
                            continue _fun77815;
                        case 133:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var5 = var4[var2];
                            var5 = var3.bind(var0)(var5);
                            var8 = var5.intl;
                            var7 = var8.formatToPlainString;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.t;
                            var6 = var2.I3yTDn;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var10 = var5.topic;
                            var2.topic = var10;
                            var10 = 16;
                            var10 = var4[var10];
                            var14 = var3.bind(var0)(var10);
                            var13 = var14.getChannelPermalink;
                            var9 = _closure2_slot1;
                            var18 = var9.guild_id;
                            var17 = var9.id;
                            var16 = var5.startId;
                            var15 = var5.id;
                            var19 = var14;
                            var9 = var19[var13](var18, var17, var16, var15, var14);
                            var2.url = var9;
                            var6 = var7.bind(var8)(var6, var2);
                            var2 = 17;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.showShareActionSheet;
                            var2 = {};
                            var2.message = var6;
                            var5 = var5.topic;
                            var2.subject = var5;
                            var1 = _closure1_slot8;
                            var1 = var1.SUMMARY_ACTION_SHEET;
                            var1 = var3.bind(var4)(var2, var1);
                        case 313:
                            return var0;
                    }
                };
                var18 = var8.bind(var5)(var1, var2);
                var8 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var7;
                var2[2] = var6;
                var1 = function() { // Environment: var0
                    _fun77816: for (var _fun77816_ip = 0;;) switch (_fun77816_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun77816_ip = 56;
                                continue _fun77816
                            }
                        case 48:
                            var2 = _closure2_slot2;
                            if (!(var3 == var2)) {
                                _fun77816_ip = 141;
                                continue _fun77816
                            }
                        case 56:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 14;
                            var2 = var9[var2];
                            var4 = var8.bind(var0)(var2);
                            var3 = var4.presentError;
                            var2 = 15;
                            var5 = var9[var2];
                            var5 = var8.bind(var0)(var5);
                            var7 = var5.intl;
                            var5 = var7.string;
                            var2 = var9[var2];
                            var2 = var8.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2["/+DWeQ"];
                            var2 = var5.bind(var7)(var2);
                            var2 = var3.bind(var4)(var2);
                            _fun77816_ip = 381;
                            continue _fun77816;
                        case 141:
                            var8 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var3 = 18;
                            var3 = var2[var3];
                            var9 = var8.bind(var0)(var3);
                            var7 = var9.openThreadCreationForMobile;
                            var3 = _closure2_slot1;
                            var10 = _closure2_slot0;
                            var5 = var10.startId;
                            var4 = _closure1_slot8;
                            var4 = var4.SUMMARY_ACTION_SHEET;
                            var4 = var7.bind(var9)(var3, var5, var4);
                            var4 = 19;
                            var4 = var2[var4];
                            var9 = var8.bind(var0)(var4);
                            var7 = var9.changeThreadSettings;
                            var5 = var3.id;
                            var4 = {};
                            var10 = var10.topic;
                            var4.name = var10;
                            var4 = var7.bind(var9)(var5, var4);
                            var5 = _closure1_slot0;
                            var4 = 20;
                            var4 = var2[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.navigateToCreateThread;
                            var3 = var3.guild_id;
                            var7 = 21;
                            var2 = var2[var7];
                            var9 = var8.bind(var0)(var2);
                            var8 = var9.castMessageIdAsChannelId;
                            var2 = _closure2_slot2;
                            var2 = var2.id;
                            var2 = var8.bind(var9)(var2);
                            var2 = var4.bind(var5)(var3, var2);
                            if (var2) {
                                _fun77816_ip = 381;
                                continue _fun77816
                            }
                        case 307:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 22;
                            var2 = var5[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.transitionToGuild;
                            var2 = _closure2_slot1;
                            var2 = var2.guild_id;
                            var6 = _closure1_slot1;
                            var5 = var5[var7];
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.castMessageIdAsChannelId;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var1);
                            var1 = var3.bind(var4)(var2, var1);
                        case 381:
                            return var0;
                    }
                };
                var21 = var8.bind(var5)(var1, var2);
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun77817: for (var _fun77817_ip = 0;;) switch (_fun77817_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun77817_ip = 59;
                                continue _fun77817
                            }
                        case 51:
                            var3 = _closure2_slot2;
                            var2 = var4 != var3;
                        case 59:
                            if (!var2) {
                                _fun77817_ip = 139;
                                continue _fun77817
                            }
                        case 62:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 22;
                            var2 = var7[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.transitionToGuild;
                            var2 = _closure2_slot1;
                            var2 = var2.guild_id;
                            var6 = _closure1_slot1;
                            var5 = 21;
                            var5 = var7[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.castMessageIdAsChannelId;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var1);
                            var1 = var3.bind(var4)(var2, var1);
                        case 139:
                            return var0;
                    }
                };
                var19 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot10;
                var25 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 23;
                var0 = var23[var0];
                var0 = var25.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.ref = var4;
                var6 = _closure1_slot11;
                var4 = 24;
                var4 = var23[var4];
                var4 = var25.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var7 = true;
                var4.bottom = var7;
                var9 = _closure1_slot4;
                var7 = {};
                var8 = var10.summaryContainer;
                var7.style = var8;
                var8 = {};
                var11 = var10.summaryIconContainer;
                var8.style = var11;
                var11 = 25;
                var11 = var23[var11];
                var11 = var25.bind(var3)(var11);
                var16 = var11.TopicsIcon;
                var11 = {};
                var20 = var10.summaryIcon;
                var11.style = var20;
                var20 = 'custom';
                var11.size = var20;
                var11 = var2.bind(var3)(var16, var11);
                var8.children = var11;
                var11 = var2.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var11 = 26;
                var16 = var23[var11];
                var16 = var25.bind(var3)(var16);
                var20 = var16.Text;
                var16 = {
                    'style': null,
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = var10.summaryContent;
                var22 = new Array(2);
                var22[0] = var24;
                var24 = var10.summaryTopic;
                var22[1] = var24;
                var16.style = var22;
                var22 = var17.topic;
                var16.children = var22;
                var16 = var2.bind(var3)(var20, var16);
                var8[1] = var16;
                var11 = var23[var11];
                var11 = var25.bind(var3)(var11);
                var16 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'heading-md/medium',
                    'color': 'text-default'
                };
                var22 = var10.summaryContent;
                var20 = new Array(1);
                var20[0] = var22;
                var11.style = var20;
                var17 = var17.summShort;
                var11.children = var17;
                var11 = var2.bind(var3)(var16, var11);
                var8[2] = var11;
                var7.children = var8;
                var8 = var6.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = {};
                var11 = var10.divider;
                var8.style = var11;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var8 = {};
                var10 = var10.actionsContainer;
                var8.style = var10;
                var11 = 27;
                var10 = var23[var11];
                var10 = var25.bind(var3)(var10);
                var17 = var10.SummaryActionSheetButton;
                var10 = {};
                var16 = 15;
                var20 = var23[var16];
                var20 = var25.bind(var3)(var20);
                var24 = var20.intl;
                var22 = var24.string;
                var20 = var23[var16];
                var20 = var25.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["NY/nlb"];
                var20 = var22.bind(var24)(var20);
                var10.label = var20;
                var22 = _closure1_slot1;
                var20 = 28;
                var20 = var23[var20];
                var20 = var22.bind(var3)(var20);
                var10.iconSource = var20;
                var10.onPress = var18;
                var17 = var2.bind(var3)(var17, var10);
                var10 = new Array(4);
                var10[0] = var17;
                if (!var13) {
                    _fun77813_ip = 921;
                    continue _fun77813
                }
            case 813:
                var20 = _closure1_slot10;
                var26 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = var24[var11];
                var17 = var26.bind(var3)(var17);
                var18 = var17.SummaryActionSheetButton;
                var17 = {};
                var22 = var24[var16];
                var22 = var26.bind(var3)(var22);
                var25 = var22.intl;
                var23 = var25.string;
                var22 = var24[var16];
                var22 = var26.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.rBIGBL;
                var22 = var23.bind(var25)(var22);
                var17.label = var22;
                var23 = _closure1_slot1;
                var22 = 29;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var17.iconSource = var22;
                var17.onPress = var21;
                var13 = var20.bind(var3)(var18, var17);
            case 921:
                var10[1] = var13;
                if (!var12) {
                    _fun77813_ip = 1036;
                    continue _fun77813
                }
            case 928:
                var18 = _closure1_slot10;
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = var22[var11];
                var13 = var24.bind(var3)(var13);
                var17 = var13.SummaryActionSheetButton;
                var13 = {};
                var20 = var22[var16];
                var20 = var24.bind(var3)(var20);
                var23 = var20.intl;
                var21 = var23.string;
                var20 = var22[var16];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["39d0Wj"];
                var20 = var21.bind(var23)(var20);
                var13.label = var20;
                var21 = _closure1_slot1;
                var20 = 29;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var13.iconSource = var20;
                var13.onPress = var19;
                var12 = var18.bind(var3)(var17, var13);
            case 1036:
                var10[2] = var12;
                var13 = _closure1_slot10;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = var17[var11];
                var11 = var20.bind(var3)(var11);
                var12 = var11.SummaryActionSheetButton;
                var11 = {};
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var17[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.QLkZ39;
                var16 = var18.bind(var19)(var16);
                var11.label = var16;
                var16 = _closure1_slot1;
                var15 = 30;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var11.iconSource = var15;
                var11.onPress = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[3] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: openSummaryDividerActionSheet, environment: var1
        _fun77818: for (var _fun77818_ip = 0;;) switch (_fun77818_ip) {
            case 0:
                var6 = arg1;
                var3 = _closure1_slot7;
                var2 = var3.findSummary;
                var0 = arg0;
                var5 = var2.bind(var3)(var0, var6);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun77818_ip = 131;
                    continue _fun77818
                }
            case 31:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 7;
                var2 = var0[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.openLazy;
                var2 = _closure1_slot0;
                var1 = 9;
                var1 = var0[var1];
                var2 = var2.bind(var7)(var1);
                var1 = 8;
                var1 = var0[var1];
                var0 = var0.paths;
                var2 = var2.bind(var7)(var1, var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'SummaryDivider';
                var1 = var1.bind(var0)(var6);
                var0 = {};
                var0.summary = var5;
                var0 = var3.bind(var4)(var2, var1, var0);
            case 131:
                var0 = undefined;
                return var0;
        }
    };
    var2.openSummaryDividerActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 4213, 9204, 660, 33, 3237, 9830, 1307, 1297, 671, 6659, 9671, 3106, 1234, 4200, 8232, 6429, 6443, 3878, 21, 1220, 4894, 4697, 7824, 3900, 9831, 8320, 8945, 6627, 2]);