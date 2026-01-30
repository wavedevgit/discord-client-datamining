// modules/application_commands/native/ApplicationCommandManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun90806: for (var _fun90806_ip = 0;;) switch (_fun90806_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun90806_ip = 45;
                    continue _fun90806
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun90806_ip = 54;
                    continue _fun90806
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun90806_ip = 344;
                    continue _fun90806
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun90806_ip = 322;
                    continue _fun90806
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun90806_ip = 282;
                    continue _fun90806
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun90806_ip = 269;
                    continue _fun90806
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
                    _fun90806_ip = 162;
                    continue _fun90806
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun90806_ip = 178;
                    continue _fun90806
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun90806_ip = 248;
                    continue _fun90806
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun90806_ip = 248;
                    continue _fun90806
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun90806_ip = 233;
                    continue _fun90806
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun90806_ip = 246;
                    continue _fun90806
                }
            case 233:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun90806_ip = 264;
                continue _fun90806;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun90806_ip = 282;
                continue _fun90806;
            case 269:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun90806_ip = 322;
                    continue _fun90806
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
                    _fun90806_ip = 329;
                    continue _fun90806
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun90807: for (var _fun90807_ip = 0;;) switch (_fun90807_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun90807_ip = 56;
                                continue _fun90807
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
                            _fun90807_ip = 67;
                            continue _fun90807;
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
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun90808: for (var _fun90808_ip = 0;;) switch (_fun90808_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun90808_ip = 23;
                    continue _fun90808
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun90808_ip = 33;
                    continue _fun90808
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
                    _fun90808_ip = 70;
                    continue _fun90808
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun90808_ip = 55;
                    continue _fun90808
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var5[var8];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var7 = 1;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var3.AutoCompleteResultTypes;
    var _closure1_slot10 = var6;
    var3 = var3.WHITESPACE_RE;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.COMMAND_SENTINEL;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaKeyboardTarget;
    var _closure1_slot13 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: getNextOption, environment: var1
        _fun90809: for (var _fun90809_ip = 0;;) switch (_fun90809_ip) {
            case 0:
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = arg0;
                var3 = var1.options;
                var4 = null;
                var1 = var4 == var3;
                var2 = undefined;
                if (var1) {
                    _fun90809_ip = 52;
                    continue _fun90809
                }
            case 35:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun90810: for (var _fun90810_ip = 0;;) switch (_fun90810_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.required;
                            if (var0) {
                                _fun90810_ip = 19;
                                continue _fun90810
                            }
                        case 12:
                            var0 = _closure2_slot1;
                        case 19:
                            if (!var0) {
                                _fun90810_ip = 47;
                                continue _fun90810
                            }
                        case 22:
                            var3 = _closure2_slot0;
                            var2 = var3.has;
                            var1 = var1.name;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 47:
                            return var0;
                    }
                };
                var2 = var1.bind(var3)(var0);
            case 52:
                var1 = var4 != var2;
                var0 = null;
                if (!var1) {
                    _fun90809_ip = 81;
                    continue _fun90809
                }
            case 61:
                var3 = var2.length;
                var1 = 0;
                var3 = var3 > var1;
                var0 = null;
                if (!var3) {
                    _fun90809_ip = 81;
                    continue _fun90809
                }
            case 77:
                var0 = var2[var1];
            case 81:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = {};
    var3.FULL_COMMAND = var8;
    var6 = 'FULL_COMMAND';
    var3[var8] = var6;
    var3.PARTIAL_COMMAND = var7;
    var6 = 'PARTIAL_COMMAND';
    var3[var7] = var6;
    var _closure1_slot15 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function(arg0) { // Original name: ApplicationCommandManager, environment: var4
            var1 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var2;
            var6 = _closure1_slot5;
            var5 = _closure2_slot0;
            var0 = undefined;
            var5 = var6.bind(var0)(var2, var5);
            var5 = new Array(0);
            var2.chatInputNodes = var5;
            var5 = global;
            var6 = var5.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var2.optionsToNodes = var6;
            var5 = var5.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var2.optionValueNodes = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var4 = 8;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var10 = var5;
            var4 = new var10[var4](var9);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.parser = var4;
            var4 = {};
            var2.optionValues = var4;
            var4 = {};
            var2.optionValidationResults = var4;
            var4 = true;
            var2.canAutoInsertFirstOption = var4;
            var4 = {};
            var2.preferredOptionValues = var4;
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                _fun90813: for (var _fun90813_ip = 0;;) switch (_fun90813_ip) {
                    case 0:
                        var7 = arg0;
                        var3 = arg3;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var4 = var0.activeCommand;
                        var5 = _closure1_slot8;
                        var2 = var5.getActiveOption;
                        var5 = var2.bind(var5)(var7);
                        var2 = arg2;
                        if (!var2) {
                            _fun90813_ip = 58;
                            continue _fun90813
                        }
                    case 48:
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun90813_ip = 58;
                            continue _fun90813
                        }
                    case 54:
                        if (!(var2 == var5)) {
                            _fun90813_ip = 165;
                            continue _fun90813
                        }
                    case 58:
                        var4 = var3.type;
                        var2 = _closure1_slot10;
                        var2 = var2.SLASH;
                        if (!(var4 === var2)) {
                            _fun90813_ip = 161;
                            continue _fun90813
                        }
                    case 77:
                        var6 = _closure3_slot0;
                        var4 = var6.setCommand;
                        var2 = {};
                        var2.channelId = var7;
                        var7 = var3.command;
                        var2.command = var7;
                        var7 = var3.section;
                        var2.section = var7;
                        var7 = var3.location;
                        var2.location = var7;
                        var7 = var3.visualSection;
                        var2.visualSection = var7;
                        var7 = var3.query;
                        var2.query = var7;
                        var7 = true;
                        var2.addSpace = var7;
                        var2 = var4.bind(var6)(var2);
                        _fun90813_ip = 345;
                        continue _fun90813;
                    case 161:
                        var2 = false;
                        return var2;
                    case 165:
                        var4 = var3.type;
                        var2 = _closure1_slot10;
                        var2 = var2.USER;
                        if (!(var2 !== var4)) {
                            _fun90813_ip = 268;
                            continue _fun90813
                        }
                    case 184:
                        var2 = _closure1_slot10;
                        var2 = var2.ROLE;
                        if (!(var2 !== var4)) {
                            _fun90813_ip = 243;
                            continue _fun90813
                        }
                    case 198:
                        var0 = _closure1_slot10;
                        var2 = var0.CHANNEL;
                        var0 = undefined;
                        if (!(var2 === var4)) {
                            _fun90813_ip = 297;
                            continue _fun90813
                        }
                    case 214:
                        var2 = {};
                        var4 = 'channelMention';
                        var2.type = var4;
                        var4 = var3.channel;
                        var4 = var4.id;
                        var2.channelId = var4;
                        var0 = var2;
                        _fun90813_ip = 297;
                        continue _fun90813;
                    case 243:
                        var2 = {};
                        var4 = 'roleMention';
                        var2.type = var4;
                        var4 = var3.id;
                        var2.roleId = var4;
                        var0 = var2;
                        _fun90813_ip = 297;
                        continue _fun90813;
                    case 268:
                        var2 = {};
                        var4 = 'userMention';
                        var2.type = var4;
                        var3 = var3.user;
                        var3 = var3.id;
                        var2.userId = var3;
                        var0 = var2;
                    case 297:
                        var4 = _closure3_slot0;
                        var3 = var4.insertOrJumpCommandOption;
                        var2 = {};
                        var1 = arg1;
                        var2.displayText = var1;
                        var1 = true;
                        var2.preferred = var1;
                        var2.value = var0;
                        var10 = undefined;
                        var9 = false;
                        var12 = var4;
                        var11 = var5;
                        var8 = var2;
                        var0 = var12[var3](var11, var10, var9, var8, var7);
                    case 345:
                        var0 = true;
                        return var0;
                }
            };
            var2.setAutoCompleteResult = var4;
            var4 = function(arg0) { // Environment: var3
                _fun90814: for (var _fun90814_ip = 0;;) switch (_fun90814_ip) {
                    case 0:
                        var0 = arg0;
                        var14 = var0.channelId;
                        var6 = var0.command;
                        var13 = var0.section;
                        var8 = var0.location;
                        var11 = var0.visualSection;
                        var9 = var0.query;
                        var10 = var0.addSpace;
                        var4 = var0.commandText;
                        var0 = _closure3_slot0;
                        var0 = var0.ref;
                        var2 = var0.current;
                        var0 = var2.setText;
                        var3 = null;
                        if (!(var3 == var4)) {
                            _fun90814_ip = 125;
                            continue _fun90814
                        }
                    case 77:
                        var15 = _closure1_slot12;
                        var12 = var6.displayName;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var7 = var5.concat;
                        var5 = '';
                        var7 = var7.bind(var5)(var15, var12);
                        if (!var10) {
                            _fun90814_ip = 121;
                            continue _fun90814
                        }
                    case 115:
                        var5 = ' ';
                    case 121:
                        var4 = var7 + var5;
                    case 125:
                        var0 = var0.bind(var2)(var4);
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var0 = 9;
                        var2 = var12[var0];
                        var0 = undefined;
                        var7 = var10.bind(var0)(var2);
                        var4 = var7.setActiveCommand;
                        var2 = {};
                        var2.channelId = var14;
                        var2.command = var6;
                        var2.section = var13;
                        var2.location = var8;
                        var8 = 10;
                        var8 = var12[var8];
                        var10 = var10.bind(var0)(var8);
                        var8 = var10.getCommandTriggerSection;
                        var8 = var8.bind(var10)(var11);
                        var2.triggerSection = var8;
                        var10 = var3 == var9;
                        var8 = undefined;
                        if (var10) {
                            _fun90814_ip = 222;
                            continue _fun90814
                        }
                    case 217:
                        var8 = var9.length;
                    case 222:
                        var2.queryLength = var8;
                        var2 = var4.bind(var7)(var2);
                        var4 = var6.id;
                        var2 = _closure3_slot0;
                        var7 = var3 == var2;
                        var2 = undefined;
                        if (var7) {
                            _fun90814_ip = 274;
                            continue _fun90814
                        }
                    case 250:
                        var7 = _closure3_slot0;
                        var7 = var7.preferredCommand;
                        var8 = var3 == var7;
                        var2 = undefined;
                        if (var8) {
                            _fun90814_ip = 274;
                            continue _fun90814
                        }
                    case 269:
                        var2 = var7.id;
                    case 274:
                        if (!(var4 !== var2)) {
                            _fun90814_ip = 339;
                            continue _fun90814
                        }
                    case 278:
                        var2 = _closure3_slot0;
                        if (!(var3 != var2)) {
                            _fun90814_ip = 339;
                            continue _fun90814
                        }
                    case 286:
                        var3 = _closure3_slot0;
                        var2 = var3.updateApplicationCommandManagerState;
                        var1 = {};
                        var4 = {};
                        var17 = var4;
                        var16 = var6;
                        var6 = copyDataProperties(var17, var16);
                        var5 = _closure1_slot15;
                        var6 = var5.FULL_COMMAND;
                        var5 = 'preferredCommandType';
                        var4[var5] = var6;
                        var1.preferredCommand = var4;
                        var1 = var2.bind(var3)(var1);
                    case 339:
                        return var0;
                }
            };
            var2.setCommand = var4;
            var4 = function(arg0, arg1, arg2) { // Environment: var3
                _fun90815: for (var _fun90815_ip = 0;;) switch (_fun90815_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = _closure3_slot0;
                        var2 = var0.ref;
                        var4 = var2.current;
                        var3 = var4.setText;
                        var9 = _closure1_slot12;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var2 = '';
                        var2 = var8.bind(var2)(var9, var6);
                        var2 = var3.bind(var4)(var2);
                        var3 = var0.preferredCommand;
                        var0 = null;
                        var4 = var0 == var3;
                        var0 = undefined;
                        var2 = undefined;
                        if (var4) {
                            _fun90815_ip = 88;
                            continue _fun90815
                        }
                    case 83:
                        var2 = var3.id;
                    case 88:
                        if (!(var7 !== var2)) {
                            _fun90815_ip = 151;
                            continue _fun90815
                        }
                    case 92:
                        var3 = _closure3_slot0;
                        var2 = var3.updateApplicationCommandManagerState;
                        var1 = {};
                        var4 = {};
                        var4.id = var7;
                        var4.untranslatedName = var6;
                        var4.displayName = var6;
                        var5 = _closure1_slot15;
                        var5 = var5.PARTIAL_COMMAND;
                        var4.preferredCommandType = var5;
                        var1.preferredCommand = var4;
                        var4 = arg2;
                        var1.location = var4;
                        var1 = var2.bind(var3)(var1);
                    case 151:
                        return var0;
                }
            };
            var2.setPartialCommand = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun90816: for (var _fun90816_ip = 0;;) switch (_fun90816_ip) {
                    case 0:
                        var10 = arg1;
                        var6 = global;
                        var3 = var6.JSON;
                        var2 = var3.parse;
                        var0 = arg0;
                        var2 = var2.bind(var3)(var0);
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 10;
                        var3 = var8[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.extractInteractionDataProps;
                        var3 = var3.bind(var4)(var2);
                        var9 = var3.commandKey;
                        var7 = var3.interactionOptions;
                        var4 = _closure1_slot2;
                        var3 = 11;
                        var3 = var8[var3];
                        var8 = var4.bind(var0)(var3);
                        var4 = var8.getCachedCommand;
                        var3 = {};
                        var11 = 'channel';
                        var3.type = var11;
                        var3.channel = var10;
                        var4 = var4.bind(var8)(var3, var9);
                        var3 = var4.application;
                        var4 = var4.command;
                        var _closure4_slot0 = var4;
                        var8 = null;
                        if (!(var8 == var4)) {
                            _fun90816_ip = 205;
                            continue _fun90816
                        }
                    case 138:
                        var13 = _closure3_slot0;
                        var12 = var13.setPartialCommand;
                        var11 = var2.id;
                        var9 = var2.name;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var2 = 12;
                        var2 = var15[var2];
                        var2 = var14.bind(var0)(var2);
                        var2 = var2.ApplicationCommandTriggerLocations;
                        var2 = var2.PASTE;
                        var2 = var12.bind(var13)(var11, var9, var2);
                        _fun90816_ip = 560;
                        continue _fun90816;
                    case 205:
                        var2 = var8 != var3;
                        var9 = null;
                        if (!var2) {
                            _fun90816_ip = 310;
                            continue _fun90816
                        }
                    case 214:
                        var2 = {};
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 12;
                        var11 = var13[var11];
                        var11 = var12.bind(var0)(var11);
                        var11 = var11.ApplicationCommandSectionType;
                        var11 = var11.APPLICATION;
                        var2.type = var11;
                        var11 = var3.id;
                        var2.id = var11;
                        var11 = var3.icon;
                        var2.icon = var11;
                        var12 = var3.bot;
                        var13 = var8 == var12;
                        var11 = undefined;
                        if (var13) {
                            _fun90816_ip = 290;
                            continue _fun90816
                        }
                    case 285:
                        var11 = var12.username;
                    case 290:
                        if (!(var8 == var11)) {
                            _fun90816_ip = 299;
                            continue _fun90816
                        }
                    case 294:
                        var11 = var3.name;
                    case 299:
                        var2.name = var11;
                        var2.application = var3;
                        var9 = var2;
                    case 310:
                        var3 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 13;
                        var2 = var11[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getInitialValuesFromInteractionOptions;
                        if (!(var8 == var7)) {
                            _fun90816_ip = 344;
                            continue _fun90816
                        }
                    case 340:
                        var7 = new Array(0);
                    case 344:
                        var7 = var2.bind(var3)(var4, var7);
                        var _closure4_slot1 = var7;
                        var3 = var6.Object;
                        var2 = var3.keys;
                        var7 = var2.bind(var3)(var7);
                        var3 = var7.map;
                        var2 = function(arg0) { // Environment: var1
                            _fun90817: for (var _fun90817_ip = 0;;) switch (_fun90817_ip) {
                                case 0:
                                    var5 = arg0;
                                    var _closure5_slot0 = var5;
                                    var0 = _closure4_slot0;
                                    var8 = var0.options;
                                    var0 = null;
                                    var6 = var0 == var8;
                                    var1 = undefined;
                                    if (var6) {
                                        _fun90817_ip = 49;
                                        continue _fun90817
                                    }
                                case 32:
                                    var7 = var8.find;
                                    var6 = function(arg0) { // Environment: var3
                                        var0 = arg0;
                                        var1 = var0.name;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var1 = var7.bind(var8)(var6);
                                case 49:
                                    var4 = _closure4_slot1;
                                    var4 = var4[var5];
                                    var _closure5_slot1 = var4;
                                    if (!(var0 != var1)) {
                                        _fun90817_ip = 177;
                                        continue _fun90817
                                    }
                                case 65:
                                    if (!(var0 != var4)) {
                                        _fun90817_ip = 177;
                                        continue _fun90817
                                    }
                                case 69:
                                    var6 = var4.value;
                                    var4 = var0 == var6;
                                    var5 = undefined;
                                    if (var4) {
                                        _fun90817_ip = 92;
                                        continue _fun90817
                                    }
                                case 83:
                                    var4 = var6.toString;
                                    var5 = var4.bind(var6)();
                                case 92:
                                    var4 = var1.choices;
                                    if (!(var0 != var4)) {
                                        _fun90817_ip = 142;
                                        continue _fun90817
                                    }
                                case 102:
                                    var6 = var1.choices;
                                    var4 = var6.find;
                                    var3 = function(arg0) { // Environment: var3
                                        var0 = arg0;
                                        var1 = var0.value;
                                        var0 = _closure5_slot1;
                                        var0 = var0.value;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var3 = var4.bind(var6)(var3);
                                    var4 = var0 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun90817_ip = 139;
                                        continue _fun90817
                                    }
                                case 134:
                                    var2 = var3.displayName;
                                case 139:
                                    var5 = var2;
                                case 142:
                                    var4 = var1.displayName;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var3 = var1.concat;
                                    var2 = '';
                                    var1 = ':';
                                    var1 = var3.bind(var2)(var4, var1, var5);
                                    return var1;
                                case 177:
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var1
                            var1 = null;
                            var0 = arg0;
                            var0 = var1 != var0;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.join;
                        var8 = ' ';
                        var7 = var1.bind(var2)(var8);
                        var3 = _closure3_slot0;
                        var2 = var3.setCommand;
                        var1 = {};
                        var10 = var10.id;
                        var1.channelId = var10;
                        var1.command = var4;
                        var1.section = var9;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var9 = 12;
                        var9 = var11[var9];
                        var9 = var10.bind(var0)(var9);
                        var9 = var9.ApplicationCommandTriggerLocations;
                        var9 = var9.PASTE;
                        var1.location = var9;
                        var10 = _closure1_slot12;
                        var9 = var4.displayName;
                        var4 = var6.HermesInternal;
                        var5 = var4.concat;
                        var4 = '';
                        var5 = var5.bind(var4)(var10, var9);
                        var10 = var7.length;
                        var9 = 0;
                        if (!(var9 !== var10)) {
                            _fun90816_ip = 546;
                            continue _fun90816
                        }
                    case 530:
                        var6 = var6.HermesInternal;
                        var6 = var6.concat;
                        var4 = var6.bind(var8)(var7);
                    case 546:
                        var4 = var5 + var4;
                        var1.commandText = var4;
                        var1 = var2.bind(var3)(var1);
                    case 560:
                        return var0;
                }
            };
            var2.setPastedCommand = var4;
            var4 = function(arg0) { // Environment: var3
                _fun90821: for (var _fun90821_ip = 0;;) switch (_fun90821_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.newState;
                        var5 = var0.preferredCommand;
                        var4 = var0.location;
                        var2 = _closure3_slot0;
                        var1 = var2.mergePropsAndUpdate;
                        var0 = {};
                        var7 = null;
                        if (!(var7 == var3)) {
                            _fun90821_ip = 52;
                            continue _fun90821
                        }
                    case 43:
                        var6 = _closure3_slot0;
                        var3 = var6.props;
                    case 52:
                        var9 = var0;
                        var8 = var3;
                        var3 = copyDataProperties(var9, var8);
                        var3 = 'preferredCommand';
                        var0[var3] = var5;
                        var3 = 'location';
                        var0[var3] = var4;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var2.updateApplicationCommandManagerState = var4;
            var4 = function() { // Environment: var3
                var1 = _closure3_slot0;
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {
                    'ruleId': 'commandOptionParserRuleId',
                    'type': null,
                    'matchFunction': null,
                    'style': null,
                    'deleteNodeOnBackspace': true,
                    'editDisabled': true
                };
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 8;
                var9 = var7[var5];
                var0 = undefined;
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.COMMAND_OPTION;
                var2.type = var9;
                var9 = function(arg0, arg1) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMatchedOptions;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.commandOption;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2.style = var9;
                var2 = var3.bind(var8)(var2);
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {};
                var9 = 'commandOptionValueParserRuleId';
                var2.ruleId = var9;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.COMMAND_OPTION_WITH_VALUE;
                var2.type = var9;
                var9 = function(arg0, arg1) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMatchedOptionsWithValue;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.commandOption;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2.style = var9;
                var9 = function(arg0) { // Original name: editDisabled, environment: var4
                    _fun90827: for (var _fun90827_ip = 0;;) switch (_fun90827_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.data;
                            var1 = null;
                            var2 = var1 == var0;
                            var3 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun90827_ip = 32;
                                continue _fun90827
                            }
                        case 21:
                            var0 = var0.option;
                            var1 = var0.type;
                        case 32:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 15;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.ApplicationCommandOptionType;
                            var0 = var0.ATTACHMENT;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var2.editDisabled = var9;
                var2 = var3.bind(var8)(var2);
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {};
                var9 = 'emojiHighlightRuleId';
                var2.ruleId = var9;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.EMOJI_HIGHLIGHT;
                var2.type = var9;
                var9 = function(arg0) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEmojiHighlightNodes;
                    var0 = _closure3_slot0;
                    var0 = var0.props;
                    var1 = var0.channel;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.autocomplete;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2.style = var9;
                var9 = function() { // Original name: editDisabled, environment: var4
                    var0 = false;
                    return var0;
                };
                var2.editDisabled = var9;
                var2 = var3.bind(var8)(var2);
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {};
                var9 = 'roleHighlightRuleId';
                var2.ruleId = var9;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.ROLE_HIGHLIGHT;
                var2.type = var9;
                var9 = function(arg0) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getRoleHighlightNodes;
                    var0 = _closure3_slot0;
                    var0 = var0.props;
                    var1 = var0.channel;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function(arg0) { // Original name: style, environment: var4
                    _fun90832: for (var _fun90832_ip = 0;;) switch (_fun90832_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.data;
                            var4 = null;
                            var1 = var4 == var0;
                            var3 = undefined;
                            if (var1) {
                                _fun90832_ip = 24;
                                continue _fun90832
                            }
                        case 19:
                            var3 = var0.color;
                        case 24:
                            var0 = _closure3_slot0;
                            var1 = var0.styles;
                            var0 = var1.autocomplete;
                            var4 = var4 != var3;
                            var2 = undefined;
                            if (!var4) {
                                _fun90832_ip = 55;
                                continue _fun90832
                            }
                        case 52:
                            var2 = var3;
                        case 55:
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var2.style = var9;
                var9 = function() { // Original name: editDisabled, environment: var4
                    var0 = false;
                    return var0;
                };
                var2.editDisabled = var9;
                var2 = var3.bind(var8)(var2);
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {};
                var9 = 'userHighlightRuleId';
                var2.ruleId = var9;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.USER_HIGHLIGHT;
                var2.type = var9;
                var9 = function(arg0) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getUsernameHighlightNodes;
                    var0 = _closure3_slot0;
                    var0 = var0.props;
                    var1 = var0.channel;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.autocomplete;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2.style = var9;
                var9 = function() { // Original name: editDisabled, environment: var4
                    var0 = false;
                    return var0;
                };
                var2.editDisabled = var9;
                var2 = var3.bind(var8)(var2);
                var8 = var1.parser;
                var3 = var8.addRule;
                var2 = {};
                var9 = 'channelHighlightRuleId';
                var2.ruleId = var9;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.ChatInputNodeType;
                var9 = var9.CHANNEL_HIGHLIGHT;
                var2.type = var9;
                var9 = function(arg0) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getChannelHighlightNodes;
                    var0 = _closure3_slot0;
                    var0 = var0.props;
                    var1 = var0.channel;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.matchFunction = var9;
                var9 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.autocomplete;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2.style = var9;
                var9 = function() { // Original name: editDisabled, environment: var4
                    var0 = false;
                    return var0;
                };
                var2.editDisabled = var9;
                var2 = var3.bind(var8)(var2);
                var3 = var1.parser;
                var2 = var3.addRule;
                var1 = {};
                var8 = 'silentHighlightRuleId';
                var1.ruleId = var8;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ChatInputNodeType;
                var5 = var5.SILENT_HIGHLIGHT;
                var1.type = var5;
                var5 = function(arg0) { // Original name: matchFunction, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getSilentHighlightNodes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.matchFunction = var5;
                var5 = function() { // Original name: style, environment: var4
                    var0 = _closure3_slot0;
                    var1 = var0.styles;
                    var0 = var1.autocomplete;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1.style = var5;
                var4 = function() { // Original name: editDisabled, environment: var4
                    var0 = false;
                    return var0;
                };
                var1.editDisabled = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.addCommandOptionParserRules = var4;
            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                _fun90843: for (var _fun90843_ip = 0;;) switch (_fun90843_ip) {
                    case 0:
                        var8 = arg0;
                        var3 = arg1;
                        var2 = arg2;
                        var _closure4_slot0 = var3;
                        var _closure4_slot1 = var2;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var1 = var0.commandsDisabled;
                        var0 = null;
                        if (!(var0 != var8)) {
                            _fun90843_ip = 661;
                            continue _fun90843
                        }
                    case 46:
                        if (var1) {
                            _fun90843_ip = 661;
                            continue _fun90843
                        }
                    case 52:
                        var5 = var8.startsWith;
                        var1 = _closure1_slot12;
                        var1 = var5.bind(var8)(var1);
                        if (!var1) {
                            _fun90843_ip = 661;
                            continue _fun90843
                        }
                    case 76:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 14;
                        var1 = var9[var1];
                        var9 = undefined;
                        var5 = var5.bind(var9)(var1);
                        var1 = var5.getTextBeforeFirstOption;
                        var1 = var1.bind(var5)(var8);
                        var5 = var1.match;
                        var _closure4_slot2 = var5;
                        var11 = var1.text;
                        var1 = var0 != var2;
                        var5 = false;
                        if (!var1) {
                            _fun90843_ip = 247;
                            continue _fun90843
                        }
                    case 133:
                        var12 = var11.startsWith;
                        var15 = _closure1_slot12;
                        var13 = var2.displayName;
                        var1 = global;
                        var10 = var1.HermesInternal;
                        var10 = var10.concat;
                        var14 = '';
                        var10 = var10.bind(var14)(var15, var13);
                        var10 = var12.bind(var11)(var10);
                        if (var10) {
                            _fun90843_ip = 222;
                            continue _fun90843
                        }
                    case 179:
                        var10 = var11.startsWith;
                        var13 = _closure1_slot12;
                        var12 = var2.untranslatedName;
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var14)(var13, var12);
                        var1 = var10.bind(var11)(var1);
                        var5 = false;
                        if (!var1) {
                            _fun90843_ip = 247;
                            continue _fun90843
                        }
                    case 222:
                        var8 = var2.preferredCommandType;
                        var1 = _closure1_slot15;
                        var1 = var1.FULL_COMMAND;
                        var5 = true;
                        if (!(var8 !== var1)) {
                            _fun90843_ip = 645;
                            continue _fun90843
                        }
                    case 247:
                        var1 = _closure3_slot0;
                        var1 = var1.contextCommands;
                        if (!(var0 != var1)) {
                            _fun90843_ip = 643;
                            continue _fun90843
                        }
                    case 264:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 16;
                        var1 = var10[var1];
                        var12 = var8.bind(var9)(var1);
                        var10 = var12.getCommandContext;
                        var8 = {};
                        var8.channel = var3;
                        var1 = 'channel';
                        var8.type = var1;
                        var8 = var10.bind(var12)(var8);
                        var _closure4_slot3 = var8;
                        var8 = var0 == var2;
                        var10 = undefined;
                        if (var8) {
                            _fun90843_ip = 328;
                            continue _fun90843
                        }
                    case 322:
                        var10 = var2.preferredCommandType;
                    case 328:
                        var8 = _closure1_slot15;
                        var8 = var8.PARTIAL_COMMAND;
                        if (!(var10 !== var8)) {
                            _fun90843_ip = 450;
                            continue _fun90843
                        }
                    case 342:
                        var10 = var11.slice;
                        var8 = 1;
                        var12 = var10.bind(var11)(var8);
                        var11 = var12.split;
                        var10 = ' ';
                        var8 = 3;
                        var14 = var11.bind(var12)(var10, var8);
                        var _closure4_slot4 = var14;
                        var13 = function() { // Original name: _loop, environment: var4
                            _fun90845: for (var _fun90845_ip = 0;;) switch (_fun90845_ip) {
                                case 0:
                                    var5 = _closure4_slot4;
                                    var4 = var5.slice;
                                    var1 = _closure4_slot4;
                                    var2 = var1.length;
                                    var1 = _closure4_slot5;
                                    var2 = var2 - var1;
                                    var1 = 0;
                                    var5 = var4.bind(var5)(var1, var2);
                                    var4 = var5.join;
                                    var2 = ' ';
                                    var12 = var4.bind(var5)(var2);
                                    var _closure5_slot0 = var12;
                                    var4 = _closure1_slot0;
                                    var13 = _closure1_slot3;
                                    var2 = 10;
                                    var2 = var13[var2];
                                    var7 = undefined;
                                    var10 = var4.bind(var7)(var2);
                                    var9 = var10.getMatchingGroupCommands;
                                    var2 = _closure3_slot1;
                                    var8 = var2.contextCommands;
                                    var2 = global;
                                    var11 = var2.RegExp;
                                    var6 = _closure1_slot1;
                                    var4 = 17;
                                    var4 = var13[var4];
                                    var6 = var6.bind(var7)(var4);
                                    var4 = var6.escape;
                                    var6 = var4.bind(var6)(var12);
                                    var2 = var2.HermesInternal;
                                    var4 = var2.concat;
                                    var2 = '^';
                                    var17 = var4.bind(var2)(var6);
                                    var2 = var11.prototype;
                                    var4 = Object.create(var2, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var16 = 'i';
                                    var18 = var4;
                                    var2 = new var18[var11](var17, var16, var15);
                                    var16 = var2 instanceof Object ? var2 : var4;
                                    var15 = _closure4_slot3;
                                    var14 = 2;
                                    var18 = var10;
                                    var17 = var8;
                                    var2 = var18[var9](var17, var16, var15, var14, var13);
                                    var4 = var2.filter;
                                    var3 = function(arg0) { // Environment: var3
                                        _fun90846: for (var _fun90846_ip = 0;;) switch (_fun90846_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var1 = var3.inputType;
                                                var4 = _closure1_slot0;
                                                var2 = _closure1_slot3;
                                                var0 = 12;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var0 = var4.bind(var0)(var2);
                                                var0 = var0.ApplicationCommandInputType;
                                                var0 = var0.PLACEHOLDER;
                                                var0 = var1 !== var0;
                                                if (!var0) {
                                                    _fun90846_ip = 89;
                                                    continue _fun90846
                                                }
                                            case 53:
                                                var4 = var3.displayName;
                                                var1 = _closure5_slot0;
                                                var1 = var4 === var1;
                                                if (var1) {
                                                    _fun90846_ip = 86;
                                                    continue _fun90846
                                                }
                                            case 72:
                                                var3 = var3.untranslatedName;
                                                var2 = _closure5_slot0;
                                                var1 = var3 === var2;
                                            case 86:
                                                var0 = var1;
                                            case 89:
                                                return var0;
                                        }
                                    };
                                    var3 = var4.bind(var2)(var3);
                                    var4 = var3.length;
                                    if (!(var4 > var1)) {
                                        _fun90845_ip = 265;
                                        continue _fun90845
                                    }
                                case 225:
                                    var6 = var3[var1];
                                    var3 = _closure4_slot5;
                                    var3 = var3 > var1;
                                    if (var3) {
                                        _fun90845_ip = 250;
                                        continue _fun90845
                                    }
                                case 240:
                                    var8 = _closure4_slot2;
                                    var4 = null;
                                    var3 = var4 != var8;
                                case 250:
                                    var4 = var2.length;
                                    if (var3) {
                                        _fun90845_ip = 278;
                                        continue _fun90845
                                    }
                                case 258:
                                    var3 = 1;
                                    if (!(var3 !== var4)) {
                                        _fun90845_ip = 278;
                                        continue _fun90845
                                    }
                                case 265:
                                    var2 = var2.length;
                                    if (!(!(var2 > var1))) {
                                        _fun90845_ip = 276;
                                        continue _fun90845
                                    }
                                case 274:
                                    return var7;
                                case 276:
                                    return var1;
                                case 278:
                                    var2 = _closure1_slot2;
                                    var8 = _closure1_slot3;
                                    var1 = 11;
                                    var1 = var8[var1];
                                    var4 = var2.bind(var7)(var1);
                                    var3 = var4.getCachedApplicationSection;
                                    var2 = {};
                                    var0 = _closure4_slot0;
                                    var2.channel = var0;
                                    var0 = 'channel';
                                    var2.type = var0;
                                    var1 = _closure1_slot0;
                                    var0 = 15;
                                    var0 = var8[var0];
                                    var0 = var1.bind(var7)(var0);
                                    var0 = var0.ApplicationCommandType;
                                    var1 = var0.CHAT;
                                    var0 = var6.applicationId;
                                    var3 = var3.bind(var4)(var2, var1, var0);
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun90845_ip = 418;
                                        continue _fun90845
                                    }
                                case 368:
                                    var0 = {};
                                    var1 = {};
                                    var4 = {};
                                    var17 = var4;
                                    var16 = var6;
                                    var6 = copyDataProperties(var17, var16);
                                    var5 = _closure1_slot15;
                                    var6 = var5.FULL_COMMAND;
                                    var5 = 'preferredCommandType';
                                    var4[var5] = var6;
                                    var1.command = var4;
                                    var1.section = var3;
                                    var0.v = var1;
                                    _fun90845_ip = 427;
                                    continue _fun90845;
                                case 418:
                                    var1 = {};
                                    var1.v = var2;
                                    var0 = var1;
                                case 427:
                                    return var0;
                            }
                        };
                        var12 = 0;
                        var _closure4_slot5 = var12;
                        var8 = var14.length;
                        if (!(var12 < var8)) {
                            _fun90843_ip = 481;
                            continue _fun90843
                        }
                    case 401:
                        var10 = var13.bind(var9)();
                        var11 = 0;
                        if (!(var11 !== var10)) {
                            _fun90843_ip = 481;
                            continue _fun90843
                        }
                    case 411:
                        var8 = var10;
                        if (var8) {
                            _fun90843_ip = 443;
                            continue _fun90843
                        }
                    case 417:
                        var11 = var11 + 1;
                        _closure4_slot5 = var11;
                        var15 = var14.length;
                        if (!(var11 < var15)) {
                            _fun90843_ip = 481;
                            continue _fun90843
                        }
                    case 433:
                        var10 = var13.bind(var9)();
                        if (var12 !== var10) {
                            _fun90843_ip = 411;
                            continue _fun90843
                        }
                    case 441:
                        _fun90843_ip = 481;
                        continue _fun90843;
                    case 443:
                        var8 = var8.v;
                        return var8;
                    case 450:
                        var7 = _closure3_slot0;
                        var8 = var7.contextCommands;
                        var7 = var8.find;
                        var4 = function(arg0) { // Environment: var4
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot1;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var7 = var7.bind(var8)(var4);
                        if (!(var0 == var7)) {
                            _fun90843_ip = 511;
                            continue _fun90843
                        }
                    case 481:
                        var4 = null;
                        if (!var5) {
                            _fun90843_ip = 509;
                            continue _fun90843
                        }
                    case 486:
                        var5 = var0 != var2;
                        var4 = null;
                        if (!var5) {
                            _fun90843_ip = 509;
                            continue _fun90843
                        }
                    case 495:
                        var5 = {};
                        var5.command = var2;
                        var5.section = var0;
                        var4 = var5;
                    case 509:
                        return var4;
                    case 511:
                        var5 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var4 = 11;
                        var4 = var10[var4];
                        var8 = var5.bind(var9)(var4);
                        var5 = var8.getCachedApplicationSection;
                        var4 = {};
                        var4.channel = var3;
                        var4.type = var1;
                        var3 = _closure1_slot0;
                        var1 = 15;
                        var1 = var10[var1];
                        var1 = var3.bind(var9)(var1);
                        var1 = var1.ApplicationCommandType;
                        var3 = var1.CHAT;
                        var1 = var7.applicationId;
                        var4 = var5.bind(var8)(var4, var3, var1);
                        var3 = var0 == var4;
                        var1 = null;
                        if (var3) {
                            _fun90843_ip = 641;
                            continue _fun90843
                        }
                    case 596:
                        var3 = {};
                        var5 = {};
                        var18 = var5;
                        var17 = var7;
                        var7 = copyDataProperties(var18, var17);
                        var6 = _closure1_slot15;
                        var7 = var6.FULL_COMMAND;
                        var6 = 'preferredCommandType';
                        var5[var6] = var7;
                        var3.command = var5;
                        var3.section = var4;
                        var1 = var3;
                    case 641:
                        return var1;
                    case 643:
                        return var0;
                    case 645:
                        var1 = {};
                        var1.command = var2;
                        var2 = arg3;
                        var1.section = var2;
                        return var1;
                    case 661:
                        return var0;
                }
            };
            var2.getCurrentCommand = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun90847: for (var _fun90847_ip = 0;;) switch (_fun90847_ip) {
                    case 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var1 = arg0;
                        if (var1) {
                            _fun90847_ip = 19;
                            continue _fun90847
                        }
                    case 15:
                        var1 = null;
                        return var1;
                    case 19:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 18;
                        var1 = var4[var1];
                        var4 = undefined;
                        var6 = var2.bind(var4)(var1);
                        var2 = var6.findLast;
                        var1 = global;
                        var8 = var1.Array;
                        var7 = var8.from;
                        var1 = _closure3_slot0;
                        var9 = var1.optionValueNodes;
                        var1 = var9.values;
                        var1 = var1.bind(var9)();
                        var1 = var7.bind(var8)(var1);
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.location;
                            var0 = _closure4_slot0;
                            var0 = var1 <= var0;
                            return var0;
                        };
                        var2 = var2.bind(var6)(var1, var0);
                        var1 = null;
                        var6 = var1 == var2;
                        var0 = undefined;
                        if (var6) {
                            _fun90847_ip = 134;
                            continue _fun90847
                        }
                    case 114:
                        var6 = var2.data;
                        var7 = var1 == var6;
                        var0 = undefined;
                        if (var7) {
                            _fun90847_ip = 134;
                            continue _fun90847
                        }
                    case 128:
                        var0 = var6.option;
                    case 134:
                        if (!(var1 != var2)) {
                            _fun90847_ip = 225;
                            continue _fun90847
                        }
                    case 138:
                        if (!(var1 != var0)) {
                            _fun90847_ip = 225;
                            continue _fun90847
                        }
                    case 142:
                        var5 = _closure3_slot0;
                        var6 = var5.preferredOptionValues;
                        var5 = var5.props;
                        var5 = var5.channel;
                        var5 = var5.id;
                        var6 = var6[var5];
                        var5 = var1 == var6;
                        var4 = undefined;
                        if (var5) {
                            _fun90847_ip = 189;
                            continue _fun90847
                        }
                    case 180:
                        var5 = var0.name;
                        var4 = var6[var5];
                    case 189:
                        if (!(var1 != var4)) {
                            _fun90847_ip = 227;
                            continue _fun90847
                        }
                    case 193:
                        var5 = var4.displayText;
                        var4 = '';
                        if (!(var4 !== var5)) {
                            _fun90847_ip = 227;
                            continue _fun90847
                        }
                    case 207:
                        var4 = var2.location;
                        var2 = var2.length;
                        var2 = var4 + var2;
                        if (!(!(var2 > var3))) {
                            _fun90847_ip = 227;
                            continue _fun90847
                        }
                    case 225:
                        return var1;
                    case 227:
                        return var0;
                }
            };
            var2.getCurrentOption = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun90849: for (var _fun90849_ip = 0;;) switch (_fun90849_ip) {
                    case 0:
                        var14 = arg1;
                        var0 = arg0;
                        var0 = var0.options;
                        var13 = null;
                        if (!(var13 != var0)) {
                            _fun90849_ip = 370;
                            continue _fun90849
                        }
                    case 20:
                        var0 = {};
                        var2 = _closure1_slot16;
                        var1 = _closure3_slot0;
                        var1 = var1.optionValueNodes;
                        var10 = undefined;
                        var9 = var2.bind(var10)(var1);
                        var2 = var9.bind(var10)();
                        var1 = var2.done;
                        var8 = 1;
                        var7 = 8;
                        var6 = 2;
                        var5 = 0;
                        var4 = var2;
                        var3 = undefined;
                        var2 = undefined;
                        if (var1) {
                            _fun90849_ip = 368;
                            continue _fun90849
                        }
                    case 82:
                        var15 = var4.value;
                        var1 = _closure1_slot4;
                        var1 = var1.bind(var10)(var15, var6);
                        var17 = var1[var5];
                        var16 = var1[var8];
                        var1 = var16.data;
                        var18 = var13 == var1;
                        var15 = undefined;
                        if (var18) {
                            _fun90849_ip = 124;
                            continue _fun90849
                        }
                    case 119:
                        var15 = var1.type;
                    case 124:
                        var18 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var7];
                        var1 = var18.bind(var10)(var1);
                        var1 = var1.ChatInputParseResultDataType;
                        var1 = var1.COMMAND_OPTION;
                        if (!(var15 === var1)) {
                            _fun90849_ip = 350;
                            continue _fun90849
                        }
                    case 160:
                        var1 = _closure3_slot0;
                        var15 = var1.preferredOptionValues;
                        var1 = var1.props;
                        var1 = var1.channel;
                        var1 = var1.id;
                        var18 = var15[var1];
                        var19 = var13 == var18;
                        var15 = var18;
                        var1 = undefined;
                        if (var19) {
                            _fun90849_ip = 226;
                            continue _fun90849
                        }
                    case 201:
                        var19 = var18[var17];
                        var18 = var13 == var19;
                        var15 = var19;
                        var1 = undefined;
                        if (var18) {
                            _fun90849_ip = 226;
                            continue _fun90849
                        }
                    case 217:
                        var1 = var19.optionValue;
                        var15 = var19;
                    case 226:
                        if (!(var13 == var1)) {
                            _fun90849_ip = 332;
                            continue _fun90849
                        }
                    case 230:
                        var18 = var16.data;
                        var20 = var18.option;
                        var19 = var14.substring;
                        var21 = var16.location;
                        var18 = var20.displayName;
                        var18 = var18.length;
                        var18 = var21 + var18;
                        var18 = var18 + var8;
                        var21 = var16.location;
                        var16 = var16.length;
                        var16 = var21 + var16;
                        var19 = var19.bind(var14)(var18, var16);
                        var16 = _closure3_slot0;
                        var18 = var16.optionValueParser;
                        var16 = var18.parse;
                        var18 = var16.bind(var18)(var19, var20);
                        var16 = new Array(1);
                        var16[0] = var18;
                        var0[var17] = var16;
                        var3 = var15;
                        var2 = var1;
                        _fun90849_ip = 350;
                        continue _fun90849;
                    case 332:
                        var16 = new Array(1);
                        var16[0] = var1;
                        var0[var17] = var16;
                        var3 = var15;
                        var2 = var1;
                    case 350:
                        var15 = var9.bind(var10)();
                        var1 = var15.done;
                        var4 = var15;
                        if (!var1) {
                            _fun90849_ip = 82;
                            continue _fun90849
                        }
                    case 368:
                        return var0;
                    case 370:
                        var0 = {};
                        return var0;
                }
            };
            var2.getAllCommandOptionValues = var4;
            var4 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var3
                _fun90850: for (var _fun90850_ip = 0;;) switch (_fun90850_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var2 = arg2;
                        var5 = var3.startsWith;
                        var8 = _closure1_slot12;
                        var0 = global;
                        var4 = var0.HermesInternal;
                        var7 = var4.concat;
                        var4 = '';
                        var4 = var7.bind(var4)(var8, var2);
                        var4 = var5.bind(var3)(var4);
                        if (!var4) {
                            _fun90850_ip = 137;
                            continue _fun90850
                        }
                    case 53:
                        var5 = var3.length;
                        var4 = var2.length;
                        var8 = 1;
                        var4 = var4 + var8;
                        if (!(var5 > var4)) {
                            _fun90850_ip = 137;
                            continue _fun90850
                        }
                    case 74:
                        var7 = _closure1_slot11;
                        var5 = var7.test;
                        var4 = var2.length;
                        var4 = var4 + var8;
                        var4 = var3[var4];
                        var4 = var5.bind(var7)(var4);
                        if (!var4) {
                            _fun90850_ip = 137;
                            continue _fun90850
                        }
                    case 104:
                        var4 = arg3;
                        if (var4) {
                            _fun90850_ip = 141;
                            continue _fun90850
                        }
                    case 110:
                        var4 = arg4;
                        if (!var4) {
                            _fun90850_ip = 137;
                            continue _fun90850
                        }
                    case 116:
                        var3 = var3.length;
                        var4 = var2.length;
                        var2 = 2;
                        var2 = var4 + var2;
                        if (!(!(var3 > var2))) {
                            _fun90850_ip = 141;
                            continue _fun90850
                        }
                    case 137:
                        var2 = false;
                        return var2;
                    case 141:
                        var3 = _closure1_slot14;
                        var4 = var0.Set;
                        var0 = _closure3_slot0;
                        var2 = var0.optionValueNodes;
                        var0 = var2.keys;
                        var13 = var0.bind(var2)();
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var14 = var2;
                        var0 = new var14[var4](var13, var12);
                        var2 = var0 instanceof Object ? var0 : var2;
                        var5 = undefined;
                        var0 = true;
                        var4 = var3.bind(var5)(var6, var2, var0);
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun90850_ip = 254;
                            continue _fun90850
                        }
                    case 210:
                        var3 = _closure3_slot0;
                        var2 = var3.insertOrJumpCommandOption;
                        var1 = var6.displayName;
                        var7 = var1.length;
                        var1 = 2;
                        var12 = var7 + var1;
                        var14 = var3;
                        var13 = var4;
                        var11 = true;
                        var10 = undefined;
                        var9 = var6;
                        var1 = var14[var2](var13, var12, var11, var10, var9, var8);
                    case 254:
                        return var0;
                }
            };
            var2.insertFirstOptionIfValid = var4;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun90851: for (var _fun90851_ip = 0;;) switch (_fun90851_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = arg1;
                        var8 = arguments[2];
                        var5 = arguments[3];
                        var14 = arguments[4];
                        var0 = undefined;
                        if (!(var8 === var0)) {
                            _fun90851_ip = 23;
                            continue _fun90851
                        }
                    case 21:
                        var8 = false;
                    case 23:
                        var4 = null;
                        if (!(var4 == var14)) {
                            _fun90851_ip = 47;
                            continue _fun90851
                        }
                    case 29:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var14 = var2.activeCommand;
                    case 47:
                        if (!(var4 != var14)) {
                            _fun90851_ip = 1413;
                            continue _fun90851
                        }
                    case 54:
                        var6 = _closure3_slot0;
                        var7 = var6.props;
                        var10 = var7.text;
                        var9 = var7.selectionStart;
                        var12 = var6.optionValueNodes;
                        var7 = var4 == var12;
                        var6 = undefined;
                        if (var7) {
                            _fun90851_ip = 107;
                            continue _fun90851
                        }
                    case 92:
                        var11 = var12.get;
                        var7 = var1.name;
                        var6 = var11.bind(var12)(var7);
                    case 107:
                        var11 = var4 == var5;
                        var7 = undefined;
                        if (var11) {
                            _fun90851_ip = 122;
                            continue _fun90851
                        }
                    case 116:
                        var7 = var5.displayText;
                    case 122:
                        if (!(var4 != var7)) {
                            _fun90851_ip = 964;
                            continue _fun90851
                        }
                    case 129:
                        if (!(var4 == var6)) {
                            _fun90851_ip = 145;
                            continue _fun90851
                        }
                    case 133:
                        var17 = var9;
                        if (!(var4 != var3)) {
                            _fun90851_ip = 143;
                            continue _fun90851
                        }
                    case 140:
                        var17 = var3;
                    case 143:
                        _fun90851_ip = 150;
                        continue _fun90851;
                    case 145:
                        var17 = var6.location;
                    case 150:
                        var7 = var4 != var6;
                        var16 = 0;
                        if (!var7) {
                            _fun90851_ip = 164;
                            continue _fun90851
                        }
                    case 159:
                        var16 = var6.length;
                    case 164:
                        var20 = var4 != var10;
                        if (!var20) {
                            _fun90851_ip = 180;
                            continue _fun90851
                        }
                    case 171:
                        var7 = var10.length;
                        var20 = var17 <= var7;
                    case 180:
                        if (!var20) {
                            _fun90851_ip = 242;
                            continue _fun90851
                        }
                    case 183:
                        var12 = _closure1_slot11;
                        var11 = var12.test;
                        var7 = global;
                        var19 = var7.Math;
                        var15 = var19.min;
                        var21 = 1;
                        var13 = var17 - var21;
                        var7 = var10.length;
                        var7 = var7 - var21;
                        var7 = var15.bind(var19)(var13, var7);
                        var7 = var10[var7];
                        var7 = var11.bind(var12)(var7);
                        var20 = !var7;
                    case 242:
                        var7 = global;
                        var13 = var7.Set;
                        var11 = _closure3_slot0;
                        var12 = var11.optionValueNodes;
                        var11 = var12.keys;
                        var30 = var11.bind(var12)();
                        var12 = var13.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var13
                            }
                        });
                        var31 = var12;
                        var11 = new var31[var13](var30, var29);
                        var12 = var11 instanceof Object ? var11 : var12;
                        var13 = var12.add;
                        var11 = var1.name;
                        var11 = var13.bind(var12)(var11);
                        var11 = _closure1_slot14;
                        var11 = var11.bind(var0)(var14, var12);
                        var12 = var4 != var5;
                        if (!var12) {
                            _fun90851_ip = 404;
                            continue _fun90851
                        }
                    case 324:
                        var15 = var17 + var16;
                        var14 = var10.length;
                        var14 = var15 !== var14;
                        if (!var14) {
                            _fun90851_ip = 394;
                            continue _fun90851
                        }
                    case 340:
                        var21 = _closure1_slot11;
                        var19 = var21.test;
                        var24 = var7.Math;
                        var23 = var24.min;
                        var22 = var17 + var16;
                        var25 = var10.length;
                        var15 = 1;
                        var15 = var25 - var15;
                        var15 = var23.bind(var24)(var22, var15);
                        var15 = var10[var15];
                        var15 = var19.bind(var21)(var15);
                        var14 = !var15;
                    case 394:
                        if (var14) {
                            _fun90851_ip = 401;
                            continue _fun90851
                        }
                    case 397:
                        var14 = var4 != var11;
                    case 401:
                        var12 = var14;
                    case 404:
                        var15 = var4 == var5;
                        var14 = undefined;
                        if (var15) {
                            _fun90851_ip = 419;
                            continue _fun90851
                        }
                    case 413:
                        var14 = var5.displayText;
                    case 419:
                        var15 = '';
                        if (!(var15 === var14)) {
                            _fun90851_ip = 455;
                            continue _fun90851
                        }
                    case 427:
                        var21 = var1.displayName;
                        var14 = var7.HermesInternal;
                        var19 = var14.concat;
                        var14 = ':';
                        var14 = var19.bind(var15)(var21, var14);
                        _fun90851_ip = 488;
                        continue _fun90851;
                    case 455:
                        var23 = var1.displayName;
                        var22 = var5.displayText;
                        var19 = var7.HermesInternal;
                        var21 = var19.concat;
                        var19 = ':';
                        var14 = var21.bind(var15)(var23, var19, var22);
                    case 488:
                        var21 = var15;
                        if (!var20) {
                            _fun90851_ip = 500;
                            continue _fun90851
                        }
                    case 494:
                        var21 = ' ';
                    case 500:
                        var19 = var15;
                        if (!var12) {
                            _fun90851_ip = 512;
                            continue _fun90851
                        }
                    case 506:
                        var19 = ' ';
                    case 512:
                        var12 = var7.HermesInternal;
                        var12 = var12.concat;
                        var12 = var12.bind(var15)(var21, var14, var19);
                        if (!(var4 == var11)) {
                            _fun90851_ip = 693;
                            continue _fun90851
                        }
                    case 537:
                        var23 = _closure3_slot0;
                        var19 = var23.ref;
                        var22 = var19.current;
                        var21 = var22.replaceRange;
                        var19 = {};
                        var19.location = var17;
                        var19.length = var16;
                        var19.text = var12;
                        var24 = {};
                        var26 = _closure1_slot0;
                        var27 = _closure1_slot3;
                        var25 = 8;
                        var25 = var27[var25];
                        var25 = var26.bind(var0)(var25);
                        var25 = var25.ChatInputNodeType;
                        var25 = var25.COMMAND_OPTION_WITH_VALUE;
                        var24.type = var25;
                        var25 = var23.styles;
                        var23 = var25.commandOption;
                        var23 = var23.bind(var25)();
                        var24.style = var23;
                        var23 = 0;
                        if (!var20) {
                            _fun90851_ip = 637;
                            continue _fun90851
                        }
                    case 634:
                        var23 = 1;
                    case 637:
                        var24.location = var23;
                        var23 = var14.length;
                        var24.length = var23;
                        var23 = new Array(1);
                        var23[0] = var24;
                        var19.nodes = var23;
                        var19.keepCursorPosition = var8;
                        var23 = _closure3_slot0;
                        var23 = var23.editId;
                        var19.editId = var23;
                        var19 = var21.bind(var22)(var19);
                        _fun90851_ip = 1350;
                        continue _fun90851;
                    case 693:
                        var21 = var11.displayName;
                        var11 = var7.HermesInternal;
                        var19 = var11.concat;
                        var11 = ':';
                        var11 = var19.bind(var15)(var21, var11);
                        var7 = var7.HermesInternal;
                        var7 = var7.concat;
                        var15 = var7.bind(var15)(var12, var11);
                        var7 = {};
                        var22 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var19 = 8;
                        var21 = var21[var19];
                        var21 = var22.bind(var0)(var21);
                        var21 = var21.ChatInputNodeType;
                        var21 = var21.COMMAND_OPTION_WITH_VALUE;
                        var7.type = var21;
                        var21 = _closure3_slot0;
                        var22 = var21.styles;
                        var21 = var22.commandOption;
                        var21 = var21.bind(var22)();
                        var7.style = var21;
                        var18 = 0;
                        if (!var20) {
                            _fun90851_ip = 806;
                            continue _fun90851
                        }
                    case 803:
                        var18 = 1;
                    case 806:
                        var7.location = var18;
                        var14 = var14.length;
                        var7.length = var14;
                        var14 = new Array(2);
                        var14[0] = var7;
                        var7 = {};
                        var18 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var13 = var13[var19];
                        var13 = var18.bind(var0)(var13);
                        var13 = var13.ChatInputNodeType;
                        var13 = var13.COMMAND_OPTION;
                        var7.type = var13;
                        var13 = _closure3_slot0;
                        var19 = var13.styles;
                        var18 = var19.commandOption;
                        var18 = var18.bind(var19)();
                        var7.style = var18;
                        var12 = var12.length;
                        var7.location = var12;
                        var11 = var11.length;
                        var7.length = var11;
                        var14[1] = var7;
                        var7 = var13.ref;
                        var12 = var7.current;
                        var11 = var12.replaceRange;
                        var7 = {};
                        var7.location = var17;
                        var7.length = var16;
                        var7.text = var15;
                        var7.nodes = var14;
                        var13 = var13.editId;
                        var7.editId = var13;
                        var7 = var11.bind(var12)(var7);
                        _fun90851_ip = 1350;
                        continue _fun90851;
                    case 964:
                        if (!(var4 != var6)) {
                            _fun90851_ip = 1048;
                            continue _fun90851
                        }
                    case 968:
                        var7 = _closure3_slot0;
                        var7 = var7.ref;
                        var12 = var7.current;
                        var11 = var12.setSelectedRange;
                        var13 = var6.location;
                        var7 = var1.displayName;
                        var7 = var7.length;
                        var7 = var13 + var7;
                        var13 = 1;
                        var7 = var7 + var13;
                        var14 = var6.length;
                        var6 = var1.displayName;
                        var6 = var6.length;
                        var6 = var14 - var6;
                        var6 = var6 - var13;
                        var6 = var11.bind(var12)(var7, var6);
                        _fun90851_ip = 1350;
                        continue _fun90851;
                    case 1048:
                        if (!(var4 != var3)) {
                            _fun90851_ip = 1055;
                            continue _fun90851
                        }
                    case 1052:
                        var9 = var3;
                    case 1055:
                        var11 = var4 != var10;
                        if (!var11) {
                            _fun90851_ip = 1071;
                            continue _fun90851
                        }
                    case 1062:
                        var3 = var10.length;
                        var11 = var9 <= var3;
                    case 1071:
                        if (!var11) {
                            _fun90851_ip = 1133;
                            continue _fun90851
                        }
                    case 1074:
                        var7 = _closure1_slot11;
                        var6 = var7.test;
                        var3 = global;
                        var14 = var3.Math;
                        var13 = var14.min;
                        var15 = 1;
                        var12 = var9 - var15;
                        var3 = var10.length;
                        var3 = var3 - var15;
                        var3 = var13.bind(var14)(var12, var3);
                        var3 = var10[var3];
                        var3 = var6.bind(var7)(var3);
                        var11 = !var3;
                    case 1133:
                        var3 = _closure3_slot0;
                        var3 = var3.ref;
                        var7 = var3.current;
                        var6 = var7.replaceRange;
                        var3 = {};
                        var3.location = var9;
                        var9 = 0;
                        var3.length = var9;
                        var15 = '';
                        var14 = var15;
                        if (!var11) {
                            _fun90851_ip = 1181;
                            continue _fun90851
                        }
                    case 1175:
                        var14 = ' ';
                    case 1181:
                        var13 = var1.displayName;
                        var10 = global;
                        var10 = var10.HermesInternal;
                        var12 = var10.concat;
                        var10 = ':';
                        var10 = var12.bind(var15)(var14, var13, var10);
                        var3.text = var10;
                        var10 = {};
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var12 = 8;
                        var12 = var14[var12];
                        var12 = var13.bind(var0)(var12);
                        var12 = var12.ChatInputNodeType;
                        var12 = var12.COMMAND_OPTION;
                        var10.type = var12;
                        var12 = _closure3_slot0;
                        var13 = var12.styles;
                        var12 = var13.commandOption;
                        var12 = var12.bind(var13)();
                        var10.style = var12;
                        var9 = 0;
                        if (!var11) {
                            _fun90851_ip = 1287;
                            continue _fun90851
                        }
                    case 1284:
                        var9 = 1;
                    case 1287:
                        var10.location = var9;
                        var9 = var1.displayName;
                        var11 = var9.length;
                        var9 = 1;
                        var9 = var11 + var9;
                        var10.length = var9;
                        var9 = new Array(1);
                        var9[0] = var10;
                        var3.nodes = var9;
                        var3.keepCursorPosition = var8;
                        var8 = _closure3_slot0;
                        var8 = var8.editId;
                        var3.editId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 1350:
                        var3 = var4 != var5;
                        if (!var3) {
                            _fun90851_ip = 1363;
                            continue _fun90851
                        }
                    case 1357:
                        var3 = var5.preferred;
                    case 1363:
                        if (!var3) {
                            _fun90851_ip = 1413;
                            continue _fun90851
                        }
                    case 1366:
                        var3 = _closure3_slot0;
                        if (!(var4 != var3)) {
                            _fun90851_ip = 1413;
                            continue _fun90851
                        }
                    case 1374:
                        var4 = _closure3_slot0;
                        var3 = var4.setPreferredOptionValue;
                        var2 = var4.props;
                        var2 = var2.channel;
                        var2 = var2.id;
                        var1 = var1.name;
                        var1 = var3.bind(var4)(var2, var1, var5);
                    case 1413:
                        return var0;
                }
            };
            var2.insertOrJumpCommandOption = var4;
            var3 = function(arg0, arg1, arg2) { // Environment: var3
                _fun90852: for (var _fun90852_ip = 0;;) switch (_fun90852_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = arg1;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var3 = var0.activeCommand;
                        var9 = null;
                        if (!(var9 == var3)) {
                            _fun90852_ip = 382;
                            continue _fun90852
                        }
                    case 35:
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot3;
                        var10 = 23;
                        var0 = var0[var10];
                        var11 = undefined;
                        var2 = var2.bind(var11)(var0);
                        var0 = var2.getPrefix;
                        var2 = var0.bind(var2)(var4);
                        var0 = _closure1_slot12;
                        var7 = null;
                        if (!(var2 === var0)) {
                            _fun90852_ip = 109;
                            continue _fun90852
                        }
                    case 81:
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot3;
                        var0 = var0[var10];
                        var2 = var2.bind(var11)(var0);
                        var0 = var2.getQuery;
                        var7 = var0.bind(var2)(var4);
                    case 109:
                        if (!(var9 != var7)) {
                            _fun90852_ip = 264;
                            continue _fun90852
                        }
                    case 116:
                        var2 = _closure1_slot2;
                        var13 = _closure1_slot3;
                        var0 = 11;
                        var0 = var13[var0];
                        var10 = var2.bind(var11)(var0);
                        var4 = var10.getCachedResults;
                        var2 = {};
                        var2.channel = var5;
                        var0 = 'channel';
                        var2.type = var0;
                        var12 = _closure1_slot0;
                        var0 = 15;
                        var0 = var13[var0];
                        var0 = var12.bind(var11)(var0);
                        var0 = var0.ApplicationCommandType;
                        var0 = var0.CHAT;
                        var0 = var4.bind(var10)(var2, var0, var7);
                        var2 = var0.commands;
                        var4 = var0.sections;
                        if (!(var9 != var2)) {
                            _fun90852_ip = 264;
                            continue _fun90852
                        }
                    case 207:
                        var10 = var2.length;
                        var0 = 0;
                        if (!(var10 > var0)) {
                            _fun90852_ip = 264;
                            continue _fun90852
                        }
                    case 218:
                        var10 = var2[var0];
                        var13 = var10.inputType;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var12 = 12;
                        var10 = var10[var12];
                        var10 = var14.bind(var11)(var10);
                        var10 = var10.ApplicationCommandInputType;
                        var10 = var10.PLACEHOLDER;
                        if (!(var13 === var10)) {
                            _fun90852_ip = 268;
                            continue _fun90852
                        }
                    case 264:
                        var10 = false;
                        return var10;
                    case 268:
                        var10 = var2[var0];
                        var _closure4_slot1 = var10;
                        var2 = var4.find;
                        var0 = function(arg0) { // Environment: var6
                            _fun90854: for (var _fun90854_ip = 0;;) switch (_fun90854_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.application;
                                    var1 = null;
                                    var2 = var1 == var0;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun90854_ip = 24;
                                        continue _fun90854
                                    }
                                case 19:
                                    var1 = var0.id;
                                case 24:
                                    var0 = _closure4_slot1;
                                    var0 = var0.applicationId;
                                    var0 = var1 === var0;
                                    return var0;
                            }
                        };
                        var13 = var2.bind(var4)(var0);
                        var4 = _closure3_slot0;
                        var2 = var4.setCommand;
                        var0 = {};
                        var14 = var5.id;
                        var0.channelId = var14;
                        var0.command = var10;
                        var14 = var9 != var13;
                        var10 = null;
                        if (!var14) {
                            _fun90852_ip = 331;
                            continue _fun90852
                        }
                    case 328:
                        var10 = var13;
                    case 331:
                        var0.section = var10;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var12];
                        var8 = var10.bind(var11)(var8);
                        var8 = var8.ApplicationCommandTriggerLocations;
                        var8 = var8.DISCOVERY;
                        var0.location = var8;
                        var0.query = var7;
                        var0 = var2.bind(var4)(var0);
                        var0 = true;
                        return var0;
                    case 382:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 19;
                        var4 = var4[var2];
                        var2 = undefined;
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.getFirstInvalidOption;
                        var4 = _closure3_slot0;
                        var4 = var4.optionValidationResults;
                        if (!(var9 == var4)) {
                            _fun90852_ip = 429;
                            continue _fun90852
                        }
                    case 427:
                        var4 = {};
                    case 429:
                        var10 = var7.bind(var8)(var3, var4);
                        var8 = _closure1_slot8;
                        var7 = var8.getOptionStates;
                        var4 = var5.id;
                        var11 = var7.bind(var8)(var4);
                        var4 = {};
                        var _closure4_slot0 = var4;
                        var7 = global;
                        var8 = var7.Object;
                        var7 = var8.entries;
                        var8 = var7.bind(var8)(var11);
                        var7 = var8.forEach;
                        var6 = function(arg0) { // Environment: var6
                            _fun90853: for (var _fun90853_ip = 0;;) switch (_fun90853_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = var5[Symbol.iterator];
                                    var5 = var2().next;
                                    var1 = var5().value;
                                    var3 = var2;
                                    var0 = undefined;
                                    var4 = var3 === var0;
                                    var3 = undefined;
                                    if (var4) {
                                        _fun90853_ip = 27;
                                        continue _fun90853
                                    }
                                case 24:
                                    var3 = var1;
                                case 27:
                                    var1 = undefined;
                                    if (var4) {
                                        _fun90853_ip = 57;
                                        continue _fun90853
                                    }
                                case 32:
                                    var6 = var5().value;
                                    var5 = var2;
                                    var5 = var5 === var0;
                                    var1 = undefined;
                                    var4 = var5;
                                    if (var5) {
                                        _fun90853_ip = 57;
                                        continue _fun90853
                                    }
                                case 51:
                                    var1 = var6;
                                    var4 = var5;
                                case 57:
                                    if (var4) {
                                        _fun90853_ip = 63;
                                        continue _fun90853
                                    }
                                case 60:
                                    var2.return();
                                case 63:
                                    var4 = var1.optionValue;
                                    var2 = null;
                                    if (!(var2 != var4)) {
                                        _fun90853_ip = 92;
                                        continue _fun90853
                                    }
                                case 75:
                                    var2 = _closure4_slot0;
                                    var1 = var1.optionValue;
                                    var2[var3] = var1;
                                case 92:
                                    return var0;
                            }
                        };
                        var6 = var7.bind(var8)(var6);
                        if (!(var9 != var10)) {
                            _fun90852_ip = 747;
                            continue _fun90852
                        }
                    case 504:
                        var6 = _closure3_slot0;
                        var1 = var6.insertOrJumpCommandOption;
                        var1 = var1.bind(var6)(var10);
                        var1 = var6.updateValidationResults;
                        var1 = var1.bind(var6)();
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 21;
                        var8 = var7[var1];
                        var11 = var6.bind(var2)(var8);
                        var8 = var11.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var6.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.NOTIFICATION_ERROR;
                        var1 = var8.bind(var11)(var1);
                        var1 = 22;
                        var1 = var7[var1];
                        var8 = var6.bind(var2)(var1);
                        var7 = var8.trackWithMetadata;
                        var1 = _closure1_slot9;
                        var6 = var1.APPLICATION_COMMAND_VALIDATION_FAILED;
                        var1 = {};
                        var12 = var9 == var3;
                        var11 = undefined;
                        if (var12) {
                            _fun90852_ip = 627;
                            continue _fun90852
                        }
                    case 622:
                        var11 = var3.applicationId;
                    case 627:
                        var1.application_id = var11;
                        var12 = var9 == var3;
                        var11 = undefined;
                        if (var12) {
                            _fun90852_ip = 661;
                            continue _fun90852
                        }
                    case 641:
                        var12 = var3.rootCommand;
                        var13 = var9 == var12;
                        var11 = undefined;
                        if (var13) {
                            _fun90852_ip = 661;
                            continue _fun90852
                        }
                    case 656:
                        var11 = var12.id;
                    case 661:
                        var1.command_id = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 15;
                        var11 = var13[var11];
                        var11 = var12.bind(var2)(var11);
                        var12 = var11.ApplicationCommandOptionType;
                        var13 = var10.type;
                        var14 = var9 != var13;
                        var11 = 3;
                        if (!var14) {
                            _fun90852_ip = 710;
                            continue _fun90852
                        }
                    case 707:
                        var11 = var13;
                    case 710:
                        var11 = var12[var11];
                        var1.argument_type = var11;
                        var11 = var9 == var10;
                        var9 = undefined;
                        if (var11) {
                            _fun90852_ip = 734;
                            continue _fun90852
                        }
                    case 728:
                        var9 = var10.required;
                    case 734:
                        var1.is_required = var9;
                        var1 = var7.bind(var8)(var6, var1);
                        _fun90852_ip = 789;
                        continue _fun90852;
                    case 747:
                        var1 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var0 = 20;
                        var0 = var6[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.parseOptionValuesForSend;
                        var1 = var0.bind(var1)(var5, var3, var4);
                        var0 = arg2;
                        var0 = var0.bind(var2)(var3, var1);
                    case 789:
                        var0 = true;
                        return var0;
                }
            };
            var2.sendCommand = var3;
            var3 = var1.props;
            var2.props = var3;
            var3 = var1.ref;
            var2.ref = var3;
            var3 = var1.optionValueParser;
            var2.optionValueParser = var3;
            var1 = var1.styles;
            var2.styles = var1;
            var1 = var2.addCommandOptionParserRules;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setPreferredOptionValue';
        var0.key = var1;
        var1 = function(arg0, arg1, arg2) { // Original name: setPreferredOptionValue, environment: var4
            _fun90855: for (var _fun90855_ip = 0;;) switch (_fun90855_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.preferredOptionValues;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun90855_ip = 34;
                        continue _fun90855
                    }
                case 22:
                    var3 = var0.preferredOptionValues;
                    var2 = {};
                    var3[var1] = var2;
                case 34:
                    var0 = var0.preferredOptionValues;
                    var2 = var0[var1];
                    var1 = arg2;
                    var0 = arg1;
                    var2[var0] = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'mergePropsAndUpdate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: mergePropsAndUpdate, environment: var4
            _fun90856: for (var _fun90856_ip = 0;;) switch (_fun90856_ip) {
                case 0:
                    var8 = arg0;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var8;
                    var0 = var5.props;
                    var15 = var0.text;
                    var4 = var0.selectionStart;
                    var3 = var0.selectionEnd;
                    var1 = var0.focused;
                    var2 = var0.queryCommands;
                    var9 = var0.editId;
                    var12 = var0.channel;
                    var7 = var0.lastCommandAutocompleteResponseNonce;
                    var0 = var8.editId;
                    var0 = var9 !== var0;
                    if (!var0) {
                        _fun90856_ip = 92;
                        continue _fun90856
                    }
                case 80:
                    var10 = var8.editId;
                    var6 = null;
                    var0 = var6 != var10;
                case 92:
                    if (!var0) {
                        _fun90856_ip = 107;
                        continue _fun90856
                    }
                case 95:
                    var0 = var8.editId;
                    var5.editId = var0;
                case 107:
                    var0 = var8.text;
                    var13 = var15 !== var0;
                    var _closure3_slot2 = var13;
                    var0 = var8.selectionStart;
                    var17 = var4 !== var0;
                    if (var17) {
                        _fun90856_ip = 143;
                        continue _fun90856
                    }
                case 133:
                    var0 = var8.selectionEnd;
                    var17 = var3 !== var0;
                case 143:
                    var0 = var8.focused;
                    var16 = var1 !== var0;
                    var11 = var5.activeCommand;
                    var1 = var5.activeCommandSection;
                    if (var13) {
                        _fun90856_ip = 201;
                        continue _fun90856
                    }
                case 168:
                    var0 = var8.queryCommands;
                    if (!(var2 === var0)) {
                        _fun90856_ip = 201;
                        continue _fun90856
                    }
                case 178:
                    var2 = var8.preferredCommand;
                    var0 = null;
                    var0 = var0 != var2;
                    var10 = var1;
                    var2 = false;
                    if (!var0) {
                        _fun90856_ip = 1157;
                        continue _fun90856
                    }
                case 201:
                    var0 = var8.queryCommands;
                    var5.contextCommands = var0;
                    var4 = var5.preferredCommand;
                    var0 = var8.preferredCommand;
                    var26 = null;
                    if (!(var26 != var0)) {
                        _fun90856_ip = 254;
                        continue _fun90856
                    }
                case 231:
                    var0 = var8.preferredCommand;
                    var5.preferredCommand = var0;
                    var0 = var8.location;
                    var5.location = var0;
                case 254:
                    var3 = var8.commandsDisabled;
                    var0 = null;
                    if (var3) {
                        _fun90856_ip = 370;
                        continue _fun90856
                    }
                case 265:
                    if (var13) {
                        _fun90856_ip = 332;
                        continue _fun90856
                    }
                case 268:
                    var3 = var5.preferredCommand;
                    if (!(var26 != var3)) {
                        _fun90856_ip = 332;
                        continue _fun90856
                    }
                case 278:
                    var3 = var5.preferredCommand;
                    var6 = var3.preferredCommandType;
                    var3 = _closure1_slot15;
                    var3 = var3.FULL_COMMAND;
                    if (!(var6 === var3)) {
                        _fun90856_ip = 332;
                        continue _fun90856
                    }
                case 307:
                    var3 = {};
                    var6 = var5.preferredCommand;
                    var3.command = var6;
                    var6 = var5.preferredCommandSection;
                    var3.section = var6;
                    _fun90856_ip = 367;
                    continue _fun90856;
                case 332:
                    var21 = var5.getCurrentCommand;
                    var40 = var8.text;
                    var39 = var8.channel;
                    var38 = var5.preferredCommand;
                    var37 = var5.preferredCommandSection;
                    var41 = var5;
                    var3 = var41[var21](var40, var39, var38, var37, var36);
                case 367:
                    var0 = var3;
                case 370:
                    var6 = var26 != var0;
                    var3 = null;
                    if (!var6) {
                        _fun90856_ip = 390;
                        continue _fun90856
                    }
                case 379:
                    var3 = var0.command;
                    var1 = var0.section;
                case 390:
                    var0 = var5.preferredCommand;
                    var18 = var26 == var0;
                    var20 = undefined;
                    var6 = undefined;
                    if (var18) {
                        _fun90856_ip = 412;
                        continue _fun90856
                    }
                case 407:
                    var6 = var0.id;
                case 412:
                    var18 = var26 == var3;
                    var0 = undefined;
                    if (var18) {
                        _fun90856_ip = 426;
                        continue _fun90856
                    }
                case 421:
                    var0 = var3.id;
                case 426:
                    if (!(var6 === var0)) {
                        _fun90856_ip = 511;
                        continue _fun90856
                    }
                case 430:
                    var0 = var5.preferredCommand;
                    var6 = var26 == var0;
                    var18 = undefined;
                    if (var6) {
                        _fun90856_ip = 451;
                        continue _fun90856
                    }
                case 445:
                    var18 = var0.preferredCommandType;
                case 451:
                    var0 = _closure1_slot15;
                    var0 = var0.PARTIAL_COMMAND;
                    var0 = var18 === var0;
                    if (!var0) {
                        _fun90856_ip = 500;
                        continue _fun90856
                    }
                case 471:
                    var19 = var26 == var3;
                    var18 = undefined;
                    if (var19) {
                        _fun90856_ip = 486;
                        continue _fun90856
                    }
                case 480:
                    var18 = var3.preferredCommandType;
                case 486:
                    var6 = _closure1_slot15;
                    var6 = var6.FULL_COMMAND;
                    var0 = var18 === var6;
                case 500:
                    if (!var0) {
                        _fun90856_ip = 532;
                        continue _fun90856
                    }
                case 503:
                    var5.preferredCommand = var3;
                    _fun90856_ip = 532;
                    continue _fun90856;
                case 511:
                    if (!var13) {
                        _fun90856_ip = 532;
                        continue _fun90856
                    }
                case 514:
                    var5.preferredCommand = var26;
                    var5.preferredCommandSection = var26;
                    var5.location = var20;
                case 532:
                    var0 = var26 == var4;
                    var6 = undefined;
                    if (var0) {
                        _fun90856_ip = 546;
                        continue _fun90856
                    }
                case 541:
                    var6 = var4.id;
                case 546:
                    var18 = var5.preferredCommand;
                    var19 = var26 == var18;
                    var0 = undefined;
                    if (var19) {
                        _fun90856_ip = 566;
                        continue _fun90856
                    }
                case 561:
                    var0 = var18.id;
                case 566:
                    var0 = var6 !== var0;
                    if (var0) {
                        _fun90856_ip = 613;
                        continue _fun90856
                    }
                case 573:
                    var18 = var26 == var4;
                    var6 = undefined;
                    if (var18) {
                        _fun90856_ip = 588;
                        continue _fun90856
                    }
                case 582:
                    var6 = var4.preferredCommandType;
                case 588:
                    var18 = var5.preferredCommand;
                    var19 = var26 == var18;
                    var4 = undefined;
                    if (var19) {
                        _fun90856_ip = 609;
                        continue _fun90856
                    }
                case 603:
                    var4 = var18.preferredCommandType;
                case 609:
                    var0 = var6 !== var4;
                case 613:
                    var6 = var5.preferredOptionValues;
                    var4 = var12.id;
                    var18 = var6[var4];
                    if (!(var26 == var18)) {
                        _fun90856_ip = 634;
                        continue _fun90856
                    }
                case 632:
                    var18 = {};
                case 634:
                    var22 = var5.parser;
                    var21 = var22.parse;
                    var19 = var8.text;
                    var6 = {};
                    var4 = var26 == var3;
                    var25 = undefined;
                    if (var4) {
                        _fun90856_ip = 668;
                        continue _fun90856
                    }
                case 662:
                    var25 = var3.preferredCommandType;
                case 668:
                    var23 = _closure1_slot15;
                    var24 = var23.FULL_COMMAND;
                    var23 = null;
                    if (!(var25 === var24)) {
                        _fun90856_ip = 690;
                        continue _fun90856
                    }
                case 687:
                    var23 = var3;
                case 690:
                    var6.activeCommand = var23;
                    var6.preferredOptionValues = var18;
                    var6 = var21.bind(var22)(var19, var6);
                    var5.chatInputNodes = var6;
                    var19 = var5.optionsToNodes;
                    var6 = var19.clear;
                    var6 = var6.bind(var19)();
                    var19 = var5.optionValueNodes;
                    var6 = var19.clear;
                    var6 = var6.bind(var19)();
                    var21 = var5.chatInputNodes;
                    var19 = var21.forEach;
                    var6 = function(arg0) { // Environment: var14
                        _fun90857: for (var _fun90857_ip = 0;;) switch (_fun90857_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = var4.type;
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var6 = 8;
                                var1 = var0[var6];
                                var0 = undefined;
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.ChatInputNodeType;
                                var1 = var1.COMMAND_OPTION;
                                if (!(var3 === var1)) {
                                    _fun90857_ip = 106;
                                    continue _fun90857
                                }
                            case 49:
                                var1 = var4.data;
                                var3 = null;
                                var5 = var3 == var1;
                                var3 = undefined;
                                if (var5) {
                                    _fun90857_ip = 70;
                                    continue _fun90857
                                }
                            case 65:
                                var3 = var1.type;
                            case 70:
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var1 = var1[var6];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.ChatInputParseResultDataType;
                                var1 = var1.COMMAND_OPTION;
                                if (!(var3 !== var1)) {
                                    _fun90857_ip = 246;
                                    continue _fun90857
                                }
                            case 106:
                                var3 = var4.type;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var1 = var1[var6];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.ChatInputNodeType;
                                var1 = var1.COMMAND_OPTION_WITH_VALUE;
                                var1 = var3 === var1;
                                if (!var1) {
                                    _fun90857_ip = 201;
                                    continue _fun90857
                                }
                            case 147:
                                var5 = var4.data;
                                var3 = null;
                                var7 = var3 == var5;
                                var3 = undefined;
                                if (var7) {
                                    _fun90857_ip = 168;
                                    continue _fun90857
                                }
                            case 163:
                                var3 = var5.type;
                            case 168:
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var6];
                                var2 = var5.bind(var0)(var2);
                                var2 = var2.ChatInputParseResultDataType;
                                var2 = var2.COMMAND_OPTION;
                                var1 = var3 === var2;
                            case 201:
                                if (!var1) {
                                    _fun90857_ip = 286;
                                    continue _fun90857
                                }
                            case 204:
                                var1 = _closure3_slot0;
                                var3 = var1.optionValueNodes;
                                var2 = var3.set;
                                var1 = var4.data;
                                var1 = var1.option;
                                var1 = var1.name;
                                var1 = var2.bind(var3)(var1, var4);
                                _fun90857_ip = 286;
                                continue _fun90857;
                            case 246:
                                var1 = _closure3_slot0;
                                var3 = var1.optionsToNodes;
                                var2 = var3.set;
                                var1 = var4.data;
                                var1 = var1.option;
                                var1 = var1.name;
                                var1 = var2.bind(var3)(var1, var4);
                            case 286:
                                return var0;
                        }
                    };
                    var6 = var19.bind(var21)(var6);
                    if (!var13) {
                        _fun90856_ip = 1133;
                        continue _fun90856
                    }
                case 773:
                    var6 = var5.activeCommand;
                    var21 = var26 == var6;
                    var19 = undefined;
                    if (var21) {
                        _fun90856_ip = 794;
                        continue _fun90856
                    }
                case 788:
                    var19 = var6.preferredCommandType;
                case 794:
                    var6 = _closure1_slot15;
                    var6 = var6.FULL_COMMAND;
                    if (!(var19 === var6)) {
                        _fun90856_ip = 1133;
                        continue _fun90856
                    }
                case 811:
                    var21 = new Array(0);
                    var19 = _closure1_slot16;
                    var22 = var5.activeCommand;
                    var23 = var26 == var22;
                    var6 = undefined;
                    if (var23) {
                        _fun90856_ip = 839;
                        continue _fun90856
                    }
                case 834:
                    var6 = var22.options;
                case 839:
                    if (!(var26 == var6)) {
                        _fun90856_ip = 847;
                        continue _fun90856
                    }
                case 843:
                    var6 = new Array(0);
                case 847:
                    var25 = var19.bind(var20)(var6);
                    var19 = var25.bind(var20)();
                    var6 = var19.done;
                    var24 = 15;
                    var23 = 1;
                    var22 = '';
                    if (var6) {
                        _fun90856_ip = 1074;
                        continue _fun90856
                    }
                case 877:
                    var6 = var19.value;
                    var27 = var6.name;
                    var30 = var18[var27];
                    var29 = var5.optionValueNodes;
                    var28 = var29.get;
                    var31 = var28.bind(var29)(var27);
                    var28 = var26 == var30;
                    if (var28) {
                        _fun90856_ip = 924;
                        continue _fun90856
                    }
                case 914:
                    var29 = var30.displayText;
                    var28 = var22 === var29;
                case 924:
                    if (var28) {
                        _fun90856_ip = 1001;
                        continue _fun90856
                    }
                case 927:
                    var29 = var26 != var31;
                    if (!var29) {
                        _fun90856_ip = 998;
                        continue _fun90856
                    }
                case 934:
                    var34 = var8.text;
                    var33 = var34.substring;
                    var35 = var31.location;
                    var32 = var6.displayName;
                    var32 = var32.length;
                    var32 = var35 + var32;
                    var32 = var32 + var23;
                    var35 = var31.location;
                    var31 = var31.length;
                    var31 = var35 + var31;
                    var31 = var33.bind(var34)(var32, var31);
                    var30 = var30.displayText;
                    var29 = var31 === var30;
                case 998:
                    var28 = var29;
                case 1001:
                    if (var28) {
                        _fun90856_ip = 1056;
                        continue _fun90856
                    }
                case 1004:
                    var28 = delete var18[var27];
                    var28 = var6.type;
                    var29 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var24];
                    var6 = var29.bind(var20)(var6);
                    var6 = var6.ApplicationCommandOptionType;
                    var6 = var6.ATTACHMENT;
                    if (!(var28 === var6)) {
                        _fun90856_ip = 1056;
                        continue _fun90856
                    }
                case 1046:
                    var6 = var21.push;
                    var6 = var6.bind(var21)(var27);
                case 1056:
                    var27 = var25.bind(var20)();
                    var6 = var27.done;
                    var19 = var27;
                    if (!var6) {
                        _fun90856_ip = 877;
                        continue _fun90856
                    }
                case 1074:
                    var19 = var21.length;
                    var6 = 0;
                    if (!(var19 > var6)) {
                        _fun90856_ip = 1133;
                        continue _fun90856
                    }
                case 1085:
                    var19 = _closure1_slot1;
                    var22 = _closure1_slot3;
                    var6 = 24;
                    var6 = var22[var6];
                    var20 = var19.bind(var20)(var6);
                    var19 = var20.removeFiles;
                    var6 = var12.id;
                    var4 = _closure1_slot7;
                    var4 = var4.SlashCommand;
                    var4 = var19.bind(var20)(var6, var21, var4);
                case 1133:
                    var6 = var5.preferredOptionValues;
                    var4 = var12.id;
                    var6[var4] = var18;
                    var11 = var3;
                    var10 = var1;
                    var2 = var0;
                case 1157:
                    var6 = null;
                    var1 = var6 == var11;
                    var0 = undefined;
                    var3 = undefined;
                    if (var1) {
                        _fun90856_ip = 1175;
                        continue _fun90856
                    }
                case 1170:
                    var3 = var11.id;
                case 1175:
                    var4 = var5.activeCommand;
                    var18 = var6 == var4;
                    var1 = undefined;
                    if (var18) {
                        _fun90856_ip = 1195;
                        continue _fun90856
                    }
                case 1190:
                    var1 = var4.id;
                case 1195:
                    var1 = var3 !== var1;
                    var _closure3_slot3 = var1;
                    var3 = var5.activeOption;
                    var _closure3_slot4 = var3;
                    var4 = var13;
                    if (var13) {
                        _fun90856_ip = 1222;
                        continue _fun90856
                    }
                case 1219:
                    var4 = var17;
                case 1222:
                    if (var4) {
                        _fun90856_ip = 1228;
                        continue _fun90856
                    }
                case 1225:
                    var4 = var16;
                case 1228:
                    if (var4) {
                        _fun90856_ip = 1234;
                        continue _fun90856
                    }
                case 1231:
                    var4 = var1;
                case 1234:
                    if (!var4) {
                        _fun90856_ip = 1332;
                        continue _fun90856
                    }
                case 1237:
                    var17 = var5.getCurrentOption;
                    var16 = var8.focused;
                    if (var16) {
                        _fun90856_ip = 1313;
                        continue _fun90856
                    }
                case 1252:
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var4 = 25;
                    var4 = var20[var4];
                    var18 = var19.bind(var0)(var4);
                    var4 = var18.getKeyboardType;
                    var18 = var4.bind(var18)();
                    var4 = 26;
                    var4 = var20[var4];
                    var4 = var19.bind(var0)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.SYSTEM;
                    var16 = var18 !== var4;
                case 1313:
                    var4 = var8.selectionStart;
                    var4 = var17.bind(var5)(var16, var4);
                    _closure3_slot4 = var4;
                    var3 = var4;
                case 1332:
                    var4 = var1;
                    if (!var1) {
                        _fun90856_ip = 1348;
                        continue _fun90856
                    }
                case 1338:
                    var16 = var5.activeCommand;
                    var4 = var6 != var16;
                case 1348:
                    if (!var4) {
                        _fun90856_ip = 1401;
                        continue _fun90856
                    }
                case 1351:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var16 = 24;
                    var16 = var18[var16];
                    var17 = var17.bind(var0)(var16);
                    var16 = var17.clearAll;
                    var12 = var12.id;
                    var4 = _closure1_slot7;
                    var4 = var4.SlashCommand;
                    var4 = var16.bind(var17)(var12, var4);
                case 1401:
                    var4 = var6 == var3;
                    var12 = undefined;
                    if (var4) {
                        _fun90856_ip = 1415;
                        continue _fun90856
                    }
                case 1410:
                    var12 = var3.name;
                case 1415:
                    var16 = var5.activeOption;
                    var17 = var6 == var16;
                    var4 = undefined;
                    if (var17) {
                        _fun90856_ip = 1435;
                        continue _fun90856
                    }
                case 1430:
                    var4 = var16.name;
                case 1435:
                    var12 = var12 !== var4;
                    var _closure3_slot5 = var12;
                    var4 = var8.lastCommandAutocompleteResponseNonce;
                    var7 = var7 !== var4;
                    var4 = var13;
                    if (var13) {
                        _fun90856_ip = 1462;
                        continue _fun90856
                    }
                case 1459:
                    var4 = var12;
                case 1462:
                    if (var4) {
                        _fun90856_ip = 1468;
                        continue _fun90856
                    }
                case 1465:
                    var4 = var7;
                case 1468:
                    if (!var4) {
                        _fun90856_ip = 1503;
                        continue _fun90856
                    }
                case 1471:
                    var7 = var6 == var11;
                    var16 = undefined;
                    if (var7) {
                        _fun90856_ip = 1486;
                        continue _fun90856
                    }
                case 1480:
                    var16 = var11.preferredCommandType;
                case 1486:
                    var7 = _closure1_slot15;
                    var7 = var7.FULL_COMMAND;
                    var4 = var16 === var7;
                case 1503:
                    if (!var4) {
                        _fun90856_ip = 1634;
                        continue _fun90856
                    }
                case 1509:
                    var7 = var5.getAllCommandOptionValues;
                    var4 = var8.text;
                    var4 = var7.bind(var5)(var11, var4);
                    var5.optionValues = var4;
                    var7 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var4 = 27;
                    var4 = var16[var4];
                    var19 = var7.bind(var0)(var4);
                    var18 = var19.getValidationResults;
                    var39 = var5.optionValues;
                    var4 = var8.channel;
                    var38 = var4.guild_id;
                    var4 = var8.channel;
                    var37 = var4.id;
                    var36 = false;
                    var41 = var19;
                    var40 = var11;
                    var4 = var41[var18](var40, var39, var38, var37, var36, var35);
                    var5.optionValidationResults = var4;
                    var16 = var5.chatInputNodes;
                    var7 = var16.map;
                    var4 = function(arg0) { // Environment: var14
                        _fun90858: for (var _fun90858_ip = 0;;) switch (_fun90858_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.type;
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var8 = 8;
                                var0 = var0[var8];
                                var7 = undefined;
                                var0 = var2.bind(var7)(var0);
                                var0 = var0.ChatInputNodeType;
                                var0 = var0.COMMAND_OPTION;
                                if (!(var1 !== var0)) {
                                    _fun90858_ip = 87;
                                    continue _fun90858
                                }
                            case 49:
                                var1 = var3.type;
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var0 = var0[var8];
                                var0 = var2.bind(var7)(var0);
                                var0 = var0.ChatInputNodeType;
                                var0 = var0.COMMAND_OPTION_WITH_VALUE;
                                if (!(var1 === var0)) {
                                    _fun90858_ip = 98;
                                    continue _fun90858
                                }
                            case 87:
                                var0 = var3.data;
                                var1 = null;
                                if (!(var1 == var0)) {
                                    _fun90858_ip = 100;
                                    continue _fun90858
                                }
                            case 98:
                                return var3;
                            case 100:
                                var0 = var3.data;
                                var2 = var0.option;
                                var5 = var3.type;
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var0 = var0[var8];
                                var0 = var6.bind(var7)(var0);
                                var0 = var0.ChatInputNodeType;
                                var0 = var0.COMMAND_OPTION_WITH_VALUE;
                                if (!(var5 === var0)) {
                                    _fun90858_ip = 223;
                                    continue _fun90858
                                }
                            case 149:
                                var6 = var2.name;
                                var8 = _closure3_slot4;
                                var9 = var1 == var8;
                                var5 = undefined;
                                if (var9) {
                                    _fun90858_ip = 175;
                                    continue _fun90858
                                }
                            case 170:
                                var5 = var8.name;
                            case 175:
                                if (!(var6 === var5)) {
                                    _fun90858_ip = 223;
                                    continue _fun90858
                                }
                            case 179:
                                var5 = _closure3_slot2;
                                if (!var5) {
                                    _fun90858_ip = 223;
                                    continue _fun90858
                                }
                            case 186:
                                var5 = _closure3_slot3;
                                if (!var5) {
                                    _fun90858_ip = 200;
                                    continue _fun90858
                                }
                            case 193:
                                var0 = _closure3_slot5;
                                if (var0) {
                                    _fun90858_ip = 223;
                                    continue _fun90858
                                }
                            case 200:
                                var0 = {};
                                var12 = var0;
                                var11 = var3;
                                var5 = copyDataProperties(var12, var11);
                                var5 = 'style';
                                var0[var5] = var7;
                                return var0;
                            case 223:
                                var0 = {};
                                var12 = var0;
                                var11 = var3;
                                var3 = copyDataProperties(var12, var11);
                                var5 = _closure3_slot0;
                                var6 = var5.optionValidationResults;
                                var5 = var2.name;
                                var5 = var6[var5];
                                var8 = var2.name;
                                var9 = _closure3_slot4;
                                var10 = var1 == var9;
                                var6 = undefined;
                                if (var10) {
                                    _fun90858_ip = 280;
                                    continue _fun90858
                                }
                            case 275:
                                var6 = var9.name;
                            case 280:
                                if (!(var8 !== var6)) {
                                    _fun90858_ip = 325;
                                    continue _fun90858
                                }
                            case 284:
                                if (!(var7 !== var5)) {
                                    _fun90858_ip = 325;
                                    continue _fun90858
                                }
                            case 288:
                                var6 = var5.success;
                                if (var6) {
                                    _fun90858_ip = 325;
                                    continue _fun90858
                                }
                            case 297:
                                var6 = _closure3_slot0;
                                var8 = var6.styles;
                                var6 = var8.commandErrorOption;
                                var6 = var6.bind(var8)();
                                var0.style = var6;
                                _fun90858_ip = 351;
                                continue _fun90858;
                            case 325:
                                var6 = _closure3_slot0;
                                var8 = var6.styles;
                                var6 = var8.commandOption;
                                var6 = var6.bind(var8)();
                                var0.style = var6;
                            case 351:
                                var1 = var1 != var5;
                                if (!var1) {
                                    _fun90858_ip = 364;
                                    continue _fun90858
                                }
                            case 358:
                                var1 = var5.success;
                            case 364:
                                if (!var1) {
                                    _fun90858_ip = 408;
                                    continue _fun90858
                                }
                            case 367:
                                var5 = var2.type;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var4 = 15;
                                var4 = var8[var4];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.ApplicationCommandOptionType;
                                var4 = var4.ATTACHMENT;
                                var1 = var5 === var4;
                            case 408:
                                if (!var1) {
                                    _fun90858_ip = 465;
                                    continue _fun90858
                                }
                            case 411:
                                var1 = {};
                                var4 = 'tapAttachment';
                                var1.action = var4;
                                var3 = _closure3_slot1;
                                var3 = var3.channel;
                                var3 = var3.id;
                                var1.channelId = var3;
                                var2 = var2.name;
                                var1.optionName = var2;
                                var0.tapAction = var1;
                                var1 = true;
                                var0.deleteNodeOnBackspace = var1;
                            case 465:
                                return var0;
                        }
                    };
                    var4 = var7.bind(var16)(var4);
                    var5.chatInputNodes = var4;
                case 1634:
                    var4 = var13;
                    if (var4) {
                        _fun90856_ip = 1643;
                        continue _fun90856
                    }
                case 1640:
                    var4 = var1;
                case 1643:
                    if (var4) {
                        _fun90856_ip = 1649;
                        continue _fun90856
                    }
                case 1646:
                    var4 = var12;
                case 1649:
                    if (var4) {
                        _fun90856_ip = 1662;
                        continue _fun90856
                    }
                case 1652:
                    var7 = var8.editId;
                    var4 = var9 !== var7;
                case 1662:
                    if (!var4) {
                        _fun90856_ip = 1699;
                        continue _fun90856
                    }
                case 1665:
                    var4 = var5.ref;
                    var16 = var4.current;
                    var9 = var16.updateNativeTextBlocksThrottled;
                    var7 = var5.chatInputNodes;
                    var4 = var8.editId;
                    var4 = var9.bind(var16)(var7, var4);
                case 1699:
                    var4 = var1;
                    if (!var1) {
                        _fun90856_ip = 1709;
                        continue _fun90856
                    }
                case 1705:
                    var4 = var6 != var11;
                case 1709:
                    if (!var4) {
                        _fun90856_ip = 1720;
                        continue _fun90856
                    }
                case 1712:
                    var4 = true;
                    var5.canAutoInsertFirstOption = var4;
                case 1720:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var20 = 18;
                    var4 = var4[var20];
                    var16 = var9.bind(var0)(var4);
                    var9 = var16.isEmpty;
                    var4 = var5.optionsToNodes;
                    var4 = var9.bind(var16)(var4);
                    if (var4) {
                        _fun90856_ip = 1771;
                        continue _fun90856
                    }
                case 1763:
                    var4 = false;
                    var5.canAutoInsertFirstOption = var4;
                case 1771:
                    var4 = var6 == var11;
                    var9 = undefined;
                    if (var4) {
                        _fun90856_ip = 1786;
                        continue _fun90856
                    }
                case 1780:
                    var9 = var11.preferredCommandType;
                case 1786:
                    var4 = _closure1_slot15;
                    var4 = var4.FULL_COMMAND;
                    if (!(var9 === var4)) {
                        _fun90856_ip = 1818;
                        continue _fun90856
                    }
                case 1800:
                    var4 = var6 == var11;
                    var16 = undefined;
                    if (var4) {
                        _fun90856_ip = 1814;
                        continue _fun90856
                    }
                case 1809:
                    var16 = var11.options;
                case 1814:
                    if (!(var6 == var16)) {
                        _fun90856_ip = 1822;
                        continue _fun90856
                    }
                case 1818:
                    var16 = new Array(0);
                case 1822:
                    var9 = var16.filter;
                    var4 = function(arg0) { // Environment: var14
                        var0 = arg0;
                        var0 = var0.required;
                        return var0;
                    };
                    var4 = var9.bind(var16)(var4);
                    var4 = var4.length;
                    var9 = 0;
                    var18 = var4 > var9;
                    var4 = var6 == var11;
                    var16 = undefined;
                    if (var4) {
                        _fun90856_ip = 1865;
                        continue _fun90856
                    }
                case 1859:
                    var16 = var11.preferredCommandType;
                case 1865:
                    var4 = _closure1_slot15;
                    var4 = var4.FULL_COMMAND;
                    if (!(var16 === var4)) {
                        _fun90856_ip = 1897;
                        continue _fun90856
                    }
                case 1879:
                    var4 = var6 == var11;
                    var17 = undefined;
                    if (var4) {
                        _fun90856_ip = 1893;
                        continue _fun90856
                    }
                case 1888:
                    var17 = var11.options;
                case 1893:
                    if (!(var6 == var17)) {
                        _fun90856_ip = 1901;
                        continue _fun90856
                    }
                case 1897:
                    var17 = new Array(0);
                case 1901:
                    var16 = var17.filter;
                    var4 = function(arg0) { // Environment: var14
                        var0 = arg0;
                        var0 = var0.required;
                        var0 = !var0;
                        return var0;
                    };
                    var4 = var16.bind(var17)(var4);
                    var16 = var4.length;
                    var4 = 1;
                    var17 = var4 === var16;
                    var4 = var5.canAutoInsertFirstOption;
                    if (!var4) {
                        _fun90856_ip = 1968;
                        continue _fun90856
                    }
                case 1939:
                    var16 = var6 == var11;
                    var19 = undefined;
                    if (var16) {
                        _fun90856_ip = 1954;
                        continue _fun90856
                    }
                case 1948:
                    var19 = var11.preferredCommandType;
                case 1954:
                    var16 = _closure1_slot15;
                    var16 = var16.FULL_COMMAND;
                    var4 = var19 === var16;
                case 1968:
                    if (!var4) {
                        _fun90856_ip = 2005;
                        continue _fun90856
                    }
                case 1971:
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var16 = var16[var20];
                    var20 = var19.bind(var0)(var16);
                    var19 = var20.isEmpty;
                    var16 = var5.optionsToNodes;
                    var4 = var19.bind(var20)(var16);
                case 2005:
                    if (!var4) {
                        _fun90856_ip = 2027;
                        continue _fun90856
                    }
                case 2008:
                    var16 = var8.text;
                    var16 = var16.length;
                    var15 = var15.length;
                    var4 = var16 >= var15;
                case 2027:
                    if (!var4) {
                        _fun90856_ip = 2098;
                        continue _fun90856
                    }
                case 2030:
                    var16 = var5.insertFirstOptionIfValid;
                    var40 = var8.text;
                    var38 = var11.displayName;
                    var41 = var5;
                    var39 = var11;
                    var37 = var18;
                    var36 = var17;
                    var4 = var41[var16](var40, var39, var38, var37, var36, var35);
                    if (var4) {
                        _fun90856_ip = 2098;
                        continue _fun90856
                    }
                case 2065:
                    var16 = var5.insertFirstOptionIfValid;
                    var40 = var8.text;
                    var38 = var11.untranslatedName;
                    var41 = var5;
                    var39 = var11;
                    var37 = var18;
                    var36 = var17;
                    var4 = var41[var16](var40, var39, var38, var37, var36, var35);
                case 2098:
                    if (!var12) {
                        _fun90856_ip = 2268;
                        continue _fun90856
                    }
                case 2104:
                    var4 = var6 == var3;
                    var15 = undefined;
                    if (var4) {
                        _fun90856_ip = 2118;
                        continue _fun90856
                    }
                case 2113:
                    var15 = var3.type;
                case 2118:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var4 = 15;
                    var4 = var17[var4];
                    var4 = var16.bind(var0)(var4);
                    var4 = var4.ApplicationCommandOptionType;
                    var4 = var4.ATTACHMENT;
                    if (!(var15 === var4)) {
                        _fun90856_ip = 2268;
                        continue _fun90856
                    }
                case 2154:
                    var15 = var5.optionValidationResults;
                    var4 = var3.name;
                    var4 = var15[var4];
                    var4 = var4.success;
                    if (var4) {
                        _fun90856_ip = 2268;
                        continue _fun90856
                    }
                case 2178:
                    var4 = var5.ref;
                    var16 = var4.current;
                    var15 = var16.openCustomKeyboard;
                    var4 = {};
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var17 = 26;
                    var17 = var19[var17];
                    var17 = var18.bind(var0)(var17);
                    var17 = var17.KeyboardTypes;
                    var17 = var17.MEDIA;
                    var4.type = var17;
                    var17 = {};
                    var18 = _closure1_slot13;
                    var18 = var18.COMMAND;
                    var17.target = var18;
                    var17.option = var3;
                    var4.context = var17;
                    var4 = var15.bind(var16)(var4);
                    _fun90856_ip = 2426;
                    continue _fun90856;
                case 2268:
                    var4 = var12;
                    if (!var4) {
                        _fun90856_ip = 2278;
                        continue _fun90856
                    }
                case 2274:
                    var4 = var6 != var3;
                case 2278:
                    if (!var4) {
                        _fun90856_ip = 2322;
                        continue _fun90856
                    }
                case 2281:
                    var16 = var3.type;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var15 = 15;
                    var15 = var18[var15];
                    var15 = var17.bind(var0)(var15);
                    var15 = var15.ApplicationCommandOptionType;
                    var15 = var15.ATTACHMENT;
                    var4 = var16 !== var15;
                case 2322:
                    if (!var4) {
                        _fun90856_ip = 2383;
                        continue _fun90856
                    }
                case 2325:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var15 = 25;
                    var15 = var18[var15];
                    var16 = var17.bind(var0)(var15);
                    var15 = var16.getKeyboardType;
                    var16 = var15.bind(var16)();
                    var15 = 26;
                    var15 = var18[var15];
                    var15 = var17.bind(var0)(var15);
                    var15 = var15.KeyboardTypes;
                    var15 = var15.SYSTEM;
                    var4 = var16 !== var15;
                case 2383:
                    if (!var4) {
                        _fun90856_ip = 2426;
                        continue _fun90856
                    }
                case 2386:
                    var4 = var5.ref;
                    var15 = var4.current;
                    var4 = var15.closeCustomKeyboard;
                    var4 = var4.bind(var15)();
                    var4 = var5.ref;
                    var15 = var4.current;
                    var4 = var15.focus;
                    var4 = var4.bind(var15)();
                case 2426:
                    var5.props = var8;
                    var4 = {};
                    var _closure3_slot6 = var4;
                    var15 = var6 == var11;
                    var16 = undefined;
                    if (var15) {
                        _fun90856_ip = 2453;
                        continue _fun90856
                    }
                case 2447:
                    var16 = var11.preferredCommandType;
                case 2453:
                    var15 = _closure1_slot15;
                    var15 = var15.FULL_COMMAND;
                    if (!(var16 === var15)) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2470:
                    if (var12) {
                        _fun90856_ip = 2486;
                        continue _fun90856
                    }
                case 2473:
                    if (!var13) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2479:
                    if (!(var6 == var3)) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2486:
                    var15 = var6 == var11;
                    var16 = var11;
                    if (var15) {
                        _fun90856_ip = 2508;
                        continue _fun90856
                    }
                case 2496:
                    var17 = var11.options;
                    var15 = var6 == var17;
                    var16 = var17;
                case 2508:
                    if (var15) {
                        _fun90856_ip = 2528;
                        continue _fun90856
                    }
                case 2511:
                    var15 = var16.forEach;
                    var14 = function(arg0) { // Environment: var14
                        _fun90861: for (var _fun90861_ip = 0;;) switch (_fun90861_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.name;
                                var0 = _closure3_slot0;
                                var0 = var0.optionValues;
                                var7 = var0[var3];
                                var2 = _closure3_slot6;
                                var1 = {};
                                var8 = _closure3_slot4;
                                var4 = null;
                                var9 = var4 == var8;
                                var0 = undefined;
                                var6 = undefined;
                                if (var9) {
                                    _fun90861_ip = 53;
                                    continue _fun90861
                                }
                            case 48:
                                var6 = var8.name;
                            case 53:
                                var6 = var3 === var6;
                                var1.isActive = var6;
                                var1.optionValue = var7;
                                var6 = var4 != var7;
                                if (!var6) {
                                    _fun90861_ip = 85;
                                    continue _fun90861
                                }
                            case 74:
                                var8 = var7.length;
                                var7 = 0;
                                var6 = var8 > var7;
                            case 85:
                                var1.hasValue = var6;
                                var6 = _closure3_slot0;
                                var7 = var6.optionsToNodes;
                                var6 = var7.get;
                                var7 = var6.bind(var7)(var3);
                                var8 = var4 == var7;
                                var6 = undefined;
                                if (var8) {
                                    _fun90861_ip = 124;
                                    continue _fun90861
                                }
                            case 119:
                                var6 = var7.location;
                            case 124:
                                var1.location = var6;
                                var5 = _closure3_slot0;
                                var6 = var5.optionsToNodes;
                                var5 = var6.get;
                                var5 = var5.bind(var6)(var3);
                                var6 = var4 == var5;
                                var4 = undefined;
                                if (var6) {
                                    _fun90861_ip = 162;
                                    continue _fun90861
                                }
                            case 157:
                                var4 = var5.length;
                            case 162:
                                var1.length = var4;
                                var2[var3] = var1;
                                return var0;
                        }
                    };
                    var14 = var15.bind(var16)(var14);
                case 2528:
                    if (!var12) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2531:
                    if (!(var6 != var3)) {
                        _fun90856_ip = 2552;
                        continue _fun90856
                    }
                case 2535:
                    var12 = var3.name;
                    var14 = var4[var12];
                    var12 = true;
                    var14.hasValue = var12;
                case 2552:
                    var12 = var5.activeOption;
                    if (!(var6 != var12)) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2562:
                    var12 = var5.activeOption;
                    var12 = var12.name;
                    var12 = var4[var12];
                    if (!(var6 != var12)) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2581:
                    var12 = var12.hasValue;
                    if (!var12) {
                        _fun90856_ip = 2632;
                        continue _fun90856
                    }
                case 2590:
                    var14 = var5.optionValidationResults;
                    var12 = var5.activeOption;
                    var12 = var12.name;
                    var14 = var14[var12];
                    var12 = var5.activeOption;
                    var12 = var12.name;
                    var12 = var4[var12];
                    var12.lastValidationResult = var14;
                case 2632:
                    var15 = var5.getCurrentOption;
                    var12 = var8.selectionStart;
                    var14 = true;
                    var12 = var15.bind(var5)(var14, var12);
                    if (!var13) {
                        _fun90856_ip = 2772;
                        continue _fun90856
                    }
                case 2655:
                    if (!(var6 != var12)) {
                        _fun90856_ip = 2772;
                        continue _fun90856
                    }
                case 2659:
                    var13 = var12.name;
                    var12 = var4[var13];
                    if (!(var6 == var12)) {
                        _fun90856_ip = 2674;
                        continue _fun90856
                    }
                case 2672:
                    var12 = {};
                case 2674:
                    var16 = var5.optionsToNodes;
                    var15 = var16.get;
                    var16 = var15.bind(var16)(var13);
                    var17 = var6 == var16;
                    var15 = undefined;
                    if (var17) {
                        _fun90856_ip = 2704;
                        continue _fun90856
                    }
                case 2699:
                    var15 = var16.location;
                case 2704:
                    var12.location = var15;
                    var16 = var5.optionsToNodes;
                    var15 = var16.get;
                    var16 = var15.bind(var16)(var13);
                    var17 = var6 == var16;
                    var15 = undefined;
                    if (var17) {
                        _fun90856_ip = 2740;
                        continue _fun90856
                    }
                case 2735:
                    var15 = var16.length;
                case 2740:
                    var12.length = var15;
                    var15 = var5.optionValues;
                    var15 = var15[var13];
                    var12.optionValue = var15;
                    var12.hasValue = var14;
                    var4[var13] = var12;
                case 2772:
                    var5.activeCommand = var11;
                    var5.activeCommandSection = var10;
                    var5.activeOption = var3;
                    if (var1) {
                        _fun90856_ip = 2820;
                        continue _fun90856
                    }
                case 2793:
                    var3 = global;
                    var10 = var3.Object;
                    var3 = var10.keys;
                    var3 = var3.bind(var10)(var4);
                    var3 = var3.length;
                    var1 = var3 > var9;
                case 2820:
                    if (var1) {
                        _fun90856_ip = 2826;
                        continue _fun90856
                    }
                case 2823:
                    var1 = var2;
                case 2826:
                    if (!var1) {
                        _fun90856_ip = 3000;
                        continue _fun90856
                    }
                case 2832:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateChannelState;
                    var1 = {};
                    var8 = var8.channel;
                    var8 = var8.id;
                    var1.channelId = var8;
                    var8 = var5.activeCommand;
                    var10 = var6 == var8;
                    var9 = undefined;
                    if (var10) {
                        _fun90856_ip = 2895;
                        continue _fun90856
                    }
                case 2889:
                    var9 = var8.preferredCommandType;
                case 2895:
                    var7 = _closure1_slot15;
                    var8 = var7.FULL_COMMAND;
                    var7 = null;
                    if (!(var9 === var8)) {
                        _fun90856_ip = 2917;
                        continue _fun90856
                    }
                case 2911:
                    var7 = var5.activeCommand;
                case 2917:
                    var1.command = var7;
                    var8 = var5.activeCommandSection;
                    var9 = var6 != var8;
                    var7 = null;
                    if (!var9) {
                        _fun90856_ip = 2940;
                        continue _fun90856
                    }
                case 2937:
                    var7 = var8;
                case 2940:
                    var1.section = var7;
                    var8 = var5.preferredCommand;
                    var9 = var6 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun90856_ip = 2964;
                        continue _fun90856
                    }
                case 2959:
                    var7 = var8.id;
                case 2964:
                    var8 = var6 != var7;
                    var6 = null;
                    if (!var8) {
                        _fun90856_ip = 2976;
                        continue _fun90856
                    }
                case 2973:
                    var6 = var7;
                case 2976:
                    var1.preferredCommandId = var6;
                    var5 = var5.location;
                    var1.location = var5;
                    var1.changedOptionStates = var4;
                    var1 = var2.bind(var3)(var1);
                case 3000:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateValidationResults';
        var0.key = var5;
        var4 = function() { // Original name: updateValidationResults, environment: var4
            _fun90862: for (var _fun90862_ip = 0;;) switch (_fun90862_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var4 = {};
                    var _closure3_slot1 = var4;
                    var2 = var1.activeCommand;
                    var8 = null;
                    var5 = var8 == var2;
                    var0 = undefined;
                    var6 = undefined;
                    if (var5) {
                        _fun90862_ip = 40;
                        continue _fun90862
                    }
                case 34:
                    var6 = var2.preferredCommandType;
                case 40:
                    var5 = _closure1_slot15;
                    var5 = var5.FULL_COMMAND;
                    if (!(var6 === var5)) {
                        _fun90862_ip = 105;
                        continue _fun90862
                    }
                case 57:
                    var7 = var1.activeCommand;
                    var5 = var8 == var7;
                    var6 = var7;
                    if (var5) {
                        _fun90862_ip = 85;
                        continue _fun90862
                    }
                case 73:
                    var7 = var7.options;
                    var5 = var8 == var7;
                    var6 = var7;
                case 85:
                    if (var5) {
                        _fun90862_ip = 105;
                        continue _fun90862
                    }
                case 88:
                    var5 = var6.forEach;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var2 = var0.name;
                        var1 = _closure3_slot1;
                        var0 = {};
                        var3 = _closure3_slot0;
                        var3 = var3.optionValidationResults;
                        var3 = var3[var2];
                        var0.lastValidationResult = var3;
                        var1[var2] = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                case 105:
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 9;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.updateOptionStates;
                    var1 = var1.props;
                    var1 = var1.channel;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 3960, 6445, 660, 6684, 1566, 11720, 6443, 4507, 7561, 4510, 7948, 11719, 1636, 11665, 3285, 22, 11739, 11721, 3238, 4265, 9220, 7570, 3873, 1567, 11740, 2]);