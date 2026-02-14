// modules/guests/GuestUtils.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildMemberFlags;
    var _closure1_slot2 = var1;
    var1 = {};
    var3 = function arg0, arg1() {
        _fun92963: for (var _fun92963_ip = 0;;) switch (_fun92963_ip) {
            case 0:
                var6 = arg1;
                var1 = arg0;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var2 = var1().value;
                var1 = var0;
                var7 = undefined;
                var1 = var1 === var7;
                var5 = undefined;
                if (var1) {
                    _fun92963_ip = 30;
                    continue _fun92963
                }
            case 27:
                var5 = var2;
            case 30:
                if (var1) {
                    _fun92963_ip = 36;
                    continue _fun92963
                }
            case 33:
                var0.return();
            case 36:
                var1 = var6.guild;
                var8 = null;
                var0 = var8 == var1;
                if (var0) {
                    _fun92963_ip = 227;
                    continue _fun92963
                }
            case 53:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var9 = 1;
                var3 = var3[var9];
                var10 = var4.bind(var7)(var3);
                var4 = var10.hasFlag;
                var3 = var5.getSelfMember;
                var1 = var1.id;
                var3 = var3.bind(var5)(var1);
                var5 = var8 == var3;
                var1 = undefined;
                if (var5) {
                    _fun92963_ip = 112;
                    continue _fun92963
                }
            case 107:
                var1 = var3.flags;
            case 112:
                var11 = var8 != var1;
                var3 = 0;
                if (!var11) {
                    _fun92963_ip = 124;
                    continue _fun92963
                }
            case 121:
                var3 = var1;
            case 124:
                var1 = _closure1_slot2;
                var1 = var1.IS_GUEST;
                var1 = var4.bind(var10)(var3, var1);
                var1 = !var1;
                if (var1) {
                    _fun92963_ip = 224;
                    continue _fun92963
                }
            case 146:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var4 = var4.bind(var7)(var3);
                var3 = var4.hasFlag;
                var6 = var6.flags;
                var8 = var8 != var6;
                var5 = 0;
                if (!var8) {
                    _fun92963_ip = 186;
                    continue _fun92963
                }
            case 183:
                var5 = var6;
            case 186:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.GuildInviteFlags;
                var2 = var2.IS_GUEST_INVITE;
                var1 = var3.bind(var4)(var5, var2);
            case 224:
                var0 = var1;
            case 227:
                return var0;
        }
    };
    var1.canAcceptInvite = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guests/GuestUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3086, 1384, 5971, 2]);