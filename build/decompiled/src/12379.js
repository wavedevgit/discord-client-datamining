// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun94824: for (var _fun94824_ip = 0;;) switch (_fun94824_ip) {
            case 0:
                var6 = arg0;
                var2 = var6.state;
                var41 = var6.next_in;
                var40 = var6.input;
                var0 = var6.avail_in;
                var11 = 5;
                var0 = var0 - var11;
                var12 = var41 + var0;
                var39 = var6.next_out;
                var38 = var6.output;
                var1 = var6.avail_out;
                var0 = arg1;
                var0 = var0 - var1;
                var37 = var39 - var0;
                var0 = var6.avail_out;
                var8 = 257;
                var0 = var0 - var8;
                var9 = var39 + var0;
                var36 = var2.dmax;
                var35 = var2.wsize;
                var34 = var2.whave;
                var33 = var2.wnext;
                var32 = var2.window;
                var31 = var2.hold;
                var30 = var2.bits;
                var29 = var2.lencode;
                var28 = var2.distcode;
                var0 = var2.lenbits;
                var5 = 1;
                var0 = var5 << var0;
                var27 = var0 - var5;
                var0 = var2.distbits;
                var0 = var5 << var0;
                var26 = var0 - var5;
                var0 = undefined;
                var25 = 65535;
                var13 = 3;
                var24 = 2;
                var23 = 0;
                var22 = 8;
                var21 = 15;
                var20 = 64;
                var19 = 24;
                var18 = 16;
                var17 = 255;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var1 = undefined;
            case 212:
                var53 = var41;
                var7 = var31;
                var4 = var30;
                if (!(var4 < var21)) {
                    _fun94824_ip = 269;
                    continue _fun94824
                }
            case 225:
                var10 = parseFloat(var41);
                var3 = var40[var10];
                var3 = var3 << var30;
                var43 = var31 + var3;
                var3 = var30 + var22;
                var10 = var10 + 1;
                var10 = parseFloat(var10);
                var53 = var10 + 1;
                var10 = var40[var10];
                var10 = var10 << var3;
                var7 = var43 + var10;
                var4 = var3 + var22;
            case 269:
                var3 = var7 & var27;
                var3 = var29[var3];
            case 277:
                var10 = var3 >>> var19;
                var51 = var7 >>> var10;
                var50 = var4 - var10;
                var10 = var3 >>> var18;
                var42 = var10 & var17;
                var54 = var3;
                if (!(var23 !== var42)) {
                    _fun94824_ip = 1620;
                    continue _fun94824
                }
            case 307:
                var10 = var18 & var42;
                if (var10) {
                    _fun94824_ip = 427;
                    continue _fun94824
                }
            case 314:
                var10 = var20 & var42;
                if (var10) {
                    _fun94824_ip = 353;
                    continue _fun94824
                }
            case 321:
                var43 = var25 & var54;
                var10 = var5 << var42;
                var10 = var10 - var5;
                var10 = var51 & var10;
                var10 = var43 + var10;
                var3 = var29[var10];
                var7 = var51;
                var4 = var50;
                _fun94824_ip = 277;
                continue _fun94824;
            case 353:
                var3 = 32;
                var3 = var3 & var42;
                if (var3) {
                    _fun94824_ip = 401;
                    continue _fun94824
                }
            case 363:
                var3 = 'invalid literal/length code';
                var6.msg = var3;
                var3 = 30;
                var2.mode = var3;
                var10 = var53;
                var7 = var39;
                var4 = var51;
                var3 = var50;
                _fun94824_ip = 1714;
                continue _fun94824;
            case 401:
                var43 = 12;
                var2.mode = var43;
                var10 = var53;
                var7 = var39;
                var4 = var51;
                var3 = var50;
                _fun94824_ip = 1714;
                continue _fun94824;
            case 427:
                var52 = var25 & var54;
                var49 = var42 & var21;
                var43 = var53;
                var47 = var51;
                var42 = var50;
                var64 = var52;
                if (!var49) {
                    _fun94824_ip = 512;
                    continue _fun94824
                }
            case 450:
                var48 = var53;
                var46 = var51;
                var45 = var50;
                if (!(var50 < var49)) {
                    _fun94824_ip = 485;
                    continue _fun94824
                }
            case 463:
                var44 = parseFloat(var53);
                var48 = var44 + 1;
                var44 = var40[var44];
                var44 = var44 << var50;
                var46 = var51 + var44;
                var45 = var50 + var22;
            case 485:
                var44 = var5 << var49;
                var44 = var44 - var5;
                var44 = var46 & var44;
                var64 = var52 + var44;
                var47 = var46 >>> var49;
                var42 = var45 - var49;
                var43 = var48;
            case 512:
                var45 = var43;
                var49 = var47;
                var48 = var42;
                if (!(var48 < var21)) {
                    _fun94824_ip = 569;
                    continue _fun94824
                }
            case 525:
                var44 = parseFloat(var43);
                var43 = var40[var44];
                var43 = var43 << var42;
                var42 = var42 + var22;
                var44 = var44 + 1;
                var46 = parseFloat(var44);
                var45 = var46 + 1;
                var46 = var40[var46];
                var46 = var46 << var42;
                var43 = var47 + var43;
                var49 = var43 + var46;
                var48 = var42 + var22;
            case 569:
                var42 = var49 & var26;
                var47 = var28[var42];
            case 577:
                var42 = var47 >>> var19;
                var46 = var49 >>> var42;
                var43 = var48 - var42;
                var42 = var47 >>> var18;
                var42 = var42 & var17;
                var52 = var18 & var42;
                var44 = var47;
                if (var52) {
                    _fun94824_ip = 684;
                    continue _fun94824
                }
            case 607:
                var52 = var20 & var42;
                if (var52) {
                    _fun94824_ip = 646;
                    continue _fun94824
                }
            case 614:
                var55 = var25 & var44;
                var52 = var5 << var42;
                var52 = var52 - var5;
                var52 = var46 & var52;
                var52 = var55 + var52;
                var47 = var28[var52];
                var49 = var46;
                var48 = var43;
                _fun94824_ip = 577;
                continue _fun94824;
            case 646:
                var47 = 'invalid distance code';
                var6.msg = var47;
                var47 = 30;
                var2.mode = var47;
                var10 = var45;
                var7 = var39;
                var4 = var46;
                var3 = var43;
                _fun94824_ip = 1714;
                continue _fun94824;
            case 684:
                var44 = var25 & var44;
                var42 = var42 & var21;
                var56 = var45;
                var55 = var46;
                var52 = var43;
                if (!(var43 < var42)) {
                    _fun94824_ip = 771;
                    continue _fun94824
                }
            case 705:
                var45 = parseFloat(var45);
                var48 = var45 + 1;
                var45 = var40[var45];
                var45 = var45 << var43;
                var57 = var46 + var45;
                var47 = var43 + var22;
                var46 = var48;
                var45 = var57;
                var43 = var47;
                if (!(var43 < var42)) {
                    _fun94824_ip = 762;
                    continue _fun94824
                }
            case 740:
                var48 = parseFloat(var48);
                var46 = var48 + 1;
                var48 = var40[var48];
                var48 = var48 << var47;
                var45 = var57 + var48;
                var43 = var47 + var22;
            case 762:
                var56 = var46;
                var55 = var45;
                var52 = var43;
            case 771:
                var43 = var5 << var42;
                var43 = var43 - var5;
                var43 = var55 & var43;
                var61 = var44 + var43;
                if (!(!(var61 > var36))) {
                    _fun94824_ip = 1585;
                    continue _fun94824
                }
            case 794:
                var58 = var55 >>> var42;
                var57 = var52 - var42;
                var59 = var39 - var37;
                if (!(!(var61 > var59))) {
                    _fun94824_ip = 1009;
                    continue _fun94824
                }
            case 813:
                var44 = var39 - var61;
                var43 = var39;
                var42 = var64;
            case 823:
                var46 = parseFloat(var43);
                var45 = parseFloat(var44);
                var47 = var38[var45];
                var38[var46] = var47;
                var46 = var46 + 1;
                var46 = parseFloat(var46);
                var45 = var45 + 1;
                var45 = parseFloat(var45);
                var47 = var38[var45];
                var38[var46] = var47;
                var46 = var46 + 1;
                var46 = parseFloat(var46);
                var63 = var46 + 1;
                var45 = var45 + 1;
                var45 = parseFloat(var45);
                var60 = var45 + 1;
                var45 = var38[var45];
                var38[var46] = var45;
                var62 = var42 - var13;
                var43 = var63;
                var42 = var62;
                var44 = var60;
                if (var62 > var24) {
                    _fun94824_ip = 823;
                    continue _fun94824
                }
            case 900:
                var45 = var56;
                var42 = var63;
                var44 = var58;
                var43 = var57;
                var49 = var62;
                var48 = var61;
                var47 = var60;
                var46 = var1;
                if (!var62) {
                    _fun94824_ip = 1655;
                    continue _fun94824
                }
            case 930:
                var63 = parseFloat(var63);
                var66 = var63 + 1;
                var60 = parseFloat(var60);
                var65 = var60 + 1;
                var60 = var38[var60];
                var38[var63] = var60;
                var63 = var66;
                var60 = var65;
                if (!(var62 > var5)) {
                    _fun94824_ip = 980;
                    continue _fun94824
                }
            case 960:
                var68 = parseFloat(var66);
                var63 = var68 + 1;
                var67 = parseFloat(var65);
                var60 = var67 + 1;
                var67 = var38[var67];
                var38[var68] = var67;
            case 980:
                var42 = var63;
                var47 = var60;
                var45 = var56;
                var44 = var58;
                var43 = var57;
                var49 = var62;
                var48 = var61;
                var46 = var1;
                _fun94824_ip = 1655;
                continue _fun94824;
            case 1009:
                var68 = var61 - var59;
                if (!(var68 > var34)) {
                    _fun94824_ip = 1029;
                    continue _fun94824
                }
            case 1017:
                var59 = var2.sane;
                if (var59) {
                    _fun94824_ip = 1547;
                    continue _fun94824
                }
            case 1029:
                if (!(var23 !== var33)) {
                    _fun94824_ip = 1269;
                    continue _fun94824
                }
            case 1036:
                if (!(!(var33 < var68))) {
                    _fun94824_ip = 1124;
                    continue _fun94824
                }
            case 1040:
                var59 = var33 - var68;
                var70 = var23 + var59;
                var63 = var39;
                var62 = var64;
                var60 = var70;
                var59 = var32;
                if (!(var68 < var64)) {
                    _fun94824_ip = 1342;
                    continue _fun94824
                }
            case 1067:
                var66 = var64 - var68;
                var69 = var39;
                var65 = var68;
            case 1077:
                var72 = parseFloat(var69);
                var67 = var72 + 1;
                var71 = parseFloat(var70);
                var70 = var71 + 1;
                var71 = var32[var71];
                var38[var72] = var71;
                var65 = var65 - 1;
                var69 = var67;
                if (var65) {
                    _fun94824_ip = 1077;
                    continue _fun94824
                }
            case 1106:
                var60 = var67 - var61;
                var63 = var67;
                var62 = var66;
                var59 = var38;
                _fun94824_ip = 1342;
                continue _fun94824;
            case 1124:
                var65 = var35 + var33;
                var65 = var65 - var68;
                var69 = var23 + var65;
                var67 = var68 - var33;
                var63 = var39;
                var60 = var69;
                var59 = var32;
                var62 = var64;
                if (!(var67 < var62)) {
                    _fun94824_ip = 1342;
                    continue _fun94824
                }
            case 1159:
                var65 = var64 - var67;
                var66 = var39;
            case 1166:
                var72 = parseFloat(var66);
                var70 = var72 + 1;
                var71 = parseFloat(var69);
                var69 = var71 + 1;
                var71 = var32[var71];
                var38[var72] = var71;
                var67 = var67 - 1;
                var66 = var70;
                if (var67) {
                    _fun94824_ip = 1166;
                    continue _fun94824
                }
            case 1195:
                var66 = var33 < var65;
                var63 = var70;
                var62 = var65;
                var60 = 0;
                var59 = var32;
                if (!var66) {
                    _fun94824_ip = 1342;
                    continue _fun94824
                }
            case 1216:
                var66 = var65 - var33;
                var69 = var33;
                var65 = 0;
            case 1225:
                var72 = parseFloat(var70);
                var67 = var72 + 1;
                var71 = parseFloat(var65);
                var65 = var71 + 1;
                var71 = var32[var71];
                var38[var72] = var71;
                var69 = var69 - 1;
                var70 = var67;
                if (var69) {
                    _fun94824_ip = 1225;
                    continue _fun94824
                }
            case 1254:
                var60 = var67 - var61;
                var63 = var67;
                var62 = var66;
                var59 = var38;
                _fun94824_ip = 1342;
                continue _fun94824;
            case 1269:
                var65 = var35 - var68;
                var67 = var23 + var65;
                var63 = var39;
                var62 = var64;
                var60 = var67;
                var59 = var32;
                if (!(var68 < var64)) {
                    _fun94824_ip = 1342;
                    continue _fun94824
                }
            case 1293:
                var65 = var64 - var68;
                var64 = var39;
            case 1300:
                var70 = parseFloat(var64);
                var66 = var70 + 1;
                var69 = parseFloat(var67);
                var67 = var69 + 1;
                var69 = var32[var69];
                var38[var70] = var69;
                var68 = var68 - 1;
                var64 = var66;
                if (var68) {
                    _fun94824_ip = 1300;
                    continue _fun94824
                }
            case 1329:
                var60 = var66 - var61;
                var63 = var66;
                var62 = var65;
                var59 = var38;
            case 1342:
                var66 = var63;
                var65 = var62;
                var64 = var60;
                var63 = var66;
                var60 = var64;
                var62 = var65;
                if (!(var62 > var24)) {
                    _fun94824_ip = 1441;
                    continue _fun94824
                }
            case 1364:
                var68 = parseFloat(var66);
                var67 = parseFloat(var64);
                var69 = var59[var67];
                var38[var68] = var69;
                var68 = var68 + 1;
                var68 = parseFloat(var68);
                var67 = var67 + 1;
                var67 = parseFloat(var67);
                var69 = var59[var67];
                var38[var68] = var69;
                var68 = var68 + 1;
                var70 = parseFloat(var68);
                var66 = var70 + 1;
                var67 = var67 + 1;
                var67 = parseFloat(var67);
                var64 = var67 + 1;
                var67 = var59[var67];
                var38[var70] = var67;
                var65 = var65 - var13;
                var63 = var66;
                var60 = var64;
                var62 = var65;
                if (var62 > var24) {
                    _fun94824_ip = 1364;
                    continue _fun94824
                }
            case 1441:
                var45 = var56;
                var42 = var63;
                var44 = var58;
                var43 = var57;
                var49 = var62;
                var48 = var61;
                var47 = var60;
                var46 = var59;
                if (!var62) {
                    _fun94824_ip = 1655;
                    continue _fun94824
                }
            case 1471:
                var63 = parseFloat(var63);
                var65 = var63 + 1;
                var60 = parseFloat(var60);
                var64 = var60 + 1;
                var60 = var59[var60];
                var38[var63] = var60;
                var63 = var65;
                var60 = var64;
                if (!(var62 > var5)) {
                    _fun94824_ip = 1521;
                    continue _fun94824
                }
            case 1501:
                var67 = parseFloat(var65);
                var63 = var67 + 1;
                var66 = parseFloat(var64);
                var60 = var66 + 1;
                var66 = var59[var66];
                var38[var67] = var66;
            case 1521:
                var42 = var63;
                var47 = var60;
                var45 = var56;
                var44 = var58;
                var43 = var57;
                var49 = var62;
                var48 = var61;
                var46 = var59;
                _fun94824_ip = 1655;
                continue _fun94824;
            case 1547:
                var59 = 'invalid distance too far back';
                var6.msg = var59;
                var59 = 30;
                var2.mode = var59;
                var10 = var56;
                var7 = var39;
                var4 = var58;
                var3 = var57;
                _fun94824_ip = 1714;
                continue _fun94824;
            case 1585:
                var57 = 'invalid distance too far back';
                var6.msg = var57;
                var57 = 30;
                var2.mode = var57;
                var10 = var56;
                var7 = var39;
                var4 = var55;
                var3 = var52;
                _fun94824_ip = 1714;
                continue _fun94824;
            case 1620:
                var55 = parseFloat(var39);
                var42 = var55 + 1;
                var54 = var25 & var54;
                var38[var55] = var54;
                var45 = var53;
                var44 = var51;
                var43 = var50;
                var49 = var16;
                var48 = var15;
                var47 = var14;
                var46 = var1;
            case 1655:
                var10 = var45;
                var7 = var42;
                var4 = var44;
                var3 = var43;
                if (!(var45 < var12)) {
                    _fun94824_ip = 1714;
                    continue _fun94824
                }
            case 1671:
                var41 = var45;
                var39 = var42;
                var31 = var44;
                var30 = var43;
                var16 = var49;
                var15 = var48;
                var14 = var47;
                var1 = var46;
                var10 = var41;
                var4 = var31;
                var3 = var30;
                var7 = var39;
                if (var7 < var9) {
                    _fun94824_ip = 212;
                    continue _fun94824
                }
            case 1714:
                var1 = var3 >> var13;
                var10 = var10 - var1;
                var1 = var1 << var13;
                var1 = var3 - var1;
                var6.next_in = var10;
                var6.next_out = var7;
                if (!(!(var10 < var12))) {
                    _fun94824_ip = 1756;
                    continue _fun94824
                }
            case 1746:
                var3 = var10 - var12;
                var3 = var11 - var3;
                _fun94824_ip = 1764;
                continue _fun94824;
            case 1756:
                var10 = var12 - var10;
                var3 = var10 + var11;
            case 1764:
                var6.avail_in = var3;
                if (!(!(var7 < var9))) {
                    _fun94824_ip = 1784;
                    continue _fun94824
                }
            case 1774:
                var3 = var7 - var9;
                var3 = var8 - var3;
                _fun94824_ip = 1792;
                continue _fun94824;
            case 1784:
                var7 = var9 - var7;
                var3 = var7 + var8;
            case 1792:
                var6.avail_out = var3;
                var3 = var5 << var1;
                var3 = var3 - var5;
                var3 = var4 & var3;
                var2.hold = var3;
                var2.bits = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);