// modules/markup/BioMarkupUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun48493: for (var _fun48493_ip = 0;;) switch (_fun48493_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot3;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun48493_ip = 58;
                    continue _fun48493
                }
            case 26:
                var5 = _closure1_slot4;
                var3 = undefined;
                var1 = true;
                var1 = var5.bind(var3)(var4, var1);
                var3 = _closure1_slot3;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var1 = 0;
    var5 = var7[var1];
    var0 = undefined;
    var6 = var10.bind(var0)(var5);
    var5 = 1;
    var5 = var7[var5];
    var5 = var10.bind(var0)(var5);
    var9 = var5.PROFILE_BIO_RULES;
    var5 = new Array(2);
    var5[0] = var9;
    var9 = 2;
    var9 = var7[var9];
    var11 = var10.bind(var0)(var9);
    var9 = {
        'enableBuildOverrides': false,
        'mustConfirmExternalLink': true
    };
    var9 = var11.bind(var0)(var9);
    var5[1] = var9;
    var12 = var6.bind(var0)(var5);
    var _closure1_slot2 = var12;
    var5 = 3;
    var5 = var7[var5];
    var9 = var10.bind(var0)(var5);
    var5 = {};
    var6 = 2000;
    var5.max = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var16 = var6;
    var15 = var5;
    var5 = new var16[var9](var15, var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot3 = var5;
    var6 = 4;
    var5 = var7[var6];
    var9 = var8.bind(var0)(var5);
    var5 = var9.reactParserFor;
    var5 = var5.bind(var9)(var12);
    var9 = 5;
    var9 = var7[var9];
    var11 = var10.bind(var0)(var9);
    var9 = var11.astParserFor;
    var9 = var9.bind(var11)(var12);
    var _closure1_slot4 = var9;
    var6 = var7[var6];
    var8 = var8.bind(var0)(var6);
    var6 = var8.reactParserFor;
    var1 = var7[var1];
    var9 = var10.bind(var0)(var1);
    var1 = 7;
    var1 = var7[var1];
    var11 = var10.bind(var0)(var1);
    var10 = var11.omit;
    var1 = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'];
    var10 = var10.bind(var11)(var12, var1);
    var1 = new Array(2);
    var1[0] = var10;
    var10 = {};
    var11 = {};
    var12 = function() {
        var0 = null;
        return var0;
    };
    var11.react = var12;
    var10.emoji = var11;
    var1[1] = var10;
    var1 = var9.bind(var0)(var1);
    var1 = var6.bind(var8)(var1);
    var6 = 8;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/BioMarkupUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.parseBioReact = var5;
    var2.getOrParseBioAST = var4;
    var3 = function arg0() {
        _fun48495: for (var _fun48495_ip = 0;;) switch (_fun48495_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.trim;
                var0 = var0.bind(var3)();
                var1 = var0.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun48495_ip = 105;
                    continue _fun48495
                }
            case 24:
                var1 = _closure1_slot5;
                var2 = undefined;
                var1 = var1.bind(var2)(var3);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 6;
                var3 = var7[var5];
                var4 = var6.bind(var2)(var3);
                var3 = var4.reactFor;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.ruleOutput;
                var5 = _closure1_slot2;
                var0 = 'react';
                var0 = var6.bind(var7)(var5, var0);
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var2)(var1);
                return var0;
            case 105:
                var0 = null;
                return var0;
        }
    };
    var2.parseBioReactWithCachedAST = var3;
    var2.parseBioReactWithoutScrolling = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4784, 4785, 3940, 1386, 4867, 4783, 3148, 22, 2]);