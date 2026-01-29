// modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: GuildPill, environment: var1
        _fun76136: for (var _fun76136_ip = 0;;) switch (_fun76136_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var0 = _closure1_slot14;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.guildPill;
                var0.style = var4;
                var11 = _closure1_slot11;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var12 = 10;
                var4 = var10[var12];
                var7 = var6.bind(var3)(var4);
                var4 = {};
                var4.guild = var9;
                var6 = _closure1_slot0;
                var12 = var10[var12];
                var12 = var6.bind(var3)(var12);
                var12 = var12.GuildIconSizes;
                var12 = var12.SMALL_32;
                var4.size = var12;
                var12 = true;
                var4.animate = var12;
                var7 = var11.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot11;
                var5 = 11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var8 = var8.guildName;
                var5.style = var8;
                var8 = null;
                var10 = var8 == var9;
                var8 = undefined;
                if (var10) {
                    _fun76136_ip = 184;
                    continue _fun76136
                }
            case 179:
                var8 = var9.name;
            case 184:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: isFeedbackComplete, environment: var1
        _fun76137: for (var _fun76137_ip = 0;;) switch (_fun76137_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun76137_ip = 11;
                    continue _fun76137
                }
            case 9:
                var0 = {};
            case 11:
                var3 = var0.rating;
                var1 = var0.reason;
                var0 = _closure1_slot10;
                var0 = var0.GOOD;
                var0 = var3 === var0;
                if (var0) {
                    _fun76137_ip = 47;
                    continue _fun76137
                }
            case 43:
                var0 = var2 != var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: isFeedbackGood, environment: var1
        _fun76138: for (var _fun76138_ip = 0;;) switch (_fun76138_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun76138_ip = 11;
                    continue _fun76138
                }
            case 9:
                var0 = {};
            case 11:
                var1 = var0.rating;
                var0 = _closure1_slot10;
                var0 = var0.GOOD;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot8 = var6;
    var3 = var3.HighlightSettings;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackRating;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var9 = 8;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var10 = 'center';
    var8 = {
        'padding': 24,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.contentContainer = var8;
    var8 = {
        'alignItems': 'center',
        'paddingBottom': 24
    };
    var3.header = var8;
    var8 = {};
    var8.marginBottom = var12;
    var3.headerTitle = var8;
    var8 = {};
    var8.textAlign = var10;
    var3.centerText = var8;
    var8 = {
        'marginTop': 16,
        'alignItems': 'stretch',
        'alignSelf': 'stretch',
        'paddingBottom': 16
    };
    var3.feedback = var8;
    var8 = {
        'height': 40,
        'textAlign': 'center',
        'textAlignVertical': 'center'
    };
    var3.thanks = var8;
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'marginVertical': 8,
        'padding': 0
    };
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.settings = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'padding': 8,
        'marginBottom': 16,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.shadows;
    var14 = var10.SHADOW_LOW;
    var15 = var8;
    var10 = copyDataProperties(var15, var14);
    var3.guildPill = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.guildName = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SummaryFeedbackActionSheet, environment: var1
        _fun76139: for (var _fun76139_ip = 0;;) switch (_fun76139_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var15 = var1.feedbackSettings;
                var _closure2_slot1 = var15;
                var1 = _closure1_slot13;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var10 = _closure1_slot4;
                var1 = var10.useRef;
                var13 = null;
                var5 = var1.bind(var10)(var13);
                var _closure2_slot2 = var5;
                var1 = var10.useState;
                var1 = var1.bind(var10)(var3);
                var8 = _closure1_slot3;
                var7 = 2;
                var1 = var8.bind(var3)(var1, var7);
                var4 = 0;
                var14 = var1[var4];
                var _closure2_slot3 = var14;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var1 = var10.useState;
                var9 = false;
                var1 = var1.bind(var10)(var9);
                var1 = var8.bind(var3)(var1, var7);
                var6 = var1[var4];
                var _closure2_slot5 = var6;
                var1 = var1[var2];
                var _closure2_slot6 = var1;
                var1 = var10.useState;
                var1 = var1.bind(var10)(var9);
                var1 = var8.bind(var3)(var1, var7);
                var9 = var1[var4];
                var1 = var1[var2];
                var _closure2_slot7 = var1;
                var7 = var10.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var15;
                var1 = function(arg0) { // Environment: var18
                    _fun76140: for (var _fun76140_ip = 0;;) switch (_fun76140_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun76140_ip = 34;
                                continue _fun76140
                            }
                        case 13:
                            var4 = null;
                            var5 = var4 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun76140_ip = 30;
                                continue _fun76140
                            }
                        case 24:
                            var2 = var3.rating;
                        case 30:
                            var1 = var4 == var2;
                        case 34:
                            if (var1) {
                                _fun76140_ip = 128;
                                continue _fun76140
                            }
                        case 37:
                            var1 = _closure2_slot1;
                            var4 = null;
                            var1 = var4 == var1;
                            if (var1) {
                                _fun76140_ip = 64;
                                continue _fun76140
                            }
                        case 50:
                            var2 = _closure2_slot1;
                            var2 = var2.onFeedbackCompleted;
                            var1 = var4 == var2;
                        case 64:
                            if (var1) {
                                _fun76140_ip = 82;
                                continue _fun76140
                            }
                        case 67:
                            var2 = _closure2_slot1;
                            var1 = var2.onFeedbackCompleted;
                            var1 = var1.bind(var2)(var3);
                        case 82:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.handleSurveyCleanup;
                            var1 = var1.bind(var3)();
                            var1 = _closure2_slot6;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var10)(var1, var2);
                var _closure2_slot8 = var1;
                var8 = var10.useEffect;
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var1;
                var2 = function() { // Environment: var18
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot8;
                        var1 = _closure2_slot3;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var8.bind(var10)(var2, var7);
                var7 = var10.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var18
                    _fun76143: for (var _fun76143_ip = 0;;) switch (_fun76143_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var3 = _closure1_slot16;
                            var3 = var3.bind(var0)(var4);
                            if (var3) {
                                _fun76143_ip = 45;
                                continue _fun76143
                            }
                        case 32:
                            var5 = _closure2_slot7;
                            var3 = true;
                            var3 = var5.bind(var0)(var3);
                            _fun76143_ip = 65;
                            continue _fun76143;
                        case 45:
                            var3 = _closure2_slot8;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure2_slot7;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                        case 65:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleSurveyCleanup;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var7 = var7.bind(var10)(var1, var2);
                var8 = var10.useCallback;
                var2 = function() { // Environment: var18
                    _fun76144: for (var _fun76144_ip = 0;;) switch (_fun76144_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76144_ip = 28;
                                continue _fun76144
                            }
                        case 18:
                            var1 = var2.expandActionSheet;
                            var1 = var1.bind(var2)();
                        case 28:
                            var2 = _closure2_slot7;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1 = new Array(0);
                var8 = var8.bind(var10)(var2, var1);
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 13;
                var1 = var10[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot6;
                var2[1] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var0 = {};
                    var4 = _closure1_slot6;
                    var2 = var4.getGuild;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.guild = var2;
                    var2 = _closure1_slot7;
                    var1 = var2.isMuted;
                    var1 = var1.bind(var2)(var3);
                    var0.muted = var1;
                    var1 = var2.getNotifyHighlights;
                    var1 = var1.bind(var2)(var3);
                    var0.notifyHighlights = var1;
                    return var0;
                };
                var0 = var10.bind(var11)(var2, var0, var1);
                var19 = var0.guild;
                var23 = var0.muted;
                var25 = var0.notifyHighlights;
                var1 = var13 == var15;
                var0 = undefined;
                if (var1) {
                    _fun76139_ip = 375;
                    continue _fun76139
                }
            case 369:
                var0 = var15.reasons;
            case 375:
                var0 = var13 != var0;
                var21 = null;
                if (!var0) {
                    _fun76139_ip = 723;
                    continue _fun76139
                }
            case 387:
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)(var14);
                var10 = _closure1_slot11;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                if (var1) {
                    _fun76139_ip = 600;
                    continue _fun76139
                }
            case 414:
                var1 = 15;
                var1 = var22[var1];
                var1 = var20.bind(var3)(var1);
                var2 = var1.FeedbackForm;
                var1 = {};
                var11 = 14;
                var17 = var22[var11];
                var17 = var20.bind(var3)(var17);
                var26 = var17.intl;
                var24 = var26.string;
                var17 = var22[var11];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.Yzl7Or;
                var17 = var24.bind(var26)(var17);
                var1.ratingsBodyLabel = var17;
                var17 = var22[var11];
                var17 = var20.bind(var3)(var17);
                var24 = var17.intl;
                var17 = var24.string;
                var11 = var22[var11];
                var11 = var20.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.g1q5fr;
                var11 = var17.bind(var24)(var11);
                var1.reasonsHeaderLabel = var11;
                var17 = var13 == var15;
                var11 = undefined;
                if (var17) {
                    _fun76139_ip = 550;
                    continue _fun76139
                }
            case 544:
                var11 = var15.reasons;
            case 550:
                if (!(var13 == var11)) {
                    _fun76139_ip = 558;
                    continue _fun76139
                }
            case 554:
                var11 = new Array(0);
            case 558:
                var1.reasons = var11;
                if (!(var13 == var15)) {
                    _fun76139_ip = 576;
                    continue _fun76139
                }
            case 567:
                var11 = function() { // Environment: var18
                    var0 = undefined;
                    return var0;
                };
                _fun76139_ip = 582;
                continue _fun76139;
            case 576:
                var11 = var15.onFeedbackShown;
            case 582:
                var1.trackOpen = var11;
                var1.onFeedbackChanged = var7;
                var1 = var10.bind(var3)(var2, var1);
                _fun76139_ip = 720;
                continue _fun76139;
            case 600:
                var2 = 11;
                var2 = var22[var2];
                var2 = var20.bind(var3)(var2);
                var7 = var2.Text;
                var2 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'text-brand'
                };
                var15 = var16.centerText;
                var11 = new Array(2);
                var11[0] = var15;
                var15 = var16.thanks;
                var11[1] = var15;
                var2.style = var11;
                var11 = 14;
                var15 = var22[var11];
                var15 = var20.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var11 = var22[var11];
                var11 = var20.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.kZbFIO;
                var11 = var15.bind(var17)(var11);
                var2.children = var11;
                var1 = var10.bind(var3)(var7, var2);
            case 720:
                var21 = var1;
            case 723:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = var1.bottom;
                var4 = 0;
                if (!var0) {
                    _fun76139_ip = 769;
                    continue _fun76139
                }
            case 757:
                var1 = 148;
                if (!var6) {
                    _fun76139_ip = 766;
                    continue _fun76139
                }
            case 763:
                var1 = 64;
            case 766:
                var4 = var1;
            case 769:
                var1 = 316;
                var1 = var1 + var4;
                var4 = var1 + var2;
                var6 = !var0;
                if (!var0) {
                    _fun76139_ip = 798;
                    continue _fun76139
                }
            case 789:
                var0 = _closure1_slot16;
                var6 = var0.bind(var3)(var14);
            case 798:
                if (var6) {
                    _fun76139_ip = 820;
                    continue _fun76139
                }
            case 801:
                var1 = var13 == var14;
                var0 = undefined;
                if (var1) {
                    _fun76139_ip = 816;
                    continue _fun76139
                }
            case 810:
                var0 = var14.rating;
            case 816:
                var6 = var13 == var0;
            case 820:
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 17;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var7 = true;
                var0.scrollable = var7;
                var0.ref = var5;
                var5 = undefined;
                if (!var6) {
                    _fun76139_ip = 871;
                    continue _fun76139
                }
            case 868:
                var5 = var4;
            case 871:
                var0.contentHeight = var5;
                var0.startHeight = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 18;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var7 = var16.contentContainer;
                var4.contentContainerStyle = var7;
                var7 = undefined;
                if (!var9) {
                    _fun76139_ip = 932;
                    continue _fun76139
                }
            case 929:
                var7 = var8;
            case 932:
                var4.onLayout = var7;
                var9 = _closure1_slot12;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = {};
                var11 = var16.header;
                var10.style = var11;
                var17 = _closure1_slot11;
                var15 = _closure1_slot15;
                var11 = {};
                var11.guild = var19;
                var11 = var17.bind(var3)(var15, var11);
                var15 = new Array(3);
                var15[0] = var11;
                var20 = _closure1_slot11;
                var26 = _closure1_slot0;
                var31 = _closure1_slot2;
                var11 = 11;
                var11 = var31[var11];
                var11 = var26.bind(var3)(var11);
                var17 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var16.headerTitle;
                var11.style = var19;
                var19 = 14;
                var22 = var31[var19];
                var22 = var26.bind(var3)(var22);
                var27 = var22.intl;
                var24 = var27.string;
                var22 = var31[var19];
                var22 = var26.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.o8Bypv;
                var22 = var24.bind(var27)(var22);
                var11.children = var22;
                var11 = var20.bind(var3)(var17, var11);
                var15[1] = var11;
                var22 = _closure1_slot11;
                var11 = 19;
                var17 = var31[var11];
                var17 = var26.bind(var3)(var17);
                var20 = var17.TextWithIOSLinkWorkaround;
                var17 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var24 = var16.centerText;
                var17.style = var24;
                var24 = var31[var19];
                var24 = var26.bind(var3)(var24);
                var28 = var24.intl;
                var27 = var28.format;
                var24 = var31[var19];
                var24 = var26.bind(var3)(var24);
                var24 = var24.t;
                var26 = var24.enfuur;
                var24 = {};
                var30 = _closure1_slot1;
                var29 = 20;
                var29 = var31[var29];
                var31 = var30.bind(var3)(var29);
                var30 = var31.getArticleURL;
                var29 = _closure1_slot8;
                var29 = var29.HIGHLIGHTS_NOTIFICATIONS;
                var29 = var30.bind(var31)(var29);
                var24.helpUrl = var29;
                var24 = var27.bind(var28)(var26, var24);
                var17.children = var24;
                var17 = var22.bind(var3)(var20, var17);
                var15[2] = var17;
                var10.children = var15;
                var15 = var9.bind(var3)(var8, var10);
                var10 = new Array(4);
                var10[0] = var15;
                var13 = var13 != var21;
                if (!var13) {
                    _fun76139_ip = 1331;
                    continue _fun76139
                }
            case 1280:
                var20 = _closure1_slot11;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var15 = 21;
                var15 = var22[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.View;
                var15 = {};
                var22 = var16.feedback;
                var15.style = var22;
                var15.children = var21;
                var13 = var20.bind(var3)(var17, var15);
            case 1331:
                var10[1] = var13;
                var13 = _closure1_slot17;
                var14 = var13.bind(var3)(var14);
                var13 = !var14;
                if (var14) {
                    _fun76139_ip = 1536;
                    continue _fun76139
                }
            case 1353:
                var17 = _closure1_slot11;
                var28 = _closure1_slot0;
                var24 = _closure1_slot2;
                var14 = 22;
                var14 = var24[var14];
                var14 = var28.bind(var3)(var14);
                var15 = var14.Card;
                var14 = {
                    'style': null,
                    'shadow': 'low',
                    'border': 'subtle'
                };
                var20 = var16.settings;
                var14.style = var20;
                var22 = _closure1_slot11;
                var20 = 23;
                var20 = var24[var20];
                var20 = var28.bind(var3)(var20);
                var21 = var20.FormSwitchRow;
                var20 = {};
                var20.disabled = var23;
                var26 = var24[var19];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var24 = var24[var19];
                var24 = var28.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.MVi7LQ;
                var24 = var26.bind(var27)(var24);
                var20.label = var24;
                if (var23) {
                    _fun76139_ip = 1504;
                    continue _fun76139
                }
            case 1490:
                var24 = _closure1_slot9;
                var24 = var24.DISABLED;
                var23 = var25 === var24;
            case 1504:
                var20.value = var23;
                var23 = function(arg0) { // Original name: onValueChange, environment: var18
                    _fun76147: for (var _fun76147_ip = 0;;) switch (_fun76147_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 24;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.updateGuildNotificationSettings;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var8 = _closure1_slot9;
                            if (var1) {
                                _fun76147_ip = 58;
                                continue _fun76147
                            }
                        case 50:
                            var7 = var8.ENABLED;
                            _fun76147_ip = 64;
                            continue _fun76147;
                        case 58:
                            var7 = var8.DISABLED;
                        case 64:
                            var2.notify_highlights = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.NotificationLabel;
                            var6 = var7.highlights;
                            var1 = !var1;
                            var1 = var6.bind(var7)(var1);
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var20.onValueChange = var23;
                var20 = var22.bind(var3)(var21, var20);
                var14.children = var20;
                var13 = var17.bind(var3)(var15, var14);
            case 1536:
                var10[2] = var13;
                var13 = _closure1_slot11;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = var14[var11];
                var11 = var15.bind(var3)(var11);
                var12 = var11.TextWithIOSLinkWorkaround;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var16 = var16.centerText;
                var11.style = var16;
                var16 = var14[var19];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var14[var19];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14.F9rfLX;
                var14 = {};
                var18 = function() { // Original name: notifSettingsHook, environment: var18
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 26;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14.notifSettingsHook = var18;
                var14 = var16.bind(var17)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[3] = var11;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 4260, 660, 9665, 33, 1297, 671, 7353, 3895, 9666, 632, 1234, 9667, 1568, 4887, 4889, 5289, 1675, 3677, 4856, 5335, 4654, 4651, 3237, 2]);