// modules/video_calls/getParticipantTitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/getParticipantTitle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun69061: for (var _fun69061_ip = 0;;) switch (_fun69061_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = arg2;
                var5 = var0.type;
                var4 = _closure1_slot4;
                var4 = var4.ACTIVITY;
                if (!(var5 !== var4)) {
                    _fun69061_ip = 223;
                    continue _fun69061
                }
            case 34:
                var8 = _closure1_slot3;
                var6 = var8.isGuestOrLurker;
                var5 = var1.guild_id;
                var9 = var0.user;
                var4 = null;
                var10 = var4 == var9;
                var7 = undefined;
                var4 = undefined;
                if (var10) {
                    _fun69061_ip = 72;
                    continue _fun69061
                }
            case 67:
                var4 = var9.id;
            case 72:
                var4 = var6.bind(var8)(var5, var4);
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 2;
                var5 = var8[var5];
                var8 = var6.bind(var7)(var5);
                var6 = var8.getName;
                var5 = var1.getGuildId;
                var5 = var5.bind(var1)();
                var1 = var1.id;
                var0 = var0.user;
                var1 = var6.bind(var8)(var5, var1, var0);
                var0 = '';
                if (!var4) {
                    _fun69061_ip = 217;
                    continue _fun69061
                }
            case 138:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 3;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3["pFO/Ph"];
                var5 = var4.bind(var5)(var3);
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = ' ';
                var0 = var4.bind(var3)(var5);
            case 217:
                var0 = var1 + var0;
                return var0;
            case 223:
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun69061_ip = 239;
                    continue _fun69061
                }
            case 234:
                var1 = var2.name;
            case 239:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun69061_ip = 251;
                    continue _fun69061
                }
            case 248:
                var0 = var1;
            case 251:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 3482, 3920, 1234, 2]);