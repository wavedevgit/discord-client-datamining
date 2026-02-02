// modules/safety_hub/hooks/useSafetyHubClassifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var3 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getClassifications;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var0 = 4;
            var1 = var4[var0];
            var2 = undefined;
            var6 = var3.bind(var2)(var1);
            var5 = var6.extractTimestamp;
            var1 = arg1;
            var1 = var1.id;
            var1 = var5.bind(var6)(var1);
            var0 = var4[var0];
            var3 = var3.bind(var2)(var0);
            var2 = var3.extractTimestamp;
            var0 = arg0;
            var0 = var0.id;
            var0 = var2.bind(var3)(var0);
            var0 = var1 - var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ViolationType;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/hooks/useSafetyHubClassifications.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useSafetyHubClassifications = var3;
    var3 = function arg0() {
        _fun79393: for (var _fun79393_ip = 0;;) switch (_fun79393_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 3;
                var2 = var8[var1];
                var11 = undefined;
                var5 = var7.bind(var11)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getClassification;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var2);
                var _closure2_slot1 = var3;
                var2 = var8[var1];
                var10 = var7.bind(var11)(var2);
                var5 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getClassificationRequestState;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var10)(var4, var2);
                var _closure2_slot2 = var5;
                var2 = var8[var1];
                var12 = var7.bind(var11)(var2);
                var10 = var12.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getIsDsaEligible;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var10.bind(var12)(var4, var2);
                var1 = var8[var1];
                var12 = var7.bind(var11)(var1);
                var10 = var12.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getIsAppealEligible;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var10.bind(var12)(var2, var1);
                var1 = 5;
                var1 = var8[var1];
                var7 = var7.bind(var11)(var1);
                var1 = var7.isGuildClassification;
                var1 = var1.bind(var7)(var3);
                if (var1) {
                    _fun79393_ip = 227;
                    continue _fun79393
                }
            case 215:
                var1 = _closure1_slot6;
                var1 = var1.USER;
                _fun79393_ip = 311;
                continue _fun79393;
            case 227:
                var7 = var3.guild_metadata;
                var8 = null;
                var10 = var8 == var7;
                var8 = undefined;
                if (var10) {
                    _fun79393_ip = 250;
                    continue _fun79393
                }
            case 244:
                var8 = var7.member_type;
            case 250:
                var10 = _closure1_slot0;
                var12 = _closure1_slot3;
                var7 = 6;
                var7 = var12[var7];
                var7 = var10.bind(var11)(var7);
                var7 = var7.MemberType;
                var7 = var7.OWNER;
                if (!(var8 !== var7)) {
                    _fun79393_ip = 298;
                    continue _fun79393
                }
            case 286:
                var7 = _closure1_slot6;
                var7 = var7.GUILD_MEMBER;
                _fun79393_ip = 308;
                continue _fun79393;
            case 298:
                var8 = _closure1_slot6;
                var7 = var8.GUILD_OWNER;
            case 308:
                var1 = var7;
            case 311:
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var3;
                var6[2] = var5;
                var0 = function() { // Environment: var0
                    _fun79398: for (var _fun79398_ip = 0;;) switch (_fun79398_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var2 = var0 === var2;
                            if (!var2) {
                                _fun79398_ip = 26;
                                continue _fun79398
                            }
                        case 16:
                            var4 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 == var4;
                        case 26:
                            if (!var2) {
                                _fun79398_ip = 67;
                                continue _fun79398
                            }
                        case 29:
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 7;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getSafetyHubDataForClassification;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 67:
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var6);
                var0 = {};
                var0.classification = var3;
                var0.classificationRequestState = var5;
                var0.isDsaEligible = var4;
                if (!var2) {
                    _fun79393_ip = 375;
                    continue _fun79393
                }
            case 369:
                var4 = null;
                var2 = var4 != var3;
            case 375:
                if (!var2) {
                    _fun79393_ip = 390;
                    continue _fun79393
                }
            case 378:
                var4 = var3.appeal_status;
                var3 = null;
                var2 = var3 == var4;
            case 390:
                var0.isAppealEligible = var2;
                var0.violationType = var1;
                return var0;
        }
    };
    var2.useSafetyHubClassification = var3;
    var3 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = global;
        var1 = var1.Date;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.Date;
            var0 = arg0;
            var3 = var0.max_expiration_time;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = _closure2_slot0;
            var0 = var1 > var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useActiveSafetyHubClassifications = var3;
    var3 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = global;
        var1 = var1.Date;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.Date;
            var0 = arg0;
            var3 = var0.max_expiration_time;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = _closure2_slot0;
            var0 = var1 <= var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useExpiredSafetyHubClassifications = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getAppealSignal;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSafetyHubAppealSignal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10056, 5905, 566, 21, 5904, 5906, 10063, 2]);