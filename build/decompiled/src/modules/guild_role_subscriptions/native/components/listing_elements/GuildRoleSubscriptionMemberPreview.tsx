// modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flexDirection': 'row',
        'padding': 16,
        'borderRadius': null,
        'borderWidth': 1
    };
    var3 = 16;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var6.container = var9;
    var9 = {
        'width': 40,
        'height': 40,
        'borderRadius': 20
    };
    var6.avatar = var9;
    var9 = {};
    var9.marginStart = var3;
    var6.content = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.contextRow = var9;
    var9 = {
        'width': 16,
        'height': 16,
        'marginStart': 8
    };
    var6.icon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84750: for (var _fun84750_ip = 0;;) switch (_fun84750_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.content;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun84750_ip = 72;
                    continue _fun84750
                }
            case 14:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 6;
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
                var24 = var0.role;
                var0 = _closure1_slot9;
                var8 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot3;
                var1 = 7;
                var1 = var0[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var3.bind(var5)(var2, var1);
                var1 = _closure1_slot1;
                var17 = 8;
                var0 = var0[var17];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useName;
                var0 = null;
                var15 = var1.bind(var2)(var14, var0, var13);
                if (!(var0 != var24)) {
                    _fun84750_ip = 850;
                    continue _fun84750
                }
            case 195:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var10 = 9;
                var1 = var1[var10];
                var3 = var2.bind(var4)(var1);
                var2 = var3.makeSource;
                var5 = var0 == var13;
                var1 = undefined;
                if (var5) {
                    _fun84750_ip = 245;
                    continue _fun84750
                }
            case 230:
                var7 = var13.getAvatarURL;
                var5 = 40;
                var1 = var7.bind(var13)(var14, var5);
            case 245:
                if (!(var0 == var1)) {
                    _fun84750_ip = 278;
                    continue _fun84750
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
                var21 = _closure1_slot3;
                var1 = 10;
                var1 = var21[var1];
                var2 = var10.bind(var4)(var1);
                var1 = var2.getRoleIconData;
                var22 = 16;
                var23 = var1.bind(var2)(var24, var22);
                var20 = var24.color;
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var13 = var8.container;
                var5 = new Array(2);
                var5[0] = var13;
                var5[1] = var6;
                var1.style = var5;
                var14 = _closure1_slot6;
                var6 = _closure1_slot1;
                var5 = 11;
                var5 = var21[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var13 = var8.avatar;
                var5.style = var13;
                var5.source = var7;
                var6 = var14.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var8.content;
                var6.style = var7;
                var7 = {};
                var8 = var8.contextRow;
                var7.style = var8;
                var13 = 12;
                var8 = var21[var13];
                var8 = var10.bind(var4)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var16 = {};
                var19 = _closure1_slot2;
                var18 = 13;
                var18 = var21[var18];
                var19 = var19.bind(var4)(var18);
                var18 = var19.int2hex;
                var18 = var18.bind(var19)(var20);
                var16.color = var18;
                var8.style = var16;
                var8.children = var15;
                var8 = var14.bind(var4)(var10, var8);
                var14 = new Array(4);
                var14[0] = var8;
                var10 = var0 != var23;
                var8 = null;
                if (!var10) {
                    _fun84750_ip = 674;
                    continue _fun84750
                }
            case 525:
                var16 = _closure1_slot8;
                var15 = _closure1_slot7;
                var10 = {};
                var21 = _closure1_slot6;
                var20 = _closure1_slot1;
                var25 = _closure1_slot3;
                var18 = 14;
                var18 = var25[var18];
                var19 = var20.bind(var4)(var18);
                var18 = {};
                var26 = 4;
                var18.size = var26;
                var19 = var21.bind(var4)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = 15;
                var19 = var25[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var24 = var24.name;
                var19.name = var24;
                var24 = var23.customIconSrc;
                var25 = var0 != var24;
                var24 = undefined;
                if (!var25) {
                    _fun84750_ip = 635;
                    continue _fun84750
                }
            case 620:
                var25 = {};
                var26 = var23.customIconSrc;
                var25.uri = var26;
                var24 = var25;
            case 635:
                var19.source = var24;
                var23 = var23.unicodeEmoji;
                var19.unicodeEmoji = var23;
                var19.size = var22;
                var19 = var21.bind(var4)(var20, var19);
                var18[1] = var19;
                var10.children = var18;
                var8 = var16.bind(var4)(var15, var10);
            case 674:
                var14[1] = var8;
                var10 = _closure1_slot6;
                var16 = _closure1_slot1;
                var8 = _closure1_slot3;
                var15 = 14;
                var15 = var8[var15];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var15.size = var17;
                var15 = var10.bind(var4)(var16, var15);
                var14[2] = var15;
                var9 = _closure1_slot0;
                var15 = var8[var13];
                var15 = var9.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted',
                    'children': '4:20 PM'
                };
                var15 = var10.bind(var4)(var16, var15);
                var14[3] = var15;
                var7.children = var14;
                var14 = var3.bind(var4)(var2, var7);
                var7 = new Array(2);
                var7[0] = var14;
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
            case 850:
                return var0;
        }
    };
    var2.GuildRoleSubscriptionMemberPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 1234, 566, 3961, 1417, 6735, 4704, 3941, 668, 9279, 6736, 2]);