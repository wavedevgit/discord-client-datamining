// modules/voice_panel/native/controls/VoicePanelFloatingSoundboardButton.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var12 = 'hidden';
    var9.overflow = var12;
    var3.container = var9;
    var9 = {};
    var12 = 'row';
    var9.flexDirection = var12;
    var3.iconButton = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.marginStart = var10;
    var3.image = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun111517: for (var _fun111517_ip = 0;;) switch (_fun111517_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = _closure1_slot6;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
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
                    _fun111517_ip = 450;
                    continue _fun111517
                }
            case 103:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var16.container;
                var1.style = var5;
                var10 = _closure1_slot4;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 6;
                var5 = var17[var5];
                var5 = var15.bind(var4)(var5);
                var8 = var5.VoicePanelVisualEffectView;
                var5 = {};
                var8 = var10.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var8 = 7;
                var8 = var17[var8];
                var8 = var15.bind(var4)(var8);
                var9 = var8.IconButton;
                var8 = {};
                var13 = 8;
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
                var13 = 9;
                var13 = var17[var13];
                var13 = var15.bind(var4)(var13);
                var14 = var13.ChevronSmallUpIcon;
                var13 = {
                    'color': 'white',
                    'size': 'xs'
                };
                var14 = var10.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 10;
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
                    _fun111517_ip = 436;
                    continue _fun111517
                }
            case 404:
                var9 = _closure1_slot4;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 11;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var6 = var9.bind(var4)(var8, var7);
            case 436:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 450:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 14245, 14340, 7511, 1234, 11579, 11938, 14303, 2]);