// modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.ScrollView;
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
    var8 = {};
    var9 = '100%';
    var8.minHeight = var9;
    var3.scrollContainer = var8;
    var12 = 'center';
    var8 = {
        'flexGrow': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var8;
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var13 = var9.NAV_BAR_HEIGHT;
    var9 = 80;
    var9 = var9 + var13;
    var8.paddingTop = var9;
    var3.alertContainer = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'alignItems': 'center',
        'maxWidth': 290
    };
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_BACKGROUND_ACTIVE;
    var8.borderColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_HIGH;
    var16 = var8;
    var13 = copyDataProperties(var16, var15);
    var3.alert = var8;
    var8 = {
        'paddingVertical': 24,
        'paddingHorizontal': 24,
        'alignItems': 'center'
    };
    var3.alertContent = var8;
    var8 = {
        'paddingBottom': 8,
        'textAlign': 'center'
    };
    var3.alertTitle = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.paddingBottom = var13;
    var8.textAlign = var12;
    var3.alertSubtitle = var8;
    var8 = {};
    var12 = 'row';
    var8.flexDirection = var12;
    var3.buttonWrapper = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginBottom = var12;
    var3.primaryButtonContainer = var8;
    var8 = {};
    var8.flexGrow = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.padding = var9;
    var3.trailing = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: NewUserPermissionsOnboarding, environment: var1
        _fun81459: for (var _fun81459_ip = 0;;) switch (_fun81459_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.title;
                var19 = var0.subtitle;
                var13 = var0.header;
                var8 = var0.trailing;
                var22 = var0.loading;
                var16 = var0.showSkip;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun81459_ip = 45;
                    continue _fun81459
                }
            case 43:
                var16 = true;
            case 45:
                var24 = var0.onAllow;
                var23 = var0.onDontAllow;
                var0 = _closure1_slot6;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.scrollContainer;
                var0.contentContainerStyle = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot2;
                var4 = {};
                var10 = var9.container;
                var4.style = var10;
                var10 = {};
                var11 = var9.alertContainer;
                var10.style = var11;
                var11 = {};
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var14 = var9.alert;
                var13.style = var14;
                var14 = {};
                var15 = var9.alertContent;
                var14.style = var15;
                var18 = _closure1_slot0;
                var20 = _closure1_slot1;
                var17 = 6;
                var15 = var20[var17];
                var15 = var18.bind(var3)(var15);
                var21 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'heading-lg/bold',
                    'color': 'text-default'
                };
                var26 = var9.alertTitle;
                var15.style = var26;
                var15.children = var25;
                var21 = var7.bind(var3)(var21, var15);
                var15 = new Array(4);
                var15[0] = var21;
                var17 = var20[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = var9.alertSubtitle;
                var17.style = var20;
                var17.children = var19;
                var17 = var7.bind(var3)(var18, var17);
                var15[1] = var17;
                var17 = {};
                var19 = var9.buttonWrapper;
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var16;
                if (!var16) {
                    _fun81459_ip = 305;
                    continue _fun81459
                }
            case 299:
                var19 = var9.primaryButtonContainer;
            case 305:
                var18[1] = var19;
                var17.style = var18;
                var21 = _closure1_slot4;
                var29 = _closure1_slot0;
                var25 = _closure1_slot1;
                var20 = 7;
                var18 = var25[var20];
                var18 = var29.bind(var3)(var18);
                var19 = var18.Button;
                var18 = {
                    'variant': 'primary',
                    'size': 'md'
                };
                var28 = 8;
                var26 = var25[var28];
                var26 = var29.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var28];
                var25 = var29.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["2nYlT2"];
                var25 = var26.bind(var27)(var25);
                var18.text = var25;
                var18.onPress = var24;
                var18.loading = var22;
                var22 = true;
                var18.grow = var22;
                var18 = var21.bind(var3)(var19, var18);
                var17.children = var18;
                var17 = var7.bind(var3)(var6, var17);
                var15[2] = var17;
                if (!var16) {
                    _fun81459_ip = 578;
                    continue _fun81459
                }
            case 452:
                var19 = _closure1_slot4;
                var18 = _closure1_slot2;
                var17 = {};
                var21 = var9.buttonWrapper;
                var17.style = var21;
                var27 = _closure1_slot0;
                var24 = _closure1_slot1;
                var20 = var24[var20];
                var20 = var27.bind(var3)(var20);
                var21 = var20.Button;
                var20 = {};
                var25 = 'secondary';
                var20.variant = var25;
                var25 = var24[var28];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var28];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["5Wxrcd"];
                var24 = var25.bind(var26)(var24);
                var20.text = var24;
                var20.onPress = var23;
                var20.grow = var22;
                var20 = var19.bind(var3)(var21, var20);
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 578:
                var15[3] = var16;
                var14.children = var15;
                var14 = var2.bind(var3)(var6, var14);
                var13.children = var14;
                var13 = var7.bind(var3)(var6, var13);
                var12[1] = var13;
                var11.children = var12;
                var11 = var2.bind(var3)(var6, var11);
                var10.children = var11;
                var10 = var7.bind(var3)(var6, var10);
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot2;
                var5 = {};
                var9 = var9.trailing;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4659, 671, 3895, 4037, 1234, 2]);