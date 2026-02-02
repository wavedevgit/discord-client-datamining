// modules/guild_role_subscriptions/native/components/WarningNotice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 12
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.horizontalContainer = var8;
    var8 = {
        'flex': 1,
        'marginStart': 10,
        'textAlignVertical': 'center'
    };
    var3.message = var8;
    var8 = {
        'width': '100%',
        'marginTop': 24,
        'alignSelf': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_ACTIVE;
    var8.backgroundColor = var11;
    var3.actionButton = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.color = var11;
    var3.actionButtonText = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_WARNING;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_WARNING;
    var8.borderColor = var11;
    var3.containerYellow = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_FEEDBACK_WARNING;
    var8.color = var9;
    var3.textYellow = var8;
    var8 = {
        'alignSelf': 'flex-start',
        'width': 20,
        'height': 20
    };
    var3.alertIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/WarningNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116362: for (var _fun116362_ip = 0;;) switch (_fun116362_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var15 = var0.notice;
                var9 = var0.ctaLabel;
                var12 = var0.onClick;
                var10 = var0.submitting;
                var11 = var0.disabled;
                var0 = _closure1_slot6;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var13.container;
                var4[1] = var5;
                var5 = var13.containerYellow;
                var4[2] = var5;
                var0.style = var4;
                var4 = {};
                var5 = var13.horizontalContainer;
                var4.style = var5;
                var14 = _closure1_slot4;
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 5;
                var5 = var16[var5];
                var7 = var17.bind(var3)(var5);
                var5 = {};
                var8 = var13.alertIcon;
                var5.style = var8;
                var8 = 6;
                var8 = var16[var8];
                var8 = var17.bind(var3)(var8);
                var5.source = var8;
                var7 = var14.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot0;
                var7 = 7;
                var7 = var16[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-active'
                };
                var17 = var13.message;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = var13.textYellow;
                var16[1] = var17;
                var7.style = var16;
                var7.children = var15;
                var7 = var14.bind(var3)(var8, var7);
                var5[1] = var7;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = null;
                var5 = var7 != var12;
                if (!var5) {
                    _fun116362_ip = 278;
                    continue _fun116362
                }
            case 274:
                var5 = var7 != var9;
            case 278:
                if (!var5) {
                    _fun116362_ip = 351;
                    continue _fun116362
                }
            case 281:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 8;
                var6 = var14[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var14 = var13.actionButtonText;
                var6.textStyle = var14;
                var13 = var13.actionButton;
                var6.style = var13;
                var6.onPress = var12;
                var6.disabled = var11;
                var6.loading = var10;
                var6.text = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 351:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4669, 7421, 3902, 4838, 2]);