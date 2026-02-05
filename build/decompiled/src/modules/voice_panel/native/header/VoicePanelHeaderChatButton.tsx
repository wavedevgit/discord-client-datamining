// modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 4294967294,
        'right': 4294967294
    };
    var3.badgeContainer = var8;
    var8 = {
        'width': 8,
        'height': 8
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.badge = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var8.backgroundColor = var11;
    var3.redBG = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.backgroundColor = var9;
    var3.whiteBG = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/header/VoicePanelHeaderChatButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111231: for (var _fun111231_ip = 0;;) switch (_fun111231_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var0 = _closure1_slot7;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.dispatch;
                    var1 = _closure1_slot4;
                    var1 = var1.VOICE_PANEL_OPEN_CHAT_TAB;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var9 = var4.bind(var5)(var2, var0);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var7 = var0.bind(var3)(var1);
                var0 = 'mention';
                if (!(var0 !== var7)) {
                    _fun111231_ip = 90;
                    continue _fun111231
                }
            case 82:
                var12 = var11.whiteBG;
                _fun111231_ip = 96;
                continue _fun111231;
            case 90:
                var12 = var11.redBG;
            case 96:
                var2 = _closure1_slot6;
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 7;
                var0 = var17[var13];
                var1 = var18.bind(var3)(var0);
                var0 = {};
                var8 = _closure1_slot5;
                var4 = 8;
                var4 = var17[var4];
                var5 = var18.bind(var3)(var4);
                var4 = {};
                var16 = _closure1_slot0;
                var10 = 9;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var14 = var10.ChatIcon;
                var10 = {};
                var15 = 4;
                var15 = var17[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.WHITE;
                var10.color = var15;
                var15 = 'sm';
                var10.size = var15;
                var10 = var8.bind(var3)(var14, var10);
                var4.icon = var10;
                var10 = 10;
                var14 = var17[var10];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["5KxXrK"];
                var10 = var14.bind(var15)(var10);
                var4.accessibilityLabel = var10;
                var4.onPress = var9;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var7;
                if (!var5) {
                    _fun111231_ip = 369;
                    continue _fun111231
                }
            case 287:
                var8 = _closure1_slot5;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = var9[var13];
                var7 = var10.bind(var3)(var6);
                var6 = {};
                var14 = var11.badgeContainer;
                var6.style = var14;
                var9 = var9[var13];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var11.badge;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var9.style = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 369:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 1229, 14330, 6477, 14298, 4840, 1234, 2]);