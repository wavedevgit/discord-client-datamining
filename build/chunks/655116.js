/** Chunk was on web.js **/
/** chunk id: 655116, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a;
n.d(t, {
    A: () => eF
}), n(896048), n(457529), n(747238), n(321073), n(812715), n(938796);
var s, o = n(735438),
    l = n.n(o),
    c = n(158390),
    u = n(311907),
    d = n(52133),
    f = n(451988),
    p = n(73153),
    _ = n(717558),
    h = n(573648),
    m = n(504337),
    g = n(626584),
    E = n(15285),
    y = n(961350),
    b = n(962173),
    O = n(885576),
    v = n(290863),
    A = n(485296),
    I = n(977997),
    S = n(954571),
    T = n(139675),
    C = n(927813),
    N = n(403362),
    w = n(107750),
    R = n(272984),
    P = n(652215);

function D(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            D(e, t, n[t])
        })
    }
    return e
}

function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function j(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let M = h.A.get(P.fg2.SPOTIFY),
    k = "wss://dealer.spotify.com/?access_token=",
    U = "hm://pusher/v1/connections/",
    G = 30 * C.A.Millis.SECOND,
    V = 30 * C.A.Millis.SECOND,
    F = 100,
    B = 5 * C.A.Millis.MINUTE,
    H = 5 * C.A.Millis.SECOND,
    Y = 1.5 * C.A.Millis.SECOND,
    W = "Computer",
    K = 5,
    z = +C.A.Millis.MINUTE,
    q = 3 * C.A.Millis.SECOND,
    Z = 128,
    X = "message",
    Q = "ping",
    J = "single",
    $ = new g.A("Spotify"),
    ee = new f.Ep,
    et = new f.Ep,
    en = new f.Ep,
    er = new f.Ep,
    ei = new f.Ep,
    ea = {},
    es = {},
    eo = {},
    el = !1,
    ec = null;

function eu() {
    for (let e in ea) {
        let t = ea[e];
        if (!t.connected || null == es[e]) continue;
        let n = es[e].find(e => e.is_active);
        if (null != n) return {
            socket: t,
            device: n
        }
    }
}

function ed(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > Y ? i : r
}

function ef(e) {
    p.h.dispatch({
        type: "SPOTIFY_PLAYER_STATE",
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null
    })
}

function ep(e) {
    return v.A.findActivity(e, e => null != e.party && null != e.party.id && (0, R.pH)(e.party.id))
}
let e_ = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eh {
    get connected() {
        return null != this.socket && e_.has(this.socket.readyState)
    }
    connect() {
        this.connected || this._requestedConnect || ($.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eU(this.accountId, this.accessToken).then(() => {
            this._requestedConnect = !1, this.socket = new WebSocket("".concat(k).concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
        }).catch(e => {
            $.error(e), this._requestedConnect = !1, this.handleClose()
        }))
    }
    disconnect() {
        this._requestedDisconnect = !0, this.backoff.cancel();
        try {
            var e;
            null == (e = this.socket) || e.close()
        } catch (e) {}
    }
    ping() {
        var e;
        this.connected && (null == (e = this.socket) || e.send(JSON.stringify({
            type: Q
        })))
    }
    handleOpen() {
        $.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, w.E$)(this.accountId, this.accessToken), (0, w.oG)(this.accountId, this.accessToken)
    }
    handleMessage(e) {
        let {
            data: t
        } = e;
        if ("string" != typeof t) return;
        let {
            type: n,
            uri: r,
            payloads: i
        } = JSON.parse(t);
        if (n === X) {
            if ("string" == typeof r && r.startsWith(U)) this.connectionId = decodeURIComponent(r.split(U)[1]), (0, w.tO)(this.accountId, this.accessToken, this.connectionId);
            else if (Array.isArray(i)) {
                for (let {
                        events: e
                    }
                    of i)
                    if (null != e)
                        for (let t of e) this.handleEvent(t)
            }
        }
    }
    handleClose() {
        if (this.pingInterval.stop(), !this._requestedDisconnect) try {
            let e = this.backoff.fail(() => {
                this._requestedDisconnect || this.connect()
            });
            $.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
        } catch (e) {}
    }
    handleEvent(e) {
        let {
            type: t,
            event: n
        } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ek(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange()
        }
    }
    constructor(e, t) {
        D(this, "accessToken", void 0), D(this, "accountId", void 0), D(this, "connectionId", void 0), D(this, "isPremium", void 0), D(this, "pingInterval", void 0), D(this, "backoff", void 0), D(this, "socket", void 0), D(this, "_requestedDisconnect", !1), D(this, "_requestedConnect", !1), D(this, "handleDeviceStateChange", l().throttle(() => {
            (0, w.oG)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken)
        }, q)), this.accountId = e, this.accessToken = t, this.pingInterval = new f.IX, this.backoff = new c.A(void 0, z), this.connect()
    }
}

function em(e, t) {
    e in ea ? (ea[e].accessToken = t, $.info("Updated account access token: ".concat(e))) : (ea[e] = new eh(e, t), $.info("Added account: ".concat(e)))
}

function eg(e) {
    if (!(e in ea)) return;
    ea[e].disconnect(), delete ea[e];
    let t = eo[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete eo[e], $.info("Removed account: ".concat(e))
}

function eE(e, t) {
    for (let n of es[e]) n.is_active = n.id === t
}

function ey(e, t, n) {
    var r, a;
    let s = eu();
    if (null == s) return !1;
    let {
        socket: o,
        device: l
    } = s, {
        sync_id: c,
        party: u,
        timestamps: d
    } = t;
    if (null == c || null == u || null == u.id || !(0, R.pH)(u.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        p = Math.max(0, Date.now() - f),
        _ = !1,
        h = eo[o.accountId];
    null != h && !1 === h.repeat && (_ = null);
    let m = (0, R.NJ)(null != (r = null == (a = t.metadata) ? void 0 : a.type) ? r : R.M0.TRACK);
    if (null == m) return;
    (0, w.ZH)(o.accountId, o.accessToken, c, m, {
        position: +p,
        deviceId: l.id,
        repeat: _
    }), i = {
        userId: e,
        partyId: u.id,
        trackId: c,
        startTime: f
    };
    let g = "presence change";
    n && (g = "started", S.default.track(P.HAw.SPOTIFY_LISTEN_ALONG_STARTED, {
        party_id: u.id,
        other_user_id: e
    })), $.info("Listen along ".concat(g, ": ").concat(o.accountId, " to ").concat(e, " playing ").concat(c, " on ").concat(l.name))
}

function eb() {
    S.default.track(P.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null
    });
    let e = null != i ? i.trackId : null;
    i = null, $.info("Listen along stopped");
    let t = eu();
    if (null == t) return;
    let {
        socket: n
    } = t, r = eo[n.accountId];
    null != r && r.track.id === e && (0, w.v7)(n.accountId, n.accessToken)
}

function eO() {
    let e = Object.keys(ea),
        t = b.A.getAccounts().filter(e => {
            let {
                type: t
            } = e;
            return t === P.fg2.SPOTIFY
        });
    if (null == t) return !1;
    let n = t.map(e => {
        let {
            id: t
        } = e;
        return t
    });
    for (let t of e) n.includes(t) || eg(t);
    let i = !1;
    for (let n of t)
        if (null != r && r.account.id === n.id && (r.account = n, i = !0), !e.includes(n.id)) {
            if (null != n.accessToken) {
                em(n.id, n.accessToken);
                continue
            }(0, w.iD)(n.id)
        } return i
}

function ev(e) {
    let {
        accountId: t,
        accessToken: n
    } = e;
    return em(t, n), !1
}

function eA(e) {
    let {
        accountId: t
    } = e;
    eg(t)
}

function eI(e) {
    let {
        accountId: t,
        isPlaying: n,
        repeat: a,
        track: s,
        position: o,
        device: c,
        context: u
    } = e, f = !1;
    if (null != c)
        if (null != es[t]) {
            let e = es[t].find(e => {
                let {
                    id: t
                } = e;
                return t === c.id
            });
            null == e ? (es[t].push(c), f = !0) : (0, d.A)(e, c) || (Object.assign(e, c), f = !0), eE(t, c.id)
        } else es[t] = [c], f = !0;
    n ? null == ec || ec.start(V, eP) : (s = null, null == ec || ec.stop());
    let _ = b.A.getAccount(t, P.fg2.SPOTIFY);
    if (null == _) return f;
    let h = eo[t],
        g = null != s ? {
            account: _,
            track: s,
            startTime: ed(h, o),
            context: u,
            repeat: a
        } : null,
        E = null != c && null != i && 0 === o && !n;
    E || (eo[t] = g);
    let O = r;
    if (r = l().values(eo).find(e => null != e), eD(y.default.getId()), null == s || E ? er.stop() : er.start(s.duration - o + H, () => ef(_.id)), null != i && (!n && o > 0 || null == c || null != g && i.trackId !== g.track.id) ? ($.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(H, "ms")), ei.start(H, () => {
            $.info("Stopping listening along"), (0, m.A)(), ef(_.id)
        })) : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()), O === r || null == h && null == g || null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime) return f;
    null != s && (p.h.dispatch({
        type: "SPOTIFY_NEW_TRACK",
        track: s,
        connectionId: t
    }), S.default.track(P.HAw.ACTIVITY_UPDATED, {
        party_platform: P.fg2.SPOTIFY,
        track_id: s.id,
        has_images: !0,
        details: s.album.name,
        state: s.name,
        album_id: s.album.id,
        author_ids: s.artists.map(e => e.id),
        author_names: s.artists.map(e => e.name)
    }))
}

function eS(e) {
    let {
        id: t
    } = e;
    a = t
}

function eT(e) {
    let {
        accountId: t,
        devices: n
    } = e;
    es[t] = n, $.info("Devices updated for ".concat(t, ":"), n)
}

function eC(e) {
    let {
        accountId: t,
        deviceId: n
    } = e;
    eE(t, n)
}

function eN(e) {
    var t;
    let n, {
            activity: r,
            metadata: a
        } = e,
        s = eu();
    if (null == s) return !1;
    let {
        socket: o,
        device: l
    } = s, {
        sync_id: c,
        party: u
    } = r;
    return null != c && null != u && null != u.id && !!(0, R.pH)(u.id) && (null != a && (n = a.context_uri), null != i && eb(), null != a && void((0, w.ZH)(o.accountId, o.accessToken, c, null != (t = a.type) ? t : R.M0.TRACK, {
        contextUri: n,
        deviceId: l.id
    }), $.info("Play started: ".concat(o.accountId, " playing ").concat(c, " on ").concat(l.name))))
}

function ew(e) {
    let {
        activity: t,
        userId: n
    } = e;
    return ey(n, t, !0)
}

function eR() {
    if (null == i || null == eu()) return !1;
    let {
        userId: e
    } = i, t = ep(e);
    if (null == t) return en.start(B, () => {
        null != i && i.userId === e && (0, m.A)()
    }), !1;
    en.stop();
    let {
        sync_id: n,
        timestamps: r,
        party: a
    } = t, s = null != n && i.trackId !== n, o = null != r && i.startTime !== r.start;
    return s || o ? ey(e, t, !1) : null != a && a.id !== i.partyId && (i.partyId = a.id, !0)
}

function eP() {
    if (null == r) return;
    let e = eu();
    if (null == e) return;
    let {
        socket: t
    } = e;
    el = !0, (0, w.v7)(t.accountId, t.accessToken), S.default.track(P.HAw.SPOTIFY_AUTO_PAUSED), $.info("Playback auto paused")
}

function eD(e) {
    if (e === y.default.getId()) {
        let t = I.A.isCurrentClientInVoiceChannel(),
            n = (0, _.R)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        t && n && null != r ? (ee.start(V, eP, !1), et.stop()) : et.start(F, () => ee.stop(), !1)
    }
    return !1
}

function ex(e) {
    let {
        userId: t
    } = e;
    return eD(t)
}

function eL(e) {
    let {
        voiceStates: t
    } = e;
    return t.reduce((e, t) => {
        let {
            userId: n
        } = t;
        return eD(n) || e
    }, !1)
}

function ej(e) {
    let {
        accountId: t,
        isPremium: n
    } = e, r = ea[t];
    if (null == r) return !1;
    r.isPremium = n, $.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
}

function eM(e) {
    let {
        settings: t
    } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == ec || ec.stop();
        let {
            sourceId: e,
            sound: n
        } = null == t ? void 0 : t.desktopSettings;
        null != e && E.Ay.getObservedAppNameForWindow(e) === M.name && n ? (ec = new f.IX).start(V, eP) : (null == ec || ec.stop(), ec = null)
    } else null == t && (null == ec || ec.stop(), ec = null)
}

function ek(e, t, n) {
    var r, i, a, s, o, l, c, u, d, f, _, h, m, g;
    let E, y, {
        device: b,
        progress_ms: O,
        is_playing: v,
        repeat_state: A,
        item: I,
        context: S
    } = n;
    if (null != I && I.type === R.M0.TRACK) {
        let e = I.id;
        null != I.linked_from && null != I.linked_from.id && (e = I.linked_from.id), E = {
            id: e,
            name: I.name,
            duration: I.duration_ms,
            type: R.M0.TRACK,
            album: {
                id: null != (r = null == (s = I.album) ? void 0 : s.id) ? r : "",
                name: null != (i = null == (o = I.album) ? void 0 : o.name) ? i : "",
                image: null == (l = I.album) ? void 0 : l.images[0],
                type: null != (a = null == (c = I.album) ? void 0 : c.type) ? a : R.M0.ALBUM
            },
            artists: Array.isArray(I.artists) ? I.artists.filter(e => (0, N.Vq)(e.id) && (0, N.Vq)(e.name)) : [],
            isLocal: I.is_local || !1
        }
    } else null != I && I.type === R.M0.EPISODE && (E = {
        id: I.id,
        name: I.name,
        duration: I.duration_ms,
        type: R.M0.EPISODE,
        album: {
            id: null != (u = null == (_ = I.show) ? void 0 : _.id) ? u : "",
            name: null != (d = null == (h = I.show) ? void 0 : h.name) ? d : "",
            image: null == (m = I.show) ? void 0 : m.images[0],
            type: null != (f = null == (g = I.album) ? void 0 : g.type) ? f : R.M0.SHOW
        },
        artists: [],
        isLocal: !1
    });
    if (null != b && !0 !== b.is_active && (b = j(x({}, b), {
            is_active: !0
        })), null != S && [R.M0.PLAYLIST, R.M0.ALBUM].includes(S.type)) {
        let n = eV.getPlayerState(e);
        y = null != n && null != n.context && n.context.uri === S.uri ? Promise.resolve(n.context) : S.type === R.M0.ALBUM ? Promise.resolve(S) : w.tB.get(e, t, {
            url: S.href
        }).then(e => {
            let {
                body: t
            } = e;
            return t
        }).catch(e => {
            if (e && 404 === e.status) return null;
            throw e
        })
    } else y = Promise.resolve(void 0);
    return y.then(t => {
        null == t || t.type !== R.M0.PLAYLIST || t.public || (t = null), p.h.dispatch({
            type: "SPOTIFY_PLAYER_STATE",
            accountId: e,
            track: E,
            volumePercent: null != b ? b.volume_percent : 0,
            isPlaying: v,
            repeat: "off" !== A,
            position: O,
            context: t,
            device: b
        })
    })
}

function eU(e, t) {
    return w.tB.get(e, t, {
        url: R.RQ.PLAYER,
        query: {
            additional_types: "".concat(R.M0.TRACK, ",").concat(R.M0.EPISODE)
        },
        onlyRetryOnAuthorizationErrors: !0
    }).then(n => {
        let r = n.body;
        null != r ? ek(e, t, r).then(() => n) : ef(e)
    }).catch(() => ef(e))
}
class eG extends(s = u.Ay.Store) {
    initialize() {
        this.waitFor(y.default, b.A, O.A, v.A, E.Ay, A.A, I.A), this.syncWith([v.A], () => eR()), (0, w.f0)()
    }
    hasConnectedAccount() {
        return Object.keys(ea).length > 0
    }
    getActiveSocketAndDevice() {
        return eu()
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in ea) {
            let n = ea[t];
            if (!n.connected || null == es[t]) continue;
            let r = es[t].find(e => !e.is_restricted && e.type === W);
            null != r && e.push({
                socket: n,
                device: r
            })
        }
        return e
    }
    canPlay(e) {
        let {
            sync_id: t,
            party: n
        } = e;
        return null != eu() && null != t && null != n && null != n.id && (0, R.pH)(n.id)
    }
    getSyncingWith() {
        return i
    }
    wasAutoPaused() {
        return el
    }
    getLastPlayedTrackId() {
        return a
    }
    getTrack() {
        return null != r ? r.track : null
    }
    getPlayerState(e) {
        return eo[e]
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !O.A.isIdle()
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? ep(i.userId) : null;
        let {
            track: {
                artists: a,
                album: s,
                name: o,
                id: l,
                duration: c,
                isLocal: u,
                type: d
            },
            startTime: f,
            context: p
        } = r, _ = a.slice(0, K);
        a.length > 0 && (e = _.map(e => {
            let {
                name: t
            } = e;
            return t.replace(/;/g, "")
        }).join("; "));
        let h = {},
            m = null != s.image ? (0, T.Di)(P.fg2.SPOTIFY, s.image.url) : null;
        null != s.image && null != m && (h.large_image = m), s.type !== J && (h.large_text = s.name), null != p && (t = p.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(R.HS).concat(y.default.getId());
        let g = o.length > Z ? o.substring(0, Z - 3) + "..." : o,
            E = {
                context_uri: t,
                album_id: s.id,
                artist_ids: _.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                type: d,
                button_urls: []
            },
            b = {
                name: M.name,
                assets: h,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + c
                },
                party: {
                    id: n
                }
            };
        return u || (b.sync_id = l, b.flags = P.jUm.PLAY | P.jUm.SYNC, b.metadata = E), b
    }
}
D(eG, "displayName", "SpotifyStore");
let eV = new eG(p.h, {
        USER_CONNECTIONS_UPDATE: eO,
        CONNECTION_OPEN: eO,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eA,
        SPOTIFY_PROFILE_UPDATE: ej,
        SPOTIFY_PLAYER_STATE: eI,
        SPOTIFY_PLAYER_PLAY: eS,
        ACTIVITY_PLAY: eN,
        ACTIVITY_SYNC: ew,
        ACTIVITY_SYNC_STOP: eb,
        SPOTIFY_SET_DEVICES: eT,
        SPOTIFY_SET_ACTIVE_DEVICE: eC,
        SPEAKING: ex,
        VOICE_STATE_UPDATES: eL,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM
    }),
    eF = eV