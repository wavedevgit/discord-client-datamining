// components_native/chat/contentHandlers.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0) { // Original name: onLongPressLink, environment: var3
        _fun77723: for (var _fun77723_ip = 0;;) switch (_fun77723_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.nativeEvent;
                var3 = var0.url;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun77723_ip = 31;
                    continue _fun77723
                }
            case 23:
                var1 = '';
                var0 = var1 !== var3;
            case 31:
                if (!var0) {
                    _fun77723_ip = 71;
                    continue _fun77723
                }
            case 34:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.urlString = var3;
                var0 = var1.bind(var2)(var0);
            case 71:
                var0 = undefined;
                return var0;
        }
    };
    var1.onLongPressLink = var6;
    var6 = function*(arg0) { // Environment: var3
        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
            _fun77725: for (var _fun77725_ip = 0;;) switch (_fun77725_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun77725_ip = 163;
                        continue _fun77725
                    }
                case 10:
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.data;
                    var6 = var1.attachmentUrl;
                    var3 = undefined;
                    SaveGenerator(address = 36);
                case 34:
                    return var3;
                case 36:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun77725_ip = 160;
                        continue _fun77725
                    }
                case 42:
                    var2 = null;
                    if (!(var2 != var6)) {
                        _fun77725_ip = 154;
                        continue _fun77725
                    }
                case 48:
                    var2 = '';
                    if (!(var2 !== var6)) {
                        _fun77725_ip = 154;
                        continue _fun77725
                    }
                case 56:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 2;
                    var2 = var7[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.maybeRefreshAttachmentUrl;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address = 94);
                case 92:
                    return var2;
                case 94:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                    if (var5) {
                        _fun77725_ip = 157;
                        continue _fun77725
                    }
                case 100:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var4 = var7.trackLinkClicked;
                    var4 = var4.bind(var7)(var2);
                    var4 = 4;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.openURL;
                    var4 = var4.bind(var5)(var2);
                case 154:
                    return var3;
                case 157:
                    return var2;
                case 160:
                    return var1;
                case 163:
                    return var0;
            }
        };
        var1 = var0.next;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = function() { // Environment: var3
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onTapAttachmentLink = var6;
    var6 = function*(arg0) { // Environment: var3
        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
            _fun77728: for (var _fun77728_ip = 0;;) switch (_fun77728_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun77728_ip = 141;
                        continue _fun77728
                    }
                case 10:
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.data;
                    var6 = var1.attachmentUrl;
                    var3 = undefined;
                    SaveGenerator(address = 36);
                case 34:
                    return var3;
                case 36:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun77728_ip = 138;
                        continue _fun77728
                    }
                case 42:
                    var2 = null;
                    if (!(var2 != var6)) {
                        _fun77728_ip = 132;
                        continue _fun77728
                    }
                case 48:
                    var2 = '';
                    if (!(var2 !== var6)) {
                        _fun77728_ip = 132;
                        continue _fun77728
                    }
                case 56:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 2;
                    var2 = var7[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.maybeRefreshAttachmentUrl;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address = 94);
                case 92:
                    return var2;
                case 94:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                    if (var5) {
                        _fun77728_ip = 135;
                        continue _fun77728
                    }
                case 100:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 1;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var4.urlString = var2;
                    var4 = var5.bind(var3)(var4);
                case 132:
                    return var3;
                case 135:
                    return var2;
                case 138:
                    return var1;
                case 141:
                    return var0;
            }
        };
        var1 = var0.next;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = function() { // Environment: var3
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.onLongPressAttachmentLink = var6;
    var6 = function(arg0) { // Original name: onTapMention, environment: var3
        _fun77730: for (var _fun77730_ip = 0;;) switch (_fun77730_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.getNativeSyntheticEventData;
                var2 = arg0;
                var2 = var3.bind(var5)(var2);
                var6 = var2.userId;
                var3 = var2.channelId;
                var7 = var2.roleName;
                var5 = var2.parsedUserId;
                var _closure2_slot0 = var5;
                var2 = null;
                if (!(var2 == var6)) {
                    _fun77730_ip = 404;
                    continue _fun77730
                }
            case 76:
                if (!(var2 === var7)) {
                    _fun77730_ip = 470;
                    continue _fun77730
                }
            case 83:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.DeveloperMode;
                var7 = var8.getSetting;
                var7 = var7.bind(var8)();
                if (!var7) {
                    _fun77730_ip = 126;
                    continue _fun77730
                }
            case 122:
                if (!(var2 == var5)) {
                    _fun77730_ip = 130;
                    continue _fun77730
                }
            case 126:
                var7 = {};
                _fun77730_ip = 207;
                continue _fun77730;
            case 130:
                var2 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 9;
                var8 = var11[var5];
                var8 = var10.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["/AXYnE"];
                var5 = var8.bind(var9)(var5);
                var2.secondaryConfirmText = var5;
                var4 = function() { // Original name: onConfirmSecondary, environment: var4
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = 11;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2.onConfirmSecondary = var4;
                var7 = var2;
            case 207:
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 12;
                var2 = var12[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.show;
                var2 = {};
                var11 = _closure1_slot0;
                var8 = 9;
                var9 = var12[var8];
                var9 = var11.bind(var0)(var9);
                var13 = var9.intl;
                var10 = var13.string;
                var9 = var12[var8];
                var9 = var11.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.r0DLNm;
                var9 = var10.bind(var13)(var9);
                var2.title = var9;
                var9 = var12[var8];
                var9 = var11.bind(var0)(var9);
                var13 = var9.intl;
                var10 = var13.string;
                var9 = var12[var8];
                var9 = var11.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.Fqqbhg;
                var9 = var10.bind(var13)(var9);
                var2.body = var9;
                var9 = var12[var8];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var0)(var8);
                var8 = var8.t;
                var8 = var8.BddRzS;
                var8 = var9.bind(var10)(var8);
                var2.confirmText = var8;
                var15 = var2;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var2 = var4.bind(var5)(var2);
                _fun77730_ip = 470;
                continue _fun77730;
            case 404:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var4.bind(var0)(var1);
                var1 = {};
                var1.userId = var6;
                var1.channelId = var3;
                var3 = 7;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.USER_MENTION;
                var3 = new Array(1);
                var3[0] = var4;
                var1.sourceAnalyticsLocations = var3;
                var1 = var2.bind(var0)(var1);
            case 470:
                return var0;
        }
    };
    var1.onTapMention = var6;
    var6 = function(arg0) { // Original name: onTapTimestamp, environment: var3
        var0 = arg0;
        var0 = var0.nativeEvent;
        var1 = var0.node;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.presentTimestamp;
        var1 = var1.full;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onTapTimestamp = var6;
    var6 = function(arg0) { // Original name: onTapInlineCode, environment: var3
        _fun77733: for (var _fun77733_ip = 0;;) switch (_fun77733_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.nativeEvent;
                var0 = var0.node;
                var2 = var0.content;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun77733_ip = 45;
                    continue _fun77733
                }
            case 29:
                var2 = var0.content;
                var3 = 'string';
                var2 = typeof var2;
                var1 = var3 === var2;
            case 45:
                if (!var1) {
                    _fun77733_ip = 111;
                    continue _fun77733
                }
            case 48:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var4 = var3[var1];
                var1 = undefined;
                var5 = var2.bind(var1)(var4);
                var4 = var5.copy;
                var0 = var0.content;
                var0 = var4.bind(var5)(var0);
                var0 = 11;
                var0 = var3[var0];
                var1 = var2.bind(var1)(var0);
                var0 = var1.presentCopiedToClipboard;
                var0 = var0.bind(var1)();
            case 111:
                var0 = undefined;
                return var0;
        }
    };
    var1.onTapInlineCode = var6;
    var3 = function(arg0) { // Original name: onTapEmoji, environment: var3
        var0 = arg0;
        var0 = var0.nativeEvent;
        var1 = var0.node;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
        var4 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 15;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 14;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = {};
        var2.emojiNode = var1;
        var1 = 'MessageEmojiActionSheet';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var1.onTapEmoji = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/chat/contentHandlers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.contentHandlers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9194, 8405, 5853, 3103, 9169, 7310, 5536, 1348, 1234, 5246, 3106, 3956, 3237, 9266, 1307, 2]);