// modules/saved_messages/native/ForLaterMessageCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun75892: for (var _fun75892_ip = 0;;) switch (_fun75892_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.savedMessage;
                var _closure2_slot0 = var9;
                var0 = _closure1_slot13;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 9;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {
                    'variant': 'primary',
                    'border': 'subtle',
                    'shadow': 'none'
                };
                var5 = var8.card;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var8.deletedCard;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot11;
                var4 = 10;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.CircleErrorIcon;
                var4 = {};
                var13 = 'xs';
                var4.size = var13;
                var14 = _closure1_slot1;
                var13 = 8;
                var13 = var10[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.colors;
                var13 = var13.ICON_MUTED;
                var4.color = var13;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var5 = 11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var8.deletedText;
                var5.style = var10;
                var9 = var9.saveData;
                var10 = var9.dueAt;
                var9 = null;
                if (!(var9 == var10)) {
                    _fun75892_ip = 299;
                    continue _fun75892
                }
            case 240:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 12;
                var10 = var15[var9];
                var10 = var14.bind(var3)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.o572Fe;
                var9 = var10.bind(var13)(var9);
                _fun75892_ip = 356;
                continue _fun75892;
            case 299:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 12;
                var13 = var16[var10];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["wuQm+j"];
                var9 = var13.bind(var14)(var10);
            case 356:
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.deletedActionButton;
                var5.style = var8;
                var10 = _closure1_slot11;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 13;
                var8 = var14[var8];
                var8 = var17.bind(var3)(var8);
                var9 = var8.IconButton;
                var8 = {
                    'variant': 'secondary',
                    'accessibilityLabel': null,
                    'size': 'sm'
                };
                var13 = 12;
                var15 = var14[var13];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var14[var13];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.SvXS1Z;
                var13 = var15.bind(var16)(var13);
                var8.accessibilityLabel = var13;
                var13 = _closure1_slot1;
                var12 = 14;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var8.icon = var12;
                var11 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.removeSavedMessage;
                    var0 = _closure2_slot0;
                    var0 = var0.saveData;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = function arg0() {
        _fun75894: for (var _fun75894_ip = 0;;) switch (_fun75894_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.savedMessage;
                var _closure2_slot0 = var4;
                var15 = var0.throttledNow;
                var2 = _closure1_slot13;
                var3 = undefined;
                var10 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var6 = var5.bind(var3)(var2);
                var2 = var6.useSavedMessageChannel;
                var14 = var2.bind(var6)(var4);
                var _closure2_slot1 = var14;
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var6 = _closure1_slot3;
                var2 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun75896: for (var _fun75896_ip = 0;;) switch (_fun75896_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun75896_ip = 86;
                                    continue _fun75896
                                }
                            case 7:
                                var1 = function() { // Environment: var1
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = function*() { // Environment: var0
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun75899: for (var _fun75899_ip = 0;;) switch (_fun75899_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun75899_ip = 382;
                                                        continue _fun75899
                                                    }
                                                case 10:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var1 = 16;
                                                    var1 = var2[var1];
                                                    var2 = undefined;
                                                    var5 = var3.bind(var2)(var1);
                                                    var4 = var5.savedMessageJumpToMessage;
                                                    var3 = _closure2_slot0;
                                                    var1 = _closure2_slot1;
                                                    var1 = var4.bind(var5)(var3, var1);
                                                    SaveGenerator(address = 62);
                                                case 60:
                                                    return var1;
                                                case 62:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                    if (var3) {
                                                        _fun75899_ip = 379;
                                                        continue _fun75899
                                                    }
                                                case 71:
                                                    var4 = _closure1_slot1;
                                                    var5 = _closure1_slot2;
                                                    var3 = 17;
                                                    var3 = var5[var3];
                                                    var6 = var4.bind(var2)(var3);
                                                    var3 = var6.pop;
                                                    var3 = var3.bind(var6)();
                                                    var3 = 18;
                                                    var3 = var5[var3];
                                                    var6 = var4.bind(var2)(var3);
                                                    var5 = var6.track;
                                                    var3 = _closure1_slot8;
                                                    var4 = var3.FOR_LATER_SAVED_MESSAGE_JUMP;
                                                    var3 = {};
                                                    var7 = _closure2_slot0;
                                                    var10 = var7.saveData;
                                                    var10 = var10.channelId;
                                                    var3.channel_id = var10;
                                                    var10 = var7.saveData;
                                                    var10 = var10.messageId;
                                                    var3.message_id = var10;
                                                    var11 = var7.message;
                                                    var10 = null;
                                                    var12 = var10 == var11;
                                                    var7 = undefined;
                                                    if (var12) {
                                                        _fun75899_ip = 192;
                                                        continue _fun75899
                                                    }
                                                case 181:
                                                    var11 = var11.author;
                                                    var7 = var11.id;
                                                case 192:
                                                    var3.message_author_id = var7;
                                                    var7 = _closure2_slot0;
                                                    var7 = var7.saveData;
                                                    var7 = var7.dueAt;
                                                    if (!(var10 == var7)) {
                                                        _fun75899_ip = 251;
                                                        continue _fun75899
                                                    }
                                                case 217:
                                                    var11 = _closure1_slot0;
                                                    var12 = _closure1_slot2;
                                                    var7 = 19;
                                                    var7 = var12[var7];
                                                    var7 = var11.bind(var2)(var7);
                                                    var7 = var7.SavedMessageSortTypes;
                                                    var7 = var7.BOOKMARK;
                                                    _fun75899_ip = 283;
                                                    continue _fun75899;
                                                case 251:
                                                    var12 = _closure1_slot0;
                                                    var13 = _closure1_slot2;
                                                    var11 = 19;
                                                    var11 = var13[var11];
                                                    var11 = var12.bind(var2)(var11);
                                                    var11 = var11.SavedMessageSortTypes;
                                                    var7 = var11.REMINDER;
                                                case 283:
                                                    var3.type = var7;
                                                    var7 = _closure2_slot0;
                                                    var7 = var7.saveData;
                                                    var7 = var7.dueAt;
                                                    var10 = var10 != var7;
                                                    var7 = undefined;
                                                    if (!var10) {
                                                        _fun75899_ip = 363;
                                                        continue _fun75899
                                                    }
                                                case 312:
                                                    var10 = _closure1_slot1;
                                                    var11 = _closure1_slot2;
                                                    var9 = 20;
                                                    var9 = var11[var9];
                                                    var9 = var10.bind(var2)(var9);
                                                    var10 = var9.bind(var2)();
                                                    var9 = var10.diff;
                                                    var8 = _closure2_slot0;
                                                    var8 = var8.saveData;
                                                    var8 = var8.dueAt;
                                                    var7 = var9.bind(var10)(var8);
                                                case 363:
                                                    var3.due_duration = var7;
                                                    var3 = var5.bind(var6)(var4, var3);
                                                    return var2;
                                                case 379:
                                                    return var1;
                                                case 382:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function() { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 21;
                                var3 = var5[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = _closure2_slot0;
                                var3 = var3.message;
                                var3 = var4.bind(var2)(var3, var1);
                                if (!var3) {
                                    _fun75896_ip = 80;
                                    continue _fun75896
                                }
                            case 66:
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 74);
                            case 72:
                                return var1;
                            case 74:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun75896_ip = 83;
                                    continue _fun75896
                                }
                            case 80:
                                return var2;
                            case 83:
                                return var1;
                            case 86:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var6.bind(var3)(var2);
                var2 = new Array(2);
                var2[0] = var4;
                var2[1] = var14;
                var6 = var8.bind(var9)(var6, var2);
                var2 = 22;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var8 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun75901: for (var _fun75901_ip = 0;;) switch (_fun75901_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var0 = var4 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun75901_ip = 27;
                                continue _fun75901
                            }
                        case 18:
                            var0 = _closure2_slot1;
                            var1 = var0.type;
                        case 27:
                            var0 = _closure1_slot9;
                            var0 = var0.UNKNOWN;
                            var0 = var1 === var0;
                            if (var0) {
                                _fun75901_ip = 114;
                                continue _fun75901
                            }
                        case 47:
                            var1 = _closure2_slot1;
                            var4 = var4 == var1;
                            if (var4) {
                                _fun75901_ip = 75;
                                continue _fun75901
                            }
                        case 58:
                            var5 = _closure2_slot1;
                            var1 = var5.isPrivate;
                            var1 = var1.bind(var5)();
                            var4 = !var1;
                        case 75:
                            var1 = !var4;
                            if (!var4) {
                                _fun75901_ip = 111;
                                continue _fun75901
                            }
                        case 81:
                            var5 = _closure1_slot6;
                            var4 = var5.can;
                            var3 = _closure1_slot10;
                            var3 = var3.VIEW_CHANNEL;
                            var2 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var2);
                        case 111:
                            var0 = var1;
                        case 114:
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var2, var1);
                var2 = var4.message;
                var11 = null;
                if (!(var11 != var2)) {
                    _fun75894_ip = 555;
                    continue _fun75894
                }
            case 168:
                if (!(var11 != var14)) {
                    _fun75894_ip = 555;
                    continue _fun75894
                }
            case 175:
                if (!var1) {
                    _fun75894_ip = 555;
                    continue _fun75894
                }
            case 181:
                var5 = _closure1_slot11;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 23;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.savedMessage = var4;
                var1.jumpToMessage = var6;
                var12 = var5.bind(var3)(var2, var1);
                var1 = var4.saveData;
                var1 = var1.dueAt;
                var13 = var11 != var1;
                var5 = _closure1_slot12;
                var2 = _closure1_slot0;
                var1 = 9;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Card;
                var1 = {
                    'variant': 'primary',
                    'border': 'subtle',
                    'shadow': 'none'
                };
                var7 = var10.card;
                var1.style = var7;
                var1.onPress = var6;
                var7 = null;
                if (!var13) {
                    _fun75894_ip = 351;
                    continue _fun75894
                }
            case 298:
                var9 = _closure1_slot11;
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 24;
                var6 = var16[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.ForLaterCardReminderHeader;
                var6 = {};
                var6.savedMessage = var4;
                var6.throttledNow = var15;
                var6.actions = var12;
                var7 = var9.bind(var3)(var8, var6);
            case 351:
                var6 = new Array(4);
                var6[0] = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 25;
                var7 = var15[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.ForLaterCardHeader;
                var7 = {};
                var7.channel = var14;
                var11 = null;
                if (var13) {
                    _fun75894_ip = 403;
                    continue _fun75894
                }
            case 400:
                var11 = var12;
            case 403:
                var7.actions = var11;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var10.cardDivider;
                var7.style = var11;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var10.messagePreview;
                var7.style = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 26;
                var10 = var13[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.ForLaterMessageRow;
                var10 = {
                    'message': null,
                    'lineClamp': 2,
                    'maxHeight': 250
                };
                var13 = var4.message;
                var10.message = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[3] = var7;
                var1.children = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 555:
                var2 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.savedMessage = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var4 = var13.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = arg3;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot9 = var8;
    var4 = var4.Permissions;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'gap': 16,
        'marginBottom': 16
    };
    var4.card = var10;
    var10 = {
        'marginHorizontal': 4294967280,
        'height': 1,
        'alignSelf': 'stretch'
    };
    var12 = 8;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var10.backgroundColor = var12;
    var4.cardDivider = var10;
    var10 = {
        'position': 'absolute',
        'right': 16,
        'zIndex': 10
    };
    var4.actionButton = var10;
    var10 = {
        'marginHorizontal': 4294967284,
        'marginVertical': 4294967287
    };
    var4.messagePreview = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var4.deletedCard = var10;
    var10 = {};
    var10.flex = var11;
    var4.deletedText = var10;
    var10 = {};
    var11 = 'auto';
    var10.marginLeft = var11;
    var4.deletedActionButton = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun75902: for (var _fun75902_ip = 0;;) switch (_fun75902_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.savedMessageKey;
                var _closure2_slot0 = var2;
                var5 = var1.throttledNow;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 22;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.getSavedMessage;
                    var0 = _closure2_slot0;
                    var1 = var0.channelId;
                    var0 = var0.messageId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun75902_ip = 111;
                    continue _fun75902
                }
            case 85:
                var3 = _closure1_slot11;
                var2 = _closure1_slot15;
                var1 = {};
                var1.savedMessage = var6;
                var1.throttledNow = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 111:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/native/ForLaterMessageCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ForLaterDeletedMessageCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 3050, 9586, 660, 33, 1297, 671, 4863, 5353, 3900, 1234, 7470, 3229, 9585, 9596, 4525, 795, 9587, 3004, 9597, 566, 9598, 9604, 9605, 9606, 2]);