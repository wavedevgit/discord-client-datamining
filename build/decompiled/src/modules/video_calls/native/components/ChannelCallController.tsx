// modules/video_calls/native/components/ChannelCallController.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        _fun69637: for (var _fun69637_ip = 0;;) switch (_fun69637_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var5);
                var2 = var5.isPrivate;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun69637_ip = 54;
                    continue _fun69637
                }
            case 51:
                if (var0) {
                    _fun69637_ip = 76;
                    continue _fun69637
                }
            case 54:
                var3 = _closure1_slot5;
                var2 = _closure1_slot7;
                var0 = {};
                var0.channel = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun69637_ip = 112;
                continue _fun69637;
            case 76:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 112:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        _fun69638: for (var _fun69638_ip = 0;;) switch (_fun69638_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var5 = var0.bind(var4)(var6);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun69638_ip = 66;
                    continue _fun69638
                }
            case 44:
                var3 = _closure1_slot5;
                var2 = _closure1_slot8;
                var0 = {};
                var0.channel = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun69638_ip = 113;
                continue _fun69638;
            case 66:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ChannelCallSingleController;
                var1 = {};
                var1.channel = var6;
                var1.selectedParticipant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 113:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var4 = var1.id;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 7;
            var1 = var7[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot4;
            var2 = var1.VIDEO_LAYOUT_TOGGLED;
            var1 = {};
            var6 = 'grid';
            var1.video_layout = var6;
            var6 = _closure1_slot0;
            var5 = 8;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.collectVoiceAnalyticsMetadata;
            var5 = _closure2_slot0;
            var5 = var5.id;
            var8 = var6.bind(var7)(var5);
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var6 = 'Legacy voice and video call controller, slated for removal.';
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallController.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69641: for (var _fun69641_ip = 0;;) switch (_fun69641_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun69641_ip = 42;
                    continue _fun69641
                }
            case 17:
                var4 = _closure1_slot5;
                var3 = _closure1_slot6;
                var2 = {};
                var2.channel = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 42:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 7911, 8727, 7912, 8638, 795, 4303, 2]);