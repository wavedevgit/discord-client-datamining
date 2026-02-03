// modules/activities/panel/native/ActivityPanelContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun110205: for (var _fun110205_ip = 0;;) switch (_fun110205_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(3);
                var3[0] = var0;
                var0 = _closure1_slot3;
                var3[1] = var0;
                var0 = _closure1_slot4;
                var3[2] = var0;
                var2 = function() { // Environment: var0
                    _fun110206: for (var _fun110206_ip = 0;;) switch (_fun110206_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getConnectedActivityLocation;
                            var5 = var0.bind(var1)();
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun110206_ip = 184;
                                continue _fun110206
                            }
                        case 26:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var0);
                            var0 = var3.getEmbeddedActivityLocationChannelId;
                            var3 = var0.bind(var3)(var5);
                            if (!(var4 != var3)) {
                                _fun110206_ip = 180;
                                continue _fun110206
                            }
                        case 63:
                            var5 = _closure1_slot3;
                            var0 = var5.getChannel;
                            var6 = var0.bind(var5)(var3);
                            var0 = var4 == var6;
                            var5 = undefined;
                            if (var0) {
                                _fun110206_ip = 91;
                                continue _fun110206
                            }
                        case 86:
                            var5 = var6.type;
                        case 91:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 7;
                            var0 = var8[var0];
                            var0 = var7.bind(var1)(var0);
                            var0 = var0.ChannelTypes;
                            var0 = var0.GUILD_TEXT;
                            var0 = var5 === var0;
                            if (var0) {
                                _fun110206_ip = 178;
                                continue _fun110206
                            }
                        case 130:
                            var4 = var4 == var6;
                            var5 = undefined;
                            if (var4) {
                                _fun110206_ip = 149;
                                continue _fun110206
                            }
                        case 139:
                            var4 = var6.isPrivate;
                            var5 = var4.bind(var6)();
                        case 149:
                            var4 = true;
                            var1 = undefined;
                            if (!(var4 === var5)) {
                                _fun110206_ip = 175;
                                continue _fun110206
                            }
                        case 157:
                            var4 = _closure1_slot4;
                            var2 = var4.getVoiceChannelId;
                            var2 = var2.bind(var4)();
                            var1 = var2 !== var3;
                        case 175:
                            var0 = var1;
                        case 178:
                            return var0;
                        case 180:
                            var0 = false;
                            return var0;
                        case 184:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var2 = var5.bind(var6)(var3, var2, var0);
                var0 = null;
                if (!var2) {
                    _fun110205_ip = 139;
                    continue _fun110205
                }
            case 83:
                var3 = _closure1_slot6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var5 = 9;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 139:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/ActivityPanelContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1661, 1371, 33, 566, 3072, 790, 14186, 14194, 2]);