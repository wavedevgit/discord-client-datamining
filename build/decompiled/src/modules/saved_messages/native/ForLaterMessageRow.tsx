// modules/saved_messages/native/ForLaterMessageRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterMessageRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.message;
        var1 = var0.lineClamp;
        var _closure2_slot0 = var1;
        var4 = var0.maxHeight;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 2;
        var2 = var8[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var9 = var2.bind(var3)();
        var5 = _closure1_slot0;
        var2 = 3;
        var2 = var8[var2];
        var11 = var5.bind(var3)(var2);
        var10 = var11.createNativeStyleProperties;
        var2 = {};
        var12 = 4;
        var12 = var8[var12];
        var12 = var1.bind(var3)(var12);
        var12 = var12.colors;
        var12 = var12.TEXT_DEFAULT;
        var2.seeMoreLabelColor = var12;
        var2 = var10.bind(var11)(var2);
        var2 = var2.bind(var3)(var9);
        var _closure2_slot1 = var2;
        var2 = 5;
        var9 = var8[var2];
        var9 = var5.bind(var3)(var9);
        var10 = var9.RenderEmbeds;
        var9 = var10.getSetting;
        var12 = var9.bind(var10)();
        var _closure2_slot2 = var12;
        var9 = var8[var2];
        var9 = var5.bind(var3)(var9);
        var10 = var9.InlineEmbedMedia;
        var9 = var10.getSetting;
        var11 = var9.bind(var10)();
        var _closure2_slot3 = var11;
        var2 = var8[var2];
        var2 = var5.bind(var3)(var2);
        var5 = var2.InlineAttachmentMedia;
        var2 = var5.getSetting;
        var2 = var2.bind(var5)();
        var _closure2_slot4 = var2;
        var10 = _closure1_slot3;
        var9 = var10.useMemo;
        var5 = new Array(3);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var2;
        var2 = function() { // Environment: var7
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var6 = var1;
            var0 = new var6[var0](var5);
            var0 = var0 instanceof Object ? var0 : var1;
            var2 = var0.setOptions;
            var1 = {
                'renderEmbeds': null,
                'inlineEmbedMedia': null,
                'inlineAttachmentMedia': null,
                'renderReplies': false,
                'renderExecutedCommands': false,
                'animateEmoji': false,
                'renderGiftCode': false,
                'renderActivityInstanceEmbed': false,
                'renderActivityInviteEmbed': false,
                'renderThreadEmbeds': false,
                'renderForumPostActions': false,
                'ignoreMentioned': true,
                'shouldDisableInteractiveComponents': true
            };
            var4 = _closure2_slot2;
            var1.renderEmbeds = var4;
            var4 = _closure2_slot3;
            var1.inlineEmbedMedia = var4;
            var3 = _closure2_slot4;
            var1.inlineAttachmentMedia = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var5 = var9.bind(var10)(var2, var5);
        var2 = _closure1_slot4;
        var0 = 7;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'pointerEvents': 'none',
            'horizontalOffset': 0
        };
        var7 = function arg0() {
            _fun76236: for (var _fun76236_ip = 0;;) switch (_fun76236_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun76236_ip = 125;
                        continue _fun76236
                    }
                case 13:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1.numberOfLines = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var6 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var6);
                    var6 = var7.isIOS;
                    var6 = var6.bind(var7)();
                    var1.expandable = var6;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.isIOS;
                    var3 = var2.bind(var3)();
                    var2 = '';
                    if (!var3) {
                        _fun76236_ip = 96;
                        continue _fun76236
                    }
                case 90:
                    var2 = '...';
                case 96:
                    var1.seeMoreLabel = var2;
                    var0 = _closure2_slot1;
                    var0 = var0.seeMoreLabelColor;
                    var1.seeMoreLabelColor = var0;
                    var0 = arg0;
                    var0.truncation = var1;
                case 125:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.modifyRow = var7;
        var0.message = var6;
        var0.rowGenerator = var5;
        var0.maxHeight = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ForLaterMessageRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3246, 1297, 671, 1348, 6536, 8834, 478, 2]);