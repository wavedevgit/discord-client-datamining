// modules/media_engine/MediaEngineActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InputModes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/MediaEngineActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69069: for (var _fun69069_ip = 0;;) switch (_fun69069_ip) {
            case 0:
                var9 = arg0;
                var8 = arguments[1];
                var7 = arguments[2];
                var _closure2_slot0 = var9;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun69069_ip = 23;
                    continue _fun69069
                }
            case 21:
                var8 = false;
            case 23:
                var _closure2_slot1 = var8;
                if (!(var7 === var0)) {
                    _fun69069_ip = 33;
                    continue _fun69069
                }
            case 31:
                var7 = false;
            case 33:
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var4 = var6.dispatch;
                var3 = {};
                var10 = 'PUSH_TO_TALK_STATE_CHANGE';
                var3.type = var10;
                var3.isActive = var9;
                var3.isPriority = var8;
                var3.isLatched = var7;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot3;
                var3 = var4.getMode;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot4;
                var3 = var3.PUSH_TO_TALK;
                var3 = var4 === var3;
                _closure2_slot3 = var3;
                var4 = _closure1_slot0;
                var3 = 4;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.getPushToTalkLatchingExperimentConfig;
                var3 = {
                    'location': 'doPTT',
                    'autoTrackExposure': false
                };
                var3 = var4.bind(var5)(var3);
                var3 = var3.enableLatching;
                if (!var3) {
                    _fun69069_ip = 213;
                    continue _fun69069
                }
            case 187:
                var5 = _closure1_slot3;
                var4 = var5.getModeOptions;
                var4 = var4.bind(var5)();
                var5 = var4.pttLatchingEnabled;
                var4 = true;
                var3 = var4 === var5;
            case 213:
                _closure2_slot4 = var3;
                var4 = _closure1_slot3;
                var3 = var4.getMediaEngine;
                var4 = var3.bind(var4)();
                var3 = var4.eachConnection;
                var2 = _closure1_slot5;
                var2 = var2.DEFAULT;
                var1 = function(arg0) { // Environment: var1
                    _fun69070: for (var _fun69070_ip = 0;;) switch (_fun69070_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = var4.setForceAudioInput;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun69070_ip = 33;
                                continue _fun69070
                            }
                        case 29:
                            var0 = _closure2_slot4;
                        case 33:
                            if (!var0) {
                                _fun69070_ip = 43;
                                continue _fun69070
                            }
                        case 36:
                            var6 = _closure2_slot2;
                            var0 = !var6;
                        case 43:
                            if (!var0) {
                                _fun69070_ip = 53;
                                continue _fun69070
                            }
                        case 46:
                            var5 = _closure2_slot0;
                            var0 = !var5;
                        case 53:
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.setPushToTalkState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 660, 3510, 806, 8636, 2]);