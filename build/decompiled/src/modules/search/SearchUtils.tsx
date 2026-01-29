// modules/search/SearchUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun71537: for (var _fun71537_ip = 0;;) switch (_fun71537_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun71537_ip = 45;
                    continue _fun71537
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun71537_ip = 54;
                    continue _fun71537
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun71537_ip = 344;
                    continue _fun71537
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun71537_ip = 322;
                    continue _fun71537
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun71537_ip = 282;
                    continue _fun71537
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun71537_ip = 269;
                    continue _fun71537
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun71537_ip = 162;
                    continue _fun71537
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun71537_ip = 178;
                    continue _fun71537
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun71537_ip = 248;
                    continue _fun71537
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun71537_ip = 248;
                    continue _fun71537
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun71537_ip = 233;
                    continue _fun71537
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun71537_ip = 246;
                    continue _fun71537
                }
            case 233:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun71537_ip = 264;
                continue _fun71537;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun71537_ip = 282;
                continue _fun71537;
            case 269:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun71537_ip = 322;
                    continue _fun71537
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun71537_ip = 329;
                    continue _fun71537
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun71538: for (var _fun71538_ip = 0;;) switch (_fun71538_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun71538_ip = 56;
                                continue _fun71538
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun71538_ip = 67;
                            continue _fun71538;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun71539: for (var _fun71539_ip = 0;;) switch (_fun71539_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun71539_ip = 23;
                    continue _fun71539
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun71539_ip = 33;
                    continue _fun71539
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun71539_ip = 70;
                    continue _fun71539
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun71539_ip = 55;
                    continue _fun71539
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var7 = function(arg0) { // Original name: getSearchContextId, environment: var1
        _fun71540: for (var _fun71540_ip = 0;;) switch (_fun71540_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var2 = _closure1_slot11;
                var2 = var2.GUILD;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 119;
                    continue _fun71540
                }
            case 25:
                var2 = _closure1_slot11;
                var2 = var2.GUILD_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 112;
                    continue _fun71540
                }
            case 39:
                var2 = _closure1_slot11;
                var2 = var2.CHANNEL;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 112;
                    continue _fun71540
                }
            case 53:
                var2 = _closure1_slot11;
                var2 = var2.THREAD;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 112;
                    continue _fun71540
                }
            case 67:
                var2 = _closure1_slot11;
                var2 = var2.DMS;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 105;
                    continue _fun71540
                }
            case 81:
                var2 = _closure1_slot11;
                var2 = var2.FAVORITES;
                if (!(var2 !== var3)) {
                    _fun71540_ip = 99;
                    continue _fun71540
                }
            case 95:
                var2 = undefined;
                return var2;
            case 99:
                var1 = _closure1_slot17;
                return var1;
            case 105:
                var1 = var0.type;
                return var1;
            case 112:
                var1 = var0.channelId;
                return var1;
            case 119:
                var0 = var0.guildId;
                return var0;
        }
    };
    var _closure1_slot23 = var7;
    var6 = function(arg0) { // Original name: isGuildLikeSearchContext, environment: var1
        _fun71541: for (var _fun71541_ip = 0;;) switch (_fun71541_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot11;
                var0 = var0.GUILD;
                var0 = var3 === var0;
                if (var0) {
                    _fun71541_ip = 47;
                    continue _fun71541
                }
            case 28:
                var4 = var2.type;
                var3 = _closure1_slot11;
                var3 = var3.GUILD_CHANNEL;
                var0 = var4 === var3;
            case 47:
                if (var0) {
                    _fun71541_ip = 69;
                    continue _fun71541
                }
            case 50:
                var2 = var2.type;
                var1 = _closure1_slot11;
                var1 = var1.THREAD;
                var0 = var2 === var1;
            case 69:
                return var0;
        }
    };
    var _closure1_slot24 = var6;
    var4 = function(arg0) { // Original name: quoteChannelName, environment: var1
        _fun71542: for (var _fun71542_ip = 0;;) switch (_fun71542_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.match;
                var0 = /([\\" ])/g;
                var2 = var1.bind(var4)(var0);
                var1 = null;
                var0 = var4;
                if (!(var1 != var2)) {
                    _fun71542_ip = 95;
                    continue _fun71542
                }
            case 37:
                var3 = var4.replaceAll;
                var2 = /([\\"])/g;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '\\';
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var3 = var3.bind(var4)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '"';
                var0 = var2.bind(var1)(var3, var1);
            case 95:
                return var0;
        }
    };
    var _closure1_slot25 = var4;
    var3 = function(arg0) { // Original name: tokenizeQuery, environment: var1
        var2 = _closure1_slot19;
        var1 = var2.tokenize;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot26 = var3;
    var0 = global;
    var13 = var0.Object;
    var8 = var13.defineProperty;
    var5 = {};
    var12 = true;
    var5.value = var12;
    var0 = '__esModule';
    var0 = var8.bind(var13)(var2, var0, var5);
    var0 = 0;
    var5 = var10[var0];
    var0 = undefined;
    var5 = var11.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var5 = 6;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var10[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.SearchTabs;
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var8 = var5.SearchTypes;
    var _closure1_slot11 = var8;
    var8 = var5.SearchTokenTypes;
    var _closure1_slot12 = var8;
    var13 = var5.SearchPopoutModes;
    var _closure1_slot13 = var13;
    var13 = var5.IS_SEARCH_ANSWER_TOKEN;
    var _closure1_slot14 = var13;
    var13 = var5.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot15 = var13;
    var13 = var5.SearchModes;
    var _closure1_slot16 = var13;
    var13 = var5.FAVORITES;
    var _closure1_slot17 = var13;
    var5 = var5.ME;
    var5 = {};
    var13 = var8.FILTER_BEFORE;
    var5[var13] = var12;
    var13 = var8.FILTER_AFTER;
    var5[var13] = var12;
    var8 = var8.FILTER_ON;
    var5[var8] = var12;
    var _closure1_slot18 = var5;
    var8 = 15;
    var12 = var10[var8];
    var12 = var11.bind(var0)(var12);
    var13 = var12.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var12
        }
    });
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot19 = var12;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var11 = var8.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var8
        }
    });
    var17 = var11;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot20 = var8;
    var8 = 20;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/search/SearchUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getSearchContextId = var7;
    var7 = function(arg0) { // Original name: getSearchHistoryStateId, environment: var1
        var2 = _closure1_slot23;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getSearchHistoryStateId = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: getSearchTabFetchId, environment: var1
        var2 = _closure1_slot23;
        var1 = undefined;
        var0 = arg0;
        var10 = var2.bind(var1)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var11 = '';
        var2 = '-';
        var8 = arg1;
        var6 = arg2;
        var9 = var2;
        var7 = var2;
        var0 = var11[var4](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getSearchTabFetchId = var7;
    var7 = function(arg0) { // Original name: getChannelActiveAgoTimestamp, environment: var1
        _fun71547: for (var _fun71547_ip = 0;;) switch (_fun71547_ip) {
            case 0:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
                var3 = var6[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var3);
                var4 = var3.bind(var5)();
                var3 = var4.diff;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = arg0;
                var2 = var2.bind(var5)(var1);
                var1 = 's';
                var4 = var3.bind(var4)(var2, var1);
                var1 = 31536000;
                if (!(!(var4 > var1))) {
                    _fun71547_ip = 614;
                    continue _fun71547
                }
            case 75:
                var2 = 2592000;
                if (!(!(var4 > var2))) {
                    _fun71547_ip = 525;
                    continue _fun71547
                }
            case 88:
                var3 = 172800;
                if (!(!(var4 > var3))) {
                    _fun71547_ip = 430;
                    continue _fun71547
                }
            case 101:
                var3 = 86400;
                if (!(!(var4 > var3))) {
                    _fun71547_ip = 371;
                    continue _fun71547
                }
            case 114:
                var3 = 3600;
                if (!(!(var4 > var3))) {
                    _fun71547_ip = 282;
                    continue _fun71547
                }
            case 127:
                var6 = 60;
                if (!(!(var4 > var6))) {
                    _fun71547_ip = 193;
                    continue _fun71547
                }
            case 134:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 11;
                var8 = var11[var7];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7["5Ldpkc"];
                var7 = var8.bind(var9)(var7);
                return var7;
            case 193:
                var7 = global;
                var8 = var7.Math;
                var7 = var8.round;
                var6 = var4 / var6;
                var10 = var7.bind(var8)(var6);
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 11;
                var8 = var11[var6];
                var8 = var7.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var6 = var11[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.t;
                var7 = var6.CbRfwg;
                var6 = {};
                var6.count = var10;
                var6 = var8.bind(var9)(var7, var6);
                return var6;
            case 282:
                var6 = global;
                var7 = var6.Math;
                var6 = var7.round;
                var3 = var4 / var3;
                var9 = var6.bind(var7)(var3);
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 11;
                var7 = var10[var3];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var3 = var10[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.t;
                var6 = var3.WJBWP1;
                var3 = {};
                var3.count = var9;
                var3 = var7.bind(var8)(var6, var3);
                return var3;
            case 371:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 11;
                var6 = var9[var3];
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.uNkIhT;
                var3 = var6.bind(var7)(var3);
                return var3;
            case 430:
                var3 = global;
                var7 = var3.Math;
                var6 = var7.round;
                var3 = 86400;
                var3 = var4 / var3;
                var9 = var6.bind(var7)(var3);
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 11;
                var7 = var10[var3];
                var7 = var6.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var3 = var10[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.t;
                var6 = var3.HNgi95;
                var3 = {};
                var3.count = var9;
                var3 = var7.bind(var8)(var6, var3);
                return var3;
            case 525:
                var3 = global;
                var6 = var3.Math;
                var3 = var6.round;
                var2 = var4 / var2;
                var8 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 11;
                var6 = var9[var2];
                var6 = var3.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.g2uHTD;
                var2 = {};
                var2.count = var8;
                var2 = var6.bind(var7)(var3, var2);
                return var2;
            case 614:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.round;
                var1 = var4 / var1;
                var4 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0["7th+Mf"];
                var0 = {};
                var0.count = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getChannelActiveAgoTimestamp = var7;
    var7 = function(arg0) { // Original name: getIndexingErrorText, environment: var1
        _fun71548: for (var _fun71548_ip = 0;;) switch (_fun71548_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot11;
                var1 = var1.CHANNEL;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 227;
                    continue _fun71548
                }
            case 28:
                var1 = _closure1_slot11;
                var1 = var1.DMS;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 166;
                    continue _fun71548
                }
            case 45:
                var1 = _closure1_slot11;
                var1 = var1.GUILD_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 105;
                    continue _fun71548
                }
            case 59:
                var1 = _closure1_slot11;
                var1 = var1.GUILD;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 105;
                    continue _fun71548
                }
            case 73:
                var1 = _closure1_slot11;
                var1 = var1.THREAD;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 105;
                    continue _fun71548
                }
            case 87:
                var1 = _closure1_slot11;
                var1 = var1.FAVORITES;
                if (!(var1 !== var2)) {
                    _fun71548_ip = 105;
                    continue _fun71548
                }
            case 101:
                var1 = undefined;
                return var1;
            case 105:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.AXPbZr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 166:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Br0xJA;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 227:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Q0JJjv;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getIndexingErrorText = var7;
    var7 = function(arg0) { // Original name: getGuildIdFromSearchContext, environment: var1
        _fun71549: for (var _fun71549_ip = 0;;) switch (_fun71549_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var2 = _closure1_slot11;
                var2 = var2.GUILD_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun71549_ip = 140;
                    continue _fun71549
                }
            case 25:
                var2 = _closure1_slot11;
                var2 = var2.GUILD;
                if (!(var2 !== var3)) {
                    _fun71549_ip = 140;
                    continue _fun71549
                }
            case 39:
                var2 = _closure1_slot11;
                var2 = var2.THREAD;
                if (!(var2 !== var3)) {
                    _fun71549_ip = 140;
                    continue _fun71549
                }
            case 53:
                var2 = _closure1_slot11;
                var2 = var2.CHANNEL;
                if (!(var2 !== var3)) {
                    _fun71549_ip = 91;
                    continue _fun71549
                }
            case 67:
                var2 = _closure1_slot11;
                var2 = var2.FAVORITES;
                if (!(var2 !== var3)) {
                    _fun71549_ip = 85;
                    continue _fun71549
                }
            case 81:
                var2 = null;
                return var2;
            case 85:
                var2 = _closure1_slot17;
                return var2;
            case 91:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = var0.channelId;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun71549_ip = 126;
                    continue _fun71549
                }
            case 121:
                var2 = var3.guild_id;
            case 126:
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun71549_ip = 138;
                    continue _fun71549
                }
            case 135:
                var1 = var2;
            case 138:
                return var1;
            case 140:
                var0 = var0.guildId;
                return var0;
        }
    };
    var2.getGuildIdFromSearchContext = var7;
    var2.isGuildLikeSearchContext = var6;
    var6 = function(arg0) { // Original name: getChannelIdFromSearchContext, environment: var1
        _fun71550: for (var _fun71550_ip = 0;;) switch (_fun71550_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var3 = _closure1_slot11;
                var3 = var3.GUILD_CHANNEL;
                if (!(var3 !== var2)) {
                    _fun71550_ip = 57;
                    continue _fun71550
                }
            case 25:
                var3 = _closure1_slot11;
                var3 = var3.CHANNEL;
                if (!(var3 !== var2)) {
                    _fun71550_ip = 57;
                    continue _fun71550
                }
            case 39:
                var1 = _closure1_slot11;
                var1 = var1.THREAD;
                if (!(var1 !== var2)) {
                    _fun71550_ip = 57;
                    continue _fun71550
                }
            case 53:
                var1 = null;
                return var1;
            case 57:
                var0 = var0.channelId;
                return var0;
        }
    };
    var2.getChannelIdFromSearchContext = var6;
    var6 = function(arg0) { // Original name: getTabTitle, environment: var1
        _fun71551: for (var _fun71551_ip = 0;;) switch (_fun71551_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.RECENT;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 717;
                    continue _fun71551
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.MESSAGES;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 656;
                    continue _fun71551
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.PEOPLE;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 595;
                    continue _fun71551
                }
            case 57:
                var1 = _closure1_slot10;
                var1 = var1.MEDIA;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 534;
                    continue _fun71551
                }
            case 74:
                var1 = _closure1_slot10;
                var1 = var1.PINS;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 473;
                    continue _fun71551
                }
            case 91:
                var1 = _closure1_slot10;
                var1 = var1.LINKS;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 412;
                    continue _fun71551
                }
            case 108:
                var1 = _closure1_slot10;
                var1 = var1.FILES;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 351;
                    continue _fun71551
                }
            case 125:
                var1 = _closure1_slot10;
                var1 = var1.GUILD_CHANNELS;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 292;
                    continue _fun71551
                }
            case 142:
                var1 = _closure1_slot10;
                var1 = var1.MEMBERS;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 233;
                    continue _fun71551
                }
            case 156:
                var1 = _closure1_slot10;
                var1 = var1.THREADS;
                if (!(var1 !== var2)) {
                    _fun71551_ip = 174;
                    continue _fun71551
                }
            case 170:
                var1 = undefined;
                return var1;
            case 174:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.B2panI;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 233:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["9Oq93m"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 292:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.OGiMXJ;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 351:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["WgVYR/"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 412:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.DFSvTt;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 473:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["/MoGoB"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 534:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Aw9+/M"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 595:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["GFd/I5"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 656:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.dvZAkp;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 717:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.tWnHcL;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getTabTitle = var6;
    var6 = function(arg0) { // Original name: searchModeToSearchQueryParams, environment: var1
        _fun71552: for (var _fun71552_ip = 0;;) switch (_fun71552_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot16;
                var1 = var1.MOST_RELEVANT;
                if (!(var1 !== var2)) {
                    _fun71552_ip = 76;
                    continue _fun71552
                }
            case 20:
                var1 = _closure1_slot16;
                var1 = var1.OLDEST;
                if (!(var1 !== var2)) {
                    _fun71552_ip = 60;
                    continue _fun71552
                }
            case 34:
                var0 = _closure1_slot16;
                var0 = var0.NEWEST;
                var0 = {
                    'sort_by': 'timestamp',
                    'sort_order': 'desc'
                };
                return var0;
            case 60:
                var0 = {
                    'sort_by': 'timestamp',
                    'sort_order': 'asc'
                };
                return var0;
            case 76:
                var0 = {
                    'sort_by': 'relevance',
                    'sort_order': 'desc'
                };
                return var0;
        }
    };
    var2.searchModeToSearchQueryParams = var6;
    var6 = function(arg0) { // Original name: searchQueryParamsToSearchMode, environment: var1
        _fun71553: for (var _fun71553_ip = 0;;) switch (_fun71553_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.sort_by;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun71553_ip = 102;
                    continue _fun71553
                }
            case 15:
                var1 = var0.sort_order;
                if (!(var2 != var1)) {
                    _fun71553_ip = 102;
                    continue _fun71553
                }
            case 25:
                var2 = var0.sort_by;
                var1 = 'relevance';
                if (!(var1 !== var2)) {
                    _fun71553_ip = 87;
                    continue _fun71553
                }
            case 41:
                var1 = var0.sort_order;
                var0 = 'asc';
                if (!(var0 !== var1)) {
                    _fun71553_ip = 72;
                    continue _fun71553
                }
            case 57:
                var0 = _closure1_slot16;
                var0 = var0.NEWEST;
                _fun71553_ip = 85;
                continue _fun71553;
            case 72:
                var1 = _closure1_slot16;
                var0 = var1.OLDEST;
            case 85:
                _fun71553_ip = 100;
                continue _fun71553;
            case 87:
                var1 = _closure1_slot16;
                var0 = var1.MOST_RELEVANT;
            case 100:
                _fun71553_ip = 115;
                continue _fun71553;
            case 102:
                var1 = _closure1_slot16;
                var0 = var1.NEWEST;
            case 115:
                return var0;
        }
    };
    var2.searchQueryParamsToSearchMode = var6;
    var6 = function(arg0) { // Original name: getSearchOptionAnswer, environment: var1
        _fun71554: for (var _fun71554_ip = 0;;) switch (_fun71554_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot12;
                var1 = var1.FILTER_FROM;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 679;
                    continue _fun71554
                }
            case 23:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_MENTIONS;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 618;
                    continue _fun71554
                }
            case 40:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_HAS;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 557;
                    continue _fun71554
                }
            case 57:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_BEFORE;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 496;
                    continue _fun71554
                }
            case 74:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_ON;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 496;
                    continue _fun71554
                }
            case 91:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_AFTER;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 496;
                    continue _fun71554
                }
            case 108:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_IN;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 435;
                    continue _fun71554
                }
            case 125:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_FILE_TYPE;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 374;
                    continue _fun71554
                }
            case 142:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_FILE_NAME;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 313;
                    continue _fun71554
                }
            case 159:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_PINNED;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 252;
                    continue _fun71554
                }
            case 173:
                var1 = _closure1_slot12;
                var1 = var1.FILTER_AUTHOR_TYPE;
                if (!(var1 !== var2)) {
                    _fun71554_ip = 191;
                    continue _fun71554
                }
            case 187:
                var1 = undefined;
                return var1;
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.qCQzBl;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 252:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.UJxL3V;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 313:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.uAbFDM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 374:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.FXcAFe;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 435:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["GpM+/7"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 496:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Zbbc1E;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 557:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.bhSYbc;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 618:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.BYvFWl;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 679:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.E466pL;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getSearchOptionAnswer = var6;
    var2.ShowDatePicker = var5;
    var5 = function(arg0, arg1) { // Original name: setIncludeNSFW, environment: var1
        _fun71555: for (var _fun71555_ip = 0;;) switch (_fun71555_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.didAgree;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun71555_ip = 71;
                    continue _fun71555
                }
            case 24:
                var1 = _closure1_slot9;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var2 = null;
                if (!(var2 != var0)) {
                    _fun71555_ip = 75;
                    continue _fun71555
                }
            case 43:
                var1 = var0.nsfwAllowed;
                var1 = var2 == var1;
                if (var1) {
                    _fun71555_ip = 62;
                    continue _fun71555
                }
            case 56:
                var1 = var0.nsfwAllowed;
            case 62:
                var0 = arg0;
                var0.include_nsfw = var1;
            case 71:
                var0 = undefined;
                return var0;
            case 75:
                var0 = undefined;
                return var0;
        }
    };
    var2.setIncludeNSFW = var5;
    var5 = function(arg0) { // Original name: getSearchQueryFromTokens, environment: var1
        _fun71556: for (var _fun71556_ip = 0;;) switch (_fun71556_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun71557: for (var _fun71557_ip = 0;;) switch (_fun71557_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.type;
                            var4 = _closure1_slot15;
                            var0 = var4.test;
                            var0 = var0.bind(var4)(var2);
                            if (var0) {
                                _fun71557_ip = 726;
                                continue _fun71557
                            }
                        case 31:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_BEFORE;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 588;
                                continue _fun71557
                            }
                        case 48:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_ON;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 588;
                                continue _fun71557
                            }
                        case 65:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_AFTER;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 588;
                                continue _fun71557
                            }
                        case 82:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var0 = var5[var0];
                            var6 = undefined;
                            var0 = var4.bind(var6)(var0);
                            var0 = var0[var2];
                            var5 = null;
                            var7 = var5 != var0;
                            var4 = null;
                            if (!var7) {
                                _fun71557_ip = 125;
                                continue _fun71557
                            }
                        case 119:
                            var4 = var0.queryKey;
                        case 125:
                            if (!(var5 == var4)) {
                                _fun71557_ip = 133;
                                continue _fun71557
                            }
                        case 129:
                            var4 = 'content';
                        case 133:
                            var7 = _closure2_slot0;
                            var7 = var7[var4];
                            if (!(var5 == var7)) {
                                _fun71557_ip = 184;
                                continue _fun71557
                            }
                        case 148:
                            var8 = _closure2_slot0;
                            var7 = global;
                            var7 = var7.Set;
                            var9 = var7.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var11 = var9;
                            var7 = new var11[var7](var10);
                            var7 = var7 instanceof Object ? var7 : var9;
                            var8[var4] = var7;
                        case 184:
                            var0 = _closure2_slot0;
                            var4 = var0[var4];
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_USERNAME_FROM;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 558;
                                continue _fun71557
                            }
                        case 209:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_USERNAME_MENTIONS;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 558;
                                continue _fun71557
                            }
                        case 226:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_FILE_TYPE;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 529;
                                continue _fun71557
                            }
                        case 243:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_FILE_NAME;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 529;
                                continue _fun71557
                            }
                        case 260:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_IN;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 447;
                                continue _fun71557
                            }
                        case 277:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_HAS;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 417;
                                continue _fun71557
                            }
                        case 294:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_PINNED;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 387;
                                continue _fun71557
                            }
                        case 308:
                            var0 = _closure1_slot12;
                            var0 = var0.ANSWER_AUTHOR_TYPE;
                            if (!(var0 !== var2)) {
                                _fun71557_ip = 357;
                                continue _fun71557
                            }
                        case 322:
                            var2 = var4.add;
                            var0 = var3.getFullMatch;
                            var7 = var0.bind(var3)();
                            var0 = var7.trim;
                            var0 = var0.bind(var7)();
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 357:
                            var2 = var4.add;
                            var7 = var3.getData;
                            var0 = 'author_type';
                            var0 = var7.bind(var3)(var0);
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 387:
                            var2 = var4.add;
                            var7 = var3.getData;
                            var0 = 'pinned';
                            var0 = var7.bind(var3)(var0);
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 417:
                            var2 = var4.add;
                            var7 = var3.getData;
                            var0 = 'has';
                            var0 = var7.bind(var3)(var0);
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 447:
                            var2 = _closure1_slot21;
                            var7 = var3.getData;
                            var0 = 'channelIds';
                            var0 = var7.bind(var3)(var0);
                            if (!(var5 == var0)) {
                                _fun71557_ip = 474;
                                continue _fun71557
                            }
                        case 470:
                            var0 = new Array(0);
                        case 474:
                            var5 = var2.bind(var6)(var0);
                            var2 = var5.bind(var6)();
                            var0 = var2.done;
                            if (var0) {
                                _fun71557_ip = 726;
                                continue _fun71557
                            }
                        case 494:
                            var7 = var2.value;
                            var0 = var4.add;
                            var0 = var0.bind(var4)(var7);
                            var7 = var5.bind(var6)();
                            var0 = var7.done;
                            var2 = var7;
                            if (var0) {
                                _fun71557_ip = 726;
                                continue _fun71557
                            }
                        case 527:
                            _fun71557_ip = 494;
                            continue _fun71557;
                        case 529:
                            var2 = var4.add;
                            var5 = var3.getMatch;
                            var0 = 1;
                            var0 = var5.bind(var3)(var0);
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 558:
                            var2 = var4.add;
                            var5 = var3.getData;
                            var0 = 'userId';
                            var0 = var5.bind(var3)(var0);
                            var0 = var2.bind(var4)(var0);
                            _fun71557_ip = 726;
                            continue _fun71557;
                        case 588:
                            var2 = var3.getData;
                            var0 = 'start';
                            var5 = var2.bind(var3)(var0);
                            var2 = var3.getData;
                            var0 = 'end';
                            var4 = var2.bind(var3)(var0);
                            if (!var5) {
                                _fun71557_ip = 667;
                                continue _fun71557
                            }
                        case 621:
                            var2 = _closure2_slot0;
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 13;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var3);
                            var0 = var3.fromTimestamp;
                            var0 = var0.bind(var3)(var5);
                            var2.min_id = var0;
                        case 667:
                            var0 = var4;
                            if (!var0) {
                                _fun71557_ip = 722;
                                continue _fun71557
                            }
                        case 673:
                            var2 = _closure2_slot0;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.fromTimestamp;
                            var1 = var1.bind(var3)(var4);
                            var2.max_id = var1;
                            var0 = var1;
                        case 722:
                            var0 = undefined;
                            return var0;
                        case 726:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var24 = global;
                var2 = var24.Object;
                var1 = var2.entries;
                var5 = var1.bind(var2)(var0);
                var1 = var5.length;
                var3 = 0;
                var1 = var3 < var1;
                var22 = undefined;
                var21 = 2;
                var4 = 1;
                var2 = 0;
                if (!var1) {
                    _fun71556_ip = 141;
                    continue _fun71556
                }
            case 74:
                var6 = var5[var2];
                var1 = _closure1_slot3;
                var1 = var1.bind(var22)(var6, var21);
                var6 = var1[var3];
                var8 = var1[var4];
                var1 = var24.Set;
                var1 = var8 instanceof var1;
                if (!var1) {
                    _fun71556_ip = 129;
                    continue _fun71556
                }
            case 109:
                var7 = var24.Array;
                var1 = var7.from;
                var1 = var1.bind(var7)(var8);
                var0[var6] = var1;
            case 129:
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun71556_ip = 74;
                    continue _fun71556
                }
            case 141:
                var1 = var0.content;
                if (!var1) {
                    _fun71556_ip = 695;
                    continue _fun71556
                }
            case 152:
                var1 = delete var0.contents;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var1 = var4[var1];
                var4 = var2.bind(var22)(var1);
                var2 = var4.getCurrentConfig;
                var1 = {};
                var5 = 'getSearchQueryFromTokens';
                var1.location = var5;
                var20 = var2.bind(var4)(var1);
                var1 = var20.enabled;
                if (var1) {
                    _fun71556_ip = 264;
                    continue _fun71556
                }
            case 206:
                var4 = var0.content;
                var2 = var4.join;
                var1 = ' ';
                var2 = var2.bind(var4)(var1);
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var0.content = var1;
                var1 = var0.content;
                if (var1) {
                    _fun71556_ip = 695;
                    continue _fun71556
                }
            case 254:
                var1 = delete var0.content;
                _fun71556_ip = 695;
                continue _fun71556;
            case 264:
                var1 = new Array(0);
                var2 = var20.brackets;
                if (var2) {
                    _fun71556_ip = 318;
                    continue _fun71556
                }
            case 277:
                var2 = var20.quotes;
                if (var2) {
                    _fun71556_ip = 302;
                    continue _fun71556
                }
            case 286:
                var19 = /((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g;
                _fun71556_ip = 316;
                continue _fun71556;
            case 302:
                var19 = /("((?:[\0-!#-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)"|(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
            case 316:
                _fun71556_ip = 332;
                continue _fun71556;
            case 318:
                var19 = /(\[((?:[\0-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\]|(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
            case 332:
                var4 = _closure1_slot21;
                var2 = var0.content;
                var18 = var4.bind(var22)(var2);
                var4 = var18.bind(var22)();
                var2 = var4.done;
                var17 = '';
                var16 = '|';
                var15 = '://';
                var14 = '"';
                var13 = ']';
                var12 = '[';
                var11 = null;
                var10 = var4;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun71556_ip = 675;
                    continue _fun71556
                }
            case 404:
                var25 = var10.value;
                var2 = var25.match;
                var29 = var2.bind(var25)(var19);
                var28 = var7;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if (!(var11 != var29)) {
                    _fun71556_ip = 645;
                    continue _fun71556
                }
            case 439:
                var2 = _closure1_slot21;
                var30 = var2.bind(var22)(var29);
                var31 = var30.bind(var22)();
                var2 = var31.done;
                var29 = var31;
                var9 = var29;
                var8 = var30;
                var28 = var7;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if (var2) {
                    _fun71556_ip = 645;
                    continue _fun71556
                }
            case 484:
                var34 = var29.value;
                var33 = var20.brackets;
                if (!var33) {
                    _fun71556_ip = 509;
                    continue _fun71556
                }
            case 498:
                var2 = var34.startsWith;
                var33 = var2.bind(var34)(var12);
            case 509:
                if (!var33) {
                    _fun71556_ip = 523;
                    continue _fun71556
                }
            case 512:
                var2 = var34.endsWith;
                var33 = var2.bind(var34)(var13);
            case 523:
                var32 = var20.quotes;
                if (!var32) {
                    _fun71556_ip = 543;
                    continue _fun71556
                }
            case 532:
                var2 = var34.startsWith;
                var32 = var2.bind(var34)(var14);
            case 543:
                if (!var32) {
                    _fun71556_ip = 557;
                    continue _fun71556
                }
            case 546:
                var2 = var34.endsWith;
                var32 = var2.bind(var34)(var14);
            case 557:
                var2 = var34.includes;
                var31 = var2.bind(var34)(var15);
                if (var33) {
                    _fun71556_ip = 579;
                    continue _fun71556
                }
            case 570:
                if (var32) {
                    _fun71556_ip = 579;
                    continue _fun71556
                }
            case 573:
                var36 = var21;
                if (!var31) {
                    _fun71556_ip = 581;
                    continue _fun71556
                }
            case 579:
                var36 = 0;
            case 581:
                var35 = var1.push;
                var2 = var24.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var17)(var36, var16, var34);
                var2 = var35.bind(var1)(var2);
                var35 = var30.bind(var22)();
                var2 = var35.done;
                var29 = var35;
                var9 = var29;
                var8 = var30;
                var28 = var34;
                var27 = var33;
                var26 = var32;
                var25 = var31;
                if (!var2) {
                    _fun71556_ip = 484;
                    continue _fun71556
                }
            case 645:
                var29 = var18.bind(var22)();
                var2 = var29.done;
                var7 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                var10 = var29;
                if (!var2) {
                    _fun71556_ip = 404;
                    continue _fun71556
                }
            case 675:
                var2 = var1.length;
                if (!(var2 > var3)) {
                    _fun71556_ip = 690;
                    continue _fun71556
                }
            case 684:
                var0.contents = var1;
            case 690:
                var1 = delete var0.content;
            case 695:
                return var0;
        }
    };
    var2.getSearchQueryFromTokens = var5;
    var5 = function(arg0) { // Original name: getQueryContentString, environment: var1
        _fun71558: for (var _fun71558_ip = 0;;) switch (_fun71558_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var1 = var2 == var4;
                var0 = undefined;
                if (var1) {
                    _fun71558_ip = 20;
                    continue _fun71558
                }
            case 14:
                var0 = var4.contents;
            case 20:
                if (!(var2 != var0)) {
                    _fun71558_ip = 41;
                    continue _fun71558
                }
            case 24:
                var0 = var4.contents;
                var1 = var0.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun71558_ip = 57;
                    continue _fun71558
                }
            case 41:
                var1 = var2 == var4;
                var0 = undefined;
                if (var1) {
                    _fun71558_ip = 55;
                    continue _fun71558
                }
            case 50:
                var0 = var4.content;
            case 55:
                _fun71558_ip = 119;
                continue _fun71558;
            case 57:
                var5 = var2 == var4;
                var1 = undefined;
                if (var5) {
                    _fun71558_ip = 116;
                    continue _fun71558
                }
            case 66:
                var4 = var4.contents;
                var2 = var2 == var4;
                var1 = undefined;
                if (var2) {
                    _fun71558_ip = 116;
                    continue _fun71558
                }
            case 81:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = var1.split;
                    var2 = '|';
                    var3 = var0.bind(var1)(var2);
                    var1 = var3.slice;
                    var0 = 1;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.join;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.join;
                var2 = ' ';
                var1 = var3.bind(var4)(var2);
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.getQueryContentString = var5;
    var5 = function(arg0) { // Original name: getNonTokenQuery, environment: var1
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun71561: for (var _fun71561_ip = 0;;) switch (_fun71561_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.type;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var1);
                    var1 = var0.NON_TOKEN_TYPE;
                    var0 = '';
                    if (!(var3 === var1)) {
                        _fun71561_ip = 57;
                        continue _fun71561
                    }
                case 47:
                    var1 = var2.getFullMatch;
                    var0 = var1.bind(var2)();
                case 57:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var1 = var1.bind(var2)(var0);
        var0 = var1.trim;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getNonTokenQuery = var5;
    var5 = function(arg0, arg1, arg2) { // Original name: getSelectionScope, environment: var1
        _fun71562: for (var _fun71562_ip = 0;;) switch (_fun71562_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var2 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var2;
                var1 = var5.find;
                var0 = function(arg0, arg1) { // Environment: var4
                    _fun71563: for (var _fun71563_ip = 0;;) switch (_fun71563_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = arg1;
                            var2 = _closure2_slot1;
                            var1 = var0.start;
                            if (!(var2 >= var1)) {
                                _fun71563_ip = 61;
                                continue _fun71563
                            }
                        case 22:
                            var2 = _closure2_slot1;
                            var1 = var0.end;
                            if (!(var2 <= var1)) {
                                _fun71563_ip = 61;
                                continue _fun71563
                            }
                        case 35:
                            var2 = _closure2_slot2;
                            var1 = var0.start;
                            if (!(var2 >= var1)) {
                                _fun71563_ip = 61;
                                continue _fun71563
                            }
                        case 48:
                            var2 = _closure2_slot2;
                            var1 = var0.end;
                            if (!(!(var2 <= var1))) {
                                _fun71563_ip = 69;
                                continue _fun71563
                            }
                        case 61:
                            var _closure2_slot3 = var0;
                            var0 = false;
                            _fun71563_ip = 113;
                            continue _fun71563;
                        case 69:
                            var4 = _closure2_slot0;
                            var2 = 1;
                            var1 = var5 + var2;
                            var4 = var4[var1];
                            var1 = null;
                            var4 = var1 != var4;
                            var0 = true;
                            if (!var4) {
                                _fun71563_ip = 113;
                                continue _fun71563
                            }
                        case 95:
                            var4 = _closure2_slot0;
                            var2 = var5 + var2;
                            var2 = var4[var2];
                            var _closure2_slot4 = var2;
                            var0 = true;
                        case 113:
                            return var0;
                    }
                };
                var5 = var1.bind(var5)(var0);
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun71562_ip = 89;
                    continue _fun71562
                }
            case 49:
                var1 = {};
                var6 = _closure2_slot3;
                var1.previousToken = var6;
                var1.currentToken = var5;
                var4 = _closure2_slot4;
                var1.nextToken = var4;
                var1.focusOffset = var3;
                var1.anchorOffset = var2;
                var0 = var1;
            case 89:
                return var0;
        }
    };
    var2.getSelectionScope = var5;
    var5 = function(arg0, arg1) { // Original name: getAutocompleteMode, environment: var1
        _fun71564: for (var _fun71564_ip = 0;;) switch (_fun71564_ip) {
            case 0:
                var0 = arg0;
                var6 = null;
                if (!(var6 == var0)) {
                    _fun71564_ip = 11;
                    continue _fun71564
                }
            case 9:
                var0 = {};
            case 11:
                var2 = var0.currentToken;
                var1 = var0.nextToken;
                var5 = var0.previousToken;
                var0 = arg1;
                var3 = var0.length;
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun71564_ip = 441;
                    continue _fun71564
                }
            case 46:
                if (!(var6 != var2)) {
                    _fun71564_ip = 406;
                    continue _fun71564
                }
            case 53:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 12;
                var0 = var0[var8];
                var4 = undefined;
                var9 = var7.bind(var4)(var0);
                var7 = var9.isSearchFilterTokenType;
                var0 = var2.type;
                var0 = var7.bind(var9)(var0);
                if (!var0) {
                    _fun71564_ip = 200;
                    continue _fun71564
                }
            case 97:
                if (!(var6 != var1)) {
                    _fun71564_ip = 374;
                    continue _fun71564
                }
            case 104:
                var7 = var1.type;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 15;
                var0 = var10[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.NON_TOKEN_TYPE;
                if (!(var7 !== var0)) {
                    _fun71564_ip = 374;
                    continue _fun71564
                }
            case 142:
                if (!(var6 != var1)) {
                    _fun71564_ip = 200;
                    continue _fun71564
                }
            case 146:
                var9 = _closure1_slot14;
                var7 = var9.test;
                var0 = var1.type;
                var0 = var7.bind(var9)(var0);
                if (var0) {
                    _fun71564_ip = 200;
                    continue _fun71564
                }
            case 168:
                var0 = {};
                var7 = _closure1_slot13;
                var7 = var7.FILTER;
                var0.type = var7;
                var7 = var2.type;
                var0.filter = var7;
                var0.token = var6;
                return var0;
            case 200:
                var7 = var2.type;
                var10 = _closure1_slot1;
                var0 = _closure1_slot2;
                var9 = 15;
                var0 = var0[var9];
                var0 = var10.bind(var4)(var0);
                var0 = var0.NON_TOKEN_TYPE;
                if (!(var7 === var0)) {
                    _fun71564_ip = 275;
                    continue _fun71564
                }
            case 235:
                if (!(var6 != var5)) {
                    _fun71564_ip = 275;
                    continue _fun71564
                }
            case 239:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var8 = var7.bind(var4)(var0);
                var7 = var8.isSearchFilterTokenType;
                var0 = var5.type;
                var0 = var7.bind(var8)(var0);
                if (var0) {
                    _fun71564_ip = 339;
                    continue _fun71564
                }
            case 275:
                var7 = var2.type;
                var8 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var8.bind(var4)(var0);
                var0 = var0.NON_TOKEN_TYPE;
                var4 = undefined;
                if (!(var7 === var0)) {
                    _fun71564_ip = 312;
                    continue _fun71564
                }
            case 309:
                var4 = var2;
            case 312:
                var0 = {};
                var7 = _closure1_slot13;
                var7 = var7.FILTER_ALL;
                var0.type = var7;
                var0.filter = var6;
                var0.token = var4;
                _fun71564_ip = 372;
                continue _fun71564;
            case 339:
                var4 = {};
                var6 = _closure1_slot13;
                var6 = var6.FILTER;
                var4.type = var6;
                var5 = var5.type;
                var4.filter = var5;
                var4.token = var2;
                var0 = var4;
            case 372:
                return var0;
            case 374:
                var0 = {};
                var3 = _closure1_slot13;
                var3 = var3.FILTER;
                var0.type = var3;
                var2 = var2.type;
                var0.filter = var2;
                var0.token = var1;
                return var0;
            case 406:
                var0 = {
                    'type': null,
                    'filter': null,
                    'token': null
                };
                var1 = _closure1_slot13;
                var1 = var1.FILTER_ALL;
                var0.type = var1;
                return var0;
            case 441:
                var0 = {
                    'type': null,
                    'filter': null,
                    'token': null
                };
                var1 = _closure1_slot13;
                var1 = var1.EMPTY;
                var0.type = var1;
                return var0;
        }
    };
    var2.getAutocompleteMode = var5;
    var2.quoteChannelName = var4;
    var4 = function(arg0, arg1) { // Original name: getFlattenedAutocompleteResults, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 16;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun71566: for (var _fun71566_ip = 0;;) switch (_fun71566_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun71566_ip = 86;
                        continue _fun71566
                    }
                case 15:
                    var1 = var4.results;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun71566_ip = 86;
                        continue _fun71566
                    }
                case 32:
                    var1 = var4.group;
                    var _closure3_slot1 = var1;
                    var3 = _closure2_slot1;
                    var2 = var3.concat;
                    var5 = var4.results;
                    var4 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun71567: for (var _fun71567_ip = 0;;) switch (_fun71567_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.text;
                                var0 = var2.channel;
                                var4 = null;
                                var6 = var3;
                                if (!(var4 != var0)) {
                                    _fun71567_ip = 36;
                                    continue _fun71567
                                }
                            case 22:
                                var1 = _closure1_slot25;
                                var0 = undefined;
                                var6 = var1.bind(var0)(var3);
                            case 36:
                                var0 = _closure2_slot0;
                                var5 = var0.type;
                                var0 = _closure1_slot13;
                                var0 = var0.FILTER_ALL;
                                var1 = var6;
                                if (!(var5 === var0)) {
                                    _fun71567_ip = 209;
                                    continue _fun71567
                                }
                            case 71:
                                var5 = var2.group;
                                if (!(var4 == var5)) {
                                    _fun71567_ip = 88;
                                    continue _fun71567
                                }
                            case 81:
                                var5 = _closure3_slot1;
                            case 88:
                                _closure3_slot1 = var5;
                                var7 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 12;
                                var3 = var5[var3];
                                var5 = undefined;
                                var3 = var7.bind(var5)(var3);
                                var0 = _closure3_slot1;
                                var0 = var3[var0];
                                var7 = var4 == var0;
                                var3 = undefined;
                                if (var7) {
                                    _fun71567_ip = 139;
                                    continue _fun71567
                                }
                            case 134:
                                var3 = var0.key;
                            case 139:
                                var3 = var4 != var3;
                                if (!var3) {
                                    _fun71567_ip = 168;
                                    continue _fun71567
                                }
                            case 146:
                                var4 = var4 == var0;
                                var5 = undefined;
                                if (var4) {
                                    _fun71567_ip = 160;
                                    continue _fun71567
                                }
                            case 155:
                                var5 = var0.key;
                            case 160:
                                var4 = '';
                                var3 = var4 !== var5;
                            case 168:
                                var1 = var6;
                                if (!var3) {
                                    _fun71567_ip = 209;
                                    continue _fun71567
                                }
                            case 174:
                                var5 = var0.key;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var3 = '';
                                var0 = ' ';
                                var1 = var4.bind(var3)(var5, var0, var6);
                            case 209:
                                var0 = {};
                                var0.result = var2;
                                var2 = _closure3_slot0;
                                var2 = var2.group;
                                var0.group = var2;
                                var0.resultText = var1;
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var0);
                    _closure2_slot1 = var0;
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var2 = _closure2_slot1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.resultText;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getFlattenedAutocompleteResults = var4;
    var4 = function(arg0) { // Original name: getTotalResults, environment: var1
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun71570: for (var _fun71570_ip = 0;;) switch (_fun71570_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var3 = null;
                    var0 = var2;
                    if (!(var3 != var1)) {
                        _fun71570_ip = 30;
                        continue _fun71570
                    }
                case 15:
                    var1 = var1.results;
                    var1 = var1.length;
                    var0 = var1 + var2;
                case 30:
                    return var0;
            }
        };
        var0 = 0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getTotalResults = var4;
    var4 = function(arg0) { // Original name: getQueryFromTokens, environment: var1
        _fun71571: for (var _fun71571_ip = 0;;) switch (_fun71571_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var3 = '';
                var0 = var3;
                if (var1) {
                    _fun71571_ip = 48;
                    continue _fun71571
                }
            case 19:
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getFullMatch;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                var1 = var2.join;
                var0 = var1.bind(var2)(var3);
            case 48:
                return var0;
        }
    };
    var2.getQueryFromTokens = var4;
    var4 = function(arg0, arg1) { // Original name: queryHasFilter, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot26;
        var2 = undefined;
        var1 = arg0;
        var2 = var3.bind(var2)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.queryHasFilter = var4;
    var2.tokenizeQuery = var3;
    var3 = function() { // Original name: clearTokenCache, environment: var1
        var2 = _closure1_slot19;
        var1 = var2.clearCache;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot20;
        var0 = var1.clearCache;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.clearTokenCache = var3;
    var3 = function(arg0) { // Original name: showDatePicker, environment: var1
        _fun71576: for (var _fun71576_ip = 0;;) switch (_fun71576_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun71576_ip = 23;
                    continue _fun71576
                }
            case 12:
                var1 = _closure1_slot18;
                var0 = var1[var2];
            case 23:
                return var0;
        }
    };
    var2.showDatePicker = var3;
    var3 = function(arg0, arg1) { // Original name: filterHasAnswer, environment: var1
        _fun71577: for (var _fun71577_ip = 0;;) switch (_fun71577_ip) {
            case 0:
                var2 = arg1;
                var4 = _closure1_slot15;
                var1 = var4.test;
                var0 = arg0;
                var0 = var0.type;
                var4 = var1.bind(var4)(var0);
                var1 = null;
                var0 = var1 == var2;
                if (!var0) {
                    _fun71577_ip = 40;
                    continue _fun71577
                }
            case 37:
                var0 = var4;
            case 40:
                if (var0) {
                    _fun71577_ip = 81;
                    continue _fun71577
                }
            case 43:
                var1 = var1 != var2;
                if (!var1) {
                    _fun71577_ip = 53;
                    continue _fun71577
                }
            case 50:
                var1 = var4;
            case 53:
                if (!var1) {
                    _fun71577_ip = 78;
                    continue _fun71577
                }
            case 56:
                var4 = _closure1_slot14;
                var3 = var4.test;
                var2 = var2.type;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
            case 78:
                var0 = var1;
            case 81:
                var0 = !var0;
                return var0;
        }
    };
    var2.filterHasAnswer = var3;
    var3 = function() { // Original name: refreshSearchTokens, environment: var1
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var5 = 12;
        var2 = var3[var5];
        var0 = undefined;
        var4 = var6.bind(var0)(var2);
        var2 = var4.rebuildSearchTokenConfigs;
        var2 = var2.bind(var4)();
        var4 = _closure1_slot19;
        var2 = var4.reset;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var4 = 16;
        var8 = var3[var4];
        var9 = var2.bind(var0)(var8);
        var8 = var3[var5];
        var8 = var2.bind(var0)(var8);
        var10 = var9.bind(var0)(var8);
        var9 = var10.forOwn;
        var8 = function(arg0, arg1) { // Environment: var1
            var2 = _closure1_slot19;
            var1 = var2.addRule;
            var0 = {};
            var3 = arg1;
            var0.type = var3;
            var4 = arg0;
            var5 = var0;
            var3 = copyDataProperties(var5, var4);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var9.bind(var10)(var8);
        var8 = _closure1_slot20;
        var7 = var8.reset;
        var7 = var7.bind(var8)();
        var5 = var3[var5];
        var6 = var6.bind(var0)(var5);
        var5 = var6.buildCrossDMSearchTokensConfig;
        var5 = var5.bind(var6)();
        var4 = var3[var4];
        var4 = var2.bind(var0)(var4);
        var5 = var4.bind(var0)(var5);
        var4 = var5.forOwn;
        var1 = function(arg0, arg1) { // Environment: var1
            var2 = _closure1_slot20;
            var1 = var2.addRule;
            var0 = {};
            var3 = arg1;
            var0.type = var3;
            var4 = arg0;
            var5 = var0;
            var3 = copyDataProperties(var5, var4);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var4.bind(var5)(var1);
        var1 = 17;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.markSearchTokensRefreshed;
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.refreshSearchTokens = var3;
    var3 = function(arg0) { // Original name: isChannelFilterSupported, environment: var1
        _fun71581: for (var _fun71581_ip = 0;;) switch (_fun71581_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot24;
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var0 = !var3;
                var0 = !var0;
                if (var3) {
                    _fun71581_ip = 64;
                    continue _fun71581
                }
            case 26:
                var3 = var1.type;
                var1 = _closure1_slot11;
                var1 = var1.DMS;
                var1 = var3 === var1;
                if (!var1) {
                    _fun71581_ip = 61;
                    continue _fun71581
                }
            case 48:
                var2 = _closure1_slot8;
                var2 = var2.hidePersonalInformation;
                var1 = !var2;
            case 61:
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var2.isChannelFilterSupported = var3;
    var3 = function(arg0) { // Original name: getChannelDisplayName, environment: var1
        _fun71582: for (var _fun71582_ip = 0;;) switch (_fun71582_ip) {
            case 0:
                var6 = arg0;
                var3 = var6.name;
                var0 = var6.isGroupDM;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun71582_ip = 203;
                    continue _fun71582
                }
            case 24:
                var0 = var6.isDM;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun71582_ip = 126;
                    continue _fun71582
                }
            case 37:
                var0 = var6.isThread;
                var0 = var0.bind(var6)();
                var0 = !var0;
                var4 = _closure1_slot5;
                var2 = var4.getTextChannelNameDisambiguations;
                var1 = var6.getGuildId;
                var1 = var1.bind(var6)();
                var2 = var2.bind(var4)(var1);
                var1 = var6.id;
                var2 = var2[var1];
                var5 = null;
                var1 = var5 == var2;
                var4 = undefined;
                if (var1) {
                    _fun71582_ip = 103;
                    continue _fun71582
                }
            case 98:
                var4 = var2.name;
            case 103:
                var1 = var0;
                if (!(var5 != var4)) {
                    _fun71582_ip = 251;
                    continue _fun71582
                }
            case 113:
                var3 = var2.name;
                var1 = var0;
                _fun71582_ip = 251;
                continue _fun71582;
            case 126:
                var0 = var6.getRecipientId;
                var5 = var0.bind(var6)();
                var4 = _closure1_slot9;
                var2 = var4.getUser;
                var4 = var2.bind(var4)(var5);
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var0 = var2.getUserTag;
                var5 = var0.bind(var2)(var4);
                var0 = null;
                var2 = var0 == var5;
                var1 = false;
                var3 = var5;
                if (!var2) {
                    _fun71582_ip = 251;
                    continue _fun71582
                }
            case 201:
                return var0;
            case 203:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.computeChannelName;
                var2 = _closure1_slot9;
                var0 = _closure1_slot7;
                var3 = var4.bind(var5)(var6, var2, var0);
                var1 = false;
            case 251:
                var2 = _closure1_slot25;
                var0 = undefined;
                var3 = var2.bind(var0)(var3);
                var0 = var3;
                if (!var1) {
                    _fun71582_ip = 293;
                    continue _fun71582
                }
            case 271:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '#';
                var0 = var2.bind(var1)(var3);
            case 293:
                return var0;
        }
    };
    var2.getChannelDisplayName = var3;
    var3 = function(arg0) { // Original name: getChannelPlaceholderName, environment: var1
        _fun71583: for (var _fun71583_ip = 0;;) switch (_fun71583_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.isGroupDM;
                var1 = var0.bind(var4)();
                if (var1) {
                    _fun71583_ip = 156;
                    continue _fun71583
                }
            case 22:
                var1 = var4.isDM;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun71583_ip = 96;
                    continue _fun71583
                }
            case 35:
                var3 = _closure1_slot5;
                var2 = var3.getTextChannelNameDisambiguations;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = var4.id;
                var3 = var2[var1];
                var2 = null;
                var5 = var2 == var3;
                var1 = undefined;
                if (var5) {
                    _fun71583_ip = 85;
                    continue _fun71583
                }
            case 80:
                var1 = var3.name;
            case 85:
                if (!(var2 == var1)) {
                    _fun71583_ip = 94;
                    continue _fun71583
                }
            case 89:
                var1 = var4.name;
            case 94:
                return var1;
            case 96:
                var1 = var4.getRecipientId;
                var3 = var1.bind(var4)();
                var2 = _closure1_slot9;
                var1 = var2.getUser;
                var3 = var1.bind(var2)(var3);
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getUserTag;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeChannelName;
                var1 = _closure1_slot9;
                var0 = _closure1_slot7;
                var0 = var2.bind(var3)(var4, var1, var0);
                return var0;
        }
    };
    var2.getChannelPlaceholderName = var3;
    var3 = function() { // Original name: isFavoriteSearchEnabled, environment: var1
        _fun71584: for (var _fun71584_ip = 0;;) switch (_fun71584_ip) {
            case 0:
                var1 = _closure1_slot9;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
                var0 = null;
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun71584_ip = 37;
                    continue _fun71584
                }
            case 27:
                var2 = var3.isStaff;
                var1 = var2.bind(var3)();
            case 37:
                var0 = var0 != var1;
                if (!var0) {
                    _fun71584_ip = 47;
                    continue _fun71584
                }
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var2.isFavoriteSearchEnabled = var3;
    var1 = function(arg0) { // Original name: removeInvalidPrivateChannelSearchTokens, environment: var1
        var3 = _closure1_slot20;
        var2 = var3.tokenize;
        var1 = arg0;
        var4 = var2.bind(var3)(var1);
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var2 = var4.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun71586: for (var _fun71586_ip = 0;;) switch (_fun71586_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.type;
                    var0 = _closure1_slot12;
                    var0 = var0.FILTER_IN;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun71586_ip = 47;
                        continue _fun71586
                    }
                case 28:
                    var3 = var2.type;
                    var1 = _closure1_slot12;
                    var1 = var1.ANSWER_IN;
                    var0 = var3 === var1;
                case 47:
                    if (var0) {
                        _fun71586_ip = 67;
                        continue _fun71586
                    }
                case 50:
                    var1 = _closure2_slot0;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var4)(var1);
        var1 = '';
        var _closure2_slot1 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var3 = arg0;
            var2 = _closure2_slot1;
            var0 = var3.getFullMatch;
            var0 = var0.bind(var3)();
            var0 = var2 + var0;
            _closure2_slot1 = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var1 = _closure2_slot1;
        var0 = var1.trim;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.removeInvalidPrivateChannelSearchTokens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1372, 1662, 4509, 3059, 1661, 3196, 1613, 8857, 660, 3004, 1234, 8924, 21, 8928, 8929, 22, 8930, 4748, 3195, 2]);