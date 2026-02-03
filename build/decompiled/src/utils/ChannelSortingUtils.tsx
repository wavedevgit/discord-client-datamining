// utils/ChannelSortingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun115509: for (var _fun115509_ip = 0;;) switch (_fun115509_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var1 = null;
                var0 = var1 != var6;
                if (!var0) {
                    _fun115509_ip = 19;
                    continue _fun115509
                }
            case 15:
                var0 = var1 != var5;
            case 19:
                if (!var0) {
                    _fun115509_ip = 93;
                    continue _fun115509
                }
            case 22:
                var1 = var6 === var5;
                if (var1) {
                    _fun115509_ip = 58;
                    continue _fun115509
                }
            case 29:
                var2 = _closure1_slot2;
                var4 = undefined;
                var2 = var2.bind(var4)(var6);
                if (!var2) {
                    _fun115509_ip = 55;
                    continue _fun115509
                }
            case 46:
                var3 = _closure1_slot2;
                var2 = var3.bind(var4)(var5);
            case 55:
                var1 = var2;
            case 58:
                if (var1) {
                    _fun115509_ip = 90;
                    continue _fun115509
                }
            case 61:
                var2 = _closure1_slot3;
                var4 = undefined;
                var2 = var2.bind(var4)(var6);
                if (!var2) {
                    _fun115509_ip = 87;
                    continue _fun115509
                }
            case 78:
                var3 = _closure1_slot3;
                var2 = var3.bind(var4)(var5);
            case 87:
                var1 = var2;
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun115510: for (var _fun115510_ip = 0;;) switch (_fun115510_ip) {
            case 0:
                var8 = arg0;
                var7 = arg2;
                var6 = arg3;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = -1;
                var _closure2_slot1 = var1;
                var2 = var6.find;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun115511: for (var _fun115511_ip = 0;;) switch (_fun115511_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.channel;
                            var1 = var0.id;
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun115511_ip = 36;
                                continue _fun115511
                            }
                        case 27:
                            var1 = arg1;
                            _closure2_slot1 = var1;
                            var0 = true;
                        case 36:
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1);
                var1 = _closure2_slot1;
                var5 = 0;
                if (!(!(var1 < var5))) {
                    _fun115510_ip = 127;
                    continue _fun115510
                }
            case 55:
                var4 = _closure2_slot1;
                if (!(var4 >= var5)) {
                    _fun115510_ip = 121;
                    continue _fun115510
                }
            case 63:
                var0 = var6.length;
                var2 = undefined;
                if (!(var4 < var0)) {
                    _fun115510_ip = 121;
                    continue _fun115510
                }
            case 77:
                var0 = var6[var4];
                var9 = _closure1_slot5;
                var1 = var0.channel;
                var1 = var1.type;
                var1 = var9.bind(var2)(var1, var7);
                if (var1) {
                    _fun115510_ip = 125;
                    continue _fun115510
                }
            case 104:
                var4 = var4 + var8;
                if (!(var4 >= var5)) {
                    _fun115510_ip = 121;
                    continue _fun115510
                }
            case 112:
                var1 = var6.length;
                if (var4 < var1) {
                    _fun115510_ip = 77;
                    continue _fun115510
                }
            case 121:
                var1 = null;
                return var1;
            case 125:
                return var0;
            case 127:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun115512: for (var _fun115512_ip = 0;;) switch (_fun115512_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var4 = arguments[2];
                var _closure2_slot0 = var2;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun115512_ip = 23;
                    continue _fun115512
                }
            case 21:
                var4 = false;
            case 23:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun115512_ip = 81;
                    continue _fun115512
                }
            case 37:
                _closure2_slot2 = var1;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun115513: for (var _fun115513_ip = 0;;) switch (_fun115513_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.channel;
                            var5 = var0.type;
                            var1 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun115513_ip = 63;
                                continue _fun115513
                            }
                        case 29:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun115513_ip = 60;
                                continue _fun115513
                            }
                        case 36:
                            var4 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var3 = var2.type;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var3, var5);
                        case 60:
                            var0 = var1;
                        case 63:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun115514: for (var _fun115514_ip = 0;;) switch (_fun115514_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.channel;
                            var3 = var0.id;
                            var1 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun115514_ip = 42;
                                continue _fun115514
                            }
                        case 29:
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3 === var1;
                        case 42:
                            if (!var0) {
                                _fun115514_ip = 54;
                                continue _fun115514
                            }
                        case 45:
                            var1 = arg1;
                            _closure2_slot2 = var1;
                            var0 = true;
                        case 54:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot2;
                return var0;
            case 81:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.referenceId = var2;
        var1 = var1.parent_id;
        var0.parentId = var1;
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var7 = var4.isGuildSelectableChannelType;
    var _closure1_slot2 = var7;
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ChannelSortingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.areTypesInSameSection = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun115516: for (var _fun115516_ip = 0;;) switch (_fun115516_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var5 = arg2;
                var2 = arg3;
                var13 = arg4;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun115516_ip = 1381;
                    continue _fun115516
                }
            case 24:
                if (!(var0 != var5)) {
                    _fun115516_ip = 1381;
                    continue _fun115516
                }
            case 31:
                var1 = _closure1_slot4;
                var9 = var1.GUILD_CATEGORY;
                var1 = var7.type;
                if (!(var1 !== var9)) {
                    _fun115516_ip = 1165;
                    continue _fun115516
                }
            case 56:
                var10 = _closure1_slot5;
                var6 = var7.type;
                var1 = var5.type;
                var8 = undefined;
                var1 = var10.bind(var8)(var6, var1);
                if (var1) {
                    _fun115516_ip = 1151;
                    continue _fun115516
                }
            case 84:
                if (!(!(var2 < var4))) {
                    _fun115516_ip = 657;
                    continue _fun115516
                }
            case 91:
                var1 = var5.type;
                if (!(var1 !== var9)) {
                    _fun115516_ip = 382;
                    continue _fun115516
                }
            case 103:
                var6 = _closure1_slot7;
                var1 = true;
                var1 = var6.bind(var8)(var5, var13, var1);
                var10 = var0 != var1;
                var6 = 0;
                if (!var10) {
                    _fun115516_ip = 128;
                    continue _fun115516
                }
            case 125:
                var6 = var1;
            case 128:
                var1 = 1;
                var1 = var6 + var1;
                var11 = var13[var1];
                var12 = _closure1_slot6;
                var18 = var5.id;
                var17 = var7.type;
                var19 = -1;
                var20 = undefined;
                var16 = var13;
                var10 = var20[var12](var19, var18, var17, var16, var15);
                var6 = var0 == var10;
                var1 = null;
                if (var6) {
                    _fun115516_ip = 377;
                    continue _fun115516
                }
            case 180:
                var6 = var7.isGuildVocal;
                var6 = var6.bind(var7)();
                if (!var6) {
                    _fun115516_ip = 239;
                    continue _fun115516
                }
            case 193:
                if (!(var0 != var11)) {
                    _fun115516_ip = 346;
                    continue _fun115516
                }
            case 200:
                var12 = var11.channel;
                var6 = var12.isCategory;
                var6 = var6.bind(var12)();
                if (var6) {
                    _fun115516_ip = 346;
                    continue _fun115516
                }
            case 221:
                var12 = var11.channel;
                var6 = var12.isGuildVocal;
                var6 = var6.bind(var12)();
                if (var6) {
                    _fun115516_ip = 308;
                    continue _fun115516
                }
            case 239:
                var6 = var7.isCategory;
                var12 = var6.bind(var7)();
                var6 = null;
                if (!var12) {
                    _fun115516_ip = 303;
                    continue _fun115516
                }
            case 254:
                if (!(var0 != var11)) {
                    _fun115516_ip = 278;
                    continue _fun115516
                }
            case 258:
                var14 = var11.channel;
                var12 = var14.isCategory;
                var12 = var12.bind(var14)();
                var6 = null;
                if (!var12) {
                    _fun115516_ip = 303;
                    continue _fun115516
                }
            case 278:
                var12 = {};
                var14 = var10.channel;
                var14 = var14.id;
                var12.referenceId = var14;
                var12.parentId = var0;
                var6 = var12;
            case 303:
                var1 = var6;
                _fun115516_ip = 377;
                continue _fun115516;
            case 308:
                var6 = {};
                var12 = var10.channel;
                var12 = var12.id;
                var6.referenceId = var12;
                var11 = var11.channel;
                var11 = var11.parent_id;
                var6.parentId = var11;
                var1 = var6;
                _fun115516_ip = 377;
                continue _fun115516;
            case 346:
                var6 = {};
                var10 = var10.channel;
                var10 = var10.id;
                var6.referenceId = var10;
                var10 = var5.parent_id;
                var6.parentId = var10;
                var1 = var6;
            case 377:
                _fun115516_ip = 652;
                continue _fun115516;
            case 382:
                var10 = _closure1_slot7;
                var6 = true;
                var6 = var10.bind(var8)(var5, var13, var6);
                var11 = var0 != var6;
                var10 = 0;
                if (!var11) {
                    _fun115516_ip = 407;
                    continue _fun115516
                }
            case 404:
                var10 = var6;
            case 407:
                var6 = 1;
                var6 = var10 + var6;
                var12 = var13[var6];
                var14 = _closure1_slot6;
                var18 = var5.id;
                var17 = var7.type;
                var19 = -1;
                var20 = undefined;
                var16 = var13;
                var11 = var20[var14](var19, var18, var17, var16, var15);
                var10 = var0 != var11;
                var6 = null;
                if (!var10) {
                    _fun115516_ip = 649;
                    continue _fun115516
                }
            case 459:
                if (!(var0 != var12)) {
                    _fun115516_ip = 619;
                    continue _fun115516
                }
            case 466:
                var15 = _closure1_slot5;
                var10 = var12.channel;
                var14 = var10.type;
                var10 = var7.type;
                var10 = var15.bind(var8)(var14, var10);
                if (var10) {
                    _fun115516_ip = 581;
                    continue _fun115516
                }
            case 494:
                var14 = _closure1_slot2;
                var10 = var7.type;
                var10 = var14.bind(var8)(var10);
                if (!var10) {
                    _fun115516_ip = 529;
                    continue _fun115516
                }
            case 511:
                var14 = var12.channel;
                var10 = var14.isGuildVocal;
                var10 = var10.bind(var14)();
                if (var10) {
                    _fun115516_ip = 581;
                    continue _fun115516
                }
            case 529:
                var14 = var12.channel;
                var10 = var14.isCategory;
                var10 = var10.bind(var14)();
                var6 = null;
                if (!var10) {
                    _fun115516_ip = 649;
                    continue _fun115516
                }
            case 549:
                var10 = {};
                var14 = var11.channel;
                var14 = var14.id;
                var10.referenceId = var14;
                var14 = var5.id;
                var10.parentId = var14;
                var6 = var10;
                _fun115516_ip = 649;
                continue _fun115516;
            case 581:
                var10 = {};
                var14 = var11.channel;
                var14 = var14.id;
                var10.referenceId = var14;
                var12 = var12.channel;
                var12 = var12.parent_id;
                var10.parentId = var12;
                var6 = var10;
                _fun115516_ip = 649;
                continue _fun115516;
            case 619:
                var10 = {};
                var11 = var11.channel;
                var11 = var11.id;
                var10.referenceId = var11;
                var11 = var5.id;
                var10.parentId = var11;
                var6 = var10;
            case 649:
                var1 = var6;
            case 652:
                _fun115516_ip = 1149;
                continue _fun115516;
            case 657:
                var6 = var5.type;
                if (!(var6 !== var9)) {
                    _fun115516_ip = 890;
                    continue _fun115516
                }
            case 669:
                var9 = _closure1_slot7;
                var6 = true;
                var9 = var9.bind(var8)(var5, var13, var6);
                var10 = var0 != var9;
                var6 = 0;
                if (!var10) {
                    _fun115516_ip = 694;
                    continue _fun115516
                }
            case 691:
                var6 = var9;
            case 694:
                var12 = 1;
                var6 = var6 - var12;
                var10 = var13[var6];
                var11 = _closure1_slot6;
                var18 = var5.id;
                var17 = var7.type;
                var20 = undefined;
                var19 = var12;
                var16 = var13;
                var11 = var20[var11](var19, var18, var17, var16, var15);
                if (!(var0 == var10)) {
                    _fun115516_ip = 781;
                    continue _fun115516
                }
            case 735:
                var6 = var7.isGuildVocal;
                var6 = var6.bind(var7)();
                if (var6) {
                    _fun115516_ip = 781;
                    continue _fun115516
                }
            case 748:
                var6 = {};
                var12 = var0 != var11;
                var9 = null;
                if (!var12) {
                    _fun115516_ip = 769;
                    continue _fun115516
                }
            case 759:
                var12 = var11.channel;
                var9 = var12.id;
            case 769:
                var6.referenceId = var9;
                var6.parentId = var0;
                _fun115516_ip = 885;
                continue _fun115516;
            case 781:
                var12 = _closure1_slot2;
                var9 = var7.type;
                var12 = var12.bind(var8)(var9);
                var9 = null;
                if (!var12) {
                    _fun115516_ip = 882;
                    continue _fun115516
                }
            case 800:
                var12 = var0 != var11;
                var9 = null;
                if (!var12) {
                    _fun115516_ip = 882;
                    continue _fun115516
                }
            case 809:
                var14 = _closure1_slot2;
                var12 = var10.channel;
                var12 = var12.type;
                var12 = var14.bind(var8)(var12);
                if (var12) {
                    _fun115516_ip = 851;
                    continue _fun115516
                }
            case 831:
                var12 = var10.channel;
                var10 = var12.isCategory;
                var10 = var10.bind(var12)();
                var9 = null;
                if (!var10) {
                    _fun115516_ip = 882;
                    continue _fun115516
                }
            case 851:
                var10 = {};
                var11 = var11.channel;
                var11 = var11.id;
                var10.referenceId = var11;
                var11 = var5.parent_id;
                var10.parentId = var11;
                var9 = var10;
            case 882:
                var6 = var9;
            case 885:
                _fun115516_ip = 1146;
                continue _fun115516;
            case 890:
                var10 = _closure1_slot7;
                var9 = true;
                var10 = var10.bind(var8)(var5, var13, var9);
                var11 = var0 != var10;
                var9 = 0;
                if (!var11) {
                    _fun115516_ip = 915;
                    continue _fun115516
                }
            case 912:
                var9 = var10;
            case 915:
                var14 = 1;
                var9 = var9 - var14;
                var11 = var13[var9];
                var12 = _closure1_slot6;
                var18 = var5.id;
                var17 = var7.type;
                var20 = undefined;
                var19 = var14;
                var16 = var13;
                var12 = var20[var12](var19, var18, var17, var16, var15);
                if (!(var0 != var11)) {
                    _fun115516_ip = 1129;
                    continue _fun115516
                }
            case 959:
                var10 = var0 != var12;
                var9 = null;
                if (!var10) {
                    _fun115516_ip = 1143;
                    continue _fun115516
                }
            case 971:
                var15 = _closure1_slot5;
                var10 = var11.channel;
                var14 = var10.type;
                var10 = var7.type;
                var10 = var15.bind(var8)(var14, var10);
                if (var10) {
                    _fun115516_ip = 1091;
                    continue _fun115516
                }
            case 999:
                var10 = var7.isGuildVocal;
                var10 = var10.bind(var7)();
                if (!var10) {
                    _fun115516_ip = 1034;
                    continue _fun115516
                }
            case 1012:
                var14 = _closure1_slot2;
                var10 = var11.channel;
                var10 = var10.type;
                var10 = var14.bind(var8)(var10);
                if (var10) {
                    _fun115516_ip = 1091;
                    continue _fun115516
                }
            case 1034:
                var14 = var11.channel;
                var10 = var14.isCategory;
                var10 = var10.bind(var14)();
                var9 = null;
                if (!var10) {
                    _fun115516_ip = 1143;
                    continue _fun115516
                }
            case 1054:
                var10 = {};
                var14 = var12.channel;
                var14 = var14.id;
                var10.referenceId = var14;
                var14 = var11.channel;
                var14 = var14.id;
                var10.parentId = var14;
                var9 = var10;
                _fun115516_ip = 1143;
                continue _fun115516;
            case 1091:
                var10 = {};
                var12 = var12.channel;
                var12 = var12.id;
                var10.referenceId = var12;
                var11 = var11.channel;
                var11 = var11.parent_id;
                var10.parentId = var11;
                var9 = var10;
                _fun115516_ip = 1143;
                continue _fun115516;
            case 1129:
                var9 = {
                    'referenceId': null,
                    'parentId': null
                };
            case 1143:
                var6 = var9;
            case 1146:
                var1 = var6;
            case 1149:
                _fun115516_ip = 1160;
                continue _fun115516;
            case 1151:
                var6 = _closure1_slot8;
                var1 = var6.bind(var8)(var5);
            case 1160:
                _fun115516_ip = 1379;
                continue _fun115516;
            case 1165:
                if (!(var2 !== var4)) {
                    _fun115516_ip = 1365;
                    continue _fun115516
                }
            case 1172:
                if (!(var2 < var4)) {
                    _fun115516_ip = 1193;
                    continue _fun115516
                }
            case 1176:
                var8 = var7.type;
                var6 = var5.type;
                if (!(var8 !== var6)) {
                    _fun115516_ip = 1365;
                    continue _fun115516
                }
            case 1193:
                var4 = var2 > var4;
                var2 = null;
                if (!var4) {
                    _fun115516_ip = 1363;
                    continue _fun115516
                }
            case 1205:
                var4 = _closure1_slot4;
                var9 = var4.GUILD_CATEGORY;
                var6 = _closure1_slot7;
                var12 = undefined;
                var4 = true;
                var4 = var6.bind(var12)(var5, var13, var4);
                var8 = var0 != var4;
                var6 = 0;
                if (!var8) {
                    _fun115516_ip = 1242;
                    continue _fun115516
                }
            case 1239:
                var6 = var4;
            case 1242:
                var4 = 1;
                var4 = var6 + var4;
                var6 = var13[var4];
                var11 = _closure1_slot6;
                var18 = var5.id;
                var17 = var7.type;
                var19 = -1;
                var20 = undefined;
                var16 = var13;
                var8 = var20[var11](var19, var18, var17, var16, var15);
                var10 = var0 == var8;
                var4 = null;
                if (var10) {
                    _fun115516_ip = 1360;
                    continue _fun115516
                }
            case 1291:
                var10 = var8.channel;
                var10 = var10.id;
                var7 = var7.id;
                var4 = null;
                if (!(var10 !== var7)) {
                    _fun115516_ip = 1360;
                    continue _fun115516
                }
            case 1312:
                if (!(var0 != var6)) {
                    _fun115516_ip = 1332;
                    continue _fun115516
                }
            case 1316:
                var6 = var6.channel;
                var7 = var6.type;
                var6 = null;
                if (!(var7 === var9)) {
                    _fun115516_ip = 1357;
                    continue _fun115516
                }
            case 1332:
                var7 = {};
                var8 = var8.channel;
                var8 = var8.id;
                var7.referenceId = var8;
                var7.parentId = var0;
                var6 = var7;
            case 1357:
                var4 = var6;
            case 1360:
                var2 = var4;
            case 1363:
                _fun115516_ip = 1376;
                continue _fun115516;
            case 1365:
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = var4.bind(var3)(var5);
            case 1376:
                var1 = var2;
            case 1379:
                return var1;
            case 1381:
                return var0;
        }
    };
    var2.getDropData = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun115517: for (var _fun115517_ip = 0;;) switch (_fun115517_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var4 = arg2;
                var10 = arg3;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var1 = new Array(0);
                var _closure2_slot4 = var1;
                var1 = new Array(0);
                var8 = var10._categories;
                var3 = function arg0() {
                    _fun115518: for (var _fun115518_ip = 0;;) switch (_fun115518_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = _closure2_slot2;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun115518_ip = 90;
                                continue _fun115518
                            }
                        case 18:
                            var0 = _closure2_slot3;
                            if (!(var3 != var0)) {
                                _fun115518_ip = 90;
                                continue _fun115518
                            }
                        case 26:
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = var3 != var4;
                            if (!var0) {
                                _fun115518_ip = 49;
                                continue _fun115518
                            }
                        case 45:
                            var0 = var3 != var1;
                        case 49:
                            if (!var0) {
                                _fun115518_ip = 60;
                                continue _fun115518
                            }
                        case 52:
                            var6 = var8[var4];
                            var0 = var3 != var6;
                        case 60:
                            if (!var0) {
                                _fun115518_ip = 76;
                                continue _fun115518
                            }
                        case 63:
                            var4 = var8[var4];
                            var4 = var4.channel;
                            var0 = var4 === var5;
                        case 76:
                            if (!var0) {
                                _fun115518_ip = 87;
                                continue _fun115518
                            }
                        case 79:
                            var1 = var8[var1];
                            var0 = var3 != var1;
                        case 87:
                            if (var0) {
                                _fun115518_ip = 108;
                                continue _fun115518
                            }
                        case 90:
                            var0 = new Array(0);
                            var9 = 0;
                            var11 = var0;
                            var10 = var8;
                            var1 = arraySpread(var11, var10, var9);
                            _fun115518_ip = 154;
                            continue _fun115518;
                        case 108:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.moveItemFromTo;
                            var3 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = var4.bind(var5)(var8, var3, var1);
                        case 154:
                            var4 = _closure2_slot4;
                            var3 = var4.concat;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var5 = var5[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.calculatePositionDeltas;
                            var1 = {};
                            var1.oldOrdering = var8;
                            var1.newOrdering = var0;
                            var8 = function arg0() {
                                var0 = arg0;
                                var0 = var0.channel;
                                var0 = var0.id;
                                return var0;
                            };
                            var1.idGetter = var8;
                            var7 = function arg0() {
                                var0 = arg0;
                                var0 = var0.channel;
                                var0 = var0.position;
                                return var0;
                            };
                            var1.existingPositionGetter = var7;
                            var1 = var5.bind(var6)(var1);
                            var1 = var3.bind(var4)(var1);
                            _closure2_slot4 = var1;
                            return var0;
                    }
                };
                var2 = var5.isCategory;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun115517_ip = 143;
                    continue _fun115517
                }
            case 60:
                var11 = new Array(0);
                var6 = 0;
                var16 = var11;
                var15 = var8;
                var14 = 0;
                var2 = arraySpread(var16, var15, var14);
                var9 = var11.slice;
                var2 = 1;
                var9 = var9.bind(var11)(var2);
                var11 = _closure1_slot7;
                var2 = undefined;
                var12 = var11.bind(var2)(var5, var9);
                var _closure2_slot2 = var12;
                var11 = var11.bind(var2)(var7, var9);
                var _closure2_slot3 = var11;
                var2 = var3.bind(var2)(var9);
                var9 = var2.unshift;
                var6 = var8[var6];
                var6 = var9.bind(var2)(var6);
                var1 = var2;
            case 143:
                var11 = _closure1_slot2;
                var9 = var5.type;
                var2 = undefined;
                var9 = var11.bind(var2)(var9);
                if (var9) {
                    _fun115517_ip = 178;
                    continue _fun115517
                }
            case 165:
                var9 = var5.isCategory;
                var9 = var9.bind(var5)();
                if (!var9) {
                    _fun115517_ip = 258;
                    continue _fun115517
                }
            case 178:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 3;
                var9 = var12[var9];
                var12 = var11.bind(var2)(var9);
                var13 = var1.length;
                var9 = 0;
                var11 = var8;
                if (!(var13 > var9)) {
                    _fun115517_ip = 215;
                    continue _fun115517
                }
            case 212:
                var11 = var1;
            case 215:
                var9 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.channel;
                    var2 = var0.type;
                    var1 = _closure1_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var9 = var12.bind(var2)(var11, var10, var9);
                var11 = _closure1_slot7;
                var12 = var11.bind(var2)(var5, var9);
                _closure2_slot2 = var12;
                var11 = var11.bind(var2)(var7, var9);
                _closure2_slot3 = var11;
                var9 = var3.bind(var2)(var9);
            case 258:
                var9 = var5.isGuildVocal;
                var9 = var9.bind(var5)();
                if (var9) {
                    _fun115517_ip = 284;
                    continue _fun115517
                }
            case 271:
                var9 = var5.isCategory;
                var9 = var9.bind(var5)();
                if (!var9) {
                    _fun115517_ip = 361;
                    continue _fun115517
                }
            case 284:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 3;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var12 = var1.length;
                var11 = 0;
                if (!(var12 > var11)) {
                    _fun115517_ip = 318;
                    continue _fun115517
                }
            case 315:
                var8 = var1;
            case 318:
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.channel;
                    var0 = var1.isGuildVocal;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var9.bind(var2)(var8, var10, var1);
                var6 = _closure1_slot7;
                var8 = var6.bind(var2)(var5, var1);
                _closure2_slot2 = var8;
                var6 = var6.bind(var2)(var7, var1);
                _closure2_slot3 = var6;
                var1 = var3.bind(var2)(var1);
            case 361:
                var1 = var5.parent_id;
                if (!(var1 !== var4)) {
                    _fun115517_ip = 435;
                    continue _fun115517
                }
            case 371:
                var1 = false;
                var _closure2_slot5 = var1;
                var3 = _closure2_slot4;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var0
                    _fun115523: for (var _fun115523_ip = 0;;) switch (_fun115523_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.id;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun115523_ip = 45;
                                continue _fun115523
                            }
                        case 27:
                            var1 = _closure2_slot1;
                            var3.parent_id = var1;
                            var1 = true;
                            _closure2_slot5 = var1;
                            var0 = true;
                        case 45:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = _closure2_slot5;
                if (var1) {
                    _fun115517_ip = 435;
                    continue _fun115517
                }
            case 405:
                var3 = _closure2_slot4;
                var2 = var3.push;
                var1 = {};
                var5 = var5.id;
                var1.id = var5;
                var1.parent_id = var4;
                var1 = var2.bind(var3)(var1);
            case 435:
                var0 = _closure2_slot4;
                return var0;
        }
    };
    var2.getDnDUpdates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 660, 10280, 4576, 2]);