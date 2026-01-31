// modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME;
    var _closure1_slot7 = var6;
    var3 = var3.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var9 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var10 = 8;
    var3 = var5[var10];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 16;
    var8.padding = var11;
    var3.wrapper = var8;
    var8 = {};
    var8.paddingTop = var11;
    var3.body = var8;
    var8 = {};
    var11 = 18;
    var8.lineHeight = var11;
    var3.description = var8;
    var8 = {};
    var8.paddingTop = var10;
    var3.cta = var8;
    var8 = {};
    var9 = var9.PRIMARY_SEMIBOLD;
    var8.fontFamily = var9;
    var3.countdown = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79076: for (var _fun79076_ip = 0;;) switch (_fun79076_ip) {
            case 0:
                var3 = arg0;
                var23 = var3.guildId;
                var _closure2_slot0 = var23;
                var22 = var3.userId;
                var _closure2_slot1 = var22;
                var6 = var3.onCancel;
                var1 = {
                    'guildId': 0,
                    'userId': 0,
                    'onCancel': 0
                };
                var19 = null;
                var27 = var1;
                var26 = null;
                var0 = silentSetPrototypeOf(var27, var26);
                var2 = 0;
                var27 = {};
                var26 = var3;
                var25 = var1;
                var4 = copyDataProperties(var27, var26, var25);
                var0 = _closure1_slot12;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var _closure2_slot2 = var17;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)(var22, var23);
                var5 = _closure1_slot4;
                var0 = 1;
                var0 = var5.bind(var3)(var8, var0);
                var0 = var0[var2];
                var _closure2_slot3 = var0;
                var0 = 10;
                var0 = var7[var0];
                var2 = var1.bind(var3)(var0);
                var0 = function() { // Environment: var18
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot7;
                    var1.type = var5;
                    var6 = _closure2_slot0;
                    var1.guild_id = var6;
                    var5 = _closure2_slot1;
                    var1.other_user_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = function() { // Environment: var18
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun79080: for (var _fun79080_ip = 0;;) switch (_fun79080_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun79080_ip = 190;
                                        continue _fun79080
                                    }
                                case 10:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 12;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var1);
                                    var4 = var5.setCommunicationDisabledDuration;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = var4.bind(var5)(var3, var1);
                                    SaveGenerator(address = 62);
                                case 60:
                                    return var1;
                                case 62:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun79080_ip = 187;
                                        continue _fun79080
                                    }
                                case 68:
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var3 = 13;
                                    var3 = var8[var3];
                                    var5 = var7.bind(var2)(var3);
                                    var4 = var5.open;
                                    var3 = {};
                                    var9 = 'GUILD_ENABLE_COMMUNICATION_SUCCESS';
                                    var3.key = var9;
                                    var11 = _closure1_slot0;
                                    var6 = 14;
                                    var9 = var8[var6];
                                    var9 = var11.bind(var2)(var9);
                                    var10 = var9.intl;
                                    var9 = var10.string;
                                    var6 = var8[var6];
                                    var6 = var11.bind(var2)(var6);
                                    var6 = var6.t;
                                    var6 = var6["/Mmbfv"];
                                    var6 = var9.bind(var10)(var6);
                                    var3.content = var6;
                                    var6 = 15;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var2)(var6);
                                    var3.icon = var6;
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 187:
                                    return var1;
                                case 190:
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
                var5 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var0 = 16;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var27 = var0;
                var26 = var4;
                var8 = copyDataProperties(var27, var26);
                var10 = _closure1_slot0;
                var16 = 14;
                var8 = var7[var16];
                var8 = var10.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var16];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["+ZD3ou"];
                var9 = var9.bind(var11)(var8);
                var8 = 'title';
                var0[var8] = var9;
                var9 = var17.wrapper;
                var8 = 'style';
                var0[var8] = var9;
                var8 = var7[var16];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var16];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["ETE/oC"];
                var8 = var8.bind(var9)(var7);
                var7 = 'cancelText';
                var0[var7] = var8;
                var8 = var19 == var4;
                var7 = undefined;
                if (var8) {
                    _fun79076_ip = 340;
                    continue _fun79076
                }
            case 334:
                var7 = var4.onClose;
            case 340:
                var4 = 'onClose';
                var0[var4] = var7;
                var4 = 'onCancel';
                var0[var4] = var6;
                var11 = _closure1_slot0;
                var24 = _closure1_slot2;
                var4 = var24[var16];
                var4 = var11.bind(var3)(var4);
                var7 = var4.intl;
                var6 = var7.string;
                var4 = var24[var16];
                var4 = var11.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.qXtNtS;
                var6 = var6.bind(var7)(var4);
                var4 = 'confirmText';
                var0[var4] = var6;
                var4 = 'onConfirm';
                var0[var4] = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var17.body;
                var4.style = var7;
                var9 = _closure1_slot10;
                var7 = 17;
                var7 = var24[var7];
                var7 = var11.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = var17.description;
                var7.style = var10;
                var13 = 'text-sm/medium';
                var7.variant = var13;
                var10 = var24[var16];
                var10 = var11.bind(var3)(var10);
                var14 = var10.intl;
                var12 = var14.format;
                var10 = var24[var16];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10["t+abNU"];
                var10 = {};
                var21 = _closure1_slot6;
                var20 = var21.getUser;
                var22 = var20.bind(var21)(var22);
                var21 = _closure1_slot1;
                var20 = 18;
                var20 = var24[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.getName;
                var20 = var20.bind(var21)(var23, var19, var22);
                var21 = var19 != var20;
                var19 = '';
                if (!var21) {
                    _fun79076_ip = 588;
                    continue _fun79076
                }
            case 585:
                var19 = var20;
            case 588:
                var10.username = var19;
                var18 = function() {
                    _fun79082: for (var _fun79082_ip = 0;;) switch (_fun79082_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var1;
                            var4 = 0;
                            if (!var0) {
                                _fun79082_ip = 50;
                                continue _fun79082
                            }
                        case 18:
                            var0 = global;
                            var2 = var0.Date;
                            var7 = _closure2_slot3;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var4 = var0 instanceof Object ? var0 : var1;
                        case 50:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.countdown;
                            var0.style = var5;
                            var0.deadline = var4;
                            var4 = true;
                            var0.withUnits = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var10.countdown = var18;
                var10 = var12.bind(var14)(var11, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 20;
                var8 = var11[var8];
                var8 = var12.bind(var3)(var8);
                var9 = var8.TextWithIOSLinkWorkaround;
                var8 = {};
                var18 = var17.cta;
                var14 = new Array(2);
                var14[0] = var18;
                var17 = var17.description;
                var14[1] = var17;
                var8.style = var14;
                var8.variant = var13;
                var13 = var11[var16];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.KtENkK;
                var11 = {};
                var15 = _closure1_slot8;
                var11.link = var15;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1613, 1674, 660, 33, 1297, 6787, 4062, 795, 10013, 3107, 1234, 7909, 3896, 3900, 3920, 9080, 5294, 2]);