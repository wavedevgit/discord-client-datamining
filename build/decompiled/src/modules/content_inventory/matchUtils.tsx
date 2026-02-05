// modules/content_inventory/matchUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var10;
    var7 = function arg0() {
        _fun62494: for (var _fun62494_ip = 0;;) switch (_fun62494_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.isListenedSessionEntry;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun62494_ip = 135;
                    continue _fun62494
                }
            case 42:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var3 = var3.bind(var4)(var0);
                var0 = var3.isTopArtistEntry;
                var0 = var0.bind(var3)(var2);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun62494_ip = 133;
                    continue _fun62494
                }
            case 79:
                var3 = var2.extra;
                var3 = var3.media;
                var5 = var3.provider;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.ContentInventoryListenedMediaProvider;
                var3 = var3.SPOTIFY;
                var0 = var5 === var3;
            case 133:
                _fun62494_ip = 221;
                continue _fun62494;
            case 135:
                var2 = var2.extra;
                var3 = var2.entries;
                var2 = 0;
                var3 = var3[var2];
                var5 = null;
                var6 = var5 == var3;
                var2 = undefined;
                if (var6) {
                    _fun62494_ip = 185;
                    continue _fun62494
                }
            case 164:
                var3 = var3.media;
                var5 = var5 == var3;
                var2 = undefined;
                if (var5) {
                    _fun62494_ip = 185;
                    continue _fun62494
                }
            case 179:
                var2 = var3.provider;
            case 185:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ContentInventoryListenedMediaProvider;
                var1 = var1.SPOTIFY;
                var0 = var2 === var1;
            case 221:
                return var0;
        }
    };
    var _closure1_slot6 = var7;
    var6 = function arg0() {
        _fun62495: for (var _fun62495_ip = 0;;) switch (_fun62495_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.isWatchedMediaEntry;
                var0 = var0.bind(var3)(var2);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun62495_ip = 68;
                    continue _fun62495
                }
            case 48:
                var2 = var2.extra;
                var2 = var2.application_id;
                var1 = _closure1_slot5;
                var0 = var2 === var1;
            case 68:
                return var0;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function arg0, arg1() {
        _fun62496: for (var _fun62496_ip = 0;;) switch (_fun62496_ip) {
            case 0:
                var4 = arg1;
                var0 = arg0;
                var3 = var0.extra;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun62496_ip = 111;
                    continue _fun62496
                }
            case 21:
                var1 = 'application_id';
                var1 = var1 in var4;
                if (!var1) {
                    _fun62496_ip = 48;
                    continue _fun62496
                }
            case 32:
                var5 = var4.application_id;
                var2 = var3.application_id;
                var1 = var5 === var2;
            case 48:
                if (var1) {
                    _fun62496_ip = 108;
                    continue _fun62496
                }
            case 51:
                var2 = 'game_name';
                var2 = var2 in var3;
                if (var2) {
                    _fun62496_ip = 90;
                    continue _fun62496
                }
            case 62:
                var2 = 'activity_name';
                var2 = var2 in var3;
                if (!var2) {
                    _fun62496_ip = 88;
                    continue _fun62496
                }
            case 73:
                var6 = var4.name;
                var5 = var3.activity_name;
                var2 = var6 === var5;
            case 88:
                _fun62496_ip = 105;
                continue _fun62496;
            case 90:
                var4 = var4.name;
                var3 = var3.game_name;
                var2 = var4 === var3;
            case 105:
                var1 = var2;
            case 108:
                var0 = var1;
            case 111:
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function arg0, arg1() {
        _fun62497: for (var _fun62497_ip = 0;;) switch (_fun62497_ip) {
            case 0:
                var2 = _closure1_slot6;
                var3 = undefined;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = !var2;
                var0 = !var0;
                if (!var2) {
                    _fun62497_ip = 60;
                    continue _fun62497
                }
            case 26:
                var2 = _closure1_slot4;
                var1 = arg1;
                var4 = var1.party;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun62497_ip = 55;
                    continue _fun62497
                }
            case 50:
                var1 = var4.id;
            case 55:
                var0 = var2.bind(var3)(var1);
            case 60:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0, arg1() {
        _fun62498: for (var _fun62498_ip = 0;;) switch (_fun62498_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var1);
                var3 = !var3;
                if (var3) {
                    _fun62498_ip = 54;
                    continue _fun62498
                }
            case 42:
                var0 = _closure1_slot7;
                var0 = var0.bind(var4)(var2);
                var3 = !var0;
            case 54:
                var0 = !var3;
                if (var3) {
                    _fun62498_ip = 82;
                    continue _fun62498
                }
            case 60:
                var2 = var2.extra;
                var2 = var2.media_title;
                var1 = var1.details;
                var0 = var2 === var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var8 = var8.ActivityTypes;
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.isSpotifyParty;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.CRUNCHYROLL_CLIENT_ID;
    var _closure1_slot5 = var8;
    var8 = 7;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/content_inventory/matchUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.isSpotifyEntry = var7;
    var2.isCrunchyrollEntry = var6;
    var2.isMatchingApplicationActivity = var5;
    var2.isMatchingListeningActivity = var4;
    var2.isMatchingWatchActivity = var3;
    var1 = function arg0, arg1() {
        _fun62499: for (var _fun62499_ip = 0;;) switch (_fun62499_ip) {
            case 0:
                var7 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var4 = var7.filter;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var6 = undefined;
                var3 = var5.bind(var6)(var3);
                var3 = var3.isEntryActive;
                var4 = var4.bind(var7)(var3);
                var5 = var0.type;
                var3 = _closure1_slot3;
                var3 = var3.PLAYING;
                if (!(var5 !== var3)) {
                    _fun62499_ip = 221;
                    continue _fun62499
                }
            case 75:
                var5 = var0.type;
                var3 = _closure1_slot3;
                var3 = var3.LISTENING;
                if (!(var5 !== var3)) {
                    _fun62499_ip = 168;
                    continue _fun62499
                }
            case 94:
                var5 = var0.type;
                var0 = _closure1_slot3;
                var3 = var0.WATCHING;
                var0 = undefined;
                if (!(var5 === var3)) {
                    _fun62499_ip = 166;
                    continue _fun62499
                }
            case 115:
                var5 = var7.filter;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 3;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.isWatchedMediaEntry;
                var7 = var5.bind(var7)(var3);
                var5 = var7.find;
                var3 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var5.bind(var7)(var3);
            case 166:
                _fun62499_ip = 219;
                continue _fun62499;
            case 168:
                var5 = var4.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 3;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.isListenedSessionEntry;
                var7 = var5.bind(var4)(var3);
                var5 = var7.find;
                var3 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var5.bind(var7)(var3);
            case 219:
                _fun62499_ip = 272;
                continue _fun62499;
            case 221:
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isGamingLikeEntry;
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 272:
                return var0;
        }
    };
    var2.findMatchingEntry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5653, 5879, 7851, 7857, 7802, 6865, 2]);