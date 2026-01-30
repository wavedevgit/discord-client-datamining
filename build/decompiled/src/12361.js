// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var2 = 1;
    var5 = var4[var2];
    var0 = undefined;
    var7 = var3.bind(var0)(var5);
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var8 = '>=0.0.0-0';
    var9 = var6;
    var5 = new var9[var7](var8, var7);
    var6 = var5 instanceof Object ? var5 : var6;
    var5 = new Array(1);
    var5[0] = var6;
    var _closure1_slot2 = var5;
    var2 = var4[var2];
    var4 = var3.bind(var0)(var2);
    var2 = var4.prototype;
    var3 = Object.create(var2, {
        constructor: {
            value: var4
        }
    });
    var8 = '>=0.0.0';
    var9 = var3;
    var2 = new var9[var4](var8, var7);
    var3 = var2 instanceof Object ? var2 : var3;
    var2 = new Array(1);
    var2[0] = var3;
    var _closure1_slot3 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: simpleSubset, environment: var1
        _fun94805: for (var _fun94805_ip = 0;;) switch (_fun94805_ip) {
            case 0:
                var15 = arg0;
                var9 = arg1;
                var0 = var9;
                var19 = arg2;
                var18 = undefined;
                var6 = undefined;
                var1 = undefined;
                var4 = undefined;
                var20 = undefined;
                var21 = undefined;
                var8 = undefined;
                var7 = undefined;
                var5 = undefined;
                var23 = undefined;
                var24 = undefined;
                var3 = undefined;
                var2 = undefined;
                var22 = undefined;
                if (!(var15 !== var9)) {
                    _fun94805_ip = 1911;
                    continue _fun94805
                }
            case 47:
                var9 = var15.length;
                var10 = 1;
                var12 = var15;
                if (!(var10 === var9)) {
                    _fun94805_ip = 190;
                    continue _fun94805
                }
            case 65:
                var13 = 0;
                var9 = var15[var13];
                var14 = var9.semver;
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var16.bind(var18)(var9);
                var9 = var9.ANY;
                var12 = var15;
                if (!(var14 === var9)) {
                    _fun94805_ip = 190;
                    continue _fun94805
                }
            case 110:
                var9 = var0;
                var9 = var9.length;
                if (!(var10 === var9)) {
                    _fun94805_ip = 165;
                    continue _fun94805
                }
            case 122:
                var9 = var0;
                var9 = var9[var13];
                var13 = var9.semver;
                var14 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var14.bind(var18)(var9);
                var9 = var9.ANY;
                if (!(var13 !== var9)) {
                    _fun94805_ip = 1907;
                    continue _fun94805
                }
            case 165:
                var9 = var19;
                var9 = var9.includePrerelease;
                if (var9) {
                    _fun94805_ip = 183;
                    continue _fun94805
                }
            case 177:
                var9 = _closure1_slot3;
                _fun94805_ip = 187;
                continue _fun94805;
            case 183:
                var9 = _closure1_slot2;
            case 187:
                var12 = var9;
            case 190:
                var9 = var0;
                var9 = var9.length;
                if (!(var10 === var9)) {
                    _fun94805_ip = 266;
                    continue _fun94805
                }
            case 202:
                var11 = var0;
                var9 = 0;
                var9 = var11[var9];
                var13 = var9.semver;
                var14 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var10];
                var11 = var14.bind(var18)(var11);
                var11 = var11.ANY;
                if (!(var13 === var11)) {
                    _fun94805_ip = 266;
                    continue _fun94805
                }
            case 247:
                var11 = var19;
                var11 = var11.includePrerelease;
                if (var11) {
                    _fun94805_ip = 1903;
                    continue _fun94805
                }
            case 262:
                var0 = _closure1_slot3;
            case 266:
                var17 = global;
                var9 = var17.Set;
                var11 = var9.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var9
                    }
                });
                var33 = var11;
                var9 = new var33[var9](var32);
                var5 = var9 instanceof Object ? var9 : var11;
                var9 = var12;
                var11 = var9[Symbol.iterator];
                var9 = var11().next;
                var15 = '<=';
                var14 = '<';
                var13 = '>=';
                var12 = '>';
            case 323:
                var25 = var9().value;
                var26 = var11;
                if (!(var26 !== var18)) {
                    _fun94805_ip = 467;
                    continue _fun94805
                }
            case 337: // try_start_1
                var23 = var25;
                var25 = var25.operator;
                if (!(var12 !== var25)) {
                    _fun94805_ip = 435;
                    continue _fun94805
                }
            case 350:
                var25 = var23;
                var25 = var25.operator;
                if (!(var13 !== var25)) {
                    _fun94805_ip = 435;
                    continue _fun94805
                }
            case 363:
                var25 = var23;
                var25 = var25.operator;
                if (!(var14 !== var25)) {
                    _fun94805_ip = 413;
                    continue _fun94805
                }
            case 376:
                var25 = var23;
                var25 = var25.operator;
                if (!(var15 !== var25)) {
                    _fun94805_ip = 413;
                    continue _fun94805
                }
            case 389:
                var27 = var5;
                var26 = var27.add;
                var25 = var23;
                var25 = var25.semver;
                var25 = var26.bind(var27)(var25);
                _fun94805_ip = 455;
                continue _fun94805;
            case 413:
                var28 = _closure1_slot6;
                var27 = var1;
                var26 = var23;
                var25 = var19;
                var1 = var28.bind(var18)(var27, var26, var25);
                _fun94805_ip = 455;
                continue _fun94805;
            case 435:
                var28 = _closure1_slot5;
                var27 = var6;
                var26 = var23;
                var25 = var19;
                var6 = var28.bind(var18)(var27, var26, var25);
            case 455: // try_end1
                _fun94805_ip = 323;
                continue _fun94805;
            case 460: // catch_target1
                CatchBlockStart(arg_register = 9);
                var11.return();
                throw var9;
            case 467:
                var9 = var5;
                var9 = var9.size;
                if (!(!(var9 > var10))) {
                    _fun94805_ip = 1899;
                    continue _fun94805
                }
            case 482:
                var9 = var6;
                if (!var9) {
                    _fun94805_ip = 593;
                    continue _fun94805
                }
            case 488:
                var9 = var1;
                if (!var9) {
                    _fun94805_ip = 593;
                    continue _fun94805
                }
            case 494:
                var11 = _closure1_slot0;
                var23 = _closure1_slot1;
                var9 = 2;
                var9 = var23[var9];
                var25 = var11.bind(var18)(var9);
                var9 = var6;
                var23 = var9.semver;
                var9 = var1;
                var11 = var9.semver;
                var9 = var19;
                var9 = var25.bind(var18)(var23, var11, var9);
                var4 = var9;
                var11 = 0;
                if (!(!(var9 > var11))) {
                    _fun94805_ip = 1895;
                    continue _fun94805
                }
            case 554:
                var9 = var4;
                if (!(var11 === var9)) {
                    _fun94805_ip = 593;
                    continue _fun94805
                }
            case 561:
                var9 = var6;
                var9 = var9.operator;
                if (!(var13 === var9)) {
                    _fun94805_ip = 1891;
                    continue _fun94805
                }
            case 577:
                var9 = var1;
                var9 = var9.operator;
                if (!(var15 === var9)) {
                    _fun94805_ip = 1891;
                    continue _fun94805
                }
            case 593:
                var11 = var5;
                var5 = var11;
                var9 = var5[Symbol.iterator];
                var5 = var9().next;
                var5 = var5().value;
                var11 = var9;
                if (!(var11 !== var18)) {
                    _fun94805_ip = 845;
                    continue _fun94805
                }
            case 616: // try_start_2
                var24 = var5;
                var5 = var6;
                if (!var5) {
                    _fun94805_ip = 682;
                    continue _fun94805
                }
            case 625:
                var11 = _closure1_slot0;
                var23 = _closure1_slot1;
                var5 = 3;
                var5 = var23[var5];
                var25 = var11.bind(var18)(var5);
                var23 = var24;
                var11 = var17.String;
                var5 = var6;
                var11 = var11.bind(var18)(var5);
                var5 = var19;
                var5 = var25.bind(var18)(var23, var11, var5);
                if (var5) {
                    _fun94805_ip = 682;
                    continue _fun94805
                }
            case 675: // try_end2
                var9.return();
                var5 = null;
                return var5;
            case 682: // try_start_3
                var5 = var1;
                if (!var5) {
                    _fun94805_ip = 745;
                    continue _fun94805
                }
            case 688:
                var11 = _closure1_slot0;
                var23 = _closure1_slot1;
                var5 = 3;
                var5 = var23[var5];
                var25 = var11.bind(var18)(var5);
                var23 = var24;
                var11 = var17.String;
                var5 = var1;
                var11 = var11.bind(var18)(var5);
                var5 = var19;
                var5 = var25.bind(var18)(var23, var11, var5);
                if (var5) {
                    _fun94805_ip = 745;
                    continue _fun94805
                }
            case 738: // try_end3
                var9.return();
                var5 = null;
                return var5;
            case 745: // try_start_4
                var5 = var0;
                var23 = var5;
                var11 = var23[Symbol.iterator];
                var23 = var11().next;
                var5 = 3;
            case 757:
                var26 = var23().value;
                var25 = var11;
                if (!(var25 !== var18)) {
                    _fun94805_ip = 831;
                    continue _fun94805
                }
            case 768: // try_start_0
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var5];
                var28 = var27.bind(var18)(var25);
                var27 = var24;
                var25 = var17.String;
                var26 = var25.bind(var18)(var26);
                var25 = var19;
                var25 = var28.bind(var18)(var27, var26, var25);
                if (var25) {
                    _fun94805_ip = 822;
                    continue _fun94805
                }
            case 812: // try_end0
                var11.return();
            case 815: // try_end4
                var9.return();
                var25 = false;
                return var25;
            case 822: // try_start_5
                _fun94805_ip = 757;
                continue _fun94805;
            case 824: // catch_target0
                CatchBlockStart(arg_register = 5);
                var11.return();
                throw var5;
            case 831: // try_end5
                var9.return();
                var5 = true;
                return var5;
            case 838: // catch_target2 // catch_target3 // catch_target4 // catch_target5
                CatchBlockStart(arg_register = 5);
                var9.return();
                throw var5;
            case 845:
                var5 = var1;
                var5 = !var5;
                if (var5) {
                    _fun94805_ip = 863;
                    continue _fun94805
                }
            case 854:
                var9 = var19;
                var5 = var9.includePrerelease;
            case 863:
                if (var5) {
                    _fun94805_ip = 889;
                    continue _fun94805
                }
            case 866:
                var9 = var1;
                var9 = var9.semver;
                var9 = var9.prerelease;
                var9 = var9.length;
                var5 = !var9;
            case 889:
                var5 = !var5;
                if (!var5) {
                    _fun94805_ip = 904;
                    continue _fun94805
                }
            case 895:
                var9 = var1;
                var5 = var9.semver;
            case 904:
                var3 = var5;
                var5 = var6;
                var5 = !var5;
                if (var5) {
                    _fun94805_ip = 925;
                    continue _fun94805
                }
            case 916:
                var9 = var19;
                var5 = var9.includePrerelease;
            case 925:
                if (var5) {
                    _fun94805_ip = 951;
                    continue _fun94805
                }
            case 928:
                var9 = var6;
                var9 = var9.semver;
                var9 = var9.prerelease;
                var9 = var9.length;
                var5 = !var9;
            case 951:
                var5 = !var5;
                if (!var5) {
                    _fun94805_ip = 966;
                    continue _fun94805
                }
            case 957:
                var9 = var6;
                var5 = var9.semver;
            case 966:
                var2 = var5;
                var5 = var3;
                if (!var5) {
                    _fun94805_ip = 993;
                    continue _fun94805
                }
            case 975:
                var9 = var3;
                var9 = var9.prerelease;
                var9 = var9.length;
                var5 = var10 === var9;
            case 993:
                if (!var5) {
                    _fun94805_ip = 1009;
                    continue _fun94805
                }
            case 996:
                var9 = var1;
                var9 = var9.operator;
                var5 = var14 === var9;
            case 1009:
                if (!var5) {
                    _fun94805_ip = 1031;
                    continue _fun94805
                }
            case 1012:
                var9 = var3;
                var9 = var9.prerelease;
                var10 = 0;
                var9 = var9[var10];
                var5 = var10 === var9;
            case 1031:
                if (!var5) {
                    _fun94805_ip = 1036;
                    continue _fun94805
                }
            case 1034:
                var3 = false;
            case 1036:
                var11 = var0;
                var9 = var11[Symbol.iterator];
                var11 = var9().next;
                var5 = 0;
                var10 = 3;
                var0 = false;
            case 1049:
                var23 = var11().value;
                var24 = var9;
                if (!(var24 !== var18)) {
                    _fun94805_ip = 1815;
                    continue _fun94805
                }
            case 1063: // try_start_6
                var22 = var23;
                var25 = var7;
                var24 = var25;
                if (var25) {
                    _fun94805_ip = 1088;
                    continue _fun94805
                }
            case 1075:
                var25 = var22;
                var25 = var25.operator;
                var24 = var12 === var25;
            case 1088:
                var23 = var24;
                if (var24) {
                    _fun94805_ip = 1107;
                    continue _fun94805
                }
            case 1094:
                var24 = var22;
                var24 = var24.operator;
                var23 = var13 === var24;
            case 1107:
                var7 = var23;
                var25 = var8;
                var24 = var25;
                if (var25) {
                    _fun94805_ip = 1132;
                    continue _fun94805
                }
            case 1119:
                var25 = var22;
                var25 = var25.operator;
                var24 = var14 === var25;
            case 1132:
                var23 = var24;
                if (var24) {
                    _fun94805_ip = 1151;
                    continue _fun94805
                }
            case 1138:
                var24 = var22;
                var24 = var24.operator;
                var23 = var15 === var24;
            case 1151:
                var8 = var23;
                var23 = var6;
                if (!var23) {
                    _fun94805_ip = 1457;
                    continue _fun94805
                }
            case 1163:
                var28 = var2;
                var27 = var28;
                if (!var28) {
                    _fun94805_ip = 1187;
                    continue _fun94805
                }
            case 1172:
                var28 = var22;
                var28 = var28.semver;
                var27 = var28.prerelease;
            case 1187:
                var26 = var27;
                if (!var27) {
                    _fun94805_ip = 1213;
                    continue _fun94805
                }
            case 1193:
                var27 = var22;
                var27 = var27.semver;
                var27 = var27.prerelease;
                var26 = var27.length;
            case 1213:
                var25 = var26;
                if (!var26) {
                    _fun94805_ip = 1247;
                    continue _fun94805
                }
            case 1219:
                var26 = var22;
                var26 = var26.semver;
                var27 = var26.major;
                var26 = var2;
                var26 = var26.major;
                var25 = var27 === var26;
            case 1247:
                var24 = var25;
                if (!var25) {
                    _fun94805_ip = 1281;
                    continue _fun94805
                }
            case 1253:
                var25 = var22;
                var25 = var25.semver;
                var26 = var25.minor;
                var25 = var2;
                var25 = var25.minor;
                var24 = var26 === var25;
            case 1281:
                var23 = var24;
                if (!var24) {
                    _fun94805_ip = 1315;
                    continue _fun94805
                }
            case 1287:
                var24 = var22;
                var24 = var24.semver;
                var25 = var24.patch;
                var24 = var2;
                var24 = var24.patch;
                var23 = var25 === var24;
            case 1315:
                if (!var23) {
                    _fun94805_ip = 1320;
                    continue _fun94805
                }
            case 1318:
                var2 = false;
            case 1320:
                var23 = var22;
                var23 = var23.operator;
                if (!(var12 !== var23)) {
                    _fun94805_ip = 1417;
                    continue _fun94805
                }
            case 1333:
                var23 = var22;
                var23 = var23.operator;
                if (!(var13 !== var23)) {
                    _fun94805_ip = 1417;
                    continue _fun94805
                }
            case 1346:
                var23 = var6;
                var23 = var23.operator;
                if (!(var13 === var23)) {
                    _fun94805_ip = 1457;
                    continue _fun94805
                }
            case 1359:
                var24 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var10];
                var26 = var24.bind(var18)(var23);
                var23 = var6;
                var25 = var23.semver;
                var24 = var17.String;
                var23 = var22;
                var24 = var24.bind(var18)(var23);
                var23 = var19;
                var23 = var26.bind(var18)(var25, var24, var23);
                if (var23) {
                    _fun94805_ip = 1457;
                    continue _fun94805
                }
            case 1412: // try_end6
                var9.return();
                return var0;
            case 1417: // try_start_7
                var26 = _closure1_slot5;
                var25 = var6;
                var24 = var22;
                var23 = var19;
                var23 = var26.bind(var18)(var25, var24, var23);
                var20 = var23;
                if (!(var23 === var24)) {
                    _fun94805_ip = 1457;
                    continue _fun94805
                }
            case 1444:
                var24 = var20;
                var23 = var6;
                if (!(var24 === var23)) {
                    _fun94805_ip = 1803;
                    continue _fun94805
                }
            case 1457:
                var23 = var1;
                if (!var23) {
                    _fun94805_ip = 1757;
                    continue _fun94805
                }
            case 1466:
                var28 = var3;
                var27 = var28;
                if (!var28) {
                    _fun94805_ip = 1490;
                    continue _fun94805
                }
            case 1475:
                var28 = var22;
                var28 = var28.semver;
                var27 = var28.prerelease;
            case 1490:
                var26 = var27;
                if (!var27) {
                    _fun94805_ip = 1516;
                    continue _fun94805
                }
            case 1496:
                var27 = var22;
                var27 = var27.semver;
                var27 = var27.prerelease;
                var26 = var27.length;
            case 1516:
                var25 = var26;
                if (!var26) {
                    _fun94805_ip = 1550;
                    continue _fun94805
                }
            case 1522:
                var26 = var22;
                var26 = var26.semver;
                var27 = var26.major;
                var26 = var3;
                var26 = var26.major;
                var25 = var27 === var26;
            case 1550:
                var24 = var25;
                if (!var25) {
                    _fun94805_ip = 1584;
                    continue _fun94805
                }
            case 1556:
                var25 = var22;
                var25 = var25.semver;
                var26 = var25.minor;
                var25 = var3;
                var25 = var25.minor;
                var24 = var26 === var25;
            case 1584:
                var23 = var24;
                if (!var24) {
                    _fun94805_ip = 1618;
                    continue _fun94805
                }
            case 1590:
                var24 = var22;
                var24 = var24.semver;
                var25 = var24.patch;
                var24 = var3;
                var24 = var24.patch;
                var23 = var25 === var24;
            case 1618:
                if (!var23) {
                    _fun94805_ip = 1623;
                    continue _fun94805
                }
            case 1621:
                var3 = false;
            case 1623:
                var23 = var22;
                var23 = var23.operator;
                if (!(var14 !== var23)) {
                    _fun94805_ip = 1720;
                    continue _fun94805
                }
            case 1636:
                var23 = var22;
                var23 = var23.operator;
                if (!(var15 !== var23)) {
                    _fun94805_ip = 1720;
                    continue _fun94805
                }
            case 1649:
                var23 = var1;
                var23 = var23.operator;
                if (!(var15 === var23)) {
                    _fun94805_ip = 1757;
                    continue _fun94805
                }
            case 1662:
                var24 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var10];
                var26 = var24.bind(var18)(var23);
                var23 = var1;
                var25 = var23.semver;
                var24 = var17.String;
                var23 = var22;
                var24 = var24.bind(var18)(var23);
                var23 = var19;
                var23 = var26.bind(var18)(var25, var24, var23);
                if (var23) {
                    _fun94805_ip = 1757;
                    continue _fun94805
                }
            case 1715: // try_end7
                var9.return();
                return var0;
            case 1720: // try_start_8
                var26 = _closure1_slot6;
                var25 = var1;
                var24 = var22;
                var23 = var19;
                var23 = var26.bind(var18)(var25, var24, var23);
                var21 = var23;
                if (!(var23 === var24)) {
                    _fun94805_ip = 1757;
                    continue _fun94805
                }
            case 1747:
                var24 = var21;
                var23 = var1;
                if (!(var24 === var23)) {
                    _fun94805_ip = 1798;
                    continue _fun94805
                }
            case 1757:
                var23 = var22;
                var23 = var23.operator;
                if (var23) {
                    _fun94805_ip = 1793;
                    continue _fun94805
                }
            case 1769:
                var23 = var1;
                if (var23) {
                    _fun94805_ip = 1781;
                    continue _fun94805
                }
            case 1775:
                var23 = var6;
                if (!var23) {
                    _fun94805_ip = 1793;
                    continue _fun94805
                }
            case 1781:
                var23 = var4;
                if (!(var5 !== var23)) {
                    _fun94805_ip = 1793;
                    continue _fun94805
                }
            case 1788: // try_end8
                var9.return();
                return var0;
            case 1793:
                _fun94805_ip = 1049;
                continue _fun94805;
            case 1798:
                var9.return();
                return var0;
            case 1803:
                var9.return();
                return var0;
            case 1808: // catch_target6 // catch_target7 // catch_target8
                CatchBlockStart(arg_register = 0);
                var9.return();
                throw var0;
            case 1815:
                var0 = var6;
                if (!var0) {
                    _fun94805_ip = 1824;
                    continue _fun94805
                }
            case 1821:
                var0 = var8;
            case 1824:
                if (!var0) {
                    _fun94805_ip = 1833;
                    continue _fun94805
                }
            case 1827:
                var8 = var1;
                var0 = !var8;
            case 1833:
                if (!var0) {
                    _fun94805_ip = 1843;
                    continue _fun94805
                }
            case 1836:
                var8 = var4;
                var0 = var5 !== var8;
            case 1843:
                var0 = !var0;
                if (!var0) {
                    _fun94805_ip = 1889;
                    continue _fun94805
                }
            case 1849:
                if (!var1) {
                    _fun94805_ip = 1855;
                    continue _fun94805
                }
            case 1852:
                var1 = var7;
            case 1855:
                if (!var1) {
                    _fun94805_ip = 1861;
                    continue _fun94805
                }
            case 1858:
                var1 = !var6;
            case 1861:
                if (!var1) {
                    _fun94805_ip = 1868;
                    continue _fun94805
                }
            case 1864:
                var1 = var5 !== var4;
            case 1868:
                var1 = !var1;
                if (!var1) {
                    _fun94805_ip = 1886;
                    continue _fun94805
                }
            case 1874:
                var2 = !var2;
                if (!var2) {
                    _fun94805_ip = 1883;
                    continue _fun94805
                }
            case 1880:
                var2 = !var3;
            case 1883:
                var1 = var2;
            case 1886:
                var0 = var1;
            case 1889:
                return var0;
            case 1891:
                var0 = null;
                return var0;
            case 1895:
                var0 = null;
                return var0;
            case 1899:
                var0 = null;
                return var0;
            case 1903:
                var0 = true;
                return var0;
            case 1907:
                var0 = true;
                return var0;
            case 1911:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: higherGT, environment: var1
        _fun94806: for (var _fun94806_ip = 0;;) switch (_fun94806_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                if (var5) {
                    _fun94806_ip = 11;
                    continue _fun94806
                }
            case 9:
                return var2;
            case 11:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var6 = undefined;
                var4 = var1.bind(var6)(var0);
                var3 = var5.semver;
                var1 = var2.semver;
                var0 = arg2;
                var3 = var4.bind(var6)(var3, var1, var0);
                var1 = 0;
                var0 = var5;
                if (!(!(var3 > var1))) {
                    _fun94806_ip = 113;
                    continue _fun94806
                }
            case 67:
                if (!(!(var3 < var1))) {
                    _fun94806_ip = 107;
                    continue _fun94806
                }
            case 71:
                var4 = var2.operator;
                var3 = '>';
                var1 = var5;
                if (!(var3 === var4)) {
                    _fun94806_ip = 110;
                    continue _fun94806
                }
            case 88:
                var4 = var5.operator;
                var3 = '>=';
                var1 = var5;
                if (!(var3 === var4)) {
                    _fun94806_ip = 110;
                    continue _fun94806
                }
            case 107:
                var1 = var2;
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: lowerLT, environment: var1
        _fun94807: for (var _fun94807_ip = 0;;) switch (_fun94807_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                if (var5) {
                    _fun94807_ip = 11;
                    continue _fun94807
                }
            case 9:
                return var2;
            case 11:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var6 = undefined;
                var4 = var1.bind(var6)(var0);
                var3 = var5.semver;
                var1 = var2.semver;
                var0 = arg2;
                var3 = var4.bind(var6)(var3, var1, var0);
                var1 = 0;
                var0 = var5;
                if (!(!(var3 < var1))) {
                    _fun94807_ip = 113;
                    continue _fun94807
                }
            case 67:
                if (!(!(var3 > var1))) {
                    _fun94807_ip = 107;
                    continue _fun94807
                }
            case 71:
                var4 = var2.operator;
                var3 = '<';
                var1 = var5;
                if (!(var3 === var4)) {
                    _fun94807_ip = 110;
                    continue _fun94807
                }
            case 88:
                var4 = var5.operator;
                var3 = '<=';
                var1 = var5;
                if (!(var3 === var4)) {
                    _fun94807_ip = 110;
                    continue _fun94807
                }
            case 107:
                var1 = var2;
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function(arg0, arg1) { // Original name: subset, environment: var1
        _fun94808: for (var _fun94808_ip = 0;;) switch (_fun94808_ip) {
            case 0:
                var13 = arg0;
                var5 = undefined;
                var2 = undefined;
                var6 = arg1;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var10 = undefined;
                var0 = arguments.length;
                var1 = 2;
                if (!(var0 > var1)) {
                    _fun94808_ip = 36;
                    continue _fun94808
                }
            case 28:
                var0 = arguments[var1];
                if (!(var5 === var0)) {
                    _fun94808_ip = 40;
                    continue _fun94808
                }
            case 36:
                var0 = {};
                _fun94808_ip = 44;
                continue _fun94808;
            case 40:
                var0 = arguments[var1];
            case 44:
                var7 = var0;
                var0 = var6;
                if (!(var13 !== var0)) {
                    _fun94808_ip = 279;
                    continue _fun94808
                }
            case 57:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var1 = var3[var0];
                var1 = var2.bind(var5)(var1);
                var11 = var7;
                var12 = var1.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var12;
                var19 = var13;
                var18 = var11;
                var1 = new var20[var1](var19, var18, var17);
                var1 = var1 instanceof Object ? var1 : var12;
                var0 = var3[var0];
                var3 = var2.bind(var5)(var0);
                var19 = var6;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var20 = var2;
                var18 = var11;
                var0 = new var20[var3](var19, var18, var17);
                var6 = var0 instanceof Object ? var0 : var2;
                var0 = false;
                var8 = false;
                var2 = var1.set;
                var3 = var2;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var2 = null;
            case 160:
                var11 = var3().value;
                var12 = var1;
                if (!(var12 !== var5)) {
                    _fun94808_ip = 275;
                    continue _fun94808
                }
            case 171: // try_start_1
                var9 = var11;
                var11 = var6;
                var13 = var11.set;
                var11 = var13;
                var12 = var11[Symbol.iterator];
                var11 = var12().next;
            case 188:
                var16 = var11().value;
                var13 = var12;
                if (!(var13 !== var5)) {
                    _fun94808_ip = 255;
                    continue _fun94808
                }
            case 199: // try_start_0
                var15 = _closure1_slot4;
                var14 = var9;
                var13 = var7;
                var10 = var15.bind(var5)(var14, var16, var13);
                var14 = var8;
                var13 = var14;
                if (var14) {
                    _fun94808_ip = 232;
                    continue _fun94808
                }
            case 225:
                var14 = var10;
                var13 = var2 !== var14;
            case 232:
                var8 = var13;
                var13 = var10;
                if (var13) {
                    _fun94808_ip = 243;
                    continue _fun94808
                }
            case 241: // try_end0
                _fun94808_ip = 188;
                continue _fun94808;
            case 243:
                var12.return();
            case 246: // try_end1
                _fun94808_ip = 160;
                continue _fun94808;
            case 248: // try_start_2 // catch_target0
                CatchBlockStart(arg_register = 11);
                var12.return();
                throw var11;
            case 255:
                var11 = var8;
                if (var11) {
                    _fun94808_ip = 263;
                    continue _fun94808
                }
            case 261: // try_end2
                _fun94808_ip = 160;
                continue _fun94808;
            case 263:
                var1.return();
                return var0;
            case 268: // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 275:
                var0 = true;
                return var0;
            case 279:
                var0 = true;
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12348, 12347, 12333, 12350]);