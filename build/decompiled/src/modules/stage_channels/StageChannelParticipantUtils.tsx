// modules/stage_channels/StageChannelParticipantUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = var3.Millis;
    var6 = var3.DAY;
    var3 = 1;
    var3 = var3 * var6;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/StageChannelParticipantUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67865: for (var _fun67865_ip = 0;;) switch (_fun67865_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var3.bind(var4)(var1);
                var3 = var5.isNewUser;
                var1 = var2.user;
                var1 = var3.bind(var5)(var1);
                if (var1) {
                    _fun67865_ip = 446;
                    continue _fun67865
                }
            case 50:
                var1 = var2.member;
                var3 = null;
                var5 = var3 == var1;
                var7 = undefined;
                if (var5) {
                    _fun67865_ip = 73;
                    continue _fun67865
                }
            case 67:
                var7 = var1.joinedAt;
            case 73:
                if (!(var3 != var7)) {
                    _fun67865_ip = 387;
                    continue _fun67865
                }
            case 80:
                var1 = var2.member;
                if (!(var3 != var1)) {
                    _fun67865_ip = 116;
                    continue _fun67865
                }
            case 90:
                var1 = var2.member;
                var1 = var1.roles;
                var5 = var1.length;
                var1 = 0;
                if (!(!(var5 > var1))) {
                    _fun67865_ip = 301;
                    continue _fun67865
                }
            case 116:
                var1 = global;
                var5 = var1.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var6;
                var5 = new var11[var5](var10);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.getTime;
                var5 = var5.bind(var6)();
                var6 = var1.Date;
                var1 = var6.parse;
                var1 = var1.bind(var6)(var7);
                var5 = var5 - var1;
                var1 = _closure1_slot2;
                if (!(!(var5 < var1))) {
                    _fun67865_ip = 242;
                    continue _fun67865
                }
            case 183:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 2;
                var5 = var8[var1];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.u0gUWt;
                var1 = var5.bind(var6)(var1);
                _fun67865_ip = 299;
                continue _fun67865;
            case 242:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 2;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.IKE48n;
                var1 = var6.bind(var7)(var5);
            case 299:
                _fun67865_ip = 385;
                continue _fun67865;
            case 301:
                var5 = var2.role;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun67865_ip = 321;
                    continue _fun67865
                }
            case 316:
                var2 = var5.name;
            case 321:
                if (!(var3 == var2)) {
                    _fun67865_ip = 382;
                    continue _fun67865
                }
            case 325:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3["97/NdO"];
                var2 = var5.bind(var6)(var3);
            case 382:
                var1 = var2;
            case 385:
                _fun67865_ip = 444;
                continue _fun67865;
            case 387:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.CQmzib;
                var1 = var3.bind(var5)(var2);
            case 444:
                return var1;
            case 446:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.VaCdhQ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.participantMemberInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 3227, 1234, 2]);