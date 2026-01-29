// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: toCompany, environment: var3
        _fun38221: for (var _fun38221_ip = 0;;) switch (_fun38221_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.toLowerCase;
                var2 = var1.bind(var0)();
                var1 = 'appl';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 113;
                    continue _fun38221
                }
            case 23:
                var1 = 'adbe';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 105;
                    continue _fun38221
                }
            case 33:
                var1 = 'msft';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 99;
                    continue _fun38221
                }
            case 43:
                var1 = 'sunw';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 91;
                    continue _fun38221
                }
            case 53:
                var1 = 'sgi';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 83;
                    continue _fun38221
                }
            case 63:
                var1 = 'tgnt';
                if (!(var1 !== var2)) {
                    _fun38221_ip = 75;
                    continue _fun38221
                }
            case 73:
                return var0;
            case 75:
                var0 = 'Taligent';
                return var0;
            case 83:
                var0 = 'Silicon Graphics';
                return var0;
            case 91:
                var0 = 'Sun Microsystems';
                return var0;
            case 99:
                var0 = 'Microsoft';
                return var0;
            case 105:
                var0 = 'Adobe';
                return var0;
            case 113:
                var0 = 'Apple';
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = {};
    var4 = 'Preferred CMM type';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var4 = function(arg0) { // Original name: description, environment: var3
        _fun38223: for (var _fun38223_ip = 0;;) switch (_fun38223_ip) {
            case 0:
                var3 = arg0;
                var0 = '';
                var1 = null;
                if (!(var1 !== var3)) {
                    _fun38223_ip = 27;
                    continue _fun38223
                }
            case 13:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 27:
                return var0;
        }
    };
    var2.description = var4;
    var0[4] = var2;
    var2 = {};
    var4 = 'Profile Version';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var5 = arg0;
        var6 = arg1;
        var0 = var5.getUint8;
        var1 = var0.bind(var5)(var6);
        var0 = var1.toString;
        var4 = 10;
        var0 = var0.bind(var1)(var4);
        var2 = '.';
        var3 = var0 + var2;
        var7 = var5.getUint8;
        var1 = 1;
        var0 = var6 + var1;
        var7 = var7.bind(var5)(var0);
        var0 = 4;
        var7 = var7 >> var0;
        var0 = var7.toString;
        var0 = var0.bind(var7)(var4);
        var0 = var3 + var0;
        var3 = var5.getUint8;
        var1 = var6 + var1;
        var3 = var3.bind(var5)(var1);
        var1 = 16;
        var3 = var3 % var1;
        var1 = var3.toString;
        var1 = var1.bind(var3)(var4);
        var0 = var0 + var2;
        var0 = var0 + var1;
        return var0;
    };
    var2.value = var4;
    var0[8] = var2;
    var2 = {};
    var4 = 'Profile/Device class';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var4 = function(arg0) { // Original name: description, environment: var3
        _fun38226: for (var _fun38226_ip = 0;;) switch (_fun38226_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.toLowerCase;
                var2 = var1.bind(var0)();
                var1 = 'scnr';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 215;
                    continue _fun38226
                }
            case 26:
                var1 = 'mntr';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 207;
                    continue _fun38226
                }
            case 39:
                var1 = 'prtr';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 199;
                    continue _fun38226
                }
            case 52:
                var1 = 'link';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 191;
                    continue _fun38226
                }
            case 63:
                var1 = 'abst';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 183;
                    continue _fun38226
                }
            case 73:
                var1 = 'spac';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 175;
                    continue _fun38226
                }
            case 83:
                var1 = 'nmcl';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 167;
                    continue _fun38226
                }
            case 93:
                var1 = 'cenc';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 159;
                    continue _fun38226
                }
            case 103:
                var1 = 'mid ';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 151;
                    continue _fun38226
                }
            case 113:
                var1 = 'mlnk';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 143;
                    continue _fun38226
                }
            case 123:
                var1 = 'mvis';
                if (!(var1 !== var2)) {
                    _fun38226_ip = 135;
                    continue _fun38226
                }
            case 133:
                return var0;
            case 135:
                var0 = 'MultiplexVisualization profile';
                return var0;
            case 143:
                var0 = 'MultiplexLink profile';
                return var0;
            case 151:
                var0 = 'MultiplexIdentification profile';
                return var0;
            case 159:
                var0 = 'ColorEncodingSpace profile';
                return var0;
            case 167:
                var0 = 'NamedColor profile';
                return var0;
            case 175:
                var0 = 'ColorSpace profile';
                return var0;
            case 183:
                var0 = 'Abstract profile';
                return var0;
            case 191:
                var0 = 'DeviceLink profile';
                return var0;
            case 199:
                var0 = 'Output Device profile';
                return var0;
            case 207:
                var0 = 'Display Device profile';
                return var0;
            case 215:
                var0 = 'Input Device profile';
                return var0;
        }
    };
    var2.description = var4;
    var0[12] = var2;
    var2 = {};
    var4 = 'Color Space';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var0[16] = var2;
    var2 = {};
    var4 = 'Connection Space';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var0[20] = var2;
    var2 = {};
    var4 = 'ICC Profile Date';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = arg0;
        var3 = arg1;
        var0 = var2.getUint16;
        var8 = var0.bind(var2)(var3);
        var1 = var2.getUint16;
        var0 = 2;
        var0 = var3 + var0;
        var1 = var1.bind(var2)(var0);
        var0 = 1;
        var13 = var1 - var0;
        var1 = var2.getUint16;
        var0 = 4;
        var0 = var3 + var0;
        var12 = var1.bind(var2)(var0);
        var1 = var2.getUint16;
        var0 = 6;
        var0 = var3 + var0;
        var11 = var1.bind(var2)(var0);
        var1 = var2.getUint16;
        var0 = 8;
        var0 = var3 + var0;
        var10 = var1.bind(var2)(var0);
        var1 = var2.getUint16;
        var0 = 10;
        var0 = var3 + var0;
        var9 = var1.bind(var2)(var0);
        var0 = global;
        var2 = var0.Date;
        var1 = var0.Date;
        var0 = var1.UTC;
        var15 = var1;
        var14 = var8;
        var14 = var15[var0](var14, var13, var12, var11, var10, var9, var8);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var15 = var1;
        var0 = new var15[var2](var14, var13);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var1.toISOString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.value = var4;
    var0[24] = var2;
    var2 = {};
    var4 = 'ICC Signature';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var3 = arg1;
        var0 = arg0;
        var2 = var0.buffer;
        var1 = var2.slice;
        var0 = 4;
        var0 = var3 + var0;
        var6 = var1.bind(var2)(var3, var0);
        var0 = global;
        var1 = var0.String;
        var3 = var1.fromCharCode;
        var2 = var3.apply;
        var0 = var0.Uint8Array;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var7 = var1;
        var0 = new var7[var0](var6, var5);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = null;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.value = var4;
    var0[36] = var2;
    var2 = {};
    var4 = 'Primary Platform';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var4 = function(arg0) { // Original name: description, environment: var3
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.description = var4;
    var0[40] = var2;
    var2 = {};
    var4 = 'Device Manufacturer';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var4 = function(arg0) { // Original name: description, environment: var3
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.description = var4;
    var0[48] = var2;
    var2 = {};
    var4 = 'Device Model Number';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var4;
    var0[52] = var2;
    var2 = {};
    var4 = 'Rendering Intent';
    var2.name = var4;
    var4 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = arg0;
        var1 = var2.getUint32;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.value = var4;
    var4 = function(arg0) { // Original name: description, environment: var3
        _fun38237: for (var _fun38237_ip = 0;;) switch (_fun38237_ip) {
            case 0:
                var0 = arg0;
                var1 = 0;
                if (!(var1 !== var0)) {
                    _fun38237_ip = 54;
                    continue _fun38237
                }
            case 9:
                var1 = 1;
                if (!(var1 !== var0)) {
                    _fun38237_ip = 46;
                    continue _fun38237
                }
            case 16:
                var1 = 2;
                if (!(var1 !== var0)) {
                    _fun38237_ip = 40;
                    continue _fun38237
                }
            case 23:
                var1 = 3;
                if (!(var1 !== var0)) {
                    _fun38237_ip = 32;
                    continue _fun38237
                }
            case 30:
                return var0;
            case 32:
                var0 = 'Absolute Colorimetric';
                return var0;
            case 40:
                var0 = 'Saturation';
                return var0;
            case 46:
                var0 = 'Relative Colorimetric';
                return var0;
            case 54:
                var0 = 'Perceptual';
                return var0;
        }
    };
    var2.description = var4;
    var0[64] = var2;
    var2 = {};
    var4 = 'Profile Creator';
    var2.name = var4;
    var3 = function(arg0, arg1) { // Original name: value, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.getStringFromDataView;
        var2 = arg0;
        var1 = arg1;
        var0 = 4;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.value = var3;
    var0[80] = var2;
    var2 = {};
    var3 = {};
    var4 = 'ICC Description';
    var3.name = var4;
    var2.desc = var3;
    var3 = {};
    var4 = 'ICC Copyright';
    var3.name = var4;
    var2.cprt = var3;
    var3 = {};
    var4 = 'ICC Device Model Description';
    var3.name = var4;
    var2.dmdd = var3;
    var3 = {};
    var4 = 'ICC Viewing Conditions Description';
    var3.name = var4;
    var2.vued = var3;
    var3 = {};
    var4 = 'ICC Device Manufacturer for Display';
    var3.name = var4;
    var2.dmnd = var3;
    var3 = {};
    var4 = 'Technology';
    var3.name = var4;
    var2.tech = var3;
    var1.iccTags = var2;
    var1.iccProfile = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4123]);