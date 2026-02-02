// modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.subscriberCount;
        var5 = var0.style;
        var0 = _closure1_slot8;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var10.horizontalContainer;
        var4 = new Array(3);
        var4[0] = var7;
        var7 = var10.subscriberCountContainer;
        var4[1] = var7;
        var4[2] = var5;
        var0.style = var4;
        var8 = _closure1_slot6;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 5;
        var4 = var12[var5];
        var4 = var11.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'always-white'
        };
        var13 = var10.subscriberCount;
        var4.style = var13;
        var4.children = var9;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(3);
        var4[0] = var7;
        var9 = _closure1_slot6;
        var13 = _closure1_slot1;
        var14 = 6;
        var7 = var12[var14];
        var8 = var13.bind(var3)(var7);
        var7 = {};
        var14 = var12[var14];
        var14 = var13.bind(var3)(var14);
        var14 = var14.Sizes;
        var14 = var14.SMALL;
        var7.size = var14;
        var14 = 4;
        var14 = var12[var14];
        var14 = var13.bind(var3)(var14);
        var14 = var14.unsafe_rawColors;
        var14 = var14.WHITE;
        var7.color = var14;
        var10 = var10.subscriberCountIcon;
        var7.style = var10;
        var10 = 7;
        var10 = var12[var10];
        var10 = var13.bind(var3)(var10);
        var7.source = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4[1] = var7;
        var7 = _closure1_slot6;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/normal',
            'color': 'always-white'
        };
        var8 = 8;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["3NNXPW"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun116459: for (var _fun116459_ip = 0;;) switch (_fun116459_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.highlightedCreatorGuild;
                var1 = _closure1_slot8;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var _closure2_slot0 = var5;
                var6 = var0.guild_id;
                var _closure2_slot1 = var6;
                var12 = var0.quote;
                var19 = var0.quote_attribution;
                var15 = var0.quote_attribution_title;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = 3;
                var0 = 60;
                var0 = var2.bind(var3)(var6, var1, var0);
                var _closure2_slot2 = var0;
                var2 = var0.isLoading;
                var1 = var0.hasAllImperativeDetails;
                var _closure2_slot3 = var1;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var7 = new Array(2);
                var7[0] = var1;
                var7[1] = var0;
                var6 = function() { // Environment: var16
                    _fun116460: for (var _fun116460_ip = 0;;) switch (_fun116460_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun116460_ip = 68;
                                continue _fun116460
                            }
                        case 10:
                            var0 = _closure2_slot2;
                            var0 = var0.details;
                            var2 = var0.storePageUrl;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun116460_ip = 68;
                                continue _fun116460
                            }
                        case 32:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.openURL;
                            var0 = var0.bind(var1)(var2);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var8.bind(var9)(var6, var7);
                if (var2) {
                    _fun116459_ip = 1195;
                    continue _fun116459
                }
            case 152:
                if (var1) {
                    _fun116459_ip = 159;
                    continue _fun116459
                }
            case 155:
                var1 = null;
                return var1;
            case 159:
                var0 = var0.details;
                var23 = var0.guildName;
                var18 = var0.guildAvatarUrl;
                var27 = var0.subscriberCount;
                var20 = var0.emojisToShow;
                var24 = var0.notShownEmojiCount;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var5.cardContainer;
                var0.style = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var5.horizontalContainer;
                var6.style = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 12;
                var9 = var17[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var14 = var5.guildIcon;
                var9.style = var14;
                var14 = {};
                var14.uri = var18;
                var9.source = var14;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var14 = _closure1_slot7;
                var11 = _closure1_slot4;
                var10 = {};
                var18 = var5.cardHeaderContainer;
                var10.style = var18;
                var21 = _closure1_slot6;
                var18 = _closure1_slot0;
                var22 = 5;
                var17 = var17[var22];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'lineBreakMode': 'tail'
                };
                var17.children = var23;
                var17 = var21.bind(var3)(var18, var17);
                var18 = new Array(2);
                var18[0] = var17;
                var17 = null;
                var21 = var17 != var27;
                if (!var21) {
                    _fun116459_ip = 412;
                    continue _fun116459
                }
            case 381:
                var26 = _closure1_slot6;
                var25 = _closure1_slot10;
                var23 = {};
                var23.subscriberCount = var27;
                var27 = var5.serverSubscriberCount;
                var23.style = var27;
                var21 = var26.bind(var3)(var25, var23);
            case 412:
                var18[1] = var21;
                var10.children = var18;
                var10 = var14.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var7 = var8.bind(var3)(var7, var6);
                var6 = new Array(5);
                var6[0] = var7;
                var9 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = var10[var22];
                var7 = var11.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var14 = var5.ownerQuote;
                var7.style = var14;
                var7.children = var12;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var9 = _closure1_slot6;
                var7 = var10[var22];
                var7 = var11.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default',
                    'lineClamp': 1,
                    'lineBreakMode': 'tail'
                };
                var12 = var5.ownerUsername;
                var7.style = var12;
                var18 = 8;
                var12 = var10[var18];
                var12 = var11.bind(var3)(var12);
                var14 = var12.intl;
                var12 = var14.format;
                var10 = var10[var18];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.m0b6Kj;
                var10 = {};
                var10.attributionName = var19;
                if (!(var17 == var15)) {
                    _fun116459_ip = 669;
                    continue _fun116459
                }
            case 615:
                var25 = _closure1_slot0;
                var19 = _closure1_slot2;
                var21 = var19[var18];
                var21 = var25.bind(var3)(var21);
                var23 = var21.intl;
                var21 = var23.string;
                var19 = var19[var18];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.pclUFJ;
                var15 = var21.bind(var23)(var19);
            case 669:
                var10.attributionTitle = var15;
                var10 = var12.bind(var14)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var7 = var17 != var20;
                if (!var7) {
                    _fun116459_ip = 714;
                    continue _fun116459
                }
            case 703:
                var9 = var20.length;
                var8 = 0;
                var7 = var9 > var8;
            case 714:
                if (!var7) {
                    _fun116459_ip = 1038;
                    continue _fun116459
                }
            case 720:
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var5.emojiSectionContainer;
                var8.style = var11;
                var14 = _closure1_slot6;
                var23 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = var15[var22];
                var11 = var23.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'text-default'
                };
                var19 = var5.premiumEmojisTitle;
                var11.style = var19;
                var19 = var15[var18];
                var19 = var23.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var15 = var15[var18];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.wg53L8;
                var15 = var19.bind(var21)(var15);
                var11.children = var15;
                var12 = var14.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var15 = _closure1_slot7;
                var14 = _closure1_slot4;
                var12 = {};
                var21 = var5.horizontalContainer;
                var19 = new Array(2);
                var19[0] = var21;
                var21 = var5.emojiContainer;
                var19[1] = var21;
                var12.style = var19;
                var19 = var20.map;
                var16 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.emoji;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var7 = var7.emojiListItem;
                    var6[1] = var7;
                    var1.style = var6;
                    var6 = 24;
                    var1.size = var6;
                    var6 = var0.id;
                    var1.id = var6;
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var19 = var19.bind(var20)(var16);
                var16 = new Array(2);
                var16[0] = var19;
                var17 = var17 != var24;
                if (!var17) {
                    _fun116459_ip = 1010;
                    continue _fun116459
                }
            case 926:
                var21 = _closure1_slot6;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var22];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var22 = var5.emojiListItem;
                var19.style = var22;
                var22 = global;
                var22 = var22.HermesInternal;
                var23 = var22.concat;
                var22 = '+';
                var22 = var23.bind(var22)(var24);
                var19.children = var22;
                var17 = var21.bind(var3)(var20, var19);
            case 1010:
                var16[1] = var17;
                var12.children = var16;
                var12 = var15.bind(var3)(var14, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1038:
                var6[3] = var7;
                var9 = _closure1_slot6;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var5.viewServerButtonContainer;
                var7.style = var10;
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 14;
                var10 = var14[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var15 = var5.viewServerButton;
                var10.style = var15;
                var17 = _closure1_slot0;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.mQ2IGa;
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var10.onPress = var13;
                var13 = true;
                var10.shrink = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[4] = var7;
                var0.children = var6;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1195:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.cardContainer;
                var0.style = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.FlatList;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.horizontalContainer = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.serverSubscriberCount = var8;
    var8 = {
        'alignItems': 'center',
        'backgroundColor': null,
        'paddingEnd': 8,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_530;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.subscriberCountContainer = var8;
    var8 = {
        'backgroundColor': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_630;
    var8.backgroundColor = var12;
    var3.subscriberCount = var8;
    var8 = {
        'marginStart': 8,
        'marginEnd': 6,
        'marginVertical': 4,
        'alignSelf': 'center'
    };
    var3.subscriberCountIcon = var8;
    var8 = {
        'width': 276,
        'marginEnd': 12,
        'paddingHorizontal': 24,
        'paddingVertical': 16,
        'backgroundColor': null,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var12 = 24;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.cardContainer = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'flex-start',
        'alignItems': 'flex-start'
    };
    var3.cardHeaderContainer = var8;
    var8 = {
        'width': 60,
        'height': 60,
        'borderRadius': 6,
        'marginEnd': 16
    };
    var3.guildIcon = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.ownerQuote = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.ownerUsername = var8;
    var8 = {
        'marginTop': 32,
        'textTransform': 'uppercase'
    };
    var3.premiumEmojisTitle = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'flex-end'
    };
    var3.viewServerButtonContainer = var8;
    var8 = {
        'width': '100%',
        'backgroundColor': null,
        'marginTop': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var3.viewServerButton = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'flex-start',
        'alignItems': 'flex-start'
    };
    var3.emojiSectionContainer = var8;
    var8 = {
        'width': '100%',
        'marginTop': 8,
        'paddingHorizontal': 8,
        'justifyContent': 'space-around',
        'backgroundColor': null,
        'alignItems': 'center',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.emojiContainer = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.emojiListItem = var8;
    var8 = {
        'height': 24,
        'width': 24,
        'marginVertical': 8
    };
    var3.emoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.item;
        var3 = _closure1_slot6;
        var2 = _closure1_slot11;
        var1 = {};
        var1.highlightedCreatorGuild = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.highlightedCreators;
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var1.data = var4;
        var4 = true;
        var1.horizontal = var4;
        var4 = function arg0() {
            var0 = arg0;
            var0 = var0.guild_id;
            return var0;
        };
        var1.keyExtractor = var4;
        var0 = _closure1_slot9;
        var1.renderItem = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3902, 4047, 9252, 1234, 14810, 3105, 14782, 4669, 10740, 4838, 2]);