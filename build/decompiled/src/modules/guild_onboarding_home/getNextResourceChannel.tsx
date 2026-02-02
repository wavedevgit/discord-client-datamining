// modules/guild_onboarding_home/getNextResourceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/getNextResourceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun89637: for (var _fun89637_ip = 0;;) switch (_fun89637_ip) {
            case 0:
                var1 = arg1;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot2;
                var2 = var3.getResourceChannels;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var1 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var1.bind(var2)(var0);
                var0 = 0;
                if (!(!(var3 < var0))) {
                    _fun89637_ip = 92;
                    continue _fun89637
                }
            case 54:
                var1 = var2[var3];
                var0 = new Array(2);
                var0[0] = var1;
                var1 = 1;
                var3 = var3 + var1;
                var1 = var2.length;
                var1 = var3 % var1;
                var1 = var2[var1];
                var0[1] = var1;
                _fun89637_ip = 102;
                continue _fun89637;
            case 92:
                var0 = [null, null];
            case 102:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1() {
        _fun89639: for (var _fun89639_ip = 0;;) switch (_fun89639_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 1;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getResourceChannels;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = 0;
                if (!(!(var1 < var0))) {
                    _fun89639_ip = 189;
                    continue _fun89639
                }
            case 95:
                var0 = var2.length;
                if (!(!(var0 <= var3))) {
                    _fun89639_ip = 189;
                    continue _fun89639
                }
            case 104:
                var4 = var2.length;
                var0 = 2;
                if (!(var0 !== var4)) {
                    _fun89639_ip = 164;
                    continue _fun89639
                }
            case 116:
                var4 = var1 - var3;
                var0 = var2.length;
                var0 = var4 % var0;
                var4 = var2[var0];
                var0 = new Array(2);
                var0[0] = var4;
                var5 = var1 + var3;
                var4 = var2.length;
                var4 = var5 % var4;
                var4 = var2[var4];
                var0[1] = var4;
                _fun89639_ip = 187;
                continue _fun89639;
            case 164:
                var1 = var3 - var1;
                var2 = var2[var1];
                var1 = [null];
                var1[1] = var2;
                var0 = var1;
            case 187:
                _fun89639_ip = 199;
                continue _fun89639;
            case 189:
                var0 = [null, null];
            case 199:
                return var0;
        }
    };
    var2.usePreviousAndNextResourceChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4274, 566, 2]);