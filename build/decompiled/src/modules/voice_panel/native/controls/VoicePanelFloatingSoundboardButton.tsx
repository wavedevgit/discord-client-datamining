// modules/voice_panel/native/controls/VoicePanelFloatingSoundboardButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot4 = var8;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 4;
    var13 = var5[var12];
    var13 = var7.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var11.borderRadius = var13;
    var13 = 'hidden';
    var11.overflow = var13;
    var3.container = var11;
    var11 = {};
    var13 = 'row';
    var11.flexDirection = var13;
    var3.iconButton = var11;
    var11 = {};
    var12 = var5[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var11.marginStart = var12;
    var3.image = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.VoicePanelVisualEffectView;
    var3 = {};
    var3 = var8.bind(var0)(var9, var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.ChevronSmallUpIcon;
    var3 = {
        'color': 'white',
        'size': 'xs'
    };
    var3 = var8.bind(var0)(var9, var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun112132: for (var _fun112132_ip = 0;;) switch (_fun112132_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = _closure1_slot6;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot0;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.SoundboardButtonLocation;
                var0 = var0.FLOATING_BUTTON;
                var0 = var1.bind(var4)(var2, var0);
                var1 = var0.visible;
                var11 = var0.handlePress;
                var12 = var0.disabled;
                var6 = var0.showIndicator;
                var0 = null;
                if (!var1) {
                    _fun112132_ip = 366;
                    continue _fun112132
                }
            case 103:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var16.container;
                var1.style = var5;
                var8 = _closure1_slot7;
                var5 = new Array(3);
                var5[0] = var8;
                var10 = _closure1_slot4;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 9;
                var8 = var17[var8];
                var8 = var15.bind(var4)(var8);
                var9 = var8.IconButton;
                var8 = {};
                var13 = 10;
                var14 = var17[var13];
                var14 = var15.bind(var4)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var13 = var17[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["6EJvHt"];
                var13 = var14.bind(var18)(var13);
                var8.accessibilityLabel = var13;
                var8.disabled = var12;
                var12 = {};
                var13 = var16.iconButton;
                var12.style = var13;
                var14 = _closure1_slot8;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 11;
                var14 = var17[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.SoundboardIcon;
                var14 = {
                    'style': null,
                    'color': 'white',
                    'size': 'xs'
                };
                var16 = var16.image;
                var14.style = var16;
                var14 = var10.bind(var4)(var15, var14);
                var13[1] = var14;
                var12.children = var13;
                var12 = var3.bind(var4)(var2, var12);
                var8.icon = var12;
                var8.onPress = var11;
                var11 = 'secondary-overlay';
                var8.variant = var11;
                var11 = 'sm';
                var8.size = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5[1] = var8;
                if (!var6) {
                    _fun112132_ip = 352;
                    continue _fun112132
                }
            case 348:
                var6 = _closure1_slot9;
            case 352:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 366:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/VoicePanelFloatingSoundboardButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 14400, 11376, 14363, 14330, 7585, 1234, 8594, 2]);