// modules/guild_scheduled_events/native/components/GuildEventUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun66598: for (var _fun66598_ip = 0;;) switch (_fun66598_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.getLocationFromEvent;
                var0 = arg0;
                var2 = var2.bind(var4)(var0);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun66598_ip = 111;
                    continue _fun66598
                }
            case 47:
                var2 = var0 != var6;
                var0 = null;
                if (!var2) {
                    _fun66598_ip = 109;
                    continue _fun66598
                }
            case 56:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var2 = arg2;
                if (var2) {
                    _fun66598_ip = 95;
                    continue _fun66598
                }
            case 82:
                var2 = var5.getSimpleChannelIcon;
                var2 = var2.bind(var5)(var6);
                _fun66598_ip = 106;
                continue _fun66598;
            case 95:
                var4 = var5.getChannelIcon;
                var2 = var4.bind(var5)(var6);
            case 106:
                var0 = var2;
            case 109:
                _fun66598_ip = 131;
                continue _fun66598;
            case 111:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var0 = var2.bind(var3)(var1);
            case 131:
                return var0;
        }
    };
    var2.getEventLocationIconSource = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun66599: for (var _fun66599_ip = 0;;) switch (_fun66599_ip) {
            case 0:
                var7 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.getLocationFromEvent;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var5 = null;
                if (!(var5 == var0)) {
                    _fun66599_ip = 120;
                    continue _fun66599
                }
            case 47:
                var2 = var5 != var7;
                var0 = null;
                if (!var2) {
                    _fun66599_ip = 118;
                    continue _fun66599
                }
            case 56:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var2 = arg2;
                if (var2) {
                    _fun66599_ip = 95;
                    continue _fun66599
                }
            case 82:
                var2 = var6.getSimpleChannelIconComponent;
                var2 = var2.bind(var6)(var7);
                _fun66599_ip = 106;
                continue _fun66599;
            case 95:
                var4 = var6.getChannelIconComponent;
                var2 = var4.bind(var6)(var7);
            case 106:
                var4 = var5 != var2;
                var0 = null;
                if (!var4) {
                    _fun66599_ip = 118;
                    continue _fun66599
                }
            case 115:
                var0 = var2;
            case 118:
                _fun66599_ip = 146;
                continue _fun66599;
            case 120:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var0 = var1.LocationIcon;
            case 146:
                return var0;
        }
    };
    var2.getEventLocationIconComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8174, 8183, 4809, 8184, 2]);