// modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.CreatorMonetizationApplicationState;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116703: for (var _fun116703_ip = 0;;) switch (_fun116703_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = null;
                var2 = var4 == var1;
                var3 = undefined;
                var5 = undefined;
                if (var2) {
                    _fun116703_ip = 38;
                    continue _fun116703
                }
            case 18:
                var2 = var1.latestRequest;
                var6 = var4 == var2;
                var5 = undefined;
                if (var6) {
                    _fun116703_ip = 38;
                    continue _fun116703
                }
            case 33:
                var5 = var2.state;
            case 38:
                var2 = _closure1_slot2;
                var2 = var2.REJECTED;
                var2 = var5 === var2;
                var0.isApplicationRejected = var2;
                var5 = var4 == var1;
                var2 = undefined;
                if (var5) {
                    _fun116703_ip = 92;
                    continue _fun116703
                }
            case 69:
                var1 = var1.rejection;
                var4 = var4 == var1;
                var2 = undefined;
                if (var4) {
                    _fun116703_ip = 92;
                    continue _fun116703
                }
            case 84:
                var2 = var1.can_reapply_at;
            case 92:
                var1 = function arg0() {
                    _fun116704: for (var _fun116704_ip = 0;;) switch (_fun116704_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun116704_ip = 521;
                                continue _fun116704
                            }
                        case 14:
                            var2 = global;
                            var3 = var2.Date;
                            var1 = var3.parse;
                            var4 = var1.bind(var3)(var4);
                            var3 = var2.Date;
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var3 = var2.isNaN;
                            var7 = undefined;
                            var3 = var3.bind(var7)(var4);
                            if (var3) {
                                _fun116704_ip = 521;
                                continue _fun116704
                            }
                        case 67:
                            if (!(!(var4 < var1))) {
                                _fun116704_ip = 521;
                                continue _fun116704
                            }
                        case 74:
                            var3 = var2.Math;
                            var2 = var3.round;
                            var4 = var4 - var1;
                            var1 = 60000;
                            var1 = var4 / var1;
                            var4 = var2.bind(var3)(var1);
                            var _closure3_slot0 = var4;
                            var6 = function arg0() {
                                var0 = global;
                                var2 = var0.Math;
                                var1 = var2.round;
                                var3 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var3 / var0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var5 = 43200;
                            if (!(!(var4 >= var5))) {
                                _fun116704_ip = 448;
                                continue _fun116704
                            }
                        case 128:
                            var8 = 10080;
                            if (!(!(var4 >= var8))) {
                                _fun116704_ip = 375;
                                continue _fun116704
                            }
                        case 141:
                            var9 = 1440;
                            if (!(!(var4 >= var9))) {
                                _fun116704_ip = 302;
                                continue _fun116704
                            }
                        case 154:
                            var10 = 60;
                            if (!(!(var4 >= var10))) {
                                _fun116704_ip = 229;
                                continue _fun116704
                            }
                        case 161:
                            var1 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var0 = 1;
                            var2 = var11[var0];
                            var2 = var1.bind(var7)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var11[var0];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.t;
                            var1 = var0.iXLF9W;
                            var0 = {};
                            var0.minutes = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun116704_ip = 300;
                            continue _fun116704;
                        case 229:
                            var2 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var1 = 1;
                            var3 = var11[var1];
                            var3 = var2.bind(var7)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var11[var1];
                            var1 = var2.bind(var7)(var1);
                            var1 = var1.t;
                            var2 = var1.xCjYxK;
                            var1 = {};
                            var10 = var6.bind(var7)(var10);
                            var1.hours = var10;
                            var0 = var3.bind(var4)(var2, var1);
                        case 300:
                            _fun116704_ip = 373;
                            continue _fun116704;
                        case 302:
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var1 = 1;
                            var3 = var10[var1];
                            var3 = var2.bind(var7)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var10[var1];
                            var1 = var2.bind(var7)(var1);
                            var1 = var1.t;
                            var2 = var1["k2UNz+"];
                            var1 = {};
                            var9 = var6.bind(var7)(var9);
                            var1.days = var9;
                            var0 = var3.bind(var4)(var2, var1);
                        case 373:
                            _fun116704_ip = 446;
                            continue _fun116704;
                        case 375:
                            var2 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var1 = 1;
                            var3 = var9[var1];
                            var3 = var2.bind(var7)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var9[var1];
                            var1 = var2.bind(var7)(var1);
                            var1 = var1.t;
                            var2 = var1.EmoBD2;
                            var1 = {};
                            var8 = var6.bind(var7)(var8);
                            var1.weeks = var8;
                            var0 = var3.bind(var4)(var2, var1);
                        case 446:
                            _fun116704_ip = 519;
                            continue _fun116704;
                        case 448:
                            var2 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var1 = 1;
                            var3 = var8[var1];
                            var3 = var2.bind(var7)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var8[var1];
                            var1 = var2.bind(var7)(var1);
                            var1 = var1.t;
                            var2 = var1.kridzK;
                            var1 = {};
                            var5 = var6.bind(var7)(var5);
                            var1.months = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 519:
                            return var0;
                        case 521:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var2);
                var0.requestCooldownDuration = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14877, 1234, 2]);