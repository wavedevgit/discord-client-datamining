// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1) { // Original name: err, environment: var0
        var0 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1[var0];
        var1 = arg0;
        var1.msg = var2;
        return var0;
    };
    var _closure1_slot3 = var2;
    var2 = function(arg0) { // Original name: rank, environment: var0
        _fun94744: for (var _fun94744_ip = 0;;) switch (_fun94744_ip) {
            case 0:
                var2 = arg0;
                var0 = 1;
                var1 = var2 << var0;
                var0 = 4;
                var2 = var2 > var0;
                var0 = 0;
                if (!var2) {
                    _fun94744_ip = 25;
                    continue _fun94744
                }
            case 22:
                var0 = 9;
            case 25:
                var0 = var1 - var0;
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function(arg0) { // Original name: zero, environment: var0
        _fun94745: for (var _fun94745_ip = 0;;) switch (_fun94745_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.length;
                var1 = var0 - 1;
                var0 = 0;
                if (!(var1 >= var0)) {
                    _fun94745_ip = 28;
                    continue _fun94745
                }
            case 17:
                var2[var1] = var0;
                var1 = var1 - 1;
                if (var1 >= var0) {
                    _fun94745_ip = 17;
                    continue _fun94745
                }
            case 28:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = function(arg0) { // Original name: flush_pending, environment: var0
        _fun94746: for (var _fun94746_ip = 0;;) switch (_fun94746_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.state;
                var3 = var1.pending;
                var0 = var4.avail_out;
                if (!(var3 > var0)) {
                    _fun94746_ip = 30;
                    continue _fun94746
                }
            case 24:
                var3 = var4.avail_out;
            case 30:
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun94746_ip = 200;
                    continue _fun94746
                }
            case 39:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var5 = var5[var2];
                var2 = undefined;
                var9 = var6.bind(var2)(var5);
                var8 = var9.arraySet;
                var14 = var4.output;
                var13 = var1.pending_buf;
                var12 = var1.pending_out;
                var10 = var4.next_out;
                var15 = var9;
                var11 = var3;
                var2 = var15[var8](var14, var13, var12, var11, var10, var9);
                var2 = var4.next_out;
                var2 = var2 + var3;
                var4.next_out = var2;
                var2 = var1.pending_out;
                var2 = var2 + var3;
                var1.pending_out = var2;
                var2 = var4.total_out;
                var2 = var2 + var3;
                var4.total_out = var2;
                var2 = var4.avail_out;
                var2 = var2 - var3;
                var4.avail_out = var2;
                var2 = var1.pending;
                var2 = var2 - var3;
                var1.pending = var2;
                var2 = var1.pending;
                if (!(var0 === var2)) {
                    _fun94746_ip = 200;
                    continue _fun94746
                }
            case 194:
                var1.pending_out = var0;
            case 200:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function(arg0, arg1) { // Original name: flush_block_only, environment: var0
        _fun94747: for (var _fun94747_ip = 0;;) switch (_fun94747_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var6 = var7._tr_flush_block;
                var4 = var1.block_start;
                var3 = 0;
                var3 = var4 >= var3;
                var5 = -1;
                if (!var3) {
                    _fun94747_ip = 61;
                    continue _fun94747
                }
            case 55:
                var5 = var1.block_start;
            case 61:
                var4 = var1.strstart;
                var3 = var1.block_start;
                var9 = var4 - var3;
                var8 = arg1;
                var12 = var7;
                var11 = var1;
                var10 = var5;
                var3 = var12[var6](var11, var10, var9, var8, var7);
                var3 = var1.strstart;
                var1.block_start = var3;
                var2 = _closure1_slot6;
                var1 = var1.strm;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot7 = var2;
    var2 = function(arg0, arg1) { // Original name: put_byte, environment: var0
        var3 = arg0;
        var2 = var3.pending_buf;
        var0 = var3.pending;
        var1 = parseFloat(var0);
        var0 = var1 + 1;
        var3.pending = var0;
        var0 = arg1;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot8 = var2;
    var2 = function(arg0, arg1) { // Original name: putShortMSB, environment: var0
        var5 = arg0;
        var3 = arg1;
        var4 = var5.pending_buf;
        var0 = var5.pending;
        var2 = parseFloat(var0);
        var0 = var2 + 1;
        var5.pending = var0;
        var0 = 8;
        var1 = var3 >>> var0;
        var0 = 255;
        var1 = var1 & var0;
        var4[var2] = var1;
        var2 = var5.pending_buf;
        var1 = var5.pending;
        var1 = parseFloat(var1);
        var4 = var1 + 1;
        var5.pending = var4;
        var0 = var0 & var3;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var2;
    var2 = function(arg0, arg1) { // Original name: longest_match, environment: var0
        _fun94750: for (var _fun94750_ip = 0;;) switch (_fun94750_ip) {
            case 0:
                var1 = arg0;
                var26 = arg1;
                var3 = var1.max_chain_length;
                var23 = var1.strstart;
                var22 = var1.prev_length;
                var19 = var1.nice_match;
                var2 = var1.strstart;
                var0 = var1.w_size;
                var4 = 262;
                var0 = var0 - var4;
                var0 = var2 > var0;
                var18 = 0;
                var17 = 0;
                if (!var0) {
                    _fun94750_ip = 83;
                    continue _fun94750
                }
            case 63:
                var2 = var1.strstart;
                var0 = var1.w_size;
                var0 = var0 - var4;
                var17 = var2 - var0;
            case 83:
                var16 = var1.window;
                var15 = var1.w_mask;
                var14 = var1.prev;
                var0 = var1.strstart;
                var13 = 258;
                var12 = var0 + var13;
                var0 = var23 + var22;
                var11 = 1;
                var0 = var0 - var11;
                var20 = var16[var0];
                var0 = var23 + var22;
                var0 = var16[var0];
                var4 = var1.prev_length;
                var2 = var1.good_match;
                var24 = var3;
                if (!(var4 >= var2)) {
                    _fun94750_ip = 165;
                    continue _fun94750
                }
            case 158:
                var2 = 2;
                var24 = var3 >> var2;
            case 165:
                var2 = var1.lookahead;
                var21 = var19 > var2;
                var10 = var12 - var13;
                var9 = 2;
                var8 = var26;
                var7 = undefined;
                var6 = var24;
                var5 = var23;
                var4 = var22;
                var3 = var20;
                var2 = var0;
                if (!var21) {
                    _fun94750_ip = 231;
                    continue _fun94750
                }
            case 205:
                var19 = var1.lookahead;
                var8 = var26;
                var7 = undefined;
                var6 = var24;
                var5 = var23;
                var4 = var22;
                var3 = var20;
                var2 = var0;
            case 231:
                var0 = var8 + var4;
                var0 = var16[var0];
                var24 = var7;
                var23 = var5;
                var20 = var4;
                var22 = var3;
                var21 = var2;
                if (!(var0 === var2)) {
                    _fun94750_ip = 621;
                    continue _fun94750
                }
            case 261:
                var0 = var8 + var4;
                var0 = var0 - var11;
                var0 = var16[var0];
                var24 = var7;
                var23 = var5;
                var20 = var4;
                var22 = var3;
                var21 = var2;
                if (!(var0 === var3)) {
                    _fun94750_ip = 621;
                    continue _fun94750
                }
            case 295:
                var25 = var16[var8];
                var0 = var16[var5];
                var24 = var7;
                var23 = var5;
                var20 = var4;
                var22 = var3;
                var21 = var2;
                if (!(var25 === var0)) {
                    _fun94750_ip = 621;
                    continue _fun94750
                }
            case 325:
                var0 = var8 + 1;
                var26 = var16[var0];
                var25 = var5 + var11;
                var25 = var16[var25];
                var24 = var7;
                var23 = var5;
                var20 = var4;
                var22 = var3;
                var21 = var2;
                if (!(var26 === var25)) {
                    _fun94750_ip = 621;
                    continue _fun94750
                }
            case 362:
                var26 = var5 + var9;
                var25 = var0 + 1;
            case 369:
                var27 = var26 + 1;
                var30 = var16[var27];
                var28 = var25 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 393:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 417:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 438:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 459:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 480:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 501:
                var27 = var27 + 1;
                var30 = var16[var27];
                var28 = var28 + 1;
                var29 = var16[var28];
                var0 = var27;
                if (!(var30 === var29)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 522:
                var27 = var27 + 1;
                var29 = var16[var27];
                var25 = var28 + 1;
                var28 = var16[var25];
                var0 = var27;
                if (!(var29 === var28)) {
                    _fun94750_ip = 556;
                    continue _fun94750
                }
            case 543:
                var26 = var27;
                var0 = var26;
                if (var0 < var12) {
                    _fun94750_ip = 369;
                    continue _fun94750
                }
            case 556:
                var0 = var12 - var0;
                var27 = var13 - var0;
                var24 = var27;
                var23 = var10;
                var20 = var4;
                var22 = var3;
                var21 = var2;
                if (!(var27 > var4)) {
                    _fun94750_ip = 621;
                    continue _fun94750
                }
            case 583:
                var1.match_start = var8;
                var0 = var27;
                if (!(!(var0 >= var19))) {
                    _fun94750_ip = 664;
                    continue _fun94750
                }
            case 596:
                var25 = var10 + var27;
                var26 = var25 - var11;
                var22 = var16[var26];
                var21 = var16[var25];
                var24 = var27;
                var23 = var10;
                var20 = var24;
            case 621:
                var25 = var8 & var15;
                var8 = var14[var25];
                var0 = var20;
                if (!(var8 > var17)) {
                    _fun94750_ip = 664;
                    continue _fun94750
                }
            case 636:
                var6 = var6 - 1;
                var7 = var24;
                var5 = var23;
                var4 = var20;
                var3 = var22;
                var2 = var21;
                var0 = var4;
                if (var18 != var6) {
                    _fun94750_ip = 231;
                    continue _fun94750
                }
            case 664:
                var2 = var1.lookahead;
                if (!(!(var0 <= var2))) {
                    _fun94750_ip = 680;
                    continue _fun94750
                }
            case 674:
                var0 = var1.lookahead;
            case 680:
                return var0;
        }
    };
    var _closure1_slot10 = var2;
    var2 = function(arg0) { // Original name: fill_window, environment: var0
        _fun94751: for (var _fun94751_ip = 0;;) switch (_fun94751_ip) {
            case 0:
                var13 = arg0;
                var12 = var13.w_size;
                var0 = undefined;
                var11 = 0;
                var10 = 262;
                var9 = 3;
                var8 = 1;
                var6 = 4;
                var5 = 2;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
            case 40:
                var14 = var13.window_size;
                var1 = var13.lookahead;
                var14 = var14 - var1;
                var1 = var13.strstart;
                var1 = var14 - var1;
                var16 = var13.strstart;
                var14 = var12 - var10;
                var15 = var12 + var14;
                var14 = var1;
                if (!(var16 >= var15)) {
                    _fun94751_ip = 298;
                    continue _fun94751
                }
            case 90:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var8];
                var18 = var16.bind(var0)(var15);
                var17 = var18.arraySet;
                var26 = var13.window;
                var25 = var13.window;
                var27 = var18;
                var24 = var12;
                var23 = var12;
                var22 = 0;
                var15 = var27[var17](var26, var25, var24, var23, var22, var21);
                var15 = var13.match_start;
                var15 = var15 - var12;
                var13.match_start = var15;
                var15 = var13.strstart;
                var15 = var15 - var12;
                var13.strstart = var15;
                var15 = var13.block_start;
                var15 = var15 - var12;
                var13.block_start = var15;
                var16 = var13.hash_size;
                var15 = var16;
            case 195:
                var17 = var13.head;
                var16 = var16 - 1;
                var19 = var17[var16];
                var18 = var13.head;
                var20 = var19 >= var12;
                var17 = 0;
                if (!var20) {
                    _fun94751_ip = 227;
                    continue _fun94751
                }
            case 223:
                var17 = var19 - var12;
            case 227:
                var18[var16] = var17;
                var15 = var15 - 1;
                var18 = var12;
                var17 = var18;
                if (var15) {
                    _fun94751_ip = 195;
                    continue _fun94751
                }
            case 243:
                var15 = var13.prev;
                var16 = var18 - 1;
                var15 = var15[var16];
                var20 = var13.prev;
                var21 = var15 >= var12;
                var19 = 0;
                if (!var21) {
                    _fun94751_ip = 275;
                    continue _fun94751
                }
            case 271:
                var19 = var15 - var12;
            case 275:
                var20[var16] = var19;
                var17 = var17 - 1;
                var18 = var16;
                if (var17) {
                    _fun94751_ip = 243;
                    continue _fun94751
                }
            case 288:
                var14 = var1 + var12;
                var4 = var16;
                var3 = var15;
            case 298:
                var1 = var13.strm;
                var1 = var1.avail_in;
                if (!(var11 !== var1)) {
                    _fun94751_ip = 1067;
                    continue _fun94751
                }
            case 317:
                var16 = var13.strm;
                var19 = var13.window;
                var15 = var13.strstart;
                var1 = var13.lookahead;
                var18 = var15 + var1;
                var1 = var16.avail_in;
                if (!(var1 > var14)) {
                    _fun94751_ip = 357;
                    continue _fun94751
                }
            case 354:
                var1 = var14;
            case 357:
                var14 = 0;
                if (!(var14 !== var1)) {
                    _fun94751_ip = 588;
                    continue _fun94751
                }
            case 366:
                var15 = var16.avail_in;
                var15 = var15 - var1;
                var16.avail_in = var15;
                var17 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var8];
                var21 = var17.bind(var0)(var15);
                var20 = var21.arraySet;
                var25 = var16.input;
                var24 = var16.next_in;
                var27 = var21;
                var26 = var19;
                var23 = var1;
                var22 = var18;
                var15 = var27[var20](var26, var25, var24, var23, var22, var21);
                var15 = var16.state;
                var15 = var15.wrap;
                if (!(var8 !== var15)) {
                    _fun94751_ip = 509;
                    continue _fun94751
                }
            case 448:
                var15 = var16.state;
                var15 = var15.wrap;
                if (!(var5 === var15)) {
                    _fun94751_ip = 553;
                    continue _fun94751
                }
            case 463:
                var17 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var6];
                var17 = var17.bind(var0)(var15);
                var26 = var16.adler;
                var27 = undefined;
                var25 = var19;
                var24 = var1;
                var23 = var18;
                var15 = var27[var17](var26, var25, var24, var23, var22);
                var16.adler = var15;
                _fun94751_ip = 553;
                continue _fun94751;
            case 509:
                var17 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var9];
                var17 = var17.bind(var0)(var15);
                var26 = var16.adler;
                var27 = undefined;
                var25 = var19;
                var24 = var1;
                var23 = var18;
                var15 = var27[var17](var26, var25, var24, var23, var22);
                var16.adler = var15;
            case 553:
                var15 = var16.next_in;
                var15 = var15 + var1;
                var16.next_in = var15;
                var15 = var16.total_in;
                var15 = var15 + var1;
                var16.total_in = var15;
                var14 = var1;
            case 588:
                var1 = var13.lookahead;
                var1 = var1 + var14;
                var13.lookahead = var1;
                var14 = var13.lookahead;
                var1 = var13.insert;
                var1 = var14 + var1;
                if (!(var1 >= var9)) {
                    _fun94751_ip = 1038;
                    continue _fun94751
                }
            case 627:
                var14 = var13.strstart;
                var1 = var13.insert;
                var1 = var14 - var1;
                var14 = var13.window;
                var14 = var14[var1];
                var13.ins_h = var14;
                var15 = var13.ins_h;
                var14 = var13.hash_shift;
                var15 = var15 << var14;
                var16 = var13.window;
                var14 = var1 + var8;
                var14 = var16[var14];
                var15 = var15 ^ var14;
                var14 = var13.hash_mask;
                var14 = var15 & var14;
                var13.ins_h = var14;
                var14 = var13.insert;
                var2 = var1;
                if (!var14) {
                    _fun94751_ip = 1038;
                    continue _fun94751
                }
            case 722:
                var15 = var13.ins_h;
                var14 = var13.hash_shift;
                var15 = var15 << var14;
                var16 = var13.window;
                var14 = var1 + var9;
                var14 = var14 - var8;
                var14 = var16[var14];
                var15 = var15 ^ var14;
                var14 = var13.hash_mask;
                var14 = var15 & var14;
                var13.ins_h = var14;
                var16 = var13.prev;
                var14 = var13.w_mask;
                var15 = var1 & var14;
                var17 = var13.head;
                var14 = var13.ins_h;
                var14 = var17[var14];
                var16[var15] = var14;
                var15 = var13.head;
                var14 = var13.ins_h;
                var15[var14] = var1;
                var15 = var1 + 1;
                var1 = var13.insert;
                var1 = var1 - 1;
                var13.insert = var1;
                var14 = var13.lookahead;
                var1 = var13.insert;
                var1 = var14 + var1;
                var14 = var15;
                var2 = var14;
                if (!(!(var1 < var9))) {
                    _fun94751_ip = 1038;
                    continue _fun94751
                }
            case 874:
                var1 = var13.insert;
                var2 = var14;
                if (!var1) {
                    _fun94751_ip = 1038;
                    continue _fun94751
                }
            case 889:
                var15 = var13.ins_h;
                var1 = var13.hash_shift;
                var15 = var15 << var1;
                var16 = var13.window;
                var1 = var14 + var9;
                var1 = var1 - var8;
                var1 = var16[var1];
                var15 = var15 ^ var1;
                var1 = var13.hash_mask;
                var1 = var15 & var1;
                var13.ins_h = var1;
                var16 = var13.prev;
                var1 = var13.w_mask;
                var15 = var14 & var1;
                var17 = var13.head;
                var1 = var13.ins_h;
                var1 = var17[var1];
                var16[var15] = var1;
                var15 = var13.head;
                var1 = var13.ins_h;
                var15[var1] = var14;
                var14 = var14 + 1;
                var1 = var13.insert;
                var1 = var1 - 1;
                var13.insert = var1;
                var16 = var13.lookahead;
                var1 = var13.insert;
                var1 = var16 + var1;
                var2 = var14;
                if (!(var1 < var9)) {
                    _fun94751_ip = 874;
                    continue _fun94751
                }
            case 1038:
                var1 = var13.lookahead;
                if (!(var1 < var10)) {
                    _fun94751_ip = 1067;
                    continue _fun94751
                }
            case 1048:
                var1 = var13.strm;
                var1 = var1.avail_in;
                if (var11 !== var1) {
                    _fun94751_ip = 40;
                    continue _fun94751
                }
            case 1067:
                return var0;
        }
    };
    var _closure1_slot11 = var2;
    var14 = function(arg0, arg1) { // Original name: deflate_fast, environment: var0
        _fun94752: for (var _fun94752_ip = 0;;) switch (_fun94752_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var8 = undefined;
                var10 = false;
                var5 = 0;
                var3 = 3;
                var0 = 1;
                var9 = 2;
                var7 = 262;
            case 30:
                var2 = var4.lookahead;
                if (!(var2 < var7)) {
                    _fun94752_ip = 79;
                    continue _fun94752
                }
            case 40:
                var2 = _closure1_slot11;
                var2 = var2.bind(var8)(var4);
                var2 = var4.lookahead;
                if (!(var2 < var7)) {
                    _fun94752_ip = 66;
                    continue _fun94752
                }
            case 59:
                if (!(var5 !== var1)) {
                    _fun94752_ip = 926;
                    continue _fun94752
                }
            case 66:
                var2 = var4.lookahead;
                if (!(var5 !== var2)) {
                    _fun94752_ip = 809;
                    continue _fun94752
                }
            case 79:
                var2 = var4.lookahead;
                var2 = var2 >= var3;
                var11 = 0;
                if (!var2) {
                    _fun94752_ip = 223;
                    continue _fun94752
                }
            case 97:
                var12 = var4.ins_h;
                var2 = var4.hash_shift;
                var12 = var12 << var2;
                var13 = var4.window;
                var2 = var4.strstart;
                var2 = var2 + var3;
                var2 = var2 - var0;
                var2 = var13[var2];
                var12 = var12 ^ var2;
                var2 = var4.hash_mask;
                var2 = var12 & var2;
                var4.ins_h = var2;
                var13 = var4.prev;
                var12 = var4.strstart;
                var2 = var4.w_mask;
                var12 = var12 & var2;
                var14 = var4.head;
                var2 = var4.ins_h;
                var2 = var14[var2];
                var13[var12] = var2;
                var14 = var4.head;
                var13 = var4.ins_h;
                var12 = var4.strstart;
                var14[var13] = var12;
                var11 = var2;
            case 223:
                var2 = var5 !== var11;
                if (!var2) {
                    _fun94752_ip = 254;
                    continue _fun94752
                }
            case 230:
                var12 = var4.strstart;
                var13 = var12 - var11;
                var12 = var4.w_size;
                var12 = var12 - var7;
                var2 = var13 <= var12;
            case 254:
                if (!var2) {
                    _fun94752_ip = 273;
                    continue _fun94752
                }
            case 257:
                var2 = _closure1_slot10;
                var2 = var2.bind(var8)(var4, var11);
                var4.match_length = var2;
            case 273:
                var2 = var4.match_length;
                if (!(!(var2 >= var3))) {
                    _fun94752_ip = 363;
                    continue _fun94752
                }
            case 283:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var12 = var11.bind(var8)(var2);
                var11 = var12._tr_tally;
                var13 = var4.window;
                var2 = var4.strstart;
                var2 = var13[var2];
                var2 = var11.bind(var12)(var4, var5, var2);
                var11 = var4.lookahead;
                var11 = var11 - 1;
                var4.lookahead = var11;
                var11 = var4.strstart;
                var11 = var11 + 1;
                var4.strstart = var11;
                _fun94752_ip = 772;
                continue _fun94752;
            case 363:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var9];
                var14 = var12.bind(var8)(var11);
                var13 = var14._tr_tally;
                var12 = var4.strstart;
                var11 = var4.match_start;
                var12 = var12 - var11;
                var11 = var4.match_length;
                var11 = var11 - var3;
                var11 = var13.bind(var14)(var4, var12, var11);
                var13 = var4.lookahead;
                var12 = var4.match_length;
                var12 = var13 - var12;
                var4.lookahead = var12;
                var13 = var4.match_length;
                var12 = var4.max_lazy_match;
                if (!(var13 <= var12)) {
                    _fun94752_ip = 467;
                    continue _fun94752
                }
            case 457:
                var12 = var4.lookahead;
                if (!(!(var12 >= var3))) {
                    _fun94752_ip = 579;
                    continue _fun94752
                }
            case 467:
                var13 = var4.strstart;
                var12 = var4.match_length;
                var12 = var13 + var12;
                var4.strstart = var12;
                var4.match_length = var5;
                var13 = var4.window;
                var12 = var4.strstart;
                var12 = var13[var12];
                var4.ins_h = var12;
                var13 = var4.ins_h;
                var12 = var4.hash_shift;
                var13 = var13 << var12;
                var14 = var4.window;
                var12 = var4.strstart;
                var12 = var12 + var0;
                var12 = var14[var12];
                var13 = var13 ^ var12;
                var12 = var4.hash_mask;
                var12 = var13 & var12;
                var4.ins_h = var12;
                var2 = var11;
                _fun94752_ip = 772;
                continue _fun94752;
            case 579:
                var12 = var4.match_length;
                var12 = var12 - 1;
                var4.match_length = var12;
            case 594:
                var12 = var4.strstart;
                var12 = var12 + 1;
                var4.strstart = var12;
                var13 = var4.ins_h;
                var12 = var4.hash_shift;
                var13 = var13 << var12;
                var14 = var4.window;
                var12 = var4.strstart;
                var12 = var12 + var3;
                var12 = var12 - var0;
                var12 = var14[var12];
                var13 = var13 ^ var12;
                var12 = var4.hash_mask;
                var12 = var13 & var12;
                var4.ins_h = var12;
                var14 = var4.prev;
                var13 = var4.strstart;
                var12 = var4.w_mask;
                var13 = var13 & var12;
                var15 = var4.head;
                var12 = var4.ins_h;
                var12 = var15[var12];
                var14[var13] = var12;
                var14 = var4.head;
                var13 = var4.ins_h;
                var12 = var4.strstart;
                var14[var13] = var12;
                var12 = var4.match_length;
                var12 = var12 - 1;
                var4.match_length = var12;
                if (var5 != var12) {
                    _fun94752_ip = 594;
                    continue _fun94752
                }
            case 754:
                var12 = var4.strstart;
                var12 = var12 + 1;
                var4.strstart = var12;
                var2 = var11;
            case 772:
                if (!var2) {
                    _fun94752_ip = 30;
                    continue _fun94752
                }
            case 778:
                var2 = _closure1_slot7;
                var2 = var2.bind(var8)(var4, var10);
                var2 = var4.strm;
                var2 = var2.avail_out;
                if (var5 !== var2) {
                    _fun94752_ip = 30;
                    continue _fun94752
                }
            case 807:
                return var0;
            case 809:
                var2 = var4.strstart;
                var7 = var2 < var9;
                var2 = var9;
                if (!var7) {
                    _fun94752_ip = 831;
                    continue _fun94752
                }
            case 825:
                var2 = var4.strstart;
            case 831:
                var4.insert = var2;
                var2 = 4;
                if (!(var2 !== var1)) {
                    _fun94752_ip = 890;
                    continue _fun94752
                }
            case 844:
                var7 = var4.last_lit;
                var1 = var9;
                if (!var7) {
                    _fun94752_ip = 888;
                    continue _fun94752
                }
            case 856:
                var7 = _closure1_slot7;
                var7 = var7.bind(var8)(var4, var10);
                var7 = var4.strm;
                var7 = var7.avail_out;
                var1 = var9;
                if (!(var5 === var7)) {
                    _fun94752_ip = 888;
                    continue _fun94752
                }
            case 885:
                var1 = var0;
            case 888:
                _fun94752_ip = 924;
                continue _fun94752;
            case 890:
                var7 = _closure1_slot7;
                var6 = true;
                var6 = var7.bind(var8)(var4, var6);
                var4 = var4.strm;
                var4 = var4.avail_out;
                if (!(var5 === var4)) {
                    _fun94752_ip = 921;
                    continue _fun94752
                }
            case 918:
                var2 = var3;
            case 921:
                var1 = var2;
            case 924:
                return var1;
            case 926:
                return var0;
        }
    };
    var11 = function(arg0, arg1) { // Original name: deflate_slow, environment: var0
        _fun94753: for (var _fun94753_ip = 0;;) switch (_fun94753_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var8 = undefined;
                var10 = false;
                var5 = 0;
                var9 = 2;
                var3 = 3;
                var0 = 1;
                var14 = 4096;
                var13 = 5;
                var12 = 262;
                var11 = undefined;
                var7 = undefined;
            case 43:
                var2 = var4.lookahead;
                if (!(var2 < var12)) {
                    _fun94753_ip = 92;
                    continue _fun94753
                }
            case 53:
                var2 = _closure1_slot11;
                var2 = var2.bind(var8)(var4);
                var2 = var4.lookahead;
                if (!(var2 < var12)) {
                    _fun94753_ip = 79;
                    continue _fun94753
                }
            case 72:
                if (!(var5 !== var1)) {
                    _fun94753_ip = 1156;
                    continue _fun94753
                }
            case 79:
                var2 = var4.lookahead;
                if (!(var5 !== var2)) {
                    _fun94753_ip = 975;
                    continue _fun94753
                }
            case 92:
                var2 = var4.lookahead;
                var15 = var2 >= var3;
                var2 = 0;
                if (!var15) {
                    _fun94753_ip = 236;
                    continue _fun94753
                }
            case 110:
                var16 = var4.ins_h;
                var15 = var4.hash_shift;
                var16 = var16 << var15;
                var17 = var4.window;
                var15 = var4.strstart;
                var15 = var15 + var3;
                var15 = var15 - var0;
                var15 = var17[var15];
                var16 = var16 ^ var15;
                var15 = var4.hash_mask;
                var15 = var16 & var15;
                var4.ins_h = var15;
                var17 = var4.prev;
                var16 = var4.strstart;
                var15 = var4.w_mask;
                var16 = var16 & var15;
                var18 = var4.head;
                var15 = var4.ins_h;
                var15 = var18[var15];
                var17[var16] = var15;
                var18 = var4.head;
                var17 = var4.ins_h;
                var16 = var4.strstart;
                var18[var17] = var16;
                var2 = var15;
            case 236:
                var15 = var4.match_length;
                var4.prev_length = var15;
                var15 = var4.match_start;
                var4.prev_match = var15;
                var4.match_length = var9;
                var15 = var5 !== var2;
                if (!var15) {
                    _fun94753_ip = 289;
                    continue _fun94753
                }
            case 273:
                var17 = var4.prev_length;
                var16 = var4.max_lazy_match;
                var15 = var17 < var16;
            case 289:
                if (!var15) {
                    _fun94753_ip = 316;
                    continue _fun94753
                }
            case 292:
                var16 = var4.strstart;
                var17 = var16 - var2;
                var16 = var4.w_size;
                var16 = var16 - var12;
                var15 = var17 <= var16;
            case 316:
                if (!var15) {
                    _fun94753_ip = 409;
                    continue _fun94753
                }
            case 319:
                var15 = _closure1_slot10;
                var15 = var15.bind(var8)(var4, var2);
                var4.match_length = var15;
                var15 = var4.match_length;
                var15 = var15 <= var13;
                if (!var15) {
                    _fun94753_ip = 400;
                    continue _fun94753
                }
            case 348:
                var16 = var4.strategy;
                var16 = var0 === var16;
                if (var16) {
                    _fun94753_ip = 397;
                    continue _fun94753
                }
            case 361:
                var17 = var4.match_length;
                var17 = var3 === var17;
                if (!var17) {
                    _fun94753_ip = 394;
                    continue _fun94753
                }
            case 374:
                var19 = var4.strstart;
                var18 = var4.match_start;
                var18 = var19 - var18;
                var17 = var18 > var14;
            case 394:
                var16 = var17;
            case 397:
                var15 = var16;
            case 400:
                if (!var15) {
                    _fun94753_ip = 409;
                    continue _fun94753
                }
            case 403:
                var4.match_length = var9;
            case 409:
                var15 = var4.prev_length;
                if (!(var15 >= var3)) {
                    _fun94753_ip = 438;
                    continue _fun94753
                }
            case 419:
                var16 = var4.match_length;
                var15 = var4.prev_length;
                if (!(!(var16 <= var15))) {
                    _fun94753_ip = 604;
                    continue _fun94753
                }
            case 438:
                var15 = var4.match_available;
                if (var15) {
                    _fun94753_ip = 488;
                    continue _fun94753
                }
            case 447:
                var4.match_available = var0;
                var15 = var4.strstart;
                var15 = var15 + 1;
                var4.strstart = var15;
                var15 = var4.lookahead;
                var15 = var15 - 1;
                var4.lookahead = var15;
                _fun94753_ip = 43;
                continue _fun94753;
            case 488:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var9];
                var17 = var16.bind(var8)(var15);
                var16 = var17._tr_tally;
                var18 = var4.window;
                var15 = var4.strstart;
                var15 = var15 - var0;
                var15 = var18[var15];
                var16 = var16.bind(var17)(var4, var5, var15);
                if (!var16) {
                    _fun94753_ip = 550;
                    continue _fun94753
                }
            case 540:
                var15 = _closure1_slot7;
                var15 = var15.bind(var8)(var4, var10);
            case 550:
                var15 = var4.strstart;
                var15 = var15 + 1;
                var4.strstart = var15;
                var15 = var4.lookahead;
                var15 = var15 - 1;
                var4.lookahead = var15;
                var15 = var4.strm;
                var15 = var15.avail_out;
                var11 = var16;
                if (var5 !== var15) {
                    _fun94753_ip = 43;
                    continue _fun94753
                }
            case 602:
                return var0;
            case 604:
                var16 = var4.strstart;
                var15 = var4.lookahead;
                var15 = var16 + var15;
                var15 = var15 - var3;
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var9];
                var19 = var17.bind(var8)(var16);
                var18 = var19._tr_tally;
                var16 = var4.strstart;
                var17 = var16 - var0;
                var16 = var4.prev_match;
                var17 = var17 - var16;
                var16 = var4.prev_length;
                var16 = var16 - var3;
                var16 = var18.bind(var19)(var4, var17, var16);
                var18 = var4.lookahead;
                var17 = var4.prev_length;
                var17 = var17 - var0;
                var17 = var18 - var17;
                var4.lookahead = var17;
                var17 = var4.prev_length;
                var17 = var17 - var9;
                var4.prev_length = var17;
                var17 = var2;
            case 729:
                var2 = var4.strstart;
                var2 = var2 + 1;
                var4.strstart = var2;
                if (!(var2 <= var15)) {
                    _fun94753_ip = 877;
                    continue _fun94753
                }
            case 751:
                var18 = var4.ins_h;
                var2 = var4.hash_shift;
                var18 = var18 << var2;
                var19 = var4.window;
                var2 = var4.strstart;
                var2 = var2 + var3;
                var2 = var2 - var0;
                var2 = var19[var2];
                var18 = var18 ^ var2;
                var2 = var4.hash_mask;
                var2 = var18 & var2;
                var4.ins_h = var2;
                var19 = var4.prev;
                var18 = var4.strstart;
                var2 = var4.w_mask;
                var18 = var18 & var2;
                var20 = var4.head;
                var2 = var4.ins_h;
                var2 = var20[var2];
                var19[var18] = var2;
                var20 = var4.head;
                var19 = var4.ins_h;
                var18 = var4.strstart;
                var20[var19] = var18;
                var17 = var2;
            case 877:
                var2 = var4.prev_length;
                var2 = var2 - 1;
                var4.prev_length = var2;
                if (var5 != var2) {
                    _fun94753_ip = 729;
                    continue _fun94753
                }
            case 899:
                var4.match_available = var5;
                var4.match_length = var9;
                var2 = var4.strstart;
                var2 = var2 + 1;
                var4.strstart = var2;
                var7 = var15;
                var11 = var16;
                if (!var11) {
                    _fun94753_ip = 43;
                    continue _fun94753
                }
            case 938:
                var2 = _closure1_slot7;
                var2 = var2.bind(var8)(var4, var10);
                var2 = var4.strm;
                var2 = var2.avail_out;
                var11 = var16;
                var7 = var15;
                if (var5 !== var2) {
                    _fun94753_ip = 43;
                    continue _fun94753
                }
            case 973:
                return var0;
            case 975:
                var2 = var4.match_available;
                if (!var2) {
                    _fun94753_ip = 1039;
                    continue _fun94753
                }
            case 984:
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var9];
                var11 = var7.bind(var8)(var2);
                var7 = var11._tr_tally;
                var12 = var4.window;
                var2 = var4.strstart;
                var2 = var2 - var0;
                var2 = var12[var2];
                var2 = var7.bind(var11)(var4, var5, var2);
                var4.match_available = var5;
            case 1039:
                var2 = var4.strstart;
                var7 = var2 < var9;
                var2 = var9;
                if (!var7) {
                    _fun94753_ip = 1061;
                    continue _fun94753
                }
            case 1055:
                var2 = var4.strstart;
            case 1061:
                var4.insert = var2;
                var2 = 4;
                if (!(var2 !== var1)) {
                    _fun94753_ip = 1120;
                    continue _fun94753
                }
            case 1074:
                var7 = var4.last_lit;
                var1 = var9;
                if (!var7) {
                    _fun94753_ip = 1118;
                    continue _fun94753
                }
            case 1086:
                var7 = _closure1_slot7;
                var7 = var7.bind(var8)(var4, var10);
                var7 = var4.strm;
                var7 = var7.avail_out;
                var1 = var9;
                if (!(var5 === var7)) {
                    _fun94753_ip = 1118;
                    continue _fun94753
                }
            case 1115:
                var1 = var0;
            case 1118:
                _fun94753_ip = 1154;
                continue _fun94753;
            case 1120:
                var7 = _closure1_slot7;
                var6 = true;
                var6 = var7.bind(var8)(var4, var6);
                var4 = var4.strm;
                var4 = var4.avail_out;
                if (!(var5 === var4)) {
                    _fun94753_ip = 1151;
                    continue _fun94753
                }
            case 1148:
                var2 = var3;
            case 1151:
                var1 = var2;
            case 1154:
                return var1;
            case 1156:
                return var0;
        }
    };
    var10 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: Config, environment: var0
        var1 = this;
        var0 = arg0;
        var1.good_length = var0;
        var0 = arg1;
        var1.max_lazy = var0;
        var0 = arg2;
        var1.nice_length = var0;
        var0 = arg3;
        var1.max_chain = var0;
        var0 = arg4;
        var1.func = var0;
        var0 = undefined;
        return var0;
    };
    var2 = function() { // Original name: DeflateState, environment: var0
        var2 = this;
        var6 = null;
        var2.strm = var6;
        var1 = 0;
        var2.status = var1;
        var2.pending_buf = var6;
        var2.pending_buf_size = var1;
        var2.pending_out = var1;
        var2.pending = var1;
        var2.wrap = var1;
        var2.gzhead = var6;
        var2.gzindex = var1;
        var0 = 8;
        var2.method = var0;
        var0 = -1;
        var2.last_flush = var0;
        var2.w_size = var1;
        var2.w_bits = var1;
        var2.w_mask = var1;
        var2.window = var6;
        var2.window_size = var1;
        var2.prev = var6;
        var2.head = var6;
        var2.ins_h = var1;
        var2.hash_size = var1;
        var2.hash_bits = var1;
        var2.hash_mask = var1;
        var2.hash_shift = var1;
        var2.block_start = var1;
        var2.match_length = var1;
        var2.prev_match = var1;
        var2.match_available = var1;
        var2.strstart = var1;
        var2.match_start = var1;
        var2.lookahead = var1;
        var2.prev_length = var1;
        var2.max_chain_length = var1;
        var2.max_lazy_match = var1;
        var2.level = var1;
        var2.strategy = var1;
        var2.good_match = var1;
        var2.nice_match = var1;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 1;
        var8 = var7[var3];
        var0 = undefined;
        var8 = var5.bind(var0)(var8);
        var10 = var8.Buf16;
        var8 = var10.prototype;
        var9 = Object.create(var8, {
            constructor: {
                value: var10
            }
        });
        var11 = 1146;
        var12 = var9;
        var8 = new var12[var10](var11, var10);
        var8 = var8 instanceof Object ? var8 : var9;
        var2.dyn_ltree = var8;
        var8 = var7[var3];
        var8 = var5.bind(var0)(var8);
        var10 = var8.Buf16;
        var8 = var10.prototype;
        var9 = Object.create(var8, {
            constructor: {
                value: var10
            }
        });
        var11 = 122;
        var12 = var9;
        var8 = new var12[var10](var11, var10);
        var8 = var8 instanceof Object ? var8 : var9;
        var2.dyn_dtree = var8;
        var8 = var7[var3];
        var8 = var5.bind(var0)(var8);
        var10 = var8.Buf16;
        var8 = var10.prototype;
        var9 = Object.create(var8, {
            constructor: {
                value: var10
            }
        });
        var11 = 78;
        var12 = var9;
        var8 = new var12[var10](var11, var10);
        var8 = var8 instanceof Object ? var8 : var9;
        var2.bl_tree = var8;
        var4 = _closure1_slot5;
        var8 = var2.dyn_ltree;
        var8 = var4.bind(var0)(var8);
        var8 = var2.dyn_dtree;
        var8 = var4.bind(var0)(var8);
        var8 = var2.bl_tree;
        var8 = var4.bind(var0)(var8);
        var2.l_desc = var6;
        var2.d_desc = var6;
        var2.bl_desc = var6;
        var6 = var7[var3];
        var6 = var5.bind(var0)(var6);
        var9 = var6.Buf16;
        var6 = var9.prototype;
        var8 = Object.create(var6, {
            constructor: {
                value: var9
            }
        });
        var11 = 16;
        var12 = var8;
        var6 = new var12[var9](var11, var10);
        var6 = var6 instanceof Object ? var6 : var8;
        var2.bl_count = var6;
        var6 = var7[var3];
        var6 = var5.bind(var0)(var6);
        var8 = var6.Buf16;
        var6 = var8.prototype;
        var9 = Object.create(var6, {
            constructor: {
                value: var8
            }
        });
        var6 = 573;
        var12 = var9;
        var11 = var6;
        var8 = new var12[var8](var11, var10);
        var8 = var8 instanceof Object ? var8 : var9;
        var2.heap = var8;
        var8 = var2.heap;
        var8 = var4.bind(var0)(var8);
        var2.heap_len = var1;
        var2.heap_max = var1;
        var3 = var7[var3];
        var3 = var5.bind(var0)(var3);
        var3 = var3.Buf16;
        var5 = var3.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var3
            }
        });
        var12 = var5;
        var11 = var6;
        var3 = new var12[var3](var11, var10);
        var3 = var3 instanceof Object ? var3 : var5;
        var2.depth = var3;
        var3 = var2.depth;
        var3 = var4.bind(var0)(var3);
        var2.l_buf = var1;
        var2.lit_bufsize = var1;
        var2.last_lit = var1;
        var2.d_buf = var1;
        var2.opt_len = var1;
        var2.static_len = var1;
        var2.matches = var1;
        var2.insert = var1;
        var2.bi_buf = var1;
        var2.bi_valid = var1;
        return var0;
    };
    var _closure1_slot12 = var2;
    var2 = function(arg0) { // Original name: deflateResetKeep, environment: var0
        _fun94756: for (var _fun94756_ip = 0;;) switch (_fun94756_ip) {
            case 0:
                var5 = arg0;
                if (!var5) {
                    _fun94756_ip = 14;
                    continue _fun94756
                }
            case 6:
                var0 = var5.state;
                if (var0) {
                    _fun94756_ip = 40;
                    continue _fun94756
                }
            case 14:
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = -2;
                var1 = var2.bind(var1)(var5, var0);
                _fun94756_ip = 188;
                continue _fun94756;
            case 40:
                var1 = 0;
                var5.total_out = var1;
                var5.total_in = var1;
                var3 = 2;
                var5.data_type = var3;
                var4 = var5.state;
                var4.pending = var1;
                var4.pending_out = var1;
                var2 = var4.wrap;
                if (!(var2 < var1)) {
                    _fun94756_ip = 105;
                    continue _fun94756
                }
            case 90:
                var2 = var4.wrap;
                var2 = -var2;
                var4.wrap = var2;
            case 105:
                var6 = var4.wrap;
                var2 = 42;
                if (var6) {
                    _fun94756_ip = 120;
                    continue _fun94756
                }
            case 117:
                var2 = 113;
            case 120:
                var4.status = var2;
                var6 = var4.wrap;
                var2 = 1;
                if (!(var3 === var6)) {
                    _fun94756_ip = 141;
                    continue _fun94756
                }
            case 139:
                var2 = 0;
            case 141:
                var5.adler = var2;
                var4.last_flush = var1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var3];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3._tr_init;
                var2 = var2.bind(var3)(var4);
                var0 = 0;
            case 188:
                return var0;
        }
    };
    var _closure1_slot13 = var2;
    var3 = function(arg0) { // Original name: deflateReset, environment: var0
        _fun94757: for (var _fun94757_ip = 0;;) switch (_fun94757_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot13;
                var7 = undefined;
                var0 = var0.bind(var7)(var1);
                var2 = 0;
                if (!(var2 === var0)) {
                    _fun94757_ip = 217;
                    continue _fun94757
                }
            case 26:
                var1 = var1.state;
                var5 = var1.w_size;
                var3 = 2;
                var5 = var3 * var5;
                var1.window_size = var5;
                var6 = _closure1_slot5;
                var5 = var1.head;
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot2;
                var5 = var1.level;
                var5 = var6[var5];
                var5 = var5.max_lazy;
                var1.max_lazy_match = var5;
                var6 = _closure1_slot2;
                var5 = var1.level;
                var5 = var6[var5];
                var5 = var5.good_length;
                var1.good_match = var5;
                var6 = _closure1_slot2;
                var5 = var1.level;
                var5 = var6[var5];
                var5 = var5.nice_length;
                var1.nice_match = var5;
                var5 = _closure1_slot2;
                var4 = var1.level;
                var4 = var5[var4];
                var4 = var4.max_chain;
                var1.max_chain_length = var4;
                var1.strstart = var2;
                var1.block_start = var2;
                var1.lookahead = var2;
                var1.insert = var2;
                var1.prev_length = var3;
                var1.match_length = var3;
                var1.match_available = var2;
                var1.ins_h = var2;
            case 217:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var4 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: deflateInit2, environment: var0
        _fun94758: for (var _fun94758_ip = 0;;) switch (_fun94758_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var4 = arg2;
                var0 = arg3;
                var13 = arg4;
                var5 = arg5;
                if (var3) {
                    _fun94758_ip = 29;
                    continue _fun94758
                }
            case 21:
                var1 = -2;
                return var1;
            case 29:
                var1 = -1;
                if (!(var1 === var6)) {
                    _fun94758_ip = 42;
                    continue _fun94758
                }
            case 39:
                var6 = 6;
            case 42:
                var8 = 0;
                if (!(!(var0 < var8))) {
                    _fun94758_ip = 76;
                    continue _fun94758
                }
            case 48:
                var1 = 15;
                var2 = var0 > var1;
                var7 = 1;
                var1 = var0;
                if (!var2) {
                    _fun94758_ip = 81;
                    continue _fun94758
                }
            case 64:
                var2 = 16;
                var1 = var0 - var2;
                var7 = 2;
                _fun94758_ip = 81;
                continue _fun94758;
            case 76:
                var1 = -var0;
                var7 = 0;
            case 81:
                var9 = 1;
                if (!(!(var13 < var9))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 91:
                var0 = 9;
                if (!(!(var13 > var0))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 101:
                var2 = 8;
                if (!(var2 === var4)) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 111:
                if (!(!(var1 < var2))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 118:
                var10 = 15;
                if (!(!(var1 > var10))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 128:
                if (!(!(var6 < var8))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 135:
                if (!(!(var6 > var0))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 142:
                if (!(!(var5 < var8))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 149:
                var12 = 4;
                if (!(!(var5 > var12))) {
                    _fun94758_ip = 634;
                    continue _fun94758
                }
            case 159:
                if (!(var2 === var1)) {
                    _fun94758_ip = 166;
                    continue _fun94758
                }
            case 163:
                var1 = var0;
            case 166:
                var2 = _closure1_slot12;
                var8 = var2.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = var8;
                var2 = new var18[var2](var17);
                var2 = var2 instanceof Object ? var2 : var8;
                var3.state = var2;
                var2.strm = var3;
                var2.wrap = var7;
                var7 = null;
                var2.gzhead = var7;
                var2.w_bits = var1;
                var1 = var2.w_bits;
                var1 = var9 << var1;
                var2.w_size = var1;
                var1 = var2.w_size;
                var1 = var1 - var9;
                var2.w_mask = var1;
                var1 = 7;
                var1 = var13 + var1;
                var2.hash_bits = var1;
                var1 = var2.hash_bits;
                var1 = var9 << var1;
                var2.hash_size = var1;
                var1 = var2.hash_size;
                var1 = var1 - var9;
                var2.hash_mask = var1;
                var1 = var2.hash_bits;
                var8 = 3;
                var1 = var1 + var8;
                var1 = var1 - var9;
                var1 = var1 / var8;
                var1 = ~var1;
                var1 = ~var1;
                var2.hash_shift = var1;
                var10 = _closure1_slot0;
                var7 = _closure1_slot1;
                var11 = var7[var9];
                var1 = undefined;
                var11 = var10.bind(var1)(var11);
                var15 = var11.Buf8;
                var14 = var2.w_size;
                var11 = 2;
                var17 = var11 * var14;
                var14 = var15.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var15
                    }
                });
                var18 = var14;
                var11 = new var18[var15](var17, var16);
                var11 = var11 instanceof Object ? var11 : var14;
                var2.window = var11;
                var11 = var7[var9];
                var11 = var10.bind(var1)(var11);
                var15 = var11.Buf16;
                var17 = var2.hash_size;
                var14 = var15.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var15
                    }
                });
                var18 = var14;
                var11 = new var18[var15](var17, var16);
                var11 = var11 instanceof Object ? var11 : var14;
                var2.head = var11;
                var11 = var7[var9];
                var11 = var10.bind(var1)(var11);
                var15 = var11.Buf16;
                var17 = var2.w_size;
                var14 = var15.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var15
                    }
                });
                var18 = var14;
                var11 = new var18[var15](var17, var16);
                var11 = var11 instanceof Object ? var11 : var14;
                var2.prev = var11;
                var11 = 6;
                var11 = var13 + var11;
                var11 = var9 << var11;
                var2.lit_bufsize = var11;
                var11 = var2.lit_bufsize;
                var11 = var12 * var11;
                var2.pending_buf_size = var11;
                var7 = var7[var9];
                var7 = var10.bind(var1)(var7);
                var11 = var7.Buf8;
                var17 = var2.pending_buf_size;
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var18 = var10;
                var7 = new var18[var11](var17, var16);
                var7 = var7 instanceof Object ? var7 : var10;
                var2.pending_buf = var7;
                var7 = var2.lit_bufsize;
                var7 = var9 * var7;
                var2.d_buf = var7;
                var7 = var2.lit_bufsize;
                var7 = var8 * var7;
                var2.l_buf = var7;
                var2.level = var6;
                var2.strategy = var5;
                var2.method = var4;
                var0 = _closure1_slot14;
                var0 = var0.bind(var1)(var3);
                return var0;
            case 634:
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = -2;
                var1 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var5 = var10.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var10
        }
    });
    var15 = function(arg0, arg1) { // Original name: deflate_stored, environment: var0
        _fun94759: for (var _fun94759_ip = 0;;) switch (_fun94759_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var3.pending_buf_size;
                var10 = 5;
                var2 = var0 - var10;
                var9 = 65535;
                var7 = undefined;
                var8 = false;
                var4 = 0;
                var6 = 262;
                var0 = 1;
                if (!(var9 > var2)) {
                    _fun94759_ip = 57;
                    continue _fun94759
                }
            case 47:
                var2 = var3.pending_buf_size;
                var9 = var2 - var10;
            case 57:
                var2 = var3.lookahead;
                var10 = var9;
                if (!(var2 <= var0)) {
                    _fun94759_ip = 109;
                    continue _fun94759
                }
            case 70:
                var2 = _closure1_slot11;
                var2 = var2.bind(var7)(var3);
                var2 = var3.lookahead;
                if (!(var4 === var2)) {
                    _fun94759_ip = 96;
                    continue _fun94759
                }
            case 89:
                if (!(var4 !== var1)) {
                    _fun94759_ip = 385;
                    continue _fun94759
                }
            case 96:
                var2 = var3.lookahead;
                if (!(var4 !== var2)) {
                    _fun94759_ip = 287;
                    continue _fun94759
                }
            case 109:
                var11 = var3.strstart;
                var2 = var3.lookahead;
                var2 = var11 + var2;
                var3.strstart = var2;
                var3.lookahead = var4;
                var2 = var3.block_start;
                var2 = var2 + var10;
                var11 = var3.strstart;
                if (!(var4 !== var11)) {
                    _fun94759_ip = 167;
                    continue _fun94759
                }
            case 157:
                var11 = var3.strstart;
                if (!(var11 >= var2)) {
                    _fun94759_ip = 215;
                    continue _fun94759
                }
            case 167:
                var11 = var3.strstart;
                var11 = var11 - var2;
                var3.lookahead = var11;
                var3.strstart = var2;
                var2 = _closure1_slot7;
                var2 = var2.bind(var7)(var3, var8);
                var2 = var3.strm;
                var2 = var2.avail_out;
                if (!(var4 !== var2)) {
                    _fun94759_ip = 285;
                    continue _fun94759
                }
            case 215:
                var11 = var3.strstart;
                var2 = var3.block_start;
                var11 = var11 - var2;
                var2 = var3.w_size;
                var2 = var2 - var6;
                var9 = var10;
                if (!(var11 >= var2)) {
                    _fun94759_ip = 57;
                    continue _fun94759
                }
            case 251:
                var2 = _closure1_slot7;
                var2 = var2.bind(var7)(var3, var8);
                var2 = var3.strm;
                var2 = var2.avail_out;
                var9 = var10;
                if (var4 !== var2) {
                    _fun94759_ip = 57;
                    continue _fun94759
                }
            case 283:
                return var0;
            case 285:
                return var0;
            case 287:
                var3.insert = var4;
                var2 = 4;
                if (!(var2 !== var1)) {
                    _fun94759_ip = 349;
                    continue _fun94759
                }
            case 300:
                var6 = var3.strstart;
                var1 = var3.block_start;
                var6 = var6 > var1;
                var1 = var0;
                if (!var6) {
                    _fun94759_ip = 383;
                    continue _fun94759
                }
            case 322:
                var6 = _closure1_slot7;
                var6 = var6.bind(var7)(var3, var8);
                var6 = var3.strm;
                var6 = var6.avail_out;
                var1 = var0;
                _fun94759_ip = 383;
                continue _fun94759;
            case 349:
                var6 = _closure1_slot7;
                var5 = true;
                var5 = var6.bind(var7)(var3, var5);
                var3 = var3.strm;
                var3 = var3.avail_out;
                if (!(var4 === var3)) {
                    _fun94759_ip = 380;
                    continue _fun94759
                }
            case 377:
                var2 = 3;
            case 380:
                var1 = var2;
            case 383:
                return var1;
            case 385:
                return var0;
        }
    };
    var20 = var6;
    var19 = 0;
    var18 = 0;
    var17 = 0;
    var16 = 0;
    var5 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var5 instanceof Object ? var5 : var6;
    var5 = new Array(10);
    var5[0] = var6;
    var6 = var10.prototype;
    var9 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var7 = 4;
    var8 = 8;
    var20 = var9;
    var19 = var7;
    var18 = var7;
    var17 = var8;
    var16 = var7;
    var15 = var14;
    var6 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var5[1] = var6;
    var6 = var10.prototype;
    var12 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var18 = 5;
    var6 = 16;
    var20 = var12;
    var17 = var6;
    var16 = var8;
    var15 = var14;
    var9 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var9 = var9 instanceof Object ? var9 : var12;
    var5[2] = var9;
    var9 = var10.prototype;
    var13 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var18 = 6;
    var9 = 32;
    var20 = var13;
    var17 = var9;
    var16 = var9;
    var15 = var14;
    var12 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var12 = var12 instanceof Object ? var12 : var13;
    var5[3] = var12;
    var12 = var10.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var10
        }
    });
    var20 = var12;
    var18 = var7;
    var17 = var6;
    var16 = var6;
    var15 = var11;
    var7 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var7 = var7 instanceof Object ? var7 : var12;
    var5[4] = var7;
    var7 = var10.prototype;
    var12 = Object.create(var7, {
        constructor: {
            value: var10
        }
    });
    var20 = var12;
    var19 = var8;
    var18 = var6;
    var17 = var9;
    var16 = var9;
    var15 = var11;
    var7 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var7 = var7 instanceof Object ? var7 : var12;
    var5[5] = var7;
    var7 = var10.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var10
        }
    });
    var12 = 128;
    var20 = var7;
    var17 = var12;
    var16 = var12;
    var15 = var11;
    var6 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var5[6] = var6;
    var6 = var10.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var16 = 256;
    var20 = var7;
    var18 = var9;
    var15 = var11;
    var6 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var5[7] = var6;
    var6 = var10.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var8 = 258;
    var16 = 1024;
    var20 = var7;
    var19 = var9;
    var18 = var12;
    var17 = var8;
    var15 = var11;
    var6 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var5[8] = var6;
    var6 = var10.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var16 = 4096;
    var20 = var7;
    var18 = var8;
    var15 = var11;
    var6 = new var20[var10](var19, var18, var17, var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var5[9] = var6;
    var _closure1_slot2 = var5;
    var5 = function(arg0, arg1) { // Original name: deflateInit, environment: var0
        var6 = _closure1_slot15;
        var13 = undefined;
        var12 = arg0;
        var11 = arg1;
        var2 = 8;
        var9 = 15;
        var7 = 0;
        var10 = var2;
        var8 = var2;
        var0 = var13[var6](var12, var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var1.deflateInit = var5;
    var1.deflateInit2 = var4;
    var1.deflateReset = var3;
    var1.deflateResetKeep = var2;
    var2 = function(arg0, arg1) { // Original name: deflateSetHeader, environment: var0
        _fun94761: for (var _fun94761_ip = 0;;) switch (_fun94761_ip) {
            case 0:
                var2 = arg0;
                var1 = -2;
                var0 = var1;
                if (!var2) {
                    _fun94761_ip = 63;
                    continue _fun94761
                }
            case 15:
                var3 = var2.state;
                var0 = var1;
                if (!var3) {
                    _fun94761_ip = 63;
                    continue _fun94761
                }
            case 26:
                var3 = var2.state;
                var4 = var3.wrap;
                var3 = 2;
                if (!(var3 === var4)) {
                    _fun94761_ip = 60;
                    continue _fun94761
                }
            case 44:
                var3 = var2.state;
                var2 = arg1;
                var3.gzhead = var2;
                var1 = 0;
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var1.deflateSetHeader = var2;
    var2 = function(arg0, arg1) { // Original name: deflate, environment: var0
        _fun94762: for (var _fun94762_ip = 0;;) switch (_fun94762_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                if (!var3) {
                    _fun94762_ip = 4491;
                    continue _fun94762
                }
            case 12:
                var0 = var3.state;
                if (!var0) {
                    _fun94762_ip = 4491;
                    continue _fun94762
                }
            case 23:
                var7 = 5;
                if (!(!(var5 > var7))) {
                    _fun94762_ip = 4491;
                    continue _fun94762
                }
            case 33:
                var4 = 0;
                if (!(!(var5 < var4))) {
                    _fun94762_ip = 4491;
                    continue _fun94762
                }
            case 42:
                var1 = var3.state;
                var0 = var3.output;
                if (!var0) {
                    _fun94762_ip = 4452;
                    continue _fun94762
                }
            case 59:
                var0 = var3.input;
                if (var0) {
                    _fun94762_ip = 81;
                    continue _fun94762
                }
            case 68:
                var0 = var3.avail_in;
                if (!(var4 === var0)) {
                    _fun94762_ip = 4452;
                    continue _fun94762
                }
            case 81:
                var0 = var1.status;
                var12 = 666;
                if (!(var0 === var12)) {
                    _fun94762_ip = 106;
                    continue _fun94762
                }
            case 96:
                var0 = 4;
                if (!(var0 === var5)) {
                    _fun94762_ip = 4452;
                    continue _fun94762
                }
            case 106:
                var1.strm = var3;
                var9 = var1.last_flush;
                var1.last_flush = var5;
                var2 = var1.status;
                var0 = 42;
                if (!(var0 === var2)) {
                    _fun94762_ip = 1049;
                    continue _fun94762
                }
            case 139:
                var0 = var1.wrap;
                var14 = 2;
                if (!(var14 !== var0)) {
                    _fun94762_ip = 393;
                    continue _fun94762
                }
            case 155:
                var0 = var1.w_bits;
                var2 = 8;
                var8 = var0 - var2;
                var0 = var1.strategy;
                var0 = var0 >= var14;
                var6 = 0;
                if (var0) {
                    _fun94762_ip = 239;
                    continue _fun94762
                }
            case 183:
                var0 = var1.level;
                var0 = var0 < var14;
                var6 = 0;
                if (var0) {
                    _fun94762_ip = 239;
                    continue _fun94762
                }
            case 198:
                var0 = var1.level;
                var13 = 6;
                var10 = var0 < var13;
                var0 = 1;
                if (var10) {
                    _fun94762_ip = 236;
                    continue _fun94762
                }
            case 217:
                var11 = var1.level;
                var10 = 3;
                if (!(var13 === var11)) {
                    _fun94762_ip = 233;
                    continue _fun94762
                }
            case 230:
                var10 = var14;
            case 233:
                var0 = var10;
            case 236:
                var6 = var0;
            case 239:
                var0 = 4;
                var0 = var8 << var0;
                var0 = var2 + var0;
                var2 = var0 << var2;
                var0 = 6;
                var0 = var6 << var0;
                var2 = var2 | var0;
                var0 = var1.strstart;
                var10 = var2;
                if (!(var4 !== var0)) {
                    _fun94762_ip = 285;
                    continue _fun94762
                }
            case 278:
                var0 = 32;
                var10 = var2 | var0;
            case 285:
                var0 = 113;
                var1.status = var0;
                var8 = _closure1_slot9;
                var6 = undefined;
                var11 = 31;
                var2 = var10 % var11;
                var2 = var11 - var2;
                var2 = var10 + var2;
                var2 = var8.bind(var6)(var1, var2);
                var2 = var1.strstart;
                if (!(var4 !== var2)) {
                    _fun94762_ip = 379;
                    continue _fun94762
                }
            case 334:
                var2 = _closure1_slot9;
                var8 = var3.adler;
                var0 = 16;
                var0 = var8 >>> var0;
                var0 = var2.bind(var6)(var1, var0);
                var8 = var3.adler;
                var0 = 65535;
                var0 = var0 & var8;
                var0 = var2.bind(var6)(var1, var0);
            case 379:
                var0 = 1;
                var3.adler = var0;
                _fun94762_ip = 1049;
                continue _fun94762;
            case 393:
                var3.adler = var4;
                var2 = _closure1_slot8;
                var10 = undefined;
                var6 = 31;
                var6 = var2.bind(var10)(var1, var6);
                var6 = 139;
                var6 = var2.bind(var10)(var1, var6);
                var11 = 8;
                var2 = var2.bind(var10)(var1, var11);
                var2 = var1.gzhead;
                var6 = _closure1_slot8;
                if (var2) {
                    _fun94762_ip = 558;
                    continue _fun94762
                }
            case 448:
                var2 = var6.bind(var10)(var1, var4);
                var2 = var6.bind(var10)(var1, var4);
                var2 = var6.bind(var10)(var1, var4);
                var2 = var6.bind(var10)(var1, var4);
                var2 = var6.bind(var10)(var1, var4);
                var13 = var1.level;
                var8 = 9;
                var2 = var14;
                if (!(var8 !== var13)) {
                    _fun94762_ip = 525;
                    continue _fun94762
                }
            case 494:
                var8 = var1.strategy;
                if (!(!(var8 >= var14))) {
                    _fun94762_ip = 519;
                    continue _fun94762
                }
            case 504:
                var8 = var1.level;
                var13 = var8 < var14;
                var8 = 0;
                if (!var13) {
                    _fun94762_ip = 522;
                    continue _fun94762
                }
            case 519:
                var8 = 4;
            case 522:
                var2 = var8;
            case 525:
                var2 = var6.bind(var10)(var1, var2);
                var8 = _closure1_slot8;
                var2 = 3;
                var2 = var8.bind(var10)(var1, var2);
                var2 = 113;
                var1.status = var2;
                _fun94762_ip = 1049;
                continue _fun94762;
            case 558:
                var2 = var1.gzhead;
                var2 = var2.text;
                var16 = 0;
                if (!var2) {
                    _fun94762_ip = 577;
                    continue _fun94762
                }
            case 574:
                var16 = 1;
            case 577:
                var2 = var1.gzhead;
                var8 = var2.hcrc;
                var2 = 0;
                if (!var8) {
                    _fun94762_ip = 597;
                    continue _fun94762
                }
            case 594:
                var2 = var14;
            case 597:
                var8 = var1.gzhead;
                var8 = var8.extra;
                var15 = 0;
                if (!var8) {
                    _fun94762_ip = 617;
                    continue _fun94762
                }
            case 614:
                var15 = 4;
            case 617:
                var8 = var1.gzhead;
                var8 = var8.name;
                var13 = 0;
                if (!var8) {
                    _fun94762_ip = 636;
                    continue _fun94762
                }
            case 633:
                var13 = var11;
            case 636:
                var8 = var1.gzhead;
                var17 = var8.comment;
                var8 = 0;
                if (!var17) {
                    _fun94762_ip = 656;
                    continue _fun94762
                }
            case 653:
                var8 = 16;
            case 656:
                var2 = var16 + var2;
                var2 = var2 + var15;
                var2 = var2 + var13;
                var2 = var2 + var8;
                var2 = var6.bind(var10)(var1, var2);
                var6 = _closure1_slot8;
                var2 = var1.gzhead;
                var2 = var2.time;
                var8 = 255;
                var2 = var8 & var2;
                var2 = var6.bind(var10)(var1, var2);
                var2 = var1.gzhead;
                var2 = var2.time;
                var2 = var2 >> var11;
                var2 = var2 & var8;
                var2 = var6.bind(var10)(var1, var2);
                var2 = var1.gzhead;
                var13 = var2.time;
                var2 = 16;
                var2 = var13 >> var2;
                var2 = var2 & var8;
                var2 = var6.bind(var10)(var1, var2);
                var2 = var1.gzhead;
                var13 = var2.time;
                var2 = 24;
                var2 = var13 >> var2;
                var2 = var2 & var8;
                var2 = var6.bind(var10)(var1, var2);
                var15 = var1.level;
                var13 = 9;
                var2 = var14;
                if (!(var13 !== var15)) {
                    _fun94762_ip = 838;
                    continue _fun94762
                }
            case 807:
                var13 = var1.strategy;
                if (!(!(var13 >= var14))) {
                    _fun94762_ip = 832;
                    continue _fun94762
                }
            case 817:
                var13 = var1.level;
                var14 = var13 < var14;
                var13 = 0;
                if (!var14) {
                    _fun94762_ip = 835;
                    continue _fun94762
                }
            case 832:
                var13 = 4;
            case 835:
                var2 = var13;
            case 838:
                var2 = var6.bind(var10)(var1, var2);
                var6 = _closure1_slot8;
                var2 = var1.gzhead;
                var2 = var2.os;
                var2 = var8 & var2;
                var2 = var6.bind(var10)(var1, var2);
                var2 = var1.gzhead;
                var2 = var2.extra;
                if (!var2) {
                    _fun94762_ip = 902;
                    continue _fun94762
                }
            case 885:
                var6 = var1.gzhead;
                var6 = var6.extra;
                var2 = var6.length;
            case 902:
                if (!var2) {
                    _fun94762_ip = 967;
                    continue _fun94762
                }
            case 905:
                var6 = _closure1_slot8;
                var2 = var1.gzhead;
                var2 = var2.extra;
                var2 = var2.length;
                var2 = var8 & var2;
                var2 = var6.bind(var10)(var1, var2);
                var2 = var1.gzhead;
                var2 = var2.extra;
                var2 = var2.length;
                var2 = var2 >> var11;
                var2 = var2 & var8;
                var2 = var6.bind(var10)(var1, var2);
            case 967:
                var2 = var1.gzhead;
                var2 = var2.hcrc;
                if (!var2) {
                    _fun94762_ip = 1034;
                    continue _fun94762
                }
            case 982:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var8 = var2.bind(var10)(var0);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var29 = var1.pending;
                var32 = undefined;
                var28 = 0;
                var0 = var32[var8](var31, var30, var29, var28, var27);
                var3.adler = var0;
            case 1034:
                var1.gzindex = var4;
                var0 = 69;
                var1.status = var0;
            case 1049:
                var2 = var1.status;
                var0 = 69;
                if (!(var0 === var2)) {
                    _fun94762_ip = 1668;
                    continue _fun94762
                }
            case 1064:
                var0 = var1.gzhead;
                var0 = var0.extra;
                if (var0) {
                    _fun94762_ip = 1093;
                    continue _fun94762
                }
            case 1079:
                var0 = 73;
                var1.status = var0;
                _fun94762_ip = 1668;
                continue _fun94762;
            case 1093:
                var15 = var1.pending;
                var2 = var1.gzindex;
                var0 = var1.gzhead;
                var0 = var0.extra;
                var0 = var0.length;
                var8 = 65535;
                var0 = var8 & var0;
                var11 = var15;
                if (!(var2 < var0)) {
                    _fun94762_ip = 1536;
                    continue _fun94762
                }
            case 1142:
                var2 = var1.pending;
                var0 = var1.pending_buf_size;
                var6 = var15;
                if (!(var2 === var0)) {
                    _fun94762_ip = 1296;
                    continue _fun94762
                }
            case 1164:
                var0 = var1.gzhead;
                var0 = var0.hcrc;
                if (!var0) {
                    _fun94762_ip = 1189;
                    continue _fun94762
                }
            case 1179:
                var2 = var1.pending;
                var0 = var2 > var15;
            case 1189:
                if (!var0) {
                    _fun94762_ip = 1254;
                    continue _fun94762
                }
            case 1192:
                var2 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 4;
                var0 = var10[var0];
                var14 = undefined;
                var13 = var2.bind(var14)(var0);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var0 = var1.pending;
                var29 = var0 - var15;
                var32 = undefined;
                var28 = var15;
                var0 = var32[var13](var31, var30, var29, var28, var27);
                var3.adler = var0;
            case 1254:
                var2 = _closure1_slot6;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                var6 = var1.pending;
                var2 = var1.pending;
                var0 = var1.pending_buf_size;
                var11 = var6;
                if (!(var2 !== var0)) {
                    _fun94762_ip = 1536;
                    continue _fun94762
                }
            case 1296:
                var13 = _closure1_slot8;
                var2 = var1.gzhead;
                var10 = var2.extra;
                var2 = var1.gzindex;
                var10 = var10[var2];
                var2 = 255;
                var10 = var2 & var10;
                var2 = undefined;
                var10 = var13.bind(var2)(var1, var10);
                var10 = var1.gzindex;
                var10 = var10 + 1;
                var1.gzindex = var10;
                var13 = var1.gzindex;
                var10 = var1.gzhead;
                var10 = var10.extra;
                var10 = var10.length;
                var10 = var8 & var10;
                var16 = var6;
                var11 = var16;
                if (!(var13 < var10)) {
                    _fun94762_ip = 1536;
                    continue _fun94762
                }
            case 1395:
                var13 = var1.pending;
                var10 = var1.pending_buf_size;
                var6 = var16;
                if (var13 !== var10) {
                    _fun94762_ip = 1296;
                    continue _fun94762
                }
            case 1414:
                var10 = var1.gzhead;
                var10 = var10.hcrc;
                if (!var10) {
                    _fun94762_ip = 1439;
                    continue _fun94762
                }
            case 1429:
                var13 = var1.pending;
                var10 = var13 > var16;
            case 1439:
                if (!var10) {
                    _fun94762_ip = 1499;
                    continue _fun94762
                }
            case 1442:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 4;
                var10 = var14[var10];
                var15 = var13.bind(var2)(var10);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var10 = var1.pending;
                var29 = var10 - var16;
                var32 = undefined;
                var28 = var16;
                var10 = var32[var15](var31, var30, var29, var28, var27);
                var3.adler = var10;
            case 1499:
                var0 = _closure1_slot6;
                var0 = var0.bind(var2)(var3);
                var6 = var1.pending;
                var2 = var1.pending;
                var0 = var1.pending_buf_size;
                var11 = var6;
                if (var2 !== var0) {
                    _fun94762_ip = 1296;
                    continue _fun94762
                }
            case 1536:
                var0 = var1.gzhead;
                var0 = var0.hcrc;
                if (!var0) {
                    _fun94762_ip = 1561;
                    continue _fun94762
                }
            case 1551:
                var2 = var1.pending;
                var0 = var2 > var11;
            case 1561:
                if (!var0) {
                    _fun94762_ip = 1626;
                    continue _fun94762
                }
            case 1564:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var10 = undefined;
                var8 = var2.bind(var10)(var0);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var0 = var1.pending;
                var29 = var0 - var11;
                var32 = undefined;
                var28 = var11;
                var0 = var32[var8](var31, var30, var29, var28, var27);
                var3.adler = var0;
            case 1626:
                var2 = var1.gzindex;
                var0 = var1.gzhead;
                var0 = var0.extra;
                var0 = var0.length;
                if (!(var2 === var0)) {
                    _fun94762_ip = 1668;
                    continue _fun94762
                }
            case 1653:
                var1.gzindex = var4;
                var0 = 73;
                var1.status = var0;
            case 1668:
                var2 = var1.status;
                var0 = 73;
                if (!(var0 === var2)) {
                    _fun94762_ip = 2071;
                    continue _fun94762
                }
            case 1683:
                var0 = var1.gzhead;
                var0 = var0.name;
                if (var0) {
                    _fun94762_ip = 1711;
                    continue _fun94762
                }
            case 1697:
                var0 = 91;
                var1.status = var0;
                _fun94762_ip = 2071;
                continue _fun94762;
            case 1711:
                var14 = var1.pending;
                var13 = undefined;
                var10 = 255;
                var6 = 1;
                var8 = 4;
            case 1731:
                var11 = var1.pending;
                var0 = var1.pending_buf_size;
                var16 = var14;
                if (!(var11 === var0)) {
                    _fun94762_ip = 1869;
                    continue _fun94762
                }
            case 1750:
                var0 = var1.gzhead;
                var0 = var0.hcrc;
                if (!var0) {
                    _fun94762_ip = 1775;
                    continue _fun94762
                }
            case 1765:
                var11 = var1.pending;
                var0 = var11 > var14;
            case 1775:
                if (!var0) {
                    _fun94762_ip = 1832;
                    continue _fun94762
                }
            case 1778:
                var11 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var17 = var11.bind(var13)(var0);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var0 = var1.pending;
                var29 = var0 - var14;
                var32 = undefined;
                var28 = var14;
                var0 = var32[var17](var31, var30, var29, var28, var27);
                var3.adler = var0;
            case 1832:
                var0 = _closure1_slot6;
                var0 = var0.bind(var13)(var3);
                var16 = var1.pending;
                var17 = var1.pending;
                var15 = var1.pending_buf_size;
                var11 = var16;
                var0 = var6;
                if (!(var17 !== var15)) {
                    _fun94762_ip = 1970;
                    continue _fun94762
                }
            case 1869:
                var17 = var1.gzindex;
                var15 = var1.gzhead;
                var15 = var15.name;
                var15 = var15.length;
                var17 = var17 < var15;
                var15 = 0;
                if (!var17) {
                    _fun94762_ip = 1944;
                    continue _fun94762
                }
            case 1900:
                var17 = var1.gzhead;
                var19 = var17.name;
                var18 = var19.charCodeAt;
                var17 = var1.gzindex;
                var17 = parseFloat(var17);
                var20 = var17 + 1;
                var1.gzindex = var20;
                var17 = var18.bind(var19)(var17);
                var15 = var10 & var17;
            case 1944:
                var17 = _closure1_slot8;
                var17 = var17.bind(var13)(var1, var15);
                var0 = var15;
                var14 = var16;
                var11 = var14;
                if (var4 !== var0) {
                    _fun94762_ip = 1731;
                    continue _fun94762
                }
            case 1970:
                var6 = var1.gzhead;
                var6 = var6.hcrc;
                if (!var6) {
                    _fun94762_ip = 1995;
                    continue _fun94762
                }
            case 1985:
                var10 = var1.pending;
                var6 = var10 > var11;
            case 1995:
                if (!var6) {
                    _fun94762_ip = 2052;
                    continue _fun94762
                }
            case 1998:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var8];
                var10 = var6.bind(var13)(var2);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var2 = var1.pending;
                var29 = var2 - var11;
                var32 = undefined;
                var28 = var11;
                var2 = var32[var10](var31, var30, var29, var28, var27);
                var3.adler = var2;
            case 2052:
                if (!(var4 === var0)) {
                    _fun94762_ip = 2071;
                    continue _fun94762
                }
            case 2056:
                var1.gzindex = var4;
                var0 = 91;
                var1.status = var0;
            case 2071:
                var2 = var1.status;
                var0 = 91;
                if (!(var0 === var2)) {
                    _fun94762_ip = 2471;
                    continue _fun94762
                }
            case 2086:
                var0 = var1.gzhead;
                var0 = var0.comment;
                if (var0) {
                    _fun94762_ip = 2115;
                    continue _fun94762
                }
            case 2101:
                var0 = 103;
                var1.status = var0;
                _fun94762_ip = 2471;
                continue _fun94762;
            case 2115:
                var14 = var1.pending;
                var13 = undefined;
                var10 = 255;
                var6 = 1;
                var8 = 4;
            case 2135:
                var11 = var1.pending;
                var0 = var1.pending_buf_size;
                var16 = var14;
                if (!(var11 === var0)) {
                    _fun94762_ip = 2273;
                    continue _fun94762
                }
            case 2154:
                var0 = var1.gzhead;
                var0 = var0.hcrc;
                if (!var0) {
                    _fun94762_ip = 2179;
                    continue _fun94762
                }
            case 2169:
                var11 = var1.pending;
                var0 = var11 > var14;
            case 2179:
                if (!var0) {
                    _fun94762_ip = 2236;
                    continue _fun94762
                }
            case 2182:
                var11 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var17 = var11.bind(var13)(var0);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var0 = var1.pending;
                var29 = var0 - var14;
                var32 = undefined;
                var28 = var14;
                var0 = var32[var17](var31, var30, var29, var28, var27);
                var3.adler = var0;
            case 2236:
                var0 = _closure1_slot6;
                var0 = var0.bind(var13)(var3);
                var16 = var1.pending;
                var17 = var1.pending;
                var15 = var1.pending_buf_size;
                var11 = var16;
                var0 = var6;
                if (!(var17 !== var15)) {
                    _fun94762_ip = 2376;
                    continue _fun94762
                }
            case 2273:
                var17 = var1.gzindex;
                var15 = var1.gzhead;
                var15 = var15.comment;
                var15 = var15.length;
                var17 = var17 < var15;
                var15 = 0;
                if (!var17) {
                    _fun94762_ip = 2350;
                    continue _fun94762
                }
            case 2305:
                var17 = var1.gzhead;
                var19 = var17.comment;
                var18 = var19.charCodeAt;
                var17 = var1.gzindex;
                var17 = parseFloat(var17);
                var20 = var17 + 1;
                var1.gzindex = var20;
                var17 = var18.bind(var19)(var17);
                var15 = var10 & var17;
            case 2350:
                var17 = _closure1_slot8;
                var17 = var17.bind(var13)(var1, var15);
                var0 = var15;
                var14 = var16;
                var11 = var14;
                if (var4 !== var0) {
                    _fun94762_ip = 2135;
                    continue _fun94762
                }
            case 2376:
                var6 = var1.gzhead;
                var6 = var6.hcrc;
                if (!var6) {
                    _fun94762_ip = 2401;
                    continue _fun94762
                }
            case 2391:
                var10 = var1.pending;
                var6 = var10 > var11;
            case 2401:
                if (!var6) {
                    _fun94762_ip = 2458;
                    continue _fun94762
                }
            case 2404:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var8];
                var10 = var6.bind(var13)(var2);
                var31 = var3.adler;
                var30 = var1.pending_buf;
                var2 = var1.pending;
                var29 = var2 - var11;
                var32 = undefined;
                var28 = var11;
                var2 = var32[var10](var31, var30, var29, var28, var27);
                var3.adler = var2;
            case 2458:
                if (!(var4 === var0)) {
                    _fun94762_ip = 2471;
                    continue _fun94762
                }
            case 2462:
                var0 = 103;
                var1.status = var0;
            case 2471:
                var2 = var1.status;
                var0 = 103;
                if (!(var2 === var0)) {
                    _fun94762_ip = 2638;
                    continue _fun94762
                }
            case 2486:
                var0 = var1.gzhead;
                var0 = var0.hcrc;
                if (var0) {
                    _fun94762_ip = 2515;
                    continue _fun94762
                }
            case 2501:
                var0 = 113;
                var1.status = var0;
                _fun94762_ip = 2638;
                continue _fun94762;
            case 2515:
                var0 = var1.pending;
                var2 = 2;
                var6 = var0 + var2;
                var0 = var1.pending_buf_size;
                if (!(var6 > var0)) {
                    _fun94762_ip = 2552;
                    continue _fun94762
                }
            case 2538:
                var6 = _closure1_slot6;
                var0 = undefined;
                var0 = var6.bind(var0)(var3);
            case 2552:
                var0 = var1.pending;
                var2 = var0 + var2;
                var0 = var1.pending_buf_size;
                if (!(var2 <= var0)) {
                    _fun94762_ip = 2638;
                    continue _fun94762
                }
            case 2572:
                var6 = _closure1_slot8;
                var0 = var3.adler;
                var8 = 255;
                var0 = var8 & var0;
                var2 = undefined;
                var0 = var6.bind(var2)(var1, var0);
                var10 = var3.adler;
                var0 = 8;
                var0 = var10 >> var0;
                var0 = var0 & var8;
                var0 = var6.bind(var2)(var1, var0);
                var3.adler = var4;
                var0 = 113;
                var1.status = var0;
            case 2638:
                var0 = var1.pending;
                if (!(var4 === var0)) {
                    _fun94762_ip = 2706;
                    continue _fun94762
                }
            case 2648:
                var0 = var3.avail_in;
                if (!(var4 === var0)) {
                    _fun94762_ip = 2733;
                    continue _fun94762
                }
            case 2658:
                var2 = _closure1_slot4;
                var6 = undefined;
                var8 = var2.bind(var6)(var5);
                var2 = var2.bind(var6)(var9);
                if (!(var8 <= var2)) {
                    _fun94762_ip = 2733;
                    continue _fun94762
                }
            case 2681:
                var2 = 4;
                if (!(var2 !== var5)) {
                    _fun94762_ip = 2733;
                    continue _fun94762
                }
            case 2688:
                var2 = _closure1_slot3;
                var0 = -5;
                var2 = var2.bind(var6)(var3, var0);
                return var0;
            case 2706:
                var2 = _closure1_slot6;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                var0 = var3.avail_out;
                if (!(var4 !== var0)) {
                    _fun94762_ip = 4438;
                    continue _fun94762
                }
            case 2733:
                var0 = var1.status;
                if (!(var0 === var12)) {
                    _fun94762_ip = 2755;
                    continue _fun94762
                }
            case 2742:
                var0 = var3.avail_in;
                if (!(var4 === var0)) {
                    _fun94762_ip = 4415;
                    continue _fun94762
                }
            case 2755:
                var0 = var3.avail_in;
                if (!(var4 === var0)) {
                    _fun94762_ip = 2794;
                    continue _fun94762
                }
            case 2765:
                var0 = var1.lookahead;
                if (!(var4 === var0)) {
                    _fun94762_ip = 2794;
                    continue _fun94762
                }
            case 2775:
                if (!(var4 !== var5)) {
                    _fun94762_ip = 4043;
                    continue _fun94762
                }
            case 2782:
                var0 = var1.status;
                if (!(var0 !== var12)) {
                    _fun94762_ip = 4043;
                    continue _fun94762
                }
            case 2794:
                var6 = var1.strategy;
                var2 = undefined;
                var10 = false;
                var9 = 1;
                var8 = 2;
                if (!(var8 !== var6)) {
                    _fun94762_ip = 3597;
                    continue _fun94762
                }
            case 2820:
                var6 = var1.strategy;
                var15 = 3;
                if (!(var15 !== var6)) {
                    _fun94762_ip = 2864;
                    continue _fun94762
                }
            case 2833:
                var11 = _closure1_slot2;
                var6 = var1.level;
                var11 = var11[var6];
                var6 = var11.func;
                var11 = var6.bind(var11)(var1, var5);
                _fun94762_ip = 3592;
                continue _fun94762;
            case 2864:
                var19 = var1.window;
                var18 = 258;
                var17 = undefined;
                var16 = undefined;
                var14 = undefined;
            case 2881:
                var6 = var1.lookahead;
                if (!(var6 <= var18)) {
                    _fun94762_ip = 2933;
                    continue _fun94762
                }
            case 2891:
                var6 = _closure1_slot11;
                var6 = var6.bind(var2)(var1);
                var6 = var1.lookahead;
                if (!(var6 <= var18)) {
                    _fun94762_ip = 2920;
                    continue _fun94762
                }
            case 2910:
                var6 = var9;
                if (!(var4 !== var5)) {
                    _fun94762_ip = 3589;
                    continue _fun94762
                }
            case 2920:
                var13 = var1.lookahead;
                if (!(var4 !== var13)) {
                    _fun94762_ip = 3493;
                    continue _fun94762
                }
            case 2933:
                var1.match_length = var4;
                var13 = var1.lookahead;
                var22 = var17;
                var21 = var16;
                var20 = var14;
                if (!(var13 >= var15)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 2961:
                var13 = var1.strstart;
                var22 = var17;
                var21 = var16;
                var20 = var14;
                if (!(var13 > var4)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 2983:
                var13 = var1.strstart;
                var13 = var13 - var9;
                var24 = var19[var13];
                var13 = var13 + 1;
                var23 = var19[var13];
                var21 = var13;
                var20 = var14;
                var22 = var24;
                if (!(var22 === var23)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 3020:
                var13 = var13 + 1;
                var23 = var19[var13];
                var22 = var24;
                var21 = var13;
                var20 = var14;
                if (!(var24 === var23)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 3043:
                var25 = var13 + 1;
                var13 = var19[var25];
                var22 = var24;
                var21 = var25;
                var20 = var14;
                if (!(var24 === var13)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 3066:
                var13 = var1.strstart;
                var13 = var13 + var18;
            case 3076:
                var26 = var25 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3090:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3104:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3118:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3132:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3146:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3160:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3174:
                var26 = var26 + 1;
                var27 = var19[var26];
                var23 = var26;
                if (!(var24 === var27)) {
                    _fun94762_ip = 3198;
                    continue _fun94762
                }
            case 3188:
                var25 = var26;
                var23 = var25;
                if (var23 < var13) {
                    _fun94762_ip = 3076;
                    continue _fun94762
                }
            case 3198:
                var25 = var13 - var23;
                var25 = var18 - var25;
                var1.match_length = var25;
                var26 = var1.match_length;
                var25 = var1.lookahead;
                var22 = var24;
                var21 = var23;
                var20 = var13;
                if (!(var26 > var25)) {
                    _fun94762_ip = 3258;
                    continue _fun94762
                }
            case 3237:
                var25 = var1.lookahead;
                var1.match_length = var25;
                var22 = var24;
                var21 = var23;
                var20 = var13;
            case 3258:
                var13 = var1.match_length;
                if (!(!(var13 >= var15))) {
                    _fun94762_ip = 3345;
                    continue _fun94762
                }
            case 3268:
                var23 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var8];
                var24 = var23.bind(var2)(var13);
                var23 = var24._tr_tally;
                var25 = var1.window;
                var13 = var1.strstart;
                var13 = var25[var13];
                var13 = var23.bind(var24)(var1, var4, var13);
                var23 = var1.lookahead;
                var23 = var23 - 1;
                var1.lookahead = var23;
                var23 = var1.strstart;
                var23 = var23 + 1;
                var1.strstart = var23;
                _fun94762_ip = 3435;
                continue _fun94762;
            case 3345:
                var24 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var8];
                var25 = var24.bind(var2)(var23);
                var24 = var25._tr_tally;
                var23 = var1.match_length;
                var23 = var23 - var15;
                var13 = var24.bind(var25)(var1, var9, var23);
                var25 = var1.lookahead;
                var24 = var1.match_length;
                var24 = var25 - var24;
                var1.lookahead = var24;
                var25 = var1.strstart;
                var24 = var1.match_length;
                var24 = var25 + var24;
                var1.strstart = var24;
                var1.match_length = var4;
            case 3435:
                var17 = var22;
                var16 = var21;
                var14 = var20;
                if (!var13) {
                    _fun94762_ip = 2881;
                    continue _fun94762
                }
            case 3450:
                var13 = _closure1_slot7;
                var13 = var13.bind(var2)(var1, var10);
                var13 = var1.strm;
                var13 = var13.avail_out;
                var17 = var22;
                var16 = var21;
                var14 = var20;
                var6 = var9;
                if (!(var4 !== var13)) {
                    _fun94762_ip = 3589;
                    continue _fun94762
                }
            case 3488:
                _fun94762_ip = 2881;
                continue _fun94762;
            case 3493:
                var1.insert = var4;
                var14 = 4;
                if (!(var14 !== var5)) {
                    _fun94762_ip = 3552;
                    continue _fun94762
                }
            case 3506:
                var16 = var1.last_lit;
                var13 = var8;
                if (!var16) {
                    _fun94762_ip = 3550;
                    continue _fun94762
                }
            case 3518:
                var16 = _closure1_slot7;
                var16 = var16.bind(var2)(var1, var10);
                var16 = var1.strm;
                var16 = var16.avail_out;
                var13 = var8;
                if (!(var4 === var16)) {
                    _fun94762_ip = 3550;
                    continue _fun94762
                }
            case 3547:
                var13 = var9;
            case 3550:
                _fun94762_ip = 3586;
                continue _fun94762;
            case 3552:
                var17 = _closure1_slot7;
                var16 = true;
                var16 = var17.bind(var2)(var1, var16);
                var16 = var1.strm;
                var16 = var16.avail_out;
                if (!(var4 === var16)) {
                    _fun94762_ip = 3583;
                    continue _fun94762
                }
            case 3580:
                var14 = var15;
            case 3583:
                var13 = var14;
            case 3586:
                var6 = var13;
            case 3589:
                var11 = var6;
            case 3592:
                _fun94762_ip = 3850;
                continue _fun94762;
            case 3597:
                var6 = var1.lookahead;
                if (!(var4 === var6)) {
                    _fun94762_ip = 3626;
                    continue _fun94762
                }
            case 3607:
                var6 = _closure1_slot11;
                var6 = var6.bind(var2)(var1);
                var6 = var1.lookahead;
                if (!(var4 !== var6)) {
                    _fun94762_ip = 3744;
                    continue _fun94762
                }
            case 3626:
                var1.match_length = var4;
                var13 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var14 = var13.bind(var2)(var6);
                var13 = var14._tr_tally;
                var15 = var1.window;
                var6 = var1.strstart;
                var6 = var15[var6];
                var6 = var13.bind(var14)(var1, var4, var6);
                var13 = var1.lookahead;
                var13 = var13 - 1;
                var1.lookahead = var13;
                var13 = var1.strstart;
                var13 = var13 + 1;
                var1.strstart = var13;
                if (!var6) {
                    _fun94762_ip = 3597;
                    continue _fun94762
                }
            case 3710:
                var6 = _closure1_slot7;
                var6 = var6.bind(var2)(var1, var10);
                var6 = var1.strm;
                var13 = var6.avail_out;
                var6 = var9;
                if (!(var4 !== var13)) {
                    _fun94762_ip = 3847;
                    continue _fun94762
                }
            case 3739:
                _fun94762_ip = 3597;
                continue _fun94762;
            case 3744:
                var6 = var9;
                if (!(var4 !== var5)) {
                    _fun94762_ip = 3847;
                    continue _fun94762
                }
            case 3751:
                var1.insert = var4;
                var14 = 4;
                if (!(var14 !== var5)) {
                    _fun94762_ip = 3810;
                    continue _fun94762
                }
            case 3764:
                var15 = var1.last_lit;
                var13 = var8;
                if (!var15) {
                    _fun94762_ip = 3808;
                    continue _fun94762
                }
            case 3776:
                var15 = _closure1_slot7;
                var15 = var15.bind(var2)(var1, var10);
                var15 = var1.strm;
                var15 = var15.avail_out;
                var13 = var8;
                if (!(var4 === var15)) {
                    _fun94762_ip = 3808;
                    continue _fun94762
                }
            case 3805:
                var13 = var9;
            case 3808:
                _fun94762_ip = 3844;
                continue _fun94762;
            case 3810:
                var16 = _closure1_slot7;
                var15 = true;
                var15 = var16.bind(var2)(var1, var15);
                var15 = var1.strm;
                var15 = var15.avail_out;
                if (!(var4 === var15)) {
                    _fun94762_ip = 3841;
                    continue _fun94762
                }
            case 3838:
                var14 = 3;
            case 3841:
                var13 = var14;
            case 3844:
                var6 = var13;
            case 3847:
                var11 = var6;
            case 3850:
                var6 = 3;
                var13 = var6 !== var11;
                if (!var13) {
                    _fun94762_ip = 3867;
                    continue _fun94762
                }
            case 3860:
                var14 = 4;
                var13 = var14 !== var11;
            case 3867:
                if (var13) {
                    _fun94762_ip = 3876;
                    continue _fun94762
                }
            case 3870:
                var1.status = var12;
            case 3876:
                if (!(var9 !== var11)) {
                    _fun94762_ip = 4391;
                    continue _fun94762
                }
            case 3883:
                if (!(var6 !== var11)) {
                    _fun94762_ip = 4391;
                    continue _fun94762
                }
            case 3890:
                if (!(var8 === var11)) {
                    _fun94762_ip = 4043;
                    continue _fun94762
                }
            case 3897:
                if (!(var9 !== var5)) {
                    _fun94762_ip = 3993;
                    continue _fun94762
                }
            case 3901:
                if (!(var7 !== var5)) {
                    _fun94762_ip = 4021;
                    continue _fun94762
                }
            case 3905:
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var8];
                var9 = var9.bind(var2)(var7);
                var7 = var9._tr_stored_block;
                var32 = var9;
                var31 = var1;
                var30 = 0;
                var29 = 0;
                var28 = false;
                var7 = var32[var7](var31, var30, var29, var28, var27);
                if (!(var6 === var5)) {
                    _fun94762_ip = 4021;
                    continue _fun94762
                }
            case 3948:
                var7 = _closure1_slot5;
                var6 = var1.head;
                var6 = var7.bind(var2)(var6);
                var6 = var1.lookahead;
                if (!(var4 === var6)) {
                    _fun94762_ip = 4021;
                    continue _fun94762
                }
            case 3973:
                var1.strstart = var4;
                var1.block_start = var4;
                var1.insert = var4;
                _fun94762_ip = 4021;
                continue _fun94762;
            case 3993:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var7 = var7.bind(var2)(var6);
                var6 = var7._tr_align;
                var6 = var6.bind(var7)(var1);
            case 4021:
                var0 = _closure1_slot6;
                var0 = var0.bind(var2)(var3);
                var0 = var3.avail_out;
                if (!(var4 !== var0)) {
                    _fun94762_ip = 4377;
                    continue _fun94762
                }
            case 4043:
                var2 = 4;
                var0 = 0;
                if (!(var2 === var5)) {
                    _fun94762_ip = 4375;
                    continue _fun94762
                }
            case 4055:
                var2 = var1.wrap;
                var6 = var2 <= var4;
                var5 = 1;
                var2 = var5;
                if (var6) {
                    _fun94762_ip = 4372;
                    continue _fun94762
                }
            case 4077:
                var7 = var1.wrap;
                var6 = 2;
                if (!(var6 !== var7)) {
                    _fun94762_ip = 4145;
                    continue _fun94762
                }
            case 4090:
                var8 = _closure1_slot9;
                var7 = var3.adler;
                var6 = 16;
                var6 = var7 >>> var6;
                var7 = undefined;
                var6 = var8.bind(var7)(var1, var6);
                var9 = var3.adler;
                var6 = 65535;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                _fun94762_ip = 4318;
                continue _fun94762;
            case 4145:
                var8 = _closure1_slot8;
                var6 = var3.adler;
                var9 = 255;
                var6 = var9 & var6;
                var7 = undefined;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.adler;
                var12 = 8;
                var6 = var6 >> var12;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.adler;
                var11 = 16;
                var6 = var6 >> var11;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.adler;
                var10 = 24;
                var6 = var6 >> var10;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.total_in;
                var6 = var9 & var6;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.total_in;
                var6 = var6 >> var12;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.total_in;
                var6 = var6 >> var11;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
                var6 = var3.total_in;
                var6 = var6 >> var10;
                var6 = var6 & var9;
                var6 = var8.bind(var7)(var1, var6);
            case 4318:
                var7 = _closure1_slot6;
                var6 = undefined;
                var6 = var7.bind(var6)(var3);
                var6 = var1.wrap;
                if (!(var6 > var4)) {
                    _fun94762_ip = 4357;
                    continue _fun94762
                }
            case 4342:
                var6 = var1.wrap;
                var6 = -var6;
                var1.wrap = var6;
            case 4357:
                var6 = var1.pending;
                if (!(var4 !== var6)) {
                    _fun94762_ip = 4369;
                    continue _fun94762
                }
            case 4367:
                var5 = 0;
            case 4369:
                var2 = var5;
            case 4372:
                var0 = var2;
            case 4375:
                return var0;
            case 4377:
                var0 = -1;
                var1.last_flush = var0;
                return var4;
            case 4391:
                var0 = var3.avail_out;
                if (!(var4 === var0)) {
                    _fun94762_ip = 4413;
                    continue _fun94762
                }
            case 4401:
                var0 = -1;
                var1.last_flush = var0;
            case 4413:
                return var4;
            case 4415:
                var5 = _closure1_slot3;
                var2 = undefined;
                var0 = -5;
                var2 = var5.bind(var2)(var3, var0);
                return var0;
            case 4438:
                var0 = -1;
                var1.last_flush = var0;
                return var4;
            case 4452:
                var2 = _closure1_slot3;
                var1 = var3.avail_out;
                var0 = -5;
                if (!(var4 !== var1)) {
                    _fun94762_ip = 4481;
                    continue _fun94762
                }
            case 4475:
                var0 = -2;
            case 4481:
                var1 = undefined;
                var1 = var2.bind(var1)(var3, var0);
                return var0;
            case 4491:
                if (!var3) {
                    _fun94762_ip = 4515;
                    continue _fun94762
                }
            case 4494:
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = -2;
                var0 = var2.bind(var1)(var3, var0);
            case 4515:
                var0 = -2;
                return var0;
        }
    };
    var1.deflate = var2;
    var2 = function(arg0) { // Original name: deflateEnd, environment: var0
        _fun94763: for (var _fun94763_ip = 0;;) switch (_fun94763_ip) {
            case 0:
                var5 = arg0;
                var2 = -2;
                var0 = var2;
                if (!var5) {
                    _fun94763_ip = 158;
                    continue _fun94763
                }
            case 18:
                var1 = var5.state;
                var0 = var2;
                if (!var1) {
                    _fun94763_ip = 158;
                    continue _fun94763
                }
            case 32:
                var1 = var5.state;
                var4 = var1.status;
                var1 = 42;
                if (!(var1 !== var4)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 49:
                var1 = 69;
                if (!(var1 !== var4)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 56:
                var1 = 73;
                if (!(var1 !== var4)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 63:
                var1 = 91;
                if (!(var1 !== var4)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 70:
                var1 = 103;
                if (!(var4 !== var1)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 77:
                var1 = 113;
                if (!(var4 !== var1)) {
                    _fun94763_ip = 94;
                    continue _fun94763
                }
            case 84:
                var1 = 666;
                if (!(var4 === var1)) {
                    _fun94763_ip = 137;
                    continue _fun94763
                }
            case 94:
                var1 = null;
                var5.state = var1;
                var3 = 113;
                var1 = 0;
                if (!(var4 === var3)) {
                    _fun94763_ip = 135;
                    continue _fun94763
                }
            case 111:
                var6 = _closure1_slot3;
                var4 = undefined;
                var3 = -3;
                var4 = var6.bind(var4)(var5, var3);
                var1 = var3;
            case 135:
                _fun94763_ip = 155;
                continue _fun94763;
            case 137:
                var4 = _closure1_slot3;
                var3 = undefined;
                var3 = var4.bind(var3)(var5, var2);
                var1 = var2;
            case 155:
                var0 = var1;
            case 158:
                return var0;
        }
    };
    var1.deflateEnd = var2;
    var0 = function(arg0, arg1) { // Original name: deflateSetDictionary, environment: var0
        _fun94764: for (var _fun94764_ip = 0;;) switch (_fun94764_ip) {
            case 0:
                var4 = arg0;
                var13 = arg1;
                var6 = var13.length;
                if (!var4) {
                    _fun94764_ip = 22;
                    continue _fun94764
                }
            case 14:
                var0 = var4.state;
                if (var0) {
                    _fun94764_ip = 30;
                    continue _fun94764
                }
            case 22:
                var0 = -2;
                return var0;
            case 30:
                var2 = var4.state;
                var1 = var2.wrap;
                var7 = 2;
                if (!(var7 !== var1)) {
                    _fun94764_ip = 649;
                    continue _fun94764
                }
            case 51:
                var12 = 1;
                var0 = var12 === var1;
                if (!var0) {
                    _fun94764_ip = 76;
                    continue _fun94764
                }
            case 61:
                var5 = var2.status;
                var3 = 42;
                if (!(var3 === var5)) {
                    _fun94764_ip = 649;
                    continue _fun94764
                }
            case 76:
                var3 = var2.lookahead;
                if (var3) {
                    _fun94764_ip = 649;
                    continue _fun94764
                }
            case 88:
                if (!var0) {
                    _fun94764_ip = 142;
                    continue _fun94764
                }
            case 91:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var8 = undefined;
                var5 = var3.bind(var8)(var0);
                var22 = var4.adler;
                var19 = 0;
                var23 = undefined;
                var21 = var13;
                var20 = var6;
                var0 = var23[var5](var22, var21, var20, var19, var18);
                var4.adler = var0;
            case 142:
                var0 = 0;
                var2.wrap = var0;
                var3 = var2.w_size;
                var8 = var13;
                var9 = var6;
                if (!(var9 >= var3)) {
                    _fun94764_ip = 320;
                    continue _fun94764
                }
            case 169:
                if (!(var0 === var1)) {
                    _fun94764_ip = 211;
                    continue _fun94764
                }
            case 173:
                var10 = _closure1_slot5;
                var5 = var2.head;
                var3 = undefined;
                var3 = var10.bind(var3)(var5);
                var2.strstart = var0;
                var2.block_start = var0;
                var2.insert = var0;
            case 211:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = var3[var12];
                var10 = undefined;
                var5 = var11.bind(var10)(var5);
                var15 = var5.Buf8;
                var22 = var2.w_size;
                var14 = var15.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var15
                    }
                });
                var23 = var14;
                var5 = new var23[var15](var22, var21);
                var5 = var5 instanceof Object ? var5 : var14;
                var3 = var3[var12];
                var11 = var11.bind(var10)(var3);
                var10 = var11.arraySet;
                var3 = var2.w_size;
                var20 = var6 - var3;
                var19 = var2.w_size;
                var23 = var11;
                var22 = var5;
                var21 = var13;
                var18 = 0;
                var3 = var23[var10](var22, var21, var20, var19, var18, var17);
                var9 = var2.w_size;
                var8 = var5;
            case 320:
                var3 = var4.avail_in;
                var6 = var4.next_in;
                var5 = var4.input;
                var4.avail_in = var9;
                var4.next_in = var0;
                var4.input = var8;
                var8 = _closure1_slot11;
                var10 = undefined;
                var8 = var8.bind(var10)(var2);
                var8 = var2.lookahead;
                var9 = 3;
                if (!(var8 >= var9)) {
                    _fun94764_ip = 553;
                    continue _fun94764
                }
            case 386:
                var14 = var2.strstart;
                var8 = var2.lookahead;
                var13 = var8 - var7;
            case 402:
                var15 = var2.ins_h;
                var8 = var2.hash_shift;
                var15 = var15 << var8;
                var16 = var2.window;
                var8 = var14 + var9;
                var8 = var8 - var12;
                var8 = var16[var8];
                var15 = var15 ^ var8;
                var8 = var2.hash_mask;
                var8 = var15 & var8;
                var2.ins_h = var8;
                var16 = var2.prev;
                var8 = var2.w_mask;
                var15 = var14 & var8;
                var17 = var2.head;
                var8 = var2.ins_h;
                var8 = var17[var8];
                var16[var15] = var8;
                var15 = var2.head;
                var8 = var2.ins_h;
                var15[var8] = var14;
                var8 = var14 + 1;
                var13 = var13 - 1;
                var14 = var8;
                if (var13) {
                    _fun94764_ip = 402;
                    continue _fun94764
                }
            case 519:
                var2.strstart = var8;
                var2.lookahead = var7;
                var8 = _closure1_slot11;
                var8 = var8.bind(var10)(var2);
                var8 = var2.lookahead;
                if (var8 >= var9) {
                    _fun94764_ip = 386;
                    continue _fun94764
                }
            case 553:
                var9 = var2.strstart;
                var8 = var2.lookahead;
                var8 = var9 + var8;
                var2.strstart = var8;
                var8 = var2.strstart;
                var2.block_start = var8;
                var8 = var2.lookahead;
                var2.insert = var8;
                var2.lookahead = var0;
                var2.prev_length = var7;
                var2.match_length = var7;
                var2.match_available = var0;
                var4.next_in = var6;
                var4.input = var5;
                var4.avail_in = var3;
                var2.wrap = var1;
                return var0;
            case 649:
                var0 = -2;
                return var0;
        }
    };
    var1.deflateSetDictionary = var0;
    var0 = 'pako deflate (from Nodeca project)';
    var1.deflateInfo = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12371, 12367, 12372, 12373, 12374]);