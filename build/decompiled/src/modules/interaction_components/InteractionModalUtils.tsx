// modules/interaction_components/InteractionModalUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: useApplicationInfo, environment: var3
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var5 = var4.id;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = var4.icon;
        var1[1] = var5;
        var5 = var4.name;
        var1[2] = var5;
        var4 = var4.bot;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun113765: for (var _fun113765_ip = 0;;) switch (_fun113765_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var7 = var0.bind(var1)();
                    var6 = null;
                    var0 = var6 != var7;
                    var3 = undefined;
                    var5 = undefined;
                    if (!var0) {
                        _fun113765_ip = 83;
                        continue _fun113765
                    }
                case 30:
                    var1 = _closure2_slot0;
                    var1 = var1.bot;
                    var1 = var6 != var1;
                    var5 = undefined;
                    if (!var1) {
                        _fun113765_ip = 83;
                        continue _fun113765
                    }
                case 52:
                    var4 = _closure1_slot9;
                    var1 = var4.getMember;
                    var0 = _closure2_slot0;
                    var0 = var0.bot;
                    var0 = var0.id;
                    var5 = var1.bind(var4)(var7, var0);
                case 83:
                    var0 = {};
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 14;
                    var1 = var7[var1];
                    var8 = var4.bind(var3)(var1);
                    var7 = var8.getApplicationIconURL;
                    var4 = {};
                    var9 = _closure2_slot0;
                    var10 = var9.id;
                    var4.id = var10;
                    var9 = var9.icon;
                    var4.icon = var9;
                    var9 = true;
                    var4.botIconFirst = var9;
                    var10 = var6 != var5;
                    var9 = undefined;
                    if (!var10) {
                        _fun113765_ip = 164;
                        continue _fun113765
                    }
                case 154:
                    var10 = _closure2_slot0;
                    var9 = var10.bot;
                case 164:
                    var4.bot = var9;
                    var4.guildMember = var5;
                    var4 = var7.bind(var8)(var4);
                    var0.applicationIconURL = var4;
                    var7 = var6 == var5;
                    var4 = undefined;
                    if (var7) {
                        _fun113765_ip = 199;
                        continue _fun113765
                    }
                case 193:
                    var4 = var5.nick;
                case 199:
                    if (!(var6 == var4)) {
                        _fun113765_ip = 245;
                        continue _fun113765
                    }
                case 203:
                    var4 = _closure2_slot0;
                    var4 = var4.bot;
                    if (!(var6 == var4)) {
                        _fun113765_ip = 228;
                        continue _fun113765
                    }
                case 217:
                    var4 = _closure2_slot0;
                    var4 = var4.name;
                    _fun113765_ip = 243;
                    continue _fun113765;
                case 228:
                    var6 = _closure2_slot0;
                    var6 = var6.bot;
                    var4 = var6.username;
                case 243:
                    _fun113765_ip = 251;
                    continue _fun113765;
                case 245:
                    var4 = var5.nick;
                case 251:
                    var0.applicationName = var4;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.applicationBaseUrl = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1) { // Original name: getUploadsForModal, environment: var3
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot11;
        var3 = var4.getUploads;
        var1 = _closure1_slot8;
        var2 = var1.InteractionModal;
        var1 = arg0;
        var2 = var3.bind(var4)(var1, var2);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun113767: for (var _fun113767_ip = 0;;) switch (_fun113767_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.deserializeComponentUploadId;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    var2 = var2 == var0;
                    if (var2) {
                        _fun113767_ip = 59;
                        continue _fun113767
                    }
                case 53:
                    var1 = var0.containerId;
                case 59:
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var1 = function() { // Original name: submitModal, environment: var3
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var1;
    var0 = function() { // Original name: _submitModal, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun113771: for (var _fun113771_ip = 0;;) switch (_fun113771_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113771_ip = 346;
                            continue _fun113771
                        }
                    case 18:
                        var _closure4_slot0 = var3;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var10;
                        var2 = undefined;
                        var _closure4_slot3 = var2;
                        var _closure4_slot4 = var2;
                        var _closure4_slot5 = var2;
                        var _closure4_slot6 = var2;
                        var7 = var3.channelId;
                        var6 = _closure1_slot7;
                        var1 = var6.getChannel;
                        var6 = var1.bind(var6)(var7);
                        _closure4_slot3 = var6;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 23;
                        var1 = var9[var1];
                        var8 = var8.bind(var2)(var1);
                        var1 = null;
                        var6 = var1 != var6;
                        var1 = 'expected channel';
                        var1 = var8.bind(var2)(var6, var1);
                        var6 = _closure1_slot18;
                        var1 = var3.customId;
                        var8 = var6.bind(var2)(var7, var1);
                        var6 = var8.length;
                        var1 = 0;
                        var6 = var6 > var1;
                        var1 = undefined;
                        if (!var6) {
                            _fun113771_ip = 172;
                            continue _fun113771
                        }
                    case 147:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 25;
                        var6 = var9[var6];
                        var6 = var7.bind(var2)(var6);
                        var1 = var6.bind(var2)(var8);
                    case 172:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var6 = 26;
                        var6 = var14[var6];
                        var9 = var13.bind(var2)(var6);
                        var7 = var9.addQueued;
                        var6 = {};
                        var11 = {};
                        var12 = 13;
                        var12 = var14[var12];
                        var12 = var13.bind(var2)(var12);
                        var12 = var12.InteractionTypes;
                        var12 = var12.MODAL_SUBMIT;
                        var11.interactionType = var12;
                        var12 = var3.application;
                        var12 = var12.id;
                        var11.applicationId = var12;
                        var6.data = var11;
                        var6.preflight = var1;
                        var6 = var7.bind(var9)(var10, var6);
                        SaveGenerator(address = 264);
                    case 262:
                        return var1;
                    case 264:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun113771_ip = 343;
                            continue _fun113771
                        }
                    case 270:
                        var7 = var8.map;
                        var6 = function(arg0, arg1) { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getAttachmentPayload;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                        _closure4_slot4 = var6;
                        var7 = _closure1_slot16;
                        var6 = var3.customId;
                        var5 = var3.components;
                        var3 = {};
                        var3.uploads = var8;
                        var3 = var7.bind(var2)(var6, var5, var3);
                        _closure4_slot5 = var3;
                        var3 = function() { // Original name: send, environment: var4
                            _fun113773: for (var _fun113773_ip = 0;;) switch (_fun113773_ip) {
                                case 0:
                                    var1 = _closure4_slot1;
                                    var0 = null;
                                    var0 = var0 != var1;
                                    if (!var0) {
                                        _fun113773_ip = 26;
                                        continue _fun113773
                                    }
                                case 16:
                                    var1 = _closure4_slot1;
                                    var0 = var1.aborted;
                                case 26:
                                    if (var0) {
                                        _fun113773_ip = 293;
                                        continue _fun113773
                                    }
                                case 32:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var0 = 28;
                                    var0 = var9[var0];
                                    var7 = undefined;
                                    var0 = var8.bind(var7)(var0);
                                    var2 = var0.HTTP;
                                    var1 = var2.post;
                                    var0 = {};
                                    var4 = _closure1_slot15;
                                    var4 = var4.INTERACTIONS;
                                    var0.url = var4;
                                    var4 = {};
                                    var6 = 13;
                                    var6 = var9[var6];
                                    var6 = var8.bind(var7)(var6);
                                    var6 = var6.InteractionTypes;
                                    var6 = var6.MODAL_SUBMIT;
                                    var4.type = var6;
                                    var8 = _closure4_slot0;
                                    var6 = var8.application;
                                    var6 = var6.id;
                                    var4.application_id = var6;
                                    var6 = _closure4_slot3;
                                    var6 = var6.id;
                                    var4.channel_id = var6;
                                    var6 = _closure4_slot3;
                                    var6 = var6.guild_id;
                                    var4.guild_id = var6;
                                    var6 = {};
                                    var9 = var8.id;
                                    var6.id = var9;
                                    var8 = var8.customId;
                                    var6.custom_id = var8;
                                    var8 = _closure4_slot5;
                                    var6.components = var8;
                                    var8 = _closure4_slot4;
                                    var9 = var8.length;
                                    var8 = 0;
                                    var8 = var9 > var8;
                                    if (!var8) {
                                        _fun113773_ip = 212;
                                        continue _fun113773
                                    }
                                case 208:
                                    var7 = _closure4_slot4;
                                case 212:
                                    var6.attachments = var7;
                                    var4.data = var6;
                                    var6 = _closure1_slot6;
                                    var5 = var6.getSessionId;
                                    var5 = var5.bind(var6)();
                                    var4.session_id = var5;
                                    var5 = _closure4_slot2;
                                    var4.nonce = var5;
                                    var0.body = var4;
                                    var3 = _closure4_slot1;
                                    var0.signal = var3;
                                    var3 = false;
                                    var0.rejectWithError = var3;
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.catch;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun113774: for (var _fun113774_ip = 0;;) switch (_fun113774_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var2 = var0.status;
                                                var1 = 429;
                                                if (!(var1 !== var2)) {
                                                    _fun113774_ip = 63;
                                                    continue _fun113774
                                                }
                                            case 18:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 26;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var3 = var3.bind(var1)(var2);
                                                var2 = var3.setFailed;
                                                var1 = _closure4_slot2;
                                                var1 = var2.bind(var3)(var1);
                                                _fun113774_ip = 136;
                                                continue _fun113774;
                                            case 63:
                                                var1 = global;
                                                var3 = var1.setTimeout;
                                                var2 = _closure4_slot6;
                                                var0 = var0.body;
                                                var4 = var0.retry_after;
                                                var5 = _closure1_slot1;
                                                var1 = _closure1_slot2;
                                                var0 = 29;
                                                var0 = var1[var0];
                                                var1 = undefined;
                                                var0 = var5.bind(var1)(var0);
                                                var0 = var0.Millis;
                                                var0 = var0.SECOND;
                                                var0 = var4 * var0;
                                                var0 = var3.bind(var1)(var2, var0);
                                            case 136:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 293:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        _closure4_slot6 = var3;
                        var3 = var3.bind(var2)();
                        return var2;
                    case 343:
                        return var1;
                    case 346:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.DraftType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.InteractionModalState;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot15 = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: getData, environment: var3
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun113776: for (var _fun113776_ip = 0;;) switch (_fun113776_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var7 = 13;
                    var0 = var0[var7];
                    var5 = undefined;
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.ACTION_ROW;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 1266;
                        continue _fun113776
                    }
                case 54:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.TEXT_INPUT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 1178;
                        continue _fun113776
                    }
                case 90:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.FILE_UPLOAD;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 1051;
                        continue _fun113776
                    }
                case 126:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.STRING_SELECT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 963;
                        continue _fun113776
                    }
                case 162:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.USER_SELECT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 857;
                        continue _fun113776
                    }
                case 198:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.ROLE_SELECT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 857;
                        continue _fun113776
                    }
                case 234:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.MENTIONABLE_SELECT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 857;
                        continue _fun113776
                    }
                case 270:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.CHANNEL_SELECT;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 857;
                        continue _fun113776
                    }
                case 306:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.TEXT_DISPLAY;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 844;
                        continue _fun113776
                    }
                case 342:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.LABEL;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 784;
                        continue _fun113776
                    }
                case 378:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.RADIO_GROUP;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 696;
                        continue _fun113776
                    }
                case 414:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.CHECKBOX_GROUP;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 608;
                        continue _fun113776
                    }
                case 450:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ComponentType;
                    var0 = var0.CHECKBOX;
                    if (!(var0 !== var3)) {
                        _fun113776_ip = 519;
                        continue _fun113776
                    }
                case 483:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 23;
                    var0 = var4[var0];
                    var4 = var3.bind(var5)(var0);
                    var3 = false;
                    var0 = 'unreachable';
                    var0 = var4.bind(var5)(var3, var0);
                    return var5;
                case 519:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var7)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var3 = var3 == var4;
                    var7 = undefined;
                    if (var3) {
                        _fun113776_ip = 585;
                        continue _fun113776
                    }
                case 580:
                    var7 = var4.type;
                case 585:
                    var3 = var2.type;
                    var3 = var7 === var3;
                    if (!var3) {
                        _fun113776_ip = 602;
                        continue _fun113776
                    }
                case 597:
                    var3 = var4.value;
                case 602:
                    var0.value = var3;
                    return var0;
                case 608:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var7)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if (var7) {
                        _fun113776_ip = 674;
                        continue _fun113776
                    }
                case 669:
                    var8 = var4.type;
                case 674:
                    var7 = var2.type;
                    var3 = null;
                    if (!(var8 === var7)) {
                        _fun113776_ip = 690;
                        continue _fun113776
                    }
                case 685:
                    var3 = var4.values;
                case 690:
                    var0.values = var3;
                    return var0;
                case 696:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var7)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if (var7) {
                        _fun113776_ip = 762;
                        continue _fun113776
                    }
                case 757:
                    var8 = var4.type;
                case 762:
                    var7 = var2.type;
                    var3 = null;
                    if (!(var8 === var7)) {
                        _fun113776_ip = 778;
                        continue _fun113776
                    }
                case 773:
                    var3 = var4.value;
                case 778:
                    var0.value = var3;
                    return var0;
                case 784:
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var8 = _closure1_slot16;
                    var7 = _closure2_slot0;
                    var9 = var2.component;
                    var4 = new Array(1);
                    var4[0] = var9;
                    var3 = _closure2_slot1;
                    var4 = var8.bind(var5)(var7, var4, var3);
                    var3 = 0;
                    var3 = var4[var3];
                    var0.component = var3;
                    return var0;
                case 844:
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    return var0;
                case 857:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var7)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if (var7) {
                        _fun113776_ip = 923;
                        continue _fun113776
                    }
                case 918:
                    var8 = var4.type;
                case 923:
                    var7 = var2.type;
                    var3 = null;
                    if (!(var8 === var7)) {
                        _fun113776_ip = 957;
                        continue _fun113776
                    }
                case 934:
                    var8 = var4.selectedOptions;
                    var7 = var8.map;
                    var4 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var0 = var0.value;
                        return var0;
                    };
                    var3 = var7.bind(var8)(var4);
                case 957:
                    var0.values = var3;
                    return var0;
                case 963:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var7)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if (var7) {
                        _fun113776_ip = 1029;
                        continue _fun113776
                    }
                case 1024:
                    var8 = var4.type;
                case 1029:
                    var7 = var2.type;
                    var3 = null;
                    if (!(var8 === var7)) {
                        _fun113776_ip = 1045;
                        continue _fun113776
                    }
                case 1040:
                    var3 = var4.values;
                case 1045:
                    var0.values = var3;
                    return var0;
                case 1051:
                    var7 = _closure1_slot14;
                    var4 = var7.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var0 = var4.bind(var7)(var3, var0);
                    var3 = null;
                    var4 = var3 == var0;
                    var7 = undefined;
                    if (var4) {
                        _fun113776_ip = 1095;
                        continue _fun113776
                    }
                case 1090:
                    var7 = var0.type;
                case 1095:
                    var4 = var2.type;
                    var8 = null;
                    if (!(var7 === var4)) {
                        _fun113776_ip = 1112;
                        continue _fun113776
                    }
                case 1106:
                    var8 = var0.uploadIds;
                case 1112:
                    var0 = {};
                    var4 = var2.type;
                    var0.type = var4;
                    var4 = var2.customId;
                    var0.custom_id = var4;
                    var7 = var3 == var8;
                    var4 = undefined;
                    if (var7) {
                        _fun113776_ip = 1160;
                        continue _fun113776
                    }
                case 1143:
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = _closure2_slot1;
                        var2 = var1.uploads;
                        var1 = var2.findIndex;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var7.bind(var8)(var6);
                case 1160:
                    var6 = var3 != var4;
                    var3 = null;
                    if (!var6) {
                        _fun113776_ip = 1172;
                        continue _fun113776
                    }
                case 1169:
                    var3 = var4;
                case 1172:
                    var0.values = var3;
                    return var0;
                case 1178:
                    var6 = _closure1_slot14;
                    var4 = var6.getInteractionComponentState;
                    var3 = _closure2_slot0;
                    var0 = var2.id;
                    var4 = var4.bind(var6)(var3, var0);
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var3 = var2.customId;
                    var0.custom_id = var3;
                    var3 = null;
                    var6 = var3 == var4;
                    var7 = undefined;
                    if (var6) {
                        _fun113776_ip = 1244;
                        continue _fun113776
                    }
                case 1239:
                    var7 = var4.type;
                case 1244:
                    var6 = var2.type;
                    var3 = null;
                    if (!(var7 === var6)) {
                        _fun113776_ip = 1260;
                        continue _fun113776
                    }
                case 1255:
                    var3 = var4.value;
                case 1260:
                    var0.value = var3;
                    return var0;
                case 1266:
                    var0 = {};
                    var3 = var2.type;
                    var0.type = var3;
                    var4 = _closure1_slot16;
                    var3 = _closure2_slot0;
                    var2 = var2.components;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.components = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/InteractionModalUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: useIsFirstTextInputInModal, environment: var3
        _fun113780: for (var _fun113780_ip = 0;;) switch (_fun113780_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.useComponentStateContext;
                var3 = var1.bind(var2)();
                var2 = null;
                var5 = var2 == var3;
                var1 = undefined;
                if (var5) {
                    _fun113780_ip = 73;
                    continue _fun113780
                }
            case 46:
                var3 = var3.modal;
                var5 = var2 == var3;
                var1 = undefined;
                if (var5) {
                    _fun113780_ip = 73;
                    continue _fun113780
                }
            case 61:
                var5 = var3.components;
                var3 = 0;
                var1 = var5[var3];
            case 73:
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun113780_ip = 87;
                    continue _fun113780
                }
            case 82:
                var2 = var1.type;
            case 87:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.ComponentType;
                var0 = var0.ACTION_ROW;
                var0 = var2 === var0;
                if (!var0) {
                    _fun113780_ip = 150;
                    continue _fun113780
                }
            case 126:
                var2 = var1.components;
                var1 = 0;
                var1 = var2[var1];
                var2 = var1.id;
                var1 = arg0;
                var0 = var2 === var1;
            case 150:
                return var0;
        }
    };
    var2.useIsFirstTextInputInModal = var4;
    var4 = function(arg0, arg1) { // Original name: useModalState, environment: var3
        var14 = arg0;
        var16 = arg1;
        var _closure2_slot0 = var14;
        var _closure2_slot1 = var16;
        var9 = var14.application;
        var15 = var14.customId;
        var _closure2_slot2 = var15;
        var8 = var14.components;
        var4 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 16;
        var1 = var11[var1];
        var7 = undefined;
        var1 = var4.bind(var7)(var1);
        var18 = var1.bind(var7)();
        var _closure2_slot3 = var18;
        var2 = _closure1_slot5;
        var1 = var2.useState;
        var17 = null;
        var1 = var1.bind(var2)(var17);
        var12 = _closure1_slot4;
        var6 = 2;
        var1 = var12.bind(var7)(var1, var6);
        var3 = 0;
        var5 = var1[var3];
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot4 = var1;
        var13 = _closure1_slot5;
        var1 = var13.useState;
        var1 = var1.bind(var13)(var17);
        var1 = var12.bind(var7)(var1, var6);
        var17 = var1[var3];
        var _closure2_slot5 = var17;
        var1 = var1[var2];
        var _closure2_slot6 = var1;
        var19 = _closure1_slot5;
        var13 = var19.useState;
        var1 = {};
        var1 = var13.bind(var19)(var1);
        var1 = var12.bind(var7)(var1, var6);
        var3 = var1[var3];
        var2 = var1[var2];
        var6 = _closure1_slot0;
        var1 = 17;
        var1 = var11[var1];
        var19 = var6.bind(var7)(var1);
        var13 = var19.useStateFromStores;
        var1 = _closure1_slot12;
        var12 = new Array(1);
        var12[0] = var1;
        var6 = new Array(1);
        var6[0] = var17;
        var1 = function() { // Environment: var10
            var2 = _closure1_slot12;
            var1 = var2.getModalState;
            var0 = _closure2_slot5;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var13.bind(var19)(var12, var1, var6);
        var _closure2_slot7 = var6;
        var1 = 18;
        var1 = var11[var1];
        var4 = var4.bind(var7)(var1);
        var1 = function() { // Environment: var10
            var0 = global;
            var0 = var0.Set;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4 = var4.bind(var7)(var1);
        var _closure2_slot8 = var4;
        var13 = _closure1_slot5;
        var12 = var13.useCallback;
        var11 = _closure1_slot3;
        var1 = function*() { // Environment: var10
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113785: for (var _fun113785_ip = 0;;) switch (_fun113785_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113785_ip = 151;
                            continue _fun113785
                        }
                    case 10:
                        var3 = _closure2_slot4;
                        var2 = undefined;
                        var4 = null;
                        var3 = var3.bind(var2)(var4);
                        var3 = _closure2_slot6;
                        var3 = var3.bind(var2)(var4);
                        var4 = _closure2_slot8;
                        var3 = function(arg0) { // Environment: var3
                            var3 = arg0;
                            var1 = true;
                            var _closure5_slot0 = var1;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var0
                                _fun113787: for (var _fun113787_ip = 0;;) switch (_fun113787_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)();
                                        if (var1) {
                                            _fun113787_ip = 21;
                                            continue _fun113787
                                        }
                                    case 12:
                                        var1 = false;
                                        _closure5_slot0 = var1;
                                    case 21:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure5_slot0;
                            return var0;
                        };
                        var3 = var3.bind(var2)(var4);
                        if (!var3) {
                            _fun113785_ip = 145;
                            continue _fun113785
                        }
                    case 56:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 19;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.fromTimestamp;
                        var4 = global;
                        var7 = var4.Date;
                        var4 = var7.now;
                        var4 = var4.bind(var7)();
                        var5 = var5.bind(var6)(var4);
                        var4 = _closure2_slot6;
                        var4 = var4.bind(var2)(var5);
                        var4 = _closure1_slot19;
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot3;
                        var1 = var4.bind(var2)(var3, var1, var5);
                        SaveGenerator(address = 139);
                    case 137:
                        return var1;
                    case 139:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun113785_ip = 148;
                            continue _fun113785
                        }
                    case 145:
                        return var2;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var11 = var11.bind(var7)(var1);
        var1 = new Array(3);
        var1[0] = var18;
        var1[1] = var14;
        var1[2] = var4;
        var1 = var12.bind(var13)(var11, var1);
        var13 = _closure1_slot5;
        var12 = var13.useEffect;
        var11 = new Array(5);
        var11[0] = var17;
        var11[1] = var6;
        var11[2] = var16;
        var11[3] = var15;
        var14 = var14.channelId;
        var11[4] = var14;
        var10 = function() { // Environment: var10
            _fun113788: for (var _fun113788_ip = 0;;) switch (_fun113788_ip) {
                case 0:
                    var3 = _closure2_slot7;
                    var2 = _closure1_slot13;
                    var2 = var2.SUCCEEDED;
                    if (!(var3 === var2)) {
                        _fun113788_ip = 166;
                        continue _fun113788
                    }
                case 27:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var2 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.dispatch;
                    var2 = {};
                    var8 = 'CLEAR_INTERACTION_MODAL_STATE';
                    var2.type = var8;
                    var8 = _closure2_slot2;
                    var2.customId = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = 21;
                    var2 = var5[var2];
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.removeFiles;
                    var2 = _closure2_slot0;
                    var5 = var2.channelId;
                    var4 = _closure1_slot18;
                    var2 = var2.channelId;
                    var8 = var4.bind(var3)(var2, var8);
                    var4 = var8.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var4 = var4.bind(var8)(var2);
                    var2 = _closure1_slot8;
                    var2 = var2.InteractionModal;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var3)();
                case 166:
                    var3 = _closure2_slot7;
                    var2 = _closure1_slot13;
                    var2 = var2.ERRORED;
                    if (!(var3 === var2)) {
                        _fun113788_ip = 252;
                        continue _fun113788
                    }
                case 184:
                    var2 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 22;
                    var3 = var6[var0];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var0 = var6[var0];
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.uJgdEu;
                    var0 = var3.bind(var4)(var0);
                    var0 = var2.bind(var1)(var0);
                case 252:
                    var0 = undefined;
                    return var0;
            }
        };
        var10 = var12.bind(var13)(var10, var11);
        var0 = _closure1_slot17;
        var7 = var0.bind(var7)(var9);
        var0 = {};
        var0.components = var8;
        var8 = var7.applicationIconURL;
        var0.applicationIconURL = var8;
        var7 = var7.applicationName;
        var0.applicationName = var7;
        var0.submissionState = var6;
        var0.error = var5;
        var0.validators = var4;
        var0.validationErrors = var3;
        var0.setValidationErrors = var2;
        var0.onSubmit = var1;
        return var0;
    };
    var2.useModalState = var4;
    var3 = function(arg0) { // Original name: useIframeModalState, environment: var3
        _fun113790: for (var _fun113790_ip = 0;;) switch (_fun113790_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.application;
                var9 = var0.customId;
                var3 = _closure1_slot17;
                var11 = undefined;
                var3 = var3.bind(var11)(var2);
                var5 = var3.applicationIconURL;
                var4 = var3.applicationName;
                var3 = var3.applicationBaseUrl;
                var8 = _closure1_slot7;
                var7 = var8.getChannel;
                var6 = var0.channelId;
                var8 = var7.bind(var8)(var6);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 23;
                var1 = var7[var1];
                var10 = var6.bind(var11)(var1);
                var6 = null;
                var7 = var6 != var8;
                var1 = 'channel should not be null';
                var1 = var10.bind(var11)(var7, var1);
                var1 = {};
                var18 = var0.channelId;
                var16 = var2.id;
                var7 = global;
                var2 = var7.HermesInternal;
                var11 = var2.concat;
                var2 = '';
                var10 = ':';
                var19 = var2;
                var17 = var10;
                var15 = var10;
                var14 = var9;
                var10 = var19[var11](var18, var17, var16, var15, var14, var13);
                var1.instance_id = var10;
                var1.custom_id = var9;
                var9 = var0.channelId;
                var1.channel_id = var9;
                var9 = var8.guild_id;
                var9 = var6 != var9;
                if (!var9) {
                    _fun113790_ip = 192;
                    continue _fun113790
                }
            case 183:
                var10 = var8.guild_id;
                var9 = var2 !== var10;
            case 192:
                if (!var9) {
                    _fun113790_ip = 206;
                    continue _fun113790
                }
            case 195:
                var8 = var8.guild_id;
                var1.guild_id = var8;
            case 206:
                var7 = var7.URL;
                var6 = var6 != var3;
                if (!var6) {
                    _fun113790_ip = 222;
                    continue _fun113790
                }
            case 219:
                var2 = var3;
            case 222:
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var19 = var6;
                var18 = var2;
                var2 = new var19[var7](var18, var17);
                var2 = var2 instanceof Object ? var2 : var6;
                var0 = var0.iframePath;
                var2.pathname = var0;
                var0 = {};
                var0.applicationIconURL = var5;
                var0.applicationName = var4;
                var0.applicationBaseUrl = var3;
                var0.queryParams = var1;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                var0.iframeUrl = var1;
                return var0;
        }
    };
    var2.useIframeModalState = var3;
    var2.submitModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1216, 1372, 3954, 1672, 3172, 3953, 12727, 6781, 660, 6780, 1636, 1417, 7878, 5581, 566, 4884, 21, 806, 7567, 1234, 44, 3928, 6575, 6751, 3960, 507, 667, 2]);