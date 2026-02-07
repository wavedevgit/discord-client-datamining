// components_native/common/RolePill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var6;
    var3 = var3.MAX_VISUAL_ROLE_LENGTH;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginRight': 4,
        'marginBottom': 4
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 8,
        'paddingVertical': 6
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.pill = var8;
    var8 = {
        'marginRight': 8,
        'borderRadius': null,
        'height': 12,
        'width': 12
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_MUTED;
    var8.backgroundColor = var12;
    var3.bubble = var8;
    var8 = {
        'marginRight': 8,
        'borderRadius': null,
        'height': 12,
        'width': 12
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.verifiedContainer = var8;
    var8 = {};
    var8.paddingRight = var9;
    var3.roleIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/RolePill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73560: for (var _fun73560_ip = 0;;) switch (_fun73560_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.role;
                var _closure2_slot0 = var20;
                var18 = var0.guildId;
                var6 = var0.disableInteraction;
                var19 = var0.color;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var5 = var0.DeveloperMode;
                var0 = var5.useSetting;
                var5 = var0.bind(var5)();
                var0 = 7;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useRoleIcon;
                var0 = {};
                var0.guildId = var18;
                var7 = var20.id;
                var0.roleId = var7;
                var12 = 12;
                var0.size = var12;
                var15 = var1.bind(var2)(var0);
                var11 = var20.name;
                var _closure2_slot1 = var11;
                var0 = var20.name;
                var1 = var0.length;
                var0 = _closure1_slot5;
                if (!(var1 > var0)) {
                    _fun73560_ip = 203;
                    continue _fun73560
                }
            case 145:
                var7 = var20.name;
                var2 = var7.slice;
                var1 = _closure1_slot5;
                var0 = 0;
                var7 = var2.bind(var7)(var0, var1);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '...';
                var0 = var2.bind(var1)(var7, var0);
                _closure2_slot1 = var0;
                var11 = var0;
            case 203:
                var9 = null;
                if (!(var9 == var19)) {
                    _fun73560_ip = 215;
                    continue _fun73560
                }
            case 209:
                var19 = var20.colorString;
            case 215:
                var0 = var20.tags;
                var1 = var9 == var0;
                var7 = undefined;
                if (var1) {
                    _fun73560_ip = 236;
                    continue _fun73560
                }
            case 230:
                var7 = var0.guild_connections;
            case 236:
                var0 = _closure1_slot8;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var5 = !var5;
                if (var5) {
                    _fun73560_ip = 285;
                    continue _fun73560
                }
            case 282:
                var5 = var6;
            case 285:
                var0.disabled = var5;
                var5 = var16.container;
                var0.style = var5;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 8;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.copy;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    var2 = 9;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.roleIdCopied;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var17 = false;
                var0.accessible = var17;
                var6 = _closure1_slot7;
                var5 = _closure1_slot3;
                var4 = {};
                var10 = var16.pill;
                var4.style = var10;
                if (!(var3 === var7)) {
                    _fun73560_ip = 396;
                    continue _fun73560
                }
            case 339:
                var13 = _closure1_slot6;
                var10 = _closure1_slot3;
                var7 = {};
                var21 = var16.bubble;
                var14 = new Array(2);
                var14[0] = var21;
                if (!(var9 == var19)) {
                    _fun73560_ip = 371;
                    continue _fun73560
                }
            case 367:
                var21 = {};
                _fun73560_ip = 380;
                continue _fun73560;
            case 371:
                var22 = {};
                var22.backgroundColor = var19;
                var21 = var22;
            case 380:
                var14[1] = var21;
                var7.style = var14;
                var10 = var13.bind(var3)(var10, var7);
                _fun73560_ip = 489;
                continue _fun73560;
            case 396:
                var14 = _closure1_slot6;
                var13 = _closure1_slot1;
                var21 = _closure1_slot2;
                var7 = 11;
                var7 = var21[var7];
                var13 = var13.bind(var3)(var7);
                var7 = {};
                var21 = var16.verifiedContainer;
                var7.style = var21;
                var20 = var20.id;
                var7.roleId = var20;
                if (!(var9 == var18)) {
                    _fun73560_ip = 450;
                    continue _fun73560
                }
            case 446:
                var18 = _closure1_slot4;
            case 450:
                var7.guildId = var18;
                var20 = var9 != var19;
                var18 = undefined;
                if (!var20) {
                    _fun73560_ip = 466;
                    continue _fun73560
                }
            case 463:
                var18 = var19;
            case 466:
                var7.roleColor = var18;
                var18 = 14;
                var7.size = var18;
                var7.displayRoleIcon = var17;
                var10 = var14.bind(var3)(var13, var7);
            case 489:
                var7 = new Array(3);
                var7[0] = var10;
                var10 = var9 != var15;
                var9 = null;
                if (!var10) {
                    _fun73560_ip = 536;
                    continue _fun73560
                }
            case 506:
                var14 = _closure1_slot6;
                var13 = _closure1_slot3;
                var10 = {};
                var16 = var16.roleIcon;
                var10.style = var16;
                var10.children = var15;
                var9 = var14.bind(var3)(var13, var10);
            case 536:
                var7[1] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/semibold',
                    'color': 'interactive-text-active'
                };
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1348, 6802, 5343, 3149, 4904, 9224, 3942, 2]);