// actions/ConsentActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun82166: for (var _fun82166_ip = 0;;) switch (_fun82166_ip) {
            case 0:
                var0 = arg0;
                var3 = null;
                var1 = var3 != var0;
                if (!var1) {
                    _fun82166_ip = 21;
                    continue _fun82166
                }
            case 12:
                var2 = var0.body;
                var1 = var3 != var2;
            case 21:
                if (!var1) {
                    _fun82166_ip = 90;
                    continue _fun82166
                }
            case 24:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'UPDATE_CONSENTS';
                var1.type = var4;
                var4 = {};
                var6 = var0.body;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var1.consents = var4;
                var1 = var2.bind(var3)(var1);
            case 90:
                var0 = var0.body;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun82167: for (var _fun82167_ip = 0;;) switch (_fun82167_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.status;
                var1 = 500;
                if (!(var2 >= var1)) {
                    _fun82167_ip = 33;
                    continue _fun82167
                }
            case 18:
                var2 = var0.status;
                var1 = 599;
                if (!(!(var2 <= var1))) {
                    _fun82167_ip = 136;
                    continue _fun82167
                }
            case 33:
                var2 = null;
                if (!(var2 != var0)) {
                    _fun82167_ip = 62;
                    continue _fun82167
                }
            case 39:
                var1 = var0.body;
                if (!(var2 != var1)) {
                    _fun82167_ip = 62;
                    continue _fun82167
                }
            case 48:
                var1 = var0.body;
                var1 = var1.message;
                if (!(var2 == var1)) {
                    _fun82167_ip = 124;
                    continue _fun82167
                }
            case 62:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.cvJdtg;
                var2 = var2.bind(var3)(var1);
                _fun82167_ip = 134;
                continue _fun82167;
            case 124:
                var0 = var0.body;
                var2 = var0.message;
            case 134:
                _fun82167_ip = 196;
                continue _fun82167;
            case 136:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var1 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.intl;
                var1 = var3.string;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.cvJdtg;
                var2 = var1.bind(var3)(var0);
            case 196:
                var0 = global;
                var0 = var0.Error;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var7 = var2;
                var0 = new var8[var0](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ConsentActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var4 = _closure1_slot3;
        var4 = var4.SETTINGS_CONSENT;
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = _closure1_slot4;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = arg0;
            var0 = var0.body;
            var5 = var0.message;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.fetchConsents = var3;
    var1 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot3;
        var4 = var4.SETTINGS_CONSENT;
        var1.url = var4;
        var4 = {};
        var5 = arg0;
        var4.grant = var5;
        var5 = arg1;
        var4.revoke = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = _closure1_slot4;
        var0 = _closure1_slot5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.setConsents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 1234, 507, 2]);