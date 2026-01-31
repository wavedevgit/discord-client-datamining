// modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'marginTop': 12,
        'display': 'flex',
        'flexDirection': 'column',
        'alignSelf': 'flex-start',
        'padding': 16,
        'backgroundColor': null,
        'borderColor': null,
        'borderWidth': 1
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.guildInfoRow = var8;
    var8 = {
        'backgroundColor': null,
        'height': 1,
        'border': 'none',
        'marginVertical': 16
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var8.backgroundColor = var10;
    var3.divider = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.formQuestion = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun90813: for (var _fun90813_ip = 0;;) switch (_fun90813_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var0 = _closure1_slot10;
                var4 = undefined;
                var18 = var0.bind(var4)();
                var _closure2_slot0 = var18;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)(var6);
                var7 = var0.joinRequest;
                var _closure2_slot1 = var7;
                var23 = var0.joinRequestGuild;
                var _closure2_slot2 = var23;
                var1 = _closure1_slot0;
                var0 = 9;
                var3 = var2[var0];
                var9 = var1.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var11
                    _fun90814: for (var _fun90814_ip = 0;;) switch (_fun90814_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUser;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun90814_ip = 40;
                                continue _fun90814
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var0 = var3.userId;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var22 = var8.bind(var9)(var5, var3);
                var3 = 10;
                var3 = var2[var3];
                var5 = var1.bind(var4)(var3);
                var3 = var5.useJoinRequestButtonActions;
                var3 = var3.bind(var5)(var7, var6);
                var14 = var3.approveRequest;
                var15 = var3.rejectRequest;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot6;
                    var1 = var0.KICK_MEMBERS;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var2.bind(var3)(var1, var0);
                var12 = null;
                var1 = var12 == var7;
                var0 = null;
                if (var1) {
                    _fun90813_ip = 924;
                    continue _fun90813
                }
            case 207:
                var1 = var7.formResponses;
                var1 = var12 == var1;
                var0 = null;
                if (var1) {
                    _fun90813_ip = 924;
                    continue _fun90813
                }
            case 225:
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var8 = _closure1_slot3;
                var5 = {};
                var9 = var18.container;
                var5.style = var9;
                var13 = var12 != var23;
                if (!var13) {
                    _fun90813_ip = 413;
                    continue _fun90813
                }
            case 260:
                var17 = _closure1_slot8;
                var16 = _closure1_slot3;
                var9 = {};
                var18 = var18.guildInfoRow;
                var9.style = var18;
                var21 = _closure1_slot7;
                var19 = _closure1_slot1;
                var24 = _closure1_slot2;
                var25 = 11;
                var18 = var24[var25];
                var19 = var19.bind(var4)(var18);
                var18 = {};
                var18.guild = var23;
                var20 = _closure1_slot0;
                var25 = var24[var25];
                var25 = var20.bind(var4)(var25);
                var25 = var25.GuildIconSizes;
                var25 = var25.XXSMALL;
                var18.size = var25;
                var19 = var21.bind(var4)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = 12;
                var19 = var24[var19];
                var19 = var20.bind(var4)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'heading-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var23 = var23.name;
                var19.children = var23;
                var19 = var21.bind(var4)(var20, var19);
                var18[1] = var19;
                var9.children = var18;
                var13 = var17.bind(var4)(var16, var9);
            case 413:
                var9 = new Array(3);
                var9[0] = var13;
                var12 = var12 != var22;
                if (!var12) {
                    _fun90813_ip = 543;
                    continue _fun90813
                }
            case 428:
                var17 = _closure1_slot7;
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                var13 = 12;
                var13 = var23[var13];
                var13 = var19.bind(var4)(var13);
                var16 = var13.Text;
                var13 = {
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = 13;
                var20 = var23[var18];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var23[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18.jDV3i6;
                var18 = {};
                var22 = var22.globalName;
                var18.username = var22;
                var18 = var20.bind(var21)(var19, var18);
                var13.children = var18;
                var12 = var17.bind(var4)(var16, var13);
            case 543:
                var9[1] = var12;
                var16 = var7.formResponses;
                var13 = var16.filter;
                var12 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var1 = var0.field_type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.VerificationFormFieldTypes;
                    var0 = var0.TERMS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var13 = var13.bind(var16)(var12);
                var12 = var13.map;
                var11 = function(arg0, arg1) { // Environment: var11
                    _fun90817: for (var _fun90817_ip = 0;;) switch (_fun90817_ip) {
                        case 0:
                            var12 = arg0;
                            var1 = var12.field_type;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var0 = var3[var0];
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.VerificationFormFieldTypes;
                            var0 = var0.MULTIPLE_CHOICE;
                            if (!(var1 === var0)) {
                                _fun90817_ip = 62;
                                continue _fun90817
                            }
                        case 50:
                            var1 = var12.response;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun90817_ip = 70;
                                continue _fun90817
                            }
                        case 62:
                            var8 = var12.response;
                            _fun90817_ip = 86;
                            continue _fun90817;
                        case 70:
                            var1 = var12.choices;
                            var0 = var12.response;
                            var8 = var1[var0];
                        case 86:
                            var3 = _closure1_slot8;
                            var2 = _closure1_slot3;
                            var1 = {};
                            var7 = _closure1_slot7;
                            var0 = {};
                            var13 = _closure2_slot0;
                            var6 = var13.divider;
                            var0.style = var6;
                            var6 = var7.bind(var4)(var2, var0);
                            var0 = new Array(3);
                            var0[0] = var6;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 12;
                            var10 = var9[var5];
                            var10 = var6.bind(var4)(var10);
                            var11 = var10.Text;
                            var10 = {
                                'style': null,
                                'variant': 'text-xs/semibold',
                                'color': 'text-muted'
                            };
                            var13 = var13.formQuestion;
                            var10.style = var13;
                            var12 = var12.label;
                            var10.children = var12;
                            var10 = var7.bind(var4)(var11, var10);
                            var0[1] = var10;
                            var5 = var9[var5];
                            var5 = var6.bind(var4)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'text-md/medium',
                                'color': 'text-strong'
                            };
                            var5.children = var8;
                            var5 = var7.bind(var4)(var6, var5);
                            var0[2] = var5;
                            var1.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = 'form-response-';
                            var0 = arg1;
                            var0 = var6.bind(var5)(var0);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11);
                var9[2] = var11;
                var5.children = var9;
                var8 = var3.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                if (!var6) {
                    _fun90813_ip = 654;
                    continue _fun90813
                }
            case 612:
                var8 = var7.applicationStatus;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 14;
                var7 = var11[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.GuildJoinRequestApplicationStatuses;
                var7 = var7.SUBMITTED;
                var6 = var8 === var7;
            case 654:
                if (!var6) {
                    _fun90813_ip = 910;
                    continue _fun90813
                }
            case 660:
                var9 = _closure1_slot8;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 15;
                var7 = var18[var7];
                var7 = var17.bind(var4)(var7);
                var8 = var7.ButtonGroup;
                var7 = {
                    'direction': 'horizontal',
                    'align': 'center'
                };
                var13 = _closure1_slot7;
                var11 = 16;
                var10 = var18[var11];
                var10 = var17.bind(var4)(var10);
                var12 = var10.Button;
                var10 = {
                    'grow': true,
                    'size': 'md',
                    'variant': 'primary'
                };
                var10.onPress = var14;
                var14 = 13;
                var16 = var18[var14];
                var16 = var17.bind(var4)(var16);
                var20 = var16.intl;
                var19 = var20.string;
                var16 = var18[var14];
                var16 = var17.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.BzjDQJ;
                var16 = var19.bind(var20)(var16);
                var10.text = var16;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var18[var11];
                var11 = var17.bind(var4)(var11);
                var12 = var11.Button;
                var11 = {
                    'grow': true,
                    'size': 'md',
                    'variant': 'destructive'
                };
                var11.onPress = var15;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.hDtbsz;
                var14 = var15.bind(var16)(var14);
                var11.text = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 910:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 924:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3050, 1613, 660, 33, 1297, 671, 11763, 566, 11764, 7355, 3900, 1234, 3175, 6405, 4043, 2]);