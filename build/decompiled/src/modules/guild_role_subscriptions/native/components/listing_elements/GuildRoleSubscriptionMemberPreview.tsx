// modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot6 = var8;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var11 = 4;
    var3 = var5[var11];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var6 = {};
    var12 = {
        'flexDirection': 'row',
        'padding': 16,
        'borderRadius': null,
        'borderWidth': 1
    };
    var3 = 16;
    var13 = 5;
    var14 = var5[var13];
    var14 = var7.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var12.borderRadius = var14;
    var14 = var5[var13];
    var14 = var7.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var12.borderColor = var14;
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var13;
    var6.container = var12;
    var12 = {
        'width': 40,
        'height': 40,
        'borderRadius': 20
    };
    var6.avatar = var12;
    var12 = {};
    var12.marginStart = var3;
    var6.content = var12;
    var12 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.contextRow = var12;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var9 = var5[var6];
    var10 = var7.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot10 = var9;
    var6 = var5[var6];
    var7 = var7.bind(var0)(var6);
    var6 = {};
    var9 = 8;
    var6.size = var9;
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Text;
    var6 = {
        'variant': 'text-xs/medium',
        'color': 'text-muted',
        'children': '4:20 PM'
    };
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84038: for (var _fun84038_ip = 0;;) switch (_fun84038_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.content;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun84038_ip = 72;
                    continue _fun84038
                }
            case 14:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["6OSasb"];
                var11 = var2.bind(var3)(var1);
            case 72:
                var14 = var0.guildId;
                var6 = var0.style;
                var12 = var0.textStyle;
                var23 = var0.role;
                var0 = _closure1_slot9;
                var9 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var3.bind(var5)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useName;
                var0 = null;
                var15 = var1.bind(var2)(var14, var0, var13);
                if (!(var0 != var23)) {
                    _fun84038_ip = 773;
                    continue _fun84038
                }
            case 195:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var10 = 11;
                var1 = var1[var10];
                var3 = var2.bind(var4)(var1);
                var2 = var3.makeSource;
                var5 = var0 == var13;
                var1 = undefined;
                if (var5) {
                    _fun84038_ip = 245;
                    continue _fun84038
                }
            case 230:
                var7 = var13.getAvatarURL;
                var5 = 40;
                var1 = var7.bind(var13)(var14, var5);
            case 245:
                if (!(var0 == var1)) {
                    _fun84038_ip = 278;
                    continue _fun84038
                }
            case 249:
                var7 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var7 = var7.bind(var4)(var5);
                var5 = var7.getDefaultAvatarURL;
                var1 = var5.bind(var7)(var4, var4);
            case 278:
                var7 = var2.bind(var3)(var1);
                var10 = _closure1_slot0;
                var20 = _closure1_slot3;
                var1 = 12;
                var1 = var20[var1];
                var2 = var10.bind(var4)(var1);
                var1 = var2.getRoleIconData;
                var21 = 16;
                var22 = var1.bind(var2)(var23, var21);
                var19 = var23.color;
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var13 = var9.container;
                var5 = new Array(2);
                var5[0] = var13;
                var5[1] = var6;
                var1.style = var5;
                var14 = _closure1_slot6;
                var6 = _closure1_slot1;
                var5 = 13;
                var5 = var20[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var13 = var9.avatar;
                var5.style = var13;
                var5.source = var7;
                var6 = var14.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var9.content;
                var6.style = var7;
                var7 = {};
                var9 = var9.contextRow;
                var7.style = var9;
                var13 = 7;
                var9 = var20[var13];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var16 = {};
                var18 = _closure1_slot2;
                var17 = 14;
                var17 = var20[var17];
                var18 = var18.bind(var4)(var17);
                var17 = var18.int2hex;
                var17 = var17.bind(var18)(var19);
                var16.color = var17;
                var9.style = var16;
                var9.children = var15;
                var10 = var14.bind(var4)(var10, var9);
                var9 = new Array(4);
                var9[0] = var10;
                var14 = var0 != var22;
                var10 = null;
                if (!var14) {
                    _fun84038_ip = 651;
                    continue _fun84038
                }
            case 525:
                var16 = _closure1_slot8;
                var15 = _closure1_slot7;
                var14 = {};
                var18 = _closure1_slot10;
                var17 = new Array(2);
                var17[0] = var18;
                var20 = _closure1_slot6;
                var19 = _closure1_slot1;
                var24 = _closure1_slot3;
                var18 = 15;
                var18 = var24[var18];
                var19 = var19.bind(var4)(var18);
                var18 = {};
                var23 = var23.name;
                var18.name = var23;
                var23 = var22.customIconSrc;
                var24 = var0 != var23;
                var23 = undefined;
                if (!var24) {
                    _fun84038_ip = 612;
                    continue _fun84038
                }
            case 597:
                var24 = {};
                var25 = var22.customIconSrc;
                var24.uri = var25;
                var23 = var24;
            case 612:
                var18.source = var23;
                var22 = var22.unicodeEmoji;
                var18.unicodeEmoji = var22;
                var18.size = var21;
                var18 = var20.bind(var4)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var10 = var16.bind(var4)(var15, var14);
            case 651:
                var9[1] = var10;
                var10 = _closure1_slot11;
                var9[2] = var10;
                var10 = _closure1_slot12;
                var9[3] = var10;
                var7.children = var9;
                var9 = var3.bind(var4)(var2, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var13];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var8.style = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var6.children = var7;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 773:
                return var0;
        }
    };
    var2.GuildRoleSubscriptionMemberPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 8880, 3938, 1234, 566, 3956, 1417, 6830, 5426, 668, 6831, 2]);