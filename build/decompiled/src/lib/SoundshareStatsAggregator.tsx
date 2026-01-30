// lib/SoundshareStatsAggregator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: SoundshareStatsAggregator, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {
                'soundshare_attach_requested_count': 0,
                'soundshare_capturing_count': 0,
                'soundshare_capture_stopped_count': 0,
                'soundshare_hooked_count': 0,
                'soundshare_recv_connect_count': 0,
                'soundshare_recv_disconnect_count': 0,
                'soundshare_recv_started_count': 0,
                'soundshare_recv_stopped_count': 0,
                'soundshare_recv_failed_count': 0,
                'soundshare_recv_format_count': 0,
                'soundshare_send_announce_count': 0,
                'soundshare_send_start_count': 0,
                'soundshare_send_stop_count': 0,
                'soundshare_malformed_trace_count': 0,
                'soundshare_audio_detected_count': 0,
                'soundshare_state_transition_detached_count': 0,
                'soundshare_state_transition_waiting_count': 0,
                'soundshare_state_transition_attached_count': 0,
                'soundshare_state_transition_started_count': 0,
                'soundshare_state_transition_playing_count': 0,
                'soundshare_state_transition_silence_count': 0,
                'soundshare_unknown_event_count': 0,
                'soundshare_first_pid': 0,
                'soundshare_last_pid': 0,
                'soundshare_unique_pids': 0,
                'soundshare_first_session': null,
                'soundshare_last_session': null
            };
            var2._report = var1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._pids = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'traceEvent';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun31982: for (var _fun31982_ip = 0;;) switch (_fun31982_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var4 = this;
                    var1 = var4._report;
                    var5 = var3.type;
                    var0 = 'soundshare_state_transition';
                    if (!(var0 !== var5)) {
                        _fun31982_ip = 64;
                        continue _fun31982
                    }
                case 30:
                    var7 = var3.type;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = '_count';
                    var6 = var6.bind(var5)(var7, var0);
                    _fun31982_ip = 113;
                    continue _fun31982;
                case 64:
                    var5 = var3.newState;
                    var0 = ['detached', 'waiting', 'attached', 'started', 'playing', 'silence'];
                    var8 = var0[var5];
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var7 = var0.concat;
                    var5 = 'soundshare_state_transition_';
                    var0 = '_count';
                    var6 = var7.bind(var5)(var8, var0);
                case 113:
                    var5 = var1[var6];
                    var0 = undefined;
                    if (!(var0 === var5)) {
                        _fun31982_ip = 140;
                        continue _fun31982
                    }
                case 123:
                    var5 = var1.soundshare_unknown_event_count;
                    var5 = var5 + 1;
                    var1.soundshare_unknown_event_count = var5;
                    _fun31982_ip = 165;
                    continue _fun31982;
                case 140:
                    var7 = var1[var6];
                    var5 = 32767;
                    if (!(var7 < var5)) {
                        _fun31982_ip = 165;
                        continue _fun31982
                    }
                case 154:
                    var5 = var1[var6];
                    var5 = var5 + 1;
                    var1[var6] = var5;
                case 165:
                    var5 = 'pid';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun31982_ip = 234;
                        continue _fun31982
                    }
                case 176:
                    var6 = var1.soundshare_first_pid;
                    var5 = 0;
                    if (!(var5 === var6)) {
                        _fun31982_ip = 200;
                        continue _fun31982
                    }
                case 188:
                    var5 = var3.pid;
                    var1.soundshare_first_pid = var5;
                case 200:
                    var5 = var3.pid;
                    var1.soundshare_last_pid = var5;
                    var5 = var4._pids;
                    var4 = var5.add;
                    var3 = var3.pid;
                    var3 = var4.bind(var5)(var3);
                case 234:
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun31982_ip = 262;
                        continue _fun31982
                    }
                case 240:
                    var3 = var1.soundshare_first_session;
                    if (!(var4 == var3)) {
                        _fun31982_ip = 256;
                        continue _fun31982
                    }
                case 250:
                    var1.soundshare_first_session = var2;
                case 256:
                    var1.soundshare_last_session = var2;
                case 262:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'getStats';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = {};
            var3 = var1._report;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var1 = var1._pids;
            var2 = var1.size;
            var1 = 'soundshare_unique_pids';
            var0[var1] = var2;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/SoundshareStatsAggregator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);