// modules/icymi/native/content_inventory/useReplyActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/content_inventory/useReplyActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun104186: for (var _fun104186_ip = 0;;) switch (_fun104186_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.content;
                var _closure2_slot0 = var8;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 8;
                var1 = var0[var6];
                var10 = var7.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.author_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var5, var1);
                var _closure2_slot1 = var9;
                var1 = 'unknown';
                var _closure2_slot2 = var1;
                var5 = var8.content_type;
                var10 = 9;
                var0 = var0[var10];
                var0 = var7.bind(var4)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.TOP_GAME;
                if (!(var0 !== var5)) {
                    _fun104186_ip = 212;
                    continue _fun104186
                }
            case 131:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var7.bind(var4)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.PLAYED_GAME;
                if (!(var0 !== var5)) {
                    _fun104186_ip = 212;
                    continue _fun104186
                }
            case 164:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var7.bind(var4)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.CUSTOM_STATUS;
                if (!(var0 === var5)) {
                    _fun104186_ip = 225;
                    continue _fun104186
                }
            case 197:
                var0 = 'hotwheels_custom_status';
                _closure2_slot2 = var0;
                var1 = var0;
                _fun104186_ip = 225;
                continue _fun104186;
            case 212:
                var0 = 'hotwheels_gaming_activity';
                _closure2_slot2 = var0;
                var1 = var0;
            case 225:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var7 = var5.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var2
                    _fun104188: for (var _fun104188_ip = 0;;) switch (_fun104188_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104188_ip = 52;
                                continue _fun104188
                            }
                        case 13:
                            var3 = _closure1_slot5;
                            var2 = var3.getDMFromUserId;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var2 = var2.bind(var3)(var1);
                            var1 = var3.getChannel;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        case 52:
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var5, var0);
                _closure2_slot3 = var0;
                var5 = null;
                var11 = var5 != var0;
                _closure2_slot4 = var11;
                var10 = _closure1_slot4;
                var7 = var10.useEffect;
                var6 = new Array(2);
                var6[0] = var11;
                var11 = var5 == var0;
                var5 = undefined;
                if (var11) {
                    _fun104186_ip = 317;
                    continue _fun104186
                }
            case 312:
                var5 = var0.id;
            case 317:
                var6[1] = var5;
                var5 = function() { // Environment: var2
                    _fun104189: for (var _fun104189_ip = 0;;) switch (_fun104189_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun104189_ip = 14;
                                continue _fun104189
                            }
                        case 10:
                            var0 = undefined;
                            return var0;
                        case 14:
                            var0 = function() { // Environment: var0
                                _fun104190: for (var _fun104190_ip = 0;;) switch (_fun104190_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 10;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.clearAll;
                                        var6 = _closure2_slot3;
                                        var2 = null;
                                        var6 = var2 == var6;
                                        var2 = undefined;
                                        if (var6) {
                                            _fun104190_ip = 58;
                                            continue _fun104190
                                        }
                                    case 49:
                                        var5 = _closure2_slot3;
                                        var2 = var5.id;
                                    case 58:
                                        var1 = _closure1_slot6;
                                        var1 = var1.ChannelMessage;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var5 = var7.bind(var10)(var5, var6);
                var5 = _closure1_slot4;
                var6 = var5.useCallback;
                var3 = function() { // Environment: var2
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun104193: for (var _fun104193_ip = 0;;) switch (_fun104193_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun104193_ip = 774;
                                        continue _fun104193
                                    }
                                case 13:
                                    var1 = _closure2_slot1;
                                    var12 = null;
                                    if (!(var12 != var1)) {
                                        _fun104193_ip = 763;
                                        continue _fun104193
                                    }
                                case 29:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 11;
                                    var1 = var3[var1];
                                    var10 = undefined;
                                    var3 = var2.bind(var10)(var1);
                                    var2 = var3.getOrEnsurePrivateChannel;
                                    var1 = _closure2_slot1;
                                    var1 = var1.id;
                                    var1 = var2.bind(var3)(var1);
                                    SaveGenerator(address = 78);
                                case 76:
                                    return var1;
                                case 78:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun104193_ip = 771;
                                        continue _fun104193
                                    }
                                case 87:
                                    var3 = _closure1_slot5;
                                    var2 = var3.getChannel;
                                    var2 = var2.bind(var3)(var1);
                                    if (!(var12 != var2)) {
                                        _fun104193_ip = 628;
                                        continue _fun104193
                                    }
                                case 108:
                                    var3 = _closure2_slot0;
                                    var5 = var3.content_type;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var8[var3];
                                    var3 = var7.bind(var10)(var3);
                                    var3 = var3.ContentInventoryEntryType;
                                    var3 = var3.CUSTOM_STATUS;
                                    if (!(var5 !== var3)) {
                                        _fun104193_ip = 246;
                                        continue _fun104193
                                    }
                                case 154:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 16;
                                    var3 = var7[var3];
                                    var7 = var5.bind(var10)(var3);
                                    var5 = var7.sendMessageWithEmbed;
                                    var3 = {};
                                    var3.channel = var2;
                                    var3.content = var4;
                                    var8 = _closure2_slot0;
                                    var3.entry = var8;
                                    var8 = false;
                                    var3.whenReady = var8;
                                    var3.doNotNotifyOnError = var8;
                                    var8 = _closure1_slot9;
                                    var8 = var8.ICYMI;
                                    var3.location = var8;
                                    var3 = var5.bind(var7)(var3);
                                    SaveGenerator(address = 234);
                                case 232:
                                    return var3;
                                case 234:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                    if (!var5) {
                                        _fun104193_ip = 628;
                                        continue _fun104193
                                    }
                                case 243:
                                    return var3;
                                case 246:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var7[var3];
                                    var8 = var5.bind(var10)(var3);
                                    var7 = var8.getStatusReplyContent;
                                    var3 = {};
                                    var5 = _closure2_slot0;
                                    var11 = var5.extra;
                                    var11 = var11.status;
                                    var3.status = var11;
                                    var5 = var5.extra;
                                    var5 = var5.emoji_name;
                                    var11 = var12 != var5;
                                    var14 = '';
                                    var5 = var14;
                                    if (!var11) {
                                        _fun104193_ip = 465;
                                        continue _fun104193
                                    }
                                case 322:
                                    var11 = _closure2_slot0;
                                    var11 = var11.extra;
                                    var11 = var11.emoji_id;
                                    if (!(var12 != var11)) {
                                        _fun104193_ip = 381;
                                        continue _fun104193
                                    }
                                case 342:
                                    var12 = global;
                                    var13 = var12.String;
                                    var11 = _closure2_slot0;
                                    var11 = var11.extra;
                                    var11 = var11.emoji_id;
                                    var13 = var13.bind(var10)(var11);
                                    var11 = '0';
                                    if (!(var11 === var13)) {
                                        _fun104193_ip = 417;
                                        continue _fun104193
                                    }
                                case 381:
                                    var11 = _closure2_slot0;
                                    var11 = var11.extra;
                                    var13 = var11.emoji_name;
                                    var11 = global;
                                    var11 = var11.HermesInternal;
                                    var11 = var11.concat;
                                    var11 = var11.bind(var14)(var13);
                                    _fun104193_ip = 462;
                                    continue _fun104193;
                                case 417:
                                    var13 = _closure2_slot0;
                                    var13 = var13.extra;
                                    var15 = var13.emoji_name;
                                    var12 = var12.HermesInternal;
                                    var14 = var12.concat;
                                    var13 = '`:';
                                    var12 = ':`';
                                    var11 = var14.bind(var13)(var15, var12);
                                case 462:
                                    var5 = var11;
                                case 465:
                                    var3.emojiStr = var5;
                                    var3.reply = var4;
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var11 = 13;
                                    var11 = var5[var11];
                                    var13 = var4.bind(var10)(var11);
                                    var12 = var13.getName;
                                    var11 = _closure2_slot1;
                                    var11 = var12.bind(var13)(var11);
                                    var3.username = var11;
                                    var9 = _closure2_slot0;
                                    var9 = var9.extra;
                                    var9 = var9.attachments;
                                    var3.attachments = var9;
                                    var8 = var7.bind(var8)(var3);
                                    var3 = 14;
                                    var3 = var5[var3];
                                    var7 = var4.bind(var10)(var3);
                                    var3 = var7.parse;
                                    var18 = var3.bind(var7)(var2, var8);
                                    var3 = 15;
                                    var3 = var5[var3];
                                    var7 = var4.bind(var10)(var3);
                                    var5 = var7.sendMessage;
                                    var19 = var2.id;
                                    var3 = {};
                                    var2 = _closure1_slot9;
                                    var2 = var2.ICYMI;
                                    var3.location = var2;
                                    var17 = false;
                                    var20 = var7;
                                    var16 = var3;
                                    var2 = var20[var5](var19, var18, var17, var16, var15);
                                    SaveGenerator(address = 619);
                                case 617:
                                    return var2;
                                case 619:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun104193_ip = 768;
                                        continue _fun104193
                                    }
                                case 628:
                                    var4 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var11[var3];
                                    var5 = var4.bind(var10)(var3);
                                    var3 = var5.hideActionSheet;
                                    var3 = var3.bind(var5)();
                                    var3 = 18;
                                    var3 = var11[var3];
                                    var5 = var4.bind(var10)(var3);
                                    var4 = var5.open;
                                    var3 = {};
                                    var7 = 'content_inventory_message_sent';
                                    var3.key = var7;
                                    var9 = _closure1_slot0;
                                    var6 = 19;
                                    var7 = var11[var6];
                                    var7 = var9.bind(var10)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var11[var6];
                                    var6 = var9.bind(var10)(var6);
                                    var6 = var6.t;
                                    var6 = var6.fjcCk5;
                                    var6 = var7.bind(var8)(var6);
                                    var3.content = var6;
                                    var6 = function() {
                                        var3 = _closure1_slot10;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 20;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = var0.ChatCheckIcon;
                                        var0 = {};
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var3.icon = var6;
                                    var3 = var4.bind(var5)(var3);
                                case 763:
                                    var3 = undefined;
                                    return var3;
                                case 768:
                                    return var2;
                                case 771:
                                    return var1;
                                case 774:
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
                var4 = var3.bind(var4)();
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var6 = var6.bind(var5)(var4, var3);
                _closure2_slot5 = var6;
                var4 = var5.useCallback;
                var7 = var8.id;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var1;
                var3[2] = var6;
                var1 = function(arg0) { // Environment: var2
                    _fun104196: for (var _fun104196_ip = 0;;) switch (_fun104196_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 21;
                            var0 = var6[var1];
                            var2 = undefined;
                            var11 = var5.bind(var2)(var0);
                            var10 = var11.itemInteracted;
                            var4 = _closure2_slot0;
                            var9 = var4.id;
                            var8 = _closure2_slot2;
                            var7 = 'press_emoji_send';
                            var7 = var10.bind(var11)(var9, var8, var7);
                            var1 = var6[var1];
                            var6 = var5.bind(var2)(var1);
                            var5 = var6.feedItemActioned;
                            var1 = {};
                            var4 = var4.id;
                            var1.itemId = var4;
                            var4 = _closure2_slot2;
                            var1.itemType = var4;
                            var4 = null;
                            var7 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'reaction_reply_button',
                                'actionIntentType': 'react',
                                'actionDestinationType': null
                            };
                            var1.actionParameters = var7;
                            var1 = var5.bind(var6)(var1);
                            var1 = _closure2_slot5;
                            var0 = var3.id;
                            if (!(var4 == var0)) {
                                _fun104196_ip = 145;
                                continue _fun104196
                            }
                        case 138:
                            var0 = var3.surrogates;
                            _fun104196_ip = 173;
                            continue _fun104196;
                        case 145:
                            var5 = var3.name;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = ':';
                            var0 = var4.bind(var3)(var5, var3);
                        case 173:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var7 = var4.bind(var5)(var1, var3);
                _closure2_slot6 = var7;
                var3 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var7;
                var0 = function() { // Environment: var2
                    _fun104197: for (var _fun104197_ip = 0;;) switch (_fun104197_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openEmojiPickerActionSheet;
                            var1 = {
                                'pickerIntention': null,
                                'autoFocus': false,
                                'startExpanded': false
                            };
                            var5 = _closure1_slot8;
                            var5 = var5.REACTION;
                            var1.pickerIntention = var5;
                            var5 = _closure2_slot6;
                            var1.onPressEmoji = var5;
                            var7 = _closure2_slot3;
                            var5 = null;
                            var7 = var5 != var7;
                            var5 = undefined;
                            if (!var7) {
                                _fun104197_ip = 92;
                                continue _fun104197
                            }
                        case 88:
                            var5 = _closure2_slot3;
                        case 92:
                            var1.channel = var5;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 23;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.ReactionTypes;
                            var4 = var4.NORMAL;
                            var1.reactionType = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var0, var1);
                var0 = {};
                var4 = var5.useCallback;
                var3 = new Array(4);
                var3[0] = var9;
                var3[1] = var8;
                var3[2] = var7;
                var3[3] = var6;
                var2 = function() { // Environment: var2
                    _fun104198: for (var _fun104198_ip = 0;;) switch (_fun104198_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun104198_ip = 351;
                                continue _fun104198
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            var3 = var1.content_type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 9;
                            var1 = var1[var5];
                            var7 = undefined;
                            var1 = var4.bind(var7)(var1);
                            var1 = var1.ContentInventoryEntryType;
                            var1 = var1.CUSTOM_STATUS;
                            var9 = 'hotwheels_custom_status';
                            if (!(var1 !== var3)) {
                                _fun104198_ip = 149;
                                continue _fun104198
                            }
                        case 73:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var7)(var1);
                            var1 = var1.ContentInventoryEntryType;
                            var1 = var1.TOP_GAME;
                            if (!(var1 !== var3)) {
                                _fun104198_ip = 143;
                                continue _fun104198
                            }
                        case 106:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var7)(var1);
                            var1 = var1.ContentInventoryEntryType;
                            var1 = var1.PLAYED_GAME;
                            var9 = 'unknown';
                            if (!(var1 === var3)) {
                                _fun104198_ip = 149;
                                continue _fun104198
                            }
                        case 143:
                            var9 = 'hotwheels_gaming_activity';
                        case 149:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 21;
                            var5 = var1[var3];
                            var11 = var4.bind(var7)(var5);
                            var10 = var11.itemInteracted;
                            var5 = _closure2_slot0;
                            var8 = var5.id;
                            var6 = 'press_reply_react';
                            var6 = var10.bind(var11)(var8, var9, var6);
                            var3 = var1[var3];
                            var8 = var4.bind(var7)(var3);
                            var6 = var8.feedItemActioned;
                            var3 = {};
                            var10 = var5.id;
                            var3.itemId = var10;
                            var3.itemType = var9;
                            var9 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var3.actionParameters = var9;
                            var3 = var6.bind(var8)(var3);
                            var3 = 17;
                            var3 = var1[var3];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.openLazy;
                            var6 = _closure1_slot0;
                            var2 = 25;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 24;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var1.content = var5;
                            var5 = _closure2_slot1;
                            var1.author = var5;
                            var5 = _closure2_slot5;
                            var1.sendMessage = var5;
                            var0 = _closure2_slot6;
                            var1.onPressEmoji = var0;
                            var0 = 'ReactActionSheet';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 351:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var0.openReplyActionSheet = var2;
                var0.openEmojiPicker = var1;
                return var0;
        }
    };
    var2.useReplyActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 3992, 1613, 1616, 1346, 33, 566, 6830, 7602, 3936, 13579, 3227, 5583, 6521, 13568, 3269, 3139, 1234, 10499, 8866, 6984, 6549, 13579, 1307, 2]);