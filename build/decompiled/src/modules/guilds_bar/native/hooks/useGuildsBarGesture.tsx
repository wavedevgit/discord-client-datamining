// modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun100816: for (var _fun100816_ip = 0;;) switch (_fun100816_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun100816_ip = 46;
                    continue _fun100816
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun100816_ip = 55;
                    continue _fun100816
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun100816_ip = 345;
                    continue _fun100816
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun100816_ip = 323;
                    continue _fun100816
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun100816_ip = 283;
                    continue _fun100816
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun100816_ip = 270;
                    continue _fun100816
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
                    _fun100816_ip = 163;
                    continue _fun100816
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun100816_ip = 179;
                    continue _fun100816
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun100816_ip = 249;
                    continue _fun100816
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun100816_ip = 249;
                    continue _fun100816
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun100816_ip = 234;
                    continue _fun100816
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun100816_ip = 247;
                    continue _fun100816
                }
            case 234:
                var8 = _closure1_slot31;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun100816_ip = 265;
                continue _fun100816;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun100816_ip = 283;
                continue _fun100816;
            case 270:
                var6 = _closure1_slot31;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun100816_ip = 323;
                    continue _fun100816
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
                    _fun100816_ip = 330;
                    continue _fun100816
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun100817: for (var _fun100817_ip = 0;;) switch (_fun100817_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun100817_ip = 56;
                                continue _fun100817
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
                            _fun100817_ip = 67;
                            continue _fun100817;
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
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun100818: for (var _fun100818_ip = 0;;) switch (_fun100818_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun100818_ip = 23;
                    continue _fun100818
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun100818_ip = 33;
                    continue _fun100818
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
                    _fun100818_ip = 70;
                    continue _fun100818
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun100818_ip = 55;
                    continue _fun100818
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun100819: for (var _fun100819_ip = 0;;) switch (_fun100819_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var0 = _closure1_slot8;
                var0 = var0.GUILD;
                if (!(var3 !== var0)) {
                    _fun100819_ip = 121;
                    continue _fun100819
                }
            case 25:
                var4 = var1.type;
                var0 = _closure1_slot8;
                var3 = var0.FOLDER;
                var8 = undefined;
                var0 = undefined;
                if (!(var4 === var3)) {
                    _fun100819_ip = 119;
                    continue _fun100819
                }
            case 48:
                var3 = var1.name;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun100819_ip = 116;
                    continue _fun100819
                }
            case 59:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 13;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.ebAnWE;
                var3 = var5.bind(var6)(var4);
            case 116:
                var0 = var3;
            case 119:
                _fun100819_ip = 222;
                continue _fun100819;
            case 121:
                var4 = _closure1_slot6;
                var3 = var4.getGuild;
                var1 = var1.id;
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var5 = var3 == var4;
                var6 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun100819_ip = 158;
                    continue _fun100819
                }
            case 153:
                var1 = var4.name;
            case 158:
                if (!(var3 == var1)) {
                    _fun100819_ip = 219;
                    continue _fun100819
                }
            case 162:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.fKYRlM;
                var1 = var3.bind(var4)(var2);
            case 219:
                var0 = var1;
            case 222:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun100820: for (var _fun100820_ip = 0;;) switch (_fun100820_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var2 = arg2;
                var1 = 'self';
                if (!(var1 === var2)) {
                    _fun100820_ip = 20;
                    continue _fun100820
                }
            case 17:
                var7 = var0;
            case 20:
                var1 = _closure1_slot30;
                var3 = _closure1_slot7;
                var0 = var3.getFlattenedGuildFolderList;
                var0 = var0.bind(var3)();
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var3 = var5.bind(var6)();
                var0 = var3.done;
                var1 = -1;
                var4 = var3;
                var3 = var1;
                var1 = var3;
                if (var0) {
                    _fun100820_ip = 123;
                    continue _fun100820
                }
            case 77:
                var8 = var3 + 1;
                var0 = var4.value;
                var9 = var0.id;
                var0 = var7.id;
                var1 = var8;
                if (!(var9 !== var0)) {
                    _fun100820_ip = 123;
                    continue _fun100820
                }
            case 102:
                var9 = var5.bind(var6)();
                var0 = var9.done;
                var4 = var9;
                var3 = var8;
                var1 = var3;
                if (!var0) {
                    _fun100820_ip = 77;
                    continue _fun100820
                }
            case 123:
                var0 = 'after';
                if (!(var0 !== var2)) {
                    _fun100820_ip = 143;
                    continue _fun100820
                }
            case 131:
                var0 = 'convert-after';
                if (!(var0 !== var2)) {
                    _fun100820_ip = 143;
                    continue _fun100820
                }
            case 141:
                return var1;
            case 143:
                var0 = 1;
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun100821: for (var _fun100821_ip = 0;;) switch (_fun100821_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var9 = 'drag-start';
                if (!(var9 !== var2)) {
                    _fun100821_ip = 967;
                    continue _fun100821
                }
            case 21:
                var5 = 'drag-move';
                if (!(var5 !== var2)) {
                    _fun100821_ip = 204;
                    continue _fun100821
                }
            case 34:
                var0 = 'drag-drop';
                if (!(var0 === var2)) {
                    _fun100821_ip = 1142;
                    continue _fun100821
                }
            case 47:
                var3 = _closure1_slot15;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 9;
                var2 = var10[var2];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.DRAG_AND_DROP_END;
                var2 = var3.bind(var7)(var2);
                var3 = _closure1_slot15;
                var2 = var3.flush;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot16;
                var0 = var2.flush;
                var0 = var0.bind(var2)();
                var0 = 10;
                var0 = var10[var0];
                var0 = var8.bind(var7)(var0);
                var3 = var0.AccessibilityAnnouncer;
                var2 = var3.announce;
                var0 = 13;
                var4 = var10[var0];
                var4 = var8.bind(var7)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var0 = var10[var0];
                var0 = var8.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.lMkmz7;
                var0 = var4.bind(var6)(var0);
                var0 = var2.bind(var3)(var0);
                _fun100821_ip = 1142;
                continue _fun100821;
            case 204:
                var6 = _closure1_slot19;
                var4 = null;
                var7 = var4 == var6;
                var3 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun100821_ip = 229;
                    continue _fun100821
                }
            case 224:
                var2 = var6.type;
            case 229:
                if (!(var5 === var2)) {
                    _fun100821_ip = 286;
                    continue _fun100821
                }
            case 233:
                var2 = _closure1_slot19;
                var2 = var2.overNode;
                var6 = var2.id;
                var2 = var1.overNode;
                var2 = var2.id;
                if (!(var6 === var2)) {
                    _fun100821_ip = 286;
                    continue _fun100821
                }
            case 263:
                var2 = _closure1_slot19;
                var6 = var2.overState;
                var2 = var1.overState;
                if (!(var6 !== var2)) {
                    _fun100821_ip = 1142;
                    continue _fun100821
                }
            case 286:
                var6 = _closure1_slot19;
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun100821_ip = 304;
                    continue _fun100821
                }
            case 299:
                var2 = var6.type;
            case 304:
                if (!(var5 !== var2)) {
                    _fun100821_ip = 337;
                    continue _fun100821
                }
            case 308:
                var7 = _closure1_slot33;
                var6 = var1.dragNode;
                var5 = var1.dragNode;
                var2 = 'self';
                var5 = var7.bind(var3)(var6, var5, var2);
                _fun100821_ip = 378;
                continue _fun100821;
            case 337:
                var8 = _closure1_slot33;
                var2 = _closure1_slot19;
                var7 = var2.dragNode;
                var2 = _closure1_slot19;
                var6 = var2.overNode;
                var2 = _closure1_slot19;
                var2 = var2.overState;
                var5 = var8.bind(var3)(var7, var6, var2);
            case 378:
                var8 = _closure1_slot33;
                var7 = var1.dragNode;
                var6 = var1.overNode;
                var2 = var1.overState;
                var2 = var8.bind(var3)(var7, var6, var2);
                var6 = _closure1_slot19;
                var7 = var4 == var6;
                var8 = undefined;
                if (var7) {
                    _fun100821_ip = 425;
                    continue _fun100821
                }
            case 420:
                var8 = var6.type;
            case 425:
                var7 = 'self';
                var6 = var7;
                if (!(var9 !== var8)) {
                    _fun100821_ip = 468;
                    continue _fun100821
                }
            case 436:
                var9 = _closure1_slot19;
                var10 = var4 == var9;
                var8 = undefined;
                if (var10) {
                    _fun100821_ip = 455;
                    continue _fun100821
                }
            case 449:
                var8 = var9.overState;
            case 455:
                var9 = var4 != var8;
                if (!var9) {
                    _fun100821_ip = 465;
                    continue _fun100821
                }
            case 462:
                var7 = var8;
            case 465:
                var6 = var7;
            case 468:
                if (!(var5 === var2)) {
                    _fun100821_ip = 499;
                    continue _fun100821
                }
            case 472:
                var2 = _closure1_slot35;
                var5 = var1.overState;
                var5 = var2.bind(var3)(var5);
                var2 = var2.bind(var3)(var6);
                if (!(var5 !== var2)) {
                    _fun100821_ip = 1142;
                    continue _fun100821
                }
            case 499:
                var5 = _closure1_slot15;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.DRAG_AND_DROP_MOVE;
                var2 = var5.bind(var3)(var2);
                var2 = var1.dragNode;
                var10 = var1.overNode;
                var6 = var1.overState;
                var2 = 'convert-before';
                if (!(var2 !== var6)) {
                    _fun100821_ip = 872;
                    continue _fun100821
                }
            case 571:
                var2 = 'convert-after';
                if (!(var2 !== var6)) {
                    _fun100821_ip = 872;
                    continue _fun100821
                }
            case 584:
                var2 = 'drop-into';
                if (!(var2 !== var6)) {
                    _fun100821_ip = 776;
                    continue _fun100821
                }
            case 597:
                var2 = 'before';
                if (!(var2 !== var6)) {
                    _fun100821_ip = 697;
                    continue _fun100821
                }
            case 605:
                var5 = 'after';
                var2 = undefined;
                if (!(var5 === var6)) {
                    _fun100821_ip = 946;
                    continue _fun100821
                }
            case 618:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.w8FN92;
                var5 = {};
                var9 = _closure1_slot32;
                var9 = var9.bind(var3)(var10);
                var5.itemName = var9;
                var2 = var7.bind(var8)(var6, var5);
                _fun100821_ip = 946;
                continue _fun100821;
            case 697:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5["A5aDw+"];
                var5 = {};
                var9 = _closure1_slot32;
                var9 = var9.bind(var3)(var10);
                var5.itemName = var9;
                var2 = var7.bind(var8)(var6, var5);
                _fun100821_ip = 946;
                continue _fun100821;
            case 776:
                var7 = var10.type;
                var5 = _closure1_slot8;
                var6 = var5.FOLDER;
                var5 = undefined;
                if (!(var7 === var6)) {
                    _fun100821_ip = 867;
                    continue _fun100821
                }
            case 797:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 13;
                var8 = var11[var6];
                var8 = var7.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var7 = var6.uLDoxR;
                var6 = {};
                var11 = var10.name;
                var6.folderName = var11;
                var5 = var8.bind(var9)(var7, var6);
            case 867:
                var2 = var5;
                _fun100821_ip = 946;
                continue _fun100821;
            case 872:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.qiQ0QI;
                var5 = {};
                var9 = _closure1_slot32;
                var9 = var9.bind(var3)(var10);
                var5.itemName = var9;
                var2 = var7.bind(var8)(var6, var5);
            case 946:
                if (!(var4 != var2)) {
                    _fun100821_ip = 1142;
                    continue _fun100821
                }
            case 953:
                var0 = _closure1_slot16;
                var0 = var0.bind(var3)(var2);
                _fun100821_ip = 1142;
                continue _fun100821;
            case 967:
                var3 = _closure1_slot32;
                var2 = var1.node;
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var9)) {
                    _fun100821_ip = 1087;
                    continue _fun100821
                }
            case 993:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 10;
                var2 = var10[var2];
                var2 = var6.bind(var4)(var2);
                var5 = var2.AccessibilityAnnouncer;
                var3 = var5.announce;
                var2 = 13;
                var7 = var10[var2];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var10[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var6 = var2["vHD/Je"];
                var2 = {};
                var2.itemName = var9;
                var2 = var7.bind(var8)(var6, var2);
                var2 = var3.bind(var5)(var2);
            case 1087:
                var3 = _closure1_slot15;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.DRAG_AND_DROP_START;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot15;
                var0 = var2.flush;
                var0 = var0.bind(var2)();
            case 1142:
                var4 = var1.type;
                var0 = undefined;
                var3 = 'drag-drop';
                var2 = undefined;
                if (!(var3 !== var4)) {
                    _fun100821_ip = 1164;
                    continue _fun100821
                }
            case 1161:
                var2 = var1;
            case 1164:
                _closure1_slot19 = var2;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun100822: for (var _fun100822_ip = 0;;) switch (_fun100822_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun100822_ip = 27;
                    continue _fun100822
                }
            case 12:
                var2 = var3.startsWith;
                var1 = 'convert';
                var0 = var2.bind(var3)(var1);
            case 27:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun100823: for (var _fun100823_ip = 0;;) switch (_fun100823_ip) {
            case 0:
                var1 = _closure1_slot9;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var2 = var0.dragRegion;
                var1 = var0.scrollPosition;
                var0 = var1.get;
                var1 = var0.bind(var1)();
                var0 = arg0;
                var9 = var1 + var0;
                var0 = arg1;
                var1 = var9;
                if (!var0) {
                    _fun100823_ip = 120;
                    continue _fun100823
                }
            case 54:
                var0 = var2.get;
                var0 = var0.bind(var2)();
                var2 = global;
                var4 = var2.Math;
                var3 = var4.max;
                var8 = var2.Math;
                var7 = var8.min;
                var2 = var0.max;
                var5 = 2;
                var2 = var2 - var5;
                var2 = var7.bind(var8)(var9, var2);
                var0 = var0.min;
                var0 = var0 + var5;
                var1 = var3.bind(var4)(var2, var0);
            case 120:
                var0 = arg2;
                var4 = var0.current;
                var7 = null;
                var2 = var7 == var4;
                var5 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun100823_ip = 156;
                    continue _fun100823
                }
            case 141:
                var3 = var4.getSectionItemFromPosition;
                var2 = arg3;
                var0 = var3.bind(var4)(var1, var2);
            case 156:
                if (!(var7 == var0)) {
                    _fun100823_ip = 176;
                    continue _fun100823
                }
            case 160:
                var2 = {};
                var2.item = var5;
                var3 = 0;
                var2.positionPercentage = var3;
                var0 = var2;
            case 176:
                var4 = var0.item;
                var3 = var0.positionPercentage;
                var0 = var7 != var4;
                var2 = undefined;
                if (!var0) {
                    _fun100823_ip = 495;
                    continue _fun100823
                }
            case 199:
                var8 = var7 == var4;
                var0 = undefined;
                if (var8) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 211:
                var9 = var4.section;
                var8 = _closure1_slot11;
                var8 = var8.GUILDS;
                var8 = var9 < var8;
                var0 = undefined;
                if (var8) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 238:
                var9 = _closure1_slot7;
                var8 = var9.getFastListGuildFolders;
                var9 = var8.bind(var9)();
                var10 = var4.section;
                var8 = _closure1_slot11;
                var8 = var8.GUILDS;
                var8 = var10 - var8;
                var8 = var9[var8];
                var9 = var7 != var8;
                var0 = undefined;
                if (!var9) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 287:
                var10 = var4.type;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var12 = 14;
                var9 = var9[var12];
                var9 = var11.bind(var5)(var9);
                var9 = var9.FastListItemTypes;
                var9 = var9.SECTION;
                if (!(var9 !== var10)) {
                    _fun100823_ip = 464;
                    continue _fun100823
                }
            case 331:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var11.bind(var5)(var9);
                var9 = var9.FastListItemTypes;
                var9 = var9.ITEM;
                var0 = undefined;
                if (!(var9 === var10)) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 369:
                var10 = var8.type;
                var9 = _closure1_slot8;
                var9 = var9.ROOT;
                var0 = undefined;
                if (!(var10 !== var9)) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 390:
                var11 = var8.type;
                var9 = _closure1_slot8;
                var10 = var9.FOLDER;
                var9 = var8;
                if (!(var11 === var10)) {
                    _fun100823_ip = 438;
                    continue _fun100823
                }
            case 412:
                var11 = var8.children;
                var10 = var4.item;
                var11 = var11[var10];
                var10 = var7 == var11;
                var9 = var11;
                var0 = undefined;
                if (var10) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 438:
                var11 = var9.type;
                var10 = _closure1_slot8;
                var10 = var10.GUILD;
                var0 = undefined;
                if (!(var11 === var10)) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 459:
                var0 = var9;
                _fun100823_ip = 492;
                continue _fun100823;
            case 464:
                if (!(var7 != var8)) {
                    _fun100823_ip = 490;
                    continue _fun100823
                }
            case 468:
                var7 = var8.type;
                var6 = _closure1_slot8;
                var6 = var6.FOLDER;
                var0 = var8;
                if (!(var7 !== var6)) {
                    _fun100823_ip = 492;
                    continue _fun100823
                }
            case 490:
                var0 = undefined;
            case 492:
                var2 = var0;
            case 495:
                var0 = {};
                var0.item = var4;
                var4 = global;
                var6 = var4.Math;
                var5 = var6.floor;
                var4 = 100;
                var3 = var4 * var3;
                var3 = var5.bind(var6)(var3);
                var3 = var3 / var4;
                var0.overPercentage = var3;
                var0.node = var2;
                var0.pointerPosition = var1;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Dimensions;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var _closure1_slot9 = var8;
    var3 = 6;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.GUILD_ITEM_MARGIN;
    var3 = var9.GUILD_ITEM_SIZE;
    var _closure1_slot10 = var3;
    var9 = var9.FastListRenderSections;
    var _closure1_slot11 = var9;
    var _closure1_slot12 = var8;
    var3 = var3 + var7;
    var3 = var3 + var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 7;
    var8 = var5[var7];
    var10 = var4.bind(var0)(var8);
    var8 = var10.makeMutable;
    var9 = -1;
    var8 = var8.bind(var10)(var9);
    var3.pan = var8;
    var8 = var5[var7];
    var11 = var4.bind(var0)(var8);
    var10 = var11.makeMutable;
    var8 = new Array(0);
    var8 = var10.bind(var11)(var8);
    var3.itemMeasurements = var8;
    var7 = var5[var7];
    var8 = var4.bind(var0)(var7);
    var7 = var8.makeMutable;
    var7 = var7.bind(var8)(var9);
    var3.activeIndex = var7;
    var _closure1_slot14 = var3;
    var3 = 8;
    var7 = var5[var3];
    var9 = var6.bind(var0)(var7);
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.triggerHapticFeedback;
    var7 = 16;
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot15 = var7;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.AccessibilityAnnouncer;
        var2 = var3.announce;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = 500;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot16 = var3;
    var3 = 11;
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var8 = var9.throttle;
    var7 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.addBreadcrumb;
        var1 = {
            'category': 'GuildsBarGesture',
            'message': 'handleGuildDrag started'
        };
        var4 = arg0;
        var1.data = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6 = 2000;
    var6 = var8.bind(var9)(var7, var6);
    var _closure1_slot17 = var6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.throttle;
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.addBreadcrumb;
        var1 = {
            'category': 'GuildsBarGesture',
            'message': 'handleGestureEnd started'
        };
        var4 = arg0;
        var1.data = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = 3000;
    var3 = var7.bind(var8)(var6, var3);
    var _closure1_slot18 = var3;
    var _closure1_slot19 = var0;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=timeSincePreviousFrame/1000;scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}";
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx2(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx3(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - LongPress.onEnd');if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}";
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx5(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}";
    var3.code = var6;
    var _closure1_slot24 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx6(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}";
    var3.code = var6;
    var _closure1_slot25 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}";
    var3.code = var6;
    var _closure1_slot26 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx8(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - Pan.onEnd');if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}";
    var3.code = var6;
    var _closure1_slot27 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx9({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}";
    var3.code = var6;
    var _closure1_slot28 = var3;
    var3 = {};
    var6 = "function useGuildsBarGestureTsx10(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}";
    var3.code = var6;
    var _closure1_slot29 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var9 = _closure1_slot4;
        var3 = var9.useContext;
        var8 = _closure1_slot0;
        var20 = _closure1_slot2;
        var2 = 15;
        var2 = var20[var2];
        var7 = undefined;
        var2 = var8.bind(var7)(var2);
        var2 = var2.HomeDrawerStateContext;
        var2 = var3.bind(var9)(var2);
        var5 = var2.gesture;
        var _closure2_slot0 = var5;
        var16 = 7;
        var2 = var20[var16];
        var3 = var8.bind(var7)(var2);
        var2 = var3.useAnimatedRef;
        var4 = var2.bind(var3)();
        var _closure2_slot1 = var4;
        var3 = var9.useRef;
        var2 = null;
        var3 = var3.bind(var9)(var2);
        var _closure2_slot2 = var3;
        var2 = var20[var16];
        var10 = var8.bind(var7)(var2);
        var6 = var10.useSharedValue;
        var2 = 0;
        var22 = var6.bind(var10)(var2);
        var _closure2_slot3 = var22;
        var13 = _closure1_slot12;
        var2 = 16;
        var6 = var20[var2];
        var6 = var8.bind(var7)(var6);
        var10 = var6.shallow;
        var6 = function(arg0) { // Environment: var0
            var0 = arg0;
            var6 = var0.gestureState;
            var5 = var0.scrollPosition;
            var4 = var0.dragRegion;
            var3 = var0.windowSize;
            var2 = var0.listInsets;
            var1 = var0.dragDropInProgress;
            var0 = {};
            var0.gestureState = var6;
            var0.scrollPosition = var5;
            var0.dragRegion = var4;
            var0.windowSize = var3;
            var0.listInsets = var2;
            var0.dragDropInProgress = var1;
            return var0;
        };
        var12 = var13.bind(var7)(var6, var10);
        var17 = var12.gestureState;
        var _closure2_slot4 = var17;
        var6 = var12.scrollPosition;
        var _closure2_slot5 = var6;
        var18 = var12.dragRegion;
        var _closure2_slot6 = var18;
        var10 = var12.windowSize;
        var _closure2_slot7 = var10;
        var11 = var12.listInsets;
        var _closure2_slot8 = var11;
        var19 = var12.dragDropInProgress;
        var _closure2_slot9 = var19;
        var2 = var20[var2];
        var2 = var8.bind(var7)(var2);
        var12 = var2.shallow;
        var2 = function(arg0) { // Environment: var0
            _fun100829: for (var _fun100829_ip = 0;;) switch (_fun100829_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.dropSpecs;
                    var4 = var1.dragSpecs;
                    var1 = global;
                    var2 = var1.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var2](var6);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun100829_ip = 70;
                        continue _fun100829
                    }
                case 49:
                    var5 = var3.add;
                    var4 = var4.item;
                    var4 = var4.recyclerKey;
                    var4 = var5.bind(var3)(var4);
                case 70:
                    if (!(var2 != var0)) {
                        _fun100829_ip = 90;
                        continue _fun100829
                    }
                case 74:
                    var2 = var3.add;
                    var0 = var0.dragRecyclerKey;
                    var0 = var2.bind(var3)(var0);
                case 90:
                    var2 = var3.size;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = undefined;
                    if (!var2) {
                        _fun100829_ip = 122;
                        continue _fun100829
                    }
                case 106:
                    var2 = var1.Array;
                    var1 = var2.from;
                    var0 = var1.bind(var2)(var3);
                case 122:
                    return var0;
            }
        };
        var2 = var13.bind(var7)(var2, var12);
        var13 = var9.useEffect;
        var12 = function() { // Environment: var0
            _fun100830: for (var _fun100830_ip = 0;;) switch (_fun100830_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var6 = var0.current;
                    var2 = null;
                    var3 = var2 == var6;
                    var0 = undefined;
                    var4 = undefined;
                    if (var3) {
                        _fun100830_ip = 49;
                        continue _fun100830
                    }
                case 25:
                    var5 = var6.computeScrollPosition;
                    var3 = _closure1_slot11;
                    var3 = var3.GUILDS;
                    var4 = var5.bind(var6)(var3);
                case 49:
                    var3 = _closure2_slot2;
                    var5 = var3.current;
                    var6 = var2 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun100830_ip = 78;
                        continue _fun100830
                    }
                case 67:
                    var5 = var5.props;
                    var3 = var5.sections;
                case 78:
                    if (!(var2 == var3)) {
                        _fun100830_ip = 86;
                        continue _fun100830
                    }
                case 82:
                    var3 = new Array(0);
                case 86:
                    var5 = var3.length;
                    var6 = 1;
                    var8 = var5 - var6;
                    var7 = var3[var8];
                    var9 = var2 != var7;
                    var3 = 0;
                    if (!var9) {
                        _fun100830_ip = 114;
                        continue _fun100830
                    }
                case 111:
                    var3 = var7;
                case 114:
                    var7 = var3 - var6;
                    var1 = _closure2_slot2;
                    var6 = var1.current;
                    var3 = var2 == var6;
                    var1 = undefined;
                    if (var3) {
                        _fun100830_ip = 148;
                        continue _fun100830
                    }
                case 136:
                    var3 = var6.computeScrollPosition;
                    var1 = var3.bind(var6)(var8, var7);
                case 148:
                    var6 = var2 == var4;
                    var3 = undefined;
                    if (var6) {
                        _fun100830_ip = 163;
                        continue _fun100830
                    }
                case 157:
                    var3 = var4.scrollPosition;
                case 163:
                    var4 = var2 != var3;
                    var5 = 0;
                    if (!var4) {
                        _fun100830_ip = 175;
                        continue _fun100830
                    }
                case 172:
                    var5 = var3;
                case 175:
                    var2 = var2 != var1;
                    var4 = inf;
                    if (!var2) {
                        _fun100830_ip = 207;
                        continue _fun100830
                    }
                case 192:
                    var2 = var1.scrollPosition;
                    var1 = var1.size;
                    var4 = var2 + var1;
                case 207:
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var3 = var1.dragRegion;
                    var1 = var3.get;
                    var2 = var1.bind(var3)();
                    var1 = var2.min;
                    var1 = var5 === var1;
                    if (!var1) {
                        _fun100830_ip = 260;
                        continue _fun100830
                    }
                case 251:
                    var2 = var2.max;
                    var1 = var4 === var2;
                case 260:
                    if (var1) {
                        _fun100830_ip = 283;
                        continue _fun100830
                    }
                case 263:
                    var2 = var3.set;
                    var1 = {};
                    var1.min = var5;
                    var1.max = var4;
                    var1 = var2.bind(var3)(var1);
                case 283:
                    return var0;
            }
        };
        var12 = var13.bind(var9)(var12);
        var12 = var20[var16];
        var14 = var8.bind(var7)(var12);
        var13 = var14.useFrameCallback;
        var12 = function arg0() {
            _fun100831: for (var _fun100831_ip = 0;;) switch (_fun100831_ip) {
                case 0:
                    var0 = arg0;
                    var11 = var0.timeSincePreviousFrame;
                    var0 = null;
                    if (!(var0 != var11)) {
                        _fun100831_ip = 196;
                        continue _fun100831
                    }
                case 18:
                    var5 = 0;
                    if (!(!(var11 <= var5))) {
                        _fun100831_ip = 196;
                        continue _fun100831
                    }
                case 27:
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var1 = var0.mode;
                    var0 = 'drag';
                    if (!(var0 === var1)) {
                        _fun100831_ip = 196;
                        continue _fun100831
                    }
                case 59:
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 1000;
                    var10 = var0 * var1;
                    var2 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 7;
                    var1 = var13[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.scrollTo;
                    var2 = _closure2_slot1;
                    var1 = global;
                    var6 = var1.Math;
                    var1 = var6.max;
                    var12 = _closure1_slot1;
                    var7 = 17;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var12 = _closure2_slot5;
                    var9 = var12.get;
                    var9 = var9.bind(var12)();
                    var0 = var11 / var0;
                    var0 = var0 * var10;
                    var0 = var9 + var0;
                    var0 = var7.bind(var8)(var0);
                    var15 = var1.bind(var6)(var0, var5);
                    var14 = false;
                    var18 = var4;
                    var17 = var2;
                    var16 = 0;
                    var0 = var18[var3](var17, var16, var15, var14, var13);
                case 196:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = {};
        var15.gestureState = var17;
        var15.pushScroll = var22;
        var16 = var20[var16];
        var16 = var8.bind(var7)(var16);
        var16 = var16.scrollTo;
        var15.scrollTo = var16;
        var15.scrollerRef = var4;
        var21 = _closure1_slot1;
        var16 = 17;
        var16 = var20[var16];
        var16 = var21.bind(var7)(var16);
        var15.roundToNearestPixel = var16;
        var15.scrollPosition = var6;
        var12.__closure = var15;
        var15 = 3892822493921.0;
        var12.__workletHash = var15;
        var1 = _closure1_slot20;
        var12.__initData = var1;
        var1 = false;
        var1 = var13.bind(var14)(var12, var1);
        var _closure2_slot10 = var1;
        var14 = var9.useCallback;
        var13 = new Array(2);
        var13[0] = var22;
        var13[1] = var1;
        var12 = function(arg0) { // Environment: var0
            _fun100832: for (var _fun100832_ip = 0;;) switch (_fun100832_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot9;
                    var2 = var3.getState;
                    var4 = var2.bind(var3)();
                    var17 = var4.dragSpecs;
                    var _closure3_slot0 = var17;
                    var6 = var4.overSpecs;
                    var3 = var4.gestureState;
                    var2 = var4.dragDropInProgress;
                    var4 = var4.setStateShallow;
                    var9 = _closure2_slot3;
                    var8 = var9.set;
                    var13 = 0;
                    var8 = var8.bind(var9)(var13);
                    var8 = _closure2_slot10;
                    var8 = var8.isActive;
                    if (!var8) {
                        _fun100832_ip = 105;
                        continue _fun100832
                    }
                case 88:
                    var9 = _closure2_slot10;
                    var8 = var9.setActive;
                    var7 = false;
                    var7 = var8.bind(var9)(var7);
                case 105:
                    var7 = 'cancel';
                    if (!(var7 !== var5)) {
                        _fun100832_ip = 197;
                        continue _fun100832
                    }
                case 113:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 12;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.addBreadcrumb;
                    var7 = {
                        'category': 'GuildsBarGesture',
                        'message': 'handleGestureEnd started'
                    };
                    var10 = {};
                    var10.event = var5;
                    var10.dragSpecs = var17;
                    var10.overSpecs = var6;
                    var11 = var3.get;
                    var11 = var11.bind(var3)();
                    var10.gestureState = var11;
                    var7.data = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun100832_ip = 239;
                    continue _fun100832;
                case 197:
                    var9 = _closure1_slot18;
                    var8 = {};
                    var8.event = var5;
                    var8.dragSpecs = var17;
                    var8.overSpecs = var6;
                    var7 = var3.get;
                    var7 = var7.bind(var3)();
                    var8.gestureState = var7;
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                case 239:
                    var7 = 'drop';
                    if (!(var7 === var5)) {
                        _fun100832_ip = 1094;
                        continue _fun100832
                    }
                case 250:
                    var12 = null;
                    if (!(var12 != var6)) {
                        _fun100832_ip = 1094;
                        continue _fun100832
                    }
                case 259:
                    if (!(var12 != var17)) {
                        _fun100832_ip = 1094;
                        continue _fun100832
                    }
                case 266:
                    var15 = var17.item;
                    var16 = var6.item;
                    var10 = var15.type;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var14 = 14;
                    var8 = var7[var14];
                    var7 = undefined;
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.FastListItemTypes;
                    var8 = var8.SECTION;
                    if (!(var8 !== var10)) {
                        _fun100832_ip = 357;
                        continue _fun100832
                    }
                case 319:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var14];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.FastListItemTypes;
                    var9 = var8.ITEM;
                    var8 = undefined;
                    if (!(var9 === var10)) {
                        _fun100832_ip = 547;
                        continue _fun100832
                    }
                case 357:
                    var10 = var16.type;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var9 = var11.bind(var7)(var9);
                    var9 = var9.FastListItemTypes;
                    var9 = var9.SECTION;
                    if (!(var9 !== var10)) {
                        _fun100832_ip = 430;
                        continue _fun100832
                    }
                case 395:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var9 = var11.bind(var7)(var9);
                    var9 = var9.FastListItemTypes;
                    var9 = var9.ITEM;
                    var8 = undefined;
                    if (!(var9 === var10)) {
                        _fun100832_ip = 547;
                        continue _fun100832
                    }
                case 430:
                    var10 = var16.section;
                    var9 = var15.section;
                    var10 = var10 < var9;
                    var11 = 'before';
                    var9 = var11;
                    if (var10) {
                        _fun100832_ip = 544;
                        continue _fun100832
                    }
                case 454:
                    var14 = var16.section;
                    var10 = var15.section;
                    var18 = var14 > var10;
                    var14 = 'after';
                    var10 = var14;
                    if (var18) {
                        _fun100832_ip = 541;
                        continue _fun100832
                    }
                case 478:
                    var19 = var16.item;
                    var18 = var15.item;
                    var18 = var19 < var18;
                    if (var18) {
                        _fun100832_ip = 538;
                        continue _fun100832
                    }
                case 495:
                    var19 = var16.item;
                    var18 = var15.item;
                    var18 = var19 > var18;
                    if (var18) {
                        _fun100832_ip = 535;
                        continue _fun100832
                    }
                case 512:
                    var18 = var16.item;
                    var16 = var15.item;
                    var15 = undefined;
                    if (!(var18 === var16)) {
                        _fun100832_ip = 532;
                        continue _fun100832
                    }
                case 528:
                    var15 = 'self';
                case 532:
                    var14 = var15;
                case 535:
                    var11 = var14;
                case 538:
                    var10 = var11;
                case 541:
                    var9 = var10;
                case 544:
                    var8 = var9;
                case 547:
                    var11 = 'after';
                    var9 = 0;
                    if (!(var11 === var8)) {
                        _fun100832_ip = 568;
                        continue _fun100832
                    }
                case 557:
                    var8 = var17.item;
                    var9 = var8.layoutSize;
                case 568:
                    var8 = var6.state;
                    if (!(var11 !== var8)) {
                        _fun100832_ip = 590;
                        continue _fun100832
                    }
                case 577:
                    var8 = var6.item;
                    var8 = var8.layoutStart;
                    _fun100832_ip = 611;
                    continue _fun100832;
                case 590:
                    var10 = var6.item;
                    var14 = var10.layoutStart;
                    var10 = var17.itemSize;
                    var8 = var14 + var10;
                case 611:
                    var8 = var8 - var9;
                    var _closure3_slot1 = var8;
                    var10 = var17.node;
                    var _closure3_slot2 = var10;
                    var9 = var6.node;
                    var _closure3_slot3 = var9;
                    var8 = var6.state;
                    var11 = var11 === var8;
                    var _closure3_slot4 = var11;
                    var14 = var6.state;
                    var8 = 'convert-before';
                    var8 = var8 === var14;
                    if (var8) {
                        _fun100832_ip = 685;
                        continue _fun100832
                    }
                case 670:
                    var15 = var6.state;
                    var14 = 'convert-after';
                    var8 = var14 === var15;
                case 685:
                    if (var8) {
                        _fun100832_ip = 703;
                        continue _fun100832
                    }
                case 688:
                    var15 = var6.state;
                    var14 = 'drop-into';
                    var8 = var14 === var15;
                case 703:
                    var _closure3_slot5 = var8;
                    var8 = var6.state;
                    var _closure3_slot6 = var8;
                    var15 = 'self';
                    if (!(var15 !== var8)) {
                        _fun100832_ip = 731;
                        continue _fun100832
                    }
                case 724:
                    if (!(var12 == var8)) {
                        _fun100832_ip = 875;
                        continue _fun100832
                    }
                case 731:
                    var14 = _closure1_slot9;
                    var6 = var14.getState;
                    var16 = var6.bind(var14)();
                    var14 = var16.dropStart;
                    var6 = {};
                    var6.dragNode = var10;
                    var6.overNode = var10;
                    var18 = var17.itemTop;
                    var6.dropPosition = var18;
                    var18 = var17.itemSize;
                    var6.itemSize = var18;
                    var17 = var17.item;
                    var19 = var12 == var17;
                    var18 = undefined;
                    if (var19) {
                        _fun100832_ip = 805;
                        continue _fun100832
                    }
                case 799:
                    var18 = var17.recyclerKey;
                case 805:
                    var19 = var12 != var18;
                    var17 = '';
                    if (!var19) {
                        _fun100832_ip = 819;
                        continue _fun100832
                    }
                case 816:
                    var17 = var18;
                case 819:
                    var6.dragRecyclerKey = var17;
                    var6.overState = var15;
                    var6 = var14.bind(var16)(var6);
                    var14 = _closure1_slot34;
                    var6 = {};
                    var16 = 'drag-drop';
                    var6.type = var16;
                    var6.dragNode = var10;
                    var6.overNode = var10;
                    var6.overState = var15;
                    var6 = var14.bind(var7)(var6);
                    _fun100832_ip = 1277;
                    continue _fun100832;
                case 875:
                    var6 = var9.id;
                    var _closure3_slot7 = var6;
                    var15 = var10.type;
                    var14 = _closure1_slot8;
                    var14 = var14.FOLDER;
                    if (!(var15 === var14)) {
                        _fun100832_ip = 932;
                        continue _fun100832
                    }
                case 903:
                    var15 = var9.type;
                    var14 = _closure1_slot8;
                    var14 = var14.GUILD;
                    if (!(var15 === var14)) {
                        _fun100832_ip = 932;
                        continue _fun100832
                    }
                case 922:
                    var14 = var9.parentId;
                    if (!(var12 == var14)) {
                        _fun100832_ip = 1005;
                        continue _fun100832
                    }
                case 932:
                    var15 = var9.type;
                    var14 = _closure1_slot8;
                    var14 = var14.FOLDER;
                    if (!(var15 === var14)) {
                        _fun100832_ip = 1015;
                        continue _fun100832
                    }
                case 951:
                    var14 = var9.expanded;
                    if (!var14) {
                        _fun100832_ip = 1015;
                        continue _fun100832
                    }
                case 960:
                    if (!var11) {
                        _fun100832_ip = 1015;
                        continue _fun100832
                    }
                case 963:
                    var11 = false;
                    _closure3_slot4 = var11;
                    var11 = var9.children;
                    var13 = var11[var13];
                    var14 = var12 == var13;
                    var11 = undefined;
                    if (var14) {
                        _fun100832_ip = 992;
                        continue _fun100832
                    }
                case 987:
                    var11 = var13.id;
                case 992:
                    if (!(var12 != var11)) {
                        _fun100832_ip = 999;
                        continue _fun100832
                    }
                case 996:
                    var6 = var11;
                case 999:
                    _closure3_slot7 = var6;
                    _fun100832_ip = 1015;
                    continue _fun100832;
                case 1005:
                    var6 = var9.parentId;
                    _closure3_slot7 = var6;
                case 1015:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 18;
                    var6 = var12[var6];
                    var11 = var11.bind(var7)(var6);
                    var6 = var11.batchUpdates;
                    var1 = function() { // Environment: var1
                        _fun100833: for (var _fun100833_ip = 0;;) switch (_fun100833_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                var1 = var0.id;
                                var0 = _closure3_slot7;
                                if (!(var1 !== var0)) {
                                    _fun100833_ip = 123;
                                    continue _fun100833
                                }
                            case 20:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var8 = var3.bind(var1)(var2);
                                var7 = var8.moveById;
                                var2 = _closure3_slot2;
                                var6 = var2.id;
                                var5 = _closure3_slot7;
                                var2 = _closure3_slot5;
                                var3 = !var2;
                                var3 = !var3;
                                if (var2) {
                                    _fun100833_ip = 81;
                                    continue _fun100833
                                }
                            case 77:
                                var3 = _closure3_slot4;
                            case 81:
                                var9 = _closure3_slot5;
                                var13 = var8;
                                var12 = var6;
                                var11 = var5;
                                var10 = var3;
                                var2 = var13[var7](var12, var11, var10, var9, var8);
                                var2 = _closure1_slot3;
                                var0 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun100835: for (var _fun100835_ip = 0;;) switch (_fun100835_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun100835_ip = 81;
                                                    continue _fun100835
                                                }
                                            case 7: // try_start_0
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var2 = 20;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var3 = var4.bind(var2)(var3);
                                                var2 = var3.saveGuildFolders;
                                                var4 = _closure1_slot7;
                                                var1 = var4.getCompatibleGuildFolders;
                                                var1 = var1.bind(var4)();
                                                var1 = var2.bind(var3)(var1);
                                                SaveGenerator(address = 63);
                                            case 61:
                                                return var1;
                                            case 63:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun100835_ip = 71;
                                                    continue _fun100835
                                                }
                                            case 69: // try_end0
                                                _fun100835_ip = 76;
                                                continue _fun100835;
                                            case 71:
                                                return var1;
                                            case 74: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                            case 76:
                                                var1 = undefined;
                                                return var1;
                                            case 81:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var0 = var2.bind(var1)(var0);
                                var0 = var0.bind(var1)();
                            case 123:
                                var1 = _closure1_slot9;
                                var0 = var1.getState;
                                var3 = var0.bind(var1)();
                                var2 = var3.dropStart;
                                var1 = {};
                                var0 = _closure3_slot2;
                                var1.dragNode = var0;
                                var0 = _closure3_slot3;
                                var1.overNode = var0;
                                var0 = _closure3_slot1;
                                var1.dropPosition = var0;
                                var0 = _closure3_slot0;
                                var7 = var0.item;
                                var5 = null;
                                var8 = var5 == var7;
                                var0 = undefined;
                                var6 = undefined;
                                if (var8) {
                                    _fun100833_ip = 203;
                                    continue _fun100833
                                }
                            case 197:
                                var6 = var7.recyclerKey;
                            case 203:
                                var7 = var5 != var6;
                                var5 = '';
                                if (!var7) {
                                    _fun100833_ip = 217;
                                    continue _fun100833
                                }
                            case 214:
                                var5 = var6;
                            case 217:
                                var1.dragRecyclerKey = var5;
                                var5 = _closure3_slot0;
                                var5 = var5.itemSize;
                                var1.itemSize = var5;
                                var4 = _closure3_slot6;
                                var1.overState = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var1 = var6.bind(var11)(var1);
                    var6 = _closure1_slot34;
                    var1 = {};
                    var11 = 'drag-drop';
                    var1.type = var11;
                    var1.dragNode = var10;
                    var1.overNode = var9;
                    var1.overState = var8;
                    var1 = var6.bind(var7)(var1);
                    _fun100832_ip = 1277;
                    continue _fun100832;
                case 1094:
                    var1 = 'contextmenu-open';
                    if (!(var1 === var5)) {
                        _fun100832_ip = 1195;
                        continue _fun100832
                    }
                case 1104:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var1);
                    var1 = var0.ContextMenuStore;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var5 = var0.menu;
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun100832_ip = 1195;
                        continue _fun100832
                    }
                case 1154:
                    var1 = var5.requestClose;
                    var0 = var5.state;
                    var6 = var0.activeIndex;
                    var0 = var6.get;
                    var6 = var0.bind(var6)();
                    var0 = -1;
                    var0 = var0 === var6;
                    var0 = var1.bind(var5)(var0);
                case 1195:
                    var1 = {};
                    var0 = undefined;
                    var1.dragSpecs = var0;
                    var1.overSpecs = var0;
                    var0 = var4.bind(var0)(var1);
                    var0 = var3.get;
                    var4 = var0.bind(var3)();
                    var0 = var4.mode;
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun100832_ip = 1277;
                        continue _fun100832
                    }
                case 1234:
                    var1 = var3.set;
                    var0 = {};
                    var21 = var0;
                    var20 = var4;
                    var4 = copyDataProperties(var21, var20);
                    var4 = 'mode';
                    var0[var4] = var5;
                    var0 = var1.bind(var3)(var0);
                    var1 = var2.set;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 1277:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = var14.bind(var9)(var12, var13);
        var _closure2_slot11 = var15;
        var14 = var9.useCallback;
        var13 = function(arg0, arg1) { // Environment: var0
            _fun100836: for (var _fun100836_ip = 0;;) switch (_fun100836_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var5 = var1.gestureState;
                    var3 = var1.dragDropInProgress;
                    var6 = _closure1_slot36;
                    var4 = _closure2_slot2;
                    var0 = undefined;
                    var1 = arg1;
                    var2 = false;
                    var1 = var6.bind(var0)(var1, var2, var4);
                    var1 = var1.item;
                    var4 = var5.get;
                    var6 = var4.bind(var5)();
                    var7 = null;
                    var1 = var7 == var1;
                    if (!var1) {
                        _fun100836_ip = 86;
                        continue _fun100836
                    }
                case 77:
                    var4 = var6.mode;
                    var1 = var7 == var4;
                case 86:
                    if (!var1) {
                        _fun100836_ip = 134;
                        continue _fun100836
                    }
                case 89:
                    var4 = var5.set;
                    var1 = {};
                    var10 = var1;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var7 = 'cancel';
                    var6 = 'mode';
                    var1[var6] = var7;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var2);
                case 134:
                    return var0;
            }
        };
        var12 = new Array(0);
        var12 = var14.bind(var9)(var13, var12);
        var _closure2_slot12 = var12;
        var16 = var9.useCallback;
        var14 = new Array(1);
        var14[0] = var15;
        var13 = function(arg0, arg1) { // Environment: var0
            _fun100837: for (var _fun100837_ip = 0;;) switch (_fun100837_ip) {
                case 0:
                    var5 = arg0;
                    var6 = arg1;
                    var2 = _closure1_slot9;
                    var0 = var2.getState;
                    var0 = var0.bind(var2)();
                    var2 = var0.dragSpecs;
                    var16 = var0.scrollPosition;
                    var4 = var0.gestureState;
                    var8 = var0.dragDropInProgress;
                    var3 = var0.setStateShallow;
                    var7 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var17 = 12;
                    var2 = var0[var17];
                    var0 = undefined;
                    var9 = var7.bind(var0)(var2);
                    var7 = var9.addBreadcrumb;
                    var2 = {
                        'category': 'GuildsBarGesture',
                        'message': 'handlePress started'
                    };
                    var10 = {};
                    var10.absoluteX = var5;
                    var10.absoluteY = var6;
                    var2.data = var10;
                    var2 = var7.bind(var9)(var2);
                    var9 = _closure1_slot36;
                    var2 = _closure2_slot2;
                    var7 = false;
                    var2 = var9.bind(var0)(var6, var7, var2);
                    var14 = var2.item;
                    var10 = var2.node;
                    var11 = null;
                    if (!(var11 != var14)) {
                        _fun100837_ip = 159;
                        continue _fun100837
                    }
                case 155:
                    if (!(var11 == var10)) {
                        _fun100837_ip = 211;
                        continue _fun100837
                    }
                case 159:
                    var9 = var4.set;
                    var2 = {};
                    var13 = var4.get;
                    var22 = var13.bind(var4)();
                    var23 = var2;
                    var13 = copyDataProperties(var23, var22);
                    var13 = 'mode';
                    var2[var13] = var11;
                    var2 = var9.bind(var4)(var2);
                    var2 = var8.set;
                    var2 = var2.bind(var8)(var7);
                    _fun100837_ip = 972;
                    continue _fun100837;
                case 211:
                    var8 = {};
                    var8.node = var10;
                    var8.item = var14;
                    var2 = var14.layoutStart;
                    var8.itemTop = var2;
                    var2 = var14.layoutSize;
                    var8.itemSize = var2;
                    var9 = _closure1_slot5;
                    var7 = var9.get;
                    var2 = 'window';
                    var2 = var7.bind(var9)(var2);
                    var9 = var2.height;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 22;
                    var2 = var13[var2];
                    var7 = var7.bind(var0)(var2);
                    var2 = var7.isAndroid;
                    var2 = var2.bind(var7)();
                    var7 = var9;
                    if (!var2) {
                        _fun100837_ip = 351;
                        continue _fun100837
                    }
                case 303:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 23;
                    var2 = var15[var2];
                    var13 = var13.bind(var0)(var2);
                    var2 = var13.getSafeAreaInsets;
                    var2 = var2.bind(var13)();
                    var13 = var2.top;
                    var2 = var2.bottom;
                    var2 = var13 + var2;
                    var7 = var9 + var2;
                case 351:
                    var2 = _closure1_slot14;
                    var13 = var2.activeIndex;
                    var9 = var13.set;
                    var2 = -1;
                    var2 = var9.bind(var13)(var2);
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 24;
                    var2 = var13[var2];
                    var9 = var9.bind(var0)(var2);
                    var2 = var9.getIsScreenReaderEnabled;
                    var2 = var2.bind(var9)();
                    if (var2) {
                        _fun100837_ip = 832;
                        continue _fun100837
                    }
                case 413:
                    var13 = var10.type;
                    var2 = _closure1_slot8;
                    var2 = var2.GUILD;
                    if (!(var2 !== var13)) {
                        _fun100837_ip = 516;
                        continue _fun100837
                    }
                case 432:
                    var2 = _closure1_slot8;
                    var9 = var2.FOLDER;
                    var2 = undefined;
                    if (!(var9 === var13)) {
                        _fun100837_ip = 611;
                        continue _fun100837
                    }
                case 451:
                    var9 = {};
                    var13 = var10.id;
                    var9.key = var13;
                    var13 = var10.name;
                    var9.title = var13;
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 26;
                    var13 = var18[var13];
                    var18 = var15.bind(var0)(var13);
                    var15 = var18.getGuildFolderMenuItems;
                    var13 = var10.id;
                    var13 = var15.bind(var18)(var13);
                    var9.items = var13;
                    var2 = var9;
                    _fun100837_ip = 611;
                    continue _fun100837;
                case 516:
                    var15 = _closure1_slot6;
                    var13 = var15.getGuild;
                    var9 = var10.id;
                    var13 = var13.bind(var15)(var9);
                    var9 = {};
                    var15 = var10.id;
                    var9.key = var15;
                    var18 = var11 == var13;
                    var15 = undefined;
                    if (var18) {
                        _fun100837_ip = 560;
                        continue _fun100837
                    }
                case 555:
                    var15 = var13.name;
                case 560:
                    var9.title = var15;
                    if (!(var11 == var13)) {
                        _fun100837_ip = 574;
                        continue _fun100837
                    }
                case 568:
                    var11 = new Array(0);
                    _fun100837_ip = 604;
                    continue _fun100837;
                case 574:
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var15 = 25;
                    var15 = var19[var15];
                    var15 = var18.bind(var0)(var15);
                    var13 = var13.id;
                    var11 = var15.bind(var0)(var13);
                case 604:
                    var9.items = var11;
                    var2 = var9;
                case 611:
                    var13 = var2.items;
                    var _closure3_slot0 = var13;
                    var20 = var2.key;
                    var15 = var2.title;
                    var9 = var13.length;
                    var2 = 0;
                    if (!(var9 > var2)) {
                        _fun100837_ip = 858;
                        continue _fun100837
                    }
                case 644:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 21;
                    var2 = var11[var2];
                    var11 = var9.bind(var0)(var2);
                    var9 = var11.showContextMenu;
                    var2 = {};
                    var18 = global;
                    var18 = var18.HermesInternal;
                    var19 = var18.concat;
                    var18 = '';
                    var18 = var19.bind(var18)(var20);
                    var2.key = var18;
                    var2.title = var15;
                    var2.items = var13;
                    var13 = _closure1_slot10;
                    var15 = var17 + var13;
                    var15 = var15 + var17;
                    var2.x = var15;
                    var15 = var14.layoutStart;
                    var14 = var16.get;
                    var14 = var14.bind(var16)();
                    var14 = var15 - var14;
                    var2.y = var14;
                    var14 = 'left';
                    var2.positionX = var14;
                    var14 = 'below';
                    var2.positionY = var14;
                    var2.width = var13;
                    var2.height = var13;
                    var13 = _closure1_slot14;
                    var2.state = var13;
                    var13 = new Array(0);
                    var2.dividerIndexes = var13;
                    var13 = 'never';
                    var2.keyboardShouldPersistTaps = var13;
                    var13 = function arg0() {
                        _fun100838: for (var _fun100838_ip = 0;;) switch (_fun100838_ip) {
                            case 0:
                                var0 = arg0;
                                if (var0) {
                                    _fun100838_ip = 54;
                                    continue _fun100838
                                }
                            case 6:
                                var1 = _closure3_slot0;
                                var0 = _closure1_slot14;
                                var2 = var0.activeIndex;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var1 = var1[var0];
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun100838_ip = 54;
                                    continue _fun100838
                                }
                            case 45:
                                var0 = var1.action;
                                var0 = var0.bind(var1)();
                            case 54:
                                var1 = _closure1_slot14;
                                var3 = var1.activeIndex;
                                var2 = var3.set;
                                var1 = -1;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideContextMenu;
                                var1 = var1.bind(var2)();
                                var2 = _closure2_slot11;
                                var1 = 'contextmenu-close';
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var2.requestClose = var13;
                    var12 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var2.onClose = var12;
                    var2 = var9.bind(var11)(var2);
                    _fun100837_ip = 858;
                    continue _fun100837;
                case 832:
                    var9 = _closure1_slot34;
                    var2 = {};
                    var11 = 'drag-start';
                    var2.type = var11;
                    var2.node = var10;
                    var2 = var9.bind(var0)(var2);
                case 858:
                    var2 = {};
                    var2.dragSpecs = var8;
                    var2.overSpecs = var0;
                    var2.windowSize = var7;
                    var2 = var3.bind(var0)(var2);
                    var3 = var4.set;
                    var2 = {};
                    var7 = 'pressed';
                    var2.mode = var7;
                    var2.initialY = var6;
                    var2.initialX = var5;
                    var2.absoluteY = var6;
                    var2.absoluteX = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var2 = var5[var1];
                    var3 = var4.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var2.bind(var3)(var1);
                case 972:
                    return var0;
            }
        };
        var13 = var16.bind(var9)(var13, var14);
        var _closure2_slot13 = var13;
        var21 = var9.useCallback;
        var16 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 21;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var4 = var5.updateContextMenuState;
            var3 = _closure1_slot14;
            var2 = arg0;
            var1 = arg1;
            var1 = var4.bind(var5)(var2, var1, var3);
            return var0;
        };
        var14 = new Array(0);
        var16 = var21.bind(var9)(var16, var14);
        var _closure2_slot14 = var16;
        var21 = var9.useCallback;
        var14 = new Array(2);
        var14[0] = var22;
        var14[1] = var1;
        var1 = function(arg0) { // Environment: var0
            _fun100841: for (var _fun100841_ip = 0;;) switch (_fun100841_ip) {
                case 0:
                    var12 = arg0;
                    var3 = _closure1_slot9;
                    var0 = var3.getState;
                    var0 = var0.bind(var3)();
                    var17 = var0.overSpecs;
                    var _closure3_slot0 = var17;
                    var3 = var0.dragSpecs;
                    var _closure3_slot1 = var3;
                    var8 = var0.windowSize;
                    var _closure3_slot2 = var8;
                    var4 = var0.setStateShallow;
                    var _closure3_slot3 = var4;
                    var9 = var0.listInsets;
                    var4 = var0.gestureState;
                    var6 = _closure1_slot17;
                    var5 = {};
                    var5.overSpecs = var17;
                    var5.dragSpecs = var3;
                    var5.windowSize = var8;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var5.gestureState = var0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var16 = null;
                    if (!(var16 != var3)) {
                        _fun100841_ip = 1292;
                        continue _fun100841
                    }
                case 125:
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.getIsScreenReaderEnabled;
                    var3 = var3.bind(var5)();
                    if (var3) {
                        _fun100841_ip = 181;
                        continue _fun100841
                    }
                case 167:
                    var5 = _closure3_slot1;
                    var5 = var5.node;
                    var3 = var16 == var5;
                case 181:
                    if (var3) {
                        _fun100841_ip = 188;
                        continue _fun100841
                    }
                case 184:
                    var3 = var16 != var17;
                case 188:
                    if (var3) {
                        _fun100841_ip = 227;
                        continue _fun100841
                    }
                case 191:
                    var5 = _closure1_slot34;
                    var3 = {};
                    var6 = 'drag-start';
                    var3.type = var6;
                    var6 = _closure3_slot1;
                    var6 = var6.node;
                    var3.node = var6;
                    var3 = var5.bind(var0)(var3);
                case 227:
                    var10 = global;
                    var3 = var10.Map;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var26 = var5;
                    var3 = new var26[var3](var25);
                    var15 = var3 instanceof Object ? var3 : var5;
                    var3 = var16 != var17;
                    if (!var3) {
                        _fun100841_ip = 275;
                        continue _fun100841
                    }
                case 262:
                    var6 = var17.state;
                    var5 = 'self';
                    var3 = var5 !== var6;
                case 275:
                    if (!var3) {
                        _fun100841_ip = 345;
                        continue _fun100841
                    }
                case 278:
                    var6 = var15.set;
                    var3 = _closure3_slot1;
                    var3 = var3.item;
                    var5 = var3.recyclerKey;
                    var3 = 0;
                    var3 = var6.bind(var15)(var5, var3);
                    var6 = var15.set;
                    var3 = var17.item;
                    var5 = var3.recyclerKey;
                    var3 = _closure3_slot1;
                    var7 = var3.itemSize;
                    var3 = 2;
                    var3 = var3 * var7;
                    var3 = var6.bind(var15)(var5, var3);
                case 345:
                    var7 = _closure1_slot36;
                    var23 = _closure2_slot2;
                    var6 = true;
                    var26 = undefined;
                    var25 = var12;
                    var24 = true;
                    var22 = var15;
                    var7 = var26[var7](var25, var24, var23, var22, var21);
                    var5 = var7.item;
                    var20 = var7.overPercentage;
                    var19 = var7.node;
                    var7 = var16 == var17;
                    var11 = undefined;
                    if (var7) {
                        _fun100841_ip = 409;
                        continue _fun100841
                    }
                case 398:
                    var7 = var17.node;
                    var11 = var7.id;
                case 409:
                    var13 = var16 == var19;
                    var7 = undefined;
                    if (var13) {
                        _fun100841_ip = 423;
                        continue _fun100841
                    }
                case 418:
                    var7 = var19.id;
                case 423:
                    if (!(var11 === var7)) {
                        _fun100841_ip = 449;
                        continue _fun100841
                    }
                case 427:
                    var11 = var16 == var17;
                    var7 = undefined;
                    if (var11) {
                        _fun100841_ip = 442;
                        continue _fun100841
                    }
                case 436:
                    var7 = var17.percentage;
                case 442:
                    if (!(var7 !== var20)) {
                        _fun100841_ip = 963;
                        continue _fun100841
                    }
                case 449:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var13 = 21;
                    var7 = var7[var13];
                    var7 = var11.bind(var0)(var7);
                    var11 = var7.ContextMenuStore;
                    var7 = var11.getState;
                    var7 = var7.bind(var11)();
                    var7 = var7.menu;
                    if (!(var16 != var7)) {
                        _fun100841_ip = 522;
                        continue _fun100841
                    }
                case 495:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var13];
                    var11 = var11.bind(var0)(var7);
                    var7 = var11.hideContextMenu;
                    var7 = var7.bind(var11)();
                case 522:
                    var13 = var5;
                    var7 = var20;
                    var11 = var19;
                    if (!(var16 != var5)) {
                        _fun100841_ip = 724;
                        continue _fun100841
                    }
                case 538:
                    var14 = var16 == var17;
                    var18 = undefined;
                    if (var14) {
                        _fun100841_ip = 558;
                        continue _fun100841
                    }
                case 547:
                    var14 = var17.item;
                    var18 = var14.recyclerKey;
                case 558:
                    var14 = var5.recyclerKey;
                    var13 = var5;
                    var7 = var20;
                    var11 = var19;
                    if (!(var18 !== var14)) {
                        _fun100841_ip = 724;
                        continue _fun100841
                    }
                case 580:
                    var14 = var15.clear;
                    var14 = var14.bind(var15)();
                    var14 = _closure3_slot1;
                    var14 = var14.item;
                    var18 = var14.recyclerKey;
                    var14 = var5.recyclerKey;
                    if (!(var18 !== var14)) {
                        _fun100841_ip = 685;
                        continue _fun100841
                    }
                case 615:
                    var19 = var15.set;
                    var14 = _closure3_slot1;
                    var14 = var14.item;
                    var14 = var14.recyclerKey;
                    var20 = var16 != var14;
                    var18 = '';
                    if (!var20) {
                        _fun100841_ip = 649;
                        continue _fun100841
                    }
                case 646:
                    var18 = var14;
                case 649:
                    var14 = 0;
                    var14 = var19.bind(var15)(var18, var14);
                    var18 = var15.set;
                    var14 = var5.recyclerKey;
                    var19 = _closure1_slot13;
                    var5 = 2;
                    var5 = var5 * var19;
                    var5 = var18.bind(var15)(var14, var5);
                case 685:
                    var14 = _closure1_slot36;
                    var23 = _closure2_slot2;
                    var26 = undefined;
                    var25 = var12;
                    var24 = true;
                    var22 = var15;
                    var5 = var26[var14](var25, var24, var23, var22, var21);
                    var13 = var5.item;
                    var7 = var5.overPercentage;
                    var11 = var5.node;
                case 724:
                    var5 = _closure3_slot1;
                    var25 = var5.node;
                    var5 = _closure3_slot1;
                    var23 = var5.item;
                    var5 = function arg0, arg1, arg2, arg3, arg4() {
                        _fun100842: for (var _fun100842_ip = 0;;) switch (_fun100842_ip) {
                            case 0:
                                var5 = arg0;
                                var2 = arg1;
                                var6 = arg2;
                                var8 = arg3;
                                var3 = arg4;
                                var7 = null;
                                if (!(var7 != var6)) {
                                    _fun100842_ip = 33;
                                    continue _fun100842
                                }
                            case 21:
                                if (!(var7 != var8)) {
                                    _fun100842_ip = 33;
                                    continue _fun100842
                                }
                            case 25:
                                if (!(var7 != var5)) {
                                    _fun100842_ip = 33;
                                    continue _fun100842
                                }
                            case 29:
                                if (!(var7 == var2)) {
                                    _fun100842_ip = 37;
                                    continue _fun100842
                                }
                            case 33:
                                var0 = undefined;
                                return var0;
                            case 37:
                                var1 = var5.id;
                                var0 = var2.id;
                                if (!(var1 !== var0)) {
                                    _fun100842_ip = 658;
                                    continue _fun100842
                                }
                            case 54:
                                var10 = var6.type;
                                var9 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var12 = 14;
                                var1 = var0[var12];
                                var0 = undefined;
                                var1 = var9.bind(var0)(var1);
                                var1 = var1.FastListItemTypes;
                                var1 = var1.SECTION;
                                if (!(var1 !== var10)) {
                                    _fun100842_ip = 138;
                                    continue _fun100842
                                }
                            case 100:
                                var9 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var12];
                                var1 = var9.bind(var0)(var1);
                                var1 = var1.FastListItemTypes;
                                var9 = var1.ITEM;
                                var1 = undefined;
                                if (!(var9 === var10)) {
                                    _fun100842_ip = 262;
                                    continue _fun100842
                                }
                            case 138:
                                var10 = var8.type;
                                var11 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var9 = var9[var12];
                                var9 = var11.bind(var0)(var9);
                                var9 = var9.FastListItemTypes;
                                var9 = var9.SECTION;
                                if (!(var9 !== var10)) {
                                    _fun100842_ip = 211;
                                    continue _fun100842
                                }
                            case 176:
                                var11 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var9 = var9[var12];
                                var9 = var11.bind(var0)(var9);
                                var9 = var9.FastListItemTypes;
                                var9 = var9.ITEM;
                                var1 = undefined;
                                if (!(var9 === var10)) {
                                    _fun100842_ip = 262;
                                    continue _fun100842
                                }
                            case 211:
                                var9 = var8.recyclerKey;
                                var8 = var6.recyclerKey;
                                var6 = 'self';
                                if (!(var9 !== var8)) {
                                    _fun100842_ip = 259;
                                    continue _fun100842
                                }
                            case 231:
                                var8 = 0.5;
                                var9 = var3 < var8;
                                var8 = 'after';
                                if (!var9) {
                                    _fun100842_ip = 256;
                                    continue _fun100842
                                }
                            case 252:
                                var8 = 'before';
                            case 256:
                                var6 = var8;
                            case 259:
                                var1 = var6;
                            case 262:
                                var9 = var5.type;
                                var6 = _closure1_slot8;
                                var8 = var6.FOLDER;
                                var10 = var2.type;
                                var6 = _closure1_slot8;
                                var6 = var6.FOLDER;
                                var6 = var10 === var6;
                                if (!(var9 === var8)) {
                                    _fun100842_ip = 443;
                                    continue _fun100842
                                }
                            case 303:
                                var8 = 'after';
                                if (!(var8 === var1)) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 311:
                                if (!var6) {
                                    _fun100842_ip = 326;
                                    continue _fun100842
                                }
                            case 314:
                                var8 = var2.expanded;
                                if (var8) {
                                    _fun100842_ip = 656;
                                    continue _fun100842
                                }
                            case 326:
                                if (var6) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 329:
                                var8 = var2.parentId;
                                if (!(var7 != var8)) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 339:
                                var9 = _closure1_slot7;
                                var8 = var9.getGuildsTree;
                                var10 = var8.bind(var9)();
                                var9 = var10.getNode;
                                var8 = var2.parentId;
                                var8 = var9.bind(var10)(var8);
                                if (!(var7 != var8)) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 374:
                                var9 = var8.children;
                                var8 = var8.children;
                                var10 = var8.length;
                                var8 = 1;
                                var8 = var10 - var8;
                                var8 = var9[var8];
                                if (!(var7 != var8)) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 404:
                                var9 = var8.id;
                                var8 = var2.id;
                                if (!(var9 !== var8)) {
                                    _fun100842_ip = 420;
                                    continue _fun100842
                                }
                            case 418:
                                return var0;
                            case 420:
                                var8 = 'before';
                                if (!(var8 === var1)) {
                                    _fun100842_ip = 443;
                                    continue _fun100842
                                }
                            case 428:
                                if (var6) {
                                    _fun100842_ip = 443;
                                    continue _fun100842
                                }
                            case 431:
                                var6 = var2.parentId;
                                if (!(var7 != var6)) {
                                    _fun100842_ip = 443;
                                    continue _fun100842
                                }
                            case 441:
                                return var0;
                            case 443:
                                var6 = 'self';
                                if (!(var6 !== var1)) {
                                    _fun100842_ip = 654;
                                    continue _fun100842
                                }
                            case 454:
                                if (!(var7 != var1)) {
                                    _fun100842_ip = 654;
                                    continue _fun100842
                                }
                            case 461:
                                var8 = var5.type;
                                var6 = _closure1_slot8;
                                var6 = var6.GUILD;
                                if (!(var8 === var6)) {
                                    _fun100842_ip = 509;
                                    continue _fun100842
                                }
                            case 480:
                                var8 = var2.type;
                                var6 = _closure1_slot8;
                                var6 = var6.GUILD;
                                if (!(var8 === var6)) {
                                    _fun100842_ip = 509;
                                    continue _fun100842
                                }
                            case 499:
                                var6 = var2.parentId;
                                if (!(var7 != var6)) {
                                    _fun100842_ip = 592;
                                    continue _fun100842
                                }
                            case 509:
                                var6 = var5.type;
                                var5 = _closure1_slot8;
                                var5 = var5.GUILD;
                                if (!(var6 === var5)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 528:
                                var5 = var2.type;
                                var4 = _closure1_slot8;
                                var4 = var4.FOLDER;
                                if (!(var5 === var4)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 547:
                                var2 = var2.expanded;
                                if (var2) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 556:
                                var2 = 0.35;
                                if (!(var3 > var2)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 570:
                                var2 = 0.65;
                                if (!(var3 < var2)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 584:
                                var2 = 'drop-into';
                                return var2;
                            case 592:
                                var2 = 0.35;
                                if (!(var3 > var2)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 606:
                                var2 = 0.65;
                                if (!(var3 < var2)) {
                                    _fun100842_ip = 636;
                                    continue _fun100842
                                }
                            case 620:
                                var2 = 'before';
                                if (!(var2 !== var1)) {
                                    _fun100842_ip = 646;
                                    continue _fun100842
                                }
                            case 628:
                                var2 = 'after';
                                if (!(var2 !== var1)) {
                                    _fun100842_ip = 638;
                                    continue _fun100842
                                }
                            case 636:
                                return var1;
                            case 638:
                                var2 = 'convert-after';
                                return var2;
                            case 646:
                                var2 = 'convert-before';
                                return var2;
                            case 654:
                                return var1;
                            case 656:
                                return var0;
                            case 658:
                                var0 = 'self';
                                return var0;
                        }
                    };
                    var26 = undefined;
                    var24 = var11;
                    var22 = var13;
                    var21 = var7;
                    var5 = var26[var5](var25, var24, var23, var22, var21, var20);
                    var14 = var11;
                    var11 = var5;
                    if (!(var16 == var11)) {
                        _fun100841_ip = 798;
                        continue _fun100841
                    }
                case 775:
                    var5 = _closure3_slot1;
                    var14 = var5.node;
                    var5 = _closure3_slot1;
                    var13 = var5.item;
                    var11 = 'self';
                case 798:
                    var5 = var16 != var14;
                    if (!var5) {
                        _fun100841_ip = 809;
                        continue _fun100841
                    }
                case 805:
                    var5 = var16 != var17;
                case 809:
                    if (!var5) {
                        _fun100841_ip = 858;
                        continue _fun100841
                    }
                case 812:
                    var15 = _closure1_slot34;
                    var5 = {};
                    var18 = 'drag-move';
                    var5.type = var18;
                    var18 = _closure3_slot1;
                    var18 = var18.node;
                    var5.dragNode = var18;
                    var5.overNode = var14;
                    var5.overState = var11;
                    var5 = var15.bind(var0)(var5);
                case 858:
                    var5 = var16 == var14;
                    if (var5) {
                        _fun100841_ip = 869;
                        continue _fun100841
                    }
                case 865:
                    var5 = var16 == var13;
                case 869:
                    if (var5) {
                        _fun100841_ip = 936;
                        continue _fun100841
                    }
                case 872:
                    var18 = var16 == var17;
                    var15 = undefined;
                    if (var18) {
                        _fun100841_ip = 887;
                        continue _fun100841
                    }
                case 881:
                    var15 = var17.node;
                case 887:
                    var15 = var15 === var14;
                    if (!var15) {
                        _fun100841_ip = 912;
                        continue _fun100841
                    }
                case 894:
                    var19 = var16 == var17;
                    var18 = undefined;
                    if (var19) {
                        _fun100841_ip = 908;
                        continue _fun100841
                    }
                case 903:
                    var18 = var17.item;
                case 908:
                    var15 = var18 === var13;
                case 912:
                    if (!var15) {
                        _fun100841_ip = 933;
                        continue _fun100841
                    }
                case 915:
                    var18 = var16 == var17;
                    var16 = undefined;
                    if (var18) {
                        _fun100841_ip = 929;
                        continue _fun100841
                    }
                case 924:
                    var16 = var17.state;
                case 929:
                    var15 = var16 === var11;
                case 933:
                    var5 = var15;
                case 936:
                    if (var5) {
                        _fun100841_ip = 963;
                        continue _fun100841
                    }
                case 939:
                    var5 = {};
                    var5.node = var14;
                    var5.item = var13;
                    var5.state = var11;
                    var5.percentage = var7;
                    _closure3_slot0 = var5;
                case 963:
                    var5 = var9.get;
                    var5 = var5.bind(var9)();
                    var5 = var5.start;
                    var7 = 160;
                    var11 = var5 + var7;
                    var5 = var9.get;
                    var5 = var5.bind(var9)();
                    var5 = var5.end;
                    var5 = var8 - var5;
                    var15 = var5 - var7;
                    if (!(!(var12 < var11))) {
                        _fun100841_ip = 1091;
                        continue _fun100841
                    }
                case 1010:
                    var8 = var12 > var15;
                    var14 = 0;
                    var5 = 0;
                    if (!var8) {
                        _fun100841_ip = 1168;
                        continue _fun100841
                    }
                case 1024:
                    var13 = var10.Math;
                    var9 = var13.max;
                    var8 = var4.initialY;
                    var8 = var9.bind(var13)(var8, var15);
                    var13 = var10.Math;
                    var9 = var13.max;
                    var16 = var10.Math;
                    var15 = var16.min;
                    var8 = var12 - var8;
                    var8 = var15.bind(var16)(var8, var7);
                    var8 = var8 / var7;
                    var5 = var9.bind(var13)(var8, var14);
                    _fun100841_ip = 1168;
                    continue _fun100841;
                case 1091:
                    var9 = var10.Math;
                    var8 = var9.min;
                    var4 = var4.initialY;
                    var4 = var8.bind(var9)(var4, var11);
                    var9 = var10.Math;
                    var8 = var9.max;
                    var11 = var10.Math;
                    var10 = var11.min;
                    var4 = var4 - var12;
                    var4 = var10.bind(var11)(var4, var7);
                    var7 = var4 / var7;
                    var4 = 0;
                    var7 = var8.bind(var9)(var7, var4);
                    var4 = -1;
                    var5 = var4 * var7;
                case 1168:
                    var7 = _closure2_slot3;
                    var4 = var7.set;
                    var4 = var4.bind(var7)(var5);
                    var4 = 0;
                    var4 = var4 === var5;
                    if (!var4) {
                        _fun100841_ip = 1204;
                        continue _fun100841
                    }
                case 1191:
                    var5 = _closure2_slot10;
                    var5 = var5.isActive;
                    if (var5) {
                        _fun100841_ip = 1237;
                        continue _fun100841
                    }
                case 1204:
                    if (var4) {
                        _fun100841_ip = 1217;
                        continue _fun100841
                    }
                case 1207:
                    var5 = _closure2_slot10;
                    var4 = var5.isActive;
                case 1217:
                    if (var4) {
                        _fun100841_ip = 1254;
                        continue _fun100841
                    }
                case 1220:
                    var5 = _closure2_slot10;
                    var4 = var5.setActive;
                    var4 = var4.bind(var5)(var6);
                    _fun100841_ip = 1254;
                    continue _fun100841;
                case 1237:
                    var5 = _closure2_slot10;
                    var4 = var5.setActive;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                case 1254:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        _fun100843: for (var _fun100843_ip = 0;;) switch (_fun100843_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var5 = null;
                                if (!(var5 != var1)) {
                                    _fun100843_ip = 235;
                                    continue _fun100843
                                }
                            case 16:
                                var1 = _closure3_slot1;
                                var1 = var1.node;
                                var3 = var1.type;
                                var1 = _closure1_slot8;
                                var1 = var1.FOLDER;
                                if (!(var3 === var1)) {
                                    _fun100843_ip = 235;
                                    continue _fun100843
                                }
                            case 51:
                                var1 = _closure3_slot1;
                                var1 = var1.node;
                                var1 = var1.expanded;
                                if (!var1) {
                                    _fun100843_ip = 235;
                                    continue _fun100843
                                }
                            case 73:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 19;
                                var1 = var4[var1];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var1);
                                var3 = var6.toggleGuildFolderExpand;
                                var1 = _closure3_slot1;
                                var1 = var1.node;
                                var1 = var1.id;
                                var1 = var3.bind(var6)(var1);
                                var3 = _closure1_slot7;
                                var1 = var3.getGuildsTree;
                                var6 = var1.bind(var3)();
                                var3 = var6.getNode;
                                var1 = _closure3_slot1;
                                var1 = var1.node;
                                var1 = var1.id;
                                var3 = var3.bind(var6)(var1);
                                var1 = _closure3_slot1;
                                var1 = var1.node;
                                var1 = var3 !== var1;
                                if (!var1) {
                                    _fun100843_ip = 206;
                                    continue _fun100843
                                }
                            case 178:
                                var5 = var5 == var3;
                                var4 = undefined;
                                if (var5) {
                                    _fun100843_ip = 192;
                                    continue _fun100843
                                }
                            case 187:
                                var4 = var3.type;
                            case 192:
                                var2 = _closure1_slot8;
                                var2 = var2.FOLDER;
                                var1 = var4 === var2;
                            case 206:
                                if (!var1) {
                                    _fun100843_ip = 235;
                                    continue _fun100843
                                }
                            case 209:
                                var1 = {};
                                var7 = _closure3_slot1;
                                var8 = var1;
                                var2 = copyDataProperties(var8, var7);
                                var2 = 'node';
                                var1[var2] = var3;
                                _closure3_slot1 = var1;
                            case 235:
                                var2 = _closure3_slot3;
                                var1 = {};
                                var3 = _closure3_slot0;
                                var1.overSpecs = var3;
                                var3 = _closure3_slot1;
                                var1.dragSpecs = var3;
                                var0 = _closure3_slot2;
                                var1.windowSize = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 1292:
                    return var0;
            }
        };
        var14 = var21.bind(var9)(var1, var14);
        var _closure2_slot15 = var14;
        var1 = 27;
        var1 = var20[var1];
        var8 = var8.bind(var7)(var1);
        var7 = var8.useExternalScrollEventHandler;
        var1 = {};
        var20 = 'guilds';
        var1.id = var20;
        var1 = var7.bind(var8)(var1);
        var _closure2_slot16 = var1;
        var8 = var9.useCallback;
        var7 = new Array(2);
        var7[0] = var14;
        var7[1] = var1;
        var1 = function(arg0) { // Environment: var0
            _fun100844: for (var _fun100844_ip = 0;;) switch (_fun100844_ip) {
                case 0:
                    var0 = arg0;
                    var5 = _closure2_slot16;
                    var1 = var0.nativeEvent;
                    var1 = var1.contentOffset;
                    var4 = var1.y;
                    var1 = var0.nativeEvent;
                    var1 = var1.contentSize;
                    var3 = var1.height;
                    var0 = var0.nativeEvent;
                    var0 = var0.layoutMeasurement;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var5.bind(var0)(var4, var3, var1);
                    var3 = _closure1_slot9;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var3 = var1.gestureState;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var4 = var1.mode;
                    var3 = 'drag';
                    if (!(var3 === var4)) {
                        _fun100844_ip = 130;
                        continue _fun100844
                    }
                case 115:
                    var2 = _closure2_slot15;
                    var1 = var1.absoluteY;
                    var1 = var2.bind(var0)(var1);
                case 130:
                    return var0;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var8 = var9.useMemo;
        var7 = new Array(13);
        var7[0] = var19;
        var7[1] = var18;
        var7[2] = var17;
        var7[3] = var16;
        var7[4] = var15;
        var7[5] = var14;
        var7[6] = var13;
        var7[7] = var12;
        var7[8] = var11;
        var7[9] = var6;
        var7[10] = var4;
        var7[11] = var10;
        var7[12] = var5;
        var5 = function() { // Environment: var0
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 28;
            var1 = var12[var4];
            var10 = undefined;
            var1 = var11.bind(var10)(var1);
            var3 = var1.Gesture;
            var2 = var3.Simultaneous;
            var1 = var12[var4];
            var1 = var11.bind(var10)(var1);
            var5 = var1.Gesture;
            var1 = var5.LongPress;
            var7 = var1.bind(var5)();
            var5 = var7.onTouchesDown;
            var1 = function arg0, arg1() {
                _fun100846: for (var _fun100846_ip = 0;;) switch (_fun100846_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arg1;
                        var0 = var4.changedTouches;
                        var7 = 0;
                        var1 = var0[var7];
                        var5 = null;
                        var6 = var5 == var1;
                        var0 = undefined;
                        var3 = undefined;
                        if (var6) {
                            _fun100846_ip = 37;
                            continue _fun100846
                        }
                    case 31:
                        var3 = var1.absoluteY;
                    case 37:
                        var6 = var5 != var3;
                        var7 = 0;
                        if (!var6) {
                            _fun100846_ip = 49;
                            continue _fun100846
                        }
                    case 46:
                        var7 = var3;
                    case 49:
                        var8 = _closure2_slot5;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var7 + var6;
                        if (!(var5 != var1)) {
                            _fun100846_ip = 221;
                            continue _fun100846
                        }
                    case 76:
                        var7 = _closure2_slot4;
                        var5 = var7.get;
                        var5 = var5.bind(var7)();
                        var7 = var5.mode;
                        var5 = 'cancel';
                        if (!(var5 !== var7)) {
                            _fun100846_ip = 221;
                            continue _fun100846
                        }
                    case 102:
                        var7 = _closure2_slot6;
                        var5 = var7.get;
                        var5 = var5.bind(var7)();
                        var5 = var5.min;
                        if (!(!(var6 < var5))) {
                            _fun100846_ip = 221;
                            continue _fun100846
                        }
                    case 124:
                        var7 = _closure2_slot6;
                        var5 = var7.get;
                        var5 = var5.bind(var7)();
                        var5 = var5.max;
                        if (!(!(var6 > var5))) {
                            _fun100846_ip = 221;
                            continue _fun100846
                        }
                    case 146:
                        var4 = var4.changedTouches;
                        var5 = var4.length;
                        var4 = 1;
                        if (!(var4 === var5)) {
                            _fun100846_ip = 231;
                            continue _fun100846
                        }
                    case 164:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var4 = var6[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.runOnJS;
                        var3 = _closure2_slot12;
                        var4 = var4.bind(var5)(var3);
                        var3 = var1.absoluteX;
                        var1 = var1.absoluteY;
                        var1 = var4.bind(var0)(var3, var1);
                        _fun100846_ip = 231;
                        continue _fun100846;
                    case 221:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                    case 231:
                        return var0;
                }
            };
            var8 = {};
            var9 = _closure2_slot5;
            var8.scrollPosition = var9;
            var14 = _closure2_slot4;
            var8.gestureState = var14;
            var9 = _closure2_slot6;
            var8.dragRegion = var9;
            var9 = 7;
            var13 = var12[var9];
            var13 = var11.bind(var10)(var13);
            var13 = var13.runOnJS;
            var8.runOnJS = var13;
            var13 = _closure2_slot12;
            var8.handleTouchesDown = var13;
            var1.__closure = var8;
            var8 = 5430653816983.0;
            var1.__workletHash = var8;
            var8 = _closure1_slot25;
            var1.__initData = var8;
            var7 = var5.bind(var7)(var1);
            var5 = var7.onTouchesMove;
            var1 = function arg0, arg1() {
                _fun100847: for (var _fun100847_ip = 0;;) switch (_fun100847_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = _closure2_slot4;
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        var2 = var0.mode;
                        var0 = 'cancel';
                        if (!(var0 === var2)) {
                            _fun100847_ip = 42;
                            continue _fun100847
                        }
                    case 32:
                        var0 = var1.fail;
                        var0 = var0.bind(var1)();
                    case 42:
                        var0 = undefined;
                        return var0;
                }
            };
            var8 = {};
            var8.gestureState = var14;
            var1.__closure = var8;
            var8 = 8960390413776.0;
            var1.__workletHash = var8;
            var8 = _closure1_slot24;
            var1.__initData = var8;
            var7 = var5.bind(var7)(var1);
            var5 = var7.onStart;
            var1 = function arg0() {
                _fun100848: for (var _fun100848_ip = 0;;) switch (_fun100848_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.absoluteX;
                        var2 = var0.absoluteY;
                        var4 = _closure2_slot4;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var4 = var1.mode;
                        var1 = 'cancel';
                        if (!(var1 !== var4)) {
                            _fun100848_ip = 89;
                            continue _fun100848
                        }
                    case 44:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.runOnJS;
                        var0 = _closure2_slot13;
                        var0 = var4.bind(var5)(var0);
                        var0 = var0.bind(var1)(var3, var2);
                    case 89:
                        var0 = undefined;
                        return var0;
                }
            };
            var8 = {};
            var8.gestureState = var14;
            var13 = var12[var9];
            var13 = var11.bind(var10)(var13);
            var13 = var13.runOnJS;
            var8.runOnJS = var13;
            var13 = _closure2_slot13;
            var8.handlePress = var13;
            var1.__closure = var8;
            var8 = 2121892092583.0;
            var1.__workletHash = var8;
            var8 = _closure1_slot23;
            var1.__initData = var8;
            var7 = var5.bind(var7)(var1);
            var5 = var7.onEnd;
            var1 = function() {
                _fun100849: for (var _fun100849_ip = 0;;) switch (_fun100849_ip) {
                    case 0:
                        var2 = _closure2_slot4;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var1 = var1.mode;
                        var2 = 'cancel';
                        if (!(var2 === var1)) {
                            _fun100849_ip = 73;
                            continue _fun100849
                        }
                    case 29:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var0 = _closure2_slot11;
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.bind(var1)(var2);
                    case 73:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.gestureState = var14;
            var8 = var12[var9];
            var8 = var11.bind(var10)(var8);
            var8 = var8.runOnJS;
            var13.runOnJS = var8;
            var8 = _closure2_slot11;
            var13.handleGestureEnd = var8;
            var1.__closure = var13;
            var13 = 7197137311226.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot22;
            var1.__initData = var13;
            var7 = var5.bind(var7)(var1);
            var5 = var7.onTouchesCancelled;
            var1 = function() {
                _fun100850: for (var _fun100850_ip = 0;;) switch (_fun100850_ip) {
                    case 0:
                        var2 = _closure2_slot4;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var2 = var1.mode;
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun100850_ip = 56;
                            continue _fun100850
                        }
                    case 30:
                        var3 = _closure2_slot4;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var3 = var2.mode;
                        var2 = 'cancel';
                        var1 = var2 !== var3;
                    case 56:
                        if (var1) {
                            _fun100850_ip = 107;
                            continue _fun100850
                        }
                    case 59:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.runOnJS;
                        var0 = _closure2_slot11;
                        var1 = var1.bind(var3)(var0);
                        var0 = 'cancel';
                        var0 = var1.bind(var2)(var0);
                    case 107:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.gestureState = var14;
            var15 = var12[var9];
            var15 = var11.bind(var10)(var15);
            var15 = var15.runOnJS;
            var13.runOnJS = var15;
            var13.handleGestureEnd = var8;
            var1.__closure = var13;
            var13 = 8240921685123.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot21;
            var1.__initData = var13;
            var1 = var5.bind(var7)(var1);
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var5 = var4.Gesture;
            var4 = var5.Pan;
            var7 = var4.bind(var5)();
            var5 = var7.manualActivation;
            var4 = true;
            var13 = var5.bind(var7)(var4);
            var7 = var13.simultaneousWithExternalGesture;
            var5 = _closure2_slot1;
            var4 = _closure2_slot0;
            var7 = var7.bind(var13)(var5, var4);
            var5 = var7.shouldCancelWhenOutside;
            var4 = false;
            var7 = var5.bind(var7)(var4);
            var5 = var7.onTouchesMove;
            var4 = function arg0, arg1() {
                _fun100851: for (var _fun100851_ip = 0;;) switch (_fun100851_ip) {
                    case 0:
                        var3 = arg1;
                        var0 = arg0;
                        var1 = var0.changedTouches;
                        var0 = 0;
                        var0 = var1[var0];
                        var4 = _closure2_slot4;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var4 = var2.mode;
                        var2 = 'pressed';
                        if (!(var2 === var4)) {
                            _fun100851_ip = 53;
                            continue _fun100851
                        }
                    case 47:
                        var2 = null;
                        if (!(var2 == var0)) {
                            _fun100851_ip = 125;
                            continue _fun100851
                        }
                    case 53:
                        var4 = _closure2_slot4;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var4 = var2.mode;
                        var2 = 'cancel';
                        var2 = var2 !== var4;
                        if (!var2) {
                            _fun100851_ip = 88;
                            continue _fun100851
                        }
                    case 82:
                        var4 = null;
                        var2 = var4 != var0;
                    case 88:
                        if (var2) {
                            _fun100851_ip = 565;
                            continue _fun100851
                        }
                    case 94:
                        var2 = var3.fail;
                        var2 = var2.bind(var3)();
                        var5 = _closure2_slot9;
                        var4 = var5.set;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        _fun100851_ip = 565;
                        continue _fun100851;
                    case 125:
                        var4 = var0.absoluteX;
                        var8 = _closure2_slot4;
                        var2 = var8.get;
                        var2 = var2.bind(var8)();
                        var2 = var2.initialX;
                        var5 = var4 - var2;
                        var2 = global;
                        var6 = var2.Math;
                        var4 = var6.abs;
                        var7 = var0.absoluteY;
                        var2 = var8.get;
                        var2 = var2.bind(var8)();
                        var2 = var2.absoluteY;
                        var2 = var7 - var2;
                        var4 = var4.bind(var6)(var2);
                        var2 = 10;
                        if (!(var5 > var2)) {
                            _fun100851_ip = 212;
                            continue _fun100851
                        }
                    case 205:
                        if (!(!(var5 > var4))) {
                            _fun100851_ip = 405;
                            continue _fun100851
                        }
                    case 212:
                        if (!(var4 > var2)) {
                            _fun100851_ip = 565;
                            continue _fun100851
                        }
                    case 219:
                        var5 = _closure2_slot4;
                        var4 = var5.set;
                        var2 = {};
                        var6 = var5.get;
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var6 = copyDataProperties(var10, var9);
                        var7 = 'drag';
                        var6 = 'mode';
                        var2[var6] = var7;
                        var7 = var0.absoluteX;
                        var6 = 'initialX';
                        var2[var6] = var7;
                        var7 = var0.absoluteY;
                        var6 = 'initialY';
                        var2[var6] = var7;
                        var7 = var0.absoluteX;
                        var6 = 'absoluteX';
                        var2[var6] = var7;
                        var7 = var0.absoluteY;
                        var6 = 'absoluteY';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.activate;
                        var2 = var2.bind(var3)();
                        var5 = _closure2_slot9;
                        var4 = var5.set;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var5 = undefined;
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.runOnJS;
                        var2 = _closure2_slot15;
                        var4 = var4.bind(var6)(var2);
                        var2 = var0.absoluteY;
                        var2 = var4.bind(var5)(var2);
                        _fun100851_ip = 565;
                        continue _fun100851;
                    case 405:
                        var5 = _closure2_slot4;
                        var4 = var5.set;
                        var2 = {};
                        var6 = var5.get;
                        var9 = var6.bind(var5)();
                        var10 = var2;
                        var6 = copyDataProperties(var10, var9);
                        var7 = 'contextmenu';
                        var6 = 'mode';
                        var2[var6] = var7;
                        var7 = var0.absoluteX;
                        var6 = 'absoluteX';
                        var2[var6] = var7;
                        var7 = var0.absoluteY;
                        var6 = 'absoluteY';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var2);
                        var5 = _closure2_slot9;
                        var4 = var5.set;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.activate;
                        var2 = var2.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot14;
                        var2 = var2.bind(var4)(var1);
                        var1 = var0.absoluteX;
                        var0 = var0.absoluteY;
                        var0 = var2.bind(var3)(var1, var0);
                    case 565:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.gestureState = var14;
            var15 = _closure2_slot9;
            var13.dragDropInProgress = var15;
            var15 = 10;
            var13.DRAG_GESTURE_MINIMUM_DISTANCE = var15;
            var15 = var12[var9];
            var15 = var11.bind(var10)(var15);
            var15 = var15.runOnJS;
            var13.runOnJS = var15;
            var15 = _closure2_slot14;
            var13.handleContextMenuDrag = var15;
            var16 = _closure2_slot15;
            var13.handleGuildDrag = var16;
            var4.__closure = var13;
            var13 = 15225957003871.0;
            var4.__workletHash = var13;
            var13 = _closure1_slot29;
            var4.__initData = var13;
            var7 = var5.bind(var7)(var4);
            var5 = var7.onUpdate;
            var4 = function arg0() {
                _fun100852: for (var _fun100852_ip = 0;;) switch (_fun100852_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.absoluteX;
                        var2 = var0.absoluteY;
                        var3 = _closure2_slot4;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var3 = var1.mode;
                        var1 = 'drag';
                        if (!(var1 !== var3)) {
                            _fun100852_ip = 125;
                            continue _fun100852
                        }
                    case 44:
                        var3 = _closure2_slot4;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var3 = var1.mode;
                        var1 = 'contextmenu';
                        if (!(var1 === var3)) {
                            _fun100852_ip = 381;
                            continue _fun100852
                        }
                    case 75:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var1);
                        var4 = var5.runOnJS;
                        var1 = _closure2_slot14;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var3)(var7, var2);
                        _fun100852_ip = 381;
                        continue _fun100852;
                    case 125:
                        var3 = _closure2_slot4;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var1 = var1.absoluteX;
                        if (!(var7 === var1)) {
                            _fun100852_ip = 174;
                            continue _fun100852
                        }
                    case 148:
                        var3 = _closure2_slot4;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var1 = var1.absoluteY;
                        if (!(var2 !== var1)) {
                            _fun100852_ip = 381;
                            continue _fun100852
                        }
                    case 174:
                        var3 = _closure2_slot4;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var6 = var1.initialY;
                        var8 = _closure2_slot8;
                        var1 = var8.get;
                        var1 = var1.bind(var8)();
                        var1 = var1.start;
                        var4 = 160;
                        var1 = var1 + var4;
                        var5 = _closure2_slot7;
                        var3 = var8.get;
                        var3 = var3.bind(var8)();
                        var3 = var3.end;
                        var3 = var5 - var3;
                        var3 = var3 - var4;
                        var1 = var6 < var1;
                        if (!var1) {
                            _fun100852_ip = 255;
                            continue _fun100852
                        }
                    case 251:
                        var1 = var2 > var6;
                    case 255:
                        if (var1) {
                            _fun100852_ip = 272;
                            continue _fun100852
                        }
                    case 258:
                        var3 = var6 > var3;
                        if (!var3) {
                            _fun100852_ip = 269;
                            continue _fun100852
                        }
                    case 265:
                        var3 = var2 < var6;
                    case 269:
                        var1 = var3;
                    case 272:
                        if (!var1) {
                            _fun100852_ip = 278;
                            continue _fun100852
                        }
                    case 275:
                        var6 = var2;
                    case 278:
                        var4 = _closure2_slot4;
                        var3 = var4.set;
                        var1 = {};
                        var5 = var4.get;
                        var9 = var5.bind(var4)();
                        var10 = var1;
                        var5 = copyDataProperties(var10, var9);
                        var5 = 'absoluteX';
                        var1[var5] = var7;
                        var5 = 'absoluteY';
                        var1[var5] = var2;
                        var5 = 'initialY';
                        var1[var5] = var6;
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var0 = _closure2_slot15;
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.bind(var1)(var2);
                    case 381:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.gestureState = var14;
            var18 = _closure2_slot8;
            var13.listInsets = var18;
            var18 = 160;
            var13.GESTURE_ACCELERATION_RANGE = var18;
            var17 = _closure2_slot7;
            var13.windowSize = var17;
            var17 = var12[var9];
            var17 = var11.bind(var10)(var17);
            var17 = var17.runOnJS;
            var13.runOnJS = var17;
            var13.handleGuildDrag = var16;
            var13.handleContextMenuDrag = var15;
            var4.__closure = var13;
            var13 = 14488930469604.0;
            var4.__workletHash = var13;
            var13 = _closure1_slot28;
            var4.__initData = var13;
            var7 = var5.bind(var7)(var4);
            var5 = var7.onEnd;
            var4 = function() {
                _fun100853: for (var _fun100853_ip = 0;;) switch (_fun100853_ip) {
                    case 0:
                        var2 = _closure2_slot4;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var2 = var1.mode;
                        var1 = 'drag';
                        if (!(var1 !== var2)) {
                            _fun100853_ip = 162;
                            continue _fun100853
                        }
                    case 32:
                        var2 = _closure2_slot4;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var2 = var1.mode;
                        var1 = 'contextmenu';
                        if (!(var1 !== var2)) {
                            _fun100853_ip = 110;
                            continue _fun100853
                        }
                    case 60:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot11;
                        var2 = var2.bind(var4)(var1);
                        var1 = 'cancel';
                        var1 = var2.bind(var3)(var1);
                        _fun100853_ip = 210;
                        continue _fun100853;
                    case 110:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot11;
                        var2 = var2.bind(var4)(var1);
                        var1 = 'contextmenu-open';
                        var1 = var2.bind(var3)(var1);
                        _fun100853_ip = 210;
                        continue _fun100853;
                    case 162:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.runOnJS;
                        var0 = _closure2_slot11;
                        var1 = var1.bind(var3)(var0);
                        var0 = 'drop';
                        var0 = var1.bind(var2)(var0);
                    case 210:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var13.gestureState = var14;
            var14 = var12[var9];
            var14 = var11.bind(var10)(var14);
            var14 = var14.runOnJS;
            var13.runOnJS = var14;
            var13.handleGestureEnd = var8;
            var4.__closure = var13;
            var13 = 3014467498258.0;
            var4.__workletHash = var13;
            var13 = _closure1_slot27;
            var4.__initData = var13;
            var5 = var5.bind(var7)(var4);
            var4 = var5.onTouchesCancelled;
            var0 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.runOnJS;
                var1 = _closure2_slot11;
                var2 = var2.bind(var3)(var1);
                var1 = 'cancel';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var7 = {};
            var9 = var12[var9];
            var9 = var11.bind(var10)(var9);
            var9 = var9.runOnJS;
            var7.runOnJS = var9;
            var7.handleGestureEnd = var8;
            var0.__closure = var7;
            var7 = 9715999020978.0;
            var0.__workletHash = var7;
            var6 = _closure1_slot26;
            var0.__initData = var6;
            var0 = var4.bind(var5)(var0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var8.bind(var9)(var5, var7);
        var8 = var9.useEffect;
        var7 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.subscribe;
            var0 = function(arg0) { // Environment: var0
                _fun100856: for (var _fun100856_ip = 0;;) switch (_fun100856_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.dragSpecs;
                        var1 = var0.dropSpecs;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun100856_ip = 56;
                            continue _fun100856
                        }
                    case 21:
                        if (!(var0 == var1)) {
                            _fun100856_ip = 56;
                            continue _fun100856
                        }
                    case 25:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        if (!(var0 != var3)) {
                            _fun100856_ip = 85;
                            continue _fun100856
                        }
                    case 41:
                        var2 = var3.setDisableRecycling;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun100856_ip = 85;
                        continue _fun100856;
                    case 56:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        if (!(var0 != var2)) {
                            _fun100856_ip = 85;
                            continue _fun100856
                        }
                    case 72:
                        var1 = var2.setDisableRecycling;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                    case 85:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var0 = var8.bind(var9)(var7, var0);
        var0 = {};
        var0.scrollPosition = var6;
        var0.gesture = var5;
        var0.scrollerRef = var4;
        var0.fastListRef = var3;
        var0.persistantKeys = var2;
        var0.onFastListScroll = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1410, 4377, 13151, 13152, 3722, 5695, 3281, 3208, 22, 1207, 1234, 6480, 13141, 3078, 13153, 802, 4680, 7651, 5223, 478, 1568, 4071, 13154, 13155, 5262, 4964, 2]);