// modules/spotify/SpotifyConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun50063: for (var _fun50063_ip = 0;;) switch (_fun50063_ip) {
        case 0:
            var8 = require;
            var2 = exports;
            var9 = dependencyMap;
            var11 = global;
            var5 = var11.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var3 = var9[var0];
            var0 = undefined;
            var3 = var8.bind(var0)(var3);
            var3 = var3.PlatformTypes;
            var4 = 1;
            var5 = var9[var4];
            var4 = metroImportDefault;
            var5 = var4.bind(var0)(var5);
            var4 = var5.get;
            var3 = var3.SPOTIFY;
            var3 = var4.bind(var5)(var3);
            var6 = var3.name;
            var5 = {};
            var3 = 'track';
            var5.TRACK = var3;
            var3 = 'artist';
            var5.ARTIST = var3;
            var3 = 'album';
            var5.ALBUM = var3;
            var3 = 'playlist';
            var5.PLAYLIST = var3;
            var3 = 'episode';
            var5.EPISODE = var3;
            var3 = 'show';
            var5.SHOW = var3;
            var _closure1_slot0 = var5;
            var4 = {};
            var3 = 'user_activity_play';
            var4.USER_ACTIVITY_PLAY = var3;
            var3 = 'user_activity_sync';
            var4.USER_ACTIVITY_SYNC = var3;
            var3 = 'embed_sync';
            var4.EMBED_SYNC = var3;
            var13 = function arg0() {
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '?utm_source=discord&utm_medium=';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var _closure1_slot1 = var13;
            var10 = var11.Object;
            var7 = var10.freeze;
            var3 = {};
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var16 = '';
            var15 = 'https://api.spotify.com/v1';
            var12 = '/me';
            var12 = var14.bind(var16)(var15, var12);
            var3.PROFILE = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/notifications/player';
            var12 = var14.bind(var16)(var15, var12);
            var3.NOTIFICATIONS_PLAYER = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/player';
            var12 = var14.bind(var16)(var15, var12);
            var3.PLAYER = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/player/devices';
            var12 = var14.bind(var16)(var15, var12);
            var3.PLAYER_DEVICES = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/player/play';
            var12 = var14.bind(var16)(var15, var12);
            var3.PLAYER_PLAY = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/player/pause';
            var12 = var14.bind(var16)(var15, var12);
            var3.PLAYER_PAUSE = var12;
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '/me/player/repeat';
            var12 = var14.bind(var16)(var15, var12);
            var3.PLAYER_REPEAT = var12;
            var12 = function arg0, arg1() {
                _fun50065: for (var _fun50065_ip = 0;;) switch (_fun50065_ip) {
                    case 0:
                        var3 = arguments[2];
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun50065_ip = 13;
                            continue _fun50065
                        }
                    case 9:
                        var3 = 'desktop';
                    case 13:
                        var0 = global;
                        var4 = var0.encodeURIComponent;
                        var1 = arg0;
                        var5 = var4.bind(var2)(var1);
                        var4 = var0.encodeURIComponent;
                        var1 = arg1;
                        var7 = var4.bind(var2)(var1);
                        var1 = _closure1_slot1;
                        var6 = var1.bind(var2)(var3);
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var10 = 'https://open.spotify.com/';
                        var8 = '/';
                        var9 = var5;
                        var0 = var10[var2](var9, var8, var7, var6, var5);
                        return var0;
                }
            };
            var3.WEB_OPEN = var12;
            var12 = function arg0() {
                _fun50066: for (var _fun50066_ip = 0;;) switch (_fun50066_ip) {
                    case 0:
                        var2 = arguments[1];
                        var1 = undefined;
                        if (!(var2 === var1)) {
                            _fun50066_ip = 13;
                            continue _fun50066
                        }
                    case 9:
                        var2 = 'desktop';
                    case 13:
                        var0 = _closure1_slot1;
                        var3 = var0.bind(var1)(var2);
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = 'https://open.spotify.com/embed';
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        return var0;
                }
            };
            var3.EMBED = var12;
            var12 = function arg0, arg1() {
                _fun50067: for (var _fun50067_ip = 0;;) switch (_fun50067_ip) {
                    case 0:
                        var1 = arguments[2];
                        var7 = arguments[3];
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun50067_ip = 14;
                            continue _fun50067
                        }
                    case 12:
                        var1 = true;
                    case 14:
                        if (!(var7 === var2)) {
                            _fun50067_ip = 22;
                            continue _fun50067
                        }
                    case 18:
                        var7 = 'desktop';
                    case 22:
                        var0 = global;
                        var4 = var0.encodeURIComponent;
                        var3 = arg0;
                        var6 = var4.bind(var2)(var3);
                        var4 = var0.encodeURIComponent;
                        var3 = arg1;
                        var5 = var4.bind(var2)(var3);
                        var4 = '';
                        var3 = var4;
                        if (!var1) {
                            _fun50067_ip = 74;
                            continue _fun50067
                        }
                    case 62:
                        var1 = _closure1_slot1;
                        var3 = var1.bind(var2)(var7);
                    case 74:
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var13 = 'spotify';
                        var0 = ':';
                        var14 = var4;
                        var12 = var0;
                        var11 = var6;
                        var10 = var0;
                        var9 = var5;
                        var8 = var3;
                        var0 = var14[var2](var13, var12, var11, var10, var9, var8, var7);
                        return var0;
                }
            };
            var3.PLAYER_OPEN = var12;
            var12 = 'desktop';
            var13 = var13.bind(var0)(var12);
            var11 = var11.HermesInternal;
            var12 = var11.concat;
            var11 = 'https://www.spotify.com/premium/';
            var11 = var12.bind(var11)(var13);
            var3.PREMIUM_SITE = var11;
            var11 = function arg0() {
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = 'https://app.adjust.com/bdyga9?campaign=';
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var3.INSTALL_ATTRIBUTION = var11;
            var11 = 2;
            var11 = var9[var11];
            var12 = var8.bind(var0)(var11);
            var11 = var12.isAndroid;
            var13 = var11.bind(var12)();
            var11 = 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8';
            var12 = var11;
            if (!var13) {
                _fun50063_ip = 559;
                continue _fun50063
            }
        case 553:
            var12 = 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US';
        case 559:
            var3.APP_STORE = var12;
            var3.IOS_APP_STORE = var11;
            var3 = var7.bind(var10)(var3);
            var7 = 3;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'modules/spotify/SpotifyConstants.tsx';
            var7 = var8.bind(var9)(var7);
            var7 = 'spotify';
            var2.SPOTIFY_APP_PROTOCOL = var7;
            var7 = 'spotify:';
            var2.SPOTIFY_PARTY_PREFIX = var7;
            var2.SPOTIFY_PLATFORM_NAME = var6;
            var6 = function arg0() {
                _fun50069: for (var _fun50069_ip = 0;;) switch (_fun50069_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun50069_ip = 29;
                            continue _fun50069
                        }
                    case 12:
                        var2 = var3.startsWith;
                        var1 = 'spotify:';
                        var0 = var2.bind(var3)(var1);
                    case 29:
                        return var0;
                }
            };
            var2.isSpotifyParty = var6;
            var2.SpotifyResourceTypes = var5;
            var2.SpotifyActionTypes = var4;
            var4 = ['open.spotify.com', 'www.spotify.com'];
            var2.SPOTIFY_HOSTNAMES = var4;
            var2.SpotifyEndpoints = var3;
            var1 = function arg0() {
                _fun50070: for (var _fun50070_ip = 0;;) switch (_fun50070_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = 'string';
                        var0 = typeof var1;
                        if (!(var2 === var0)) {
                            _fun50070_ip = 166;
                            continue _fun50070
                        }
                    case 17:
                        var0 = 'track';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 151;
                            continue _fun50070
                        }
                    case 28:
                        var0 = 'artist';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 136;
                            continue _fun50070
                        }
                    case 36:
                        var0 = 'album';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 121;
                            continue _fun50070
                        }
                    case 44:
                        var0 = 'playlist';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 106;
                            continue _fun50070
                        }
                    case 54:
                        var0 = 'episode';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 91;
                            continue _fun50070
                        }
                    case 64:
                        var0 = 'show';
                        if (!(var0 !== var1)) {
                            _fun50070_ip = 76;
                            continue _fun50070
                        }
                    case 72:
                        var0 = null;
                        return var0;
                    case 76:
                        var0 = _closure1_slot0;
                        var0 = var0.SHOW;
                        return var0;
                    case 91:
                        var0 = _closure1_slot0;
                        var0 = var0.EPISODE;
                        return var0;
                    case 106:
                        var0 = _closure1_slot0;
                        var0 = var0.PLAYLIST;
                        return var0;
                    case 121:
                        var0 = _closure1_slot0;
                        var0 = var0.ALBUM;
                        return var0;
                    case 136:
                        var0 = _closure1_slot0;
                        var0 = var0.ARTIST;
                        return var0;
                    case 151:
                        var0 = _closure1_slot0;
                        var0 = var0.TRACK;
                        return var0;
                    case 166:
                        var0 = null;
                        return var0;
                }
            };
            var2.getSpotifyResourceType = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4361, 478, 2]);