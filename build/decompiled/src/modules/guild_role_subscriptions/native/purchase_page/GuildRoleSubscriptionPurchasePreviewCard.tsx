// modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.count;
        var5 = var0.title;
        var0 = _closure1_slot11;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 7;
        var0 = var10[var4];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/bold',
            'color': 'text-muted'
        };
        var11 = var9.contentHeader;
        var0.style = var11;
        var7 = _closure1_slot8;
        var4 = var10[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-xs/bold',
            'color': 'text-default'
        };
        var9 = var9.contentHeader;
        var4.style = var9;
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var6 = ' ';
        var4[1] = var6;
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun105401: for (var _fun105401_ip = 0;;) switch (_fun105401_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.emojiIds;
                var1 = var2.maxEmojis;
                var2 = var2.guildId;
                var _closure2_slot0 = var2;
                var2 = _closure1_slot11;
                var3 = undefined;
                var14 = var2.bind(var3)();
                var2 = var0.slice;
                var8 = 0;
                var11 = var2.bind(var0)(var8, var1);
                var0 = var0.length;
                var17 = var0 - var1;
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var14.emojiGallery;
                var0.style = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var9 = _closure1_slot3;
                var4 = 11;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GappedList;
                var4 = {};
                var9 = 18;
                var4.gap = var9;
                var9 = var11.map;
                var7 = function(arg0) { // Environment: var7
                    var4 = arg0;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {
                        'size': 30,
                        'fontSize': 20
                    };
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var0.id = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var19 = var9.bind(var11)(var7);
                var7 = new Array(1);
                var20 = var7;
                var18 = 0;
                var9 = arraySpread(var20, var19, var18);
                var8 = var17 > var8;
                if (!var8) {
                    _fun105401_ip = 261;
                    continue _fun105401
                }
            case 157:
                var13 = _closure1_slot8;
                var12 = _closure1_slot6;
                var11 = {};
                var14 = var14.emojiTruncatedContainer;
                var11.style = var14;
                var15 = _closure1_slot9;
                var14 = _closure1_slot0;
                var16 = _closure1_slot3;
                var10 = 7;
                var10 = var16[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-default'
                };
                var16 = ['+'];
                var16[1] = var17;
                var10.children = var16;
                var10 = var15.bind(var3)(var14, var10);
                var11.children = var10;
                var10 = 'andMore';
                var8 = var13.bind(var3)(var12, var11, var10);
            case 261:
                var7[var9] = var8;
                var8 = 1;
                var8 = var9 + var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun105403: for (var _fun105403_ip = 0;;) switch (_fun105403_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.title;
                var13 = var0.description;
                var3 = _closure1_slot9;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = 'string';
                var0 = typeof var9;
                var4 = var9;
                if (!(var6 === var0)) {
                    _fun105403_ip = 95;
                    continue _fun105403
                }
            case 40:
                var8 = _closure1_slot8;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 7;
                var0 = var7[var0];
                var7 = undefined;
                var0 = var6.bind(var7)(var0);
                var6 = var0.Text;
                var0 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var0.children = var9;
                var4 = var8.bind(var7)(var6, var0);
            case 95:
                var0 = new Array(2);
                var0[0] = var4;
                var4 = null;
                var4 = var4 != var13;
                if (!var4) {
                    _fun105403_ip = 203;
                    continue _fun105403
                }
            case 112:
                var8 = _closure1_slot9;
                var7 = _closure1_slot10;
                var6 = {};
                var10 = _closure1_slot12;
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 7;
                var10 = var10[var5];
                var5 = undefined;
                var10 = var11.bind(var5)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var10.children = var13;
                var10 = var12.bind(var5)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var4 = var8.bind(var5)(var7, var6);
            case 203:
                var0[1] = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun105404: for (var _fun105404_ip = 0;;) switch (_fun105404_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channelId;
                var _closure2_slot0 = var10;
                var4 = var0.description;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 14;
                var2 = var7[var2];
                var3 = undefined;
                var9 = var6.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var9)(var5, var1, var2);
                var1 = 15;
                var2 = var7[var1];
                var2 = var6.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.bz1PZX;
                var5 = var2.bind(var5)(var1);
                var1 = null;
                if (!(var1 != var11)) {
                    _fun105404_ip = 335;
                    continue _fun105404
                }
            case 139:
                var6 = _closure1_slot9;
                var2 = _closure1_slot6;
                var1 = {};
                var7 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var1.style = var7;
                var10 = _closure1_slot8;
                var13 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 16;
                var7 = var12[var9];
                var8 = var13.bind(var3)(var7);
                var7 = {};
                var9 = var12[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.Sizes;
                var9 = var9.REFRESH_SMALL_16;
                var7.size = var9;
                var9 = _closure1_slot0;
                var13 = 17;
                var13 = var12[var13];
                var14 = var9.bind(var3)(var13);
                var13 = var14.getChannelIcon;
                var13 = var13.bind(var14)(var11);
                var7.source = var13;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = _closure1_slot13;
                var7[1] = var8;
                var10 = _closure1_slot8;
                var8 = 7;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var11 = var11.name;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var1.children = var7;
                var5 = var6.bind(var3)(var2, var1);
            case 335:
                var2 = _closure1_slot8;
                var1 = _closure1_slot28;
                var0 = {};
                var0.title = var5;
                var0.description = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.onPress;
        var0 = _closure1_slot11;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var0.onPress = var4;
        var4 = var11.showAllButton;
        var0.style = var4;
        var4 = 0.5;
        var0.activeOpacity = var4;
        var6 = _closure1_slot9;
        var5 = _closure1_slot6;
        var4 = {};
        var10 = _closure1_slot8;
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var7 = 7;
        var7 = var16[var7];
        var7 = var15.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-hover'
        };
        var12 = {};
        var13 = -1;
        var12.marginTop = var13;
        var7.style = var12;
        var12 = 15;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["hub6t/"];
        var12 = var13.bind(var14)(var12);
        var7.children = var12;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var9 = _closure1_slot14;
        var7[1] = var9;
        var10 = _closure1_slot8;
        var9 = _closure1_slot6;
        var8 = {};
        var11 = var11.showAllButtonUnderline;
        var8.style = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot30 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var14 = 2;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var7 = var3.TouchableOpacity;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var13 = 3;
    var3 = var5[var13];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var8 = var3.jsxs;
    var _closure1_slot9 = var8;
    var3 = var3.Fragment;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var15 = {};
    var12 = 16;
    var15.padding = var12;
    var8 = 6;
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var15.borderRadius = var16;
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_NORMAL;
    var15.backgroundColor = var16;
    var3.container = var15;
    var15 = {};
    var16 = 'row';
    var15.flexDirection = var16;
    var3.header = var15;
    var15 = {
        'width': 48,
        'height': 48
    };
    var17 = var5[var8];
    var17 = var6.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.xl;
    var15.borderRadius = var17;
    var3.image = var15;
    var15 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 16
    };
    var17 = var5[var8];
    var17 = var6.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_BACKGROUND_HOVER;
    var15.backgroundColor = var17;
    var3.separator = var15;
    var15 = {};
    var17 = var5[var8];
    var17 = var6.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var15.backgroundColor = var17;
    var17 = var5[var8];
    var17 = var6.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var15.borderTopRightRadius = var17;
    var17 = var5[var8];
    var17 = var6.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var15.borderTopLeftRadius = var17;
    var15.padding = var12;
    var3.contentContainer = var15;
    var15 = {};
    var17 = 'uppercase';
    var15.textTransform = var17;
    var3.contentHeader = var15;
    var15 = {};
    var15.flexDirection = var16;
    var3.emojiGallery = var15;
    var15 = {
        'width': 32,
        'height': 32,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'backgroundColor': null,
        'paddingTop': 1
    };
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var15.borderRadius = var16;
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var15.backgroundColor = var16;
    var3.emojiTruncatedContainer = var15;
    var15 = {
        'paddingVertical': 16,
        'paddingHorizontal': 20,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var15.backgroundColor = var16;
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var15.borderBottomLeftRadius = var16;
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var15.borderBottomRightRadius = var16;
    var3.showAllButton = var15;
    var15 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'height': 1,
        'bottom': 0
    };
    var16 = var5[var8];
    var16 = var6.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_MUTED;
    var15.backgroundColor = var16;
    var3.showAllButtonUnderline = var15;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot11 = var3;
    var3 = 13;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var14;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot12 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot13 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var13;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot14 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot15 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot16 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot17 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var12 = 24;
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot18 = var9;
    var10 = function() {
        var1 = _closure1_slot11;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9 = {};
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot19 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var12 = 8;
    var9.size = var12;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot20 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot21 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var11 = 12;
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot22 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var8;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot23 = var9;
    var9 = var5[var3];
    var10 = var6.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var7.bind(var0)(var10, var9);
    var _closure1_slot24 = var9;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot25 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105407: for (var _fun105407_ip = 0;;) switch (_fun105407_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.listingId;
                var _closure2_slot0 = var8;
                var31 = var0.guildId;
                var _closure2_slot1 = var31;
                var0 = _closure1_slot11;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var5 = _closure1_slot2;
                var12 = _closure1_slot3;
                var0 = 18;
                var1 = var12[var0];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useImage;
                var1 = var1.bind(var2)(var8);
                var4 = _closure1_slot4;
                var2 = 1;
                var1 = var4.bind(var3)(var1, var2);
                var34 = 0;
                var16 = var1[var34];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useName;
                var1 = var1.bind(var6)(var8);
                var1 = var4.bind(var3)(var1, var2);
                var23 = var1[var34];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useTierEmojiIds;
                var1 = var1.bind(var6)(var8, var31);
                var1 = var4.bind(var3)(var1, var2);
                var33 = var1[var34];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useChannelBenefits;
                var1 = var1.bind(var6)(var8);
                var1 = var4.bind(var3)(var1, var2);
                var1 = var1[var34];
                var0 = var12[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.useIntangibleBenefits;
                var0 = var0.bind(var5)(var8);
                var0 = var4.bind(var3)(var0, var2);
                var0 = var0[var34];
                var4 = _closure1_slot0;
                var2 = 19;
                var2 = var12[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useFormattedSubscriptionPlan;
                var21 = var2.bind(var4)(var8);
                var29 = var1.length;
                var30 = var1[var34];
                var27 = var0[var34];
                var28 = var33.size;
                var26 = var0.length;
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var15.container;
                var0.style = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var15.header;
                var4.style = var7;
                var11 = _closure1_slot8;
                var9 = _closure1_slot1;
                var7 = 20;
                var7 = var12[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var12 = {};
                var19 = null;
                var17 = var19 != var16;
                var14 = '';
                if (!var17) {
                    _fun105407_ip = 336;
                    continue _fun105407
                }
            case 333:
                var14 = var16;
            case 336:
                var12.uri = var14;
                var7.source = var12;
                var12 = var15.image;
                var7.style = var12;
                var9 = var11.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var9 = _closure1_slot15;
                var7[1] = var9;
                var14 = _closure1_slot9;
                var12 = _closure1_slot6;
                var11 = {};
                var22 = _closure1_slot8;
                var18 = _closure1_slot0;
                var9 = _closure1_slot3;
                var17 = 7;
                var16 = var9[var17];
                var16 = var18.bind(var3)(var16);
                var20 = var16.Text;
                var16 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var16.children = var23;
                var20 = var22.bind(var3)(var20, var16);
                var16 = new Array(3);
                var16[0] = var20;
                var20 = _closure1_slot16;
                var16[1] = var20;
                var20 = _closure1_slot8;
                var17 = var9[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'heading-md/medium',
                    'color': 'text-default'
                };
                var17.children = var21;
                var17 = var20.bind(var3)(var18, var17);
                var16[2] = var17;
                var11.children = var16;
                var11 = var14.bind(var3)(var12, var11);
                var7[2] = var11;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var5 = _closure1_slot17;
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var5 = 21;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.listingId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = var29 > var34;
                if (var5) {
                    _fun105407_ip = 589;
                    continue _fun105407
                }
            case 585:
                var5 = var28 > var34;
            case 589:
                if (var5) {
                    _fun105407_ip = 596;
                    continue _fun105407
                }
            case 592:
                var5 = var26 > var34;
            case 596:
                if (!var5) {
                    _fun105407_ip = 1325;
                    continue _fun105407
                }
            case 602:
                var8 = _closure1_slot9;
                var7 = _closure1_slot10;
                var6 = {};
                var11 = _closure1_slot18;
                var9 = new Array(3);
                var9[0] = var11;
                var14 = _closure1_slot8;
                var12 = _closure1_slot6;
                var11 = {};
                var15 = var15.contentContainer;
                var11.style = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot0;
                var18 = _closure1_slot3;
                var15 = 11;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.GappedList;
                var15 = {};
                var18 = function() {
                    var0 = _closure1_slot19;
                    return var0;
                };
                var15.renderGap = var18;
                var18 = var28 > var34;
                var20 = null;
                if (!var18) {
                    _fun105407_ip = 879;
                    continue _fun105407
                }
            case 700:
                var22 = _closure1_slot9;
                var21 = _closure1_slot6;
                var18 = {};
                var25 = _closure1_slot8;
                var24 = _closure1_slot26;
                var23 = {};
                var37 = _closure1_slot0;
                var38 = _closure1_slot3;
                var32 = 15;
                var35 = var38[var32];
                var35 = var37.bind(var3)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var32 = var38[var32];
                var32 = var37.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.ebOU2b;
                var32 = var35.bind(var36)(var32);
                var23.title = var32;
                var23.count = var28;
                var24 = var25.bind(var3)(var24, var23);
                var23 = new Array(4);
                var23[0] = var24;
                var24 = _closure1_slot20;
                var23[1] = var24;
                var28 = _closure1_slot8;
                var25 = _closure1_slot27;
                var24 = {};
                var32 = new Array(0);
                var41 = var32;
                var40 = var33;
                var39 = 0;
                var33 = arraySpread(var41, var40, var39);
                var24.emojiIds = var32;
                var24.guildId = var31;
                var31 = 5;
                var24.maxEmojis = var31;
                var24 = var28.bind(var3)(var25, var24);
                var23[2] = var24;
                var24 = _closure1_slot21;
                var23[3] = var24;
                var18.children = var23;
                var20 = var22.bind(var3)(var21, var18);
            case 879:
                var18 = new Array(3);
                var18[0] = var20;
                var21 = var19 != var30;
                var20 = null;
                if (!var21) {
                    _fun105407_ip = 1070;
                    continue _fun105407
                }
            case 899:
                var23 = _closure1_slot9;
                var22 = _closure1_slot6;
                var21 = {};
                var28 = _closure1_slot8;
                var25 = _closure1_slot26;
                var24 = {};
                var32 = _closure1_slot0;
                var35 = _closure1_slot3;
                var31 = 15;
                var33 = var35[var31];
                var33 = var32.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.formatToPlainString;
                var31 = var35[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.t;
                var32 = var31.y7dUrm;
                var31 = {};
                var31.numChannels = var29;
                var31 = var33.bind(var34)(var32, var31);
                var24.title = var31;
                var24.count = var29;
                var25 = var28.bind(var3)(var25, var24);
                var24 = new Array(4);
                var24[0] = var25;
                var25 = _closure1_slot22;
                var24[1] = var25;
                var29 = _closure1_slot8;
                var28 = _closure1_slot29;
                var25 = {};
                var31 = var30.ref_id;
                var25.channelId = var31;
                var30 = var30.description;
                var25.description = var30;
                var25 = var29.bind(var3)(var28, var25);
                var24[2] = var25;
                var25 = _closure1_slot23;
                var24[3] = var25;
                var21.children = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 1070:
                var18[1] = var20;
                var20 = var19 != var27;
                var19 = null;
                if (!var20) {
                    _fun105407_ip = 1256;
                    continue _fun105407
                }
            case 1086:
                var22 = _closure1_slot9;
                var21 = _closure1_slot6;
                var20 = {};
                var25 = _closure1_slot8;
                var24 = _closure1_slot26;
                var23 = {};
                var29 = _closure1_slot0;
                var32 = _closure1_slot3;
                var28 = 15;
                var30 = var32[var28];
                var30 = var29.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.formatToPlainString;
                var28 = var32[var28];
                var28 = var29.bind(var3)(var28);
                var28 = var28.t;
                var29 = var28.MR7oOF;
                var28 = {};
                var28.numBenefits = var26;
                var28 = var30.bind(var31)(var29, var28);
                var23.title = var28;
                var23.count = var26;
                var24 = var25.bind(var3)(var24, var23);
                var23 = new Array(4);
                var23[0] = var24;
                var24 = _closure1_slot24;
                var23[1] = var24;
                var26 = _closure1_slot8;
                var25 = _closure1_slot28;
                var24 = {};
                var28 = var27.name;
                var24.title = var28;
                var27 = var27.description;
                var24.description = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[2] = var24;
                var24 = _closure1_slot25;
                var23[3] = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1256:
                var18[2] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var12, var11);
                var9[1] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot30;
                var10 = {};
                var13 = function() {
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 8;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 9;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'PurchaseCard:';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var1.listingId = var7;
                    var1.guildId = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var10.onPress = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1325:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 33, 1297, 671, 3938, 3279, 13719, 1307, 9356, 10691, 8880, 566, 1234, 4092, 4783, 10678, 13713, 5426, 13720, 2]);