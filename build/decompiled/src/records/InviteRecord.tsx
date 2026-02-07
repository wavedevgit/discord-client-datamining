// records/InviteRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun52332: for (var _fun52332_ip = 0;;) switch (_fun52332_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun52332_ip = 74;
                continue _fun52332;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun52336: for (var _fun52336_ip = 0;;) switch (_fun52336_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun52336_ip = 65;
                        continue _fun52336
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun52336_ip = 103;
                    continue _fun52336;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.code;
                    if (var2) {
                        _fun52336_ip = 121;
                        continue _fun52336
                    }
                case 117:
                    var2 = '';
                case 121:
                    var0.code = var2;
                    var2 = var1.temporary;
                    if (var2) {
                        _fun52336_ip = 138;
                        continue _fun52336
                    }
                case 136:
                    var2 = false;
                case 138:
                    var0.temporary = var2;
                    var2 = var1.revoked;
                    if (var2) {
                        _fun52336_ip = 155;
                        continue _fun52336
                    }
                case 153:
                    var2 = false;
                case 155:
                    var0.revoked = var2;
                    var2 = var1.uses;
                    if (var2) {
                        _fun52336_ip = 172;
                        continue _fun52336
                    }
                case 170:
                    var2 = 0;
                case 172:
                    var0.uses = var2;
                    var2 = var1.maxUses;
                    if (var2) {
                        _fun52336_ip = 189;
                        continue _fun52336
                    }
                case 187:
                    var2 = 0;
                case 189:
                    var0.maxUses = var2;
                    var2 = var1.maxAge;
                    if (var2) {
                        _fun52336_ip = 206;
                        continue _fun52336
                    }
                case 204:
                    var2 = 0;
                case 206:
                    var0.maxAge = var2;
                    var2 = var1.createdAt;
                    if (var2) {
                        _fun52336_ip = 249;
                        continue _fun52336
                    }
                case 221:
                    var3 = global;
                    var3 = var3.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var4;
                    var3 = new var13[var3](var12);
                    var2 = var3 instanceof Object ? var3 : var4;
                case 249:
                    var0.createdAt = var2;
                    var2 = var1.channel;
                    var0.channel = var2;
                    var2 = var1.guild;
                    var0.guild = var2;
                    var2 = var1.inviter;
                    if (var2) {
                        _fun52336_ip = 288;
                        continue _fun52336
                    }
                case 286:
                    var2 = null;
                case 288:
                    var0.inviter = var2;
                    var2 = var1.targetType;
                    if (var2) {
                        _fun52336_ip = 305;
                        continue _fun52336
                    }
                case 303:
                    var2 = null;
                case 305:
                    var0.targetType = var2;
                    var2 = var1.targetUser;
                    if (var2) {
                        _fun52336_ip = 322;
                        continue _fun52336
                    }
                case 320:
                    var2 = null;
                case 322:
                    var0.targetUser = var2;
                    var2 = var1.targetApplication;
                    if (var2) {
                        _fun52336_ip = 339;
                        continue _fun52336
                    }
                case 337:
                    var2 = null;
                case 339:
                    var0.targetApplication = var2;
                    var2 = var1.type;
                    if (var2) {
                        _fun52336_ip = 355;
                        continue _fun52336
                    }
                case 353:
                    var2 = null;
                case 355:
                    var0.type = var2;
                    var2 = var1.flags;
                    if (var2) {
                        _fun52336_ip = 371;
                        continue _fun52336
                    }
                case 369:
                    var2 = 0;
                case 371:
                    var0.flags = var2;
                    var1 = var1.roles;
                    if (var1) {
                        _fun52336_ip = 390;
                        continue _fun52336
                    }
                case 386:
                    var1 = new Array(0);
                case 390:
                    var0.roles = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isExpired';
        var5.key = var1;
        var1 = function() {
            _fun52337: for (var _fun52337_ip = 0;;) switch (_fun52337_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.maxAge;
                    var1 = 0;
                    if (!(var3 > var1)) {
                        _fun52337_ip = 97;
                        continue _fun52337
                    }
                case 15:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var0 = var0.createdAt;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.add;
                    var0 = 'seconds';
                    var2 = var1.bind(var2)(var3, var0);
                    var1 = var2.isBefore;
                    var0 = global;
                    var3 = var0.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun52337_ip = 101;
                        continue _fun52337
                    }
                case 97:
                    var0 = false;
                    return var0;
                case 101:
                    var0 = true;
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var6 = 'getExpiresAt';
        var5.key = var6;
        var6 = function() {
            _fun52338: for (var _fun52338_ip = 0;;) switch (_fun52338_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.maxAge;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = inf;
                    if (!var2) {
                        _fun52338_ip = 95;
                        continue _fun52338
                    }
                case 28:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var1.createdAt;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.add;
                    var2 = var1.maxAge;
                    var1 = 'seconds';
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.toDate;
                    var0 = var1.bind(var2)();
                case 95:
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'toString';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.code;
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun52340: for (var _fun52340_ip = 0;;) switch (_fun52340_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var9 = var0;
                    var8 = var1;
                    var3 = copyDataProperties(var9, var8);
                    var4 = var1.max_uses;
                    var3 = 'maxUses';
                    var0[var3] = var4;
                    var4 = var1.max_age;
                    var3 = 'maxAge';
                    var0[var3] = var4;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 6;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var6 = var1.created_at;
                    var3 = null;
                    var7 = var3 != var6;
                    var3 = undefined;
                    if (!var7) {
                        _fun52340_ip = 97;
                        continue _fun52340
                    }
                case 94:
                    var3 = var6;
                case 97:
                    var4 = var4.bind(var5)(var3);
                    var3 = 'createdAt';
                    var0[var3] = var4;
                    var4 = var1.target_type;
                    var3 = 'targetType';
                    var0[var3] = var4;
                    var4 = var1.target_user;
                    var3 = 'targetUser';
                    var0[var3] = var4;
                    var3 = var1.target_application;
                    var1 = 'targetApplication';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var9 = var0;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/InviteRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 3047, 2]);