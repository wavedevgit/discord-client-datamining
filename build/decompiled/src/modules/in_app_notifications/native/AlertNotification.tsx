// modules/in_app_notifications/native/AlertNotification.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/AlertNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AlertNotification, environment: var1
        _fun76458: for (var _fun76458_ip = 0;;) switch (_fun76458_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.notification;
                var2 = var1.key;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 3;
                var5 = var3[var4];
                var4 = undefined;
                var8 = var1.bind(var4)(var5);
                var6 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var0);
                var0 = 4;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useGuildIncidentsState;
                var0 = var0.bind(var1)(var2);
                var2 = var0.incidentData;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun76458_ip = 121;
                    continue _fun76458
                }
            case 115:
                var1 = var2.raidDetectedAt;
            case 121:
                if (!(var0 == var1)) {
                    _fun76458_ip = 184;
                    continue _fun76458
                }
            case 125:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var2 = var8[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var8[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.evRhwg;
                var5 = var2.bind(var3)(var1);
                _fun76458_ip = 241;
                continue _fun76458;
            case 184:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var2 = var9[var1];
                var2 = var8.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Mn3elp;
                var5 = var2.bind(var3)(var1);
            case 241:
                var1 = var0 == var6;
                var0 = null;
                if (var1) {
                    _fun76458_ip = 398;
                    continue _fun76458
                }
            case 253:
                var3 = _closure1_slot4;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.Notification;
                var1 = {};
                var8 = 5;
                var10 = var9[var8];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var9[var8];
                var8 = var12.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["2IY4YN"];
                var8 = var10.bind(var11)(var8);
                var1.alertLabel = var8;
                var8 = _closure1_slot1;
                var7 = 7;
                var7 = var9[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.guild = var6;
                var9 = false;
                var7.selected = var9;
                var7 = var3.bind(var4)(var8, var7);
                var1.icon = var7;
                var6 = var6.name;
                var1.label = var6;
                var1.textChildren = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 398:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 33, 632, 8689, 1234, 8735, 7355, 2]);