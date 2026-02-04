// modules/masked_link/components/native/MaskedLinkModal.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 250;
    var8.maxHeight = var9;
    var3.linkCalloutContainer = var8;
    var8 = {};
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.emphasis = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/masked_link/components/native/MaskedLinkModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92841: for (var _fun92841_ip = 0;;) switch (_fun92841_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.url;
                var7 = var0.trustUrl;
                var13 = var0.isProtocol;
                var6 = var0.onConfirm;
                var5 = var0.onCancel;
                var0 = _closure1_slot6;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var2 = var10.bind(var3)(var0);
                var1 = var2.useModalState;
                var0 = {};
                var0.url = var8;
                var0.trustUrl = var7;
                var0.onConfirm = var6;
                var0.onCancel = var5;
                var0 = var1.bind(var2)(var0);
                var21 = var0.protocol;
                var28 = var0.authorityPrefix;
                var18 = var0.hostname;
                var31 = var0.theRestOfTheUrl;
                var17 = var0.shouldTrustUrl;
                var _closure2_slot0 = var17;
                var1 = var0.setShouldTrustUrl;
                var _closure2_slot1 = var1;
                var7 = var0.handleConfirm;
                var8 = var0.handleCancel;
                var2 = _closure1_slot4;
                var9 = 5;
                var0 = var4[var9];
                var0 = var10.bind(var3)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var19 = 6;
                var5 = var4[var19];
                var5 = var10.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var19];
                var4 = var10.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["3w1QGl"];
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = var5[var19];
                var4 = var6.bind(var3)(var4);
                var11 = var4.intl;
                if (var13) {
                    _fun92841_ip = 291;
                    continue _fun92841
                }
            case 257:
                var10 = var11.string;
                var4 = var5[var19];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.soRxRe;
                var4 = var10.bind(var11)(var4);
                _fun92841_ip = 326;
                continue _fun92841;
            case 291:
                var10 = var11.format;
                var5 = var5[var19];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.aCYv1z;
                var5 = {};
                var4 = var10.bind(var11)(var6, var5);
            case 326:
                var0.content = var4;
                var6 = _closure1_slot5;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 7;
                var4 = var10[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.AlertActions;
                var4 = {};
                var15 = _closure1_slot4;
                var10 = var10[var9];
                var10 = var11.bind(var3)(var10);
                var11 = var10.AlertActionButton;
                var10 = {};
                var20 = 'primary';
                var10.variant = var20;
                var10.onPress = var7;
                var20 = _closure1_slot0;
                var7 = _closure1_slot1;
                var22 = var7[var19];
                var22 = var20.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var7 = var7[var19];
                var7 = var20.bind(var3)(var7);
                var20 = var7.t;
                if (var13) {
                    _fun92841_ip = 454;
                    continue _fun92841
                }
            case 439:
                var7 = var20.NcJfJG;
                var7 = var22.bind(var23)(var7);
                _fun92841_ip = 467;
                continue _fun92841;
            case 454:
                var20 = var20.COq6kk;
                var7 = var22.bind(var23)(var20);
            case 467:
                var10.text = var7;
                var7 = 'confirm';
                var10 = var15.bind(var3)(var11, var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var20 = _closure1_slot4;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var9 = var10[var9];
                var9 = var11.bind(var3)(var9);
                var15 = var9.AlertActionButton;
                var9 = {};
                var9.onPress = var8;
                var8 = 'secondary';
                var9.variant = var8;
                var8 = var10[var19];
                var8 = var11.bind(var3)(var8);
                var23 = var8.intl;
                var22 = var23.string;
                var8 = var10[var19];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["/g10LC"];
                var8 = var22.bind(var23)(var8);
                var9.text = var8;
                var8 = 'cancel';
                var8 = var20.bind(var3)(var15, var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.actions = var4;
                var6 = _closure1_slot5;
                var4 = 8;
                var4 = var10[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = 16;
                var4.spacing = var7;
                var9 = _closure1_slot2;
                var7 = {};
                var8 = var12.emphasis;
                var7.style = var8;
                var8 = 9;
                var15 = var10[var8];
                var15 = var11.bind(var3)(var15);
                var23 = var15.FormRow;
                var22 = {
                    'start': true,
                    'end': true
                };
                var25 = _closure1_slot3;
                var24 = {};
                var12 = var12.linkCalloutContainer;
                var24.style = var12;
                var15 = 10;
                var12 = var10[var15];
                var12 = var11.bind(var3)(var12);
                var27 = var12.Text;
                var26 = {};
                var32 = 'text-md/normal';
                var26.variant = var32;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var12 = var32;
                if (!var13) {
                    _fun92841_ip = 755;
                    continue _fun92841
                }
            case 751:
                var12 = 'text-md/semibold';
            case 755:
                var10.variant = var12;
                var30 = 'text-muted';
                var12 = var30;
                if (!var13) {
                    _fun92841_ip = 777;
                    continue _fun92841
                }
            case 771:
                var12 = 'text-default';
            case 777:
                var10.color = var12;
                var12 = new Array(2);
                var12[0] = var21;
                var12[1] = var28;
                var10.children = var12;
                var10 = var6.bind(var3)(var11, var10);
                var28 = new Array(3);
                var28[0] = var10;
                var12 = _closure1_slot4;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var29 = 'text-md/semibold';
                if (!var13) {
                    _fun92841_ip = 849;
                    continue _fun92841
                }
            case 846:
                var29 = var32;
            case 849:
                var10.variant = var29;
                var29 = 'text-default';
                if (!var13) {
                    _fun92841_ip = 865;
                    continue _fun92841
                }
            case 862:
                var29 = var30;
            case 865:
                var10.color = var29;
                var10.children = var18;
                var10 = var12.bind(var3)(var11, var10);
                var28[1] = var10;
                var10 = _closure1_slot4;
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var29 = var11[var15];
                var29 = var12.bind(var3)(var29);
                var30 = var29.Text;
                var29 = {
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var29.children = var31;
                var29 = var10.bind(var3)(var30, var29);
                var28[2] = var29;
                var26.children = var28;
                var26 = var6.bind(var3)(var27, var26);
                var24.children = var26;
                var24 = var20.bind(var3)(var25, var24);
                var22.label = var24;
                var22 = var20.bind(var3)(var23, var22);
                var7.children = var22;
                var9 = var20.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var8 = var11[var8];
                var8 = var12.bind(var3)(var8);
                var9 = var8.FormCheckboxRow;
                var8 = {
                    'start': true,
                    'end': true
                };
                var8.selected = var17;
                var16 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var16;
                var11 = var11[var15];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {};
                var15 = 'text-md/medium';
                var11.variant = var15;
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var16 = var14[var19];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var14[var19];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                if (var13) {
                    _fun92841_ip = 1117;
                    continue _fun92841
                }
            case 1094:
                var15 = var14.ZgXDsI;
                var13 = {};
                var13.domain = var18;
                var13 = var16.bind(var17)(var15, var13);
                _fun92841_ip = 1157;
                continue _fun92841;
            case 1117:
                var15 = var14["haA+Xw"];
                var14 = {};
                var20 = var21.replace;
                var19 = ':';
                var18 = '';
                var18 = var20.bind(var21)(var19, var18);
                var14.protocol = var18;
                var13 = var16.bind(var17)(var15, var14);
            case 1157:
                var11.children = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.label = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.extraContent = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 11366, 4027, 1234, 4027, 4080, 5378, 3941, 2]);