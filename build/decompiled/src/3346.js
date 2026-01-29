// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var2 = 0;
    var3 = var5[var2];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = '%RegExp%';
    var8 = var6.bind(var0)(var3);
    var2 = var5[var2];
    var3 = var4.bind(var0)(var2);
    var2 = '%parseInt%';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var3 = var4.bind(var0)(var2);
    var2 = 'String.prototype.slice';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var3 = var5[var2];
    var6 = var4.bind(var0)(var3);
    var3 = /^0b[01]+$/i;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = var5[var2];
    var6 = var4.bind(var0)(var3);
    var3 = /^0o[0-7]+$/i;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = var5[var2];
    var6 = var4.bind(var0)(var3);
    var3 = /^[-+]0x[0-9a-f]+$/i;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var7 = ['\x85', '\u200b', ''];
    var6 = var7.join;
    var3 = '';
    var6 = var6.bind(var7)(var3);
    var3 = '[';
    var7 = var3 + var6;
    var3 = var8.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var3 = ']';
    var10 = var7 + var3;
    var9 = 'g';
    var11 = var6;
    var3 = new var11[var8](var10, var9, var8);
    var3 = var3 instanceof Object ? var3 : var6;
    var2 = var5[var2];
    var2 = var4.bind(var0)(var2);
    var2 = var2.bind(var0)(var3);
    var _closure1_slot7 = var2;
    var2 = function(arg0) { // Original name: StringToNumber, environment: var1
        _fun28915: for (var _fun28915_ip = 0;;) switch (_fun28915_ip) {
            case 0:
                var4 = arg0;
                var1 = 'string';
                var0 = typeof var4;
                if (!(var1 === var0)) {
                    _fun28915_ip = 187;
                    continue _fun28915
                }
            case 17:
                var1 = _closure1_slot4;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun28915_ip = 159;
                    continue _fun28915
                }
            case 37:
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun28915_ip = 128;
                    continue _fun28915
                }
            case 49:
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun28915_ip = 118;
                    continue _fun28915
                }
            case 61:
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun28915_ip = 118;
                    continue _fun28915
                }
            case 73:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var5 = var1.bind(var3)(var4);
                if (!(var5 === var4)) {
                    _fun28915_ip = 107;
                    continue _fun28915
                }
            case 102:
                var1 = var4 - 0;
                _fun28915_ip = 116;
                continue _fun28915;
            case 107:
                var2 = _closure1_slot8;
                var1 = var2.bind(var3)(var5);
            case 116:
                return var1;
            case 118:
                var1 = global;
                var1 = var1.NaN;
                return var1;
            case 128:
                var5 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 8;
                var1 = var5.bind(var3)(var2, var1);
                var1 = var1 - 0;
                return var1;
            case 159:
                var2 = _closure1_slot2;
                var0 = _closure1_slot3;
                var1 = 2;
                var0 = var0.bind(var3)(var4, var1);
                var0 = var2.bind(var3)(var0, var1);
                var0 = var0 - 0;
                return var0;
            case 187:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'Assertion failed: `argument` is not a String';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot8 = var2;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 551, 1395, 518, 3347]);