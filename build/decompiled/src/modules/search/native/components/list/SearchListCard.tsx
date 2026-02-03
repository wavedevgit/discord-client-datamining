// modules/search/native/components/list/SearchListCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        var0 = arg0;
        var10 = var0.author;
        var6 = var0.avatarSource;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var8.author;
        var0.style = var4;
        var12 = _closure1_slot5;
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var13 = 5;
        var4 = var11[var13];
        var7 = var9.bind(var3)(var4);
        var4 = {};
        var4.source = var6;
        var6 = _closure1_slot0;
        var13 = var11[var13];
        var13 = var6.bind(var3)(var13);
        var13 = var13.AvatarSizes;
        var13 = var13.SIZE_16;
        var4.size = var13;
        var13 = var8.avatar;
        var4.style = var13;
        var13 = var10.avatarDecoration;
        var4.avatarDecoration = var13;
        var7 = var12.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot5;
        var5 = 6;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-xs/medium',
            'color': 'interactive-text-default',
            'lineClamp': 1
        };
        var8 = var8.authorName;
        var5.style = var8;
        var8 = 7;
        var8 = var11[var8];
        var9 = var9.bind(var3)(var8);
        var8 = var9.getName;
        var8 = var8.bind(var9)(var10);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = function arg0() {
        _fun105485: for (var _fun105485_ip = 0;;) switch (_fun105485_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var0 = _closure1_slot7;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var9 = var0.bind(var4)(var7);
                var0 = var7.isGroupDM;
                var0 = var0.bind(var7)();
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                if (var0) {
                    _fun105485_ip = 264;
                    continue _fun105485
                }
            case 72:
                var0 = var10.privateChannelIcon;
                var1.style = var0;
                var8 = _closure1_slot5;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 10;
                var0 = var16[var0];
                var0 = var15.bind(var4)(var0);
                var5 = var0.ForumIcon;
                var0 = {
                    'style': null,
                    'size': 'xs',
                    'color': 'interactive-text-default'
                };
                var11 = var10.icon;
                var0.style = var11;
                var5 = var8.bind(var4)(var5, var0);
                var0 = new Array(2);
                var0[0] = var5;
                var11 = _closure1_slot5;
                var5 = 6;
                var5 = var16[var5];
                var5 = var15.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default',
                    'lineClamp': 1
                };
                var12 = 11;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.ACgJhM;
                var12 = var13.bind(var14)(var12);
                var5.children = var12;
                var5 = var11.bind(var4)(var8, var5);
                var0[1] = var5;
                var1.children = var0;
                var0 = var3.bind(var4)(var2, var1);
                _fun105485_ip = 450;
                continue _fun105485;
            case 264:
                var5 = var10.channel;
                var1.style = var5;
                var12 = _closure1_slot5;
                var8 = _closure1_slot4;
                var5 = {};
                var11 = var10.gdmIcon;
                var5.style = var11;
                var15 = _closure1_slot5;
                var14 = _closure1_slot1;
                var11 = _closure1_slot2;
                var13 = 9;
                var13 = var11[var13];
                var14 = var14.bind(var4)(var13);
                var13 = {};
                var13.channel = var7;
                var7 = _closure1_slot0;
                var16 = 5;
                var16 = var11[var16];
                var16 = var7.bind(var4)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.SIZE_16;
                var13.size = var16;
                var13 = var15.bind(var4)(var14, var13);
                var5.children = var13;
                var8 = var12.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot5;
                var6 = 6;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default',
                    'lineClamp': 1
                };
                var10 = var10.channelName;
                var6.style = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 450:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.channel;
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var14 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 8;
        var0 = var10[var0];
        var0 = var14.bind(var3)(var0);
        var8 = var0.bind(var3)(var4);
        var6 = _closure1_slot0;
        var0 = 12;
        var0 = var10[var0];
        var2 = var6.bind(var3)(var0);
        var1 = var2.getChannelIcon;
        var0 = {};
        var7 = true;
        var0.ignoreTraits = var7;
        var12 = var1.bind(var2)(var4, var0);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.channel;
        var0.style = var4;
        var11 = _closure1_slot5;
        var13 = 13;
        var4 = var10[var13];
        var7 = var14.bind(var3)(var4);
        var4 = {};
        var13 = var10[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.Sizes;
        var13 = var13.REFRESH_SMALL_16;
        var4.size = var13;
        var4.source = var12;
        var12 = var9.channelIcon;
        var12 = var12.color;
        var4.color = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot5;
        var5 = 6;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-xs/medium',
            'color': 'interactive-text-default',
            'lineClamp': 1
        };
        var9 = var9.channelName;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var6.bind(var0)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var14 = 2;
    var5 = var7[var14];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var5 = var5.jsxs;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var11 = 4;
    var10 = {
        'flexShrink': 1,
        'marginStart': 4
    };
    var5.channelName = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var10.color = var15;
    var5.channelIcon = var10;
    var10 = {};
    var10.marginRight = var14;
    var5.avatar = var10;
    var10 = {
        'height': 62,
        'width': 62,
        'borderRadius': null,
        'marginLeft': 16
    };
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10.borderRadius = var14;
    var5.imageContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var5.channel = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var5.author = var10;
    var10 = {
        'flexShrink': 1,
        'marginStart': 2
    };
    var5.authorName = var10;
    var10 = {
        'flex': 1,
        'padding': 0,
        'backgroundColor': null,
        'overflow': 'hidden'
    };
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var5.container = var10;
    var10 = {
        'paddingTop': 12,
        'paddingHorizontal': 12,
        'paddingBottom': 4
    };
    var5.content = var10;
    var10 = {
        'flexDirection': 'column',
        'paddingTop': 4,
        'paddingHorizontal': 12,
        'paddingBottom': 12,
        'gap': 4
    };
    var5.footer = var10;
    var10 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10.borderTopRightRadius = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10.borderTopLeftRadius = var14;
    var14 = var7[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var14;
    var10.borderBottomWidth = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10.borderBottomColor = var13;
    var5.thumbnail = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var5.privateChannelIcon = var10;
    var10 = {};
    var10.marginRight = var11;
    var5.icon = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_SUBTLE;
    var10.tintColor = var11;
    var5.fallbackIcon = var10;
    var10 = {};
    var11 = 18;
    var10.width = var11;
    var5.gdmIcon = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/components/list/SearchListCard.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SearchListContentAuthor = var4;
    var2.SearchListGuildChannel = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var7 = var0.onPress;
        var6 = var0.containerStyle;
        var1 = _closure1_slot7;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 14;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Card;
        var0 = {
            'shadow': 'low',
            'border': 'subtle'
        };
        var0.onPress = var7;
        var7 = var5.container;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchListCardContainer = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.thumbnail;
        var1 = _closure1_slot7;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.thumbnail;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchListCardThumbnail = var3;
    var3 = function arg0() {
        _fun105489: for (var _fun105489_ip = 0;;) switch (_fun105489_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.label;
                var9 = var0.subLabel;
                var0 = _closure1_slot7;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.content;
                var0.style = var4;
                var8 = 'string';
                var4 = typeof var11;
                var5 = var11;
                if (!(var8 === var4)) {
                    _fun105489_ip = 113;
                    continue _fun105489
                }
            case 60:
                var10 = _closure1_slot5;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 6;
                var4 = var12[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var4.children = var11;
                var5 = var10.bind(var3)(var7, var4);
            case 113:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = typeof var9;
                var5 = var9;
                if (!(var8 === var7)) {
                    _fun105489_ip = 184;
                    continue _fun105489
                }
            case 131:
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 6;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 184:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SearchListCardContent = var3;
    var1 = function arg0() {
        var1 = arg0;
        var9 = var1.author;
        var8 = var1.avatarSource;
        var7 = var1.channel;
        var _closure2_slot0 = var7;
        var1 = _closure1_slot7;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun105491: for (var _fun105491_ip = 0;;) switch (_fun105491_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = null;
                    if (var1) {
                        _fun105491_ip = 99;
                        continue _fun105491
                    }
                case 18:
                    var4 = _closure2_slot0;
                    var1 = var4.getGuildId;
                    var1 = var1.bind(var4)();
                    if (!(var3 != var1)) {
                        _fun105491_ip = 67;
                        continue _fun105491
                    }
                case 36:
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot10;
                    var3 = {};
                    var1 = _closure2_slot0;
                    var3.channel = var1;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3);
                    _fun105491_ip = 96;
                    continue _fun105491;
                case 67:
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot9;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.channel = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
                case 96:
                    var0 = var1;
                case 99:
                    return var0;
            }
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = var6.footer;
        var0.style = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot8;
        var4 = {};
        var4.author = var9;
        var4.avatarSource = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchListCardFooter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5447, 3932, 3227, 4787, 9020, 4847, 1234, 4802, 4077, 4895, 2]);