// modules/age_gate/native/components/AgeGateVerify.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': null,
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 3;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.padding = var9;
    var9 = 'center';
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.gap = var10;
    var3.container = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.header = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.body = var8;
    var8 = {
        'width': '100%',
        'flexGrow': 0
    };
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/components/AgeGateVerify.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AgeGateVerify, environment: var1
        _fun112978: for (var _fun112978_ip = 0;;) switch (_fun112978_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.source;
                var0 = _closure1_slot5;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var0 = var12[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useAgeGateVerifyContent;
                var0 = var0.bind(var1)(var2);
                var9 = var0.verifyAgreementButtonText;
                var11 = var0.verifyGateDescription;
                var15 = var0.verifyTitle;
                var2 = _closure1_slot4;
                var0 = 5;
                var0 = var12[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.top = var4;
                var4 = var10.container;
                var0.style = var4;
                var8 = _closure1_slot3;
                var4 = 6;
                var4 = var12[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.ShieldSpotIllustration;
                var4 = {};
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var5 = 7;
                var13 = var12[var5];
                var13 = var7.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var10.header;
                var13.style = var16;
                var13.children = var15;
                var13 = var8.bind(var3)(var14, var13);
                var4[1] = var13;
                var5 = var12[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-default'
                };
                var12 = var10.body;
                var5.style = var12;
                var5.children = var11;
                var5 = var8.bind(var3)(var7, var5);
                var4[2] = var5;
                var5 = null;
                var5 = var5 != var9;
                if (!var5) {
                    _fun112978_ip = 324;
                    continue _fun112978
                }
            case 265:
                var8 = _closure1_slot3;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 8;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var10.button;
                var6.style = var10;
                var6.text = var9;
                var9 = function() { // Original name: onPress, environment: var9
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 9;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 10;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.NSFW_AGE_GATE;
                    var1.entryPoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 324:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4508, 4690, 5920, 3895, 4829, 5890, 4512, 2]);