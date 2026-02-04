// modules/premium/powerups/native/GuildPowerupsWarning.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'padding': null,
        'backgroundColor': null,
        'borderWidth': 1
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.padding = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_FEEDBACK_WARNING;
    var8.backgroundColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.STATUS_WARNING;
    var8.borderColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var9 = 'hidden';
    var8.overflow = var9;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'gap': null,
        'alignItems': 'center'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.gap = var9;
    var9 = 'center';
    var3.contentContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var8.marginTop = var10;
    var3.warningText = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102361: for (var _fun102361_ip = 0;;) switch (_fun102361_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.powerupNames;
                var11 = var0.warnings;
                var0 = _closure1_slot6;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var _closure2_slot0 = var14;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)(var2, var1);
                var1 = var0.shouldShow;
                var18 = var0.title;
                var13 = var0.description;
                var8 = null;
                var0 = null;
                if (!var1) {
                    _fun102361_ip = 358;
                    continue _fun102361
                }
            case 91:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var14.container;
                var1.style = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var14.contentContainer;
                var5.style = var7;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 6;
                var7 = var15[var7];
                var7 = var12.bind(var4)(var7);
                var10 = var7.CircleErrorIcon;
                var7 = {};
                var17 = _closure1_slot1;
                var16 = 4;
                var16 = var15[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.colors;
                var16 = var16.TEXT_FEEDBACK_WARNING;
                var7.color = var16;
                var16 = 'md';
                var7.size = var16;
                var10 = var3.bind(var4)(var10, var7);
                var7 = new Array(4);
                var7[0] = var10;
                var10 = 7;
                var16 = var15[var10];
                var16 = var12.bind(var4)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-feedback-warning'
                };
                var19 = var14.text;
                var16.style = var19;
                var16.children = var18;
                var16 = var3.bind(var4)(var17, var16);
                var7[1] = var16;
                var10 = var15[var10];
                var10 = var12.bind(var4)(var10);
                var12 = var10.Text;
                var10 = {};
                var15 = 'text-sm/medium';
                var10.variant = var15;
                var14 = var14.text;
                var10.style = var14;
                var10.children = var13;
                var10 = var3.bind(var4)(var12, var10);
                var7[2] = var10;
                var10 = var8 == var11;
                var8 = undefined;
                if (var10) {
                    _fun102361_ip = 334;
                    continue _fun102361
                }
            case 317:
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot4;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-feedback-warning'
                    };
                    var5 = _closure2_slot0;
                    var6 = var5.warningText;
                    var0 = new Array(2);
                    var0[0] = var6;
                    var5 = var5.text;
                    var0[1] = var5;
                    var1.style = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = 'warning-';
                    var0 = arg1;
                    var0 = var6.bind(var5)(var0);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 334:
                var7[3] = var8;
                var5.children = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 358:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 13354, 5391, 3941, 2]);