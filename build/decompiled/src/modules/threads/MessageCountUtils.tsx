// modules/threads/MessageCountUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var3.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot3 = var4;
    var3 = var3.MAX_THREAD_MESSAGE_COUNT_OLD;
    var _closure1_slot4 = var3;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.compare;
        var1 = '992549565104128000';
        var0 = arg0;
        var1 = var2.bind(var3)(var1, var0);
        var0 = -1;
        var0 = var1 > var0;
        return var0;
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1() {
        _fun55484: for (var _fun55484_ip = 0;;) switch (_fun55484_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun55484_ip = 100;
                    continue _fun55484
                }
            case 12:
                var0 = 0;
                if (!(!(var4 < var0))) {
                    _fun55484_ip = 100;
                    continue _fun55484
                }
            case 18:
                var5 = _closure1_slot5;
                var0 = undefined;
                var0 = var5.bind(var0)(var3);
                if (!(var2 != var3)) {
                    _fun55484_ip = 39;
                    continue _fun55484
                }
            case 36:
                if (!var0) {
                    _fun55484_ip = 56;
                    continue _fun55484
                }
            case 39:
                var0 = _closure1_slot4;
                var2 = var4 >= var0;
                var0 = '50+';
                if (var2) {
                    _fun55484_ip = 98;
                    continue _fun55484
                }
            case 56:
                var1 = _closure1_slot3;
                var2 = var4 >= var1;
                var1 = '100k+';
                if (var2) {
                    _fun55484_ip = 95;
                    continue _fun55484
                }
            case 73:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var4);
            case 95:
                var0 = var1;
            case 98:
                return var0;
            case 100:
                var0 = '0';
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var5 = function arg0, arg1, arg2() {
        _fun55485: for (var _fun55485_ip = 0;;) switch (_fun55485_ip) {
            case 0:
                var3 = _closure1_slot6;
                var5 = undefined;
                var2 = arg0;
                var0 = arg2;
                var0 = var3.bind(var5)(var2, var0);
                var2 = '0';
                if (!(var2 !== var0)) {
                    _fun55485_ip = 79;
                    continue _fun55485
                }
            case 31:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = {};
                var2.count = var0;
                var0 = arg1;
                var0 = var3.bind(var4)(var0, var2);
                _fun55485_ip = 136;
                continue _fun55485;
            case 79:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.eXHkhl;
                var0 = var2.bind(var3)(var1);
            case 136:
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/threads/MessageCountUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.shouldUseOldMaxMessageCount = var4;
    var2.getMessageCountText = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.t;
        var2 = var0.iTS3Xe;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var1, var2, var0);
        return var0;
    };
    var2.formatMobileMessageCountLabel = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.t;
        var2 = var0.rfAXDV;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var1, var2, var0);
        return var0;
    };
    var2.formatMessageCountLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1233, 21, 1234, 2]);