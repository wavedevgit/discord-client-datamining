// modules/user_settings/native/defs/ClipsOptOutOfVoiceRecordingSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = function() { // Environment: var9
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun82296: for (var _fun82296_ip = 0;;) switch (_fun82296_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82296_ip = 110;
                            continue _fun82296
                        }
                    case 7:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.ClipsAllowVoiceRecording;
                        var4 = var5.updateSetting;
                        var1 = arg0;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun82296_ip = 107;
                            continue _fun82296
                        }
                    case 62:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 107:
                        return var1;
                    case 110:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var7 = var1.bind(var0)();
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() { // Original name: title, environment: var9
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.AGDDkH;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = function() { // Original name: useDescription, environment: var9
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["wW9/zQ"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useDescription = var9;
    var8 = var8.CLIPS;
    var1.parent = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ClipsAllowVoiceRecording;
    var8 = var8.useSetting;
    var1.useValue = var8;
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ClipsOptOutOfVoiceRecordingSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6968, 1348, 806, 8943, 1234, 2]);