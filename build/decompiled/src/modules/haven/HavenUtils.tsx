// modules/haven/HavenUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var4 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.user_id;
        var0.userId = var2;
        var2 = var1.position;
        var0.position = var2;
        var1 = var1.avatar;
        var0.avatar = var1;
        return var0;
    };
    var _closure1_slot3 = var4;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var1 = var1.claimed_by;
        var0.claimedBy = var1;
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 3;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/haven/HavenUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.parseParticipant = var4;
    var2.parseSeat = var3;
    var3 = function arg0() {
        var2 = arg0;
        var0 = {};
        var1 = var2.room_id;
        var0.roomId = var1;
        var5 = var2.participants;
        var4 = var5.map;
        var3 = _closure1_slot3;
        var3 = var4.bind(var5)(var3);
        var0.participants = var3;
        var3 = var2.seats;
        var2 = var3.map;
        var1 = _closure1_slot4;
        var1 = var2.bind(var3)(var1);
        var0.seats = var1;
        return var0;
    };
    var2.parseRoom = var3;
    var1 = function arg0() {
        _fun96134: for (var _fun96134_ip = 0;;) switch (_fun96134_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 0;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.HavenSoundKeys;
                var1 = var1.RADIO;
                if (!(var1 !== var2)) {
                    _fun96134_ip = 240;
                    continue _fun96134
                }
            case 46:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.HavenSoundKeys;
                var1 = var1.ENVIRONMENT;
                if (!(var1 !== var2)) {
                    _fun96134_ip = 179;
                    continue _fun96134
                }
            case 79:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.HavenSoundKeys;
                var1 = var1.CAMPFIRE;
                if (!(var1 !== var2)) {
                    _fun96134_ip = 118;
                    continue _fun96134
                }
            case 112:
                var1 = '';
                return var1;
            case 118:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1["Vk9+Ez"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 179:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.YEYIbI;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 240:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.AjiGKB;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getHavenSoundControlName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12511, 1234, 2557, 2]);