// modules/interaction_components/ComponentStateContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.applicationId;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'app-widget-';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun56384: for (var _fun56384_ip = 0;;) switch (_fun56384_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var7;
                var5 = _closure1_slot4;
                var2 = var5.useContext;
                var1 = _closure1_slot16;
                var2 = var2.bind(var5)(var1);
                var _closure2_slot2 = var2;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var2;
                var1 = function(arg0) { // Environment: var0
                    _fun56385: for (var _fun56385_ip = 0;;) switch (_fun56385_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 16;
                            var0 = var3[var0];
                            var7 = undefined;
                            var6 = var1.bind(var7)(var0);
                            var5 = _closure2_slot0;
                            var0 = _closure2_slot2;
                            var0 = var0.modal;
                            var1 = null;
                            var0 = var1 != var0;
                            var4 = 'message';
                            if (!var0) {
                                _fun56385_ip = 61;
                                continue _fun56385
                            }
                        case 57:
                            var4 = 'modal';
                        case 61:
                            var0 = arg0;
                            var0 = var6.bind(var7)(var5, var0, var4);
                            var _closure3_slot0 = var0;
                            var4 = _closure2_slot2;
                            var4 = var4.setValidationErrors;
                            if (!(var1 != var4)) {
                                _fun56385_ip = 109;
                                continue _fun56385
                            }
                        case 89:
                            var4 = _closure2_slot2;
                            var3 = var4.setValidationErrors;
                            var2 = function(arg0) { // Environment: var2
                                var0 = {};
                                var3 = arg0;
                                var4 = var0;
                                var1 = copyDataProperties(var4, var3);
                                var1 = _closure2_slot0;
                                var2 = var1.id;
                                var1 = _closure3_slot0;
                                var0[var2] = var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                        case 109:
                            var0 = var1 == var0;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var5);
                var _closure2_slot3 = var1;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var8 = var2.validators;
                var3 = new Array(4);
                var3[0] = var8;
                var3[1] = var1;
                var3[2] = var7;
                var7 = var4.id;
                var3[3] = var7;
                var0 = function() { // Environment: var0
                    _fun56387: for (var _fun56387_ip = 0;;) switch (_fun56387_ip) {
                        case 0:
                            var3 = function() {
                                var2 = _closure2_slot3;
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var _closure3_slot0 = var3;
                            var1 = _closure2_slot2;
                            var2 = var1.validators;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun56387_ip = 40;
                                continue _fun56387
                            }
                        case 30:
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                        case 40:
                            var0 = function() { // Environment: var0
                                _fun56389: for (var _fun56389_ip = 0;;) switch (_fun56389_ip) {
                                    case 0:
                                        var0 = _closure2_slot2;
                                        var2 = var0.validators;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun56389_ip = 36;
                                            continue _fun56389
                                        }
                                    case 19:
                                        var1 = var2.delete;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                    case 36:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var3);
                var0 = {};
                var5 = var2.validationErrors;
                var2 = null;
                var6 = var2 == var5;
                var3 = undefined;
                if (var6) {
                    _fun56384_ip = 157;
                    continue _fun56384
                }
            case 148:
                var4 = var4.id;
                var3 = var5[var4];
            case 157:
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun56384_ip = 169;
                    continue _fun56384
                }
            case 166:
                var2 = var3;
            case 169:
                var0.error = var2;
                var0.validate = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun56390: for (var _fun56390_ip = 0;;) switch (_fun56390_ip) {
            case 0:
                var13 = arg0;
                var0 = arg1;
                var6 = arg2;
                var _closure2_slot0 = var13;
                var _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var8 = var4[var1];
                var5 = undefined;
                var11 = var3.bind(var5)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot11;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var7
                    var3 = _closure1_slot11;
                    var2 = var3.getInteractionComponentState;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var1 = var4[var1];
                var10 = var3.bind(var5)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var1;
                var3 = new Array(1);
                var3[0] = var13;
                var1 = function() { // Environment: var7
                    var2 = _closure1_slot5;
                    var1 = var2.getInteraction;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var9.bind(var10)(var4, var1, var3);
                var3 = _closure1_slot15;
                var1 = var13.channel_id;
                var3 = var3.bind(var5)(var1);
                if (var3) {
                    _fun56390_ip = 138;
                    continue _fun56390
                }
            case 135:
                var3 = var0;
            case 138:
                var0 = _closure1_slot18;
                var0 = var0.bind(var5)(var6, var8);
                var1 = var0.error;
                var11 = var0.validate;
                var _closure2_slot2 = var11;
                var12 = var13.applicationId;
                var0 = null;
                if (!(var0 == var12)) {
                    _fun56390_ip = 185;
                    continue _fun56390
                }
            case 174:
                var0 = var13.author;
                var12 = var0.id;
            case 185:
                var _closure2_slot3 = var12;
                var0 = {};
                var0.state = var8;
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var14 = var13.channel_id;
                var8 = new Array(8);
                var8[0] = var14;
                var14 = var13.flags;
                var8[1] = var14;
                var13 = var13.id;
                var8[2] = var13;
                var13 = var6.customId;
                var8[3] = var13;
                var13 = var6.type;
                var8[4] = var13;
                var13 = var6.id;
                var8[5] = var13;
                var8[6] = var12;
                var8[7] = var11;
                var7 = function(arg0) { // Environment: var7
                    _fun56393: for (var _fun56393_ip = 0;;) switch (_fun56393_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot2;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun56393_ip = 24;
                                continue _fun56393
                            }
                        case 20:
                            var0 = false;
                            return var0;
                        case 24:
                            var6 = _closure1_slot7;
                            var4 = var6.getChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.channel_id;
                            var4 = var4.bind(var6)(var1);
                            var7 = null;
                            var1 = var7 != var4;
                            if (!var1) {
                                _fun56393_ip = 73;
                                continue _fun56393
                            }
                        case 59:
                            var6 = _closure2_slot1;
                            var6 = var6.customId;
                            var1 = var7 != var6;
                        case 73:
                            if (!var1) {
                                _fun56393_ip = 201;
                                continue _fun56393
                            }
                        case 79:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.executeMessageComponentInteraction;
                            var0 = {};
                            var6 = _closure2_slot1;
                            var7 = var6.type;
                            var0.componentType = var7;
                            var7 = _closure2_slot0;
                            var8 = var7.id;
                            var0.messageId = var8;
                            var7 = var7.flags;
                            var0.messageFlags = var7;
                            var7 = var6.customId;
                            var0.customId = var7;
                            var6 = var6.id;
                            var0.componentId = var6;
                            var5 = _closure2_slot3;
                            var0.applicationId = var5;
                            var5 = var4.id;
                            var0.channelId = var5;
                            var4 = var4.guild_id;
                            var0.guildId = var4;
                            var0.localState = var3;
                            var0 = var1.bind(var2)(var0);
                        case 201:
                            var0 = true;
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var7, var8);
                var0.executeStateUpdate = var7;
                var7 = var3;
                if (!var7) {
                    _fun56390_ip = 302;
                    continue _fun56390
                }
            case 293:
                var8 = _closure1_slot13;
                var7 = var8.bind(var5)(var6);
            case 302:
                var0.isDisabled = var7;
                var2 = _closure1_slot14;
                var2 = var2.bind(var5)(var4, var6, var3);
                var0.visualState = var2;
                var0.error = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1, arg2() {
        var8 = arg0;
        var11 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var11;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 13;
        var1 = var5[var1];
        var3 = undefined;
        var9 = var4.bind(var3)(var1);
        var6 = var9.useStateFromStores;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot11;
            var2 = var3.getInteractionComponentState;
            var1 = _closure2_slot0;
            var1 = var1.customId;
            var0 = _closure2_slot1;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var6 = var6.bind(var9)(var2, var1);
        var1 = _closure1_slot18;
        var2 = var1.bind(var3)(var11, var6);
        var1 = var2.error;
        var2 = var2.validate;
        var _closure2_slot3 = var2;
        var10 = _closure1_slot4;
        var9 = var10.useCallback;
        var12 = var8.customId;
        var8 = new Array(3);
        var8[0] = var12;
        var11 = var11.id;
        var8[1] = var11;
        var8[2] = var2;
        var2 = function(arg0) { // Environment: var0
            _fun56396: for (var _fun56396_ip = 0;;) switch (_fun56396_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var0 = var0 == var3;
                    if (var0) {
                        _fun56396_ip = 110;
                        continue _fun56396
                    }
                case 12:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var1);
                    var5 = var6.dispatch;
                    var4 = {};
                    var1 = 'SET_INTERACTION_COMPONENT_STATE';
                    var4.type = var1;
                    var7 = _closure2_slot0;
                    var7 = var7.customId;
                    var4.rootContainerId = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var4.componentId = var7;
                    var4.state = var3;
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var2)(var3);
                    var1 = !var1;
                    var0 = !var1;
                case 110:
                    return var0;
            }
        };
        var2 = var9.bind(var10)(var2, var8);
        var _closure2_slot4 = var2;
        var8 = _closure1_slot1;
        var7 = 19;
        var7 = var5[var7];
        var7 = var8.bind(var3)(var7);
        var0 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var7.bind(var3)(var0);
        var0 = {};
        var0.state = var6;
        var0.executeStateUpdate = var2;
        var2 = false;
        var0.isDisabled = var2;
        var2 = 11;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.ActionComponentState;
        var2 = var2.NORMAL;
        var0.visualState = var2;
        var0.error = var1;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var1 = 'ApplicationWidget';
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Error;
            var4 = _closure2_slot0;
            var0 = var0.HermesInternal;
            var3 = var0.concat;
            var1 = '';
            var0 = ' does not support parents';
            var6 = var3.bind(var1)(var4, var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var5 = var7[var3];
    var3 = arg3;
    var9 = var3.bind(var0)(var5);
    var _closure1_slot4 = var9;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        _fun56400: for (var _fun56400_ip = 0;;) switch (_fun56400_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.type;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 10;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.BUTTON;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 296;
                    continue _fun56400
                }
            case 52:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.STRING_SELECT;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 292;
                    continue _fun56400
                }
            case 88:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.USER_SELECT;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 292;
                    continue _fun56400
                }
            case 124:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ROLE_SELECT;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 292;
                    continue _fun56400
                }
            case 160:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 292;
                    continue _fun56400
                }
            case 193:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHANNEL_SELECT;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 292;
                    continue _fun56400
                }
            case 226:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ACTION_ROW;
                if (!(var2 !== var5)) {
                    _fun56400_ip = 288;
                    continue _fun56400
                }
            case 259:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_INPUT;
            case 288:
                var2 = false;
                return var2;
            case 292:
                var2 = true;
                return var2;
            case 296:
                var1 = var1.style;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ButtonStyle;
                var0 = var0.LINK;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var4 = function arg0, arg1() {
        _fun56401: for (var _fun56401_ip = 0;;) switch (_fun56401_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var2 = arguments[2];
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun56401_ip = 17;
                    continue _fun56401
                }
            case 15:
                var2 = false;
            case 17:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 11;
                var0 = var0[var4];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ActionComponentState;
                var5 = var0.NORMAL;
                var0 = null;
                var8 = var0 != var7;
                if (!var8) {
                    _fun56401_ip = 102;
                    continue _fun56401
                }
            case 61:
                var9 = var7.state;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 12;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.InteractionState;
                var0 = var0.FAILED;
                var8 = var9 !== var0;
            case 102:
                var0 = var5;
                if (!var8) {
                    _fun56401_ip = 253;
                    continue _fun56401
                }
            case 111:
                var8 = var7.data;
                var9 = var8.interactionType;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 10;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.InteractionTypes;
                var8 = var8.MESSAGE_COMPONENT;
                if (!(var9 === var8)) {
                    _fun56401_ip = 178;
                    continue _fun56401
                }
            case 158:
                var7 = var7.data;
                var8 = var7.componentId;
                var7 = var6.id;
                if (!(var8 !== var7)) {
                    _fun56401_ip = 221;
                    continue _fun56401
                }
            case 178:
                var7 = _closure1_slot13;
                var7 = var7.bind(var3)(var6);
                if (!var7) {
                    _fun56401_ip = 219;
                    continue _fun56401
                }
            case 190:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var4];
                var7 = var8.bind(var3)(var7);
                var7 = var7.ActionComponentState;
                var5 = var7.DISABLED;
            case 219:
                _fun56401_ip = 250;
                continue _fun56401;
            case 221:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var4];
                var7 = var8.bind(var3)(var7);
                var7 = var7.ActionComponentState;
                var5 = var7.LOADING;
            case 250:
                var0 = var5;
            case 253:
                if (!var2) {
                    _fun56401_ip = 265;
                    continue _fun56401
                }
            case 256:
                var5 = _closure1_slot13;
                var2 = var5.bind(var3)(var6);
            case 265:
                if (!var2) {
                    _fun56401_ip = 297;
                    continue _fun56401
                }
            case 268:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ActionComponentState;
                var0 = var1.DISABLED;
            case 297:
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var3 = function arg0() {
        _fun56402: for (var _fun56402_ip = 0;;) switch (_fun56402_ip) {
            case 0:
                var4 = _closure1_slot7;
                var2 = var4.getChannel;
                var0 = arg0;
                var5 = var2.bind(var4)(var0);
                var _closure2_slot0 = var5;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 13;
                var0 = var6[var4];
                var9 = undefined;
                var11 = var2.bind(var9)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var0;
                var7 = new Array(1);
                var7[0] = var5;
                var0 = function() { // Environment: var1
                    _fun56403: for (var _fun56403_ip = 0;;) switch (_fun56403_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun56403_ip = 27;
                                continue _fun56403
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 27:
                            var0 = var2 == var0;
                            if (var0) {
                                _fun56403_ip = 61;
                                continue _fun56403
                            }
                        case 34:
                            var3 = _closure1_slot9;
                            var2 = var3.canChatInGuild;
                            var1 = _closure2_slot0;
                            var1 = var1.guild_id;
                            var0 = var2.bind(var3)(var1);
                        case 61:
                            return var0;
                    }
                };
                var0 = var10.bind(var11)(var8, var0, var7);
                var7 = var6[var4];
                var12 = var2.bind(var9)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var7;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var1
                    _fun56404: for (var _fun56404_ip = 0;;) switch (_fun56404_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun56404_ip = 27;
                                continue _fun56404
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 27:
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun56404_ip = 61;
                                continue _fun56404
                            }
                        case 34:
                            var3 = _closure1_slot6;
                            var2 = var3.isLurking;
                            var1 = _closure2_slot0;
                            var1 = var1.guild_id;
                            var0 = var2.bind(var3)(var1);
                        case 61:
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var10, var7, var8);
                var4 = var6[var4];
                var10 = var2.bind(var9)(var4);
                var8 = var10.useStateFromStores;
                var11 = _closure1_slot8;
                var4 = new Array(2);
                var4[0] = var11;
                var11 = _closure1_slot10;
                var4[1] = var11;
                var1 = function() { // Environment: var1
                    _fun56405: for (var _fun56405_ip = 0;;) switch (_fun56405_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var1 = _closure2_slot0;
                            var0 = null;
                            var5 = var0 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun56405_ip = 43;
                                continue _fun56405
                            }
                        case 34:
                            var5 = _closure2_slot0;
                            var1 = var5.guild_id;
                        case 43:
                            var5 = var0 != var1;
                            var1 = null;
                            if (!var5) {
                                _fun56405_ip = 122;
                                continue _fun56405
                            }
                        case 52:
                            var5 = var0 != var3;
                            var1 = null;
                            if (!var5) {
                                _fun56405_ip = 122;
                                continue _fun56405
                            }
                        case 61:
                            var6 = _closure1_slot8;
                            var5 = var6.getMember;
                            var4 = _closure2_slot0;
                            var8 = var0 == var4;
                            var4 = undefined;
                            if (var8) {
                                _fun56405_ip = 93;
                                continue _fun56405
                            }
                        case 84:
                            var7 = _closure2_slot0;
                            var4 = var7.guild_id;
                        case 93:
                            var3 = var3.id;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = var0 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun56405_ip = 119;
                                continue _fun56405
                            }
                        case 113:
                            var2 = var3.isPending;
                        case 119:
                            var1 = var2;
                        case 122:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun56405_ip = 132;
                                continue _fun56405
                            }
                        case 129:
                            var0 = var1;
                        case 132:
                            return var0;
                    }
                };
                var4 = var8.bind(var10)(var4, var1);
                var1 = 14;
                var1 = var6[var1];
                var8 = var2.bind(var9)(var1);
                var6 = var8.useCurrentUserCommunicationDisabled;
                var2 = null;
                var10 = var2 == var5;
                var1 = undefined;
                if (var10) {
                    _fun56402_ip = 210;
                    continue _fun56402
                }
            case 205:
                var1 = var5.guild_id;
            case 210:
                var8 = var6.bind(var8)(var1);
                var6 = _closure1_slot3;
                var1 = 2;
                var6 = var6.bind(var9)(var8, var1);
                var1 = 1;
                var1 = var6[var1];
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 15;
                var6 = var10[var3];
                var11 = var8.bind(var9)(var6);
                var6 = var11.useIsThreadModerator;
                var6 = var6.bind(var11)(var5);
                var3 = var10[var3];
                var8 = var8.bind(var9)(var3);
                var3 = var8.useCanUnarchiveThread;
                var3 = var3.bind(var8)(var5);
                var0 = !var0;
                if (var0) {
                    _fun56402_ip = 295;
                    continue _fun56402
                }
            case 292:
                var0 = var7;
            case 295:
                if (var0) {
                    _fun56402_ip = 301;
                    continue _fun56402
                }
            case 298:
                var0 = var4;
            case 301:
                if (var0) {
                    _fun56402_ip = 330;
                    continue _fun56402
                }
            case 304:
                var4 = var2 != var5;
                if (!var4) {
                    _fun56402_ip = 321;
                    continue _fun56402
                }
            case 311:
                var7 = var5.isLockedThread;
                var4 = var7.bind(var5)();
            case 321:
                if (!var4) {
                    _fun56402_ip = 327;
                    continue _fun56402
                }
            case 324:
                var4 = !var6;
            case 327:
                var0 = var4;
            case 330:
                if (var0) {
                    _fun56402_ip = 359;
                    continue _fun56402
                }
            case 333:
                var2 = var2 != var5;
                if (!var2) {
                    _fun56402_ip = 350;
                    continue _fun56402
                }
            case 340:
                var4 = var5.isArchivedThread;
                var2 = var4.bind(var5)();
            case 350:
                if (!var2) {
                    _fun56402_ip = 356;
                    continue _fun56402
                }
            case 353:
                var2 = !var3;
            case 356:
                var0 = var2;
            case 359:
                if (var0) {
                    _fun56402_ip = 365;
                    continue _fun56402
                }
            case 362:
                var0 = var1;
            case 365:
                var0 = !var0;
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var8 = var9.createContext;
    var5 = null;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot16 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/ComponentStateContext.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getActionComponentState = var4;
    var2.useShouldDisableInteractiveComponents = var3;
    var3 = function arg0() {
        _fun56406: for (var _fun56406_ip = 0;;) switch (_fun56406_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var13 = var0.message;
                var _closure2_slot0 = var13;
                var12 = var0.modal;
                var _closure2_slot1 = var12;
                var11 = var0.applicationWidget;
                var _closure2_slot2 = var11;
                var9 = var0.validators;
                var _closure2_slot3 = var9;
                var8 = var0.validationErrors;
                var _closure2_slot4 = var8;
                var7 = var0.setValidationErrors;
                var _closure2_slot5 = var7;
                var10 = var0.shouldDisableInteractiveComponents;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun56406_ip = 83;
                    continue _fun56406
                }
            case 81:
                var10 = false;
            case 83:
                var _closure2_slot6 = var10;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var2 = new Array(7);
                var2[0] = var13;
                var2[1] = var12;
                var2[2] = var11;
                var2[3] = var10;
                var2[4] = var9;
                var2[5] = var8;
                var2[6] = var7;
                var1 = function() { // Environment: var1
                    _fun56407: for (var _fun56407_ip = 0;;) switch (_fun56407_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var7 = null;
                            if (!(var7 == var0)) {
                                _fun56407_ip = 257;
                                continue _fun56407
                            }
                        case 18:
                            var0 = _closure2_slot1;
                            if (!(var7 == var0)) {
                                _fun56407_ip = 164;
                                continue _fun56407
                            }
                        case 29:
                            var0 = _closure2_slot2;
                            if (!(var7 == var0)) {
                                _fun56407_ip = 73;
                                continue _fun56407
                            }
                        case 37:
                            var0 = global;
                            var4 = var0.Error;
                            var0 = var4.prototype;
                            var3 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = 'ComponentStateContextProvider requires at least one of message, modal, or applicationWidget';
                            var12 = var3;
                            var0 = new var12[var4](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var3;
                            throw var0;
                        case 73:
                            var0 = {};
                            var5 = 'ApplicationWidget';
                            var _closure3_slot0 = var5;
                            var3 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.Error;
                                var4 = _closure3_slot0;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var1 = '';
                                var0 = ' does not support state';
                                var6 = var3.bind(var1)(var4, var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                            };
                            var0.useComponentState = var3;
                            var8 = _closure1_slot17;
                            var6 = _closure2_slot2;
                            var4 = undefined;
                            var8 = var8.bind(var4)(var6);
                            var0.containerId = var8;
                            var0.applicationWidget = var6;
                            var6 = _closure2_slot3;
                            var0.validators = var6;
                            var6 = _closure2_slot4;
                            var0.validationErrors = var6;
                            var6 = _closure2_slot5;
                            var0.setValidationErrors = var6;
                            var3 = _closure1_slot21;
                            var3 = var3.bind(var4)(var5);
                            var0.getParents = var3;
                            return var0;
                        case 164:
                            var0 = {};
                            var5 = _closure1_slot20;
                            var4 = var5.bind;
                            var3 = _closure2_slot1;
                            var4 = var4.bind(var5)(var7, var3);
                            var0.useComponentState = var4;
                            var4 = var3.channelId;
                            var0.channelId = var4;
                            var4 = var3.customId;
                            var0.containerId = var4;
                            var0.modal = var3;
                            var3 = _closure2_slot3;
                            var0.validators = var3;
                            var3 = _closure2_slot4;
                            var0.validationErrors = var3;
                            var3 = _closure2_slot5;
                            var0.setValidationErrors = var3;
                            var3 = function arg0() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getParents;
                                var0 = _closure2_slot1;
                                var1 = var0.components;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.getParents = var3;
                            return var0;
                        case 257:
                            var0 = {};
                            var6 = _closure1_slot19;
                            var5 = var6.bind;
                            var3 = _closure2_slot0;
                            var4 = _closure2_slot6;
                            var4 = var5.bind(var6)(var7, var3, var4);
                            var0.useComponentState = var4;
                            var4 = var3.channel_id;
                            var0.channelId = var4;
                            var4 = var3.id;
                            var0.containerId = var4;
                            var0.message = var3;
                            var2 = _closure2_slot3;
                            var0.validators = var2;
                            var1 = function arg0() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getParents;
                                var0 = _closure2_slot0;
                                var1 = var0.components;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.getParents = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot12;
                var0 = _closure1_slot16;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ComponentStateContextProvider = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var0 = _closure1_slot16;
        var3 = var1.bind(var2)(var0);
        var2 = var3.useComponentState;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useComponentState = var3;
    var3 = function() {
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var0 = _closure1_slot16;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useComponentStateContext = var3;
    var3 = function() {
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var0 = _closure1_slot16;
        var0 = var1.bind(var2)(var0);
        var0 = var0.containerId;
        return var0;
    };
    var2.useComponentContainerId = var3;
    var1 = function arg0() {
        _fun56414: for (var _fun56414_ip = 0;;) switch (_fun56414_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.useContext;
                var0 = _closure1_slot16;
                var0 = var1.bind(var2)(var0);
                var3 = var0.validationErrors;
                var0 = null;
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun56414_ip = 51;
                    continue _fun56414
                }
            case 39:
                var2 = arg0;
                var2 = var2.id;
                var1 = var3[var2];
            case 51:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun56414_ip = 63;
                    continue _fun56414
                }
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.useComponentError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6525, 3092, 1372, 1681, 4234, 1621, 6828, 33, 1645, 3978, 3976, 566, 6830, 6697, 6831, 6797, 806, 4103, 3974, 2]);