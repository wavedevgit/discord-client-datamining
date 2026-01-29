// modules/game_console/getXboxURIForChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.XBOX_HANDOFF_SEARCH_PARAMS;
    var _closure1_slot6 = var6;
    var3 = var3.XBOX_URL_BASE;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Endpoints;
    var _closure1_slot8 = var6;
    var3 = var3.ZERO_STRING_GUILD_ID;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/getXboxURIForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: getXboxURIForChannel, environment: var1
        _fun66898: for (var _fun66898_ip = 0;;) switch (_fun66898_ip) {
            case 0:
                var12 = arg0;
                var0 = arg1;
                var4 = var0.nonce;
                var0 = var0.forQRCode;
                var1 = var12.getGuildId;
                var5 = var1.bind(var12)();
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var8 = var2.bind(var3)(var5);
                var3 = _closure1_slot6;
                var2 = {};
                var7 = null;
                if (!(var7 == var5)) {
                    _fun66898_ip = 61;
                    continue _fun66898
                }
            case 57:
                var5 = _closure1_slot9;
            case 61:
                var2.guildId = var5;
                var5 = var12.id;
                var2.channelId = var5;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 6;
                var6 = var6[var5];
                var5 = undefined;
                var11 = var9.bind(var5)(var6);
                var10 = var11.computeChannelName;
                var9 = _closure1_slot5;
                var6 = _closure1_slot4;
                var6 = var10.bind(var11)(var12, var9, var6);
                var2.channelName = var6;
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun66898_ip = 136;
                    continue _fun66898
                }
            case 131:
                var6 = var8.name;
            case 136:
                if (!(var7 == var6)) {
                    _fun66898_ip = 195;
                    continue _fun66898
                }
            case 140:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 7;
                var8 = var11[var7];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.LJpTRF;
                var6 = var8.bind(var9)(var7);
            case 195:
                var2.guildName = var6;
                var7 = _closure1_slot3;
                var6 = var7.isSelfMute;
                var6 = var6.bind(var7)();
                var2.muted = var6;
                var6 = var7.isSelfDeaf;
                var6 = var6.bind(var7)();
                var2.deafened = var6;
                var2.nonce = var4;
                var2 = var3.bind(var5)(var2);
                if (var0) {
                    _fun66898_ip = 290;
                    continue _fun66898
                }
            case 247:
                var7 = _closure1_slot7;
                var0 = var2.toString;
                var6 = var0.bind(var2)();
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '';
                var0 = '?';
                var0 = var4.bind(var3)(var7, var0, var6);
                _fun66898_ip = 364;
                continue _fun66898;
            case 290:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getAPIBaseURL;
                var16 = var3.bind(var4)();
                var1 = _closure1_slot8;
                var15 = var1.XBOX_HANDOFF;
                var1 = var2.toString;
                var13 = var1.bind(var2)();
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var17 = '';
                var14 = '?';
                var0 = var17[var3](var16, var15, var14, var13, var12);
            case 364:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3435, 3059, 1613, 5296, 660, 4748, 1234, 507, 2]);