// modules/video_calls/participantHasVideo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function(arg0) { // Original name: participantHasVideo, environment: var1
        _fun64483: for (var _fun64483_ip = 0;;) switch (_fun64483_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot4;
                var0 = var0.ACTIVITY;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun64483_ip = 92;
                    continue _fun64483
                }
            case 28:
                var1 = _closure1_slot5;
                var3 = undefined;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun64483_ip = 77;
                    continue _fun64483
                }
            case 42:
                var4 = var2.voiceState;
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun64483_ip = 65;
                    continue _fun64483
                }
            case 59:
                var3 = var4.selfVideo;
            case 65:
                var1 = var1 != var3;
                if (!var1) {
                    _fun64483_ip = 75;
                    continue _fun64483
                }
            case 72:
                var1 = var3;
            case 75:
                _fun64483_ip = 89;
                continue _fun64483;
            case 77:
                var3 = var2.streamId;
                var2 = null;
                var1 = var2 != var3;
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function(arg0) { // Original name: canRenderParticipantVideo, environment: var1
        _fun64484: for (var _fun64484_ip = 0;;) switch (_fun64484_ip) {
            case 0:
                var4 = arg0;
                var6 = arguments[1];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun64484_ip = 19;
                    continue _fun64484
                }
            case 12:
                var6 = _closure1_slot3;
            case 19:
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun64484_ip = 138;
                    continue _fun64484
                }
            case 28:
                var1 = _closure1_slot7;
                var1 = var1.bind(var5)(var4);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun64484_ip = 135;
                    continue _fun64484
                }
            case 49:
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)(var4);
                var2 = !var2;
                if (var2) {
                    _fun64484_ip = 92;
                    continue _fun64484
                }
            case 64:
                var7 = var4.user;
                var8 = var7.id;
                var9 = _closure1_slot2;
                var7 = var9.getId;
                var7 = var7.bind(var9)();
                var2 = var8 !== var7;
            case 92:
                if (!var2) {
                    _fun64484_ip = 132;
                    continue _fun64484
                }
            case 95:
                var3 = _closure1_slot6;
                var3 = var3.bind(var5)(var4);
                var3 = !var3;
                if (var3) {
                    _fun64484_ip = 129;
                    continue _fun64484
                }
            case 110:
                var5 = var6.isLocalVideoDisabled;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
            case 129:
                var2 = var3;
            case 132:
                var1 = var2;
            case 135:
                var0 = var1;
            case 138:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ParticipantTypes;
    var _closure1_slot4 = var8;
    var8 = var5.isStreamParticipant;
    var _closure1_slot5 = var8;
    var5 = var5.isUserParticipant;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/participantHasVideo.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.canRenderParticipantVideo = var3;
    var1 = function(arg0) { // Original name: useCanRenderParticipantVideo, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanRenderParticipantVideo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3435, 3482, 566, 2]);