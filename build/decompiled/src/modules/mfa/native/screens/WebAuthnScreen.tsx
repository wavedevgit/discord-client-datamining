// modules/mfa/native/screens/WebAuthnScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: AndroidAuthRadioGroup, environment: var3
        var0 = arg0;
        var5 = var0.authenticatorSelection;
        var1 = var0.setAuthenticator;
        var _closure2_slot0 = var1;
        var4 = var0.inProgress;
        var1 = _closure1_slot6;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var1 = {};
        var2 = _closure1_slot7;
        var2 = var2.ANDROID_PASSKEY;
        var1.value = var2;
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 6;
        var7 = var9[var2];
        var7 = var12.bind(var3)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var2];
        var7 = var12.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.PVVXRI;
        var7 = var10.bind(var11)(var7);
        var1.name = var7;
        var7 = new Array(2);
        var7[0] = var1;
        var1 = {};
        var10 = _closure1_slot7;
        var10 = var10.AUTHENTICATE;
        var1.value = var10;
        var10 = var9[var2];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var2 = var9[var2];
        var2 = var12.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.TKop3X;
        var2 = var10.bind(var11)(var2);
        var1.name = var2;
        var7[1] = var1;
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = 7;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var8 = var8.radioItem;
        var0.style = var8;
        var0.options = var7;
        var6 = function(arg0) { // Original name: onChange, environment: var6
            var0 = arg0;
            var2 = var0.value;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0.onChange = var6;
        var0.value = var5;
        var0.disabled = var4;
        var4 = true;
        var0.withSpacing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var9 = 0;
    var1 = var6[var9];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var4 = var6[var8];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.NativeModules;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var10 = var5.bind(var0)(var1);
    var4 = var10.createStyles;
    var1 = {};
    var11 = {};
    var12 = 5;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var14;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var11.borderRadius = var12;
    var1.radioItem = var11;
    var1 = var4.bind(var10)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.AUTHENTICATE = var9;
    var4 = 'AUTHENTICATE';
    var1[var9] = var4;
    var1.ANDROID_PASSKEY = var8;
    var4 = 'ANDROID_PASSKEY';
    var1[var8] = var4;
    var _closure1_slot7 = var1;
    var4 = {};
    var9 = var1.AUTHENTICATE;
    var8 = var7.DCDSecurityKeyManager;
    var8 = var8.authenticate;
    var4[var9] = var8;
    var8 = var1.ANDROID_PASSKEY;
    var7 = var7.DCDSecurityKeyManager;
    var7 = var7.authenticatePasskey;
    var4[var8] = var7;
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/WebAuthnScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: WebAuthnScreen, environment: var3
        _fun86246: for (var _fun86246_ip = 0;;) switch (_fun86246_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.mfaChallenge;
                var6 = var1.finish;
                var _closure2_slot0 = var6;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var9 = _closure1_slot4;
                var1 = var9.useState;
                var12 = false;
                var1 = var1.bind(var9)(var12);
                var4 = _closure1_slot3;
                var10 = 2;
                var1 = var4.bind(var3)(var1, var10);
                var8 = 0;
                var11 = var1[var8];
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var1 = var9.useState;
                var1 = var1.bind(var9)(var3);
                var1 = var4.bind(var3)(var1, var10);
                var4 = var1[var8];
                var1 = var1[var2];
                var _closure2_slot2 = var1;
                var5 = var9.useState;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 8;
                var1 = var15[var1];
                var13 = var13.bind(var3)(var1);
                var1 = var13.isAndroid;
                var1 = var1.bind(var13)();
                var13 = _closure1_slot7;
                if (var1) {
                    _fun86246_ip = 166;
                    continue _fun86246
                }
            case 158:
                var1 = var13.AUTHENTICATE;
                _fun86246_ip = 172;
                continue _fun86246;
            case 166:
                var1 = var13.ANDROID_PASSKEY;
            case 172:
                var1 = var5.bind(var9)(var1);
                var9 = _closure1_slot3;
                var1 = var9.bind(var3)(var1, var10);
                var16 = var1[var8];
                _closure2_slot3 = var16;
                var15 = var1[var2];
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var1 = var1.bind(var5)(var12);
                var1 = var9.bind(var3)(var1, var10);
                var12 = var1[var8];
                var1 = var1[var2];
                _closure2_slot4 = var1;
                var8 = var7.methods;
                var2 = var8.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = 'webauthn';
                    var0 = var0 === var1;
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                var8 = var1.challenge;
                _closure2_slot5 = var8;
                var9 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var16;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = _closure2_slot3;
                    var0 = var1[var0];
                    return var0;
                };
                var9 = var9.bind(var5)(var1, var2);
                _closure2_slot6 = var9;
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var0);
                    var4 = _closure2_slot1;
                    var3 = true;
                    var3 = var4.bind(var0)(var3);
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot5;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = 'webauthn';
                        var1.mfaType = var0;
                        var0 = arg0;
                        var1.data = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.catch;
                    var2 = function(arg0) { // Environment: var1
                        _fun86252: for (var _fun86252_ip = 0;;) switch (_fun86252_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 9;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.HTTPResponseError;
                                var3 = var2 instanceof var3;
                                if (var3) {
                                    _fun86252_ip = 94;
                                    continue _fun86252
                                }
                            case 41:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 10;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.captureWebAuthnException;
                                var3 = {};
                                var3 = var4.bind(var5)(var2, var3);
                                var3 = _closure2_slot2;
                                var2 = var2.message;
                                var2 = var3.bind(var0)(var2);
                                _fun86252_ip = 161;
                                continue _fun86252;
                            case 94:
                                var2 = _closure2_slot2;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 6;
                                var3 = var6[var1];
                                var3 = var5.bind(var0)(var3);
                                var4 = var3.intl;
                                var3 = var4.string;
                                var1 = var6[var1];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.t;
                                var1 = var1.xSCvBf;
                                var1 = var3.bind(var4)(var1);
                                var1 = var2.bind(var0)(var1);
                            case 161:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 11;
                var0 = var9[var0];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var13 = _closure1_slot0;
                var17 = 6;
                var5 = var9[var17];
                var5 = var13.bind(var3)(var5);
                var19 = var5.intl;
                var18 = var19.string;
                var5 = var9[var17];
                var5 = var13.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.saHocI;
                var5 = var18.bind(var19)(var5);
                var0.headerText = var5;
                var5 = var9[var17];
                var5 = var13.bind(var3)(var5);
                var19 = var5.intl;
                var18 = var19.string;
                var5 = var9[var17];
                var5 = var13.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.YpMrqM;
                var5 = var18.bind(var19)(var5);
                var0.subtitle = var5;
                var18 = _closure1_slot5;
                var5 = 12;
                var5 = var9[var5];
                var5 = var13.bind(var3)(var5);
                var13 = var5.KeyImage;
                var5 = {};
                var5 = var18.bind(var3)(var13, var5);
                var0.headerImage = var5;
                var5 = 13;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.shouldDisplayAndroidFidoSelector;
                if (!var5) {
                    _fun86246_ip = 559;
                    continue _fun86246
                }
            case 519:
                var13 = _closure1_slot5;
                var9 = _closure1_slot9;
                var8 = {};
                var8.authenticatorSelection = var16;
                var8.setAuthenticator = var15;
                var15 = var11;
                if (var11) {
                    _fun86246_ip = 548;
                    continue _fun86246
                }
            case 545:
                var15 = var12;
            case 548:
                var8.inProgress = var15;
                var5 = var13.bind(var3)(var9, var8);
            case 559:
                var0.content = var5;
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 14;
                var5 = var13[var5];
                var8 = var8.bind(var3)(var5);
                var5 = {};
                var15 = 'primary';
                var5.variant = var15;
                var16 = _closure1_slot0;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.Xr3Eks;
                var13 = var14.bind(var15)(var13);
                var5.text = var13;
                var13 = var11;
                if (var11) {
                    _fun86246_ip = 660;
                    continue _fun86246
                }
            case 657:
                var13 = var12;
            case 660:
                var5.loading = var13;
                if (var11) {
                    _fun86246_ip = 671;
                    continue _fun86246
                }
            case 668:
                var11 = var12;
            case 671:
                var5.disabled = var11;
                var5.onPress = var10;
                var5 = var9.bind(var3)(var8, var5);
                var0.submit = var5;
                var5 = {};
                var5.mfaChallenge = var7;
                var5.finish = var6;
                var0.screenProps = var5;
                var5 = 'webauthn';
                var0.mfaMethod = var5;
                var0.error = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.AuthenticatorOption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 1234, 7099, 478, 507, 7455, 11114, 7478, 7450, 11117, 2]);