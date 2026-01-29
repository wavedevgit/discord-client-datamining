// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: processColorStops, environment: var1
        _fun1492: for (var _fun1492_ip = 0;;) switch (_fun1492_ip) {
            case 0:
                var16 = arg0;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var0 = new Array(0);
                var1 = var16.colorStops;
                var1 = var1.length;
                var12 = 0;
                var1 = var12 < var1;
                var11 = null;
                var10 = '%';
                var9 = 'string';
                var8 = 'number';
                var6 = 2;
                var5 = 1;
                var4 = global;
                var3 = 0;
                var2 = undefined;
                if (!var1) {
                    _fun1492_ip = 396;
                    continue _fun1492
                }
            case 65:
                var1 = var16.colorStops;
                var17 = var1[var3];
                var1 = var17.positions;
                var18 = var17.color;
                if (!(var11 == var18)) {
                    _fun1492_ip = 121;
                    continue _fun1492
                }
            case 90:
                var19 = var4.Array;
                var18 = var19.isArray;
                var18 = var18.bind(var19)(var1);
                if (!var18) {
                    _fun1492_ip = 121;
                    continue _fun1492
                }
            case 109:
                var18 = var1.length;
                if (!(var5 !== var18)) {
                    _fun1492_ip = 315;
                    continue _fun1492
                }
            case 121:
                var19 = _closure1_slot0;
                var18 = _closure1_slot1;
                var18 = var18[var6];
                var19 = var19.bind(var13)(var18);
                var18 = var19.default;
                var17 = var17.color;
                var17 = var18.bind(var19)(var17);
                var14 = var17;
                if (!(var11 != var17)) {
                    _fun1492_ip = 313;
                    continue _fun1492
                }
            case 163:
                if (!(var11 != var1)) {
                    _fun1492_ip = 176;
                    continue _fun1492
                }
            case 167:
                var17 = var1.length;
                if (!(!(var17 > var12))) {
                    _fun1492_ip = 210;
                    continue _fun1492
                }
            case 176:
                var19 = var0;
                var18 = var19.push;
                var17 = {};
                var20 = var14;
                var17.color = var20;
                var17.position = var11;
                var17 = var18.bind(var19)(var17);
                var17 = var2;
                _fun1492_ip = 372;
                continue _fun1492;
            case 210:
                var18 = var1;
                var19 = var18[Symbol.iterator];
                var18 = var19().next;
            case 216:
                var20 = var18().value;
                var21 = var19;
                var17 = var2;
                if (!(var21 !== var13)) {
                    _fun1492_ip = 372;
                    continue _fun1492
                }
            case 233: // try_start_0
                var15 = var20;
                var20 = typeof var20;
                if (!(var8 !== var20)) {
                    _fun1492_ip = 275;
                    continue _fun1492
                }
            case 243:
                var20 = var15;
                var20 = typeof var20;
                if (!(var9 === var20)) {
                    _fun1492_ip = 270;
                    continue _fun1492
                }
            case 253:
                var21 = var15;
                var20 = var21.endsWith;
                var20 = var20.bind(var21)(var10);
                if (var20) {
                    _fun1492_ip = 275;
                    continue _fun1492
                }
            case 270: // try_end0
                var19.return();
                return var11;
            case 275: // try_start_1
                var22 = var0;
                var21 = var22.push;
                var20 = {};
                var23 = var14;
                var20.color = var23;
                var23 = var15;
                var20.position = var23;
                var20 = var21.bind(var22)(var20);
            case 304: // try_end1
                _fun1492_ip = 216;
                continue _fun1492;
            case 306: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 18);
                var19.return();
                throw var18;
            case 313:
                return var11;
            case 315:
                var1 = var1[var12];
                var18 = typeof var1;
                if (!(var8 !== var18)) {
                    _fun1492_ip = 346;
                    continue _fun1492
                }
            case 326:
                if (!(var9 === var18)) {
                    _fun1492_ip = 344;
                    continue _fun1492
                }
            case 330:
                var18 = var1.endsWith;
                var18 = var18.bind(var1)(var10);
                if (var18) {
                    _fun1492_ip = 346;
                    continue _fun1492
                }
            case 344:
                return var11;
            case 346:
                var20 = var0;
                var19 = var20.push;
                var18 = {};
                var18.color = var11;
                var18.position = var1;
                var18 = var19.bind(var20)(var18);
                var17 = var1;
            case 372:
                var3 = var3 + 1;
                var1 = var16.colorStops;
                var1 = var1.length;
                var2 = var17;
                if (var3 < var1) {
                    _fun1492_ip = 65;
                    continue _fun1492
                }
            case 396:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: parseRadialGradientCSSString, environment: var1
        _fun1493: for (var _fun1493_ip = 0;;) switch (_fun1493_ip) {
            case 0:
                var3 = arg0;
                var20 = _closure1_slot7;
                var19 = _closure1_slot8;
                var0 = global;
                var7 = var0.Object;
                var6 = var7.assign;
                var2 = _closure1_slot9;
                var0 = {};
                var32 = var6.bind(var7)(var0, var2);
                var2 = var3.split;
                var0 = /,(?![^(]*\))/;
                var2 = var2.bind(var3)(var0);
                var31 = 0;
                var3 = var2[var31];
                var0 = var3.trim;
                var7 = var0.bind(var3)();
                var0 = _closure1_slot2;
                var3 = undefined;
                var2 = var0.bind(var3)(var2);
                var6 = var7.split;
                var0 = /\s+/;
                var30 = var6.bind(var7)(var0);
                var0 = var30.length;
                var6 = var0 > var31;
                var18 = false;
                var11 = 'circle';
                var8 = 'ellipse';
                var28 = 'number';
                var0 = null;
                var27 = '%';
                var26 = 'px';
                var25 = 'at';
                var24 = 'farthest-side';
                var23 = 'closest-side';
                var22 = 'farthest-corner';
                var21 = 'closest-corner';
                var17 = false;
                var16 = false;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var7 = var20;
                var5 = var19;
                var4 = var32;
                var12 = false;
                var10 = false;
                var9 = false;
                if (!var6) {
                    _fun1493_ip = 2075;
                    continue _fun1493
                }
            case 206:
                var6 = var30.shift;
                var40 = var6.bind(var30)();
                var37 = var20;
                var36 = var19;
                var35 = var18;
                var34 = var17;
                var33 = var16;
                var39 = var14;
                var38 = var13;
                if (!(var0 != var40)) {
                    _fun1493_ip = 2024;
                    continue _fun1493
                }
            case 244:
                var6 = var40.toLowerCase;
                var40 = var6.bind(var40)();
                var6 = var40.trim;
                var47 = var6.bind(var40)();
                var49 = var11 === var47;
                if (var49) {
                    _fun1493_ip = 1948;
                    continue _fun1493
                }
            case 274:
                if (!(var8 !== var47)) {
                    _fun1493_ip = 1948;
                    continue _fun1493
                }
            case 281:
                var43 = var20;
                var42 = var47;
                var6 = true;
                var41 = var17;
                var40 = var16;
                var46 = var42;
                var45 = var14;
                var44 = var13;
                if (!(var21 !== var47)) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 311:
                var43 = var20;
                var42 = var47;
                var6 = true;
                var41 = var17;
                var40 = var16;
                var46 = var42;
                var45 = var14;
                var44 = var13;
                if (!(var22 !== var47)) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 341:
                var43 = var20;
                var42 = var47;
                var6 = true;
                var41 = var17;
                var40 = var16;
                var46 = var42;
                var45 = var14;
                var44 = var13;
                if (!(var23 !== var47)) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 371:
                var43 = var20;
                var42 = var47;
                var6 = true;
                var41 = var17;
                var40 = var16;
                var46 = var42;
                var45 = var14;
                var44 = var13;
                if (!(var24 !== var47)) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 401:
                var48 = var47.endsWith;
                var48 = var48.bind(var47)(var26);
                if (var48) {
                    _fun1493_ip = 1729;
                    continue _fun1493
                }
            case 418:
                var48 = var47.endsWith;
                var48 = var48.bind(var47)(var27);
                if (var48) {
                    _fun1493_ip = 1729;
                    continue _fun1493
                }
            case 435:
                var43 = var20;
                var42 = var19;
                var6 = var18;
                var41 = var17;
                var40 = var16;
                var46 = var47;
                var45 = var14;
                var44 = var13;
                if (!(var25 === var47)) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 466:
                var48 = var30.length;
                if (!(var31 !== var48)) {
                    _fun1493_ip = 1727;
                    continue _fun1493
                }
            case 478:
                var50 = var30.length;
                var48 = 1;
                var64 = undefined;
                var63 = undefined;
                if (!(var48 === var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 497:
                var48 = var30.shift;
                var50 = var48.bind(var30)();
                if (!(var0 != var50)) {
                    _fun1493_ip = 1725;
                    continue _fun1493
                }
            case 514:
                var48 = var50.toLowerCase;
                var50 = var48.bind(var50)();
                var48 = var50.trim;
                var50 = var48.bind(var50)();
                var51 = '50%';
                var53 = '0%';
                var48 = 'left';
                var64 = var51;
                var63 = var53;
                if (!(var48 !== var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 560:
                var48 = 'center';
                var64 = var51;
                var63 = var64;
                if (!(var48 !== var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 574:
                var52 = '100%';
                var48 = 'right';
                var64 = var51;
                var63 = var52;
                if (!(var48 !== var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 594:
                var48 = 'top';
                var64 = var53;
                var63 = var51;
                if (!(var48 !== var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 608:
                var48 = 'bottom';
                var64 = var52;
                var63 = var51;
                if (!(var48 !== var50)) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 622:
                var48 = var50.endsWith;
                var48 = var48.bind(var50)(var26);
                if (var48) {
                    _fun1493_ip = 654;
                    continue _fun1493
                }
            case 636:
                var48 = var50.endsWith;
                var48 = var48.bind(var50)(var27);
                var64 = undefined;
                var63 = undefined;
                if (!var48) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 654:
                var48 = _closure1_slot16;
                var50 = var48.bind(var3)(var50);
                var48 = var0 == var50;
                var64 = var51;
                var63 = var50;
                if (!var48) {
                    _fun1493_ip = 678;
                    continue _fun1493
                }
            case 676:
                return var0;
            case 678:
                var50 = var30.length;
                var48 = 2;
                if (!(var48 === var50)) {
                    _fun1493_ip = 1199;
                    continue _fun1493
                }
            case 693:
                var48 = var30.shift;
                var51 = var48.bind(var30)();
                var48 = var30.shift;
                var50 = var48.bind(var30)();
                if (!(var0 != var51)) {
                    _fun1493_ip = 1723;
                    continue _fun1493
                }
            case 720:
                if (!(var0 != var50)) {
                    _fun1493_ip = 1723;
                    continue _fun1493
                }
            case 727:
                var48 = var51.toLowerCase;
                var51 = var48.bind(var51)();
                var48 = var51.trim;
                var54 = var48.bind(var51)();
                var48 = var50.toLowerCase;
                var50 = var48.bind(var50)();
                var48 = var50.trim;
                var53 = var48.bind(var50)();
                var50 = ['left', 'center', 'right'];
                var51 = ['top', 'center', 'bottom'];
                var48 = var50.includes;
                var48 = var48.bind(var50)(var54);
                if (!var48) {
                    _fun1493_ip = 816;
                    continue _fun1493
                }
            case 800:
                var48 = var51.includes;
                var48 = var48.bind(var51)(var53);
                if (var48) {
                    _fun1493_ip = 1122;
                    continue _fun1493
                }
            case 816:
                var48 = var51.includes;
                var48 = var48.bind(var51)(var54);
                if (!var48) {
                    _fun1493_ip = 845;
                    continue _fun1493
                }
            case 829:
                var48 = var50.includes;
                var48 = var48.bind(var50)(var53);
                if (var48) {
                    _fun1493_ip = 1043;
                    continue _fun1493
                }
            case 845:
                var51 = '0%';
                var48 = 'left';
                var50 = var51;
                if (!(var48 !== var54)) {
                    _fun1493_ip = 935;
                    continue _fun1493
                }
            case 862:
                var50 = '50%';
                var48 = 'center';
                if (!(var48 !== var54)) {
                    _fun1493_ip = 935;
                    continue _fun1493
                }
            case 876:
                var50 = '100%';
                var48 = 'right';
                if (!(var48 !== var54)) {
                    _fun1493_ip = 935;
                    continue _fun1493
                }
            case 890:
                var48 = var54.endsWith;
                var48 = var48.bind(var54)(var26);
                if (var48) {
                    _fun1493_ip = 920;
                    continue _fun1493
                }
            case 904:
                var48 = var54.endsWith;
                var48 = var48.bind(var54)(var27);
                if (var48) {
                    _fun1493_ip = 920;
                    continue _fun1493
                }
            case 918:
                return var0;
            case 920:
                var48 = _closure1_slot16;
                var50 = var48.bind(var3)(var54);
                if (!(var0 == var50)) {
                    _fun1493_ip = 935;
                    continue _fun1493
                }
            case 933:
                return var0;
            case 935:
                var48 = 'top';
                var64 = var51;
                var63 = var50;
                if (!(var48 !== var53)) {
                    _fun1493_ip = 1199;
                    continue _fun1493
                }
            case 952:
                var64 = '50%';
                var48 = 'center';
                var63 = var50;
                if (!(var48 !== var53)) {
                    _fun1493_ip = 1199;
                    continue _fun1493
                }
            case 972:
                var64 = '100%';
                var48 = 'bottom';
                var63 = var50;
                if (!(var48 !== var53)) {
                    _fun1493_ip = 1199;
                    continue _fun1493
                }
            case 992:
                var48 = var53.endsWith;
                var48 = var48.bind(var53)(var26);
                if (var48) {
                    _fun1493_ip = 1022;
                    continue _fun1493
                }
            case 1006:
                var48 = var53.endsWith;
                var48 = var48.bind(var53)(var27);
                if (var48) {
                    _fun1493_ip = 1022;
                    continue _fun1493
                }
            case 1020:
                return var0;
            case 1022:
                var48 = _closure1_slot16;
                var64 = var48.bind(var3)(var53);
                var63 = var50;
                if (!(var0 == var64)) {
                    _fun1493_ip = 1199;
                    continue _fun1493
                }
            case 1041:
                return var0;
            case 1043:
                var50 = '0%';
                var51 = 'left';
                var48 = var50;
                if (!(var51 !== var53)) {
                    _fun1493_ip = 1083;
                    continue _fun1493
                }
            case 1060:
                var51 = '100%';
                var52 = 'center';
                if (!(var52 === var53)) {
                    _fun1493_ip = 1080;
                    continue _fun1493
                }
            case 1074:
                var51 = '50%';
            case 1080:
                var48 = var51;
            case 1083:
                var51 = 'top';
                if (!(var51 !== var54)) {
                    _fun1493_ip = 1114;
                    continue _fun1493
                }
            case 1091:
                var51 = '100%';
                var52 = 'center';
                if (!(var52 === var54)) {
                    _fun1493_ip = 1111;
                    continue _fun1493
                }
            case 1105:
                var51 = '50%';
            case 1111:
                var50 = var51;
            case 1114:
                var64 = var50;
                var63 = var48;
                _fun1493_ip = 1199;
                continue _fun1493;
            case 1122:
                var50 = '0%';
                var51 = 'left';
                var48 = var50;
                if (!(var51 !== var54)) {
                    _fun1493_ip = 1162;
                    continue _fun1493
                }
            case 1139:
                var51 = '100%';
                var52 = 'center';
                if (!(var52 === var54)) {
                    _fun1493_ip = 1159;
                    continue _fun1493
                }
            case 1153:
                var51 = '50%';
            case 1159:
                var48 = var51;
            case 1162:
                var51 = 'top';
                if (!(var51 !== var53)) {
                    _fun1493_ip = 1193;
                    continue _fun1493
                }
            case 1170:
                var51 = '100%';
                var52 = 'center';
                if (!(var52 === var53)) {
                    _fun1493_ip = 1190;
                    continue _fun1493
                }
            case 1184:
                var51 = '50%';
            case 1190:
                var50 = var51;
            case 1193:
                var64 = var50;
                var63 = var48;
            case 1199:
                var54 = var30.length;
                var48 = 4;
                var51 = var64;
                var50 = var63;
                var52 = undefined;
                var53 = undefined;
                if (!(var48 === var54)) {
                    _fun1493_ip = 1554;
                    continue _fun1493
                }
            case 1224:
                var48 = var30.shift;
                var57 = var48.bind(var30)();
                var48 = var30.shift;
                var56 = var48.bind(var30)();
                var48 = var30.shift;
                var54 = var48.bind(var30)();
                var48 = var30.shift;
                var55 = var48.bind(var30)();
                if (!(var0 != var57)) {
                    _fun1493_ip = 1721;
                    continue _fun1493
                }
            case 1271:
                if (!(var0 != var56)) {
                    _fun1493_ip = 1721;
                    continue _fun1493
                }
            case 1278:
                if (!(var0 != var54)) {
                    _fun1493_ip = 1721;
                    continue _fun1493
                }
            case 1285:
                if (!(var0 != var55)) {
                    _fun1493_ip = 1721;
                    continue _fun1493
                }
            case 1292:
                var48 = var57.toLowerCase;
                var57 = var48.bind(var57)();
                var48 = var57.trim;
                var61 = var48.bind(var57)();
                var48 = var56.toLowerCase;
                var56 = var48.bind(var56)();
                var48 = var56.trim;
                var56 = var48.bind(var56)();
                var48 = var54.toLowerCase;
                var54 = var48.bind(var54)();
                var48 = var54.trim;
                var54 = var48.bind(var54)();
                var48 = var55.toLowerCase;
                var55 = var48.bind(var55)();
                var48 = var55.trim;
                var55 = var48.bind(var55)();
                var48 = _closure1_slot16;
                var62 = var48.bind(var3)(var56);
                var55 = var48.bind(var3)(var55);
                if (!(var0 != var62)) {
                    _fun1493_ip = 1719;
                    continue _fun1493
                }
            case 1393:
                if (!(var0 != var55)) {
                    _fun1493_ip = 1719;
                    continue _fun1493
                }
            case 1400:
                var48 = 'left';
                var58 = var64;
                var57 = var62;
                var56 = undefined;
                var59 = undefined;
                if (!(var48 !== var61)) {
                    _fun1493_ip = 1476;
                    continue _fun1493
                }
            case 1418:
                var60 = 'right';
                var58 = var64;
                var57 = var63;
                var56 = var62;
                var59 = undefined;
                if (!(var60 !== var61)) {
                    _fun1493_ip = 1476;
                    continue _fun1493
                }
            case 1437:
                var60 = 'top';
                var58 = var62;
                var57 = var63;
                var56 = undefined;
                var59 = undefined;
                if (!(var60 !== var61)) {
                    _fun1493_ip = 1476;
                    continue _fun1493
                }
            case 1455:
                var60 = 'bottom';
                var58 = var64;
                var57 = var63;
                var56 = undefined;
                var59 = var62;
                if (!(var60 !== var61)) {
                    _fun1493_ip = 1476;
                    continue _fun1493
                }
            case 1474:
                return var0;
            case 1476:
                var51 = var58;
                var50 = var55;
                var52 = var56;
                var53 = var59;
                if (!(var48 !== var54)) {
                    _fun1493_ip = 1554;
                    continue _fun1493
                }
            case 1492:
                var48 = 'right';
                var51 = var58;
                var50 = var57;
                var52 = var55;
                var53 = var59;
                if (!(var48 !== var54)) {
                    _fun1493_ip = 1554;
                    continue _fun1493
                }
            case 1512:
                var48 = 'top';
                var51 = var55;
                var50 = var57;
                var52 = var56;
                var53 = var59;
                if (!(var48 !== var54)) {
                    _fun1493_ip = 1554;
                    continue _fun1493
                }
            case 1532:
                var48 = 'bottom';
                var51 = var58;
                var50 = var57;
                var52 = var56;
                var53 = var55;
                if (!(var48 !== var54)) {
                    _fun1493_ip = 1554;
                    continue _fun1493
                }
            case 1552:
                return var0;
            case 1554:
                if (!(var0 != var51)) {
                    _fun1493_ip = 1565;
                    continue _fun1493
                }
            case 1558:
                if (!(var0 == var50)) {
                    _fun1493_ip = 1687;
                    continue _fun1493
                }
            case 1565:
                if (!(var0 != var53)) {
                    _fun1493_ip = 1573;
                    continue _fun1493
                }
            case 1569:
                if (!(var0 == var52)) {
                    _fun1493_ip = 1655;
                    continue _fun1493
                }
            case 1573:
                if (!(var0 != var51)) {
                    _fun1493_ip = 1581;
                    continue _fun1493
                }
            case 1577:
                if (!(var0 == var52)) {
                    _fun1493_ip = 1623;
                    continue _fun1493
                }
            case 1581:
                if (!(var0 != var53)) {
                    _fun1493_ip = 1621;
                    continue _fun1493
                }
            case 1585:
                if (!(var0 != var50)) {
                    _fun1493_ip = 1621;
                    continue _fun1493
                }
            case 1589:
                var48 = {};
                var48.bottom = var53;
                var48.left = var50;
                var7 = var20;
                var5 = var19;
                var4 = var48;
                var12 = true;
                var10 = var17;
                var9 = var16;
                _fun1493_ip = 2075;
                continue _fun1493;
            case 1621:
                return var0;
            case 1623:
                var48 = {};
                var48.top = var51;
                var48.right = var52;
                var7 = var20;
                var5 = var19;
                var4 = var48;
                var12 = true;
                var10 = var17;
                var9 = var16;
                _fun1493_ip = 2075;
                continue _fun1493;
            case 1655:
                var48 = {};
                var48.bottom = var53;
                var48.right = var52;
                var7 = var20;
                var5 = var19;
                var4 = var48;
                var12 = true;
                var10 = var17;
                var9 = var16;
                _fun1493_ip = 2075;
                continue _fun1493;
            case 1687:
                var48 = {};
                var48.top = var51;
                var48.left = var50;
                var7 = var20;
                var5 = var19;
                var4 = var48;
                var12 = true;
                var10 = var17;
                var9 = var16;
                _fun1493_ip = 2075;
                continue _fun1493;
            case 1719:
                return var0;
            case 1721:
                return var0;
            case 1723:
                return var0;
            case 1725:
                return var0;
            case 1727:
                return var0;
            case 1729:
                var48 = _closure1_slot16;
                var50 = var48.bind(var3)(var47);
                if (!(var0 != var50)) {
                    _fun1493_ip = 1946;
                    continue _fun1493
                }
            case 1745:
                var48 = typeof var50;
                if (!(var28 === var48)) {
                    _fun1493_ip = 1759;
                    continue _fun1493
                }
            case 1752:
                if (!(!(var50 < var31))) {
                    _fun1493_ip = 1944;
                    continue _fun1493
                }
            case 1759:
                var52 = {};
                var52.x = var50;
                var52.y = var50;
                var48 = var30.shift;
                var51 = var48.bind(var30)();
                var48 = var0 == var51;
                var37 = var20;
                var36 = var52;
                var35 = true;
                var34 = true;
                var33 = var16;
                var15 = var47;
                var39 = var50;
                var38 = var13;
                if (var48) {
                    _fun1493_ip = 2024;
                    continue _fun1493
                }
            case 1811:
                var48 = var51.toLowerCase;
                var51 = var48.bind(var51)();
                var48 = var51.trim;
                var51 = var48.bind(var51)();
                var48 = var51.endsWith;
                var48 = var48.bind(var51)(var26);
                if (var48) {
                    _fun1493_ip = 1881;
                    continue _fun1493
                }
            case 1845:
                var48 = var51.endsWith;
                var48 = var48.bind(var51)(var27);
                var43 = var20;
                var42 = var52;
                var6 = true;
                var41 = true;
                var40 = var16;
                var46 = var51;
                var45 = var50;
                var44 = var13;
                if (!var48) {
                    _fun1493_ip = 1979;
                    continue _fun1493
                }
            case 1881:
                var48 = _closure1_slot16;
                var48 = var48.bind(var3)(var51);
                if (!(var0 != var48)) {
                    _fun1493_ip = 1942;
                    continue _fun1493
                }
            case 1894:
                var52 = typeof var48;
                if (!(var28 === var52)) {
                    _fun1493_ip = 1905;
                    continue _fun1493
                }
            case 1901:
                if (!(!(var48 < var31))) {
                    _fun1493_ip = 1940;
                    continue _fun1493
                }
            case 1905:
                var52 = {};
                var52.x = var50;
                var52.y = var48;
                var43 = var20;
                var42 = var52;
                var6 = true;
                var41 = var17;
                var40 = var16;
                var46 = var51;
                var45 = var50;
                var44 = var48;
                _fun1493_ip = 1979;
                continue _fun1493;
            case 1940:
                return var0;
            case 1942:
                return var0;
            case 1944:
                return var0;
            case 1946:
                return var0;
            case 1948:
                var48 = var8;
                if (!var49) {
                    _fun1493_ip = 1957;
                    continue _fun1493
                }
            case 1954:
                var48 = var11;
            case 1957:
                var43 = var48;
                var42 = var19;
                var6 = true;
                var41 = var17;
                var40 = true;
                var46 = var47;
                var45 = var14;
                var44 = var13;
            case 1979:
                var37 = var43;
                var36 = var42;
                var35 = var6;
                var34 = var41;
                var33 = var40;
                var15 = var46;
                var39 = var45;
                var38 = var44;
                var7 = var37;
                var5 = var36;
                var4 = var32;
                var10 = var34;
                var9 = var33;
                var12 = var35;
                if (!var12) {
                    _fun1493_ip = 2075;
                    continue _fun1493
                }
            case 2024:
                var6 = var30.length;
                var20 = var37;
                var19 = var36;
                var18 = var35;
                var17 = var34;
                var16 = var33;
                var14 = var39;
                var13 = var38;
                var7 = var20;
                var5 = var19;
                var4 = var32;
                var12 = var18;
                var10 = var17;
                var9 = var16;
                if (var6 > var31) {
                    _fun1493_ip = 206;
                    continue _fun1493
                }
            case 2075:
                var6 = var7;
                if (!var12) {
                    _fun1493_ip = 2125;
                    continue _fun1493
                }
            case 2081:
                var12 = var2.shift;
                var12 = var12.bind(var2)();
                var12 = !var9;
                if (var9) {
                    _fun1493_ip = 2100;
                    continue _fun1493
                }
            case 2097:
                var12 = var10;
            case 2100:
                if (!var12) {
                    _fun1493_ip = 2106;
                    continue _fun1493
                }
            case 2103:
                var7 = var11;
            case 2106:
                var6 = var7;
                if (!var10) {
                    _fun1493_ip = 2125;
                    continue _fun1493
                }
            case 2112:
                var6 = var7;
                if (!var9) {
                    _fun1493_ip = 2125;
                    continue _fun1493
                }
            case 2118:
                var6 = var7;
                if (!(var8 !== var7)) {
                    _fun1493_ip = 2178;
                    continue _fun1493
                }
            case 2125:
                var1 = _closure1_slot13;
                var3 = var1.bind(var3)(var2);
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun1493_ip = 2176;
                    continue _fun1493
                }
            case 2143:
                var2 = {};
                var7 = 'radial-gradient';
                var2.type = var7;
                var2.shape = var6;
                var2.size = var5;
                var2.position = var4;
                var2.colorStops = var3;
                var1 = var2;
            case 2176:
                return var1;
            case 2178:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: parseLinearGradientCSSString, environment: var1
        _fun1494: for (var _fun1494_ip = 0;;) switch (_fun1494_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ',';
                var3 = var1.bind(var2)(var0);
                var4 = _closure1_slot6;
                var0 = 0;
                var2 = var3[var0];
                var0 = var2.trim;
                var2 = var0.bind(var2)();
                var0 = var2.toLowerCase;
                var5 = var0.bind(var2)();
                var2 = _closure1_slot5;
                var0 = var2.test;
                var0 = var0.bind(var2)(var5);
                if (var0) {
                    _fun1494_ip = 118;
                    continue _fun1494
                }
            case 67:
                var2 = _closure1_slot4;
                var0 = var2.test;
                var0 = var0.bind(var2)(var5);
                if (!var0) {
                    _fun1494_ip = 162;
                    continue _fun1494
                }
            case 84:
                var2 = _closure1_slot14;
                var0 = undefined;
                var2 = var2.bind(var0)(var5);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun1494_ip = 116;
                    continue _fun1494
                }
            case 101:
                var6 = var3.shift;
                var6 = var6.bind(var3)();
                var4 = var2;
                _fun1494_ip = 162;
                continue _fun1494;
            case 116:
                return var0;
            case 118:
                var2 = _closure1_slot15;
                var0 = undefined;
                var5 = var2.bind(var0)(var5);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun1494_ip = 209;
                    continue _fun1494
                }
            case 135:
                var2 = {};
                var6 = 'angle';
                var2.type = var6;
                var2.value = var5;
                var5 = var3.shift;
                var5 = var5.bind(var3)();
                var4 = var2;
            case 162:
                var2 = _closure1_slot13;
                var1 = undefined;
                var3 = var2.bind(var1)(var3);
                var1 = null;
                var2 = var1 == var3;
                if (var2) {
                    _fun1494_ip = 207;
                    continue _fun1494
                }
            case 182:
                var2 = {};
                var5 = 'linear-gradient';
                var2.type = var5;
                var2.direction = var4;
                var2.colorStops = var3;
                var1 = var2;
            case 207:
                return var1;
            case 209:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: parseColorStopsCSSString, environment: var1
        _fun1495: for (var _fun1495_ip = 0;;) switch (_fun1495_ip) {
            case 0:
                var3 = arg0;
                var1 = new Array(0);
                var2 = var3.join;
                var0 = ',';
                var3 = var2.bind(var3)(var0);
                var2 = var3.split;
                var0 = /,(?![^(]*\))/;
                var18 = var2.bind(var3)(var0);
                var0 = var18.length;
                var17 = 0;
                var2 = var17 < var0;
                var0 = null;
                var16 = undefined;
                var14 = 1;
                var13 = 2;
                var12 = 3;
                var11 = null;
                var10 = 0;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if (!var2) {
                    _fun1495_ip = 649;
                    continue _fun1495
                }
            case 96:
                var19 = var18[var10];
                var2 = var19.trim;
                var19 = var2.bind(var19)();
                var2 = var19.toLowerCase;
                var20 = var2.bind(var19)();
                var19 = var20.match;
                var2 = /\S+\([^)]*\)|\S+/g;
                var26 = var19.bind(var20)(var2);
                if (!(var0 != var26)) {
                    _fun1495_ip = 655;
                    continue _fun1495
                }
            case 152:
                var2 = var26.length;
                if (!(var12 !== var2)) {
                    _fun1495_ip = 484;
                    continue _fun1495
                }
            case 164:
                var2 = var26.length;
                if (!(var13 !== var2)) {
                    _fun1495_ip = 382;
                    continue _fun1495
                }
            case 176:
                var2 = var26.length;
                if (!(var14 === var2)) {
                    _fun1495_ip = 380;
                    continue _fun1495
                }
            case 188:
                var19 = _closure1_slot16;
                var2 = var26[var17];
                var2 = var19.bind(var16)(var2);
                if (!(var0 == var2)) {
                    _fun1495_ip = 285;
                    continue _fun1495
                }
            case 205:
                var20 = _closure1_slot0;
                var19 = _closure1_slot1;
                var19 = var19[var13];
                var21 = var20.bind(var16)(var19);
                var20 = var21.default;
                var19 = var26[var17];
                var19 = var20.bind(var21)(var19);
                if (!(var0 != var19)) {
                    _fun1495_ip = 283;
                    continue _fun1495
                }
            case 240:
                var21 = var1.push;
                var20 = {};
                var20.color = var19;
                var20.position = var0;
                var20 = var21.bind(var1)(var20);
                var25 = var9;
                var24 = var8;
                var23 = var7;
                var22 = var6;
                var21 = var5;
                var20 = var2;
                _fun1495_ip = 610;
                continue _fun1495;
            case 283:
                return var0;
            case 285:
                if (!(var0 != var11)) {
                    _fun1495_ip = 315;
                    continue _fun1495
                }
            case 289:
                var27 = var11.length;
                if (!(var14 === var27)) {
                    _fun1495_ip = 315;
                    continue _fun1495
                }
            case 298:
                var28 = _closure1_slot16;
                var27 = var11[var17];
                var27 = var28.bind(var16)(var27);
                if (!(var0 == var27)) {
                    _fun1495_ip = 378;
                    continue _fun1495
                }
            case 315:
                var27 = var18.length;
                var27 = var27 - var14;
                if (!(var10 !== var27)) {
                    _fun1495_ip = 378;
                    continue _fun1495
                }
            case 328:
                if (!(var17 !== var10)) {
                    _fun1495_ip = 378;
                    continue _fun1495
                }
            case 332:
                var28 = var1.push;
                var27 = {};
                var27.color = var0;
                var27.position = var2;
                var27 = var28.bind(var1)(var27);
                var25 = var9;
                var24 = var8;
                var23 = var7;
                var22 = var6;
                var21 = var5;
                var20 = var2;
                var19 = var3;
                _fun1495_ip = 610;
                continue _fun1495;
            case 378:
                return var0;
            case 380:
                return var0;
            case 382:
                var29 = var26[var17];
                var27 = _closure1_slot16;
                var2 = var26[var14];
                var27 = var27.bind(var16)(var2);
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var28 = var28.bind(var16)(var2);
                var2 = var28.default;
                var2 = var2.bind(var28)(var29);
                if (!(var0 != var2)) {
                    _fun1495_ip = 482;
                    continue _fun1495
                }
            case 430:
                if (!(var0 != var27)) {
                    _fun1495_ip = 480;
                    continue _fun1495
                }
            case 434:
                var29 = var1.push;
                var28 = {};
                var28.color = var2;
                var28.position = var27;
                var28 = var29.bind(var1)(var28);
                var25 = var9;
                var24 = var8;
                var23 = var7;
                var22 = var27;
                var21 = var2;
                var20 = var4;
                var19 = var3;
                _fun1495_ip = 610;
                continue _fun1495;
            case 480:
                return var0;
            case 482:
                return var0;
            case 484:
                var30 = var26[var17];
                var27 = _closure1_slot16;
                var2 = var26[var14];
                var28 = var27.bind(var16)(var2);
                var2 = var26[var13];
                var27 = var27.bind(var16)(var2);
                var29 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var29 = var29.bind(var16)(var2);
                var2 = var29.default;
                var2 = var2.bind(var29)(var30);
                if (!(var0 != var2)) {
                    _fun1495_ip = 653;
                    continue _fun1495
                }
            case 541:
                if (!(var0 != var28)) {
                    _fun1495_ip = 651;
                    continue _fun1495
                }
            case 545:
                if (!(var0 != var27)) {
                    _fun1495_ip = 651;
                    continue _fun1495
                }
            case 549:
                var30 = var1.push;
                var29 = {};
                var29.color = var2;
                var29.position = var28;
                var29 = var30.bind(var1)(var29);
                var30 = var1.push;
                var29 = {};
                var29.color = var2;
                var29.position = var27;
                var29 = var30.bind(var1)(var29);
                var25 = var28;
                var24 = var27;
                var23 = var2;
                var22 = var6;
                var21 = var5;
                var20 = var4;
                var19 = var3;
            case 610:
                var10 = var10 + 1;
                var2 = var18.length;
                var9 = var25;
                var8 = var24;
                var7 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                var11 = var26;
                if (var10 < var2) {
                    _fun1495_ip = 96;
                    continue _fun1495
                }
            case 649:
                return var1;
            case 651:
                return var0;
            case 653:
                return var0;
            case 655:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: getDirectionForKeyword, environment: var1
        _fun1496: for (var _fun1496_ip = 0;;) switch (_fun1496_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun1496_ip = 283;
                    continue _fun1496
                }
            case 12:
                var3 = var4.replace;
                var2 = /\s+/g;
                var1 = ' ';
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = 'to top';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 271;
                    continue _fun1496
                }
            case 66:
                var1 = 'to right';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 259;
                    continue _fun1496
                }
            case 79:
                var1 = 'to bottom';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 247;
                    continue _fun1496
                }
            case 92:
                var1 = 'to left';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 235;
                    continue _fun1496
                }
            case 105:
                var1 = 'to top right';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 223;
                    continue _fun1496
                }
            case 115:
                var1 = 'to right top';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 223;
                    continue _fun1496
                }
            case 125:
                var1 = 'to bottom right';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 211;
                    continue _fun1496
                }
            case 135:
                var1 = 'to right bottom';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 211;
                    continue _fun1496
                }
            case 145:
                var1 = 'to top left';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 199;
                    continue _fun1496
                }
            case 155:
                var1 = 'to left top';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 199;
                    continue _fun1496
                }
            case 165:
                var1 = 'to bottom left';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 187;
                    continue _fun1496
                }
            case 175:
                var1 = 'to left bottom';
                if (!(var1 !== var2)) {
                    _fun1496_ip = 187;
                    continue _fun1496
                }
            case 185:
                return var0;
            case 187:
                var1 = {
                    'type': 'keyword',
                    'value': 'to bottom left'
                };
                return var1;
            case 199:
                var1 = {
                    'type': 'keyword',
                    'value': 'to top left'
                };
                return var1;
            case 211:
                var1 = {
                    'type': 'keyword',
                    'value': 'to bottom right'
                };
                return var1;
            case 223:
                var1 = {
                    'type': 'keyword',
                    'value': 'to top right'
                };
                return var1;
            case 235:
                var1 = {
                    'type': 'angle',
                    'value': 270
                };
                return var1;
            case 247:
                var1 = {
                    'type': 'angle',
                    'value': 180
                };
                return var1;
            case 259:
                var1 = {
                    'type': 'angle',
                    'value': 90
                };
                return var1;
            case 271:
                var1 = {
                    'type': 'angle',
                    'value': 0
                };
                return var1;
            case 283:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getAngleInDegrees, environment: var1
        _fun1497: for (var _fun1497_ip = 0;;) switch (_fun1497_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun1497_ip = 174;
                    continue _fun1497
                }
            case 12:
                var3 = var4.match;
                var2 = _closure1_slot5;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun1497_ip = 35;
                    continue _fun1497
                }
            case 33:
                return var0;
            case 35:
                var2 = _closure1_slot3;
                var5 = undefined;
                var1 = 3;
                var2 = var2.bind(var5)(var3, var1);
                var1 = 1;
                var3 = var2[var1];
                var1 = 2;
                var4 = var2[var1];
                var2 = global;
                var1 = var2.parseFloat;
                var1 = var1.bind(var5)(var3);
                var3 = 'deg';
                if (!(var3 !== var4)) {
                    _fun1497_ip = 172;
                    continue _fun1497
                }
            case 87:
                var3 = 'grad';
                if (!(var3 !== var4)) {
                    _fun1497_ip = 156;
                    continue _fun1497
                }
            case 97:
                var3 = 'rad';
                if (!(var3 !== var4)) {
                    _fun1497_ip = 131;
                    continue _fun1497
                }
            case 107:
                var3 = 'turn';
                if (!(var3 !== var4)) {
                    _fun1497_ip = 119;
                    continue _fun1497
                }
            case 117:
                return var0;
            case 119:
                var3 = 360;
                var3 = var3 * var1;
                return var3;
            case 131:
                var3 = 180;
                var3 = var3 * var1;
                var2 = var2.Math;
                var2 = var2.PI;
                var2 = var3 / var2;
                return var2;
            case 156:
                var2 = 0.9;
                var2 = var2 * var1;
                return var2;
            case 172:
                return var1;
            case 174:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getPositionFromCSSValue, environment: var1
        _fun1498: for (var _fun1498_ip = 0;;) switch (_fun1498_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.endsWith;
                var0 = 'px';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun1498_ip = 46;
                    continue _fun1498
                }
            case 21:
                var1 = var3.endsWith;
                var0 = '%';
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                if (!var1) {
                    _fun1498_ip = 44;
                    continue _fun1498
                }
            case 41:
                var0 = var3;
            case 44:
                _fun1498_ip = 61;
                continue _fun1498;
            case 46:
                var1 = global;
                var2 = var1.parseFloat;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 61:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = /^to\s+(?:top|bottom|left|right)(?:\s+(?:top|bottom|left|right))?/i;
    var _closure1_slot4 = var3;
    var3 = /^([+-]?\d*\.?\d+)(deg|grad|rad|turn)$/i;
    var _closure1_slot5 = var3;
    var3 = {
        'type': 'angle',
        'value': 180
    };
    var _closure1_slot6 = var3;
    var3 = 'ellipse';
    var _closure1_slot7 = var3;
    var3 = 'farthest-corner';
    var _closure1_slot8 = var3;
    var3 = {
        'top': '50%',
        'left': '50%'
    };
    var _closure1_slot9 = var3;
    var1 = function(arg0) { // Original name: processBackgroundImage, environment: var1
        _fun1499: for (var _fun1499_ip = 0;;) switch (_fun1499_ip) {
            case 0:
                var5 = arg0;
                var3 = undefined;
                var19 = undefined;
                var20 = undefined;
                var21 = undefined;
                var22 = undefined;
                var23 = undefined;
                var24 = undefined;
                var25 = undefined;
                var26 = undefined;
                var27 = undefined;
                var0 = new Array(0);
                var18 = null;
                if (!(var18 != var5)) {
                    _fun1499_ip = 832;
                    continue _fun1499
                }
            case 36:
                var17 = 'string';
                var1 = typeof var5;
                if (!(var17 !== var1)) {
                    _fun1499_ip = 784;
                    continue _fun1499
                }
            case 50:
                var16 = global;
                var2 = var16.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var5);
                if (!var1) {
                    _fun1499_ip = 827;
                    continue _fun1499
                }
            case 74:
                var15 = var5;
                var2 = var15[Symbol.iterator];
                var15 = var2().next;
                var14 = 'linear-gradient';
                var13 = 'angle';
                var11 = 'radial-gradient';
                var10 = 'object';
                var9 = 'farthest-corner';
                var8 = 'farthest-side';
                var7 = 'closest-corner';
                var6 = 'closest-side';
                var4 = 'ellipse';
                var1 = 'circle';
            case 135:
                var29 = var15().value;
                var28 = var2;
                if (!(var28 !== var3)) {
                    _fun1499_ip = 827;
                    continue _fun1499
                }
            case 149: // try_start_0
                var19 = var29;
                var28 = _closure1_slot10;
                var28 = var28.bind(var3)(var29);
                var20 = var28;
                if (!(var18 != var28)) {
                    _fun1499_ip = 768;
                    continue _fun1499
                }
            case 171:
                var28 = var19;
                var28 = var28.type;
                if (!(var14 !== var28)) {
                    _fun1499_ip = 554;
                    continue _fun1499
                }
            case 186:
                var28 = var19;
                var28 = var28.type;
                if (!(var11 === var28)) {
                    _fun1499_ip = 754;
                    continue _fun1499
                }
            case 201:
                var25 = _closure1_slot7;
                var26 = _closure1_slot8;
                var31 = var16.Object;
                var30 = var31.assign;
                var29 = _closure1_slot9;
                var28 = {};
                var27 = var30.bind(var31)(var28, var29);
                var28 = var19;
                var28 = var28.shape;
                if (!(var18 != var28)) {
                    _fun1499_ip = 283;
                    continue _fun1499
                }
            case 245:
                var28 = var19;
                var28 = var28.shape;
                if (!(var1 !== var28)) {
                    _fun1499_ip = 274;
                    continue _fun1499
                }
            case 258:
                var28 = var19;
                var28 = var28.shape;
                if (!(var4 === var28)) {
                    _fun1499_ip = 545;
                    continue _fun1499
                }
            case 274:
                var28 = var19;
                var25 = var28.shape;
            case 283:
                var28 = var19;
                var28 = var28.size;
                if (!(var18 != var28)) {
                    _fun1499_ip = 462;
                    continue _fun1499
                }
            case 298:
                var28 = var19;
                var28 = var28.size;
                var28 = typeof var28;
                if (!(var17 === var28)) {
                    _fun1499_ip = 371;
                    continue _fun1499
                }
            case 313:
                var28 = var19;
                var28 = var28.size;
                if (!(var6 !== var28)) {
                    _fun1499_ip = 361;
                    continue _fun1499
                }
            case 325:
                var28 = var19;
                var28 = var28.size;
                if (!(var7 !== var28)) {
                    _fun1499_ip = 361;
                    continue _fun1499
                }
            case 337:
                var28 = var19;
                var28 = var28.size;
                if (!(var8 !== var28)) {
                    _fun1499_ip = 361;
                    continue _fun1499
                }
            case 349:
                var28 = var19;
                var28 = var28.size;
                if (!(var9 === var28)) {
                    _fun1499_ip = 371;
                    continue _fun1499
                }
            case 361:
                var28 = var19;
                var26 = var28.size;
                _fun1499_ip = 462;
                continue _fun1499;
            case 371:
                var28 = var19;
                var28 = var28.size;
                var28 = typeof var28;
                if (!(var10 === var28)) {
                    _fun1499_ip = 536;
                    continue _fun1499
                }
            case 389:
                var28 = var19;
                var28 = var28.size;
                var28 = var28.x;
                if (!(var18 != var28)) {
                    _fun1499_ip = 536;
                    continue _fun1499
                }
            case 409:
                var28 = var19;
                var28 = var28.size;
                var28 = var28.y;
                if (!(var18 != var28)) {
                    _fun1499_ip = 536;
                    continue _fun1499
                }
            case 426:
                var28 = {};
                var29 = var19;
                var30 = var29.size;
                var30 = var30.x;
                var28.x = var30;
                var29 = var29.size;
                var29 = var29.y;
                var28.y = var29;
                var26 = var28;
            case 462:
                var28 = var19;
                var28 = var28.position;
                if (!(var18 != var28)) {
                    _fun1499_ip = 482;
                    continue _fun1499
                }
            case 474:
                var28 = var19;
                var27 = var28.position;
            case 482:
                var30 = var0;
                var29 = var30.concat;
                var28 = {};
                var28.type = var11;
                var31 = var25;
                var28.shape = var31;
                var31 = var26;
                var28.size = var31;
                var31 = var27;
                var28.position = var31;
                var31 = var20;
                var28.colorStops = var31;
                var0 = var29.bind(var30)(var28);
                _fun1499_ip = 754;
                continue _fun1499;
            case 536: // try_end0
                var2.return();
                var28 = new Array(0);
                return var28;
            case 545:
                var2.return();
                var28 = new Array(0);
                return var28;
            case 554: // try_start_1
                var21 = _closure1_slot6;
                var28 = var19;
                var28 = var28.direction;
                var29 = var18 != var28;
                var28 = null;
                if (!var29) {
                    _fun1499_ip = 595;
                    continue _fun1499
                }
            case 576:
                var29 = var19;
                var30 = var29.direction;
                var29 = var30.toLowerCase;
                var28 = var29.bind(var30)();
            case 595:
                var22 = var28;
                if (!(var18 != var28)) {
                    _fun1499_ip = 719;
                    continue _fun1499
                }
            case 602:
                var30 = _closure1_slot5;
                var29 = var30.test;
                var28 = var22;
                var28 = var29.bind(var30)(var28);
                if (var28) {
                    _fun1499_ip = 684;
                    continue _fun1499
                }
            case 622:
                var30 = _closure1_slot4;
                var29 = var30.test;
                var28 = var22;
                var28 = var29.bind(var30)(var28);
                if (var28) {
                    _fun1499_ip = 651;
                    continue _fun1499
                }
            case 642: // try_end1
                var2.return();
                var28 = new Array(0);
                return var28;
            case 651: // try_start_2
                var29 = _closure1_slot14;
                var28 = var22;
                var28 = var29.bind(var3)(var28);
                var24 = var28;
                if (!(var18 != var28)) {
                    _fun1499_ip = 675;
                    continue _fun1499
                }
            case 670:
                var21 = var24;
                _fun1499_ip = 719;
                continue _fun1499;
            case 675: // try_end2
                var2.return();
                var28 = new Array(0);
                return var28;
            case 684: // try_start_3
                var29 = _closure1_slot15;
                var28 = var22;
                var28 = var29.bind(var3)(var28);
                var23 = var28;
                if (!(var18 != var28)) {
                    _fun1499_ip = 759;
                    continue _fun1499
                }
            case 703:
                var28 = {};
                var28.type = var13;
                var29 = var23;
                var28.value = var29;
                var21 = var28;
            case 719:
                var30 = var0;
                var29 = var30.concat;
                var28 = {};
                var28.type = var14;
                var31 = var21;
                var28.direction = var31;
                var31 = var20;
                var28.colorStops = var31;
                var0 = var29.bind(var30)(var28);
            case 754: // try_end3
                _fun1499_ip = 135;
                continue _fun1499;
            case 759:
                var2.return();
                var1 = new Array(0);
                return var1;
            case 768:
                var2.return();
                var1 = new Array(0);
                return var1;
            case 777: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 784:
                var4 = var5.replace;
                var2 = /\n/g;
                var1 = ' ';
                var2 = var4.bind(var5)(var2, var1);
                var1 = function(arg0) { // Original name: parseBackgroundImageCSSString, environment: var1
                    _fun1500: for (var _fun1500_ip = 0;;) switch (_fun1500_ip) {
                        case 0:
                            var16 = arg0;
                            var9 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var12 = undefined;
                            var0 = new Array(0);
                            var1 = new Array(0);
                            var2 = var16.length;
                            var15 = 0;
                            var2 = var15 < var2;
                            var3 = '';
                            var14 = ',';
                            var13 = ')';
                            var8 = '(';
                            var7 = var3;
                            var6 = 0;
                            var5 = 0;
                            var4 = var7;
                            if (!var2) {
                                _fun1500_ip = 149;
                                continue _fun1500
                            }
                        case 59:
                            var19 = var16[var5];
                            if (!(var8 !== var19)) {
                                _fun1500_ip = 118;
                                continue _fun1500
                            }
                        case 67:
                            if (!(var13 !== var19)) {
                                _fun1500_ip = 113;
                                continue _fun1500
                            }
                        case 71:
                            var2 = var6;
                            if (!(var14 === var19)) {
                                _fun1500_ip = 121;
                                continue _fun1500
                            }
                        case 78:
                            var2 = var6;
                            if (!(var15 === var6)) {
                                _fun1500_ip = 121;
                                continue _fun1500
                            }
                        case 85:
                            var18 = var1.push;
                            var17 = var7.trim;
                            var17 = var17.bind(var7)();
                            var17 = var18.bind(var1)(var17);
                            var17 = var3;
                            var18 = var6;
                            _fun1500_ip = 128;
                            continue _fun1500;
                        case 113:
                            var2 = var6 - 1;
                            _fun1500_ip = 121;
                            continue _fun1500;
                        case 118:
                            var2 = var6 + 1;
                        case 121:
                            var17 = var7 + var19;
                            var18 = var2;
                        case 128:
                            var5 = var5 + 1;
                            var2 = var16.length;
                            var7 = var17;
                            var6 = var18;
                            var4 = var7;
                            if (var5 < var2) {
                                _fun1500_ip = 59;
                                continue _fun1500
                            }
                        case 149:
                            var2 = var4.trim;
                            var2 = var2.bind(var4)();
                            if (!(var3 !== var2)) {
                                _fun1500_ip = 183;
                                continue _fun1500
                            }
                        case 163:
                            var3 = var1.push;
                            var2 = var4.trim;
                            var2 = var2.bind(var4)();
                            var2 = var3.bind(var1)(var2);
                        case 183:
                            var8 = var1;
                            var2 = var8[Symbol.iterator];
                            var8 = var2().next;
                            var7 = null;
                            var5 = 3;
                            var4 = 1;
                            var3 = 2;
                            var1 = 'radial';
                        case 209:
                            var14 = var8().value;
                            var13 = var2;
                            if (!(var13 !== var9)) {
                                _fun1500_ip = 360;
                                continue _fun1500
                            }
                        case 223: // try_start_0
                            var13 = var14.toLowerCase;
                            var15 = var13.bind(var14)();
                            var14 = /^(linear|radial)-gradient\(((?:\([^)]*\)|[^()])*)\)/;
                            var13 = var14.exec;
                            var13 = var13.bind(var14)(var15);
                            var10 = var13;
                            if (!var13) {
                                _fun1500_ip = 348;
                                continue _fun1500
                            }
                        case 264:
                            var14 = _closure1_slot3;
                            var13 = var10;
                            var13 = var14.bind(var9)(var13, var5);
                            var14 = var13[var4];
                            var11 = var13[var3];
                            var13 = var14.toLowerCase;
                            var13 = var13.bind(var14)();
                            if (!(var1 !== var13)) {
                                _fun1500_ip = 313;
                                continue _fun1500
                            }
                        case 299:
                            var14 = _closure1_slot12;
                            var13 = var11;
                            var13 = var14.bind(var9)(var13);
                            _fun1500_ip = 325;
                            continue _fun1500;
                        case 313:
                            var15 = _closure1_slot11;
                            var14 = var11;
                            var13 = var15.bind(var9)(var14);
                        case 325:
                            var12 = var13;
                            if (!(var7 != var13)) {
                                _fun1500_ip = 348;
                                continue _fun1500
                            }
                        case 332:
                            var15 = var0;
                            var14 = var15.push;
                            var13 = var12;
                            var13 = var14.bind(var15)(var13);
                        case 348: // try_end0
                            _fun1500_ip = 209;
                            continue _fun1500;
                        case 353: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 360:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var2);
            case 827:
                var1 = var0;
                return var1;
            case 832:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 38]);