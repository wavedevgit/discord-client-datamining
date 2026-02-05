// modules/polls/chat/usePollMessageContextItemTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var7 = 0;
    var4 = var6[var7];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = {};
    var1.END_EARLY = var7;
    var4 = 'END_EARLY';
    var1[var7] = var4;
    var _closure1_slot3 = var1;
    var4 = new Array(0);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/chat/usePollMessageContextItemTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun78409: for (var _fun78409_ip = 0;;) switch (_fun78409_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot2;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var5)(var2, var1);
                var2 = var3.poll;
                var1 = var3.isPoll;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun78409_ip = 169;
                    continue _fun78409
                }
            case 79:
                var1 = null;
                if (!(var1 != var2)) {
                    _fun78409_ip = 169;
                    continue _fun78409
                }
            case 85:
                var1 = new Array(0);
                var6 = var2.expiry;
                var5 = var6.isSameOrBefore;
                var2 = global;
                var7 = var2.Date;
                var2 = var7.now;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var2 = !var2;
                if (!var2) {
                    _fun78409_ip = 144;
                    continue _fun78409
                }
            case 129:
                var3 = var3.author;
                var3 = var3.id;
                var2 = var3 === var4;
            case 144:
                if (!var2) {
                    _fun78409_ip = 167;
                    continue _fun78409
                }
            case 147:
                var3 = var1.push;
                var2 = _closure1_slot3;
                var2 = var2.END_EARLY;
                var2 = var3.bind(var1)(var2);
            case 167:
                return var1;
            case 169:
                var0 = _closure1_slot4;
                return var0;
        }
    };
    var2.default = var3;
    var2.PollMessageContextItemTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 566, 2]);