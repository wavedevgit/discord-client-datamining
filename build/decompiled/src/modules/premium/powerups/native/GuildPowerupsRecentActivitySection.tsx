// modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun102546: for (var _fun102546_ip = 0;;) switch (_fun102546_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.boost;
                var1 = _closure1_slot7;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var6.useGetBoostUserConfig;
                var1 = var1.bind(var6)(var0);
                var6 = var1.timestamp;
                var15 = var1.username;
                var19 = var1.roleColor;
                var14 = var1.roleColorStrings;
                var1 = 6;
                var1 = var4[var1];
                var9 = var2.bind(var3)(var1);
                var8 = var9.getRelativeTimestamp;
                var1 = var6.getTime;
                var6 = var1.bind(var6)();
                var1 = true;
                var8 = var8.bind(var9)(var6, var1);
                var1 = 7;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var6 = var4.bind(var6)(var2, var1);
                var1 = 'username';
                if (!(var1 === var6)) {
                    _fun102546_ip = 170;
                    continue _fun102546
                }
            case 164:
                var1 = null;
                if (!(var1 == var19)) {
                    _fun102546_ip = 174;
                    continue _fun102546
                }
            case 170:
                var16 = {};
                _fun102546_ip = 183;
                continue _fun102546;
            case 174:
                var1 = {};
                var1.color = var19;
                var16 = var1;
            case 183:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 8;
                var2 = var13[var1];
                var4 = var9.bind(var3)(var2);
                var2 = var4.useProcessColorStringsArray;
                var17 = var2.bind(var4)(var14);
                var1 = var13[var1];
                var4 = var9.bind(var3)(var1);
                var2 = var4.useIsRoleStyleAndRoleColorsEligibleForERC;
                var24 = var0.guildId;
                var23 = var0.userId;
                var25 = var4;
                var22 = var6;
                var21 = var17;
                var18 = var25[var2](var24, var23, var22, var21, var20);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var5.boostRowContainer;
                var0.style = var4;
                var10 = _closure1_slot5;
                var4 = 9;
                var4 = var13[var4];
                var4 = var9.bind(var3)(var4);
                var9 = var4.BoostGemIcon;
                var4 = {};
                var12 = _closure1_slot1;
                var11 = 4;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.GUILD_BOOSTING_PINK;
                var4.color = var11;
                var11 = 'sm';
                var4.size = var11;
                var9 = var10.bind(var3)(var9, var4);
                var4 = new Array(3);
                var4[0] = var9;
                var12 = _closure1_slot6;
                var11 = _closure1_slot3;
                var10 = {};
                var5 = var5.boostMessage;
                var10.style = var5;
                var5 = 'dot';
                var5 = var5 === var6;
                if (!var5) {
                    _fun102546_ip = 386;
                    continue _fun102546
                }
            case 380:
                var6 = null;
                var5 = var6 != var19;
            case 386:
                if (!var5) {
                    _fun102546_ip = 443;
                    continue _fun102546
                }
            case 389:
                var13 = _closure1_slot5;
                var9 = _closure1_slot0;
                var20 = _closure1_slot2;
                var6 = 10;
                var6 = var20[var6];
                var6 = var9.bind(var3)(var6);
                var9 = var6.RoleDot;
                var6 = {};
                var20 = 'small';
                var6.size = var20;
                var6.color = var19;
                var6.colors = var14;
                var5 = var13.bind(var3)(var9, var6);
            case 443:
                var13 = new Array(4);
                var13[0] = var5;
                var14 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = 11;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active',
                    'lineClamp': 1
                };
                var5.style = var16;
                var16 = undefined;
                if (!var18) {
                    _fun102546_ip = 506;
                    continue _fun102546
                }
            case 503:
                var16 = var17;
            case 506:
                var5.gradientColors = var16;
                var5.children = var15;
                var5 = var14.bind(var3)(var6, var5);
                var13[1] = var5;
                var16 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var14 = var5[var9];
                var14 = var6.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active',
                    'lineClamp': 1,
                    'children': ' '
                };
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var16 = _closure1_slot5;
                var14 = var5[var9];
                var14 = var6.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/medium',
                    'lineClamp': 1
                };
                var17 = 12;
                var17 = var5[var17];
                var17 = var6.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var20 = _closure1_slot1;
                var17 = 13;
                var17 = var5[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.plwH8d;
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var4[1] = var10;
                var7 = _closure1_slot5;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-xs/semibold';
                var5.variant = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.sectionContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.gap = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.boostContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.boostRowContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.boostMessage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102548: for (var _fun102548_ip = 0;;) switch (_fun102548_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = _closure1_slot7;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = 10;
                var11 = var1.bind(var4)(var2, var0);
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun102548_ip = 257;
                    continue _fun102548
                }
            case 66:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var9.sectionContainer;
                var1.style = var5;
                var8 = _closure1_slot5;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 11;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'text-subtle'
                };
                var10 = 12;
                var12 = var15[var10];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var15[var10];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.yM9Krm;
                var10 = var12.bind(var13)(var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.boostContainer;
                var6.style = var9;
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var2.boost = var0;
                    var5 = var0.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'boost-';
                    var1 = var1.bind(var0)(var5);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 257:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 33, 1297, 671, 13398, 4222, 566, 6677, 7681, 8195, 3941, 1234, 1890, 2]);