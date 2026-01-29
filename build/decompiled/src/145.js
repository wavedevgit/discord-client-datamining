// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1) { // Original name: defaultDiffer, environment: var0
        _fun2338: for (var _fun2338_ip = 0;;) switch (_fun2338_ip) {
            case 0:
                var5 = arg1;
                var1 = 'object';
                var0 = typeof var5;
                var0 = var1 !== var0;
                if (var0) {
                    _fun2338_ip = 23;
                    continue _fun2338
                }
            case 17:
                var1 = null;
                var0 = var1 === var5;
            case 23:
                if (var0) {
                    _fun2338_ip = 64;
                    continue _fun2338
                }
            case 26:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = arg0;
                var0 = var3.bind(var4)(var1, var5, var2);
            case 64:
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: restoreDeletedValuesInNestedArray, environment: var0
        _fun2339: for (var _fun2339_ip = 0;;) switch (_fun2339_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var5 = arg2;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var6);
                if (var0) {
                    _fun2339_ip = 251;
                    continue _fun2339
                }
            case 33:
                if (!var6) {
                    _fun2339_ip = 312;
                    continue _fun2339
                }
            case 39:
                var1 = _closure1_slot4;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun2339_ip = 312;
                    continue _fun2339
                }
            case 55:
                var14 = _closure1_slot3;
                var10 = undefined;
                var9 = false;
                var8 = 'function';
                var4 = 'object';
                var1 = undefined;
                var0 = undefined;
                for (var11 in var14)
                    case 86: {
                        case 98: var20 = var11;
                        var17 = _closure1_slot3;
                        var17 = var17[var20];
                        if (!var17) {
                            _fun2339_ip = 86;
                            continue _fun2339
                        }
                        case 112: var18 = var6[var20];
                        var1 = var18;
                        if (var10 === var18) {
                            _fun2339_ip = 86;
                            continue _fun2339
                        }
                        case 123: var17 = var5[var20];
                        var1 = var18;
                        var0 = var17;
                        if (!var17) {
                            _fun2339_ip = 86;
                            continue _fun2339
                        }
                        case 136: var19 = typeof var18;
                        if (!(var8 === var19)) {
                            _fun2339_ip = 145;
                            continue _fun2339
                        }
                        case 143: var18 = true;
                        case 145: if (!(var10 === var18)) {
                            _fun2339_ip = 151;
                            continue _fun2339
                        }
                        case 149: var18 = null;
                        case 151: var19 = typeof var17;
                        if (!(var4 === var19)) {
                            _fun2339_ip = 217;
                            continue _fun2339
                        }
                        case 158: var19 = var17.diff;
                        var19 = typeof var19;
                        if (!(var8 !== var19)) {
                            _fun2339_ip = 184;
                            continue _fun2339
                        }
                        case 171: var19 = var17.process;
                        var19 = typeof var19;
                        if (!(var8 === var19)) {
                            _fun2339_ip = 221;
                            continue _fun2339
                        }
                        case 184: var19 = var17.process;
                        var21 = typeof var19;
                        var19 = var18;
                        if (!(var8 === var21)) {
                            _fun2339_ip = 211;
                            continue _fun2339
                        }
                        case 200: var21 = var17.process;
                        var19 = var21.bind(var17)(var18);
                        case 211: var7[var20] = var19;
                        _fun2339_ip = 221;
                        continue _fun2339;
                        case 217: var7[var20] = var18;
                        case 221: var19 = _closure1_slot3;
                        var19[var20] = var9;
                        var19 = _closure1_slot4;
                        var19 = var19 - 1;
                        _closure1_slot4 = var19;
                        var1 = var18;
                        var0 = var17;
                        _fun2339_ip = 86;
                        continue _fun2339;
                        case 251: var0 = var6.length;
                        var0 = parseFloat(var0);
                        var4 = var0 - 1;
                        if (!var0) {
                            _fun2339_ip = 312;
                            continue _fun2339
                        }
                        case 265: var0 = _closure1_slot4;
                        var2 = 0;
                        var1 = undefined;
                        if (!(var0 > var2)) {
                            _fun2339_ip = 312;
                            continue _fun2339
                        }
                        case 280: var8 = _closure1_slot7;
                        var0 = var6[var4];
                        var0 = var8.bind(var1)(var7, var0, var5);
                        var0 = parseFloat(var4);
                        var4 = var0 - 1;
                        if (!var0) {
                            _fun2339_ip = 312;
                            continue _fun2339
                        }
                        case 304: var0 = _closure1_slot4;
                        if (var0 > var2) {
                            _fun2339_ip = 280;
                            continue _fun2339
                        }
                    }
            case 312:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: diffNestedProperty, environment: var0
        _fun2340: for (var _fun2340_ip = 0;;) switch (_fun2340_ip) {
            case 0:
                var4 = arg0;
                var13 = arg1;
                var11 = arg2;
                var10 = arg3;
                if (var4) {
                    _fun2340_ip = 25;
                    continue _fun2340
                }
            case 15:
                var0 = var4;
                if (!(var13 !== var11)) {
                    _fun2340_ip = 487;
                    continue _fun2340
                }
            case 25:
                if (!var13) {
                    _fun2340_ip = 31;
                    continue _fun2340
                }
            case 28:
                if (var11) {
                    _fun2340_ip = 79;
                    continue _fun2340
                }
            case 31:
                if (var11) {
                    _fun2340_ip = 58;
                    continue _fun2340
                }
            case 34:
                var1 = var4;
                if (!var13) {
                    _fun2340_ip = 56;
                    continue _fun2340
                }
            case 40:
                var3 = _closure1_slot9;
                var2 = undefined;
                var1 = var3.bind(var2)(var4, var13, var10);
            case 56:
                _fun2340_ip = 74;
                continue _fun2340;
            case 58:
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = var3.bind(var2)(var4, var11, var10);
            case 74:
                _fun2340_ip = 484;
                continue _fun2340;
            case 79:
                var3 = global;
                var5 = var3.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var13);
                if (var2) {
                    _fun2340_ip = 149;
                    continue _fun2340
                }
            case 100:
                var5 = var3.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var11);
                if (var2) {
                    _fun2340_ip = 149;
                    continue _fun2340
                }
            case 119:
                var5 = _closure1_slot10;
                var21 = undefined;
                var20 = var4;
                var19 = var13;
                var18 = var11;
                var17 = var10;
                var2 = var21[var5](var20, var19, var18, var17, var16);
                _fun2340_ip = 481;
                continue _fun2340;
            case 149:
                var6 = var3.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var13);
                if (!var5) {
                    _fun2340_ip = 187;
                    continue _fun2340
                }
            case 168:
                var6 = var3.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var11);
                if (var5) {
                    _fun2340_ip = 282;
                    continue _fun2340
                }
            case 187:
                var5 = var3.Array;
                var3 = var5.isArray;
                var3 = var3.bind(var5)(var13);
                var7 = _closure1_slot10;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 1;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var8.bind(var6)(var5);
                if (var3) {
                    _fun2340_ip = 257;
                    continue _fun2340
                }
            case 235:
                var18 = var5.bind(var6)(var11);
                var21 = undefined;
                var20 = var4;
                var19 = var13;
                var17 = var10;
                var3 = var21[var7](var20, var19, var18, var17, var16);
                _fun2340_ip = 277;
                continue _fun2340;
            case 257:
                var19 = var5.bind(var6)(var13);
                var21 = undefined;
                var20 = var4;
                var18 = var11;
                var17 = var10;
                var3 = var21[var7](var20, var19, var18, var17, var16);
            case 277:
                _fun2340_ip = 478;
                continue _fun2340;
            case 282:
                var6 = var13.length;
                var5 = var11.length;
                if (!(!(var6 < var5))) {
                    _fun2340_ip = 303;
                    continue _fun2340
                }
            case 296:
                var12 = var11.length;
                _fun2340_ip = 308;
                continue _fun2340;
            case 303:
                var12 = var13.length;
            case 308:
                var7 = 0;
                var14 = var7 < var12;
                var8 = undefined;
                var6 = var4;
                var5 = 0;
                var4 = var6;
                if (!var14) {
                    _fun2340_ip = 367;
                    continue _fun2340
                }
            case 330:
                var16 = _closure1_slot8;
                var19 = var13[var5];
                var18 = var11[var5];
                var21 = undefined;
                var20 = var6;
                var17 = var10;
                var6 = var21[var16](var20, var19, var18, var17, var16);
                var5 = var5 + 1;
                var4 = var6;
                var7 = var5;
                if (var7 < var12) {
                    _fun2340_ip = 330;
                    continue _fun2340
                }
            case 367:
                var5 = var13.length;
                var12 = var4;
                var6 = var7;
                var4 = var12;
                var7 = var6;
                if (!(var7 < var5)) {
                    _fun2340_ip = 421;
                    continue _fun2340
                }
            case 388:
                var14 = _closure1_slot9;
                var5 = var13[var6];
                var12 = var14.bind(var8)(var12, var5, var10);
                var6 = var6 + 1;
                var5 = var13.length;
                var4 = var12;
                var7 = var6;
                if (var7 < var5) {
                    _fun2340_ip = 388;
                    continue _fun2340
                }
            case 421:
                var5 = var11.length;
                var6 = var4;
                var4 = var6;
                if (!(var7 < var5)) {
                    _fun2340_ip = 475;
                    continue _fun2340
                }
            case 436:
                var13 = var11[var7];
                var12 = var6;
                if (!var13) {
                    _fun2340_ip = 457;
                    continue _fun2340
                }
            case 446:
                var5 = _closure1_slot11;
                var12 = var5.bind(var8)(var6, var13, var10);
            case 457:
                var7 = var7 + 1;
                var5 = var11.length;
                var6 = var12;
                var4 = var6;
                if (var7 < var5) {
                    _fun2340_ip = 436;
                    continue _fun2340
                }
            case 475:
                var3 = var4;
            case 478:
                var2 = var3;
            case 481:
                var1 = var2;
            case 484:
                var0 = var1;
            case 487:
                return var0;
        }
    };
    var _closure1_slot8 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: clearNestedProperty, environment: var0
        _fun2341: for (var _fun2341_ip = 0;;) switch (_fun2341_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var6 = arg2;
                if (var7) {
                    _fun2341_ip = 14;
                    continue _fun2341
                }
            case 12:
                return var0;
            case 14:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var7);
                if (var1) {
                    _fun2341_ip = 63;
                    continue _fun2341
                }
            case 35:
                var3 = _closure1_slot10;
                var10 = _closure1_slot2;
                var13 = undefined;
                var12 = var0;
                var11 = var7;
                var9 = var6;
                var1 = var13[var3](var12, var11, var10, var9, var8);
                return var1;
            case 63:
                var1 = var7.length;
                var5 = 0;
                var1 = var5 < var1;
                var3 = undefined;
                var2 = var0;
                var0 = var2;
                if (!var1) {
                    _fun2341_ip = 118;
                    continue _fun2341
                }
            case 88:
                var8 = _closure1_slot9;
                var1 = var7[var5];
                var2 = var8.bind(var3)(var2, var1, var6);
                var5 = var5 + 1;
                var1 = var7.length;
                var0 = var2;
                if (var5 < var1) {
                    _fun2341_ip = 88;
                    continue _fun2341
                }
            case 118:
                return var0;
        }
    };
    var _closure1_slot9 = var2;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: diffProperties, environment: var0
        _fun2342: for (var _fun2342_ip = 0;;) switch (_fun2342_ip) {
            case 0:
                var5 = arg0;
                var17 = arg1;
                var16 = arg2;
                var15 = arg3;
                var22 = var16;
                var14 = undefined;
                var13 = 'function';
                var12 = 'object';
                var10 = null;
                var18 = 0;
                var6 = false;
                var9 = true;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                var0 = var5;
                var8 = undefined;
                var7 = undefined;
                for (var19 in var22)
                    case 62: {
                        var27 = var5;
                        var8 = var4;
                        var0 = var27;
                        var7 = var2;
                        case 86: var28 = var19;
                        var26 = var15[var28];
                        var5 = var27;
                        var4 = var26;
                        if (!var26) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 102: var24 = var17[var28];
                        var31 = var16[var28];
                        var29 = typeof var31;
                        var25 = var31;
                        var30 = var24;
                        if (!(var13 === var29)) {
                            _fun2342_ip = 169;
                            continue _fun2342
                        }
                        case 123: var29 = typeof var26;
                        var29 = var12 === var29;
                        if (!var29) {
                            _fun2342_ip = 146;
                            continue _fun2342
                        }
                        case 133: var32 = var26.process;
                        var32 = typeof var32;
                        var29 = var13 === var32;
                        case 146: var25 = var31;
                        var30 = var24;
                        if (var29) {
                            _fun2342_ip = 169;
                            continue _fun2342
                        }
                        case 155: var29 = typeof var24;
                        if (!(var13 === var29)) {
                            _fun2342_ip = 164;
                            continue _fun2342
                        }
                        case 162: var24 = true;
                        case 164: var30 = var24;
                        var25 = true;
                        case 169: var24 = var30;
                        if (!(var14 === var25)) {
                            _fun2342_ip = 190;
                            continue _fun2342
                        }
                        case 176: var29 = var30;
                        if (!(var14 === var30)) {
                            _fun2342_ip = 185;
                            continue _fun2342
                        }
                        case 183: var29 = null;
                        case 185: var24 = var29;
                        var25 = null;
                        case 190: var29 = _closure1_slot3;
                        if (!var29) {
                            _fun2342_ip = 205;
                            continue _fun2342
                        }
                        case 197: var29 = _closure1_slot3;
                        var29[var28] = var6;
                        case 205: if (!var27) {
                            _fun2342_ip = 219;
                            continue _fun2342
                        }
                        case 208: var29 = var27[var28];
                        if (!(var14 === var29)) {
                            _fun2342_ip = 549;
                            continue _fun2342
                        }
                        case 219: var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        if (var24 === var25) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 238: var29 = typeof var26;
                        if (!(var12 === var29)) {
                            _fun2342_ip = 489;
                            continue _fun2342
                        }
                        case 248: var29 = var26.diff;
                        var29 = typeof var29;
                        if (!(var13 !== var29)) {
                            _fun2342_ip = 368;
                            continue _fun2342
                        }
                        case 261: var29 = var26.process;
                        var29 = typeof var29;
                        if (!(var13 !== var29)) {
                            _fun2342_ip = 368;
                            continue _fun2342
                        }
                        case 274: _closure1_slot3 = var10;
                        _closure1_slot4 = var18;
                        var29 = _closure1_slot8;
                        var37 = undefined;
                        var36 = var27;
                        var35 = var24;
                        var34 = var25;
                        var33 = var26;
                        var29 = var37[var29](var36, var35, var34, var33, var32);
                        var30 = _closure1_slot4;
                        var30 = var30 > var18;
                        if (!var30) {
                            _fun2342_ip = 318;
                            continue _fun2342
                        }
                        case 315: var30 = var29;
                        case 318: var5 = var29;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        if (!var30) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 336: var30 = _closure1_slot7;
                        var30 = var30.bind(var14)(var29, var25, var26);
                        _closure1_slot3 = var10;
                        var5 = var29;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        _fun2342_ip = 62;
                        continue _fun2342;
                        case 368: if (!(var14 !== var24)) {
                            _fun2342_ip = 427;
                            continue _fun2342
                        }
                        case 372: var29 = var26.diff;
                        var29 = typeof var29;
                        if (!(var13 !== var29)) {
                            _fun2342_ip = 397;
                            continue _fun2342
                        }
                        case 385: var29 = _closure1_slot6;
                        var29 = var29.bind(var14)(var24, var25);
                        _fun2342_ip = 409;
                        continue _fun2342;
                        case 397: var30 = var26.diff;
                        var29 = var30.bind(var26)(var24, var25);
                        case 409: var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        if (!var29) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 427: var29 = var26.process;
                        var30 = typeof var29;
                        var29 = var25;
                        if (!(var13 === var30)) {
                            _fun2342_ip = 454;
                            continue _fun2342
                        }
                        case 443: var30 = var26.process;
                        var29 = var30.bind(var26)(var25);
                        case 454: var30 = var27;
                        var5 = var30;
                        if (var27) {
                            _fun2342_ip = 468;
                            continue _fun2342
                        }
                        case 463: var30 = {};
                        var5 = var30;
                        case 468: var30[var28] = var29;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        var1 = var29;
                        _fun2342_ip = 62;
                        continue _fun2342;
                        case 489: var29 = _closure1_slot6;
                        var29 = var29.bind(var14)(var24, var25);
                        var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        if (!var29) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 517: var29 = var27;
                        var5 = var29;
                        if (var27) {
                            _fun2342_ip = 531;
                            continue _fun2342
                        }
                        case 526: var29 = {};
                        var5 = var29;
                        case 531: var29[var28] = var25;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        _fun2342_ip = 62;
                        continue _fun2342;
                        case 549: var29 = typeof var26;
                        if (!(var12 === var29)) {
                            _fun2342_ip = 645;
                            continue _fun2342
                        }
                        case 556: var29 = var26.diff;
                        var29 = typeof var29;
                        if (!(var13 !== var29)) {
                            _fun2342_ip = 597;
                            continue _fun2342
                        }
                        case 569: var29 = var26.process;
                        var29 = typeof var29;
                        var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        if (var13 !== var29) {
                            _fun2342_ip = 62;
                            continue _fun2342
                        }
                        case 597: var29 = var26.process;
                        var30 = typeof var29;
                        var29 = var25;
                        if (!(var13 === var30)) {
                            _fun2342_ip = 624;
                            continue _fun2342
                        }
                        case 613: var30 = var26.process;
                        var29 = var30.bind(var26)(var25);
                        case 624: var27[var28] = var29;
                        var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        _fun2342_ip = 62;
                        continue _fun2342;
                        case 645: var27[var28] = var25;
                        var5 = var27;
                        var4 = var26;
                        var3 = var25;
                        var2 = var24;
                        _fun2342_ip = 62;
                        continue _fun2342;
                    }
            case 666:
                var5 = var17;
                var1 = var0;
                var0 = var1;
                for (var2 in var5)
                    case 686: {
                        var26 = var1;
                        var18 = var7;
                        var0 = var26;
                        case 707: var25 = var2;
                        var19 = var16[var25];
                        var20 = var14 === var19;
                        if (!var20) {
                            _fun2342_ip = 728;
                            continue _fun2342
                        }
                        case 721: var20 = var15[var25];
                        var8 = var20;
                        case 728: var19 = var8;
                        var1 = var26;
                        var8 = var19;
                        var7 = var18;
                        if (!var20) {
                            _fun2342_ip = 686;
                            continue _fun2342
                        }
                        case 743: var20 = var26;
                        if (!var26) {
                            _fun2342_ip = 757;
                            continue _fun2342
                        }
                        case 749: var21 = var26[var25];
                        var20 = var14 !== var21;
                        case 757: var1 = var26;
                        if (var20) {
                            _fun2342_ip = 899;
                            continue _fun2342
                        }
                        case 766: var20 = var17[var25];
                        var21 = var26;
                        if (!(var14 !== var20)) {
                            _fun2342_ip = 893;
                            continue _fun2342
                        }
                        case 777: var22 = typeof var19;
                        if (!(var12 === var22)) {
                            _fun2342_ip = 823;
                            continue _fun2342
                        }
                        case 784: var22 = var19.diff;
                        var22 = typeof var22;
                        if (!(var13 !== var22)) {
                            _fun2342_ip = 823;
                            continue _fun2342
                        }
                        case 797: var22 = var19.process;
                        var22 = typeof var22;
                        if (!(var13 !== var22)) {
                            _fun2342_ip = 823;
                            continue _fun2342
                        }
                        case 810: var22 = _closure1_slot9;
                        var22 = var22.bind(var14)(var26, var20, var19);
                        _fun2342_ip = 890;
                        continue _fun2342;
                        case 823: var24 = var26;
                        var23 = var24;
                        if (var26) {
                            _fun2342_ip = 837;
                            continue _fun2342
                        }
                        case 832: var24 = {};
                        var23 = var24;
                        case 837: var24[var25] = var10;
                        var24 = _closure1_slot3;
                        if (var24) {
                            _fun2342_ip = 854;
                            continue _fun2342
                        }
                        case 848: var24 = {};
                        _closure1_slot3 = var24;
                        case 854: var24 = _closure1_slot3;
                        var24 = var24[var25];
                        var22 = var23;
                        if (var24) {
                            _fun2342_ip = 890;
                            continue _fun2342
                        }
                        case 868: var24 = _closure1_slot3;
                        var24[var25] = var9;
                        var24 = _closure1_slot4;
                        var24 = var24 + 1;
                        _closure1_slot4 = var24;
                        var22 = var23;
                        case 890: var21 = var22;
                        case 893: var1 = var21;
                        var18 = var20;
                        case 899: var7 = var18;
                        var8 = var19;
                        _fun2342_ip = 686;
                        continue _fun2342;
                    }
            case 910:
                return var0;
        }
    };
    var _closure1_slot10 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: addNestedProperty, environment: var0
        _fun2343: for (var _fun2343_ip = 0;;) switch (_fun2343_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var6 = arg2;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var7);
                if (var1) {
                    _fun2343_ip = 246;
                    continue _fun2343
                }
            case 33:
                var14 = var7;
                var10 = undefined;
                var8 = null;
                var5 = 'function';
                var4 = 'object';
                var3 = var0;
                var2 = undefined;
                var1 = var3;
                for (var11 in var14)
                    case 70: {
                        var20 = var3;
                        var1 = var20;
                        case 88: var17 = var11;
                        var19 = var7[var17];
                        var18 = var6[var17];
                        var3 = var20;
                        if (var8 == var18) {
                            _fun2343_ip = 70;
                            continue _fun2343
                        }
                        case 106: if (!(var10 !== var19)) {
                            _fun2343_ip = 178;
                            continue _fun2343
                        }
                        case 110: var16 = typeof var18;
                        if (!(var4 !== var16)) {
                            _fun2343_ip = 132;
                            continue _fun2343
                        }
                        case 117: var16 = typeof var19;
                        var16 = var5 === var16;
                        if (var16) {
                            _fun2343_ip = 130;
                            continue _fun2343
                        }
                        case 127: var16 = var19;
                        case 130: _fun2343_ip = 201;
                        continue _fun2343;
                        case 132: var21 = var18.process;
                        var21 = typeof var21;
                        if (!(var5 !== var21)) {
                            _fun2343_ip = 165;
                            continue _fun2343
                        }
                        case 145: var21 = var18.diff;
                        var21 = typeof var21;
                        var16 = undefined;
                        if (!(var5 === var21)) {
                            _fun2343_ip = 201;
                            continue _fun2343
                        }
                        case 160: var16 = var19;
                        _fun2343_ip = 201;
                        continue _fun2343;
                        case 165: var21 = var18.process;
                        var16 = var21.bind(var18)(var19);
                        _fun2343_ip = 201;
                        continue _fun2343;
                        case 178: var3 = var20;
                        var2 = undefined;
                        if (!var20) {
                            _fun2343_ip = 70;
                            continue _fun2343
                        }
                        case 186: var21 = var20[var17];
                        var3 = var20;
                        var2 = undefined;
                        var16 = null;
                        if (var10 === var21) {
                            _fun2343_ip = 70;
                            continue _fun2343
                        }
                        case 201: if (!(var10 !== var16)) {
                            _fun2343_ip = 225;
                            continue _fun2343
                        }
                        case 205: var3 = var20;
                        if (var20) {
                            _fun2343_ip = 213;
                            continue _fun2343
                        }
                        case 211: var3 = {};
                        case 213: var3[var17] = var16;
                        var2 = var16;
                        _fun2343_ip = 70;
                        continue _fun2343;
                        case 225: var17 = _closure1_slot11;
                        var3 = var17.bind(var10)(var20, var19, var18);
                        var2 = var16;
                        _fun2343_ip = 70;
                        continue _fun2343;
                    }
            case 244:
                return var1;
            case 246:
                var1 = var7.length;
                var5 = 0;
                var1 = var5 < var1;
                var3 = undefined;
                var2 = var0;
                var0 = var2;
                if (!var1) {
                    _fun2343_ip = 301;
                    continue _fun2343
                }
            case 271:
                var8 = _closure1_slot11;
                var1 = var7[var5];
                var2 = var8.bind(var3)(var2, var1, var6);
                var5 = var5 + 1;
                var1 = var7.length;
                var0 = var2;
                if (var5 < var1) {
                    _fun2343_ip = 271;
                    continue _fun2343
                }
            case 301:
                return var0;
        }
    };
    var _closure1_slot11 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var1, var2, var4);
    var2 = {};
    var _closure1_slot2 = var2;
    var2 = null;
    var _closure1_slot3 = var2;
    var2 = 0;
    var _closure1_slot4 = var2;
    var2 = {};
    var2.unsafelyIgnoreFunctions = var3;
    var _closure1_slot5 = var2;
    var2 = function(arg0, arg1) { // Original name: create, environment: var0
        var4 = _closure1_slot11;
        var3 = undefined;
        var2 = null;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var1.create = var2;
    var0 = function(arg0, arg1, arg2) { // Original name: diff, environment: var0
        var5 = _closure1_slot10;
        var10 = undefined;
        var9 = null;
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.diff = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [146, 147]);