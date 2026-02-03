// modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
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
    var _closure1_slot12 = var0;
    var0 = function() {
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
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun104674: for (var _fun104674_ip = 0;;) switch (_fun104674_ip) {
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
                    _fun104674_ip = 261;
                    continue _fun104674
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
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun104676: for (var _fun104676_ip = 0;;) switch (_fun104676_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var13 = var0.description;
                var3 = _closure1_slot9;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = 'string';
                var0 = typeof var8;
                var4 = var8;
                if (!(var5 === var0)) {
                    _fun104676_ip = 95;
                    continue _fun104676
                }
            case 40:
                var7 = _closure1_slot8;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 7;
                var0 = var6[var0];
                var6 = undefined;
                var0 = var5.bind(var6)(var0);
                var5 = var0.Text;
                var0 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var0.children = var8;
                var4 = var7.bind(var6)(var5, var0);
            case 95:
                var0 = new Array(2);
                var0[0] = var4;
                var4 = null;
                var4 = var4 != var13;
                if (!var4) {
                    _fun104676_ip = 237;
                    continue _fun104676
                }
            case 115:
                var8 = _closure1_slot9;
                var7 = _closure1_slot10;
                var6 = {};
                var12 = _closure1_slot8;
                var11 = _closure1_slot1;
                var14 = _closure1_slot3;
                var5 = 13;
                var9 = var14[var5];
                var5 = undefined;
                var11 = var11.bind(var5)(var9);
                var9 = {};
                var15 = 2;
                var9.size = var15;
                var11 = var12.bind(var5)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var10 = 7;
                var10 = var14[var10];
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
            case 237:
                var0[1] = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun104677: for (var _fun104677_ip = 0;;) switch (_fun104677_ip) {
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
                    _fun104677_ip = 362;
                    continue _fun104677
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
                var13 = _closure1_slot8;
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 16;
                var7 = var12[var9];
                var8 = var10.bind(var3)(var7);
                var7 = {};
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.Sizes;
                var9 = var9.REFRESH_SMALL_16;
                var7.size = var9;
                var9 = _closure1_slot0;
                var14 = 17;
                var14 = var12[var14];
                var15 = var9.bind(var3)(var14);
                var14 = var15.getChannelIcon;
                var14 = var14.bind(var15)(var11);
                var7.source = var14;
                var8 = var13.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var13 = _closure1_slot8;
                var8 = 13;
                var8 = var12[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var14 = 4;
                var8.size = var14;
                var8 = var13.bind(var3)(var10, var8);
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
            case 362:
                var2 = _closure1_slot8;
                var1 = _closure1_slot15;
                var0 = {};
                var0.title = var5;
                var0.description = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
        var16 = _closure1_slot0;
        var13 = _closure1_slot3;
        var7 = 7;
        var7 = var13[var7];
        var7 = var16.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-hover'
        };
        var12 = {};
        var14 = -1;
        var12.marginTop = var14;
        var7.style = var12;
        var12 = 15;
        var14 = var13[var12];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var12 = var13[var12];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["hub6t/"];
        var12 = var14.bind(var15)(var12);
        var7.children = var12;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var12 = _closure1_slot8;
        var10 = _closure1_slot1;
        var9 = 13;
        var9 = var13[var9];
        var10 = var10.bind(var3)(var9);
        var9 = {};
        var13 = 3;
        var9.size = var13;
        var9 = var12.bind(var3)(var10, var9);
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
    var _closure1_slot17 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.jsxs;
    var _closure1_slot9 = var6;
    var3 = var3.Fragment;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 16;
    var8.padding = var12;
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.header = var8;
    var8 = {
        'width': 48,
        'height': 48
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var8.borderRadius = var13;
    var3.image = var8;
    var8 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 16
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_BACKGROUND_HOVER;
    var8.backgroundColor = var13;
    var3.separator = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderTopRightRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderTopLeftRadius = var13;
    var8.padding = var12;
    var3.contentContainer = var8;
    var8 = {};
    var12 = 'uppercase';
    var8.textTransform = var12;
    var3.contentHeader = var8;
    var8 = {};
    var8.flexDirection = var11;
    var3.emojiGallery = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'backgroundColor': null,
        'paddingTop': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.emojiTruncatedContainer = var8;
    var8 = {
        'paddingVertical': 16,
        'paddingHorizontal': 20,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderBottomLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderBottomRightRadius = var11;
    var3.showAllButton = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'height': 1,
        'bottom': 0
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var9;
    var3.showAllButtonUnderline = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104680: for (var _fun104680_ip = 0;;) switch (_fun104680_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.listingId;
                var _closure2_slot0 = var8;
                var35 = var0.guildId;
                var _closure2_slot1 = var35;
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
                var38 = 0;
                var16 = var1[var38];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useName;
                var1 = var1.bind(var6)(var8);
                var1 = var4.bind(var3)(var1, var2);
                var25 = var1[var38];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useTierEmojiIds;
                var1 = var1.bind(var6)(var8, var35);
                var1 = var4.bind(var3)(var1, var2);
                var37 = var1[var38];
                var1 = var12[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useChannelBenefits;
                var1 = var1.bind(var6)(var8);
                var1 = var4.bind(var3)(var1, var2);
                var1 = var1[var38];
                var0 = var12[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.useIntangibleBenefits;
                var0 = var0.bind(var5)(var8);
                var0 = var4.bind(var3)(var0, var2);
                var0 = var0[var38];
                var4 = _closure1_slot0;
                var2 = 19;
                var2 = var12[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useFormattedSubscriptionPlan;
                var23 = var2.bind(var4)(var8);
                var31 = var1.length;
                var33 = var1[var38];
                var30 = var0[var38];
                var32 = var37.size;
                var28 = var0.length;
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var15.container;
                var0.style = var4;
                var7 = _closure1_slot9;
                var5 = _closure1_slot6;
                var4 = {};
                var6 = var15.header;
                var4.style = var6;
                var11 = _closure1_slot8;
                var9 = _closure1_slot1;
                var6 = 20;
                var6 = var12[var6];
                var9 = var9.bind(var3)(var6);
                var6 = {};
                var12 = {};
                var19 = null;
                var17 = var19 != var16;
                var14 = '';
                if (!var17) {
                    _fun104680_ip = 336;
                    continue _fun104680
                }
            case 333:
                var14 = var16;
            case 336:
                var12.uri = var14;
                var6.source = var12;
                var12 = var15.image;
                var6.style = var12;
                var6 = var11.bind(var3)(var9, var6);
                var11 = new Array(3);
                var11[0] = var6;
                var17 = _closure1_slot8;
                var6 = _closure1_slot1;
                var9 = _closure1_slot3;
                var27 = 13;
                var12 = var9[var27];
                var16 = var6.bind(var3)(var12);
                var14 = {};
                var12 = 16;
                var14.size = var12;
                var14 = var17.bind(var3)(var16, var14);
                var11[1] = var14;
                var17 = _closure1_slot9;
                var16 = _closure1_slot6;
                var14 = {};
                var24 = _closure1_slot8;
                var21 = _closure1_slot0;
                var20 = 7;
                var18 = var9[var20];
                var18 = var21.bind(var3)(var18);
                var22 = var18.Text;
                var18 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18.children = var25;
                var22 = var24.bind(var3)(var22, var18);
                var18 = new Array(3);
                var18[0] = var22;
                var25 = _closure1_slot8;
                var22 = var9[var27];
                var24 = var6.bind(var3)(var22);
                var22 = {};
                var29 = 4;
                var22.size = var29;
                var22 = var25.bind(var3)(var24, var22);
                var18[1] = var22;
                var22 = _closure1_slot8;
                var20 = var9[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'heading-md/medium',
                    'color': 'text-default'
                };
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var18[2] = var20;
                var14.children = var18;
                var14 = var17.bind(var3)(var16, var14);
                var11[2] = var14;
                var4.children = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var11 = _closure1_slot8;
                var5 = var9[var27];
                var7 = var6.bind(var3)(var5);
                var5 = {};
                var5.size = var12;
                var5 = var11.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = _closure1_slot8;
                var5 = 21;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.listingId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var5 = var31 > var38;
                if (var5) {
                    _fun104680_ip = 661;
                    continue _fun104680
                }
            case 657:
                var5 = var32 > var38;
            case 661:
                if (var5) {
                    _fun104680_ip = 668;
                    continue _fun104680
                }
            case 664:
                var5 = var28 > var38;
            case 668:
                if (!var5) {
                    _fun104680_ip = 1578;
                    continue _fun104680
                }
            case 674:
                var8 = _closure1_slot9;
                var7 = _closure1_slot10;
                var6 = {};
                var12 = _closure1_slot8;
                var11 = _closure1_slot1;
                var18 = _closure1_slot3;
                var9 = var18[var27];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var14 = 24;
                var9.size = var14;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(3);
                var9[0] = var11;
                var14 = _closure1_slot8;
                var12 = _closure1_slot6;
                var11 = {};
                var15 = var15.contentContainer;
                var11.style = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot0;
                var15 = 11;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.GappedList;
                var15 = {};
                var18 = function() {
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var15.renderGap = var18;
                var18 = var32 > var38;
                var20 = null;
                if (!var18) {
                    _fun104680_ip = 1028;
                    continue _fun104680
                }
            case 800:
                var22 = _closure1_slot9;
                var21 = _closure1_slot6;
                var18 = {};
                var26 = _closure1_slot8;
                var25 = _closure1_slot12;
                var23 = {};
                var40 = _closure1_slot0;
                var24 = _closure1_slot3;
                var34 = 15;
                var36 = var24[var34];
                var36 = var40.bind(var3)(var36);
                var39 = var36.intl;
                var36 = var39.string;
                var34 = var24[var34];
                var34 = var40.bind(var3)(var34);
                var34 = var34.t;
                var34 = var34.ebOU2b;
                var34 = var36.bind(var39)(var34);
                var23.title = var34;
                var23.count = var32;
                var25 = var26.bind(var3)(var25, var23);
                var23 = new Array(4);
                var23[0] = var25;
                var34 = _closure1_slot8;
                var25 = _closure1_slot1;
                var26 = var24[var27];
                var32 = var25.bind(var3)(var26);
                var26 = {};
                var36 = 8;
                var26.size = var36;
                var26 = var34.bind(var3)(var32, var26);
                var23[1] = var26;
                var34 = _closure1_slot8;
                var32 = _closure1_slot14;
                var26 = {};
                var36 = new Array(0);
                var43 = var36;
                var42 = var37;
                var41 = 0;
                var37 = arraySpread(var43, var42, var41);
                var26.emojiIds = var36;
                var26.guildId = var35;
                var35 = 5;
                var26.maxEmojis = var35;
                var26 = var34.bind(var3)(var32, var26);
                var23[2] = var26;
                var26 = _closure1_slot8;
                var24 = var24[var27];
                var25 = var25.bind(var3)(var24);
                var24 = {};
                var24.size = var29;
                var24 = var26.bind(var3)(var25, var24);
                var23[3] = var24;
                var18.children = var23;
                var20 = var22.bind(var3)(var21, var18);
            case 1028:
                var18 = new Array(3);
                var18[0] = var20;
                var21 = var19 != var33;
                var20 = null;
                if (!var21) {
                    _fun104680_ip = 1271;
                    continue _fun104680
                }
            case 1048:
                var23 = _closure1_slot9;
                var22 = _closure1_slot6;
                var21 = {};
                var29 = _closure1_slot8;
                var26 = _closure1_slot12;
                var24 = {};
                var34 = _closure1_slot0;
                var25 = _closure1_slot3;
                var32 = 15;
                var35 = var25[var32];
                var35 = var34.bind(var3)(var35);
                var36 = var35.intl;
                var35 = var36.formatToPlainString;
                var32 = var25[var32];
                var32 = var34.bind(var3)(var32);
                var32 = var32.t;
                var34 = var32.y7dUrm;
                var32 = {};
                var32.numChannels = var31;
                var32 = var35.bind(var36)(var34, var32);
                var24.title = var32;
                var24.count = var31;
                var26 = var29.bind(var3)(var26, var24);
                var24 = new Array(4);
                var24[0] = var26;
                var32 = _closure1_slot8;
                var26 = _closure1_slot1;
                var29 = var25[var27];
                var31 = var26.bind(var3)(var29);
                var29 = {};
                var34 = 12;
                var29.size = var34;
                var29 = var32.bind(var3)(var31, var29);
                var24[1] = var29;
                var32 = _closure1_slot8;
                var31 = _closure1_slot16;
                var29 = {};
                var34 = var33.ref_id;
                var29.channelId = var34;
                var33 = var33.description;
                var29.description = var33;
                var29 = var32.bind(var3)(var31, var29);
                var24[2] = var29;
                var29 = _closure1_slot8;
                var25 = var25[var27];
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var31 = 6;
                var25.size = var31;
                var25 = var29.bind(var3)(var26, var25);
                var24[3] = var25;
                var21.children = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 1271:
                var18[1] = var20;
                var20 = var19 != var30;
                var19 = null;
                if (!var20) {
                    _fun104680_ip = 1509;
                    continue _fun104680
                }
            case 1287:
                var22 = _closure1_slot9;
                var21 = _closure1_slot6;
                var20 = {};
                var26 = _closure1_slot8;
                var25 = _closure1_slot12;
                var23 = {};
                var31 = _closure1_slot0;
                var24 = _closure1_slot3;
                var29 = 15;
                var32 = var24[var29];
                var32 = var31.bind(var3)(var32);
                var33 = var32.intl;
                var32 = var33.formatToPlainString;
                var29 = var24[var29];
                var29 = var31.bind(var3)(var29);
                var29 = var29.t;
                var31 = var29.MR7oOF;
                var29 = {};
                var29.numBenefits = var28;
                var29 = var32.bind(var33)(var31, var29);
                var23.title = var29;
                var23.count = var28;
                var25 = var26.bind(var3)(var25, var23);
                var23 = new Array(4);
                var23[0] = var25;
                var29 = _closure1_slot8;
                var25 = _closure1_slot1;
                var26 = var24[var27];
                var28 = var25.bind(var3)(var26);
                var26 = {};
                var31 = 12;
                var26.size = var31;
                var26 = var29.bind(var3)(var28, var26);
                var23[1] = var26;
                var29 = _closure1_slot8;
                var28 = _closure1_slot15;
                var26 = {};
                var31 = var30.name;
                var26.title = var31;
                var30 = var30.description;
                var26.description = var30;
                var26 = var29.bind(var3)(var28, var26);
                var23[2] = var26;
                var26 = _closure1_slot8;
                var24 = var24[var27];
                var25 = var25.bind(var3)(var24);
                var24 = {};
                var27 = 6;
                var24.size = var27;
                var24 = var26.bind(var3)(var25, var24);
                var23[3] = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1509:
                var18[2] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var12, var11);
                var9[1] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot17;
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
            case 1578:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 33, 1297, 671, 3932, 3269, 13647, 1307, 9322, 10816, 9260, 566, 1234, 4077, 4802, 10803, 13641, 4699, 13648, 2]);