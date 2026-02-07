// modules/rpc/native/server/commands/activities.tsx
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
    var11 = var1.RPC_AUTHENTICATED_SCOPE;
    var12 = var1.RPC_LOCAL_SCOPE;
    var10 = var1.RPC_SCOPE_CONFIG;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.InstantInviteSources;
    var _closure1_slot4 = var3;
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativePermissionTypes;
    var _closure1_slot6 = var1;
    var1 = {};
    var8 = var3.OPEN_INVITE_DIALOG;
    var6 = {};
    var13 = {};
    var15 = var10.ANY;
    var9 = 4;
    var14 = var5[var9];
    var14 = var4.bind(var0)(var14);
    var14 = var14.OAuth2Scopes;
    var16 = var14.RPC;
    var14 = new Array(3);
    var14[0] = var16;
    var14[1] = var12;
    var14[2] = var11;
    var13[var15] = var14;
    var6.scope = var13;
    var13 = function arg0() {
        _fun98841: for (var _fun98841_ip = 0;;) switch (_fun98841_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.socket;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.validateOpenInviteDialog;
                var1 = var1.bind(var2)();
                var5 = var1.channel;
                var1 = var1.frame;
                var6 = null;
                if (!(var6 == var1)) {
                    _fun98841_ip = 138;
                    continue _fun98841
                }
            case 61:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.showInstantInviteActionSheet;
                var1 = {};
                var8 = _closure1_slot4;
                var8 = var8.ACTIVITY_INVITE;
                var1.source = var8;
                var7 = var7.application;
                var7 = var7.id;
                var8 = var6 != var7;
                var6 = undefined;
                if (!var8) {
                    _fun98841_ip = 125;
                    continue _fun98841
                }
            case 122:
                var6 = var7;
            case 125:
                var1.targetApplicationId = var6;
                var1 = var2.bind(var4)(var5, var1);
                return var3;
            case 138:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot5;
                var0 = var0.UNKNOWN_ERROR;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = 'Cannot support frames (yet)';
                var11 = var1;
                var10 = var2;
                var0 = new var11[var3](var10, var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var13;
    var1[var8] = var6;
    var6 = var3.INITIATE_IMAGE_UPLOAD;
    var3 = {};
    var8 = {};
    var10 = var10.ANY;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var13 = var9.RPC;
    var9 = new Array(3);
    var9[0] = var13;
    var9[1] = var12;
    var9[2] = var11;
    var8[var10] = var9;
    var3.scope = var8;
    var7 = function arg0() {
        var1 = arg0;
        var1 = var1.socket;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98844: for (var _fun98844_ip = 0;;) switch (_fun98844_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98844_ip = 730;
                            continue _fun98844
                        }
                    case 10:
                        var1 = _closure2_slot0;
                        var1 = var1.application;
                        var10 = var1.id;
                        var7 = null;
                        if (!(var7 != var10)) {
                            _fun98844_ip = 657;
                            continue _fun98844
                        }
                    case 36:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var4)();
                        var3 = var7 == var2;
                        var9 = undefined;
                        if (var3) {
                            _fun98844_ip = 79;
                            continue _fun98844
                        }
                    case 74:
                        var9 = var2.id;
                    case 79:
                        if (!(var7 != var9)) {
                            _fun98844_ip = 589;
                            continue _fun98844
                        }
                    case 86:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.requestPermission;
                        var2 = _closure1_slot6;
                        var2 = var2.PHOTOS;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.catch;
                        var2 = function() { // Environment: var2
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot5;
                            var0 = var0.UNKNOWN_ERROR;
                            var2.errorCode = var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = 'Failed requesting photo permissions';
                            var6 = var1;
                            var5 = var2;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        };
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 151);
                    case 149:
                        return var2;
                    case 151:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98844_ip = 586;
                            continue _fun98844
                        }
                    case 160:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        if (var2) {
                            _fun98844_ip = 231;
                            continue _fun98844
                        }
                    case 171:
                        var3 = 6;
                        var3 = var6[var3];
                        var12 = var5.bind(var4)(var3);
                        var11 = {};
                        var3 = _closure1_slot5;
                        var3 = var3.UNKNOWN_ERROR;
                        var11.errorCode = var3;
                        var3 = var12.prototype;
                        var8 = Object.create(var3, {
                            constructor: {
                                value: var12
                            }
                        });
                        var14 = 'Missing photo permissions';
                        var16 = var8;
                        var15 = var11;
                        var3 = new var16[var12](var15, var14, var13);
                        var3 = var3 instanceof Object ? var3 : var8;
                        throw var3;
                    case 231:
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.launchImageLibraryAsync;
                        var3 = {
                            'mediaType': 'photo',
                            'includeBase64': false,
                            'selectionLimit': 1
                        };
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 272);
                    case 270:
                        return var3;
                    case 272:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun98844_ip = 583;
                            continue _fun98844
                        }
                    case 281:
                        var6 = var3.assets;
                        var5 = 0;
                        var11 = var6[var5];
                        if (!(var7 != var11)) {
                            _fun98844_ip = 515;
                            continue _fun98844
                        }
                    case 300:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 11;
                        var5 = var8[var5];
                        var8 = var6.bind(var4)(var5);
                        var6 = var8.uploadImageAttachment;
                        var5 = {};
                        var12 = var11.fileName;
                        var5.name = var12;
                        var12 = var11.type;
                        var5.type = var12;
                        var11 = var11.uri;
                        var5.uri = var11;
                        var5 = var6.bind(var8)(var10, var9, var5);
                        SaveGenerator(address = 367);
                    case 365:
                        return var5;
                    case 367:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun98844_ip = 512;
                            continue _fun98844
                        }
                    case 376:
                        if (!(var7 != var5)) {
                            _fun98844_ip = 431;
                            continue _fun98844
                        }
                    case 380:
                        var6 = var5.url;
                        if (!(var7 != var6)) {
                            _fun98844_ip = 431;
                            continue _fun98844
                        }
                    case 389:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 12;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var5 instanceof var6;
                        if (var6) {
                            _fun98844_ip = 431;
                            continue _fun98844
                        }
                    case 416:
                        var6 = {};
                        var7 = var5.url;
                        var6.image_url = var7;
                        return var6;
                    case 431:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var6 = var8[var6];
                        var9 = var7.bind(var4)(var6);
                        var8 = {};
                        var6 = _closure1_slot5;
                        var6 = var6.UNKNOWN_ERROR;
                        var8.errorCode = var6;
                        var6 = global;
                        var7 = var6.JSON;
                        var6 = var7.stringify;
                        var14 = var6.bind(var7)(var5);
                        var7 = var9.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var16 = var7;
                        var15 = var8;
                        var6 = new var16[var9](var15, var14, var13);
                        var6 = var6 instanceof Object ? var6 : var7;
                        throw var6;
                    case 512:
                        return var5;
                    case 515:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 6;
                        var5 = var7[var5];
                        var8 = var6.bind(var4)(var5);
                        var7 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.UNKNOWN_ERROR;
                        var7.errorCode = var5;
                        var5 = var8.prototype;
                        var6 = Object.create(var5, {
                            constructor: {
                                value: var8
                            }
                        });
                        var14 = 'No image selected';
                        var16 = var6;
                        var15 = var7;
                        var5 = new var16[var8](var15, var14, var13);
                        var5 = var5 instanceof Object ? var5 : var6;
                        throw var5;
                    case 583:
                        return var3;
                    case 586:
                        return var2;
                    case 589:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = {};
                        var1 = _closure1_slot5;
                        var1 = var1.UNKNOWN_ERROR;
                        var3.errorCode = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var14 = 'Unable to find selected channel';
                        var16 = var2;
                        var15 = var3;
                        var1 = new var16[var4](var15, var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 657:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = {};
                        var1 = _closure1_slot5;
                        var1 = var1.INVALID_COMMAND;
                        var3.errorCode = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var14 = 'No application.';
                        var16 = var2;
                        var15 = var3;
                        var1 = new var16[var4](var15, var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 730:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/native/server/commands/activities.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3357, 660, 4013, 3340, 12865, 7998, 8400, 12854, 4014, 4105, 7983, 3353, 2]);