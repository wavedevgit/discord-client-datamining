// modules/interaction_components/InteractionComponentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun36616: for (var _fun36616_ip = 0;;) switch (_fun36616_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun36616_ip = 46;
                    continue _fun36616
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun36616_ip = 55;
                    continue _fun36616
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun36616_ip = 343;
                    continue _fun36616
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun36616_ip = 323;
                    continue _fun36616
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun36616_ip = 283;
                    continue _fun36616
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun36616_ip = 270;
                    continue _fun36616
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
                    _fun36616_ip = 163;
                    continue _fun36616
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun36616_ip = 179;
                    continue _fun36616
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun36616_ip = 249;
                    continue _fun36616
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun36616_ip = 249;
                    continue _fun36616
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun36616_ip = 234;
                    continue _fun36616
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun36616_ip = 247;
                    continue _fun36616
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun36616_ip = 265;
                continue _fun36616;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun36616_ip = 283;
                continue _fun36616;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun36616_ip = 323;
                    continue _fun36616
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
                    _fun36616_ip = 330;
                    continue _fun36616
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun36617: for (var _fun36617_ip = 0;;) switch (_fun36617_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun36617_ip = 56;
                                continue _fun36617
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
                            _fun36617_ip = 67;
                            continue _fun36617;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun36618: for (var _fun36618_ip = 0;;) switch (_fun36618_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun36618_ip = 23;
                    continue _fun36618
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun36618_ip = 33;
                    continue _fun36618
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
                    _fun36618_ip = 70;
                    continue _fun36618
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun36618_ip = 55;
                    continue _fun36618
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var4 = function arg0() {
        _fun36619: for (var _fun36619_ip = 0;;) switch (_fun36619_ip) {
            case 0:
                var0 = global;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var0 = new var9[var0](var8);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = _closure1_slot6;
                var4 = undefined;
                var1 = arg0;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun36619_ip = 87;
                    continue _fun36619
                }
            case 57:
                var6 = _closure1_slot9;
                var1 = var2.value;
                var1 = var6.bind(var4)(var0, var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun36619_ip = 57;
                    continue _fun36619
                }
            case 87:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var0 = function arg0, arg1() {
        _fun36620: for (var _fun36620_ip = 0;;) switch (_fun36620_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var5;
                var3 = var5.set;
                var0 = var2.id;
                var0 = var3.bind(var5)(var0, var2);
                var6 = var2.type;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 4;
                var4 = var0[var8];
                var0 = undefined;
                var4 = var7.bind(var0)(var4);
                var4 = var4.ComponentType;
                var4 = var4.ACTION_ROW;
                if (!(var4 !== var6)) {
                    _fun36620_ip = 205;
                    continue _fun36620
                }
            case 77:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var7.bind(var0)(var4);
                var4 = var4.ComponentType;
                var4 = var4.SECTION;
                if (!(var4 !== var6)) {
                    _fun36620_ip = 166;
                    continue _fun36620
                }
            case 110:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var7.bind(var0)(var4);
                var4 = var4.ComponentType;
                var4 = var4.CONTAINER;
                if (!(var4 === var6)) {
                    _fun36620_ip = 226;
                    continue _fun36620
                }
            case 143:
                var7 = var2.components;
                var6 = var7.forEach;
                var4 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var6.bind(var7)(var4);
                _fun36620_ip = 226;
                continue _fun36620;
            case 166:
                var7 = var2.components;
                var6 = var7.forEach;
                var4 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot9;
                var3 = var2.accessory;
                var3 = var4.bind(var0)(var5, var3);
                _fun36620_ip = 226;
                continue _fun36620;
            case 205:
                var3 = var2.components;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 226:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function arg0, arg1() {
        _fun36624: for (var _fun36624_ip = 0;;) switch (_fun36624_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = var1.type;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 4;
                var6 = var2[var7];
                var2 = undefined;
                var6 = var8.bind(var2)(var6);
                var6 = var6.ComponentType;
                var6 = var6.ACTION_ROW;
                if (!(var6 !== var5)) {
                    _fun36624_ip = 222;
                    continue _fun36624
                }
            case 61:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var2)(var6);
                var6 = var6.ComponentType;
                var6 = var6.SECTION;
                if (!(var6 !== var5)) {
                    _fun36624_ip = 164;
                    continue _fun36624
                }
            case 94:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var2)(var4);
                var4 = var4.ComponentType;
                var4 = var4.CONTAINER;
                if (!(var4 !== var5)) {
                    _fun36624_ip = 129;
                    continue _fun36624
                }
            case 127:
                return var2;
            case 129:
                var5 = var1.components;
                var4 = var5.find;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var4.bind(var5)(var2);
                var2 = null;
                var5 = var2 != var4;
                if (!var5) {
                    _fun36624_ip = 162;
                    continue _fun36624
                }
            case 159:
                var2 = var4;
            case 162:
                return var2;
            case 164:
                var2 = var1.accessory;
                var2 = var2.id;
                if (!(var2 !== var3)) {
                    _fun36624_ip = 214;
                    continue _fun36624
                }
            case 179:
                var4 = var1.components;
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var4 = var2 != var3;
                if (!var4) {
                    _fun36624_ip = 212;
                    continue _fun36624
                }
            case 209:
                var2 = var3;
            case 212:
                _fun36624_ip = 220;
                continue _fun36624;
            case 214:
                var2 = var1.accessory;
            case 220:
                return var2;
            case 222:
                var2 = var1.components;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun36624_ip = 255;
                    continue _fun36624
                }
            case 252:
                var0 = var1;
            case 255:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = function arg0() {
        _fun36628: for (var _fun36628_ip = 0;;) switch (_fun36628_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 4;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ACTION_ROW;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 900;
                    continue _fun36628
                }
            case 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.SECTION;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 861;
                    continue _fun36628
                }
            case 88:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CONTAINER;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 853;
                    continue _fun36628
                }
            case 124:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.LABEL;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 837;
                    continue _fun36628
                }
            case 160:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.BUTTON;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 196:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.STRING_SELECT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 232:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_INPUT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 268:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.USER_SELECT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 304:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ROLE_SELECT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 340:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 376:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHANNEL_SELECT;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 412:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_DISPLAY;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 448:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.THUMBNAIL;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 484:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MEDIA_GALLERY;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 520:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.FILE;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 556:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.SEPARATOR;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 592:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CONTENT_INVENTORY_ENTRY;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 628:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.FILE_UPLOAD;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 664:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKPOINT_CARD;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 700:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.RADIO_GROUP;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 733:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX_GROUP;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 766:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX;
                if (!(var2 !== var3)) {
                    _fun36628_ip = 831;
                    continue _fun36628
                }
            case 799:
                var4 = _closure1_slot4;
                var3 = var4.warn;
                var2 = var0.type;
                var1 = 'getComponentChildren: Unknown component type';
                var1 = var3.bind(var4)(var1, var2);
                var1 = new Array(0);
                return var1;
            case 831:
                var1 = new Array(0);
                return var1;
            case 837:
                var2 = var0.component;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            case 853:
                var1 = var0.components;
                return var1;
            case 861:
                var8 = var0.components;
                var1 = new Array(1);
                var7 = 0;
                var9 = var1;
                var3 = arraySpread(var9, var8, var7);
                var2 = var0.accessory;
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                return var1;
            case 900:
                var0 = var0.components;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun36629: for (var _fun36629_ip = 0;;) switch (_fun36629_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var4;
                var8 = function arg0, arg1() {
                    _fun36630: for (var _fun36630_ip = 0;;) switch (_fun36630_ip) {
                        case 0:
                            var3 = _closure1_slot12;
                            var5 = _closure2_slot0;
                            var2 = new Array(1);
                            var4 = 0;
                            var6 = var2;
                            var1 = arraySpread(var6, var5, var4);
                            var0 = arg1;
                            var2[var1] = var0;
                            var0 = 1;
                            var0 = var1 + var0;
                            var1 = undefined;
                            var0 = arg0;
                            var1 = var3.bind(var1)(var0, var2);
                            var0 = null;
                            var2 = var0 == var1;
                            if (var2) {
                                _fun36630_ip = 65;
                                continue _fun36630
                            }
                        case 62:
                            var0 = var1;
                        case 65:
                            return var0;
                    }
                };
                var _closure2_slot2 = var8;
                var10 = var1.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 4;
                var5 = var3[var7];
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var5 = var5.ComponentType;
                var6 = var5.ACTION_ROW;
                var9 = true;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 74:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.BUTTON;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 112:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.STRING_SELECT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 150:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.TEXT_INPUT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 188:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.USER_SELECT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 226:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.ROLE_SELECT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 264:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.MENTIONABLE_SELECT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 302:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CHANNEL_SELECT;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 340:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.SECTION;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 378:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.TEXT_DISPLAY;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 416:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.THUMBNAIL;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 454:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.MEDIA_GALLERY;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 492:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.FILE;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 530:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.SEPARATOR;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 568:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CONTAINER;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 606:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.LABEL;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 644:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.FILE_UPLOAD;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 682:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CHECKPOINT_CARD;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 720:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.RADIO_GROUP;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 758:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CHECKBOX_GROUP;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 796:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CHECKBOX;
                var5 = true;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 934;
                    continue _fun36629
                }
            case 831:
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CONTENT_INVENTORY_ENTRY;
                if (!(var6 !== var10)) {
                    _fun36629_ip = 897;
                    continue _fun36629
                }
            case 864:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.UNKNOWN;
                var5 = false;
                _fun36629_ip = 934;
                continue _fun36629;
            case 897:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 6;
                var6 = var11[var6];
                var11 = var10.bind(var3)(var6);
                var10 = var11.isContentInventoryEmbedEnabled;
                var6 = 'canShowComponent';
                var5 = var10.bind(var11)(var6);
            case 934:
                if (var5) {
                    _fun36629_ip = 941;
                    continue _fun36629
                }
            case 937:
                var5 = null;
                return var5;
            case 941:
                var _closure2_slot1 = var9;
                var6 = var1.type;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.ACTION_ROW;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 4461;
                    continue _fun36629
                }
            case 986:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.BUTTON;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 4315;
                    continue _fun36629
                }
            case 1022:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.STRING_SELECT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 4165;
                    continue _fun36629
                }
            case 1058:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.TEXT_INPUT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 4036;
                    continue _fun36629
                }
            case 1094:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.USER_SELECT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3899;
                    continue _fun36629
                }
            case 1130:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.ROLE_SELECT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3762;
                    continue _fun36629
                }
            case 1166:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.MENTIONABLE_SELECT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3625;
                    continue _fun36629
                }
            case 1202:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CHANNEL_SELECT;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3477;
                    continue _fun36629
                }
            case 1238:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.SECTION;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3316;
                    continue _fun36629
                }
            case 1274:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.TEXT_DISPLAY;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3257;
                    continue _fun36629
                }
            case 1310:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.THUMBNAIL;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3153;
                    continue _fun36629
                }
            case 1346:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.MEDIA_GALLERY;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 3079;
                    continue _fun36629
                }
            case 1382:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.FILE;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2966;
                    continue _fun36629
                }
            case 1418:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.SEPARATOR;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2851;
                    continue _fun36629
                }
            case 1454:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CONTENT_INVENTORY_ENTRY;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2772;
                    continue _fun36629
                }
            case 1490:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CONTAINER;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2595;
                    continue _fun36629
                }
            case 1526:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.LABEL;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2496;
                    continue _fun36629
                }
            case 1562:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.FILE_UPLOAD;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 2405;
                    continue _fun36629
                }
            case 1598:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CHECKPOINT_CARD;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 1972;
                    continue _fun36629
                }
            case 1634:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.RADIO_GROUP;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 1903;
                    continue _fun36629
                }
            case 1670:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CHECKBOX_GROUP;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 1812;
                    continue _fun36629
                }
            case 1703:
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var10.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.CHECKBOX;
                if (!(var5 !== var6)) {
                    _fun36629_ip = 1766;
                    continue _fun36629
                }
            case 1736:
                var11 = _closure1_slot4;
                var10 = var11.warn;
                var6 = var1.type;
                var5 = 'transformComponent: Unknown component type';
                var5 = var10.bind(var11)(var5, var6);
                var5 = null;
                return var5;
            case 1766:
                var5 = {};
                var6 = var1.type;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.default;
                var5.default = var6;
                return var5;
            case 1812:
                var5 = {};
                var6 = var1.type;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.options;
                var5.options = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                var10 = var1.required;
                var6 = null;
                var6 = var6 != var10;
                if (!var6) {
                    _fun36629_ip = 1896;
                    continue _fun36629
                }
            case 1893:
                var6 = var10;
            case 1896:
                var5.required = var6;
                return var5;
            case 1903:
                var5 = {};
                var6 = var1.type;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.options;
                var5.options = var6;
                var10 = var1.required;
                var6 = null;
                var6 = var6 != var10;
                if (!var6) {
                    _fun36629_ip = 1965;
                    continue _fun36629
                }
            case 1962:
                var6 = var10;
            case 1965:
                var5.required = var6;
                return var5;
            case 1972:
                var13 = var1.checkpoint_data;
                var10 = var13.version;
                var5 = _closure1_slot3;
                var6 = var5.V2025;
                var12 = null;
                var5 = null;
                if (!(var10 === var6)) {
                    _fun36629_ip = 2403;
                    continue _fun36629
                }
            case 2007:
                var6 = {};
                var10 = var1.type;
                var6.type = var10;
                var10 = _closure1_slot13;
                var10 = var10.bind(var3)(var4);
                var6.id = var10;
                var10 = {};
                var11 = var13.version;
                var10.version = var11;
                var11 = var13.card_id;
                var10.cardId = var11;
                var11 = var13.power_level;
                var10.powerLevel = var11;
                var11 = var13.power_level_percentile;
                var10.powerLevelPercentile = var11;
                var11 = var13.num_messages_sent;
                var10.numMessagesSent = var11;
                var11 = var13.total_voice_minutes;
                var10.totalVoiceMinutes = var11;
                var11 = var13.num_emojis_sent;
                var10.numEmojisSent = var11;
                var11 = var13.top_guild;
                var14 = var12 != var11;
                var11 = undefined;
                if (!var14) {
                    _fun36629_ip = 2191;
                    continue _fun36629
                }
            case 2137:
                var14 = {};
                var15 = var13.top_guild;
                var15 = var15.guild_id;
                var14.guildId = var15;
                var15 = var13.top_guild;
                var15 = var15.guild_name;
                var14.guildName = var15;
                var15 = var13.top_guild;
                var15 = var15.guild_icon;
                var14.guildIcon = var15;
                var11 = var14;
            case 2191:
                var10.topGuild = var11;
                var11 = var13.top_emoji;
                var14 = var12 != var11;
                var11 = undefined;
                if (!var14) {
                    _fun36629_ip = 2309;
                    continue _fun36629
                }
            case 2213:
                var14 = {};
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 12;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.isProbablyAValidSnowflake;
                var15 = var13.top_emoji;
                var15 = var15.emoji_id;
                var16 = var16.bind(var17)(var15);
                var15 = undefined;
                if (!var16) {
                    _fun36629_ip = 2275;
                    continue _fun36629
                }
            case 2263:
                var16 = var13.top_emoji;
                var15 = var16.emoji_id;
            case 2275:
                var14.emojiId = var15;
                var16 = var13.top_emoji;
                var17 = var12 == var16;
                var15 = undefined;
                if (var17) {
                    _fun36629_ip = 2301;
                    continue _fun36629
                }
            case 2295:
                var15 = var16.emoji_name;
            case 2301:
                var14.emojiName = var15;
                var11 = var14;
            case 2309:
                var10.topEmoji = var11;
                var11 = var13.top_game;
                var12 = var12 != var11;
                var11 = undefined;
                if (!var12) {
                    _fun36629_ip = 2388;
                    continue _fun36629
                }
            case 2329:
                var12 = {};
                var14 = var13.top_game;
                var14 = var14.application_id;
                var12.applicationId = var14;
                var14 = var13.top_game;
                var14 = var14.application_name;
                var12.applicationName = var14;
                var13 = var13.top_game;
                var13 = var13.application_image_id;
                var12.applicationImageId = var13;
                var11 = var12;
            case 2388:
                var10.topGame = var11;
                var6.checkpointData = var10;
                var5 = var6;
            case 2403:
                return var5;
            case 2405:
                var5 = {};
                var6 = var1.type;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var10 = var1.required;
                var6 = null;
                var6 = var6 != var10;
                if (!var6) {
                    _fun36629_ip = 2467;
                    continue _fun36629
                }
            case 2464:
                var6 = var10;
            case 2467:
                var5.required = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                return var5;
            case 2496:
                var6 = var1.component;
                var5 = 0;
                var10 = var8.bind(var3)(var6, var5);
                var5 = null;
                var6 = var5 == var10;
                if (var6) {
                    _fun36629_ip = 2593;
                    continue _fun36629
                }
            case 2519:
                var6 = {};
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ComponentType;
                var11 = var11.LABEL;
                var6.type = var11;
                var11 = _closure1_slot13;
                var11 = var11.bind(var3)(var4);
                var6.id = var11;
                var11 = var1.label;
                var6.label = var11;
                var11 = var1.description;
                var6.description = var11;
                var6.component = var10;
                var5 = var6;
            case 2593:
                return var5;
            case 2595:
                var10 = var1.components;
                var6 = var10.map;
                var5 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var12 = var6.bind(var10)(var5);
                var6 = var12.filter;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var5 = var11.bind(var3)(var5);
                var5 = var5.isNotNullish;
                var6 = var6.bind(var12)(var5);
                var5 = {};
                var10 = var10[var7];
                var10 = var11.bind(var3)(var10);
                var10 = var10.ComponentType;
                var10 = var10.CONTAINER;
                var5.type = var10;
                var10 = _closure1_slot13;
                var10 = var10.bind(var3)(var4);
                var5.id = var10;
                var11 = var1.accent_color;
                var10 = null;
                var11 = var10 != var11;
                var10 = undefined;
                if (!var11) {
                    _fun36629_ip = 2749;
                    continue _fun36629
                }
            case 2709:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 11;
                var11 = var13[var11];
                var14 = var12.bind(var3)(var11);
                var13 = var14.int2hsl;
                var12 = var1.accent_color;
                var11 = false;
                var10 = var13.bind(var14)(var12, var11);
            case 2749:
                var5.accentColor = var10;
                var10 = var1.spoiler;
                var5.spoiler = var10;
                var5.components = var6;
                return var5;
            case 2772:
                var6 = var1.content_inventory_entry;
                var5 = null;
                var6 = var5 == var6;
                if (var6) {
                    _fun36629_ip = 2849;
                    continue _fun36629
                }
            case 2787:
                var6 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var7];
                var10 = var11.bind(var3)(var10);
                var10 = var10.ComponentType;
                var10 = var10.CONTENT_INVENTORY_ENTRY;
                var6.type = var10;
                var10 = _closure1_slot13;
                var10 = var10.bind(var3)(var4);
                var6.id = var10;
                var10 = var1.content_inventory_entry;
                var6.contentInventoryEntry = var10;
                var5 = var6;
            case 2849:
                return var5;
            case 2851:
                var5 = {};
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.SEPARATOR;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var11 = var1.divider;
                var10 = null;
                var6 = var10 == var11;
                if (var6) {
                    _fun36629_ip = 2917;
                    continue _fun36629
                }
            case 2914:
                var6 = var11;
            case 2917:
                var5.divider = var6;
                var6 = var1.spacing;
                if (!(var10 == var6)) {
                    _fun36629_ip = 2960;
                    continue _fun36629
                }
            case 2931:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var7];
                var10 = var11.bind(var3)(var10);
                var10 = var10.SeparatorSpacingSize;
                var6 = var10.SMALL;
            case 2960:
                var5.spacing = var6;
                return var5;
            case 2966:
                var5 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.FILE;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = 10;
                var6 = var11[var6];
                var11 = var10.bind(var3)(var6);
                var10 = var11.toUnfurledMediaItem;
                var6 = var1.file;
                var6 = var10.bind(var11)(var6);
                var5.file = var6;
                var6 = var1.name;
                var5.name = var6;
                var6 = var1.size;
                var5.size = var6;
                var6 = var1.spoiler;
                var5.spoiler = var6;
                return var5;
            case 3079:
                var5 = {};
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.MEDIA_GALLERY;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var11 = var1.items;
                var10 = var11.map;
                var6 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.toUnfurledMediaItem;
                    var2 = var1.media;
                    var2 = var3.bind(var4)(var2);
                    var0.media = var2;
                    var2 = var1.description;
                    var0.description = var2;
                    var1 = var1.spoiler;
                    var0.spoiler = var1;
                    return var0;
                };
                var6 = var10.bind(var11)(var6);
                var5.items = var6;
                return var5;
            case 3153:
                var5 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.THUMBNAIL;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = 10;
                var6 = var11[var6];
                var11 = var10.bind(var3)(var6);
                var10 = var11.toUnfurledMediaItem;
                var6 = var1.media;
                var6 = var10.bind(var11)(var6);
                var5.media = var6;
                var6 = var1.description;
                var5.description = var6;
                var6 = var1.spoiler;
                var5.spoiler = var6;
                return var5;
            case 3257:
                var5 = {};
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.TEXT_DISPLAY;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.content;
                var5.content = var6;
                return var5;
            case 3316:
                var10 = var1.components;
                var6 = var10.map;
                var5 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10 = var6.bind(var10)(var5);
                var6 = var10.filter;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 8;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var5 = var5.isNotNullish;
                var10 = var6.bind(var10)(var5);
                var6 = var1.accessory;
                var5 = var10.length;
                var8 = var8.bind(var3)(var6, var5);
                var12 = var10.length;
                var11 = null;
                var6 = 0;
                var5 = null;
                if (!(var6 !== var12)) {
                    _fun36629_ip = 3475;
                    continue _fun36629
                }
            case 3405:
                var6 = var11 == var8;
                var5 = null;
                if (var6) {
                    _fun36629_ip = 3475;
                    continue _fun36629
                }
            case 3414:
                var6 = {};
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ComponentType;
                var11 = var11.SECTION;
                var6.type = var11;
                var11 = _closure1_slot13;
                var11 = var11.bind(var3)(var4);
                var6.id = var11;
                var6.components = var10;
                var6.accessory = var8;
                var5 = var6;
            case 3475:
                return var5;
            case 3477:
                var5 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.CHANNEL_SELECT;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 3563;
                    continue _fun36629
                }
            case 3560:
                var6 = var8;
            case 3563:
                var5.required = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                var6 = var1.channel_types;
                var5.channelTypes = var6;
                var6 = var1.default_values;
                var5.defaultValues = var6;
                return var5;
            case 3625:
                var5 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.MENTIONABLE_SELECT;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 3711;
                    continue _fun36629
                }
            case 3708:
                var6 = var8;
            case 3711:
                var5.required = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                var6 = var1.default_values;
                var5.defaultValues = var6;
                return var5;
            case 3762:
                var5 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.ROLE_SELECT;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 3848;
                    continue _fun36629
                }
            case 3845:
                var6 = var8;
            case 3848:
                var5.required = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                var6 = var1.default_values;
                var5.defaultValues = var6;
                return var5;
            case 3899:
                var5 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.USER_SELECT;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 3985;
                    continue _fun36629
                }
            case 3982:
                var6 = var8;
            case 3985:
                var5.required = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                var6 = var1.default_values;
                var5.defaultValues = var6;
                return var5;
            case 4036:
                var5 = {};
                var6 = var1.type;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.style;
                var5.style = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.label;
                var5.label = var6;
                var6 = var1.value;
                var5.value = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 4136;
                    continue _fun36629
                }
            case 4133:
                var6 = var8;
            case 4136:
                var5.required = var6;
                var6 = var1.min_length;
                var5.minLength = var6;
                var6 = var1.max_length;
                var5.maxLength = var6;
                return var5;
            case 4165:
                var5 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var6 = var6.STRING_SELECT;
                var5.type = var6;
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var4);
                var5.id = var6;
                var6 = var1.custom_id;
                var5.customId = var6;
                var6 = var1.disabled;
                var5.disabled = var6;
                var8 = var1.required;
                var6 = null;
                var6 = var6 != var8;
                if (!var6) {
                    _fun36629_ip = 4251;
                    continue _fun36629
                }
            case 4248:
                var6 = var8;
            case 4251:
                var5.required = var6;
                var10 = var1.options;
                var8 = var10.map;
                var6 = function(arg0) { // Environment: var0
                    _fun36632: for (var _fun36632_ip = 0;;) switch (_fun36632_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 9;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.SelectOptionType;
                            var1 = var1.STRING;
                            var0.type = var1;
                            var1 = var2.label;
                            var0.label = var1;
                            var1 = var2.value;
                            var0.value = var1;
                            var1 = var2.default;
                            var0.default = var1;
                            var1 = var2.description;
                            var0.description = var1;
                            var4 = var2.emoji;
                            var1 = null;
                            var4 = var1 != var4;
                            var1 = undefined;
                            if (!var4) {
                                _fun36632_ip = 122;
                                continue _fun36632
                            }
                        case 99:
                            var4 = _closure1_slot5;
                            var3 = var2.emoji;
                            var2 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var2);
                        case 122:
                            var0.emoji = var1;
                            return var0;
                    }
                };
                var6 = var8.bind(var10)(var6);
                var5.options = var6;
                var6 = var1.placeholder;
                var5.placeholder = var6;
                var6 = var1.min_values;
                var5.minValues = var6;
                var6 = var1.max_values;
                var5.maxValues = var6;
                return var5;
            case 4315:
                var6 = var1.emoji;
                var5 = null;
                var5 = var5 != var6;
                var6 = undefined;
                if (!var5) {
                    _fun36629_ip = 4348;
                    continue _fun36629
                }
            case 4332:
                var8 = _closure1_slot5;
                var5 = var1.emoji;
                var6 = var8.bind(var3)(var5, var9);
            case 4348:
                var5 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var3)(var8);
                var8 = var8.ComponentType;
                var8 = var8.BUTTON;
                var5.type = var8;
                var8 = _closure1_slot13;
                var8 = var8.bind(var3)(var4);
                var5.id = var8;
                var8 = var1.custom_id;
                var5.customId = var8;
                var8 = var1.style;
                var5.style = var8;
                var8 = var1.disabled;
                var5.disabled = var8;
                var8 = var1.url;
                var5.url = var8;
                var8 = var1.label;
                var5.label = var8;
                var5.emoji = var6;
                var6 = var1.sku_id;
                var5.skuId = var6;
                return var5;
            case 4461:
                var5 = var1.components;
                var1 = var5.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8 = var1.bind(var5)(var0);
                var1 = var8.filter;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.isNotNullish;
                var1 = var1.bind(var8)(var0);
                var0 = {};
                var5 = var5[var7];
                var5 = var6.bind(var3)(var5);
                var5 = var5.ComponentType;
                var5 = var5.ACTION_ROW;
                var0.type = var5;
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)(var4);
                var0.id = var2;
                var0.components = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.asComponentId;
        var3 = var4.join;
        var0 = ',';
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.CheckpointVersions;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var9 = var8.bind(var0)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var13 = 'InteractionComponentUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot4 = var5;
    var5 = function arg0, arg1() {
        _fun36637: for (var _fun36637_ip = 0;;) switch (_fun36637_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var1 = var5.id;
                var0.id = var1;
                var1 = var5.name;
                var0.name = var1;
                var1 = var5.animated;
                var0.animated = var1;
                var4 = undefined;
                var2 = arg1;
                var1 = undefined;
                if (!var2) {
                    _fun36637_ip = 128;
                    continue _fun36637
                }
            case 44:
                var3 = var5.id;
                var2 = null;
                var2 = var2 != var3;
                var1 = undefined;
                if (!var2) {
                    _fun36637_ip = 128;
                    continue _fun36637
                }
            case 60:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.getEmojiURL;
                var2 = {};
                var6 = var5.id;
                var2.id = var6;
                var5 = var5.animated;
                if (var5) {
                    _fun36637_ip = 111;
                    continue _fun36637
                }
            case 109:
                var5 = false;
            case 111:
                var2.animated = var5;
                var5 = 48;
                var2.size = var5;
                var1 = var3.bind(var4)(var2);
            case 128:
                var0.src = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/InteractionComponentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1, arg2) { // Environment: var1
        _fun36638: for (var _fun36638_ip = 0;;) switch (_fun36638_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = null;
                var0 = var3 == var1;
                var6 = undefined;
                var5 = undefined;
                if (var0) {
                    _fun36638_ip = 30;
                    continue _fun36638
                }
            case 19:
                var0 = var1.data;
                var5 = var0.interactionType;
            case 30:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 4;
                var0 = var8[var0];
                var0 = var7.bind(var6)(var0);
                var0 = var0.InteractionTypes;
                var0 = var0.MESSAGE_COMPONENT;
                var8 = null;
                if (!(var5 === var0)) {
                    _fun36638_ip = 134;
                    continue _fun36638
                }
            case 71:
                var0 = var3 == var1;
                var5 = undefined;
                if (var0) {
                    _fun36638_ip = 85;
                    continue _fun36638
                }
            case 80:
                var5 = var1.state;
            case 85:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var7.bind(var6)(var0);
                var0 = var0.InteractionState;
                var0 = var0.FAILED;
                var8 = null;
                if (!(var5 === var0)) {
                    _fun36638_ip = 134;
                    continue _fun36638
                }
            case 123:
                var0 = var1.data;
                var8 = var0.componentId;
            case 134:
                var5 = var3 != var8;
                var0 = null;
                if (!var5) {
                    _fun36638_ip = 156;
                    continue _fun36638
                }
            case 143:
                var7 = _closure1_slot10;
                var5 = arg2;
                var0 = var7.bind(var6)(var5, var8);
            case 156:
                if (!(var3 == var0)) {
                    _fun36638_ip = 162;
                    continue _fun36638
                }
            case 160:
                return var6;
            case 162:
                var5 = var3 == var4;
                var0 = undefined;
                if (var5) {
                    _fun36638_ip = 177;
                    continue _fun36638
                }
            case 171:
                var0 = var4.interactionError;
            case 177:
                if (!(var3 == var0)) {
                    _fun36638_ip = 326;
                    continue _fun36638
                }
            case 184:
                var4 = var3 == var1;
                var3 = undefined;
                if (var4) {
                    _fun36638_ip = 199;
                    continue _fun36638
                }
            case 193:
                var3 = var1.errorCode;
            case 199:
                var1 = 429;
                if (!(var1 !== var3)) {
                    _fun36638_ip = 266;
                    continue _fun36638
                }
            case 209:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.VCsUJu;
                var1 = var3.bind(var4)(var1);
                _fun36638_ip = 323;
                continue _fun36638;
            case 266:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.fitPBS;
                var1 = var3.bind(var4)(var2);
            case 323:
                var0 = var1;
            case 326:
                return var0;
        }
    };
    var2.getLayoutComponentErrorText = var5;
    var5 = function arg0() {
        _fun36639: for (var _fun36639_ip = 0;;) switch (_fun36639_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.placeholder;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun36639_ip = 75;
                    continue _fun36639
                }
            case 15:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Otr6W2;
                var0 = var2.bind(var3)(var1);
            case 75:
                return var0;
        }
    };
    var2.getSelectPlaceholder = var5;
    var2.flattenComponents = var4;
    var2.findChildComponent = var3;
    var3 = function arg0() {
        _fun36640: for (var _fun36640_ip = 0;;) switch (_fun36640_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = arg0;
                var4 = var3.bind(var2)(var1);
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = var4.values;
                var1 = var1.bind(var4)();
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ComponentType;
                    var0 = var0.TEXT_DISPLAY;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.content;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '\n';
                var1 = var1.bind(var2)(var0);
                var2 = '';
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun36640_ip = 103;
                    continue _fun36640
                }
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var2.getAllTextDisplayContent = var3;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var2 = function arg0() {
            _fun36644: for (var _fun36644_ip = 0;;) switch (_fun36644_ip) {
                case 0:
                    var3 = arguments[1];
                    var11 = undefined;
                    if (!(var3 === var11)) {
                        _fun36644_ip = 15;
                        continue _fun36644
                    }
                case 11:
                    var3 = new Array(0);
                case 15:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var9 = var1.bind(var11)(var0);
                    var4 = var9.bind(var11)();
                    var1 = var4.done;
                    var2 = 1;
                    var0 = null;
                    var7 = var4;
                    if (var1) {
                        _fun36644_ip = 159;
                        continue _fun36644
                    }
                case 53:
                    var4 = var7.value;
                    var1 = _closure1_slot11;
                    var6 = var1.bind(var11)(var4);
                    var5 = var6.some;
                    var1 = function(arg0) { // Environment: var12
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure2_slot0;
                        var0 = var0.id;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var5.bind(var6)(var1);
                    var1 = new Array(1);
                    if (var5) {
                        _fun36644_ip = 140;
                        continue _fun36644
                    }
                case 90:
                    var5 = _closure2_slot1;
                    var1[0] = var4;
                    var16 = var1;
                    var15 = var3;
                    var14 = var2;
                    var13 = arraySpread(var16, var15, var14);
                    var5 = var5.bind(var11)(var6, var1);
                    if (!(var0 == var5)) {
                        _fun36644_ip = 138;
                        continue _fun36644
                    }
                case 121:
                    var13 = var9.bind(var11)();
                    var6 = var13.done;
                    var7 = var13;
                    if (var6) {
                        _fun36644_ip = 159;
                        continue _fun36644
                    }
                case 136:
                    _fun36644_ip = 53;
                    continue _fun36644;
                case 138:
                    return var5;
                case 140:
                    var1[0] = var4;
                    var16 = var1;
                    var15 = var3;
                    var14 = var2;
                    var2 = arraySpread(var16, var15, var14);
                    return var1;
                case 159:
                    return var0;
            }
        };
        var _closure2_slot1 = var2;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getParents = var3;
    var3 = function arg0() {
        _fun36646: for (var _fun36646_ip = 0;;) switch (_fun36646_ip) {
            case 0:
                var2 = {};
                var0 = 'component-upload';
                var2.type = var0;
                var0 = arg0;
                var2.containerId = var0;
                var0 = global;
                var1 = var0.crypto;
                var1 = var1.randomUUID;
                var3 = null;
                var4 = var3 == var1;
                var5 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun36646_ip = 63;
                    continue _fun36646
                }
            case 47:
                var6 = var0.crypto;
                var4 = var6.randomUUID;
                var1 = var4.bind(var6)();
            case 63:
                if (!(var3 == var1)) {
                    _fun36646_ip = 100;
                    continue _fun36646
                }
            case 67:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.v4;
                var1 = var3.bind(var4)();
            case 100:
                var2.uniqueId = var1;
                var1 = var0.JSON;
                var0 = var1.stringify;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.makeComponentUploadId = var3;
    var3 = function arg0() {
        _fun36647: for (var _fun36647_ip = 0;;) switch (_fun36647_ip) {
            case 0:
                var0 = arg0;
                var1 = undefined;
            case 5: // try_start_0
                var2 = global;
                var4 = var2.JSON;
                var2 = var4.parse;
                var0 = var2.bind(var4)(var0);
                var1 = var0;
                var4 = null;
                var0 = var4 == var0;
                var3 = undefined;
                if (var0) {
                    _fun36647_ip = 46;
                    continue _fun36647
                }
            case 38:
                var0 = var1;
                var3 = var0.type;
            case 46:
                var2 = 'component-upload';
                var0 = null;
                if (!(var2 === var3)) {
                    _fun36647_ip = 101;
                    continue _fun36647
                }
            case 58:
                var2 = var1;
                var2 = var2.containerId;
                var3 = 'string';
                var2 = typeof var2;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun36647_ip = 101;
                    continue _fun36647
                }
            case 80:
                var2 = var1;
                var2 = var2.uniqueId;
                var2 = typeof var2;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun36647_ip = 101;
                    continue _fun36647
                }
            case 98:
                var0 = var1;
            case 101: // try_end0
                return var0;
            case 103: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var2.deserializeComponentUploadId = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.map;
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot12;
            var2 = new Array(1);
            var0 = arg1;
            var2[0] = var0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = null;
            var0 = arg0;
            var0 = var1 != var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.transformComponents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3975, 3, 1417, 1234, 1645, 3976, 3977, 491, 1304, 3978, 3979, 668, 21, 2]);