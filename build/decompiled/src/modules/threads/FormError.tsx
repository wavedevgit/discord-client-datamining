// modules/threads/FormError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0, arg1) { // Original name: formSubmitError, environment: var1
        _fun105628: for (var _fun105628_ip = 0;;) switch (_fun105628_ip) {
            case 0:
                var2 = arg1;
                var0 = {};
                var1 = arg0;
                var0.type = var1;
                var1 = null;
                var3 = var1 != var2;
                if (!var3) {
                    _fun105628_ip = 24;
                    continue _fun105628
                }
            case 21:
                var1 = var2;
            case 24:
                var0.message = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: makeEmptyContentError, environment: var1
        var3 = _closure1_slot3;
        var0 = _closure1_slot2;
        var2 = var0.EmptyContent;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var6 = 0;
    var3.EmptyContent = var6;
    var0 = 'EmptyContent';
    var3[var6] = var0;
    var6 = 1;
    var3.AutomodViolation = var6;
    var0 = 'AutomodViolation';
    var3[var6] = var0;
    var _closure1_slot2 = var3;
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/FormError.tsx';
    var4 = var5.bind(var6)(var4);
    var2.FormSubmitErrorType = var3;
    var3 = function() { // Original name: makeEmptyTitleError, environment: var1
        var2 = _closure1_slot4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 0;
        var3 = var6[var0];
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var0 = var0.uXA573;
        var0 = var3.bind(var4)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.makeEmptyTitleError = var3;
    var3 = function() { // Original name: makeEmptyMessageError, environment: var1
        var2 = _closure1_slot4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 0;
        var3 = var6[var0];
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var0 = var0.kesTVT;
        var0 = var3.bind(var4)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.makeEmptyMessageError = var3;
    var3 = function(arg0, arg1) { // Original name: makeAutomodViolationError, environment: var1
        _fun105632: for (var _fun105632_ip = 0;;) switch (_fun105632_ip) {
            case 0:
                var0 = arg1;
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var2 = var2.AutomodViolation;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.getAutomodErrorMessageFromErrorResponse;
                var4 = null;
                var7 = var4 == var0;
                var4 = undefined;
                if (var7) {
                    _fun105632_ip = 64;
                    continue _fun105632
                }
            case 59:
                var4 = var0.id;
            case 64:
                var0 = arg0;
                var0 = var5.bind(var6)(var0, var4);
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var2.makeAutomodViolationError = var3;
    var1 = function(arg0, arg1) { // Original name: renderError, environment: var1
        _fun105633: for (var _fun105633_ip = 0;;) switch (_fun105633_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var0 = null;
                if (var4) {
                    _fun105633_ip = 99;
                    continue _fun105633
                }
            case 17:
                var5 = var2.type;
                var4 = _closure1_slot2;
                var4 = var4.EmptyContent;
                if (!(var5 === var4)) {
                    _fun105633_ip = 79;
                    continue _fun105633
                }
            case 39:
                var4 = var3.content;
                if (!(var1 != var4)) {
                    _fun105633_ip = 79;
                    continue _fun105633
                }
            case 48:
                var4 = var3.content;
                var3 = var4.trim;
                var3 = var3.bind(var4)();
                var4 = var3.length;
                var3 = 0;
                var3 = var4 > var3;
                var0 = null;
                if (var3) {
                    _fun105633_ip = 99;
                    continue _fun105633
                }
            case 79:
                var2 = var2.message;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun105633_ip = 96;
                    continue _fun105633
                }
            case 93:
                var1 = var2;
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var2.renderError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 6484, 2]);