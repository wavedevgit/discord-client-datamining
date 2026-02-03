// modules/remote_auth/native/ExperimentalRemoteAuthLogin.tsx
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
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 16;
    var12 = 32;
    var9 = {
        'marginTop': 16,
        'marginBottom': 32
    };
    var6.mainImage = var9;
    var9 = {};
    var10 = 'center';
    var9.textAlign = var10;
    var6.header = var9;
    var9 = {
        'fontSize': 16,
        'lineHeight': 20,
        'color': null,
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var9.color = var13;
    var13 = 8;
    var6.warningCaption = var9;
    var9 = {
        'lineHeight': 20,
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var6.caption = var9;
    var9 = {};
    var9.flexGrow = var14;
    var6.button = var9;
    var9 = {};
    var9.marginBottom = var13;
    var6.loginButton = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9.borderRadius = var13;
    var9.marginBottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var10;
    var10 = 'none';
    var9.display = var10;
    var6.temporaryToggle = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/remote_auth/native/ExperimentalRemoteAuthLogin.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82245: for (var _fun82245_ip = 0;;) switch (_fun82245_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.handshakeToken;
                var _closure2_slot0 = var1;
                var0 = var0.setAuthStep;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot10;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var0 = var2.useState;
                var6 = false;
                var0 = var0.bind(var2)(var6);
                var5 = _closure1_slot3;
                var4 = 2;
                var0 = var5.bind(var3)(var0, var4);
                var1 = 0;
                var18 = var0[var1];
                var23 = 1;
                var17 = var0[var23];
                var0 = var2.useState;
                var0 = var0.bind(var2)(var6);
                var0 = var5.bind(var3)(var0, var4);
                var9 = var0[var1];
                var0 = var0[var23];
                var _closure2_slot2 = var0;
                var0 = var2.useState;
                var0 = var0.bind(var2)(var6);
                var0 = var5.bind(var3)(var0, var4);
                var14 = var0[var1];
                var0 = var0[var23];
                var _closure2_slot3 = var0;
                var6 = var2.useState;
                var0 = 2000;
                var0 = var6.bind(var2)(var0);
                var0 = var5.bind(var3)(var0, var4);
                var24 = var0[var1];
                var _closure2_slot4 = var24;
                var0 = var0[var23];
                var _closure2_slot5 = var0;
                var1 = var2.useEffect;
                var0 = function() { // Environment: var8
                    var1 = global;
                    var4 = var1.setInterval;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun82247: for (var _fun82247_ip = 0;;) switch (_fun82247_ip) {
                            case 0:
                                var2 = _closure2_slot4;
                                var1 = 0;
                                if (!(!(var2 > var1))) {
                                    _fun82247_ip = 48;
                                    continue _fun82247
                                }
                            case 13:
                                var2 = _closure2_slot2;
                                var3 = undefined;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                var1 = global;
                                var2 = var1.clearInterval;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                _fun82247_ip = 68;
                                continue _fun82247;
                            case 48:
                                var2 = _closure2_slot5;
                                var1 = undefined;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var0 = 1000;
                                    var0 = var1 - var0;
                                    return var0;
                                };
                                var0 = var2.bind(var1)(var0);
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 1000;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var4 = var6.bind(var3)(var0);
                var2 = var4.throttle;
                var1 = function() { // Environment: var8
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var5 = true;
                    var2 = var2.bind(var0)(var5);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.REMOTE_AUTH_FINISH;
                    var2.url = var6;
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.handshake_token = var7;
                    var7 = false;
                    var6.temporary_token = var7;
                    var2.body = var6;
                    var2.oldFormErrors = var5;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.RemoteAuthSteps;
                        var1 = var1.SUCCEEDED;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.RemoteAuthSteps;
                        var1 = var1.NOT_FOUND;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var22 = 1000;
                var0 = {
                    'leading': true,
                    'trailing': false
                };
                var15 = var2.bind(var4)(var1, var22, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var0 = {};
                var7 = _closure1_slot7;
                var12 = _closure1_slot5;
                var4 = {};
                var13 = 10;
                var13 = var5[var13];
                var13 = var6.bind(var3)(var13);
                var4.source = var13;
                var13 = var11.mainImage;
                var4.style = var13;
                var12 = var7.bind(var3)(var12, var4);
                var4 = new Array(6);
                var4[0] = var12;
                var25 = _closure1_slot0;
                var12 = 11;
                var13 = var5[var12];
                var13 = var25.bind(var3)(var13);
                var19 = var13.Text;
                var16 = {};
                var13 = var11.header;
                var16.style = var13;
                var13 = 'heading-xl/extrabold';
                var16.variant = var13;
                var13 = 12;
                var20 = var5[var13];
                var20 = var25.bind(var3)(var20);
                var26 = var20.intl;
                var21 = var26.string;
                var20 = var5[var13];
                var20 = var25.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.jD2pqF;
                var20 = var21.bind(var26)(var20);
                var16.children = var20;
                var16 = var7.bind(var3)(var19, var16);
                var4[1] = var16;
                var12 = var5[var12];
                var12 = var25.bind(var3)(var12);
                var16 = var12.Text;
                var12 = {};
                var19 = 'text-md/normal';
                var12.variant = var19;
                var19 = var11.warningCaption;
                var12.style = var19;
                var19 = var5[var13];
                var19 = var25.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var5[var13];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["hcd/kh"];
                var19 = var20.bind(var21)(var19);
                var12.children = var19;
                var12 = var7.bind(var3)(var16, var12);
                var4[2] = var12;
                var12 = 13;
                var12 = var5[var12];
                var12 = var25.bind(var3)(var12);
                var16 = var12.FormSwitchRow;
                var12 = {};
                var19 = var5[var13];
                var19 = var25.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var5[var13];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.UpAoQn;
                var19 = var20.bind(var21)(var19);
                var12.label = var19;
                var19 = var11.temporaryToggle;
                var12.DEPRECATED_style = var19;
                var12.value = var18;
                var12.onValueChange = var17;
                var12 = var7.bind(var3)(var16, var12);
                var4[3] = var12;
                var12 = 14;
                var5 = var5[var12];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var17 = var11.button;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = var11.loginButton;
                var16[1] = var17;
                var5.style = var16;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var16 = var17[var13];
                var16 = var20.bind(var3)(var16);
                var19 = var16.intl;
                if (var9) {
                    _fun82245_ip = 723;
                    continue _fun82245
                }
            case 673:
                var21 = var19.formatToPlainString;
                var16 = var17[var13];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var18 = var16.Sfu1tZ;
                var16 = {};
                var22 = var24 / var22;
                var22 = var22 + var23;
                var16.seconds = var22;
                var16 = var21.bind(var19)(var18, var16);
                _fun82245_ip = 753;
                continue _fun82245;
            case 723:
                var18 = var19.string;
                var17 = var17[var13];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.N3qV8e;
                var16 = var18.bind(var19)(var17);
            case 753:
                var5.text = var16;
                var5.onPress = var15;
                var9 = !var9;
                if (!var9) {
                    _fun82245_ip = 770;
                    continue _fun82245
                }
            case 767:
                var9 = !var14;
            case 770:
                var5.disabled = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var7 = _closure1_slot7;
                var14 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = var9[var12];
                var6 = var14.bind(var3)(var5);
                var5 = {};
                var12 = var9[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.Colors;
                var12 = var12.TRANSPARENT;
                var5.color = var12;
                var11 = var11.button;
                var5.style = var11;
                var12 = _closure1_slot0;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["ETE/oC"];
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var8 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var2 = var3[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.REMOTE_AUTH_CANCEL;
                    var2.url = var6;
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.handshake_token = var7;
                    var2.body = var6;
                    var6 = true;
                    var2.oldFormErrors = var6;
                    var2.rejectWithError = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 15;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 22, 507, 10486, 10491, 3932, 1234, 5373, 4868, 4557, 2]);