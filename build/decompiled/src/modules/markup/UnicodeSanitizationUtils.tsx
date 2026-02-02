// modules/markup/UnicodeSanitizationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var7 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var7;
    var9 = function arg0() {
        var2 = arg0;
        var0 = global;
        var3 = var0.RegExp;
        var1 = var2.join;
        var0 = '|';
        var5 = var1.bind(var2)(var0);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = 'gu';
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0 = function arg0() {
        _fun43996: for (var _fun43996_ip = 0;;) switch (_fun43996_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var97 = 0;
                var1 = var1[var97];
                var96 = undefined;
                var2 = var2.bind(var96)(var1);
                var1 = var2.safeDecodeURIComponent;
                var3 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun43996_ip = 1399;
                    continue _fun43996
                }
            case 47:
                var1 = var0.length;
                var2 = var1 > var97;
                var8 = '';
                var95 = 1;
                var94 = 921599;
                var93 = 917504;
                var92 = 119162;
                var91 = 119155;
                var90 = 113827;
                var89 = 113824;
                var88 = 78904;
                var87 = 78896;
                var86 = 69837;
                var85 = 69821;
                var84 = 65531;
                var83 = 65530;
                var82 = 65529;
                var81 = 65440;
                var80 = 65279;
                var79 = 65039;
                var78 = 65024;
                var77 = 65528;
                var76 = 65520;
                var75 = 12644;
                var74 = 8303;
                var73 = 8298;
                var72 = 8293;
                var71 = 8292;
                var70 = 8291;
                var69 = 8290;
                var68 = 8289;
                var67 = 8288;
                var66 = 8205;
                var65 = 8204;
                var64 = 8203;
                var63 = 6158;
                var62 = 6157;
                var61 = 6156;
                var60 = 6155;
                var59 = 6069;
                var58 = 6068;
                var57 = 4448;
                var56 = 4447;
                var55 = 2274;
                var54 = 1807;
                var53 = 1757;
                var52 = 1541;
                var51 = 1536;
                var50 = 847;
                var49 = 173;
                var48 = 10240;
                var47 = 12288;
                var46 = 8287;
                var45 = 8239;
                var44 = 8233;
                var43 = 8232;
                var42 = 8202;
                var41 = 8201;
                var40 = 8200;
                var39 = 8199;
                var38 = 8198;
                var37 = 8197;
                var36 = 8196;
                var35 = 8195;
                var34 = 8194;
                var33 = 8193;
                var32 = 8192;
                var31 = 5760;
                var30 = 160;
                var29 = 133;
                var28 = 128275;
                var27 = 128274;
                var26 = 128272;
                var25 = 128271;
                var24 = 8297;
                var23 = 8296;
                var22 = 8295;
                var21 = 8294;
                var20 = 1564;
                var19 = 8238;
                var18 = 8237;
                var17 = 8236;
                var16 = 8235;
                var15 = 8234;
                var14 = 8207;
                var13 = 8206;
                var12 = 128;
                var11 = global;
                var10 = 3;
                var9 = undefined;
                var7 = var0;
                var6 = var3;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var1 = var8;
                if (!var2) {
                    _fun43996_ip = 1397;
                    continue _fun43996
                }
            case 577:
                var2 = var7.codePointAt;
                var100 = var2.bind(var7)(var97);
                var2 = var6.codePointAt;
                var105 = var2.bind(var6)(var97);
                var103 = var7;
                var107 = var6;
                if (!(var100 === var105)) {
                    _fun43996_ip = 667;
                    continue _fun43996
                }
            case 609:
                var99 = var11.String;
                var2 = var99.fromCodePoint;
                var2 = var2.bind(var99)(var100);
                var99 = var8 + var2;
                var101 = var103.substring;
                var100 = var2.length;
                var7 = var101.bind(var103)(var100);
                var101 = var107.substring;
                var2 = var2.length;
                var6 = var101.bind(var107)(var2);
                _fun43996_ip = 1379;
                continue _fun43996;
            case 667:
                var100 = var11.String;
                var2 = var100.fromCodePoint;
                var101 = var2.bind(var100)(var105);
                var2 = var11.encodeURIComponent;
                var100 = var2.bind(var96)(var101);
                var2 = var10;
                if (!(var100 !== var101)) {
                    _fun43996_ip = 707;
                    continue _fun43996
                }
            case 702:
                var2 = var100.length;
            case 707:
                if (!(var105 >= var97)) {
                    _fun43996_ip = 718;
                    continue _fun43996
                }
            case 711:
                if (!(!(var105 < var12))) {
                    _fun43996_ip = 1315;
                    continue _fun43996
                }
            case 718:
                var104 = var13 === var105;
                if (var104) {
                    _fun43996_ip = 729;
                    continue _fun43996
                }
            case 725:
                var104 = var14 === var105;
            case 729:
                if (var104) {
                    _fun43996_ip = 736;
                    continue _fun43996
                }
            case 732:
                var104 = var15 === var105;
            case 736:
                if (var104) {
                    _fun43996_ip = 743;
                    continue _fun43996
                }
            case 739:
                var104 = var16 === var105;
            case 743:
                if (var104) {
                    _fun43996_ip = 750;
                    continue _fun43996
                }
            case 746:
                var104 = var17 === var105;
            case 750:
                if (var104) {
                    _fun43996_ip = 757;
                    continue _fun43996
                }
            case 753:
                var104 = var18 === var105;
            case 757:
                if (var104) {
                    _fun43996_ip = 764;
                    continue _fun43996
                }
            case 760:
                var104 = var19 === var105;
            case 764:
                if (var104) {
                    _fun43996_ip = 771;
                    continue _fun43996
                }
            case 767:
                var104 = var20 === var105;
            case 771:
                if (var104) {
                    _fun43996_ip = 778;
                    continue _fun43996
                }
            case 774:
                var104 = var21 === var105;
            case 778:
                if (var104) {
                    _fun43996_ip = 785;
                    continue _fun43996
                }
            case 781:
                var104 = var22 === var105;
            case 785:
                if (var104) {
                    _fun43996_ip = 792;
                    continue _fun43996
                }
            case 788:
                var104 = var23 === var105;
            case 792:
                if (var104) {
                    _fun43996_ip = 799;
                    continue _fun43996
                }
            case 795:
                var104 = var24 === var105;
            case 799:
                if (var104) {
                    _fun43996_ip = 806;
                    continue _fun43996
                }
            case 802:
                var104 = var25 === var105;
            case 806:
                if (var104) {
                    _fun43996_ip = 813;
                    continue _fun43996
                }
            case 809:
                var104 = var26 === var105;
            case 813:
                if (var104) {
                    _fun43996_ip = 820;
                    continue _fun43996
                }
            case 816:
                var104 = var27 === var105;
            case 820:
                if (var104) {
                    _fun43996_ip = 827;
                    continue _fun43996
                }
            case 823:
                var104 = var28 === var105;
            case 827:
                if (var104) {
                    _fun43996_ip = 834;
                    continue _fun43996
                }
            case 830:
                var104 = var29 === var105;
            case 834:
                if (var104) {
                    _fun43996_ip = 841;
                    continue _fun43996
                }
            case 837:
                var104 = var30 === var105;
            case 841:
                if (var104) {
                    _fun43996_ip = 848;
                    continue _fun43996
                }
            case 844:
                var104 = var31 === var105;
            case 848:
                if (var104) {
                    _fun43996_ip = 855;
                    continue _fun43996
                }
            case 851:
                var104 = var32 === var105;
            case 855:
                if (var104) {
                    _fun43996_ip = 862;
                    continue _fun43996
                }
            case 858:
                var104 = var33 === var105;
            case 862:
                if (var104) {
                    _fun43996_ip = 869;
                    continue _fun43996
                }
            case 865:
                var104 = var34 === var105;
            case 869:
                if (var104) {
                    _fun43996_ip = 876;
                    continue _fun43996
                }
            case 872:
                var104 = var35 === var105;
            case 876:
                if (var104) {
                    _fun43996_ip = 883;
                    continue _fun43996
                }
            case 879:
                var104 = var36 === var105;
            case 883:
                if (var104) {
                    _fun43996_ip = 890;
                    continue _fun43996
                }
            case 886:
                var104 = var37 === var105;
            case 890:
                if (var104) {
                    _fun43996_ip = 897;
                    continue _fun43996
                }
            case 893:
                var104 = var38 === var105;
            case 897:
                if (var104) {
                    _fun43996_ip = 904;
                    continue _fun43996
                }
            case 900:
                var104 = var39 === var105;
            case 904:
                if (var104) {
                    _fun43996_ip = 911;
                    continue _fun43996
                }
            case 907:
                var104 = var40 === var105;
            case 911:
                if (var104) {
                    _fun43996_ip = 918;
                    continue _fun43996
                }
            case 914:
                var104 = var41 === var105;
            case 918:
                if (var104) {
                    _fun43996_ip = 925;
                    continue _fun43996
                }
            case 921:
                var104 = var42 === var105;
            case 925:
                if (var104) {
                    _fun43996_ip = 932;
                    continue _fun43996
                }
            case 928:
                var104 = var43 === var105;
            case 932:
                if (var104) {
                    _fun43996_ip = 939;
                    continue _fun43996
                }
            case 935:
                var104 = var44 === var105;
            case 939:
                if (var104) {
                    _fun43996_ip = 946;
                    continue _fun43996
                }
            case 942:
                var104 = var45 === var105;
            case 946:
                if (var104) {
                    _fun43996_ip = 953;
                    continue _fun43996
                }
            case 949:
                var104 = var46 === var105;
            case 953:
                if (var104) {
                    _fun43996_ip = 960;
                    continue _fun43996
                }
            case 956:
                var104 = var47 === var105;
            case 960:
                if (var104) {
                    _fun43996_ip = 967;
                    continue _fun43996
                }
            case 963:
                var104 = var48 === var105;
            case 967:
                if (var104) {
                    _fun43996_ip = 974;
                    continue _fun43996
                }
            case 970:
                var104 = var49 === var105;
            case 974:
                if (var104) {
                    _fun43996_ip = 981;
                    continue _fun43996
                }
            case 977:
                var104 = var50 === var105;
            case 981:
                if (var104) {
                    _fun43996_ip = 998;
                    continue _fun43996
                }
            case 984:
                var102 = var105 >= var51;
                if (!var102) {
                    _fun43996_ip = 995;
                    continue _fun43996
                }
            case 991:
                var102 = var105 <= var52;
            case 995:
                var104 = var102;
            case 998:
                if (var104) {
                    _fun43996_ip = 1005;
                    continue _fun43996
                }
            case 1001:
                var104 = var53 === var105;
            case 1005:
                if (var104) {
                    _fun43996_ip = 1012;
                    continue _fun43996
                }
            case 1008:
                var104 = var54 === var105;
            case 1012:
                if (var104) {
                    _fun43996_ip = 1019;
                    continue _fun43996
                }
            case 1015:
                var104 = var55 === var105;
            case 1019:
                if (var104) {
                    _fun43996_ip = 1026;
                    continue _fun43996
                }
            case 1022:
                var104 = var56 === var105;
            case 1026:
                if (var104) {
                    _fun43996_ip = 1033;
                    continue _fun43996
                }
            case 1029:
                var104 = var57 === var105;
            case 1033:
                if (var104) {
                    _fun43996_ip = 1040;
                    continue _fun43996
                }
            case 1036:
                var104 = var58 === var105;
            case 1040:
                if (var104) {
                    _fun43996_ip = 1047;
                    continue _fun43996
                }
            case 1043:
                var104 = var59 === var105;
            case 1047:
                if (var104) {
                    _fun43996_ip = 1054;
                    continue _fun43996
                }
            case 1050:
                var104 = var60 === var105;
            case 1054:
                if (var104) {
                    _fun43996_ip = 1061;
                    continue _fun43996
                }
            case 1057:
                var104 = var61 === var105;
            case 1061:
                if (var104) {
                    _fun43996_ip = 1068;
                    continue _fun43996
                }
            case 1064:
                var104 = var62 === var105;
            case 1068:
                if (var104) {
                    _fun43996_ip = 1075;
                    continue _fun43996
                }
            case 1071:
                var104 = var63 === var105;
            case 1075:
                if (var104) {
                    _fun43996_ip = 1082;
                    continue _fun43996
                }
            case 1078:
                var104 = var64 === var105;
            case 1082:
                if (var104) {
                    _fun43996_ip = 1089;
                    continue _fun43996
                }
            case 1085:
                var104 = var65 === var105;
            case 1089:
                if (var104) {
                    _fun43996_ip = 1096;
                    continue _fun43996
                }
            case 1092:
                var104 = var66 === var105;
            case 1096:
                if (var104) {
                    _fun43996_ip = 1103;
                    continue _fun43996
                }
            case 1099:
                var104 = var67 === var105;
            case 1103:
                if (var104) {
                    _fun43996_ip = 1110;
                    continue _fun43996
                }
            case 1106:
                var104 = var68 === var105;
            case 1110:
                if (var104) {
                    _fun43996_ip = 1117;
                    continue _fun43996
                }
            case 1113:
                var104 = var69 === var105;
            case 1117:
                if (var104) {
                    _fun43996_ip = 1124;
                    continue _fun43996
                }
            case 1120:
                var104 = var70 === var105;
            case 1124:
                if (var104) {
                    _fun43996_ip = 1131;
                    continue _fun43996
                }
            case 1127:
                var104 = var71 === var105;
            case 1131:
                if (var104) {
                    _fun43996_ip = 1138;
                    continue _fun43996
                }
            case 1134:
                var104 = var72 === var105;
            case 1138:
                if (var104) {
                    _fun43996_ip = 1155;
                    continue _fun43996
                }
            case 1141:
                var102 = var105 >= var73;
                if (!var102) {
                    _fun43996_ip = 1152;
                    continue _fun43996
                }
            case 1148:
                var102 = var105 <= var74;
            case 1152:
                var104 = var102;
            case 1155:
                if (var104) {
                    _fun43996_ip = 1162;
                    continue _fun43996
                }
            case 1158:
                var104 = var75 === var105;
            case 1162:
                if (var104) {
                    _fun43996_ip = 1179;
                    continue _fun43996
                }
            case 1165:
                var102 = var105 >= var76;
                if (!var102) {
                    _fun43996_ip = 1176;
                    continue _fun43996
                }
            case 1172:
                var102 = var105 <= var77;
            case 1176:
                var104 = var102;
            case 1179:
                if (var104) {
                    _fun43996_ip = 1196;
                    continue _fun43996
                }
            case 1182:
                var102 = var105 >= var78;
                if (!var102) {
                    _fun43996_ip = 1193;
                    continue _fun43996
                }
            case 1189:
                var102 = var105 <= var79;
            case 1193:
                var104 = var102;
            case 1196:
                if (var104) {
                    _fun43996_ip = 1203;
                    continue _fun43996
                }
            case 1199:
                var104 = var80 === var105;
            case 1203:
                if (var104) {
                    _fun43996_ip = 1210;
                    continue _fun43996
                }
            case 1206:
                var104 = var81 === var105;
            case 1210:
                if (var104) {
                    _fun43996_ip = 1217;
                    continue _fun43996
                }
            case 1213:
                var104 = var82 === var105;
            case 1217:
                if (var104) {
                    _fun43996_ip = 1224;
                    continue _fun43996
                }
            case 1220:
                var104 = var83 === var105;
            case 1224:
                if (var104) {
                    _fun43996_ip = 1231;
                    continue _fun43996
                }
            case 1227:
                var104 = var84 === var105;
            case 1231:
                if (var104) {
                    _fun43996_ip = 1238;
                    continue _fun43996
                }
            case 1234:
                var104 = var85 === var105;
            case 1238:
                if (var104) {
                    _fun43996_ip = 1245;
                    continue _fun43996
                }
            case 1241:
                var104 = var86 === var105;
            case 1245:
                if (var104) {
                    _fun43996_ip = 1262;
                    continue _fun43996
                }
            case 1248:
                var102 = var105 >= var87;
                if (!var102) {
                    _fun43996_ip = 1259;
                    continue _fun43996
                }
            case 1255:
                var102 = var105 <= var88;
            case 1259:
                var104 = var102;
            case 1262:
                if (var104) {
                    _fun43996_ip = 1279;
                    continue _fun43996
                }
            case 1265:
                var102 = var105 >= var89;
                if (!var102) {
                    _fun43996_ip = 1276;
                    continue _fun43996
                }
            case 1272:
                var102 = var105 <= var90;
            case 1276:
                var104 = var102;
            case 1279:
                if (var104) {
                    _fun43996_ip = 1296;
                    continue _fun43996
                }
            case 1282:
                var102 = var105 >= var91;
                if (!var102) {
                    _fun43996_ip = 1293;
                    continue _fun43996
                }
            case 1289:
                var102 = var105 <= var92;
            case 1293:
                var104 = var102;
            case 1296:
                if (var104) {
                    _fun43996_ip = 1313;
                    continue _fun43996
                }
            case 1299:
                var102 = var105 >= var93;
                if (!var102) {
                    _fun43996_ip = 1310;
                    continue _fun43996
                }
            case 1306:
                var102 = var105 <= var94;
            case 1310:
                var104 = var102;
            case 1313:
                _fun43996_ip = 1327;
                continue _fun43996;
            case 1315:
                var102 = _closure1_slot5;
                var102 = var102[var105];
                var104 = var95 !== var102;
            case 1327:
                var102 = var101;
                if (!var104) {
                    _fun43996_ip = 1336;
                    continue _fun43996
                }
            case 1333:
                var102 = var100;
            case 1336:
                var99 = var8 + var102;
                var102 = var103.substring;
                var7 = var102.bind(var103)(var2);
                var106 = var107.substring;
                var102 = var101.length;
                var6 = var106.bind(var107)(var102);
                var9 = var105;
                var5 = var101;
                var4 = var100;
                var3 = var2;
            case 1379:
                var2 = var7.length;
                var8 = var99;
                var1 = var8;
                if (var2 > var97) {
                    _fun43996_ip = 577;
                    continue _fun43996
                }
            case 1397:
                return var1;
            case 1399:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var12 = ['͏', '឴', '឵', 'ᅠ', 'ㅤ', 'ﾠ'];
    var5 = var0.RegExp;
    var3 = /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\t\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var6 = var3.source;
    var3 = var12.join;
    var11 = '|';
    var4 = var3.bind(var12)(var11);
    var3 = var0.HermesInternal;
    var3 = var3.concat;
    var10 = '';
    var15 = var3.bind(var10)(var6, var11, var4);
    var4 = var5.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var5
        }
    });
    var6 = 'gu';
    var16 = var4;
    var14 = var6;
    var3 = new var16[var5](var15, var14, var13);
    var5 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot2 = var5;
    var4 = var0.RegExp;
    var3 = /(?:[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])|\u2028|\u2029|[\0-\x08\x0B-\x1F\x7F-\x9F]|[\xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var8 = var3.source;
    var3 = var12.join;
    var3 = var3.bind(var12)(var11);
    var0 = var0.HermesInternal;
    var0 = var0.concat;
    var15 = var0.bind(var10)(var8, var11, var3);
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var16 = var3;
    var14 = var6;
    var0 = new var16[var4](var15, var14, var13);
    var4 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot3 = var4;
    var6 = {};
    var0 = 'h';
    var6.character = var0;
    var0 = undefined;
    var3 = ['H', 'һ', 'հ', 'Ꮒ', 'ℎ', '𝐡', '𝒉', '𝒽', '𝓱', '𝔥', '𝕙', '𝖍', '𝗁', '𝗵', '𝘩', '𝙝', '𝚑', 'ｈ'];
    var3 = var9.bind(var0)(var3);
    var6.matcher = var3;
    var3 = new Array(6);
    var3[0] = var6;
    var6 = {};
    var8 = 't';
    var6.character = var8;
    var8 = ['T', '𝐭', '𝑡', '𝒕', '𝓉', '𝓽', '𝔱', '𝕥', '𝖙', '𝗍', '𝘁', '𝘵', '𝙩', '𝚝'];
    var8 = var9.bind(var0)(var8);
    var6.matcher = var8;
    var3[1] = var6;
    var6 = {};
    var8 = 'p';
    var6.character = var8;
    var8 = ['P', 'ρ', 'ϱ', 'р', '⍴', 'ⲣ', '𝐩', '𝑝', '𝒑', '𝓅', '𝓹', '𝔭', '𝕡', '𝖕', '𝗉', '𝗽', '𝘱', '𝙥', '𝚙', '𝛒', '𝛠', '𝜌', '𝜚', '𝝆', '𝝔', '𝞀', '𝞎', '𝞺', '𝟈', 'ｐ', 'ҏ'];
    var8 = var9.bind(var0)(var8);
    var6.matcher = var8;
    var3[2] = var6;
    var6 = {};
    var8 = 's';
    var6.character = var8;
    var8 = ['S', 'ƽ', 'ѕ', 'ꜱ', 'ꮪ', '𐑈', '𑣁', '𝐬', '𝑠', '𝒔', '𝓈', '𝓼', '𝔰', '𝕤', '𝖘', '𝗌', '𝘀', '𝘴', '𝙨', '𝚜', 'ｓ'];
    var8 = var9.bind(var0)(var8);
    var6.matcher = var8;
    var3[3] = var6;
    var6 = {};
    var8 = ':';
    var6.character = var8;
    var8 = ['ː', '˸', '։', '׃', '܃', '܄', 'ः', 'ઃ', '᛬', '᠃', '᠉', '⁚', '∶', 'ꓽ', '꞉', '︰', '：', ';', ';'];
    var8 = var9.bind(var0)(var8);
    var6.matcher = var8;
    var3[4] = var6;
    var6 = {};
    var8 = '/';
    var6.character = var8;
    var8 = ['᜵', '⁁', '⁄', '∕', '╱', '⟋', '⧸', 'Ⳇ', '⼃', '〳', 'ノ', '㇓', '丿', '𝈺'];
    var8 = var9.bind(var0)(var8);
    var6.matcher = var8;
    var3[5] = var6;
    var _closure1_slot4 = var3;
    var6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
    var _closure1_slot5 = var6;
    var6 = 1;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/UnicodeSanitizationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.BLANK_CHARACTERS_TO_SANITIZE_REGEX = var5;
    var2.BLANK_CHARACTERS_TO_SANITIZE_REGEX_EXCLUDING_TABS = var4;
    var4 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = _closure1_slot2;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.sanitizeWhitespace = var4;
    var4 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = _closure1_slot3;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.sanitizeWhitespaceExcludingTabs = var4;
    var2.UNICODE_CONFUSABLES_FOR_URL_DETECTION = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = _closure2_slot0;
            var3 = var4.replace;
            var2 = var0.matcher;
            var0 = var0.character;
            var0 = var3.bind(var4)(var2, var0);
            _closure2_slot0 = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var2.sanitizeUnicodeConfusables = var3;
    var1 = function arg0() {
        _fun44001: for (var _fun44001_ip = 0;;) switch (_fun44001_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.origin;
                var1 = 'null';
                var1 = var1 === var2;
                if (!var1) {
                    _fun44001_ip = 43;
                    continue _fun44001
                }
            case 20:
                var4 = var0.pathname;
                var3 = var4.startsWith;
                var2 = '//';
                var1 = var3.bind(var4)(var2);
            case 43:
                if (var1) {
                    _fun44001_ip = 207;
                    continue _fun44001
                }
            case 49:
                var1 = var0.username;
                var6 = '';
                var3 = var6;
                if (!(var6 !== var1)) {
                    _fun44001_ip = 73;
                    continue _fun44001
                }
            case 65:
                var1 = var0.username;
                var3 = '' + var1;
            case 73:
                var1 = var0.password;
                var2 = var3;
                if (!(var6 !== var1)) {
                    _fun44001_ip = 104;
                    continue _fun44001
                }
            case 86:
                var4 = var0.password;
                var1 = ':';
                var1 = var1 + var4;
                var2 = var3 + var1;
            case 104:
                var5 = var2;
                if (!(var6 !== var5)) {
                    _fun44001_ip = 119;
                    continue _fun44001
                }
            case 111:
                var1 = '@';
                var5 = var2 + var1;
            case 119:
                var4 = var0.href;
                var3 = var4.substr;
                var1 = var0.protocol;
                var2 = var1.length;
                var1 = 2;
                var2 = var3.bind(var4)(var2, var1);
                var1 = '//';
                var4 = var6;
                if (!(var1 === var2)) {
                    _fun44001_ip = 167;
                    continue _fun44001
                }
            case 164:
                var4 = var1;
            case 167:
                var10 = var0.protocol;
                var7 = var0.host;
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var11 = var6;
                var9 = var4;
                var8 = var5;
                var4 = var11[var1](var10, var9, var8, var7, var6);
                _fun44001_ip = 213;
                continue _fun44001;
            case 207:
                var4 = var0.protocol;
            case 213:
                var3 = _closure1_slot6;
                var1 = var0.pathname;
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var4 = var4 + var1;
                var1 = var0.search;
                var1 = var3.bind(var2)(var1);
                var1 = var4 + var1;
                var0 = var0.hash;
                var0 = var3.bind(var2)(var0);
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.safelyMakeUrlHumanReadable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1457, 2]);