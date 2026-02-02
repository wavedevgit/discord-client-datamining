// modules/activate_device/native/UserCodeInput.tsx
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
    var9 = 0;
    var3 = var5[var9];
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
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OAuthConstants;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 'center';
    var8.textAlign = var10;
    var3.text = var8;
    var8 = {
        'marginTop': 16,
        'alignSelf': 'stretch',
        'backgroundColor': null,
        'padding': 12,
        'borderWidth': 1,
        'borderColor': 'transparent'
    };
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var10;
    var3.input = var8;
    var8 = {};
    var10 = 'flex-start';
    var8.alignSelf = var10;
    var3.errorText = var8;
    var8 = {};
    var8.flexGrow = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/native/UserCodeInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun96285: for (var _fun96285_ip = 0;;) switch (_fun96285_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onClose;
                var2 = var0.onUserCodeAccepted;
                var6 = var0.prefilledUserCode;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot10;
                var19 = var0.bind(var3)();
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var0 = null;
                var7 = var0 != var6;
                var0 = '';
                if (!var7) {
                    _fun96285_ip = 65;
                    continue _fun96285
                }
            case 62:
                var0 = var6;
            case 65:
                var5 = var1.bind(var5)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var5, var0);
                var0 = 0;
                var10 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot0 = var0;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 7;
                var0 = var17[var0];
                var1 = var16.bind(var3)(var0);
                var0 = var1.useUserCodeSubmit;
                var0 = var0.bind(var1)(var10, var2, var4);
                var12 = var0.manualSubmit;
                var14 = var0.error;
                var11 = var0.submitting;
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var5 = _closure1_slot5;
                var4 = {};
                var7 = _closure1_slot1;
                var6 = 8;
                var6 = var17[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.innerContent;
                var4.style = var6;
                var7 = _closure1_slot7;
                var15 = 9;
                var6 = var17[var15];
                var6 = var16.bind(var3)(var6);
                var18 = var6.Text;
                var6 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var19.text;
                var6.style = var13;
                var13 = 10;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var17[var13];
                var20 = var16.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.KYPNUv;
                var20 = var21.bind(var22)(var20);
                var6.children = var20;
                var18 = var7.bind(var3)(var18, var6);
                var6 = new Array(2);
                var6[0] = var18;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var19 = var19.text;
                var15.style = var19;
                var19 = var17[var13];
                var19 = var16.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var17[var13];
                var19 = var16.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.xRHk7f;
                var19 = var20.bind(var21)(var19);
                var15.children = var19;
                var15 = var7.bind(var3)(var18, var15);
                var6[1] = var15;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = 11;
                var5 = var17[var5];
                var5 = var16.bind(var3)(var5);
                var6 = var5.TextInput;
                var5 = {};
                var9 = function arg0() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onChange = var9;
                var9 = _closure1_slot6;
                var8 = var9.USER_CODE_LENGTH;
                var5.maxLength = var8;
                var5.value = var10;
                var8 = true;
                var5.autoFocus = var8;
                var15 = 'off';
                var5.autoComplete = var15;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var20 = var15.intl;
                var19 = var20.formatToPlainString;
                var15 = var17[var13];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var18 = var15["0tbz6x"];
                var15 = {};
                var21 = var9.USER_CODE_LENGTH;
                var15.number = var21;
                var15 = var19.bind(var20)(var18, var15);
                var5.placeholder = var15;
                var5.errorMessage = var14;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = 12;
                var5 = var17[var5];
                var5 = var16.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var14 = 'lg';
                var5.size = var14;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["3PatSz"];
                var13 = var14.bind(var15)(var13);
                var5.text = var13;
                var5.onPress = var12;
                var5.loading = var11;
                var10 = var10.length;
                var9 = var9.USER_CODE_LENGTH;
                var9 = var10 !== var9;
                var5.disabled = var9;
                var5.grow = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UserCodeInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 12502, 33, 1297, 671, 12503, 12504, 3902, 1234, 5365, 4045, 2]);