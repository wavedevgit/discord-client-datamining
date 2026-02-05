// modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
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
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var9 = 6;
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
    var8 = {
        'width': 24,
        'height': 24
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111714: for (var _fun111714_ip = 0;;) switch (_fun111714_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.props;
                var11 = var0.wrapperSpecs;
                var9 = _closure1_slot3;
                var2 = var9.useContext;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var3 = undefined;
                var0 = var6.bind(var3)(var0);
                var0 = var2.bind(var9)(var0);
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot9;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = 8;
                var0 = var7[var0];
                var5 = var2.bind(var3)(var0);
                var0 = var5.useVoicePanelButtonStyles;
                var5 = var0.bind(var5)(var11);
                var0 = 9;
                var0 = var7[var0];
                var12 = var2.bind(var3)(var0);
                var11 = var12.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var0);
                var0 = 10;
                var0 = var7[var0];
                var12 = var6.bind(var3)(var0);
                var0 = null;
                var11 = var0 != var2;
                var0 = 'null channel in VoicePanelScreenshareButton';
                var0 = var12.bind(var3)(var11, var0);
                var0 = 11;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var2 = var0.bind(var3)(var2);
                var6 = var2.isActive;
                var _closure2_slot1 = var6;
                var0 = var2.isFeatureEnabled;
                var _closure2_slot2 = var0;
                var12 = var2.onPress;
                var _closure2_slot3 = var12;
                var11 = var2.imgSource;
                var7 = var9.useCallback;
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var0;
                var2[2] = var12;
                var1 = function() { // Environment: var1
                    _fun111716: for (var _fun111716_ip = 0;;) switch (_fun111716_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun111716_ip = 112;
                                continue _fun111716
                            }
                        case 10:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 12;
                            var3 = var4[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var3);
                            var6 = var7.track;
                            var3 = _closure1_slot6;
                            var5 = var3.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED;
                            var3 = {};
                            var8 = 'connected button';
                            var3.source = var8;
                            var8 = _closure2_slot1;
                            var3.was_active = var8;
                            var3 = var6.bind(var7)(var5, var3);
                            var3 = _closure1_slot0;
                            var2 = 11;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.handleOnPressWithOnboard;
                            var0 = _closure2_slot3;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var7.bind(var9)(var1, var2);
                var7 = !var0;
                if (var7) {
                    _fun111714_ip = 277;
                    continue _fun111714
                }
            case 264:
                var0 = var5.iconFill;
                var12 = var0.color;
                _fun111714_ip = 288;
                continue _fun111714;
            case 277:
                var0 = var5.iconFillMuted;
                var12 = var0.color;
            case 288:
                if (var6) {
                    _fun111714_ip = 304;
                    continue _fun111714
                }
            case 291:
                var0 = var5.iconBg;
                var16 = var0.backgroundColor;
                _fun111714_ip = 315;
                continue _fun111714;
            case 304:
                var0 = var5.iconBgSelected;
                var16 = var0.backgroundColor;
            case 315:
                if (!var6) {
                    _fun111714_ip = 329;
                    continue _fun111714
                }
            case 318:
                var0 = var5.iconFillSelected;
                var12 = var0.color;
            case 329:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 13;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var9;
                var0.disabled = var7;
                var0.props = var4;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 14;
                var9 = var14[var4];
                var9 = var7.bind(var3)(var9);
                var13 = var9.intl;
                var9 = var13.string;
                var4 = var14[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.t;
                if (var6) {
                    _fun111714_ip = 427;
                    continue _fun111714
                }
            case 414:
                var4 = var7.fjBNo1;
                var4 = var9.bind(var13)(var4);
                _fun111714_ip = 438;
                continue _fun111714;
            case 427:
                var7 = var7.CpkXwZ;
                var4 = var9.bind(var13)(var7);
            case 438:
                var0.accessibilityLabel = var4;
                var4 = undefined;
                if (!var6) {
                    _fun111714_ip = 453;
                    continue _fun111714
                }
            case 447:
                var4 = var5.iconBgSelected;
            case 453:
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 15;
                var4 = var9[var5];
                var13 = var6.bind(var3)(var4);
                var4 = {};
                var15 = var10.circle;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var15.backgroundColor = var16;
                var14[1] = var15;
                var4.style = var14;
                var13 = var7.bind(var3)(var13, var4);
                var4 = new Array(2);
                var4[0] = var13;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var10.iconContainer;
                var5.style = var9;
                var9 = _closure1_slot4;
                var8 = {};
                var8.source = var11;
                var11 = var10.icon;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var11.tintColor = var12;
                var10[1] = var11;
                var8.style = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 660, 33, 1297, 671, 11836, 14371, 566, 44, 8477, 795, 14372, 1234, 6477, 2]);