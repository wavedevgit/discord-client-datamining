// modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun79184: for (var _fun79184_ip = 0;;) switch (_fun79184_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.connectionType;
                var9 = var0.connectionMetadataField;
                var2 = var0.operator;
                var8 = var0.value;
                var7 = var0.description;
                var0 = _closure1_slot19;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var7)) {
                    _fun79184_ip = 107;
                    continue _fun79184
                }
            case 50:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.getConnectionsCheckText;
                var1 = {};
                var1.connectionType = var10;
                var1.connectionMetadataField = var9;
                var1.operator = var2;
                var1.value = var8;
                var9 = var3.bind(var5)(var1);
                _fun79184_ip = 358;
                continue _fun79184;
            case 107:
                var1 = _closure1_slot13;
                var1 = var1.LESS_THAN;
                if (!(var1 !== var2)) {
                    _fun79184_ip = 252;
                    continue _fun79184
                }
            case 124:
                var1 = _closure1_slot13;
                var1 = var1.GREATER_THAN;
                var9 = var7;
                if (!(var1 === var2)) {
                    _fun79184_ip = 358;
                    continue _fun79184
                }
            case 144:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 14;
                var3 = var10[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.format;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["2p7dA3"];
                var1 = {};
                var1.description = var7;
                var10 = global;
                var14 = var10.Math;
                var13 = var14.max;
                var10 = var10.Number;
                var11 = var10.bind(var4)(var8);
                var10 = 1;
                var11 = var11 + var10;
                var10 = 0;
                var10 = var13.bind(var14)(var10, var11);
                var1.count = var10;
                var9 = var3.bind(var5)(var2, var1);
                _fun79184_ip = 358;
                continue _fun79184;
            case 252:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 14;
                var3 = var10[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.format;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["2p7dA3"];
                var1 = {};
                var1.description = var7;
                var7 = global;
                var11 = var7.Math;
                var10 = var11.max;
                var7 = var7.Number;
                var8 = var7.bind(var4)(var8);
                var7 = 1;
                var8 = var8 - var7;
                var7 = 0;
                var7 = var10.bind(var11)(var7, var8);
                var1.count = var7;
                var9 = var3.bind(var5)(var2, var1);
            case 358:
                var1 = var0 == var9;
                var0 = null;
                if (var1) {
                    _fun79184_ip = 513;
                    continue _fun79184
                }
            case 370:
                var3 = _closure1_slot17;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var12.popoutCheck;
                var1.style = var5;
                var11 = _closure1_slot16;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 16;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var8 = var5.CheckmarkLargeIcon;
                var5 = {};
                var13 = 'sm';
                var5.size = var13;
                var12 = var12.popoutCheckIcon;
                var5.style = var12;
                var8 = var11.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot16;
                var6 = 17;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-xs/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 513:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.eligibilityStates;
        var0 = var0.guildId;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot19;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot1 = var1;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 18;
        var1 = var8[var1];
        var1 = var7.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var _closure2_slot2 = var1;
        var1 = 19;
        var1 = var8[var1];
        var5 = var7.bind(var3)(var1);
        var2 = var5.groupBy;
        var1 = function(arg0) { // Environment: var4
            _fun79186: for (var _fun79186_ip = 0;;) switch (_fun79186_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.connection_type;
                    var2 = var0.application_id;
                    var1 = null;
                    var4 = var1 != var2;
                    var2 = '';
                    var1 = var2;
                    if (!var4) {
                        _fun79186_ip = 59;
                        continue _fun79186
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
        var5 = var2.bind(var5)(var6, var1);
        var _closure2_slot3 = var5;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.keys;
        var6 = var1.bind(var2)(var5);
        var2 = var6.length;
        var1 = 1;
        var1 = var2 - var1;
        var _closure2_slot4 = var1;
        var2 = _closure1_slot0;
        var1 = 20;
        var1 = var8[var1];
        var5 = var2.bind(var3)(var1);
        var2 = var5.useToken;
        var1 = 13;
        var1 = var8[var1];
        var1 = var7.bind(var3)(var1);
        var1 = var1.unsafe_rawColors;
        var1 = var1.GREEN_330;
        var1 = var2.bind(var5)(var1);
        var _closure2_slot5 = var1;
        var2 = _closure1_slot16;
        var1 = _closure1_slot18;
        var0 = {};
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun79187: for (var _fun79187_ip = 0;;) switch (_fun79187_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot3;
                    var2 = var0[var4];
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var1 = var0.operator;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var8 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var1 = var0.application;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.get;
                    var18 = var1.bind(var2)(var4);
                    var16 = null;
                    var1 = var16 == var0;
                    var17 = undefined;
                    if (var1) {
                        _fun79187_ip = 101;
                        continue _fun79187
                    }
                case 96:
                    var17 = var0.application;
                case 101:
                    var1 = var16 == var17;
                    var0 = undefined;
                    if (var1) {
                        _fun79187_ip = 116;
                        continue _fun79187
                    }
                case 110:
                    var0 = var17.bot;
                case 116:
                    var0 = var16 != var0;
                    var21 = null;
                    if (!var0) {
                        _fun79187_ip = 155;
                        continue _fun79187
                    }
                case 125:
                    var2 = _closure1_slot7;
                    var29 = var17.bot;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var30 = var1;
                    var0 = new var30[var2](var29, var28);
                    var21 = var0 instanceof Object ? var0 : var1;
                case 155:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.officialApplicationIds;
                    var1 = var2.includes;
                    var0 = var16 == var17;
                    var5 = undefined;
                    if (var0) {
                        _fun79187_ip = 200;
                        continue _fun79187
                    }
                case 195:
                    var5 = var17.id;
                case 200:
                    var7 = var16 != var5;
                    var0 = '';
                    if (!var7) {
                        _fun79187_ip = 214;
                        continue _fun79187
                    }
                case 211:
                    var0 = var5;
                case 214:
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun79187_ip = 289;
                        continue _fun79187
                    }
                case 222:
                    var0 = var16 != var21;
                    var11 = undefined;
                    if (!var0) {
                        _fun79187_ip = 359;
                        continue _fun79187
                    }
                case 234:
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 23;
                    var0 = var5[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.botTag;
                    var0.style = var5;
                    var5 = false;
                    var0.verified = var5;
                    var11 = var2.bind(var3)(var1, var0);
                    _fun79187_ip = 359;
                    continue _fun79187;
                case 289:
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 22;
                    var0 = var5[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.botTag;
                    var0.style = var5;
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var5 = _closure2_slot5;
                    var0.roleColor = var5;
                    var5 = 16;
                    var0.size = var5;
                    var11 = var2.bind(var3)(var1, var0);
                case 359:
                    var2 = _closure1_slot17;
                    var1 = _closure1_slot6;
                    var0 = {};
                    var5 = _closure2_slot1;
                    var7 = var5.popoutChecksGroup;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var9 = _closure2_slot4;
                    var7 = arg1;
                    var9 = var7 < var9;
                    var7 = null;
                    if (!var9) {
                        _fun79187_ip = 413;
                        continue _fun79187
                    }
                case 403:
                    var9 = _closure2_slot1;
                    var7 = var9.popoutChecksGroupBottomMargin;
                case 413:
                    var5[1] = var7;
                    var0.style = var5;
                    var9 = _closure1_slot17;
                    var7 = _closure1_slot6;
                    var5 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.popoutCheckGroupName;
                    var5.style = var10;
                    var10 = var16 != var18;
                    var13 = null;
                    if (!var10) {
                        _fun79187_ip = 623;
                        continue _fun79187
                    }
                case 457:
                    var15 = _closure1_slot16;
                    var14 = _closure1_slot1;
                    var26 = _closure1_slot2;
                    var22 = 24;
                    var10 = var26[var22];
                    var14 = var14.bind(var3)(var10);
                    var10 = {};
                    var19 = _closure2_slot1;
                    var19 = var19.popoutCheckGroupPlatformIcon;
                    var10.style = var19;
                    var25 = _closure1_slot0;
                    var19 = 25;
                    var19 = var26[var19];
                    var24 = var25.bind(var3)(var19);
                    var20 = var24.makeSource;
                    var19 = 26;
                    var19 = var26[var19];
                    var26 = var25.bind(var3)(var19);
                    var25 = var26.isThemeDark;
                    var19 = _closure2_slot2;
                    var19 = var25.bind(var26)(var19);
                    var25 = var18.icon;
                    if (var19) {
                        _fun79187_ip = 562;
                        continue _fun79187
                    }
                case 554:
                    var19 = var25.lightPNG;
                    _fun79187_ip = 568;
                    continue _fun79187;
                case 562:
                    var19 = var25.darkPNG;
                case 568:
                    var19 = var20.bind(var24)(var19);
                    var10.source = var19;
                    var19 = true;
                    var10.disableColor = var19;
                    var20 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var19 = var19[var22];
                    var19 = var20.bind(var3)(var19);
                    var19 = var19.Sizes;
                    var19 = var19.MEDIUM;
                    var10.size = var19;
                    var13 = var15.bind(var3)(var14, var10);
                case 623:
                    var10 = new Array(4);
                    var10[0] = var13;
                    var14 = var16 != var21;
                    var13 = null;
                    if (!var14) {
                        _fun79187_ip = 723;
                        continue _fun79187
                    }
                case 640:
                    var19 = _closure1_slot16;
                    var15 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var20 = 27;
                    var14 = var22[var20];
                    var15 = var15.bind(var3)(var14);
                    var14 = {};
                    var23 = _closure2_slot1;
                    var23 = var23.popoutCheckGroupPlatformIcon;
                    var14.style = var23;
                    var14.user = var21;
                    var21 = _closure1_slot0;
                    var20 = var22[var20];
                    var20 = var21.bind(var3)(var20);
                    var20 = var20.AvatarSizes;
                    var20 = var20.XSMALL;
                    var14.size = var20;
                    var14.guildId = var3;
                    var13 = var19.bind(var3)(var15, var14);
                case 723:
                    var10[1] = var13;
                    var14 = _closure1_slot16;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 17;
                    var12 = var15[var12];
                    var12 = var13.bind(var3)(var12);
                    var13 = var12.Text;
                    var12 = {
                        'variant': 'text-sm/medium',
                        'color': 'interactive-text-active'
                    };
                    var19 = var16 == var18;
                    var15 = undefined;
                    if (var19) {
                        _fun79187_ip = 784;
                        continue _fun79187
                    }
                case 779:
                    var15 = var18.name;
                case 784:
                    if (!(var16 == var15)) {
                        _fun79187_ip = 805;
                        continue _fun79187
                    }
                case 788:
                    var18 = var16 == var17;
                    var16 = undefined;
                    if (var18) {
                        _fun79187_ip = 802;
                        continue _fun79187
                    }
                case 797:
                    var16 = var17.name;
                case 802:
                    var15 = var16;
                case 805:
                    var12.children = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var10[2] = var12;
                    var10[3] = var11;
                    var5.children = var10;
                    var7 = var9.bind(var3)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var10 = var0.connection_type;
                        var9 = var0.connection_metadata_field;
                        var8 = var0.operator;
                        var7 = var0.value;
                        var0 = var0.description;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 28;
                        var2 = var6[var3];
                        var4 = undefined;
                        var13 = var5.bind(var4)(var2);
                        var2 = null;
                        var12 = var2 != var9;
                        var11 = 'connectionMetadataField is null';
                        var11 = var13.bind(var4)(var12, var11);
                        var11 = var6[var3];
                        var13 = var5.bind(var4)(var11);
                        var12 = var2 != var8;
                        var11 = 'operator is null';
                        var11 = var13.bind(var4)(var12, var11);
                        var3 = var6[var3];
                        var5 = var5.bind(var4)(var3);
                        var3 = var2 != var7;
                        var2 = 'value is null';
                        var2 = var5.bind(var4)(var3, var2);
                        var3 = _closure1_slot16;
                        var2 = _closure1_slot20;
                        var1 = {};
                        var1.connectionType = var10;
                        var1.connectionMetadataField = var9;
                        var1.operator = var8;
                        var1.value = var7;
                        var1.description = var0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var6 = var0.concat;
                        var21 = '';
                        var0 = ':';
                        var20 = var10;
                        var19 = var0;
                        var18 = var9;
                        var17 = var0;
                        var16 = var8;
                        var15 = var0;
                        var14 = var7;
                        var0 = var21[var6](var20, var19, var18, var17, var16, var15, var14, var13);
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                    var5[1] = var6;
                    var0.children = var5;
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var13.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var11 = 8;
    var4 = var6[var11];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.OperatorTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.jsxs;
    var _closure1_slot17 = var7;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'padding': 16
    };
    var4.container = var9;
    var9 = {
        'width': '100%',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingBottom': 16,
        'borderBottomWidth': 1
    };
    var12 = 13;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderBottomColor = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var9.marginBottom = var14;
    var4.header = var9;
    var9 = {
        'marginRight': 8,
        'height': 24,
        'width': 24
    };
    var4.verifiedContainer = var9;
    var9 = {
        'flexShrink': 1,
        'flexDirection': 'column'
    };
    var4.headerTextContainer = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'top': 0
    };
    var4.verifiedCheck = var9;
    var9 = {};
    var14 = 40;
    var9.marginVertical = var14;
    var4.loadingSpinner = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 8,
        'marginLeft': 32,
        'paddingRight': 20
    };
    var4.popoutCheck = var9;
    var9 = {};
    var9.marginRight = var11;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_FEEDBACK_POSITIVE;
    var9.tintColor = var14;
    var4.popoutCheckIcon = var9;
    var9 = {
        'width': '100%',
        'marginBottom': 24
    };
    var4.popoutChecksGroup = var9;
    var9 = {
        'paddingBottom': 12,
        'borderBottomWidth': 1,
        'borderBottomColor': null,
        'marginBottom': 12
    };
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderBottomColor = var12;
    var4.popoutChecksGroupBottomMargin = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.popoutCheckGroupName = var9;
    var9 = {};
    var9.marginRight = var11;
    var4.popoutCheckGroupPlatformIcon = var9;
    var9 = {};
    var9.marginBottom = var11;
    var4.button = var9;
    var9 = {};
    var9.marginLeft = var10;
    var4.botTag = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun79191: for (var _fun79191_ip = 0;;) switch (_fun79191_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.userId;
                var _closure2_slot0 = var12;
                var10 = var0.roleId;
                var _closure2_slot1 = var10;
                var6 = var0.channelId;
                var _closure2_slot2 = var6;
                var21 = var0.guildId;
                var _closure2_slot3 = var21;
                var0 = _closure1_slot19;
                var3 = undefined;
                var25 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 29;
                var2 = var1[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 30;
                var2 = var1[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.CONNECTIONS_ROLE_POPOUT;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var _closure2_slot4 = var4;
                var2 = _closure1_slot0;
                var7 = 31;
                var5 = var1[var7];
                var11 = var2.bind(var3)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var24
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var28 = var9.bind(var11)(var8, var5);
                var _closure2_slot5 = var28;
                var5 = var1[var7];
                var11 = var2.bind(var3)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var24
                    var1 = _closure1_slot8;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var9.bind(var11)(var8, var5);
                var _closure2_slot6 = var5;
                var5 = var1[var7];
                var11 = var2.bind(var3)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var24
                    var3 = _closure1_slot9;
                    var2 = var3.getMember;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot6;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var9.bind(var11)(var8, var5);
                var1 = var1[var7];
                var9 = var2.bind(var3)(var1);
                var5 = var9.useStateFromStores;
                var1 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var24
                    var2 = _closure1_slot12;
                    var1 = var2.getGuildRoleConnectionEligibility;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var26 = var5.bind(var9)(var2, var1);
                var _closure2_slot7 = var26;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var16 = null;
                var1 = var16 == var26;
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var9 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var5 = var9[var1];
                var _closure2_slot8 = var5;
                var2 = 1;
                var9 = var9[var2];
                var _closure2_slot9 = var9;
                var9 = var16 == var8;
                var19 = undefined;
                if (var9) {
                    _fun79191_ip = 362;
                    continue _fun79191
                }
            case 346:
                var9 = var8.roles;
                var8 = var9.includes;
                var19 = var8.bind(var9)(var10);
            case 362:
                var9 = _closure1_slot4;
                var11 = var9.useEffect;
                var8 = new Array(4);
                var8[0] = var12;
                var8[1] = var10;
                var8[2] = var6;
                var8[3] = var21;
                var6 = function() { // Environment: var24
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 32;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot14;
                    var2 = var1.PASSPORT_ROLE_POPOUT_VIEWED;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.other_user_id = var7;
                    var7 = _closure2_slot1;
                    var1.role_id = var7;
                    var7 = _closure1_slot0;
                    var6 = 33;
                    var9 = var8[var6];
                    var11 = var7.bind(var0)(var9);
                    var10 = var11.collectChannelAnalyticsMetadataFromId;
                    var9 = _closure2_slot2;
                    var12 = var10.bind(var11)(var9);
                    var13 = var1;
                    var9 = copyDataProperties(var13, var12);
                    var6 = var8[var6];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot3;
                    var12 = var6.bind(var7)(var5);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var6 = var11.bind(var9)(var6, var8);
                var8 = var9.useEffect;
                var6 = new Array(4);
                var6[0] = var21;
                var6[1] = var10;
                var6[2] = var5;
                var6[3] = var26;
                var5 = function() { // Environment: var24
                    _fun79197: for (var _fun79197_ip = 0;;) switch (_fun79197_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            if (!var1) {
                                _fun79197_ip = 20;
                                continue _fun79197
                            }
                        case 10:
                            var3 = _closure2_slot7;
                            var2 = null;
                            var1 = var2 == var3;
                        case 20:
                            if (!var1) {
                                _fun79197_ip = 87;
                                continue _fun79197
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 34;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchGuildRoleConnectionsEligibility;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot1;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot9;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5, var6);
                var5 = var16 == var26;
                var17 = undefined;
                if (var5) {
                    _fun79191_ip = 479;
                    continue _fun79191
                }
            case 451:
                var5 = var26.flat;
                var8 = var5.bind(var26)();
                var6 = var8.some;
                var5 = function(arg0) { // Environment: var24
                    var0 = arg0;
                    var1 = var0.application_id;
                    var0 = undefined;
                    var0 = var0 === var1;
                    return var0;
                };
                var17 = var6.bind(var8)(var5);
            case 479:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var8 = var6.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var24
                    _fun79200: for (var _fun79200_ip = 0;;) switch (_fun79200_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun79200_ip = 50;
                                continue _fun79200
                            }
                        case 18:
                            var4 = _closure1_slot10;
                            var3 = var4.getRole;
                            var2 = _closure2_slot5;
                            var2 = var2.id;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 50:
                            return var0;
                    }
                };
                var31 = var7.bind(var8)(var6, var5);
                if (!(var16 != var26)) {
                    _fun79191_ip = 691;
                    continue _fun79191
                }
            case 533:
                var5 = var26.length;
                if (!(var2 === var5)) {
                    _fun79191_ip = 558;
                    continue _fun79191
                }
            case 542:
                var1 = var26[var1];
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun79191_ip = 691;
                    continue _fun79191
                }
            case 558:
                var1 = var26.length;
                if (!(var2 !== var1)) {
                    _fun79191_ip = 629;
                    continue _fun79191
                }
            case 567:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var5 = var7[var1];
                var5 = var2.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.format;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.D7uftB;
                var1 = {};
                var29 = var5.bind(var6)(var2, var1);
                _fun79191_ip = 689;
                continue _fun79191;
            case 629:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var5 = var7[var1];
                var5 = var2.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.format;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["0eBj3x"];
                var1 = {};
                var29 = var5.bind(var6)(var2, var1);
            case 689:
                _fun79191_ip = 748;
                continue _fun79191;
            case 691:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var2 = var7[var1];
                var2 = var6.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.jDym4E;
                var29 = var2.bind(var5)(var1);
            case 748:
                var2 = _closure1_slot16;
                var5 = _closure1_slot0;
                var27 = _closure1_slot2;
                var0 = var27[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot16;
                var4 = 35;
                var4 = var27[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var9 = _closure1_slot17;
                var8 = _closure1_slot6;
                var7 = {};
                var10 = var25.container;
                var7.style = var10;
                var12 = _closure1_slot17;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var25.header;
                var10.style = var13;
                var15 = _closure1_slot16;
                var14 = _closure1_slot6;
                var13 = {};
                var18 = var25.verifiedContainer;
                var13.style = var18;
                var22 = _closure1_slot16;
                var20 = _closure1_slot1;
                var18 = 36;
                var18 = var27[var18];
                var20 = var20.bind(var3)(var18);
                var18 = {};
                var27 = var25.verifiedCheck;
                var18.style = var27;
                var30 = var16 == var28;
                var27 = undefined;
                if (var30) {
                    _fun79191_ip = 909;
                    continue _fun79191
                }
            case 904:
                var27 = var28.id;
            case 909:
                if (!(var16 == var27)) {
                    _fun79191_ip = 917;
                    continue _fun79191
                }
            case 913:
                var27 = _closure1_slot15;
            case 917:
                var18.guildId = var27;
                var28 = var16 != var31;
                var27 = undefined;
                if (!var28) {
                    _fun79191_ip = 933;
                    continue _fun79191
                }
            case 930:
                var27 = var31;
            case 933:
                var18.role = var27;
                var27 = 24;
                var18.size = var27;
                var18 = var22.bind(var3)(var20, var18);
                var13.children = var18;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var18 = _closure1_slot17;
                var15 = _closure1_slot6;
                var14 = {};
                var20 = var25.headerTextContainer;
                var14.style = var20;
                var27 = _closure1_slot16;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var30 = 17;
                var20 = var20[var30];
                var20 = var22.bind(var3)(var20);
                var22 = var20.Text;
                var20 = {
                    'variant': 'text-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var32 = var16 == var31;
                var28 = undefined;
                if (var32) {
                    _fun79191_ip = 1046;
                    continue _fun79191
                }
            case 1041:
                var28 = var31.name;
            case 1046:
                var20.children = var28;
                var22 = var27.bind(var3)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var28 = _closure1_slot16;
                var27 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var30];
                var22 = var27.bind(var3)(var22);
                var27 = var22.Text;
                var22 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var22.children = var29;
                var22 = var28.bind(var3)(var27, var22);
                var20[1] = var22;
                var14.children = var20;
                var14 = var18.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                if (!(var16 != var26)) {
                    _fun79191_ip = 1168;
                    continue _fun79191
                }
            case 1154:
                var11 = var26.flat;
                var11 = var11.bind(var26)();
                if (!(var16 == var11)) {
                    _fun79191_ip = 1207;
                    continue _fun79191
                }
            case 1168:
                var13 = _closure1_slot16;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var25.loadingSpinner;
                var11.style = var14;
                var14 = 'large';
                var11.size = var14;
                var11 = var13.bind(var3)(var12, var11);
                _fun79191_ip = 1564;
                continue _fun79191;
            case 1207:
                var14 = _closure1_slot17;
                var13 = _closure1_slot18;
                var12 = {};
                var20 = _closure1_slot16;
                var18 = _closure1_slot21;
                var15 = {};
                var22 = var26.flat;
                var22 = var22.bind(var26)();
                var15.eligibilityStates = var22;
                var15.guildId = var21;
                var18 = var20.bind(var3)(var18, var15);
                var15 = new Array(3);
                var15[0] = var18;
                var18 = null;
                if (var19) {
                    _fun79191_ip = 1403;
                    continue _fun79191
                }
            case 1268:
                var21 = _closure1_slot16;
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var22 = 37;
                var19 = var27[var22];
                var20 = var26.bind(var3)(var19);
                var19 = {};
                var28 = var25.button;
                var19.style = var28;
                var28 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 38;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.hideActionSheet;
                    var2 = 'ConnectionsRoleMessageBadgeActionSheet';
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot0;
                    var1 = 39;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildRoleConnectionsModal;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var19.onPress = var28;
                var31 = _closure1_slot0;
                var28 = 14;
                var29 = var27[var28];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var27[var28];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.T1t1WV;
                var28 = var29.bind(var30)(var28);
                var19.text = var28;
                var22 = var27[var22];
                var22 = var26.bind(var3)(var22);
                var22 = var22.Colors;
                var22 = var22.BRAND;
                var19.color = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 1403:
                var15[1] = var18;
                var16 = null;
                if (!var17) {
                    _fun79191_ip = 1550;
                    continue _fun79191
                }
            case 1415:
                var19 = _closure1_slot16;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 37;
                var17 = var22[var20];
                var18 = var21.bind(var3)(var17);
                var17 = {};
                var25 = var25.button;
                var17.style = var25;
                var24 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 40;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.userId = var4;
                    var4 = _closure2_slot2;
                    var1.channelId = var4;
                    var4 = _closure2_slot1;
                    var1.roleId = var4;
                    var3 = _closure2_slot4;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var17.onPress = var24;
                var26 = _closure1_slot0;
                var23 = 14;
                var24 = var22[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var22[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.hgKDnG;
                var23 = var24.bind(var25)(var23);
                var17.text = var23;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.Colors;
                var20 = var20.GREY;
                var17.color = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1550:
                var15[2] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1564:
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.PopoutChecks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1620, 1216, 1672, 1665, 1410, 10069, 4519, 660, 33, 1297, 671, 1234, 4518, 3253, 3932, 3237, 22, 3142, 4391, 9890, 5762, 4077, 1417, 3197, 5447, 44, 5721, 5574, 566, 795, 4298, 4674, 4926, 9133, 4868, 3269, 10070, 7345, 2]);