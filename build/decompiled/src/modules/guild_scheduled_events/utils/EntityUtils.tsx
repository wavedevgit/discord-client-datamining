// modules/guild_scheduled_events/utils/EntityUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function(arg0, arg1) { // Original name: _getLocationFromEvent, environment: var1
        _fun65255: for (var _fun65255_ip = 0;;) switch (_fun65255_ip) {
            case 0:
                var1 = arg1;
                var0 = _closure1_slot1;
                var2 = var0.EXTERNAL;
                var0 = arg0;
                var2 = var0 === var2;
                if (!var2) {
                    _fun65255_ip = 32;
                    continue _fun65255
                }
            case 26:
                var0 = null;
                var2 = var0 != var1;
            case 32:
                if (!var2) {
                    _fun65255_ip = 43;
                    continue _fun65255
                }
            case 35:
                var0 = 'location';
                var2 = var0 in var1;
            case 43:
                var0 = null;
                if (!var2) {
                    _fun65255_ip = 53;
                    continue _fun65255
                }
            case 48:
                var0 = var1.location;
            case 53:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot1 = var6;
    var3 = var3.EntityChannelTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/utils/EntityUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getChannelFromEvent, environment: var1
        _fun65256: for (var _fun65256_ip = 0;;) switch (_fun65256_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.entity_type;
                var1 = var2.channel_id;
                var0 = _closure1_slot2;
                var4 = var4 in var0;
                if (!var4) {
                    _fun65256_ip = 34;
                    continue _fun65256
                }
            case 28:
                var0 = null;
                var4 = var0 != var1;
            case 34:
                var0 = undefined;
                if (!var4) {
                    _fun65256_ip = 75;
                    continue _fun65256
                }
            case 39:
                var4 = _closure1_slot0;
                var3 = var4.getChannel;
                var2 = var2.channel_id;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                var3 = var3 != var2;
                var1 = undefined;
                if (!var3) {
                    _fun65256_ip = 72;
                    continue _fun65256
                }
            case 69:
                var1 = var2;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var2.getChannelFromEvent = var3;
    var3 = function(arg0) { // Original name: getLocationFromEvent, environment: var1
        var0 = arg0;
        var3 = _closure1_slot3;
        var2 = var0.entity_type;
        var1 = var0.entity_metadata;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.getLocationFromEvent = var3;
    var3 = function(arg0) { // Original name: getLocationFromEventData, environment: var1
        var0 = arg0;
        var3 = _closure1_slot3;
        var2 = var0.entityType;
        var1 = var0.entityMetadata;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.getLocationFromEventData = var3;
    var1 = function(arg0) { // Original name: getChannelTypeFromEntity, environment: var1
        _fun65259: for (var _fun65259_ip = 0;;) switch (_fun65259_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot1;
                var0 = var0.VOICE;
                if (!(var2 !== var0)) {
                    _fun65259_ip = 36;
                    continue _fun65259
                }
            case 20:
                var0 = _closure1_slot1;
                var3 = var0.STAGE_INSTANCE;
                var0 = undefined;
                if (!(var2 === var3)) {
                    _fun65259_ip = 44;
                    continue _fun65259
                }
            case 36:
                var1 = _closure1_slot2;
                var0 = var1[var2];
            case 44:
                return var0;
        }
    };
    var2.getChannelTypeFromEntity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1378, 2]);