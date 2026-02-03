// ../discord_common/js/packages/i18n/markdownRules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var8 = 0;
    var1 = var5[var8];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var16 = var1.newline;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var15 = var1.paragraph;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var13 = var1.url;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var14 = var1.link;
    var _closure1_slot0 = var14;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var12 = var1.strong;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var11 = var1.u;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var10 = var1.br;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var9 = var1.em;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var6 = var1.image;
    var1 = var5[var8];
    var1 = var4.bind(var0)(var1);
    var1 = var1.defaultRules;
    var3 = var1.text;
    var1 = {};
    var1.newline = var16;
    var1.paragraph = var15;
    var1.url = var13;
    var13 = {};
    var19 = var13;
    var18 = var14;
    var14 = copyDataProperties(var19, var18);
    var15 = function arg0, arg1, arg2() {
        var1 = arg2;
        var4 = _closure1_slot0;
        var3 = var4.parse;
        var2 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var2, var0, var1);
        var1 = var1.context;
        var0.context = var1;
        return var0;
    };
    var14 = 'parse';
    var13[var14] = var15;
    var1.link = var13;
    var1.strong = var12;
    var1.u = var11;
    var1.br = var10;
    var1.em = var9;
    var1.image = var6;
    var6 = {};
    var9 = var3.order;
    var6.order = var9;
    var9 = var5[var8];
    var11 = var4.bind(var0)(var9);
    var10 = var11.inlineRegex;
    var9 = /^\$\[(.*?)\]\((\w+)\)/;
    var9 = var10.bind(var11)(var9);
    var6.match = var9;
    var9 = function arg0, arg1, arg2() {
        var2 = arg0;
        var4 = arg2;
        var0 = {};
        var3 = var4.context;
        var1 = 2;
        var1 = var2[var1];
        var1 = var3[var1];
        var0.render = var1;
        var1 = 1;
        var3 = var2[var1];
        var2 = arg1;
        var1 = undefined;
        var1 = var2.bind(var1)(var3, var4);
        var0.content = var1;
        return var0;
    };
    var6.parse = var9;
    var9 = function arg0, arg1, arg2() {
        var3 = arg0;
        var0 = arg2;
        var2 = var3.render;
        var5 = var3.content;
        var4 = arg1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var0);
        var0 = var0.key;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6.react = var9;
    var1.hook = var6;
    var6 = {};
    var9 = var3.order;
    var6.order = var9;
    var8 = var5[var8];
    var10 = var4.bind(var0)(var8);
    var9 = var10.inlineRegex;
    var8 = /^!!(\d+?)!!/;
    var8 = var9.bind(var10)(var8);
    var6.match = var8;
    var8 = function arg0, arg1, arg2() {
        _fun112279: for (var _fun112279_ip = 0;;) switch (_fun112279_ip) {
            case 0:
                var0 = arg2;
                var1 = var0.unsafeContext;
                var2 = arg0;
                var0 = 1;
                var0 = var2[var0];
                var3 = var1[var0];
                var2 = 'string';
                var0 = typeof var3;
                var1 = var3;
                if (!(var2 !== var0)) {
                    _fun112279_ip = 62;
                    continue _fun112279
                }
            case 37:
                var0 = null;
                var2 = var0 != var3;
                var0 = '';
                if (!var2) {
                    _fun112279_ip = 59;
                    continue _fun112279
                }
            case 50:
                var2 = var3.toString;
                var0 = var2.bind(var3)();
            case 59:
                var1 = var0;
            case 62:
                var0 = {};
                var2 = 'text';
                var0.type = var2;
                var0.content = var1;
                return var0;
        }
    };
    var6.parse = var8;
    var7 = function arg0() {
        var0 = arg0;
        var0 = var0.content;
        return var0;
    };
    var6.react = var7;
    var1.noparse = var6;
    var1.text = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/i18n/markdownRules.tsx';
    var3 = var4.bind(var5)(var3);
    var2.rules = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3146, 2]);