// modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PlatformIcon, environment: var3
        _fun77562: for (var _fun77562_ip = 0;;) switch (_fun77562_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.platformType;
                var1 = _closure1_slot30;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var8 = var1.bind(var3)();
                var1 = 17;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.get;
                var6 = var1.bind(var2)(var5);
                var7 = _closure1_slot0;
                var1 = 18;
                var1 = var9[var1];
                var5 = var7.bind(var3)(var1);
                var2 = var5.makeSource;
                var1 = 19;
                var1 = var9[var1];
                var7 = var7.bind(var3)(var1);
                var1 = var7.isThemeLight;
                var1 = var1.bind(var7)(var8);
                var6 = var6.icon;
                if (var1) {
                    _fun77562_ip = 129;
                    continue _fun77562
                }
            case 121:
                var1 = var6.darkPNG;
                _fun77562_ip = 135;
                continue _fun77562;
            case 129:
                var1 = var6.lightPNG;
            case 135:
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot27;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 20;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.source = var5;
                var4 = var4.platformIcon;
                var0.style = var4;
                var4 = true;
                var0.disableColor = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: ChannelName, environment: var3
        _fun77563: for (var _fun77563_ip = 0;;) switch (_fun77563_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var6 = var0.style;
                var0 = _closure1_slot30;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 21;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIcon;
                var11 = var0.bind(var1)(var8);
                var2 = _closure1_slot28;
                var1 = _closure1_slot8;
                var0 = {};
                var7 = var9.channelName;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var6 = null;
                var4 = var6 != var11;
                if (!var4) {
                    _fun77563_ip = 144;
                    continue _fun77563
                }
            case 98:
                var10 = _closure1_slot27;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 20;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.source = var11;
                var11 = var9.channelNameIcon;
                var4.style = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 144:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot27;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 22;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'text-default',
                    'style': null,
                    'lineClamp': 1
                };
                var9 = var9.channelNameText;
                var5.style = var9;
                var8 = var8.name;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: ConnectionsCheck, environment: var3
        _fun77564: for (var _fun77564_ip = 0;;) switch (_fun77564_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.connectionType;
                var12 = var0.connectionMetadataField;
                var3 = var0.operator;
                var11 = var0.value;
                var8 = var0.result;
                var10 = var0.description;
                var0 = _closure1_slot30;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var10)) {
                    _fun77564_ip = 406;
                    continue _fun77564
                }
            case 59:
                var2 = _closure1_slot17;
                var2 = var2.EQUAL;
                if (!(var2 !== var3)) {
                    _fun77564_ip = 244;
                    continue _fun77564
                }
            case 76:
                var2 = _closure1_slot17;
                var2 = var2.NOT_EQUAL;
                if (!(var2 !== var3)) {
                    _fun77564_ip = 209;
                    continue _fun77564
                }
            case 90:
                var2 = _closure1_slot17;
                var2 = var2.LESS_THAN;
                if (!(var2 !== var3)) {
                    _fun77564_ip = 171;
                    continue _fun77564
                }
            case 104:
                var2 = _closure1_slot17;
                var2 = var2.GREATER_THAN;
                if (!(var2 !== var3)) {
                    _fun77564_ip = 133;
                    continue _fun77564
                }
            case 118:
                if (!(var4 !== var3)) {
                    _fun77564_ip = 131;
                    continue _fun77564
                }
            case 122:
                var9 = undefined;
                if (!(var0 === var3)) {
                    _fun77564_ip = 344;
                    continue _fun77564
                }
            case 131:
                return var0;
            case 133:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var9 = var2["8W9OXU"];
                _fun77564_ip = 344;
                continue _fun77564;
            case 171:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var9 = var2.Ef35xs;
                _fun77564_ip = 344;
                continue _fun77564;
            case 209:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var9 = var2.otcpTN;
                _fun77564_ip = 344;
                continue _fun77564;
            case 244:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 23;
                var2 = var2[var7];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var5 = var2["0BlpbA"];
                var2 = _closure1_slot19;
                var2 = var2.PAYPAL;
                var2 = var13 === var2;
                if (!var2) {
                    _fun77564_ip = 308;
                    continue _fun77564
                }
            case 294:
                var14 = _closure1_slot16;
                var14 = var14.PAYPAL_VERIFIED;
                var2 = var12 === var14;
            case 308:
                var9 = var5;
                if (!var2) {
                    _fun77564_ip = 344;
                    continue _fun77564
                }
            case 314:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var9 = var2.dcSDhW;
            case 344:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var7 = var5.bind(var4)(var2);
                var5 = var7.getConnectionsCheckText;
                var2 = {};
                var2.connectionType = var13;
                var2.connectionMetadataField = var12;
                var2.operator = var3;
                var2.operatorText = var9;
                var2.value = var11;
                var5 = var5.bind(var7)(var2);
                _fun77564_ip = 657;
                continue _fun77564;
            case 406:
                var2 = _closure1_slot17;
                var2 = var2.LESS_THAN;
                if (!(var2 !== var3)) {
                    _fun77564_ip = 551;
                    continue _fun77564
                }
            case 423:
                var2 = _closure1_slot17;
                var2 = var2.GREATER_THAN;
                var5 = var10;
                if (!(var2 === var3)) {
                    _fun77564_ip = 657;
                    continue _fun77564
                }
            case 443:
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 23;
                var7 = var12[var2];
                var7 = var3.bind(var4)(var7);
                var9 = var7.intl;
                var7 = var9.format;
                var2 = var12[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var3 = var2["2p7dA3"];
                var2 = {};
                var2.description = var10;
                var12 = global;
                var15 = var12.Math;
                var14 = var15.max;
                var12 = var12.Number;
                var13 = var12.bind(var4)(var11);
                var12 = 1;
                var13 = var13 + var12;
                var12 = 0;
                var12 = var14.bind(var15)(var12, var13);
                var2.count = var12;
                var5 = var7.bind(var9)(var3, var2);
                _fun77564_ip = 657;
                continue _fun77564;
            case 551:
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 23;
                var7 = var12[var2];
                var7 = var3.bind(var4)(var7);
                var9 = var7.intl;
                var7 = var9.format;
                var2 = var12[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var3 = var2["2p7dA3"];
                var2 = {};
                var2.description = var10;
                var10 = global;
                var13 = var10.Math;
                var12 = var13.max;
                var10 = var10.Number;
                var11 = var10.bind(var4)(var11);
                var10 = 1;
                var11 = var11 - var10;
                var10 = 0;
                var10 = var12.bind(var13)(var10, var11);
                var2.count = var10;
                var5 = var7.bind(var9)(var3, var2);
            case 657:
                var2 = var0 == var5;
                var0 = null;
                if (var2) {
                    _fun77564_ip = 746;
                    continue _fun77564
                }
            case 666:
                var3 = _closure1_slot27;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var7 = 'text-xs/normal';
                var1.variant = var7;
                var7 = 'text-feedback-critical';
                if (!var8) {
                    _fun77564_ip = 722;
                    continue _fun77564
                }
            case 716:
                var7 = 'text-default';
            case 722:
                var1.color = var7;
                var6 = var6.connectionsCheck;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 746:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function(arg0) { // Original name: ConnectionsChecks, environment: var3
        _fun77565: for (var _fun77565_ip = 0;;) switch (_fun77565_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.eligibilityStatesGroups;
                var _closure2_slot0 = var2;
                var1 = var0.onPlatformConnect;
                var _closure2_slot1 = var1;
                var1 = var0.onPlatformConnected;
                var _closure2_slot2 = var1;
                var12 = var0.initialAttemptedPlatformType;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var5 = _closure1_slot30;
                var5 = var5.bind(var3)();
                var _closure2_slot3 = var5;
                var7 = _closure1_slot5;
                var6 = var7.useState;
                var5 = {};
                var6 = var6.bind(var7)(var5);
                var5 = _closure1_slot4;
                var10 = 2;
                var5 = var5.bind(var3)(var6, var10);
                var7 = 0;
                var6 = var5[var7];
                var _closure2_slot4 = var6;
                var6 = 1;
                var5 = var5[var6];
                var _closure2_slot5 = var5;
                var8 = _closure1_slot5;
                var5 = var8.useState;
                var8 = var5.bind(var8)(var7);
                var5 = _closure1_slot4;
                var5 = var5.bind(var3)(var8, var10);
                var8 = var5[var7];
                var _closure2_slot6 = var8;
                var5 = var5[var6];
                var _closure2_slot7 = var5;
                var9 = _closure1_slot5;
                var8 = var9.useState;
                var11 = null;
                var13 = var11 != var12;
                var5 = null;
                if (!var13) {
                    _fun77565_ip = 199;
                    continue _fun77565
                }
            case 196:
                var5 = var12;
            case 199:
                var8 = var8.bind(var9)(var5);
                var5 = _closure1_slot4;
                var5 = var5.bind(var3)(var8, var10);
                var9 = var5[var7];
                _closure2_slot8 = var9;
                var5 = var5[var6];
                _closure2_slot9 = var5;
                var8 = _closure1_slot5;
                var5 = var8.useState;
                var8 = var5.bind(var8)(var11);
                var5 = _closure1_slot4;
                var5 = var5.bind(var3)(var8, var10);
                var8 = var5[var7];
                _closure2_slot10 = var8;
                var5 = var5[var6];
                _closure2_slot11 = var5;
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.flatten;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var5);
                _closure2_slot12 = var2;
                var10 = _closure1_slot5;
                var7 = var10.useMemo;
                var6 = new Array(1);
                var6[0] = var2;
                var5 = function() { // Environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.groupBy;
                    var1 = _closure2_slot12;
                    var0 = function(arg0) { // Environment: var0
                        _fun77568: for (var _fun77568_ip = 0;;) switch (_fun77568_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.connection_type;
                                var2 = var0.application_id;
                                var1 = null;
                                var4 = var1 != var2;
                                var2 = '';
                                var1 = var2;
                                if (!var4) {
                                    _fun77568_ip = 59;
                                    continue _fun77568
                                }
                            case 31:
                                var5 = var0.application_id;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var0 = ':';
                                var1 = var4.bind(var0)(var5);
                            case 59:
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var0 = var0.concat;
                                var0 = var0.bind(var2)(var3, var1);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var7.bind(var10)(var5, var6);
                _closure2_slot13 = var7;
                var10 = _closure1_slot5;
                var6 = var10.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var4
                    var2 = _closure2_slot7;
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var6.bind(var10)(var2, var5);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var2 = new Array(4);
                var2[0] = var7;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var1;
                var1 = function() { // Environment: var4
                    _fun77570: for (var _fun77570_ip = 0;;) switch (_fun77570_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun77570_ip = 143;
                                continue _fun77570
                            }
                        case 16:
                            var3 = _closure2_slot13;
                            var6 = _closure2_slot8;
                            var2 = _closure2_slot10;
                            var2 = var1 != var2;
                            var5 = '';
                            var4 = var5;
                            if (!var2) {
                                _fun77570_ip = 73;
                                continue _fun77570
                            }
                        case 42:
                            var2 = _closure2_slot10;
                            var8 = var2.id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var2 = ':';
                            var4 = var7.bind(var2)(var8);
                        case 73:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var2 = var2.concat;
                            var2 = var2.bind(var5)(var6, var4);
                            var3 = var3[var2];
                            if (!(var1 != var3)) {
                                _fun77570_ip = 143;
                                continue _fun77570
                            }
                        case 100:
                            var2 = var3.every;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.result;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            if (!var1) {
                                _fun77570_ip = 143;
                                continue _fun77570
                            }
                        case 123:
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot8;
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                        case 143:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 26;
                var1 = var8[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useToken;
                var6 = _closure1_slot1;
                var1 = 15;
                var1 = var8[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var1 = var1.GREEN_330;
                var1 = var2.bind(var5)(var1);
                _closure2_slot14 = var1;
                var2 = _closure1_slot27;
                var1 = _closure1_slot29;
                var0 = {};
                var5 = global;
                var6 = var5.Object;
                var5 = var6.keys;
                var7 = var5.bind(var6)(var7);
                var6 = var7.sort;
                var5 = function(arg0, arg1) { // Environment: var4
                    _fun77572: for (var _fun77572_ip = 0;;) switch (_fun77572_ip) {
                        case 0:
                            var3 = _closure2_slot13;
                            var2 = arg0;
                            var4 = var3[var2];
                            var3 = var4.every;
                            var2 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.result;
                                return var0;
                            };
                            var6 = var3.bind(var4)(var2);
                            var2 = _closure2_slot13;
                            var1 = arg1;
                            var2 = var2[var1];
                            var1 = var2.every;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.result;
                                return var0;
                            };
                            var3 = var1.bind(var2)(var0);
                            var2 = true;
                            if (!(var2 === var6)) {
                                _fun77572_ip = 78;
                                continue _fun77572
                            }
                        case 69:
                            var0 = 1;
                            var1 = false;
                            if (!(var1 !== var3)) {
                                _fun77572_ip = 101;
                                continue _fun77572
                            }
                        case 78:
                            var5 = false;
                            var1 = 0;
                            if (!(var5 === var6)) {
                                _fun77572_ip = 98;
                                continue _fun77572
                            }
                        case 86:
                            var1 = 0;
                            if (!(var2 === var3)) {
                                _fun77572_ip = 98;
                                continue _fun77572
                            }
                        case 92:
                            var1 = -1;
                        case 98:
                            var0 = var1;
                        case 101:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun77575: for (var _fun77575_ip = 0;;) switch (_fun77575_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot13;
                            var2 = var0[var4];
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var11
                                var0 = arg0;
                                var1 = var0.operator;
                                var0 = null;
                                var0 = var0 == var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var3 = var2.filter;
                            var1 = function(arg0) { // Environment: var11
                                var0 = arg0;
                                var1 = var0.operator;
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var13 = var3.bind(var2)(var1);
                            var16 = null;
                            var8 = var16 == var0;
                            if (var8) {
                                _fun77575_ip = 65;
                                continue _fun77575
                            }
                        case 59:
                            var8 = var0.result;
                        case 65:
                            if (!var8) {
                                _fun77575_ip = 86;
                                continue _fun77575
                            }
                        case 68:
                            var1 = var13.every;
                            var0 = function(arg0) { // Environment: var11
                                var0 = arg0;
                                var0 = var0.result;
                                return var0;
                            };
                            var8 = var1.bind(var13)(var0);
                        case 86:
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var11
                                var0 = arg0;
                                var1 = var0.application;
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.get;
                            var24 = var1.bind(var2)(var4);
                            var _closure3_slot1 = var24;
                            var9 = var16 == var24;
                            if (var9) {
                                _fun77575_ip = 154;
                                continue _fun77575
                            }
                        case 149:
                            var9 = var24.enabled;
                        case 154:
                            var1 = var16 == var0;
                            var25 = undefined;
                            if (var1) {
                                _fun77575_ip = 168;
                                continue _fun77575
                            }
                        case 163:
                            var25 = var0.application;
                        case 168:
                            var _closure3_slot2 = var25;
                            var1 = var16 == var25;
                            var0 = undefined;
                            if (var1) {
                                _fun77575_ip = 187;
                                continue _fun77575
                            }
                        case 181:
                            var0 = var25.bot;
                        case 187:
                            var0 = var16 != var0;
                            var14 = null;
                            if (!var0) {
                                _fun77575_ip = 226;
                                continue _fun77575
                            }
                        case 196:
                            var2 = _closure1_slot10;
                            var30 = var25.bot;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var31 = var1;
                            var0 = new var31[var2](var30, var29);
                            var14 = var0 instanceof Object ? var0 : var1;
                        case 226:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 24;
                            var0 = var2[var0];
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.officialApplicationIds;
                            var1 = var2.includes;
                            var0 = var16 == var25;
                            var5 = undefined;
                            if (var0) {
                                _fun77575_ip = 271;
                                continue _fun77575
                            }
                        case 266:
                            var5 = var25.id;
                        case 271:
                            var6 = var16 != var5;
                            var0 = '';
                            if (!var6) {
                                _fun77575_ip = 285;
                                continue _fun77575
                            }
                        case 282:
                            var0 = var5;
                        case 285:
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot4;
                            var5 = var16 == var24;
                            var1 = undefined;
                            if (var5) {
                                _fun77575_ip = 308;
                                continue _fun77575
                            }
                        case 303:
                            var1 = var24.type;
                        case 308:
                            if (!(var16 == var1)) {
                                _fun77575_ip = 316;
                                continue _fun77575
                            }
                        case 312:
                            var1 = _closure1_slot18;
                        case 316:
                            var2 = var2[var1];
                            var5 = !var8;
                            if (!var5) {
                                _fun77575_ip = 330;
                                continue _fun77575
                            }
                        case 326:
                            var5 = var16 != var2;
                        case 330:
                            if (!var5) {
                                _fun77575_ip = 341;
                                continue _fun77575
                            }
                        case 333:
                            var1 = _closure2_slot6;
                            var5 = var2 <= var1;
                        case 341:
                            var7 = _closure1_slot27;
                            if (var8) {
                                _fun77575_ip = 705;
                                continue _fun77575
                            }
                        case 351:
                            if (var5) {
                                _fun77575_ip = 523;
                                continue _fun77575
                            }
                        case 357:
                            if (var9) {
                                _fun77575_ip = 460;
                                continue _fun77575
                            }
                        case 360:
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var1 = 22;
                            var1 = var17[var1];
                            var1 = var15.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'variant': 'text-md/medium',
                                'color': 'text-muted'
                            };
                            var6 = 23;
                            var10 = var17[var6];
                            var10 = var15.bind(var3)(var10);
                            var12 = var10.intl;
                            var10 = var12.string;
                            var6 = var17[var6];
                            var6 = var15.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.cEts68;
                            var6 = var10.bind(var12)(var6);
                            var1.children = var6;
                            var6 = var7.bind(var3)(var2, var1);
                            _fun77575_ip = 518;
                            continue _fun77575;
                        case 460:
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var1 = 20;
                            var1 = var15[var1];
                            var2 = var12.bind(var3)(var1);
                            var1 = {};
                            var10 = 29;
                            var10 = var15[var10];
                            var10 = var12.bind(var3)(var10);
                            var1.source = var10;
                            var10 = _closure2_slot3;
                            var10 = var10.connectionsChecksGroupCaret;
                            var1.style = var10;
                            var6 = var7.bind(var3)(var2, var1);
                        case 518:
                            _fun77575_ip = 703;
                            continue _fun77575;
                        case 523:
                            var12 = _closure1_slot1;
                            var18 = _closure1_slot2;
                            var10 = 28;
                            var1 = var18[var10];
                            var2 = var12.bind(var3)(var1);
                            var1 = {};
                            var15 = var18[var10];
                            var15 = var12.bind(var3)(var15);
                            var15 = var15.Sizes;
                            var15 = var15.SMALL;
                            var1.size = var15;
                            var15 = var18[var10];
                            var15 = var12.bind(var3)(var15);
                            var15 = var15.Looks;
                            var15 = var15.LINK;
                            var1.look = var15;
                            var10 = var18[var10];
                            var10 = var12.bind(var3)(var10);
                            var10 = var10.Colors;
                            var10 = var10.LINK;
                            var1.color = var10;
                            var10 = _closure2_slot3;
                            var10 = var10.connectionsChecksGroupRetryButton;
                            var1.style = var10;
                            var17 = _closure1_slot0;
                            var10 = 23;
                            var12 = var18[var10];
                            var12 = var17.bind(var3)(var12);
                            var15 = var12.intl;
                            var12 = var15.string;
                            var10 = var18[var10];
                            var10 = var17.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10["5911Lb"];
                            var10 = var12.bind(var15)(var10);
                            var1.text = var10;
                            var10 = true;
                            var1.shrink = var10;
                            var6 = var7.bind(var3)(var2, var1);
                        case 703:
                            _fun77575_ip = 763;
                            continue _fun77575;
                        case 705:
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var1 = 20;
                            var1 = var15[var1];
                            var2 = var12.bind(var3)(var1);
                            var1 = {};
                            var10 = 27;
                            var10 = var15[var10];
                            var10 = var12.bind(var3)(var10);
                            var1.source = var10;
                            var10 = _closure2_slot3;
                            var10 = var10.connectionsChecksGroupCheckmark;
                            var1.style = var10;
                            var6 = var7.bind(var3)(var2, var1);
                        case 763:
                            var1 = var16 == var24;
                            var2 = undefined;
                            if (var1) {
                                _fun77575_ip = 777;
                                continue _fun77575
                            }
                        case 772:
                            var2 = var24.type;
                        case 777:
                            var1 = _closure1_slot19;
                            var1 = var1.STEAM;
                            var17 = undefined;
                            if (!(var2 === var1)) {
                                _fun77575_ip = 857;
                                continue _fun77575
                            }
                        case 793:
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 23;
                            var2 = var12[var1];
                            var2 = var10.bind(var3)(var2);
                            var7 = var2.intl;
                            var2 = var7.string;
                            var1 = var12[var1];
                            var1 = var10.bind(var3)(var1);
                            var1 = var1.t;
                            var1 = var1.NcZh6K;
                            var1 = var2.bind(var7)(var1);
                            var _closure3_slot0 = var1;
                            var17 = var1;
                        case 857:
                            if (var0) {
                                _fun77575_ip = 935;
                                continue _fun77575
                            }
                        case 860:
                            var0 = var16 != var14;
                            var18 = undefined;
                            if (!var0) {
                                _fun77575_ip = 1005;
                                continue _fun77575
                            }
                        case 872:
                            var2 = _closure1_slot27;
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 31;
                            var0 = var7[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var7 = _closure2_slot3;
                            var7 = var7.botTag;
                            var0.style = var7;
                            var7 = var14.isVerifiedBot;
                            var7 = var7.bind(var14)();
                            var0.verified = var7;
                            var18 = var2.bind(var3)(var1, var0);
                            _fun77575_ip = 1005;
                            continue _fun77575;
                        case 935:
                            var2 = _closure1_slot27;
                            var1 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 30;
                            var0 = var7[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var7 = _closure2_slot3;
                            var7 = var7.botTag;
                            var0.style = var7;
                            var7 = _closure1_slot26;
                            var0.guildId = var7;
                            var7 = _closure2_slot14;
                            var0.roleColor = var7;
                            var7 = 16;
                            var0.size = var7;
                            var18 = var2.bind(var3)(var1, var0);
                        case 1005:
                            var2 = _closure1_slot28;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var7 = 'button';
                            var0.accessibilityRole = var7;
                            var7 = _closure2_slot3;
                            var10 = var7.connectionsChecksGroup;
                            var7 = new Array(3);
                            var7[0] = var10;
                            var10 = null;
                            if (!var8) {
                                _fun77575_ip = 1056;
                                continue _fun77575
                            }
                        case 1046:
                            var12 = _closure2_slot3;
                            var10 = var12.connectionsChecksGroupPassed;
                        case 1056:
                            var7[1] = var10;
                            var10 = null;
                            if (var9) {
                                _fun77575_ip = 1075;
                                continue _fun77575
                            }
                        case 1065:
                            var12 = _closure2_slot3;
                            var10 = var12.connectionsChecksGroupPlatformDisabled;
                        case 1075:
                            var7[2] = var10;
                            var0.style = var7;
                            var7 = var8;
                            if (var7) {
                                _fun77575_ip = 1092;
                                continue _fun77575
                            }
                        case 1089:
                            var7 = !var9;
                        case 1092:
                            var0.disabled = var7;
                            var7 = function() { // Original name: onPress, environment: var11
                                _fun77580: for (var _fun77580_ip = 0;;) switch (_fun77580_ip) {
                                    case 0:
                                        var0 = _closure3_slot1;
                                        var3 = null;
                                        var4 = var3 == var0;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun77580_ip = 29;
                                            continue _fun77580
                                        }
                                    case 20:
                                        var4 = _closure3_slot1;
                                        var2 = var4.type;
                                    case 29:
                                        if (!(var3 == var2)) {
                                            _fun77580_ip = 40;
                                            continue _fun77580
                                        }
                                    case 33:
                                        var2 = _closure1_slot18;
                                    case 40:
                                        var4 = _closure3_slot2;
                                        var4 = var3 != var4;
                                        var3 = null;
                                        if (!var4) {
                                            _fun77580_ip = 57;
                                            continue _fun77580
                                        }
                                    case 53:
                                        var3 = _closure3_slot2;
                                    case 57:
                                        var5 = _closure2_slot5;
                                        var4 = {};
                                        var8 = _closure2_slot4;
                                        var9 = var4;
                                        var6 = copyDataProperties(var9, var8);
                                        var6 = global;
                                        var7 = var6.Date;
                                        var6 = var7.now;
                                        var6 = var6.bind(var7)();
                                        var4[var2] = var6;
                                        var4 = var5.bind(var0)(var4);
                                        var4 = _closure2_slot9;
                                        var4 = var4.bind(var0)(var2);
                                        var4 = _closure2_slot11;
                                        var4 = var4.bind(var0)(var3);
                                        var1 = _closure2_slot1;
                                        var1 = var1.bind(var0)(var2, var3);
                                        return var0;
                                }
                            };
                            var0.onPress = var7;
                            var7 = null;
                            if (var8) {
                                _fun77575_ip = 1259;
                                continue _fun77575
                            }
                        case 1115:
                            var7 = null;
                            if (!var5) {
                                _fun77575_ip = 1259;
                                continue _fun77575
                            }
                        case 1123:
                            var9 = _closure1_slot27;
                            var8 = _closure1_slot8;
                            var5 = {};
                            var10 = _closure2_slot3;
                            var10 = var10.connectionsChecksGroupRequirementsNotMet;
                            var5.style = var10;
                            var15 = _closure1_slot27;
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var10 = 22;
                            var10 = var27[var10];
                            var10 = var26.bind(var3)(var10);
                            var12 = var10.Text;
                            var10 = {
                                'variant': 'text-xs/normal',
                                'color': 'always-white'
                            };
                            var19 = 23;
                            var21 = var27[var19];
                            var21 = var26.bind(var3)(var21);
                            var22 = var21.intl;
                            var21 = var22.string;
                            var19 = var27[var19];
                            var19 = var26.bind(var3)(var19);
                            var19 = var19.t;
                            var19 = var19.UB3hKo;
                            var19 = var21.bind(var22)(var19);
                            var10.children = var19;
                            var10 = var15.bind(var3)(var12, var10);
                            var5.children = var10;
                            var7 = var9.bind(var3)(var8, var5);
                        case 1259:
                            var5 = new Array(5);
                            var5[0] = var7;
                            var8 = var16 != var24;
                            var7 = null;
                            if (!var8) {
                                _fun77575_ip = 1302;
                                continue _fun77575
                            }
                        case 1276:
                            var10 = _closure1_slot27;
                            var9 = _closure1_slot32;
                            var8 = {};
                            var12 = var24.type;
                            var8.platformType = var12;
                            var7 = var10.bind(var3)(var9, var8);
                        case 1302:
                            var5[1] = var7;
                            var8 = var16 != var14;
                            var7 = null;
                            if (!var8) {
                                _fun77575_ip = 1398;
                                continue _fun77575
                            }
                        case 1315:
                            var10 = _closure1_slot27;
                            var9 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var12 = 32;
                            var8 = var15[var12];
                            var9 = var9.bind(var3)(var8);
                            var8 = {};
                            var19 = _closure2_slot3;
                            var19 = var19.appIcon;
                            var8.style = var19;
                            var8.user = var14;
                            var14 = _closure1_slot0;
                            var12 = var15[var12];
                            var12 = var14.bind(var3)(var12);
                            var12 = var12.AvatarSizes;
                            var12 = var12.XSMALL;
                            var8.size = var12;
                            var8.guildId = var3;
                            var7 = var10.bind(var3)(var9, var8);
                        case 1398:
                            var5[2] = var7;
                            var9 = _closure1_slot28;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var15 = _closure2_slot3;
                            var10 = var15.connectionsChecksGroupTextContainer;
                            var7.style = var10;
                            var14 = _closure1_slot28;
                            var12 = _closure1_slot8;
                            var10 = {};
                            var15 = var15.connectionsChecksGroupTextNameContainer;
                            var10.style = var15;
                            var21 = _closure1_slot27;
                            var19 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var15 = 22;
                            var15 = var22[var15];
                            var15 = var19.bind(var3)(var15);
                            var19 = var15.Text;
                            var15 = {
                                'variant': 'text-md/medium',
                                'color': 'mobile-text-heading-primary'
                            };
                            var26 = var16 == var24;
                            var22 = undefined;
                            if (var26) {
                                _fun77575_ip = 1503;
                                continue _fun77575
                            }
                        case 1498:
                            var22 = var24.name;
                        case 1503:
                            if (!(var16 == var22)) {
                                _fun77575_ip = 1524;
                                continue _fun77575
                            }
                        case 1507:
                            var26 = var16 == var25;
                            var24 = undefined;
                            if (var26) {
                                _fun77575_ip = 1521;
                                continue _fun77575
                            }
                        case 1516:
                            var24 = var25.name;
                        case 1521:
                            var22 = var24;
                        case 1524:
                            var15.children = var22;
                            var19 = var21.bind(var3)(var19, var15);
                            var15 = new Array(3);
                            var15[0] = var19;
                            var15[1] = var18;
                            var17 = var16 != var17;
                            var16 = null;
                            if (!var17) {
                                _fun77575_ip = 1673;
                                continue _fun77575
                            }
                        case 1555:
                            var19 = _closure1_slot27;
                            var18 = _closure1_slot7;
                            var17 = {};
                            var21 = function() { // Original name: onPress, environment: var11
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 33;
                                var1 = var7[var0];
                                var0 = undefined;
                                var3 = var6.bind(var0)(var1);
                                var2 = _closure3_slot0;
                                var1 = null;
                                var2 = var1 != var2;
                                var1 = 'tooltip is null';
                                var1 = var3.bind(var0)(var2, var1);
                                var1 = 34;
                                var1 = var7[var1];
                                var3 = var6.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var5 = 'CONNECTIONS_STEAM_TOOLTIP';
                                var1.key = var5;
                                var5 = 35;
                                var5 = var7[var5];
                                var5 = var6.bind(var0)(var5);
                                var1.icon = var5;
                                var4 = _closure3_slot0;
                                var1.content = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var17.onPress = var21;
                            var22 = _closure1_slot27;
                            var25 = _closure1_slot1;
                            var26 = _closure1_slot2;
                            var24 = 20;
                            var20 = var26[var24];
                            var21 = var25.bind(var3)(var20);
                            var20 = {};
                            var27 = 35;
                            var27 = var26[var27];
                            var27 = var25.bind(var3)(var27);
                            var20.source = var27;
                            var24 = var26[var24];
                            var24 = var25.bind(var3)(var24);
                            var24 = var24.Sizes;
                            var24 = var24.SMALL_20;
                            var20.size = var24;
                            var23 = _closure2_slot3;
                            var23 = var23.connectionsChecksGroupTextNameInfoIcon;
                            var20.style = var23;
                            var20 = var22.bind(var3)(var21, var20);
                            var17.children = var20;
                            var16 = var19.bind(var3)(var18, var17);
                        case 1673:
                            var15[2] = var16;
                            var10.children = var15;
                            var12 = var14.bind(var3)(var12, var10);
                            var10 = new Array(2);
                            var10[0] = var12;
                            var12 = var13.map;
                            var11 = function(arg0) { // Environment: var11
                                var0 = arg0;
                                var9 = var0.connection_type;
                                var4 = var0.connection_metadata_field;
                                var8 = var0.operator;
                                var7 = var0.value;
                                var6 = var0.result;
                                var5 = var0.description;
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var2 = 33;
                                var1 = var11[var2];
                                var3 = undefined;
                                var14 = var10.bind(var3)(var1);
                                var1 = null;
                                var13 = var1 != var4;
                                var12 = 'connectionMetadataField is null';
                                var12 = var14.bind(var3)(var13, var12);
                                var12 = var11[var2];
                                var14 = var10.bind(var3)(var12);
                                var13 = var1 != var8;
                                var12 = 'operator is null';
                                var12 = var14.bind(var3)(var13, var12);
                                var2 = var11[var2];
                                var10 = var10.bind(var3)(var2);
                                var2 = var1 != var7;
                                var1 = 'value is null';
                                var1 = var10.bind(var3)(var2, var1);
                                var2 = _closure1_slot27;
                                var1 = _closure1_slot34;
                                var0 = {};
                                var0.connectionType = var9;
                                var0.connectionMetadataField = var4;
                                var0.operator = var8;
                                var0.value = var7;
                                var0.result = var6;
                                var0.description = var5;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                            };
                            var11 = var12.bind(var13)(var11);
                            var10[1] = var11;
                            var7.children = var10;
                            var7 = var9.bind(var3)(var8, var7);
                            var5[3] = var7;
                            var5[4] = var6;
                            var0.children = var5;
                            var0 = var2.bind(var3)(var1, var0, var4);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0) { // Original name: ConnectedUserAccountOptions, environment: var3
        _fun77583: for (var _fun77583_ip = 0;;) switch (_fun77583_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.account;
                var _closure2_slot0 = var1;
                var2 = var0.setShowPreviewInvisibleIcon;
                var _closure2_slot1 = var2;
                var0 = var0.setShowPreviewMetadata;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot30;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var0 = var1.friendSync;
                var2 = var2.bind(var5)(var0);
                var0 = _closure1_slot4;
                var7 = 2;
                var0 = var0.bind(var3)(var2, var7);
                var5 = 0;
                var13 = var0[var5];
                var2 = 1;
                var0 = var0[var2];
                var _closure2_slot3 = var0;
                var9 = _closure1_slot5;
                var6 = var9.useState;
                var0 = var1.showActivity;
                var6 = var6.bind(var9)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var6, var7);
                var12 = var0[var5];
                var0 = var0[var2];
                var _closure2_slot4 = var0;
                var9 = _closure1_slot5;
                var6 = var9.useState;
                var0 = var1.metadataVisibility;
                var0 = var2 === var0;
                var6 = var6.bind(var9)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var6, var7);
                var9 = var0[var5];
                var _closure2_slot5 = var9;
                var0 = var0[var2];
                var _closure2_slot6 = var0;
                var11 = _closure1_slot5;
                var6 = var11.useState;
                var0 = var1.visibility;
                var0 = var2 === var0;
                var6 = var6.bind(var11)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var6, var7);
                var11 = var0[var5];
                var _closure2_slot7 = var11;
                var0 = var0[var2];
                var _closure2_slot8 = var0;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 36;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = function() { // Environment: var10
                    var3 = _closure2_slot1;
                    var0 = _closure2_slot7;
                    var2 = !var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var6.bind(var3)(var0);
                var0 = 17;
                var0 = var5[var0];
                var5 = var2.bind(var3)(var0);
                var2 = var5.get;
                var0 = var1.type;
                var0 = var2.bind(var5)(var0);
                var6 = _closure1_slot23;
                var5 = var6.has;
                var2 = var1.type;
                var2 = var5.bind(var6)(var2);
                var5 = undefined;
                if (!var2) {
                    _fun77583_ip = 428;
                    continue _fun77583
                }
            case 323:
                var7 = _closure1_slot27;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 37;
                var2 = var18[var2];
                var2 = var17.bind(var3)(var2);
                var6 = var2.FormSwitchRow;
                var2 = {};
                var14 = 23;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["+KCMSi"];
                var14 = var15.bind(var16)(var14);
                var2.label = var14;
                var2.value = var13;
                var13 = function(arg0) { // Original name: onValueChange, environment: var10
                    var5 = arg0;
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 38;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setFriendSync;
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var0;
                };
                var2.onValueChange = var13;
                var5 = var7.bind(var3)(var6, var2);
            case 428:
                var6 = _closure1_slot24;
                var2 = var6.has;
                var1 = var1.type;
                var1 = var2.bind(var6)(var1);
                var6 = undefined;
                if (!var1) {
                    _fun77583_ip = 570;
                    continue _fun77583
                }
            case 452:
                var7 = _closure1_slot27;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 37;
                var1 = var17[var1];
                var1 = var14.bind(var3)(var1);
                var2 = var1.FormSwitchRow;
                var1 = {};
                var13 = 23;
                var15 = var17[var13];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13["6u6J0q"];
                var13 = {};
                var17 = var0.name;
                var13.platform = var17;
                var13 = var15.bind(var16)(var14, var13);
                var1.label = var13;
                var1.value = var12;
                var12 = function(arg0) { // Original name: onValueChange, environment: var10
                    var5 = arg0;
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 38;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setShowActivity;
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var0;
                };
                var1.onValueChange = var12;
                var6 = var7.bind(var3)(var2, var1);
            case 570:
                var1 = var0.hasMetadata;
                var0 = true;
                var7 = undefined;
                if (!(var0 === var1)) {
                    _fun77583_ip = 696;
                    continue _fun77583
                }
            case 584:
                var2 = _closure1_slot27;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 37;
                var0 = var16[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.FormSwitchRow;
                var0 = {};
                var12 = 23;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.FYKGsL;
                var12 = var13.bind(var14)(var12);
                var0.label = var12;
                var0.value = var9;
                var9 = !var11;
                var0.disabled = var9;
                var9 = function(arg0) { // Original name: onValueChange, environment: var10
                    _fun77587: for (var _fun77587_ip = 0;;) switch (_fun77587_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var6);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var0)(var6);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 38;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.setMetadataVisibility;
                            var1 = _closure2_slot0;
                            var3 = var1.type;
                            var2 = var1.id;
                            var1 = 0;
                            if (!var6) {
                                _fun77587_ip = 77;
                                continue _fun77587
                            }
                        case 74:
                            var1 = 1;
                        case 77:
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.onValueChange = var9;
                var7 = var2.bind(var3)(var1, var0);
            case 696:
                var2 = _closure1_slot28;
                var1 = _closure1_slot8;
                var0 = {};
                var8 = var8.accountConnectedPrivacyOptionsContainer;
                var0.style = var8;
                var9 = _closure1_slot27;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 37;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var8 = var4.FormSwitchRow;
                var4 = {};
                var12 = 23;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.f7yOAX;
                var12 = var13.bind(var14)(var12);
                var4.label = var12;
                var4.value = var11;
                var10 = function(arg0) { // Original name: onValueChange, environment: var10
                    _fun77588: for (var _fun77588_ip = 0;;) switch (_fun77588_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure2_slot1;
                            var2 = !var6;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot8;
                            var2 = var2.bind(var0)(var6);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 38;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.setVisibility;
                            var1 = _closure2_slot0;
                            var3 = var1.type;
                            var2 = var1.id;
                            var1 = 0;
                            if (!var6) {
                                _fun77588_ip = 80;
                                continue _fun77588
                            }
                        case 77:
                            var1 = 1;
                        case 80:
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var4.onValueChange = var10;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(4);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var6;
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var9 = 0;
    var1 = var5[var9];
    var0 = undefined;
    var1 = var15.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var1 = var5[var8];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var7 = 2;
    var6 = var5[var7];
    var1 = arg3;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.ActivityIndicator;
    var _closure1_slot6 = var6;
    var6 = var1.Pressable;
    var _closure1_slot7 = var6;
    var1 = var1.View;
    var _closure1_slot8 = var1;
    var12 = 4;
    var1 = var5[var12];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var13 = 8;
    var1 = var5[var13];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.MetadataFields;
    var _closure1_slot16 = var6;
    var6 = var1.OperatorTypes;
    var _closure1_slot17 = var6;
    var1 = var1.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot18 = var1;
    var14 = 12;
    var1 = var5[var14];
    var1 = var4.bind(var0)(var1);
    var6 = var1.PlatformTypes;
    var _closure1_slot19 = var6;
    var6 = var1.UserSettingsSections;
    var _closure1_slot20 = var6;
    var6 = var1.AnalyticEvents;
    var _closure1_slot21 = var6;
    var6 = var1.MarketingURLs;
    var _closure1_slot22 = var6;
    var6 = var1.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot23 = var6;
    var6 = var1.ACTIVITY_PLATFORM_TYPES;
    var _closure1_slot24 = var6;
    var6 = var1.Permissions;
    var _closure1_slot25 = var6;
    var1 = var1.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot26 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.jsx;
    var _closure1_slot27 = var6;
    var6 = var1.jsxs;
    var _closure1_slot28 = var6;
    var1 = var1.Fragment;
    var _closure1_slot29 = var1;
    var1 = 14;
    var1 = var5[var1];
    var10 = var4.bind(var0)(var1);
    var6 = var10.createStyles;
    var1 = {};
    var11 = {};
    var11.padding = var14;
    var1.container = var11;
    var17 = 16;
    var11 = {
        'marginTop': 16,
        'flexDirection': 'column'
    };
    var1.connectionsChecksGroups = var11;
    var11 = {
        'flexDirection': 'row',
        'borderColor': null,
        'borderWidth': 2,
        'borderRadius': null,
        'paddingHorizontal': 16,
        'paddingVertical': 20,
        'marginBottom': 16,
        'width': '100%',
        'alignItems': 'center',
        'position': 'relative'
    };
    var14 = 15;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var11.borderColor = var16;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var11.borderRadius = var16;
    var16 = '100%';
    var1.connectionsChecksGroup = var11;
    var11 = {};
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var11.borderColor = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var18;
    var1.connectionsChecksGroupPassed = var11;
    var11 = {};
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_SUBTLE;
    var11.backgroundColor = var18;
    var1.connectionsChecksGroupPlatformDisabled = var11;
    var11 = {
        'paddingVertical': 4,
        'paddingHorizontal': 12,
        'borderRadius': null,
        'backgroundColor': null,
        'position': 'absolute',
        'top': 4294967288,
        'right': 20
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.md;
    var11.borderRadius = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_FEEDBACK_CRITICAL;
    var11.backgroundColor = var18;
    var1.connectionsChecksGroupRequirementsNotMet = var11;
    var11 = {};
    var11.flex = var8;
    var1.connectionsChecksGroupTextContainer = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var1.connectionsChecksGroupTextNameContainer = var11;
    var11 = {};
    var11.marginLeft = var12;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_FEEDBACK_WARNING;
    var11.tintColor = var18;
    var1.connectionsChecksGroupTextNameInfoIcon = var11;
    var11 = {
        'tintColor': null,
        'width': 24,
        'height': 24
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_FEEDBACK_POSITIVE;
    var11.tintColor = var18;
    var1.connectionsChecksGroupCheckmark = var11;
    var11 = {};
    var11.height = var16;
    var1.connectionsChecksGroupRetryButton = var11;
    var11 = {
        'tintColor': null,
        'width': 24,
        'height': 24
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_TEXT_DEFAULT;
    var11.tintColor = var18;
    var1.connectionsChecksGroupCaret = var11;
    var11 = {};
    var11.marginTop = var12;
    var1.connectionsCheck = var11;
    var11 = {
        'width': 24,
        'height': 24,
        'marginRight': 12
    };
    var1.platformIcon = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 4
    };
    var1.channelName = var11;
    var11 = {
        'tintColor': null,
        'marginRight': 8,
        'width': 24,
        'height': 24
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var11.tintColor = var18;
    var1.channelNameIcon = var11;
    var11 = {};
    var18 = 'hidden';
    var11.overflow = var18;
    var1.channelNameText = var11;
    var11 = {
        'flexDirection': 'row',
        'width': '100%',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var1.header = var11;
    var11 = {};
    var11.width = var16;
    var1.content = var11;
    var11 = {};
    var11.marginBottom = var17;
    var1.footerText = var11;
    var11 = {
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'marginVertical': 24
    };
    var1.accountConnectedContainer = var11;
    var11 = {};
    var11.width = var16;
    var1.accountConnectedPreview = var11;
    var11 = {
        'marginTop': 8,
        'borderRadius': null,
        'borderWidth': 1
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var11.borderRadius = var16;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var11.borderColor = var16;
    var1.accountConnectedPreviewConnectedUserAccount = var11;
    var11 = {
        'marginTop': 16,
        'width': '100%'
    };
    var1.accountConnectedPrivacy = var11;
    var11 = {
        'marginTop': 8,
        'borderWidth': 1,
        'borderColor': null,
        'borderRadius': null,
        'padding': 8,
        'flexDirection': 'column'
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var11.borderColor = var16;
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var11.borderRadius = var16;
    var1.accountConnectedPrivacyOptionsContainer = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'paddingVertical': 12,
        'paddingHorizontal': 8,
        'borderTopStartRadius': 4,
        'borderTopEndRadius': 4,
        'marginTop': 16
    };
    var16 = var5[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var16;
    var1.roleGranted = var11;
    var11 = {
        'overflow': 'hidden',
        'marginRight': 24
    };
    var1.roleGrantedName = var11;
    var11 = {};
    var11.marginRight = var13;
    var1.verifiedIcon = var11;
    var11 = {
        'flexDirection': 'column',
        'backgroundColor': null,
        'padding': 16,
        'borderBottomStartRadius': 4,
        'borderBottomEndRadius': 4,
        'marginBottom': 24
    };
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_NORMAL;
    var11.backgroundColor = var14;
    var1.channelsGranted = var11;
    var11 = {};
    var11.marginTop = var13;
    var1.manageConnectionsButton = var11;
    var11 = {
        'marginTop': 24,
        'marginBottom': 32,
        'alignSelf': 'center'
    };
    var1.loading = var11;
    var11 = {};
    var11.marginRight = var13;
    var1.appIcon = var11;
    var11 = {};
    var11.marginLeft = var12;
    var1.botTag = var11;
    var1 = var6.bind(var10)(var1);
    var _closure1_slot30 = var1;
    var1 = {};
    var1.CHECKS_REQUIRED = var9;
    var6 = 'CHECKS_REQUIRED';
    var1[var9] = var6;
    var1.ACCOUNT_CONNECTED = var8;
    var6 = 'ACCOUNT_CONNECTED';
    var1[var8] = var6;
    var1.ROLE_GRANTED = var7;
    var6 = 'ROLE_GRANTED';
    var1[var7] = var6;
    var _closure1_slot31 = var1;
    var1 = 52;
    var1 = var5[var1];
    var5 = var4.bind(var0)(var1);
    var4 = var5.fileFinishedImporting;
    var1 = 'modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx';
    var1 = var4.bind(var5)(var1);
    var1 = function(arg0) { // Original name: GuildRoleConnectionsConnectAccountsActionSheet, environment: var3
        _fun77589: for (var _fun77589_ip = 0;;) switch (_fun77589_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.guildId;
                var _closure2_slot0 = var11;
                var0 = var1.role;
                var _closure2_slot1 = var0;
                var2 = var1.initialAttemptedPlatformType;
                var _closure2_slot2 = var2;
                var1 = var1.onCloseModal;
                var _closure2_slot3 = var1;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot24 = var3;
                var _closure2_slot26 = var3;
                var1 = function() { // Original name: handleClose, environment: var8
                    _fun77590: for (var _fun77590_ip = 0;;) switch (_fun77590_ip) {
                        case 0:
                            var0 = undefined;
                            var1 = true;
                            if (!(var1 === var0)) {
                                _fun77590_ip = 10;
                                continue _fun77590
                            }
                        case 8:
                            var1 = false;
                        case 10:
                            if (!var1) {
                                _fun77590_ip = 34;
                                continue _fun77590
                            }
                        case 13:
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun77590_ip = 34;
                                continue _fun77590
                            }
                        case 26:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 34:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 44;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var _closure2_slot31 = var1;
                var1 = function() { // Original name: handleManageConnections, environment: var8
                    var2 = _closure2_slot31;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 45;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettings;
                    var1 = {};
                    var4 = _closure1_slot20;
                    var4 = var4.CONNECTIONS;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot32 = var1;
                var1 = function() { // Original name: handleManageAuthorizedApplications, environment: var8
                    var2 = _closure2_slot31;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 45;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettings;
                    var1 = {};
                    var4 = _closure1_slot20;
                    var4 = var4.AUTHORIZED_APPS;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot33 = var1;
                var1 = function() { // Original name: _handleAssignRole, environment: var8
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun77595: for (var _fun77595_ip = 0;;) switch (_fun77595_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun77595_ip = 87;
                                        continue _fun77595
                                    }
                                case 7:
                                    var4 = _closure2_slot14;
                                    var2 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var2)(var3);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 41;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.assignGuildRoleConnection;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = var1.id;
                                    var1 = var4.bind(var5)(var3, var1);
                                    SaveGenerator(address = 75);
                                case 73:
                                    return var1;
                                case 75:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun77595_ip = 84;
                                        continue _fun77595
                                    }
                                case 81:
                                    return var2;
                                case 84:
                                    return var1;
                                case 87:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot34 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot34 = var1;
                var1 = function(arg0, arg1) { // Original name: handlePlatformConnect, environment: var8
                    _fun77596: for (var _fun77596_ip = 0;;) switch (_fun77596_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var4;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 46;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var1.platformType = var5;
                            var5 = 'Verified Roles Connect Accounts Modal';
                            var1.location = var5;
                            var3 = function() { // Original name: onClose, environment: var3
                                _fun77597: for (var _fun77597_ip = 0;;) switch (_fun77597_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 44;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.openLazy;
                                        var1 = global;
                                        var3 = var1.Promise;
                                        var2 = var3.resolve;
                                        var1 = {};
                                        var6 = _closure1_slot37;
                                        var1.default = var6;
                                        var3 = var2.bind(var3)(var1);
                                        var2 = {};
                                        var6 = _closure2_slot1;
                                        var2.role = var6;
                                        var6 = _closure2_slot0;
                                        var2.guildId = var6;
                                        var6 = _closure3_slot0;
                                        var2.initialAttemptedPlatformType = var6;
                                        var8 = _closure3_slot1;
                                        var6 = null;
                                        var8 = var6 == var8;
                                        var6 = undefined;
                                        if (var8) {
                                            _fun77597_ip = 119;
                                            continue _fun77597
                                        }
                                    case 109:
                                        var7 = _closure3_slot1;
                                        var6 = var7.role_connections_verification_url;
                                    case 119:
                                        var2.overrideUrl = var6;
                                        var1 = _closure2_slot3;
                                        var2.onCloseModal = var1;
                                        var1 = 'GuildRoleConnectionsConnectAccountsActionSheet';
                                        var1 = var4.bind(var5)(var3, var1, var2);
                                        return var0;
                                }
                            };
                            var1.onClose = var3;
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun77596_ip = 87;
                                continue _fun77596
                            }
                        case 81:
                            var3 = var4.role_connections_verification_url;
                        case 87:
                            var1.overrideUrl = var3;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 42;
                            var1 = var8[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot21;
                            var2 = var1.PASSPORT_CHALLENGE_STARTED;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var7 = var7.id;
                            var1.role_id = var7;
                            var7 = _closure1_slot0;
                            var6 = 43;
                            var6 = var8[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.collectGuildAnalyticsMetadata;
                            var5 = _closure2_slot0;
                            var9 = var6.bind(var7)(var5);
                            var10 = var1;
                            var5 = copyDataProperties(var10, var9);
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var _closure2_slot35 = var1;
                var1 = function(arg0, arg1) { // Original name: handlePlatformConnected, environment: var8
                    _fun77598: for (var _fun77598_ip = 0;;) switch (_fun77598_ip) {
                        case 0:
                            var4 = arg1;
                            var5 = _closure2_slot22;
                            var0 = undefined;
                            var3 = arg0;
                            var3 = var5.bind(var0)(var3);
                            var3 = _closure2_slot24;
                            var3 = var3.bind(var0)(var4);
                            var5 = _closure2_slot6;
                            var3 = _closure1_slot31;
                            var3 = var3.ACCOUNT_CONNECTED;
                            var3 = var5.bind(var0)(var3);
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun77598_ip = 124;
                                continue _fun77598
                            }
                        case 59:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 47;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.fetchUserApplicationRoleConnections;
                            var4 = var2.bind(var3)();
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var1
                                var2 = _closure2_slot26;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.catch;
                            var1 = function() { // Environment: var1
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 124:
                            return var0;
                    }
                };
                var _closure2_slot36 = var1;
                var1 = _closure1_slot30;
                var13 = var1.bind(var3)();
                var _closure2_slot4 = var13;
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var9 = _closure1_slot31;
                var1 = var9.CHECKS_REQUIRED;
                var4 = var4.bind(var5)(var1);
                var1 = _closure1_slot4;
                var21 = 2;
                var1 = var1.bind(var3)(var4, var21);
                var19 = 0;
                var15 = var1[var19];
                var _closure2_slot5 = var15;
                var17 = 1;
                var1 = var1[var17];
                _closure2_slot6 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var7 = null;
                var4 = var1.bind(var4)(var7);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var4 = var1[var19];
                var _closure2_slot7 = var4;
                var1 = var1[var17];
                var _closure2_slot8 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var5 = false;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var4 = var1[var19];
                var _closure2_slot9 = var4;
                var1 = var1[var17];
                var _closure2_slot10 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var6 = true;
                var4 = var1.bind(var4)(var6);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var4 = var1[var19];
                var _closure2_slot11 = var4;
                var1 = var1[var17];
                var _closure2_slot12 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var18 = var1[var19];
                var _closure2_slot13 = var18;
                var1 = var1[var17];
                _closure2_slot14 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var4 = var1.bind(var4)(var6);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var4 = var1[var19];
                var _closure2_slot15 = var4;
                var1 = var1[var17];
                var _closure2_slot16 = var1;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var4, var21);
                var4 = var1[var19];
                var _closure2_slot17 = var4;
                var1 = var1[var17];
                var _closure2_slot18 = var1;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 39;
                var5 = var4[var6];
                var16 = var1.bind(var3)(var5);
                var14 = var16.useStateFromStores;
                var5 = _closure1_slot13;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var8
                    var1 = _closure1_slot13;
                    var0 = var1.getAccounts;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var14.bind(var16)(var10, var5);
                var _closure2_slot19 = var5;
                var10 = var4[var6];
                var20 = var1.bind(var3)(var10);
                var16 = var20.useStateFromStores;
                var10 = _closure1_slot11;
                var14 = new Array(1);
                var14[0] = var10;
                var10 = function() { // Environment: var8
                    var1 = _closure1_slot11;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var16.bind(var20)(var14, var10);
                var _closure2_slot20 = var10;
                var14 = _closure1_slot5;
                var10 = var14.useState;
                var14 = var10.bind(var14)(var7);
                var10 = _closure1_slot4;
                var10 = var10.bind(var3)(var14, var21);
                var14 = var10[var19];
                var _closure2_slot21 = var14;
                var10 = var10[var17];
                _closure2_slot22 = var10;
                var16 = _closure1_slot5;
                var10 = var16.useState;
                var16 = var10.bind(var16)(var7);
                var10 = _closure1_slot4;
                var16 = var10.bind(var3)(var16, var21);
                var10 = var16[var19];
                var _closure2_slot23 = var10;
                var16 = var16[var17];
                _closure2_slot24 = var16;
                var20 = _closure1_slot5;
                var16 = var20.useState;
                var20 = var16.bind(var20)(var7);
                var16 = _closure1_slot4;
                var16 = var16.bind(var3)(var20, var21);
                var19 = var16[var19];
                var _closure2_slot25 = var19;
                var16 = var16[var17];
                _closure2_slot26 = var16;
                var17 = _closure1_slot1;
                var16 = 16;
                var16 = var4[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.bind(var3)();
                var _closure2_slot27 = var16;
                var16 = var4[var6];
                var20 = var1.bind(var3)(var16);
                var19 = var20.useStateFromStores;
                var16 = _closure1_slot14;
                var17 = new Array(1);
                var17[0] = var16;
                var16 = function() { // Environment: var8
                    var3 = _closure1_slot14;
                    var2 = var3.getMember;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot20;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var16 = var19.bind(var20)(var17, var16);
                var _closure2_slot28 = var16;
                var17 = var4[var6];
                var21 = var1.bind(var3)(var17);
                var20 = var21.useStateFromStores;
                var17 = _closure1_slot12;
                var19 = new Array(1);
                var19[0] = var17;
                var17 = function() { // Environment: var8
                    var2 = _closure1_slot12;
                    var1 = var2.getMutableGuildChannelsForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var20.bind(var21)(var19, var17);
                var6 = var4[var6];
                var21 = var1.bind(var3)(var6);
                var20 = var21.useStateFromStores;
                var6 = _closure1_slot9;
                var17 = new Array(1);
                var17[0] = var6;
                var6 = function() { // Environment: var8
                    var0 = _closure1_slot9;
                    var0 = var0.locale;
                    return var0;
                };
                var6 = var20.bind(var21)(var17, var6);
                var _closure2_slot29 = var6;
                var6 = global;
                var17 = var6.Object;
                var6 = var17.values;
                var19 = var6.bind(var17)(var19);
                var17 = var19.filter;
                var6 = function(arg0) { // Environment: var8
                    _fun77606: for (var _fun77606_ip = 0;;) switch (_fun77606_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot15;
                            var2 = var4.can;
                            var0 = _closure1_slot25;
                            var0 = var0.VIEW_CHANNEL;
                            var0 = var2.bind(var4)(var0, var3);
                            if (!var0) {
                                _fun77606_ip = 61;
                                continue _fun77606
                            }
                        case 35:
                            var5 = _closure1_slot15;
                            var4 = var5.can;
                            var2 = _closure1_slot25;
                            var2 = var2.SEND_MESSAGES;
                            var0 = var4.bind(var5)(var2, var3);
                        case 61:
                            if (!var0) {
                                _fun77606_ip = 108;
                                continue _fun77606
                            }
                        case 64:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 40;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var3 = var1.bind(var2)(var3);
                            var2 = var3.includes;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 108:
                            return var0;
                    }
                };
                var17 = var17.bind(var19)(var6);
                var _closure2_slot30 = var17;
                var20 = _closure1_slot5;
                var19 = var20.useEffect;
                var6 = new Array(3);
                var6[0] = var11;
                var21 = var0.id;
                var6[1] = var21;
                var6[2] = var5;
                var5 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.fetchGuildRoleConnectionsEligibility;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var2 = _closure2_slot8;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var4);
                        var3 = _closure2_slot10;
                        var2 = function(arg0) { // Original name: checkEligibility, environment: var2
                            var2 = arg0;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.every;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.result;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var0)(var4);
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot12;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var19.bind(var20)(var5, var6);
                var19 = _closure1_slot5;
                var6 = var19.useEffect;
                var5 = new Array(3);
                var5[0] = var2;
                var2 = var0.id;
                var5[1] = var2;
                var5[2] = var11;
                var2 = function() { // Environment: var8
                    _fun77612: for (var _fun77612_ip = 0;;) switch (_fun77612_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun77612_ip = 113;
                                continue _fun77612
                            }
                        case 13:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 42;
                            var0 = var8[var0];
                            var7 = undefined;
                            var3 = var1.bind(var7)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot21;
                            var1 = var0.PASSPORT_CHALLENGE_VIEWED;
                            var0 = {};
                            var6 = _closure2_slot1;
                            var6 = var6.id;
                            var0.role_id = var6;
                            var6 = _closure1_slot0;
                            var5 = 43;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.collectGuildAnalyticsMetadata;
                            var4 = _closure2_slot0;
                            var9 = var5.bind(var6)(var4);
                            var10 = var0;
                            var4 = copyDataProperties(var10, var9);
                            var0 = var2.bind(var3)(var1, var0);
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var19)(var2, var5);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var2 = new Array(5);
                var2[0] = var18;
                var17 = var17.length;
                var2[1] = var17;
                var2[2] = var16;
                var2[3] = var11;
                var0 = var0.id;
                var2[4] = var0;
                var0 = function() { // Environment: var8
                    _fun77613: for (var _fun77613_ip = 0;;) switch (_fun77613_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (!var0) {
                                _fun77613_ip = 20;
                                continue _fun77613
                            }
                        case 10:
                            var2 = _closure2_slot28;
                            var1 = null;
                            var0 = var1 != var2;
                        case 20:
                            if (!var0) {
                                _fun77613_ip = 52;
                                continue _fun77613
                            }
                        case 23:
                            var1 = _closure2_slot28;
                            var3 = var1.roles;
                            var2 = var3.includes;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 52:
                            if (!var0) {
                                _fun77613_ip = 241;
                                continue _fun77613
                            }
                        case 58:
                            var1 = _closure2_slot14;
                            var7 = undefined;
                            var0 = false;
                            var0 = var1.bind(var7)(var0);
                            var0 = _closure2_slot30;
                            var1 = var0.length;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun77613_ip = 121;
                                continue _fun77613
                            }
                        case 86:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 44;
                            var0 = var2[var0];
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                            _fun77613_ip = 143;
                            continue _fun77613;
                        case 121:
                            var1 = _closure2_slot6;
                            var0 = _closure1_slot31;
                            var0 = var0.ROLE_GRANTED;
                            var0 = var1.bind(var7)(var0);
                        case 143:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 42;
                            var0 = var8[var0];
                            var3 = var1.bind(var7)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot21;
                            var1 = var0.PASSPORT_CHALLENGE_FINISHED;
                            var0 = {};
                            var6 = _closure2_slot1;
                            var6 = var6.id;
                            var0.role_id = var6;
                            var6 = _closure1_slot0;
                            var5 = 43;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.collectGuildAnalyticsMetadata;
                            var4 = _closure2_slot0;
                            var9 = var5.bind(var6)(var4);
                            var10 = var0;
                            var4 = copyDataProperties(var10, var9);
                            var0 = var2.bind(var3)(var1, var0);
                        case 241:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var2);
                var2 = _closure1_slot27;
                var0 = 48;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var6 = _closure1_slot28;
                var5 = _closure1_slot8;
                var4 = {};
                var11 = var13.container;
                var4.style = var11;
                var9 = var9.CHECKS_REQUIRED;
                if (!(var9 !== var15)) {
                    _fun77589_ip = 1427;
                    continue _fun77589
                }
            case 1054:
                var9 = _closure1_slot31;
                var9 = var9.ACCOUNT_CONNECTED;
                if (!(var9 !== var15)) {
                    _fun77589_ip = 1204;
                    continue _fun77589
                }
            case 1071:
                var9 = _closure1_slot31;
                var11 = var9.ROLE_GRANTED;
                var9 = null;
                if (!(var11 === var15)) {
                    _fun77589_ip = 1556;
                    continue _fun77589
                }
            case 1090:
                var16 = _closure1_slot27;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var11 = 22;
                var11 = var21[var11];
                var11 = var20.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {};
                var17 = 'heading-lg/extrabold';
                var11.variant = var17;
                var17 = var13.header;
                var11.style = var17;
                var17 = 23;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.najNdz;
                var17 = var18.bind(var19)(var17);
                var11.children = var17;
                var9 = var16.bind(var3)(var15, var11);
                _fun77589_ip = 1556;
                continue _fun77589;
            case 1204:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 33;
                var11 = var16[var11];
                var16 = var15.bind(var3)(var11);
                var15 = var7 != var14;
                var11 = 'lastPlatformConnected is null';
                var11 = var16.bind(var3)(var15, var11);
                var11 = var7 == var10;
                var18 = undefined;
                if (var11) {
                    _fun77589_ip = 1254;
                    continue _fun77589
                }
            case 1249:
                var18 = var10.name;
            case 1254:
                if (!(var7 == var18)) {
                    _fun77589_ip = 1305;
                    continue _fun77589
                }
            case 1258:
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 17;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.get;
                var10 = var10.bind(var11)(var14);
                var11 = var7 == var10;
                var7 = undefined;
                if (var11) {
                    _fun77589_ip = 1302;
                    continue _fun77589
                }
            case 1297:
                var7 = var10.name;
            case 1302:
                var18 = var7;
            case 1305:
                var11 = _closure1_slot27;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var7 = 22;
                var7 = var19[var7];
                var7 = var15.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {};
                var14 = 'heading-lg/extrabold';
                var7.variant = var14;
                var14 = var13.header;
                var7.style = var14;
                var14 = 23;
                var16 = var19[var14];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14.yQvgBO;
                var14 = {};
                var14.platformName = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var9 = var11.bind(var3)(var10, var7);
                _fun77589_ip = 1556;
                continue _fun77589;
            case 1427:
                var11 = _closure1_slot27;
                var10 = _closure1_slot8;
                var7 = {};
                var13 = var13.header;
                var7.style = var13;
                var14 = _closure1_slot27;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 22;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var15 = 'heading-lg/extrabold';
                var12.variant = var15;
                var15 = 23;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.zOZh3R;
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var7.children = var12;
                var9 = var11.bind(var3)(var10, var7);
            case 1556:
                var7 = new Array(3);
                var7[0] = var9;
                var9 = function() { // Original name: renderContent, environment: var8
                    _fun77614: for (var _fun77614_ip = 0;;) switch (_fun77614_ip) {
                        case 0:
                            var4 = _closure2_slot5;
                            var3 = _closure1_slot31;
                            var3 = var3.CHECKS_REQUIRED;
                            if (!(var3 !== var4)) {
                                _fun77614_ip = 1397;
                                continue _fun77614
                            }
                        case 29:
                            var3 = _closure1_slot31;
                            var3 = var3.ACCOUNT_CONNECTED;
                            if (!(var3 !== var4)) {
                                _fun77614_ip = 336;
                                continue _fun77614
                            }
                        case 46:
                            var3 = _closure1_slot31;
                            var3 = var3.ROLE_GRANTED;
                            if (!(var3 !== var4)) {
                                _fun77614_ip = 64;
                                continue _fun77614
                            }
                        case 60:
                            var3 = null;
                            return var3;
                        case 64:
                            var6 = _closure1_slot28;
                            var5 = _closure1_slot8;
                            var4 = {};
                            var11 = _closure2_slot4;
                            var3 = var11.content;
                            var4.style = var3;
                            var9 = _closure1_slot28;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var3 = var11.roleGranted;
                            var7.style = var3;
                            var13 = _closure1_slot27;
                            var12 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var3 = 51;
                            var10 = var16[var3];
                            var3 = undefined;
                            var12 = var12.bind(var3)(var10);
                            var10 = {};
                            var14 = _closure2_slot0;
                            var10.guildId = var14;
                            var14 = var11.verifiedIcon;
                            var10.style = var14;
                            var15 = _closure2_slot1;
                            var10.role = var15;
                            var14 = 24;
                            var10.size = var14;
                            var12 = var13.bind(var3)(var12, var10);
                            var10 = new Array(2);
                            var10[0] = var12;
                            var14 = _closure1_slot27;
                            var13 = _closure1_slot0;
                            var12 = 22;
                            var12 = var16[var12];
                            var12 = var13.bind(var3)(var12);
                            var13 = var12.Text;
                            var12 = {
                                'variant': 'text-lg/semibold',
                                'color': 'mobile-text-heading-primary',
                                'lineClamp': 1
                            };
                            var16 = var11.roleGrantedName;
                            var12.style = var16;
                            var15 = var15.name;
                            var12.children = var15;
                            var12 = var14.bind(var3)(var13, var12);
                            var10[1] = var12;
                            var7.children = var10;
                            var8 = var9.bind(var3)(var8, var7);
                            var7 = new Array(2);
                            var7[0] = var8;
                            var10 = _closure1_slot27;
                            var9 = _closure1_slot8;
                            var8 = {};
                            var11 = var11.channelsGranted;
                            var8.style = var11;
                            var13 = _closure2_slot30;
                            var12 = var13.map;
                            var11 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var4 = _closure1_slot27;
                                var3 = _closure1_slot33;
                                var2 = {};
                                var2.channel = var0;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                            };
                            var11 = var12.bind(var13)(var11);
                            var8.children = var11;
                            var8 = var10.bind(var3)(var9, var8);
                            var7[1] = var8;
                            var4.children = var7;
                            var3 = var6.bind(var3)(var5, var4);
                            return var3;
                        case 336:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 33;
                            var3 = var5[var3];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var3);
                            var3 = _closure2_slot21;
                            var13 = null;
                            var4 = var13 != var3;
                            var3 = 'lastPlatformConnected is null';
                            var3 = var6.bind(var5)(var4, var3);
                            var6 = _closure2_slot19;
                            var4 = var6.find;
                            var3 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure2_slot21;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var26 = var4.bind(var6)(var3);
                            var3 = _closure2_slot25;
                            var3 = var13 == var3;
                            var22 = undefined;
                            if (var3) {
                                _fun77614_ip = 435;
                                continue _fun77614
                            }
                        case 414:
                            var4 = _closure2_slot25;
                            var3 = var4.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun77616: for (var _fun77616_ip = 0;;) switch (_fun77616_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.application;
                                        var1 = var0.id;
                                        var3 = _closure2_slot23;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun77616_ip = 40;
                                            continue _fun77616
                                        }
                                    case 31:
                                        var2 = _closure2_slot23;
                                        var0 = var2.id;
                                    case 40:
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var22 = var3.bind(var4)(var0);
                        case 435:
                            var4 = _closure1_slot28;
                            var3 = _closure1_slot8;
                            var0 = {};
                            var9 = _closure2_slot4;
                            var6 = var9.content;
                            var0.style = var6;
                            var8 = _closure1_slot27;
                            var7 = _closure1_slot8;
                            var6 = {};
                            var9 = var9.accountConnectedContainer;
                            var6.style = var9;
                            if (!(var13 == var26)) {
                                _fun77614_ip = 489;
                                continue _fun77614
                            }
                        case 482:
                            if (!(var13 != var22)) {
                                _fun77614_ip = 1188;
                                continue _fun77614
                            }
                        case 489:
                            var11 = _closure1_slot28;
                            var10 = _closure1_slot29;
                            var9 = {};
                            var12 = var13 != var26;
                            var14 = null;
                            if (!var12) {
                                _fun77614_ip = 943;
                                continue _fun77614
                            }
                        case 511:
                            var16 = _closure1_slot28;
                            var15 = _closure1_slot29;
                            var12 = {};
                            var18 = _closure1_slot8;
                            var17 = {};
                            var23 = _closure2_slot4;
                            var19 = var23.accountConnectedPreview;
                            var17.style = var19;
                            var24 = _closure1_slot27;
                            var29 = _closure1_slot0;
                            var30 = _closure1_slot2;
                            var21 = 22;
                            var19 = var30[var21];
                            var19 = var29.bind(var5)(var19);
                            var20 = var19.Text;
                            var19 = {
                                'variant': 'eyebrow',
                                'color': 'text-default'
                            };
                            var25 = 23;
                            var27 = var30[var25];
                            var27 = var29.bind(var5)(var27);
                            var31 = var27.intl;
                            var28 = var31.string;
                            var27 = var30[var25];
                            var27 = var29.bind(var5)(var27);
                            var27 = var27.t;
                            var27 = var27.TOjkEg;
                            var27 = var28.bind(var31)(var27);
                            var19.children = var27;
                            var20 = var24.bind(var5)(var20, var19);
                            var19 = new Array(2);
                            var19[0] = var20;
                            var27 = _closure1_slot27;
                            var20 = 50;
                            var20 = var30[var20];
                            var20 = var29.bind(var5)(var20);
                            var24 = var20.ConnectedUserAccount;
                            var20 = {};
                            var20.account = var26;
                            var28 = _closure2_slot20;
                            var20.userId = var28;
                            var28 = _closure2_slot27;
                            var20.theme = var28;
                            var28 = _closure2_slot29;
                            var20.locale = var28;
                            var28 = var23.accountConnectedPreviewConnectedUserAccount;
                            var20.style = var28;
                            var28 = _closure2_slot15;
                            var20.showMetadata = var28;
                            var28 = _closure2_slot17;
                            var20.showInvisibleIcon = var28;
                            var20 = var27.bind(var5)(var24, var20);
                            var19[1] = var20;
                            var17.children = var19;
                            var18 = var16.bind(var5)(var18, var17);
                            var17 = new Array(2);
                            var17[0] = var18;
                            var20 = _closure1_slot28;
                            var19 = _closure1_slot8;
                            var18 = {};
                            var23 = var23.accountConnectedPrivacy;
                            var18.style = var23;
                            var24 = _closure1_slot27;
                            var21 = var30[var21];
                            var21 = var29.bind(var5)(var21);
                            var23 = var21.Text;
                            var21 = {
                                'variant': 'eyebrow',
                                'color': 'text-default'
                            };
                            var27 = var30[var25];
                            var27 = var29.bind(var5)(var27);
                            var28 = var27.intl;
                            var27 = var28.string;
                            var25 = var30[var25];
                            var25 = var29.bind(var5)(var25);
                            var25 = var25.t;
                            var25 = var25.jndPhX;
                            var25 = var27.bind(var28)(var25);
                            var21.children = var25;
                            var23 = var24.bind(var5)(var23, var21);
                            var21 = new Array(2);
                            var21[0] = var23;
                            var25 = _closure1_slot27;
                            var24 = _closure1_slot36;
                            var23 = {};
                            var23.account = var26;
                            var26 = _closure2_slot18;
                            var23.setShowPreviewInvisibleIcon = var26;
                            var26 = _closure2_slot16;
                            var23.setShowPreviewMetadata = var26;
                            var23 = var25.bind(var5)(var24, var23);
                            var21[1] = var23;
                            var18.children = var21;
                            var18 = var20.bind(var5)(var19, var18);
                            var17[1] = var18;
                            var12.children = var17;
                            var14 = var16.bind(var5)(var15, var12);
                        case 943:
                            var12 = new Array(2);
                            var12[0] = var14;
                            var14 = var13 != var22;
                            var13 = null;
                            if (!var14) {
                                _fun77614_ip = 1172;
                                continue _fun77614
                            }
                        case 963:
                            var16 = _closure1_slot28;
                            var15 = _closure1_slot8;
                            var14 = {};
                            var21 = _closure2_slot4;
                            var17 = var21.accountConnectedPreview;
                            var14.style = var17;
                            var20 = _closure1_slot27;
                            var19 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var17 = 22;
                            var17 = var23[var17];
                            var17 = var19.bind(var5)(var17);
                            var18 = var17.Text;
                            var17 = {
                                'variant': 'eyebrow',
                                'color': 'text-default'
                            };
                            var24 = 23;
                            var25 = var23[var24];
                            var25 = var19.bind(var5)(var25);
                            var26 = var25.intl;
                            var25 = var26.string;
                            var24 = var23[var24];
                            var24 = var19.bind(var5)(var24);
                            var24 = var24.t;
                            var24 = var24.TOjkEg;
                            var24 = var25.bind(var26)(var24);
                            var17.children = var24;
                            var18 = var20.bind(var5)(var18, var17);
                            var17 = new Array(2);
                            var17[0] = var18;
                            var20 = _closure1_slot27;
                            var18 = 50;
                            var18 = var23[var18];
                            var18 = var19.bind(var5)(var18);
                            var19 = var18.ConnectedApplicationUserRoleAccount;
                            var18 = {};
                            var18.applicationRoleConnection = var22;
                            var22 = _closure2_slot27;
                            var18.theme = var22;
                            var22 = _closure2_slot29;
                            var18.locale = var22;
                            var21 = var21.accountConnectedPreviewConnectedUserAccount;
                            var18.style = var21;
                            var18 = var20.bind(var5)(var19, var18);
                            var17[1] = var18;
                            var14.children = var17;
                            var13 = var16.bind(var5)(var15, var14);
                        case 1172:
                            var12[1] = var13;
                            var9.children = var12;
                            var9 = var11.bind(var5)(var10, var9);
                            _fun77614_ip = 1226;
                            continue _fun77614;
                        case 1188:
                            var12 = _closure1_slot27;
                            var11 = _closure1_slot6;
                            var10 = {};
                            var13 = 'large';
                            var10.size = var13;
                            var13 = _closure2_slot4;
                            var13 = var13.loading;
                            var10.style = var13;
                            var9 = var12.bind(var5)(var11, var10);
                        case 1226:
                            var6.children = var9;
                            var7 = var8.bind(var5)(var7, var6);
                            var6 = new Array(2);
                            var6[0] = var7;
                            var9 = _closure1_slot27;
                            var11 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var7 = 49;
                            var7 = var14[var7];
                            var7 = var11.bind(var5)(var7);
                            var8 = var7.TextWithIOSLinkWorkaround;
                            var7 = {
                                'variant': 'text-md/normal',
                                'color': 'text-default'
                            };
                            var10 = 23;
                            var12 = var14[var10];
                            var12 = var11.bind(var5)(var12);
                            var13 = var12.intl;
                            var12 = var13.format;
                            var10 = var14[var10];
                            var10 = var11.bind(var5)(var10);
                            var10 = var10.t;
                            var11 = var10.gsgvxh;
                            var10 = {};
                            var14 = _closure1_slot22;
                            var14 = var14.PRIVACY;
                            var10.privacyPolicyUrl = var14;
                            var14 = _closure2_slot33;
                            var10.onAuthorizedApplicationsClick = var14;
                            var14 = _closure2_slot32;
                            var10.onConnectionsClick = var14;
                            var10 = var12.bind(var13)(var11, var10);
                            var7.children = var10;
                            var7 = var9.bind(var5)(var8, var7);
                            var6[1] = var7;
                            var0.children = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            return var0;
                        case 1397:
                            var0 = _closure2_slot7;
                            var3 = null;
                            var10 = var3 != var0;
                            if (!var10) {
                                _fun77614_ip = 1426;
                                continue _fun77614
                            }
                        case 1410:
                            var0 = _closure2_slot7;
                            var4 = var0.length;
                            var0 = 1;
                            var10 = var4 > var0;
                        case 1426:
                            var0 = _closure2_slot7;
                            var13 = var3 != var0;
                            if (!var13) {
                                _fun77614_ip = 1453;
                                continue _fun77614
                            }
                        case 1437:
                            var0 = _closure2_slot7;
                            var4 = var0.length;
                            var0 = 1;
                            var13 = var0 === var4;
                        case 1453:
                            if (!var13) {
                                _fun77614_ip = 1478;
                                continue _fun77614
                            }
                        case 1456:
                            var4 = _closure2_slot7;
                            var0 = 0;
                            var0 = var4[var0];
                            var4 = var0.length;
                            var0 = 1;
                            var13 = var0 === var4;
                        case 1478:
                            var0 = _closure2_slot11;
                            if (var0) {
                                _fun77614_ip = 1937;
                                continue _fun77614
                            }
                        case 1488:
                            var0 = _closure2_slot7;
                            if (!(var3 != var0)) {
                                _fun77614_ip = 1937;
                                continue _fun77614
                            }
                        case 1499:
                            var5 = _closure1_slot28;
                            var4 = _closure1_slot8;
                            var3 = {};
                            var0 = _closure2_slot4;
                            var0 = var0.content;
                            var3.style = var0;
                            var8 = _closure1_slot27;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 22;
                            var6 = var9[var0];
                            var0 = undefined;
                            var6 = var11.bind(var0)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-md/medium',
                                'color': 'text-default'
                            };
                            var14 = 23;
                            var9 = var9[var14];
                            var9 = var11.bind(var0)(var9);
                            var12 = var9.intl;
                            var11 = var12.format;
                            var15 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var9 = var15.bind(var0)(var9);
                            var9 = var9.t;
                            if (var13) {
                                _fun77614_ip = 1637;
                                continue _fun77614
                            }
                        case 1614:
                            if (var10) {
                                _fun77614_ip = 1627;
                                continue _fun77614
                            }
                        case 1617:
                            var10 = var9.U0olLg;
                            _fun77614_ip = 1635;
                            continue _fun77614;
                        case 1627:
                            var10 = var9["mOQ8k+"];
                        case 1635:
                            _fun77614_ip = 1645;
                            continue _fun77614;
                        case 1637:
                            var10 = var9.jHfRvZ;
                        case 1645:
                            var9 = {};
                            var13 = _closure2_slot1;
                            var13 = var13.name;
                            var9.roleName = var13;
                            var9 = var11.bind(var12)(var10, var9);
                            var6.children = var9;
                            var7 = var8.bind(var0)(var7, var6);
                            var6 = new Array(3);
                            var6[0] = var7;
                            var9 = _closure1_slot27;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var12 = _closure2_slot4;
                            var10 = var12.connectionsChecksGroups;
                            var7.style = var10;
                            var13 = _closure1_slot27;
                            var11 = _closure1_slot35;
                            var10 = {};
                            var15 = _closure2_slot7;
                            var10.eligibilityStatesGroups = var15;
                            var15 = _closure2_slot35;
                            var10.onPlatformConnect = var15;
                            var15 = _closure2_slot36;
                            var10.onPlatformConnected = var15;
                            var15 = _closure2_slot2;
                            var10.initialAttemptedPlatformType = var15;
                            var10 = var13.bind(var0)(var11, var10);
                            var7.children = var10;
                            var7 = var9.bind(var0)(var8, var7);
                            var6[1] = var7;
                            var9 = _closure1_slot27;
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 49;
                            var7 = var10[var7];
                            var7 = var11.bind(var0)(var7);
                            var8 = var7.TextWithIOSLinkWorkaround;
                            var7 = {
                                'variant': 'text-xs/normal',
                                'style': null,
                                'color': 'text-default'
                            };
                            var12 = var12.footerText;
                            var7.style = var12;
                            var12 = var10[var14];
                            var12 = var11.bind(var0)(var12);
                            var13 = var12.intl;
                            var12 = var13.format;
                            var10 = var10[var14];
                            var10 = var11.bind(var0)(var10);
                            var10 = var10.t;
                            var11 = var10.gsgvxh;
                            var10 = {};
                            var14 = _closure1_slot22;
                            var14 = var14.PRIVACY;
                            var10.privacyPolicyUrl = var14;
                            var14 = _closure2_slot33;
                            var10.onAuthorizedApplicationsClick = var14;
                            var14 = _closure2_slot32;
                            var10.onConnectionsClick = var14;
                            var10 = var12.bind(var13)(var11, var10);
                            var7.children = var10;
                            var7 = var9.bind(var0)(var8, var7);
                            var6[2] = var7;
                            var3.children = var6;
                            var0 = var5.bind(var0)(var4, var3);
                            _fun77614_ip = 1977;
                            continue _fun77614;
                        case 1937:
                            var4 = _closure1_slot27;
                            var3 = _closure1_slot6;
                            var2 = {};
                            var5 = 'large';
                            var2.size = var5;
                            var1 = _closure2_slot4;
                            var1 = var1.loading;
                            var2.style = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 1977:
                            return var0;
                    }
                };
                var9 = var9.bind(var3)();
                var7[1] = var9;
                var8 = function() { // Original name: renderFooter, environment: var8
                    _fun77618: for (var _fun77618_ip = 0;;) switch (_fun77618_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = _closure1_slot31;
                            var0 = var0.CHECKS_REQUIRED;
                            if (!(var0 !== var1)) {
                                _fun77618_ip = 553;
                                continue _fun77618
                            }
                        case 29:
                            var0 = _closure1_slot31;
                            var0 = var0.ACCOUNT_CONNECTED;
                            if (!(var0 !== var1)) {
                                _fun77618_ip = 426;
                                continue _fun77618
                            }
                        case 46:
                            var0 = _closure2_slot7;
                            var8 = null;
                            var1 = var8 == var0;
                            var3 = undefined;
                            var0 = undefined;
                            if (var1) {
                                _fun77618_ip = 95;
                                continue _fun77618
                            }
                        case 63:
                            var2 = _closure2_slot7;
                            var1 = var2.flat;
                            var7 = var1.bind(var2)();
                            var2 = var7.some;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.application_id;
                                var0 = null;
                                var0 = var0 == var1;
                                return var0;
                            };
                            var0 = var2.bind(var7)(var1);
                        case 95:
                            var9 = var8 != var0;
                            if (!var9) {
                                _fun77618_ip = 105;
                                continue _fun77618
                            }
                        case 102:
                            var9 = var0;
                        case 105:
                            var2 = _closure1_slot28;
                            var1 = _closure1_slot29;
                            var0 = {};
                            var11 = _closure1_slot27;
                            var10 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var13 = 28;
                            var7 = var12[var13];
                            var10 = var10.bind(var3)(var7);
                            var7 = {};
                            var17 = _closure1_slot0;
                            var14 = var12[var13];
                            var14 = var17.bind(var3)(var14);
                            var14 = var14.ButtonColors;
                            var14 = var14.BRAND;
                            var7.color = var14;
                            var14 = function() { // Original name: onPress, environment: var5
                                var2 = _closure2_slot31;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7.onPress = var14;
                            var16 = 23;
                            var14 = var12[var16];
                            var14 = var17.bind(var3)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var12 = var12[var16];
                            var12 = var17.bind(var3)(var12);
                            var12 = var12.t;
                            var12 = var12.cpT0Cq;
                            var12 = var14.bind(var15)(var12);
                            var7.text = var12;
                            var10 = var11.bind(var3)(var10, var7);
                            var7 = new Array(2);
                            var7[0] = var10;
                            var8 = null;
                            if (!var9) {
                                _fun77618_ip = 410;
                                continue _fun77618
                            }
                        case 254:
                            var11 = _closure1_slot27;
                            var10 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var9 = var12[var13];
                            var10 = var10.bind(var3)(var9);
                            var9 = {};
                            var14 = _closure2_slot4;
                            var14 = var14.manageConnectionsButton;
                            var9.style = var14;
                            var15 = _closure1_slot0;
                            var14 = var12[var13];
                            var14 = var15.bind(var3)(var14);
                            var14 = var14.ButtonLooks;
                            var14 = var14.LINK;
                            var9.look = var14;
                            var13 = var12[var13];
                            var13 = var15.bind(var3)(var13);
                            var13 = var13.ButtonColors;
                            var13 = var13.LINK;
                            var9.color = var13;
                            var13 = _closure2_slot32;
                            var9.onPress = var13;
                            var13 = var12[var16];
                            var13 = var15.bind(var3)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var12[var16];
                            var12 = var15.bind(var3)(var12);
                            var12 = var12.t;
                            var12 = var12.VXV55P;
                            var12 = var13.bind(var14)(var12);
                            var9.text = var12;
                            var8 = var11.bind(var3)(var10, var9);
                        case 410:
                            var7[1] = var8;
                            var0.children = var7;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 426:
                            var3 = _closure1_slot27;
                            var1 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 28;
                            var0 = var11[var7];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var10 = _closure1_slot0;
                            var7 = var11[var7];
                            var7 = var10.bind(var2)(var7);
                            var7 = var7.ButtonColors;
                            var7 = var7.BRAND;
                            var0.color = var7;
                            var7 = function() { // Original name: onPress, environment: var5
                                var2 = _closure2_slot6;
                                var0 = _closure1_slot31;
                                var1 = var0.CHECKS_REQUIRED;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onPress = var7;
                            var7 = 23;
                            var8 = var11[var7];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.i4jeWR;
                            var7 = var8.bind(var9)(var7);
                            var0.text = var7;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 553:
                            var3 = _closure1_slot27;
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 28;
                            var0 = var9[var7];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = _closure1_slot0;
                            var7 = var9[var7];
                            var7 = var8.bind(var2)(var7);
                            var7 = var7.ButtonColors;
                            var7 = var7.BRAND;
                            var0.color = var7;
                            var5 = function() { // Original name: onPress, environment: var5
                                var1 = function() { // Original name: handleAssignRole, environment: var0
                                    var0 = undefined;
                                    var3 = _closure2_slot34;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0.onPress = var5;
                            var5 = _closure2_slot11;
                            if (var5) {
                                _fun77618_ip = 635;
                                continue _fun77618
                            }
                        case 628:
                            var7 = _closure2_slot9;
                            var5 = !var7;
                        case 635:
                            if (var5) {
                                _fun77618_ip = 642;
                                continue _fun77618
                            }
                        case 638:
                            var5 = _closure2_slot13;
                        case 642:
                            var0.disabled = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 23;
                            var5 = var8[var4];
                            var5 = var7.bind(var2)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4["8SuVoE"];
                            var4 = var5.bind(var6)(var4);
                            var0.text = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var3)();
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot37 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1676, 1620, 1216, 1372, 4476, 1672, 3050, 4480, 660, 33, 1297, 671, 3205, 4352, 1417, 3165, 4039, 4763, 3895, 1234, 4479, 22, 3110, 7422, 4829, 9803, 9804, 5725, 5409, 44, 3107, 9171, 4056, 5335, 4478, 566, 4481, 4635, 795, 4259, 3237, 5880, 5275, 9807, 4887, 5289, 9808, 9095, 2]);