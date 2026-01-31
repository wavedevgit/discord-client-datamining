// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24355: for (var _fun24355_ip = 0;;) switch (_fun24355_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var4 = function(arg0, arg1, arg2, arg3) { // Original name: translate, environment: var1
                    _fun24357: for (var _fun24357_ip = 0;;) switch (_fun24357_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = arg2;
                            var1 = arg3;
                            var0 = 's';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 389;
                                continue _fun24357
                            }
                        case 20:
                            var0 = 'ss';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 372;
                                continue _fun24357
                            }
                        case 31:
                            var0 = 'm';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 355;
                                continue _fun24357
                            }
                        case 42:
                            var0 = 'mm';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 284;
                                continue _fun24357
                            }
                        case 53:
                            var0 = 'h';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 267;
                                continue _fun24357
                            }
                        case 64:
                            var0 = 'hh';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 247;
                                continue _fun24357
                            }
                        case 75:
                            var0 = 'd';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 230;
                                continue _fun24357
                            }
                        case 86:
                            var0 = 'dd';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 210;
                                continue _fun24357
                            }
                        case 94:
                            var0 = 'M';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 193;
                                continue _fun24357
                            }
                        case 102:
                            var0 = 'MM';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 173;
                                continue _fun24357
                            }
                        case 110:
                            var0 = 'y';
                            if (!(var0 !== var3)) {
                                _fun24357_ip = 156;
                                continue _fun24357
                            }
                        case 118:
                            var2 = '';
                            var0 = 'yy';
                            if (!(var0 === var3)) {
                                _fun24357_ip = 302;
                                continue _fun24357
                            }
                        case 133:
                            var0 = 'vuotta';
                            if (!var1) {
                                _fun24357_ip = 148;
                                continue _fun24357
                            }
                        case 142:
                            var0 = 'vuoden';
                        case 148:
                            var2 = var0;
                            _fun24357_ip = 302;
                            continue _fun24357;
                        case 156:
                            var0 = 'vuosi';
                            if (!var1) {
                                _fun24357_ip = 171;
                                continue _fun24357
                            }
                        case 165:
                            var0 = 'vuoden';
                        case 171:
                            return var0;
                        case 173:
                            var0 = 'kuukautta';
                            if (!var1) {
                                _fun24357_ip = 188;
                                continue _fun24357
                            }
                        case 182:
                            var0 = 'kuukauden';
                        case 188:
                            var2 = var0;
                            _fun24357_ip = 302;
                            continue _fun24357;
                        case 193:
                            var0 = 'kuukausi';
                            if (!var1) {
                                _fun24357_ip = 208;
                                continue _fun24357
                            }
                        case 202:
                            var0 = 'kuukauden';
                        case 208:
                            return var0;
                        case 210:
                            var0 = 'päivää';
                            if (!var1) {
                                _fun24357_ip = 225;
                                continue _fun24357
                            }
                        case 219:
                            var0 = 'päivän';
                        case 225:
                            var2 = var0;
                            _fun24357_ip = 302;
                            continue _fun24357;
                        case 230:
                            var0 = 'päivä';
                            if (!var1) {
                                _fun24357_ip = 245;
                                continue _fun24357
                            }
                        case 239:
                            var0 = 'päivän';
                        case 245:
                            return var0;
                        case 247:
                            var0 = 'tuntia';
                            if (!var1) {
                                _fun24357_ip = 262;
                                continue _fun24357
                            }
                        case 256:
                            var0 = 'tunnin';
                        case 262:
                            var2 = var0;
                            _fun24357_ip = 302;
                            continue _fun24357;
                        case 267:
                            var0 = 'tunti';
                            if (!var1) {
                                _fun24357_ip = 282;
                                continue _fun24357
                            }
                        case 276:
                            var0 = 'tunnin';
                        case 282:
                            return var0;
                        case 284:
                            var0 = 'minuuttia';
                            if (!var1) {
                                _fun24357_ip = 299;
                                continue _fun24357
                            }
                        case 293:
                            var0 = 'minuutin';
                        case 299:
                            var2 = var0;
                        case 302:
                            var0 = 10;
                            var3 = var5;
                            if (!(var3 < var0)) {
                                _fun24357_ip = 339;
                                continue _fun24357
                            }
                        case 312:
                            if (var1) {
                                _fun24357_ip = 328;
                                continue _fun24357
                            }
                        case 318:
                            var0 = _closure2_slot0;
                            var0 = var0[var5];
                            _fun24357_ip = 336;
                            continue _fun24357;
                        case 328:
                            var4 = _closure2_slot1;
                            var0 = var4[var5];
                        case 336:
                            var3 = var0;
                        case 339:
                            var0 = ' ';
                            var0 = var3 + var0;
                            var0 = var0 + var2;
                            return var0;
                        case 355:
                            var0 = 'minuutti';
                            if (!var1) {
                                _fun24357_ip = 370;
                                continue _fun24357
                            }
                        case 364:
                            var0 = 'minuutin';
                        case 370:
                            return var0;
                        case 372:
                            var0 = 'sekuntia';
                            if (!var1) {
                                _fun24357_ip = 387;
                                continue _fun24357
                            }
                        case 381:
                            var0 = 'sekunnin';
                        case 387:
                            return var0;
                        case 389:
                            var0 = 'muutama sekunti';
                            if (!var1) {
                                _fun24357_ip = 404;
                                continue _fun24357
                            }
                        case 398:
                            var0 = 'muutaman sekunnin';
                        case 404:
                            return var0;
                    }
                };
                var5 = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän';
                var2 = var5.split;
                var0 = ' ';
                var5 = var2.bind(var5)(var0);
                var _closure2_slot0 = var5;
                var0 = 7;
                var2 = var5[var0];
                var0 = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden'];
                var0[7] = var2;
                var2 = 8;
                var2 = var5[var2];
                var0[8] = var2;
                var2 = 9;
                var2 = var5[var2];
                var0[9] = var2;
                var _closure2_slot1 = var0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu';
                var0 = var5.split;
                var6 = '_';
                var0 = var0.bind(var5)(var6);
                var1.months = var0;
                var5 = 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.monthsShort = var0;
                var5 = 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdays = var0;
                var5 = 'su_ma_ti_ke_to_pe_la';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysShort = var0;
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH.mm',
                    'LTS': 'HH.mm.ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'Do MMMM[ta] YYYY',
                    'LLL': 'Do MMMM[ta] YYYY, [klo] HH.mm',
                    'LLLL': 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
                    'l': 'D.M.YYYY',
                    'll': 'Do MMM YYYY',
                    'lll': 'Do MMM YYYY, [klo] HH.mm',
                    'llll': 'ddd, Do MMM YYYY, [klo] HH.mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[tänään] [klo] LT',
                    'nextDay': '[huomenna] [klo] LT',
                    'nextWeek': 'dddd [klo] LT',
                    'lastDay': '[eilen] [klo] LT',
                    'lastWeek': '[viime] dddd[na] [klo] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': '%s päästä',
                    'past': '%s sitten'
                };
                var0.s = var4;
                var0.ss = var4;
                var0.m = var4;
                var0.mm = var4;
                var0.h = var4;
                var0.hh = var4;
                var0.d = var4;
                var0.dd = var4;
                var0.M = var4;
                var0.MM = var4;
                var0.y = var4;
                var0.yy = var4;
                var1.relativeTime = var0;
                var0 = /\d{1,2}\./;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%d.';
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'fi';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24355_ip = 44;
                continue _fun24355
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24355_ip = 44;
                continue _fun24355
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24355_ip = 121;
                continue _fun24355
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24355_ip = 78;
                continue _fun24355
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24355_ip = 95;
                continue _fun24355
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24355_ip = 140;
            continue _fun24355;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24355_ip = 140;
            continue _fun24355;
        case 121:
            var4 = arg6;
            var0 = 0;
            var0 = var4[var0];
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
        case 140:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3004]);