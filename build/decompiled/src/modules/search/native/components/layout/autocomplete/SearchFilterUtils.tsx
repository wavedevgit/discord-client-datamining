// modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105086: for (var _fun105086_ip = 0;;) switch (_fun105086_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 12;
                var1 = var0[var6];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun105086_ip = 82;
                    continue _fun105086
                }
            case 38:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = var4[var6];
                var8 = var8.bind(var0)(var7);
                var7 = var8.rebuildSearchTokenConfigs;
                var7 = var7.bind(var8)();
                var5 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var5.bind(var0)(var4);
                var3 = var4[var2];
            case 82:
                var4 = var1 == var3;
                var0 = undefined;
                if (var4) {
                    _fun105086_ip = 96;
                    continue _fun105086
                }
            case 91:
                var0 = var3.key;
            case 96:
                if (!(var1 == var0)) {
                    _fun105086_ip = 109;
                    continue _fun105086
                }
            case 100:
                var1 = var2.toString;
                var0 = var1.bind(var2)();
            case 109:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot4 = var6;
    var3 = var3.SearchQueryTagTypes;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SEARCH_DATE_FORMAT;
    var _closure1_slot6 = var6;
    var6 = var3.SearchTokenTypes;
    var _closure1_slot7 = var6;
    var3 = var3.SearchTypes;
    var _closure1_slot8 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun105087: for (var _fun105087_ip = 0;;) switch (_fun105087_ip) {
            case 0:
                var4 = arg1;
                var1 = _closure1_slot7;
                var1 = var1.FILTER_FROM;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 701;
                    continue _fun105087
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_HAS;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 640;
                    continue _fun105087
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_MENTIONS;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 579;
                    continue _fun105087
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_IN;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 435;
                    continue _fun105087
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_ON;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 374;
                    continue _fun105087
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_BEFORE;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 313;
                    continue _fun105087
                }
            case 108:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AFTER;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 252;
                    continue _fun105087
                }
            case 125:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AUTHOR_TYPE;
                if (!(var1 !== var4)) {
                    _fun105087_ip = 191;
                    continue _fun105087
                }
            case 139:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getSearchTokenLabel] Unhandled search token type: ';
                var8 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.C4r6xL;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 252:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.hcMwDW;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 313:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.c9qSBR;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 374:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.h4qGfp;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 435:
                var1 = arg0;
                var2 = var1.type;
                var1 = _closure1_slot8;
                var1 = var1.DMS;
                if (!(var2 !== var1)) {
                    _fun105087_ip = 518;
                    continue _fun105087
                }
            case 457:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.cdPmq8;
                var1 = var2.bind(var3)(var1);
                _fun105087_ip = 577;
                continue _fun105087;
            case 518:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["8Fmo42"];
                var1 = var3.bind(var4)(var2);
            case 577:
                return var1;
            case 579:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.CMKzQx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 640:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.DMAzx8;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 701:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["6iuVMn"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getSearchTokenLabel = var3;
    var3 = function arg0() {
        _fun105088: for (var _fun105088_ip = 0;;) switch (_fun105088_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FILTER_FROM;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 618;
                    continue _fun105088
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_HAS;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 557;
                    continue _fun105088
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_IN;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 496;
                    continue _fun105088
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_MENTIONS;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 435;
                    continue _fun105088
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_ON;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 374;
                    continue _fun105088
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_BEFORE;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 313;
                    continue _fun105088
                }
            case 108:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AFTER;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 252;
                    continue _fun105088
                }
            case 125:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AUTHOR_TYPE;
                if (!(var1 !== var4)) {
                    _fun105088_ip = 191;
                    continue _fun105088
                }
            case 139:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getSearchTokenSubLabel] Unhandled search token type: ';
                var7 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.tJPdhZ;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 252:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.hwbB7s;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 313:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.YEN3uU;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 374:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.t8bWvr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 435:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.ILtwK5;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 496:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.qDUdlT;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 557:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gUfZa2;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 618:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.kkGlww;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getSearchTokenSubLabel = var3;
    var3 = function arg0() {
        _fun105089: for (var _fun105089_ip = 0;;) switch (_fun105089_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FILTER_FROM;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 398;
                    continue _fun105089
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_HAS;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 368;
                    continue _fun105089
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_IN;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 338;
                    continue _fun105089
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_MENTIONS;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 308;
                    continue _fun105089
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_ON;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 278;
                    continue _fun105089
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_BEFORE;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 248;
                    continue _fun105089
                }
            case 108:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AFTER;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 218;
                    continue _fun105089
                }
            case 122:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AUTHOR_TYPE;
                if (!(var1 !== var4)) {
                    _fun105089_ip = 188;
                    continue _fun105089
                }
            case 136:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getSearchTokenIcon] Unhandled search token type: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 188:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.RobotIcon;
                return var1;
            case 218:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.CalendarPlusIcon;
                return var1;
            case 248:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.CalendarMinusIcon;
                return var1;
            case 278:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.CalendarIcon;
                return var1;
            case 308:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AtIcon;
                return var1;
            case 338:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ChannelListMagnifyingGlassIcon;
                return var1;
            case 368:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AttachmentIcon;
                return var1;
            case 398:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.UserIcon;
                return var0;
        }
    };
    var2.getSearchTokenIcon = var3;
    var3 = function arg0, arg1, arg2() {
        _fun105090: for (var _fun105090_ip = 0;;) switch (_fun105090_ip) {
            case 0:
                var4 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot7;
                var2 = var2.FILTER_FROM;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 208;
                    continue _fun105090
                }
            case 43:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_IN;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 208;
                    continue _fun105090
                }
            case 60:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_HAS;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 208;
                    continue _fun105090
                }
            case 77:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_MENTIONS;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 208;
                    continue _fun105090
                }
            case 91:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_AUTHOR_TYPE;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 208;
                    continue _fun105090
                }
            case 105:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_ON;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 199;
                    continue _fun105090
                }
            case 119:
                var2 = _closure1_slot7;
                var2 = var2.FILTER_BEFORE;
                if (!(var2 !== var4)) {
                    _fun105090_ip = 199;
                    continue _fun105090
                }
            case 133:
                var1 = _closure1_slot7;
                var1 = var1.FILTER_AFTER;
                if (!(var1 !== var4)) {
                    _fun105090_ip = 199;
                    continue _fun105090
                }
            case 147:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getSearchTokenPressHandler] Unhandled search token type: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 199:
                var1 = function() { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = function arg0, arg1, arg2() {
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = arg2;
                        var _closure4_slot2 = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 13;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.performKeyboardAwareNavigation;
                        var1 = function() { // Environment: var1
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var3 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 16;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 15;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = function arg0() {
                                var4 = arg0;
                                var3 = var4.format;
                                var2 = _closure1_slot6;
                                var2 = var3.bind(var4)(var2);
                                var _closure6_slot0 = var2;
                                var4 = _closure1_slot3;
                                var2 = var4.setState;
                                var3 = _closure4_slot0;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = arg0;
                                    var0 = var3.removePrefixTags;
                                    var0 = var0.bind(var3)();
                                    var2 = var3.setTextInputValue;
                                    var1 = _closure1_slot4;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = var3.addTag;
                                    var1 = {};
                                    var4 = _closure1_slot5;
                                    var4 = var4.COMPLETE;
                                    var1.type = var4;
                                    var6 = _closure1_slot9;
                                    var5 = _closure4_slot1;
                                    var0 = undefined;
                                    var10 = var6.bind(var0)(var5);
                                    var9 = _closure6_slot0;
                                    var6 = global;
                                    var6 = var6.HermesInternal;
                                    var8 = var6.concat;
                                    var7 = '';
                                    var6 = ' ';
                                    var6 = var8.bind(var7)(var10, var6, var9);
                                    var1.text = var6;
                                    var1.searchTokenType = var5;
                                    var4 = _closure4_slot2;
                                    var1.location = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var4)(var3, var1);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 17;
                                var1 = var4[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.trackSearchFilterAdd;
                                var1 = {};
                                var1.searchContext = var3;
                                var8 = _closure4_slot1;
                                var1.searchTokenType = var8;
                                var7 = _closure4_slot2;
                                var1.location = var7;
                                var1 = var5.bind(var6)(var1);
                                var1 = 13;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchInitialMessages;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                            };
                            var2.onSubmit = var1;
                            var1 = 'DatePicker';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4, var3, var2);
                    return var0;
                };
                return var1;
            case 208:
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = function arg0, arg1, arg2() {
                        var3 = arg0;
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var0 = arg2;
                        var _closure4_slot1 = var0;
                        var4 = _closure1_slot3;
                        var2 = var4.setState;
                        var1 = function(arg0) { // Environment: var1
                            var3 = arg0;
                            var2 = var3.setTextInputValue;
                            var1 = _closure1_slot4;
                            var1 = var2.bind(var3)(var1);
                            var2 = var3.addTag;
                            var1 = {};
                            var4 = _closure1_slot5;
                            var4 = var4.PREFIX;
                            var1.type = var4;
                            var5 = _closure4_slot0;
                            var1.searchTokenType = var5;
                            var4 = _closure4_slot1;
                            var1.location = var4;
                            var4 = _closure1_slot9;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var5);
                            var1.text = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var2.bind(var4)(var3, var1);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.syncAutocomplete;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4, var3, var2);
                    return var0;
                };
                return var0;
        }
    };
    var2.getSearchTokenPressHandler = var3;
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.keys;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 12;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun105100: for (var _fun105100_ip = 0;;) switch (_fun105100_ip) {
                case 0:
                    var5 = arg0;
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var3 = 12;
                    var2 = var0[var3];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.isSearchFilterTokenType;
                    var2 = var2.bind(var4)(var5);
                    if (!var2) {
                        _fun105100_ip = 182;
                        continue _fun105100
                    }
                case 45:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1[var5];
                    var4 = var1.plainText;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun105100_ip = 182;
                        continue _fun105100
                    }
                case 78:
                    var1 = global;
                    var6 = var1.RegExp;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '^';
                    var1 = '(?:: ?)?$';
                    var8 = var3.bind(var2)(var4, var1);
                    var1 = var6.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var6
                        }
                    });
                    var7 = 'i';
                    var9 = var2;
                    var1 = new var9[var6](var8, var7, var6);
                    var6 = var1 instanceof Object ? var1 : var2;
                    var3 = var6.test;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var6)(var2);
                    if (!var2) {
                        _fun105100_ip = 182;
                        continue _fun105100
                    }
                case 157:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var1.token = var5;
                    var1.text = var4;
                    var1 = var2.bind(var3)(var1);
                case 182:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getSearchFilterSuggestions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8959, 8895, 660, 1234, 10075, 8773, 11084, 4849, 8176, 13695, 13697, 5442, 8962, 11660, 3269, 8109, 1307, 8958, 2]);