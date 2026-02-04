// modules/fastest_list/getFastestListVisibleItemsDefault.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/fastest_list/getFastestListVisibleItemsDefault.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun61185: for (var _fun61185_ip = 0;;) switch (_fun61185_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.estimatedListSize;
                var0 = var0.sectionsVersioned;
                var12 = var0.itemSizeIsUniform;
                var11 = var0.itemSizes;
                var10 = var0.listHeaderSize;
                var1 = var0.sectionsId;
                var9 = var0.sections;
                var8 = var0.sectionFooterSizeIsUniform;
                var7 = var0.sectionFooterSizes;
                var6 = var0.sectionHeaderSizeIsUniform;
                var5 = var0.sectionHeaderSizes;
                var0 = {
                    'sectionsId': null,
                    'sectionStart': 0,
                    'sectionEnd': 0,
                    'itemStart': 0,
                    'itemEnd': 4294967295
                };
                var0.sectionsId = var1;
                var4 = 0;
                if (!(!(var10 >= var13))) {
                    _fun61185_ip = 302;
                    continue _fun61185
                }
            case 98:
                var1 = var9.length;
                var1 = var4 < var1;
                var2 = 0;
                var3 = undefined;
                if (!var1) {
                    _fun61185_ip = 300;
                    continue _fun61185
                }
            case 117:
                var1 = var9[var2];
                var14 = var10;
                if (!(var4 !== var1)) {
                    _fun61185_ip = 282;
                    continue _fun61185
                }
            case 131:
                var0.sectionEnd = var2;
                var0.itemEnd = var4;
                if (var6) {
                    _fun61185_ip = 152;
                    continue _fun61185
                }
            case 146:
                var1 = var5[var2];
                _fun61185_ip = 156;
                continue _fun61185;
            case 152:
                var1 = var5[var4];
            case 156:
                var15 = var10 + var1;
                if (!(!(var15 >= var13))) {
                    _fun61185_ip = 280;
                    continue _fun61185
                }
            case 164:
                var1 = var9[var2];
                var1 = var4 < var1;
                var18 = var15;
                var17 = 0;
                var16 = var18;
                var15 = 0;
                if (!var1) {
                    _fun61185_ip = 252;
                    continue _fun61185
                }
            case 185:
                var0.itemEnd = var17;
                if (var12) {
                    _fun61185_ip = 210;
                    continue _fun61185
                }
            case 194:
                var1 = var11[var2];
                var1 = var1.sizes;
                var1 = var1[var17];
                _fun61185_ip = 224;
                continue _fun61185;
            case 210:
                var19 = var11[var4];
                var19 = var19.sizes;
                var1 = var19[var4];
            case 224:
                var20 = var18 + var1;
                if (!(!(var20 >= var13))) {
                    _fun61185_ip = 278;
                    continue _fun61185
                }
            case 232:
                var17 = var17 + 1;
                var1 = var9[var2];
                var18 = var20;
                var16 = var18;
                var15 = var17;
                if (var15 < var1) {
                    _fun61185_ip = 185;
                    continue _fun61185
                }
            case 252:
                if (var8) {
                    _fun61185_ip = 261;
                    continue _fun61185
                }
            case 255:
                var1 = var7[var2];
                _fun61185_ip = 265;
                continue _fun61185;
            case 261:
                var1 = var7[var4];
            case 265:
                var14 = var16 + var1;
                var3 = var15;
                if (!(var14 >= var13)) {
                    _fun61185_ip = 282;
                    continue _fun61185
                }
            case 276:
                return var0;
            case 278:
                return var0;
            case 280:
                return var0;
            case 282:
                var2 = var2 + 1;
                var1 = var9.length;
                var10 = var14;
                if (var2 < var1) {
                    _fun61185_ip = 117;
                    continue _fun61185
                }
            case 300:
                return var0;
            case 302:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);