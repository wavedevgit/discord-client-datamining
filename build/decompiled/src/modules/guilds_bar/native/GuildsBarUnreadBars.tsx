// modules/guilds_bar/native/GuildsBarUnreadBars.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101181: for (var _fun101181_ip = 0;;) switch (_fun101181_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101181_ip = 46;
                    continue _fun101181
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101181_ip = 55;
                    continue _fun101181
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101181_ip = 345;
                    continue _fun101181
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101181_ip = 323;
                    continue _fun101181
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101181_ip = 283;
                    continue _fun101181
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101181_ip = 270;
                    continue _fun101181
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
                    _fun101181_ip = 163;
                    continue _fun101181
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101181_ip = 179;
                    continue _fun101181
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101181_ip = 249;
                    continue _fun101181
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101181_ip = 249;
                    continue _fun101181
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101181_ip = 234;
                    continue _fun101181
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101181_ip = 247;
                    continue _fun101181
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101181_ip = 265;
                continue _fun101181;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101181_ip = 283;
                continue _fun101181;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101181_ip = 323;
                    continue _fun101181
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
                    _fun101181_ip = 330;
                    continue _fun101181
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101182: for (var _fun101182_ip = 0;;) switch (_fun101182_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101182_ip = 56;
                                continue _fun101182
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
                            _fun101182_ip = 67;
                            continue _fun101182;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun101183: for (var _fun101183_ip = 0;;) switch (_fun101183_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101183_ip = 23;
                    continue _fun101183
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101183_ip = 33;
                    continue _fun101183
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
                    _fun101183_ip = 70;
                    continue _fun101183
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101183_ip = 55;
                    continue _fun101183
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun101184: for (var _fun101184_ip = 0;;) switch (_fun101184_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.node;
                var5 = var0.section;
                var2 = var0.item;
                var14 = var0.direction;
                var13 = var0.selectedGuildId;
                var3 = null;
                if (!(var3 != var8)) {
                    _fun101184_ip = 248;
                    continue _fun101184
                }
            case 40:
                var4 = var8.type;
                var1 = _closure1_slot9;
                var1 = var1.GUILD;
                if (!(var4 === var1)) {
                    _fun101184_ip = 112;
                    continue _fun101184
                }
            case 62:
                var1 = var8.id;
                if (!(var1 !== var13)) {
                    _fun101184_ip = 112;
                    continue _fun101184
                }
            case 71:
                var6 = _closure1_slot6;
                var4 = var6.getMentionCount;
                var1 = var8.id;
                var4 = var4.bind(var6)(var1);
                var1 = 0;
                var6 = var4 > var1;
                var4 = undefined;
                if (!var6) {
                    _fun101184_ip = 105;
                    continue _fun101184
                }
            case 102:
                var4 = var8;
            case 105:
                if (!(var3 == var4)) {
                    _fun101184_ip = 302;
                    continue _fun101184
                }
            case 112:
                var12 = 0;
                var7 = 1;
                var11 = 0;
                if (!(var7 !== var14)) {
                    _fun101184_ip = 137;
                    continue _fun101184
                }
            case 123:
                var6 = var8.children;
                var6 = var6.length;
                var11 = var6 - var7;
            case 137:
                if (!(var11 >= var12)) {
                    _fun101184_ip = 248;
                    continue _fun101184
                }
            case 141:
                var6 = var8.children;
                var6 = var6.length;
                var10 = undefined;
                if (!(var11 < var6)) {
                    _fun101184_ip = 248;
                    continue _fun101184
                }
            case 157:
                var7 = var11;
                if (!(var3 != var5)) {
                    _fun101184_ip = 167;
                    continue _fun101184
                }
            case 164:
                var7 = var5;
            case 167:
                var9 = _closure1_slot23;
                var6 = {};
                var15 = var8.children;
                var15 = var15[var11];
                var6.node = var15;
                var6.section = var7;
                var16 = var3 != var5;
                var15 = undefined;
                if (!var16) {
                    _fun101184_ip = 203;
                    continue _fun101184
                }
            case 200:
                var15 = var11;
            case 203:
                var6.item = var15;
                var6.direction = var14;
                var6.selectedGuildId = var13;
                var9 = var9.bind(var10)(var6);
                if (!(var3 == var9)) {
                    _fun101184_ip = 252;
                    continue _fun101184
                }
            case 226:
                var11 = var11 + var14;
                if (!(var11 >= var12)) {
                    _fun101184_ip = 248;
                    continue _fun101184
                }
            case 234:
                var6 = var8.children;
                var6 = var6.length;
                if (var11 < var6) {
                    _fun101184_ip = 157;
                    continue _fun101184
                }
            case 248:
                var6 = undefined;
                return var6;
            case 252:
                var10 = var8.type;
                var0 = _closure1_slot9;
                var6 = var0.FOLDER;
                var0 = var9;
                if (!(var10 === var6)) {
                    _fun101184_ip = 300;
                    continue _fun101184
                }
            case 274:
                var6 = var8.expanded;
                var0 = var9;
                if (var6) {
                    _fun101184_ip = 300;
                    continue _fun101184
                }
            case 286:
                var6 = {};
                var6.node = var8;
                var6.section = var7;
                var0 = var6;
            case 300:
                return var0;
            case 302:
                var0 = {};
                var0.node = var4;
                var6 = var3 != var5;
                var4 = 0;
                if (!var6) {
                    _fun101184_ip = 321;
                    continue _fun101184
                }
            case 318:
                var4 = var5;
            case 321:
                var0.section = var4;
                var3 = var3 != var2;
                var1 = 0;
                if (!var3) {
                    _fun101184_ip = 337;
                    continue _fun101184
                }
            case 334:
                var1 = var2;
            case 337:
                var0.item = var1;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun101185: for (var _fun101185_ip = 0;;) switch (_fun101185_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var8 = arg2;
                var2 = _closure1_slot8;
                var1 = var2.getGuildsTree;
                var23 = var1.bind(var2)();
                var10 = var23.root;
                var2 = var4.getSectionItemFromPosition;
                var3 = var4.scrollPosValue;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot15;
                var1 = var3 + var1;
                var1 = var2.bind(var4)(var1);
                var3 = var1.item;
                var1 = null;
                var5 = var1 == var3;
                var2 = undefined;
                var22 = undefined;
                if (var5) {
                    _fun101185_ip = 90;
                    continue _fun101185
                }
            case 84:
                var22 = var3.layoutStart;
            case 90:
                if (!(var1 == var22)) {
                    _fun101185_ip = 109;
                    continue _fun101185
                }
            case 94:
                var5 = var4.scrollPosValue;
                var3 = var5.get;
                var22 = var3.bind(var5)();
            case 109:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 9;
                var3 = var7[var3];
                var3 = var5.bind(var2)(var3);
                var7 = var3.YouBarExperiment;
                var5 = var7.getCurrentConfig;
                var3 = {};
                var9 = 'guildsunreadbars';
                var3.location = var9;
                var3 = var5.bind(var7)(var3);
                var9 = var3.enabled;
                var5 = var4.scrollPosValue;
                var3 = var5.get;
                var5 = var3.bind(var5)();
                var3 = var4.containerSize;
                var5 = var5 + var3;
                var3 = arg3;
                var5 = var5 - var3;
                var7 = 0;
                var3 = 0;
                if (!var9) {
                    _fun101185_ip = 214;
                    continue _fun101185
                }
            case 202:
                var11 = _closure1_slot12;
                var9 = _closure1_slot13;
                var3 = var11 + var9;
            case 214:
                var21 = var5 - var3;
                var3 = {
                    'section': 4294967295,
                    'item': 4294967295
                };
                var9 = -1;
                var5 = _closure1_slot21;
                var4 = var4.state;
                var4 = var4.items;
                var20 = var5.bind(var2)(var4);
                var12 = var20.bind(var2)();
                var11 = var12.done;
                var17 = false;
                var4 = true;
                var19 = 10;
                var18 = var12;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var5 = false;
                if (var11) {
                    _fun101185_ip = 1085;
                    continue _fun101185
                }
            case 294:
                var11 = var18.value;
                var30 = var11.layoutStart;
                var24 = var17;
                var29 = var16;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(!(var30 < var22))) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 330:
                var31 = var11.type;
                var32 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var19];
                var30 = var32.bind(var2)(var30);
                var30 = var30.FastListItemTypes;
                var30 = var30.ITEM;
                if (!(var31 !== var30)) {
                    _fun101185_ip = 427;
                    continue _fun101185
                }
            case 368:
                var31 = var11.type;
                var32 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var19];
                var30 = var32.bind(var2)(var30);
                var30 = var30.FastListItemTypes;
                var30 = var30.SECTION;
                var24 = var17;
                var29 = var16;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var31 === var30)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 427:
                var30 = var11.layoutStart;
                var5 = var17;
                if (!(!(var30 > var21))) {
                    _fun101185_ip = 1085;
                    continue _fun101185
                }
            case 443:
                var31 = var11.section;
                var30 = _closure1_slot10;
                var30 = var30.GUILDS;
                if (!(!(var31 < var30))) {
                    _fun101185_ip = 1023;
                    continue _fun101185
                }
            case 465:
                var30 = var11.layoutSize;
                var24 = var17;
                var29 = var16;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var7 !== var30)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 496:
                var30 = var3.section;
                if (!(var9 === var30)) {
                    _fun101185_ip = 527;
                    continue _fun101185
                }
            case 505:
                var30 = var11.section;
                var3.section = var30;
                var30 = var11.item;
                var3.item = var30;
            case 527:
                var31 = var11.type;
                var32 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var19];
                var30 = var32.bind(var2)(var30);
                var30 = var30.FastListItemTypes;
                var30 = var30.SECTION;
                if (!(var31 === var30)) {
                    _fun101185_ip = 839;
                    continue _fun101185
                }
            case 568:
                var31 = var23.getNode;
                var30 = var11.recyclerKey;
                var33 = var31.bind(var23)(var30);
                var24 = var17;
                var29 = var16;
                var28 = var33;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var1 != var33)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 610:
                var31 = var33.type;
                var30 = _closure1_slot9;
                var30 = var30.FOLDER;
                var24 = var17;
                var29 = var16;
                var28 = var33;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var31 === var30)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 650:
                var30 = var33.expanded;
                var24 = var17;
                var29 = var16;
                var28 = var33;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (var30) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 680:
                var31 = _closure1_slot21;
                var30 = var33.children;
                var32 = var31.bind(var2)(var30);
                var34 = var32.bind(var2)();
                var30 = var34.done;
                var31 = var34;
                var24 = var17;
                var29 = var16;
                var28 = var33;
                var27 = var31;
                var26 = var32;
                var25 = var12;
                if (var30) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 730:
                var34 = var31.value;
                var35 = var34.type;
                var30 = _closure1_slot9;
                var30 = var30.GUILD;
                if (!(var35 === var30)) {
                    _fun101185_ip = 801;
                    continue _fun101185
                }
            case 754:
                var36 = _closure1_slot6;
                var35 = var36.getMentionCount;
                var30 = var34.id;
                var30 = var35.bind(var36)(var30);
                var30 = var30 > var7;
                var24 = true;
                var29 = var16;
                var28 = var33;
                var27 = var31;
                var26 = var32;
                var25 = var34;
                if (var30) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 801:
                var35 = var32.bind(var2)();
                var30 = var35.done;
                var31 = var35;
                var24 = var17;
                var29 = var16;
                var28 = var33;
                var27 = var31;
                var26 = var32;
                var25 = var34;
                if (var30) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 837:
                _fun101185_ip = 730;
                continue _fun101185;
            case 839:
                var31 = var11.type;
                var32 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var19];
                var30 = var32.bind(var2)(var30);
                var30 = var30.FastListItemTypes;
                var30 = var30.ITEM;
                var24 = var17;
                var29 = var16;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var31 === var30)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 898:
                var30 = var23.getNode;
                var11 = var11.recyclerKey;
                var30 = var30.bind(var23)(var11);
                var24 = var17;
                var29 = var30;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var1 != var30)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 937:
                var31 = var30.type;
                var11 = _closure1_slot9;
                var11 = var11.GUILD;
                var24 = var17;
                var29 = var30;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                if (!(var31 === var11)) {
                    _fun101185_ip = 1046;
                    continue _fun101185
                }
            case 974:
                var32 = _closure1_slot6;
                var31 = var32.getMentionCount;
                var11 = var30.id;
                var11 = var31.bind(var32)(var11);
                var11 = var11 > var7;
                var24 = var17;
                var29 = var30;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                var5 = true;
                if (var11) {
                    _fun101185_ip = 1085;
                    continue _fun101185
                }
            case 1021:
                _fun101185_ip = 1046;
                continue _fun101185;
            case 1023:
                var24 = var17;
                var29 = var16;
                var28 = var15;
                var27 = var14;
                var26 = var13;
                var25 = var12;
                var5 = true;
                if (var6) {
                    _fun101185_ip = 1085;
                    continue _fun101185
                }
            case 1046:
                var30 = var20.bind(var2)();
                var11 = var30.done;
                var17 = var24;
                var16 = var29;
                var15 = var28;
                var14 = var27;
                var13 = var26;
                var12 = var25;
                var18 = var30;
                var5 = var17;
                if (!var11) {
                    _fun101185_ip = 294;
                    continue _fun101185
                }
            case 1085:
                if (var5) {
                    _fun101185_ip = 1353;
                    continue _fun101185
                }
            case 1091:
                var5 = undefined;
                if (var6) {
                    _fun101185_ip = 1125;
                    continue _fun101185
                }
            case 1096:
                var12 = _closure1_slot23;
                var11 = {};
                var11.node = var10;
                var13 = 1;
                var11.direction = var13;
                var11.selectedGuildId = var8;
                var5 = var12.bind(var2)(var11);
            case 1125:
                if (!(var1 == var5)) {
                    _fun101185_ip = 1132;
                    continue _fun101185
                }
            case 1129:
                if (var6) {
                    _fun101185_ip = 1146;
                    continue _fun101185
                }
            case 1132:
                if (!(var1 == var5)) {
                    _fun101185_ip = 1146;
                    continue _fun101185
                }
            case 1136:
                if (!(var1 == var5)) {
                    _fun101185_ip = 1219;
                    continue _fun101185
                }
            case 1140:
                var6 = _closure1_slot17;
                return var6;
            case 1146:
                if (!(var1 != var5)) {
                    _fun101185_ip = 1347;
                    continue _fun101185
                }
            case 1153:
                var11 = var5.section;
                var6 = _closure1_slot10;
                var6 = var6.GUILDS;
                var6 = var11 + var6;
                var11 = var3.section;
                if (!(!(var6 < var11))) {
                    _fun101185_ip = 1312;
                    continue _fun101185
                }
            case 1184:
                var11 = var3.section;
                if (!(var6 === var11)) {
                    _fun101185_ip = 1219;
                    continue _fun101185
                }
            case 1193:
                var11 = var5.item;
                var12 = var1 != var11;
                var7 = 0;
                if (!var12) {
                    _fun101185_ip = 1210;
                    continue _fun101185
                }
            case 1207:
                var7 = var11;
            case 1210:
                var3 = var3.item;
                if (!(!(var7 < var3))) {
                    _fun101185_ip = 1312;
                    continue _fun101185
                }
            case 1219:
                var7 = _closure1_slot23;
                var3 = {};
                var3.node = var10;
                var3.direction = var9;
                var3.selectedGuildId = var8;
                var8 = var7.bind(var2)(var3);
                if (!(var1 == var8)) {
                    _fun101185_ip = 1255;
                    continue _fun101185
                }
            case 1249:
                var1 = _closure1_slot17;
                _fun101185_ip = 1310;
                continue _fun101185;
            case 1255:
                var3 = {};
                var3.beforeItem = var2;
                var7 = {};
                var10 = var8.section;
                var9 = _closure1_slot10;
                var9 = var9.GUILDS;
                var9 = var10 + var9;
                var7.section = var9;
                var8 = var8.item;
                var7.row = var8;
                var7.mention = var4;
                var3.afterItem = var7;
                var1 = var3;
            case 1310:
                return var1;
            case 1312:
                var1 = {};
                var3 = {};
                var3.section = var6;
                var5 = var5.item;
                var3.row = var5;
                var3.mention = var4;
                var1.beforeItem = var3;
                var1.afterItem = var2;
                return var1;
            case 1347:
                var1 = _closure1_slot18;
                return var1;
            case 1353:
                var0 = _closure1_slot17;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var7 = 2;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var8 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var9 = var5[var3];
    var9 = var10.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.FastListRenderSections;
    var _closure1_slot10 = var9;
    var10 = var3.GUILD_LIST_WIDTH;
    var9 = var3.GUILD_ITEM_SIZE;
    var3 = var3.GUILD_ITEM_MARGIN;
    var11 = 7;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var12 = var11.useYouBarTotalHeight;
    var _closure1_slot11 = var12;
    var12 = var11.YOU_BAR_HEIGHT;
    var _closure1_slot12 = var12;
    var11 = var11.YOU_BAR_MARGIN;
    var _closure1_slot13 = var11;
    var11 = 8;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.jsx;
    var _closure1_slot14 = var11;
    var3 = var7 * var3;
    var3 = var9 + var3;
    var3 = var3 / var7;
    var _closure1_slot15 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'bottom': 0
    };
    var9.width = var10;
    var3.wrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var3.beforeItem = var0;
    var3.afterItem = var0;
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = {
        'section': 0,
        'row': 0,
        'mention': true
    };
    var3.beforeItem = var7;
    var3.afterItem = var0;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.fastList;
        var _closure2_slot0 = var13;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 11;
        var2 = var9[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var2 = var2.top;
        var _closure2_slot1 = var2;
        var10 = _closure1_slot4;
        var6 = var10.useState;
        var4 = function() { // Environment: var1
            _fun101187: for (var _fun101187_ip = 0;;) switch (_fun101187_ip) {
                case 0:
                    var5 = _closure1_slot24;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot6;
                    var2 = var3.getPrivateChannelMentionCount;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var3 = var3 > var2;
                    var2 = _closure1_slot7;
                    var1 = var2.getGuildId;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var6 = var2 != var1;
                    if (!var6) {
                        _fun101187_ip = 60;
                        continue _fun101187
                    }
                case 57:
                    var2 = var1;
                case 60:
                    var7 = _closure2_slot1;
                    var11 = undefined;
                    var10 = var4;
                    var9 = var3;
                    var8 = var2;
                    var0 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
            }
        };
        var7 = var6.bind(var10)(var4);
        var6 = _closure1_slot3;
        var4 = 2;
        var6 = var6.bind(var3)(var7, var4);
        var4 = 0;
        var4 = var6[var4];
        var8 = var4.beforeItem;
        var7 = var4.afterItem;
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot2 = var4;
        var6 = var10.useMemo;
        var4 = new Array(2);
        var4[0] = var13;
        var4[1] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 13;
            var0 = var2[var0];
            var3 = undefined;
            var2 = var1.bind(var3)(var0);
            var1 = function() { // Environment: var0
                _fun101189: for (var _fun101189_ip = 0;;) switch (_fun101189_ip) {
                    case 0:
                        var7 = _closure1_slot24;
                        var6 = _closure2_slot0;
                        var4 = _closure1_slot6;
                        var3 = var4.getPrivateChannelMentionCount;
                        var4 = var3.bind(var4)();
                        var3 = 0;
                        var5 = var4 > var3;
                        var3 = _closure1_slot7;
                        var0 = var3.getGuildId;
                        var0 = var0.bind(var3)();
                        var4 = null;
                        var3 = var4 != var0;
                        if (!var3) {
                            _fun101189_ip = 62;
                            continue _fun101189
                        }
                    case 59:
                        var4 = var0;
                    case 62:
                        var8 = _closure2_slot1;
                        var0 = undefined;
                        var12 = undefined;
                        var11 = var6;
                        var10 = var5;
                        var9 = var4;
                        var3 = var12[var7](var11, var10, var9, var8, var7);
                        var _closure4_slot0 = var3;
                        var2 = _closure2_slot2;
                        var1 = function(arg0) { // Environment: var1
                            _fun101190: for (var _fun101190_ip = 0;;) switch (_fun101190_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure4_slot0;
                                    var0 = var3;
                                    if (!(var3 !== var2)) {
                                        _fun101190_ip = 116;
                                        continue _fun101190
                                    }
                                case 17:
                                    var7 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var5 = 14;
                                    var4 = var4[var5];
                                    var6 = undefined;
                                    var8 = var7.bind(var6)(var4);
                                    var7 = var3.afterItem;
                                    var4 = _closure4_slot0;
                                    var4 = var4.afterItem;
                                    var4 = var8.bind(var6)(var7, var4);
                                    if (!var4) {
                                        _fun101190_ip = 112;
                                        continue _fun101190
                                    }
                                case 67:
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var2 = var2[var5];
                                    var5 = var4.bind(var6)(var2);
                                    var4 = var3.beforeItem;
                                    var2 = _closure4_slot0;
                                    var2 = var2.beforeItem;
                                    var2 = var5.bind(var6)(var4, var2);
                                    var0 = var3;
                                    if (var2) {
                                        _fun101190_ip = 116;
                                        continue _fun101190
                                    }
                                case 112:
                                    var0 = _closure4_slot0;
                                case 116:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var0 = 100;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var14 = var6.bind(var10)(var2, var4);
        var _closure2_slot3 = var14;
        var6 = var10.useEffect;
        var4 = new Array(1);
        var4[0] = var14;
        var2 = function() { // Environment: var1
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.BatchedStoreListener;
            var2 = _closure1_slot6;
            var3 = new Array(3);
            var3[0] = var2;
            var2 = _closure1_slot7;
            var3[1] = var2;
            var1 = _closure1_slot8;
            var3[2] = var1;
            var5 = _closure2_slot3;
            var2 = var4.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var4
                }
            });
            var7 = var2;
            var6 = var3;
            var1 = new var7[var4](var6, var5, var4);
            var3 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot0 = var3;
            var2 = var3.attach;
            var1 = 'guild-mention-bars';
            var1 = var2.bind(var3)(var1);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.detach;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var2 = var6.bind(var10)(var2, var4);
        var12 = var13.scrollPosValue;
        var _closure2_slot4 = var12;
        var16 = _closure1_slot0;
        var15 = 16;
        var2 = var9[var15];
        var11 = var16.bind(var3)(var2);
        var6 = var11.useAnimatedReaction;
        var4 = function() {
            var1 = _closure2_slot4;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = {};
        var2.scrollPosValue = var12;
        var4.__closure = var2;
        var2 = 16367582542434.0;
        var4.__workletHash = var2;
        var2 = _closure1_slot19;
        var4.__initData = var2;
        var2 = function arg0, arg1() {
            _fun101194: for (var _fun101194_ip = 0;;) switch (_fun101194_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (!(var1 !== var0)) {
                        _fun101194_ip = 56;
                        continue _fun101194
                    }
                case 10:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.runOnJS;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var12 = {};
        var15 = var9[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.runOnJS;
        var12.runOnJS = var15;
        var12.debouncedUpdate = var14;
        var2.__closure = var12;
        var12 = 13727289405147.0;
        var2.__workletHash = var12;
        var12 = _closure1_slot20;
        var2.__initData = var12;
        var2 = var6.bind(var11)(var4, var2);
        var2 = function() {
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.top;
            var _closure3_slot0 = var6;
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useMobileQuestDockHeight;
            var5 = var2.bind(var3)();
            var _closure3_slot1 = var5;
            var3 = _closure1_slot11;
            var2 = 4;
            var4 = var3.bind(var4)(var2);
            var _closure3_slot2 = var4;
            var3 = _closure1_slot4;
            var2 = var3.useMemo;
            var1 = new Array(3);
            var1[0] = var6;
            var1[1] = var5;
            var1[2] = var4;
            var0 = function() { // Environment: var0
                var0 = {};
                var1 = _closure1_slot16;
                var1 = var1.wrapper;
                var4 = new Array(2);
                var4[0] = var1;
                var5 = {};
                var1 = _closure3_slot0;
                var5.top = var1;
                var3 = _closure3_slot1;
                var2 = _closure3_slot2;
                var6 = var3 + var2;
                var5.bottom = var6;
                var4[1] = var5;
                var0.style = var4;
                var0.paddingStart = var1;
                var1 = 4;
                var1 = var3 + var1;
                var1 = var1 + var2;
                var0.paddingEnd = var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var2 = var2.bind(var3)();
        var4 = var2.style;
        var12 = var2.paddingStart;
        var _closure2_slot5 = var12;
        var11 = var2.paddingEnd;
        var _closure2_slot6 = var11;
        var6 = var10.useCallback;
        var2 = new Array(3);
        var2[0] = var13;
        var2[1] = var12;
        var2[2] = var11;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.scrollToLocation;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var4 = copyDataProperties(var7, var6);
            var5 = _closure2_slot5;
            var4 = 'paddingStart';
            var0[var4] = var5;
            var4 = _closure2_slot6;
            var3 = 'paddingEnd';
            var0[var3] = var4;
            var4 = 'visible';
            var3 = 'orientation';
            var0[var3] = var4;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var6 = var6.bind(var10)(var1, var2);
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {
            'style': null,
            'collapsable': false,
            'pointerEvents': 'box-none',
            'testID': 'guilds-bar-unread-bars'
        };
        var0.style = var4;
        var4 = 17;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.beforeItem = var8;
        var4.afterItem = var7;
        var4.scrollToLocation = var6;
        var6 = true;
        var4.compact = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarUnreadBars.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8587, 3174, 4342, 13088, 13084, 33, 12110, 6420, 1568, 5190, 5651, 628, 566, 3681, 13150, 2]);