// modules/create_guild/native/components/AcceptInviteContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteStates;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {};
    var9 = 9;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.paddingContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/AcceptInviteContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80721: for (var _fun80721_ip = 0;;) switch (_fun80721_ip) {
            case 0:
                var3 = arg0;
                var11 = var3.code;
                var _closure2_slot0 = var11;
                var10 = var3.onPressClose;
                var _closure2_slot1 = var10;
                var4 = null;
                var2 = Object.create(var4);
                var0 = 0;
                var2.code = var0;
                var2.onPressClose = var0;
                var18 = {};
                var17 = var3;
                var16 = var2;
                var6 = copyDataProperties(var18, var17, var16);
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var2 = _closure1_slot11;
                var8 = var2.bind(var3)();
                var13 = var6.isRegistration;
                var _closure2_slot2 = var13;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 10;
                var2 = var9[var2];
                var5 = var7.bind(var3)(var2);
                var2 = var5.useNavigation;
                var2 = var2.bind(var5)();
                var _closure2_slot3 = var2;
                var5 = 11;
                var5 = var9[var5];
                var12 = var7.bind(var3)(var5);
                var9 = var12.useStateFromStoresObject;
                var5 = _closure1_slot7;
                var7 = new Array(3);
                var7[0] = var5;
                var5 = _closure1_slot5;
                var7[1] = var5;
                var5 = _closure1_slot6;
                var7[2] = var5;
                var5 = function() { // Environment: var1
                    _fun80722: for (var _fun80722_ip = 0;;) switch (_fun80722_ip) {
                        case 0:
                            var6 = _closure1_slot7;
                            var0 = var6.getInvite;
                            var5 = _closure2_slot0;
                            var4 = var0.bind(var6)(var5);
                            var0 = {};
                            var0.invite = var4;
                            var3 = var6.getInviteError;
                            var3 = var3.bind(var6)(var5);
                            var0.inviteError = var3;
                            var3 = null;
                            var7 = var3 == var4;
                            var6 = undefined;
                            if (var7) {
                                _fun80722_ip = 64;
                                continue _fun80722
                            }
                        case 59:
                            var6 = var4.guild;
                        case 64:
                            var6 = var3 != var6;
                            if (!var6) {
                                _fun80722_ip = 99;
                                continue _fun80722
                            }
                        case 71:
                            var9 = _closure1_slot6;
                            var8 = var9.getGuild;
                            var7 = var4.guild;
                            var7 = var7.id;
                            var7 = var8.bind(var9)(var7);
                            var6 = var3 != var7;
                        case 99:
                            var0.isGuildMember = var6;
                            var6 = var3 == var4;
                            var5 = undefined;
                            if (var6) {
                                _fun80722_ip = 118;
                                continue _fun80722
                            }
                        case 113:
                            var5 = var4.guild;
                        case 118:
                            var5 = var3 != var5;
                            var3 = null;
                            if (!var5) {
                                _fun80722_ip = 152;
                                continue _fun80722
                            }
                        case 127:
                            var6 = _closure1_slot5;
                            var5 = var6.getSelfMember;
                            var4 = var4.guild;
                            var4 = var4.id;
                            var3 = var5.bind(var6)(var4);
                        case 152:
                            var0.guildMember = var3;
                            var3 = _closure1_slot7;
                            var2 = var3.getFriendMemberIds;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            var0.friendMemberIds = var1;
                            return var0;
                    }
                };
                var5 = var9.bind(var12)(var7, var5);
                var _closure2_slot4 = var5;
                var9 = _closure1_slot4;
                var7 = var9.useRef;
                var7 = var7.bind(var9)(var4);
                var _closure2_slot5 = var7;
                var7 = var5.invite;
                var12 = var4 == var7;
                var9 = undefined;
                if (var12) {
                    _fun80721_ip = 222;
                    continue _fun80721
                }
            case 217:
                var9 = var7.state;
            case 222:
                var7 = _closure1_slot8;
                var7 = var7.RESOLVED;
                var14 = var9 === var7;
                _closure2_slot6 = var14;
                var7 = var5.invite;
                var9 = var4 == var7;
                var4 = undefined;
                if (var9) {
                    _fun80721_ip = 260;
                    continue _fun80721
                }
            case 255:
                var4 = var7.guild;
            case 260:
                _closure2_slot7 = var4;
                var7 = _closure1_slot4;
                var12 = var7.useEffect;
                var9 = new Array(3);
                var9[0] = var11;
                var9[1] = var14;
                var9[2] = var4;
                var4 = function() { // Environment: var1
                    _fun80723: for (var _fun80723_ip = 0;;) switch (_fun80723_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var2 = var0.current;
                            var0 = _closure2_slot0;
                            if (!(var2 !== var0)) {
                                _fun80723_ip = 147;
                                continue _fun80723
                            }
                        case 23:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun80723_ip = 94;
                                continue _fun80723
                            }
                        case 30:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.getEligibleInviteFriendMembersExperiment;
                            var2 = {
                                'location': 'accept_invite_modal_native',
                                'autoTrackExposure': true
                            };
                            var5 = _closure2_slot7;
                            var2.guild = var5;
                            var2 = var3.bind(var4)(var2);
                            var0 = var2.showFriendsInServer;
                        case 94:
                            if (!var0) {
                                _fun80723_ip = 147;
                                continue _fun80723
                            }
                        case 97:
                            var0 = _closure2_slot5;
                            var2 = _closure2_slot0;
                            var0.current = var2;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.fetchFriendMembers;
                            var0 = var0.bind(var1)(var2);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var12.bind(var7)(var4, var9);
                var9 = var7.useLayoutEffect;
                var4 = new Array(3);
                var4[0] = var5;
                var4[1] = var2;
                var4[2] = var10;
                var2 = function() { // Environment: var1
                    _fun80724: for (var _fun80724_ip = 0;;) switch (_fun80724_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = _closure2_slot4;
                            var5 = var4.invite;
                            var4 = null;
                            if (!(var4 == var5)) {
                                _fun80724_ip = 73;
                                continue _fun80724
                            }
                        case 31:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 14;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.getHeaderBackButton;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
                            _fun80724_ip = 82;
                            continue _fun80724;
                        case 73:
                            var3 = function() { // Environment: var4
                                var0 = null;
                                return var0;
                            };
                        case 82:
                            var0.headerLeft = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var7)(var2, var4);
                var12 = var7.useCallback;
                var2 = _closure1_slot3;
                var4 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun80727: for (var _fun80727_ip = 0;;) switch (_fun80727_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun80727_ip = 199;
                                    continue _fun80727
                                }
                            case 10:
                                var2 = _closure2_slot4;
                                var5 = var2.guildMember;
                                var1 = _closure2_slot2;
                                if (!var1) {
                                    _fun80727_ip = 194;
                                    continue _fun80727
                                }
                            case 33:
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun80727_ip = 194;
                                    continue _fun80727
                                }
                            case 42:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 15;
                                var2 = var4[var2];
                                var4 = undefined;
                                var7 = var6.bind(var4)(var2);
                                var6 = var7.hasFlag;
                                var2 = var5.flags;
                                var8 = var3 != var2;
                                var3 = 0;
                                if (!var8) {
                                    _fun80727_ip = 90;
                                    continue _fun80727
                                }
                            case 87:
                                var3 = var2;
                            case 90:
                                var2 = _closure1_slot9;
                                var2 = var2.COMPLETED_ONBOARDING;
                                var2 = var6.bind(var7)(var3, var2);
                                if (var2) {
                                    _fun80727_ip = 194;
                                    continue _fun80727
                                }
                            case 109:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 17;
                                var2 = var1[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = 16;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var1 = var3.bind(var4)(var2, var1);
                                SaveGenerator(address = 151);
                            case 149:
                                return var1;
                            case 151:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun80727_ip = 191;
                                    continue _fun80727
                                }
                            case 157:
                                var3 = var1.default;
                                var2 = {};
                                var5 = var5.guildId;
                                var2.guildId = var5;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 182);
                            case 180:
                                return var2;
                            case 182:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (!var3) {
                                    _fun80727_ip = 194;
                                    continue _fun80727
                                }
                            case 188:
                                return var2;
                            case 191:
                                return var1;
                            case 194:
                                var1 = undefined;
                                return var1;
                            case 199:
                                return var0;
                        }
                    };
                    return var0;
                };
                var9 = var2.bind(var3)(var4);
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var5;
                var9 = var12.bind(var7)(var9, var4);
                _closure2_slot8 = var9;
                var4 = var7.useCallback;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun80729: for (var _fun80729_ip = 0;;) switch (_fun80729_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun80729_ip = 211;
                                    continue _fun80729
                                }
                            case 12:
                                var2 = undefined;
                                var _closure4_slot0 = var2;
                                var3 = _closure2_slot4;
                                var6 = var3.isGuildMember;
                                var5 = var3.invite;
                                var3 = function() { // Environment: var8
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun80732: for (var _fun80732_ip = 0;;) switch (_fun80732_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var5 = arg0;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun80732_ip = 322;
                                                        continue _fun80732
                                                    }
                                                case 15:
                                                    var _closure7_slot0 = var5;
                                                    var1 = undefined;
                                                    var6 = undefined;
                                                    var3 = null;
                                                    if (!(var3 == var5)) {
                                                        _fun80732_ip = 45;
                                                        continue _fun80732
                                                    }
                                                case 29:
                                                    var2 = _closure2_slot1;
                                                    var2 = var2.bind(var1)();
                                                    _fun80732_ip = 250;
                                                    continue _fun80732;
                                                case 45:
                                                    var8 = _closure1_slot0;
                                                    var7 = _closure1_slot2;
                                                    var9 = 18;
                                                    var7 = var7[var9];
                                                    var8 = var8.bind(var1)(var7);
                                                    var7 = var8.isGuildScheduledEventInviteEmbed;
                                                    var7 = var7.bind(var8)(var5);
                                                    if (var7) {
                                                        _fun80732_ip = 253;
                                                        continue _fun80732
                                                    }
                                                case 85:
                                                    var8 = var5.guild;
                                                    var10 = var3 == var8;
                                                    var7 = undefined;
                                                    if (var10) {
                                                        _fun80732_ip = 104;
                                                        continue _fun80732
                                                    }
                                                case 99:
                                                    var7 = var8.id;
                                                case 104:
                                                    var6 = var7;
                                                    var8 = _closure1_slot0;
                                                    var7 = _closure1_slot2;
                                                    var7 = var7[var9];
                                                    var8 = var8.bind(var1)(var7);
                                                    var7 = var8.isRoleSubscriptionInvite;
                                                    var7 = var7.bind(var8)(var5);
                                                    if (!var7) {
                                                        _fun80732_ip = 193;
                                                        continue _fun80732
                                                    }
                                                case 138:
                                                    var7 = var6;
                                                    if (!(var3 != var7)) {
                                                        _fun80732_ip = 193;
                                                        continue _fun80732
                                                    }
                                                case 145: // try_start_0
                                                    var8 = _closure1_slot1;
                                                    var9 = _closure1_slot2;
                                                    var7 = 20;
                                                    var7 = var9[var7];
                                                    var8 = var8.bind(var1)(var7);
                                                    var7 = var8.performRoleSubscriptionUpsellRedirect;
                                                    var6 = var7.bind(var8)(var6);
                                                    SaveGenerator(address = 180);
                                                case 178:
                                                    return var6;
                                                case 180:
                                                    ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                                    if (var7) {
                                                        _fun80732_ip = 188;
                                                        continue _fun80732
                                                    }
                                                case 186: // try_end0
                                                    _fun80732_ip = 193;
                                                    continue _fun80732;
                                                case 188:
                                                    return var6;
                                                case 191: // catch_target0
                                                    CatchBlockStart(arg_register = 6);
                                                case 193:
                                                    var6 = var5.channel;
                                                    if (!(var3 == var6)) {
                                                        _fun80732_ip = 215;
                                                        continue _fun80732
                                                    }
                                                case 202:
                                                    var6 = _closure2_slot1;
                                                    var6 = var6.bind(var1)();
                                                    _fun80732_ip = 250;
                                                    continue _fun80732;
                                                case 215:
                                                    var6 = _closure2_slot1;
                                                    var6 = var6.bind(var1)();
                                                    var6 = global;
                                                    var7 = var6.setTimeout;
                                                    var6 = function() { // Environment: var4
                                                        var2 = _closure1_slot1;
                                                        var1 = _closure1_slot2;
                                                        var0 = 13;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var3 = var2.bind(var0)(var1);
                                                        var2 = var3.transitionToInvite;
                                                        var1 = _closure7_slot0;
                                                        var1 = var2.bind(var3)(var1);
                                                        return var0;
                                                    };
                                                    var4 = 1;
                                                    var4 = var7.bind(var1)(var6, var4);
                                                case 250:
                                                    return var1;
                                                case 253:
                                                    var6 = var3 == var5;
                                                    var4 = undefined;
                                                    if (var6) {
                                                        _fun80732_ip = 268;
                                                        continue _fun80732
                                                    }
                                                case 262:
                                                    var4 = var5.guild_scheduled_event;
                                                case 268:
                                                    if (!(var3 != var4)) {
                                                        _fun80732_ip = 319;
                                                        continue _fun80732
                                                    }
                                                case 272:
                                                    var3 = _closure2_slot1;
                                                    var3 = var3.bind(var1)();
                                                    var3 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var2 = 19;
                                                    var2 = var5[var2];
                                                    var3 = var3.bind(var1)(var2);
                                                    var2 = var3.transitionToEventDetailsFromInvite;
                                                    var2 = var2.bind(var3)(var4);
                                                    var2 = undefined;
                                                    return var2;
                                                case 319:
                                                    return var1;
                                                case 322:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function() { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var4 = var3.bind(var2)();
                                _closure4_slot0 = var4;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var7 = 21;
                                var7 = var10[var7];
                                var9 = var9.bind(var2)(var7);
                                var7 = var9.handleNSFWGuildInvite;
                                var7 = var7.bind(var9)(var5);
                                if (var7) {
                                    _fun80729_ip = 200;
                                    continue _fun80729
                                }
                            case 89:
                                if (var6) {
                                    _fun80729_ip = 171;
                                    continue _fun80729
                                }
                            case 92:
                                var6 = null;
                                if (!(var6 != var5)) {
                                    _fun80729_ip = 171;
                                    continue _fun80729
                                }
                            case 98:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 13;
                                var3 = var7[var3];
                                var7 = var6.bind(var2)(var3);
                                var6 = var7.acceptInvite;
                                var3 = {};
                                var9 = var5.code;
                                var3.inviteKey = var9;
                                var9 = {};
                                var10 = 'Accept Invite Page';
                                var9.location = var10;
                                var3.context = var9;
                                var8 = function arg0() {
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3.callback = var8;
                                var3 = var6.bind(var7)(var3);
                                _fun80729_ip = 194;
                                continue _fun80729;
                            case 171:
                                var3 = _closure2_slot8;
                                var3 = var3.bind(var2)();
                                SaveGenerator(address = 183);
                            case 181:
                                return var3;
                            case 183:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun80729_ip = 197;
                                    continue _fun80729
                                }
                            case 189:
                                var4 = var4.bind(var2)(var5);
                            case 194:
                                return var2;
                            case 197:
                                return var3;
                            case 200:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 211:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(3);
                var1[0] = var5;
                var1[1] = var9;
                var1[2] = var10;
                var9 = var4.bind(var7)(var2, var1);
                var2 = _closure1_slot10;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 22;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = {};
                var1.code = var11;
                var1.onPressClose = var10;
                var1.onPressJoin = var9;
                var18 = var1;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var18 = var1;
                var17 = var5;
                var5 = copyDataProperties(var18, var17);
                var6 = var2.bind(var3)(var4, var1);
                var5 = _closure1_slot0;
                var0 = 23;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var9 = var8.flex;
                var4 = new Array(2);
                var4[0] = var9;
                var8 = var8.paddingContainer;
                var4[1] = var8;
                var0.style = var4;
                var4 = true;
                var0.bottom = var4;
                var4 = 24;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ThemeContextProvider;
                var4 = {};
                var7 = 'darker';
                var4.theme = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1681, 1410, 3323, 660, 3079, 33, 1297, 671, 1469, 566, 10275, 5898, 4705, 1384, 4683, 1307, 3333, 8098, 5680, 9048, 10276, 4734, 3159, 2]);