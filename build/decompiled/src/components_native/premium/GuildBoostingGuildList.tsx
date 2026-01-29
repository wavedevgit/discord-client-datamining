// components_native/premium/GuildBoostingGuildList.tsx
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
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 12,
        'paddingLeft': 16,
        'borderRadius': null,
        'marginBottom': 8,
        'minHeight': 96,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = 16;
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.guildCard = var8;
    var8 = {};
    var8.marginRight = var10;
    var3.guildIcon = var8;
    var8 = {};
    var8.flex = var9;
    var3.guildCardDescription = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.subscriptionInfo = var8;
    var8 = {
        'width': 18,
        'height': 12,
        'marginLeft': 4294967291
    };
    var3.premiumGuildImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Original name: GuildBoostingGuildListItem, environment: var1
        _fun82506: for (var _fun82506_ip = 0;;) switch (_fun82506_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot10;
                var4 = undefined;
                var18 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var9 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var0 = 9;
                var0 = var2[var0];
                var7 = var3.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var6.bind(var7)(var3, var0);
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var0 = null;
                var3 = var0 == var10;
                var1 = undefined;
                if (var3) {
                    _fun82506_ip = 125;
                    continue _fun82506
                }
            case 120:
                var1 = var10.id;
            case 125:
                var1 = var2.bind(var4)(var1);
                var22 = var1.total;
                var1 = var0 == var10;
                var0 = null;
                if (var1) {
                    _fun82506_ip = 605;
                    continue _fun82506
                }
            case 148:
                var3 = _closure1_slot9;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 11;
                var1 = var11[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var6 = var18.guildCard;
                var1.style = var6;
                var6 = 0.5;
                var1.activeOpacity = var6;
                var5 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.transitionToGuild;
                    var4 = _closure2_slot0;
                    var2 = {};
                    var7 = {};
                    var8 = true;
                    var7.shouldShowSubscribeTooltip = var8;
                    var2.state = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot1;
                    var1 = 13;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1.onPress = var5;
                var8 = _closure1_slot8;
                var12 = 14;
                var5 = var11[var12];
                var6 = var7.bind(var4)(var5);
                var5 = {};
                var5.guild = var10;
                var19 = _closure1_slot0;
                var12 = var11[var12];
                var12 = var19.bind(var4)(var12);
                var12 = var12.GuildIconSizes;
                var12 = var12.LARGE;
                var5.size = var12;
                var12 = var18.guildIcon;
                var5.style = var12;
                var12 = false;
                var5.selected = var12;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var12 = _closure1_slot3;
                var6 = {};
                var13 = var18.guildCardDescription;
                var6.style = var13;
                var16 = 15;
                var13 = var11[var16];
                var13 = var19.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {};
                var17 = 'text-md/bold';
                var13.variant = var17;
                var17 = var10.name;
                var13.children = var17;
                var14 = var8.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var17 = var18.subscriptionInfo;
                var14.style = var17;
                var17 = _closure1_slot4;
                var15 = {};
                var20 = 16;
                var20 = var11[var20];
                var20 = var7.bind(var4)(var20);
                var15.source = var20;
                var18 = var18.premiumGuildImage;
                var15.style = var18;
                var18 = 'contain';
                var15.resizeMode = var18;
                var18 = 'resize';
                var15.resizeMethod = var18;
                var17 = var8.bind(var4)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var16 = var11[var16];
                var16 = var19.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {};
                var18 = 'text-xs/medium';
                var16.variant = var18;
                var18 = 17;
                var20 = var11[var18];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var11[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18.If4iTS;
                var18 = {};
                var18.subscriberCount = var22;
                var18 = var20.bind(var21)(var19, var18);
                var16.children = var18;
                var16 = var8.bind(var4)(var17, var16);
                var15[1] = var16;
                var14.children = var15;
                var14 = var3.bind(var4)(var12, var14);
                var13[1] = var14;
                var6.children = var13;
                var6 = var3.bind(var4)(var12, var6);
                var5[1] = var6;
                var6 = 18;
                var6 = var11[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.guild = var10;
                var6.theme = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 605:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/GuildBoostingGuildList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun82509: for (var _fun82509_ip = 0;;) switch (_fun82509_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildCount;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun82509_ip = 24;
                    continue _fun82509
                }
            case 17:
                var8 = _closure1_slot7;
            case 24:
                var5 = var0.style;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var1 = _closure1_slot6;
                    var0 = var1.getFlattenedGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var6.bind(var7)(var2, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var5;
                var6 = var7.slice;
                var5 = 0;
                var6 = var6.bind(var7)(var5, var8);
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var4 = arg0;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var1.guildId = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 4333, 660, 33, 1297, 671, 3205, 566, 6671, 6737, 5573, 7184, 7353, 3895, 9333, 1234, 10533, 2]);