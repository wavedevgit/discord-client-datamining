// modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var9 = 3;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.circle = var8;
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '100%'
    };
    var3.iconContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SoundboardButton, environment: var1
        _fun111619: for (var _fun111619_ip = 0;;) switch (_fun111619_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.props;
                var2 = var0.wrapperSpecs;
                var3 = _closure1_slot3;
                var1 = var3.useContext;
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 4;
                var0 = var8[var0];
                var4 = undefined;
                var0 = var10.bind(var4)(var0);
                var0 = var1.bind(var3)(var0);
                var3 = var0.channelId;
                var0 = _closure1_slot6;
                var9 = var0.bind(var4)();
                var7 = _closure1_slot0;
                var0 = 5;
                var0 = var8[var0];
                var1 = var7.bind(var4)(var0);
                var0 = var1.useVoicePanelButtonStyles;
                var0 = var0.bind(var1)(var2);
                var1 = var0.iconBg;
                var16 = var1.backgroundColor;
                var1 = 6;
                var2 = var8[var1];
                var2 = var10.bind(var4)(var2);
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.SoundboardButtonLocation;
                var1 = var1.VOICE_PANEL_CONTROLS;
                var1 = var2.bind(var4)(var3, var1);
                var10 = var1.handlePress;
                var8 = var1.disabled;
                var1 = var1.visible;
                if (var8) {
                    _fun111619_ip = 177;
                    continue _fun111619
                }
            case 164:
                var0 = var0.iconFill;
                var11 = var0.color;
                _fun111619_ip = 208;
                continue _fun111619;
            case 177:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.colors;
                var11 = var0.ICON_MUTED;
            case 208:
                var0 = null;
                if (!var1) {
                    _fun111619_ip = 444;
                    continue _fun111619
                }
            case 216:
                var3 = _closure1_slot5;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 7;
                var1 = var12[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var1.onPress = var10;
                var1.disabled = var8;
                var1.props = var6;
                var10 = _closure1_slot0;
                var6 = 8;
                var8 = var12[var6];
                var8 = var10.bind(var4)(var8);
                var13 = var8.intl;
                var8 = var13.string;
                var6 = var12[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["6EJvHt"];
                var6 = var8.bind(var13)(var6);
                var1.accessibilityLabel = var6;
                var8 = _closure1_slot4;
                var6 = 9;
                var5 = var12[var6];
                var13 = var7.bind(var4)(var5);
                var5 = {};
                var15 = var9.circle;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var15.backgroundColor = var16;
                var14[1] = var15;
                var5.style = var14;
                var13 = var8.bind(var4)(var13, var5);
                var5 = new Array(2);
                var5[0] = var13;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var9 = var9.iconContainer;
                var6.style = var9;
                var9 = 10;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.SoundboardIcon;
                var9 = {};
                var9.color = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 444:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 11770, 14302, 14202, 14303, 1234, 6419, 11889, 2]);