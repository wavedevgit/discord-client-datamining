// modules/activities/utils/isListeningOnSpotify.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityTypes;
    var _closure1_slot2 = var6;
    var3 = var3.PlatformTypes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isSpotifyParty;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isListeningOnSpotify.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun50446: for (var _fun50446_ip = 0;;) switch (_fun50446_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun50446_ip = 34;
                    continue _fun50446
                }
            case 12:
                var4 = var1.type;
                var2 = _closure1_slot2;
                var2 = var2.LISTENING;
                var0 = var4 === var2;
            case 34:
                if (!var0) {
                    _fun50446_ip = 96;
                    continue _fun50446
                }
            case 37:
                var4 = var1.name;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 2;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.get;
                var2 = _closure1_slot3;
                var2 = var2.SPOTIFY;
                var2 = var5.bind(var6)(var2);
                var2 = var2.name;
                var0 = var4 === var2;
            case 96:
                if (!var0) {
                    _fun50446_ip = 109;
                    continue _fun50446
                }
            case 99:
                var2 = var1.party;
                var0 = var3 != var2;
            case 109:
                if (!var0) {
                    _fun50446_ip = 127;
                    continue _fun50446
                }
            case 112:
                var2 = var1.party;
                var2 = var2.id;
                var0 = var3 != var2;
            case 127:
                if (!var0) {
                    _fun50446_ip = 155;
                    continue _fun50446
                }
            case 130:
                var3 = _closure1_slot4;
                var1 = var1.party;
                var2 = var1.id;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 155:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5613, 4361, 2]);