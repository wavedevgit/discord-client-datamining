// modules/voice_calls/trackVoiceFeedback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _trackVoiceFeedback, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun113702: for (var _fun113702_ip = 0;;) switch (_fun113702_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun113702_ip = 593;
                            continue _fun113702
                        }
                    case 13:
                        var22 = var1.rating;
                        var20 = var1.category;
                        var19 = var1.reasonCode;
                        var18 = var1.reasonDescription;
                        var17 = var1.variant;
                        var16 = var1.feedback;
                        var4 = var1.analyticsData;
                        var3 = undefined;
                        SaveGenerator(address = 60);
                    case 58:
                        return var3;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun113702_ip = 590;
                            continue _fun113702
                        }
                    case 69:
                        var6 = _closure1_slot3;
                        var2 = var6.getSettings;
                        var8 = var2.bind(var6)();
                        var6 = _closure1_slot3;
                        var2 = var6.getInputDeviceId;
                        var6 = var2.bind(var6)();
                        var7 = _closure1_slot3;
                        var2 = var7.getInputDevices;
                        var2 = var2.bind(var7)();
                        var15 = var2[var6];
                        var6 = _closure1_slot3;
                        var2 = var6.getOutputDeviceId;
                        var6 = var2.bind(var6)();
                        var7 = _closure1_slot3;
                        var2 = var7.getOutputDevices;
                        var2 = var2.bind(var7)();
                        var14 = var2[var6];
                        var6 = _closure1_slot3;
                        var2 = var6.getVideoDeviceId;
                        var6 = var2.bind(var6)();
                        var7 = _closure1_slot3;
                        var2 = var7.getVideoDevices;
                        var2 = var2.bind(var7)();
                        var12 = var2[var6];
                        var6 = _closure1_slot3;
                        var2 = var6.getNoiseCancellation;
                        var13 = var2.bind(var6)();
                        var6 = _closure1_slot3;
                        var2 = var6.getMediaEngine;
                        var6 = var2.bind(var6)();
                        var2 = var6.getAudioSubsystem;
                        var10 = var2.bind(var6)();
                        var6 = _closure1_slot3;
                        var2 = var6.getMediaEngine;
                        var6 = var2.bind(var6)();
                        var2 = var6.getAudioLayer;
                        var9 = var2.bind(var6)();
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 2;
                        var2 = var7[var2];
                        var6 = var6.bind(var3)(var2);
                        var2 = var6.getKrispModel;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 278);
                    case 276:
                        return var2;
                    case 278:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun113702_ip = 587;
                            continue _fun113702
                        }
                    case 287:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 3;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.track;
                        var5 = {};
                        var11 = null;
                        var23 = var11 != var22;
                        var21 = 'no response';
                        if (!var23) {
                            _fun113702_ip = 332;
                            continue _fun113702
                        }
                    case 329:
                        var21 = var22;
                    case 332:
                        var5.rating = var21;
                        var5.category = var20;
                        var5.reason_code = var19;
                        var5.reason_description = var18;
                        var5.reason_variant = var17;
                        var5.feedback = var16;
                        var16 = var8.mode;
                        var5.audio_input_mode = var16;
                        var16 = var8.modeOptions;
                        var16 = var16.autoThreshold;
                        var5.automatic_audio_input_sensitivity_enabled = var16;
                        var16 = var8.modeOptions;
                        var16 = var16.threshold;
                        var5.audio_input_sensitivity = var16;
                        var16 = var8.modeOptions;
                        var16 = var16.vadUseKrisp;
                        var5.vad_use_advanced_voice_activity = var16;
                        var16 = var8.echoCancellation;
                        var5.echo_cancellation_enabled = var16;
                        var16 = var8.noiseSuppression;
                        var5.noise_suppression_enabled = var16;
                        var16 = var8.automaticGainControl;
                        var5.automatic_gain_control_enabled = var16;
                        var16 = var8.outputVolume;
                        var5.voice_output_volume = var16;
                        var5.noise_cancellation_enabled = var13;
                        var16 = var11 == var15;
                        var13 = undefined;
                        if (var16) {
                            _fun113702_ip = 492;
                            continue _fun113702
                        }
                    case 487:
                        var13 = var15.name;
                    case 492:
                        var5.input_device_name = var13;
                        var15 = var11 == var14;
                        var13 = undefined;
                        if (var15) {
                            _fun113702_ip = 511;
                            continue _fun113702
                        }
                    case 506:
                        var13 = var14.name;
                    case 511:
                        var5.output_device_name = var13;
                        var13 = var11 == var12;
                        var11 = undefined;
                        if (var13) {
                            _fun113702_ip = 532;
                            continue _fun113702
                        }
                    case 527:
                        var11 = var12.name;
                    case 532:
                        var5.video_device_name = var11;
                        var5.audio_subsystem = var10;
                        var5.audio_layer = var9;
                        var8 = var8.automaticAudioSubsystem;
                        var5.automatic_audio_subsystem = var8;
                        var5.krisp_nc_model = var2;
                        var25 = var5;
                        var24 = var4;
                        var4 = copyDataProperties(var25, var24);
                        var4 = arg0;
                        var4 = var6.bind(var7)(var4, var5);
                        return var3;
                    case 587:
                        return var2;
                    case 590:
                        return var1;
                    case 593:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/trackVoiceFeedback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: trackVoiceFeedback, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3435, 12269, 795, 2]);