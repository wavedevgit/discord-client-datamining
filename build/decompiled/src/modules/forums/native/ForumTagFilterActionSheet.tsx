// modules/forums/native/ForumTagFilterActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun91459: for (var _fun91459_ip = 0;;) switch (_fun91459_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.emojiId;
                var _closure2_slot0 = var2;
                var5 = var1.emojiName;
                var1 = _closure1_slot12;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var8 = var2.bind(var3)(var1);
                var2 = var8.useStateFromStores;
                var9 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    _fun91460: for (var _fun91460_ip = 0;;) switch (_fun91460_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun91460_ip = 38;
                                continue _fun91460
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var11 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var0 = 17;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = var4.emoji;
                var0.style = var6;
                var6 = var4.textEmoji;
                var0.textEmojiStyle = var6;
                var4 = var4.imageEmoji;
                var0.fastImageStyle = var4;
                var4 = null;
                var8 = var4 != var11;
                var6 = undefined;
                if (!var8) {
                    _fun91459_ip = 206;
                    continue _fun91459
                }
            case 149:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var10 = 18;
                var7 = var7[var10];
                var9 = var8.bind(var3)(var7);
                var8 = var9.getEmojiURL;
                var7 = {};
                var12 = var11.id;
                var7.id = var12;
                var11 = var11.animated;
                var7.animated = var11;
                var7.size = var10;
                var6 = var8.bind(var9)(var7);
            case 206:
                var0.src = var6;
                var6 = var4 != var5;
                var4 = '';
                if (!var6) {
                    _fun91459_ip = 225;
                    continue _fun91459
                }
            case 222:
                var4 = var5;
            case 225:
                var0.name = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useForumChannelStore;
    var _closure1_slot6 = var6;
    var3 = var3.useForumChannelStoreApi;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjects;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot9 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 18,
        'width': 18,
        'marginRight': 4,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.emoji = var8;
    var8 = {
        'height': 18,
        'width': 18
    };
    var3.imageEmoji = var8;
    var8 = {
        'fontSize': 14,
        'lineHeight': 20
    };
    var3.textEmoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumTagFilterActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91461: for (var _fun91461_ip = 0;;) switch (_fun91461_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var1 = _closure1_slot6;
                var0 = var11.id;
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var19 = var0.tagFilter;
                var0 = _closure1_slot7;
                var0 = var0.bind(var3)();
                var _closure2_slot1 = var0;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = global;
                var0 = var0.Set;
                var4 = var0.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var4;
                var0 = new var20[var0](var19, var18);
                var0 = var0 instanceof Object ? var0 : var4;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var9 = 0;
                var16 = var1[var9];
                var _closure2_slot2 = var16;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot3 = var0;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var2 = var14.bind(var3)(var0);
                var1 = var2.useUnmountEffect;
                var0 = function() { // Environment: var10
                    var2 = _closure2_slot1;
                    var1 = var2.getState;
                    var3 = var1.bind(var2)();
                    var2 = var3.setTagFilter;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot11;
                var0 = 9;
                var0 = var8[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.scrollable = var4;
                var6 = _closure1_slot11;
                var4 = 10;
                var4 = var8[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var15 = 11;
                var12 = var8[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var8[var15];
                var8 = var14.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.TdqRTh;
                var8 = var12.bind(var13)(var8);
                var4.title = var8;
                var8 = var16.size;
                var9 = var8 > var9;
                var8 = ' ';
                if (!var9) {
                    _fun91461_ip = 356;
                    continue _fun91461
                }
            case 289:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = var9[var15];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var9 = var9[var15];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var12 = var9["/FzHJK"];
                var9 = {};
                var16 = var16.size;
                var9.count = var16;
                var8 = var13.bind(var14)(var12, var9);
            case 356:
                var4.subtitle = var8;
                var14 = _closure1_slot11;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 12;
                var9 = var12[var9];
                var9 = var8.bind(var3)(var9);
                var13 = var9.ActionSheetHeaderPressableText;
                var9 = {};
                var16 = function() {
                    var2 = _closure2_slot3;
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var16;
                var16 = var12[var15];
                var16 = var8.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var12[var15];
                var15 = var8.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.VkKicb;
                var15 = var16.bind(var17)(var15);
                var9.label = var15;
                var9 = var14.bind(var3)(var13, var9);
                var4.leading = var9;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot11;
                var4 = 13;
                var4 = var12[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var9 = _closure1_slot11;
                var7 = 14;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TableRowGroup;
                var7 = {};
                var12 = var11.availableTags;
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 15;
                    var1 = var10[var1];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var2 = var1.TableCheckboxRow;
                    var1 = {};
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot13;
                    var6 = {};
                    var11 = var0.emojiId;
                    var6.emojiId = var11;
                    var11 = var0.emojiName;
                    var6.emojiName = var11;
                    var6 = var9.bind(var3)(var8, var6);
                    var1.icon = var6;
                    var6 = var0.name;
                    var1.label = var6;
                    var6 = 11;
                    var8 = var10[var6];
                    var8 = var7.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var10[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.t;
                    var7 = var6.tXXD6v;
                    var6 = {};
                    var10 = var0.name;
                    var6.tagName = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var1.accessibilityLabel = var6;
                    var8 = _closure2_slot2;
                    var7 = var8.has;
                    var6 = var0.id;
                    var6 = var7.bind(var8)(var6);
                    var1.checked = var6;
                    var5 = function() {
                        _fun91465: for (var _fun91465_ip = 0;;) switch (_fun91465_ip) {
                            case 0:
                                var6 = _closure3_slot0;
                                var0 = null;
                                if (!(var0 != var6)) {
                                    _fun91465_ip = 274;
                                    continue _fun91465
                                }
                            case 16:
                                var8 = global;
                                var3 = var8.Set;
                                var11 = _closure2_slot2;
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var12 = var2;
                                var1 = new var12[var3](var11, var10);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var3 = var2.has;
                                var1 = var6.id;
                                var1 = var3.bind(var2)(var1);
                                if (var1) {
                                    _fun91465_ip = 86;
                                    continue _fun91465
                                }
                            case 69:
                                var3 = var2.add;
                                var1 = var6.id;
                                var1 = var3.bind(var2)(var1);
                                _fun91465_ip = 101;
                                continue _fun91465;
                            case 86:
                                var3 = var2.delete;
                                var1 = var6.id;
                                var1 = var3.bind(var2)(var1);
                            case 101:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.trackForumTagFilterClicked;
                                var3 = {};
                                var9 = _closure2_slot0;
                                var10 = var9.guild_id;
                                var3.guildId = var10;
                                var9 = var9.id;
                                var3.channelId = var9;
                                var9 = var6.id;
                                var3.tagId = var9;
                                var9 = var8.Array;
                                var8 = var9.from;
                                var8 = var8.bind(var9)(var2);
                                var3.filterTagIds = var8;
                                var8 = var2.has;
                                var6 = var6.id;
                                var6 = var8.bind(var2)(var6);
                                var6 = !var6;
                                var3.added = var6;
                                var6 = {};
                                var8 = _closure1_slot9;
                                var8 = var8.GUILD_CHANNEL;
                                var6.page = var8;
                                var8 = _closure1_slot10;
                                var8 = var8.FORUM_CHANNEL_HEADER;
                                var6.section = var8;
                                var7 = _closure1_slot8;
                                var7 = var7.CHANNEL_TAG;
                                var6.object = var7;
                                var3.location = var6;
                                var3 = var4.bind(var5)(var3);
                                var0 = _closure2_slot3;
                                var0 = var0.bind(var1)(var2);
                            case 274:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onPress = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4739, 11638, 660, 33, 1297, 6489, 4103, 5210, 5213, 1234, 5212, 4935, 5367, 8806, 566, 5773, 1417, 2]);