// modules/parent_tools/native/FamilyCenterSettingsControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FamilyCenterSubPages;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterSettingsControls.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: FamilyCenterSettingsControls, environment: var1
        _fun81895: for (var _fun81895_ip = 0;;) switch (_fun81895_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var14 = 4;
                var0 = var2[var14];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var0 = var4.useUserIsTeen;
                var4 = var0.bind(var4)();
                var0 = 5;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useActiveLinkUserIds;
                var17 = var0.bind(var5)();
                var _closure2_slot0 = var17;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var1 = var17.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun81895_ip = 1023;
                    continue _fun81895
                }
            case 103:
                var0 = function(arg0) { // Original name: handleSettingsClick, environment: var12
                    var3 = _closure2_slot1;
                    var2 = var3.navigate;
                    var0 = _closure1_slot5;
                    var1 = var0.FAMILY_CENTER_PARENTAL_CONTROLS;
                    var0 = {};
                    var4 = arg0;
                    var0.selectedSubPage = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot2 = var0;
                var0 = function() { // Original name: handleOpenSettings, environment: var12
                    var2 = _closure2_slot1;
                    var1 = var2.navigate;
                    var0 = _closure1_slot5;
                    var0 = var0.CONTENT_AND_SOCIAL;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot3 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = _closure1_slot7;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 7;
                var5 = var5[var8];
                var5 = var7.bind(var3)(var5);
                var5 = var5.Stack;
                var7 = {};
                var9 = {};
                if (var4) {
                    _fun81895_ip = 615;
                    continue _fun81895
                }
            case 175:
                var9.gap = var14;
                var7.style = var9;
                var20 = _closure1_slot6;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var10 = 8;
                var4 = var26[var10];
                var4 = var25.bind(var3)(var4);
                var11 = var4.Text;
                var4 = {};
                var15 = 'text-sm/semibold';
                var4.variant = var15;
                var22 = 9;
                var15 = var26[var22];
                var15 = var25.bind(var3)(var15);
                var21 = var15.intl;
                var18 = var21.string;
                var19 = _closure1_slot1;
                var15 = 10;
                var16 = var26[var15];
                var16 = var19.bind(var3)(var16);
                var16 = var16.ahKIJO;
                var16 = var18.bind(var21)(var16);
                var4.children = var16;
                var11 = var20.bind(var3)(var11, var4);
                var4 = new Array(3);
                var4[0] = var11;
                var10 = var26[var10];
                var10 = var25.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var16 = var26[var22];
                var16 = var25.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var15 = var26[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.Sv236e;
                var15 = var16.bind(var18)(var15);
                var10.children = var15;
                var10 = var20.bind(var3)(var11, var10);
                var4[1] = var10;
                var15 = _closure1_slot7;
                var10 = 14;
                var10 = var26[var10];
                var10 = var25.bind(var3)(var10);
                var11 = var10.TableRowGroup;
                var10 = {};
                var18 = 15;
                var16 = var26[var18];
                var16 = var25.bind(var3)(var16);
                var19 = var16.TableRow;
                var16 = {};
                var21 = var26[var22];
                var21 = var25.bind(var3)(var21);
                var24 = var21.intl;
                var23 = var24.string;
                var21 = var26[var22];
                var21 = var25.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["+o1pDZ"];
                var21 = var23.bind(var24)(var21);
                var16.label = var21;
                var21 = function() { // Original name: onPress, environment: var12
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot4;
                    var1 = var0.CONTENT_AND_SOCIAL;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var16.onPress = var21;
                var21 = true;
                var16.arrow = var21;
                var19 = var20.bind(var3)(var19, var16);
                var16 = new Array(2);
                var16[0] = var19;
                var18 = var26[var18];
                var18 = var25.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {};
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.OAuOHD;
                var22 = var23.bind(var24)(var22);
                var18.label = var22;
                var22 = function() { // Original name: onPress, environment: var12
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot4;
                    var1 = var0.DATA_AND_PRIVACY;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var18.onPress = var22;
                var18.arrow = var21;
                var18 = var20.bind(var3)(var19, var18);
                var16[1] = var18;
                var10.children = var16;
                var10 = var15.bind(var3)(var11, var10);
                var4[2] = var10;
                var7.children = var4;
                var4 = var7;
                _fun81895_ip = 1005;
                continue _fun81895;
            case 615:
                var10 = 16;
                var9.gap = var10;
                var7.style = var9;
                var10 = _closure1_slot7;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = var18[var8];
                var8 = var16.bind(var3)(var8);
                var9 = var8.Stack;
                var8 = {};
                var11 = {};
                var11.gap = var14;
                var8.style = var11;
                var11 = _closure1_slot6;
                var20 = 8;
                var14 = var18[var20];
                var14 = var16.bind(var3)(var14);
                var21 = var14.Text;
                var19 = {};
                var14 = 'text-sm/semibold';
                var19.variant = var14;
                var15 = 9;
                var14 = var18[var15];
                var14 = var16.bind(var3)(var14);
                var24 = var14.intl;
                var23 = var24.string;
                var14 = _closure1_slot1;
                var13 = 10;
                var22 = var18[var13];
                var22 = var14.bind(var3)(var22);
                var22 = var22.ahKIJO;
                var22 = var23.bind(var24)(var22);
                var19.children = var22;
                var21 = var11.bind(var3)(var21, var19);
                var19 = new Array(2);
                var19[0] = var21;
                var20 = var18[var20];
                var20 = var16.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var22 = var18[var15];
                var22 = var16.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.format;
                var22 = var18[var13];
                var22 = var14.bind(var3)(var22);
                var23 = var22.X9rW0j;
                var22 = {};
                var26 = function(arg0, arg1) { // Original name: openSettingsHook, environment: var12
                    var4 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-link'
                    };
                    var0 = _closure2_slot3;
                    var1.onPress = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var22.openSettingsHook = var26;
                var22 = var24.bind(var25)(var23, var22);
                var20.children = var22;
                var20 = var11.bind(var3)(var21, var20);
                var19[1] = var20;
                var8.children = var19;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 11;
                var9 = var18[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {
                    'text': null,
                    'onPress': null,
                    'shrink': true,
                    'grow': false,
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.w0JA3P;
                var13 = {};
                var17 = var17.length;
                var13.count = var17;
                var13 = var15.bind(var16)(var14, var13);
                var9.text = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.popLayer;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot1;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.recipientIds = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var7.children = var8;
                var4 = var7;
            case 1005:
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1023:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4551, 660, 33, 6466, 6467, 1469, 4033, 3895, 1234, 1849, 4037, 4604, 3899, 5320, 4854, 2]);