// modules/pomelo/native/components/PomeloModalStepContainer.tsx
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
    var7 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
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
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'flexDirection': 'column'
    };
    var11 = 4;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var10;
    var6.container = var3;
    var3 = {
        'width': '100%',
        'flexDirection': 'column',
        'marginTop': 16,
        'marginBottom': 16
    };
    var6.actionContainer = var3;
    var3 = {
        'textAlign': 'center',
        'marginBottom': 12
    };
    var6.infoText = var3;
    var3 = {
        'paddingHorizontal': 16,
        'alignItems': 'center',
        'flexGrow': 1
    };
    var6.scrollContainer = var3;
    var10 = {};
    var3 = 8;
    var10.paddingTop = var3;
    var6.space8 = var10;
    var10 = {
        'shadowColor': null,
        'shadowOpacity': 1,
        'shadowOffset': null,
        'shadowRadius': 12,
        'elevation': 4
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var10.shadowColor = var11;
    var11 = {
        'height': 4294967272,
        'width': 0
    };
    var10.shadowOffset = var11;
    var6.shadow = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot7 = var6;
    var6 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun81292: for (var _fun81292_ip = 0;;) switch (_fun81292_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.action;
                var6 = var0.secondaryAction;
                var4 = var0.infoText;
                var7 = var0.absoluteBottom;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun81292_ip = 34;
                    continue _fun81292
                }
            case 32:
                var7 = false;
            case 34:
                var15 = var0.hasNavbar;
                if (!(var15 === var3)) {
                    _fun81292_ip = 46;
                    continue _fun81292
                }
            case 44:
                var15 = true;
            case 46:
                var8 = var0.fixActionButtonsToBottom;
                if (!(var8 === var3)) {
                    _fun81292_ip = 58;
                    continue _fun81292
                }
            case 56:
                var8 = false;
            case 58:
                var13 = var0.children;
                var0 = _closure1_slot7;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var9 = var0.insets;
                var5 = null;
                var0 = var5 != var4;
                var16 = null;
                if (!var0) {
                    _fun81292_ip = 180;
                    continue _fun81292
                }
            case 115:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 6;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var14 = var11.infoText;
                var0.style = var14;
                var0.children = var4;
                var16 = var2.bind(var3)(var1, var0);
            case 180:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var14 = var11.actionContainer;
                var4 = new Array(3);
                var4[0] = var14;
                var17 = {};
                var18 = 0;
                if (!var8) {
                    _fun81292_ip = 214;
                    continue _fun81292
                }
            case 211:
                var18 = 16;
            case 214:
                var17.paddingHorizontal = var18;
                var4[1] = var17;
                var17 = null;
                if (!var8) {
                    _fun81292_ip = 233;
                    continue _fun81292
                }
            case 227:
                var17 = var11.shadow;
            case 233:
                var4[2] = var17;
                var0.style = var4;
                var4 = new Array(4);
                var4[0] = var16;
                var4[1] = var10;
                var10 = var5 != var6;
                if (!var10) {
                    _fun81292_ip = 286;
                    continue _fun81292
                }
            case 260:
                var18 = _closure1_slot5;
                var17 = _closure1_slot3;
                var16 = {};
                var19 = var11.space8;
                var16.style = var19;
                var10 = var18.bind(var3)(var17, var16);
            case 286:
                var4[2] = var10;
                var4[3] = var6;
                var0.children = var4;
                var6 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = {};
                var20 = var11.container;
                var21 = var4;
                var10 = copyDataProperties(var21, var20);
                var10 = var9.top;
                var14 = 0;
                if (!var15) {
                    _fun81292_ip = 364;
                    continue _fun81292
                }
            case 338:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 7;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var14 = var15.NAV_BAR_HEIGHT;
            case 364:
                var14 = var10 + var14;
                var10 = 'paddingTop';
                var4[var10] = var14;
                var10 = var9.bottom;
                var9 = 'paddingBottom';
                var4[var9] = var10;
                var0.style = var4;
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                var4 = {
                    'contentContainerStyle': null,
                    'showsVerticalScrollIndicator': false,
                    'keyboardShouldPersistTaps': 'handled'
                };
                var11 = var11.scrollContainer;
                var4.contentContainerStyle = var11;
                var11 = arg1;
                var4.ref = var11;
                var11 = new Array(3);
                var11[0] = var13;
                if (!var7) {
                    _fun81292_ip = 476;
                    continue _fun81292
                }
            case 447:
                var14 = _closure1_slot5;
                var13 = _closure1_slot3;
                var12 = {};
                var15 = {};
                var16 = 1;
                var15.flex = var16;
                var12.style = var15;
                var7 = var14.bind(var3)(var13, var12);
            case 476:
                var11[1] = var7;
                var7 = true;
                var12 = null;
                if (!(var7 !== var8)) {
                    _fun81292_ip = 491;
                    continue _fun81292
                }
            case 488:
                var12 = var6;
            case 491:
                var11[2] = var12;
                var4.children = var11;
                var9 = var10.bind(var3)(var9, var4);
                var4 = new Array(2);
                var4[0] = var9;
                var5 = null;
                if (!(var7 === var8)) {
                    _fun81292_ip = 522;
                    continue _fun81292
                }
            case 519:
                var5 = var6;
            case 522:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloModalStepContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4893, 3941, 4703, 2]);