// modules/messages/native/emoji/MessageEmojiActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun74268: for (var _fun74268_ip = 0;;) switch (_fun74268_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var9 = 0;
            var6 = var5[var9];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.AnalyticEvents;
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var11 = 16;
            var8.paddingHorizontal = var11;
            var10 = 5;
            var10 = var5[var10];
            var12 = var4.bind(var0)(var10);
            var10 = var12.isAndroid;
            var12 = var10.bind(var12)();
            var10 = 0;
            if (!var12) {
                _fun74268_ip = 195;
                continue _fun74268
            }
        case 192:
            var10 = var11;
        case 195:
            var8.paddingBottom = var10;
            var3.contentWrapper = var8;
            var8 = {};
            var8.paddingTop = var9;
            var3.content = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot6 = var3;
            var3 = function arg0() {
                var0 = arg0;
                var9 = var0.emojiNode;
                var0 = _closure1_slot6;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 6;
                var0 = var10[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.v4;
                var8 = var0.bind(var2)();
                var _closure2_slot0 = var8;
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var5 = true;
                var0.startExpanded = var5;
                var4 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot4;
                    var2 = var1.CLOSE_POPOUT;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.nonce = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.onDismiss = var4;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var7.contentWrapper;
                var4.style = var7;
                var7 = _closure1_slot1;
                var6 = 9;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.emojiNode = var9;
                var6.nonce = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot7 = var3;
            var3 = function arg0() {
                _fun74271: for (var _fun74271_ip = 0;;) switch (_fun74271_ip) {
                    case 0:
                        var0 = arg0;
                        var14 = var0.emojiNode;
                        var3 = undefined;
                        var _closure2_slot0 = var3;
                        var0 = _closure1_slot6;
                        var7 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var0 = var2[var0];
                        var2 = var1.bind(var3)(var0);
                        var1 = var2.useEmojiAndSource;
                        var0 = {};
                        var5 = var14.id;
                        var0.emojiId = var5;
                        var0 = var1.bind(var2)(var0);
                        var13 = var0.sourceType;
                        var11 = var0.expressionSourceGuild;
                        var12 = var0.expressionSourceApplication;
                        var9 = var0.hasJoinedEmojiSourceGuild;
                        var10 = var0.emoji;
                        var0 = var0.isFetching;
                        if (var0) {
                            _fun74271_ip = 287;
                            continue _fun74271
                        }
                    case 113:
                        var1 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var0 = 6;
                        var0 = var15[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = var2.v4;
                        var8 = var0.bind(var2)();
                        _closure2_slot0 = var8;
                        var2 = _closure1_slot5;
                        var0 = 7;
                        var0 = var15[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.BottomSheet;
                        var0 = {};
                        var5 = true;
                        var0.startExpanded = var5;
                        var4 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 8;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot4;
                            var2 = var1.CLOSE_POPOUT;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.nonce = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var0.onDismiss = var4;
                        var5 = _closure1_slot3;
                        var4 = {};
                        var7 = var7.contentWrapper;
                        var4.style = var7;
                        var7 = _closure1_slot1;
                        var6 = 11;
                        var6 = var15[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var6.emojiNode = var14;
                        var6.sourceType = var13;
                        var6.expressionSourceApplication = var12;
                        var6.expressionSourceGuild = var11;
                        var6.customEmojiFromJoinedGuild = var10;
                        var6.hasJoinedEmojiSourceGuild = var9;
                        var6.nonce = var8;
                        var6 = var2.bind(var3)(var7, var6);
                        var4.children = var6;
                        var4 = var2.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    case 287:
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot8 = var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/messages/native/emoji/MessageEmojiActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun74273: for (var _fun74273_ip = 0;;) switch (_fun74273_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.emojiNode;
                        var0 = 'surrogate';
                        var0 = var0 in var1;
                        var4 = _closure1_slot5;
                        if (var0) {
                            _fun74273_ip = 48;
                            continue _fun74273
                        }
                    case 27:
                        var5 = _closure1_slot8;
                        var3 = {};
                        var3.emojiNode = var1;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var5, var3);
                        _fun74273_ip = 67;
                        continue _fun74273;
                    case 48:
                        var3 = _closure1_slot7;
                        var2 = {};
                        var2.emojiNode = var1;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 67:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 478, 491, 4934, 795, 9355, 9362, 9363, 2]);