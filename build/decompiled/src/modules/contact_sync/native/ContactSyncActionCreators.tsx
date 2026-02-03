// modules/contact_sync/native/ContactSyncActionCreators.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var3.FriendDiscoveryFlags;
    var _closure1_slot6 = var6;
    var3 = var3.PlatformTypes;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun81097: for (var _fun81097_ip = 0;;) switch (_fun81097_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun81097_ip = 488;
                            continue _fun81097
                        }
                    case 13:
                        var10 = var1.phone;
                        var8 = var1.email;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 3;
                        var1 = var1[var5];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var3 = var1.FriendDiscoverySettings;
                        var1 = var3.getSetting;
                        var12 = var1.bind(var3)();
                        var4 = _closure1_slot4;
                        var3 = var4.getLocalAccount;
                        var1 = _closure1_slot7;
                        var1 = var1.CONTACTS;
                        var1 = var3.bind(var4)(var1);
                        var9 = null;
                        var3 = var9 == var1;
                        var11 = undefined;
                        if (var3) {
                            _fun81097_ip = 107;
                            continue _fun81097
                        }
                    case 102:
                        var11 = var1.name;
                    case 107:
                        var13 = var12;
                        if (!(var9 != var10)) {
                            _fun81097_ip = 157;
                            continue _fun81097
                        }
                    case 114:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.setFlag;
                        var1 = _closure1_slot6;
                        var1 = var1.FIND_BY_PHONE;
                        var13 = var3.bind(var4)(var12, var1, var10);
                    case 157:
                        var4 = var13;
                        if (!(var9 != var8)) {
                            _fun81097_ip = 207;
                            continue _fun81097
                        }
                    case 164:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var6 = var3.bind(var2)(var1);
                        var3 = var6.setFlag;
                        var1 = _closure1_slot6;
                        var1 = var1.FIND_BY_EMAIL;
                        var4 = var3.bind(var6)(var13, var1, var8);
                    case 207:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var2)(var1);
                        var3 = var1.FriendDiscoverySettings;
                        var1 = var3.updateSetting;
                        var1 = var1.bind(var3)(var4);
                        SaveGenerator(address = 245);
                    case 243:
                        return var1;
                    case 245:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81097_ip = 485;
                            continue _fun81097
                        }
                    case 254:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot5;
                        var4 = var3.USER_DISCOVERY_UPDATED;
                        var3 = {};
                        var13 = 'string';
                        var11 = typeof var11;
                        var11 = var13 === var11;
                        var3.has_name = var11;
                        if (!(var9 == var10)) {
                            _fun81097_ip = 355;
                            continue _fun81097
                        }
                    case 313:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 4;
                        var11 = var14[var11];
                        var14 = var13.bind(var2)(var11);
                        var13 = var14.hasFlag;
                        var11 = _closure1_slot6;
                        var11 = var11.FIND_BY_PHONE;
                        var10 = var13.bind(var14)(var12, var11);
                    case 355:
                        var3.discoverable_phone = var10;
                        if (!(var9 == var8)) {
                            _fun81097_ip = 408;
                            continue _fun81097
                        }
                    case 366:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 4;
                        var9 = var11[var9];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.hasFlag;
                        var9 = _closure1_slot6;
                        var9 = var9.FIND_BY_EMAIL;
                        var8 = var10.bind(var11)(var12, var9);
                    case 408:
                        var3.discoverable_email = var8;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 6;
                        var8 = var10[var8];
                        var9 = var9.bind(var2)(var8);
                        var8 = var9.isContactSyncEnabled;
                        var11 = _closure1_slot4;
                        var10 = var11.getLocalAccount;
                        var7 = _closure1_slot7;
                        var7 = var7.CONTACTS;
                        var7 = var10.bind(var11)(var7);
                        var7 = var8.bind(var9)(var7);
                        var3.contact_sync_enabled = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 485:
                        return var1;
                    case 488:
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
    var6 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun81101: for (var _fun81101_ip = 0;;) switch (_fun81101_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81101_ip = 189;
                            continue _fun81101
                        }
                    case 13:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var6 = var7.update;
                        var1 = _closure1_slot7;
                        var5 = var1.CONTACTS;
                        var4 = {};
                        var4.name = var8;
                        var1 = '@me';
                        var1 = var6.bind(var7)(var5, var1, var4);
                        SaveGenerator(address = 77);
                    case 75:
                        return var1;
                    case 77:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun81101_ip = 186;
                            continue _fun81101
                        }
                    case 83:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot5;
                        var4 = var3.NAME_SUBMITTED;
                        var3 = {};
                        var7 = null;
                        var10 = var7 != var8;
                        var9 = 1;
                        if (!var10) {
                            _fun81101_ip = 153;
                            continue _fun81101
                        }
                    case 132:
                        var11 = var8.split;
                        var10 = ' ';
                        var10 = var11.bind(var8)(var10);
                        var9 = var10.length;
                    case 153:
                        var3.num_words = var9;
                        var9 = var7 != var8;
                        var7 = 0;
                        if (!var9) {
                            _fun81101_ip = 172;
                            continue _fun81101
                        }
                    case 167:
                        var7 = var8.length;
                    case 172:
                        var3.num_chars = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 186:
                        return var1;
                    case 189:
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
    var7 = var3.bind(var0)();
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun81105: for (var _fun81105_ip = 0;;) switch (_fun81105_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun81105_ip = 650;
                            continue _fun81105
                        }
                    case 13:
                        var5 = _closure1_slot4;
                        var4 = var5.getLocalAccount;
                        var2 = _closure1_slot7;
                        var2 = var2.CONTACTS;
                        var4 = var4.bind(var5)(var2);
                        var8 = null;
                        var5 = var8 == var4;
                        var2 = undefined;
                        var7 = undefined;
                        if (var5) {
                            _fun81105_ip = 59;
                            continue _fun81105
                        }
                    case 54:
                        var7 = var4.id;
                    case 59:
                        var9 = var1.enabled;
                        var10 = var1.name;
                        if (!(var8 != var7)) {
                            _fun81105_ip = 309;
                            continue _fun81105
                        }
                    case 76:
                        if (!(var2 === var10)) {
                            _fun81105_ip = 139;
                            continue _fun81105
                        }
                    case 80:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.setFriendSync;
                        var1 = _closure1_slot7;
                        var1 = var1.CONTACTS;
                        var1 = var4.bind(var5)(var1, var7, var9);
                        SaveGenerator(address = 127);
                    case 125:
                        return var1;
                    case 127:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (!var4) {
                            _fun81105_ip = 489;
                            continue _fun81105
                        }
                    case 136:
                        return var1;
                    case 139:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var6 = var4.bind(var2)(var1);
                        var5 = var6.update;
                        var1 = _closure1_slot7;
                        var4 = var1.CONTACTS;
                        var1 = {};
                        var1.friend_sync = var9;
                        var1.name = var10;
                        var1 = var5.bind(var6)(var4, var7, var1);
                        SaveGenerator(address = 197);
                    case 195:
                        return var1;
                    case 197:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun81105_ip = 306;
                            continue _fun81105
                        }
                    case 203:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot5;
                        var5 = var4.NAME_SUBMITTED;
                        var4 = {};
                        var12 = var8 != var10;
                        var11 = 1;
                        if (!var12) {
                            _fun81105_ip = 271;
                            continue _fun81105
                        }
                    case 250:
                        var13 = var10.split;
                        var12 = ' ';
                        var12 = var13.bind(var10)(var12);
                        var11 = var12.length;
                    case 271:
                        var4.num_words = var11;
                        var12 = var8 != var10;
                        var11 = 0;
                        if (!var12) {
                            _fun81105_ip = 290;
                            continue _fun81105
                        }
                    case 285:
                        var11 = var10.length;
                    case 290:
                        var4.num_chars = var11;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun81105_ip = 489;
                        continue _fun81105;
                    case 306:
                        return var1;
                    case 309:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var11 = var4.bind(var2)(var1);
                        var7 = var11.connect;
                        var1 = _closure1_slot7;
                        var18 = var1.CONTACTS;
                        var5 = {};
                        var5.friend_sync = var9;
                        var17 = '@me';
                        var15 = arg1;
                        var19 = var11;
                        var16 = var10;
                        var14 = var5;
                        var1 = var19[var7](var18, var17, var16, var15, var14, var13);
                        SaveGenerator(address = 378);
                    case 376:
                        return var1;
                    case 378:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun81105_ip = 647;
                            continue _fun81105
                        }
                    case 387:
                        if (!(var2 !== var10)) {
                            _fun81105_ip = 489;
                            continue _fun81105
                        }
                    case 391:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot5;
                        var5 = var4.NAME_SUBMITTED;
                        var4 = {};
                        var12 = var8 != var10;
                        var11 = 1;
                        if (!var12) {
                            _fun81105_ip = 459;
                            continue _fun81105
                        }
                    case 438:
                        var13 = var10.split;
                        var12 = ' ';
                        var12 = var13.bind(var10)(var12);
                        var11 = var12.length;
                    case 459:
                        var4.num_words = var11;
                        var11 = var8 != var10;
                        var8 = 0;
                        if (!var11) {
                            _fun81105_ip = 478;
                            continue _fun81105
                        }
                    case 473:
                        var8 = var10.length;
                    case 478:
                        var4.num_chars = var8;
                        var4 = var6.bind(var7)(var5, var4);
                    case 489:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var4 = var7.bind(var2)(var4);
                        var5 = var4.FriendDiscoverySettings;
                        var4 = var5.getSetting;
                        var10 = var4.bind(var5)();
                        var5 = 4;
                        var4 = var6[var5];
                        var12 = var7.bind(var2)(var4);
                        var11 = var12.hasFlag;
                        var4 = _closure1_slot6;
                        var8 = var4.FIND_BY_PHONE;
                        var8 = var11.bind(var12)(var10, var8);
                        var5 = var6[var5];
                        var7 = var7.bind(var2)(var5);
                        var5 = var7.hasFlag;
                        var4 = var4.FIND_BY_EMAIL;
                        var7 = var5.bind(var7)(var10, var4);
                        var5 = _closure1_slot1;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot5;
                        var4 = var3.CONTACT_SYNC_TOGGLED;
                        var3 = {};
                        var3.is_enabled = var9;
                        var3.am_discoverable_phone = var8;
                        var3.am_discoverable_email = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 647:
                        return var1;
                    case 650:
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
    var3 = var1.bind(var0)();
    var1 = {};
    var1.updateName = var7;
    var1.updateDiscoverability = var6;
    var1.updateContactSyncEnabled = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/ContactSyncActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4519, 660, 1348, 1384, 795, 10321, 4521, 2]);