// modules/asset_json/native/AssetJsonUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun13642: for (var _fun13642_ip = 0;;) switch (_fun13642_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var6 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun13642_ip = 340;
                            continue _fun13642
                        }
                    case 16:
                        var10 = undefined;
                        if (!(var6 === var10)) {
                            _fun13642_ip = 24;
                            continue _fun13642
                        }
                    case 22:
                        var6 = true;
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var10;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun13642_ip = 337;
                            continue _fun13642
                        }
                    case 37:
                        var4 = _closure1_slot6;
                        var4 = var4[var3];
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun13642_ip = 60;
                            continue _fun13642
                        }
                    case 54:
                        if (var6) {
                            _fun13642_ip = 326;
                            continue _fun13642
                        }
                    case 60:
                        var7 = _closure1_slot4;
                        var4 = var7.resolveAssetSource;
                        var4 = var4.bind(var7)(var3);
                        var11 = var4.uri;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 32;
                        var4 = var8[var4];
                        var7 = var7.bind(var10)(var4);
                        var4 = var7.isAndroid;
                        var4 = var4.bind(var7)();
                        if (var4) {
                            _fun13642_ip = 143;
                            continue _fun13642
                        }
                    case 113:
                        var4 = _closure1_slot5;
                        var8 = var4.DCDFileManager;
                        var7 = var8.readAsset;
                        var4 = 'utf8';
                        var4 = var7.bind(var8)(var11, var4);
                        _fun13642_ip = 210;
                        continue _fun13642;
                    case 143:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var12 = 33;
                        var7 = var7[var12];
                        var7 = var8.bind(var10)(var7);
                        var8 = var5 == var7;
                        var7 = undefined;
                        if (var8) {
                            _fun13642_ip = 207;
                            continue _fun13642
                        }
                    case 172:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var12];
                        var10 = var9.bind(var10)(var8);
                        var9 = var10.readAsset;
                        var8 = 'utf8';
                        var7 = var9.bind(var10)(var11, var8);
                    case 207:
                        var4 = var7;
                    case 210:
                        if (!(var5 != var4)) {
                            _fun13642_ip = 290;
                            continue _fun13642
                        }
                    case 214:
                        SaveGenerator(address = 218);
                    case 216:
                        return var4;
                    case 218:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun13642_ip = 287;
                            continue _fun13642
                        }
                    case 224:
                        if (!(var5 != var4)) {
                            _fun13642_ip = 284;
                            continue _fun13642
                        }
                    case 228:
                        var7 = _closure1_slot6;
                        var7 = var7[var3];
                        if (!(var5 != var7)) {
                            _fun13642_ip = 243;
                            continue _fun13642
                        }
                    case 240:
                        if (var6) {
                            _fun13642_ip = 273;
                            continue _fun13642
                        }
                    case 243:
                        var6 = global;
                        var7 = var6.JSON;
                        var6 = var7.parse;
                        var6 = var6.bind(var7)(var4);
                        var7 = _closure1_slot6;
                        var7[var3] = var6;
                        return var6;
                    case 273:
                        var6 = _closure1_slot6;
                        var6 = var6[var3];
                        return var6;
                    case 284:
                        return var5;
                    case 287:
                        return var4;
                    case 290:
                        var4 = global;
                        var6 = var4.Error;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var14 = "RTNFileManager doesn't exist?";
                        var15 = var5;
                        var4 = new var15[var6](var14, var13);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 326:
                        var2 = _closure1_slot6;
                        var2 = var2[var3];
                        return var2;
                    case 337:
                        return var1;
                    case 340:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Image;
    var _closure1_slot4 = var4;
    var3 = var3.NativeModules;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_bg = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_cs = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_da = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_de = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_el = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_enGB = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_esES = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_es419 = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_fi = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_fr = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 12;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_hr = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_hu = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 14;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_it = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 15;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_ja = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 16;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_ko = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 17;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_lt = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 18;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_nl = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 19;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_no = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 20;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_pl = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 21;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_ptBR = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 22;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_ro = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 23;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_ru = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 24;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_svSE = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 25;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_th = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 26;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_tr = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 27;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_uk = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 28;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_vi = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 29;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_zhCN = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 30;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_zhTW = var4;
    var4 = function() {
        var2 = _closure1_slot7;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 31;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.i18n_hi = var4;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/asset_json/native/AssetJsonUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.jsonAssets = var3;
    var2.loadJsonAsset = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 1238, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 478, 1269, 2]);