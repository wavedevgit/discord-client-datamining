// modules/dismissible_content/DismissibleContentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var17 = metroImportDefault;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var15;
    var12 = function(arg0, arg1, arg2) { // Original name: addVersionedDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.updateRecurringDismissibleContentState;
        var1 = {};
        var0 = arg1;
        var1.lastDismissedVersion = var0;
        var0 = global;
        var4 = var0.Date;
        var0 = var4.now;
        var4 = var0.bind(var4)();
        var0 = var4.toString;
        var0 = var0.bind(var4)();
        var1.lastDismissedAtMs = var0;
        var0 = '0';
        var1.lastDismissedObjectId = var0;
        var0 = arg2;
        var1.numTimesDismissed = var0;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var12;
    var11 = function(arg0, arg1) { // Original name: addTimeRecurringDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.updateRecurringDismissibleContentState;
        var1 = {
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': null,
            'lastDismissedObjectId': '0'
        };
        var0 = global;
        var4 = var0.Date;
        var0 = var4.now;
        var4 = var0.bind(var4)();
        var0 = var4.toString;
        var0 = var0.bind(var4)();
        var1.lastDismissedAtMs = var0;
        var0 = arg1;
        var1.numTimesDismissed = var0;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var11;
    var10 = function(arg0, arg1, arg2) { // Original name: addSnowflakeBoundDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.updateRecurringDismissibleContentState;
        var1 = {};
        var0 = 0;
        var1.lastDismissedVersion = var0;
        var0 = global;
        var4 = var0.Date;
        var0 = var4.now;
        var4 = var0.bind(var4)();
        var0 = var4.toString;
        var0 = var0.bind(var4)();
        var1.lastDismissedAtMs = var0;
        var0 = arg1;
        var1.lastDismissedObjectId = var0;
        var0 = arg2;
        var1.numTimesDismissed = var0;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var10;
    var9 = function(arg0, arg1) { // Original name: UNSAFE_isSingleUseGuildDismissibleContentDismissed, environment: var3
        _fun15585: for (var _fun15585_ip = 0;;) switch (_fun15585_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.disableNewUserDismissibleContent;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun15585_ip = 98;
                    continue _fun15585
                }
            case 42:
                var3 = _closure1_slot5;
                var1 = var3.getGuildDismissedContentState;
                var0 = arg1;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var0 = var4 != var1;
                if (!var0) {
                    _fun15585_ip = 77;
                    continue _fun15585
                }
            case 69:
                var3 = var1[var2];
                var0 = var4 != var3;
            case 77:
                if (!var0) {
                    _fun15585_ip = 96;
                    continue _fun15585
                }
            case 80:
                var1 = var1[var2];
                var2 = var1.dismissed;
                var1 = true;
                var0 = var1 === var2;
            case 96:
                return var0;
            case 98:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot18 = var9;
    var8 = function(arg0, arg1) { // Original name: markDismissibleContentAsDismissedPreProcessing, environment: var3
        _fun15586: for (var _fun15586_ip = 0;;) switch (_fun15586_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var2 = _closure1_slot10;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun15586_ip = 29;
                    continue _fun15586
                }
            case 23:
                var2 = var4.forceTrack;
            case 29:
                if (!var2) {
                    _fun15586_ip = 42;
                    continue _fun15586
                }
            case 32:
                var2 = _closure1_slot28;
                var2 = var2.bind(var0)(var3, var4);
            case 42:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.handleDCDismissed;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function(arg0, arg1) { // Original name: markDismissibleContentAsDismissedPostProcessing, environment: var3
        _fun15587: for (var _fun15587_ip = 0;;) switch (_fun15587_ip) {
            case 0:
                var5 = arg1;
                var2 = _closure1_slot7;
                var1 = var2.hasUserHitDCCap;
                var1 = var1.bind(var2)();
                var3 = !var1;
                var2 = _closure1_slot9;
                var1 = {};
                var0 = arg0;
                var1.content = var0;
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun15587_ip = 55;
                    continue _fun15587
                }
            case 49:
                var4 = var5.groupName;
            case 55:
                var1.groupName = var4;
                var1 = var2.bind(var0)(var1, var3);
                return var0;
        }
    };
    var _closure1_slot20 = var7;
    var0 = function() { // Original name: _markLatestVersionDismissibleContentAsDismissed, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun15590: for (var _fun15590_ip = 0;;) switch (_fun15590_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun15590_ip = 76;
                            continue _fun15590
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getVersionedDismissibleContentCurrentVersion;
                        var4 = var3.bind(var4)(var5);
                        var3 = _closure1_slot24;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var5, var4, var1);
                        SaveGenerator(address = 64);
                    case 62:
                        return var1;
                    case 64:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun15590_ip = 73;
                            continue _fun15590
                        }
                    case 70:
                        return var2;
                    case 73:
                        return var1;
                    case 76:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var6 = function(arg0, arg1) { // Original name: getGuildNextNumTimesDismissed, environment: var3
        _fun15591: for (var _fun15591_ip = 0;;) switch (_fun15591_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getGuildDismissedContentState;
                var0 = arg1;
                var4 = var1.bind(var2)(var0);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun15591_ip = 39;
                    continue _fun15591
                }
            case 32:
                var3 = arg0;
                var2 = var4[var3];
            case 39:
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun15591_ip = 54;
                    continue _fun15591
                }
            case 48:
                var0 = var2.numTimesDismissed;
            case 54:
                var2 = var1 != var0;
                var1 = 0;
                if (!var2) {
                    _fun15591_ip = 66;
                    continue _fun15591
                }
            case 63:
                var1 = var0;
            case 66:
                var0 = 1;
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot22 = var6;
    var5 = function(arg0, arg1) { // Original name: getNextNumTimesDismissed, environment: var3
        _fun15592: for (var _fun15592_ip = 0;;) switch (_fun15592_ip) {
            case 0:
                var0 = arg1;
                var1 = var0.numTimesDismissed;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun15592_ip = 92;
                    continue _fun15592
                }
            case 15:
                var1 = _closure1_slot5;
                var1 = var1.settings;
                var4 = var1.userContent;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun15592_ip = 56;
                    continue _fun15592
                }
            case 43:
                var5 = var4.recurringDismissibleContentStates;
                var4 = arg0;
                var3 = var5[var4];
            case 56:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun15592_ip = 71;
                    continue _fun15592
                }
            case 65:
                var1 = var3.numTimesDismissed;
            case 71:
                var3 = var2 != var1;
                var2 = 0;
                if (!var3) {
                    _fun15592_ip = 83;
                    continue _fun15592
                }
            case 80:
                var2 = var1;
            case 83:
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            case 92:
                var0 = var0.numTimesDismissed;
                return var0;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function() { // Original name: markVersionedDismissibleContentAsDismissed, environment: var3
        var0 = undefined;
        var3 = _closure1_slot25;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var4;
    var0 = function() { // Original name: _markVersionedDismissibleContentAsDismissed, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun15596: for (var _fun15596_ip = 0;;) switch (_fun15596_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun15596_ip = 78;
                            continue _fun15596
                        }
                    case 13:
                        var1 = _closure1_slot23;
                        var2 = undefined;
                        var7 = var1.bind(var2)(var5, var4);
                        var1 = _closure1_slot19;
                        var1 = var1.bind(var2)(var5, var4);
                        var6 = _closure1_slot15;
                        var1 = arg1;
                        var1 = var6.bind(var2)(var5, var1, var7);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun15596_ip = 75;
                            continue _fun15596
                        }
                    case 62:
                        var3 = _closure1_slot20;
                        var3 = var3.bind(var2)(var5, var4);
                        return var2;
                    case 75:
                        return var1;
                    case 78:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot25 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() { // Original name: _markSnowflakeBoundDismissibleContentAsDismissed, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun15599: for (var _fun15599_ip = 0;;) switch (_fun15599_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun15599_ip = 78;
                            continue _fun15599
                        }
                    case 13:
                        var1 = _closure1_slot23;
                        var2 = undefined;
                        var7 = var1.bind(var2)(var5, var4);
                        var1 = _closure1_slot19;
                        var1 = var1.bind(var2)(var5, var4);
                        var6 = _closure1_slot17;
                        var1 = arg1;
                        var1 = var6.bind(var2)(var5, var1, var7);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun15599_ip = 75;
                            continue _fun15599
                        }
                    case 62:
                        var3 = _closure1_slot20;
                        var3 = var3.bind(var2)(var5, var4);
                        return var2;
                    case 75:
                        return var1;
                    case 78:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() { // Original name: _markTimeRecurringDismissibleContentAsDismissed, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun15602: for (var _fun15602_ip = 0;;) switch (_fun15602_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun15602_ip = 74;
                            continue _fun15602
                        }
                    case 13:
                        var1 = _closure1_slot23;
                        var2 = undefined;
                        var6 = var1.bind(var2)(var5, var4);
                        var1 = _closure1_slot19;
                        var1 = var1.bind(var2)(var5, var4);
                        var1 = _closure1_slot16;
                        var1 = var1.bind(var2)(var5, var6);
                        SaveGenerator(address = 52);
                    case 50:
                        return var1;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun15602_ip = 71;
                            continue _fun15602
                        }
                    case 58:
                        var3 = _closure1_slot20;
                        var3 = var3.bind(var2)(var5, var4);
                        return var2;
                    case 71:
                        return var1;
                    case 74:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var1 = function(arg0, arg1) { // Original name: trackDismissibleContentDismissed, environment: var3
        _fun15603: for (var _fun15603_ip = 0;;) switch (_fun15603_ip) {
            case 0:
                var11 = arg0;
                var7 = arg1;
                var1 = _closure1_slot11;
                var0 = undefined;
                var3 = var1.bind(var0)();
                var2 = _closure1_slot4;
                var1 = 1;
                var2 = var2.bind(var0)(var3, var1);
                var1 = 0;
                var10 = var2[var1];
                var2 = _closure1_slot7;
                var1 = var2.getRenderedAtTimestamp;
                var2 = var1.bind(var2)(var11);
                var1 = global;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var17 = var3;
                var1 = new var17[var1](var16);
                var3 = var1 instanceof Object ? var1 : var3;
                var6 = null;
                var1 = var6 == var2;
                var8 = null;
                if (var1) {
                    _fun15603_ip = 106;
                    continue _fun15603
                }
            case 92:
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var8 = var1 - var2;
            case 106:
                var2 = var6 == var7;
                var1 = undefined;
                if (var2) {
                    _fun15603_ip = 120;
                    continue _fun15603
                }
            case 115:
                var1 = var7.guildId;
            case 120:
                if (!(var6 == var1)) {
                    _fun15603_ip = 145;
                    continue _fun15603
                }
            case 124:
                var2 = _closure1_slot23;
                var1 = var7;
                if (!(var6 == var1)) {
                    _fun15603_ip = 137;
                    continue _fun15603
                }
            case 135:
                var1 = {};
            case 137:
                var5 = var2.bind(var0)(var11, var1);
                _fun15603_ip = 160;
                continue _fun15603;
            case 145:
                var2 = _closure1_slot22;
                var1 = var7.guildId;
                var5 = var2.bind(var0)(var11, var1);
            case 160:
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 18;
                var1 = var14[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.DISMISSIBLE_CONTENT_DISMISSED;
                var1 = {};
                var13 = _closure1_slot0;
                var12 = 14;
                var12 = var14[var12];
                var12 = var13.bind(var0)(var12);
                var12 = var12.DismissibleContent;
                var12 = var12[var11];
                var1.type = var12;
                var13 = var6 == var7;
                var12 = undefined;
                if (var13) {
                    _fun15603_ip = 242;
                    continue _fun15603
                }
            case 236:
                var12 = var7.dismissAction;
            case 242:
                if (!(var6 == var12)) {
                    _fun15603_ip = 256;
                    continue _fun15603
                }
            case 246:
                var13 = _closure1_slot12;
                var12 = var13.UNKNOWN;
            case 256:
                var1.action = var12;
                var1.content_count = var10;
                var12 = var6 == var7;
                var10 = undefined;
                if (var12) {
                    _fun15603_ip = 280;
                    continue _fun15603
                }
            case 274:
                var10 = var7.groupName;
            case 280:
                var1.group_name = var10;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 19;
                var9 = var12[var9];
                var9 = var10.bind(var0)(var9);
                var10 = var9.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var9 = var10.has;
                var9 = var9.bind(var10)(var11);
                var1.bypass_fatigue = var9;
                var10 = var6 == var7;
                var9 = undefined;
                if (var10) {
                    _fun15603_ip = 340;
                    continue _fun15603
                }
            case 335:
                var9 = var7.guildId;
            case 340:
                var1.guild_id = var9;
                var1.shown_duration = var8;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun15603_ip = 364;
                    continue _fun15603
                }
            case 358:
                var6 = var7.version;
            case 364:
                var1.version = var6;
                var1.num_times_dismissed = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot28 = var1;
    var13 = global;
    var19 = var13.Object;
    var18 = var19.defineProperty;
    var16 = {};
    var0 = true;
    var16.value = var0;
    var0 = '__esModule';
    var0 = var18.bind(var19)(var2, var0, var16);
    var0 = 0;
    var16 = var15[var0];
    var0 = undefined;
    var16 = var17.bind(var0)(var16);
    var _closure1_slot3 = var16;
    var16 = 1;
    var16 = var15[var16];
    var16 = var17.bind(var0)(var16);
    var _closure1_slot4 = var16;
    var16 = 2;
    var16 = var15[var16];
    var16 = var17.bind(var0)(var16);
    var _closure1_slot5 = var16;
    var16 = 3;
    var16 = var15[var16];
    var16 = var14.bind(var0)(var16);
    var16 = var16.DCFEventTypes;
    var _closure1_slot6 = var16;
    var16 = 4;
    var16 = var15[var16];
    var16 = var17.bind(var0)(var16);
    var _closure1_slot7 = var16;
    var16 = 5;
    var16 = var15[var16];
    var16 = var14.bind(var0)(var16);
    var17 = var16.addCandidateContent;
    var _closure1_slot8 = var17;
    var17 = var16.removeCandidateContent;
    var _closure1_slot9 = var17;
    var17 = var16.isContentShown;
    var _closure1_slot10 = var17;
    var16 = var16.getCurrentlyShownCounts;
    var _closure1_slot11 = var16;
    var16 = 6;
    var16 = var15[var16];
    var16 = var14.bind(var0)(var16);
    var16 = var16.ContentDismissActionType;
    var _closure1_slot12 = var16;
    var16 = 7;
    var16 = var15[var16];
    var16 = var14.bind(var0)(var16);
    var16 = var16.AnalyticEvents;
    var _closure1_slot13 = var16;
    var17 = var13.Set;
    var16 = 14;
    var13 = var15[var16];
    var13 = var14.bind(var0)(var13);
    var13 = var13.DismissibleContent;
    var18 = var13.ACCOUNT_LINK_INVITE_FRIENDS;
    var13 = new Array(3);
    var13[0] = var18;
    var18 = var15[var16];
    var18 = var14.bind(var0)(var18);
    var18 = var18.DismissibleContent;
    var18 = var18.POST_ACCOUNT_CONNECTION_RTC_POPOVER;
    var13[1] = var18;
    var16 = var15[var16];
    var16 = var14.bind(var0)(var16);
    var16 = var16.DismissibleContent;
    var16 = var16.ACCOUNT_LINK_PROMPT;
    var13[2] = var16;
    var16 = var17.prototype;
    var16 = Object.create(var16, {
        constructor: {
            value: var17
        }
    });
    var23 = var16;
    var22 = var13;
    var13 = new var23[var17](var22, var21);
    var13 = var13 instanceof Object ? var13 : var16;
    var _closure1_slot14 = var13;
    var13 = 20;
    var13 = var15[var13];
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/dismissible_content/DismissibleContentUtils.tsx';
    var13 = var14.bind(var15)(var13);
    var13 = 2592000000.0;
    var2.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = var13;
    var13 = function(arg0) { // Original name: getDismissedRecurringDismissibleContentState, environment: var3
        _fun15604: for (var _fun15604_ip = 0;;) switch (_fun15604_ip) {
            case 0:
                var9 = arg0;
                var0 = _closure1_slot5;
                var0 = var0.settings;
                var0 = var0.userContent;
                var3 = null;
                var1 = var3 == var0;
                var2 = undefined;
                var4 = undefined;
                if (var1) {
                    _fun15604_ip = 45;
                    continue _fun15604
                }
            case 35:
                var0 = var0.recurringDismissibleContentStates;
                var4 = var0[var9];
            case 45:
                var0 = {};
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 8;
                var1 = var1[var10];
                var5 = var5.bind(var2)(var1);
                var1 = var5.isVersionedDismissibleContent;
                var6 = var1.bind(var5)(var9);
                var5 = 0;
                if (!var6) {
                    _fun15604_ip = 114;
                    continue _fun15604
                }
            case 83:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 9;
                var6 = var11[var6];
                var8 = var8.bind(var2)(var6);
                var6 = var8.getVersionedDismissibleContentCurrentVersion;
                var5 = var6.bind(var8)(var9);
            case 114:
                var0.lastDismissedVersion = var5;
                var6 = global;
                var5 = var6.Date;
                var8 = var5.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = var8;
                var5 = new var13[var5](var12);
                var8 = var5 instanceof Object ? var5 : var8;
                var5 = var8.getTime;
                var8 = var5.bind(var8)();
                var5 = var8.toString;
                var5 = var5.bind(var8)();
                var0.lastDismissedAtMs = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var8 = var8.bind(var2)(var5);
                var5 = var8.isSnowflakeBoundDismissibleContent;
                var8 = var5.bind(var8)(var9);
                var5 = '0';
                if (!var8) {
                    _fun15604_ip = 268;
                    continue _fun15604
                }
            case 208:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var8 = var8.bind(var2)(var7);
                var7 = var8.fromTimestamp;
                var9 = var6.Date;
                var6 = var9.now;
                var9 = var6.bind(var9)();
                var6 = 2592000000.0;
                var6 = var9 + var6;
                var5 = var7.bind(var8)(var6);
            case 268:
                var0.lastDismissedObjectId = var5;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun15604_ip = 288;
                    continue _fun15604
                }
            case 282:
                var2 = var4.numTimesDismissed;
            case 288:
                var3 = var3 != var2;
                var1 = 0;
                if (!var3) {
                    _fun15604_ip = 300;
                    continue _fun15604
                }
            case 297:
                var1 = var2;
            case 300:
                var0.numTimesDismissed = var1;
                return var0;
        }
    };
    var2.getDismissedRecurringDismissibleContentState = var13;
    var2.addVersionedDismissedContent = var12;
    var2.addTimeRecurringDismissedContent = var11;
    var2.addSnowflakeBoundDismissedContent = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: UNSAFE_addGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': true,
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': null,
            'lastDismissedObjectId': '0'
        };
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        var2.lastDismissedAtMs = var0;
        var0 = arg2;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_addGuildDismissedContent = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: UNSAFE_removeGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': false,
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': null,
            'lastDismissedObjectId': '0'
        };
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        var2.lastDismissedAtMs = var0;
        var0 = arg2;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_removeGuildDismissedContent = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: UNSAFE_addTimeRecurringGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': false,
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': null,
            'lastDismissedObjectId': '0'
        };
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        var2.lastDismissedAtMs = var0;
        var0 = arg2;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_addTimeRecurringGuildDismissedContent = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: UNSAFE_removeTimeRecurringGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': false,
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': '0',
            'lastDismissedObjectId': '0'
        };
        var0 = arg2;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_removeTimeRecurringGuildDismissedContent = var10;
    var10 = function(arg0, arg1, arg2, arg3) { // Original name: UNSAFE_addSnowflakeBoundGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': false,
            'lastDismissedVersion': 0
        };
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        var2.lastDismissedAtMs = var0;
        var0 = arg1;
        var2.lastDismissedObjectId = var0;
        var0 = arg3;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg2;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_addSnowflakeBoundGuildDismissedContent = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: UNSAFE_removeSnowflakeBoundGuildDismissedContent, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateGuildDismissedContent;
        var2 = {
            'dismissed': false,
            'lastDismissedVersion': 0,
            'lastDismissedAtMs': '0',
            'lastDismissedObjectId': '0'
        };
        var0 = arg2;
        var2.numTimesDismissed = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.UNSAFE_removeSnowflakeBoundGuildDismissedContent = var10;
    var10 = function(arg0, arg1) { // Original name: isVersionedDismissibleContentDismissed, environment: var3
        _fun15611: for (var _fun15611_ip = 0;;) switch (_fun15611_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = var2.disableNewUserDismissibleContent;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun15611_ip = 157;
                    continue _fun15611
                }
            case 45:
                var1 = _closure1_slot5;
                var1 = var1.settings;
                var4 = var1.userContent;
                var2 = null;
                var7 = var2 == var4;
                var1 = undefined;
                if (var7) {
                    _fun15611_ip = 97;
                    continue _fun15611
                }
            case 72:
                var4 = var4.recurringDismissibleContentStates;
                var4 = var4[var5];
                var7 = var2 == var4;
                var1 = undefined;
                if (var7) {
                    _fun15611_ip = 97;
                    continue _fun15611
                }
            case 91:
                var1 = var4.lastDismissedVersion;
            case 97:
                if (!(var2 == var3)) {
                    _fun15611_ip = 132;
                    continue _fun15611
                }
            case 101:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.getVersionedDismissibleContentCurrentVersion;
                var3 = var0.bind(var4)(var5);
            case 132:
                var0 = {};
                var2 = var2 != var1;
                if (!var2) {
                    _fun15611_ip = 145;
                    continue _fun15611
                }
            case 141:
                var2 = var1 >= var3;
            case 145:
                var0.isDismissed = var2;
                var0.lastDismissedVersion = var1;
                return var0;
            case 157:
                var0 = {
                    'isDismissed': true,
                    'lastDismissedVersion': null
                };
                return var0;
        }
    };
    var2.isVersionedDismissibleContentDismissed = var10;
    var10 = function(arg0, arg1) { // Original name: isTimeRecurringDismissibleContentDismissed, environment: var3
        _fun15612: for (var _fun15612_ip = 0;;) switch (_fun15612_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.disableNewUserDismissibleContent;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun15612_ip = 292;
                    continue _fun15612
                }
            case 48:
                var0 = _closure1_slot5;
                var0 = var0.settings;
                var0 = var0.userContent;
                var6 = null;
                var3 = var6 == var0;
                var4 = undefined;
                if (var3) {
                    _fun15612_ip = 100;
                    continue _fun15612
                }
            case 75:
                var0 = var0.recurringDismissibleContentStates;
                var0 = var0[var2];
                var2 = var6 == var0;
                var4 = undefined;
                if (var2) {
                    _fun15612_ip = 100;
                    continue _fun15612
                }
            case 94:
                var4 = var0.lastDismissedAtMs;
            case 100:
                var0 = var6 != var4;
                var2 = undefined;
                if (!var0) {
                    _fun15612_ip = 170;
                    continue _fun15612
                }
            case 109:
                var0 = '0';
                var2 = undefined;
                if (!(var0 !== var4)) {
                    _fun15612_ip = 170;
                    continue _fun15612
                }
            case 121:
                var3 = global;
                var8 = var3.Number;
                var5 = var8.isNaN;
                var0 = var3.Number;
                var0 = var0.bind(var1)(var4);
                var5 = var5.bind(var8)(var0);
                var0 = undefined;
                if (var5) {
                    _fun15612_ip = 167;
                    continue _fun15612
                }
            case 156:
                var3 = var3.Number;
                var0 = var3.bind(var1)(var4);
            case 167:
                var2 = var0;
            case 170:
                if (!(var1 !== var2)) {
                    _fun15612_ip = 276;
                    continue _fun15612
                }
            case 174:
                var0 = var6 != var7;
                var3 = true;
                if (!var0) {
                    _fun15612_ip = 262;
                    continue _fun15612
                }
            case 183:
                var0 = var7.cooldownDurationMs;
                var5 = var2 + var0;
                var0 = global;
                var4 = var0.Date;
                var0 = var4.now;
                var0 = var0.bind(var4)();
                var4 = var7.showAfterTimestamp;
                var4 = var6 == var4;
                if (var4) {
                    _fun15612_ip = 249;
                    continue _fun15612
                }
            case 223:
                var6 = var7.showAfterTimestamp;
                var6 = var0 >= var6;
                if (!var6) {
                    _fun15612_ip = 246;
                    continue _fun15612
                }
            case 236:
                var7 = var7.showAfterTimestamp;
                var6 = var2 <= var7;
            case 246:
                var4 = var6;
            case 249:
                var0 = var0 < var5;
                if (var0) {
                    _fun15612_ip = 259;
                    continue _fun15612
                }
            case 256:
                var0 = !var4;
            case 259:
                var3 = var0;
            case 262:
                var0 = {};
                var0.isDismissed = var3;
                var0.lastDismissedAtMs = var2;
                return var0;
            case 276:
                var0 = {};
                var2 = false;
                var0.isDismissed = var2;
                var0.lastDismissedAtMs = var1;
                return var0;
            case 292:
                var0 = {
                    'isDismissed': true,
                    'lastDismissedAtMs': null
                };
                return var0;
        }
    };
    var2.isTimeRecurringDismissibleContentDismissed = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: isTimeRecurringSnowflakeBoundDismissibleContentDismissed, environment: var3
        _fun15613: for (var _fun15613_ip = 0;;) switch (_fun15613_ip) {
            case 0:
                var3 = arg0;
                var9 = arg2;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 12;
                var0 = var4[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.disableNewUserDismissibleContent;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun15613_ip = 374;
                    continue _fun15613
                }
            case 48:
                var0 = _closure1_slot5;
                var0 = var0.settings;
                var0 = var0.userContent;
                var1 = null;
                var6 = var1 == var0;
                var5 = undefined;
                if (var6) {
                    _fun15613_ip = 100;
                    continue _fun15613
                }
            case 75:
                var0 = var0.recurringDismissibleContentStates;
                var0 = var0[var3];
                var6 = var1 == var0;
                var5 = undefined;
                if (var6) {
                    _fun15613_ip = 100;
                    continue _fun15613
                }
            case 94:
                var5 = var0.lastDismissedObjectId;
            case 100:
                var0 = _closure1_slot5;
                var0 = var0.settings;
                var0 = var0.userContent;
                var7 = var1 == var0;
                var6 = undefined;
                if (var7) {
                    _fun15613_ip = 150;
                    continue _fun15613
                }
            case 125:
                var0 = var0.recurringDismissibleContentStates;
                var0 = var0[var3];
                var3 = var1 == var0;
                var6 = undefined;
                if (var3) {
                    _fun15613_ip = 150;
                    continue _fun15613
                }
            case 144:
                var6 = var0.lastDismissedAtMs;
            case 150:
                var0 = var1 != var6;
                var10 = undefined;
                if (!var0) {
                    _fun15613_ip = 220;
                    continue _fun15613
                }
            case 159:
                var0 = '0';
                var10 = undefined;
                if (!(var0 !== var6)) {
                    _fun15613_ip = 220;
                    continue _fun15613
                }
            case 171:
                var3 = global;
                var8 = var3.Number;
                var7 = var8.isNaN;
                var0 = var3.Number;
                var0 = var0.bind(var4)(var6);
                var7 = var7.bind(var8)(var0);
                var0 = undefined;
                if (var7) {
                    _fun15613_ip = 217;
                    continue _fun15613
                }
            case 206:
                var3 = var3.Number;
                var0 = var3.bind(var4)(var6);
            case 217:
                var10 = var0;
            case 220:
                var3 = var1 != var9;
                var0 = false;
                if (!var3) {
                    _fun15613_ip = 317;
                    continue _fun15613
                }
            case 229:
                var3 = var1 != var10;
                var0 = false;
                if (!var3) {
                    _fun15613_ip = 317;
                    continue _fun15613
                }
            case 238:
                var3 = var9.cooldownDurationMs;
                var7 = var10 + var3;
                var3 = global;
                var6 = var3.Date;
                var3 = var6.now;
                var3 = var3.bind(var6)();
                var6 = var9.showAfterTimestamp;
                var6 = var1 == var6;
                if (var6) {
                    _fun15613_ip = 304;
                    continue _fun15613
                }
            case 278:
                var8 = var9.showAfterTimestamp;
                var8 = var3 >= var8;
                if (!var8) {
                    _fun15613_ip = 301;
                    continue _fun15613
                }
            case 291:
                var9 = var9.showAfterTimestamp;
                var8 = var10 <= var9;
            case 301:
                var6 = var8;
            case 304:
                var3 = var3 < var7;
                if (var3) {
                    _fun15613_ip = 314;
                    continue _fun15613
                }
            case 311:
                var3 = !var6;
            case 314:
                var0 = var3;
            case 317:
                var1 = var1 != var5;
                if (!var1) {
                    _fun15613_ip = 366;
                    continue _fun15613
                }
            case 324:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.compare;
                var2 = arg1;
                var3 = var3.bind(var4)(var2, var5);
                var2 = 1;
                var1 = var2 !== var3;
            case 366:
                if (!var0) {
                    _fun15613_ip = 372;
                    continue _fun15613
                }
            case 369:
                var0 = var1;
            case 372:
                return var0;
            case 374:
                var0 = true;
                return var0;
        }
    };
    var2.isTimeRecurringSnowflakeBoundDismissibleContentDismissed = var10;
    var2.UNSAFE_isSingleUseGuildDismissibleContentDismissed = var9;
    var9 = function(arg0, arg1) { // Original name: useIsSingleUseGuildDismissibleContentDismissed, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot18;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsSingleUseGuildDismissibleContentDismissed = var9;
    var9 = function(arg0, arg1) { // Original name: UNSAFE_isTimeRecurringGuildDismissibleContentDismissed, environment: var3
        _fun15616: for (var _fun15616_ip = 0;;) switch (_fun15616_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.disableNewUserDismissibleContent;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun15616_ip = 119;
                    continue _fun15616
                }
            case 42:
                var3 = _closure1_slot5;
                var1 = var3.getGuildDismissedContentState;
                var0 = arg1;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var0 = var4 != var1;
                if (!var0) {
                    _fun15616_ip = 77;
                    continue _fun15616
                }
            case 69:
                var3 = var1[var2];
                var0 = var4 != var3;
            case 77:
                if (!var0) {
                    _fun15616_ip = 94;
                    continue _fun15616
                }
            case 80:
                var3 = var1[var2];
                var3 = var3.lastDismissedAtMs;
                var0 = var4 != var3;
            case 94:
                if (!var0) {
                    _fun15616_ip = 117;
                    continue _fun15616
                }
            case 97:
                var1 = var1[var2];
                var2 = var1.lastDismissedAtMs;
                var1 = '0';
                var0 = var1 !== var2;
            case 117:
                return var0;
            case 119:
                var0 = true;
                return var0;
        }
    };
    var2.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed = var9;
    var9 = function(arg0, arg1) { // Original name: UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed, environment: var3
        _fun15617: for (var _fun15617_ip = 0;;) switch (_fun15617_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.disableNewUserDismissibleContent;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun15617_ip = 119;
                    continue _fun15617
                }
            case 42:
                var3 = _closure1_slot5;
                var1 = var3.getGuildDismissedContentState;
                var0 = arg1;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var0 = var4 != var1;
                if (!var0) {
                    _fun15617_ip = 77;
                    continue _fun15617
                }
            case 69:
                var3 = var1[var2];
                var0 = var4 != var3;
            case 77:
                if (!var0) {
                    _fun15617_ip = 94;
                    continue _fun15617
                }
            case 80:
                var3 = var1[var2];
                var3 = var3.lastDismissedObjectId;
                var0 = var4 != var3;
            case 94:
                if (!var0) {
                    _fun15617_ip = 117;
                    continue _fun15617
                }
            case 97:
                var1 = var1[var2];
                var2 = var1.lastDismissedObjectId;
                var1 = '0';
                var0 = var1 !== var2;
            case 117:
                return var0;
            case 119:
                var0 = true;
                return var0;
        }
    };
    var2.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed = var9;
    var9 = function(arg0, arg1, arg2, arg3) { // Original name: requestMarkDismissibleContentAsShown, environment: var3
        _fun15618: for (var _fun15618_ip = 0;;) switch (_fun15618_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var2 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var4 = _closure1_slot10;
                var0 = undefined;
                var4 = var4.bind(var0)(var6);
                if (var4) {
                    _fun15618_ip = 264;
                    continue _fun15618
                }
            case 39:
                var9 = _closure1_slot7;
                var8 = var9.hasUserHitDCCap;
                var4 = null;
                var10 = var4 == var5;
                var7 = undefined;
                if (var10) {
                    _fun15618_ip = 65;
                    continue _fun15618
                }
            case 60:
                var7 = var5.guildId;
            case 65:
                var7 = var8.bind(var9)(var6, var7);
                if (var7) {
                    _fun15618_ip = 264;
                    continue _fun15618
                }
            case 77:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 15;
                var7 = var9[var7];
                var9 = var8.bind(var0)(var7);
                var8 = var9.getConfig;
                var7 = {};
                var10 = 'requestMarkDismissibleContentAsShown';
                var7.location = var10;
                var7 = var8.bind(var9)(var7);
                var7 = var7.enabled;
                if (!var7) {
                    _fun15618_ip = 133;
                    continue _fun15618
                }
            case 126:
                var8 = arg3;
                var7 = var4 == var8;
            case 133:
                if (!var7) {
                    _fun15618_ip = 150;
                    continue _fun15618
                }
            case 136:
                var9 = _closure1_slot14;
                var8 = var9.has;
                var7 = var8.bind(var9)(var6);
            case 150:
                if (!var2) {
                    _fun15618_ip = 156;
                    continue _fun15618
                }
            case 153:
                var2 = !var7;
            case 156:
                if (var2) {
                    _fun15618_ip = 264;
                    continue _fun15618
                }
            case 159:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 16;
                var2 = var8[var2];
                var8 = var7.bind(var0)(var2);
                var7 = var8.dispatch;
                var2 = {};
                var9 = 'DCF_EVENT_LOGGED';
                var2.type = var9;
                var9 = _closure1_slot6;
                var9 = var9.DC_SHOW_REQUEST;
                var2.eventType = var9;
                var2.dismissibleContent = var6;
                var2 = var7.bind(var8)(var2);
                var2 = _closure1_slot8;
                var1 = {};
                var1.content = var6;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun15618_ip = 244;
                    continue _fun15618
                }
            case 238:
                var4 = var5.groupName;
            case 244:
                var1.groupName = var4;
                var3 = function() { // Original name: onAdded, environment: var3
                    _fun15619: for (var _fun15619_ip = 0;;) switch (_fun15619_ip) {
                        case 0:
                            var1 = _closure1_slot11;
                            var0 = undefined;
                            var3 = var1.bind(var0)();
                            var2 = _closure1_slot4;
                            var1 = 2;
                            var2 = var2.bind(var0)(var3, var1);
                            var1 = 0;
                            var9 = var2[var1];
                            var1 = 1;
                            var8 = var2[var1];
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.handleDCShownToUser;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var4 = null;
                            var10 = var4 == var2;
                            var2 = undefined;
                            if (var10) {
                                _fun15619_ip = 96;
                                continue _fun15619
                            }
                        case 87:
                            var10 = _closure2_slot1;
                            var2 = var10.guildId;
                        case 96:
                            var2 = var5.bind(var6)(var3, var2);
                            var3 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var2 = 18;
                            var2 = var12[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot13;
                            var3 = var2.DISMISSIBLE_CONTENT_SHOWN;
                            var2 = {};
                            var11 = _closure1_slot0;
                            var10 = 14;
                            var10 = var12[var10];
                            var10 = var11.bind(var0)(var10);
                            var11 = var10.DismissibleContent;
                            var10 = _closure2_slot0;
                            var10 = var11[var10];
                            var2.type = var10;
                            var2.content_count = var9;
                            var2.fatigable_content_count = var8;
                            var8 = _closure2_slot1;
                            var9 = var4 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun15619_ip = 206;
                                continue _fun15619
                            }
                        case 196:
                            var9 = _closure2_slot1;
                            var8 = var9.groupName;
                        case 206:
                            var2.group_name = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 19;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var9 = var7.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                            var8 = var9.has;
                            var7 = _closure2_slot0;
                            var7 = var8.bind(var9)(var7);
                            var2.bypass_fatigue = var7;
                            var7 = _closure2_slot1;
                            var8 = var4 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun15619_ip = 278;
                                continue _fun15619
                            }
                        case 269:
                            var8 = _closure2_slot1;
                            var7 = var8.guildId;
                        case 278:
                            var2.guild_id = var7;
                            var7 = _closure2_slot1;
                            var8 = var4 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun15619_ip = 305;
                                continue _fun15619
                            }
                        case 295:
                            var8 = _closure2_slot1;
                            var7 = var8.version;
                        case 305:
                            var2.version = var7;
                            var2 = var5.bind(var6)(var3, var2);
                            var2 = _closure2_slot1;
                            var2 = var4 == var2;
                            if (var2) {
                                _fun15619_ip = 341;
                                continue _fun15619
                            }
                        case 327:
                            var3 = _closure2_slot1;
                            var3 = var3.onShown;
                            var2 = var4 == var3;
                        case 341:
                            if (var2) {
                                _fun15619_ip = 358;
                                continue _fun15619
                            }
                        case 344:
                            var2 = _closure2_slot1;
                            var1 = var2.onShown;
                            var1 = var1.bind(var2)();
                        case 358:
                            return var0;
                    }
                };
                var1.onAdded = var3;
                var1 = var2.bind(var0)(var1);
            case 264:
                return var0;
        }
    };
    var2.requestMarkDismissibleContentAsShown = var9;
    var2.markDismissibleContentAsDismissedPreProcessing = var8;
    var2.markDismissibleContentAsDismissedPostProcessing = var7;
    var7 = function() { // Original name: markLatestVersionDismissibleContentAsDismissed, environment: var3
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.markLatestVersionDismissibleContentAsDismissed = var7;
    var2.getGuildNextNumTimesDismissed = var6;
    var2.getNextNumTimesDismissed = var5;
    var2.markVersionedDismissibleContentAsDismissed = var4;
    var4 = function() { // Original name: markSnowflakeBoundDismissibleContentAsDismissed, environment: var3
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.markSnowflakeBoundDismissibleContentAsDismissed = var4;
    var3 = function() { // Original name: markTimeRecurringDismissibleContentAsDismissed, environment: var3
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.markTimeRecurringDismissibleContentAsDismissed = var3;
    var2.trackDismissibleContentDismissed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 1310, 1361, 1362, 1364, 1369, 660, 1359, 1370, 21, 1355, 3194, 566, 1358, 12564, 806, 11062, 795, 1363, 2]);