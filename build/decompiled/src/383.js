// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun5691: for (var _fun5691_ip = 0;;) switch (_fun5691_ip) {
        case 0:
            var7 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var9;
            var0 = metroImportAll;
            var _closure1_slot2 = var0;
            var _closure1_slot3 = var8;
            var3 = function(arg0, arg1) { // Original name: createCompositeKeyForProps, environment: var4
                _fun5692: for (var _fun5692_ip = 0;;) switch (_fun5692_ip) {
                    case 0:
                        var17 = arg0;
                        var16 = arg1;
                        var15 = global;
                        var1 = var15.Object;
                        var0 = var1.keys;
                        var14 = var0.bind(var1)(var17);
                        var13 = var14.length;
                        var12 = 0;
                        var18 = var12 < var13;
                        var11 = null;
                        var10 = undefined;
                        var8 = 3;
                        var7 = 6;
                        var6 = 5;
                        var5 = 4;
                        var4 = 'style';
                        var3 = null;
                        var2 = undefined;
                        var1 = undefined;
                        var0 = null;
                        if (!var18) {
                            _fun5692_ip = 403;
                            continue _fun5692
                        }
                    case 72:
                        var23 = var14[var12];
                        var24 = var17[var23];
                        if (!(var11 != var16)) {
                            _fun5692_ip = 106;
                            continue _fun5692
                        }
                    case 84:
                        var18 = _closure1_slot10;
                        var20 = var18.bind(var10)(var16, var23);
                        var18 = var3;
                        var19 = var1;
                        if (!var20) {
                            _fun5692_ip = 384;
                            continue _fun5692
                        }
                    case 106:
                        if (!(var4 !== var23)) {
                            _fun5692_ip = 288;
                            continue _fun5692
                        }
                    case 113:
                        var21 = _closure1_slot1;
                        var20 = _closure1_slot3;
                        var20 = var20[var5];
                        var20 = var21.bind(var10)(var20);
                        var22 = var24 instanceof var20;
                        var21 = var24;
                        var20 = var1;
                        if (var22) {
                            _fun5692_ip = 349;
                            continue _fun5692
                        }
                    case 146:
                        var25 = _closure1_slot0;
                        var22 = _closure1_slot3;
                        var22 = var22[var6];
                        var22 = var25.bind(var10)(var22);
                        var22 = var22.AnimatedEvent;
                        var22 = var24 instanceof var22;
                        var21 = var24;
                        var20 = var1;
                        if (var22) {
                            _fun5692_ip = 349;
                            continue _fun5692
                        }
                    case 185:
                        var25 = var15.Array;
                        var22 = var25.isArray;
                        var22 = var22.bind(var25)(var24);
                        if (var22) {
                            _fun5692_ip = 264;
                            continue _fun5692
                        }
                    case 204:
                        var25 = _closure1_slot0;
                        var22 = _closure1_slot3;
                        var22 = var22[var7];
                        var25 = var25.bind(var10)(var22);
                        var22 = var25.isPlainObject;
                        var22 = var22.bind(var25)(var24);
                        var21 = undefined;
                        var20 = var1;
                        if (!var22) {
                            _fun5692_ip = 349;
                            continue _fun5692
                        }
                    case 240:
                        var22 = var24;
                        if (!(var11 != var16)) {
                            _fun5692_ip = 256;
                            continue _fun5692
                        }
                    case 247:
                        var25 = _closure1_slot13;
                        var22 = var25.bind(var10)(var24);
                    case 256:
                        var21 = var22;
                        var20 = var1;
                        _fun5692_ip = 349;
                        continue _fun5692;
                    case 264:
                        var22 = var24;
                        if (!(var11 != var16)) {
                            _fun5692_ip = 280;
                            continue _fun5692
                        }
                    case 271:
                        var25 = _closure1_slot12;
                        var22 = var25.bind(var10)(var24);
                    case 280:
                        var21 = var22;
                        var20 = var1;
                        _fun5692_ip = 349;
                        continue _fun5692;
                    case 288:
                        var25 = _closure1_slot1;
                        var22 = _closure1_slot3;
                        var22 = var22[var8];
                        var22 = var25.bind(var10)(var22);
                        var22 = var22.bind(var10)(var24);
                        var24 = var11 != var22;
                        var21 = undefined;
                        var20 = var22;
                        if (!var24) {
                            _fun5692_ip = 349;
                            continue _fun5692
                        }
                    case 322:
                        var25 = _closure1_slot13;
                        var26 = var11 == var16;
                        var24 = undefined;
                        if (var26) {
                            _fun5692_ip = 340;
                            continue _fun5692
                        }
                    case 335:
                        var24 = var16.style;
                    case 340:
                        var21 = var25.bind(var10)(var22, var24);
                        var20 = var22;
                    case 349:
                        var18 = var3;
                        var19 = var20;
                        var2 = var21;
                        if (!(var11 != var2)) {
                            _fun5692_ip = 384;
                            continue _fun5692
                        }
                    case 362:
                        var22 = var3;
                        if (!(var11 == var3)) {
                            _fun5692_ip = 371;
                            continue _fun5692
                        }
                    case 369:
                        var22 = {};
                    case 371:
                        var22[var23] = var21;
                        var18 = var22;
                        var2 = var21;
                        var19 = var20;
                    case 384:
                        var12 = var12 + 1;
                        var3 = var18;
                        var1 = var19;
                        var0 = var3;
                        if (var12 < var13) {
                            _fun5692_ip = 72;
                            continue _fun5692
                        }
                    case 403:
                        return var0;
                }
            };
            var _closure1_slot11 = var3;
            var0 = function(arg0) { // Original name: createCompositeKeyForArray, environment: var4
                _fun5693: for (var _fun5693_ip = 0;;) switch (_fun5693_ip) {
                    case 0:
                        var10 = arg0;
                        var9 = var10.length;
                        var8 = 0;
                        var11 = var8 < var9;
                        var7 = null;
                        var6 = global;
                        var5 = undefined;
                        var3 = 6;
                        var2 = 4;
                        var1 = null;
                        var0 = null;
                        if (!var11) {
                            _fun5693_ip = 221;
                            continue _fun5693
                        }
                    case 39:
                        var12 = var10[var8];
                        var13 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var11 = var11[var2];
                        var11 = var13.bind(var5)(var11);
                        var11 = var12 instanceof var11;
                        var13 = var12;
                        if (var11) {
                            _fun5693_ip = 142;
                            continue _fun5693
                        }
                    case 70:
                        var14 = var6.Array;
                        var11 = var14.isArray;
                        var11 = var11.bind(var14)(var12);
                        if (var11) {
                            _fun5693_ip = 133;
                            continue _fun5693
                        }
                    case 89:
                        var14 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var11 = var11[var3];
                        var14 = var14.bind(var5)(var11);
                        var11 = var14.isPlainObject;
                        var11 = var11.bind(var14)(var12);
                        var13 = undefined;
                        if (!var11) {
                            _fun5693_ip = 142;
                            continue _fun5693
                        }
                    case 122:
                        var11 = _closure1_slot13;
                        var13 = var11.bind(var5)(var12);
                        _fun5693_ip = 142;
                        continue _fun5693;
                    case 133:
                        var11 = _closure1_slot12;
                        var13 = var11.bind(var5)(var12);
                    case 142:
                        var11 = var1;
                        if (!(var7 != var13)) {
                            _fun5693_ip = 205;
                            continue _fun5693
                        }
                    case 149:
                        var12 = var1;
                        if (!(var7 == var1)) {
                            _fun5693_ip = 198;
                            continue _fun5693
                        }
                    case 156:
                        var16 = var6.Array;
                        var17 = var10.length;
                        var15 = var16.prototype;
                        var15 = Object.create(var15, {
                            constructor: {
                                value: var16
                            }
                        });
                        var18 = var15;
                        var14 = new var18[var16](var17, var16);
                        var15 = var14 instanceof Object ? var14 : var15;
                        var14 = var15.fill;
                        var12 = var14.bind(var15)(var7);
                    case 198:
                        var12[var8] = var13;
                        var11 = var12;
                    case 205:
                        var8 = var8 + 1;
                        var1 = var11;
                        var0 = var1;
                        if (var8 < var9) {
                            _fun5693_ip = 39;
                            continue _fun5693
                        }
                    case 221:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function(arg0, arg1) { // Original name: createCompositeKeyForObject, environment: var4
                _fun5694: for (var _fun5694_ip = 0;;) switch (_fun5694_ip) {
                    case 0:
                        var14 = arg0;
                        var13 = arg1;
                        var12 = global;
                        var1 = var12.Object;
                        var0 = var1.keys;
                        var11 = var0.bind(var1)(var14);
                        var10 = var11.length;
                        var9 = 0;
                        var15 = var9 < var10;
                        var8 = null;
                        var7 = undefined;
                        var5 = 6;
                        var4 = 4;
                        var3 = null;
                        var2 = undefined;
                        var1 = undefined;
                        var0 = null;
                        if (!var15) {
                            _fun5694_ip = 243;
                            continue _fun5694
                        }
                    case 62:
                        var19 = var11[var9];
                        if (!(var8 != var13)) {
                            _fun5694_ip = 89;
                            continue _fun5694
                        }
                    case 70:
                        var15 = _closure1_slot10;
                        var16 = var15.bind(var7)(var13, var19);
                        var15 = var3;
                        if (!var16) {
                            _fun5694_ip = 227;
                            continue _fun5694
                        }
                    case 89:
                        var17 = var14[var19];
                        var18 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var16 = var16[var4];
                        var16 = var18.bind(var7)(var16);
                        var18 = var17 instanceof var16;
                        var16 = var17;
                        if (var18) {
                            _fun5694_ip = 192;
                            continue _fun5694
                        }
                    case 120:
                        var20 = var12.Array;
                        var18 = var20.isArray;
                        var18 = var18.bind(var20)(var17);
                        if (var18) {
                            _fun5694_ip = 183;
                            continue _fun5694
                        }
                    case 139:
                        var20 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var18 = var18[var5];
                        var20 = var20.bind(var7)(var18);
                        var18 = var20.isPlainObject;
                        var18 = var18.bind(var20)(var17);
                        var16 = undefined;
                        if (!var18) {
                            _fun5694_ip = 192;
                            continue _fun5694
                        }
                    case 172:
                        var18 = _closure1_slot13;
                        var16 = var18.bind(var7)(var17);
                        _fun5694_ip = 192;
                        continue _fun5694;
                    case 183:
                        var18 = _closure1_slot12;
                        var16 = var18.bind(var7)(var17);
                    case 192:
                        var15 = var3;
                        var2 = var17;
                        var1 = var16;
                        if (!(var8 != var1)) {
                            _fun5694_ip = 227;
                            continue _fun5694
                        }
                    case 205:
                        var18 = var3;
                        if (!(var8 == var3)) {
                            _fun5694_ip = 214;
                            continue _fun5694
                        }
                    case 212:
                        var18 = {};
                    case 214:
                        var18[var19] = var16;
                        var15 = var18;
                        var2 = var17;
                        var1 = var16;
                    case 227:
                        var9 = var9 + 1;
                        var3 = var15;
                        var0 = var3;
                        if (var9 < var10) {
                            _fun5694_ip = 62;
                            continue _fun5694
                        }
                    case 243:
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var1 = function(arg0, arg1, arg2) { // Original name: areCompositeKeysEqual, environment: var4
                _fun5695: for (var _fun5695_ip = 0;;) switch (_fun5695_ip) {
                    case 0:
                        var11 = arg0;
                        var10 = arg1;
                        var9 = arg2;
                        if (!(var11 !== var10)) {
                            _fun5695_ip = 273;
                            continue _fun5695
                        }
                    case 16:
                        var8 = null;
                        if (!(var8 !== var11)) {
                            _fun5695_ip = 269;
                            continue _fun5695
                        }
                    case 25:
                        if (!(var8 !== var10)) {
                            _fun5695_ip = 269;
                            continue _fun5695
                        }
                    case 32:
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.keys;
                        var7 = var1.bind(var2)(var11);
                        var6 = var7.length;
                        var1 = var0.Object;
                        var0 = var1.keys;
                        var0 = var0.bind(var1)(var10);
                        var0 = var0.length;
                        if (!(var6 === var0)) {
                            _fun5695_ip = 265;
                            continue _fun5695
                        }
                    case 83:
                        var5 = 0;
                        var12 = var5 < var6;
                        var3 = undefined;
                        var2 = 5;
                        var1 = 4;
                        var0 = 'style';
                        if (!var12) {
                            _fun5695_ip = 261;
                            continue _fun5695
                        }
                    case 110:
                        var12 = var7[var5];
                        var13 = _closure1_slot10;
                        var13 = var13.bind(var3)(var10, var12);
                        if (var13) {
                            _fun5695_ip = 131;
                            continue _fun5695
                        }
                    case 127:
                        var13 = false;
                        return var13;
                    case 131:
                        var14 = var11[var12];
                        var13 = var10[var12];
                        if (!(var0 !== var12)) {
                            _fun5695_ip = 234;
                            continue _fun5695
                        }
                    case 143:
                        var15 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var12 = var12[var1];
                        var12 = var15.bind(var3)(var12);
                        var12 = var14 instanceof var12;
                        if (var12) {
                            _fun5695_ip = 226;
                            continue _fun5695
                        }
                    case 167:
                        var15 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var12 = var12[var2];
                        var12 = var15.bind(var3)(var12);
                        var12 = var12.AnimatedEvent;
                        var12 = var14 instanceof var12;
                        if (var12) {
                            _fun5695_ip = 226;
                            continue _fun5695
                        }
                    case 197:
                        if (!(var8 != var9)) {
                            _fun5695_ip = 218;
                            continue _fun5695
                        }
                    case 201:
                        var12 = _closure1_slot15;
                        var12 = var12.bind(var3)(var14, var13);
                        if (var12) {
                            _fun5695_ip = 251;
                            continue _fun5695
                        }
                    case 214:
                        var12 = false;
                        return var12;
                    case 218:
                        if (!(var14 !== var13)) {
                            _fun5695_ip = 251;
                            continue _fun5695
                        }
                    case 222:
                        var12 = false;
                        return var12;
                    case 226:
                        if (!(var14 !== var13)) {
                            _fun5695_ip = 251;
                            continue _fun5695
                        }
                    case 230:
                        var12 = false;
                        return var12;
                    case 234:
                        var12 = _closure1_slot15;
                        var12 = var12.bind(var3)(var14, var13);
                        if (var12) {
                            _fun5695_ip = 251;
                            continue _fun5695
                        }
                    case 247:
                        var12 = false;
                        return var12;
                    case 251:
                        var5 = var5 + 1;
                        if (var5 < var6) {
                            _fun5695_ip = 110;
                            continue _fun5695
                        }
                    case 261:
                        var0 = true;
                        return var0;
                    case 265:
                        var0 = false;
                        return var0;
                    case 269:
                        var0 = false;
                        return var0;
                    case 273:
                        var0 = true;
                        return var0;
                }
            };
            var _closure1_slot14 = var1;
            var0 = function(arg0, arg1) { // Original name: areCompositeKeyComponentsEqual, environment: var4
                _fun5696: for (var _fun5696_ip = 0;;) switch (_fun5696_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var0 = var6 === var5;
                        if (var0) {
                            _fun5696_ip = 373;
                            continue _fun5696
                        }
                    case 16:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 4;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var1 = var6 instanceof var1;
                        if (var1) {
                            _fun5696_ip = 371;
                            continue _fun5696
                        }
                    case 51:
                        var1 = global;
                        var7 = var1.Array;
                        var2 = var7.isArray;
                        var2 = var2.bind(var7)(var6);
                        if (var2) {
                            _fun5696_ip = 285;
                            continue _fun5696
                        }
                    case 75:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var8 = 6;
                        var2 = var2[var8];
                        var7 = var7.bind(var3)(var2);
                        var2 = var7.isPlainObject;
                        var2 = var2.bind(var7)(var6);
                        if (var2) {
                            _fun5696_ip = 113;
                            continue _fun5696
                        }
                    case 109:
                        var2 = false;
                        return var2;
                    case 113:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var8];
                        var7 = var7.bind(var3)(var2);
                        var2 = var7.isPlainObject;
                        var2 = var2.bind(var7)(var5);
                        if (var2) {
                            _fun5696_ip = 148;
                            continue _fun5696
                        }
                    case 144:
                        var2 = false;
                        return var2;
                    case 148:
                        var7 = var1.Object;
                        var2 = var7.keys;
                        var9 = var2.bind(var7)(var6);
                        var8 = var9.length;
                        var7 = var1.Object;
                        var2 = var7.keys;
                        var2 = var2.bind(var7)(var5);
                        var2 = var2.length;
                        if (!(var8 === var2)) {
                            _fun5696_ip = 281;
                            continue _fun5696
                        }
                    case 194:
                        var7 = 0;
                        var10 = var7 < var8;
                        var2 = 7;
                        if (!var10) {
                            _fun5696_ip = 277;
                            continue _fun5696
                        }
                    case 206:
                        var10 = var9[var7];
                        var12 = _closure1_slot10;
                        var13 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var11 = var11[var2];
                        var11 = var13.bind(var3)(var11);
                        var11 = var11.bind(var3)(var5);
                        var11 = var12.bind(var3)(var11, var10);
                        if (!var11) {
                            _fun5696_ip = 266;
                            continue _fun5696
                        }
                    case 245:
                        var12 = _closure1_slot15;
                        var11 = var6[var10];
                        var10 = var5[var10];
                        var10 = var12.bind(var3)(var11, var10);
                        if (var10) {
                            _fun5696_ip = 270;
                            continue _fun5696
                        }
                    case 266:
                        var10 = false;
                        return var10;
                    case 270:
                        var7 = var7 + 1;
                        if (var7 < var8) {
                            _fun5696_ip = 206;
                            continue _fun5696
                        }
                    case 277:
                        var2 = true;
                        return var2;
                    case 281:
                        var2 = false;
                        return var2;
                    case 285:
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var5);
                        if (var1) {
                            _fun5696_ip = 308;
                            continue _fun5696
                        }
                    case 304:
                        var1 = false;
                        return var1;
                    case 308:
                        var2 = var6.length;
                        var1 = var5.length;
                        if (!(var2 === var1)) {
                            _fun5696_ip = 367;
                            continue _fun5696
                        }
                    case 322:
                        var1 = 0;
                        var7 = var1 < var2;
                        if (!var7) {
                            _fun5696_ip = 363;
                            continue _fun5696
                        }
                    case 331:
                        var9 = _closure1_slot15;
                        var8 = var6[var1];
                        var7 = var5[var1];
                        var7 = var9.bind(var3)(var8, var7);
                        if (var7) {
                            _fun5696_ip = 356;
                            continue _fun5696
                        }
                    case 352:
                        var7 = false;
                        return var7;
                    case 356:
                        var1 = var1 + 1;
                        if (var1 < var2) {
                            _fun5696_ip = 331;
                            continue _fun5696
                        }
                    case 363:
                        var1 = true;
                        return var1;
                    case 367:
                        var1 = false;
                        return var1;
                    case 371:
                        return var0;
                    case 373:
                        var0 = true;
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var5 = global;
            var11 = var5.Object;
            var10 = var11.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var11)(var2, var0, var6);
            var0 = 0;
            var6 = var8[var0];
            var0 = undefined;
            var6 = var9.bind(var0)(var6);
            var _closure1_slot4 = var6;
            var6 = 1;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var7 = var6.useInsertionEffect;
            var _closure1_slot5 = var7;
            var7 = var6.useMemo;
            var _closure1_slot6 = var7;
            var7 = var6.useRef;
            var _closure1_slot7 = var7;
            var6 = var6.useState;
            var _closure1_slot8 = var6;
            var6 = var5.Object;
            var6 = var6.prototype;
            var6 = var6.hasOwnProperty;
            var _closure1_slot9 = var6;
            var5 = var5.Object;
            var5 = var5.hasOwn;
            var6 = null;
            if (!(var6 == var5)) {
                _fun5691_ip = 220;
                continue _fun5691
            }
        case 215:
            var5 = function(arg0, arg1) { // Environment: var4
                var3 = _closure1_slot9;
                var2 = var3.call;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
        case 220:
            var _closure1_slot10 = var5;
            var4 = function(arg0) { // Original name: createAnimatedPropsMemoHook, environment: var4
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = function(arg0, arg1) { // Original name: useAnimatedPropsMemo_ref, environment: var0
                    _fun5699: for (var _fun5699_ip = 0;;) switch (_fun5699_ip) {
                        case 0:
                            var0 = arg1;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot6;
                            var3 = new Array(1);
                            var3[0] = var0;
                            var4 = undefined;
                            var0 = function() { // Environment: var1
                                var3 = _closure1_slot11;
                                var2 = _closure3_slot0;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var5 = var5.bind(var4)(var0, var3);
                            var0 = _closure1_slot7;
                            var0 = var0.bind(var4)();
                            var _closure3_slot1 = var0;
                            var0 = var0.current;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun5699_ip = 79;
                                continue _fun5699
                            }
                        case 60:
                            var6 = _closure1_slot14;
                            var3 = var0.compositeKey;
                            var3 = var6.bind(var4)(var3, var5);
                            if (var3) {
                                _fun5699_ip = 101;
                                continue _fun5699
                            }
                        case 79:
                            var3 = {};
                            var3.compositeKey = var5;
                            var5 = arg0;
                            var5 = var5.bind(var4)();
                            var3.node = var5;
                            var0 = var3;
                        case 101:
                            var _closure3_slot2 = var0;
                            var3 = _closure1_slot5;
                            var2 = new Array(1);
                            var2[0] = var0;
                            var1 = function() { // Environment: var1
                                var1 = _closure3_slot1;
                                var0 = _closure3_slot2;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            var0 = var0.node;
                            return var0;
                    }
                };
                var _closure2_slot1 = var1;
                var1 = function(arg0, arg1) { // Original name: useAnimatedPropsMemo_state, environment: var0
                    _fun5702: for (var _fun5702_ip = 0;;) switch (_fun5702_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var4;
                            var _closure3_slot1 = var1;
                            var5 = _closure1_slot6;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var3 = undefined;
                            var1 = function() { // Environment: var0
                                var3 = _closure1_slot11;
                                var2 = _closure3_slot1;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var5 = var5.bind(var3)(var1, var2);
                            var _closure3_slot2 = var5;
                            var1 = _closure1_slot8;
                            var0 = function() { // Environment: var0
                                var0 = {};
                                var1 = _closure2_slot0;
                                var0.allowlist = var1;
                                var2 = _closure3_slot2;
                                var0.compositeKey = var2;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                var0.value = var1;
                                return var0;
                            };
                            var2 = var1.bind(var3)(var0);
                            var1 = _closure1_slot4;
                            var0 = 2;
                            var2 = var1.bind(var3)(var2, var0);
                            var0 = 0;
                            var0 = var2[var0];
                            var1 = 1;
                            var2 = var2[var1];
                            var8 = var0.allowlist;
                            var1 = _closure2_slot0;
                            var1 = var8 === var1;
                            if (!var1) {
                                _fun5702_ip = 124;
                                continue _fun5702
                            }
                        case 108:
                            var8 = _closure1_slot14;
                            var7 = var0.compositeKey;
                            var1 = var8.bind(var3)(var7, var5);
                        case 124:
                            if (var1) {
                                _fun5702_ip = 156;
                                continue _fun5702
                            }
                        case 127:
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.allowlist = var6;
                            var1.compositeKey = var5;
                            var4 = var4.bind(var3)();
                            var1.value = var4;
                            var1 = var2.bind(var3)(var1);
                        case 156:
                            var0 = var0.value;
                            return var0;
                    }
                };
                var _closure2_slot2 = var1;
                var0 = function(arg0, arg1) { // Original name: useAnimatedPropsMemo, environment: var0
                    _fun5705: for (var _fun5705_ip = 0;;) switch (_fun5705_ip) {
                        case 0:
                            var1 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var0 = 2;
                            var0 = var2[var0];
                            var3 = undefined;
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.avoidStateUpdateInAnimatedPropsMemo;
                            var1 = var0.bind(var1)();
                            if (var1) {
                                _fun5705_ip = 47;
                                continue _fun5705
                            }
                        case 41:
                            var2 = _closure2_slot2;
                            _fun5705_ip = 51;
                            continue _fun5705;
                        case 47:
                            var2 = _closure2_slot1;
                        case 51:
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                return var0;
            };
            var2.createAnimatedPropsMemoHook = var4;
            var2.createCompositeKeyForProps = var3;
            var2.areCompositeKeysEqual = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 79, 147, 359, 378, 376, 48]);