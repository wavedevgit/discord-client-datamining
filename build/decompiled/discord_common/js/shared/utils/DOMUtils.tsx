// ../discord_common/js/shared/utils/DOMUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = /input/i;
    var _closure1_slot0 = var3;
    var3 = /textarea/i;
    var _closure1_slot1 = var3;
    var4 = var0.Set;
    var0 = var4.prototype;
    var3 = Object.create(var0, {
        constructor: {
            value: var4
        }
    });
    var9 = ['text', 'password', 'number', 'date', 'datetime-local', 'time', 'week', 'month', 'email', 'search', 'tel', 'url'];
    var10 = var3;
    var0 = new var10[var4](var9, var8);
    var0 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot2 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/DOMUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun17849: for (var _fun17849_ip = 0;;) switch (_fun17849_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17849_ip = 95;
                    continue _fun17849
                }
            case 12:
                var5 = var0 == var2;
                var3 = undefined;
                if (var5) {
                    _fun17849_ip = 42;
                    continue _fun17849
                }
            case 21:
                var5 = var2.ownerDocument;
                var6 = var0 == var5;
                var3 = undefined;
                if (var6) {
                    _fun17849_ip = 42;
                    continue _fun17849
                }
            case 36:
                var3 = var5.defaultView;
            case 42:
                if (!(var0 != var3)) {
                    _fun17849_ip = 91;
                    continue _fun17849
                }
            case 46:
                var5 = var0 == var1;
                var4 = undefined;
                if (var5) {
                    _fun17849_ip = 60;
                    continue _fun17849
                }
            case 55:
                var4 = var1.name;
            case 60:
                var5 = var0 != var4;
                var1 = 'Element';
                if (!var5) {
                    _fun17849_ip = 74;
                    continue _fun17849
                }
            case 71:
                var1 = var4;
            case 74:
                var1 = var3[var1];
                var0 = var0 != var1;
                if (!var0) {
                    _fun17849_ip = 89;
                    continue _fun17849
                }
            case 85:
                var0 = var2 instanceof var1;
            case 89:
                return var0;
            case 91:
                var0 = false;
                return var0;
            case 95:
                var0 = false;
                return var0;
        }
    };
    var2.isElement = var3;
    var3 = function arg0() {
        _fun17850: for (var _fun17850_ip = 0;;) switch (_fun17850_ip) {
            case 0:
                var0 = global;
                var4 = var0.parseInt;
                var2 = undefined;
                var3 = arg0;
                var1 = 10;
                var1 = var4.bind(var2)(var3, var1);
                var0 = var0.isNaN;
                var2 = var0.bind(var2)(var1);
                var0 = 0;
                if (var2) {
                    _fun17850_ip = 41;
                    continue _fun17850
                }
            case 38:
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var2.cssValueToNumber = var3;
    var3 = function arg0() {
        _fun17851: for (var _fun17851_ip = 0;;) switch (_fun17851_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun17851_ip = 148;
                    continue _fun17851
                }
            case 12:
                var1 = var4.getAttribute;
                var0 = 'contenteditable';
                var1 = var1.bind(var4)(var0);
                var0 = 'true';
                if (!(var0 !== var1)) {
                    _fun17851_ip = 144;
                    continue _fun17851
                }
            case 37:
                var5 = _closure1_slot1;
                var3 = var5.test;
                var1 = var4.tagName;
                var1 = var3.bind(var5)(var1);
                if (var1) {
                    _fun17851_ip = 140;
                    continue _fun17851
                }
            case 63:
                var5 = _closure1_slot0;
                var3 = var5.test;
                var1 = var4.tagName;
                var1 = var3.bind(var5)(var1);
                if (!var1) {
                    _fun17851_ip = 132;
                    continue _fun17851
                }
            case 86:
                var3 = var4.getAttribute;
                var1 = 'type';
                var1 = var3.bind(var4)(var1);
                var3 = var2 != var1;
                var2 = 'text';
                if (!var3) {
                    _fun17851_ip = 115;
                    continue _fun17851
                }
            case 112:
                var2 = var1;
            case 115:
                var1 = _closure1_slot2;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun17851_ip = 136;
                    continue _fun17851
                }
            case 132:
                var0 = false;
                return var0;
            case 136:
                var0 = true;
                return var0;
            case 140:
                var0 = true;
                return var0;
            case 144:
                var0 = true;
                return var0;
            case 148:
                var0 = false;
                return var0;
        }
    };
    var2.isInputLikeElement = var3;
    var3 = function arg0() {
        _fun17852: for (var _fun17852_ip = 0;;) switch (_fun17852_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.parentNode;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun17852_ip = 32;
                    continue _fun17852
                }
            case 15:
                var1 = var2.parentNode;
                var0 = var1.removeChild;
                var0 = var0.bind(var1)(var2);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var2.removeNode = var3;
    var3 = function arg0() {
        _fun17853: for (var _fun17853_ip = 0;;) switch (_fun17853_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.target;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun17853_ip = 61;
                    continue _fun17853
                }
            case 20:
                var3 = 'ownerDocument';
                var3 = var3 in var2;
                if (var3) {
                    _fun17853_ip = 52;
                    continue _fun17853
                }
            case 31:
                var3 = 'document';
                var3 = var3 in var2;
                var1 = null;
                if (!var3) {
                    _fun17853_ip = 50;
                    continue _fun17853
                }
            case 44:
                var1 = var2.document;
            case 50:
                _fun17853_ip = 58;
                continue _fun17853;
            case 52:
                var1 = var2.ownerDocument;
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var2.eventOwnerDocument = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun17854: for (var _fun17854_ip = 0;;) switch (_fun17854_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var0 = arg2;
                var4 = arg3;
                var3 = var0.width;
                var7 = var0.height;
                var1 = var4.top;
                var8 = var4.left;
                var0 = var4.width;
                var4 = var4.height;
                var6 = global;
                var12 = var6.Math;
                var11 = var12.min;
                var10 = var0 / var3;
                var9 = var4 / var7;
                var6 = 1;
                var6 = var11.bind(var12)(var10, var9, var6);
                var3 = var3 * var6;
                var6 = var7 * var6;
                var4 = var4 - var6;
                var7 = 2;
                var4 = var4 / var7;
                var4 = var4 + var8;
                var0 = var0 - var3;
                var0 = var0 / var7;
                var1 = var0 + var1;
                var0 = var5 >= var4;
                if (!var0) {
                    _fun17854_ip = 123;
                    continue _fun17854
                }
            case 115:
                var4 = var4 + var6;
                var0 = var5 <= var4;
            case 123:
                if (!var0) {
                    _fun17854_ip = 130;
                    continue _fun17854
                }
            case 126:
                var0 = var2 >= var1;
            case 130:
                if (!var0) {
                    _fun17854_ip = 141;
                    continue _fun17854
                }
            case 133:
                var1 = var1 + var3;
                var0 = var2 <= var1;
            case 141:
                return var0;
        }
    };
    var2.clickedOnVisibleImage = var3;
    var3 = function arg0, arg1() {
        _fun17855: for (var _fun17855_ip = 0;;) switch (_fun17855_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var2 = var0.parentElement;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17855_ip = 51;
                    continue _fun17855
                }
            case 18:
                var4 = var2.classList;
                var0 = var4.contains;
                var4 = var0.bind(var4)(var3);
                var0 = var2;
                if (var4) {
                    _fun17855_ip = 53;
                    continue _fun17855
                }
            case 41:
                var2 = var0.parentElement;
                if (var1 != var2) {
                    _fun17855_ip = 18;
                    continue _fun17855
                }
            case 51:
                return var1;
            case 53:
                return var0;
        }
    };
    var2.getParentElementByClassName = var3;
    var1 = function arg0, arg1() {
        _fun17856: for (var _fun17856_ip = 0;;) switch (_fun17856_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var2 = var0.parentElement;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun17856_ip = 46;
                    continue _fun17856
                }
            case 18:
                var0 = var2.getAttribute;
                var4 = var0.bind(var2)(var3);
                var0 = var2;
                if (!(var1 == var4)) {
                    _fun17856_ip = 48;
                    continue _fun17856
                }
            case 36:
                var2 = var0.parentElement;
                if (var1 != var2) {
                    _fun17856_ip = 18;
                    continue _fun17856
                }
            case 46:
                return var1;
            case 48:
                return var0;
        }
    };
    var2.getParentElementByAttribute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);