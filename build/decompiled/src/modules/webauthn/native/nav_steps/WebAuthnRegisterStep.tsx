// modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AndroidPasskeyRadioGroup, environment: var1
        var0 = arg0;
        var8 = var0.authenticatorSelection;
        var1 = var0.onChange;
        var _closure2_slot0 = var1;
        var7 = var0.registering;
        var1 = _closure1_slot9;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var1 = {};
        var2 = _closure1_slot10;
        var2 = var2.PASSKEY_CREDENTIAL_MANAGER;
        var1.value = var2;
        var12 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 8;
        var4 = var6[var2];
        var4 = var12.bind(var3)(var4);
        var10 = var4.intl;
        var5 = var10.string;
        var4 = var6[var2];
        var4 = var12.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.JQbo8L;
        var4 = var5.bind(var10)(var4);
        var1.name = var4;
        var10 = new Array(3);
        var10[0] = var1;
        var1 = {};
        var4 = _closure1_slot10;
        var4 = var4.PASSKEY_DEVICE;
        var1.value = var4;
        var4 = var6[var2];
        var4 = var12.bind(var3)(var4);
        var13 = var4.intl;
        var5 = var13.string;
        var4 = var6[var2];
        var4 = var12.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.GjBNMg;
        var4 = var5.bind(var13)(var4);
        var1.name = var4;
        var10[1] = var1;
        var1 = {};
        var4 = _closure1_slot10;
        var4 = var4.OTHER_AND_ANDROID_NONDISCOVERABLE;
        var1.value = var4;
        var4 = var6[var2];
        var4 = var12.bind(var3)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var2 = var6[var2];
        var2 = var12.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2["OhC77+"];
        var2 = var4.bind(var5)(var2);
        var1.name = var2;
        var10[2] = var1;
        var2 = _closure1_slot7;
        var5 = _closure1_slot1;
        var4 = 9;
        var0 = var6[var4];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var11 = var11.radioItem;
        var0.style = var11;
        var0.options = var10;
        var9 = function(arg0) { // Original name: onChange, environment: var9
            var0 = arg0;
            var2 = var0.value;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0.onChange = var9;
        var0.value = var8;
        var0.disabled = var7;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.Sizes;
        var4 = var4.LARGE;
        var0.size = var4;
        var4 = true;
        var0.withSpacing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var6 = 2;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WebAuthnScreens;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var7 = var11.createStyles;
    var3 = {};
    var12 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'justifyContent': 'space-between',
        'marginLeft': 16,
        'marginRight': 16,
        'marginTop': 16
    };
    var3.flexContainer = var12;
    var12 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.centerFlex = var12;
    var12 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.margin = var12;
    var12 = {};
    var13 = 6;
    var14 = var5[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var12.backgroundColor = var14;
    var13 = var5[var13];
    var13 = var8.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var12.borderRadius = var13;
    var3.radioItem = var12;
    var3 = var7.bind(var11)(var3);
    var _closure1_slot9 = var3;
    var7 = {};
    var7.PASSKEY_CREDENTIAL_MANAGER = var10;
    var3 = 'PASSKEY_CREDENTIAL_MANAGER';
    var7[var10] = var3;
    var7.PASSKEY_DEVICE = var9;
    var3 = 'PASSKEY_DEVICE';
    var7[var9] = var3;
    var7.OTHER_AND_ANDROID_NONDISCOVERABLE = var6;
    var3 = 'OTHER_AND_ANDROID_NONDISCOVERABLE';
    var7[var6] = var3;
    var _closure1_slot10 = var7;
    var3 = {};
    var10 = var7.PASSKEY_CREDENTIAL_MANAGER;
    var6 = 7;
    var9 = var5[var6];
    var9 = var8.bind(var0)(var9);
    var9 = var9.registerPasskey;
    var3[var10] = var9;
    var10 = var7.PASSKEY_DEVICE;
    var9 = var5[var6];
    var9 = var8.bind(var0)(var9);
    var9 = var9.registerAndroidDevicePasskey;
    var3[var10] = var9;
    var7 = var7.OTHER_AND_ANDROID_NONDISCOVERABLE;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.registerSecurityKey;
    var3[var7] = var6;
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: WebAuthnRegisterStep, environment: var1
        _fun60685: for (var _fun60685_ip = 0;;) switch (_fun60685_ip) {
            case 0:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var0);
                var0 = var1.useNavigation;
                var1 = var0.bind(var1)();
                var _closure2_slot0 = var1;
                var0 = _closure1_slot9;
                var15 = var0.bind(var3)();
                var14 = _closure1_slot4;
                var2 = var14.useState;
                var0 = false;
                var0 = var2.bind(var14)(var0);
                var5 = _closure1_slot3;
                var9 = 2;
                var0 = var5.bind(var3)(var0, var9);
                var7 = 0;
                var12 = var0[var7];
                var6 = 1;
                var0 = var0[var6];
                var _closure2_slot1 = var0;
                var10 = var14.useState;
                var2 = '';
                var2 = var10.bind(var14)(var2);
                var2 = var5.bind(var3)(var2, var9);
                var16 = var2[var7];
                var5 = var2[var6];
                var _closure2_slot2 = var5;
                var2 = 11;
                var2 = var8[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isAndroid;
                var4 = var2.bind(var4)();
                var2 = _closure1_slot10;
                if (var4) {
                    _fun60685_ip = 164;
                    continue _fun60685
                }
            case 156:
                var8 = var2.OTHER_AND_ANDROID_NONDISCOVERABLE;
                _fun60685_ip = 170;
                continue _fun60685;
            case 164:
                var8 = var2.PASSKEY_CREDENTIAL_MANAGER;
            case 170:
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var8 = var2.bind(var4)(var8);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var8, var9);
                var10 = var2[var7];
                var _closure2_slot3 = var10;
                var9 = var2[var6];
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var11
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var0 = _closure1_slot6;
                    var1 = var0.NAME;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var6.bind(var4)(var1, var2);
                var _closure2_slot4 = var6;
                var7 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var11
                    var1 = _closure1_slot11;
                    var0 = _closure2_slot3;
                    var0 = var1[var0];
                    return var0;
                };
                var1 = var7.bind(var4)(var1, var2);
                var _closure2_slot5 = var1;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var11
                    var0 = {};
                    var2 = _closure2_slot4;
                    var0.onRegisterSuccess = var2;
                    var2 = _closure2_slot2;
                    var0.setError = var2;
                    var1 = _closure2_slot1;
                    var0.setRegistering = var1;
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var _closure2_slot6 = var0;
                var2 = _closure1_slot8;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var4 = var15.flexContainer;
                var0.style = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var15.centerFlex;
                var4.style = var6;
                var17 = _closure1_slot7;
                var6 = 13;
                var6 = var7[var6];
                var6 = var8.bind(var3)(var6);
                var14 = var6.KeyImage;
                var6 = {};
                var14 = var17.bind(var3)(var14, var6);
                var6 = new Array(3);
                var6[0] = var14;
                var14 = _closure1_slot7;
                var18 = 14;
                var7 = var7[var18];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var15 = var15.margin;
                var7.style = var15;
                var15 = 'text-md/normal';
                var7.variant = var15;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = 8;
                var20 = var15[var17];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var15 = var15[var17];
                var15 = var19.bind(var3)(var15);
                var19 = var15.t;
                if (var12) {
                    _fun60685_ip = 511;
                    continue _fun60685
                }
            case 496:
                var15 = var19.Lh5vTW;
                var15 = var20.bind(var21)(var15);
                _fun60685_ip = 524;
                continue _fun60685;
            case 511:
                var19 = var19.aVMiX3;
                var15 = var20.bind(var21)(var19);
            case 524:
                var7.children = var15;
                var7 = var14.bind(var3)(var8, var7);
                var6[1] = var7;
                var7 = null;
                var7 = var7 != var16;
                if (!var7) {
                    _fun60685_ip = 597;
                    continue _fun60685
                }
            case 547:
                var15 = _closure1_slot7;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var18];
                var8 = var14.bind(var3)(var8);
                var14 = var8.Text;
                var8 = {
                    'variant': 'text-md/normal',
                    'color': 'text-feedback-critical'
                };
                var8.children = var16;
                var7 = var15.bind(var3)(var14, var8);
            case 597:
                var6[2] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 7;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.shouldDisplayAndroidFidoSelector;
                if (!var5) {
                    _fun60685_ip = 679;
                    continue _fun60685
                }
            case 648:
                var8 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var6.authenticatorSelection = var10;
                var6.registering = var12;
                var6.onChange = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 679:
                var4[1] = var5;
                var7 = _closure1_slot7;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 15;
                var5 = var14[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.ButtonGroup;
                var5 = {};
                var10 = _closure1_slot7;
                var8 = 16;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = var13[var17];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var13[var17];
                var13 = var14.bind(var3)(var13);
                var14 = var13.t;
                if (var12) {
                    _fun60685_ip = 798;
                    continue _fun60685
                }
            case 783:
                var13 = var14.oibaQa;
                var13 = var15.bind(var16)(var13);
                _fun60685_ip = 809;
                continue _fun60685;
            case 798:
                var14 = var14.wePEBF;
                var13 = var15.bind(var16)(var14);
            case 809:
                var8.text = var13;
                var8.disabled = var12;
                var8.loading = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var11;
                var11 = 'lg';
                var8.size = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7454, 33, 1297, 671, 7453, 1234, 7102, 1469, 478, 4696, 7481, 3901, 6404, 4043, 2]);