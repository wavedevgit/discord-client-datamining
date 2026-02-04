// modules/user_settings/native/defs/NoiseSuppressionKrispSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRadio;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 4;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.t8Qhib;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.VOICE;
    var1.parent = var8;
    var8 = function() {
        _fun84874: for (var _fun84874_ip = 0;;) switch (_fun84874_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var0 = var6[var3];
                var4 = undefined;
                var10 = var5.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot2;
                var8 = new Array(1);
                var8[0] = var7;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot2;
                    var0 = var1.getNoiseSuppression;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var9.bind(var10)(var8, var0);
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot2;
                    var0 = var1.getNoiseCancellation;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.NoiseSuppressionOpt;
                if (var2) {
                    _fun84874_ip = 140;
                    continue _fun84874
                }
            case 121:
                if (var0) {
                    _fun84874_ip = 132;
                    continue _fun84874
                }
            case 124:
                var0 = var1.NONE;
                _fun84874_ip = 138;
                continue _fun84874;
            case 132:
                var0 = var1.STANDARD;
            case 138:
                _fun84874_ip = 146;
                continue _fun84874;
            case 140:
                var0 = var1.KRISP;
            case 146:
                return var0;
        }
    };
    var1.useValue = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.handleNoiseSuppressionChange;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onValueChange = var8;
    var8 = function() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 3;
        var0 = var7[var3];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var0 = var0.NoiseSuppressionOpt;
        var0 = var0.KRISP;
        var1.value = var0;
        var2 = 4;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0.rdoNzt;
        var0 = var4.bind(var8)(var0);
        var1.label = var0;
        var0 = new Array(3);
        var0[0] = var1;
        var1 = {};
        var4 = var7[var3];
        var4 = var6.bind(var5)(var4);
        var4 = var4.NoiseSuppressionOpt;
        var4 = var4.STANDARD;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.qXeYHw;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[1] = var1;
        var1 = {};
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.NoiseSuppressionOpt;
        var3 = var3.NONE;
        var1.value = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.wkYAlz;
        var2 = var3.bind(var4)(var2);
        var1.label = var2;
        var0[2] = var1;
        return var0;
    };
    var1.useOptions = var8;
    var8 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot2;
            var0 = var1.isNoiseCancellationSupported;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.usePredicate = var8;
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 4;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.hmfkCi;
        var1 = var1.bind(var2)(var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var1.additionalSearchTerms = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/NoiseSuppressionKrispSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 7008, 566, 10856, 1234, 8999, 2]);