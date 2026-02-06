// modules/user_settings/native/account/UserSettingsAccountUnverifiedHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.open;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot7 = var0;
    var1 = function arg0() {
        _fun61097: for (var _fun61097_ip = 0;;) switch (_fun61097_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun61097_ip = 288;
                    continue _fun61097
                }
            case 17:
                var3 = var2.email;
                if (!(var1 != var3)) {
                    _fun61097_ip = 163;
                    continue _fun61097
                }
            case 30:
                var2 = var2.verified;
                var1 = null;
                if (var2) {
                    _fun61097_ip = 161;
                    continue _fun61097
                }
            case 41:
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var9 = var4.intl;
                var5 = var9.string;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["3sWbf3"];
                var4 = var5.bind(var9)(var4);
                var2.title = var4;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["13ofGu"];
                var3 = var4.bind(var5)(var3);
                var2.button = var3;
                var1 = var2;
            case 161:
                _fun61097_ip = 285;
                continue _fun61097;
            case 163:
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var9 = var4.intl;
                var5 = var9.string;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["/yqgqs"];
                var4 = var5.bind(var9)(var4);
                var2.title = var4;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.ydw5nX;
                var3 = var4.bind(var5)(var3);
                var2.button = var3;
                var1 = var2;
            case 285:
                var0 = var1;
            case 288:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'backgroundColor': null,
        'height': 36,
        'alignItems': 'center',
        'alignSelf': 'stretch',
        'flexDirection': 'row',
        'paddingHorizontal': 16
    };
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var9.backgroundColor = var12;
    var4.accountWarning = var9;
    var9 = {
        'flex': 1,
        'lineHeight': 16
    };
    var4.accountWarningText = var9;
    var9 = {
        'borderWidth': 1,
        'borderColor': null,
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.borderColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9.borderRadius = var10;
    var4.accountWarningButton = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/account/UserSettingsAccountUnverifiedHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun61098: for (var _fun61098_ip = 0;;) switch (_fun61098_ip) {
            case 0:
                var0 = _closure1_slot6;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var6)(var2, var0);
                var9 = var1.bind(var4)(var0);
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun61098_ip = 282;
                    continue _fun61098
                }
            case 84:
                var3 = _closure1_slot5;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var6 = var10.accountWarning;
                var1.style = var6;
                var6 = _closure1_slot7;
                var1.onPress = var6;
                var8 = _closure1_slot4;
                var6 = 9;
                var5 = var11[var6];
                var5 = var7.bind(var4)(var5);
                var12 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'always-white'
                };
                var13 = var10.accountWarningText;
                var5.style = var13;
                var13 = var9.title;
                var5.children = var13;
                var12 = var8.bind(var4)(var12, var5);
                var5 = new Array(2);
                var5[0] = var12;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'always-white'
                };
                var10 = var10.accountWarningButton;
                var6.style = var10;
                var9 = var9.button;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 282:
                return var0;
        }
    };
    var2.default = var3;
    var2.getBannerText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 1297, 671, 7490, 1234, 566, 4905, 3943, 2]);