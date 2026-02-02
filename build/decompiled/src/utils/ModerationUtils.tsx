// utils/ModerationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun81366: for (var _fun81366_ip = 0;;) switch (_fun81366_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 2;
                var1 = var1[var5];
                var2 = undefined;
                var6 = var4.bind(var2)(var1);
                var4 = var6.unsafe_getRawColor;
                var1 = 'PRIMARY_400';
                var1 = var4.bind(var6)(var1);
                if (!(var1 !== var3)) {
                    _fun81366_ip = 370;
                    continue _fun81366
                }
            case 50:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var6 = var4.bind(var2)(var1);
                var4 = var6.unsafe_getRawColor;
                var1 = 'GREEN_360';
                var1 = var4.bind(var6)(var1);
                if (!(var1 !== var3)) {
                    _fun81366_ip = 336;
                    continue _fun81366
                }
            case 89:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var6 = var4.bind(var2)(var1);
                var4 = var6.unsafe_getRawColor;
                var1 = 'YELLOW_360';
                var1 = var4.bind(var6)(var1);
                if (!(var1 !== var3)) {
                    _fun81366_ip = 302;
                    continue _fun81366
                }
            case 128:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var6 = var4.bind(var2)(var1);
                var4 = var6.unsafe_getRawColor;
                var1 = 'ORANGE_345';
                var1 = var4.bind(var6)(var1);
                if (!(var1 !== var3)) {
                    _fun81366_ip = 268;
                    continue _fun81366
                }
            case 164:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var5 = var4.bind(var2)(var1);
                var4 = var5.unsafe_getRawColor;
                var1 = 'RED_400';
                var1 = var4.bind(var5)(var1);
                if (!(var1 !== var3)) {
                    _fun81366_ip = 234;
                    continue _fun81366
                }
            case 200:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.HighlightColors;
                var1 = var1.NONE;
                return var1;
            case 234:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.HighlightColors;
                var1 = var1.RED;
                return var1;
            case 268:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.HighlightColors;
                var1 = var1.ORANGE;
                return var1;
            case 302:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.HighlightColors;
                var1 = var1.YELLOW;
                return var1;
            case 336:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.HighlightColors;
                var1 = var1.GREEN;
                return var1;
            case 370:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.HighlightColors;
                var0 = var0.ACCENT;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
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
    var7 = var4.VerificationLevels;
    var _closure1_slot2 = var7;
    var7 = var4.VerificationCriteria;
    var _closure1_slot3 = var7;
    var4 = var4.GuildExplicitContentFilterTypes;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ExplicitContentFilterTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ModerationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.mapColorToHighlightColor = var3;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.name;
            var0.title = var2;
            var2 = var1.desc;
            var0.description = var2;
            var4 = _closure1_slot6;
            var3 = var1.color;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var0.highlightColor = var2;
            var2 = var1.value;
            var0.value = var2;
            var1 = var1.disabled;
            var0.disabled = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.mapOptionToHighlightedRowOptions = var3;
    var3 = function() {
        _fun81369: for (var _fun81369_ip = 0;;) switch (_fun81369_ip) {
            case 0:
                var0 = arguments[0];
                var4 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun81369_ip = 14;
                    continue _fun81369
                }
            case 12:
                var0 = false;
            case 14:
                if (!(var4 === var5)) {
                    _fun81369_ip = 20;
                    continue _fun81369
                }
            case 18:
                var4 = false;
            case 20:
                var1 = {};
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 4;
                var6 = var2[var9];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var2[var9];
                var2 = var8.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.PEzffq;
                var2 = var6.bind(var7)(var2);
                var1.name = var2;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var2[var9];
                var2 = var6.bind(var5)(var2);
                var6 = var2.t;
                if (var0) {
                    _fun81369_ip = 145;
                    continue _fun81369
                }
            case 130:
                var2 = var6.nDQy0p;
                var2 = var7.bind(var8)(var2);
                _fun81369_ip = 156;
                continue _fun81369;
            case 145:
                var6 = var6.j9WtHx;
                var2 = var7.bind(var8)(var6);
            case 156:
                var1.desc = var2;
                var2 = _closure1_slot2;
                var6 = var2.NONE;
                var1.value = var6;
                var1.disabled = var0;
                var0 = new Array(5);
                var0[0] = var1;
                var1 = {};
                var10 = _closure1_slot0;
                var6 = _closure1_slot1;
                var7 = var6[var9];
                var7 = var10.bind(var5)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var6[var9];
                var7 = var10.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.SsCK8I;
                var7 = var8.bind(var11)(var7);
                var1.name = var7;
                var7 = var6[var9];
                var7 = var10.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var9];
                var6 = var10.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6["8GCOX6"];
                var6 = var7.bind(var8)(var6);
                var1.desc = var6;
                var2 = var2.LOW;
                var1.value = var2;
                var2 = undefined;
                if (var4) {
                    _fun81369_ip = 348;
                    continue _fun81369
                }
            case 313:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.unsafe_getRawColor;
                var6 = 'GREEN_360';
                var2 = var7.bind(var8)(var6);
            case 348:
                var1.color = var2;
                var0[1] = var1;
                var1 = {};
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var10 = var7.intl;
                var8 = var10.string;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.WwNoR4;
                var7 = var8.bind(var10)(var7);
                var1.name = var7;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var2[var9];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var6 = var2.VS14ga;
                var2 = {};
                var10 = _closure1_slot3;
                var10 = var10.ACCOUNT_AGE;
                var2.min = var10;
                var2 = var7.bind(var8)(var6, var2);
                var1.desc = var2;
                var2 = _closure1_slot2;
                var2 = var2.MEDIUM;
                var1.value = var2;
                var2 = undefined;
                if (var4) {
                    _fun81369_ip = 538;
                    continue _fun81369
                }
            case 503:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.unsafe_getRawColor;
                var6 = 'YELLOW_360';
                var2 = var7.bind(var8)(var6);
            case 538:
                var1.color = var2;
                var0[2] = var1;
                var1 = {};
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var10 = var7.intl;
                var8 = var10.string;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.I2jMUF;
                var7 = var8.bind(var10)(var7);
                var1.name = var7;
                var7 = var2[var9];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var2[var9];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var6 = var2["r+b3I4"];
                var2 = {};
                var10 = _closure1_slot3;
                var10 = var10.MEMBER_AGE;
                var2.min = var10;
                var2 = var7.bind(var8)(var6, var2);
                var1.desc = var2;
                var2 = _closure1_slot2;
                var2 = var2.HIGH;
                var1.value = var2;
                var2 = undefined;
                if (var4) {
                    _fun81369_ip = 728;
                    continue _fun81369
                }
            case 693:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.unsafe_getRawColor;
                var6 = 'ORANGE_345';
                var2 = var7.bind(var8)(var6);
            case 728:
                var1.color = var2;
                var0[3] = var1;
                var1 = {};
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = var2[var9];
                var6 = var8.bind(var5)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var2[var9];
                var6 = var8.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.cJY8w9;
                var6 = var7.bind(var10)(var6);
                var1.name = var6;
                var6 = var2[var9];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var2[var9];
                var2 = var8.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.PWaKme;
                var2 = var6.bind(var7)(var2);
                var1.desc = var2;
                var2 = _closure1_slot2;
                var2 = var2.VERY_HIGH;
                var1.value = var2;
                var2 = undefined;
                if (var4) {
                    _fun81369_ip = 901;
                    continue _fun81369
                }
            case 866:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.unsafe_getRawColor;
                var3 = 'RED_400';
                var2 = var4.bind(var5)(var3);
            case 901:
                var1.color = var2;
                var0[4] = var1;
                return var0;
        }
    };
    var2.generateVerificationLevelOptions = var3;
    var3 = function() {
        _fun81370: for (var _fun81370_ip = 0;;) switch (_fun81370_ip) {
            case 0:
                var3 = arguments[0];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun81370_ip = 11;
                    continue _fun81370
                }
            case 9:
                var3 = false;
            case 11:
                var1 = {};
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var10 = 4;
                var0 = var6[var10];
                var0 = var9.bind(var4)(var0);
                var7 = var0.intl;
                var5 = var7.string;
                var0 = var6[var10];
                var0 = var9.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.iHuPE6;
                var0 = var5.bind(var7)(var0);
                var1.name = var0;
                var0 = var6[var10];
                var0 = var9.bind(var4)(var0);
                var7 = var0.intl;
                var5 = var7.string;
                var0 = var6[var10];
                var0 = var9.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["Z+yUWF"];
                var0 = var5.bind(var7)(var0);
                var1.desc = var0;
                var0 = _closure1_slot4;
                var0 = var0.ALL_MEMBERS;
                var1.value = var0;
                var5 = 2;
                var0 = var6[var5];
                var8 = var9.bind(var4)(var0);
                var7 = var8.unsafe_getRawColor;
                var0 = 'RED_400';
                var0 = var7.bind(var8)(var0);
                var1.color = var0;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var7 = var6[var10];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.ynfFaI;
                var6 = var7.bind(var8)(var6);
                var1.name = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = var6[var10];
                var8 = var7.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var7 = var6.t;
                if (var3) {
                    _fun81370_ip = 284;
                    continue _fun81370
                }
            case 271:
                var6 = var7["3fRIN4"];
                var6 = var8.bind(var9)(var6);
                _fun81370_ip = 295;
                continue _fun81370;
            case 284:
                var7 = var7.j9WtHx;
                var6 = var8.bind(var9)(var7);
            case 295:
                var1.desc = var6;
                var6 = _closure1_slot4;
                var6 = var6.MEMBERS_WITHOUT_ROLES;
                var1.value = var6;
                var1.disabled = var3;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var7 = var6[var5];
                var11 = var9.bind(var4)(var7);
                var8 = var11.unsafe_getRawColor;
                var7 = 'YELLOW_360';
                var7 = var8.bind(var11)(var7);
                var1.color = var7;
                var0[1] = var1;
                var1 = {};
                var7 = var6[var10];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.VbSyAx;
                var6 = var7.bind(var8)(var6);
                var1.name = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = var6[var10];
                var8 = var7.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var7 = var6.t;
                if (var3) {
                    _fun81370_ip = 465;
                    continue _fun81370
                }
            case 452:
                var6 = var7.M6GNsJ;
                var6 = var8.bind(var9)(var6);
                _fun81370_ip = 476;
                continue _fun81370;
            case 465:
                var7 = var7.j9WtHx;
                var6 = var8.bind(var9)(var7);
            case 476:
                var1.desc = var6;
                var6 = _closure1_slot4;
                var6 = var6.DISABLED;
                var1.value = var6;
                var1.disabled = var3;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var4 = var3.bind(var4)(var2);
                var3 = var4.unsafe_getRawColor;
                var2 = 'PRIMARY_400';
                var2 = var3.bind(var4)(var2);
                var1.color = var2;
                var0[2] = var1;
                return var0;
        }
    };
    var2.generateContentFilterHighlightedOptions = var3;
    var3 = function() {
        _fun81371: for (var _fun81371_ip = 0;;) switch (_fun81371_ip) {
            case 0:
                var2 = arguments[0];
                var8 = undefined;
                if (!(var2 === var8)) {
                    _fun81371_ip = 11;
                    continue _fun81371
                }
            case 9:
                var2 = false;
            case 11:
                var1 = {};
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 4;
                var0 = var4[var9];
                var0 = var7.bind(var8)(var0);
                var6 = var0.intl;
                var5 = var6.string;
                var0 = var4[var9];
                var0 = var7.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0.iHuPE6;
                var0 = var5.bind(var6)(var0);
                var1.name = var0;
                var0 = var4[var9];
                var0 = var7.bind(var8)(var0);
                var6 = var0.intl;
                var5 = var6.string;
                var0 = var4[var9];
                var0 = var7.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0["Z+yUWF"];
                var0 = var5.bind(var6)(var0);
                var1.desc = var0;
                var0 = _closure1_slot4;
                var0 = var0.ALL_MEMBERS;
                var1.value = var0;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.ynfFaI;
                var4 = var5.bind(var6)(var4);
                var1.name = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = var4[var9];
                var6 = var5.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.t;
                if (var2) {
                    _fun81371_ip = 253;
                    continue _fun81371
                }
            case 240:
                var4 = var5["3fRIN4"];
                var4 = var6.bind(var7)(var4);
                _fun81371_ip = 264;
                continue _fun81371;
            case 253:
                var5 = var5.j9WtHx;
                var4 = var6.bind(var7)(var5);
            case 264:
                var1.desc = var4;
                var4 = _closure1_slot4;
                var4 = var4.MEMBERS_WITHOUT_ROLES;
                var1.value = var4;
                var1.disabled = var2;
                var0[1] = var1;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.VbSyAx;
                var4 = var5.bind(var6)(var4);
                var1.name = var4;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = var4[var9];
                var6 = var5.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.t;
                if (var2) {
                    _fun81371_ip = 406;
                    continue _fun81371
                }
            case 393:
                var4 = var5.M6GNsJ;
                var4 = var6.bind(var7)(var4);
                _fun81371_ip = 417;
                continue _fun81371;
            case 406:
                var5 = var5.j9WtHx;
                var4 = var6.bind(var7)(var5);
            case 417:
                var1.desc = var4;
                var3 = _closure1_slot4;
                var3 = var3.DISABLED;
                var1.value = var3;
                var1.disabled = var2;
                var0[2] = var1;
                return var0;
        }
    };
    var2.generateContentFilterOptions = var3;
    var3 = function() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var6 = 4;
        var0 = var5[var6];
        var3 = undefined;
        var0 = var4.bind(var3)(var0);
        var7 = var0.intl;
        var2 = var7.string;
        var0 = var5[var6];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["4IaoCI"];
        var0 = var2.bind(var7)(var0);
        var1.name = var0;
        var0 = var5[var6];
        var0 = var4.bind(var3)(var0);
        var7 = var0.intl;
        var2 = var7.string;
        var0 = var5[var6];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.TgipjE;
        var0 = var2.bind(var7)(var0);
        var1.desc = var0;
        var2 = 5;
        var0 = var5[var2];
        var0 = var4.bind(var3)(var0);
        var0 = var0.DmSpamFilterV2;
        var0 = var0.FRIENDS_AND_NON_FRIENDS;
        var1.value = var0;
        var0 = new Array(3);
        var0[0] = var1;
        var1 = {};
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var9 = var7.intl;
        var8 = var9.string;
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["6NnX6F"];
        var7 = var8.bind(var9)(var7);
        var1.name = var7;
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var9 = var7.intl;
        var8 = var9.string;
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["+dw1qu"];
        var7 = var8.bind(var9)(var7);
        var1.desc = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.DmSpamFilterV2;
        var7 = var7.NON_FRIENDS;
        var1.value = var7;
        var0[1] = var1;
        var1 = {};
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var9 = var7.intl;
        var8 = var9.string;
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["1tiAFz"];
        var7 = var8.bind(var9)(var7);
        var1.name = var7;
        var7 = var5[var6];
        var7 = var4.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var5[var6];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.LKTyeA;
        var6 = var7.bind(var8)(var6);
        var1.desc = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.DmSpamFilterV2;
        var2 = var2.DISABLED;
        var1.value = var2;
        var0[2] = var1;
        return var0;
    };
    var2.generateDmSpamOptions = var3;
    var1 = function() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var7 = 4;
        var2 = var5[var7];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var8 = var2.intl;
        var6 = var8.string;
        var2 = var5[var7];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.PhNlhz;
        var2 = var6.bind(var8)(var2);
        var1.name = var2;
        var2 = var5[var7];
        var2 = var4.bind(var3)(var2);
        var8 = var2.intl;
        var6 = var8.string;
        var2 = var5[var7];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2["Fw+Lvp"];
        var2 = var6.bind(var8)(var2);
        var1.desc = var2;
        var6 = _closure1_slot5;
        var0 = var6.FRIENDS_AND_NON_FRIENDS;
        var1.value = var0;
        var2 = 2;
        var0 = var5[var2];
        var9 = var4.bind(var3)(var0);
        var8 = var9.unsafe_getRawColor;
        var0 = 'GREEN_360';
        var0 = var8.bind(var9)(var0);
        var1.color = var0;
        var0 = new Array(3);
        var0[0] = var1;
        var1 = {};
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["8ioJ4S"];
        var8 = var9.bind(var10)(var8);
        var1.name = var8;
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.z4l4Cr;
        var8 = var9.bind(var10)(var8);
        var1.desc = var8;
        var8 = var6.NON_FRIENDS;
        var1.value = var8;
        var8 = var5[var2];
        var10 = var4.bind(var3)(var8);
        var9 = var10.unsafe_getRawColor;
        var8 = 'YELLOW_360';
        var8 = var9.bind(var10)(var8);
        var1.color = var8;
        var0[1] = var1;
        var1 = {};
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.FLfuhL;
        var8 = var9.bind(var10)(var8);
        var1.name = var8;
        var8 = var5[var7];
        var8 = var4.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var5[var7];
        var7 = var4.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.MoZlaD;
        var7 = var8.bind(var9)(var7);
        var1.desc = var7;
        var6 = var6.DISABLED;
        var1.value = var6;
        var2 = var5[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.unsafe_getRawColor;
        var2 = 'RED_400';
        var2 = var3.bind(var4)(var2);
        var1.color = var2;
        var0[2] = var1;
        return var0;
    };
    var2.generateExplicitImageOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1350, 808, 10348, 1234, 1311, 2]);