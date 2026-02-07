// uikit-native/modals/InviteDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun81245: for (var _fun81245_ip = 0;;) switch (_fun81245_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.invite;
                var0 = _closure1_slot15;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var13.avatarContainer;
                var4 = new Array(1);
                var4[0] = var5;
                var0.style = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 13;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.isGroupDMInvite;
                var4 = var4.bind(var5)(var12);
                if (!var4) {
                    _fun81245_ip = 96;
                    continue _fun81245
                }
            case 84:
                var4 = var12.inviter;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun81245_ip = 199;
                    continue _fun81245
                }
            case 96:
                var6 = var12.guild;
                var4 = null;
                var6 = var4 != var6;
                if (!var6) {
                    _fun81245_ip = 194;
                    continue _fun81245
                }
            case 110:
                var8 = _closure1_slot12;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 15;
                var6 = var14[var9];
                var7 = var11.bind(var3)(var6);
                var6 = {};
                var15 = var13.avatar;
                var6.style = var15;
                var15 = var12.guild;
                var6.guild = var15;
                var9 = var14[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.Sizes;
                var9 = var9.LARGE;
                var6.size = var9;
                var9 = 2;
                var6.textScale = var9;
                var4 = var8.bind(var3)(var7, var6);
            case 194:
                _fun81245_ip = 327;
                continue _fun81245;
            case 199:
                var6 = var12.inviter;
                var6 = var5 != var6;
                var5 = null;
                if (!var6) {
                    _fun81245_ip = 324;
                    continue _fun81245
                }
            case 214:
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 14;
                var6 = var11[var9];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var13 = var13.avatar;
                var6.avatarStyle = var13;
                var14 = _closure1_slot7;
                var17 = var12.inviter;
                var13 = var14.prototype;
                var13 = Object.create(var13, {
                    constructor: {
                        value: var14
                    }
                });
                var18 = var13;
                var12 = new var18[var14](var17, var16);
                var12 = var12 instanceof Object ? var12 : var13;
                var6.user = var12;
                var6.guildId = var3;
                var10 = _closure1_slot0;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.XLARGE;
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 324:
                var4 = var5;
            case 327:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun81246: for (var _fun81246_ip = 0;;) switch (_fun81246_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.invite;
                var0 = _closure1_slot15;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 13;
                var0 = var0[var2];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isGroupDMInvite;
                var0 = var0.bind(var1)(var12);
                if (var0) {
                    _fun81246_ip = 79;
                    continue _fun81246
                }
            case 56:
                var0 = var12.guild;
                var1 = null;
                var1 = var1 == var0;
                var9 = undefined;
                if (var1) {
                    _fun81246_ip = 77;
                    continue _fun81246
                }
            case 72:
                var9 = var0.name;
            case 77:
                _fun81246_ip = 144;
                continue _fun81246;
            case 79:
                var3 = var12.channel;
                var1 = null;
                var5 = var1 == var3;
                var0 = undefined;
                if (var5) {
                    _fun81246_ip = 100;
                    continue _fun81246
                }
            case 95:
                var0 = var3.name;
            case 100:
                if (!(var1 == var0)) {
                    _fun81246_ip = 141;
                    continue _fun81246
                }
            case 104:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.getFormattedName;
                var1 = var12.inviter;
                var0 = var3.bind(var5)(var1);
            case 141:
                var9 = var0;
            case 144:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isFriendInvite;
                var0 = var0.bind(var1)(var12);
                if (!var0) {
                    _fun81246_ip = 272;
                    continue _fun81246
                }
            case 175:
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 17;
                var2 = var8[var0];
                var2 = var1.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var8[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.t;
                var1 = var0["4aF92R"];
                var0 = {};
                var7 = _closure1_slot1;
                var5 = 16;
                var5 = var8[var5];
                var8 = var7.bind(var4)(var5);
                var7 = var8.getFormattedName;
                var5 = var12.inviter;
                var5 = var7.bind(var8)(var5);
                var0.username = var5;
                var9 = var2.bind(var3)(var1, var0);
            case 272:
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun81246_ip = 445;
                    continue _fun81246
                }
            case 284:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var10.guildNameContainer;
                var1.style = var5;
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 18;
                var5 = var11[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var12 = var12.guild;
                var5.guild = var12;
                var12 = var10.featureIcon;
                var5.style = var12;
                var12 = true;
                var5.disableColor = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot12;
                var7 = _closure1_slot0;
                var6 = 19;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var10.guildNameText;
                var6.style = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 445:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun81247: for (var _fun81247_ip = 0;;) switch (_fun81247_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.invite;
                var _closure2_slot0 = var11;
                var2 = var1.isRegistration;
                var7 = var1.isGuildMember;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot15;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun81248: for (var _fun81248_ip = 0;;) switch (_fun81248_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 13;
                            var0 = var3[var0];
                            var4 = undefined;
                            var5 = var1.bind(var4)(var0);
                            var3 = var5.isStreamInvite;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var5)(var0);
                            if (!var0) {
                                _fun81248_ip = 62;
                                continue _fun81248
                            }
                        case 46:
                            var0 = _closure2_slot0;
                            var3 = var0.target_user;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun81248_ip = 149;
                                continue _fun81248
                            }
                        case 62:
                            var5 = _closure1_slot18;
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var3 = var5.bind(var4)(var3, var0);
                            var5 = null;
                            var0 = null;
                            if (!var3) {
                                _fun81248_ip = 147;
                                continue _fun81248
                            }
                        case 87:
                            var3 = _closure2_slot0;
                            var3 = var3.inviter;
                            var3 = var5 != var3;
                            var0 = null;
                            if (!var3) {
                                _fun81248_ip = 147;
                                continue _fun81248
                            }
                        case 106:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 20;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.getUserAvatarSource;
                            var3 = _closure2_slot0;
                            var3 = var3.inviter;
                            var0 = var5.bind(var6)(var3);
                        case 147:
                            _fun81248_ip = 190;
                            continue _fun81248;
                        case 149:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getUserAvatarSource;
                            var1 = _closure2_slot0;
                            var1 = var1.target_user;
                            var0 = var2.bind(var3)(var1);
                        case 190:
                            return var0;
                    }
                };
                var14 = var4.bind(var6)(var0, var1);
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var6 = var1[var0];
                var6 = var4.bind(var3)(var6);
                var10 = var6.intl;
                var8 = var10.string;
                var6 = var1[var0];
                var6 = var4.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["3rE1P8"];
                var6 = var8.bind(var10)(var6);
                var12 = 13;
                var1 = var1[var12];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isFriendInvite;
                var4 = var1.bind(var4)(var11);
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                if (var4) {
                    _fun81247_ip = 744;
                    continue _fun81247
                }
            case 170:
                var4 = var10[var12];
                var8 = var1.bind(var3)(var4);
                var4 = var8.isGroupDMInvite;
                var4 = var4.bind(var8)(var11);
                if (var4) {
                    _fun81247_ip = 570;
                    continue _fun81247
                }
            case 196:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var8 = var8.bind(var3)(var4);
                var4 = var8.isStreamInvite;
                var4 = var4.bind(var8)(var11);
                if (!var4) {
                    _fun81247_ip = 242;
                    continue _fun81247
                }
            case 227:
                var8 = var11.target_user;
                var4 = null;
                if (!(var4 == var8)) {
                    _fun81247_ip = 471;
                    continue _fun81247
                }
            case 242:
                var4 = _closure1_slot17;
                var4 = var4.bind(var3)(var11, var7);
                if (var4) {
                    _fun81247_ip = 391;
                    continue _fun81247
                }
            case 258:
                var4 = _closure1_slot18;
                var4 = var4.bind(var3)(var11, var7);
                if (!var4) {
                    _fun81247_ip = 283;
                    continue _fun81247
                }
            case 271:
                var8 = var11.inviter;
                var7 = null;
                var4 = var7 != var8;
            case 283:
                var8 = var6;
                if (!var4) {
                    _fun81247_ip = 830;
                    continue _fun81247
                }
            case 292:
                var6 = _closure1_slot0;
                var17 = _closure1_slot2;
                var4 = var17[var0];
                var4 = var6.bind(var3)(var4);
                var13 = var4.intl;
                var7 = var13.format;
                var4 = var17[var0];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.spU2mI;
                var4 = {};
                var16 = _closure1_slot1;
                var15 = 16;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.getFormattedName;
                var15 = var11.inviter;
                var15 = var16.bind(var17)(var15);
                var4.username = var15;
                var8 = var7.bind(var13)(var6, var4);
                _fun81247_ip = 830;
                continue _fun81247;
            case 391:
                var13 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var0];
                var6 = var13.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var0];
                var4 = var13.bind(var3)(var4);
                var4 = var4.t;
                if (var2) {
                    _fun81247_ip = 450;
                    continue _fun81247
                }
            case 435:
                var2 = var4["FDsl+J"];
                var2 = var6.bind(var7)(var2);
                _fun81247_ip = 463;
                continue _fun81247;
            case 450:
                var4 = var4.jpwYbt;
                var2 = var6.bind(var7)(var4);
            case 463:
                var8 = var2;
                _fun81247_ip = 830;
                continue _fun81247;
            case 471:
                var4 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = var16[var0];
                var2 = var4.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.formatToPlainString;
                var2 = var16[var0];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.x2L32Q;
                var2 = {};
                var15 = _closure1_slot1;
                var13 = 16;
                var13 = var16[var13];
                var16 = var15.bind(var3)(var13);
                var15 = var16.getFormattedName;
                var13 = var11.target_user;
                var13 = var15.bind(var16)(var13);
                var2.username = var13;
                var8 = var6.bind(var7)(var4, var2);
                _fun81247_ip = 830;
                continue _fun81247;
            case 570:
                var2 = var11.channel;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun81247_ip = 591;
                    continue _fun81247
                }
            case 581:
                var2 = var11.inviter;
                if (!(var4 == var2)) {
                    _fun81247_ip = 645;
                    continue _fun81247
                }
            case 591:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var0];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var2[var0];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.OsdY8B;
                var2 = var4.bind(var6)(var2);
                _fun81247_ip = 739;
                continue _fun81247;
            case 645:
                var6 = _closure1_slot0;
                var17 = _closure1_slot2;
                var4 = var17[var0];
                var4 = var6.bind(var3)(var4);
                var13 = var4.intl;
                var7 = var13.format;
                var4 = var17[var0];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.Lu4h18;
                var4 = {};
                var16 = _closure1_slot1;
                var15 = 16;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.getFormattedName;
                var15 = var11.inviter;
                var15 = var16.bind(var17)(var15);
                var4.username = var15;
                var2 = var7.bind(var13)(var6, var4);
            case 739:
                var8 = var2;
                _fun81247_ip = 830;
                continue _fun81247;
            case 744:
                var2 = var10[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.format;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.Quj7HX;
                var0 = {};
                var7 = _closure1_slot1;
                var6 = 16;
                var6 = var10[var6];
                var10 = var7.bind(var3)(var6);
                var7 = var10.getFormattedName;
                var6 = var11.inviter;
                var6 = var7.bind(var10)(var6);
                var0.username = var6;
                var8 = var2.bind(var4)(var1, var0);
            case 830:
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.inviteJoinContainer;
                var0.style = var4;
                var7 = null;
                var4 = var7 == var14;
                var6 = null;
                if (var4) {
                    _fun81247_ip = 970;
                    continue _fun81247
                }
            case 861:
                var10 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var12];
                var10 = var10.bind(var3)(var4);
                var4 = var10.isFriendInvite;
                var4 = var4.bind(var10)(var11);
                var6 = null;
                if (var4) {
                    _fun81247_ip = 970;
                    continue _fun81247
                }
            case 894:
                var10 = _closure1_slot12;
                var7 = _closure1_slot5;
                var4 = {};
                var11 = var9.inviterIconWrapper;
                var4.style = var11;
                var13 = _closure1_slot12;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 21;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.source = var14;
                var14 = var9.inviterIcon;
                var11.style = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4.children = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 970:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 19;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var9 = var9.inviteJoinText;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun81249: for (var _fun81249_ip = 0;;) switch (_fun81249_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.invite;
                var3 = var0.isGuildMember;
                var0 = _closure1_slot15;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var0 = _closure1_slot16;
                var18 = var0.bind(var4)(var1);
                var6 = null;
                var2 = var6 == var18;
                var0 = null;
                if (var2) {
                    _fun81249_ip = 532;
                    continue _fun81249
                }
            case 51:
                var2 = _closure1_slot18;
                var2 = var2.bind(var4)(var1, var3);
                var0 = null;
                if (var2) {
                    _fun81249_ip = 532;
                    continue _fun81249
                }
            case 69:
                var3 = var6 == var1;
                var2 = undefined;
                if (var3) {
                    _fun81249_ip = 97;
                    continue _fun81249
                }
            case 78:
                var1 = var1.guild;
                var3 = var6 == var1;
                var2 = undefined;
                if (var3) {
                    _fun81249_ip = 97;
                    continue _fun81249
                }
            case 92:
                var2 = var1.id;
            case 97:
                var1 = _closure1_slot11;
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun81249_ip = 532;
                    continue _fun81249
                }
            case 110:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var14.memberInfo;
                var1.style = var5;
                var5 = var18.onlineCount;
                var5 = var6 != var5;
                var7 = null;
                if (!var5) {
                    _fun81249_ip = 320;
                    continue _fun81249
                }
            case 148:
                var9 = _closure1_slot13;
                var8 = _closure1_slot14;
                var5 = {};
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var10 = {};
                var15 = var14.dotOnline;
                var10.style = var15;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var15 = _closure1_slot12;
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 19;
                var12 = var21[var12];
                var12 = var17.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var16 = 17;
                var19 = var21[var16];
                var19 = var17.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var16 = var21[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.t;
                var17 = var16["LC+S+m"];
                var16 = {};
                var21 = var18.onlineCount;
                var16.membersOnline = var21;
                var16 = var19.bind(var20)(var17, var16);
                var12.children = var16;
                var12 = var15.bind(var4)(var13, var12);
                var10[1] = var12;
                var5.children = var10;
                var7 = var9.bind(var4)(var8, var5);
            case 320:
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var18.memberCount;
                var7 = var6 != var7;
                var6 = null;
                if (!var7) {
                    _fun81249_ip = 518;
                    continue _fun81249
                }
            case 346:
                var9 = _closure1_slot13;
                var8 = _closure1_slot14;
                var7 = {};
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var10 = {};
                var14 = var14.dotOffline;
                var10.style = var14;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot12;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 19;
                var11 = var19[var11];
                var11 = var15.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var14 = 17;
                var16 = var19[var14];
                var16 = var15.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var19[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.t;
                var15 = var14.zRl6XR;
                var14 = {};
                var18 = var18.memberCount;
                var14.count = var18;
                var14 = var16.bind(var17)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 518:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 532:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun81250: for (var _fun81250_ip = 0;;) switch (_fun81250_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.currentUser;
                var12 = var0.style;
                var0 = _closure1_slot15;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 19;
                var0 = var14[var10];
                var0 = var13.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var4 = 'text-sm/semibold';
                var0.variant = var4;
                var4 = new Array(2);
                var4[0] = var12;
                var5 = var11.inviteUsername;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot12;
                var5 = _closure1_slot1;
                var8 = 14;
                var4 = var14[var8];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var15 = var11.inviteAvatar;
                var4.style = var15;
                var4.user = var9;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.SIZE_16;
                var4.size = var8;
                var4.guildId = var3;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var9.username;
                var4[1] = var5;
                var5 = var9.hasUniqueUsername;
                var5 = var5.bind(var9)();
                var5 = !var5;
                if (!var5) {
                    _fun81250_ip = 284;
                    continue _fun81250
                }
            case 194:
                var8 = _closure1_slot13;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var10 = 'text-sm/normal';
                var6.variant = var10;
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.inviteDiscriminatorText;
                var10[1] = var11;
                var6.style = var10;
                var10 = var9.discriminator;
                var9 = ['#'];
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 284:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.style;
        var _closure2_slot0 = var7;
        var0 = var0.currentUser;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot15;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var2 = _closure1_slot12;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 19;
        var0 = var9[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-sm/semibold',
            'style': null,
            'lineClamp': 1
        };
        var4 = new Array(2);
        var4[0] = var7;
        var6 = var6.inviteAcceptText;
        var4[1] = var6;
        var0.style = var4;
        var4 = 17;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4["9sWQNT"];
        var4 = {};
        var8 = function arg0, arg1() {
            var4 = _closure1_slot12;
            var3 = _closure1_slot24;
            var2 = {};
            var1 = _closure2_slot0;
            var2.style = var1;
            var0 = _closure2_slot1;
            var2.currentUser = var0;
            var1 = undefined;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var4.usernameHook = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var8 = 0;
    var3 = var5[var8];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 1;
    var6 = var5[var7];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var3 = var3.InviteStates;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.INVITE_ROUTING_HUB_GUILD_ID;
    var _closure1_slot11 = var3;
    var14 = 8;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var15 = var3.Fonts;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var6 = var9.createStyles;
    var3 = {};
    var10 = {
        'height': 64,
        'width': 64,
        'margin': 0
    };
    var11 = 11;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var3.avatar = var10;
    var10 = {
        'borderRadius': null,
        'height': 64,
        'width': 64,
        'marginBottom': 24,
        'marginTop': 24
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10.borderRadius = var13;
    var3.avatarContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'marginBottom': 8,
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.inviteJoinContainer = var10;
    var10 = {};
    var13 = 'center';
    var10.textAlign = var13;
    var3.inviteJoinText = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.inviteUsername = var10;
    var10 = {
        'justifyContent': 'center',
        'marginHorizontal': 11
    };
    var3.inviteAcceptText = var10;
    var10 = {};
    var15 = var15.PRIMARY_NORMAL;
    var10.fontFamily = var15;
    var3.inviteDiscriminatorText = var10;
    var10 = {
        'alignSelf': 'center',
        'paddingTop': 2,
        'marginRight': 4
    };
    var3.inviteAvatar = var10;
    var10 = {};
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.none;
    var10.borderRadius = var15;
    var10.marginRight = var14;
    var3.inviterIconWrapper = var10;
    var10 = {
        'width': 20,
        'height': 20
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10.borderRadius = var14;
    var3.inviterIcon = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.guildNameContainer = var10;
    var10 = {};
    var10.textAlign = var13;
    var3.guildNameText = var10;
    var10 = {
        'flexGrow': 0,
        'marginRight': 8
    };
    var13 = 12;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.DARK_1_LIGHT_04;
    var10.opacity = var13;
    var3.featureIcon = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.memberInfo = var10;
    var10 = {
        'marginTop': 8,
        'marginBottom': 8,
        'alignItems': 'center'
    };
    var3.rolesList = var10;
    var10 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var10.backgroundColor = var13;
    var3.dotOnline = var10;
    var10 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4,
        'marginLeft': 16
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_400;
    var10.backgroundColor = var13;
    var3.dotOffline = var10;
    var10 = {
        'flex': 1,
        'marginTop': 8,
        'width': '100%'
    };
    var3.button = var10;
    var10 = {
        'width': '100%',
        'backgroundColor': null,
        'padding': 16,
        'borderRadius': null,
        'marginTop': 16,
        'marginBottom': 8
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10.borderRadius = var11;
    var3.embedDetailsCard = var10;
    var3 = var6.bind(var9)(var3);
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        _fun81253: for (var _fun81253_ip = 0;;) switch (_fun81253_ip) {
            case 0:
                var2 = arg0;
                var1 = {};
                var5 = var2.approximate_presence_count;
                var0 = null;
                var6 = var0 != var5;
                var3 = 0;
                var4 = 0;
                if (!var6) {
                    _fun81253_ip = 27;
                    continue _fun81253
                }
            case 24:
                var4 = var5;
            case 27:
                var1.onlineCount = var4;
                var4 = var2.approximate_member_count;
                var5 = var0 != var4;
                var2 = 0;
                if (!var5) {
                    _fun81253_ip = 50;
                    continue _fun81253
                }
            case 47:
                var2 = var4;
            case 50:
                var1.memberCount = var2;
                var2 = var1.memberCount;
                if (!(var3 === var2)) {
                    _fun81253_ip = 77;
                    continue _fun81253
                }
            case 65:
                var2 = var1.memberCount;
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun81253_ip = 80;
                    continue _fun81253
                }
            case 77:
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var3 = function arg0, arg1() {
        _fun81254: for (var _fun81254_ip = 0;;) switch (_fun81254_ip) {
            case 0:
                var0 = arg1;
                if (!var0) {
                    _fun81254_ip = 31;
                    continue _fun81254
                }
            case 6:
                var1 = arg0;
                var2 = var1.state;
                var1 = _closure1_slot10;
                var1 = var1.ACCEPTED;
                var0 = var2 !== var1;
            case 31:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = function arg0, arg1() {
        _fun81255: for (var _fun81255_ip = 0;;) switch (_fun81255_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.inviter;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun81255_ip = 39;
                    continue _fun81255
                }
            case 18:
                var5 = _closure1_slot17;
                var3 = undefined;
                var1 = arg1;
                var1 = var5.bind(var3)(var4, var1);
                var0 = !var1;
            case 39:
                if (!var0) {
                    _fun81255_ip = 91;
                    continue _fun81255
                }
            case 42:
                var3 = _closure1_slot16;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var4 = var2 == var3;
                if (var4) {
                    _fun81255_ip = 69;
                    continue _fun81255
                }
            case 63:
                var1 = var3.memberCount;
            case 69:
                var3 = var2 != var1;
                var2 = 0;
                if (!var3) {
                    _fun81255_ip = 81;
                    continue _fun81255
                }
            case 78:
                var2 = var1;
            case 81:
                var1 = 100;
                var1 = var2 > var1;
                var0 = !var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var3 = {};
    var3.ACCEPT = var8;
    var6 = 'ACCEPT';
    var3[var8] = var6;
    var3.DECLINE = var7;
    var6 = 'DECLINE';
    var3[var7] = var6;
    var _closure1_slot19 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/InviteDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81256: for (var _fun81256_ip = 0;;) switch (_fun81256_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.invite;
                var _closure2_slot0 = var9;
                var8 = var1.isGuildMember;
                var0 = var1.onPressJoin;
                var _closure2_slot1 = var0;
                var0 = var1.onPressClose;
                var _closure2_slot2 = var0;
                var0 = var1.isRegistration;
                var18 = var1.friendMemberIds;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot15;
                var17 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var15 = 0;
                var13 = var2[var15];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var5 = null;
                var1 = var5 == var18;
                var2 = undefined;
                if (var1) {
                    _fun81256_ip = 133;
                    continue _fun81256
                }
            case 128:
                var2 = var18.length;
            case 133:
                var4 = var5 != var2;
                var1 = 0;
                if (!var4) {
                    _fun81256_ip = 145;
                    continue _fun81256
                }
            case 142:
                var1 = var2;
            case 145:
                var7 = var1 > var15;
                _closure2_slot4 = var7;
                var1 = var5 == var18;
                var2 = undefined;
                if (var1) {
                    _fun81256_ip = 167;
                    continue _fun81256
                }
            case 162:
                var2 = var18.length;
            case 167:
                var4 = var5 != var2;
                var1 = 0;
                if (!var4) {
                    _fun81256_ip = 179;
                    continue _fun81256
                }
            case 176:
                var1 = var2;
            case 179:
                _closure2_slot5 = var1;
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var2 = new Array(4);
                var2[0] = var7;
                var2[1] = var1;
                var1 = var9.code;
                var2[2] = var1;
                var7 = var9.guild;
                var10 = var5 == var7;
                var1 = undefined;
                if (var10) {
                    _fun81256_ip = 232;
                    continue _fun81256
                }
            case 227:
                var1 = var7.id;
            case 232:
                var2[3] = var1;
                var1 = function() { // Environment: var14
                    _fun81257: for (var _fun81257_ip = 0;;) switch (_fun81257_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun81257_ip = 104;
                                continue _fun81257
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 22;
                            var1 = var3[var1];
                            var5 = undefined;
                            var3 = var2.bind(var5)(var1);
                            var2 = var3.track;
                            var0 = _closure1_slot9;
                            var1 = var0.INVITE_FRIEND_MEMBERS_VIEWED;
                            var0 = {};
                            var6 = _closure2_slot0;
                            var7 = var6.code;
                            var0.invite_code = var7;
                            var6 = var6.guild;
                            var7 = null;
                            var7 = var7 == var6;
                            if (var7) {
                                _fun81257_ip = 85;
                                continue _fun81257
                            }
                        case 80:
                            var5 = var6.id;
                        case 85:
                            var0.guild_id = var5;
                            var4 = _closure2_slot5;
                            var0.friend_count = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 104:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var19 = {};
                var19.invite = var9;
                var19.isGuildMember = var8;
                var19.isRegistration = var0;
                var21 = var9.guild_scheduled_event;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 23;
                var4 = var2[var0];
                var10 = var1.bind(var3)(var4);
                var7 = var10.useStateFromStores;
                var4 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var14
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var7.bind(var10)(var6, var4);
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure1_slot6;
                    var0 = var1.getCanUseMultiAccountMobile;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var10 = _closure1_slot12;
                var7 = _closure1_slot20;
                var4 = {};
                var28 = var4;
                var27 = var19;
                var16 = copyDataProperties(var28, var27);
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(8);
                var4[0] = var7;
                var16 = _closure1_slot12;
                var10 = _closure1_slot22;
                var7 = {};
                var28 = var7;
                var27 = var19;
                var20 = copyDataProperties(var28, var27);
                var7 = var16.bind(var3)(var10, var7);
                var4[1] = var7;
                var16 = _closure1_slot12;
                var10 = _closure1_slot21;
                var7 = {};
                var28 = var7;
                var27 = var19;
                var20 = copyDataProperties(var28, var27);
                var7 = var16.bind(var3)(var10, var7);
                var4[2] = var7;
                var16 = _closure1_slot12;
                var10 = _closure1_slot23;
                var7 = {};
                var28 = var7;
                var27 = var19;
                var19 = copyDataProperties(var28, var27);
                var7 = var16.bind(var3)(var10, var7);
                var4[3] = var7;
                var7 = var5 != var18;
                if (!var7) {
                    _fun81256_ip = 511;
                    continue _fun81256
                }
            case 502:
                var10 = var18.length;
                var7 = var10 > var15;
            case 511:
                if (!var7) {
                    _fun81256_ip = 551;
                    continue _fun81256
                }
            case 514:
                var16 = _closure1_slot12;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 24;
                var10 = var19[var10];
                var15 = var15.bind(var3)(var10);
                var10 = {};
                var10.friendMemberIds = var18;
                var7 = var16.bind(var3)(var15, var10);
            case 551:
                var4[4] = var7;
                var15 = _closure1_slot12;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 25;
                var7 = var16[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.invite = var9;
                var16 = var17.rolesList;
                var7.style = var16;
                var7 = var15.bind(var3)(var10, var7);
                var4[5] = var7;
                var7 = var5 != var21;
                if (!var7) {
                    _fun81256_ip = 769;
                    continue _fun81256
                }
            case 616:
                var16 = _closure1_slot13;
                var15 = _closure1_slot5;
                var10 = {};
                var17 = var17.embedDetailsCard;
                var10.style = var17;
                var23 = _closure1_slot12;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 26;
                var17 = var22[var18];
                var17 = var19.bind(var3)(var17);
                var20 = var17.GuildEventCardHeader;
                var17 = {};
                var17.event = var21;
                var20 = var23.bind(var3)(var20, var17);
                var17 = new Array(3);
                var17[0] = var20;
                var24 = _closure1_slot12;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var23 = var20.GuildEventCardMetaInfo;
                var20 = {};
                var20.event = var21;
                var20 = var24.bind(var3)(var23, var20);
                var17[1] = var20;
                var20 = _closure1_slot12;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.GuildEventCardGuildInfo;
                var18 = {};
                var18.event = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[2] = var18;
                var10.children = var17;
                var7 = var16.bind(var3)(var15, var10);
            case 769:
                var4[6] = var7;
                var7 = _closure1_slot17;
                var15 = var7.bind(var3)(var9, var8);
                var7 = {};
                var7.isMultiAccountMobileEnabled = var6;
                var7.currentUser = var11;
                var6 = true;
                var7.redesignEnabled = var6;
                var7.isAlreadyMember = var15;
                var6 = function arg0() {
                    _fun81262: for (var _fun81262_ip = 0;;) switch (_fun81262_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.isMultiAccountMobileEnabled;
                            var2 = var3.currentUser;
                            var _closure3_slot0 = var2;
                            var1 = var3.redesignEnabled;
                            var3 = var3.isAlreadyMember;
                            if (var3) {
                                _fun81262_ip = 204;
                                continue _fun81262
                            }
                        case 39:
                            if (!var0) {
                                _fun81262_ip = 48;
                                continue _fun81262
                            }
                        case 42:
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun81262_ip = 112;
                                continue _fun81262
                            }
                        case 48:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var2 = var7[var0];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var7[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0["e/6Ogt"];
                            var0 = var2.bind(var3)(var0);
                            _fun81262_ip = 202;
                            continue _fun81262;
                        case 112:
                            if (var1) {
                                _fun81262_ip = 124;
                                continue _fun81262
                            }
                        case 115:
                            var1 = function(arg0) { // Environment: var6
                                var0 = arg0;
                                var0 = var0.style;
                                var3 = _closure1_slot12;
                                var2 = _closure1_slot25;
                                var1 = {};
                                var4 = _closure3_slot0;
                                var1.currentUser = var4;
                                var1.style = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            _fun81262_ip = 199;
                            continue _fun81262;
                        case 124:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 17;
                            var4 = var8[var2];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var8[var2];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.t;
                            var3 = var2["9sWQNT"];
                            var2 = {};
                            var6 = function() {
                                _fun81263: for (var _fun81263_ip = 0;;) switch (_fun81263_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var3 = var2.username;
                                        var1 = var2.hasUniqueUsername;
                                        var4 = var1.bind(var2)();
                                        var2 = '';
                                        var1 = var2;
                                        if (var4) {
                                            _fun81263_ip = 64;
                                            continue _fun81263
                                        }
                                    case 32:
                                        var0 = _closure3_slot0;
                                        var5 = var0.discriminator;
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var4 = var0.concat;
                                        var0 = '#';
                                        var1 = var4.bind(var0)(var5);
                                    case 64:
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var0 = var0.concat;
                                        var0 = var0.bind(var2)(var3, var1);
                                        return var0;
                                }
                            };
                            var2.usernameHook = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 199:
                            var0 = var1;
                        case 202:
                            _fun81262_ip = 264;
                            continue _fun81262;
                        case 204:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 17;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.IRoQXr;
                            var0 = var2.bind(var3)(var1);
                        case 264:
                            return var0;
                    }
                };
                var18 = var6.bind(var3)(var7);
                var6 = var5 != var11;
                var8 = null;
                if (!var6) {
                    _fun81256_ip = 863;
                    continue _fun81256
                }
            case 828:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var10 = 20;
                var6 = var6[var10];
                var9 = var7.bind(var3)(var6);
                var7 = var9.getUserAvatarSource;
                var6 = false;
                var8 = var7.bind(var9)(var11, var6, var10);
            case 863:
                var5 = var5 != var8;
                var19 = undefined;
                if (!var5) {
                    _fun81256_ip = 928;
                    continue _fun81256
                }
            case 872:
                var7 = _closure1_slot12;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 27;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Button;
                var6 = var5.Icon;
                var5 = {};
                var5.source = var8;
                var8 = 'entity';
                var5.variant = var8;
                var19 = var7.bind(var3)(var6, var5);
            case 928:
                var7 = _closure1_slot13;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 28;
                var5 = var16[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.ButtonGroup;
                var5 = {};
                var17 = _closure1_slot12;
                var9 = 27;
                var8 = var16[var9];
                var8 = var10.bind(var3)(var8);
                var11 = var8.Button;
                var8 = {
                    'icon': null,
                    'variant': 'primary',
                    'size': 'lg'
                };
                var8.icon = var19;
                var8.text = var18;
                var18 = function() {
                    var3 = _closure2_slot3;
                    var0 = _closure1_slot19;
                    var2 = var0.ACCEPT;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var18;
                var18 = _closure1_slot19;
                var19 = var18.ACCEPT;
                var19 = var13 === var19;
                var8.loading = var19;
                var18 = var18.ACCEPT;
                var18 = var13 === var18;
                var8.disabled = var18;
                var11 = var17.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot12;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {
                    'variant': 'secondary',
                    'size': 'lg'
                };
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 17;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                if (var15) {
                    _fun81256_ip = 1159;
                    continue _fun81256
                }
            case 1144:
                var15 = var16.ndsK4Z;
                var15 = var17.bind(var18)(var15);
                _fun81256_ip = 1170;
                continue _fun81256;
            case 1159:
                var16 = var16.WAI6xu;
                var15 = var17.bind(var18)(var16);
            case 1170:
                var9.text = var15;
                var14 = function() {
                    _fun81259: for (var _fun81259_ip = 0;;) switch (_fun81259_ip) {
                        case 0:
                            var4 = _closure2_slot3;
                            var0 = _closure1_slot19;
                            var3 = var0.DECLINE;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot9;
                            var3 = var2.INVITE_ACCEPT_DISMISSED;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var7 = var6.code;
                            var2.invite_code = var7;
                            var7 = var6.guild;
                            var6 = null;
                            var8 = var6 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun81259_ip = 99;
                                continue _fun81259
                            }
                        case 94:
                            var6 = var7.id;
                        case 99:
                            var2.guild_id = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var9.onPress = var14;
                var12 = _closure1_slot19;
                var14 = var12.DECLINE;
                var14 = var13 === var14;
                var9.loading = var14;
                var12 = var12.DECLINE;
                var12 = var13 === var12;
                var9.disabled = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[7] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10347, 1628, 1621, 660, 10351, 483, 33, 1297, 671, 4874, 3334, 5504, 10352, 3237, 1234, 7523, 3942, 1417, 4704, 795, 566, 10353, 10354, 8236, 4084, 6510, 2]);