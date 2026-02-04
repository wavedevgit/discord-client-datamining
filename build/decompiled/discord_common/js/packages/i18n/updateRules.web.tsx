// ../discord_common/js/packages/i18n/updateRules.web.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/i18n/updateRules.web.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var6 = var5[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.defaultRules;
        var6 = var6.heading;
        var0.heading = var6;
        var6 = var5[var1];
        var6 = var4.bind(var3)(var6);
        var6 = var6.defaultRules;
        var6 = var6.lheading;
        var0.lheading = var6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.defaultRules;
        var1 = var1.list;
        var0.list = var1;
        var1 = {};
        var7 = var0.paragraph;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        var4 = function arg0, arg1, arg2() {
            var0 = arg2;
            var4 = _closure1_slot2;
            var3 = {};
            var1 = arg0;
            var5 = var1.content;
            var1 = arg1;
            var2 = undefined;
            var1 = var1.bind(var2)(var5, var0);
            var3.children = var1;
            var1 = var0.key;
            var0 = 'p';
            var0 = var4.bind(var2)(var0, var3, var1);
            return var0;
        };
        var3 = 'react';
        var1[var3] = var4;
        var0.paragraph = var1;
        var1 = {};
        var7 = var0.link;
        var8 = var1;
        var4 = copyDataProperties(var8, var7);
        var2 = function arg0, arg1, arg2() {
            _fun112297: for (var _fun112297_ip = 0;;) switch (_fun112297_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg2;
                    var2 = {};
                    var3 = var1.context;
                    var5 = null;
                    if (!(var5 != var3)) {
                        _fun112297_ip = 78;
                        continue _fun112297
                    }
                case 19:
                    var4 = var1.context;
                    var3 = var1.target;
                    var3 = var4[var3];
                    if (!var3) {
                        _fun112297_ip = 46;
                        continue _fun112297
                    }
                case 37:
                    var4 = var3.onClick;
                    if (var4) {
                        _fun112297_ip = 54;
                        continue _fun112297
                    }
                case 46:
                    var2.onClick = var3;
                    _fun112297_ip = 78;
                    continue _fun112297;
                case 54:
                    var4 = var3.onClick;
                    var2.onClick = var4;
                    var3 = var3.onContextMenu;
                    var2.onContextMenu = var3;
                case 78:
                    var3 = var2.onClick;
                    if (!(var5 == var3)) {
                        _fun112297_ip = 158;
                        continue _fun112297
                    }
                case 88:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.sanitizeUrl;
                    var4 = var1.target;
                    var4 = var6.bind(var7)(var4);
                    var5 = var5 != var4;
                    if (!var5) {
                        _fun112297_ip = 140;
                        continue _fun112297
                    }
                case 137:
                    var3 = var4;
                case 140:
                    var2.href = var3;
                    var3 = '_blank';
                    var2.target = var3;
                case 158:
                    var4 = _closure1_slot2;
                    var3 = {};
                    var5 = var1.title;
                    var3.title = var5;
                    var10 = var3;
                    var9 = var2;
                    var2 = copyDataProperties(var10, var9);
                    var5 = 'noreferrer';
                    var2 = 'rel';
                    var3[var2] = var5;
                    var5 = var1.content;
                    var1 = arg1;
                    var2 = undefined;
                    var5 = var1.bind(var2)(var5, var0);
                    var1 = 'children';
                    var3[var1] = var5;
                    var1 = var0.key;
                    var0 = 'a';
                    var0 = var4.bind(var2)(var0, var3, var1);
                    return var0;
            }
        };
        var1[var3] = var2;
        var0.link = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3146, 2]);