// modules/channel/getChannelIcon.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/getChannelIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getChannelIconURL, environment: var1
        _fun48130: for (var _fun48130_ip = 0;;) switch (_fun48130_ip) {
            case 0:
                var1 = arg0;
                var5 = arguments[1];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun48130_ip = 15;
                    continue _fun48130
                }
            case 12:
                var5 = 32;
            case 15:
                var3 = var1.type;
                var2 = _closure1_slot5;
                var2 = var2.DM;
                if (!(var2 !== var3)) {
                    _fun48130_ip = 124;
                    continue _fun48130
                }
            case 37:
                var2 = _closure1_slot5;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var3)) {
                    _fun48130_ip = 53;
                    continue _fun48130
                }
            case 51:
                return var4;
            case 53:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.getChannelIconURL;
                var2 = {};
                var7 = var1.id;
                var2.id = var7;
                var7 = var1.icon;
                var2.icon = var7;
                var7 = var1.getApplicationId;
                var7 = var7.bind(var1)();
                var2.applicationId = var7;
                var2.size = var5;
                var2 = var3.bind(var6)(var2);
                return var2;
            case 124:
                var3 = var1.recipients;
                var2 = var3.map;
                var1 = _closure1_slot4;
                var1 = var1.getUser;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var3 = var1[var0];
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun48130_ip = 230;
                    continue _fun48130
                }
            case 214:
                var2 = var3.getAvatarURL;
                var1 = arguments[2];
                var0 = var2.bind(var3)(var4, var5, var1);
            case 230:
                return var0;
        }
    };
    var2.getChannelIconURL = var3;
    var1 = function(arg0) { // Original name: getChannelIconSource, environment: var1
        _fun48131: for (var _fun48131_ip = 0;;) switch (_fun48131_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var2 = _closure1_slot5;
                var2 = var2.DM;
                if (!(var2 !== var3)) {
                    _fun48131_ip = 119;
                    continue _fun48131
                }
            case 25:
                var2 = _closure1_slot5;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var3)) {
                    _fun48131_ip = 43;
                    continue _fun48131
                }
            case 39:
                var2 = undefined;
                return var2;
            case 43:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getChannelIconSource;
                var2 = {};
                var5 = var1.id;
                var2.id = var5;
                var5 = var1.icon;
                var2.icon = var5;
                var5 = var1.getApplicationId;
                var5 = var5.bind(var1)();
                var2.applicationId = var5;
                var5 = 128;
                var2.size = var5;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 119:
                var3 = var1.recipients;
                var2 = var3.map;
                var1 = _closure1_slot4;
                var1 = var1.getUser;
                var4 = var2.bind(var3)(var1);
                var2 = var4.filter;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var2 = var1[var0];
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun48131_ip = 222;
                    continue _fun48131
                }
            case 211:
                var1 = var2.getAvatarSource;
                var0 = var1.bind(var2)(var3);
            case 222:
                return var0;
        }
    };
    var2.getChannelIconSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1613, 660, 1304, 1417, 2]);