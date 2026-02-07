// modules/activities/records/CustomActivityLinkRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun92971: for (var _fun92971_ip = 0;;) switch (_fun92971_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.decodeCustomActivityLink;
                    var3 = var1.link_id;
                    var5 = var4.bind(var5)(var3);
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun92971_ip = 81;
                        continue _fun92971
                    }
                case 76:
                    var4 = var5.type;
                case 81:
                    var5 = var3 != var4;
                    var3 = null;
                    if (!var5) {
                        _fun92971_ip = 93;
                        continue _fun92971
                    }
                case 90:
                    var3 = var4;
                case 93:
                    var2.type = var3;
                    var3 = var1.application_id;
                    var2.applicationId = var3;
                    var3 = var1.link_id;
                    var2.linkId = var3;
                    var3 = 'asset_id';
                    var4 = var3 in var1;
                    var3 = undefined;
                    if (!var4) {
                        _fun92971_ip = 142;
                        continue _fun92971
                    }
                case 136:
                    var3 = var1.asset_id;
                case 142:
                    var2.assetId = var3;
                    var3 = 'asset_path';
                    var4 = var3 in var1;
                    var3 = undefined;
                    if (!var4) {
                        _fun92971_ip = 171;
                        continue _fun92971
                    }
                case 163:
                    var3 = var1.asset_path;
                case 171:
                    var2.assetPath = var3;
                    var3 = var1.title;
                    var2.title = var3;
                    var3 = var1.description;
                    var2.description = var3;
                    var1 = var1.custom_id;
                    var2.customId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'getAssetURL';
        var0.key = var4;
        var1 = function() {
            _fun92972: for (var _fun92972_ip = 0;;) switch (_fun92972_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.type;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var6 = 2;
                    var0 = var0[var6];
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.CustomLinkType;
                    var0 = var0.MANAGED;
                    if (!(var3 !== var0)) {
                        _fun92972_ip = 128;
                        continue _fun92972
                    }
                case 49:
                    var5 = var1.type;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var6];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.CustomLinkType;
                    var3 = var0.QUICK;
                    var0 = undefined;
                    if (!(var5 === var3)) {
                        _fun92972_ip = 126;
                        continue _fun92972
                    }
                case 89:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 4;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.getQuickLinkImage;
                    var3 = var1.assetPath;
                    var0 = var5.bind(var6)(var3);
                case 126:
                    _fun92972_ip = 178;
                    continue _fun92972;
                case 128:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.getAssetImage;
                    var3 = var1.applicationId;
                    var2 = var1.assetId;
                    var1 = 512;
                    var0 = var4.bind(var5)(var3, var2, var1);
                case 178:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/records/CustomActivityLinkRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12129, 5705, 12126, 2]);