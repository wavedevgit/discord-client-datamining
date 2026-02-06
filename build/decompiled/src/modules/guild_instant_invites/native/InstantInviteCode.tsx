// modules/guild_instant_invites/native/InstantInviteCode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun73081: for (var _fun73081_ip = 0;;) switch (_fun73081_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.channel;
                var13 = var0.expiresAt;
                var0 = _closure1_slot8;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSimpleChannelIconComponent;
                var12 = var0.bind(var1)(var22);
                var5 = null;
                if (!(var5 == var12)) {
                    _fun73081_ip = 90;
                    continue _fun73081
                }
            case 64:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.TextIcon;
            case 90:
                var2 = _closure1_slot7;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var6 = 9;
                var0 = var19[var6];
                var0 = var18.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var8 = _closure1_slot7;
                var4 = var19[var6];
                var4 = var18.bind(var3)(var4);
                var7 = var4.Stack;
                var4 = {
                    'direction': 'horizontal',
                    'align': 'center'
                };
                var11 = _closure1_slot6;
                var9 = {
                    'color': 'icon-subtle',
                    'size': 'xs'
                };
                var11 = var11.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var16 = _closure1_slot6;
                var11 = 10;
                var12 = var19[var11];
                var12 = var18.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-subtle',
                    'style': null,
                    'lineClamp': 1
                };
                var17 = var14.channel;
                var12.style = var17;
                var17 = 11;
                var17 = var19[var17];
                var21 = var18.bind(var3)(var17);
                var20 = var21.computeChannelName;
                var25 = _closure1_slot5;
                var24 = _closure1_slot4;
                var23 = false;
                var27 = var21;
                var26 = var22;
                var17 = var27[var20](var26, var25, var24, var23, var22);
                var12.children = var17;
                var12 = var16.bind(var3)(var15, var12);
                var9[1] = var12;
                var4.children = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = var5 != var13;
                if (!var5) {
                    _fun73081_ip = 556;
                    continue _fun73081
                }
            case 313:
                var8 = _closure1_slot7;
                var20 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = var15[var6];
                var6 = var20.bind(var3)(var6);
                var7 = var6.Stack;
                var6 = {
                    'direction': 'horizontal',
                    'align': 'center'
                };
                var16 = _closure1_slot6;
                var9 = 12;
                var9 = var15[var9];
                var9 = var20.bind(var3)(var9);
                var12 = var9.ClockIcon;
                var9 = {
                    'size': 'xs',
                    'color': 'icon-subtle'
                };
                var12 = var16.bind(var3)(var12, var9);
                var9 = new Array(3);
                var9[0] = var12;
                var16 = _closure1_slot6;
                var11 = var15[var11];
                var11 = var20.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-subtle'
                };
                var17 = 13;
                var18 = var15[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var15[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.aTABYx;
                var17 = var18.bind(var19)(var17);
                var11.children = var17;
                var11 = var16.bind(var3)(var12, var11);
                var9[1] = var11;
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var10 = 14;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var14 = var14.time;
                var10.style = var14;
                var10.deadline = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 556:
                var4[1] = var5;
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
    var12 = 0;
    var7 = var6[var12];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
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
    var10 = 8;
    var9 = {
        'flexDirection': 'row',
        'gap': 8,
        'alignItems': 'center'
    };
    var4.inviteDetails = var9;
    var9 = {};
    var9.marginRight = var10;
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var14;
    var4.code = var9;
    var9 = {};
    var9.flex = var13;
    var4.flex = var9;
    var9 = {};
    var9.flex = var12;
    var4.channel = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_POSITIVE;
    var9.color = var10;
    var4.time = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_instant_invites/native/InstantInviteCode.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var12 = var0.invite;
        var0 = _closure1_slot8;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var4.flex;
        var0.style = var4;
        var6 = _closure1_slot7;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 9;
        var4 = var11[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var10 = _closure1_slot6;
        var7 = 10;
        var7 = var11[var7];
        var7 = var9.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-lg/bold',
            'tabularNumbers': true
        };
        var11 = var12.code;
        var7.children = var11;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var10 = _closure1_slot6;
        var9 = _closure1_slot9;
        var8 = {};
        var11 = var12.channel;
        var8.channel = var11;
        var11 = var12.getExpiresAt;
        var11 = var11.bind(var12)();
        var8.expiresAt = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.InstantInviteDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3102, 1621, 33, 1297, 671, 4810, 4849, 4081, 3943, 4795, 3276, 1234, 9160, 2]);