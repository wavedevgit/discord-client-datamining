// modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.activity;
        var _closure2_slot0 = var1;
        var5 = var2.guildId;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var6 = var3.useMemo;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            _fun92404: for (var _fun92404_ip = 0;;) switch (_fun92404_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = _closure2_slot0;
                    var3 = null;
                    var5 = var3 == var0;
                    var0 = undefined;
                    if (var5) {
                        _fun92404_ip = 41;
                        continue _fun92404
                    }
                case 31:
                    var4 = _closure2_slot0;
                    var0 = var4.userIds;
                case 41:
                    if (!(var3 == var0)) {
                        _fun92404_ip = 49;
                        continue _fun92404
                    }
                case 45:
                    var0 = new Array(0);
                case 49:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var1 = var6.bind(var3)(var1, var4);
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 4;
        var6 = var6[var4];
        var4 = undefined;
        var7 = var7.bind(var4)(var6);
        var6 = var7.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var6.bind(var7)(var4, var1, var2);
        var _closure2_slot3 = var4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var3 = arg0;
                var2 = var3.getAvatarURL;
                var1 = _closure2_slot1;
                var0 = 64;
                var2 = var2.bind(var3)(var1, var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '';
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun92409: for (var _fun92409_ip = 0;;) switch (_fun92409_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channelId;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var2 = var1.applicationId;
                var _closure2_slot1 = var2;
                var6 = var1.activity;
                var5 = null;
                if (!(var5 == var6)) {
                    _fun92409_ip = 75;
                    continue _fun92409
                }
            case 40:
                var2 = _closure1_slot3;
                var1 = var2.getEmbeddedActivitiesForChannel;
                var3 = var1.bind(var2)(var3);
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var2.bind(var3)(var1);
            case 75:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var7 = var5 == var6;
                var4 = undefined;
                var1 = undefined;
                if (var7) {
                    _fun92409_ip = 105;
                    continue _fun92409
                }
            case 99:
                var1 = var6.userIds;
            case 105:
                if (!(var5 == var1)) {
                    _fun92409_ip = 113;
                    continue _fun92409
                }
            case 109:
                var1 = new Array(0);
            case 113:
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun92411: for (var _fun92411_ip = 0;;) switch (_fun92411_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getUser;
                            var0 = arg0;
                            var4 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 == var4;
                            var2 = undefined;
                            if (var0) {
                                _fun92411_ip = 54;
                                continue _fun92411
                            }
                        case 32:
                            var3 = var4.getAvatarURL;
                            var1 = _closure2_slot0;
                            var0 = 64;
                            var2 = var3.bind(var4)(var1, var0);
                        case 54:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = '';
                            var0 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getEmbeddedActivityParticipantAvatarUris = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 1621, 1304, 632, 2]);