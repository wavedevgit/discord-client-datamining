// actions/FriendsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FRIENDS_SET_SECTION';
        var1.type = var4;
        var4 = arg0;
        var1.section = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot3 = var1;
    var1 = {};
    var7 = function arg0() {
        _fun114103: for (var _fun114103_ip = 0;;) switch (_fun114103_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun114103_ip = 14;
                    continue _fun114103
                }
            case 12:
                var1 = {};
            case 14:
                var2 = var1.explicit;
                if (!(var2 === var0)) {
                    _fun114103_ip = 26;
                    continue _fun114103
                }
            case 24:
                var2 = false;
            case 26:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 2;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.getHistory;
                var4 = var4.bind(var5)();
                var4 = var4.location;
                var5 = var4.pathname;
                var4 = _closure1_slot3;
                var4 = var4.FRIENDS;
                if (!(var5 !== var4)) {
                    _fun114103_ip = 122;
                    continue _fun114103
                }
            case 84:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var6 = var5.bind(var0)(var4);
                var5 = var6.transitionTo;
                var4 = _closure1_slot3;
                var4 = var4.FRIENDS;
                var4 = var5.bind(var6)(var4);
            case 122:
                var4 = _closure1_slot4;
                var4 = var4.bind(var0)(var3);
                if (!var2) {
                    _fun114103_ip = 166;
                    continue _fun114103
                }
            case 134:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = {};
                var1.tab_opened = var3;
                var1 = var2.bind(var0)(var1);
            case 166:
                return var0;
        }
    };
    var1.transitionToSection = var7;
    var1.setSection = var6;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FRIENDS_SET_INITIAL_SECTION';
        var1.type = var4;
        var4 = arg0;
        var1.section = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setInitialSection = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/FriendsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 1220, 13845, 2]);