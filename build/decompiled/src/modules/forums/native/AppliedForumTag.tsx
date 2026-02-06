// modules/forums/native/AppliedForumTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun74827: for (var _fun74827_ip = 0;;) switch (_fun74827_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.tag;
                var2 = var0.hasUnreads;
                var0 = var0.containerStyle;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                var _closure2_slot1 = var1;
                var1 = var5.name;
                var _closure2_slot2 = var1;
                var1 = var5.emojiId;
                var _closure2_slot3 = var1;
                var1 = var5.emojiName;
                var _closure2_slot4 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var8 = var6.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var4
                    _fun74828: for (var _fun74828_ip = 0;;) switch (_fun74828_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun74828_ip = 38;
                                continue _fun74828
                            }
                        case 16:
                            var3 = _closure1_slot4;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var6, var1);
                var _closure2_slot5 = var1;
                var1 = 'text-muted';
                if (!var2) {
                    _fun74827_ip = 145;
                    continue _fun74827
                }
            case 139:
                var1 = 'text-default';
            case 145:
                _closure2_slot6 = var1;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var5.id;
                var0.tagId = var5;
                var4 = function arg0() {
                    _fun74829: for (var _fun74829_ip = 0;;) switch (_fun74829_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = var2.ref;
                            var11 = null;
                            var1 = Object.create(var11);
                            var0 = 0;
                            var1.ref = var0;
                            var19 = {};
                            var18 = var2;
                            var17 = var1;
                            var5 = copyDataProperties(var19, var18, var17);
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot3;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var7 = var0.container;
                            var0 = new Array(2);
                            var0[0] = var7;
                            var7 = _closure2_slot0;
                            var0[1] = var7;
                            var1.style = var0;
                            var0 = true;
                            var1.accessible = var0;
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 9;
                            var10 = var13[var7];
                            var0 = undefined;
                            var10 = var9.bind(var0)(var10);
                            var12 = var10.intl;
                            var10 = var12.formatToPlainString;
                            var7 = var13[var7];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.t;
                            var9 = var7.tXXD6v;
                            var7 = {};
                            var13 = _closure2_slot2;
                            var7.tagName = var13;
                            var7 = var10.bind(var12)(var9, var7);
                            var1.accessibilityLabel = var7;
                            var1.ref = var6;
                            var19 = var1;
                            var18 = var5;
                            var5 = copyDataProperties(var19, var18);
                            var5 = _closure2_slot4;
                            var6 = var11 != var5;
                            if (var6) {
                                _fun74829_ip = 188;
                                continue _fun74829
                            }
                        case 180:
                            var5 = _closure2_slot3;
                            var6 = var11 != var5;
                        case 188:
                            if (!var6) {
                                _fun74829_ip = 358;
                                continue _fun74829
                            }
                        case 194:
                            var9 = _closure1_slot6;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var5 = 10;
                            var5 = var10[var5];
                            var7 = var7.bind(var0)(var5);
                            var5 = {};
                            var10 = _closure2_slot1;
                            var12 = var10.textEmoji;
                            var5.textEmojiStyle = var12;
                            var10 = var10.emoji;
                            var5.fastImageStyle = var10;
                            var10 = _closure2_slot5;
                            var12 = var11 != var10;
                            var10 = undefined;
                            if (!var12) {
                                _fun74829_ip = 324;
                                continue _fun74829
                            }
                        case 259:
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 11;
                            var12 = var14[var12];
                            var14 = var13.bind(var0)(var12);
                            var13 = var14.getEmojiURL;
                            var12 = {};
                            var15 = _closure2_slot5;
                            var16 = var15.id;
                            var12.id = var16;
                            var15 = var15.animated;
                            var12.animated = var15;
                            var15 = _closure1_slot5;
                            var12.size = var15;
                            var10 = var13.bind(var14)(var12);
                        case 324:
                            var5.src = var10;
                            var10 = _closure2_slot4;
                            var11 = var11 != var10;
                            var10 = '';
                            if (!var11) {
                                _fun74829_ip = 348;
                                continue _fun74829
                            }
                        case 344:
                            var10 = _closure2_slot4;
                        case 348:
                            var5.name = var10;
                            var6 = var9.bind(var0)(var7, var5);
                        case 358:
                            var5 = new Array(2);
                            var5[0] = var6;
                            var7 = _closure1_slot6;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 12;
                            var4 = var9[var4];
                            var4 = var6.bind(var0)(var4);
                            var6 = var4.Text;
                            var4 = {
                                'lineClamp': 1,
                                'style': null,
                                'variant': 'text-xs/semibold'
                            };
                            var9 = _closure2_slot1;
                            var9 = var9.tagName;
                            var4.style = var9;
                            var9 = _closure2_slot6;
                            var4.color = var9;
                            var8 = _closure2_slot2;
                            var4.children = var8;
                            var4 = var7.bind(var0)(var6, var4);
                            var5[1] = var4;
                            var4 = 'children';
                            var1[var4] = var5;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'height': 24,
        'paddingHorizontal': 8,
        'borderRadius': 20,
        'backgroundColor': null,
        'marginRight': 4,
        'flexShrink': 1
    };
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var11;
    var4.pill = var9;
    var9 = {
        'height': 12,
        'width': 12,
        'marginRight': 4,
        'flexShrink': 0
    };
    var4.emoji = var9;
    var9 = {
        'fontSize': 10,
        'marginRight': 4
    };
    var4.textEmoji = var9;
    var9 = {};
    var9.flexShrink = var10;
    var4.tagName = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.container = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/AppliedForumTag.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.tag;
        var6 = var0.hasUnreads;
        var5 = var0.containerStyle;
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot9;
        var0 = {};
        var0.tag = var7;
        var0.hasUnreads = var6;
        var6 = var4.pill;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.containerStyle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AppliedForumTagPill = var3;
    var2.AppliedForumTag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4740, 1624, 33, 1297, 671, 566, 9440, 1234, 5777, 1417, 3943, 2]);