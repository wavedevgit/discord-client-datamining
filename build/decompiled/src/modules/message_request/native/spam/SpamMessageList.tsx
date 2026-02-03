// modules/message_request/native/spam/SpamMessageList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun109550: for (var _fun109550_ip = 0;;) switch (_fun109550_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.messageRequest;
                var1 = var0.goToMessageRequestPreview;
                var _closure2_slot0 = var1;
                var7 = var0.isLastRow;
                var0 = var0.hasSingleMessageRequest;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot10;
                var3 = undefined;
                var22 = var1.bind(var3)();
                var29 = var13.user;
                var _closure2_slot2 = var29;
                var10 = var13.channel;
                var _closure2_slot3 = var10;
                var11 = var10.id;
                var _closure2_slot4 = var11;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 7;
                var5 = var2[var5];
                var9 = var1.bind(var3)(var5);
                var8 = var9.useLongestChannelMessageBeforeReply;
                var5 = var10.getRecipientId;
                var5 = var5.bind(var10)();
                var5 = var8.bind(var9)(var11, var5);
                var _closure2_slot5 = var5;
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var8 = function() { // Environment: var4
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = 'MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE';
                    var1.key = var7;
                    var9 = _closure1_slot0;
                    var4 = 6;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.pIQ3h4;
                    var4 = var7.bind(var8)(var4);
                    var1.content = var4;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = new Array(0);
                var5 = var9.bind(var10)(var8, var5);
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var0;
                var0 = function() { // Environment: var4
                    _fun109552: for (var _fun109552_ip = 0;;) switch (_fun109552_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun109552_ip = 76;
                                continue _fun109552
                            }
                        case 10:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var4 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.transitionToChannel;
                            var1 = _closure2_slot4;
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure1_slot1;
                            var0 = 11;
                            var0 = var3[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var0, var8);
                var0 = 12;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useMessageRequestActions;
                var0 = {};
                var0.user = var29;
                var0.onAcceptSuccess = var8;
                var0.onError = var5;
                var0 = var1.bind(var2)(var0);
                var1 = var0.rejectMessageRequest;
                var _closure2_slot6 = var1;
                var26 = var0.isAcceptLoading;
                var19 = var0.isRejectLoading;
                var24 = var0.isUserProfileLoading;
                var23 = var0.isOptimisticAccepted;
                var18 = var0.isOptimisticRejected;
                var0 = var0.markAsNotSpam;
                var _closure2_slot7 = var0;
                var21 = function() {
                    var2 = _closure2_slot6;
                    var0 = _closure2_slot3;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot8 = var21;
                var28 = function() {
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var _closure2_slot9 = var28;
                var8 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.track;
                    var1 = _closure1_slot7;
                    var3 = var1.MESSAGE_REQUEST_PREVIEW_VIEWED;
                    var2 = {};
                    var1 = true;
                    var2.is_spam = var1;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var2.channel_id = var6;
                    var6 = _closure2_slot2;
                    var6 = var6.id;
                    var2.other_user_id = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var _closure2_slot10 = var8;
                var20 = var26;
                if (var20) {
                    _fun109550_ip = 314;
                    continue _fun109550
                }
            case 311:
                var20 = var19;
            case 314:
                if (var20) {
                    _fun109550_ip = 320;
                    continue _fun109550
                }
            case 317:
                var20 = var24;
            case 320:
                if (var20) {
                    _fun109550_ip = 326;
                    continue _fun109550
                }
            case 323:
                var20 = var23;
            case 326:
                if (var20) {
                    _fun109550_ip = 332;
                    continue _fun109550
                }
            case 329:
                var20 = var18;
            case 332:
                var2 = _closure1_slot9;
                var30 = _closure1_slot0;
                var5 = _closure1_slot2;
                var15 = 14;
                var0 = var5[var15];
                var0 = var30.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var8;
                var25 = 'button';
                var0.accessibilityRole = var25;
                var9 = {};
                var8 = _closure1_slot11;
                var8 = var8.ACCEPT_SPAM_MESSAGE;
                var9.name = var8;
                var27 = 6;
                var8 = var5[var27];
                var8 = var30.bind(var3)(var8);
                var11 = var8.intl;
                var10 = var11.string;
                var8 = var5[var27];
                var8 = var30.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.apePSa;
                var8 = var10.bind(var11)(var8);
                var9.label = var8;
                var8 = new Array(3);
                var8[0] = var9;
                var9 = {};
                var10 = _closure1_slot11;
                var10 = var10.IGNORE_SPAM_MESSAGE;
                var9.name = var10;
                var10 = var5[var27];
                var10 = var30.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var5[var27];
                var10 = var30.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.MWOV9D;
                var10 = var11.bind(var12)(var10);
                var9.label = var10;
                var8[1] = var9;
                var9 = {};
                var10 = _closure1_slot11;
                var10 = var10.PREVIEW_SPAM_MESSAGE;
                var9.name = var10;
                var10 = var5[var27];
                var10 = var30.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var5[var27];
                var10 = var30.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.I6PFLB;
                var10 = var11.bind(var12)(var10);
                var9.label = var10;
                var8[2] = var9;
                var0.accessibilityActions = var8;
                var4 = function arg0() {
                    _fun109556: for (var _fun109556_ip = 0;;) switch (_fun109556_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var2 = _closure1_slot11;
                            var2 = var2.ACCEPT_SPAM_MESSAGE;
                            if (!(var2 !== var1)) {
                                _fun109556_ip = 94;
                                continue _fun109556
                            }
                        case 32:
                            var2 = _closure1_slot11;
                            var2 = var2.IGNORE_SPAM_MESSAGE;
                            if (!(var2 !== var1)) {
                                _fun109556_ip = 79;
                                continue _fun109556
                            }
                        case 46:
                            var0 = _closure1_slot11;
                            var0 = var0.PREVIEW_SPAM_MESSAGE;
                            if (!(var0 !== var1)) {
                                _fun109556_ip = 64;
                                continue _fun109556
                            }
                        case 60:
                            var0 = undefined;
                            return var0;
                        case 64:
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        case 79:
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        case 94:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var0.onAccessibilityAction = var4;
                var4 = var22.pressableRow;
                var0.style = var4;
                var9 = _closure1_slot9;
                var8 = _closure1_slot5;
                var4 = {};
                var10 = var22.rowContainer;
                var4.style = var10;
                var12 = _closure1_slot8;
                var11 = _closure1_slot1;
                var10 = 15;
                var10 = var5[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var14 = var13.channel;
                var10.channel = var14;
                var13 = var13.user;
                var10.otherUser = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot9;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var22.actionContainer;
                var11.style = var14;
                var17 = _closure1_slot8;
                var14 = var5[var15];
                var14 = var30.bind(var3)(var14);
                var16 = var14.PressableOpacity;
                var14 = {};
                var14.accessibilityRole = var25;
                var31 = var5[var27];
                var31 = var30.bind(var3)(var31);
                var33 = var31.intl;
                var32 = var33.formatToPlainString;
                var5 = var5[var27];
                var5 = var30.bind(var3)(var5);
                var5 = var5.t;
                var31 = var5["6p0yBo"];
                var30 = {};
                var5 = null;
                var35 = var5 == var29;
                var34 = undefined;
                if (var35) {
                    _fun109550_ip = 801;
                    continue _fun109550
                }
            case 792:
                var35 = var29.toString;
                var34 = var35.bind(var29)();
            case 801:
                var30.name = var34;
                var30 = var32.bind(var33)(var31, var30);
                var14.accessibilityLabel = var30;
                var14.onPress = var28;
                var14.disabled = var20;
                var30 = var22.actionButton;
                var28 = new Array(2);
                var28[0] = var30;
                var30 = var22.acceptButton;
                var28[1] = var30;
                var14.style = var28;
                if (var26) {
                    _fun109550_ip = 942;
                    continue _fun109550
                }
            case 854:
                if (var24) {
                    _fun109550_ip = 942;
                    continue _fun109550
                }
            case 857:
                if (var23) {
                    _fun109550_ip = 942;
                    continue _fun109550
                }
            case 860:
                var26 = _closure1_slot8;
                var30 = _closure1_slot1;
                var31 = _closure1_slot2;
                var28 = 16;
                var23 = var31[var28];
                var24 = var30.bind(var3)(var23);
                var23 = {};
                var28 = var31[var28];
                var28 = var30.bind(var3)(var28);
                var28 = var28.Sizes;
                var28 = var28.SMALL;
                var23.size = var28;
                var28 = true;
                var23.disableColor = var28;
                var28 = 17;
                var28 = var31[var28];
                var28 = var30.bind(var3)(var28);
                var23.source = var28;
                var23 = var26.bind(var3)(var24, var23);
                _fun109550_ip = 968;
                continue _fun109550;
            case 942:
                var28 = _closure1_slot8;
                var26 = _closure1_slot4;
                var24 = {};
                var30 = var22.activityIndicator;
                var24.style = var30;
                var23 = var28.bind(var3)(var26, var24);
            case 968:
                var14.children = var23;
                var16 = var17.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var17 = _closure1_slot8;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var15 = var23[var15];
                var15 = var24.bind(var3)(var15);
                var16 = var15.PressableOpacity;
                var15 = {};
                var15.accessibilityRole = var25;
                var25 = var23[var27];
                var25 = var24.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.formatToPlainString;
                var23 = var23[var27];
                var23 = var24.bind(var3)(var23);
                var23 = var23.t;
                var24 = var23["C9Xe6+"];
                var23 = {};
                var28 = var5 == var29;
                var27 = undefined;
                if (var28) {
                    _fun109550_ip = 1078;
                    continue _fun109550
                }
            case 1069:
                var28 = var29.toString;
                var27 = var28.bind(var29)();
            case 1078:
                var23.name = var27;
                var23 = var25.bind(var26)(var24, var23);
                var15.accessibilityLabel = var23;
                var15.onPress = var21;
                var15.disabled = var20;
                var20 = var22.actionButton;
                var15.style = var20;
                if (var19) {
                    _fun109550_ip = 1198;
                    continue _fun109550
                }
            case 1113:
                if (var18) {
                    _fun109550_ip = 1198;
                    continue _fun109550
                }
            case 1116:
                var20 = _closure1_slot8;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 16;
                var18 = var24[var21];
                var19 = var23.bind(var3)(var18);
                var18 = {};
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var21 = var21.Sizes;
                var21 = var21.SMALL;
                var18.size = var21;
                var21 = true;
                var18.disableColor = var21;
                var21 = 18;
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var18.source = var21;
                var18 = var20.bind(var3)(var19, var18);
                _fun109550_ip = 1224;
                continue _fun109550;
            case 1198:
                var21 = _closure1_slot8;
                var20 = _closure1_slot4;
                var19 = {};
                var22 = var22.activityIndicator;
                var19.style = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 1224:
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var4.children = var10;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = null;
                if (var7) {
                    _fun109550_ip = 1325;
                    continue _fun109550
                }
            case 1275:
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 19;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.FormDivider;
                var6 = {
                    'iconPush': true,
                    'outer': true
                };
                var5 = var8.bind(var3)(var7, var6);
            case 1325:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.FlatList;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginTop': 6,
        'marginBottom': 10
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.sectionContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'marginTop': 14,
        'marginBottom': 12
    };
    var3.rowContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'height': '100%'
    };
    var3.actionContainer = var8;
    var8 = {
        'backgroundColor': null,
        'tintColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 32,
        'width': 32
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.actionButton = var8;
    var8 = {};
    var11 = 16;
    var8.marginRight = var11;
    var3.acceptButton = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.pressableRow = var8;
    var8 = {
        'height': 16,
        'width': 16
    };
    var3.activityIndicator = var8;
    var8 = {
        'flex': 1,
        'paddingHorizontal': 16,
        'alignSelf': 'stretch'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.list = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'accept-spam-message-request';
    var3.ACCEPT_SPAM_MESSAGE = var6;
    var6 = 'ignore-spam-message-request';
    var3.IGNORE_SPAM_MESSAGE = var6;
    var6 = 'preview-spam-message-request';
    var3.PREVIEW_SPAM_MESSAGE = var6;
    var _closure1_slot11 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/native/spam/SpamMessageList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109557: for (var _fun109557_ip = 0;;) switch (_fun109557_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.goToMessageRequestPreview;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot10;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var _closure2_slot1 = var7;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 20;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var8 = var0.bottom;
                var9 = _closure1_slot0;
                var0 = 21;
                var0 = var5[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useSpamMessageRequestCount;
                var0 = var0.bind(var1)();
                var _closure2_slot2 = var0;
                var0 = 22;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var1 = var0.bind(var3)();
                var _closure2_slot3 = var1;
                var0 = 23;
                var0 = var5[var0];
                var9 = var9.bind(var3)(var0);
                var0 = var9.useListHasSingleSpamMessageRequest;
                var0 = var0.bind(var9)();
                var _closure2_slot4 = var0;
                var0 = 24;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 13;
                    var1 = var6[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var5 = var7.track;
                    var1 = _closure1_slot7;
                    var3 = var1.SPAM_MESSAGE_REQUESTS_VIEWED;
                    var1 = {};
                    var8 = _closure2_slot2;
                    var1.num_spam_message_requests = var8;
                    var1 = var5.bind(var7)(var3, var1);
                    var1 = 25;
                    var1 = var6[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.increment;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 26;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.MetricEvents;
                    var4 = var4.SPAM_MESSAGE_REQUEST_VIEW;
                    var1.name = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = var1.length;
                var10 = 0;
                if (!(var10 !== var0)) {
                    _fun109557_ip = 339;
                    continue _fun109557
                }
            case 175:
                var5 = ['header-section'];
                var14 = 1;
                var16 = var5;
                var15 = var1;
                var0 = arraySpread(var16, var15, var14);
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var9 = var7.list;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 28;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                var10 = 0;
                if (!var11) {
                    _fun109557_ip = 262;
                    continue _fun109557
                }
            case 259:
                var10 = var8;
            case 262:
                var9.marginBottom = var10;
                var7[1] = var9;
                var0.style = var7;
                var7 = {};
                var9 = 0.01;
                var7.right = var9;
                var0.scrollIndicatorInsets = var7;
                var7 = {};
                var7.paddingBottom = var8;
                var8 = 12;
                var7.paddingTop = var8;
                var0.contentContainerStyle = var7;
                var6 = function arg0() {
                    _fun109559: for (var _fun109559_ip = 0;;) switch (_fun109559_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.item;
                            var _closure3_slot0 = var0;
                            var3 = 'string';
                            var2 = typeof var0;
                            if (!(var3 !== var2)) {
                                _fun109559_ip = 154;
                                continue _fun109559
                            }
                        case 28:
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot12;
                            var2 = {};
                            var2.messageRequest = var0;
                            var1 = function() {
                                var2 = _closure2_slot0;
                                var0 = _closure3_slot0;
                                var0 = var0.channel;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.goToMessageRequestPreview = var1;
                            var1 = var0.channel;
                            var7 = var1.id;
                            var6 = _closure2_slot3;
                            var8 = var6.length;
                            var1 = 1;
                            var1 = var8 - var1;
                            var8 = var6[var1];
                            var1 = null;
                            var9 = var1 == var8;
                            var1 = undefined;
                            var6 = undefined;
                            if (var9) {
                                _fun109559_ip = 114;
                                continue _fun109559
                            }
                        case 104:
                            var8 = var8.channel;
                            var6 = var8.id;
                        case 114:
                            var6 = var7 === var6;
                            var2.isLastRow = var6;
                            var5 = _closure2_slot4;
                            var2.hasSingleMessageRequest = var5;
                            var0 = var0.channel;
                            var0 = var0.id;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            _fun109559_ip = 315;
                            continue _fun109559;
                        case 154:
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.sectionContainer;
                            var2.style = var5;
                            var7 = _closure1_slot8;
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var1 = 29;
                            var5 = var13[var1];
                            var1 = undefined;
                            var5 = var9.bind(var1)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'eyebrow',
                                'color': 'text-default'
                            };
                            var8 = 6;
                            var10 = var13[var8];
                            var10 = var9.bind(var1)(var10);
                            var11 = var10.intl;
                            var10 = var11.format;
                            var8 = var13[var8];
                            var8 = var9.bind(var1)(var8);
                            var8 = var8.t;
                            var9 = var8.aNh5Kf;
                            var8 = {};
                            var12 = _closure2_slot3;
                            var12 = var12.length;
                            var8.count = var12;
                            var8 = var10.bind(var11)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var1)(var6, var5);
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 315:
                            return var0;
                    }
                };
                var0.renderItem = var6;
                var0.data = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 339:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 27;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = _closure1_slot0;
                var4 = 6;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.hasFPQ;
                var4 = var5.bind(var6)(var4);
                var0.bodyText = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1234, 11772, 3148, 7457, 3943, 4561, 11764, 795, 4902, 14085, 4086, 7947, 10550, 5378, 1568, 14093, 14100, 14091, 4103, 4261, 4266, 14094, 478, 3941, 2]);