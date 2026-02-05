// modules/polls/useTrackPollEvents.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/useTrackPollEvents.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var0 = {};
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var0 = 0;
            var _closure3_slot0 = var0;
            var _closure3_slot1 = var0;
            var _closure3_slot2 = var0;
            var9 = _closure2_slot0;
            var1 = var9.forEach;
            var0 = function(arg0) { // Environment: var8
                _fun108482: for (var _fun108482_ip = 0;;) switch (_fun108482_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.image;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun108482_ip = 103;
                            continue _fun108482
                        }
                    case 15:
                        var2 = var0.emoji;
                        if (!(var1 == var2)) {
                            _fun108482_ip = 85;
                            continue _fun108482
                        }
                    case 25:
                        var2 = var0.stickerId;
                        if (!(var1 == var2)) {
                            _fun108482_ip = 65;
                            continue _fun108482
                        }
                    case 35:
                        var0 = var0.mediaAttachmentState;
                        if (!(var1 != var0)) {
                            _fun108482_ip = 103;
                            continue _fun108482
                        }
                    case 45:
                        var2 = _closure3_slot0;
                        var0 = 1;
                        var0 = var2 + var0;
                        _closure3_slot0 = var0;
                        _fun108482_ip = 103;
                        continue _fun108482;
                    case 65:
                        var2 = _closure3_slot2;
                        var0 = 1;
                        var0 = var2 + var0;
                        _closure3_slot2 = var0;
                        _fun108482_ip = 103;
                        continue _fun108482;
                    case 85:
                        var2 = _closure3_slot1;
                        var0 = 1;
                        var0 = var2 + var0;
                        _closure3_slot1 = var0;
                    case 103:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var9)(var0);
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 2;
            var1 = var7[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot4;
            var2 = var1.POLL_CREATION_CANCELLED;
            var1 = {};
            var9 = var9.length;
            var1.answers_count = var9;
            var9 = _closure3_slot0;
            var1.attachments_count = var9;
            var9 = _closure3_slot1;
            var1.emojis_count = var9;
            var8 = _closure3_slot2;
            var1.stickers_count = var8;
            var6 = _closure2_slot1;
            var1.allow_multiselect = var6;
            var6 = _closure1_slot0;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.PollLayoutTypes;
            var5 = var5.DEFAULT;
            var1.layout_type = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.trackPollCreationCancelled = var1;
        return var0;
    };
    var2.useTrackPollCreationEvents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 4302, 6830, 2]);