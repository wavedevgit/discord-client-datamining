// modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerificationMethod;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.padding = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87276: for (var _fun87276_ip = 0;;) switch (_fun87276_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87276_ip = 219;
                            continue _fun87276
                        }
                    case 10: // try_start_0
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.testAgeVerification;
                        var1 = _closure1_slot6;
                        var1 = var1.MODULAR;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun87276_ip = 159;
                            continue _fun87276
                        }
                    case 66:
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 10;
                        var2 = var8[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.showAgeVerification;
                        var2 = {};
                        var6 = var1.verification_webview_url;
                        var2.webviewUrl = var6;
                        var6 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {
                                'content': '[On Complete] Successfully age verified',
                                'key': 'age-verification-test-success'
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var2.onComplete = var6;
                        var6 = _closure1_slot0;
                        var5 = 11;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.AgeVerificationModalEntryPoint;
                        var5 = var5.DEV_TOOLS_QUICK_ACTIONS;
                        var2.entryPoint = var5;
                        var2 = var3.bind(var4)(var2);
                    case 157: // try_end0
                        _fun87276_ip = 214;
                        continue _fun87276;
                    case 159:
                        return var1;
                    case 162: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.open;
                        var1 = {
                            'content': 'Failed to show age verification test modal',
                            'key': 'age-verification-test-failure'
                        };
                        var1 = var2.bind(var3)(var1);
                    case 214:
                        var1 = undefined;
                        return var1;
                    case 219:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var14 = _closure1_slot1;
        var13 = _closure1_slot2;
        var0 = 12;
        var0 = var13[var0];
        var0 = var14.bind(var3)(var0);
        var6 = var0.bind(var3)();
        var9 = _closure1_slot0;
        var0 = 13;
        var0 = var13[var0];
        var4 = var9.bind(var3)(var0);
        var2 = var4.useStateFromStoresObject;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var11
            var0 = {};
            var1 = _closure1_slot5;
            var2 = var1.personaForceFaeFail;
            var0.personaForceFaeFail = var2;
            var2 = var1.personaForceIdVerificationFail;
            var0.personaForceIdVerificationFail = var2;
            var1 = var1.personaDisableModularPilotTestTemplate;
            var0.personaDisableModularPilotTestTemplate = var1;
            return var0;
        };
        var0 = var2.bind(var4)(var1, var0);
        var16 = var0.personaForceFaeFail;
        var12 = var0.personaForceIdVerificationFail;
        var15 = var0.personaDisableModularPilotTestTemplate;
        var2 = _closure1_slot8;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var7.container;
        var0.style = var4;
        var5 = var7.content;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var7 = var7.content;
        var7 = var7.padding;
        var6 = var6.bottom;
        var6 = var7 + var6;
        var5.paddingBottom = var6;
        var4[1] = var5;
        var0.contentContainerStyle = var4;
        var5 = 14;
        var4 = var13[var5];
        var4 = var9.bind(var3)(var4);
        var6 = var4.TableRowGroup;
        var4 = {};
        var7 = 'Quick Actions';
        var4.title = var7;
        var10 = _closure1_slot7;
        var8 = 15;
        var7 = var13[var8];
        var7 = var9.bind(var3)(var7);
        var17 = var7.TableRow;
        var7 = {};
        var19 = 'Launch Age Verification Test Tool';
        var7.label = var19;
        var18 = _closure1_slot10;
        var7.onPress = var18;
        var19 = 16;
        var18 = var13[var19];
        var18 = var9.bind(var3)(var18);
        var20 = var18.KeyIcon;
        var18 = {};
        var18 = var10.bind(var3)(var20, var18);
        var7.icon = var18;
        var18 = 17;
        var20 = var13[var18];
        var20 = var9.bind(var3)(var20);
        var21 = var20.TableRowArrow;
        var20 = {};
        var20 = var10.bind(var3)(var21, var20);
        var7.trailing = var20;
        var17 = var10.bind(var3)(var17, var7);
        var7 = new Array(2);
        var7[0] = var17;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var17 = var8.TableRow;
        var8 = {};
        var20 = 'Launch Age Verification Modal';
        var8.label = var20;
        var20 = function() {
            var1 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 10;
            var0 = var6[var0];
            var5 = undefined;
            var2 = var1.bind(var5)(var0);
            var1 = var2.showAgeVerificationGetStartedModal;
            var0 = {};
            var4 = _closure1_slot0;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.AgeVerificationModalEntryPoint;
            var3 = var3.DEV_TOOLS_QUICK_ACTIONS;
            var0.entryPoint = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8.onPress = var20;
        var19 = var13[var19];
        var19 = var9.bind(var3)(var19);
        var20 = var19.KeyIcon;
        var19 = {};
        var19 = var10.bind(var3)(var20, var19);
        var8.icon = var19;
        var18 = var13[var18];
        var18 = var9.bind(var3)(var18);
        var19 = var18.TableRowArrow;
        var18 = {};
        var18 = var10.bind(var3)(var19, var18);
        var8.trailing = var18;
        var8 = var10.bind(var3)(var17, var8);
        var7[1] = var8;
        var4.children = var7;
        var6 = var2.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var6 = 18;
        var6 = var13[var6];
        var7 = var14.bind(var3)(var6);
        var6 = {};
        var8 = 7;
        var8 = var13[var8];
        var8 = var14.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var6.size = var8;
        var6 = var10.bind(var3)(var7, var6);
        var4[1] = var6;
        var5 = var13[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRowGroup;
        var5 = {
            'title': 'Persona Configurations',
            'description': 'Note: this only works for generated test users'
        };
        var8 = 19;
        var7 = var13[var8];
        var7 = var9.bind(var3)(var7);
        var14 = var7.TableSwitchRow;
        var7 = {
            'label': 'Disable Modular Pilot Test Template',
            'subLabel': 'Use actual pilot template (skips age override screen) for Persona age verification testing'
        };
        var7.value = var15;
        var15 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setDeveloperOptionSettings;
            var0 = {};
            var3 = arg0;
            var0.personaDisableModularPilotTestTemplate = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7.onValueChange = var15;
        var14 = var10.bind(var3)(var14, var7);
        var7 = new Array(3);
        var7[0] = var14;
        var14 = var13[var8];
        var14 = var9.bind(var3)(var14);
        var15 = var14.TableSwitchRow;
        var14 = {
            'label': 'Force FAE to Fail',
            'subLabel': 'Force Facial Age Estimation to fail for Persona age verification testing'
        };
        var14.value = var16;
        var16 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setDeveloperOptionSettings;
            var0 = {};
            var3 = arg0;
            var0.personaForceFaeFail = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var14.onValueChange = var16;
        var14 = var10.bind(var3)(var15, var14);
        var7[1] = var14;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableSwitchRow;
        var8 = {
            'label': 'Force ID Verification to Fail',
            'subLabel': 'Force ID verification to fail for Persona age verification testing'
        };
        var8.value = var12;
        var11 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.setDeveloperOptionSettings;
            var0 = {};
            var3 = arg0;
            var0.personaForceIdVerificationFail = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8.onValueChange = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 803, 5937, 33, 1297, 671, 11299, 3148, 5936, 4555, 1568, 566, 5367, 4900, 7566, 4908, 9300, 5420, 805, 2]);