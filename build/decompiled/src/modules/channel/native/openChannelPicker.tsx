// modules/channel/native/openChannelPicker.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/openChannelPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77377: for (var _fun77377_ip = 0;;) switch (_fun77377_ip) {
            case 0:
                var4 = arg0;
                var6 = var4.selectedChannel;
                var11 = var4.guildId;
                var5 = var4.channelType;
                var10 = var4.filterFn;
                var0 = undefined;
                if (!(var10 === var0)) {
                    _fun77377_ip = 41;
                    continue _fun77377
                }
            case 34:
                var10 = function() {
                    var0 = true;
                    return var0;
                };
            case 41:
                var12 = var4.onClose;
                var2 = {
                    'selectedChannel': 0,
                    'guildId': 0,
                    'channelType': 0,
                    'filterFn': 0,
                    'onClose': 0
                };
                var3 = null;
                var20 = var2;
                var19 = null;
                var1 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var4;
                var18 = var2;
                var1 = copyDataProperties(var20, var19, var18);
                var8 = _closure1_slot4;
                var4 = var8.getGuild;
                var8 = var4.bind(var8)(var11);
                var9 = _closure1_slot3;
                var4 = var9.getChannels;
                var4 = var4.bind(var9)(var11);
                var9 = var4[var5];
                if (!(var3 == var9)) {
                    _fun77377_ip = 128;
                    continue _fun77377
                }
            case 124:
                var9 = new Array(0);
            case 128:
                var4 = _closure1_slot1;
                var17 = _closure1_slot2;
                var3 = 2;
                var3 = var17[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var16 = _closure1_slot0;
                var2 = 4;
                var2 = var17[var2];
                var11 = var16.bind(var0)(var2);
                var2 = 3;
                var3 = var17[var2];
                var2 = var17.paths;
                var3 = var11.bind(var0)(var3, var2);
                var2 = {};
                var11 = {};
                var13 = 5;
                var14 = var17[var13];
                var14 = var16.bind(var0)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var0)(var13);
                var13 = var13.t;
                var13 = var13.r2ptsz;
                var13 = var14.bind(var15)(var13);
                var11.title = var13;
                var11.onClose = var12;
                var2.header = var11;
                var2.guild = var8;
                var8 = var9.filter;
                var9 = var8.bind(var9)(var10);
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.channel;
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var2.channels = var7;
                var2.selectedChannel = var6;
                var20 = var2;
                var19 = var1;
                var1 = copyDataProperties(var20, var19);
                var1 = 'ChannelPicker';
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1673, 1410, 3279, 9859, 1307, 1234, 2]);