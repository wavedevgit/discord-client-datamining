// modules/application_commands/ApplicationCommandStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun53716: for (var _fun53716_ip = 0;;) switch (_fun53716_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun53716_ip = 74;
                continue _fun53716;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var11 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = true;
        return var0;
    };
    var0 = function arg0() {
        _fun53720: for (var _fun53720_ip = 0;;) switch (_fun53720_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot10;
                var2 = var1 in var2;
                if (var2) {
                    _fun53720_ip = 55;
                    continue _fun53720
                }
            case 17:
                var3 = _closure1_slot10;
                var2 = {
                    'activeCommand': null,
                    'activeCommandSection': null,
                    'activeOptionName': null,
                    'preferredCommandId': null,
                    'optionStates': null,
                    'initialValues': null,
                    'commandOrigin': null
                };
                var4 = {};
                var2.optionStates = var4;
                var4 = {};
                var2.initialValues = var4;
                var3[var1] = var2;
            case 55:
                var0 = _closure1_slot10;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var10 = function arg0() {
        _fun53721: for (var _fun53721_ip = 0;;) switch (_fun53721_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channelId;
                var10 = var0.command;
                var15 = var0.section;
                var11 = var0.initialValues;
                var9 = var0.location;
                var8 = var0.triggerSection;
                var7 = var0.queryLength;
                var6 = var0.sectionName;
                var5 = var0.query;
                var4 = var0.searchResultsPosition;
                var3 = var0.source;
                var14 = var0.commandOrigin;
                var2 = undefined;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot12;
                var12 = var1.bind(var2)(var12);
                var1 = null;
                var16 = var1 == var10;
                var17 = undefined;
                if (var16) {
                    _fun53721_ip = 107;
                    continue _fun53721
                }
            case 102:
                var17 = var10.id;
            case 107:
                var18 = var12.activeCommand;
                var19 = var1 == var18;
                var16 = undefined;
                if (var19) {
                    _fun53721_ip = 127;
                    continue _fun53721
                }
            case 122:
                var16 = var18.id;
            case 127:
                if (!(var17 !== var16)) {
                    _fun53721_ip = 323;
                    continue _fun53721
                }
            case 134:
                var12.activeCommand = var10;
                var12.activeCommandSection = var15;
                var12.activeOptionName = var1;
                var12.preferredCommandId = var1;
                if (!(var1 == var11)) {
                    _fun53721_ip = 164;
                    continue _fun53721
                }
            case 162:
                var11 = {};
            case 164:
                var12.initialValues = var11;
                var15 = var1 != var14;
                var11 = null;
                if (!var15) {
                    _fun53721_ip = 182;
                    continue _fun53721
                }
            case 179:
                var11 = var14;
            case 182:
                var12.commandOrigin = var11;
                var12.source = var3;
                var11 = {};
                _closure2_slot0 = var11;
                var15 = var1 == var10;
                var14 = undefined;
                if (var15) {
                    _fun53721_ip = 214;
                    continue _fun53721
                }
            case 209:
                var14 = var10.options;
            case 214:
                if (!(var1 != var14)) {
                    _fun53721_ip = 238;
                    continue _fun53721
                }
            case 218:
                var15 = var10.options;
                var14 = var15.forEach;
                var13 = function(arg0) { // Environment: var13
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = {
                        'isActive': false,
                        'hasValue': false,
                        'lastValidationResult': null,
                        'optionValue': null
                    };
                    var2[var1] = var0;
                    var0 = undefined;
                    return var0;
                };
                var13 = var14.bind(var15)(var13);
            case 238:
                var12.optionStates = var11;
                if (!(var1 != var10)) {
                    _fun53721_ip = 319;
                    continue _fun53721
                }
            case 248:
                var1 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 8;
                var0 = var11[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.trackCommandSelected;
                var0 = {};
                var0.command = var10;
                var0.location = var9;
                var0.triggerSection = var8;
                var0.queryLength = var7;
                var0.sectionName = var6;
                var0.query = var5;
                var0.searchResultsPosition = var4;
                var0.source = var3;
                var0 = var1.bind(var2)(var0);
            case 319:
                var0 = true;
                return var0;
            case 323:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var10;
    var9 = function arg0() {
        _fun53723: for (var _fun53723_ip = 0;;) switch (_fun53723_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.commandId;
                var0 = _closure1_slot12;
                var5 = undefined;
                var2 = var0.bind(var5)(var2);
                var0 = var2.preferredCommandId;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun53723_ip = 95;
                    continue _fun53723
                }
            case 41:
                var3 = var2.preferredCommandId;
                var4 = null;
                var3 = var4 !== var3;
                if (var3) {
                    _fun53723_ip = 92;
                    continue _fun53723
                }
            case 56:
                var6 = var2.activeCommand;
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun53723_ip = 76;
                    continue _fun53723
                }
            case 71:
                var5 = var6.id;
            case 76:
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun53723_ip = 88;
                    continue _fun53723
                }
            case 85:
                var4 = var5;
            case 88:
                var3 = var1 !== var4;
            case 92:
                var0 = var3;
            case 95:
                if (!var0) {
                    _fun53723_ip = 128;
                    continue _fun53723
                }
            case 98:
                var3 = null;
                var2.activeCommand = var3;
                var2.activeOptionName = var3;
                var2.preferredCommandId = var1;
                var1 = {};
                var2.optionStates = var1;
                var0 = true;
            case 128:
                return var0;
        }
    };
    var _closure1_slot14 = var9;
    var8 = function arg0() {
        _fun53724: for (var _fun53724_ip = 0;;) switch (_fun53724_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var4 = var0.changedOptionStates;
                var0 = _closure1_slot12;
                var15 = undefined;
                var2 = var0.bind(var15)(var1);
                var1 = {};
                var29 = var2.optionStates;
                var30 = var1;
                var0 = copyDataProperties(var30, var29);
                var0 = global;
                var3 = var0.Object;
                var0 = var3.entries;
                var14 = var0.bind(var3)(var4);
                var0 = var14.length;
                var13 = 0;
                var3 = var13 < var0;
                var12 = false;
                var11 = null;
                var0 = true;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if (!var3) {
                    _fun53724_ip = 581;
                    continue _fun53724
                }
            case 101:
                var17 = var14[var8];
                var3 = _closure1_slot7;
                var3 = var3.bind(var15)(var17, var10);
                var24 = var3[var13];
                var25 = var3[var9];
                var3 = var2.optionStates;
                var3 = var24 in var3;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                if (!var3) {
                    _fun53724_ip = 554;
                    continue _fun53724
                }
            case 151:
                var3 = var25.hasValue;
                if (!(var15 === var3)) {
                    _fun53724_ip = 173;
                    continue _fun53724
                }
            case 161:
                var3 = var1[var24];
                var3 = var3.hasValue;
                _fun53724_ip = 179;
                continue _fun53724;
            case 173:
                var3 = var25.hasValue;
            case 179:
                if (var3) {
                    _fun53724_ip = 256;
                    continue _fun53724
                }
            case 182:
                var3 = {
                    'hasValue': false,
                    'isActive': false,
                    'lastValidationResult': null,
                    'optionValue': null
                };
                var3.location = var15;
                var3.length = var15;
                var1[var24] = var3;
                var3 = var2.activeOptionName;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                if (!(var3 === var24)) {
                    _fun53724_ip = 554;
                    continue _fun53724
                }
            case 233:
                var2.activeOptionName = var11;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                _fun53724_ip = 554;
                continue _fun53724;
            case 256:
                var3 = var1[var24];
                var26 = {};
                var26.hasValue = var0;
                var21 = var25.isActive;
                if (!(var15 === var21)) {
                    _fun53724_ip = 285;
                    continue _fun53724
                }
            case 277:
                var21 = var3.isActive;
                _fun53724_ip = 291;
                continue _fun53724;
            case 285:
                var21 = var25.isActive;
            case 291:
                var26.isActive = var21;
                var21 = var25.lastValidationResult;
                if (!(var15 === var21)) {
                    _fun53724_ip = 314;
                    continue _fun53724
                }
            case 306:
                var21 = var3.lastValidationResult;
                _fun53724_ip = 320;
                continue _fun53724;
            case 314:
                var21 = var25.lastValidationResult;
            case 320:
                var26.lastValidationResult = var21;
                var23 = var25.optionValue;
                var21 = var23;
                if (!(var11 == var23)) {
                    _fun53724_ip = 344;
                    continue _fun53724
                }
            case 338:
                var21 = var3.optionValue;
            case 344:
                var26.optionValue = var21;
                var22 = var25.location;
                var21 = var22;
                if (!(var11 == var22)) {
                    _fun53724_ip = 366;
                    continue _fun53724
                }
            case 361:
                var21 = var3.location;
            case 366:
                var26.location = var21;
                var21 = var25.length;
                var27 = var21;
                if (!(var11 == var21)) {
                    _fun53724_ip = 387;
                    continue _fun53724
                }
            case 382:
                var27 = var3.length;
            case 387:
                var26.length = var27;
                var1[var24] = var26;
                var26 = var25.isActive;
                var20 = var23;
                var19 = var22;
                var18 = var21;
                var17 = var3;
                if (!(var15 !== var26)) {
                    _fun53724_ip = 554;
                    continue _fun53724
                }
            case 420:
                var26 = var25.isActive;
                var25 = var2.activeOptionName;
                if (var26) {
                    _fun53724_ip = 471;
                    continue _fun53724
                }
            case 435:
                var20 = var23;
                var19 = var22;
                var18 = var21;
                var17 = var3;
                if (!(var24 === var25)) {
                    _fun53724_ip = 554;
                    continue _fun53724
                }
            case 451:
                var2.activeOptionName = var11;
                var20 = var23;
                var19 = var22;
                var18 = var21;
                var17 = var3;
                _fun53724_ip = 554;
                continue _fun53724;
            case 471:
                var25 = var11 != var25;
                if (!var25) {
                    _fun53724_ip = 488;
                    continue _fun53724
                }
            case 478:
                var26 = var2.activeOptionName;
                var25 = var26 !== var24;
            case 488:
                if (!var25) {
                    _fun53724_ip = 536;
                    continue _fun53724
                }
            case 491:
                var26 = var2.activeOptionName;
                var25 = {};
                var27 = var2.activeOptionName;
                var29 = var1[var27];
                var30 = var25;
                var27 = copyDataProperties(var30, var29);
                var1[var26] = var25;
                var25 = var2.activeOptionName;
                var25 = var1[var25];
                var25.isActive = var12;
            case 536:
                var2.activeOptionName = var24;
                var20 = var23;
                var19 = var22;
                var18 = var21;
                var17 = var3;
            case 554:
                var8 = var8 + 1;
                var3 = var14.length;
                var7 = var20;
                var6 = var19;
                var5 = var18;
                var4 = var17;
                if (var8 < var3) {
                    _fun53724_ip = 101;
                    continue _fun53724
                }
            case 581:
                var2.optionStates = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var8;
    var0 = global;
    var12 = var0.Object;
    var7 = var12.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var12)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53726: for (var _fun53726_ip = 0;;) switch (_fun53726_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53726_ip = 69;
                        continue _fun53726
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53726_ip = 105;
                    continue _fun53726;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var1 = var3.waitFor;
            var2 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var1.bind(var3)(var2, var0);
            var1 = var2.addChangeListener;
            var0 = function() { // Environment: var0
                _fun53728: for (var _fun53728_ip = 0;;) switch (_fun53728_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var0 = var2.getChannelId;
                        var4 = var0.bind(var2)();
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun53728_ip = 98;
                            continue _fun53728
                        }
                    case 23:
                        var3 = _closure1_slot8;
                        var2 = var3.getCurrentSidebarChannelId;
                        var2 = var2.bind(var3)(var4);
                        if (!(var0 != var2)) {
                            _fun53728_ip = 53;
                            continue _fun53728
                        }
                    case 42:
                        var0 = _closure1_slot10;
                        var0 = var2 in var0;
                        if (var0) {
                            _fun53728_ip = 94;
                            continue _fun53728
                        }
                    case 53:
                        var0 = _closure1_slot10;
                        var0 = var4 in var0;
                        if (var0) {
                            _fun53728_ip = 68;
                            continue _fun53728
                        }
                    case 64:
                        var0 = {};
                        _fun53728_ip = 86;
                        continue _fun53728;
                    case 68:
                        var2 = {};
                        var3 = _closure1_slot10;
                        var3 = var3[var4];
                        var2[var4] = var3;
                        var0 = var2;
                    case 86:
                        _closure1_slot10 = var0;
                        var0 = undefined;
                        return var0;
                    case 94:
                        var0 = false;
                        return var0;
                    case 98:
                        var0 = {};
                        _closure1_slot10 = var0;
                        var0 = true;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActiveCommand';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.activeCommand;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActiveCommandSection';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.activeCommandSection;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getActiveOptionName';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.activeOptionName;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getActiveOption';
        var4.key = var6;
        var6 = function arg0() {
            _fun53732: for (var _fun53732_ip = 0;;) switch (_fun53732_ip) {
                case 0:
                    var1 = _closure1_slot12;
                    var5 = undefined;
                    var0 = arg0;
                    var0 = var1.bind(var5)(var0);
                    var _closure3_slot0 = var0;
                    var3 = var0.activeCommand;
                    var0 = null;
                    var4 = var0 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun53732_ip = 69;
                        continue _fun53732
                    }
                case 40:
                    var4 = var3.options;
                    var3 = var0 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun53732_ip = 69;
                        continue _fun53732
                    }
                case 54:
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = _closure3_slot0;
                        var0 = var0.activeOptionName;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2);
                case 69:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun53732_ip = 81;
                        continue _fun53732
                    }
                case 78:
                    var0 = var1;
                case 81:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getPreferredCommandId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.preferredCommandId;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getOptionStates';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.optionStates;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getOptionState';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var1 = var0.optionStates;
            var0 = arg1;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getCommandOrigin';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.commandOrigin;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getSource';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.source;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getOption';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun53739: for (var _fun53739_ip = 0;;) switch (_fun53739_ip) {
                case 0:
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot12;
                    var4 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var4)(var0);
                    var3 = var0.activeCommand;
                    var2 = null;
                    var5 = var2 == var3;
                    var0 = undefined;
                    if (var5) {
                        _fun53739_ip = 72;
                        continue _fun53739
                    }
                case 43:
                    var3 = var3.options;
                    var2 = var2 == var3;
                    var0 = undefined;
                    if (var2) {
                        _fun53739_ip = 72;
                        continue _fun53739
                    }
                case 57:
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 72:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function arg0() {
            var0 = {};
            var3 = _closure1_slot12;
            var2 = undefined;
            var1 = arg0;
            var4 = var3.bind(var2)(var1);
            var5 = var0;
            var1 = copyDataProperties(var5, var4);
            return var0;
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationCommandStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var11;
    var1.CHANNEL_SELECT = var11;
    var1.LOGOUT = var11;
    var1.APPLICATION_COMMAND_SET_ACTIVE_COMMAND = var10;
    var1.APPLICATION_COMMAND_SET_PREFERRED_COMMAND = var9;
    var1.APPLICATION_COMMAND_UPDATE_OPTIONS = var8;
    var3 = function arg0() {
        _fun53742: for (var _fun53742_ip = 0;;) switch (_fun53742_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var7 = var0.preferredCommandId;
                var8 = var0.command;
                var4 = var0.section;
                var3 = var0.location;
                var5 = var0.changedOptionStates;
                var1 = _closure1_slot13;
                var0 = {};
                var9 = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
                var0.type = var9;
                var0.channelId = var6;
                var0.command = var8;
                var0.section = var4;
                var0.location = var3;
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var3 = _closure1_slot14;
                var1 = {};
                var8 = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
                var1.type = var8;
                var1.channelId = var6;
                var1.commandId = var7;
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot15;
                var2 = {};
                var7 = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
                var2.type = var7;
                var2.channelId = var6;
                var2.changedOptionStates = var5;
                var2 = var3.bind(var4)(var2);
                if (var0) {
                    _fun53742_ip = 143;
                    continue _fun53742
                }
            case 140:
                var0 = var1;
            case 143:
                if (var0) {
                    _fun53742_ip = 148;
                    continue _fun53742
                }
            case 146:
                var0 = true;
            case 148:
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_UPDATE_CHANNEL_STATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/ApplicationCommandStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 4225, 1670, 4544, 566, 806, 2]);