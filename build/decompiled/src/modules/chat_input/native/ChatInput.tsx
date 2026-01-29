// modules/chat_input/native/ChatInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useVoiceMessagesUIStore;
    var _closure1_slot11 = var3;
    var3 = 8;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateShowingAutoComplete;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot18 = var7;
    var7 = var3.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot19 = var7;
    var3 = var3.ChatInputActionType;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot21 = var7;
    var7 = var3.ChannelTypesSets;
    var _closure1_slot22 = var7;
    var7 = var3.ChatInputComponentViewedTypes;
    var _closure1_slot23 = var7;
    var7 = var3.ComponentActions;
    var _closure1_slot24 = var7;
    var7 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot25 = var7;
    var3 = var3.Permissions;
    var _closure1_slot26 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot27 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiInteractionPoint;
    var _closure1_slot28 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaKeyboardTarget;
    var _closure1_slot29 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot30 = var7;
    var7 = var3.jsxs;
    var _closure1_slot31 = var7;
    var3 = var3.Fragment;
    var _closure1_slot32 = var3;
    var3 = 19;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun89614: for (var _fun89614_ip = 0;;) switch (_fun89614_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var1 = {
                    'position': 'absolute',
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
                var0.chatInputPosition = var1;
                var1 = {};
                var2 = 'relative';
                var1.position = var2;
                var8 = _closure1_slot1;
                var3 = _closure1_slot3;
                var7 = 20;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var1.paddingVertical = var3;
                var8 = _closure1_slot18;
                var3 = _closure1_slot19;
                var3 = var8 - var3;
                var1.paddingHorizontal = var3;
                var3 = null;
                var8 = var5;
                if (!(var3 == var8)) {
                    _fun89614_ip = 126;
                    continue _fun89614
                }
            case 98:
                var10 = _closure1_slot1;
                var9 = _closure1_slot3;
                var9 = var9[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.colors;
                var8 = var9.BACKGROUND_BASE_LOW;
            case 126:
                var1.backgroundColor = var8;
                var8 = 1;
                var1.borderTopWidth = var8;
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var10 = var8[var7];
                var10 = var9.bind(var6)(var10);
                var10 = var10.colors;
                var10 = var10.BORDER_SUBTLE;
                var1.borderColor = var10;
                var0.container = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'flex-end'
                };
                var0.containerInner = var1;
                var1 = {
                    'flex': 1,
                    'marginLeft': 6
                };
                var0.inputDefault = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'stretch',
                    'borderRadius': null,
                    'padding': 2,
                    'marginHorizontal': 4,
                    'overflow': 'hidden',
                    'flex': 1
                };
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.radii;
                var8 = var8.xl;
                var1.borderRadius = var8;
                if (!(var3 == var5)) {
                    _fun89614_ip = 287;
                    continue _fun89614
                }
            case 257:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.colors;
                var3 = var3.REDESIGN_CHAT_INPUT_BACKGROUND;
                _fun89614_ip = 315;
                continue _fun89614;
            case 287:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.colors;
                var3 = var4.CARD_SECONDARY_BG;
            case 315:
                var1.backgroundColor = var3;
                var0.input = var1;
                var1 = {
                    'flexDirection': 'column',
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'alignSelf': 'flex-end'
                };
                var0.rightAccessory = var1;
                var1 = {};
                var1.position = var2;
                var0.accessoriesContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'left': 0,
                    'right': 0,
                    'bottom': 0
                };
                var0.accessories = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun89615: for (var _fun89615_ip = 0;;) switch (_fun89615_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var _closure2_slot0 = var9;
                var13 = var1.isResourceChannel;
                var8 = var1.screenIndex;
                var47 = var1.setNoExtractUI;
                var23 = var1.secondaryTextFieldRef;
                var21 = var1.threadCreationCallback;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 21;
                var3 = var7[var2];
                var5 = var6.bind(var4)(var3);
                var3 = var5.useGradientValue;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.GradientPercentage;
                var2 = var2.END;
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot33;
                var38 = var2.bind(var4)(var3);
                var31 = null;
                var2 = var31 != var21;
                var _closure2_slot1 = var2;
                var3 = var9.isPrivate;
                var14 = var3.bind(var9)();
                if (!var14) {
                    _fun89615_ip = 156;
                    continue _fun89615
                }
            case 153:
                var14 = !var2;
            case 156:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 22;
                var7 = var5[var3];
                var12 = var6.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot14;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var0
                    _fun89616: for (var _fun89616_ip = 0;;) switch (_fun89616_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (var2) {
                                _fun89616_ip = 39;
                                continue _fun89616
                            }
                        case 12:
                            var3 = _closure1_slot14;
                            var2 = var3.getEditingTextValue;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var30 = var11.bind(var12)(var10, var7);
                _closure2_slot2 = var30;
                var7 = var5[var3];
                var12 = var6.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var0
                    _fun89617: for (var _fun89617_ip = 0;;) switch (_fun89617_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            if (var2) {
                                _fun89617_ip = 39;
                                continue _fun89617
                            }
                        case 12:
                            var3 = _closure1_slot10;
                            var2 = var3.getPendingReply;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var22 = var11.bind(var12)(var10, var7);
                _closure2_slot3 = var22;
                var7 = var5[var3];
                var12 = var6.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot16;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var0
                    _fun89618: for (var _fun89618_ip = 0;;) switch (_fun89618_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun89618_ip = 70;
                                continue _fun89618
                            }
                        case 10:
                            var3 = _closure1_slot16;
                            var2 = var3.getUploads;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = _closure1_slot13;
                            var0 = var0.ChannelMessage;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun89618_ip = 68;
                                continue _fun89618
                            }
                        case 57:
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 68:
                            return var0;
                        case 70:
                            var0 = false;
                            return var0;
                    }
                };
                var32 = var11.bind(var12)(var10, var7);
                var5 = var5[var3];
                var10 = var6.bind(var4)(var5);
                var7 = var10.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.shouldShow;
                    return var0;
                };
                var12 = var7.bind(var10)(var6, var5);
                var10 = _closure1_slot5;
                var7 = var10.useMemo;
                var5 = var9.id;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var2;
                var5 = function() { // Environment: var0
                    _fun89620: for (var _fun89620_ip = 0;;) switch (_fun89620_ip) {
                        case 0:
                            var3 = _closure1_slot12;
                            var2 = var3.getDraft;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = _closure2_slot1;
                            var4 = _closure1_slot13;
                            if (var0) {
                                _fun89620_ip = 44;
                                continue _fun89620
                            }
                        case 36:
                            var0 = var4.ChannelMessage;
                            _fun89620_ip = 50;
                            continue _fun89620;
                        case 44:
                            var0 = var4.FirstThreadMessage;
                        case 50:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var34 = var7.bind(var10)(var5, var6);
                if (!(var31 != var30)) {
                    _fun89615_ip = 377;
                    continue _fun89615
                }
            case 374:
                var34 = var30;
            case 377:
                var6 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = var11[var3];
                var15 = var6.bind(var4)(var5);
                var10 = var15.useStateFromStoresObject;
                var5 = _closure1_slot15;
                var7 = new Array(1);
                var7[0] = var5;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var2;
                var5 = function() { // Environment: var0
                    _fun89621: for (var _fun89621_ip = 0;;) switch (_fun89621_ip) {
                        case 0:
                            var6 = _closure1_slot15;
                            var5 = var6.can;
                            var1 = _closure1_slot26;
                            var2 = var1.ATTACH_FILES;
                            var3 = _closure2_slot0;
                            var7 = var5.bind(var6)(var2, var3);
                            var5 = var6.can;
                            var2 = var1.MENTION_EVERYONE;
                            var8 = var5.bind(var6)(var2, var3);
                            var5 = var6.can;
                            var2 = var1.SEND_MESSAGES;
                            var9 = var5.bind(var6)(var2, var3);
                            var5 = var6.can;
                            var2 = var1.SEND_VOICE_MESSAGES;
                            var5 = var5.bind(var6)(var2, var3);
                            var2 = var6.can;
                            var1 = var1.CREATE_PUBLIC_THREADS;
                            var1 = var2.bind(var6)(var1, var3);
                            if (var1) {
                                _fun89621_ip = 141;
                                continue _fun89621
                            }
                        case 111:
                            var10 = _closure1_slot15;
                            var6 = var10.can;
                            var2 = _closure1_slot26;
                            var3 = var2.CREATE_PRIVATE_THREADS;
                            var2 = _closure2_slot0;
                            var1 = var6.bind(var10)(var3, var2);
                        case 141:
                            var6 = _closure1_slot15;
                            var3 = var6.can;
                            var2 = _closure1_slot26;
                            var2 = var2.SEND_MESSAGES_IN_THREADS;
                            var10 = _closure2_slot0;
                            var2 = var3.bind(var6)(var2, var10);
                            var3 = var10.isPrivate;
                            var3 = var3.bind(var10)();
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var0 = 23;
                            var6 = var6[var0];
                            var0 = undefined;
                            var6 = var11.bind(var0)(var6);
                            var0 = var6.computeIsReadOnlyThread;
                            var0 = var0.bind(var6)(var10);
                            var6 = _closure2_slot1;
                            if (var6) {
                                _fun89621_ip = 233;
                                continue _fun89621
                            }
                        case 221:
                            var6 = var3;
                            if (var3) {
                                _fun89621_ip = 230;
                                continue _fun89621
                            }
                        case 227:
                            var6 = var9;
                        case 230:
                            var2 = var6;
                        case 233:
                            var2 = !var2;
                            if (var2) {
                                _fun89621_ip = 242;
                                continue _fun89621
                            }
                        case 239:
                            var2 = var0;
                        case 242:
                            var0 = {};
                            var6 = var3;
                            if (var3) {
                                _fun89621_ip = 259;
                                continue _fun89621
                            }
                        case 250:
                            if (!var8) {
                                _fun89621_ip = 256;
                                continue _fun89621
                            }
                        case 253:
                            var8 = !var2;
                        case 256:
                            var6 = var8;
                        case 259:
                            if (!var6) {
                                _fun89621_ip = 269;
                                continue _fun89621
                            }
                        case 262:
                            var8 = _closure2_slot1;
                            var6 = !var8;
                        case 269:
                            var0.canMentionEveryone = var6;
                            var6 = var3;
                            if (var3) {
                                _fun89621_ip = 283;
                                continue _fun89621
                            }
                        case 280:
                            var6 = var7;
                        case 283:
                            if (!var6) {
                                _fun89621_ip = 289;
                                continue _fun89621
                            }
                        case 286:
                            var6 = !var2;
                        case 289:
                            if (!var6) {
                                _fun89621_ip = 299;
                                continue _fun89621
                            }
                        case 292:
                            var7 = _closure2_slot1;
                            var6 = !var7;
                        case 299:
                            var0.canUpload = var6;
                            if (var3) {
                                _fun89621_ip = 310;
                                continue _fun89621
                            }
                        case 307:
                            var3 = var5;
                        case 310:
                            if (!var3) {
                                _fun89621_ip = 316;
                                continue _fun89621
                            }
                        case 313:
                            var3 = !var2;
                        case 316:
                            if (!var3) {
                                _fun89621_ip = 326;
                                continue _fun89621
                            }
                        case 319:
                            var4 = _closure2_slot1;
                            var3 = !var4;
                        case 326:
                            var0.canSendVoiceMessage = var3;
                            var2 = !var2;
                            var0.editable = var2;
                            var0.canCreateThreads = var1;
                            return var0;
                    }
                };
                var5 = var10.bind(var15)(var7, var5, var6);
                var20 = var5.canMentionEveryone;
                var33 = var5.canUpload;
                var35 = var5.canSendVoiceMessage;
                var6 = var5.editable;
                var7 = var5.canCreateThreads;
                var10 = _closure1_slot1;
                var5 = 24;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var5 = var5.bind(var4)();
                var42 = var5.analyticsLocations;
                var17 = var2;
                if (var17) {
                    _fun89615_ip = 504;
                    continue _fun89615
                }
            case 500:
                var17 = var31 != var30;
            case 504:
                if (var17) {
                    _fun89615_ip = 541;
                    continue _fun89615
                }
            case 507:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 23;
                var5 = var11[var5];
                var10 = var10.bind(var4)(var5);
                var5 = var10.getIsActiveChannelOrUnarchivableThread;
                var5 = var5.bind(var10)(var9);
                var17 = !var5;
            case 541:
                var18 = var31 != var22;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 23;
                var5 = var11[var5];
                var10 = var10.bind(var4)(var5);
                var5 = var10.useCanStartThread;
                var43 = var5.bind(var10)(var9);
                if (!var43) {
                    _fun89615_ip = 607;
                    continue _fun89615
                }
            case 579:
                var5 = _closure1_slot22;
                var11 = var5.GUILD_THREADS_ONLY;
                var10 = var11.has;
                var5 = var9.type;
                var5 = var10.bind(var11)(var5);
                var43 = !var5;
            case 607:
                if (!var43) {
                    _fun89615_ip = 613;
                    continue _fun89615
                }
            case 610:
                var43 = !var2;
            case 613:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 25;
                var5 = var11[var5];
                var10 = var10.bind(var4)(var5);
                var5 = var10.useCanPostPollsInChannel;
                var39 = var5.bind(var10)(var9);
                if (!var39) {
                    _fun89615_ip = 650;
                    continue _fun89615
                }
            case 647:
                var39 = !var2;
            case 650:
                var11 = _closure1_slot0;
                var15 = _closure1_slot3;
                var27 = 26;
                var5 = var15[var27];
                var16 = var11.bind(var4)(var5);
                var10 = var16.useSharedValue;
                var5 = 27;
                var5 = var15[var5];
                var19 = var11.bind(var4)(var5);
                var5 = var19.getChatInputMinHeight;
                var5 = var5.bind(var19)();
                var10 = var10.bind(var16)(var5);
                _closure2_slot4 = var10;
                var5 = var15[var27];
                var16 = var11.bind(var4)(var5);
                var11 = var16.useAnimatedStyle;
                var5 = function() { // Original name: j, environment: var0
                    var0 = {};
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.minHeight = var1;
                    return var0;
                };
                var19 = {};
                var19.textFieldHeight = var10;
                var5.__closure = var19;
                var19 = 11048691841625.0;
                var5.__workletHash = var19;
                var19 = _closure1_slot34;
                var5.__initData = var19;
                var40 = var11.bind(var16)(var5);
                var11 = _closure1_slot1;
                var5 = 28;
                var5 = var15[var5];
                var5 = var11.bind(var4)(var5);
                var44 = var5.bind(var4)();
                var11 = _closure1_slot11;
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.startTimeMillis;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var24 = var11.bind(var4)(var5);
                var28 = !var2;
                var37 = var28;
                if (var2) {
                    _fun89615_ip = 849;
                    continue _fun89615
                }
            case 818:
                var11 = _closure1_slot0;
                var15 = _closure1_slot3;
                var5 = 29;
                var5 = var15[var5];
                var11 = var11.bind(var4)(var5);
                var5 = var11.getIsAppLauncherEnabled;
                var37 = var5.bind(var11)(var9);
            case 849:
                var11 = _closure1_slot0;
                var16 = _closure1_slot3;
                var3 = var16[var3];
                var19 = var11.bind(var4)(var3);
                var15 = var19.useStateFromStores;
                var3 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getActiveCommand;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var41 = var15.bind(var19)(var5, var3);
                var15 = _closure1_slot1;
                var3 = 30;
                var3 = var16[var3];
                var5 = var15.bind(var4)(var3);
                var3 = {};
                var3.channel = var9;
                var19 = !var6;
                var3.isReadonly = var19;
                var3.isCreatingThread = var2;
                var3 = var5.bind(var4)(var3);
                var49 = var3.placeholder;
                var48 = var3.accessibilityLabel;
                var3 = 31;
                var3 = var16[var3];
                var5 = var15.bind(var4)(var3);
                var3 = {};
                var19 = {};
                var19.analyticsLocations = var42;
                var19.canUpload = var33;
                var19.channel = var9;
                var19.defaultValue = var34;
                var19.hasAttachmentsToUpload = var32;
                var19.pendingEdit = var30;
                var19.pendingReply = var22;
                var19.screenIndex = var8;
                var19.secondaryTextFieldRef = var23;
                var19.threadCreationCallback = var21;
                var3.chatInputProps = var19;
                var3.chatInputTextFieldHeight = var10;
                var10 = arg1;
                var3.ref = var10;
                var36 = var5.bind(var4)(var3);
                _closure2_slot5 = var36;
                var19 = _closure1_slot5;
                var10 = var19.useEffect;
                var5 = new Array(1);
                var5[0] = var36;
                var3 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var1 = var1.props;
                    var1 = var1.current;
                    var2 = var1.defaultValue;
                    var0 = _closure2_slot5;
                    var0 = var0.chatInput;
                    var1 = var0.current;
                    var0 = var1.setText;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var3 = var10.bind(var19)(var3, var5);
                var10 = var19.useEffect;
                var5 = new Array(4);
                var5[0] = var36;
                var5[1] = var9;
                var5[2] = var30;
                var5[3] = var22;
                var3 = function() { // Environment: var0
                    _fun89626: for (var _fun89626_ip = 0;;) switch (_fun89626_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.propsPrev;
                            var1 = var1.current;
                            var3 = var1.pendingEdit;
                            var2 = var1.pendingReply;
                            var1 = null;
                            var2 = var1 == var2;
                            if (!var2) {
                                _fun89626_ip = 47;
                                continue _fun89626
                            }
                        case 39:
                            var4 = _closure2_slot3;
                            var2 = var1 != var4;
                        case 47:
                            if (var2) {
                                _fun89626_ip = 68;
                                continue _fun89626
                            }
                        case 50:
                            var4 = var1 == var3;
                            if (!var4) {
                                _fun89626_ip = 65;
                                continue _fun89626
                            }
                        case 57:
                            var5 = _closure2_slot2;
                            var4 = var1 != var5;
                        case 65:
                            var2 = var4;
                        case 68:
                            if (!var2) {
                                _fun89626_ip = 100;
                                continue _fun89626
                            }
                        case 71:
                            var2 = _closure2_slot5;
                            var2 = var2.chatInput;
                            var4 = var2.current;
                            if (!(var1 != var4)) {
                                _fun89626_ip = 100;
                                continue _fun89626
                            }
                        case 90:
                            var2 = var4.focus;
                            var2 = var2.bind(var4)();
                        case 100:
                            var2 = _closure2_slot5;
                            var2 = var2.propsPrev;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            if (!(var4 !== var2)) {
                                _fun89626_ip = 173;
                                continue _fun89626
                            }
                        case 138:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 32;
                            var5 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            if (!(var4 === var2)) {
                                _fun89626_ip = 232;
                                continue _fun89626
                            }
                        case 173:
                            var2 = _closure2_slot2;
                            if (!(var3 !== var2)) {
                                _fun89626_ip = 282;
                                continue _fun89626
                            }
                        case 181:
                            var2 = _closure2_slot5;
                            var2 = var2.chatInput;
                            var4 = var2.current;
                            if (!(var1 != var4)) {
                                _fun89626_ip = 282;
                                continue _fun89626
                            }
                        case 200:
                            var3 = var4.setText;
                            var2 = _closure2_slot2;
                            var5 = var1 != var2;
                            var2 = '';
                            if (!var5) {
                                _fun89626_ip = 225;
                                continue _fun89626
                            }
                        case 221:
                            var2 = _closure2_slot2;
                        case 225:
                            var2 = var3.bind(var4)(var2);
                            _fun89626_ip = 282;
                            continue _fun89626;
                        case 232:
                            var2 = _closure2_slot5;
                            var2 = var2.chatInput;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun89626_ip = 282;
                                continue _fun89626
                            }
                        case 251:
                            var1 = var2.setText;
                            var0 = _closure2_slot5;
                            var0 = var0.props;
                            var0 = var0.current;
                            var0 = var0.defaultValue;
                            var0 = var1.bind(var2)(var0);
                        case 282:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var10.bind(var19)(var3, var5);
                var10 = var19.useEffect;
                var5 = new Array(1);
                var5[0] = var36;
                var3 = function() { // Environment: var0
                    var4 = function(arg0) { // Original name: handleOpenKeyboard, environment: var0
                        _fun89628: for (var _fun89628_ip = 0;;) switch (_fun89628_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = null;
                                var3 = var1 == var2;
                                var0 = undefined;
                                var4 = undefined;
                                if (var3) {
                                    _fun89628_ip = 21;
                                    continue _fun89628
                                }
                            case 16:
                                var4 = var2.channelId;
                            case 21:
                                var3 = _closure2_slot5;
                                var3 = var3.props;
                                var5 = var3.current;
                                var6 = var1 == var5;
                                var3 = undefined;
                                if (var6) {
                                    _fun89628_ip = 57;
                                    continue _fun89628
                                }
                            case 47:
                                var5 = var5.channel;
                                var3 = var5.id;
                            case 57:
                                if (!(var4 === var3)) {
                                    _fun89628_ip = 90;
                                    continue _fun89628
                                }
                            case 61:
                                var2 = _closure2_slot5;
                                var2 = var2.chatInput;
                                var2 = var2.current;
                                if (!(var1 != var2)) {
                                    _fun89628_ip = 90;
                                    continue _fun89628
                                }
                            case 80:
                                var1 = var2.openSystemKeyboard;
                                var1 = var1.bind(var2)();
                            case 90:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 33;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.subscribe;
                    var1 = _closure1_slot24;
                    var1 = var1.TEXTAREA_FOCUS;
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 33;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var1 = _closure1_slot24;
                        var2 = var1.TEXTAREA_FOCUS;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var10.bind(var19)(var3, var5);
                var10 = var19.useMemo;
                var5 = new Array(1);
                var5[0] = var36;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var2 = function(arg0) { // Original name: handleBlur, environment: var1
                        _fun89631: for (var _fun89631_ip = 0;;) switch (_fun89631_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var3 = var0.text;
                                var2 = _closure2_slot6;
                                var0 = var2.handleTextOrFocusChange;
                                var6 = false;
                                var0 = var0.bind(var2)(var3, var6);
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var0.focused = var6;
                                var0 = _closure2_slot5;
                                var0 = var0.chatInputCover;
                                var4 = var0.current;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun89631_ip = 87;
                                    continue _fun89631
                                }
                            case 76:
                                var2 = var4.focused;
                                var2 = var2.bind(var4)(var6);
                            case 87:
                                var2 = _closure2_slot5;
                                var2 = var2.chatInputAppCommandManager;
                                var4 = var2.current;
                                if (!(var0 != var4)) {
                                    _fun89631_ip = 116;
                                    continue _fun89631
                                }
                            case 106:
                                var2 = var4.updateState;
                                var2 = var2.bind(var4)();
                            case 116:
                                var2 = _closure2_slot5;
                                var2 = var2.chatInputAutocomplete;
                                var5 = var2.current;
                                if (!(var0 != var5)) {
                                    _fun89631_ip = 207;
                                    continue _fun89631
                                }
                            case 135:
                                var4 = var5.setData;
                                var2 = {};
                                var2.focused = var6;
                                var2.text = var3;
                                var6 = _closure2_slot5;
                                var6 = var6.state;
                                var6 = var6.current;
                                var6 = var6.selectionStart;
                                var2.selectionStart = var6;
                                var6 = _closure2_slot5;
                                var6 = var6.state;
                                var6 = var6.current;
                                var6 = var6.selectionEnd;
                                var2.selectionEnd = var6;
                                var2 = var4.bind(var5)(var2);
                            case 207:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputSendButton;
                                var2 = var1.current;
                                if (!(var0 != var2)) {
                                    _fun89631_ip = 258;
                                    continue _fun89631
                                }
                            case 226:
                                var1 = var2.setHasText;
                                var0 = var3.trim;
                                var0 = var0.bind(var3)();
                                var3 = var0.length;
                                var0 = 0;
                                var0 = var3 > var0;
                                var0 = var1.bind(var2)(var0);
                            case 258:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleBlur = var2;
                    var2 = function(arg0) { // Original name: handleFocus, environment: var1
                        _fun89632: for (var _fun89632_ip = 0;;) switch (_fun89632_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var4 = var0.start;
                                var3 = var0.end;
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var6 = true;
                                var0.focused = var6;
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var0.selectionStart = var4;
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var0.selectionEnd = var3;
                                var2 = _closure2_slot6;
                                var1 = var2.handleTextOrFocusChange;
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var0 = var0.text;
                                var0 = var1.bind(var2)(var0, var6);
                                var0 = _closure2_slot5;
                                var0 = var0.chatInputAppCommandManager;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun89632_ip = 150;
                                    continue _fun89632
                                }
                            case 140:
                                var1 = var2.updateState;
                                var1 = var1.bind(var2)();
                            case 150:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputCover;
                                var2 = var1.current;
                                if (!(var0 != var2)) {
                                    _fun89632_ip = 180;
                                    continue _fun89632
                                }
                            case 169:
                                var1 = var2.focused;
                                var1 = var1.bind(var2)(var6);
                            case 180:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputAutocomplete;
                                var2 = var1.current;
                                if (!(var0 != var2)) {
                                    _fun89632_ip = 250;
                                    continue _fun89632
                                }
                            case 199:
                                var1 = var2.setData;
                                var0 = {};
                                var0.focused = var6;
                                var5 = _closure2_slot5;
                                var5 = var5.state;
                                var5 = var5.current;
                                var5 = var5.text;
                                var0.text = var5;
                                var0.selectionStart = var4;
                                var0.selectionEnd = var3;
                                var0 = var1.bind(var2)(var0);
                            case 250:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleFocus = var2;
                    var2 = function(arg0) { // Original name: handleChangeContentSize, environment: var1
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var5 = var0.height;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1.textFieldContentSize = var5;
                        var0 = _closure2_slot5;
                        var0 = var0.state;
                        var0 = var0.current;
                        var3 = var0.textFieldHeight;
                        var2 = var3.set;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 27;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var1);
                        var1 = var4.getChatInputHeightAnimationTiming;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleChangeContentSize = var2;
                    var2 = function(arg0) { // Original name: handleLayoutOfInputContainer, environment: var1
                        _fun89634: for (var _fun89634_ip = 0;;) switch (_fun89634_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputAutocomplete;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun89634_ip = 55;
                                    continue _fun89634
                                }
                            case 33:
                                var1 = var2.setChatInputHeight;
                                var0 = var0.layout;
                                var0 = var0.height;
                                var0 = var1.bind(var2)(var0);
                            case 55:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleLayoutOfInputContainer = var2;
                    var2 = function(arg0) { // Original name: handleLayout, environment: var1
                        _fun89635: for (var _fun89635_ip = 0;;) switch (_fun89635_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var0 = var0.layout;
                                var2 = var0.height;
                                var3 = var0.width;
                                var1 = 0;
                                var0 = var1 !== var2;
                                if (!var0) {
                                    _fun89635_ip = 38;
                                    continue _fun89635
                                }
                            case 34:
                                var0 = var1 !== var3;
                            case 38:
                                if (!var0) {
                                    _fun89635_ip = 96;
                                    continue _fun89635
                                }
                            case 41:
                                var1 = _closure2_slot5;
                                var1 = var1.props;
                                var1 = var1.current;
                                var3 = var1.threadCreationCallback;
                                var1 = null;
                                if (!(var1 == var3)) {
                                    _fun89635_ip = 96;
                                    continue _fun89635
                                }
                            case 70:
                                var0 = _closure2_slot5;
                                var0 = var0.chatInput;
                                var1 = var0.current;
                                var0 = var1.updateChatInputContainerHeightDebounced;
                                var0 = var0.bind(var1)(var2);
                            case 96:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleLayout = var2;
                    var2 = function() { // Original name: handleMaxHeightChanged, environment: var1
                        _fun89636: for (var _fun89636_ip = 0;;) switch (_fun89636_ip) {
                            case 0:
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var4 = var1.textFieldContentSize;
                                var1 = 0;
                                if (!(var1 !== var4)) {
                                    _fun89636_ip = 95;
                                    continue _fun89636
                                }
                            case 29:
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var2 = var0.textFieldHeight;
                                var1 = var2.set;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var0 = 27;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var5.bind(var0)(var3);
                                var0 = var3.getChatInputHeightAnimationTiming;
                                var0 = var0.bind(var3)(var4);
                                var0 = var1.bind(var2)(var0);
                            case 95:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMaxHeightChanged = var2;
                    var2 = function(arg0) { // Original name: handleChangeAutoCompleteVisibility, environment: var1
                        var3 = _closure1_slot17;
                        var0 = _closure2_slot5;
                        var0 = var0.props;
                        var0 = var0.current;
                        var2 = var0.screenIndex;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.handleChangeAutoCompleteVisibility = var2;
                    var2 = function(arg0) { // Original name: handlePasteCommand, environment: var1
                        _fun89638: for (var _fun89638_ip = 0;;) switch (_fun89638_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var3 = var0.data;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1 = var1.focused;
                                if (!var1) {
                                    _fun89638_ip = 118;
                                    continue _fun89638
                                }
                            case 40:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputAppCommandManager;
                                var6 = var1.current;
                                var5 = null;
                                var1 = var5 == var6;
                                var2 = var6;
                                if (var1) {
                                    _fun89638_ip = 84;
                                    continue _fun89638
                                }
                            case 67:
                                var4 = var6.getApplicationCommandManager;
                                var4 = var4.bind(var6)();
                                var1 = var5 == var4;
                                var2 = var4;
                            case 84:
                                if (var1) {
                                    _fun89638_ip = 118;
                                    continue _fun89638
                                }
                            case 87:
                                var1 = var2.setPastedCommand;
                                var0 = _closure2_slot5;
                                var0 = var0.props;
                                var0 = var0.current;
                                var0 = var0.channel;
                                var0 = var1.bind(var2)(var3, var0);
                            case 118:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handlePasteCommand = var2;
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function*(arg0) { // Environment: var1
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun89640: for (var _fun89640_ip = 0;;) switch (_fun89640_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun89640_ip = 341;
                                        continue _fun89640
                                    }
                                case 10:
                                    var1 = arg0;
                                    var1 = var1.nativeEvent;
                                    var10 = var1.url;
                                    var6 = var1.width;
                                    var5 = var1.height;
                                    var9 = var1.type;
                                    var3 = undefined;
                                    SaveGenerator(address = 45);
                                case 43:
                                    return var3;
                                case 45:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun89640_ip = 338;
                                        continue _fun89640
                                    }
                                case 54:
                                    var2 = _closure2_slot5;
                                    var2 = var2.state;
                                    var2 = var2.current;
                                    var2 = var2.focused;
                                    if (!var2) {
                                        _fun89640_ip = 332;
                                        continue _fun89640
                                    }
                                case 83:
                                    var2 = _closure2_slot5;
                                    var2 = var2.props;
                                    var2 = var2.current;
                                    var2 = var2.canUpload;
                                    if (!var2) {
                                        _fun89640_ip = 332;
                                        continue _fun89640
                                    }
                                case 109:
                                    var4 = _closure1_slot0;
                                    var11 = _closure1_slot3;
                                    var2 = 34;
                                    var2 = var11[var2];
                                    var4 = var4.bind(var3)(var2);
                                    var2 = var4.getImageDimensionsIfMissing;
                                    var2 = var2.bind(var4)(var10, var6, var5);
                                    SaveGenerator(address = 149);
                                case 147:
                                    return var2;
                                case 149:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun89640_ip = 335;
                                        continue _fun89640
                                    }
                                case 158:
                                    var5 = _closure1_slot1;
                                    var11 = _closure1_slot3;
                                    var4 = 35;
                                    var4 = var11[var4];
                                    var6 = var5.bind(var3)(var4);
                                    var5 = var6.addFile;
                                    var4 = {};
                                    var8 = _closure2_slot5;
                                    var8 = var8.props;
                                    var8 = var8.current;
                                    var8 = var8.channel;
                                    var8 = var8.id;
                                    var4.channelId = var8;
                                    var8 = {};
                                    var8.uri = var10;
                                    var8.originalUri = var10;
                                    var10 = var2.width;
                                    var8.width = var10;
                                    var10 = var2.height;
                                    var8.height = var10;
                                    var8.mimeType = var9;
                                    var10 = _closure1_slot0;
                                    var9 = 36;
                                    var9 = var11[var9];
                                    var9 = var10.bind(var3)(var9);
                                    var9 = var9.UploadPlatform;
                                    var9 = var9.REACT_NATIVE;
                                    var8.platform = var9;
                                    var9 = 37;
                                    var9 = var11[var9];
                                    var10 = var10.bind(var3)(var9);
                                    var9 = var10.v4;
                                    var9 = var9.bind(var10)();
                                    var8.id = var9;
                                    var4.file = var8;
                                    var7 = _closure1_slot13;
                                    var7 = var7.ChannelMessage;
                                    var4.draftType = var7;
                                    var4 = var5.bind(var6)(var4);
                                case 332:
                                    return var3;
                                case 335:
                                    return var2;
                                case 338:
                                    return var1;
                                case 341:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot0 = var2;
                    var2 = function() { // Environment: var1
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0.handlePasteImage = var2;
                    var2 = function(arg0, arg1) { // Original name: handlePressAction, environment: var1
                        _fun89642: for (var _fun89642_ip = 0;;) switch (_fun89642_ip) {
                            case 0:
                                var1 = arg1;
                                var0 = _closure1_slot20;
                                var0 = var0.PHOTOS;
                                if (!(var0 !== var1)) {
                                    _fun89642_ip = 936;
                                    continue _fun89642
                                }
                            case 25:
                                var0 = _closure1_slot20;
                                var0 = var0.APPS;
                                if (!(var0 !== var1)) {
                                    _fun89642_ip = 583;
                                    continue _fun89642
                                }
                            case 42:
                                var0 = _closure1_slot20;
                                var0 = var0.ALL_PHOTOS;
                                if (!(var0 !== var1)) {
                                    _fun89642_ip = 413;
                                    continue _fun89642
                                }
                            case 59:
                                var0 = _closure1_slot20;
                                var0 = var0.NITRO_GIFT;
                                if (!(var0 !== var1)) {
                                    _fun89642_ip = 208;
                                    continue _fun89642
                                }
                            case 76:
                                var0 = _closure1_slot20;
                                var0 = var0.THREAD;
                                if (!(var0 === var1)) {
                                    _fun89642_ip = 1254;
                                    continue _fun89642
                                }
                            case 93:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 38;
                                var6 = var5[var0];
                                var1 = undefined;
                                var7 = var2.bind(var1)(var6);
                                var6 = var7.triggerHapticFeedback;
                                var0 = var5[var0];
                                var0 = var2.bind(var1)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var6.bind(var7)(var0);
                                var0 = 44;
                                var0 = var5[var0];
                                var5 = var2.bind(var1)(var0);
                                var2 = var5.handleSelectThread;
                                var1 = _closure2_slot5;
                                var1 = var1.props;
                                var1 = var1.current;
                                var1 = var1.channel;
                                var0 = _closure2_slot5;
                                var0 = var0.chatInput;
                                var0 = var2.bind(var5)(var1, var0);
                                _fun89642_ip = 1254;
                                continue _fun89642;
                            case 208:
                                var1 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var0 = 46;
                                var0 = var5[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.markPotentialBadState;
                                var0 = var0.bind(var1)();
                                var1 = _closure1_slot0;
                                var0 = 38;
                                var6 = var5[var0];
                                var7 = var1.bind(var2)(var6);
                                var6 = var7.triggerHapticFeedback;
                                var0 = var5[var0];
                                var0 = var1.bind(var2)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var6.bind(var7)(var0);
                                var0 = 47;
                                var0 = var5[var0];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.isAndroid;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun89642_ip = 343;
                                    continue _fun89642
                                }
                            case 313:
                                var1 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 45;
                                var0 = var5[var0];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.dismissKeyboard;
                                var0 = var0.bind(var1)();
                            case 343:
                                var1 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 44;
                                var0 = var5[var0];
                                var5 = var1.bind(var2)(var0);
                                var2 = var5.handleSelectGift;
                                var1 = _closure2_slot5;
                                var1 = var1.props;
                                var1 = var1.current;
                                var1 = var1.analyticsLocations;
                                var0 = _closure2_slot5;
                                var0 = var0.chatInput;
                                var0 = var2.bind(var5)(var1, var0);
                                _fun89642_ip = 1254;
                                continue _fun89642;
                            case 413:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 38;
                                var6 = var5[var0];
                                var1 = undefined;
                                var7 = var2.bind(var1)(var6);
                                var6 = var7.triggerHapticFeedback;
                                var0 = var5[var0];
                                var0 = var2.bind(var1)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var6.bind(var7)(var0);
                                var0 = 44;
                                var0 = var5[var0];
                                var2 = var2.bind(var1)(var0);
                                var1 = var2.handleViewAllDialog;
                                var0 = {};
                                var5 = _closure2_slot5;
                                var5 = var5.props;
                                var5 = var5.current;
                                var5 = var5.channel;
                                var0.channel = var5;
                                var5 = _closure1_slot25;
                                var0.uploadLimit = var5;
                                var5 = function() { // Original name: onDismissKeyboard, environment: var3
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 45;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var0 = var1.dismissKeyboard;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0.onDismissKeyboard = var5;
                                var5 = function() { // Original name: onRestoreKeyboard, environment: var3
                                    var2 = _closure2_slot6;
                                    var1 = var2.handleToggleKeyboard;
                                    var0 = {};
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var3 = 40;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4);
                                    var3 = var3.KeyboardTypes;
                                    var3 = var3.SYSTEM;
                                    var0.type = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0.onRestoreKeyboard = var5;
                                var3 = function(arg0) { // Original name: onSelectFiles, environment: var3
                                    var2 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var0 = 44;
                                    var1 = var6[var0];
                                    var0 = undefined;
                                    var5 = var2.bind(var0)(var1);
                                    var4 = var5.addImagesFromPicker;
                                    var1 = _closure2_slot5;
                                    var1 = var1.props;
                                    var1 = var1.current;
                                    var1 = var1.channel;
                                    var3 = var1.id;
                                    var1 = 36;
                                    var1 = var6[var1];
                                    var1 = var2.bind(var0)(var1);
                                    var1 = var1.UploadOrigin;
                                    var2 = var1.IMAGE_PICKER;
                                    var1 = arg0;
                                    var1 = var4.bind(var5)(var3, var1, var2);
                                    return var0;
                                };
                                var0.onSelectFiles = var3;
                                var3 = _closure1_slot13;
                                var3 = var3.ChannelMessage;
                                var0.draftType = var3;
                                var0 = var1.bind(var2)(var0);
                                _fun89642_ip = 1254;
                                continue _fun89642;
                            case 583:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var0 = 38;
                                var1 = var9[var0];
                                var5 = undefined;
                                var2 = var8.bind(var5)(var1);
                                var1 = var2.triggerHapticFeedback;
                                var0 = var9[var0];
                                var0 = var8.bind(var5)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var1.bind(var2)(var0);
                                var0 = 41;
                                var0 = var9[var0];
                                var3 = var8.bind(var5)(var0);
                                var2 = var3.trackWithMetadata;
                                var0 = _closure1_slot21;
                                var1 = var0.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot1;
                                var1 = 39;
                                var1 = var9[var1];
                                var3 = var2.bind(var5)(var1);
                                var2 = var3.track;
                                var1 = var0.CHAT_INPUT_COMPONENT_VIEWED;
                                var0 = {};
                                var6 = _closure1_slot23;
                                var6 = var6.APPS_BUTTON;
                                var0.type = var6;
                                var7 = _closure2_slot5;
                                var7 = var7.props;
                                var7 = var7.current;
                                var7 = var7.channel;
                                var7 = var7.id;
                                var0.channel_id = var7;
                                var7 = _closure2_slot5;
                                var7 = var7.props;
                                var7 = var7.current;
                                var7 = var7.channel;
                                var7 = var7.guild_id;
                                var0.guild_id = var7;
                                var0 = var2.bind(var3)(var1, var0);
                                var1 = _closure1_slot2;
                                var0 = 42;
                                var0 = var9[var0];
                                var1 = var1.bind(var5)(var0);
                                var0 = var1.dismissNewActivityIndicator;
                                var0 = var0.bind(var1)();
                                var2 = _closure2_slot6;
                                var1 = var2.handleToggleKeyboard;
                                var0 = {};
                                var3 = 40;
                                var3 = var9[var3];
                                var3 = var8.bind(var5)(var3);
                                var3 = var3.KeyboardTypes;
                                var3 = var3.APP_LAUNCHER;
                                var0.type = var3;
                                var3 = {};
                                var7 = _closure1_slot27;
                                var7 = var7.HOME;
                                var3.initialRouteName = var7;
                                var7 = 43;
                                var7 = var9[var7];
                                var8 = var8.bind(var5)(var7);
                                var7 = var8.getAppDMApplication;
                                var6 = _closure2_slot5;
                                var6 = var6.props;
                                var6 = var6.current;
                                var6 = var6.channel;
                                var6 = var7.bind(var8)(var6);
                                var7 = null;
                                var7 = var7 == var6;
                                if (var7) {
                                    _fun89642_ip = 917;
                                    continue _fun89642
                                }
                            case 912:
                                var5 = var6.name;
                            case 917:
                                var3.initialSearchQuery = var5;
                                var0.context = var3;
                                var0 = var1.bind(var2)(var0);
                                _fun89642_ip = 1254;
                                continue _fun89642;
                            case 936:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 38;
                                var2 = var1[var0];
                                var6 = undefined;
                                var5 = var3.bind(var6)(var2);
                                var2 = var5.triggerHapticFeedback;
                                var0 = var1[var0];
                                var0 = var3.bind(var6)(var0);
                                var0 = var0.HapticFeedbackTypes;
                                var0 = var0.IMPACT_LIGHT;
                                var0 = var2.bind(var5)(var0);
                                var2 = _closure1_slot1;
                                var0 = 39;
                                var0 = var1[var0];
                                var8 = var2.bind(var6)(var0);
                                var7 = var8.track;
                                var0 = _closure1_slot21;
                                var5 = var0.CHAT_INPUT_COMPONENT_VIEWED;
                                var2 = {};
                                var0 = _closure1_slot23;
                                var0 = var0.ADD_BUTTON;
                                var2.type = var0;
                                var9 = _closure2_slot5;
                                var9 = var9.props;
                                var9 = var9.current;
                                var9 = var9.channel;
                                var9 = var9.id;
                                var2.channel_id = var9;
                                var9 = _closure2_slot5;
                                var9 = var9.props;
                                var9 = var9.current;
                                var9 = var9.channel;
                                var9 = var9.guild_id;
                                var2.guild_id = var9;
                                var2 = var7.bind(var8)(var5, var2);
                                var2 = 28;
                                var2 = var1[var2];
                                var5 = var3.bind(var6)(var2);
                                var2 = var5.getKeyboardType;
                                var2 = var2.bind(var5)();
                                var7 = 40;
                                var1 = var1[var7];
                                var1 = var3.bind(var6)(var1);
                                var1 = var1.KeyboardTypes;
                                var1 = var1.MEDIA;
                                if (!(var2 === var1)) {
                                    _fun89642_ip = 1183;
                                    continue _fun89642
                                }
                            case 1152:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputActions;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun89642_ip = 1183;
                                    continue _fun89642
                                }
                            case 1173:
                                var1 = var2.focusPhotosButton;
                                var1 = var1.bind(var2)();
                            case 1183:
                                var2 = _closure2_slot6;
                                var1 = var2.handleToggleKeyboard;
                                var0 = {};
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var3 = var3[var7];
                                var3 = var5.bind(var6)(var3);
                                var3 = var3.KeyboardTypes;
                                var3 = var3.MEDIA;
                                var0.type = var3;
                                var3 = {};
                                var4 = _closure1_slot29;
                                var4 = var4.CHAT;
                                var3.target = var4;
                                var0.context = var3;
                                var0 = var1.bind(var2)(var0);
                            case 1254:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handlePressAction = var2;
                    var2 = function(arg0) { // Original name: handlePressExpression, environment: var1
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var0 = 48;
                        var2 = var6[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var2);
                        var2 = var3.initiateEmojiInteraction;
                        var1 = _closure1_slot28;
                        var1 = var1.ChatInputExpressionPressed;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot6;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var4 = 40;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.EXPRESSION;
                        var1.type = var4;
                        var4 = arg0;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handlePressExpression = var2;
                    var2 = function() { // Original name: handlePressSend, environment: var1
                        var0 = _closure2_slot5;
                        var0 = var0.chatInput;
                        var1 = var0.current;
                        var0 = var1.handleSend;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePressSend = var2;
                    var2 = function(arg0) { // Original name: handleSelectionOrTextChange, environment: var1
                        _fun89648: for (var _fun89648_ip = 0;;) switch (_fun89648_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.nativeEvent;
                                var9 = var1.start;
                                var8 = var1.end;
                                var0 = var1.text;
                                var4 = var1.editId;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var3 = var1.editId;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1.editId = var4;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1.selectionStart = var9;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1.selectionEnd = var8;
                                var6 = _closure2_slot6;
                                var5 = var6.handleTextOrFocusChange;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1 = var1.focused;
                                var1 = var5.bind(var6)(var0, var1);
                                var1 = _closure2_slot5;
                                var1 = var1.chatInputAppCommandManager;
                                var6 = var1.current;
                                var1 = null;
                                if (!(var1 != var6)) {
                                    _fun89648_ip = 180;
                                    continue _fun89648
                                }
                            case 170:
                                var5 = var6.updateState;
                                var5 = var5.bind(var6)();
                            case 180:
                                var5 = _closure2_slot5;
                                var5 = var5.chatInputAutocomplete;
                                var7 = var5.current;
                                if (!(var1 != var7)) {
                                    _fun89648_ip = 251;
                                    continue _fun89648
                                }
                            case 199:
                                var6 = var7.setData;
                                var5 = {};
                                var10 = _closure2_slot5;
                                var10 = var10.state;
                                var10 = var10.current;
                                var10 = var10.focused;
                                var5.focused = var10;
                                var5.text = var0;
                                var5.selectionStart = var9;
                                var5.selectionEnd = var8;
                                var5 = var6.bind(var7)(var5);
                            case 251:
                                var5 = _closure2_slot5;
                                var5 = var5.chatInputSendButton;
                                var7 = var5.current;
                                if (!(var1 != var7)) {
                                    _fun89648_ip = 302;
                                    continue _fun89648
                                }
                            case 270:
                                var6 = var7.setHasText;
                                var5 = var0.trim;
                                var5 = var5.bind(var0)();
                                var8 = var5.length;
                                var5 = 0;
                                var5 = var8 > var5;
                                var5 = var6.bind(var7)(var5);
                            case 302:
                                if (!(var3 !== var4)) {
                                    _fun89648_ip = 402;
                                    continue _fun89648
                                }
                            case 306:
                                var3 = _closure2_slot5;
                                var3 = var3.chatInput;
                                var4 = var3.current;
                                var3 = var4.handleTextChanged;
                                var3 = var3.bind(var4)(var0);
                                var2 = _closure2_slot5;
                                var2 = var2.chatInputCharCounter;
                                var2 = var2.current;
                                if (!(var1 != var2)) {
                                    _fun89648_ip = 367;
                                    continue _fun89648
                                }
                            case 351:
                                var1 = var2.onMessageLengthChanged;
                                var0 = var0.length;
                                var0 = var1.bind(var2)(var0);
                            case 367:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.hideContextMenu;
                                var0 = var0.bind(var1)();
                            case 402:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSelectionOrTextChange = var2;
                    var2 = function(arg0) { // Original name: handleTapAction, environment: var1
                        _fun89649: for (var _fun89649_ip = 0;;) switch (_fun89649_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var1 = var0.tapAction;
                                var2 = var1.action;
                                var0 = 'tapAttachment';
                                if (!(var0 === var2)) {
                                    _fun89649_ip = 179;
                                    continue _fun89649
                                }
                            case 33:
                                var0 = _closure2_slot5;
                                var0 = var0.chatInput;
                                var2 = var0.current;
                                var0 = var2.blur;
                                var0 = var0.bind(var2)();
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 50;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.openCommandAttachmentPreview;
                                var2 = _closure2_slot5;
                                var2 = var2.chatInput;
                                var3 = var2.current;
                                var2 = var3.getApplicationCommandManager;
                                var3 = var2.bind(var3)();
                                var2 = var1.channelId;
                                var1 = var1.optionName;
                                var6 = _closure2_slot5;
                                var6 = var6.state;
                                var6 = var6.current;
                                var6 = var6.focused;
                                if (!var6) {
                                    _fun89649_ip = 160;
                                    continue _fun89649
                                }
                            case 151:
                                var0 = function() { // Environment: var6
                                    var0 = _closure2_slot5;
                                    var0 = var0.chatInput;
                                    var1 = var0.current;
                                    var0 = var1.openSystemKeyboard;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                            case 160:
                                var11 = var5;
                                var10 = var3;
                                var9 = var2;
                                var8 = var1;
                                var7 = var0;
                                var0 = var11[var4](var10, var9, var8, var7, var6);
                            case 179:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTapAction = var2;
                    var2 = function(arg0, arg1) { // Original name: handleTextOrFocusChange, environment: var1
                        _fun89651: for (var _fun89651_ip = 0;;) switch (_fun89651_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = arg1;
                                var0 = var2.length;
                                var1 = 0;
                                if (!(var0 > var1)) {
                                    _fun89651_ip = 57;
                                    continue _fun89651
                                }
                            case 17:
                                if (var3) {
                                    _fun89651_ip = 106;
                                    continue _fun89651
                                }
                            case 20:
                                var4 = var2.length;
                                var0 = _closure2_slot5;
                                var0 = var0.state;
                                var0 = var0.current;
                                var0 = var0.textPrev;
                                var0 = var0.length;
                                if (!(!(var4 > var0))) {
                                    _fun89651_ip = 106;
                                    continue _fun89651
                                }
                            case 57:
                                var0 = var2.length;
                                if (!(var1 === var0)) {
                                    _fun89651_ip = 193;
                                    continue _fun89651
                                }
                            case 69:
                                var0 = _closure2_slot5;
                                var0 = var0.chatInputActions;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun89651_ip = 193;
                                    continue _fun89651
                                }
                            case 93:
                                var0 = var1.onShowActions;
                                var0 = var0.bind(var1)(var3);
                                _fun89651_ip = 193;
                                continue _fun89651;
                            case 106:
                                var4 = _closure1_slot9;
                                var1 = var4.isOpen;
                                var1 = var1.bind(var4)();
                                if (!var1) {
                                    _fun89651_ip = 158;
                                    continue _fun89651
                                }
                            case 126:
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 51;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var0 = var1.hideNativeMenu;
                                var0 = var0.bind(var1)();
                            case 158:
                                var0 = _closure2_slot5;
                                var0 = var0.chatInputActions;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun89651_ip = 193;
                                    continue _fun89651
                                }
                            case 182:
                                var0 = var1.onDismissActions;
                                var0 = var0.bind(var1)(var3);
                            case 193:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 52;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var1);
                                var1 = var4.getMaxMessageLength;
                                var6 = var1.bind(var4)();
                                var4 = _closure2_slot5;
                                var4 = var4.state;
                                var4 = var4.current;
                                var4 = var4.textPrev;
                                var4 = var4.length;
                                var4 = var4 <= var6;
                                if (!var4) {
                                    _fun89651_ip = 272;
                                    continue _fun89651
                                }
                            case 263:
                                var5 = var2.length;
                                var4 = var5 > var6;
                            case 272:
                                if (!var4) {
                                    _fun89651_ip = 318;
                                    continue _fun89651
                                }
                            case 275:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var4 = 39;
                                var4 = var6[var4];
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.track;
                                var3 = _closure1_slot21;
                                var4 = var3.MESSAGE_LENGTH_LIMIT_REACHED;
                                var3 = {};
                                var3 = var5.bind(var6)(var4, var3);
                            case 318:
                                var3 = _closure2_slot5;
                                var3 = var3.state;
                                var4 = var3.current;
                                var3 = _closure2_slot5;
                                var3 = var3.state;
                                var3 = var3.current;
                                var3 = var3.text;
                                var4.textPrev = var3;
                                var1 = _closure2_slot5;
                                var1 = var1.state;
                                var1 = var1.current;
                                var1.text = var2;
                                return var0;
                        }
                    };
                    var0.handleTextOrFocusChange = var2;
                    var2 = function(arg0) { // Original name: handleTextFlushed, environment: var1
                        _fun89652: for (var _fun89652_ip = 0;;) switch (_fun89652_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var2 = var0.text;
                                var3 = var0.requestId;
                                var0 = _closure2_slot5;
                                var0 = var0.chatInputTextFlushedResponses;
                                var1 = var0.current;
                                var0 = var1.get;
                                var1 = var0.bind(var1)(var3);
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun89652_ip = 61;
                                    continue _fun89652
                                }
                            case 54:
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 61:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTextFlushed = var2;
                    var1 = function(arg0) { // Original name: handleToggleKeyboard, environment: var1
                        _fun89653: for (var _fun89653_ip = 0;;) switch (_fun89653_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot9;
                                var0 = var2.isOpen;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun89653_ip = 55;
                                    continue _fun89653
                                }
                            case 23:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 51;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var0 = var2.hideNativeMenu;
                                var0 = var0.bind(var2)();
                            case 55:
                                var4 = var3.type;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 40;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var5.bind(var0)(var2);
                                var2 = var2.KeyboardTypes;
                                var2 = var2.SYSTEM;
                                if (!(var4 !== var2)) {
                                    _fun89653_ip = 168;
                                    continue _fun89653
                                }
                            case 98:
                                var2 = var3.type;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 28;
                                var1 = var5[var1];
                                var4 = var4.bind(var0)(var1);
                                var1 = var4.getKeyboardType;
                                var1 = var1.bind(var4)();
                                if (!(var2 !== var1)) {
                                    _fun89653_ip = 168;
                                    continue _fun89653
                                }
                            case 137:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInput;
                                var2 = var1.current;
                                var1 = var2.openCustomKeyboard;
                                var1 = var1.bind(var2)(var3);
                                _fun89653_ip = 196;
                                continue _fun89653;
                            case 168:
                                var1 = _closure2_slot5;
                                var1 = var1.chatInput;
                                var2 = var1.current;
                                var1 = var2.openSystemKeyboard;
                                var1 = var1.bind(var2)();
                            case 196:
                                return var0;
                        }
                    };
                    var0.handleToggleKeyboard = var1;
                    return var0;
                };
                var29 = var10.bind(var19)(var3, var5);
                _closure2_slot6 = var29;
                var5 = _closure1_slot31;
                var3 = _closure1_slot6;
                var0 = {};
                var10 = false;
                var0.collapsable = var10;
                var10 = 53;
                var10 = var16[var10];
                var15 = var15.bind(var4)(var10);
                var10 = {};
                var10.isCreatingThread = var2;
                var10 = var15.bind(var4)(var10);
                var0.style = var10;
                var15 = _closure1_slot30;
                var10 = 54;
                var10 = var16[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.ChatInputAccessibilityDivider;
                var10 = {};
                var11 = var15.bind(var4)(var11, var10);
                var10 = new Array(7);
                var10[0] = var11;
                var11 = null;
                if (!var14) {
                    _fun89615_ip = 1336;
                    continue _fun89615
                }
            case 1250:
                var16 = _closure1_slot30;
                var15 = _closure1_slot1;
                var19 = _closure1_slot3;
                var14 = 55;
                var14 = var19[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14.channel = var9;
                var23 = '';
                var19 = var23 !== var34;
                if (var19) {
                    _fun89615_ip = 1325;
                    continue _fun89615
                }
            case 1291:
                var21 = var36.chatInput;
                var26 = var21.current;
                var25 = var31 == var26;
                var21 = undefined;
                if (var25) {
                    _fun89615_ip = 1321;
                    continue _fun89615
                }
            case 1311:
                var25 = var26.getText;
                var21 = var25.bind(var26)();
            case 1321:
                var19 = var23 !== var21;
            case 1325:
                var14.hasInputText = var19;
                var11 = var16.bind(var4)(var15, var14);
            case 1336:
                var10[1] = var11;
                var11 = null;
                if (var2) {
                    _fun89615_ip = 1434;
                    continue _fun89615
                }
            case 1345:
                var16 = _closure1_slot30;
                var15 = _closure1_slot6;
                var14 = {};
                var19 = var38.accessoriesContainer;
                var14.style = var19;
                var19 = {};
                var21 = var38.accessories;
                var19.style = var21;
                var23 = _closure1_slot1;
                var25 = _closure1_slot3;
                var21 = 56;
                var21 = var25[var21];
                var23 = var23.bind(var4)(var21);
                var21 = {};
                var21.channel = var9;
                var21.screenIndex = var8;
                var21 = var16.bind(var4)(var23, var21);
                var19.children = var21;
                var19 = var16.bind(var4)(var15, var19);
                var14.children = var19;
                var11 = var16.bind(var4)(var15, var14);
            case 1434:
                var10[2] = var11;
                var11 = null;
                if (!var13) {
                    _fun89615_ip = 1485;
                    continue _fun89615
                }
            case 1443:
                var16 = _closure1_slot30;
                var14 = _closure1_slot1;
                var15 = _closure1_slot3;
                var13 = 57;
                var13 = var15[var13];
                var15 = var14.bind(var4)(var13);
                var14 = {};
                var14.channel = var9;
                var13 = var9.id;
                var11 = var16.bind(var4)(var15, var14, var13);
            case 1485:
                var10[3] = var11;
                var14 = _closure1_slot30;
                var13 = _closure1_slot0;
                var15 = _closure1_slot3;
                var11 = 58;
                var11 = var15[var11];
                var11 = var13.bind(var4)(var11);
                var13 = var11.MemberActionsChatInputBannerGuardedOuter;
                var11 = {};
                var11.channel = var9;
                var11 = var14.bind(var4)(var13, var11);
                var10[4] = var11;
                var11 = null;
                if (!var12) {
                    _fun89615_ip = 1578;
                    continue _fun89615
                }
            case 1540:
                var14 = _closure1_slot30;
                var13 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 59;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.DoubleTapToReactChatInputBanner;
                var12 = {};
                var11 = var14.bind(var4)(var13, var12);
            case 1578:
                var10[5] = var11;
                var13 = _closure1_slot31;
                var12 = _closure1_slot6;
                var11 = {};
                var14 = var29.handleLayout;
                var11.onLayout = var14;
                var15 = _closure1_slot0;
                var14 = _closure1_slot3;
                var46 = 40;
                var14 = var14[var46];
                var14 = var15.bind(var4)(var14);
                var14 = var14.KeyboardTypes;
                var14 = var14.EXPRESSION;
                var15 = null;
                if (!(var44 !== var14)) {
                    _fun89615_ip = 1739;
                    continue _fun89615
                }
            case 1641:
                var19 = _closure1_slot30;
                var16 = _closure1_slot1;
                var21 = _closure1_slot3;
                var14 = 60;
                var14 = var21[var14];
                var16 = var16.bind(var4)(var14);
                var14 = {};
                var21 = var36.chatInputAutocomplete;
                var14.ref = var21;
                var14.analyticsLocations = var42;
                var14.channel = var9;
                var14.canMentionEveryone = var20;
                var14.keyboardType = var44;
                var20 = var29.handleChangeAutoCompleteVisibility;
                var14.onChangeAutoCompleteVisibility = var20;
                var14.commandsDisabled = var17;
                var14.canOnlyUseTextCommands = var18;
                var20 = var36.chatInput;
                var14.chatInputRef = var20;
                var14.screenIndex = var8;
                var15 = var19.bind(var4)(var16, var14);
            case 1739:
                var14 = new Array(5);
                var14[0] = var15;
                var21 = _closure1_slot30;
                var19 = _closure1_slot1;
                var20 = _closure1_slot3;
                var15 = 61;
                var15 = var20[var15];
                var16 = var19.bind(var4)(var15);
                var15 = {};
                var15.channel = var9;
                var15 = var21.bind(var4)(var16, var15);
                var14[1] = var15;
                var15 = 62;
                var15 = var20[var15];
                var16 = var19.bind(var4)(var15);
                var15 = {};
                var15.channel = var9;
                var23 = var36.chatInput;
                var15.chatInputRef = var23;
                var15.pendingEdit = var30;
                var15.pendingReply = var22;
                var15 = var21.bind(var4)(var16, var15);
                var14[2] = var15;
                var15 = 63;
                var15 = var20[var15];
                var16 = var19.bind(var4)(var15);
                var15 = {};
                var22 = var36.chatInputAppCommandManager;
                var15.ref = var22;
                var15.canOnlyUseTextCommands = var18;
                var15.channel = var9;
                var18 = var36.chatInput;
                var15.chatInputRef = var18;
                var18 = var36.state;
                var15.chatInputStateRef = var18;
                var15.commandsDisabled = var17;
                var15 = var21.bind(var4)(var16, var15);
                var14[3] = var15;
                var17 = _closure1_slot31;
                var16 = _closure1_slot6;
                var15 = {};
                var18 = var38.container;
                var15.style = var18;
                var18 = var29.handleLayoutOfInputContainer;
                var15.onLayout = var18;
                var18 = 64;
                var18 = var20[var18];
                var19 = var19.bind(var4)(var18);
                var18 = {};
                var18.canUpload = var33;
                var20 = var9.id;
                var18.channelId = var20;
                var18.screenIndex = var8;
                var19 = var21.bind(var4)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var20 = _closure1_slot32;
                var19 = {};
                var22 = {};
                var23 = var38.containerInner;
                var22.style = var23;
                var22.accessibilityElementsHidden = var24;
                var23 = undefined;
                if (!var24) {
                    _fun89615_ip = 2016;
                    continue _fun89615
                }
            case 2010:
                var23 = 'no-hide-descendants';
            case 2016:
                var22.importantForAccessibility = var23;
                var24 = null;
                if (!var6) {
                    _fun89615_ip = 2132;
                    continue _fun89615
                }
            case 2026:
                var26 = _closure1_slot30;
                var25 = _closure1_slot1;
                var45 = _closure1_slot3;
                var23 = 65;
                var23 = var45[var23];
                var25 = var25.bind(var4)(var23);
                var23 = {};
                var45 = var36.chatInputActions;
                var23.ref = var45;
                var23.channel = var9;
                var45 = var29.handlePressAction;
                var23.onPressAction = var45;
                var23.canStartThreads = var43;
                var23.isAppLauncherEnabled = var37;
                var23.keyboardType = var44;
                var37 = var33;
                if (!var33) {
                    _fun89615_ip = 2102;
                    continue _fun89615
                }
            case 2098:
                var37 = var31 == var41;
            case 2102:
                if (var37) {
                    _fun89615_ip = 2108;
                    continue _fun89615
                }
            case 2105:
                var37 = var39;
            case 2108:
                var37 = !var37;
                var23.shouldPhotosButtonBeDisabled = var37;
                var23.canUpload = var33;
                var23.shouldShowGiftButton = var28;
                var24 = var26.bind(var4)(var25, var23);
            case 2132:
                var23 = new Array(3);
                var23[0] = var24;
                var26 = _closure1_slot31;
                var25 = _closure1_slot6;
                var24 = {};
                var37 = var38.input;
                var24.style = var37;
                var41 = _closure1_slot1;
                var45 = _closure1_slot3;
                var27 = var45[var27];
                var27 = var41.bind(var4)(var27);
                var37 = var27.View;
                var27 = {};
                var43 = var38.inputDefault;
                var39 = new Array(2);
                var39[0] = var43;
                var39[1] = var40;
                var27.style = var39;
                var43 = _closure1_slot30;
                var39 = 66;
                var39 = var45[var39];
                var40 = var41.bind(var4)(var39);
                var39 = {};
                var39.accessibilityLabel = var48;
                var48 = _closure1_slot0;
                var50 = 67;
                var50 = var45[var50];
                var50 = var48.bind(var4)(var50);
                var50 = var50.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
                var39.customKeyboard = var50;
                var39.editable = var6;
                var50 = var29.handleFocus;
                var39.onBeginFocus = var50;
                var50 = var29.handleBlur;
                var39.onEndBlur = var50;
                var50 = var29.handleChangeContentSize;
                var39.onChangeContentSize = var50;
                var50 = var29.handleMaxHeightChanged;
                var39.onMaxHeightChanged = var50;
                var50 = var29.handleSelectionOrTextChange;
                var39.onSelectionOrTextChange = var50;
                var50 = var29.handleTextFlushed;
                var39.onTextFlushed = var50;
                var50 = var29.handlePasteImage;
                var39.onPasteImage = var50;
                var50 = var29.handlePasteCommand;
                var39.onPasteCommand = var50;
                var50 = var29.handleTapAction;
                var39.onTapAction = var50;
                var50 = var29.handlePressSend;
                var39.onRequestSend = var50;
                var39.placeholder = var49;
                var49 = var36.chatInputNative;
                var39.ref = var49;
                var39.setNoExtractUI = var47;
                var47 = var45[var46];
                var47 = var48.bind(var4)(var47);
                var47 = var47.KeyboardTypes;
                var47 = var47.MEDIA;
                var47 = var44 !== var47;
                var39.shouldShowCursor = var47;
                var40 = var43.bind(var4)(var40, var39);
                var39 = new Array(2);
                var39[0] = var40;
                var40 = 68;
                var40 = var45[var40];
                var41 = var41.bind(var4)(var40);
                var40 = {};
                var40.keyboardType = var44;
                var45 = var29.handleToggleKeyboard;
                var40.onSelectKeyboard = var45;
                var45 = var36.chatInputCover;
                var40.ref = var45;
                var40 = var43.bind(var4)(var41, var40);
                var39[1] = var40;
                var27.children = var39;
                var37 = var26.bind(var4)(var37, var27);
                var27 = new Array(2);
                var27[0] = var37;
                var37 = {};
                var38 = var38.rightAccessory;
                var37.style = var38;
                var39 = null;
                if (!var6) {
                    _fun89615_ip = 2595;
                    continue _fun89615
                }
            case 2519:
                var41 = _closure1_slot30;
                var40 = _closure1_slot1;
                var43 = _closure1_slot3;
                var38 = 69;
                var38 = var43[var38];
                var40 = var40.bind(var4)(var38);
                var38 = {};
                var45 = _closure1_slot0;
                var43 = var43[var46];
                var43 = var45.bind(var4)(var43);
                var43 = var43.KeyboardTypes;
                var43 = var43.EXPRESSION;
                var43 = var44 === var43;
                var38.active = var43;
                var43 = var29.handlePressExpression;
                var38.onPress = var43;
                var39 = var41.bind(var4)(var40, var38);
            case 2595:
                var38 = new Array(2);
                var38[0] = var39;
                var41 = _closure1_slot30;
                var40 = _closure1_slot1;
                var43 = _closure1_slot3;
                var39 = 70;
                var39 = var43[var39];
                var40 = var40.bind(var4)(var39);
                var39 = {};
                var39.analyticsLocations = var42;
                var42 = var36.chatInputCharCounter;
                var39.ref = var42;
                var39 = var41.bind(var4)(var40, var39);
                var38[1] = var39;
                var37.children = var38;
                var37 = var26.bind(var4)(var25, var37);
                var27[1] = var37;
                var24.children = var27;
                var24 = var26.bind(var4)(var25, var24);
                var23[1] = var24;
                if (var6) {
                    _fun89615_ip = 2690;
                    continue _fun89615
                }
            case 2685:
                var24 = null;
                if (!var2) {
                    _fun89615_ip = 2782;
                    continue _fun89615
                }
            case 2690:
                var27 = _closure1_slot30;
                var26 = _closure1_slot1;
                var37 = _closure1_slot3;
                var25 = 71;
                var25 = var37[var25];
                var26 = var26.bind(var4)(var25);
                var25 = {};
                var36 = var36.chatInputSendButton;
                var25.ref = var36;
                var25.canSendVoiceMessage = var35;
                var25.channel = var9;
                var25.defaultValue = var34;
                if (!var32) {
                    _fun89615_ip = 2746;
                    continue _fun89615
                }
            case 2743:
                var32 = var33;
            case 2746:
                var25.hasPendingAttachments = var32;
                var30 = var31 != var30;
                var25.hasPendingEdit = var30;
                var29 = var29.handlePressSend;
                var25.onSendMessage = var29;
                var25.requireTextContent = var28;
                var24 = var27.bind(var4)(var26, var25);
            case 2782:
                var23[2] = var24;
                var22.children = var23;
                var22 = var17.bind(var4)(var16, var22);
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var18[1] = var19;
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[4] = var15;
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[6] = var11;
                var0.children = var10;
                var5 = var5.bind(var4)(var3, var0);
                var0 = var5;
                if (var2) {
                    _fun89615_ip = 2917;
                    continue _fun89615
                }
            case 2854:
                var3 = _closure1_slot30;
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 72;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var9;
                var1.screenIndex = var8;
                var1.canSendMessages = var6;
                var1.canCreateThreads = var7;
                var6 = !var6;
                var1.isReadonly = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2917:
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'ChatInput';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 73;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/ChatInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 6442, 11599, 8566, 6490, 11600, 3954, 6491, 3050, 3953, 7854, 11602, 660, 1468, 1616, 1566, 33, 1297, 671, 3154, 566, 6655, 5684, 6509, 3677, 11603, 3867, 6777, 11604, 11605, 5602, 1229, 3966, 7567, 3959, 491, 3238, 795, 1567, 4259, 7872, 11645, 9357, 3675, 1581, 478, 6950, 5176, 9575, 4885, 7624, 11646, 11647, 11648, 11650, 11652, 11657, 11660, 11694, 11712, 11713, 11715, 11720, 11721, 11746, 11747, 11748, 11749, 11750, 11751, 11756, 2]);