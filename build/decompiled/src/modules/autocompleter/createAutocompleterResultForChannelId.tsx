// modules/autocompleter/createAutocompleterResultForChannelId.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutocompleterResultTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/autocompleter/createAutocompleterResultForChannelId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55047: for (var _fun55047_ip = 0;;) switch (_fun55047_ip) {
            case 0:
                var2 = arguments[1];
                var4 = arguments[2];
                var3 = arguments[3];
                var7 = undefined;
                if (!(var2 === var7)) {
                    _fun55047_ip = 22;
                    continue _fun55047
                }
            case 15:
                var2 = _closure1_slot2;
            case 22:
                if (!(var4 === var7)) {
                    _fun55047_ip = 33;
                    continue _fun55047
                }
            case 26:
                var4 = _closure1_slot4;
            case 33:
                if (!(var3 === var7)) {
                    _fun55047_ip = 44;
                    continue _fun55047
                }
            case 37:
                var3 = _closure1_slot3;
            case 44:
                var1 = var2.getChannel;
                var0 = arg0;
                var6 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun55047_ip = 339;
                    continue _fun55047
                }
            case 66:
                var2 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var2 = var2.bind(var7)(var1);
                var1 = var2.computeChannelName;
                var3 = var1.bind(var2)(var6, var4, var3);
                var2 = var6.type;
                var1 = _closure1_slot6;
                var1 = var1.DM;
                if (!(var1 !== var2)) {
                    _fun55047_ip = 271;
                    continue _fun55047
                }
            case 124:
                var1 = _closure1_slot6;
                var1 = var1.GROUP_DM;
                if (!(var1 !== var2)) {
                    _fun55047_ip = 236;
                    continue _fun55047
                }
            case 138:
                var1 = _closure1_slot6;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var2)) {
                    _fun55047_ip = 201;
                    continue _fun55047
                }
            case 152:
                var1 = _closure1_slot6;
                var1 = var1.GUILD_STAGE_VOICE;
                if (!(var1 !== var2)) {
                    _fun55047_ip = 201;
                    continue _fun55047
                }
            case 166:
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.TEXT_CHANNEL;
                var1.type = var2;
                var1.record = var6;
                var2 = 0;
                var1.score = var2;
                var1.comparator = var3;
                return var1;
            case 201:
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.VOICE_CHANNEL;
                var1.type = var2;
                var1.record = var6;
                var2 = 0;
                var1.score = var2;
                var1.comparator = var3;
                return var1;
            case 236:
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.GROUP_DM;
                var1.type = var2;
                var1.record = var6;
                var2 = 0;
                var1.score = var2;
                var1.comparator = var3;
                return var1;
            case 271:
                var2 = var4.getUser;
                var1 = var6.getRecipientId;
                var1 = var1.bind(var6)();
                var4 = var2.bind(var4)(var1);
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun55047_ip = 337;
                    continue _fun55047
                }
            case 301:
                var2 = {};
                var5 = _closure1_slot5;
                var5 = var5.USER;
                var2.type = var5;
                var2.record = var4;
                var4 = 0;
                var2.score = var4;
                var2.comparator = var3;
                var1 = var2;
            case 337:
                return var1;
            case 339:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3061, 1613, 5563, 660, 4757, 2]);