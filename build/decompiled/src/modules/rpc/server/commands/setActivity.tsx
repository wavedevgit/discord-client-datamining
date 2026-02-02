// modules/rpc/server/commands/setActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.RPC_SCOPE_CONFIG;
    var11 = var1.RPC_LOCAL_SCOPE;
    var1 = var1.TransportTypes;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ActivityGamePlatforms;
    var _closure1_slot5 = var3;
    var3 = var1.ActivityPartyPrivacy;
    var _closure1_slot6 = var3;
    var3 = var1.ActivityTypes;
    var _closure1_slot7 = var3;
    var3 = var1.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot9 = var1;
    var1 = ['1402418171662569542'];
    var _closure1_slot10 = var1;
    var1 = {};
    var6 = var3.SET_ACTIVITY;
    var3 = {};
    var8 = {};
    var10 = var9.ANY;
    var12 = 3;
    var9 = var5[var12];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var13 = var9.RPC;
    var9 = new Array(3);
    var9[0] = var13;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var12 = var12.RPC_ACTIVITIES_WRITE;
    var9[1] = var12;
    var9[2] = var11;
    var8[var10] = var9;
    var3.scope = var8;
    var8 = function arg0() {
        var8 = arg0;
        var15 = _closure1_slot1;
        var13 = _closure1_slot2;
        var7 = 4;
        var0 = var13[var7];
        var12 = undefined;
        var0 = var15.bind(var12)(var0);
        var1 = var0.bind(var12)(var8);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var8.number;
        var4 = var3.bind(var8)();
        var3 = var4.min;
        var22 = 0;
        var3 = var3.bind(var4)(var22);
        var0.pid = var3;
        var3 = var13[var7];
        var3 = var15.bind(var12)(var3);
        var5 = var3.bind(var12)(var8);
        var4 = var5.keys;
        var3 = {};
        var9 = var8.string;
        var11 = var9.bind(var8)();
        var9 = var11.min;
        var10 = 1;
        var11 = var9.bind(var11)(var10);
        var9 = var11.max;
        var19 = 128;
        var9 = var9.bind(var11)(var19);
        var3.name = var9;
        var9 = var8.string;
        var14 = var9.bind(var8)();
        var9 = var14.min;
        var11 = 2;
        var14 = var9.bind(var14)(var11);
        var9 = var14.max;
        var9 = var9.bind(var14)(var19);
        var3.state = var9;
        var9 = var8.string;
        var14 = var9.bind(var8)();
        var9 = var14.uri;
        var14 = var9.bind(var14)();
        var9 = var14.min;
        var14 = var9.bind(var14)(var10);
        var9 = var14.max;
        var21 = 256;
        var9 = var9.bind(var14)(var21);
        var3.state_url = var9;
        var9 = var8.string;
        var14 = var9.bind(var8)();
        var9 = var14.min;
        var14 = var9.bind(var14)(var11);
        var9 = var14.max;
        var9 = var9.bind(var14)(var19);
        var3.details = var9;
        var9 = var8.string;
        var14 = var9.bind(var8)();
        var9 = var14.uri;
        var14 = var9.bind(var14)();
        var9 = var14.min;
        var14 = var9.bind(var14)(var10);
        var9 = var14.max;
        var9 = var9.bind(var14)(var21);
        var3.details_url = var9;
        var9 = var13[var7];
        var9 = var15.bind(var12)(var9);
        var16 = var9.bind(var12)(var8);
        var14 = var16.keys;
        var9 = {};
        var17 = var8.number;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var17 = var17.bind(var18)(var10);
        var9.start = var17;
        var17 = var8.number;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var17 = var17.bind(var18)(var10);
        var9.end = var17;
        var9 = var14.bind(var16)(var9);
        var3.timestamps = var9;
        var9 = var13[var7];
        var9 = var15.bind(var12)(var9);
        var16 = var9.bind(var12)(var8);
        var14 = var16.keys;
        var9 = {};
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var10);
        var17 = var18.max;
        var20 = 300;
        var17 = var17.bind(var18)(var20);
        var9.large_image = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.large_text = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.uri;
        var18 = var17.bind(var18)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var10);
        var17 = var18.max;
        var17 = var17.bind(var18)(var21);
        var9.large_url = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var10);
        var17 = var18.max;
        var17 = var17.bind(var18)(var20);
        var9.small_image = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.small_text = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.uri;
        var18 = var17.bind(var18)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var10);
        var17 = var18.max;
        var17 = var17.bind(var18)(var21);
        var9.small_url = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var10);
        var17 = var18.max;
        var17 = var17.bind(var18)(var20);
        var9.invite_cover_image = var17;
        var9 = var14.bind(var16)(var9);
        var3.assets = var9;
        var9 = var13[var7];
        var9 = var15.bind(var12)(var9);
        var16 = var9.bind(var12)(var8);
        var14 = var16.keys;
        var9 = {};
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.id = var17;
        var17 = var8.array;
        var20 = var17.bind(var8)();
        var18 = var20.items;
        var17 = var8.number;
        var21 = var17.bind(var8)();
        var17 = var21.min;
        var17 = var17.bind(var21)(var22);
        var18 = var18.bind(var20)(var17);
        var17 = var18.length;
        var17 = var17.bind(var18)(var11);
        var9.size = var17;
        var17 = var8.number;
        var20 = var17.bind(var8)();
        var18 = var20.default;
        var21 = _closure1_slot6;
        var17 = var21.PRIVATE;
        var20 = var18.bind(var20)(var17);
        var18 = var20.valid;
        var22 = var21.PRIVATE;
        var17 = new Array(2);
        var17[0] = var22;
        var21 = var21.PUBLIC;
        var17[1] = var21;
        var17 = var18.bind(var20)(var17);
        var9.privacy = var17;
        var9 = var14.bind(var16)(var9);
        var3.party = var9;
        var9 = var13[var7];
        var9 = var15.bind(var12)(var9);
        var16 = var9.bind(var12)(var8);
        var14 = var16.keys;
        var9 = {};
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.match = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.join = var17;
        var17 = var8.string;
        var18 = var17.bind(var8)();
        var17 = var18.min;
        var18 = var17.bind(var18)(var11);
        var17 = var18.max;
        var17 = var17.bind(var18)(var19);
        var9.spectate = var17;
        var9 = var14.bind(var16)(var9);
        var3.secrets = var9;
        var9 = var8.array;
        var14 = var9.bind(var8)();
        var9 = var14.items;
        var7 = var13[var7];
        var7 = var15.bind(var12)(var7);
        var17 = var7.bind(var12)(var8);
        var16 = var17.keys;
        var7 = {};
        var15 = var8.string;
        var18 = var15.bind(var8)();
        var15 = var18.min;
        var19 = var15.bind(var18)(var10);
        var18 = var19.max;
        var15 = 32;
        var19 = var18.bind(var19)(var15);
        var18 = var19.required;
        var18 = var18.bind(var19)();
        var7.label = var18;
        var18 = var8.string;
        var19 = var18.bind(var8)();
        var18 = var19.uri;
        var19 = var18.bind(var19)();
        var18 = var19.min;
        var20 = var18.bind(var19)(var10);
        var19 = var20.max;
        var18 = 512;
        var19 = var19.bind(var20)(var18);
        var18 = var19.required;
        var18 = var18.bind(var19)();
        var7.url = var18;
        var7 = var16.bind(var17)(var7);
        var9 = var9.bind(var14)(var7);
        var7 = var9.min;
        var9 = var7.bind(var9)(var10);
        var7 = var9.max;
        var7 = var7.bind(var9)(var11);
        var3.buttons = var7;
        var7 = var8.boolean;
        var7 = var7.bind(var8)();
        var3.instance = var7;
        var7 = var8.array;
        var11 = var7.bind(var8)();
        var9 = var11.items;
        var7 = var8.string;
        var14 = var7.bind(var8)();
        var7 = var14.min;
        var14 = var7.bind(var14)(var10);
        var7 = var14.max;
        var7 = var7.bind(var14)(var15);
        var9 = var9.bind(var11)(var7);
        var7 = var9.min;
        var10 = var7.bind(var9)(var10);
        var9 = var10.max;
        var7 = 10;
        var7 = var9.bind(var10)(var7);
        var3.supported_platforms = var7;
        var7 = var8.number;
        var11 = var7.bind(var8)();
        var10 = var11.default;
        var7 = _closure1_slot7;
        var9 = var7.PLAYING;
        var15 = var10.bind(var11)(var9);
        var14 = var15.valid;
        var26 = var7.PLAYING;
        var25 = var7.LISTENING;
        var24 = var7.WATCHING;
        var23 = var7.COMPETING;
        var27 = var15;
        var7 = var27[var14](var26, var25, var24, var23, var22);
        var3.type = var7;
        var7 = var8.number;
        var8 = var7.bind(var8)();
        var7 = var8.optional;
        var10 = var7.bind(var8)();
        var9 = var10.valid;
        var11 = _closure1_slot0;
        var6 = 5;
        var7 = var13[var6];
        var7 = var11.bind(var12)(var7);
        var7 = var7.StatusDisplayTypes;
        var8 = var7.NAME;
        var7 = var13[var6];
        var7 = var11.bind(var12)(var7);
        var7 = var7.StatusDisplayTypes;
        var7 = var7.STATE;
        var6 = var13[var6];
        var6 = var11.bind(var12)(var6);
        var6 = var6.StatusDisplayTypes;
        var6 = var6.DETAILS;
        var6 = var9.bind(var10)(var8, var7, var6);
        var3.status_display_type = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.allow;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var0.activity = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function arg0() {
        _fun98123: for (var _fun98123_ip = 0;;) switch (_fun98123_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.socket;
                var _closure2_slot0 = var7;
                var2 = var0.args;
                var6 = var2.pid;
                var _closure2_slot1 = var6;
                var4 = var2.activity;
                var _closure2_slot2 = var4;
                var0 = var0.isSocketConnected;
                var _closure2_slot3 = var0;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot4;
                var5 = var2.IPC;
                var8 = new Array(3);
                var8[0] = var5;
                var5 = var2.WEBSOCKET;
                var8[1] = var5;
                var2 = var2.POST_MESSAGE;
                var8[2] = var2;
                var5 = var8.includes;
                var2 = var7.transport;
                var2 = var5.bind(var8)(var2);
                if (var2) {
                    _fun98123_ip = 220;
                    continue _fun98123
                }
            case 121:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var9 = var5.bind(var3)(var2);
                var8 = {};
                var2 = _closure1_slot9;
                var2 = var2.INVALID_COMMAND;
                var8.errorCode = var2;
                var11 = var7.transport;
                var2 = global;
                var2 = var2.HermesInternal;
                var10 = var2.concat;
                var5 = 'command not available from "';
                var2 = '" transport';
                var23 = var10.bind(var5)(var11, var2);
                var5 = var9.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var9
                    }
                });
                var25 = var5;
                var24 = var8;
                var2 = new var25[var9](var24, var23, var22);
                var2 = var2 instanceof Object ? var2 : var5;
                throw var2;
            case 220:
                var5 = null;
                if (!(var5 == var6)) {
                    _fun98123_ip = 249;
                    continue _fun98123
                }
            case 226:
                var2 = _closure1_slot4;
                var8 = var2.IPC;
                var2 = var7.transport;
                if (!(var8 !== var2)) {
                    _fun98123_ip = 1485;
                    continue _fun98123
                }
            case 249:
                if (!(var5 != var4)) {
                    _fun98123_ip = 1404;
                    continue _fun98123
                }
            case 256:
                var2 = {};
                var8 = var4.name;
                if (var8) {
                    _fun98123_ip = 282;
                    continue _fun98123
                }
            case 266:
                var8 = var7.application;
                var8 = var8.name;
                var4.name = var8;
            case 282:
                var8 = var7.application;
                var11 = var8.id;
                var4.application_id = var11;
                var9 = var7.transport;
                var8 = _closure1_slot4;
                var8 = var8.POST_MESSAGE;
                var13 = var9 === var8;
                var9 = _closure1_slot5;
                if (var13) {
                    _fun98123_ip = 333;
                    continue _fun98123
                }
            case 325:
                var8 = var9.DESKTOP;
                _fun98123_ip = 339;
                continue _fun98123;
            case 333:
                var8 = var9.EMBEDDED;
            case 339:
                var4.platform = var8;
                var10 = _closure1_slot3;
                var9 = var10.getApplication;
                var12 = var5 != var11;
                var8 = undefined;
                if (!var12) {
                    _fun98123_ip = 367;
                    continue _fun98123
                }
            case 364:
                var8 = var11;
            case 367:
                var16 = var9.bind(var10)(var8);
                var8 = var4.instance;
                var12 = var5 != var8;
                if (!var12) {
                    _fun98123_ip = 388;
                    continue _fun98123
                }
            case 385:
                var12 = var8;
            case 388:
                var8 = var4.party;
                var9 = var5 == var8;
                var11 = undefined;
                if (var9) {
                    _fun98123_ip = 409;
                    continue _fun98123
                }
            case 403:
                var11 = var8.privacy;
            case 409:
                _closure2_slot4 = var11;
                var8 = delete var4.instance;
                var8 = var4.party;
                if (!(var5 != var8)) {
                    _fun98123_ip = 433;
                    continue _fun98123
                }
            case 428:
                var8 = delete var8.privacy;
            case 433:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var10 = var9.bind(var3)(var8);
                var9 = var10.computeActivityFlags;
                var8 = var5 != var16;
                if (!var8) {
                    _fun98123_ip = 497;
                    continue _fun98123
                }
            case 466:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 9;
                var14 = var17[var14];
                var15 = var15.bind(var3)(var14);
                var14 = var15.canLaunchFrame;
                var8 = var14.bind(var15)(var16);
            case 497:
                if (!var8) {
                    _fun98123_ip = 503;
                    continue _fun98123
                }
            case 500:
                var8 = var13;
            case 503:
                var25 = var10;
                var24 = var4;
                var23 = var12;
                var22 = var13;
                var21 = var8;
                var20 = var11;
                var8 = var25[var9](var24, var23, var22, var21, var20, var19);
                var14 = 0;
                if (!(var8 > var14)) {
                    _fun98123_ip = 537;
                    continue _fun98123
                }
            case 531:
                var4.flags = var8;
            case 537:
                var10 = var4.assets;
                _closure2_slot5 = var10;
                var9 = var4.party;
                var16 = var4.secrets;
                var13 = var4.timestamps;
                var11 = var4.buttons;
                var8 = var4.type;
                if (!(var5 == var8)) {
                    _fun98123_ip = 596;
                    continue _fun98123
                }
            case 580:
                var8 = _closure1_slot7;
                var8 = var8.PLAYING;
                var4.type = var8;
            case 596:
                if (!(var5 != var16)) {
                    _fun98123_ip = 855;
                    continue _fun98123
                }
            case 603:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var15 = 10;
                var8 = var8[var15];
                var12 = var12.bind(var3)(var8);
                var8 = var12.values;
                var16 = var8.bind(var12)(var16);
                var12 = var16.filter;
                var8 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var8 = var12.bind(var16)(var8);
                if (!(var5 != var9)) {
                    _fun98123_ip = 803;
                    continue _fun98123
                }
            case 657:
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var16 = var16.bind(var3)(var12);
                var12 = var16.intersection;
                var17 = var9.id;
                var9 = new Array(1);
                var9[0] = var17;
                var9 = var12.bind(var16)(var8, var9);
                var9 = var9.length;
                if (!(var9 > var14)) {
                    _fun98123_ip = 803;
                    continue _fun98123
                }
            case 708:
                var16 = _closure1_slot10;
                var12 = var16.includes;
                var9 = var7.application;
                var9 = var9.id;
                var9 = var12.bind(var16)(var9);
                if (var9) {
                    _fun98123_ip = 803;
                    continue _fun98123
                }
            case 735:
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 6;
                var9 = var16[var9];
                var17 = var12.bind(var3)(var9);
                var16 = {};
                var9 = _closure1_slot9;
                var9 = var9.INVALID_ACTIVITY_SECRET;
                var16.errorCode = var9;
                var9 = var17.prototype;
                var12 = Object.create(var9, {
                    constructor: {
                        value: var17
                    }
                });
                var23 = 'secrets cannot match the party id';
                var25 = var12;
                var24 = var16;
                var9 = new var25[var17](var24, var23, var22);
                var9 = var9 instanceof Object ? var9 : var12;
                throw var9;
            case 803:
                var12 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var12 = var12.bind(var3)(var9);
                var9 = var12.uniq;
                var9 = var9.bind(var12)(var8);
                var9 = var9.length;
                var8 = var8.length;
                if (!(!(var9 < var8))) {
                    _fun98123_ip = 1336;
                    continue _fun98123
                }
            case 848:
                if (!(var5 == var11)) {
                    _fun98123_ip = 1268;
                    continue _fun98123
                }
            case 855:
                if (!(var5 != var11)) {
                    _fun98123_ip = 905;
                    continue _fun98123
                }
            case 859:
                var9 = var11.map;
                var8 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.url;
                    return var0;
                };
                var8 = var9.bind(var11)(var8);
                var2.button_urls = var8;
                var9 = var11.map;
                var8 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.label;
                    return var0;
                };
                var8 = var9.bind(var11)(var8);
                var4.buttons = var8;
            case 905:
                var4.metadata = var2;
                if (!(var5 != var13)) {
                    _fun98123_ip = 1088;
                    continue _fun98123
                }
            case 918:
                var12 = global;
                var8 = var12.Object;
                var2 = var8.keys;
                var11 = var2.bind(var8)(var13);
                var2 = var11.length;
                var2 = var14 < var2;
                var9 = 11;
                var8 = 2;
                var14 = 0;
                if (!var2) {
                    _fun98123_ip = 1088;
                    continue _fun98123
                }
            case 959:
                var15 = var11[var14];
                var16 = var12.Date;
                var2 = var16.now;
                var16 = var2.bind(var16)();
                var2 = var16.toString;
                var2 = var2.bind(var16)();
                var16 = var2.length;
                var17 = var13[var15];
                var2 = var17.toString;
                var2 = var2.bind(var17)();
                var2 = var2.length;
                var2 = var16 - var2;
                if (!(var2 > var8)) {
                    _fun98123_ip = 1076;
                    continue _fun98123
                }
            case 1018:
                var17 = var12.Math;
                var16 = var17.floor;
                var18 = var13[var15];
                var19 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var19.bind(var3)(var2);
                var2 = var2.Millis;
                var2 = var2.SECOND;
                var2 = var18 * var2;
                var2 = var16.bind(var17)(var2);
                var13[var15] = var2;
            case 1076:
                var14 = var14 + 1;
                var2 = var11.length;
                if (var14 < var2) {
                    _fun98123_ip = 959;
                    continue _fun98123
                }
            case 1088:
                if (!(var5 != var10)) {
                    _fun98123_ip = 1226;
                    continue _fun98123
                }
            case 1095:
                var2 = var7.application;
                if (!(var5 != var2)) {
                    _fun98123_ip = 1196;
                    continue _fun98123
                }
            case 1104:
                var2 = var7.application;
                var2 = var2.id;
                if (!(var5 != var2)) {
                    _fun98123_ip = 1196;
                    continue _fun98123
                }
            case 1118:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var9 = var5.bind(var3)(var2);
                var8 = var9.fetchAssetIds;
                var2 = var7.application;
                var5 = var2.id;
                var11 = var10.large_image;
                var2 = new Array(3);
                var2[0] = var11;
                var11 = var10.small_image;
                var2[1] = var11;
                var10 = var10.invite_cover_image;
                var2[2] = var10;
                var5 = var8.bind(var9)(var5, var2);
                _fun98123_ip = 1249;
                continue _fun98123;
            case 1196:
                var2 = global;
                var2 = var2.Error;
                var8 = var2.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var2
                    }
                });
                var25 = var8;
                var2 = new var25[var2](var24);
                var2 = var2 instanceof Object ? var2 : var8;
                throw var2;
            case 1226:
                var2 = global;
                var9 = var2.Promise;
                var8 = var9.resolve;
                var2 = new Array(0);
                var5 = var8.bind(var9)(var2);
            case 1249:
                var2 = var5.then;
                var1 = function(arg0) { // Environment: var1
                    _fun98127: for (var _fun98127_ip = 0;;) switch (_fun98127_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = var6[Symbol.iterator];
                            var6 = var0().next;
                            var2 = var6().value;
                            var1 = var0;
                            var5 = undefined;
                            var1 = var1 === var5;
                            var4 = undefined;
                            if (var1) {
                                _fun98127_ip = 27;
                                continue _fun98127
                            }
                        case 24:
                            var4 = var2;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun98127_ip = 57;
                                continue _fun98127
                            }
                        case 32:
                            var7 = var6().value;
                            var2 = var0;
                            var2 = var2 === var5;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun98127_ip = 57;
                                continue _fun98127
                            }
                        case 51:
                            var3 = var7;
                            var1 = var2;
                        case 57:
                            var2 = undefined;
                            if (var1) {
                                _fun98127_ip = 87;
                                continue _fun98127
                            }
                        case 62:
                            var7 = var6().value;
                            var6 = var0;
                            var6 = var6 === var5;
                            var2 = undefined;
                            var1 = var6;
                            if (var6) {
                                _fun98127_ip = 87;
                                continue _fun98127
                            }
                        case 81:
                            var2 = var7;
                            var1 = var6;
                        case 87:
                            if (var1) {
                                _fun98127_ip = 93;
                                continue _fun98127
                            }
                        case 90:
                            var0.return();
                        case 93:
                            var1 = _closure2_slot5;
                            var6 = null;
                            if (!(var6 != var1)) {
                                _fun98127_ip = 181;
                                continue _fun98127
                            }
                        case 106:
                            if (!(var6 == var4)) {
                                _fun98127_ip = 121;
                                continue _fun98127
                            }
                        case 110:
                            var1 = _closure2_slot5;
                            var1 = delete var1.large_image;
                            _fun98127_ip = 131;
                            continue _fun98127;
                        case 121:
                            var1 = _closure2_slot5;
                            var1.large_image = var4;
                        case 131:
                            if (!(var6 == var3)) {
                                _fun98127_ip = 146;
                                continue _fun98127
                            }
                        case 135:
                            var1 = _closure2_slot5;
                            var1 = delete var1.small_image;
                            _fun98127_ip = 156;
                            continue _fun98127;
                        case 146:
                            var1 = _closure2_slot5;
                            var1.small_image = var3;
                        case 156:
                            if (!(var6 == var2)) {
                                _fun98127_ip = 171;
                                continue _fun98127
                            }
                        case 160:
                            var1 = _closure2_slot5;
                            var1 = delete var1.invite_cover_image;
                            _fun98127_ip = 181;
                            continue _fun98127;
                        case 171:
                            var1 = _closure2_slot5;
                            var1.invite_cover_image = var2;
                        case 181:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var5)();
                            if (var1) {
                                _fun98127_ip = 194;
                                continue _fun98127
                            }
                        case 192:
                            return var5;
                        case 194:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var2 = var4[var2];
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var7 = 'LOCAL_ACTIVITY_UPDATE';
                            var2.type = var7;
                            var8 = _closure2_slot0;
                            var7 = var8.id;
                            var2.socketId = var7;
                            var7 = _closure2_slot1;
                            var2.pid = var7;
                            var7 = _closure2_slot2;
                            var2.activity = var7;
                            var9 = _closure2_slot4;
                            var2.partyPrivacy = var9;
                            var2 = var3.bind(var4)(var2);
                            var3 = var7.secrets;
                            var2 = var7.party;
                            var4 = {};
                            var8 = var8.application;
                            var8 = var8.id;
                            var4.application_id = var8;
                            var8 = var7.type;
                            var4.type = var8;
                            var8 = var7.name;
                            var4.name = var8;
                            var8 = var7.status_display_type;
                            var4.status_display_type = var8;
                            var9 = var7.details;
                            var10 = var6 != var9;
                            var7 = '';
                            var8 = var7;
                            if (!var10) {
                                _fun98127_ip = 359;
                                continue _fun98127
                            }
                        case 356:
                            var8 = var9;
                        case 359:
                            var4.details = var8;
                            var8 = _closure2_slot2;
                            var8 = var8.state;
                            var9 = var6 != var8;
                            if (!var9) {
                                _fun98127_ip = 383;
                                continue _fun98127
                            }
                        case 380:
                            var7 = var8;
                        case 383:
                            var4.state = var7;
                            var7 = _closure2_slot2;
                            var7 = var7.state_url;
                            var7 = var6 != var7;
                            if (var7) {
                                _fun98127_ip = 418;
                                continue _fun98127
                            }
                        case 404:
                            var8 = _closure2_slot2;
                            var8 = var8.details_url;
                            var7 = var6 != var8;
                        case 418:
                            if (var7) {
                                _fun98127_ip = 450;
                                continue _fun98127
                            }
                        case 421:
                            var8 = _closure2_slot2;
                            var9 = var8.assets;
                            var10 = var6 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun98127_ip = 446;
                                continue _fun98127
                            }
                        case 440:
                            var8 = var9.large_url;
                        case 446:
                            var7 = var6 != var8;
                        case 450:
                            if (var7) {
                                _fun98127_ip = 482;
                                continue _fun98127
                            }
                        case 453:
                            var8 = _closure2_slot2;
                            var9 = var8.assets;
                            var10 = var6 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun98127_ip = 478;
                                continue _fun98127
                            }
                        case 472:
                            var8 = var9.small_url;
                        case 478:
                            var7 = var6 != var8;
                        case 482:
                            var4.has_urls = var7;
                            if (!(var6 != var3)) {
                                _fun98127_ip = 532;
                                continue _fun98127
                            }
                        case 493:
                            var7 = var3.match;
                            var7 = !var7;
                            var7 = !var7;
                            var4.has_match_secret = var7;
                            var3 = var3.join;
                            var3 = !var3;
                            var3 = !var3;
                            var4.has_join_secret = var3;
                        case 532:
                            var3 = _closure2_slot5;
                            if (!(var6 != var3)) {
                                _fun98127_ip = 588;
                                continue _fun98127
                            }
                        case 540:
                            var3 = _closure2_slot5;
                            var3 = var3.large_image;
                            if (var3) {
                                _fun98127_ip = 563;
                                continue _fun98127
                            }
                        case 553:
                            var7 = _closure2_slot5;
                            var3 = var7.small_image;
                        case 563:
                            if (var3) {
                                _fun98127_ip = 576;
                                continue _fun98127
                            }
                        case 566:
                            var7 = _closure2_slot5;
                            var3 = var7.invite_cover_image;
                        case 576:
                            var3 = !var3;
                            var3 = !var3;
                            var4.has_images = var3;
                        case 588:
                            if (!(var6 != var2)) {
                                _fun98127_ip = 657;
                                continue _fun98127
                            }
                        case 592:
                            var3 = var2.size;
                            var6 = var6 != var3;
                            var3 = undefined;
                            if (!var6) {
                                _fun98127_ip = 638;
                                continue _fun98127
                            }
                        case 606:
                            var6 = var2.size;
                            var7 = 1;
                            var8 = var6[var7];
                            var6 = 0;
                            var6 = var8 > var6;
                            var3 = undefined;
                            if (!var6) {
                                _fun98127_ip = 638;
                                continue _fun98127
                            }
                        case 629:
                            var6 = var2.size;
                            var3 = var6[var7];
                        case 638:
                            var4.party_max = var3;
                            var2 = var2.id;
                            var4.party_id = var2;
                        case 657:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 13;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.track;
                            var1 = _closure1_slot8;
                            var1 = var1.ACTIVITY_UPDATED;
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = _closure2_slot2;
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var1);
                return var1;
            case 1268:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var5 = {};
                var1 = _closure1_slot9;
                var1 = var1.INVALID_ACTIVITY_SECRET;
                var5.errorCode = var1;
                var1 = var8.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var23 = 'secrets cannot currently be sent with buttons';
                var25 = var2;
                var24 = var5;
                var1 = new var25[var8](var24, var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 1336:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var5 = {};
                var1 = _closure1_slot9;
                var1 = var1.INVALID_ACTIVITY_SECRET;
                var5.errorCode = var1;
                var1 = var8.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var23 = 'secrets must be unique';
                var25 = var2;
                var24 = var5;
                var1 = new var25[var8](var24, var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 1404:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.dispatch;
                var1 = {};
                var8 = 'LOCAL_ACTIVITY_UPDATE';
                var1.type = var8;
                var7 = var7.id;
                var1.socketId = var7;
                var1.pid = var6;
                var1.activity = var4;
                var1 = var2.bind(var5)(var1);
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)(var4);
                return var1;
            case 1485:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot9;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var23 = 'nonzero pid required';
                var25 = var1;
                var24 = var2;
                var0 = new var25[var3](var24, var23, var22);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/setActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3415, 3317, 660, 3300, 7894, 7742, 7891, 806, 5633, 4637, 22, 667, 5618, 795, 2]);