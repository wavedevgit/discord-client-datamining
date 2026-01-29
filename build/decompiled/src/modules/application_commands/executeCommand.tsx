// modules/application_commands/executeCommand.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun64046: for (var _fun64046_ip = 0;;) switch (_fun64046_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun64046_ip = 45;
                    continue _fun64046
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun64046_ip = 54;
                    continue _fun64046
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun64046_ip = 342;
                    continue _fun64046
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun64046_ip = 322;
                    continue _fun64046
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun64046_ip = 282;
                    continue _fun64046
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun64046_ip = 269;
                    continue _fun64046
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
                    _fun64046_ip = 162;
                    continue _fun64046
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun64046_ip = 178;
                    continue _fun64046
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun64046_ip = 248;
                    continue _fun64046
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun64046_ip = 248;
                    continue _fun64046
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun64046_ip = 233;
                    continue _fun64046
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun64046_ip = 246;
                    continue _fun64046
                }
            case 233:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun64046_ip = 264;
                continue _fun64046;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun64046_ip = 282;
                continue _fun64046;
            case 269:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun64046_ip = 322;
                    continue _fun64046
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
                    _fun64046_ip = 329;
                    continue _fun64046
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun64047: for (var _fun64047_ip = 0;;) switch (_fun64047_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun64047_ip = 56;
                                continue _fun64047
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
                            _fun64047_ip = 67;
                            continue _fun64047;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun64048: for (var _fun64048_ip = 0;;) switch (_fun64048_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun64048_ip = 23;
                    continue _fun64048
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun64048_ip = 33;
                    continue _fun64048
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
                    _fun64048_ip = 70;
                    continue _fun64048
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun64048_ip = 55;
                    continue _fun64048
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() { // Original name: _executeCommand, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64051: for (var _fun64051_ip = 0;;) switch (_fun64051_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64051_ip = 6275;
                            continue _fun64051
                        }
                    case 15:
                        var6 = var1.command;
                        var67 = var1.optionValues;
                        var _closure4_slot0 = var67;
                        var5 = var1.context;
                        var7 = var1.commandTargetId;
                        var16 = var1.maxSizeCallback;
                        var13 = var1.commandOrigin;
                        var12 = undefined;
                        if (!(var13 === var12)) {
                            _fun64051_ip = 95;
                            continue _fun64051
                        }
                    case 60:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 9;
                        var3 = var8[var3];
                        var3 = var4.bind(var12)(var3);
                        var3 = var3.CommandOrigin;
                        var13 = var3.CHAT;
                    case 95:
                        var14 = var1.sectionName;
                        var3 = var1.interactionLifecycleOptionsFactory;
                        if (!(var3 === var12)) {
                            _fun64051_ip = 118;
                            continue _fun64051
                        }
                    case 111:
                        var3 = _closure1_slot22;
                    case 118:
                        var10 = var1.source;
                        SaveGenerator(address = 127);
                    case 125:
                        return var12;
                    case 127:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64051_ip = 6272;
                            continue _fun64051
                        }
                    case 136:
                        var2 = var5.channel;
                        var9 = null;
                        if (!(var9 != var2)) {
                            _fun64051_ip = 6160;
                            continue _fun64051
                        }
                    case 150:
                        var8 = _closure1_slot10;
                        var4 = var8.getSource;
                        var2 = var5.channel;
                        var2 = var2.id;
                        var2 = var4.bind(var8)(var2);
                        if (!(var9 != var2)) {
                            _fun64051_ip = 185;
                            continue _fun64051
                        }
                    case 182:
                        var10 = var2;
                    case 185:
                        var8 = _closure1_slot10;
                        var4 = var8.getCommandOrigin;
                        var2 = var5.channel;
                        var2 = var2.id;
                        var2 = var4.bind(var8)(var2);
                        if (!(var9 != var2)) {
                            _fun64051_ip = 219;
                            continue _fun64051
                        }
                    case 216:
                        var13 = var2;
                    case 219:
                        var2 = var5.autocomplete;
                        if (!(var9 == var2)) {
                            _fun64051_ip = 283;
                            continue _fun64051
                        }
                    case 229:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 10;
                        var2 = var8[var2];
                        var8 = var4.bind(var12)(var2);
                        var4 = var8.dispatch;
                        var2 = {};
                        var17 = 'APPLICATION_COMMAND_USED';
                        var2.type = var17;
                        var2.context = var5;
                        var2.command = var6;
                        var2.commandOrigin = var13;
                        var2 = var4.bind(var8)(var2);
                    case 283:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 11;
                        var2 = var8[var2];
                        var8 = var4.bind(var12)(var2);
                        var4 = var8.unarchiveThreadIfNecessary;
                        var2 = var5.channel;
                        var2 = var2.id;
                        var2 = var4.bind(var8)(var2);
                        SaveGenerator(address = 328);
                    case 326:
                        return var2;
                    case 328:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun64051_ip = 6269;
                            continue _fun64051
                        }
                    case 337:
                        var22 = new Array(0);
                        var17 = new Array(0);
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var66 = 12;
                        var4 = var4[var66];
                        var8 = var8.bind(var12)(var4);
                        var4 = var8.getCommandAttachmentDraftType;
                        var19 = var4.bind(var8)(var13);
                        var4 = var6.options;
                        if (!(var9 != var4)) {
                            _fun64051_ip = 5610;
                            continue _fun64051
                        }
                    case 388:
                        var8 = _closure1_slot18;
                        var4 = var6.options;
                        var65 = var8.bind(var12)(var4);
                        var8 = var65.bind(var12)();
                        var4 = var8.done;
                        var64 = global;
                        var63 = 'Unexpected value for option "';
                        var62 = '"';
                        var61 = 16;
                        var60 = '';
                        var59 = 'Failed to resolve ';
                        var58 = 'channelMention';
                        var57 = 17;
                        var56 = 'text';
                        var55 = 'roleMention';
                        var54 = false;
                        var53 = '@everyone';
                        var52 = 'textMention';
                        var51 = 'userMention';
                        var50 = 15;
                        var49 = 14;
                        var48 = 13;
                        var47 = 0;
                        var46 = 'Option "';
                        var45 = '" expects a single option type';
                        var44 = 1;
                        var43 = '" expects a value';
                        var42 = var8;
                        var41 = undefined;
                        var40 = undefined;
                        var39 = undefined;
                        var38 = undefined;
                        var37 = undefined;
                        var36 = undefined;
                        var35 = undefined;
                        var34 = undefined;
                        var33 = undefined;
                        var32 = undefined;
                        var31 = undefined;
                        var30 = undefined;
                        var29 = undefined;
                        var28 = undefined;
                        var27 = undefined;
                        var26 = undefined;
                        var25 = undefined;
                        var24 = undefined;
                        var23 = undefined;
                        var21 = undefined;
                        var20 = undefined;
                        var18 = undefined;
                        var8 = undefined;
                        if (var4) {
                            _fun64051_ip = 5610;
                            continue _fun64051
                        }
                    case 558:
                        var111 = var42.value;
                        var91 = var111.type;
                        var68 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var68.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.SUB_COMMAND;
                        var90 = var41;
                        var89 = var40;
                        var88 = var39;
                        var87 = var38;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!(var91 !== var4)) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 673:
                        var91 = var111.type;
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.SUB_COMMAND_GROUP;
                        var90 = var41;
                        var89 = var40;
                        var88 = var39;
                        var87 = var38;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!(var91 !== var4)) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 783:
                        var4 = var111.name;
                        var4 = var4 in var67;
                        var90 = var41;
                        var89 = var40;
                        var88 = var39;
                        var87 = var38;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!var4) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 867:
                        var108 = var5.autocomplete;
                        var4 = var9 == var108;
                        var91 = undefined;
                        if (var4) {
                            _fun64051_ip = 887;
                            continue _fun64051
                        }
                    case 882:
                        var91 = var108.name;
                    case 887:
                        var4 = var111.name;
                        var106 = var91 === var4;
                        if (var106) {
                            _fun64051_ip = 901;
                            continue _fun64051
                        }
                    case 899:
                        var106 = undefined;
                    case 901:
                        var91 = var111.type;
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.STRING;
                        if (!(var91 === var4)) {
                            _fun64051_ip = 1412;
                            continue _fun64051
                        }
                    case 942:
                        var91 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var4 = var4[var49];
                        var92 = var91.bind(var12)(var4);
                        var91 = var92.getOptionalString;
                        var4 = var111.name;
                        var91 = var91.bind(var92)(var67, var4);
                        var4 = var9 == var91;
                        var92 = undefined;
                        if (var4) {
                            _fun64051_ip = 995;
                            continue _fun64051
                        }
                    case 985:
                        var4 = var91.trim;
                        var92 = var4.bind(var91)();
                    case 995:
                        var93 = var9 != var92;
                        var4 = var60;
                        if (!var93) {
                            _fun64051_ip = 1008;
                            continue _fun64051
                        }
                    case 1005:
                        var4 = var92;
                    case 1008:
                        var93 = var111.choices;
                        if (!(var9 == var93)) {
                            _fun64051_ip = 1106;
                            continue _fun64051
                        }
                    case 1018:
                        var94 = var111.autocomplete;
                        var93 = undefined;
                        if (!var94) {
                            _fun64051_ip = 1141;
                            continue _fun64051
                        }
                    case 1029:
                        var94 = var5.autocomplete;
                        if (!(var9 != var94)) {
                            _fun64051_ip = 1042;
                            continue _fun64051
                        }
                    case 1039:
                        if (var106) {
                            _fun64051_ip = 1089;
                            continue _fun64051
                        }
                    case 1042:
                        var95 = _closure1_slot0;
                        var94 = _closure1_slot3;
                        var94 = var94[var50];
                        var97 = var95.bind(var12)(var94);
                        var96 = var97.findAutocompleteChoiceStringValue;
                        var94 = var5.channel;
                        var95 = var94.id;
                        var94 = var111.name;
                        var94 = var96.bind(var97)(var95, var94, var4);
                        _fun64051_ip = 1101;
                        continue _fun64051;
                    case 1089:
                        var95 = var5.autocomplete;
                        var94 = var95.query;
                    case 1101:
                        var93 = var94;
                        _fun64051_ip = 1141;
                        continue _fun64051;
                    case 1106:
                        var95 = _closure1_slot0;
                        var94 = _closure1_slot3;
                        var94 = var94[var50];
                        var96 = var95.bind(var12)(var94);
                        var95 = var96.findChoiceStringValue;
                        var94 = var111.choices;
                        var93 = var95.bind(var96)(var94, var4);
                    case 1141:
                        if (!(var9 == var93)) {
                            _fun64051_ip = 1148;
                            continue _fun64051
                        }
                    case 1145:
                        var93 = var4;
                    case 1148:
                        if (!(var60 === var93)) {
                            _fun64051_ip = 1237;
                            continue _fun64051
                        }
                    case 1152:
                        var94 = var5.autocomplete;
                        if (!(var9 != var94)) {
                            _fun64051_ip = 1237;
                            continue _fun64051
                        }
                    case 1162:
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = var93;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var92;
                        var69 = var91;
                        var68 = var4;
                        if (!var106) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 1237:
                        var95 = _closure1_slot1;
                        var94 = _closure1_slot3;
                        var94 = var94[var61];
                        var96 = var95.bind(var12)(var94);
                        var94 = var5.autocomplete;
                        var95 = var9 != var94;
                        if (var95) {
                            _fun64051_ip = 1271;
                            continue _fun64051
                        }
                    case 1267:
                        var95 = var9 != var93;
                    case 1271:
                        var97 = var111.name;
                        var94 = var64.HermesInternal;
                        var94 = var94.concat;
                        var94 = var94.bind(var46)(var97, var43);
                        var94 = var96.bind(var12)(var95, var94);
                        var95 = var22.push;
                        var94 = {};
                        var96 = var111.type;
                        var94.type = var96;
                        var96 = var111.name;
                        var94.name = var96;
                        var94.value = var93;
                        var94.focused = var106;
                        var94 = var95.bind(var22)(var94);
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = var93;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var92;
                        var69 = var91;
                        var68 = var4;
                        _fun64051_ip = 5523;
                        continue _fun64051;
                    case 1412:
                        var91 = var111.type;
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.ATTACHMENT;
                        if (!(var91 === var4)) {
                            _fun64051_ip = 1774;
                            continue _fun64051
                        }
                    case 1453:
                        var4 = var5.autocomplete;
                        var4 = var9 != var4;
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = undefined;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (var4) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 1537:
                        var93 = _closure1_slot8;
                        var92 = var93.getUpload;
                        var4 = var5.channel;
                        var91 = var4.id;
                        var4 = var111.name;
                        var4 = var92.bind(var93)(var91, var4, var19);
                        var91 = var9 == var4;
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = undefined;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var4;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (var91) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 1647:
                        var93 = var17.length;
                        var91 = var17.push;
                        var91 = var91.bind(var17)(var4);
                        var92 = var22.push;
                        var91 = {};
                        var94 = var111.type;
                        var91.type = var94;
                        var94 = var111.name;
                        var91.name = var94;
                        var91.value = var93;
                        var91.focused = var106;
                        var91 = var92.bind(var22)(var91);
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = undefined;
                        var86 = var37;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var4;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        _fun64051_ip = 5523;
                        continue _fun64051;
                    case 1774:
                        var92 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var91 = var4[var49];
                        var93 = var92.bind(var12)(var91);
                        var92 = var93.filterEmpty;
                        var91 = var111.name;
                        var91 = var67[var91];
                        var104 = var92.bind(var93)(var91);
                        var91 = _closure1_slot1;
                        var4 = var4[var61];
                        var92 = var91.bind(var12)(var4);
                        var4 = var5.autocomplete;
                        var91 = var9 != var4;
                        if (var91) {
                            _fun64051_ip = 1846;
                            continue _fun64051
                        }
                    case 1837:
                        var4 = var104.length;
                        var91 = var44 === var4;
                    case 1846:
                        var93 = var111.name;
                        var4 = var64.HermesInternal;
                        var4 = var4.concat;
                        var4 = var4.bind(var46)(var93, var45);
                        var4 = var92.bind(var12)(var91, var4);
                        var4 = var104[var47];
                        if (!(var9 == var4)) {
                            _fun64051_ip = 1956;
                            continue _fun64051
                        }
                    case 1882:
                        var90 = var108;
                        var89 = var40;
                        var88 = var106;
                        var87 = undefined;
                        var86 = var104;
                        var85 = var36;
                        var84 = var35;
                        var83 = var34;
                        var82 = var33;
                        var81 = var32;
                        var80 = var31;
                        var79 = var30;
                        var78 = var29;
                        var77 = var28;
                        var76 = var27;
                        var75 = var26;
                        var74 = var25;
                        var73 = var24;
                        var72 = var23;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!var106) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 1956:
                        var107 = var104[var47];
                        var103 = var107;
                        if (!(var9 == var107)) {
                            _fun64051_ip = 1981;
                            continue _fun64051
                        }
                    case 1967:
                        var103 = {
                            'type': 'text',
                            'text': ''
                        };
                    case 1981:
                        var91 = var111.type;
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.CHANNEL;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 4806;
                            continue _fun64051
                        }
                    case 2022:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.ROLE;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 4270;
                            continue _fun64051
                        }
                    case 2058:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.USER;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 3867;
                            continue _fun64051
                        }
                    case 2094:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.MENTIONABLE;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 3118;
                            continue _fun64051
                        }
                    case 2130:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.BOOLEAN;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 2978;
                            continue _fun64051
                        }
                    case 2166:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.INTEGER;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 2634;
                            continue _fun64051
                        }
                    case 2202:
                        var92 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var48];
                        var4 = var92.bind(var12)(var4);
                        var4 = var4.ApplicationCommandOptionType;
                        var4 = var4.NUMBER;
                        if (!(var4 !== var91)) {
                            _fun64051_ip = 2290;
                            continue _fun64051
                        }
                    case 2235:
                        var92 = var64.Error;
                        var93 = var111.type;
                        var4 = var64.HermesInternal;
                        var91 = var4.concat;
                        var4 = 'Unsupported option type: ';
                        var121 = var91.bind(var4)(var93);
                        var91 = var92.prototype;
                        var91 = Object.create(var91, {
                            constructor: {
                                value: var92
                            }
                        });
                        var122 = var91;
                        var4 = new var122[var92](var121, var120);
                        var4 = var4 instanceof Object ? var4 : var91;
                        throw var4;
                    case 2290:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 2343:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var109 = var109.bind(var110)();
                        var110 = var111.choices;
                        if (!(var9 == var110)) {
                            _fun64051_ip = 2456;
                            continue _fun64051
                        }
                    case 2368:
                        var112 = var111.autocomplete;
                        var110 = undefined;
                        if (!var112) {
                            _fun64051_ip = 2491;
                            continue _fun64051
                        }
                    case 2379:
                        var112 = var5.autocomplete;
                        if (!(var9 != var112)) {
                            _fun64051_ip = 2392;
                            continue _fun64051
                        }
                    case 2389:
                        if (var106) {
                            _fun64051_ip = 2439;
                            continue _fun64051
                        }
                    case 2392:
                        var113 = _closure1_slot0;
                        var112 = _closure1_slot3;
                        var112 = var112[var50];
                        var115 = var113.bind(var12)(var112);
                        var114 = var115.findAutocompleteChoiceNumberValue;
                        var112 = var5.channel;
                        var113 = var112.id;
                        var112 = var111.name;
                        var112 = var114.bind(var115)(var113, var112, var109);
                        _fun64051_ip = 2451;
                        continue _fun64051;
                    case 2439:
                        var113 = var5.autocomplete;
                        var112 = var113.query;
                    case 2451:
                        var110 = var112;
                        _fun64051_ip = 2491;
                        continue _fun64051;
                    case 2456:
                        var113 = _closure1_slot0;
                        var112 = _closure1_slot3;
                        var112 = var112[var50];
                        var114 = var113.bind(var12)(var112);
                        var113 = var114.findChoiceNumberValue;
                        var112 = var111.choices;
                        var110 = var113.bind(var114)(var112, var109);
                    case 2491:
                        var105 = var110;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var109;
                        if (!(var9 == var105)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 2540:
                        var112 = var64.Number;
                        var113 = _closure1_slot2;
                        var110 = _closure1_slot3;
                        var110 = var110[var49];
                        var114 = var113.bind(var12)(var110);
                        var113 = var114.normalizeNumericString;
                        var110 = _closure1_slot6;
                        var110 = var110.locale;
                        var110 = var113.bind(var114)(var110, var109);
                        var105 = var112.bind(var12)(var110);
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var109;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 2634:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 2687:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var109 = var109.bind(var110)();
                        var110 = var111.choices;
                        if (!(var9 == var110)) {
                            _fun64051_ip = 2800;
                            continue _fun64051
                        }
                    case 2712:
                        var112 = var111.autocomplete;
                        var110 = undefined;
                        if (!var112) {
                            _fun64051_ip = 2835;
                            continue _fun64051
                        }
                    case 2723:
                        var112 = var5.autocomplete;
                        if (!(var9 != var112)) {
                            _fun64051_ip = 2736;
                            continue _fun64051
                        }
                    case 2733:
                        if (var106) {
                            _fun64051_ip = 2783;
                            continue _fun64051
                        }
                    case 2736:
                        var113 = _closure1_slot0;
                        var112 = _closure1_slot3;
                        var112 = var112[var50];
                        var115 = var113.bind(var12)(var112);
                        var114 = var115.findAutocompleteChoiceNumberValue;
                        var112 = var5.channel;
                        var113 = var112.id;
                        var112 = var111.name;
                        var112 = var114.bind(var115)(var113, var112, var109);
                        _fun64051_ip = 2795;
                        continue _fun64051;
                    case 2783:
                        var113 = var5.autocomplete;
                        var112 = var113.query;
                    case 2795:
                        var110 = var112;
                        _fun64051_ip = 2835;
                        continue _fun64051;
                    case 2800:
                        var113 = _closure1_slot0;
                        var112 = _closure1_slot3;
                        var112 = var112[var50];
                        var114 = var113.bind(var12)(var112);
                        var113 = var114.findChoiceNumberValue;
                        var112 = var111.choices;
                        var110 = var113.bind(var114)(var112, var109);
                    case 2835:
                        var105 = var110;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var109;
                        var4 = var23;
                        if (!(var9 == var105)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 2884:
                        var112 = var64.Number;
                        var113 = _closure1_slot2;
                        var110 = _closure1_slot3;
                        var110 = var110[var49];
                        var114 = var113.bind(var12)(var110);
                        var113 = var114.normalizeNumericString;
                        var110 = _closure1_slot6;
                        var110 = var110.locale;
                        var110 = var113.bind(var114)(var110, var109);
                        var105 = var112.bind(var12)(var110);
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var109;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 2978:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 3031:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var50];
                        var112 = var110.bind(var12)(var109);
                        var110 = var112.toChoiceBooleanValue;
                        var113 = var103.text;
                        var109 = var113.trim;
                        var109 = var109.bind(var113)();
                        var105 = var110.bind(var112)(var109);
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3118:
                        var109 = var103.type;
                        if (!(var51 !== var109)) {
                            _fun64051_ip = 3818;
                            continue _fun64051
                        }
                    case 3130:
                        var109 = var103.type;
                        if (!(var55 !== var109)) {
                            _fun64051_ip = 3768;
                            continue _fun64051
                        }
                    case 3142:
                        var109 = var103.type;
                        if (!(var52 === var109)) {
                            _fun64051_ip = 3163;
                            continue _fun64051
                        }
                    case 3151:
                        var109 = var103.text;
                        if (!(var53 !== var109)) {
                            _fun64051_ip = 3702;
                            continue _fun64051
                        }
                    case 3163:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 3216:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var66];
                        var112 = var110.bind(var12)(var109);
                        var110 = var112.isSnowflake;
                        var109 = var103.text;
                        var109 = var110.bind(var112)(var109);
                        if (var109) {
                            _fun64051_ip = 3643;
                            continue _fun64051
                        }
                    case 3255:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var57];
                        var115 = var110.bind(var12)(var109);
                        var114 = var115.resolveApplicationCommandOption;
                        var113 = var103.text;
                        var110 = var5.guild;
                        var109 = var9 == var110;
                        var112 = undefined;
                        if (var109) {
                            _fun64051_ip = 3302;
                            continue _fun64051
                        }
                    case 3297:
                        var112 = var110.id;
                    case 3302:
                        var109 = var5.channel;
                        var109 = var109.id;
                        var109 = var114.bind(var115)(var113, var112, var109);
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 3333;
                            continue _fun64051
                        }
                    case 3328:
                        var112 = var109.type;
                    case 3333:
                        if (!(var51 !== var112)) {
                            _fun64051_ip = 3594;
                            continue _fun64051
                        }
                    case 3340:
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 3354;
                            continue _fun64051
                        }
                    case 3349:
                        var112 = var109.type;
                    case 3354:
                        if (!(var55 !== var112)) {
                            _fun64051_ip = 3544;
                            continue _fun64051
                        }
                    case 3361:
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 3375;
                            continue _fun64051
                        }
                    case 3370:
                        var112 = var109.type;
                    case 3375:
                        if (!(var52 === var112)) {
                            _fun64051_ip = 3388;
                            continue _fun64051
                        }
                    case 3379:
                        var112 = var109.text;
                        if (!(var53 !== var112)) {
                            _fun64051_ip = 3478;
                            continue _fun64051
                        }
                    case 3388:
                        var113 = _closure1_slot1;
                        var112 = _closure1_slot3;
                        var112 = var112[var61];
                        var113 = var113.bind(var12)(var112);
                        var114 = var103.text;
                        var112 = var64.HermesInternal;
                        var112 = var112.concat;
                        var112 = var112.bind(var59)(var114);
                        var112 = var113.bind(var12)(var54, var112);
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var110;
                        var93 = var109;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3478:
                        var112 = var5.guild;
                        var114 = var9 == var112;
                        var113 = undefined;
                        if (var114) {
                            _fun64051_ip = 3497;
                            continue _fun64051
                        }
                    case 3492:
                        var113 = var112.id;
                    case 3497:
                        var105 = var113;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var110;
                        var93 = var109;
                        var92 = var112;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3544:
                        var105 = var109.roleId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var110;
                        var93 = var109;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3594:
                        var105 = var109.userId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var110;
                        var93 = var109;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3643:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var105 = var109.bind(var110)();
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3702:
                        var109 = var5.guild;
                        var112 = var9 == var109;
                        var110 = undefined;
                        if (var112) {
                            _fun64051_ip = 3721;
                            continue _fun64051
                        }
                    case 3716:
                        var110 = var109.id;
                    case 3721:
                        var105 = var110;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var109;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3768:
                        var105 = var103.roleId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3818:
                        var105 = var103.userId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 3867:
                        var109 = var103.type;
                        if (!(var51 !== var109)) {
                            _fun64051_ip = 4221;
                            continue _fun64051
                        }
                    case 3879:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 3932:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var66];
                        var112 = var110.bind(var12)(var109);
                        var110 = var112.isSnowflake;
                        var109 = var103.text;
                        var109 = var110.bind(var112)(var109);
                        if (var109) {
                            _fun64051_ip = 4162;
                            continue _fun64051
                        }
                    case 3971:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var57];
                        var116 = var110.bind(var12)(var109);
                        var115 = var116.resolveApplicationCommandOption;
                        var114 = var103.text;
                        var110 = var5.guild;
                        var109 = var9 == var110;
                        var113 = undefined;
                        if (var109) {
                            _fun64051_ip = 4018;
                            continue _fun64051
                        }
                    case 4013:
                        var113 = var110.id;
                    case 4018:
                        var109 = var5.channel;
                        var119 = var109.id;
                        var109 = {};
                        var109.allowRoles = var54;
                        var122 = var116;
                        var121 = var114;
                        var120 = var113;
                        var118 = var109;
                        var109 = var122[var115](var121, var120, var119, var118, var117);
                        var113 = _closure1_slot1;
                        var112 = _closure1_slot3;
                        var112 = var112[var61];
                        var114 = var113.bind(var12)(var112);
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 4082;
                            continue _fun64051
                        }
                    case 4077:
                        var112 = var109.type;
                    case 4082:
                        var115 = var103.text;
                        var113 = var64.HermesInternal;
                        var113 = var113.concat;
                        var113 = var113.bind(var59)(var115);
                        var112 = var51 === var112;
                        var112 = var114.bind(var12)(var112, var113);
                        var105 = var109.userId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var110;
                        var96 = var109;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4162:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var105 = var109.bind(var110)();
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4221:
                        var105 = var103.userId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4270:
                        var109 = var103.type;
                        if (!(var55 !== var109)) {
                            _fun64051_ip = 4756;
                            continue _fun64051
                        }
                    case 4282:
                        var109 = var103.type;
                        if (!(var56 !== var109)) {
                            _fun64051_ip = 4466;
                            continue _fun64051
                        }
                    case 4294:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var52 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 4347:
                        var109 = var103.text;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var53 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 4400:
                        var109 = var5.guild;
                        var112 = var9 == var109;
                        var110 = undefined;
                        if (var112) {
                            _fun64051_ip = 4419;
                            continue _fun64051
                        }
                    case 4414:
                        var110 = var109.id;
                    case 4419:
                        var105 = var110;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var109;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4466:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var66];
                        var112 = var110.bind(var12)(var109);
                        var110 = var112.isSnowflake;
                        var109 = var103.text;
                        var109 = var110.bind(var112)(var109);
                        if (var109) {
                            _fun64051_ip = 4697;
                            continue _fun64051
                        }
                    case 4505:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var57];
                        var116 = var110.bind(var12)(var109);
                        var115 = var116.resolveApplicationCommandOption;
                        var114 = var103.text;
                        var110 = var5.guild;
                        var109 = var9 == var110;
                        var113 = undefined;
                        if (var109) {
                            _fun64051_ip = 4552;
                            continue _fun64051
                        }
                    case 4547:
                        var113 = var110.id;
                    case 4552:
                        var109 = var5.channel;
                        var119 = var109.id;
                        var109 = {};
                        var109.allowUsers = var54;
                        var122 = var116;
                        var121 = var114;
                        var120 = var113;
                        var118 = var109;
                        var109 = var122[var115](var121, var120, var119, var118, var117);
                        var113 = _closure1_slot1;
                        var112 = _closure1_slot3;
                        var112 = var112[var61];
                        var114 = var113.bind(var12)(var112);
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 4616;
                            continue _fun64051
                        }
                    case 4611:
                        var112 = var109.type;
                    case 4616:
                        var115 = var103.text;
                        var113 = var64.HermesInternal;
                        var113 = var113.concat;
                        var113 = var113.bind(var59)(var115);
                        var112 = var55 === var112;
                        var112 = var114.bind(var12)(var112, var113);
                        var105 = var109.roleId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var110;
                        var99 = var109;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4697:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var105 = var109.bind(var110)();
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4756:
                        var105 = var103.roleId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 4806:
                        var109 = var103.type;
                        if (!(var58 !== var109)) {
                            _fun64051_ip = 5138;
                            continue _fun64051
                        }
                    case 4818:
                        var109 = var103.type;
                        var105 = undefined;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        if (!(var56 === var109)) {
                            _fun64051_ip = 5182;
                            continue _fun64051
                        }
                    case 4871:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var66];
                        var112 = var110.bind(var12)(var109);
                        var110 = var112.isSnowflake;
                        var109 = var103.text;
                        var109 = var110.bind(var112)(var109);
                        if (var109) {
                            _fun64051_ip = 5082;
                            continue _fun64051
                        }
                    case 4910:
                        var110 = _closure1_slot0;
                        var109 = _closure1_slot3;
                        var109 = var109[var57];
                        var115 = var110.bind(var12)(var109);
                        var114 = var115.resolveApplicationCommandOption;
                        var113 = var103.text;
                        var110 = var5.guild;
                        var109 = var9 == var110;
                        var112 = undefined;
                        if (var109) {
                            _fun64051_ip = 4957;
                            continue _fun64051
                        }
                    case 4952:
                        var112 = var110.id;
                    case 4957:
                        var109 = var5.channel;
                        var109 = var109.id;
                        var109 = var114.bind(var115)(var113, var112, var109);
                        var113 = _closure1_slot1;
                        var112 = _closure1_slot3;
                        var112 = var112[var61];
                        var114 = var113.bind(var12)(var112);
                        var113 = var9 == var109;
                        var112 = undefined;
                        if (var113) {
                            _fun64051_ip = 5005;
                            continue _fun64051
                        }
                    case 5000:
                        var112 = var109.type;
                    case 5005:
                        var115 = var103.text;
                        var113 = var64.HermesInternal;
                        var113 = var113.concat;
                        var113 = var113.bind(var59)(var115);
                        var112 = var58 === var112;
                        var112 = var114.bind(var12)(var112, var113);
                        var105 = var109.channelId;
                        var102 = var110;
                        var101 = var109;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 5082:
                        var110 = var103.text;
                        var109 = var110.trim;
                        var105 = var109.bind(var110)();
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                        _fun64051_ip = 5182;
                        continue _fun64051;
                    case 5138:
                        var105 = var103.channelId;
                        var102 = var35;
                        var101 = var34;
                        var100 = var33;
                        var99 = var32;
                        var98 = var31;
                        var97 = var30;
                        var96 = var29;
                        var95 = var28;
                        var94 = var27;
                        var93 = var26;
                        var92 = var25;
                        var91 = var24;
                        var4 = var23;
                    case 5182:
                        var109 = var60 !== var105;
                        if (var109) {
                            _fun64051_ip = 5199;
                            continue _fun64051
                        }
                    case 5189:
                        var110 = var5.autocomplete;
                        var109 = var9 == var110;
                    case 5199:
                        if (var109) {
                            _fun64051_ip = 5205;
                            continue _fun64051
                        }
                    case 5202:
                        var109 = var106;
                    case 5205:
                        var90 = var108;
                        var89 = var107;
                        var88 = var106;
                        var87 = var105;
                        var86 = var104;
                        var85 = var103;
                        var84 = var102;
                        var83 = var101;
                        var82 = var100;
                        var81 = var99;
                        var80 = var98;
                        var79 = var97;
                        var78 = var96;
                        var77 = var95;
                        var76 = var94;
                        var75 = var93;
                        var74 = var92;
                        var73 = var91;
                        var72 = var4;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!var109) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 5280:
                        var110 = _closure1_slot1;
                        var109 = _closure1_slot3;
                        var109 = var109[var61];
                        var112 = var110.bind(var12)(var109);
                        var109 = var5.autocomplete;
                        var110 = var9 != var109;
                        if (var110) {
                            _fun64051_ip = 5314;
                            continue _fun64051
                        }
                    case 5310:
                        var110 = var9 != var105;
                    case 5314:
                        var113 = var111.name;
                        var109 = var64.HermesInternal;
                        var109 = var109.concat;
                        var109 = var109.bind(var63)(var113, var62);
                        var109 = var112.bind(var12)(var110, var109);
                        var90 = var108;
                        var89 = var107;
                        var88 = var106;
                        var87 = var105;
                        var86 = var104;
                        var85 = var103;
                        var84 = var102;
                        var83 = var101;
                        var82 = var100;
                        var81 = var99;
                        var80 = var98;
                        var79 = var97;
                        var78 = var96;
                        var77 = var95;
                        var76 = var94;
                        var75 = var93;
                        var74 = var92;
                        var73 = var91;
                        var72 = var4;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                        if (!(var9 != var105)) {
                            _fun64051_ip = 5523;
                            continue _fun64051
                        }
                    case 5415:
                        var110 = var22.push;
                        var109 = {};
                        var112 = var111.type;
                        var109.type = var112;
                        var111 = var111.name;
                        var109.name = var111;
                        var109.value = var105;
                        var109.focused = var106;
                        var109 = var110.bind(var22)(var109);
                        var90 = var108;
                        var89 = var107;
                        var88 = var106;
                        var87 = var105;
                        var86 = var104;
                        var85 = var103;
                        var84 = var102;
                        var83 = var101;
                        var82 = var100;
                        var81 = var99;
                        var80 = var98;
                        var79 = var97;
                        var78 = var96;
                        var77 = var95;
                        var76 = var94;
                        var75 = var93;
                        var74 = var92;
                        var73 = var91;
                        var72 = var4;
                        var71 = var21;
                        var70 = var20;
                        var69 = var18;
                        var68 = var8;
                    case 5523:
                        var91 = var65.bind(var12)();
                        var4 = var91.done;
                        var41 = var90;
                        var40 = var89;
                        var39 = var88;
                        var38 = var87;
                        var37 = var86;
                        var36 = var85;
                        var35 = var84;
                        var34 = var83;
                        var33 = var82;
                        var32 = var81;
                        var31 = var80;
                        var30 = var79;
                        var29 = var78;
                        var28 = var77;
                        var27 = var76;
                        var26 = var75;
                        var25 = var74;
                        var24 = var73;
                        var23 = var72;
                        var21 = var71;
                        var20 = var70;
                        var18 = var69;
                        var8 = var68;
                        var42 = var91;
                        if (!var4) {
                            _fun64051_ip = 558;
                            continue _fun64051
                        }
                    case 5610:
                        var8 = var6.subCommandPath;
                        var4 = var22;
                        if (!(var9 != var8)) {
                            _fun64051_ip = 5709;
                            continue _fun64051
                        }
                    case 5623:
                        var8 = var6.subCommandPath;
                        var8 = var8.length;
                        var21 = 1;
                        var20 = var8 - var21;
                        var18 = 0;
                        var8 = var22;
                        var4 = var8;
                        if (!(var20 >= var18)) {
                            _fun64051_ip = 5709;
                            continue _fun64051
                        }
                    case 5653:
                        var22 = var6.subCommandPath;
                        var24 = var22[var20];
                        var22 = var24.name;
                        var23 = {};
                        var24 = var24.type;
                        var23.type = var24;
                        var23.name = var22;
                        var23.options = var8;
                        var22 = new Array(1);
                        var22[0] = var23;
                        var20 = var20 - var21;
                        var8 = var22;
                        var4 = var8;
                        if (var20 >= var18) {
                            _fun64051_ip = 5653;
                            continue _fun64051
                        }
                    case 5709:
                        var8 = var6.execute;
                        if (!(var9 == var8)) {
                            _fun64051_ip = 6163;
                            continue _fun64051
                        }
                    case 5722:
                        var18 = var6.inputType;
                        var20 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var21 = 9;
                        var8 = var8[var21];
                        var8 = var20.bind(var12)(var8);
                        var8 = var8.ApplicationCommandInputType;
                        var8 = var8.BUILT_IN;
                        if (!(var18 !== var8)) {
                            _fun64051_ip = 6160;
                            continue _fun64051
                        }
                    case 5767:
                        var18 = var6.inputType;
                        var20 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var21];
                        var8 = var20.bind(var12)(var8);
                        var8 = var8.ApplicationCommandInputType;
                        var8 = var8.BUILT_IN_TEXT;
                        if (!(var18 !== var8)) {
                            _fun64051_ip = 6160;
                            continue _fun64051
                        }
                    case 5809:
                        var18 = var6.inputType;
                        var20 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var21];
                        var8 = var20.bind(var12)(var8);
                        var8 = var8.ApplicationCommandInputType;
                        var8 = var8.BUILT_IN_INTEGRATION;
                        if (!(var18 !== var8)) {
                            _fun64051_ip = 6160;
                            continue _fun64051
                        }
                    case 5851:
                        var8 = {};
                        var18 = var6.version;
                        var8.version = var18;
                        var20 = var6.rootCommand;
                        var21 = var9 == var20;
                        var18 = undefined;
                        if (var21) {
                            _fun64051_ip = 5884;
                            continue _fun64051
                        }
                    case 5879:
                        var18 = var20.id;
                    case 5884:
                        if (!(var9 == var18)) {
                            _fun64051_ip = 5893;
                            continue _fun64051
                        }
                    case 5888:
                        var18 = var6.id;
                    case 5893:
                        var8.id = var18;
                        var18 = var6.guildId;
                        var8.guild_id = var18;
                        var20 = var6.rootCommand;
                        var21 = var9 == var20;
                        var18 = undefined;
                        if (var21) {
                            _fun64051_ip = 5926;
                            continue _fun64051
                        }
                    case 5921:
                        var18 = var20.name;
                    case 5926:
                        if (!(var9 == var18)) {
                            _fun64051_ip = 5936;
                            continue _fun64051
                        }
                    case 5930:
                        var18 = var6.untranslatedName;
                    case 5936:
                        var8.name = var18;
                        var18 = var6.type;
                        var8.type = var18;
                        var8.options = var4;
                        var18 = var6.rootCommand;
                        var8.application_command = var18;
                        if (!(var9 != var7)) {
                            _fun64051_ip = 5974;
                            continue _fun64051
                        }
                    case 5968:
                        var8.target_id = var7;
                    case 5974:
                        var7 = var5.autocomplete;
                        if (!(var9 == var7)) {
                            _fun64051_ip = 6127;
                            continue _fun64051
                        }
                    case 5987:
                        var9 = _closure1_slot1;
                        var18 = _closure1_slot3;
                        var7 = 20;
                        var7 = var18[var7];
                        var18 = var9.bind(var12)(var7);
                        var9 = var18.clearAll;
                        var7 = var5.channel;
                        var7 = var7.id;
                        var7 = var9.bind(var18)(var7, var19);
                        var9 = _closure1_slot17;
                        var7 = {};
                        var18 = var6.applicationId;
                        var7.applicationId = var18;
                        var7.data = var8;
                        var7.context = var5;
                        var7.attachments = var17;
                        var7.maxSizeCallback = var16;
                        var15 = function() { // Original name: onMessageSuccess, environment: var15
                            var2 = _closure1_slot16;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var7.onMessageSuccess = var15;
                        var15 = _closure1_slot24;
                        var15 = var15.bind(var12)(var13);
                        var7.analytics_location = var15;
                        var7.sectionName = var14;
                        var7.source = var10;
                        var3 = var3.bind(var12)(var6, var5, var8);
                        SaveGenerator(address = 6106);
                    case 6104:
                        return var3;
                    case 6106:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 14);
                        if (var14) {
                            _fun64051_ip = 6124;
                            continue _fun64051
                        }
                    case 6112:
                        var7.interactionLifecycleOptions = var3;
                        var7 = var9.bind(var12)(var7);
                        _fun64051_ip = 6160;
                        continue _fun64051;
                    case 6124:
                        return var3;
                    case 6127:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var3 = 19;
                        var3 = var9[var3];
                        var7 = var7.bind(var12)(var3);
                        var3 = var7.performAutocomplete;
                        var3 = var3.bind(var7)(var6, var5, var8);
                    case 6160:
                        return var12;
                    case 6163:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var3 = 18;
                        var3 = var8[var3];
                        var9 = var7.bind(var12)(var3);
                        var8 = var9.trackWithMetadata;
                        var3 = _closure1_slot12;
                        var7 = var3.APPLICATION_COMMAND_USED;
                        var3 = {};
                        var14 = var6.id;
                        var3.command_id = var14;
                        var14 = var6.applicationId;
                        var3.application_id = var14;
                        var14 = var6.type;
                        var3.command_type = var14;
                        var11 = _closure1_slot24;
                        var11 = var11.bind(var12)(var13);
                        var3.location = var11;
                        var3.source = var10;
                        var3 = var8.bind(var9)(var7, var3);
                        var3 = var6.execute;
                        var3 = var3.bind(var6)(var4, var5);
                        return var3;
                    case 6269:
                        return var2;
                    case 6272:
                        return var1;
                    case 6275:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function(arg0, arg1) { // Original name: queueCommand, environment: var3
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot1;
        var8 = _closure1_slot3;
        var6 = 25;
        var2 = var8[var6];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.enqueue;
        var2 = {};
        var7 = _closure1_slot0;
        var6 = var8[var6];
        var6 = var7.bind(var0)(var6);
        var6 = var6.MessageDataType;
        var6 = var6.COMMAND;
        var2.type = var6;
        var2.message = var5;
        var1 = function(arg0) { // Environment: var1
            _fun64054: for (var _fun64054_ip = 0;;) switch (_fun64054_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var9 = var3.bind(var0)(var1);
                    var8 = var9.handleInteractionResponse;
                    var3 = _closure2_slot0;
                    var7 = var3.nonce;
                    var6 = var3.applicationId;
                    var5 = var3.channelId;
                    var10 = var3.guildId;
                    var4 = null;
                    var11 = var4 != var10;
                    var3 = null;
                    if (!var11) {
                        _fun64054_ip = 76;
                        continue _fun64054
                    }
                case 73:
                    var3 = var10;
                case 76:
                    var17 = var9;
                    var16 = var7;
                    var15 = var2;
                    var14 = var6;
                    var13 = var5;
                    var12 = var3;
                    var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                    var2 = var2.ok;
                    if (!var2) {
                        _fun64054_ip = 115;
                        continue _fun64054
                    }
                case 107:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
                case 115:
                    if (!var2) {
                        _fun64054_ip = 126;
                        continue _fun64054
                    }
                case 118:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                case 126:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: displayInteractionLifecycleInChat, environment: var3
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: _displayInteractionLifecycleInChat, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun64058: for (var _fun64058_ip = 0;;) switch (_fun64058_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var3 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun64058_ip = 674;
                            continue _fun64058
                        }
                    case 21:
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var3;
                        var5 = undefined;
                        var7 = undefined;
                        var _closure4_slot2 = var5;
                        var4 = var3.channel;
                        var15 = null;
                        if (!(var15 != var4)) {
                            _fun64058_ip = 669;
                            continue _fun64058
                        }
                    case 51:
                        var8 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var6 = 27;
                        var6 = var10[var6];
                        var12 = var8.bind(var5)(var6);
                        var11 = var12.getCachedApplicationSection;
                        var10 = {};
                        var6 = var3.channel;
                        var10.channel = var6;
                        var6 = 'channel';
                        var10.type = var6;
                        var8 = var9.type;
                        var6 = var1.applicationId;
                        var6 = var11.bind(var12)(var10, var8, var6);
                        var7 = var6;
                        if (!(var15 != var6)) {
                            _fun64058_ip = 664;
                            continue _fun64058
                        }
                    case 126:
                        var6 = var7;
                        var6 = var6.application;
                        var8 = var15 == var6;
                        var13 = undefined;
                        if (var8) {
                            _fun64058_ip = 149;
                            continue _fun64058
                        }
                    case 143:
                        var13 = var6.bot;
                    case 149:
                        if (!(var15 == var13)) {
                            _fun64058_ip = 223;
                            continue _fun64058
                        }
                    case 153:
                        var6 = var7;
                        var6 = var6.botId;
                        if (!(var15 != var6)) {
                            _fun64058_ip = 223;
                            continue _fun64058
                        }
                    case 166: // try_start_0
                        var8 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var6 = 28;
                        var6 = var10[var6];
                        var10 = var8.bind(var5)(var6);
                        var8 = var10.getUser;
                        var6 = var7;
                        var6 = var6.botId;
                        var6 = var8.bind(var10)(var6);
                        SaveGenerator(address = 210);
                    case 208:
                        return var6;
                    case 210:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun64058_ip = 218;
                            continue _fun64058
                        }
                    case 216: // try_end0
                        _fun64058_ip = 223;
                        continue _fun64058;
                    case 218:
                        return var6;
                    case 221: // catch_target0
                        CatchBlockStart(arg_register = 6);
                    case 223:
                        var8 = {};
                        var11 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var6 = 29;
                        var10 = var14[var6];
                        var11 = var11.bind(var5)(var10);
                        var10 = {};
                        var12 = var3.channel;
                        var12 = var12.id;
                        var10.channelId = var12;
                        var12 = '';
                        var10.content = var12;
                        var16 = var9.type;
                        var17 = _closure1_slot0;
                        var12 = 13;
                        var14 = var14[var12];
                        var14 = var17.bind(var5)(var14);
                        var14 = var14.ApplicationCommandType;
                        var14 = var14.CHAT;
                        if (!(var16 !== var14)) {
                            _fun64058_ip = 318;
                            continue _fun64058
                        }
                    case 306:
                        var14 = _closure1_slot13;
                        var14 = var14.CONTEXT_MENU_COMMAND;
                        _fun64058_ip = 328;
                        continue _fun64058;
                    case 318:
                        var16 = _closure1_slot13;
                        var14 = var16.CHAT_INPUT_COMMAND;
                    case 328:
                        var10.type = var14;
                        if (!(var15 == var13)) {
                            _fun64058_ip = 383;
                            continue _fun64058
                        }
                    case 336:
                        var14 = {};
                        var16 = var7;
                        var17 = var16.id;
                        var14.id = var17;
                        var16 = var16.name;
                        var14.username = var16;
                        var16 = _closure1_slot14;
                        var14.discriminator = var16;
                        var14.avatar = var15;
                        var15 = true;
                        var14.bot = var15;
                        var13 = var14;
                    case 383:
                        var10.author = var13;
                        var20 = var11.bind(var5)(var10);
                        var21 = var8;
                        var10 = copyDataProperties(var21, var20);
                        var10 = var7.application;
                        var7 = 'application';
                        var8[var7] = var10;
                        var10 = {};
                        var7 = var9.id;
                        var10.id = var7;
                        var7 = var9.name;
                        var10.name = var7;
                        var7 = var1.displayName;
                        var10.name_localized = var7;
                        var11 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var12 = var7[var12];
                        var12 = var11.bind(var5)(var12);
                        var12 = var12.InteractionTypes;
                        var12 = var12.APPLICATION_COMMAND;
                        var10.type = var12;
                        var6 = var7[var6];
                        var12 = var11.bind(var5)(var6);
                        var11 = var12.userRecordToServer;
                        var13 = _closure1_slot9;
                        var6 = var13.getCurrentUser;
                        var6 = var6.bind(var13)();
                        var6 = var11.bind(var12)(var6);
                        var10.user = var6;
                        var6 = 'interaction';
                        var8[var6] = var10;
                        var6 = 'interaction_data';
                        var8[var6] = var9;
                        _closure4_slot2 = var8;
                        var6 = _closure1_slot1;
                        var4 = 30;
                        var4 = var7[var4];
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.receiveMessage;
                        var3 = var3.channel;
                        var21 = var3.id;
                        var3 = {};
                        var9 = var1.applicationId;
                        var3.applicationId = var9;
                        var3.command = var1;
                        var19 = true;
                        var22 = var7;
                        var20 = var8;
                        var18 = var3;
                        var1 = var22[var6](var21, var20, var19, var18, var17);
                        var1 = {};
                        var4 = function() { // Original name: get messageId, environment: var2
                            var0 = _closure4_slot2;
                            var0 = var0.id;
                            return var0;
                        };
                        var3 = 'messageId';
                        Object.defineProperty(var1, var3, {
                            get: var4,
                            set: var5,
                            enumerable: true
                        });
                        var4 = function() { // Original name: get nonce, environment: var2
                            var0 = _closure4_slot2;
                            var0 = var0.id;
                            return var0;
                        };
                        var3 = 'nonce';
                        Object.defineProperty(var1, var3, {
                            get: var4,
                            set: var5,
                            enumerable: true
                        });
                        var3 = function(arg0) { // Original name: onCreate, environment: var2
                            _fun64061: for (var _fun64061_ip = 0;;) switch (_fun64061_ip) {
                                case 0:
                                    var1 = _closure4_slot2;
                                    var2 = var1.interaction;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun64061_ip = 38;
                                        continue _fun64061
                                    }
                                case 19:
                                    var0 = _closure4_slot2;
                                    var1 = var0.interaction;
                                    var0 = arg0;
                                    var1.id = var0;
                                case 38:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1.onCreate = var3;
                        var3 = function() { // Original name: onSuccess, environment: var2
                            var0 = undefined;
                            return var0;
                        };
                        var1.onSuccess = var3;
                        var2 = function(arg0, arg1, arg2, arg3) { // Original name: onFailure, environment: var2
                            _fun64063: for (var _fun64063_ip = 0;;) switch (_fun64063_ip) {
                                case 0:
                                    var7 = arg0;
                                    var3 = arg1;
                                    var5 = arg3;
                                    var0 = _closure4_slot1;
                                    var0 = var0.channel;
                                    var1 = null;
                                    if (!(var1 != var0)) {
                                        _fun64063_ip = 236;
                                        continue _fun64063
                                    }
                                case 30:
                                    var0 = var1 == var3;
                                    if (!var0) {
                                        _fun64063_ip = 41;
                                        continue _fun64063
                                    }
                                case 37:
                                    var0 = var1 != var7;
                                case 41:
                                    if (!var0) {
                                        _fun64063_ip = 95;
                                        continue _fun64063
                                    }
                                case 44:
                                    var6 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var0 = 30;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var6 = var6.bind(var0)(var2);
                                    var2 = var6.sendClydeError;
                                    var0 = _closure4_slot1;
                                    var0 = var0.channel;
                                    var0 = var0.id;
                                    var0 = var2.bind(var6)(var0, var7);
                                case 95:
                                    var0 = var1 == var3;
                                    if (!var0) {
                                        _fun64063_ip = 106;
                                        continue _fun64063
                                    }
                                case 102:
                                    var0 = var1 != var5;
                                case 106:
                                    if (!var0) {
                                        _fun64063_ip = 155;
                                        continue _fun64063
                                    }
                                case 109:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 26;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.interactionCallbackErrorReason;
                                    var0 = _closure4_slot0;
                                    var0 = var0.applicationId;
                                    var3 = var1.bind(var2)(var5, var0);
                                case 155:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot3;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var5 = 'MESSAGE_SEND_FAILED';
                                    var0.type = var5;
                                    var5 = _closure4_slot2;
                                    var5 = var5.id;
                                    var0.messageId = var5;
                                    var4 = _closure4_slot1;
                                    var4 = var4.channel;
                                    var4 = var4.id;
                                    var0.channelId = var4;
                                    var0.reason = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 236:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1.onFailure = var2;
                        return var1;
                    case 664:
                        var1 = {};
                        return var1;
                    case 669:
                        var1 = {};
                        return var1;
                    case 674:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: getAnalyticsLocationFromCommandOrigin, environment: var3
        _fun64064: for (var _fun64064_ip = 0;;) switch (_fun64064_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var3 = 9;
                var1 = var1[var3];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.APPLICATION_LAUNCHER;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 608;
                    continue _fun64064
                }
            case 47:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.APP_LAUNCHER_APPLICATION_VIEW;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 577;
                    continue _fun64064
                }
            case 83:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.IMAGE_RECS_MENU;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 546;
                    continue _fun64064
                }
            case 119:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.IMAGE_RECS_SUBMENU;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 515;
                    continue _fun64064
                }
            case 155:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.ACTIVITY_INSTANCE_EMBED;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 484;
                    continue _fun64064
                }
            case 191:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.ACTIVITY_BOOKMARK_EMBED;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 453;
                    continue _fun64064
                }
            case 227:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.MINI_SHELF;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 422;
                    continue _fun64064
                }
            case 263:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.VOICE_TILE_ACTIVITY_SUGGESTIONS;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 391;
                    continue _fun64064
                }
            case 296:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var5.bind(var2)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                if (!(var1 !== var4)) {
                    _fun64064_ip = 360;
                    continue _fun64064
                }
            case 329:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.SLASH_UI;
                return var1;
            case 360:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                return var1;
            case 391:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.VC_TILE_ACTIVITY_SUGGESTION;
                return var1;
            case 422:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.ACTIVITIES_MINI_SHELF;
                return var1;
            case 453:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.ACTIVITY_BOOKMARK_EMBED;
                return var1;
            case 484:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.ACTIVITY_INSTANCE_EMBED;
                return var1;
            case 515:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.IMAGE_RECS_SUBMENU;
                return var1;
            case 546:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.IMAGE_RECS_MENU;
                return var1;
            case 577:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ApplicationCommandTriggerLocations;
                var1 = var1.APP_LAUNCHER_APPLICATION_VIEW;
                return var1;
            case 608:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var3];
                var0 = var1.bind(var2)(var0);
                var0 = var0.ApplicationCommandTriggerLocations;
                var0 = var0.APP_LAUNCHER;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: getMaxAndTotalFileSize, environment: var3
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() { // Original name: _getMaxAndTotalFileSize, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun64068: for (var _fun64068_ip = 0;;) switch (_fun64068_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64068_ip = 165;
                            continue _fun64068
                        }
                    case 13:
                        var2 = _closure1_slot18;
                        var11 = undefined;
                        var1 = arg0;
                        var10 = var2.bind(var11)(var1);
                        var2 = var10.bind(var11)();
                        var1 = var2.done;
                        var8 = null;
                        var7 = var2;
                        var6 = 0;
                        var5 = 0;
                        var4 = undefined;
                        var3 = 0;
                        var2 = 0;
                        if (var1) {
                            _fun64068_ip = 150;
                            continue _fun64068
                        }
                    case 57:
                        var13 = var7.value;
                        if (var12) {
                            _fun64068_ip = 94;
                            continue _fun64068
                        }
                    case 65:
                        var1 = var13.getSize;
                        var14 = var1.bind(var13)();
                        SaveGenerator(address = 79);
                    case 77:
                        return var14;
                    case 79:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 1);
                        var15 = var1;
                        var1 = var14;
                        if (!var15) {
                            _fun64068_ip = 118;
                            continue _fun64068
                        }
                    case 91:
                        return var14;
                    case 94:
                        var14 = var13.currentSize;
                        var15 = var8 != var14;
                        var13 = 0;
                        if (!var15) {
                            _fun64068_ip = 112;
                            continue _fun64068
                        }
                    case 109:
                        var13 = var14;
                    case 112:
                        var1 = var13;
                        var4 = var14;
                    case 118:
                        if (!(var1 > var5)) {
                            _fun64068_ip = 125;
                            continue _fun64068
                        }
                    case 122:
                        var5 = var1;
                    case 125:
                        var6 = var6 + var1;
                        var15 = var10.bind(var11)();
                        var1 = var15.done;
                        var7 = var15;
                        var3 = var6;
                        var2 = var5;
                        if (!var1) {
                            _fun64068_ip = 57;
                            continue _fun64068
                        }
                    case 150:
                        var1 = {};
                        var1.totalSize = var3;
                        var1.largestUploadedFileSize = var2;
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() { // Original name: _stageAttachments, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun64071: for (var _fun64071_ip = 0;;) switch (_fun64071_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64071_ip = 477;
                            continue _fun64071
                        }
                    case 18:
                        var13 = var7;
                        var6 = var1;
                        var _closure4_slot0 = var1;
                        var1 = arg3;
                        var _closure4_slot1 = var1;
                        var5 = undefined;
                        var _closure4_slot2 = var5;
                        var4 = undefined;
                        var10 = undefined;
                        var3 = undefined;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 31;
                        var1 = var8[var1];
                        var8 = var2.bind(var5)(var1);
                        var2 = var8.maxFileSize;
                        var1 = arg2;
                        var15 = var2.bind(var8)(var1);
                        _closure4_slot2 = var15;
                        var4 = function(arg0) { // Original name: handleUploadsTooLarge, environment: var11
                            _fun64072: for (var _fun64072_ip = 0;;) switch (_fun64072_ip) {
                                case 0:
                                    var1 = _closure4_slot1;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun64072_ip = 32;
                                        continue _fun64072
                                    }
                                case 13:
                                    var3 = _closure4_slot1;
                                    var2 = _closure4_slot2;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var2, var0);
                                case 32:
                                    var3 = _closure1_slot2;
                                    var12 = _closure1_slot3;
                                    var0 = 24;
                                    var2 = var12[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var2);
                                    var4 = var5.setFailed;
                                    var3 = _closure4_slot0;
                                    var2 = _closure1_slot11;
                                    var2 = var2.ENTITY_TOO_LARGE;
                                    var11 = _closure1_slot0;
                                    var1 = 32;
                                    var6 = var12[var1];
                                    var6 = var11.bind(var0)(var6);
                                    var8 = var6.intl;
                                    var7 = var8.formatToPlainString;
                                    var1 = var12[var1];
                                    var1 = var11.bind(var0)(var1);
                                    var1 = var1.t;
                                    var6 = var1.fxEKdS;
                                    var1 = {};
                                    var10 = 31;
                                    var10 = var12[var10];
                                    var11 = var11.bind(var0)(var10);
                                    var10 = var11.sizeString;
                                    var9 = _closure4_slot2;
                                    var9 = var10.bind(var11)(var9);
                                    var1.maxSize = var9;
                                    var1 = var7.bind(var8)(var6, var1);
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    return var0;
                            }
                        };
                        var1 = _closure1_slot25;
                        var2 = false;
                        var1 = var1.bind(var5)(var7, var2);
                        SaveGenerator(address = 109);
                    case 107:
                        return var1;
                    case 109:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun64071_ip = 474;
                            continue _fun64071
                        }
                    case 118:
                        var10 = var1.totalSize;
                        var8 = var1.largestUploadedFileSize;
                        var3 = var8;
                        var7 = global;
                        var14 = var7.Math;
                        var12 = var14.max;
                        var7 = _closure1_slot15;
                        var7 = var12.bind(var14)(var15, var7);
                        if (!(!(var8 > var7))) {
                            _fun64071_ip = 466;
                            continue _fun64071
                        }
                    case 163:
                        var8 = var10;
                        var14 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var12 = 33;
                        var7 = var7[var12];
                        var7 = var14.bind(var5)(var7);
                        var7 = var7.MAX_TOTAL_ATTACHMENT_SIZE;
                        if (!(!(var8 > var7))) {
                            _fun64071_ip = 466;
                            continue _fun64071
                        }
                    case 199: // try_start_0
                        var8 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var7 = 34;
                        var7 = var14[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var13;
                        var7 = var8.bind(var5)(var7);
                        SaveGenerator(address = 231);
                    case 229:
                        return var7;
                    case 231:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun64071_ip = 239;
                            continue _fun64071
                        }
                    case 237: // try_end0
                        _fun64071_ip = 349;
                        continue _fun64071;
                    case 239:
                        return var7;
                    case 242: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var8 = _closure1_slot2;
                        var18 = _closure1_slot3;
                        var7 = 24;
                        var7 = var18[var7];
                        var14 = var8.bind(var5)(var7);
                        var8 = var14.setFailed;
                        var7 = var6;
                        var15 = _closure1_slot0;
                        var6 = 32;
                        var16 = var18[var6];
                        var16 = var15.bind(var5)(var16);
                        var17 = var16.intl;
                        var16 = var17.formatToPlainString;
                        var6 = var18[var6];
                        var6 = var15.bind(var5)(var6);
                        var6 = var6.t;
                        var15 = var6["9h1/1p"];
                        var6 = {};
                        var18 = var13;
                        var18 = var18.length;
                        var6.count = var18;
                        var6 = var16.bind(var17)(var15, var6);
                        var6 = var8.bind(var14)(var7, var5, var6);
                    case 349:
                        var8 = _closure1_slot25;
                        var7 = var13;
                        var6 = true;
                        var6 = var8.bind(var5)(var7, var6);
                        SaveGenerator(address = 368);
                    case 366:
                        return var6;
                    case 368:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun64071_ip = 463;
                            continue _fun64071
                        }
                    case 374:
                        var10 = var6.totalSize;
                        var3 = var6.largestUploadedFileSize;
                        var14 = var13;
                        var13 = var14.some;
                        var11 = function(arg0) { // Environment: var11
                            var0 = arg0;
                            var1 = var0.error;
                            var0 = _closure1_slot11;
                            var0 = var0.ENTITY_TOO_LARGE;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var11 = var13.bind(var14)(var11);
                        var8 = var11;
                        if (var11) {
                            _fun64071_ip = 438;
                            continue _fun64071
                        }
                    case 411:
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var9 = var9[var12];
                        var9 = var11.bind(var5)(var9);
                        var9 = var9.MAX_TOTAL_ATTACHMENT_SIZE;
                        var8 = var10 > var9;
                    case 438:
                        var8 = !var8;
                        var7 = var8;
                        if (var8) {
                            _fun64071_ip = 460;
                            continue _fun64071
                        }
                    case 447:
                        var9 = var4;
                        var8 = var3;
                        var8 = var9.bind(var5)(var8);
                        var7 = false;
                    case 460:
                        return var7;
                    case 463:
                        return var6;
                    case 466:
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 474:
                        return var1;
                    case 477:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AbortCodes;
    var _closure1_slot11 = var4;
    var4 = var1.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = var1.MessageTypes;
    var _closure1_slot13 = var4;
    var1 = var1.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot15 = var1;
    var1 = function(arg0) { // Original name: trackEmojiUsage, environment: var3
        _fun64074: for (var _fun64074_ip = 0;;) switch (_fun64074_ip) {
            case 0:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.values;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = var2.flatMap;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun64076: for (var _fun64076_ip = 0;;) switch (_fun64076_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.type;
                                var0 = 'emoji';
                                if (!(var0 !== var1)) {
                                    _fun64076_ip = 57;
                                    continue _fun64076
                                }
                            case 16:
                                var3 = var2.type;
                                var1 = 'customEmoji';
                                var0 = null;
                                if (!(var1 === var3)) {
                                    _fun64076_ip = 55;
                                    continue _fun64076
                                }
                            case 31:
                                var4 = _closure1_slot5;
                                var3 = var4.getCustomEmojiById;
                                var1 = var2.emojiId;
                                var0 = var3.bind(var4)(var1);
                            case 55:
                                _fun64076_ip = 164;
                                continue _fun64076;
                            case 57:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 21;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var3 = var1.Emoji;
                                var1 = {
                                    'names': null,
                                    'surrogates': '',
                                    'unicodeVersion': 6
                                };
                                var6 = var2.name;
                                var5 = var6.replaceAll;
                                var4 = ':';
                                var2 = '';
                                var4 = var5.bind(var6)(var4, var2);
                                var2 = new Array(1);
                                var2[0] = var4;
                                var1.names = var2;
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var9 = var2;
                                var8 = var1;
                                var1 = new var9[var3](var8, var7);
                                var0 = var1 instanceof Object ? var1 : var2;
                            case 164:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 22;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var1.bind(var2)(var0);
                var1 = var3.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun64074_ip = 102;
                    continue _fun64074
                }
            case 50:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'EMOJI_TRACK_USAGE';
                var0.type = var4;
                var0.emojiUsed = var3;
                var0 = var1.bind(var2)(var0);
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun64079: for (var _fun64079_ip = 0;;) switch (_fun64079_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var4 = arg1;
                        var2 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64079_ip = 200;
                            continue _fun64079
                        }
                    case 19:
                        var3 = var1.isCommandType;
                        var3 = var3.bind(var1)();
                        if (!var3) {
                            _fun64079_ip = 192;
                            continue _fun64079
                        }
                    case 35:
                        var5 = var1.interactionData;
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun64079_ip = 192;
                            continue _fun64079
                        }
                    case 50:
                        var5 = var2.command;
                        if (!(var3 != var5)) {
                            _fun64079_ip = 192;
                            continue _fun64079
                        }
                    case 63:
                        var7 = {};
                        var7.channel = var4;
                        var5 = var4.guild_id;
                        var5 = var3 != var5;
                        var3 = null;
                        if (!var5) {
                            _fun64079_ip = 105;
                            continue _fun64079
                        }
                    case 83:
                        var6 = _closure1_slot7;
                        var5 = var6.getGuild;
                        var4 = var4.guild_id;
                        var3 = var5.bind(var6)(var4);
                    case 105:
                        var7.guild = var3;
                        var4 = _closure1_slot17;
                        var3 = {};
                        var6 = var2.command;
                        var6 = var6.applicationId;
                        var3.applicationId = var6;
                        var6 = var1.interactionData;
                        var3.data = var6;
                        var3.context = var7;
                        var6 = _closure1_slot22;
                        var5 = var2.command;
                        var1 = var1.interactionData;
                        var2 = undefined;
                        var1 = var6.bind(var2)(var5, var7, var1);
                        SaveGenerator(address = 176);
                    case 174:
                        return var1;
                    case 176:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun64079_ip = 197;
                            continue _fun64079
                        }
                    case 182:
                        var3.interactionLifecycleOptions = var1;
                        var2 = var4.bind(var2)(var3);
                    case 192:
                        var2 = undefined;
                        return var2;
                    case 197:
                        return var1;
                    case 200:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = function(arg0) { // Original name: enqueueCommandInteraction, environment: var3
        _fun64081: for (var _fun64081_ip = 0;;) switch (_fun64081_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.applicationId;
                var11 = var0.data;
                var2 = var0.context;
                var6 = var0.attachments;
                var5 = var0.maxSizeCallback;
                var7 = var0.onMessageSuccess;
                var _closure2_slot0 = var7;
                var10 = var0.analytics_location;
                var9 = var0.sectionName;
                var3 = var0.source;
                var13 = var0.interactionLifecycleOptions;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var4 = var2.channel;
                var8 = null;
                if (!(var8 != var4)) {
                    _fun64081_ip = 408;
                    continue _fun64081
                }
            case 85:
                var4 = var2.channel;
                var2 = var2.guild;
                var14 = var4.id;
                var12 = var8 == var2;
                var4 = undefined;
                if (var12) {
                    _fun64081_ip = 114;
                    continue _fun64081
                }
            case 109:
                var4 = var2.id;
            case 114:
                var2 = {};
                var2.applicationId = var15;
                var2.channelId = var14;
                var2.guildId = var4;
                var2.data = var11;
                var11 = var13.nonce;
                if (!(var8 == var11)) {
                    _fun64081_ip = 175;
                    continue _fun64081
                }
            case 142:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var12 = 23;
                var12 = var17[var12];
                var16 = var16.bind(var0)(var12);
                var12 = var16.createNonce;
                var11 = var12.bind(var16)();
            case 175:
                var2.nonce = var11;
                var2.attachments = var6;
                var2.maxSizeCallback = var5;
                var2.analytics_location = var10;
                var2.sectionName = var9;
                var2.source = var3;
                _closure2_slot1 = var2;
                var10 = _closure1_slot2;
                var18 = _closure1_slot3;
                var9 = 24;
                var9 = var18[var9];
                var12 = var10.bind(var0)(var9);
                var11 = var12.addQueued;
                var10 = var2.nonce;
                var9 = {};
                var16 = var13.messageId;
                var9.messageId = var16;
                var16 = var13.onCreate;
                var9.onCreate = var16;
                var16 = var13.onSuccess;
                var9.onSuccess = var16;
                var13 = var13.onFailure;
                var9.onFailure = var13;
                var13 = {};
                var17 = _closure1_slot0;
                var16 = 13;
                var16 = var18[var16];
                var16 = var17.bind(var0)(var16);
                var16 = var16.InteractionTypes;
                var16 = var16.APPLICATION_COMMAND;
                var13.interactionType = var16;
                var13.applicationId = var15;
                var13.channelId = var14;
                var9.data = var13;
                var9 = var11.bind(var12)(var10, var9);
                if (!(var8 != var6)) {
                    _fun64081_ip = 355;
                    continue _fun64081
                }
            case 344:
                var9 = var6.length;
                var8 = 0;
                if (!(!(var9 > var8))) {
                    _fun64081_ip = 367;
                    continue _fun64081
                }
            case 355:
                var3 = _closure1_slot21;
                var3 = var3.bind(var0)(var2, var7);
                _fun64081_ip = 408;
                continue _fun64081;
            case 367:
                var21 = var2.nonce;
                var2 = function() { // Original name: stageAttachments, environment: var1
                    var0 = undefined;
                    var3 = _closure1_slot27;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var23 = undefined;
                var22 = var6;
                var20 = var4;
                var19 = var5;
                var3 = var23[var2](var22, var21, var20, var19, var18);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun64083: for (var _fun64083_ip = 0;;) switch (_fun64083_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun64083_ip = 32;
                                continue _fun64083
                            }
                        case 6:
                            var3 = _closure1_slot21;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 408:
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/executeCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: executeCommand, environment: var3
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.retryCommandMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4693, 1676, 1410, 3953, 1613, 6442, 660, 1346, 4504, 806, 6425, 4501, 1636, 7945, 7947, 44, 7948, 4259, 6440, 7567, 3063, 1304, 6502, 6751, 4258, 6750, 7558, 6913, 6501, 6484, 3962, 1234, 3960, 6575, 2]);