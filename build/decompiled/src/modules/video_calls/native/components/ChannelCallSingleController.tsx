// modules/video_calls/native/components/ChannelCallSingleController.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallSingleController.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun68848: for (var _fun68848_ip = 0;;) switch (_fun68848_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.selectedParticipant;
                var _closure2_slot0 = var6;
                var5 = var1.channel;
                var _closure2_slot1 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var1 = var5.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 6;
                    var1 = var7[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.VIDEO_LAYOUT_TOGGLED;
                    var1 = {};
                    var6 = 'focus';
                    var1.video_layout = var6;
                    var6 = _closure1_slot0;
                    var5 = 7;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.collectVoiceAnalyticsMetadata;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var8 = var6.bind(var7)(var5);
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var8 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getActiveStreamForStreamKey;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1, var0);
                var1 = var6.type;
                var0 = _closure1_slot7;
                var0 = var0.STREAM;
                if (!(var0 !== var1)) {
                    _fun68848_ip = 263;
                    continue _fun68848
                }
            case 136:
                var0 = _closure1_slot7;
                var0 = var0.USER;
                if (!(var0 !== var1)) {
                    _fun68848_ip = 220;
                    continue _fun68848
                }
            case 150:
                var0 = _closure1_slot7;
                var0 = var0.HIDDEN_STREAM;
                if (!(var0 !== var1)) {
                    _fun68848_ip = 216;
                    continue _fun68848
                }
            case 164:
                var0 = _closure1_slot7;
                var0 = var0.ACTIVITY;
                if (!(var0 !== var1)) {
                    _fun68848_ip = 180;
                    continue _fun68848
                }
            case 178:
                return var4;
            case 180:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'Activities are not supported on old voice UI';
                var11 = var1;
                var0 = new var11[var3](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 216:
                var0 = null;
                return var0;
            case 220:
                var3 = _closure1_slot8;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.participant = var6;
                var0.channel = var5;
                var0 = var3.bind(var4)(var1, var0);
                return var0;
            case 263:
                var0 = var6.user;
                var8 = var0.id;
                var1 = _closure1_slot5;
                var0 = var1.getId;
                var1 = var0.bind(var1)();
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun68848_ip = 354;
                    continue _fun68848
                }
            case 296:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                if (!(var8 !== var1)) {
                    _fun68848_ip = 321;
                    continue _fun68848
                }
            case 308:
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                _fun68848_ip = 332;
                continue _fun68848;
            case 321:
                var8 = _closure1_slot2;
                var7 = 9;
                var1 = var8[var7];
            case 332:
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.participant = var6;
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 354:
                return var0;
        }
    };
    var2.ChannelCallSingleController = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3714, 1216, 660, 3523, 33, 795, 4302, 566, 8615, 8617, 8618, 2]);