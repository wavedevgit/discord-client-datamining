// modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.jsxs;
    var _closure1_slot9 = var6;
    var3 = var3.Fragment;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'textAlign': 'center'
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var12 = -var11;
    var11 = 7;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.NAV_BAR_HEIGHT;
    var11 = var12 - var11;
    var8.marginTop = var11;
    var3.content = var8;
    var8 = {
        'height': 135,
        'width': 216
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginBottom = var11;
    var3.headerImage = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginBottom = var11;
    var3.title = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginBottom = var11;
    var3.subtitle = var8;
    var8 = {
        'height': 48,
        'width': '100%'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.buttonContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.paddingBottom = var11;
    var11 = 'flex-end';
    var8.justifyContent = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.trailing = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.onNext;
        var _closure2_slot0 = var5;
        var17 = var1.loading;
        var15 = var1.error;
        var11 = var1.discoverabilityEnabled;
        var10 = var1.setDiscoverabilityEnabled;
        var1 = _closure1_slot11;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = _closure1_slot3;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun81547: for (var _fun81547_ip = 0;;) switch (_fun81547_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81547_ip = 83;
                            continue _fun81547
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.requestPermission;
                        var1 = _closure1_slot7;
                        var1 = var1.CONTACTS;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81547_ip = 80;
                            continue _fun81547
                        }
                    case 63:
                        if (!var1) {
                            _fun81547_ip = 77;
                            continue _fun81547
                        }
                    case 66:
                        var3 = _closure2_slot0;
                        var3 = var3.bind(var2)();
                    case 77:
                        return var2;
                    case 80:
                        return var1;
                    case 83:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = new Array(1);
        var0[0] = var5;
        var18 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot9;
        var1 = _closure1_slot10;
        var0 = {};
        var7 = _closure1_slot5;
        var4 = {};
        var5 = var8.content;
        var4.style = var5;
        var6 = _closure1_slot8;
        var14 = _closure1_slot6;
        var5 = {};
        var9 = 'contain';
        var5.resizeMode = var9;
        var9 = var8.headerImage;
        var5.style = var9;
        var9 = _closure1_slot1;
        var12 = _closure1_slot2;
        var16 = 9;
        var16 = var12[var16];
        var16 = var9.bind(var3)(var16);
        var5.source = var16;
        var14 = var6.bind(var3)(var14, var5);
        var5 = new Array(5);
        var5[0] = var14;
        var22 = _closure1_slot0;
        var13 = 10;
        var14 = var12[var13];
        var14 = var22.bind(var3)(var14);
        var16 = var14.Text;
        var14 = {};
        var19 = var8.title;
        var14.style = var19;
        var19 = 'heading-xl/bold';
        var14.variant = var19;
        var19 = 11;
        var20 = var12[var19];
        var20 = var22.bind(var3)(var20);
        var23 = var20.intl;
        var21 = var23.string;
        var20 = var12[var19];
        var20 = var22.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20["/G+nci"];
        var20 = var21.bind(var23)(var20);
        var14.children = var20;
        var14 = var6.bind(var3)(var16, var14);
        var5[1] = var14;
        var13 = var12[var13];
        var13 = var22.bind(var3)(var13);
        var14 = var13.Text;
        var13 = {};
        var16 = var8.subtitle;
        var13.style = var16;
        var16 = 'text-sm/medium';
        var13.variant = var16;
        var16 = var12[var19];
        var16 = var22.bind(var3)(var16);
        var21 = var16.intl;
        var20 = var21.string;
        var16 = var12[var19];
        var16 = var22.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.G8zcHt;
        var16 = var20.bind(var21)(var16);
        var13.children = var16;
        var13 = var6.bind(var3)(var14, var13);
        var5[2] = var13;
        var13 = {};
        var14 = var8.buttonContainer;
        var13.style = var14;
        var14 = 12;
        var14 = var12[var14];
        var14 = var22.bind(var3)(var14);
        var16 = var14.Button;
        var14 = {
            'variant': 'primary',
            'size': 'lg'
        };
        var20 = var12[var19];
        var20 = var22.bind(var3)(var20);
        var21 = var20.intl;
        var20 = var21.string;
        var19 = var12[var19];
        var19 = var22.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.LhlgY9;
        var19 = var20.bind(var21)(var19);
        var14.text = var19;
        var14.onPress = var18;
        var14.loading = var17;
        var14 = var6.bind(var3)(var16, var14);
        var13.children = var14;
        var13 = var6.bind(var3)(var7, var13);
        var5[3] = var13;
        var13 = 13;
        var13 = var12[var13];
        var14 = var9.bind(var3)(var13);
        var13 = {};
        var13.error = var15;
        var13 = var6.bind(var3)(var14, var13);
        var5[4] = var13;
        var4.children = var5;
        var5 = var2.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var8 = var8.trailing;
        var5.style = var8;
        var8 = 14;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.discoverabilityEnabled = var11;
        var8.onValueChanged = var10;
        var8 = var6.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 3975, 33, 1297, 671, 4668, 3976, 10366, 3902, 1234, 4045, 10231, 10359, 2]);