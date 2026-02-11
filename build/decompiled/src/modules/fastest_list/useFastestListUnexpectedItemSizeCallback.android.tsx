// modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun61558: for (var _fun61558_ip = 0;;) switch (_fun61558_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.nativeEvent;
                    var0 = _closure2_slot0;
                    var8 = var0.current;
                    var0 = var7.isSectionHeader;
                    if (var0) {
                        _fun61558_ip = 126;
                        continue _fun61558
                    }
                case 29:
                    var0 = var7.isSectionFooter;
                    if (var0) {
                        _fun61558_ip = 76;
                        continue _fun61558
                    }
                case 38:
                    var3 = var8.renderItem;
                    var2 = var7.section;
                    var0 = var7.item;
                    var0 = var3.bind(var8)(var2, var0);
                    var2 = null;
                    var2 = var2 != var0;
                    var4 = undefined;
                    if (!var2) {
                        _fun61558_ip = 74;
                        continue _fun61558
                    }
                case 71:
                    var4 = var0;
                case 74:
                    _fun61558_ip = 124;
                    continue _fun61558;
                case 76:
                    var0 = var8.renderSectionFooter;
                    var3 = null;
                    var5 = var3 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun61558_ip = 109;
                        continue _fun61558
                    }
                case 93:
                    var6 = var8.renderSectionFooter;
                    var5 = var7.section;
                    var2 = var6.bind(var8)(var5);
                case 109:
                    var3 = var3 != var2;
                    var0 = undefined;
                    if (!var3) {
                        _fun61558_ip = 121;
                        continue _fun61558
                    }
                case 118:
                    var0 = var2;
                case 121:
                    var4 = var0;
                case 124:
                    _fun61558_ip = 174;
                    continue _fun61558;
                case 126:
                    var0 = var8.renderSectionHeader;
                    var3 = null;
                    var5 = var3 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun61558_ip = 159;
                        continue _fun61558
                    }
                case 143:
                    var6 = var8.renderSectionHeader;
                    var5 = var7.section;
                    var2 = var6.bind(var8)(var5);
                case 159:
                    var3 = var3 != var2;
                    var0 = undefined;
                    if (!var3) {
                        _fun61558_ip = 171;
                        continue _fun61558
                    }
                case 168:
                    var0 = var2;
                case 171:
                    var4 = var0;
                case 174:
                    var3 = null;
                    var2 = var3 == var4;
                    var0 = undefined;
                    var8 = undefined;
                    if (var2) {
                        _fun61558_ip = 192;
                        continue _fun61558
                    }
                case 187:
                    var8 = var4.props;
                case 192:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun61558_ip = 206;
                        continue _fun61558
                    }
                case 201:
                    var2 = var4.type;
                case 206:
                    var9 = 'function';
                    var4 = typeof var2;
                    if (!(var9 === var4)) {
                        _fun61558_ip = 233;
                        continue _fun61558
                    }
                case 217:
                    var4 = var2.name;
                    var5 = var4.length;
                    var4 = 0;
                    if (!(!(var5 > var4))) {
                        _fun61558_ip = 284;
                        continue _fun61558
                    }
                case 233:
                    var5 = var3 == var2;
                    var4 = undefined;
                    if (var5) {
                        _fun61558_ip = 247;
                        continue _fun61558
                    }
                case 242:
                    var4 = var2.type;
                case 247:
                    var6 = typeof var4;
                    var5 = undefined;
                    if (!(var9 === var6)) {
                        _fun61558_ip = 282;
                        continue _fun61558
                    }
                case 256:
                    var6 = var4.name;
                    var9 = var6.length;
                    var6 = 0;
                    var6 = var9 > var6;
                    var5 = undefined;
                    if (!var6) {
                        _fun61558_ip = 282;
                        continue _fun61558
                    }
                case 277:
                    var5 = var4.name;
                case 282:
                    _fun61558_ip = 289;
                    continue _fun61558;
                case 284:
                    var5 = var2.name;
                case 289:
                    var4 = var3 == var5;
                    var2 = undefined;
                    if (!var4) {
                        _fun61558_ip = 330;
                        continue _fun61558
                    }
                case 298:
                    var4 = global;
                    var6 = var4.Object;
                    var4 = var6.keys;
                    var8 = var4.bind(var6)(var8);
                    var6 = var8.join;
                    var4 = ',';
                    var2 = var6.bind(var8)(var4);
                case 330:
                    var4 = var7.isSectionHeader;
                    if (var4) {
                        _fun61558_ip = 425;
                        continue _fun61558
                    }
                case 339:
                    var6 = var7.isSectionFooter;
                    var10 = var7.section;
                    var4 = global;
                    if (var6) {
                        _fun61558_ip = 396;
                        continue _fun61558
                    }
                case 355:
                    var14 = var7.item;
                    var6 = var4.HermesInternal;
                    var11 = var6.concat;
                    var17 = 'Item at section ';
                    var15 = ' and index ';
                    var13 = '.';
                    var16 = var10;
                    var6 = var17[var11](var16, var15, var14, var13, var12);
                    _fun61558_ip = 423;
                    continue _fun61558;
                case 396:
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var8 = 'Section footer at section ';
                    var4 = '.';
                    var6 = var9.bind(var8)(var10, var4);
                case 423:
                    _fun61558_ip = 459;
                    continue _fun61558;
                case 425:
                    var10 = var7.section;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var8 = 'Section header at section ';
                    var4 = '.';
                    var6 = var9.bind(var8)(var10, var4);
                case 459:
                    var4 = {};
                    var16 = var7.sizeExpected;
                    var14 = var7.size;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var17 = 'Expected item size ';
                    var15 = ', but got ';
                    var13 = '.';
                    var7 = var17[var10](var16, var15, var14, var13, var12);
                    var4.detailMessage = var7;
                    var4.itemPosition = var6;
                    var6 = var3 != var5;
                    var3 = 'Unknown component.';
                    if (!var6) {
                        _fun61558_ip = 537;
                        continue _fun61558
                    }
                case 534:
                    var3 = var5;
                case 537:
                    var4.itemName = var3;
                    var4.itemProps = var2;
                    var1 = _closure2_slot0;
                    var1 = var1.current;
                    var1 = var1.listId;
                    var4.listId = var1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.logFastestListError;
                    var1 = 'Expected item size mismatch.';
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7623, 2]);