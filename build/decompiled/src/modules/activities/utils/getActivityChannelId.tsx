// modules/activities/utils/getActivityChannelId.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.isTextChannel;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getActivityChannelId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91661: for (var _fun91661_ip = 0;;) switch (_fun91661_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var6 = var0.userId;
                var7 = var0.activity;
                var1 = _closure1_slot1;
                var0 = var1.getChannel;
                var4 = var0.bind(var1)(var5);
                var2 = null;
                var1 = var2 == var7;
                var0 = undefined;
                var8 = undefined;
                if (var1) {
                    _fun91661_ip = 55;
                    continue _fun91661
                }
            case 49:
                var8 = var7.session_id;
            case 55:
                var1 = var5;
                if (!(var2 != var8)) {
                    _fun91661_ip = 134;
                    continue _fun91661
                }
            case 62:
                if (!(var2 != var4)) {
                    _fun91661_ip = 86;
                    continue _fun91661
                }
            case 66:
                var8 = _closure1_slot0;
                var4 = var4.type;
                var4 = var8.bind(var0)(var4);
                var1 = var5;
                if (var4) {
                    _fun91661_ip = 134;
                    continue _fun91661
                }
            case 86:
                var5 = _closure1_slot2;
                var4 = var5.getVoiceStateForSession;
                var8 = var2 == var7;
                var3 = undefined;
                if (var8) {
                    _fun91661_ip = 111;
                    continue _fun91661
                }
            case 105:
                var3 = var7.session_id;
            case 111:
                var4 = var4.bind(var5)(var6, var3);
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun91661_ip = 131;
                    continue _fun91661
                }
            case 126:
                var3 = var4.channelId;
            case 131:
                var1 = var3;
            case 134:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun91661_ip = 146;
                    continue _fun91661
                }
            case 143:
                var0 = var1;
            case 146:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 3482, 2]);