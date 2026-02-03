// modules/emojis/UnicodeEmojis.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
var7 = require;
        var4 = metroImportDefault;
        var2 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var4;
        var _closure1_slot2 = var8;
        var0 = function arg0, arg1() {
            _fun25023: for(var _fun25023_ip = 0; ; ) switch(_fun25023_ip) {
case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if(!var1) { _fun25023_ip = 46; continue _fun25023 }
case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
case 46:
                if(var1) { _fun25023_ip = 55; continue _fun25023 }
case 49:
                var1 = var2["@@iterator"];
case 55:
                if(var1) { _fun25023_ip = 343; continue _fun25023 }
case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if(var5) { _fun25023_ip = 323; continue _fun25023 }
case 86:
                var7 = undefined;
                var5 = undefined;
                if(!var2) { _fun25023_ip = 283; continue _fun25023 }
case 96:
                var8 = 'string';
                var6 = typeof var2;
                if(!(var8 !== var6)) { _fun25023_ip = 270; continue _fun25023 }
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
                if(!var6) { _fun25023_ip = 163; continue _fun25023 }
case 158:
                var6 = var2.constructor;
case 163:
                var9 = var8;
                if(!var6) { _fun25023_ip = 179; continue _fun25023 }
case 169:
                var6 = var2.constructor;
                var9 = var6.name;
case 179:
                var6 = 'Map';
                if(!(var6 !== var9)) { _fun25023_ip = 249; continue _fun25023 }
case 187:
                var6 = 'Set';
                if(!(var6 !== var9)) { _fun25023_ip = 249; continue _fun25023 }
case 195:
                var6 = 'Arguments';
                if(!(var6 !== var9)) { _fun25023_ip = 234; continue _fun25023 }
case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if(!var8) { _fun25023_ip = 247; continue _fun25023 }
case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
case 247:
                _fun25023_ip = 265; continue _fun25023;
case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
case 265:
                var5 = var6;
                _fun25023_ip = 283; continue _fun25023;
case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
case 283:
                var3 = var5;
                if(var3) { _fun25023_ip = 323; continue _fun25023 }
case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {constructor: {value: var6}});
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
case 323:
                if(!var3) { _fun25023_ip = 330; continue _fun25023 }
case 326:
                _closure2_slot0 = var3;
case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun25024: for(var _fun25024_ip = 0; ; ) switch(_fun25024_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var0 = _closure2_slot0;
                        var0 = var0.length;
                        if(!(!(var1 >= var0))) { _fun25024_ip = 56; continue _fun25024 }
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
                        _fun25024_ip = 67; continue _fun25024;
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
case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
            }
        };
        var _closure1_slot17 = var0;
        var0 = function arg0, arg1() {
            _fun25025: for(var _fun25025_ip = 0; ; ) switch(_fun25025_ip) {
case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if(var0) { _fun25025_ip = 23; continue _fun25025 }
case 14:
                var1 = var3.length;
                var0 = var2 > var1;
case 23:
                var1 = undefined;
                if(!var0) { _fun25025_ip = 33; continue _fun25025 }
case 28:
                var1 = var3.length;
case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if(!var4) { _fun25025_ip = 70; continue _fun25025 }
case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if(var2 < var1) { _fun25025_ip = 55; continue _fun25025 }
case 70:
                return var0;
            }
        };
        var _closure1_slot18 = var0;
        var0 = function arg0() {
            _fun25026: for(var _fun25026_ip = 0; ; ) switch(_fun25026_ip) {
case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.nameToEmoji;
                var0 = arg0;
                var2 = var2[var0];
                var0 = null;
                var3 = var0 == var2;
                if(var3) { _fun25026_ip = 74; continue _fun25026 }
case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.emojis;
                var0 = var1[var2];
case 74:
                return var0;
            }
        };
        var _closure1_slot19 = var0;
        var0 = function arg0() {
            _fun25027: for(var _fun25027_ip = 0; ; ) switch(_fun25027_ip) {
case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.surrogateToEmoji;
                var0 = arg0;
                var2 = var2[var0];
                var0 = null;
                var3 = var0 == var2;
                if(var3) { _fun25027_ip = 74; continue _fun25027 }
case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.emojis;
                var0 = var1[var2];
case 74:
                return var0;
            }
        };
        var _closure1_slot20 = var0;
        var0 = function arg0() {
            _fun25028: for(var _fun25028_ip = 0; ; ) switch(_fun25028_ip) {
case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if(!(var1 == var0)) { _fun25028_ip = 70; continue _fun25028 }
case 26:
                var1 = _closure1_slot12;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var7 = var3;
                var6 = var4;
                var1 = new var7[var1](var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = _closure1_slot7;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
case 70:
                return var0;
            }
        };
        var _closure1_slot21 = var0;
        var13 = function arg0() {
            _fun25029: for(var _fun25029_ip = 0; ; ) switch(_fun25029_ip) {
case 0:
                var2 = _closure1_slot19;
                var3 = undefined;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var4 = var0 != var2;
                if(!var4) { _fun25029_ip = 35; continue _fun25029 }
case 26:
                var1 = _closure1_slot21;
                var0 = var1.bind(var3)(var2);
case 35:
                return var0;
            }
        };
        var _closure1_slot22 = var13;
        var12 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.test;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var _closure1_slot23 = var12;
        var0 = function arg0() {
            _fun25031: for(var _fun25031_ip = 0; ; ) switch(_fun25031_ip) {
case 0:
                var2 = arg0;
                var0 = _closure1_slot20;
                var4 = undefined;
                var1 = var0.bind(var4)(var2);
                var0 = null;
                var3 = var0 == var1;
                if(var3) { _fun25031_ip = 37; continue _fun25031 }
case 26:
                var3 = var1.names;
                var1 = 0;
                var4 = var3[var1];
case 37:
                if(!(var0 == var4)) { _fun25031_ip = 57; continue _fun25031 }
case 41:
                var0 = {};
                var1 = 'text';
                var0.type = var1;
                var0.text = var2;
                _fun25031_ip = 103; continue _fun25031;
case 57:
                var1 = {};
                var3 = 'emoji';
                var1.type = var3;
                var1.surrogate = var2;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var2 = var3.bind(var2)(var4, var2);
                var1.emojiName = var2;
                var0 = var1;
case 103:
                return var0;
            }
        };
        var _closure1_slot24 = var0;
        var11 = function arg0, arg1() {
            _fun25032: for(var _fun25032_ip = 0; ; ) switch(_fun25032_ip) {
case 0:
                var4 = arg0;
                var1 = true;
                var0 = arg1;
                if(!(var1 !== var0)) { _fun25032_ip = 53; continue _fun25032 }
case 12:
                var1 = _closure1_slot23;
                var0 = undefined;
                var0 = var1.bind(var0)(var4);
                if(var0) { _fun25032_ip = 53; continue _fun25032 }
case 29:
                var1 = {};
                var0 = 'text';
                var1.type = var0;
                var1.text = var4;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
case 53:
                var0 = new Array(0);
                var3 = var4.match;
                var2 = _closure1_slot11;
                var14 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var14)) { _fun25032_ip = 85; continue _fun25032 }
case 81:
                var14 = new Array(0);
case 85:
                var3 = var14.length;
                var13 = 0;
                var6 = var13 < var3;
                var5 = '';
                var4 = undefined;
                var12 = 'text';
                var11 = 1;
                var10 = var5;
                var9 = 0;
                var8 = undefined;
                var7 = undefined;
                var3 = var10;
                if(!var6) { _fun25032_ip = 370; continue _fun25032 }
case 127:
                var6 = var14[var9];
                if(!(var2 != var10)) { _fun25032_ip = 139; continue _fun25032 }
case 135:
                if(!(var5 === var10)) { _fun25032_ip = 167; continue _fun25032 }
case 139:
                var20 = _closure1_slot15;
                var19 = var10;
                var18 = var6;
                var17 = var8;
                var16 = var7;
                var15 = var18;
                if(!(var15 !== var20)) { _fun25032_ip = 343; continue _fun25032 }
case 165:
                _fun25032_ip = 238; continue _fun25032;
case 167:
                var20 = _closure1_slot14;
                if(!(var6 !== var20)) { _fun25032_ip = 231; continue _fun25032 }
case 175:
                var21 = _closure1_slot16;
                var20 = var21.test;
                var20 = var20.bind(var21)(var6);
                if(var20) { _fun25032_ip = 219; continue _fun25032 }
case 192:
                var21 = var0.push;
                var20 = _closure1_slot24;
                var20 = var20.bind(var4)(var10);
                var20 = var21.bind(var0)(var20);
                var19 = var5;
                var18 = var6;
                _fun25032_ip = 238; continue _fun25032;
case 219:
                var15 = var10 + var6;
                var17 = var8;
                var16 = var7;
                _fun25032_ip = 343; continue _fun25032;
case 231:
                var18 = var10 + var6;
                var19 = var5;
case 238:
                var6 = _closure1_slot24;
                var18 = var6.bind(var4)(var18);
                var6 = var0.length;
                if(!(var6 > var13)) { _fun25032_ip = 293; continue _fun25032 }
case 256:
                var6 = var0.length;
                var6 = var6 - var11;
                var6 = var0[var6];
                var20 = var18.type;
                var7 = var6;
                if(!(var12 === var20)) { _fun25032_ip = 293; continue _fun25032 }
case 281:
                var20 = var6.type;
                var7 = var6;
                if(!(var12 !== var20)) { _fun25032_ip = 314; continue _fun25032 }
case 293:
                var20 = var0.push;
                var20 = var20.bind(var0)(var18);
                var16 = var7;
                var15 = var19;
                var17 = var18;
                _fun25032_ip = 343; continue _fun25032;
case 314:
                var21 = var6.text;
                var20 = var18.text;
                var20 = var21 + var20;
                var6.text = var20;
                var15 = var19;
                var17 = var18;
                var16 = var6;
case 343:
                var9 = var9 + 1;
                var6 = var14.length;
                var10 = var15;
                var8 = var17;
                var7 = var16;
                var3 = var10;
                if(var9 < var6) { _fun25032_ip = 127; continue _fun25032 }
case 370:
                var2 = var2 != var3;
                if(!var2) { _fun25032_ip = 381; continue _fun25032 }
case 377:
                var2 = var5 !== var3;
case 381:
                if(!var2) { _fun25032_ip = 403; continue _fun25032 }
case 384:
                var2 = var0.push;
                var1 = _closure1_slot24;
                var1 = var1.bind(var4)(var3);
                var1 = var2.bind(var0)(var1);
case 403:
                return var0;
            }
        };
        var _closure1_slot25 = var11;
        var10 = function arg0() {
            _fun25033: for(var _fun25033_ip = 0; ; ) switch(_fun25033_ip) {
case 0:
                var0 = arguments[1];
                var1 = undefined;
                if(!(var0 === var1)) { _fun25033_ip = 13; continue _fun25033 }
case 9:
                var0 = '';
case 13:
                var3 = _closure1_slot19;
                var2 = arg0;
                var3 = var3.bind(var1)(var2);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun25033_ip = 44; continue _fun25033 }
case 39:
                var1 = var3.surrogates;
case 44:
                if(!(var2 != var1)) { _fun25033_ip = 51; continue _fun25033 }
case 48:
                var0 = var1;
case 51:
                return var0;
            }
        };
        var _closure1_slot26 = var10;
        var9 = function arg0() {
            _fun25034: for(var _fun25034_ip = 0; ; ) switch(_fun25034_ip) {
case 0:
                var1 = arguments[1];
                var3 = arguments[2];
                var0 = undefined;
                if(!(var1 === var0)) { _fun25034_ip = 14; continue _fun25034 }
case 12:
                var1 = true;
case 14:
                if(!(var3 === var0)) { _fun25034_ip = 22; continue _fun25034 }
case 18:
                var3 = '';
case 22:
                var4 = _closure1_slot20;
                var2 = arg0;
                var4 = var4.bind(var0)(var2);
                var2 = null;
                var5 = var2 == var4;
                var0 = undefined;
                if(var5) { _fun25034_ip = 59; continue _fun25034 }
case 48:
                var5 = var4.names;
                var4 = 0;
                var0 = var5[var4];
case 59:
                if(!(var2 != var0)) { _fun25034_ip = 66; continue _fun25034 }
case 63:
                var3 = var0;
case 66:
                var0 = var3;
                if(!var1) { _fun25034_ip = 95; continue _fun25034 }
case 72:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var0 = var2.bind(var1)(var3, var1);
case 95:
                return var0;
            }
        };
        var _closure1_slot27 = var9;
        var5 = global;
        var14 = var5.Object;
        var6 = var14.defineProperty;
        var3 = {};
        var0 = true;
        var3.value = var0;
        var0 = '__esModule';
        var0 = var6.bind(var14)(var2, var0, var3);
        var0 = 0;
        var3 = var8[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var _closure1_slot3 = var3;
        var3 = 1;
        var3 = var8[var3];
        var3 = var4.bind(var0)(var3);
        var _closure1_slot4 = var3;
        var3 = 2;
        var3 = var8[var3];
        var3 = var4.bind(var0)(var3);
        var _closure1_slot5 = var3;
        var3 = null;
        var _closure1_slot6 = var3;
        var3 = var5.WeakMap;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var20 = var4;
        var3 = new var20[var3](var19);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot7 = var3;
        var4 = ['🏻', '🏼', '🏽', '🏾', '🏿'];
        var _closure1_slot8 = var4;
        var6 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
        var _closure1_slot9 = var6;
        var3 = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
        var _closure1_slot10 = var3;
        var3 = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
        var _closure1_slot11 = var3;
        var3 = function() { // Environment: var1
            var3 = _closure1_slot4;
            var2 = function arg0() {
                _fun25036: for(var _fun25036_ip = 0; ; ) switch(_fun25036_ip) {
case 0:
                    var1 = arg0;
                    var9 = this;
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var9, var2);
                    var9.emojiObject = var1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.EmojiTypes;
                    var2 = var2.UNICODE;
                    var9.type = var2;
                    var3 = var1.names;
                    var2 = 0;
                    var2 = var3[var2];
                    var9.uniqueName = var2;
                    var2 = var1.surrogates;
                    var9.surrogates = var2;
                    var2 = {};
                    var9.diversityChildren = var2;
                    var2 = var1.diversityChildren;
                    var6 = null;
                    if(!(var6 != var2)) { _fun25036_ip = 265; continue _fun25036 }
case 123:
                    var2 = _closure1_slot17;
                    var1 = var1.diversityChildren;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.bind(var0)();
                    var1 = var2.done;
                    var4 = '-';
                    var3 = 3;
                    if(var1) { _fun25036_ip = 265; continue _fun25036 }
case 157:
                    var10 = var2.value;
                    var11 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var1 = var11.bind(var0)(var1);
                    var1 = var1.emojis;
                    var13 = var1[var10];
                    var1 = var13.diversity;
                    if(!(var6 != var1)) { _fun25036_ip = 250; continue _fun25036 }
case 198:
                    var10 = var13.diversity;
                    var1 = var10.join;
                    var11 = var1.bind(var10)(var4);
                    var10 = var9.diversityChildren;
                    var1 = _closure2_slot0;
                    var12 = var1.prototype;
                    var12 = Object.create(var12, {constructor: {value: var1}});
                    var16 = var12;
                    var15 = var13;
                    var1 = new var16[var1](var15, var14);
                    var1 = var1 instanceof Object ? var1 : var12;
                    var10[var11] = var1;
case 250:
                    var10 = var5.bind(var0)();
                    var1 = var10.done;
                    var2 = var10;
                    if(!var1) { _fun25036_ip = 157; continue _fun25036 }
case 265:
                    return var0;
                }
            };
            var _closure2_slot0 = var2;
            var0 = {};
            var1 = 'names';
            var0.key = var1;
            var1 = function () {
                var0 = this;
                var0 = var0.emojiObject;
                var0 = var0.names;
                return var0;
            };
            var0.get = var1;
            var1 = new Array(15);
            var1[0] = var0;
            var0 = {};
            var5 = 'allNamesString';
            var0.key = var5;
            var5 = function () {
                _fun25038: for(var _fun25038_ip = 0; ; ) switch(_fun25038_ip) {
case 0:
                    var1 = this;
                    var0 = var1.names;
                    var2 = var0.length;
                    var0 = 1;
                    if(!(!(var2 > var0))) { _fun25038_ip = 51; continue _fun25038 }
case 20:
                    var3 = var1.uniqueName;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var0 = ':';
                    var0 = var2.bind(var0)(var3, var0);
                    _fun25038_ip = 95; continue _fun25038;
case 51:
                    var3 = var1.names;
                    var2 = var3.join;
                    var1 = ': :';
                    var3 = var2.bind(var3)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = ':';
                    var0 = var2.bind(var1)(var3, var1);
case 95:
                    return var0;
                }
            };
            var0.get = var5;
            var1[1] = var0;
            var0 = {};
            var5 = 'unicodeVersion';
            var0.key = var5;
            var5 = function () {
                _fun25039: for(var _fun25039_ip = 0; ; ) switch(_fun25039_ip) {
case 0:
                    var0 = this;
                    var0 = var0.emojiObject;
                    var1 = var0.unicodeVersion;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if(!var2) { _fun25039_ip = 28; continue _fun25039 }
case 25:
                    var0 = var1;
case 28:
                    return var0;
                }
            };
            var0.get = var5;
            var1[2] = var0;
            var0 = {};
            var5 = 'hasDiversity';
            var0.key = var5;
            var5 = function () {
                var0 = this;
                var0 = var0.emojiObject;
                var0 = var0.hasDiversity;
                return var0;
            };
            var0.get = var5;
            var1[3] = var0;
            var0 = {};
            var5 = 'hasMultiDiversity';
            var0.key = var5;
            var5 = function () {
                var0 = this;
                var0 = var0.emojiObject;
                var0 = var0.hasMultiDiversity;
                return var0;
            };
            var0.get = var5;
            var1[4] = var0;
            var0 = {};
            var5 = 'hasDiversityParent';
            var0.key = var5;
            var5 = function () {
                var0 = this;
                var0 = var0.emojiObject;
                var0 = var0.hasDiversityParent;
                return var0;
            };
            var0.get = var5;
            var1[5] = var0;
            var0 = {};
            var5 = 'hasMultiDiversityParent';
            var0.key = var5;
            var5 = function () {
                var0 = this;
                var0 = var0.emojiObject;
                var0 = var0.hasMultiDiversityParent;
                return var0;
            };
            var0.get = var5;
            var1[6] = var0;
            var0 = {};
            var5 = 'managed';
            var0.key = var5;
            var5 = function () {
                var0 = true;
                return var0;
            };
            var0.get = var5;
            var1[7] = var0;
            var0 = {};
            var5 = 'animated';
            var0.key = var5;
            var5 = function () {
                var0 = false;
                return var0;
            };
            var0.get = var5;
            var1[8] = var0;
            var0 = {};
            var5 = 'defaultDiversityChild';
            var0.key = var5;
            var5 = function () {
                _fun25046: for(var _fun25046_ip = 0; ; ) switch(_fun25046_ip) {
case 0:
                    var0 = this;
                    var1 = var0.hasDiversity;
                    if(!var1) { _fun25046_ip = 25; continue _fun25046 }
case 12:
                    var3 = _closure1_slot6;
                    var1 = null;
                    if(!(var1 == var3)) { _fun25046_ip = 29; continue _fun25046 }
case 25:
                    var3 = null;
                    return var3;
case 29:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot5;
                    var3 = var2.convert;
                    var2 = var3.toCodePoint;
                    var2 = var2.bind(var3)(var4);
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun25046_ip = 68; continue _fun25046 }
case 65:
                    var1 = var2;
case 68:
                    var0 = var0.diversityChildren;
                    var0 = var0[var1];
                    return var0;
                }
            };
            var0.get = var5;
            var1[9] = var0;
            var0 = {};
            var5 = 'url';
            var0.key = var5;
            var5 = function () {
                _fun25047: for(var _fun25047_ip = 0; ; ) switch(_fun25047_ip) {
case 0:
                    var0 = this;
                    var1 = var0.defaultDiversityChild;
                    var2 = null;
                    if(!(var2 == var1)) { _fun25047_ip = 58; continue _fun25047 }
case 15:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getURL;
                    var0 = var0.surrogates;
                    var0 = var2.bind(var3)(var0);
                    _fun25047_ip = 99; continue _fun25047;
case 58:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getURL;
                    var1 = var1.surrogates;
                    var0 = var2.bind(var3)(var1);
case 99:
                    return var0;
                }
            };
            var0.get = var5;
            var1[10] = var0;
            var0 = {};
            var5 = 'name';
            var0.key = var5;
            var5 = function () {
                _fun25048: for(var _fun25048_ip = 0; ; ) switch(_fun25048_ip) {
case 0:
                    var3 = this;
                    var0 = var3.hasDiversity;
                    if(!var0) { _fun25048_ip = 25; continue _fun25048 }
case 12:
                    var0 = _closure1_slot6;
                    var2 = null;
                    if(!(var2 == var0)) { _fun25048_ip = 33; continue _fun25048 }
case 25:
                    var0 = var3.uniqueName;
                    _fun25048_ip = 104; continue _fun25048;
case 33:
                    var5 = var3.uniqueName;
                    var4 = _closure1_slot20;
                    var1 = _closure1_slot6;
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var2 == var1;
                    var4 = undefined;
                    if(var2) { _fun25048_ip = 74; continue _fun25048 }
case 63:
                    var2 = var1.names;
                    var1 = 0;
                    var4 = var2[var1];
case 74:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '::';
                    var0 = var3.bind(var2)(var5, var1, var4);
case 104:
                    return var0;
                }
            };
            var0.get = var5;
            var1[11] = var0;
            var0 = {};
            var5 = 'optionallyDiverseSequence';
            var0.key = var5;
            var5 = function () {
                _fun25049: for(var _fun25049_ip = 0; ; ) switch(_fun25049_ip) {
case 0:
                    var0 = this;
                    var1 = var0.defaultDiversityChild;
                    var2 = null;
                    if(!(var2 == var1)) { _fun25049_ip = 22; continue _fun25049 }
case 15:
                    var0 = var0.surrogates;
                    _fun25049_ip = 27; continue _fun25049;
case 22:
                    var0 = var1.surrogates;
case 27:
                    return var0;
                }
            };
            var0.get = var5;
            var1[12] = var0;
            var0 = {};
            var5 = 'forEachDiversity';
            var0.key = var5;
            var5 = function arg0() {
                _fun25050: for(var _fun25050_ip = 0; ; ) switch(_fun25050_ip) {
case 0:
                    var0 = this;
                    var2 = var0.diversityChildren;
                    var1 = null;
                    if(!(var1 != var2)) { _fun25050_ip = 61; continue _fun25050 }
case 15:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.each;
                    var1 = var0.diversityChildren;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
case 61:
                    var0 = undefined;
                    return var0;
                }
            };
            var0.value = var5;
            var1[13] = var0;
            var0 = {};
            var5 = 'forEachName';
            var0.key = var5;
            var4 = function arg0() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.each;
                var1 = this;
                var2 = var1.names;
                var1 = arg0;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var0.value = var4;
            var1[14] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var3 = var3.bind(var0)();
        var _closure1_slot12 = var3;
        var14 = var5.Map;
        var15 = var14.prototype;
        var15 = Object.create(var15, {constructor: {value: var14}});
        var20 = var15;
        var14 = new var20[var14](var19);
        var14 = var14 instanceof Object ? var14 : var15;
        var _closure1_slot13 = var14;
        var16 = var5.String;
        var15 = var16.fromCodePoint;
        var14 = 917631;
        var14 = var15.bind(var16)(var14);
        var _closure1_slot14 = var14;
        var15 = var5.String;
        var14 = var15.fromCodePoint;
        var5 = 127988;
        var5 = var14.bind(var15)(var5);
        var _closure1_slot15 = var5;
        var5 = /^(?:\uDB40[\uDC61-\uDC7A])$/;
        var _closure1_slot16 = var5;
        var5 = {};
        var14 = function () {
            var0 = _closure1_slot6;
            return var0;
        };
        var5.getDefaultDiversitySurrogate = var14;
        var14 = function arg0() {
            _fun25053: for(var _fun25053_ip = 0; ; ) switch(_fun25053_ip) {
case 0:
                var0 = arg0;
                var3 = null;
                var2 = var3 != var0;
                var1 = null;
                if(!var2) { _fun25053_ip = 27; continue _fun25053 }
case 14:
                var2 = '';
                var1 = null;
                if(!(var2 !== var0)) { _fun25053_ip = 27; continue _fun25053 }
case 24:
                var1 = var0;
case 27:
                _closure1_slot6 = var1;
                var0 = undefined;
                return var0;
            }
        };
        var5.setDefaultDiversitySurrogate = var14;
        var14 = function () {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.emojisByCategory;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.getCategories = var14;
        var5.getByName = var13;
        var13 = function arg0() {
            _fun25055: for(var _fun25055_ip = 0; ; ) switch(_fun25055_ip) {
case 0:
                var4 = arg0;
                var1 = _closure1_slot13;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if(!(var1 == var0)) { _fun25055_ip = 159; continue _fun25055 }
case 29:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 3;
                var3 = var8[var1];
                var6 = undefined;
                var3 = var7.bind(var6)(var3);
                var3 = var3.emojisByCategory;
                var9 = var3[var4];
                var5 = _closure1_slot1;
                var3 = 5;
                var3 = var8[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.filterUnsupportedEmojis;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var8 = var1.emojis;
                var7 = var8.slice;
                var1 = 0;
                var6 = var9[var1];
                var1 = 1;
                var1 = var9[var1];
                var1 = var7.bind(var8)(var6, var1);
                var5 = var3.bind(var5)(var1);
                var3 = var5.map;
                var1 = _closure1_slot21;
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot13;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
case 159:
                return var0;
            }
        };
        var5.getByCategory = var13;
        var5.contentHasUnicodeOrEmoji = var12;
        var12 = function arg0() {
            var3 = arg0;
            var2 = var3.replace;
            var1 = _closure1_slot9;
            var0 = function(arg0, arg1) { // Environment: var0
                var3 = _closure1_slot26;
                var2 = undefined;
                var1 = arg1;
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.translateInlineEmojiToSurrogates = var12;
        var12 = function arg0() {
            _fun25058: for(var _fun25058_ip = 0; ; ) switch(_fun25058_ip) {
case 0:
                var2 = arg0;
                var1 = _closure1_slot23;
                var3 = undefined;
                var1 = var1.bind(var3)(var2);
                if(var1) { _fun25058_ip = 24; continue _fun25058 }
case 20:
                var1 = null;
                return var1;
case 24:
                var1 = _closure1_slot25;
                var0 = true;
                var3 = var1.bind(var3)(var2, var0);
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    _fun25059: for(var _fun25059_ip = 0; ; ) switch(_fun25059_ip) {
case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = 'text';
                        if(!(var0 !== var2)) { _fun25059_ip = 24; continue _fun25059 }
case 16:
                        var0 = var1.emojiName;
                        _fun25059_ip = 29; continue _fun25059;
case 24:
                        var0 = var1.text;
case 29:
                        return var0;
                    }
                };
                var3 = var1.bind(var3)(var0);
                var1 = var3.join;
                var0 = '';
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if(!(var1 !== var2)) { _fun25058_ip = 76; continue _fun25058 }
case 73:
                var0 = var1;
case 76:
                return var0;
            }
        };
        var5.maybeTranslateSurrogatesToInlineEmoji = var12;
        var5.findInlineEmojisFromSurrogates = var11;
        var11 = function arg0() {
            var2 = _closure1_slot25;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun25061: for(var _fun25061_ip = 0; ; ) switch(_fun25061_ip) {
case 0:
                    var1 = arg0;
                    var2 = var1.type;
                    var0 = 'text';
                    if(!(var0 !== var2)) { _fun25061_ip = 24; continue _fun25061 }
case 16:
                    var0 = var1.emojiName;
                    _fun25061_ip = 29; continue _fun25061;
case 24:
                    var0 = var1.text;
case 29:
                    return var0;
                }
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.join;
            var0 = '';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.translateSurrogatesToInlineEmoji = var11;
        var5.convertNameToSurrogate = var10;
        var5.convertSurrogateToName = var9;
        var9 = function arg0() {
            _fun25062: for(var _fun25062_ip = 0; ; ) switch(_fun25062_ip) {
case 0:
                var4 = arg0;
                var2 = arguments[1];
                var3 = arguments[2];
                var6 = undefined;
                if(!(var2 === var6)) { _fun25062_ip = 17; continue _fun25062 }
case 15:
                var2 = true;
case 17:
                if(!(var3 === var6)) { _fun25062_ip = 25; continue _fun25062 }
case 21:
                var3 = '';
case 25:
                var1 = global;
                var0 = var1.Object;
                var0 = var0.prototype;
                var9 = var0.hasOwnProperty;
                var8 = var9.call;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 7;
                var5 = var5[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var8.bind(var9)(var5, var4);
                if(!var5) { _fun25062_ip = 102; continue _fun25062 }
case 81:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var5.bind(var6)(var0);
                var3 = var0[var4];
case 102:
                var0 = var3;
                if(!var2) { _fun25062_ip = 129; continue _fun25062 }
case 108:
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var0 = var2.bind(var1)(var3, var1);
case 129:
                return var0;
            }
        };
        var5.convertShortcutToName = var9;
        var9 = function arg0() {
            var2 = _closure1_slot22;
            var4 = _closure1_slot27;
            var5 = _closure1_slot8;
            var3 = var5.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                var3 = arg0;
                var2 = var3.replace;
                var1 = arg1;
                var0 = '';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = arg0;
            var3 = var3.bind(var5)(var1, var0);
            var1 = undefined;
            var0 = false;
            var0 = var4.bind(var1)(var3, var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var5.convertSurrogateToBase = var9;
        var9 = function arg0() {
            _fun25065: for(var _fun25065_ip = 0; ; ) switch(_fun25065_ip) {
case 0:
                var5 = arg0;
                var2 = _closure1_slot17;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = var1.emojis;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if(var1) { _fun25065_ip = 106; continue _fun25065 }
case 55:
                var6 = var2.value;
                var1 = var6.hasDiversityParent;
                if(var1) { _fun25065_ip = 74; continue _fun25065 }
case 68:
                var1 = var6.hasMultiDiversityParent;
case 74:
                if(var1) { _fun25065_ip = 91; continue _fun25065 }
case 77:
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)(var6);
                var1 = var5.bind(var0)(var1);
case 91:
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if(!var1) { _fun25065_ip = 55; continue _fun25065 }
case 106:
                return var0;
            }
        };
        var5.forEach = var9;
        var9 = 3;
        var10 = var8[var9];
        var10 = var7.bind(var0)(var10);
        var10 = var10.numDiversitySprites;
        var5.numDiversitySprites = var10;
        var9 = var8[var9];
        var9 = var7.bind(var0)(var9);
        var9 = var9.numNonDiversitySprites;
        var5.numNonDiversitySprites = var9;
        var9 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
        var5.EMOJI_NAME_RE = var9;
        var5.EMOJI_NAME_AND_DIVERSITY_RE = var6;
        var6 = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\\/3|<\\3|:\-\\|:\-\\/|=\-\\|=\-\\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/;
        var5.EMOJI_SHORTCUT_RE = var6;
        var6 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.toArray;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.surrogateToEmoji;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.hasSurrogates = var6;
        var6 = 8;
        var6 = var8[var6];
        var8 = var7.bind(var0)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/emojis/UnicodeEmojis.tsx';
        var6 = var7.bind(var8)(var6);
        var2.default = var5;
        var2.DIVERSITY_SURROGATES = var4;
        var2.Emoji = var3;
        var1 = function(arg0) { // Environment: var1
            _fun25068: for(var _fun25068_ip = 0; ; ) switch(_fun25068_ip) {
case 0:
                var3 = arg0;
                var0 = var3.id;
                var2 = null;
                var1 = var2 == var0;
                var0 = null;
                if(!var1) { _fun25068_ip = 72; continue _fun25068 }
case 19:
                var1 = var3.name;
                var1 = var2 != var1;
                var0 = null;
                if(!var1) { _fun25068_ip = 72; continue _fun25068 }
case 33:
                var1 = var3.name;
                var4 = var1.length;
                var1 = 0;
                var1 = var4 > var1;
                var0 = null;
                if(!var1) { _fun25068_ip = 72; continue _fun25068 }
case 54:
                var1 = {};
                var3 = var3.name;
                var1.name = var3;
                var1.id = var2;
                var0 = var1;
case 72:
                return var0;
            }
        };
        var2.asUnicodeEmoji = var1;
        return var0;})(undefined,undefined,undefined,undefined,undefined,undefined,[6,7,3105,3106,3107,3108,22,12604,2]);