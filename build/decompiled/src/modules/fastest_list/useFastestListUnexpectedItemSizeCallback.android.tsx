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
    var1 = function(arg0) { // Original name: useFastestListUnexpectedItemSizeCallback, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun60910: for (var _fun60910_ip = 0;;) switch (_fun60910_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.nativeEvent;
                    var0 = _closure2_slot0;
                    var8 = var0.current;
                    var0 = var7.isSectionHeader;
                    if (var0) {
                        _fun60910_ip = 127;
                        continue _fun60910
                    }
                case 30:
                    var0 = var7.isSectionFooter;
                    if (var0) {
                        _fun60910_ip = 77;
                        continue _fun60910
                    }
                case 39:
                    var3 = var8.renderItem;
                    var2 = var7.section;
                    var0 = var7.item;
                    var0 = var3.bind(var8)(var2, var0);
                    var2 = null;
                    var2 = var2 != var0;
                    var4 = undefined;
                    if (!var2) {
                        _fun60910_ip = 75;
                        continue _fun60910
                    }
                case 72:
                    var4 = var0;
                case 75:
                    _fun60910_ip = 125;
                    continue _fun60910;
                case 77:
                    var0 = var8.renderSectionFooter;
                    var3 = null;
                    var5 = var3 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun60910_ip = 110;
                        continue _fun60910
                    }
                case 94:
                    var6 = var8.renderSectionFooter;
                    var5 = var7.section;
                    var2 = var6.bind(var8)(var5);
                case 110:
                    var3 = var3 != var2;
                    var0 = undefined;
                    if (!var3) {
                        _fun60910_ip = 122;
                        continue _fun60910
                    }
                case 119:
                    var0 = var2;
                case 122:
                    var4 = var0;
                case 125:
                    _fun60910_ip = 175;
                    continue _fun60910;
                case 127:
                    var0 = var8.renderSectionHeader;
                    var3 = null;
                    var5 = var3 == var0;
                    var2 = undefined;
                    if (var5) {
                        _fun60910_ip = 160;
                        continue _fun60910
                    }
                case 144:
                    var6 = var8.renderSectionHeader;
                    var5 = var7.section;
                    var2 = var6.bind(var8)(var5);
                case 160:
                    var3 = var3 != var2;
                    var0 = undefined;
                    if (!var3) {
                        _fun60910_ip = 172;
                        continue _fun60910
                    }
                case 169:
                    var0 = var2;
                case 172:
                    var4 = var0;
                case 175:
                    var3 = null;
                    var2 = var3 == var4;
                    var0 = undefined;
                    var8 = undefined;
                    if (var2) {
                        _fun60910_ip = 193;
                        continue _fun60910
                    }
                case 188:
                    var8 = var4.props;
                case 193:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun60910_ip = 207;
                        continue _fun60910
                    }
                case 202:
                    var2 = var4.type;
                case 207:
                    var9 = 'function';
                    var4 = typeof var2;
                    if (!(var9 === var4)) {
                        _fun60910_ip = 234;
                        continue _fun60910
                    }
                case 218:
                    var4 = var2.name;
                    var5 = var4.length;
                    var4 = 0;
                    if (!(!(var5 > var4))) {
                        _fun60910_ip = 285;
                        continue _fun60910
                    }
                case 234:
                    var5 = var3 == var2;
                    var4 = undefined;
                    if (var5) {
                        _fun60910_ip = 248;
                        continue _fun60910
                    }
                case 243:
                    var4 = var2.type;
                case 248:
                    var6 = typeof var4;
                    var5 = undefined;
                    if (!(var9 === var6)) {
                        _fun60910_ip = 283;
                        continue _fun60910
                    }
                case 257:
                    var6 = var4.name;
                    var9 = var6.length;
                    var6 = 0;
                    var6 = var9 > var6;
                    var5 = undefined;
                    if (!var6) {
                        _fun60910_ip = 283;
                        continue _fun60910
                    }
                case 278:
                    var5 = var4.name;
                case 283:
                    _fun60910_ip = 290;
                    continue _fun60910;
                case 285:
                    var5 = var2.name;
                case 290:
                    var4 = var3 == var5;
                    var2 = undefined;
                    if (!var4) {
                        _fun60910_ip = 331;
                        continue _fun60910
                    }
                case 299:
                    var4 = global;
                    var6 = var4.Object;
                    var4 = var6.keys;
                    var8 = var4.bind(var6)(var8);
                    var6 = var8.join;
                    var4 = ',';
                    var2 = var6.bind(var8)(var4);
                case 331:
                    var4 = var7.isSectionHeader;
                    if (var4) {
                        _fun60910_ip = 426;
                        continue _fun60910
                    }
                case 340:
                    var6 = var7.isSectionFooter;
                    var10 = var7.section;
                    var4 = global;
                    if (var6) {
                        _fun60910_ip = 397;
                        continue _fun60910
                    }
                case 356:
                    var14 = var7.item;
                    var6 = var4.HermesInternal;
                    var11 = var6.concat;
                    var17 = 'Item at section ';
                    var15 = ' and index ';
                    var13 = '.';
                    var16 = var10;
                    var6 = var17[var11](var16, var15, var14, var13, var12);
                    _fun60910_ip = 424;
                    continue _fun60910;
                case 397:
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var8 = 'Section footer at section ';
                    var4 = '.';
                    var6 = var9.bind(var8)(var10, var4);
                case 424:
                    _fun60910_ip = 460;
                    continue _fun60910;
                case 426:
                    var10 = var7.section;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var8 = 'Section header at section ';
                    var4 = '.';
                    var6 = var9.bind(var8)(var10, var4);
                case 460:
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
                        _fun60910_ip = 538;
                        continue _fun60910
                    }
                case 535:
                    var3 = var5;
                case 538:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7526, 2]);