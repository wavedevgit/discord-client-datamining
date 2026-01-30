// modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: handleOneRecipientInDM, environment: var1
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: _handleOneRecipientInDM, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun109148: for (var _fun109148_ip = 0;;) switch (_fun109148_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun109148_ip = 137;
                            continue _fun109148
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 13;
                        var1 = var1[var4];
                        var5 = undefined;
                        var6 = var3.bind(var5)(var1);
                        var3 = var6.openPrivateChannel;
                        var1 = {};
                        var7 = new Array(0);
                        var1.recipientIds = var7;
                        var7 = 'New Group DM';
                        var1.location = var7;
                        var7 = arg1;
                        var1.onBeforeTransition = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 79);
                    case 77:
                        return var1;
                    case 79:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun109148_ip = 134;
                            continue _fun109148
                        }
                    case 85:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.addRecipients;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var1, var2, var5);
                        SaveGenerator(address = 122);
                    case 120:
                        return var2;
                    case 122:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun109148_ip = 131;
                            continue _fun109148
                        }
                    case 128:
                        return var2;
                    case 131:
                        return var2;
                    case 134:
                        return var1;
                    case 137:
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
    var0 = function() { // Original name: _handleInviteUsers, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun109151: for (var _fun109151_ip = 0;;) switch (_fun109151_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        var6 = arguments[1];
                        var5 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun109151_ip = 596;
                            continue _fun109151
                        }
                    case 21:
                        var _closure4_slot0 = var4;
                        var7 = undefined;
                        if (!(var6 === var7)) {
                            _fun109151_ip = 68;
                            continue _fun109151
                        }
                    case 31:
                        var1 = global;
                        var9 = var1.Array;
                        var8 = var9.from;
                        var10 = _closure1_slot9;
                        var1 = var10.getSelectedUsers;
                        var1 = var1.bind(var10)();
                        var6 = var8.bind(var9)(var1);
                    case 68:
                        var _closure4_slot1 = var6;
                        var _closure4_slot2 = var5;
                        var _closure4_slot3 = var7;
                        SaveGenerator(address = 84);
                    case 82:
                        return var7;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun109151_ip = 593;
                            continue _fun109151
                        }
                    case 93:
                        var8 = null;
                        if (!(var8 != var4)) {
                            _fun109151_ip = 128;
                            continue _fun109151
                        }
                    case 99:
                        var10 = _closure1_slot10;
                        var9 = var10.getChannelId;
                        var10 = var9.bind(var10)();
                        var9 = var4.id;
                        if (!(var10 === var9)) {
                            _fun109151_ip = 428;
                            continue _fun109151
                        }
                    case 128:
                        if (!(var8 != var4)) {
                            _fun109151_ip = 158;
                            continue _fun109151
                        }
                    case 132:
                        var10 = _closure1_slot10;
                        var9 = var10.getChannelId;
                        var10 = var9.bind(var10)();
                        var9 = var4.id;
                        if (!(var10 !== var9)) {
                            _fun109151_ip = 236;
                            continue _fun109151
                        }
                    case 158:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 13;
                        var9 = var11[var9];
                        var11 = var10.bind(var7)(var9);
                        var10 = var11.openPrivateChannel;
                        var9 = {};
                        var9.recipientIds = var6;
                        var12 = 'New Group DM';
                        var9.location = var12;
                        var9.onBeforeTransition = var5;
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 218);
                    case 216:
                        return var9;
                    case 218:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun109151_ip = 233;
                            continue _fun109151
                        }
                    case 224:
                        _closure4_slot3 = var9;
                        _fun109151_ip = 545;
                        continue _fun109151;
                    case 233:
                        return var9;
                    case 236:
                        var9 = var4.isDM;
                        var9 = var9.bind(var4)();
                        if (var9) {
                            _fun109151_ip = 379;
                            continue _fun109151
                        }
                    case 252:
                        var9 = var4.isGroupDM;
                        var9 = var9.bind(var4)();
                        if (!var9) {
                            _fun109151_ip = 545;
                            continue _fun109151
                        }
                    case 268:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 13;
                        var9 = var11[var9];
                        var11 = var10.bind(var7)(var9);
                        var10 = var11.addRecipients;
                        var17 = var4.id;
                        var18 = var11;
                        var16 = var6;
                        var15 = undefined;
                        var14 = var5;
                        var9 = var18[var10](var17, var16, var15, var14, var13);
                        SaveGenerator(address = 318);
                    case 316:
                        return var9;
                    case 318:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun109151_ip = 376;
                            continue _fun109151
                        }
                    case 324:
                        _closure4_slot3 = var9;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 15;
                        var10 = var12[var10];
                        var13 = var11.bind(var7)(var10);
                        var12 = var13.ring;
                        var11 = _closure4_slot3;
                        var10 = 'gdm_invite';
                        var10 = var12.bind(var13)(var11, var6, var10);
                        _fun109151_ip = 545;
                        continue _fun109151;
                    case 376:
                        return var9;
                    case 379:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 14;
                        var9 = var11[var9];
                        var10 = var10.bind(var7)(var9);
                        var9 = var10.showGuardCallAlert;
                        var11 = _closure1_slot4;
                        var8 = function*() { // Environment: var3
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun109153: for (var _fun109153_ip = 0;;) switch (_fun109153_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun109153_ip = 260;
                                            continue _fun109153
                                        }
                                    case 10:
                                        var1 = _closure4_slot1;
                                        var2 = var1.length;
                                        var1 = 1;
                                        if (!(var1 !== var2)) {
                                            _fun109153_ip = 105;
                                            continue _fun109153
                                        }
                                    case 29:
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 13;
                                        var1 = var3[var1];
                                        var7 = undefined;
                                        var6 = var2.bind(var7)(var1);
                                        var5 = var6.addRecipients;
                                        var1 = _closure4_slot0;
                                        var15 = var1.id;
                                        var14 = _closure4_slot1;
                                        var12 = _closure4_slot2;
                                        var16 = var6;
                                        var13 = undefined;
                                        var1 = var16[var5](var15, var14, var13, var12, var11);
                                        SaveGenerator(address = 90);
                                    case 88:
                                        return var1;
                                    case 90:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        var3 = var2;
                                        var2 = var1;
                                        if (!var3) {
                                            _fun109153_ip = 141;
                                            continue _fun109153
                                        }
                                    case 102:
                                        return var1;
                                    case 105:
                                        var6 = _closure1_slot20;
                                        var5 = _closure4_slot1;
                                        var3 = _closure4_slot2;
                                        var1 = undefined;
                                        var1 = var6.bind(var1)(var5, var3);
                                        SaveGenerator(address = 132);
                                    case 130:
                                        return var1;
                                    case 132:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        var2 = var1;
                                        if (var3) {
                                            _fun109153_ip = 257;
                                            continue _fun109153
                                        }
                                    case 141:
                                        _closure4_slot3 = var2;
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 14;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var6 = var6.bind(var3)(var2);
                                        var2 = var6.monkeyPatchCall;
                                        var2 = var2.bind(var6)();
                                        SaveGenerator(address = 184);
                                    case 182:
                                        return var2;
                                    case 184:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun109153_ip = 254;
                                            continue _fun109153
                                        }
                                    case 190:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 15;
                                        var5 = var7[var5];
                                        var11 = var6.bind(var3)(var5);
                                        var10 = var11.call;
                                        var9 = _closure4_slot3;
                                        var8 = false;
                                        var5 = true;
                                        var5 = var10.bind(var11)(var9, var8, var5);
                                        var5 = 16;
                                        var5 = var7[var5];
                                        var5 = var6.bind(var3)(var5);
                                        var4 = _closure4_slot3;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
                                    case 254:
                                        return var2;
                                    case 257:
                                        return var1;
                                    case 260:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var8 = var11.bind(var7)(var8);
                        var8 = var9.bind(var10)(var8);
                        _fun109151_ip = 545;
                        continue _fun109151;
                    case 428:
                        var8 = var4.isDM;
                        var8 = var8.bind(var4)();
                        if (!var8) {
                            _fun109151_ip = 453;
                            continue _fun109151
                        }
                    case 441:
                        var9 = var6.length;
                        var8 = 1;
                        if (!(var8 !== var9)) {
                            _fun109151_ip = 518;
                            continue _fun109151
                        }
                    case 453:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 13;
                        var8 = var10[var8];
                        var9 = var9.bind(var7)(var8);
                        var8 = var9.addRecipients;
                        var17 = var4.id;
                        var18 = var9;
                        var16 = var6;
                        var15 = undefined;
                        var14 = var5;
                        var8 = var18[var8](var17, var16, var15, var14, var13);
                        SaveGenerator(address = 503);
                    case 501:
                        return var8;
                    case 503:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 4);
                        var9 = var4;
                        var4 = var8;
                        if (!var9) {
                            _fun109151_ip = 541;
                            continue _fun109151
                        }
                    case 515:
                        return var8;
                    case 518:
                        var2 = _closure1_slot20;
                        var2 = var2.bind(var7)(var6, var5);
                        SaveGenerator(address = 532);
                    case 530:
                        return var2;
                    case 532:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        var4 = var2;
                        if (var5) {
                            _fun109151_ip = 590;
                            continue _fun109151
                        }
                    case 541:
                        _closure4_slot3 = var4;
                    case 545:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 17;
                        var5 = var8[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.hideActionSheet;
                        var4 = _closure1_slot16;
                        var4 = var5.bind(var6)(var4);
                        var3 = _closure4_slot3;
                        return var3;
                    case 590:
                        return var2;
                    case 593:
                        return var1;
                    case 596:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.InstantInviteSources;
    var _closure1_slot13 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot14 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot15 = var6;
    var3 = var3.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot17 = var6;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 'center';
    var8.textAlign = var10;
    var3.title = var8;
    var8 = {};
    var10 = 12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var12;
    var3.button = var8;
    var8 = {
        'height': '100%',
        'display': 'flex'
    };
    var3.container = var8;
    var8 = {
        'flexShrink': 1,
        'marginTop': 4294967280
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.instantInviteView = var8;
    var8 = {};
    var12 = 16;
    var8.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.nameInputContainer = var8;
    var8 = {
        'backgroundColor': null,
        'marginBottom': 8,
        'height': 40,
        'width': '100%'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var10;
    var3.nameInput = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.noMargin = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: NewGroupDMScreen, environment: var1
        _fun109154: for (var _fun109154_ip = 0;;) switch (_fun109154_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.navigation;
                var _closure2_slot0 = var25;
                var0 = var0.route;
                var1 = var0.params;
                var0 = var1.channelId;
                var _closure2_slot1 = var0;
                var0 = var1.locationPage;
                var _closure2_slot2 = var0;
                var6 = var1.allowNameEdit;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun109154_ip = 60;
                    continue _fun109154
                }
            case 58:
                var6 = false;
            case 60:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var1 = _closure1_slot19;
                var21 = var1.bind(var3)();
                _closure2_slot3 = var21;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var5 = var4[var1];
                var9 = var2.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var23
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var8.bind(var9)(var7, var5);
                _closure2_slot4 = var17;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var23
                    var1 = _closure1_slot11;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var4.bind(var5)(var2, var1);
                _closure2_slot5 = var7;
                var10 = _closure1_slot5;
                var2 = var10.useState;
                var1 = new Array(0);
                var1 = var2.bind(var10)(var1);
                var5 = _closure1_slot3;
                var8 = 2;
                var4 = var5.bind(var3)(var1, var8);
                var2 = 0;
                var12 = var4[var2];
                _closure2_slot6 = var12;
                var1 = 1;
                var4 = var4[var1];
                _closure2_slot7 = var4;
                var4 = var10.useState;
                var11 = false;
                var4 = var4.bind(var10)(var11);
                var4 = var5.bind(var3)(var4, var8);
                var26 = var4[var2];
                _closure2_slot8 = var26;
                var4 = var4[var1];
                _closure2_slot9 = var4;
                var9 = var10.useState;
                var4 = '';
                var4 = var9.bind(var10)(var4);
                var4 = var5.bind(var3)(var4, var8);
                var20 = var4[var2];
                _closure2_slot10 = var20;
                var19 = var4[var1];
                var9 = var10.useMemo;
                var5 = new Array(1);
                var5[0] = var17;
                var4 = function() { // Environment: var23
                    _fun109157: for (var _fun109157_ip = 0;;) switch (_fun109157_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun109157_ip = 28;
                                continue _fun109157
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var0 = var2.recipients;
                        case 28:
                            if (!(var1 == var0)) {
                                _fun109157_ip = 36;
                                continue _fun109157
                            }
                        case 32:
                            var0 = new Array(0);
                        case 36:
                            return var0;
                    }
                };
                var13 = var9.bind(var10)(var4, var5);
                _closure2_slot11 = var13;
                var5 = var12.length;
                var10 = var13.length;
                var9 = null;
                var14 = var9 != var10;
                var4 = 0;
                if (!var14) {
                    _fun109154_ip = 400;
                    continue _fun109154
                }
            case 397:
                var4 = var10;
            case 400:
                var4 = var4 + var1;
                var16 = var5 + var4;
                _closure2_slot12 = var16;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var22 = 19;
                var4 = var10[var22];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var17);
                var24 = var16 > var4;
                _closure2_slot13 = var24;
                var4 = _closure1_slot5;
                var18 = var4.useEffect;
                var14 = new Array(1);
                var14[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot14;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var5 = _closure1_slot15;
                    var5 = var5.DM_INVITE;
                    var1.type = var5;
                    var5 = {};
                    var6 = _closure2_slot2;
                    var5.page = var6;
                    var1.location = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var18.bind(var4)(var0, var14);
                var18 = var4.useCallback;
                var14 = _closure1_slot4;
                var0 = function*() { // Environment: var23
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun109160: for (var _fun109160_ip = 0;;) switch (_fun109160_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun109160_ip = 320;
                                    continue _fun109160
                                }
                            case 12:
                                var3 = undefined;
                                var4 = undefined;
                                var6 = _closure2_slot9;
                                var5 = true;
                                var5 = var6.bind(var3)(var5);
                            case 30: // try_start_0
                                var7 = _closure2_slot4;
                                var12 = _closure2_slot6;
                                var6 = new Array(0);
                                var11 = 0;
                                var13 = var6;
                                var11 = arraySpread(var13, var12, var11);
                                var12 = _closure2_slot11;
                                var13 = var6;
                                var5 = arraySpread(var13, var12, var11);
                                var5 = function() { // Original name: handleInviteUsers, environment: var2
                                    var0 = undefined;
                                    var3 = _closure1_slot22;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var2 = function() { // Environment: var2
                                    _fun109162: for (var _fun109162_ip = 0;;) switch (_fun109162_ip) {
                                        case 0:
                                            var2 = _closure2_slot0;
                                            var1 = var2.getParent;
                                            var1 = var1.bind(var2)();
                                            var2 = null;
                                            if (!(var2 == var1)) {
                                                _fun109162_ip = 27;
                                                continue _fun109162
                                            }
                                        case 23:
                                            var1 = _closure2_slot0;
                                        case 27:
                                            var0 = var1.goBack;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                    }
                                };
                                var2 = var5.bind(var3)(var7, var6, var2);
                                SaveGenerator(address = 87);
                            case 85:
                                return var2;
                            case 87:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun109160_ip = 198;
                                    continue _fun109160
                                }
                            case 93:
                                var4 = var2;
                            case 96: // try_end0
                                var7 = _closure2_slot4;
                                var8 = null;
                                var7 = var8 == var7;
                                var6 = var7;
                                if (!var7) {
                                    _fun109160_ip = 119;
                                    continue _fun109160
                                }
                            case 112:
                                var7 = var4;
                                var6 = var8 != var7;
                            case 119:
                                var5 = var6;
                                if (!var6) {
                                    _fun109160_ip = 137;
                                    continue _fun109160
                                }
                            case 125:
                                var7 = _closure2_slot10;
                                var6 = '';
                                var5 = var6 !== var7;
                            case 137:
                                if (!var5) {
                                    _fun109160_ip = 192;
                                    continue _fun109160
                                }
                            case 140:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 13;
                                var5 = var7[var5];
                                var7 = var6.bind(var3)(var5);
                                var6 = var7.setName;
                                var5 = var4;
                                var4 = _closure2_slot10;
                                var4 = var6.bind(var7)(var5, var4);
                                SaveGenerator(address = 186);
                            case 184:
                                return var4;
                            case 186:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun109160_ip = 195;
                                    continue _fun109160
                                }
                            case 192:
                                return var3;
                            case 195:
                                return var4;
                            case 198:
                                return var2;
                            case 201: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 21;
                                var2 = var10[var2];
                                var5 = var4.bind(var3)(var2);
                                var4 = var5.open;
                                var2 = {};
                                var7 = 'GROUP_DM_ADD_ERROR';
                                var2.key = var7;
                                var9 = _closure1_slot0;
                                var6 = 22;
                                var7 = var10[var6];
                                var7 = var9.bind(var3)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var6 = var10[var6];
                                var6 = var9.bind(var3)(var6);
                                var6 = var6.t;
                                var6 = var6["N/9OFy"];
                                var6 = var7.bind(var8)(var6);
                                var2.content = var6;
                                var2 = var4.bind(var5)(var2);
                                var2 = _closure2_slot9;
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            case 320:
                                return var0;
                        }
                    };
                    return var0;
                };
                var14 = var14.bind(var3)(var0);
                var0 = new Array(5);
                var0[0] = var17;
                var0[1] = var25;
                var0[2] = var13;
                var0[3] = var12;
                var0[4] = var20;
                var0 = var18.bind(var4)(var14, var0);
                _closure2_slot14 = var0;
                var18 = var4.useLayoutEffect;
                var14 = new Array(9);
                var14[0] = var17;
                var14[1] = var26;
                var14[2] = var25;
                var14[3] = var16;
                var14[4] = var24;
                var14[5] = var13;
                var14[6] = var12;
                var14[7] = var0;
                var14[8] = var21;
                var0 = function() { // Environment: var23
                    _fun109163: for (var _fun109163_ip = 0;;) switch (_fun109163_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun109163_ip = 32;
                                continue _fun109163
                            }
                        case 15:
                            var3 = _closure2_slot4;
                            var0 = var3.isGroupDM;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun109163_ip = 94;
                                continue _fun109163
                            }
                        case 32:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 22;
                            var3 = var8[var0];
                            var6 = undefined;
                            var3 = var7.bind(var6)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var0 = var8[var0];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0["3hF1W4"];
                            var10 = var3.bind(var5)(var0);
                            _fun109163_ip = 154;
                            continue _fun109163;
                        case 94:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 22;
                            var3 = var8[var0];
                            var6 = undefined;
                            var3 = var7.bind(var6)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var0 = var8[var0];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0["LR+Ptf"];
                            var10 = var3.bind(var5)(var0);
                        case 154:
                            var _closure3_slot0 = var10;
                            var0 = _closure2_slot4;
                            if (!(var2 != var0)) {
                                _fun109163_ip = 180;
                                continue _fun109163
                            }
                        case 166:
                            var2 = _closure2_slot4;
                            var0 = var2.isGroupDM;
                            var0 = var0.bind(var2)();
                        case 180:
                            var3 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 22;
                            var5 = var9[var2];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var2 = var9[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.t;
                            var3 = var2.YUhnoy;
                            var2 = {};
                            var8 = _closure2_slot12;
                            var2.numMembers = var8;
                            var8 = _closure1_slot1;
                            var7 = 19;
                            var7 = var9[var7];
                            var8 = var8.bind(var0)(var7);
                            var7 = _closure2_slot4;
                            var7 = var8.bind(var0)(var7);
                            var2.maxMemberLimit = var7;
                            var9 = var5.bind(var6)(var3, var2);
                            var _closure3_slot1 = var9;
                            var3 = _closure2_slot0;
                            var2 = var3.setOptions;
                            var1 = {};
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var8 = var5.concat;
                            var15 = '';
                            var13 = ' (';
                            var11 = ')';
                            var14 = var10;
                            var12 = var9;
                            var5 = var15[var8](var14, var13, var12, var11, var10);
                            var1.title = var5;
                            var5 = function(arg0) { // Original name: headerTitle, environment: var4
                                _fun109164: for (var _fun109164_ip = 0;;) switch (_fun109164_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = null;
                                        if (!(var1 != var0)) {
                                            _fun109164_ip = 135;
                                            continue _fun109164
                                        }
                                    case 12:
                                        var10 = {};
                                        var4 = undefined;
                                        var9 = var1;
                                        var8 = undefined;
                                        var9 = copyDataProperties(var10, var9, var8);
                                        var3 = _closure1_slot17;
                                        var2 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var0 = 23;
                                        var0 = var6[var0];
                                        var0 = var2.bind(var4)(var0);
                                        var2 = var0.GenericHeaderTitle;
                                        var0 = {};
                                        var10 = var0;
                                        var5 = copyDataProperties(var10, var9);
                                        var7 = _closure3_slot0;
                                        var6 = 'title';
                                        var0[var6] = var7;
                                        var6 = _closure3_slot1;
                                        var5 = 'subtitle';
                                        var0[var5] = var6;
                                        var5 = _closure2_slot13;
                                        var6 = 'mobile-text-heading-primary';
                                        if (!var5) {
                                            _fun109164_ip = 118;
                                            continue _fun109164
                                        }
                                    case 112:
                                        var6 = 'text-feedback-critical';
                                    case 118:
                                        var5 = 'color';
                                        var0[var5] = var6;
                                        var0 = var3.bind(var4)(var2, var0);
                                        return var0;
                                    case 135:
                                        var9 = "Cannot destructure 'undefined' or 'null'.";
                                        var10 = var1;
                                        var0 = throwTypeError(var10, var9);
                                        var0 = undefined;
                                        throw var0;
                                }
                            };
                            var1.headerTitle = var5;
                            var4 = function(arg0) { // Original name: headerRight, environment: var4
                                _fun109165: for (var _fun109165_ip = 0;;) switch (_fun109165_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure2_slot8;
                                        if (var0) {
                                            _fun109165_ip = 366;
                                            continue _fun109165
                                        }
                                    case 18:
                                        var0 = _closure2_slot4;
                                        var7 = null;
                                        if (!(var7 != var0)) {
                                            _fun109165_ip = 48;
                                            continue _fun109165
                                        }
                                    case 28:
                                        var3 = _closure2_slot4;
                                        var0 = var3.isGroupDM;
                                        var0 = var0.bind(var3)();
                                        if (var0) {
                                            _fun109165_ip = 183;
                                            continue _fun109165
                                        }
                                    case 48:
                                        var11 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var3 = 23;
                                        var3 = var12[var3];
                                        var4 = undefined;
                                        var8 = var11.bind(var4)(var3);
                                        var6 = var8.getRenderHeaderTextButton;
                                        var3 = 22;
                                        var9 = var12[var3];
                                        var9 = var11.bind(var4)(var9);
                                        var10 = var9.intl;
                                        var9 = var10.string;
                                        var3 = var12[var3];
                                        var3 = var11.bind(var4)(var3);
                                        var3 = var3.t;
                                        var3 = var3.CumH4u;
                                        var3 = var9.bind(var10)(var3);
                                        var9 = _closure1_slot4;
                                        var0 = function*() { // Environment: var2
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun109169: for (var _fun109169_ip = 0;;) switch (_fun109169_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun109169_ip = 36;
                                                            continue _fun109169
                                                        }
                                                    case 7:
                                                        var2 = _closure2_slot14;
                                                        var1 = undefined;
                                                        var1 = var2.bind(var1)();
                                                        SaveGenerator(address = 24);
                                                    case 22:
                                                        return var1;
                                                    case 24:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                        if (var2) {
                                                            _fun109169_ip = 33;
                                                            continue _fun109169
                                                        }
                                                    case 30:
                                                        return var1;
                                                    case 33:
                                                        return var1;
                                                    case 36:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var0 = var9.bind(var4)(var0);
                                        var3 = var6.bind(var8)(var3, var0);
                                        var0 = {};
                                        var15 = var0;
                                        var14 = var5;
                                        var6 = copyDataProperties(var15, var14);
                                        var8 = _closure2_slot13;
                                        var6 = 'disabled';
                                        var0[var6] = var8;
                                        var0 = var3.bind(var4)(var0);
                                        _fun109165_ip = 364;
                                        continue _fun109165;
                                    case 183:
                                        var12 = _closure1_slot0;
                                        var13 = _closure1_slot2;
                                        var3 = 23;
                                        var3 = var13[var3];
                                        var4 = undefined;
                                        var8 = var12.bind(var4)(var3);
                                        var6 = var8.getRenderHeaderTextButton;
                                        var3 = 22;
                                        var10 = var13[var3];
                                        var10 = var12.bind(var4)(var10);
                                        var11 = var10.intl;
                                        var10 = var11.string;
                                        var3 = var13[var3];
                                        var3 = var12.bind(var4)(var3);
                                        var3 = var3.t;
                                        var3 = var3.OYkgVk;
                                        var3 = var10.bind(var11)(var3);
                                        var9 = _closure1_slot4;
                                        var2 = function*() { // Environment: var2
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun109167: for (var _fun109167_ip = 0;;) switch (_fun109167_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun109167_ip = 36;
                                                            continue _fun109167
                                                        }
                                                    case 7:
                                                        var2 = _closure2_slot14;
                                                        var1 = undefined;
                                                        var1 = var2.bind(var1)();
                                                        SaveGenerator(address = 24);
                                                    case 22:
                                                        return var1;
                                                    case 24:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                        if (var2) {
                                                            _fun109167_ip = 33;
                                                            continue _fun109167
                                                        }
                                                    case 30:
                                                        return var1;
                                                    case 33:
                                                        return var1;
                                                    case 36:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var2 = var9.bind(var4)(var2);
                                        var3 = var6.bind(var8)(var3, var2);
                                        var2 = {};
                                        var15 = var2;
                                        var14 = var5;
                                        var5 = copyDataProperties(var15, var14);
                                        var6 = _closure2_slot13;
                                        if (var6) {
                                            _fun109165_ip = 350;
                                            continue _fun109165
                                        }
                                    case 302:
                                        var5 = _closure2_slot4;
                                        var7 = var7 == var5;
                                        var5 = undefined;
                                        if (var7) {
                                            _fun109165_ip = 329;
                                            continue _fun109165
                                        }
                                    case 315:
                                        var8 = _closure2_slot4;
                                        var7 = var8.isGroupDM;
                                        var5 = var7.bind(var8)();
                                    case 329:
                                        if (!var5) {
                                            _fun109165_ip = 347;
                                            continue _fun109165
                                        }
                                    case 332:
                                        var7 = _closure2_slot6;
                                        var8 = var7.length;
                                        var7 = 0;
                                        var5 = var8 <= var7;
                                    case 347:
                                        var6 = var5;
                                    case 350:
                                        var5 = 'disabled';
                                        var2[var5] = var6;
                                        var0 = var3.bind(var4)(var2);
                                    case 364:
                                        _fun109165_ip = 414;
                                        continue _fun109165;
                                    case 366:
                                        var4 = _closure1_slot17;
                                        var3 = _closure1_slot6;
                                        var2 = {};
                                        var1 = _closure2_slot3;
                                        var1 = var1.button;
                                        var1 = var1.color;
                                        var2.color = var1;
                                        var1 = 'small';
                                        var2.size = var1;
                                        var1 = undefined;
                                        var0 = var4.bind(var1)(var3, var2);
                                    case 414:
                                        return var0;
                                }
                            };
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var18.bind(var4)(var0, var14);
                var18 = var4.useCallback;
                var14 = function(arg0) { // Environment: var23
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun109171: for (var _fun109171_ip = 0;;) switch (_fun109171_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = var3.indexOf;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var4 = var2.bind(var3)(var0);
                                var0 = new Array(0);
                                var5 = 0;
                                var7 = var0;
                                var6 = var3;
                                var2 = arraySpread(var7, var6, var5);
                                var2 = -1;
                                if (!(var2 !== var4)) {
                                    _fun109171_ip = 69;
                                    continue _fun109171
                                }
                            case 52:
                                var3 = var0.splice;
                                var2 = 1;
                                var2 = var3.bind(var0)(var4, var2);
                                _fun109171_ip = 88;
                                continue _fun109171;
                            case 69:
                                var2 = var0.push;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var0)(var1);
                            case 88:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var14 = var18.bind(var4)(var14, var0);
                var0 = var4.useState;
                var4 = var0.bind(var4)(var11);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var8);
                var2 = var0[var2];
                _closure2_slot15 = var2;
                var0 = var0[var1];
                _closure2_slot16 = var0;
                var1 = _closure1_slot0;
                var0 = 24;
                var0 = var10[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useClientThemesOverride;
                var0 = var21.noMargin;
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot18;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var21.container;
                var0.style = var4;
                var18 = _closure1_slot17;
                var4 = 25;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var10 = true;
                var4.absolute = var10;
                var5 = var18.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var18 = var9 == var17;
                var5 = undefined;
                if (var18) {
                    _fun109154_ip = 757;
                    continue _fun109154
                }
            case 747:
                var18 = var17.isGroupDM;
                var5 = var18.bind(var17)();
            case 757:
                if (!var5) {
                    _fun109154_ip = 764;
                    continue _fun109154
                }
            case 760:
                var5 = var9 != var7;
            case 764:
                if (!var5) {
                    _fun109154_ip = 793;
                    continue _fun109154
                }
            case 767:
                var18 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var22];
                var7 = var18.bind(var3)(var7);
                var7 = var7.bind(var3)(var17);
                var5 = var16 < var7;
            case 793:
                if (!var5) {
                    _fun109154_ip = 882;
                    continue _fun109154
                }
            case 796:
                var17 = _closure1_slot17;
                var16 = _closure1_slot7;
                var7 = {};
                var22 = var21.instantInviteView;
                var18 = new Array(2);
                var18[0] = var22;
                var18[1] = var8;
                var7.style = var18;
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var18 = 26;
                var18 = var24[var18];
                var22 = var22.bind(var3)(var18);
                var18 = {};
                var23 = function() { // Environment: var23
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun109174: for (var _fun109174_ip = 0;;) switch (_fun109174_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun109174_ip = 265;
                                        continue _fun109174
                                    }
                                case 10:
                                    var1 = _closure2_slot15;
                                    if (var1) {
                                        _fun109174_ip = 260;
                                        continue _fun109174
                                    }
                                case 23:
                                    var3 = _closure2_slot16;
                                    var4 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 27;
                                    var1 = var6[var1];
                                    var7 = var5.bind(var4)(var1);
                                    var6 = var7.mobileCreateInvite;
                                    var5 = _closure2_slot4;
                                    var1 = _closure1_slot13;
                                    var1 = var1.GROUP_DM;
                                    var1 = var6.bind(var7)(var5, var1);
                                    SaveGenerator(address = 89);
                                case 87:
                                    return var1;
                                case 89:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun109174_ip = 257;
                                        continue _fun109174
                                    }
                                case 98:
                                    var5 = null;
                                    if (!(var5 != var1)) {
                                        _fun109174_ip = 244;
                                        continue _fun109174
                                    }
                                case 107:
                                    var5 = {};
                                    var6 = _closure2_slot4;
                                    var5.channel = var6;
                                    var5.code = var1;
                                    var7 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var6 = 22;
                                    var8 = var12[var6];
                                    var8 = var7.bind(var4)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.formatToPlainString;
                                    var6 = var12[var6];
                                    var6 = var7.bind(var4)(var6);
                                    var6 = var6.t;
                                    var7 = var6["+zWvOQ"];
                                    var6 = {};
                                    var10 = _closure2_slot5;
                                    var10 = var10.username;
                                    var6.username = var10;
                                    var11 = _closure1_slot1;
                                    var10 = 28;
                                    var10 = var12[var10];
                                    var10 = var11.bind(var4)(var10);
                                    var10 = var10.bind(var4)(var1);
                                    var6.link = var10;
                                    var6 = var8.bind(var9)(var7, var6);
                                    var5.message = var6;
                                    var3 = _closure1_slot13;
                                    var3 = var3.GROUP_DM;
                                    var5.location = var3;
                                    var3 = arg0;
                                    var3 = var3.bind(var4)(var5);
                                case 244:
                                    var3 = _closure2_slot16;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    _fun109174_ip = 260;
                                    continue _fun109174;
                                case 257:
                                    return var1;
                                case 260:
                                    var1 = undefined;
                                    return var1;
                                case 265:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var23 = var23.bind(var3)();
                var18.onItemPressed = var23;
                var18 = var17.bind(var3)(var22, var18);
                var7.children = var18;
                var5 = var17.bind(var3)(var16, var7);
            case 882:
                var4[1] = var5;
                var5 = null;
                if (!var6) {
                    _fun109154_ip = 1029;
                    continue _fun109154
                }
            case 894:
                var16 = _closure1_slot17;
                var7 = _closure1_slot7;
                var6 = {};
                var17 = var21.nameInputContainer;
                var6.style = var17;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 29;
                var17 = var23[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var21 = var21.nameInput;
                var17.style = var21;
                var17.value = var20;
                var17.onChangeText = var19;
                var22 = _closure1_slot0;
                var19 = 22;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.KSVhrX;
                var19 = var20.bind(var21)(var19);
                var17.placeholder = var19;
                var17 = var16.bind(var3)(var18, var17);
                var6.children = var17;
                var5 = var16.bind(var3)(var7, var6);
            case 1029:
                var4[2] = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 30;
                var5 = var16[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var15 = _closure1_slot12;
                var15 = var15.TOGGLE;
                var5.rowMode = var15;
                var5.onSelectUser = var14;
                var5.disabledUserIds = var13;
                var5.selectedUserIds = var12;
                var5.withAffinitySuggestions = var11;
                var5.disableGradient = var10;
                var8 = var9 != var8;
                var5.disableStickySections = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1372, 12533, 3477, 1613, 8842, 660, 33, 1297, 671, 3905, 7839, 7981, 7929, 3237, 566, 13876, 795, 3107, 1234, 8848, 8857, 8671, 8318, 5859, 6510, 4840, 11317, 2]);