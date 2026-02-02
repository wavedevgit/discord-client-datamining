// modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'bottom': 4294967293,
        'right': 4294967293,
        'height': 22,
        'width': 22,
        'borderColor': null,
        'borderWidth': 3,
        'borderRadius': 11,
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var9;
    var3.badgeImageContainer = var8;
    var8 = {
        'height': 16,
        'width': 16
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.DARK_1_LIGHT_08;
    var8.opacity = var9;
    var3.badgeImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100918: for (var _fun100918_ip = 0;;) switch (_fun100918_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.style;
                var1 = var0.joinRequestState;
                var0 = _closure1_slot5;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 6;
                var0 = var0[var3];
                var0 = var2.bind(var4)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.REJECTED;
                if (!(var0 !== var1)) {
                    _fun100918_ip = 233;
                    continue _fun100918
                }
            case 66:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var2.bind(var4)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.SUBMITTED;
                if (!(var0 !== var1)) {
                    _fun100918_ip = 211;
                    continue _fun100918
                }
            case 99:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var2.bind(var4)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.STARTED;
                if (!(var0 !== var1)) {
                    _fun100918_ip = 189;
                    continue _fun100918
                }
            case 132:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var2.bind(var4)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.APPROVED;
                var8 = null;
                if (!(var0 === var1)) {
                    _fun100918_ip = 253;
                    continue _fun100918
                }
            case 167:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var8 = var1.bind(var4)(var0);
                _fun100918_ip = 253;
                continue _fun100918;
            case 189:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var8 = var1.bind(var4)(var0);
                _fun100918_ip = 253;
                continue _fun100918;
            case 211:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var8 = var1.bind(var4)(var0);
                _fun100918_ip = 253;
                continue _fun100918;
            case 233:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var8 = var1.bind(var4)(var0);
            case 253:
                var0 = null;
                var1 = var0 == var8;
                if (var1) {
                    _fun100918_ip = 355;
                    continue _fun100918
                }
            case 262:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = 'none';
                var1.pointerEvents = var6;
                var10 = var7.badgeImageContainer;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var9;
                var1.style = var6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 11;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.source = var8;
                var7 = var7.badgeImage;
                var5.style = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 355:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4837, 3177, 13104, 13105, 13106, 11618, 4669, 2]);