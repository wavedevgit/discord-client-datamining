// modules/channel/native/getChannelSubtitleData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/getChannelSubtitleData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102591: for (var _fun102591_ip = 0;;) switch (_fun102591_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun102591_ip = 188;
                    continue _fun102591
                }
            case 12:
                var3 = var2.type;
                var1 = 'embedded-activities';
                if (!(var1 !== var3)) {
                    _fun102591_ip = 165;
                    continue _fun102591
                }
            case 30:
                var1 = 'event';
                if (!(var1 !== var3)) {
                    _fun102591_ip = 165;
                    continue _fun102591
                }
            case 41:
                var1 = 'go-live';
                if (!(var1 !== var3)) {
                    _fun102591_ip = 86;
                    continue _fun102591
                }
            case 51:
                var1 = 'voice';
                if (!(var1 !== var3)) {
                    _fun102591_ip = 63;
                    continue _fun102591
                }
            case 59:
                var1 = undefined;
                return var1;
            case 63:
                var1 = {};
                var3 = var2.text;
                var1.subtitle = var3;
                var3 = var2.type;
                var1.type = var3;
                return var1;
            case 86:
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 0;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.Pa817q;
                var3 = var4.bind(var5)(var3);
                var1.subtitle = var3;
                var3 = var2.type;
                var1.type = var3;
                return var1;
            case 165:
                var1 = {};
                var3 = var2.name;
                var1.subtitle = var3;
                var2 = var2.type;
                var1.type = var2;
                return var1;
            case 188:
                return var0;
        }
    };
    var2.getChannelSubtitleData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);