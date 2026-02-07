// utils/ReportUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var5 = function arg0() {
        _fun51141: for (var _fun51141_ip = 0;;) switch (_fun51141_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun51141_ip = 66;
                    continue _fun51141
                }
            case 9:
                var3 = var2.id;
                var4 = _closure1_slot3;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var0 = var0 != var1;
                if (!var0) {
                    _fun51141_ip = 64;
                    continue _fun51141
                }
            case 37:
                var1 = var1.id;
                var1 = var1 !== var3;
                if (!var1) {
                    _fun51141_ip = 61;
                    continue _fun51141
                }
            case 49:
                var3 = var2.system;
                var2 = true;
                var1 = var2 !== var3;
            case 61:
                var0 = var1;
            case 64:
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function arg0() {
        _fun51142: for (var _fun51142_ip = 0;;) switch (_fun51142_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun51142_ip = 32;
                    continue _fun51142
                }
            case 12:
                var3 = _closure1_slot6;
                var2 = var1.author;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 32:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0() {
        _fun51143: for (var _fun51143_ip = 0;;) switch (_fun51143_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot0;
                var0 = var2.getChannel;
                var4 = var0.bind(var2)(var7);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun51143_ip = 151;
                    continue _fun51143
                }
            case 29:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.DM;
                if (!(var3 !== var2)) {
                    _fun51143_ip = 147;
                    continue _fun51143
                }
            case 48:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.GROUP_DM;
                if (!(var3 !== var2)) {
                    _fun51143_ip = 147;
                    continue _fun51143
                }
            case 67:
                var6 = _closure1_slot2;
                var5 = var6.canWithPartialContext;
                var2 = _closure1_slot5;
                var3 = var2.MANAGE_MESSAGES;
                var2 = {};
                var2.channelId = var7;
                var2 = var5.bind(var6)(var3, var2);
                if (var2) {
                    _fun51143_ip = 106;
                    continue _fun51143
                }
            case 102:
                var2 = false;
                return var2;
            case 106:
                var3 = _closure1_slot1;
                var2 = var3.getMemberCount;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var0 = var0 != var2;
                if (!var0) {
                    _fun51143_ip = 145;
                    continue _fun51143
                }
            case 138:
                var1 = 50;
                var0 = var2 >= var1;
            case 145:
                return var0;
            case 147:
                var0 = true;
                return var0;
            case 151:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.ChannelTypes;
    var _closure1_slot4 = var9;
    var6 = var6.Permissions;
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/ReportUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.canReportUser = var5;
    var2.canReportMessage = var4;
    var2.canReportAndDeleteInChannel = var3;
    var1 = function arg0() {
        _fun51144: for (var _fun51144_ip = 0;;) switch (_fun51144_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun51144_ip = 26;
                    continue _fun51144
                }
            case 12:
                var3 = _closure1_slot7;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 26:
                if (!var0) {
                    _fun51144_ip = 53;
                    continue _fun51144
                }
            case 29:
                var3 = _closure1_slot8;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 53:
                return var0;
        }
    };
    var2.canDeleteAndReportMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1599, 3093, 1621, 660, 2]);