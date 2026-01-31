// modules/guild_onboarding_home/useFirstMessageOrEmbedContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun104841: for (var _fun104841_ip = 0;;) switch (_fun104841_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun104841_ip = 46;
                    continue _fun104841
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun104841_ip = 55;
                    continue _fun104841
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun104841_ip = 345;
                    continue _fun104841
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun104841_ip = 323;
                    continue _fun104841
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun104841_ip = 283;
                    continue _fun104841
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun104841_ip = 270;
                    continue _fun104841
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun104841_ip = 163;
                    continue _fun104841
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun104841_ip = 179;
                    continue _fun104841
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun104841_ip = 249;
                    continue _fun104841
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun104841_ip = 249;
                    continue _fun104841
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun104841_ip = 234;
                    continue _fun104841
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun104841_ip = 247;
                    continue _fun104841
                }
            case 234:
                var8 = _closure1_slot1;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun104841_ip = 265;
                continue _fun104841;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun104841_ip = 283;
                continue _fun104841;
            case 270:
                var6 = _closure1_slot1;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun104841_ip = 323;
                    continue _fun104841
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun104841_ip = 330;
                    continue _fun104841
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun104842: for (var _fun104842_ip = 0;;) switch (_fun104842_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun104842_ip = 56;
                                continue _fun104842
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun104842_ip = 67;
                            continue _fun104842;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun104843: for (var _fun104843_ip = 0;;) switch (_fun104843_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun104843_ip = 23;
                    continue _fun104843
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun104843_ip = 33;
                    continue _fun104843
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun104843_ip = 70;
                    continue _fun104843
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun104843_ip = 55;
                    continue _fun104843
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/useFirstMessageOrEmbedContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useFirstMessageOrEmbedContent, environment: var1
        _fun104844: for (var _fun104844_ip = 0;;) switch (_fun104844_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun104844_ip = 160;
                    continue _fun104844
                }
            case 12:
                var3 = var1.content;
                var4 = var0 == var3;
                var7 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun104844_ip = 33;
                    continue _fun104844
                }
            case 28:
                var2 = var3.length;
            case 33:
                var6 = 0;
                if (!(!(var2 > var6))) {
                    _fun104844_ip = 153;
                    continue _fun104844
                }
            case 39:
                var3 = var1.embeds;
                var4 = var0 == var3;
                var2 = undefined;
                if (var4) {
                    _fun104844_ip = 59;
                    continue _fun104844
                }
            case 54:
                var2 = var3.length;
            case 59:
                if (!(var2 > var6)) {
                    _fun104844_ip = 151;
                    continue _fun104844
                }
            case 63:
                var3 = _closure1_slot0;
                var2 = var1.embeds;
                var5 = var3.bind(var7)(var2);
                var3 = var5.bind(var7)();
                var2 = var3.done;
                var4 = var3;
                if (var2) {
                    _fun104844_ip = 151;
                    continue _fun104844
                }
            case 96:
                var2 = var4.value;
                var3 = var2.rawDescription;
                if (!(var0 != var3)) {
                    _fun104844_ip = 126;
                    continue _fun104844
                }
            case 111:
                var3 = var2.rawDescription;
                var3 = var3.length;
                if (!(!(var3 > var6))) {
                    _fun104844_ip = 143;
                    continue _fun104844
                }
            case 126:
                var8 = var5.bind(var7)();
                var3 = var8.done;
                var4 = var8;
                if (var3) {
                    _fun104844_ip = 151;
                    continue _fun104844
                }
            case 141:
                _fun104844_ip = 96;
                continue _fun104844;
            case 143:
                var2 = var2.rawDescription;
                return var2;
            case 151:
                return var0;
            case 153:
                var1 = var1.content;
                return var1;
            case 160:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);