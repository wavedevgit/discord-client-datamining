// modules/channel/native/components/CreateChannelTypeDescription.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildProfileFetchStatus;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/components/CreateChannelTypeDescription.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CreateChannelTypeDescription, environment: var1
        _fun65538: for (var _fun65538_ip = 0;;) switch (_fun65538_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildId;
                var6 = var0.channelType;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.useGuildProfile;
                var0 = var0.bind(var1)(var9);
                var1 = var0.guildProfile;
                var8 = var0.fetchGuildProfile;
                var _closure2_slot0 = var8;
                var3 = var0.fetchStatus;
                var0 = _closure1_slot4;
                var0 = var0.FETCHED;
                var7 = var3 !== var0;
                var0 = null;
                var3 = var0 != var1;
                if (!var3) {
                    _fun65538_ip = 145;
                    continue _fun65538
                }
            case 97:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 6;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.GuildProfileVisibilitySets;
                var11 = var10.VISIBLE;
                var10 = var11.has;
                var1 = var1.visibility;
                var3 = var10.bind(var11)(var1);
            case 145:
                var1 = !var7;
                if (var7) {
                    _fun65538_ip = 154;
                    continue _fun65538
                }
            case 151:
                var1 = !var3;
            case 154:
                if (!var1) {
                    _fun65538_ip = 171;
                    continue _fun65538
                }
            case 157:
                var3 = _closure1_slot5;
                var3 = var3.GUILD_ANNOUNCEMENT;
                var1 = var6 === var3;
            case 171:
                var7 = _closure1_slot2;
                var6 = var7.useEffect;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var2 = function() { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var3);
                var0 = null;
                if (!var1) {
                    _fun65538_ip = 326;
                    continue _fun65538
                }
            case 210:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 7;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var7 = 8;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["2Ab4Id"];
                var7 = var8.bind(var9)(var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 326:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7338, 660, 33, 7343, 7342, 3895, 1234, 2]);