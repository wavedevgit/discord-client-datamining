// modules/voice_panel/native/hooks/useSoundboardConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var4 = 'call control drawer';
    var1.VOICE_CONTROLS = var4;
    var4 = 'voice panel controls';
    var1.VOICE_PANEL_CONTROLS = var4;
    var4 = 'call floating button';
    var1.FLOATING_BUTTON = var4;
    var4 = 'call header';
    var1.HEADER = var4;
    var _closure1_slot5 = var1;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useSoundboardConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        _fun110781: for (var _fun110781_ip = 0;;) switch (_fun110781_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var3;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 2;
                var0 = var9[var0];
                var7 = undefined;
                var0 = var8.bind(var7)(var0);
                var5 = var0.bind(var7)(var6);
                var11 = _closure1_slot0;
                var0 = 3;
                var0 = var9[var0];
                var10 = var11.bind(var7)(var0);
                var1 = var10.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 4;
                var0 = var9[var0];
                var0 = var11.bind(var7)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.SOUNDBOARD_MOBILE_NEW_BADGE;
                var0 = var1.bind(var10)(var0);
                var1 = !var0;
                var0 = 5;
                var0 = var9[var0];
                var9 = var8.bind(var7)(var0);
                var8 = var9.useExperiment;
                var7 = {};
                var7.location = var3;
                var0 = {};
                var10 = true;
                var0.autoTrackExposure = var10;
                var10 = !var5;
                var0.disable = var10;
                var0 = var8.bind(var9)(var7, var0);
                var8 = var0.enabled;
                var9 = var0.showInHeader;
                var0 = {};
                if (!var5) {
                    _fun110781_ip = 258;
                    continue _fun110781
                }
            case 163:
                var7 = _closure1_slot5;
                var7 = var7.VOICE_CONTROLS;
                var7 = var3 === var7;
                if (var7) {
                    _fun110781_ip = 194;
                    continue _fun110781
                }
            case 180:
                var10 = _closure1_slot5;
                var10 = var10.VOICE_PANEL_CONTROLS;
                var7 = var3 === var10;
            case 194:
                if (var7) {
                    _fun110781_ip = 226;
                    continue _fun110781
                }
            case 197:
                var10 = var8;
                if (!var8) {
                    _fun110781_ip = 206;
                    continue _fun110781
                }
            case 203:
                var10 = !var9;
            case 206:
                if (!var10) {
                    _fun110781_ip = 223;
                    continue _fun110781
                }
            case 209:
                var11 = _closure1_slot5;
                var11 = var11.FLOATING_BUTTON;
                var10 = var3 === var11;
            case 223:
                var7 = var10;
            case 226:
                if (var7) {
                    _fun110781_ip = 255;
                    continue _fun110781
                }
            case 229:
                if (!var8) {
                    _fun110781_ip = 235;
                    continue _fun110781
                }
            case 232:
                var8 = var9;
            case 235:
                if (!var8) {
                    _fun110781_ip = 252;
                    continue _fun110781
                }
            case 238:
                var9 = _closure1_slot5;
                var9 = var9.HEADER;
                var8 = var3 === var9;
            case 252:
                var7 = var8;
            case 255:
                var5 = var7;
            case 258:
                var0.visible = var5;
                var5 = _closure1_slot3;
                var7 = var5.useCallback;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var3;
                var3 = function() { // Environment: var2
                    _fun110782: for (var _fun110782_ip = 0;;) switch (_fun110782_ip) {
                        case 0:
                            var4 = _closure1_slot4;
                            var2 = var4.getChannel;
                            var1 = _closure2_slot0;
                            var4 = var2.bind(var4)(var1);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun110782_ip = 78;
                                continue _fun110782
                            }
                        case 30:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.showSoundboardSoundPickerActionSheet;
                            var0 = {};
                            var0.channel = var4;
                            var3 = _closure2_slot1;
                            var0.analyticsSource = var3;
                            var0 = var1.bind(var2)(var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var7.bind(var5)(var3, var4);
                var0.handlePress = var3;
                var4 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var3);
                var0.disabled = var2;
                var0.showIndicator = var1;
                return var0;
        }
    };
    var2.default = var3;
    var2.SoundboardButtonLocation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 14244, 3212, 1358, 14269, 8527, 5724, 2]);