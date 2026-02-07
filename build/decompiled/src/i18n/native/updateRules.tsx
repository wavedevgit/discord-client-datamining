// i18n/native/updateRules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun112888: for (var _fun112888_ip = 0;;) switch (_fun112888_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.node;
                var _closure2_slot0 = var4;
                var6 = var0.output;
                var5 = var0.state;
                var8 = {};
                var10 = _closure1_slot3;
                var7 = var10.useContext;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 3;
                var2 = var12[var2];
                var3 = undefined;
                var2 = var9.bind(var3)(var2);
                var2 = var2.AccessibilityPreferencesContext;
                var2 = var7.bind(var10)(var2);
                var2 = var2.alwaysShowLinkDecorations;
                var _closure2_slot1 = var2;
                var7 = 4;
                var7 = var12[var7];
                var10 = var9.bind(var3)(var7);
                var9 = var10.useToken;
                var11 = _closure1_slot1;
                var7 = 5;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.colors;
                var7 = var7.TEXT_LINK;
                var11 = var9.bind(var10)(var7);
                var _closure2_slot2 = var11;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var2;
                var2 = function() { // Environment: var1
                    _fun112889: for (var _fun112889_ip = 0;;) switch (_fun112889_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot2;
                            var0.color = var2;
                            var2 = _closure2_slot1;
                            var1 = 'none';
                            if (!var2) {
                                _fun112889_ip = 28;
                                continue _fun112889
                            }
                        case 24:
                            var1 = 'underline';
                        case 28:
                            var0.textDecorationLine = var1;
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var2, var7);
                var2 = var4.context;
                var9 = null;
                if (!(var9 != var2)) {
                    _fun112888_ip = 230;
                    continue _fun112888
                }
            case 183:
                var10 = var4.context;
                var2 = var4.target;
                var2 = var10[var2];
                if (!var2) {
                    _fun112888_ip = 210;
                    continue _fun112888
                }
            case 201:
                var10 = var2.onClick;
                if (var10) {
                    _fun112888_ip = 218;
                    continue _fun112888
                }
            case 210:
                var8.onClick = var2;
                _fun112888_ip = 230;
                continue _fun112888;
            case 218:
                var2 = var2.onClick;
                var8.onClick = var2;
            case 230:
                var2 = var8.onClick;
                if (!(var9 == var2)) {
                    _fun112888_ip = 253;
                    continue _fun112888
                }
            case 240:
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 6;
                    var0 = var5[var0];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var0);
                    var1 = var2.openURL;
                    var0 = 7;
                    var0 = var5[var0];
                    var4 = var4.bind(var3)(var0);
                    var3 = var4.sanitizeUrl;
                    var0 = _closure2_slot0;
                    var0 = var0.target;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8.onClick = var1;
            case 253:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 8;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'accessible': true,
                    'accessibilityRole': 'link'
                };
                var8 = var8.onClick;
                var0.onPress = var8;
                var0.style = var7;
                var4 = var4.content;
                var4 = var6.bind(var3)(var4, var5);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.Fonts;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = {};
    var8 = var8.PRIMARY_SEMIBOLD;
    var7.fontFamily = var8;
    var4.strong = var7;
    var7 = {};
    var8 = 'italic';
    var7.fontStyle = var8;
    var4.italic = var7;
    var7 = {};
    var8 = 'underline';
    var7.textDecorationLine = var8;
    var4.underline = var7;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'i18n/native/updateRules.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var1 = {};
        var5 = var0.paragraph;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var4 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = arg0;
            var6 = var5.content;
            var5 = arg1;
            var5 = var5.bind(var3)(var6, var0);
            var1.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var3 = 'react';
        var1[var3] = var4;
        var0.paragraph = var1;
        var1 = {};
        var5 = var0.strong;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var4 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = _closure1_slot5;
            var5 = var5.strong;
            var1.style = var5;
            var5 = arg0;
            var6 = var5.content;
            var5 = arg1;
            var5 = var5.bind(var3)(var6, var0);
            var1.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var1[var3] = var4;
        var0.strong = var1;
        var1 = {};
        var5 = var0.em;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var4 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = _closure1_slot5;
            var5 = var5.italic;
            var1.style = var5;
            var5 = arg0;
            var6 = var5.content;
            var5 = arg1;
            var5 = var5.bind(var3)(var6, var0);
            var1.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var1[var3] = var4;
        var0.em = var1;
        var1 = {};
        var5 = var0.u;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var4 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = _closure1_slot5;
            var5 = var5.underline;
            var1.style = var5;
            var5 = arg0;
            var6 = var5.content;
            var5 = arg1;
            var5 = var5.bind(var3)(var6, var0);
            var1.children = var5;
            var0 = var0.key;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var1[var3] = var4;
        var0.u = var1;
        var1 = {};
        var5 = var0.link;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var2 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var2 = {};
            var1 = arg0;
            var2.node = var1;
            var1 = arg1;
            var2.output = var1;
            var2.state = var0;
            var1 = var0.key;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var1[var3] = var2;
        var0.link = var1;
        return var0;
    };
    var2.default = var3;
    var2.I18nLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 3167, 3153, 671, 3146, 3148, 1295, 2]);