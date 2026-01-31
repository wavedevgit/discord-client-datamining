// modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MobileSetting;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var15 = var1.emojiName;
        var1 = _closure1_slot10;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var5 = _closure1_slot2;
        var6 = var5.useCallback;
        var2 = function() { // Environment: var0
            _fun57279: for (var _fun57279_ip = 0;;) switch (_fun57279_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun57279_ip = 54;
                        continue _fun57279
                    }
                case 44:
                    var2 = var4.isReady;
                    var1 = var2.bind(var4)();
                case 54:
                    if (!var1) {
                        _fun57279_ip = 112;
                        continue _fun57279
                    }
                case 57:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot5;
                    var1 = var1.TEXT;
                    var2.screen = var1;
                    var1 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.DOUBLE_TAP_EMOJI;
                    var1.initialSetting = var5;
                    var2.params = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                case 112:
                    return var0;
            }
        };
        var1 = new Array(0);
        var7 = var6.bind(var5)(var2, var1);
        var2 = var5.useCallback;
        var1 = function() { // Environment: var0
            _fun57280: for (var _fun57280_ip = 0;;) switch (_fun57280_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    var2 = var2 != var5;
                    if (!var2) {
                        _fun57280_ip = 54;
                        continue _fun57280
                    }
                case 44:
                    var3 = var5.isReady;
                    var2 = var3.bind(var5)();
                case 54:
                    if (!var2) {
                        _fun57280_ip = 125;
                        continue _fun57280
                    }
                case 57:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.PREMIUM;
                    var3.screen = var2;
                    var2 = 'settings';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 8;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.dismissAlert;
                    var1 = _closure1_slot4;
                    var1 = var2.bind(var3)(var1);
                case 125:
                    return var0;
            }
        };
        var0 = new Array(0);
        var12 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot7;
        var13 = _closure1_slot0;
        var14 = _closure1_slot1;
        var9 = 9;
        var0 = var14[var9];
        var0 = var13.bind(var3)(var0);
        var1 = var0.AlertModal;
        var0 = {};
        var6 = _closure1_slot3;
        var5 = {};
        var8 = var8.icon;
        var5.style = var8;
        var8 = 10;
        var8 = var14[var8];
        var8 = var13.bind(var3)(var8);
        var10 = var8.CircleErrorIcon;
        var8 = {};
        var11 = 'custom';
        var8.size = var11;
        var11 = {
            'width': 40,
            'height': 40
        };
        var8.style = var11;
        var8 = var2.bind(var3)(var10, var8);
        var5.children = var8;
        var5 = var2.bind(var3)(var6, var5);
        var0.header = var5;
        var8 = 11;
        var5 = var14[var8];
        var5 = var13.bind(var3)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var14[var8];
        var5 = var13.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.HRAWfC;
        var5 = var6.bind(var10)(var5);
        var0.title = var5;
        var5 = var14[var8];
        var5 = var13.bind(var3)(var5);
        var11 = var5.intl;
        var10 = var11.format;
        var5 = var14[var8];
        var5 = var13.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5["3u/Je4"];
        var5 = {};
        var5.emojiName = var15;
        var5.onRenewNitro = var12;
        var5 = var10.bind(var11)(var6, var5);
        var0.content = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot8;
        var4 = {};
        var10 = var14[var9];
        var10 = var13.bind(var3)(var10);
        var11 = var10.AlertActionButton;
        var10 = {};
        var10.onPress = var7;
        var7 = var14[var8];
        var7 = var13.bind(var3)(var7);
        var15 = var7.intl;
        var12 = var15.string;
        var7 = var14[var8];
        var7 = var13.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.LIIHRy;
        var7 = var12.bind(var15)(var7);
        var10.text = var7;
        var7 = 'confirm';
        var10 = var2.bind(var3)(var11, var10, var7);
        var7 = new Array(2);
        var7[0] = var10;
        var9 = var14[var9];
        var9 = var13.bind(var3)(var9);
        var10 = var9.AlertActionButton;
        var9 = {};
        var11 = 'secondary';
        var9.variant = var11;
        var11 = var14[var8];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var14[var8];
        var8 = var13.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["Nr6v2+"];
        var8 = var11.bind(var12)(var8);
        var9.text = var8;
        var8 = 'cancel';
        var8 = var2.bind(var3)(var10, var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.actions = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6962, 660, 6967, 33, 1297, 3879, 3988, 3986, 5353, 1234, 2]);