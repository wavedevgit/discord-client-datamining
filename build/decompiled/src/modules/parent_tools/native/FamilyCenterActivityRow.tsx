// modules/parent_tools/native/FamilyCenterActivityRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var7 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var15 = 2;
    var3 = var5[var15];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_TO_TEXT;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 7;
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var8 = var9.createStyles;
    var6 = {};
    var13 = {
        'display': 'flex',
        'flexDirection': 'row',
        'borderBottomColor': null,
        'borderBottomWidth': 1,
        'paddingVertical': 12
    };
    var11 = 8;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var13.borderBottomColor = var14;
    var6.container = var13;
    var13 = {};
    var14 = 9;
    var16 = var5[var14];
    var16 = var4.bind(var0)(var16);
    var16 = var16.AVATAR_SIZE_MAP;
    var14 = var5[var14];
    var14 = var4.bind(var0)(var14);
    var14 = var14.AvatarSizes;
    var14 = var14.NORMAL;
    var14 = var16[var14];
    var14 = var14 / var15;
    var13.borderRadius = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var13.backgroundColor = var14;
    var6.avatar = var13;
    var13 = {
        'marginRight': 12,
        'alignItems': 'flex-start'
    };
    var6.avatarContainer = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'column',
        'flexShrink': 1
    };
    var6.textContainer = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexShrink': 1
    };
    var6.text = var13;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot10 = var6;
    var8 = var7.memo;
    var6 = function(arg0) { // Environment: var1
        _fun81952: for (var _fun81952_ip = 0;;) switch (_fun81952_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.action;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot10;
                var4 = undefined;
                var12 = var2.bind(var4)();
                var5 = _closure1_slot6;
                var3 = var5.get;
                var2 = var1.display_type;
                var11 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = 'No text for action type';
                var2 = var3.bind(var4)(var11, var2);
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.entity_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var3.bind(var5)(var2, var0);
                var0 = null;
                if (!(var0 != var17)) {
                    _fun81952_ip = 519;
                    continue _fun81952
                }
            case 134:
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 12;
                var2 = var14[var2];
                var3 = var15.bind(var4)(var2);
                var2 = var3.extractTimestamp;
                var1 = var1.event_id;
                var16 = var2.bind(var3)(var1);
                var3 = _closure1_slot9;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.container;
                var1.style = var5;
                var10 = _closure1_slot8;
                var5 = {};
                var6 = var12.avatarContainer;
                var5.style = var6;
                var6 = 13;
                var6 = var14[var6];
                var8 = var15.bind(var4)(var6);
                var6 = {};
                var9 = var12.avatar;
                var6.avatarStyle = var9;
                var6.user = var17;
                var6.guildId = var4;
                var9 = true;
                var6.disablePlaceholder = var9;
                var9 = var17.avatarDecoration;
                var6.avatarDecoration = var9;
                var6 = var10.bind(var4)(var8, var6);
                var5.children = var6;
                var6 = var10.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var8 = var12.textContainer;
                var6.style = var8;
                var13 = _closure1_slot0;
                var8 = 14;
                var7 = var14[var8];
                var7 = var13.bind(var4)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active',
                    'ellipsizeMode': 'tail',
                    'lineClamp': 1
                };
                var12 = var12.text;
                var7.style = var12;
                var12 = 15;
                var12 = var14[var12];
                var15 = var15.bind(var4)(var12);
                var12 = var15.getName;
                var12 = var12.bind(var15)(var17);
                var7.children = var12;
                var9 = var10.bind(var4)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var8 = var14[var8];
                var8 = var13.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'channels-default'
                };
                var12 = 16;
                var12 = var14[var12];
                var14 = var13.bind(var4)(var12);
                var13 = var14.formatUserActivityTimestamp;
                var12 = global;
                var12 = var12.Date;
                var15 = var12.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var12
                    }
                });
                var20 = var15;
                var19 = var16;
                var12 = new var20[var12](var19, var18);
                var15 = var12 instanceof Object ? var12 : var15;
                var12 = var15.getTime;
                var12 = var12.bind(var15)();
                var11 = var11.timestampFormatter;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var6.children = var7;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 519:
                return var0;
        }
    };
    var8 = var8.bind(var7)(var6);
    var _closure1_slot11 = var8;
    var6 = 'FamilyCenterActivityRowUser';
    var8.displayName = var6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row',
        'borderBottomColor': null,
        'borderBottomWidth': 1,
        'paddingVertical': 12
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9.borderBottomColor = var13;
    var3.container = var9;
    var9 = {
        'borderRadius': null,
        'borderColor': null,
        'height': 40,
        'width': 40,
        'margin': 0,
        'backgroundColor': null,
        'marginRight': 12
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.borderColor = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGHEST;
    var9.backgroundColor = var13;
    var3.avatar = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var9.color = var11;
    var3.avatarText = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'flexShrink': 1
    };
    var3.text = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.headerContainer = var9;
    var9 = {};
    var9.marginRight = var10;
    var3.badge = var9;
    var9 = {};
    var10 = 16;
    var9.paddingRight = var10;
    var3.header = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.headerAndIconContainer = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun81954: for (var _fun81954_ip = 0;;) switch (_fun81954_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.action;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot12;
                var3 = undefined;
                var18 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.entity_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var5.bind(var6)(var2, var1);
                var2 = _closure1_slot6;
                var1 = var2.get;
                var0 = var0.display_type;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = 'No text for action type';
                var0 = var1.bind(var3)(var2, var0);
                if (!(var3 !== var15)) {
                    _fun81954_ip = 689;
                    continue _fun81954
                }
            case 132:
                var2 = var15.features;
                var1 = var2.has;
                var0 = _closure1_slot7;
                var0 = var0.VERIFIED;
                var12 = var1.bind(var2)(var0);
                if (var12) {
                    _fun81954_ip = 187;
                    continue _fun81954
                }
            case 161:
                var2 = var15.features;
                var1 = var2.has;
                var0 = _closure1_slot7;
                var0 = var0.PARTNERED;
                var12 = var1.bind(var2)(var0);
            case 187:
                var17 = var15.name;
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var18.container;
                var0.style = var4;
                var9 = _closure1_slot8;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 17;
                var4 = var8[var6];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = var18.avatar;
                var4.style = var7;
                var7 = var18.avatarText;
                var4.textStyle = var7;
                var4.guild = var15;
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.GuildIconSizes;
                var6 = var6.NORMAL;
                var4.size = var6;
                var16 = true;
                var4.animate = var16;
                var5 = var9.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var18.text;
                var5.style = var6;
                var6 = {};
                var7 = var18.headerContainer;
                var6.style = var7;
                var10 = {};
                var7 = var18.headerAndIconContainer;
                var10.style = var7;
                var8 = null;
                if (!var12) {
                    _fun81954_ip = 428;
                    continue _fun81954
                }
            case 352:
                var14 = _closure1_slot8;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 18;
                var12 = var21[var19];
                var13 = var20.bind(var3)(var12);
                var12 = {};
                var22 = var18.badge;
                var12.style = var22;
                var12.guild = var15;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.Sizes;
                var19 = var19.SMALL;
                var12.size = var19;
                var12.disableColor = var16;
                var8 = var14.bind(var3)(var13, var12);
            case 428:
                var12 = new Array(2);
                var12[0] = var8;
                var16 = _closure1_slot8;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 14;
                var13 = var13[var8];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active',
                    'ellipsizeMode': 'tail',
                    'lineClamp': 1
                };
                var18 = var18.header;
                var13.style = var18;
                var13.children = var17;
                var13 = var16.bind(var3)(var14, var13);
                var12[1] = var13;
                var10.children = var12;
                var10 = var2.bind(var3)(var1, var10);
                var6.children = var10;
                var9 = var9.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var9 = var15.approximateMemberCount;
                var7 = null;
                if (!(var3 !== var9)) {
                    _fun81954_ip = 659;
                    continue _fun81954
                }
            case 544:
                var10 = _closure1_slot8;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = var16[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'channels-default'
                };
                var12 = 19;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var14 = var12.intl;
                var13 = var14.format;
                var12 = _closure1_slot1;
                var11 = 20;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11["5JmNgg"];
                var11 = {};
                var15 = var15.approximateMemberCount;
                var11.members = var15;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 659:
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 689:
                var0 = null;
                return var0;
        }
    };
    var6 = var6.bind(var7)(var3);
    var _closure1_slot13 = var6;
    var3 = 'FamilyCenterActivityRowGuild';
    var6.displayName = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterActivityRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81956: for (var _fun81956_ip = 0;;) switch (_fun81956_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.action;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 16;
                var2 = var2[var8];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isUserAction;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun81956_ip = 113;
                    continue _fun81956
                }
            case 47:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildAction;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun81956_ip = 113;
                    continue _fun81956
                }
            case 78:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isPurchase;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun81956_ip = 113;
                    continue _fun81956
                }
            case 109:
                var2 = null;
                return var2;
            case 113:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isPurchase;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun81956_ip = 235;
                    continue _fun81956
                }
            case 144:
                var5 = _closure1_slot8;
                var3 = _closure1_slot3;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var7 = var7.bind(var4)(var6);
                var6 = var7.isUserAction;
                var6 = var6.bind(var7)(var0);
                var9 = _closure1_slot8;
                if (var6) {
                    _fun81956_ip = 207;
                    continue _fun81956
                }
            case 189:
                var7 = _closure1_slot13;
                var6 = {};
                var6.action = var0;
                var6 = var9.bind(var4)(var7, var6);
                _fun81956_ip = 223;
                continue _fun81956;
            case 207:
                var8 = _closure1_slot11;
                var7 = {};
                var7.action = var0;
                var6 = var9.bind(var4)(var8, var7);
            case 223:
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 235:
                var3 = _closure1_slot5;
                var2 = var3.getPurchaseInfo;
                var0 = var0.entity_id;
                var5 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun81956_ip = 343;
                    continue _fun81956
                }
            case 267:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 21;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var5.sku_id;
                var1.skuId = var6;
                var6 = var5.subscription_plan_id;
                var1.subscriptionPlanId = var6;
                var6 = var5.total;
                var1.total = var6;
                var5 = var5.currency;
                var1.currency = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 343:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 4559, 4560, 660, 33, 1297, 671, 5418, 44, 632, 21, 5416, 3902, 3197, 4624, 7357, 7416, 1234, 1849, 10438, 2]);