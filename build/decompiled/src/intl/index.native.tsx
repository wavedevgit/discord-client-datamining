// intl/index.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var9 = function arg0() {
        _fun13546: for (var _fun13546_ip = 0;;) switch (_fun13546_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.Platform;
                var5 = var3.OS;
                var3 = 'android';
                if (!(var3 !== var5)) {
                    _fun13546_ip = 62;
                    continue _fun13546
                }
            case 48:
                var2 = var2.NativeModules;
                var2 = var2.LocalizationManager;
                _fun13546_ip = 87;
                continue _fun13546;
            case 62:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var2 = var1.default;
            case 87:
                var1 = null;
                if (!(var1 != var2)) {
                    _fun13546_ip = 109;
                    continue _fun13546
                }
            case 93:
                var1 = var2.getConstants;
                var1 = var1.bind(var2)();
                var0 = var1.Language;
            case 109:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var3 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot3 = var3;
    var8 = var1.Fonts;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = {};
    var10 = var8.PRIMARY_SEMIBOLD;
    var3.fontFamily = var10;
    var1.strong = var3;
    var3 = {};
    var10 = 'italic';
    var3.fontStyle = var10;
    var1.italic = var3;
    var3 = {};
    var8 = var8.CODE_NORMAL;
    var3.fontFamily = var8;
    var1.code = var3;
    var3 = {
        'textDecorationLine': 'line-through',
        'textDecorationStyle': 'solid'
    };
    var1.del = var3;
    var _closure1_slot5 = var1;
    var11 = 'en-US';
    var3 = var9.bind(var0)(var11);
    var8 = 5;
    var1 = var6[var8];
    var10 = var7.bind(var0)(var1);
    var1 = var10.getNormalizedLocale;
    var1 = var1.bind(var10)(var3, var11);
    var10 = 6;
    var12 = var6[var10];
    var14 = var7.bind(var0)(var12);
    var13 = var14.makeReactFormatter;
    var12 = {};
    var15 = function arg0, arg1() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var0 = _closure1_slot5;
        var0 = var0.italic;
        var1.style = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var12.$i = var15;
    var15 = function arg0, arg1() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var0 = _closure1_slot5;
        var0 = var0.strong;
        var1.style = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var12.$b = var15;
    var15 = function arg0, arg1() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var0 = _closure1_slot5;
        var0 = var0.del;
        var1.style = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var12.$del = var15;
    var15 = function arg0, arg1() {
        var4 = _closure1_slot4;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var12.$p = var15;
    var15 = function arg0, arg1() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var0 = _closure1_slot5;
        var0 = var0.code;
        var1.style = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var12.$code = var15;
    var15 = function arg0, arg1, arg2() {
        _fun13552: for (var _fun13552_ip = 0;;) switch (_fun13552_ip) {
            case 0:
                var0 = arg2;
                var1 = var0[Symbol.iterator];
                var0 = var1().next;
                var3 = var0().value;
                var0 = var1;
                var4 = undefined;
                var2 = var0 === var4;
                var0 = undefined;
                if (var2) {
                    _fun13552_ip = 27;
                    continue _fun13552
                }
            case 24:
                var0 = var3;
            case 27:
                if (var2) {
                    _fun13552_ip = 33;
                    continue _fun13552
                }
            case 30:
                var1.return();
            case 33:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.IntlLink;
                var1 = {};
                var1.target = var0;
                var0 = arg0;
                var1.children = var0;
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var12.$link = var15;
    var12 = var13.bind(var14)(var12);
    var _closure1_slot6 = var12;
    var16 = {};
    var20 = var16;
    var19 = var12;
    var12 = copyDataProperties(var20, var19);
    var12 = function arg0() {
        _fun13553: for (var _fun13553_ip = 0;;) switch (_fun13553_ip) {
            case 0:
                var4 = 0;
                var7 = 0;
                var5 = copyRestArgs(var7);
                var0 = _closure1_slot6;
                var3 = var0.format;
                var2 = var3.apply;
                var0 = this;
                var0 = var2.bind(var3)(var0, var5);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun13553_ip = 52;
                    continue _fun13553
                }
            case 43:
                var3 = var0.length;
                var2 = var4 !== var3;
            case 52:
                if (var2) {
                    _fun13553_ip = 109;
                    continue _fun13553
                }
            case 55:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.DEBUG_MISSING_STRING;
                var1 = {};
                var5 = 'format';
                var1.intl_format_method = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 109:
                return var0;
        }
    };
    var17 = 'format';
    var16[var17] = var12;
    var15 = {};
    var12 = var6[var10];
    var12 = var7.bind(var0)(var12);
    var19 = var12.stringFormatter;
    var20 = var15;
    var12 = copyDataProperties(var20, var19);
    var12 = function arg0() {
        _fun13554: for (var _fun13554_ip = 0;;) switch (_fun13554_ip) {
            case 0:
                var7 = 0;
                var5 = copyRestArgs(var7);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.stringFormatter;
                var3 = var0.format;
                var2 = var3.apply;
                var0 = this;
                var0 = var2.bind(var3)(var0, var5);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun13554_ip = 73;
                    continue _fun13554
                }
            case 65:
                var3 = '';
                var2 = var3 !== var0;
            case 73:
                if (var2) {
                    _fun13554_ip = 128;
                    continue _fun13554
                }
            case 76:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.DEBUG_MISSING_STRING;
                var1 = {};
                var5 = 'formatToPlainString';
                var1.intl_format_method = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 128:
                return var0;
        }
    };
    var15[var17] = var12;
    var14 = {};
    var12 = var6[var10];
    var12 = var7.bind(var0)(var12);
    var19 = var12.markdownFormatter;
    var20 = var14;
    var12 = copyDataProperties(var20, var19);
    var12 = function arg0() {
        _fun13555: for (var _fun13555_ip = 0;;) switch (_fun13555_ip) {
            case 0:
                var7 = 0;
                var5 = copyRestArgs(var7);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.markdownFormatter;
                var3 = var0.format;
                var2 = var3.apply;
                var0 = this;
                var0 = var2.bind(var3)(var0, var5);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun13555_ip = 73;
                    continue _fun13555
                }
            case 65:
                var3 = '';
                var2 = var3 !== var0;
            case 73:
                if (var2) {
                    _fun13555_ip = 128;
                    continue _fun13555
                }
            case 76:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.DEBUG_MISSING_STRING;
                var1 = {};
                var5 = 'formatToMarkdownString';
                var1.intl_format_method = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 128:
                return var0;
        }
    };
    var14[var17] = var12;
    var13 = {};
    var12 = var6[var10];
    var12 = var7.bind(var0)(var12);
    var19 = var12.astFormatter;
    var20 = var13;
    var12 = copyDataProperties(var20, var19);
    var12 = function arg0() {
        _fun13556: for (var _fun13556_ip = 0;;) switch (_fun13556_ip) {
            case 0:
                var5 = 0;
                var8 = 0;
                var6 = copyRestArgs(var8);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.astFormatter;
                var3 = var0.format;
                var2 = var3.apply;
                var0 = this;
                var0 = var2.bind(var3)(var0, var6);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun13556_ip = 76;
                    continue _fun13556
                }
            case 67:
                var3 = var0.length;
                var2 = var5 !== var3;
            case 76:
                if (var2) {
                    _fun13556_ip = 131;
                    continue _fun13556
                }
            case 79:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.DEBUG_MISSING_STRING;
                var1 = {};
                var5 = 'formatToParts';
                var1.intl_format_method = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 131:
                return var0;
        }
    };
    var13[var17] = var12;
    var10 = var6[var10];
    var10 = var7.bind(var0)(var10);
    var12 = var10.IntlManager;
    var10 = {};
    var10.initialLocale = var1;
    var10.defaultLocale = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var21 = var11;
    var20 = var10;
    var10 = new var21[var12](var20, var19);
    var12 = var10 instanceof Object ? var10 : var11;
    var11 = var12.withFormatters;
    var10 = {};
    var10.format = var16;
    var10.formatToPlainString = var15;
    var10.formatToMarkdownString = var14;
    var10.formatToParts = var13;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot7 = var10;
    var12 = var10.string;
    var11 = var12.bind;
    var11 = var11.bind(var12)(var10);
    var _closure1_slot8 = var11;
    var11 = function(arg0) { // Environment: var4
        _fun13557: for (var _fun13557_ip = 0;;) switch (_fun13557_ip) {
            case 0:
                var2 = _closure1_slot8;
                var4 = undefined;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun13557_ip = 34;
                    continue _fun13557
                }
            case 26:
                var3 = '';
                var2 = var3 !== var0;
            case 34:
                if (var2) {
                    _fun13557_ip = 89;
                    continue _fun13557
                }
            case 37:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.DEBUG_MISSING_STRING;
                var1 = {};
                var5 = 'string';
                var1.intl_format_method = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 89:
                return var0;
        }
    };
    var10.string = var11;
    var11 = 10;
    var11 = var6[var11];
    var13 = var7.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'intl/index.native.tsx';
    var11 = var12.bind(var13)(var11);
    var2.intl = var10;
    var2.getSystemLocale = var9;
    var9 = var6[var8];
    var9 = var7.bind(var0)(var9);
    var9 = var9.getAvailableLocales;
    var2.getAvailableLocales = var9;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var8 = var8.getLanguages;
    var2.getLanguages = var8;
    var4 = function(arg0) { // Environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useSyncMessages;
        var1 = _closure1_slot7;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSyncMessages = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4._defaultMessages;
    var2.t = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var2.international = var4;
    var2.systemLocale = var3;
    var2.initialLocale = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 27, 651, 1235, 1272, 1295, 1296, 795, 2, 12600, 12603]);