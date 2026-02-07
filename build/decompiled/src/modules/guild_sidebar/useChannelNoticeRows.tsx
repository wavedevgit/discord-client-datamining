// modules/guild_sidebar/useChannelNoticeRows.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var3.ChannelListChannelNoticeRow;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MFALevels;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/useChannelNoticeRows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var4 = var2.id;
        var _closure2_slot1 = var4;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var5 = 6;
        var6 = var8[var5];
        var3 = undefined;
        var11 = var7.bind(var3)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot3;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.hasProgress;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var10.bind(var11)(var9, var6);
        var _closure2_slot2 = var6;
        var10 = _closure1_slot5;
        var9 = var10.getCurrentUser;
        var12 = var9.bind(var10)();
        var _closure2_slot3 = var12;
        var5 = var8[var5];
        var11 = var7.bind(var3)(var5);
        var10 = var11.useStateFromStores;
        var5 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = new Array(3);
        var5[0] = var12;
        var2 = var2.mfaLevel;
        var5[1] = var2;
        var5[2] = var4;
        var2 = function() { // Environment: var0
            _fun103316: for (var _fun103316_ip = 0;;) switch (_fun103316_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun103316_ip = 43;
                        continue _fun103316
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var3 = var2.mfaLevel;
                    var2 = _closure1_slot7;
                    var2 = var2.ELEVATED;
                    var0 = var3 === var2;
                case 43:
                    if (!var0) {
                        _fun103316_ip = 59;
                        continue _fun103316
                    }
                case 46:
                    var2 = _closure2_slot3;
                    var2 = var2.mfaEnabled;
                    var0 = !var2;
                case 59:
                    if (!var0) {
                        _fun103316_ip = 84;
                        continue _fun103316
                    }
                case 62:
                    var3 = _closure1_slot4;
                    var2 = var3.hasElevatedPermissions;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 84:
                    return var0;
            }
        };
        var5 = var10.bind(var11)(var9, var2, var5);
        var _closure2_slot4 = var5;
        var2 = 7;
        var2 = var8[var2];
        var3 = var7.bind(var3)(var2);
        var2 = var3.useGuildHasLiveChannelNotice;
        var4 = var2.bind(var3)(var4);
        var _closure2_slot5 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun103317: for (var _fun103317_ip = 0;;) switch (_fun103317_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var2 = var0.SPACER;
                    var0 = new Array(1);
                    var0[0] = var2;
                    var3 = _closure2_slot2;
                    if (var3) {
                        _fun103317_ip = 60;
                        continue _fun103317
                    }
                case 31:
                    var3 = _closure2_slot4;
                    if (!var3) {
                        _fun103317_ip = 80;
                        continue _fun103317
                    }
                case 38:
                    var4 = var0.push;
                    var3 = _closure1_slot6;
                    var3 = var3.MFA_WARNING;
                    var3 = var4.bind(var0)(var3);
                    _fun103317_ip = 80;
                    continue _fun103317;
                case 60:
                    var4 = var0.push;
                    var3 = _closure1_slot6;
                    var3 = var3.GUILD_PROGRESS;
                    var3 = var4.bind(var0)(var3);
                case 80:
                    var2 = _closure2_slot5;
                    if (!var2) {
                        _fun103317_ip = 107;
                        continue _fun103317
                    }
                case 87:
                    var2 = var0.push;
                    var1 = _closure1_slot6;
                    var1 = var1.LIVE_CHANNEL_NOTICE;
                    var1 = var2.bind(var0)(var1);
                case 107:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10321, 1673, 1621, 4578, 660, 632, 13346, 2]);