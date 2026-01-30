// modules/user_settings/native/shared/InfoBox.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot4 = var4;
    var1 = var1.jsxs;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var9 = {
        'borderRadius': null,
        'padding': 8,
        'borderStyle': 'solid',
        'borderWidth': 1,
        'borderColor': null,
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var11 = 4;
    var4 = var6[var11];
    var4 = var12.bind(var0)(var4);
    var4 = var4.radii;
    var4 = var4.xs;
    var9.borderRadius = var4;
    var4 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_LINK;
    var9.borderColor = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_INFO;
    var9.backgroundColor = var13;
    var1.infoBox = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_FEEDBACK_WARNING;
    var9.borderColor = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_WARNING;
    var9.backgroundColor = var11;
    var1.infoBoxWarning = var9;
    var9 = {};
    var9.flex = var10;
    var1.infoText = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var7 = 'info';
    var1.INFO = var7;
    var7 = 'warning';
    var1.WARNING = var7;
    var _closure1_slot7 = var1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/shared/InfoBox.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: InfoBox, environment: var3
        _fun56635: for (var _fun56635_ip = 0;;) switch (_fun56635_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.children;
                var13 = var0.style;
                var5 = var0.look;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun56635_ip = 38;
                    continue _fun56635
                }
            case 25:
                var0 = _closure1_slot7;
                var5 = var0.INFO;
            case 38:
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)();
                var12 = {};
                var1 = _closure1_slot7;
                var4 = var1.INFO;
                var6 = var9.infoBox;
                var2 = new Array(1);
                var2[0] = var6;
                var12[var4] = var2;
                var4 = var1.WARNING;
                var6 = var9.infoBox;
                var2 = new Array(2);
                var2[0] = var6;
                var6 = var9.infoBoxWarning;
                var2[1] = var6;
                var12[var4] = var2;
                var4 = {};
                var11 = var1.INFO;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var16 = var2.CircleInformationIcon;
                var2 = {};
                var15 = _closure1_slot1;
                var14 = 4;
                var17 = var10[var14];
                var17 = var15.bind(var3)(var17);
                var17 = var17.colors;
                var17 = var17.TEXT_LINK;
                var2.color = var17;
                var2 = var7.bind(var3)(var16, var2);
                var4[var11] = var2;
                var2 = var1.WARNING;
                var1 = 6;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var11 = var1.CircleErrorIcon;
                var1 = {};
                var14 = var10[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.colors;
                var14 = var14.ICON_FEEDBACK_WARNING;
                var1.color = var14;
                var1 = var7.bind(var3)(var11, var1);
                var4[var2] = var1;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var11 = new Array(1);
                var11[0] = var13;
                var19 = var12[var5];
                var18 = 1;
                var20 = var11;
                var12 = arraySpread(var20, var19, var18);
                var0.style = var11;
                var5 = var4[var5];
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 7;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = var9.infoText;
                var5.style = var9;
                var9 = 'text-sm/semibold';
                var5.variant = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.InfoBoxLooks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3225, 5352, 3901, 2]);