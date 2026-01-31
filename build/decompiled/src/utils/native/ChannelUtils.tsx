// utils/native/ChannelUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function(arg0) { // Original name: getThreadChannelIcon, environment: var1
        _fun44123: for (var _fun44123_ip = 0;;) switch (_fun44123_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot6;
                var1 = var1.PRIVATE_THREAD;
                if (!(var1 !== var2)) {
                    _fun44123_ip = 76;
                    continue _fun44123
                }
            case 20:
                var1 = _closure1_slot6;
                var1 = var1.ANNOUNCEMENT_THREAD;
                if (!(var1 !== var2)) {
                    _fun44123_ip = 52;
                    continue _fun44123
                }
            case 34:
                var1 = _closure1_slot6;
                var1 = var1.PUBLIC_THREAD;
                if (!(var1 !== var2)) {
                    _fun44123_ip = 52;
                    continue _fun44123
                }
            case 48:
                var1 = null;
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 76:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function(arg0, arg1) { // Original name: getChannelIcon, environment: var1
        _fun44124: for (var _fun44124_ip = 0;;) switch (_fun44124_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var7 = null;
                var0 = var5;
                if (!(var7 == var0)) {
                    _fun44124_ip = 17;
                    continue _fun44124
                }
            case 15:
                var0 = {};
            case 17:
                var6 = var0.isRulesChannel;
                var11 = var0.textFocused;
                var9 = var0.locked;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var1 = var2[var1];
                var2 = undefined;
                var10 = var4.bind(var2)(var1);
                var8 = var10.shouldShowMembershipVerificationGate;
                var4 = var3.guild_id;
                var12 = _closure1_slot4;
                var1 = new Array(3);
                var1[0] = var12;
                var12 = _closure1_slot5;
                var1[1] = var12;
                var12 = _closure1_slot3;
                var1[2] = var12;
                var8 = var8.bind(var10)(var4, var1);
                var1 = var3.isForumPost;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun44124_ip = 1673;
                    continue _fun44124
                }
            case 121:
                var4 = _closure1_slot7;
                var1 = var3.type;
                var1 = var4.bind(var2)(var1);
                if (!(var7 == var1)) {
                    _fun44124_ip = 1671;
                    continue _fun44124
                }
            case 142:
                var4 = var3.isMediaChannel;
                var10 = var4.bind(var3)();
                var4 = var3.isNSFW;
                var4 = var4.bind(var3)();
                var13 = var3.type;
                var12 = _closure1_slot6;
                var12 = var12.PRIVATE_THREAD;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1655;
                    continue _fun44124
                }
            case 184:
                var12 = _closure1_slot6;
                var12 = var12.ANNOUNCEMENT_THREAD;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1655;
                    continue _fun44124
                }
            case 201:
                var12 = _closure1_slot6;
                var12 = var12.PUBLIC_THREAD;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1655;
                    continue _fun44124
                }
            case 218:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_CATEGORY;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1633;
                    continue _fun44124
                }
            case 235:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_TEXT;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1444;
                    continue _fun44124
                }
            case 252:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_FORUM;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1254;
                    continue _fun44124
                }
            case 269:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_MEDIA;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1100;
                    continue _fun44124
                }
            case 286:
                var12 = _closure1_slot6;
                var12 = var12.GROUP_DM;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1078;
                    continue _fun44124
                }
            case 303:
                var12 = _closure1_slot6;
                var12 = var12.DM;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 1056;
                    continue _fun44124
                }
            case 320:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_ANNOUNCEMENT;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 902;
                    continue _fun44124
                }
            case 337:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_STAGE_VOICE;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 690;
                    continue _fun44124
                }
            case 354:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_VOICE;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 406;
                    continue _fun44124
                }
            case 368:
                var12 = _closure1_slot6;
                var12 = var12.GUILD_DIRECTORY;
                if (!(var12 !== var13)) {
                    _fun44124_ip = 384;
                    continue _fun44124
                }
            case 382:
                return var7;
            case 384:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 13;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                return var12;
            case 406:
                if (var11) {
                    _fun44124_ip = 668;
                    continue _fun44124
                }
            case 412:
                if (!var8) {
                    _fun44124_ip = 495;
                    continue _fun44124
                }
            case 415:
                if (!(var7 != var5)) {
                    _fun44124_ip = 428;
                    continue _fun44124
                }
            case 419:
                var11 = var5.ignoreTraits;
                if (var11) {
                    _fun44124_ip = 495;
                    continue _fun44124
                }
            case 428:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 23;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.bind(var2)(var3);
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var11) {
                    _fun44124_ip = 478;
                    continue _fun44124
                }
            case 464:
                var11 = 14;
                var11 = var14[var11];
                var11 = var13.bind(var2)(var11);
                _fun44124_ip = 490;
                continue _fun44124;
            case 478:
                var12 = 31;
                var12 = var14[var12];
                var11 = var13.bind(var2)(var12);
            case 490:
                _fun44124_ip = 666;
                continue _fun44124;
            case 495:
                if (!var9) {
                    _fun44124_ip = 536;
                    continue _fun44124
                }
            case 498:
                if (!(var7 != var5)) {
                    _fun44124_ip = 511;
                    continue _fun44124
                }
            case 502:
                var12 = var5.ignoreTraits;
                if (var12) {
                    _fun44124_ip = 536;
                    continue _fun44124
                }
            case 511:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 31;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                _fun44124_ip = 663;
                continue _fun44124;
            case 536:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 23;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.bind(var2)(var3);
                if (!var13) {
                    _fun44124_ip = 599;
                    continue _fun44124
                }
            case 564:
                if (!(var7 != var5)) {
                    _fun44124_ip = 577;
                    continue _fun44124
                }
            case 568:
                var13 = var5.ignoreTraits;
                if (var13) {
                    _fun44124_ip = 599;
                    continue _fun44124
                }
            case 577:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 14;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                _fun44124_ip = 660;
                continue _fun44124;
            case 599:
                if (!var4) {
                    _fun44124_ip = 637;
                    continue _fun44124
                }
            case 602:
                if (!(var7 != var5)) {
                    _fun44124_ip = 615;
                    continue _fun44124
                }
            case 606:
                var14 = var5.ignoreTraits;
                if (var14) {
                    _fun44124_ip = 637;
                    continue _fun44124
                }
            case 615:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 32;
                var14 = var16[var14];
                var14 = var15.bind(var2)(var14);
                _fun44124_ip = 657;
                continue _fun44124;
            case 637:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 12;
                var15 = var17[var15];
                var14 = var16.bind(var2)(var15);
            case 657:
                var13 = var14;
            case 660:
                var12 = var13;
            case 663:
                var11 = var12;
            case 666:
                _fun44124_ip = 688;
                continue _fun44124;
            case 668:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 16;
                var12 = var14[var12];
                var11 = var13.bind(var2)(var12);
            case 688:
                return var11;
            case 690:
                if (!var8) {
                    _fun44124_ip = 773;
                    continue _fun44124
                }
            case 693:
                if (!(var7 != var5)) {
                    _fun44124_ip = 706;
                    continue _fun44124
                }
            case 697:
                var8 = var5.ignoreTraits;
                if (var8) {
                    _fun44124_ip = 773;
                    continue _fun44124
                }
            case 706:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 23;
                var8 = var12[var8];
                var8 = var11.bind(var2)(var8);
                var8 = var8.bind(var2)(var3);
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                if (var8) {
                    _fun44124_ip = 756;
                    continue _fun44124
                }
            case 742:
                var8 = 15;
                var8 = var13[var8];
                var8 = var12.bind(var2)(var8);
                _fun44124_ip = 768;
                continue _fun44124;
            case 756:
                var11 = 31;
                var11 = var13[var11];
                var8 = var12.bind(var2)(var11);
            case 768:
                _fun44124_ip = 900;
                continue _fun44124;
            case 773:
                if (!var9) {
                    _fun44124_ip = 811;
                    continue _fun44124
                }
            case 776:
                if (!(var7 != var5)) {
                    _fun44124_ip = 789;
                    continue _fun44124
                }
            case 780:
                var9 = var5.ignoreTraits;
                if (var9) {
                    _fun44124_ip = 811;
                    continue _fun44124
                }
            case 789:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 31;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                _fun44124_ip = 897;
                continue _fun44124;
            case 811:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 23;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.bind(var2)(var3);
                if (!var11) {
                    _fun44124_ip = 874;
                    continue _fun44124
                }
            case 839:
                if (!(var7 != var5)) {
                    _fun44124_ip = 852;
                    continue _fun44124
                }
            case 843:
                var11 = var5.ignoreTraits;
                if (var11) {
                    _fun44124_ip = 874;
                    continue _fun44124
                }
            case 852:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 15;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                _fun44124_ip = 894;
                continue _fun44124;
            case 874:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 11;
                var12 = var14[var12];
                var11 = var13.bind(var2)(var12);
            case 894:
                var9 = var11;
            case 897:
                var8 = var9;
            case 900:
                return var8;
            case 902:
                if (var6) {
                    _fun44124_ip = 1034;
                    continue _fun44124
                }
            case 908:
                if (!var4) {
                    _fun44124_ip = 946;
                    continue _fun44124
                }
            case 911:
                if (!(var7 != var5)) {
                    _fun44124_ip = 924;
                    continue _fun44124
                }
            case 915:
                var8 = var5.ignoreTraits;
                if (var8) {
                    _fun44124_ip = 946;
                    continue _fun44124
                }
            case 924:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 29;
                var8 = var11[var8];
                var8 = var9.bind(var2)(var8);
                _fun44124_ip = 1032;
                continue _fun44124;
            case 946:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 23;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var9 = var9.bind(var2)(var3);
                if (!var9) {
                    _fun44124_ip = 1009;
                    continue _fun44124
                }
            case 974:
                if (!(var7 != var5)) {
                    _fun44124_ip = 987;
                    continue _fun44124
                }
            case 978:
                var9 = var5.ignoreTraits;
                if (var9) {
                    _fun44124_ip = 1009;
                    continue _fun44124
                }
            case 987:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 30;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                _fun44124_ip = 1029;
                continue _fun44124;
            case 1009:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 10;
                var11 = var13[var11];
                var9 = var12.bind(var2)(var11);
            case 1029:
                var8 = var9;
            case 1032:
                _fun44124_ip = 1054;
                continue _fun44124;
            case 1034:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 21;
                var9 = var12[var9];
                var8 = var11.bind(var2)(var9);
            case 1054:
                return var8;
            case 1056:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 9;
                var8 = var11[var8];
                var8 = var9.bind(var2)(var8);
                return var8;
            case 1078:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 8;
                var8 = var11[var8];
                var8 = var9.bind(var2)(var8);
                return var8;
            case 1100:
                if (var6) {
                    _fun44124_ip = 1232;
                    continue _fun44124
                }
            case 1106:
                if (!var4) {
                    _fun44124_ip = 1144;
                    continue _fun44124
                }
            case 1109:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1122;
                    continue _fun44124
                }
            case 1113:
                var8 = var5.ignoreTraits;
                if (var8) {
                    _fun44124_ip = 1144;
                    continue _fun44124
                }
            case 1122:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 25;
                var8 = var11[var8];
                var8 = var9.bind(var2)(var8);
                _fun44124_ip = 1230;
                continue _fun44124;
            case 1144:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 23;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var9 = var9.bind(var2)(var3);
                if (!var9) {
                    _fun44124_ip = 1207;
                    continue _fun44124
                }
            case 1172:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1185;
                    continue _fun44124
                }
            case 1176:
                var9 = var5.ignoreTraits;
                if (var9) {
                    _fun44124_ip = 1207;
                    continue _fun44124
                }
            case 1185:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 27;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                _fun44124_ip = 1227;
                continue _fun44124;
            case 1207:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 18;
                var11 = var13[var11];
                var9 = var12.bind(var2)(var11);
            case 1227:
                var8 = var9;
            case 1230:
                _fun44124_ip = 1252;
                continue _fun44124;
            case 1232:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 21;
                var9 = var12[var9];
                var8 = var11.bind(var2)(var9);
            case 1252:
                return var8;
            case 1254:
                if (var6) {
                    _fun44124_ip = 1422;
                    continue _fun44124
                }
            case 1260:
                if (!var4) {
                    _fun44124_ip = 1310;
                    continue _fun44124
                }
            case 1263:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1276;
                    continue _fun44124
                }
            case 1267:
                var8 = var5.ignoreTraits;
                if (var8) {
                    _fun44124_ip = 1310;
                    continue _fun44124
                }
            case 1276:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var10) {
                    _fun44124_ip = 1296;
                    continue _fun44124
                }
            case 1287:
                var8 = 26;
                var8 = var12[var8];
                _fun44124_ip = 1303;
                continue _fun44124;
            case 1296:
                var11 = 25;
                var8 = var12[var11];
            case 1303:
                var8 = var9.bind(var2)(var8);
                _fun44124_ip = 1420;
                continue _fun44124;
            case 1310:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 23;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var9 = var9.bind(var2)(var3);
                if (!var9) {
                    _fun44124_ip = 1385;
                    continue _fun44124
                }
            case 1338:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1351;
                    continue _fun44124
                }
            case 1342:
                var9 = var5.ignoreTraits;
                if (var9) {
                    _fun44124_ip = 1385;
                    continue _fun44124
                }
            case 1351:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                if (var10) {
                    _fun44124_ip = 1371;
                    continue _fun44124
                }
            case 1362:
                var9 = 28;
                var9 = var13[var9];
                _fun44124_ip = 1378;
                continue _fun44124;
            case 1371:
                var12 = 27;
                var9 = var13[var12];
            case 1378:
                var9 = var11.bind(var2)(var9);
                _fun44124_ip = 1417;
                continue _fun44124;
            case 1385:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                if (var10) {
                    _fun44124_ip = 1405;
                    continue _fun44124
                }
            case 1396:
                var10 = 17;
                var10 = var13[var10];
                _fun44124_ip = 1412;
                continue _fun44124;
            case 1405:
                var12 = 18;
                var10 = var13[var12];
            case 1412:
                var9 = var11.bind(var2)(var10);
            case 1417:
                var8 = var9;
            case 1420:
                _fun44124_ip = 1442;
                continue _fun44124;
            case 1422:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 21;
                var9 = var11[var9];
                var8 = var10.bind(var2)(var9);
            case 1442:
                return var8;
            case 1444:
                if (var6) {
                    _fun44124_ip = 1611;
                    continue _fun44124
                }
            case 1450:
                if (!var4) {
                    _fun44124_ip = 1488;
                    continue _fun44124
                }
            case 1453:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1466;
                    continue _fun44124
                }
            case 1457:
                var4 = var5.ignoreTraits;
                if (var4) {
                    _fun44124_ip = 1488;
                    continue _fun44124
                }
            case 1466:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 22;
                var4 = var8[var4];
                var4 = var6.bind(var2)(var4);
                _fun44124_ip = 1609;
                continue _fun44124;
            case 1488:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 23;
                var6 = var9[var6];
                var6 = var8.bind(var2)(var6);
                var6 = var6.bind(var2)(var3);
                if (!var6) {
                    _fun44124_ip = 1551;
                    continue _fun44124
                }
            case 1516:
                if (!(var7 != var5)) {
                    _fun44124_ip = 1529;
                    continue _fun44124
                }
            case 1520:
                var5 = var5.ignoreTraits;
                if (var5) {
                    _fun44124_ip = 1551;
                    continue _fun44124
                }
            case 1529:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 19;
                var5 = var8[var5];
                var5 = var6.bind(var2)(var5);
                _fun44124_ip = 1606;
                continue _fun44124;
            case 1551:
                var6 = var3.linkedLobby;
                if (!(var7 == var6)) {
                    _fun44124_ip = 1583;
                    continue _fun44124
                }
            case 1561:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                _fun44124_ip = 1603;
                continue _fun44124;
            case 1583:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 24;
                var7 = var9[var7];
                var6 = var8.bind(var2)(var7);
            case 1603:
                var5 = var6;
            case 1606:
                var4 = var5;
            case 1609:
                _fun44124_ip = 1631;
                continue _fun44124;
            case 1611:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var4 = var6.bind(var2)(var5);
            case 1631:
                return var4;
            case 1633:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                return var4;
            case 1655:
                var4 = _closure1_slot7;
                var3 = var3.type;
                var3 = var4.bind(var2)(var3);
                return var3;
            case 1671:
                return var1;
            case 1673:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 16;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function(arg0, arg1) { // Original name: getChannelIconComponent, environment: var1
        _fun44125: for (var _fun44125_ip = 0;;) switch (_fun44125_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var5 = null;
                var0 = var3;
                if (!(var5 == var0)) {
                    _fun44125_ip = 17;
                    continue _fun44125
                }
            case 15:
                var0 = {};
            case 17:
                var6 = var0.isRulesChannel;
                var10 = var0.textFocused;
                var8 = var0.locked;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var1 = var2[var1];
                var2 = undefined;
                var11 = var7.bind(var2)(var1);
                var9 = var11.shouldShowMembershipVerificationGate;
                var7 = var4.guild_id;
                var12 = _closure1_slot4;
                var1 = new Array(3);
                var1[0] = var12;
                var12 = _closure1_slot5;
                var1[1] = var12;
                var12 = _closure1_slot3;
                var1[2] = var12;
                var7 = var9.bind(var11)(var7, var1);
                var1 = var4.isForumPost;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun44125_ip = 1930;
                    continue _fun44125
                }
            case 121:
                var1 = var4.isMediaChannel;
                var9 = var1.bind(var4)();
                var1 = var4.isNSFW;
                var1 = var1.bind(var4)();
                var12 = var4.type;
                var11 = _closure1_slot6;
                var11 = var11.PRIVATE_THREAD;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1902;
                    continue _fun44125
                }
            case 163:
                var11 = _closure1_slot6;
                var11 = var11.ANNOUNCEMENT_THREAD;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1874;
                    continue _fun44125
                }
            case 180:
                var11 = _closure1_slot6;
                var11 = var11.PUBLIC_THREAD;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1874;
                    continue _fun44125
                }
            case 197:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_CATEGORY;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1846;
                    continue _fun44125
                }
            case 214:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_TEXT;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1624;
                    continue _fun44125
                }
            case 231:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_FORUM;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1371;
                    continue _fun44125
                }
            case 248:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_MEDIA;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1193;
                    continue _fun44125
                }
            case 265:
                var11 = _closure1_slot6;
                var11 = var11.GROUP_DM;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1165;
                    continue _fun44125
                }
            case 282:
                var11 = _closure1_slot6;
                var11 = var11.DM;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 1137;
                    continue _fun44125
                }
            case 299:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_ANNOUNCEMENT;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 959;
                    continue _fun44125
                }
            case 316:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_STAGE_VOICE;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 717;
                    continue _fun44125
                }
            case 333:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_VOICE;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 391;
                    continue _fun44125
                }
            case 347:
                var11 = _closure1_slot6;
                var11 = var11.GUILD_DIRECTORY;
                if (!(var11 !== var12)) {
                    _fun44125_ip = 363;
                    continue _fun44125
                }
            case 361:
                return var2;
            case 363:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 59;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.HubIcon;
                return var11;
            case 391:
                if (var10) {
                    _fun44125_ip = 689;
                    continue _fun44125
                }
            case 397:
                if (!var7) {
                    _fun44125_ip = 492;
                    continue _fun44125
                }
            case 400:
                if (!(var5 != var3)) {
                    _fun44125_ip = 413;
                    continue _fun44125
                }
            case 404:
                var10 = var3.ignoreTraits;
                if (var10) {
                    _fun44125_ip = 492;
                    continue _fun44125
                }
            case 413:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 23;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.bind(var2)(var4);
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                if (var10) {
                    _fun44125_ip = 469;
                    continue _fun44125
                }
            case 449:
                var10 = 56;
                var10 = var13[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.VoiceLockIcon;
                _fun44125_ip = 487;
                continue _fun44125;
            case 469:
                var11 = 53;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var10 = var11.LockIcon;
            case 487:
                _fun44125_ip = 687;
                continue _fun44125;
            case 492:
                if (!var8) {
                    _fun44125_ip = 539;
                    continue _fun44125
                }
            case 495:
                if (!(var5 != var3)) {
                    _fun44125_ip = 508;
                    continue _fun44125
                }
            case 499:
                var11 = var3.ignoreTraits;
                if (var11) {
                    _fun44125_ip = 539;
                    continue _fun44125
                }
            case 508:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 53;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.LockIcon;
                _fun44125_ip = 684;
                continue _fun44125;
            case 539:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 23;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                var12 = var12.bind(var2)(var4);
                if (!var12) {
                    _fun44125_ip = 608;
                    continue _fun44125
                }
            case 567:
                if (!(var5 != var3)) {
                    _fun44125_ip = 580;
                    continue _fun44125
                }
            case 571:
                var12 = var3.ignoreTraits;
                if (var12) {
                    _fun44125_ip = 608;
                    continue _fun44125
                }
            case 580:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 56;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                var12 = var12.VoiceLockIcon;
                _fun44125_ip = 681;
                continue _fun44125;
            case 608:
                if (!var1) {
                    _fun44125_ip = 652;
                    continue _fun44125
                }
            case 611:
                if (!(var5 != var3)) {
                    _fun44125_ip = 624;
                    continue _fun44125
                }
            case 615:
                var13 = var3.ignoreTraits;
                if (var13) {
                    _fun44125_ip = 652;
                    continue _fun44125
                }
            case 624:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 57;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.VoiceWarningIcon;
                _fun44125_ip = 678;
                continue _fun44125;
            case 652:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 58;
                var14 = var16[var14];
                var14 = var15.bind(var2)(var14);
                var13 = var14.VoiceNormalIcon;
            case 678:
                var12 = var13;
            case 681:
                var11 = var12;
            case 684:
                var10 = var11;
            case 687:
                _fun44125_ip = 715;
                continue _fun44125;
            case 689:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 33;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var10 = var11.ChatIcon;
            case 715:
                return var10;
            case 717:
                if (!var7) {
                    _fun44125_ip = 812;
                    continue _fun44125
                }
            case 720:
                if (!(var5 != var3)) {
                    _fun44125_ip = 733;
                    continue _fun44125
                }
            case 724:
                var7 = var3.ignoreTraits;
                if (var7) {
                    _fun44125_ip = 812;
                    continue _fun44125
                }
            case 733:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 23;
                var7 = var11[var7];
                var7 = var10.bind(var2)(var7);
                var7 = var7.bind(var2)(var4);
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                if (var7) {
                    _fun44125_ip = 789;
                    continue _fun44125
                }
            case 769:
                var7 = 54;
                var7 = var12[var7];
                var7 = var11.bind(var2)(var7);
                var7 = var7.StageLockIcon;
                _fun44125_ip = 807;
                continue _fun44125;
            case 789:
                var10 = 53;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var7 = var10.LockIcon;
            case 807:
                _fun44125_ip = 957;
                continue _fun44125;
            case 812:
                if (!var8) {
                    _fun44125_ip = 856;
                    continue _fun44125
                }
            case 815:
                if (!(var5 != var3)) {
                    _fun44125_ip = 828;
                    continue _fun44125
                }
            case 819:
                var8 = var3.ignoreTraits;
                if (var8) {
                    _fun44125_ip = 856;
                    continue _fun44125
                }
            case 828:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 53;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.LockIcon;
                _fun44125_ip = 954;
                continue _fun44125;
            case 856:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 23;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.bind(var2)(var4);
                if (!var10) {
                    _fun44125_ip = 925;
                    continue _fun44125
                }
            case 884:
                if (!(var5 != var3)) {
                    _fun44125_ip = 897;
                    continue _fun44125
                }
            case 888:
                var10 = var3.ignoreTraits;
                if (var10) {
                    _fun44125_ip = 925;
                    continue _fun44125
                }
            case 897:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 54;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.StageLockIcon;
                _fun44125_ip = 951;
                continue _fun44125;
            case 925:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 55;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var10 = var11.StageIcon;
            case 951:
                var8 = var10;
            case 954:
                var7 = var8;
            case 957:
                return var7;
            case 959:
                if (var6) {
                    _fun44125_ip = 1109;
                    continue _fun44125
                }
            case 965:
                if (!var1) {
                    _fun44125_ip = 1009;
                    continue _fun44125
                }
            case 968:
                if (!(var5 != var3)) {
                    _fun44125_ip = 981;
                    continue _fun44125
                }
            case 972:
                var7 = var3.ignoreTraits;
                if (var7) {
                    _fun44125_ip = 1009;
                    continue _fun44125
                }
            case 981:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 50;
                var7 = var10[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.AnnouncementsWarningIcon;
                _fun44125_ip = 1107;
                continue _fun44125;
            case 1009:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 23;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.bind(var2)(var4);
                if (!var8) {
                    _fun44125_ip = 1078;
                    continue _fun44125
                }
            case 1037:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1050;
                    continue _fun44125
                }
            case 1041:
                var8 = var3.ignoreTraits;
                if (var8) {
                    _fun44125_ip = 1078;
                    continue _fun44125
                }
            case 1050:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 51;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.AnnouncementsLockIcon;
                _fun44125_ip = 1104;
                continue _fun44125;
            case 1078:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 52;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var8 = var10.AnnouncementsIcon;
            case 1104:
                var7 = var8;
            case 1107:
                _fun44125_ip = 1135;
                continue _fun44125;
            case 1109:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 37;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var7 = var8.BookCheckIcon;
            case 1135:
                return var7;
            case 1137:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 49;
                var7 = var10[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.AtIcon;
                return var7;
            case 1165:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 48;
                var7 = var10[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.GroupIcon;
                return var7;
            case 1193:
                if (var6) {
                    _fun44125_ip = 1343;
                    continue _fun44125
                }
            case 1199:
                if (!var1) {
                    _fun44125_ip = 1243;
                    continue _fun44125
                }
            case 1202:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1215;
                    continue _fun44125
                }
            case 1206:
                var7 = var3.ignoreTraits;
                if (var7) {
                    _fun44125_ip = 1243;
                    continue _fun44125
                }
            case 1215:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 42;
                var7 = var10[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.ImageWarningIcon;
                _fun44125_ip = 1341;
                continue _fun44125;
            case 1243:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 23;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.bind(var2)(var4);
                if (!var8) {
                    _fun44125_ip = 1312;
                    continue _fun44125
                }
            case 1271:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1284;
                    continue _fun44125
                }
            case 1275:
                var8 = var3.ignoreTraits;
                if (var8) {
                    _fun44125_ip = 1312;
                    continue _fun44125
                }
            case 1284:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 44;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.ImageLockIcon;
                _fun44125_ip = 1338;
                continue _fun44125;
            case 1312:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 46;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var8 = var10.ImageIcon;
            case 1338:
                var7 = var8;
            case 1341:
                _fun44125_ip = 1369;
                continue _fun44125;
            case 1343:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 37;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var7 = var8.BookCheckIcon;
            case 1369:
                return var7;
            case 1371:
                if (var6) {
                    _fun44125_ip = 1596;
                    continue _fun44125
                }
            case 1377:
                if (!var1) {
                    _fun44125_ip = 1447;
                    continue _fun44125
                }
            case 1380:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1393;
                    continue _fun44125
                }
            case 1384:
                var7 = var3.ignoreTraits;
                if (var7) {
                    _fun44125_ip = 1447;
                    continue _fun44125
                }
            case 1393:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                if (var9) {
                    _fun44125_ip = 1424;
                    continue _fun44125
                }
            case 1404:
                var7 = 43;
                var7 = var11[var7];
                var7 = var10.bind(var2)(var7);
                var7 = var7.ForumWarningIcon;
                _fun44125_ip = 1442;
                continue _fun44125;
            case 1424:
                var8 = 42;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var7 = var8.ImageWarningIcon;
            case 1442:
                _fun44125_ip = 1594;
                continue _fun44125;
            case 1447:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 23;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var8 = var8.bind(var2)(var4);
                if (!var8) {
                    _fun44125_ip = 1539;
                    continue _fun44125
                }
            case 1475:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1488;
                    continue _fun44125
                }
            case 1479:
                var8 = var3.ignoreTraits;
                if (var8) {
                    _fun44125_ip = 1539;
                    continue _fun44125
                }
            case 1488:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                if (var9) {
                    _fun44125_ip = 1519;
                    continue _fun44125
                }
            case 1499:
                var8 = 45;
                var8 = var12[var8];
                var8 = var11.bind(var2)(var8);
                var8 = var8.ForumLockIcon;
                _fun44125_ip = 1537;
                continue _fun44125;
            case 1519:
                var10 = 44;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var8 = var10.ImageLockIcon;
            case 1537:
                _fun44125_ip = 1591;
                continue _fun44125;
            case 1539:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                if (var9) {
                    _fun44125_ip = 1570;
                    continue _fun44125
                }
            case 1550:
                var9 = 47;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var9 = var9.ForumIcon;
                _fun44125_ip = 1588;
                continue _fun44125;
            case 1570:
                var10 = 46;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var9 = var10.ImageIcon;
            case 1588:
                var8 = var9;
            case 1591:
                var7 = var8;
            case 1594:
                _fun44125_ip = 1622;
                continue _fun44125;
            case 1596:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 37;
                var8 = var10[var8];
                var8 = var9.bind(var2)(var8);
                var7 = var8.BookCheckIcon;
            case 1622:
                return var7;
            case 1624:
                if (var6) {
                    _fun44125_ip = 1818;
                    continue _fun44125
                }
            case 1630:
                if (!var1) {
                    _fun44125_ip = 1677;
                    continue _fun44125
                }
            case 1633:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1646;
                    continue _fun44125
                }
            case 1637:
                var1 = var3.ignoreTraits;
                if (var1) {
                    _fun44125_ip = 1677;
                    continue _fun44125
                }
            case 1646:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 38;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.TextWarningIcon;
                _fun44125_ip = 1816;
                continue _fun44125;
            case 1677:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 23;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.bind(var2)(var4);
                if (!var6) {
                    _fun44125_ip = 1746;
                    continue _fun44125
                }
            case 1705:
                if (!(var5 != var3)) {
                    _fun44125_ip = 1718;
                    continue _fun44125
                }
            case 1709:
                var3 = var3.ignoreTraits;
                if (var3) {
                    _fun44125_ip = 1746;
                    continue _fun44125
                }
            case 1718:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 39;
                var3 = var7[var3];
                var3 = var6.bind(var2)(var3);
                var3 = var3.TextLockIcon;
                _fun44125_ip = 1813;
                continue _fun44125;
            case 1746:
                var4 = var4.linkedLobby;
                if (!(var5 == var4)) {
                    _fun44125_ip = 1784;
                    continue _fun44125
                }
            case 1756:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 41;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.TextIcon;
                _fun44125_ip = 1810;
                continue _fun44125;
            case 1784:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 40;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var4 = var5.TextControllerIcon;
            case 1810:
                var3 = var4;
            case 1813:
                var1 = var3;
            case 1816:
                _fun44125_ip = 1844;
                continue _fun44125;
            case 1818:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 37;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var1 = var3.BookCheckIcon;
            case 1844:
                return var1;
            case 1846:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 36;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.FolderIcon;
                return var1;
            case 1874:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 35;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ThreadIcon;
                return var1;
            case 1902:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 34;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ThreadLockIcon;
                return var1;
            case 1930:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 33;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.ChatIcon;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var11 = var0.Object;
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
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ChannelTypes;
    var _closure1_slot6 = var6;
    var6 = 60;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/native/ChannelUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getThreadChannelIcon = var5;
    var5 = function(arg0) { // Original name: getSimpleChannelIcon, environment: var1
        _fun44126: for (var _fun44126_ip = 0;;) switch (_fun44126_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot7;
                var0 = var1.type;
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var4 = null;
                if (!(var4 == var0)) {
                    _fun44126_ip = 439;
                    continue _fun44126
                }
            case 31:
                var6 = var1.type;
                var5 = _closure1_slot6;
                var5 = var5.PRIVATE_THREAD;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 423;
                    continue _fun44126
                }
            case 53:
                var5 = _closure1_slot6;
                var5 = var5.ANNOUNCEMENT_THREAD;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 423;
                    continue _fun44126
                }
            case 70:
                var5 = _closure1_slot6;
                var5 = var5.PUBLIC_THREAD;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 423;
                    continue _fun44126
                }
            case 87:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_CATEGORY;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 401;
                    continue _fun44126
                }
            case 104:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_TEXT;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 379;
                    continue _fun44126
                }
            case 121:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_FORUM;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 379;
                    continue _fun44126
                }
            case 138:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_MEDIA;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 379;
                    continue _fun44126
                }
            case 155:
                var5 = _closure1_slot6;
                var5 = var5.GROUP_DM;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 357;
                    continue _fun44126
                }
            case 172:
                var5 = _closure1_slot6;
                var5 = var5.DM;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 335;
                    continue _fun44126
                }
            case 189:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_ANNOUNCEMENT;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 313;
                    continue _fun44126
                }
            case 203:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_STAGE_VOICE;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 291;
                    continue _fun44126
                }
            case 217:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_VOICE;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 269;
                    continue _fun44126
                }
            case 231:
                var5 = _closure1_slot6;
                var5 = var5.GUILD_DIRECTORY;
                if (!(var5 !== var6)) {
                    _fun44126_ip = 247;
                    continue _fun44126
                }
            case 245:
                return var4;
            case 247:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 13;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 269:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 12;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 291:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 313:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 10;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 335:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 357:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 8;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 379:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 401:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                return var4;
            case 423:
                var2 = _closure1_slot7;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 439:
                return var0;
        }
    };
    var2.getSimpleChannelIcon = var5;
    var5 = function(arg0, arg1) { // Original name: getChannelIconWithGuild, environment: var1
        _fun44127: for (var _fun44127_ip = 0;;) switch (_fun44127_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = _closure1_slot8;
                var1 = {};
                var0 = null;
                var6 = var0 == var4;
                var0 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun44127_ip = 34;
                    continue _fun44127
                }
            case 28:
                var5 = var4.rulesChannelId;
            case 34:
                var4 = var3.id;
                var4 = var5 === var4;
                var1.isRulesChannel = var4;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.getChannelIconWithGuild = var5;
    var5 = function(arg0) { // Original name: getChannelMentionIcon, environment: var1
        _fun44128: for (var _fun44128_ip = 0;;) switch (_fun44128_ip) {
            case 0:
                var1 = arg0;
                var0 = 'voice';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 362;
                    continue _fun44128
                }
            case 14:
                var0 = 'voice-locked';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 335;
                    continue _fun44128
                }
            case 27:
                var0 = 'stage';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 308;
                    continue _fun44128
                }
            case 38:
                var0 = 'stage-locked';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 281;
                    continue _fun44128
                }
            case 51:
                var0 = 'text';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 254;
                    continue _fun44128
                }
            case 62:
                var0 = 'thread';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 227;
                    continue _fun44128
                }
            case 73:
                var0 = 'post';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 200;
                    continue _fun44128
                }
            case 81:
                var0 = 'message';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 200;
                    continue _fun44128
                }
            case 89:
                var0 = 'forum';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 173;
                    continue _fun44128
                }
            case 99:
                var0 = 'media';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 146;
                    continue _fun44128
                }
            case 107:
                var0 = 'locked';
                if (!(var0 !== var1)) {
                    _fun44128_ip = 119;
                    continue _fun44128
                }
            case 115:
                var0 = null;
                return var0;
            case 119:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 19;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 146:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 173:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 200:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 227:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 254:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 281:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 308:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 335:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 362:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.getChannelMentionIcon = var5;
    var2.getChannelIcon = var4;
    var4 = function(arg0, arg1) { // Original name: getChannelIconComponentWithGuild, environment: var1
        _fun44129: for (var _fun44129_ip = 0;;) switch (_fun44129_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = _closure1_slot9;
                var1 = {};
                var0 = null;
                var6 = var0 == var4;
                var0 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun44129_ip = 34;
                    continue _fun44129
                }
            case 28:
                var5 = var4.rulesChannelId;
            case 34:
                var4 = var3.id;
                var4 = var5 === var4;
                var1.isRulesChannel = var4;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.getChannelIconComponentWithGuild = var4;
    var2.getChannelIconComponent = var3;
    var1 = function(arg0) { // Original name: getSimpleChannelIconComponent, environment: var1
        _fun44130: for (var _fun44130_ip = 0;;) switch (_fun44130_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot6;
                var0 = var0.PRIVATE_THREAD;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 527;
                    continue _fun44130
                }
            case 28:
                var0 = _closure1_slot6;
                var0 = var0.ANNOUNCEMENT_THREAD;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 527;
                    continue _fun44130
                }
            case 45:
                var0 = _closure1_slot6;
                var0 = var0.PUBLIC_THREAD;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 527;
                    continue _fun44130
                }
            case 62:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_CATEGORY;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 497;
                    continue _fun44130
                }
            case 79:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_TEXT;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 467;
                    continue _fun44130
                }
            case 96:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_FORUM;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 437;
                    continue _fun44130
                }
            case 113:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_MEDIA;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 407;
                    continue _fun44130
                }
            case 130:
                var0 = _closure1_slot6;
                var0 = var0.GROUP_DM;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 377;
                    continue _fun44130
                }
            case 147:
                var0 = _closure1_slot6;
                var0 = var0.DM;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 347;
                    continue _fun44130
                }
            case 164:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_ANNOUNCEMENT;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 317;
                    continue _fun44130
                }
            case 181:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 287;
                    continue _fun44130
                }
            case 195:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_VOICE;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 257;
                    continue _fun44130
                }
            case 209:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_DIRECTORY;
                if (!(var0 !== var3)) {
                    _fun44130_ip = 227;
                    continue _fun44130
                }
            case 223:
                var0 = null;
                return var0;
            case 227:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 59;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.HubIcon;
                return var0;
            case 257:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 58;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.VoiceNormalIcon;
                return var0;
            case 287:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 55;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.StageIcon;
                return var0;
            case 317:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 52;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.AnnouncementsIcon;
                return var0;
            case 347:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 49;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.AtIcon;
                return var0;
            case 377:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 48;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.GroupIcon;
                return var0;
            case 407:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 46;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.ImageIcon;
                return var0;
            case 437:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 47;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.ForumIcon;
                return var0;
            case 467:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 41;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.TextIcon;
                return var0;
            case 497:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 36;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.FolderIcon;
                return var0;
            case 527:
                var0 = var2.isForumPost;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var0) {
                    _fun44130_ip = 570;
                    continue _fun44130
                }
            case 548:
                var0 = 35;
                var1 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.ThreadIcon;
                _fun44130_ip = 590;
                continue _fun44130;
            case 570:
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0 = var1.ChatIcon;
            case 590:
                return var0;
        }
    };
    var2.getSimpleChannelIconComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 1613, 660, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4790, 4791, 4548, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 2]);