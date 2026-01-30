// modules/chat/native/ChatView.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecord;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.jsxs;
    var _closure1_slot10 = var7;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var12;
    var10 = var10.hairlineWidth;
    var9.borderTopWidth = var10;
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderTopColor = var12;
    var3.empty = var9;
    var9 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.messages = var9;
    var9 = {
        'backgroundColor': null,
        'justifyContent': 'flex-start',
        'overflow': 'hidden',
        'flex': 1
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.chat = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChatView, environment: var1
        _fun76639: for (var _fun76639_ip = 0;;) switch (_fun76639_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.alwaysRespectKeyboard;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun76639_ip = 19;
                    continue _fun76639
                }
            case 17:
                var0 = false;
            case 19:
                var _closure2_slot0 = var0;
                var13 = var1.channelId;
                var _closure2_slot1 = var13;
                var7 = var1.chatInputRef;
                var _closure2_slot2 = var7;
                var11 = var1.disableGradient;
                if (!(var11 === var3)) {
                    _fun76639_ip = 54;
                    continue _fun76639
                }
            case 52:
                var11 = false;
            case 54:
                var14 = var1.guildId;
                var2 = var1.HACK_fixModalInteraction;
                var _closure2_slot3 = var2;
                var2 = var1.screenIndex;
                var _closure2_slot4 = var2;
                var2 = var1.secondaryTextFieldRef;
                var _closure2_slot5 = var2;
                var1 = var1.setNoExtractUI;
                var _closure2_slot6 = var1;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
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
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var1 = _closure1_slot12;
                var12 = var1.bind(var3)();
                _closure2_slot7 = var12;
                var17 = _closure1_slot3;
                var2 = var17.useEffect;
                var1 = new Array(2);
                var1[0] = var13;
                var1[1] = var0;
                var0 = function() { // Environment: var5
                    _fun76640: for (var _fun76640_ip = 0;;) switch (_fun76640_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun76640_ip = 45;
                                continue _fun76640
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.dismissKeyboard;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var17)(var0, var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var18 = 11;
                var0 = var4[var18];
                var9 = var2.bind(var3)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var8.bind(var9)(var1, var0);
                _closure2_slot8 = var0;
                var8 = var17.useMemo;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var13;
                var0 = function() { // Environment: var5
                    _fun76642: for (var _fun76642_ip = 0;;) switch (_fun76642_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot8;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun76642_ip = 21;
                                continue _fun76642
                            }
                        case 15:
                            var3 = _closure2_slot8;
                            _fun76642_ip = 118;
                            continue _fun76642;
                        case 21:
                            var6 = _closure1_slot5;
                            var5 = {};
                            var7 = _closure2_slot1;
                            var5.id = var7;
                            var7 = _closure1_slot8;
                            var7 = var7.GUILD_TEXT;
                            var5.type = var7;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 12;
                            var8 = var11[var7];
                            var4 = undefined;
                            var8 = var10.bind(var4)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var4)(var7);
                            var7 = var7.t;
                            var7 = var7.ZTNur7;
                            var7 = var8.bind(var9)(var7);
                            var5.name = var7;
                            var3 = var6.bind(var4)(var5);
                        case 118:
                            var0.channel = var3;
                            var1 = _closure2_slot8;
                            var1 = var2 == var1;
                            var0.channelIsLoading = var1;
                            return var0;
                    }
                };
                var0 = var8.bind(var17)(var0, var1);
                var10 = var0.channelIsLoading;
                var15 = var0.channel;
                _closure2_slot9 = var15;
                var0 = 13;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useIsChannelContentGated;
                var9 = var0.bind(var1)(var15);
                var0 = var4[var18];
                var19 = var2.bind(var3)(var0);
                var16 = var19.useStateFromStores;
                var0 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var0;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot4;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var16.bind(var19)(var8, var1, var0);
                _closure2_slot10 = var0;
                var0 = var17.useRef;
                var0 = var0.bind(var17)(var13);
                _closure2_slot11 = var0;
                var0 = var17.useRef;
                var8 = null;
                var0 = var0.bind(var17)(var8);
                _closure2_slot12 = var0;
                var1 = var17.useRef;
                var1 = var1.bind(var17)(var8);
                _closure2_slot13 = var1;
                var1 = _closure1_slot1;
                var16 = 14;
                var16 = var4[var16];
                var19 = var1.bind(var3)(var16);
                var16 = function() { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var16 = var19.bind(var3)(var16);
                _closure2_slot14 = var16;
                var16 = 16;
                var16 = var4[var16];
                var16 = var1.bind(var3)(var16);
                var16 = var16.bind(var3)(var13);
                _closure2_slot15 = var16;
                var18 = var4[var18];
                var21 = var2.bind(var3)(var18);
                var20 = var21.useStateFromStoresObject;
                var18 = _closure1_slot7;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = new Array(2);
                var18[0] = var13;
                var18[1] = var16;
                var16 = function() { // Environment: var5
                    _fun76645: for (var _fun76645_ip = 0;;) switch (_fun76645_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var1 = var3.getMessages;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var4 = var1.length;
                            var3 = 0;
                            var3 = var3 === var4;
                            if (!var3) {
                                _fun76645_ip = 62;
                                continue _fun76645
                            }
                        case 41:
                            var4 = var1.loadingMore;
                            if (var4) {
                                _fun76645_ip = 59;
                                continue _fun76645
                            }
                        case 50:
                            var5 = var1.ready;
                            var4 = !var5;
                        case 59:
                            var3 = var4;
                        case 62:
                            var0.shouldRenderPlaceholder = var3;
                            var1 = var1.hasMoreBefore;
                            var1 = !var1;
                            if (!var1) {
                                _fun76645_ip = 86;
                                continue _fun76645
                            }
                        case 79:
                            var2 = _closure2_slot15;
                            var1 = !var2;
                        case 86:
                            var0.shouldRenderBegginingRow = var1;
                            return var0;
                    }
                };
                var16 = var20.bind(var21)(var19, var16, var18);
                var18 = var16.shouldRenderPlaceholder;
                _closure2_slot16 = var18;
                var16 = var16.shouldRenderBegginingRow;
                _closure2_slot17 = var16;
                var19 = var17.useCallback;
                var18 = function(arg0) { // Environment: var5
                    _fun76646: for (var _fun76646_ip = 0;;) switch (_fun76646_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun76646_ip = 32;
                                continue _fun76646
                            }
                        case 18:
                            var1 = var2.onChatViewScrolled;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = new Array(0);
                var16 = var19.bind(var17)(var18, var16);
                _closure2_slot18 = var16;
                var18 = var17.useCallback;
                var16 = new Array(1);
                var16[0] = var7;
                var7 = function(arg0) { // Environment: var5
                    _fun76647: for (var _fun76647_ip = 0;;) switch (_fun76647_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var2 = var0.keyCommand;
                            var0 = _closure2_slot2;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun76647_ip = 46;
                                continue _fun76647
                            }
                        case 35:
                            var0 = var1.handlePressKey;
                            var0 = var0.bind(var1)(var2);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var18.bind(var17)(var7, var16);
                _closure2_slot19 = var7;
                var18 = var17.useCallback;
                var16 = new Array(1);
                var16[0] = var0;
                var7 = function() { // Environment: var5
                    _fun76648: for (var _fun76648_ip = 0;;) switch (_fun76648_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun76648_ip = 28;
                                continue _fun76648
                            }
                        case 18:
                            var0 = var1.scrollToNewMessages;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var18.bind(var17)(var7, var16);
                _closure2_slot20 = var7;
                var16 = var17.useCallback;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var5
                    _fun76649: for (var _fun76649_ip = 0;;) switch (_fun76649_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun76649_ip = 28;
                                continue _fun76649
                            }
                        case 18:
                            var0 = var1.jumpToPresent;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var16.bind(var17)(var0, var7);
                _closure2_slot21 = var0;
                var16 = var17.useLayoutEffect;
                var7 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.trackAppUIViewed;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var16.bind(var17)(var7, var0);
                var16 = var17.useEffect;
                var7 = new Array(1);
                var7[0] = var13;
                var0 = function() { // Environment: var5
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 18;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.loadThread;
                    var3 = _closure2_slot1;
                    var2 = var2.bind(var5)(var3);
                    var2 = _closure1_slot0;
                    var1 = 19;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchSummaries;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var0 = var16.bind(var17)(var0, var7);
                var16 = var17.useEffect;
                var0 = var15.id;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var5
                    var1 = _closure2_slot11;
                    var0 = _closure2_slot9;
                    var0 = var0.id;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var16.bind(var17)(var0, var7);
                var16 = var17.useEffect;
                var7 = function() { // Environment: var5
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 20;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.clearOldestUnreadMessageId;
                        var1 = _closure2_slot11;
                        var1 = var1.current;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var16.bind(var17)(var7, var0);
                var0 = 21;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsMessagesFunctionalComponentEnabled;
                var0 = var0.bind(var2)();
                var4 = _closure1_slot2;
                if (var0) {
                    _fun76639_ip = 808;
                    continue _fun76639
                }
            case 799:
                var0 = 23;
                var0 = var4[var0];
                _fun76639_ip = 815;
                continue _fun76639;
            case 808:
                var2 = 22;
                var0 = var4[var2];
            case 815:
                var0 = var1.bind(var3)(var0);
                _closure2_slot22 = var0;
                var7 = function() { // Original name: renderMessagesWrapper, environment: var5
                    _fun76655: for (var _fun76655_ip = 0;;) switch (_fun76655_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot11;
                            var1 = {};
                            var16 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 24;
                            var4 = var11[var0];
                            var0 = undefined;
                            var6 = var16.bind(var0)(var4);
                            var4 = {};
                            var7 = _closure2_slot7;
                            var7 = var7.messages;
                            var4.style = var7;
                            var17 = _closure2_slot1;
                            var4.channelId = var17;
                            var10 = _closure1_slot9;
                            var7 = 25;
                            var7 = var11[var7];
                            var9 = var16.bind(var0)(var7);
                            var7 = {};
                            var12 = _closure2_slot9;
                            var7.channel = var12;
                            var12 = _closure2_slot13;
                            var7.ref = var12;
                            var12 = _closure2_slot20;
                            var7.scrollToNewMessages = var12;
                            var7 = var10.bind(var0)(var9, var7);
                            var4.stickyHeader = var7;
                            var7 = 26;
                            var7 = var11[var7];
                            var9 = var16.bind(var0)(var7);
                            var7 = {};
                            var13 = _closure2_slot22;
                            var12 = {};
                            var14 = _closure2_slot0;
                            var12.alwaysRespectKeyboard = var14;
                            var14 = _closure2_slot9;
                            var12.channel = var14;
                            var18 = _closure2_slot4;
                            var12.screenIndex = var18;
                            var19 = _closure2_slot2;
                            var12.chatInputRef = var19;
                            var14 = _closure2_slot3;
                            var12.HACK_fixModalInteraction = var14;
                            var14 = _closure2_slot15;
                            var12.isResourceChannel = var14;
                            var14 = _closure2_slot19;
                            var12.onPressKey = var14;
                            var14 = _closure2_slot18;
                            var12.onScroll = var14;
                            var14 = _closure2_slot12;
                            var12.ref = var14;
                            var14 = _closure2_slot7;
                            var14 = var14.chat;
                            var12.style = var14;
                            var14 = _closure2_slot14;
                            var12.visibleMessagesWindowHandler = var14;
                            var14 = 27;
                            var14 = var11[var14];
                            var15 = var16.bind(var0)(var14);
                            var14 = {};
                            var14.ref = var19;
                            var19 = _closure2_slot9;
                            var14.channel = var19;
                            var19 = _closure2_slot15;
                            var14.isResourceChannel = var19;
                            var14.screenIndex = var18;
                            var18 = _closure2_slot5;
                            var14.secondaryTextFieldRef = var18;
                            var18 = _closure2_slot6;
                            var14.setNoExtractUI = var18;
                            var15 = var10.bind(var0)(var15, var14);
                            var14 = new Array(2);
                            var14[0] = var15;
                            var15 = 28;
                            var15 = var11[var15];
                            var16 = var16.bind(var0)(var15);
                            var15 = {};
                            var15.channelId = var17;
                            var18 = _closure2_slot9;
                            var17 = var18.getGuildId;
                            var17 = var17.bind(var18)();
                            var15.guildId = var17;
                            var17 = _closure2_slot17;
                            var15.shouldRender = var17;
                            var15 = var10.bind(var0)(var16, var15);
                            var14[1] = var15;
                            var12.children = var14;
                            var12 = var3.bind(var0)(var13, var12);
                            var7.children = var12;
                            var9 = var10.bind(var0)(var9, var7);
                            var7 = new Array(4);
                            var7[0] = var9;
                            var10 = _closure1_slot0;
                            var9 = 29;
                            var9 = var11[var9];
                            var10 = var10.bind(var0)(var9);
                            var9 = var10.isAndroid;
                            var11 = var9.bind(var10)();
                            var10 = null;
                            if (var11) {
                                _fun76655_ip = 478;
                                continue _fun76655
                            }
                        case 424:
                            var13 = _closure1_slot9;
                            var12 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var11 = 30;
                            var11 = var14[var11];
                            var12 = var12.bind(var0)(var11);
                            var11 = {};
                            var14 = _closure2_slot9;
                            var14 = var14.id;
                            var11.channelId = var14;
                            var14 = _closure2_slot12;
                            var11.messagesRef = var14;
                            var10 = var13.bind(var0)(var12, var11);
                        case 478:
                            var7[1] = var10;
                            var11 = _closure2_slot10;
                            var10 = null;
                            if (!var11) {
                                _fun76655_ip = 558;
                                continue _fun76655
                            }
                        case 491:
                            var11 = _closure2_slot16;
                            var10 = null;
                            if (var11) {
                                _fun76655_ip = 558;
                                continue _fun76655
                            }
                        case 500:
                            var13 = _closure1_slot9;
                            var12 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var11 = 31;
                            var11 = var14[var11];
                            var12 = var12.bind(var0)(var11);
                            var11 = {};
                            var14 = _closure2_slot1;
                            var11.channelId = var14;
                            var14 = _closure2_slot4;
                            var11.screenIndex = var14;
                            var14 = _closure2_slot21;
                            var11.didTapJump = var14;
                            var10 = var13.bind(var0)(var12, var11);
                        case 558:
                            var7[2] = var10;
                            var10 = _closure2_slot16;
                            var9 = null;
                            if (!var10) {
                                _fun76655_ip = 612;
                                continue _fun76655
                            }
                        case 571:
                            var12 = _closure1_slot9;
                            var11 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var10 = 32;
                            var10 = var13[var10];
                            var11 = var11.bind(var0)(var10);
                            var10 = {};
                            var13 = _closure2_slot4;
                            var10.screenIndex = var13;
                            var9 = var12.bind(var0)(var11, var10);
                        case 612:
                            var7[3] = var9;
                            var4.children = var7;
                            var6 = var3.bind(var0)(var6, var4);
                            var4 = new Array(3);
                            var4[0] = var6;
                            var7 = _closure1_slot9;
                            var6 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 33;
                            var5 = var9[var5];
                            var10 = var6.bind(var0)(var5);
                            var5 = {};
                            var8 = _closure2_slot1;
                            var5.channelId = var8;
                            var5 = var7.bind(var0)(var10, var5);
                            var4[1] = var5;
                            var5 = 34;
                            var5 = var9[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = {};
                            var5.channelId = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var2 = _closure1_slot10;
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = 35;
                var0 = var18[var4];
                var1 = var16.bind(var3)(var0);
                var0 = {};
                var17 = _closure1_slot0;
                var4 = var18[var4];
                var4 = var17.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.ChatView;
                var0.profile = var4;
                var17 = _closure1_slot9;
                var4 = 36;
                var4 = var18[var4];
                var16 = var16.bind(var3)(var4);
                var4 = {};
                var4.channelId = var13;
                var4.guildId = var14;
                var16 = var17.bind(var3)(var16, var4);
                var4 = new Array(3);
                var4[0] = var16;
                var8 = null;
                if (var11) {
                    _fun76639_ip = 971;
                    continue _fun76639
                }
            case 932:
                var17 = _closure1_slot9;
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 37;
                var11 = var18[var11];
                var16 = var16.bind(var3)(var11);
                var11 = {};
                var18 = true;
                var11.absolute = var18;
                var8 = var17.bind(var3)(var16, var11);
            case 971:
                var4[1] = var8;
                var8 = function(arg0, arg1) { // Original name: V, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setInterstitial;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = arg0;
                    return var0;
                };
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 39;
                var5 = var16[var5];
                var11 = var11.bind(var3)(var5);
                var5 = var11.shouldNSFWGateGuild;
                var5 = var5.bind(var11)(var14);
                if (var5) {
                    _fun76639_ip = 1448;
                    continue _fun76639
                }
            case 1019:
                if (!var10) {
                    _fun76639_ip = 1048;
                    continue _fun76639
                }
            case 1022:
                var11 = _closure1_slot4;
                var5 = var11.isConnected;
                var5 = var5.bind(var11)();
                if (var5) {
                    _fun76639_ip = 1048;
                    continue _fun76639
                }
            case 1039:
                var5 = var7.bind(var3)();
                _fun76639_ip = 1446;
                continue _fun76639;
            case 1048:
                if (var10) {
                    _fun76639_ip = 1262;
                    continue _fun76639
                }
            case 1054:
                if (var9) {
                    _fun76639_ip = 1202;
                    continue _fun76639
                }
            case 1060:
                var9 = var15.isDirectory;
                var9 = var9.bind(var15)();
                if (var9) {
                    _fun76639_ip = 1145;
                    continue _fun76639
                }
            case 1073:
                var9 = var15.isForumLikeChannel;
                var9 = var9.bind(var15)();
                if (var9) {
                    _fun76639_ip = 1092;
                    continue _fun76639
                }
            case 1086:
                var7 = var7.bind(var3)();
                _fun76639_ip = 1143;
                continue _fun76639;
            case 1092:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 45;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.channel = var15;
                var9 = var11.bind(var3)(var10, var9);
                var10 = 'ForumChannel';
                var10 = var8.bind(var3)(var9, var10);
                var7 = var9;
            case 1143:
                _fun76639_ip = 1200;
                continue _fun76639;
            case 1145:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 44;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.channel = var15;
                var9.guildId = var14;
                var9 = var11.bind(var3)(var10, var9);
                var10 = 'GuildDirectory';
                var10 = var8.bind(var3)(var9, var10);
                var7 = var9;
            case 1200:
                _fun76639_ip = 1257;
                continue _fun76639;
            case 1202:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 43;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.guildId = var14;
                var9.channelId = var13;
                var9 = var11.bind(var3)(var10, var9);
                var10 = 'GuildNSFW';
                var10 = var8.bind(var3)(var9, var10);
                var7 = var9;
            case 1257:
                _fun76639_ip = 1443;
                continue _fun76639;
            case 1262:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 41;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = var12.empty;
                var9.style = var12;
                var15 = _closure1_slot0;
                var12 = 42;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.EmptyChannelNoTextChannels;
                var9.Illustration = var12;
                var12 = 12;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var17 = var13.intl;
                var14 = var17.string;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.ai6Lbr;
                var13 = var14.bind(var17)(var13);
                var9.title = var13;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["LTr+x9"];
                var12 = var13.bind(var14)(var12);
                var9.body = var12;
                var9 = var11.bind(var3)(var10, var9);
                var10 = 'EmptyState';
                var10 = var8.bind(var3)(var9, var10);
                var7 = var9;
            case 1443:
                var5 = var7;
            case 1446:
                _fun76639_ip = 1495;
                continue _fun76639;
            case 1448:
                var9 = _closure1_slot9;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 40;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6 = var9.bind(var3)(var7, var6);
                var7 = 'NsfwGateChat';
                var7 = var8.bind(var3)(var6, var7);
                var5 = var6;
            case 1495:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 46;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3433, 1376, 1372, 4213, 660, 33, 1297, 671, 3677, 566, 1234, 4514, 4890, 9741, 9742, 4327, 5604, 9201, 4537, 9744, 9745, 11575, 11578, 11589, 11617, 11620, 11809, 478, 11833, 11834, 11847, 11851, 11854, 11577, 11856, 8671, 14, 8992, 11869, 7321, 11871, 11875, 11877, 11891, 2]);