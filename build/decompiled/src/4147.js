// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getVersion, environment: var2
        _fun37993: for (var _fun37993_ip = 0;;) switch (_fun37993_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var1 = 9;
                var0 = arg2;
                if (!(!(var1 > var0))) {
                    _fun37993_ip = 129;
                    continue _fun37993
                }
            case 16:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var0 = var7[var1];
                var2 = undefined;
                var9 = var6.bind(var2)(var0);
                var8 = var9.getByteAt;
                var0 = 7;
                var3 = var5 + var0;
                var3 = var8.bind(var9)(var4, var3);
                var1 = var7[var1];
                var2 = var6.bind(var2)(var1);
                var1 = var2.getByteAt;
                var5 = var5 + var0;
                var0 = 1;
                var0 = var5 + var0;
                var2 = var1.bind(var2)(var4, var0);
                var0 = {};
                var1 = 256;
                var1 = var1 * var3;
                var1 = var1 + var2;
                var0.value = var1;
                var1 = '.';
                var1 = var3 + var1;
                var1 = var1 + var2;
                var0.description = var1;
                return var0;
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getResolutionUnit, environment: var2
        _fun37994: for (var _fun37994_ip = 0;;) switch (_fun37994_ip) {
            case 0:
                var1 = 10;
                var0 = arg2;
                if (!(!(var1 > var0))) {
                    _fun37994_ip = 80;
                    continue _fun37994
                }
            case 10:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var4 = var5.getByteAt;
                var2 = arg1;
                var0 = 9;
                var2 = var2 + var0;
                var0 = arg0;
                var2 = var4.bind(var5)(var0, var2);
                var0 = {};
                var0.value = var2;
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var2);
                var0.description = var1;
                return var0;
            case 80:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: getResolutionUnitDescription, environment: var2
        _fun37995: for (var _fun37995_ip = 0;;) switch (_fun37995_ip) {
            case 0:
                var4 = arg0;
                var0 = 'None';
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun37995_ip = 47;
                    continue _fun37995
                }
            case 13:
                var1 = 'inches';
                var2 = 1;
                if (!(var2 !== var4)) {
                    _fun37995_ip = 44;
                    continue _fun37995
                }
            case 26:
                var2 = 'Unknown';
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun37995_ip = 41;
                    continue _fun37995
                }
            case 37:
                var2 = 'cm';
            case 41:
                var1 = var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getXResolution, environment: var2
        _fun37996: for (var _fun37996_ip = 0;;) switch (_fun37996_ip) {
            case 0:
                var1 = 12;
                var0 = arg2;
                if (!(!(var1 > var0))) {
                    _fun37996_ip = 74;
                    continue _fun37996
                }
            case 10:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getShortAt;
                var1 = arg1;
                var0 = 10;
                var1 = var1 + var0;
                var0 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                var0 = {};
                var0.value = var1;
                var1 = '' + var1;
                var0.description = var1;
                return var0;
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: getYResolution, environment: var2
        _fun37997: for (var _fun37997_ip = 0;;) switch (_fun37997_ip) {
            case 0:
                var1 = 14;
                var0 = arg2;
                if (!(!(var1 > var0))) {
                    _fun37997_ip = 74;
                    continue _fun37997
                }
            case 10:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getShortAt;
                var1 = arg1;
                var0 = 12;
                var1 = var1 + var0;
                var0 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                var0 = {};
                var0.value = var1;
                var1 = '' + var1;
                var0.description = var1;
                return var0;
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function(arg0, arg1) { // Original name: read, environment: var2
        _fun37998: for (var _fun37998_ip = 0;;) switch (_fun37998_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var0 = var0[var4];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getShortAt;
                var5 = var0.bind(var1)(var3, var8);
                var0 = 15;
                var1 = var0 > var5;
                var7 = undefined;
                if (var1) {
                    _fun37998_ip = 130;
                    continue _fun37998
                }
            case 54:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var10 = var2.bind(var6)(var1);
                var2 = var10.getByteAt;
                var1 = 14;
                var1 = var8 + var1;
                var12 = var2.bind(var10)(var3, var1);
                var1 = {};
                var1.value = var12;
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var10 = '';
                var2 = 'px';
                var2 = var11.bind(var10)(var12, var2);
                var1.description = var2;
                var7 = var1;
            case 130:
                var2 = 16;
                var10 = var2 > var5;
                var1 = undefined;
                if (var10) {
                    _fun37998_ip = 215;
                    continue _fun37998
                }
            case 142:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var11 = var11.bind(var6)(var10);
                var10 = var11.getByteAt;
                var0 = var8 + var0;
                var13 = var10.bind(var11)(var3, var0);
                var0 = {};
                var0.value = var13;
                var10 = global;
                var10 = var10.HermesInternal;
                var12 = var10.concat;
                var11 = '';
                var10 = 'px';
                var10 = var12.bind(var11)(var13, var10);
                var0.description = var10;
                var1 = var0;
            case 215:
                var0 = {};
                var10 = _closure1_slot2;
                var10 = var10.bind(var6)(var3, var8, var5);
                var0['JFIF Version'] = var10;
                var10 = _closure1_slot3;
                var10 = var10.bind(var6)(var3, var8, var5);
                var0['Resolution Unit'] = var10;
                var10 = _closure1_slot5;
                var10 = var10.bind(var6)(var3, var8, var5);
                var0.XResolution = var10;
                var9 = _closure1_slot6;
                var9 = var9.bind(var6)(var3, var8, var5);
                var0.YResolution = var9;
                var0['JFIF Thumbnail Width'] = var7;
                var0['JFIF Thumbnail Height'] = var1;
                if (!(var6 !== var7)) {
                    _fun37998_ip = 406;
                    continue _fun37998
                }
            case 303:
                if (!(var6 !== var1)) {
                    _fun37998_ip = 406;
                    continue _fun37998
                }
            case 307:
                var9 = var7.value;
                var7 = 3;
                var7 = var7 * var9;
                var1 = var1.value;
                var7 = var7 * var1;
                var1 = undefined;
                if (!(var4 !== var7)) {
                    _fun37998_ip = 395;
                    continue _fun37998
                }
            case 334:
                var4 = var2 + var7;
                var4 = var4 > var5;
                var1 = undefined;
                if (var4) {
                    _fun37998_ip = 395;
                    continue _fun37998
                }
            case 347:
                var5 = var3.buffer;
                var4 = var5.slice;
                var3 = var8 + var2;
                var2 = var8 + var2;
                var2 = var2 + var7;
                var3 = var4.bind(var5)(var3, var2);
                var2 = {};
                var2.value = var3;
                var3 = '<24-bit RGB pixel data>';
                var2.description = var3;
                var1 = var2;
            case 395:
                if (!var1) {
                    _fun37998_ip = 406;
                    continue _fun37998
                }
            case 398:
                var0['JFIF Thumbnail'] = var1;
            case 406:
                var4 = var0;
                for (var1 in var4)
                    case 417: {
                        case 426: var7 = var1;
                        var8 = var0[var7];
                        if (var6 !== var8) {
                            _fun37998_ip = 417;
                            continue _fun37998
                        }
                        case 437: var7 = delete var0[var7];
                        _fun37998_ip = 417;
                        continue _fun37998;
                    }
            case 443:
                return var0;
        }
    };
    var0.read = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4146]);