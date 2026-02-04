/** chunk id: 375492, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => W
}), n(321073), n(896048), n(938796);
var r, i = n(812729),
    a = n.n(i),
    o = n(735438),
    s = n.n(o),
    l = n(665260),
    c = n(311907),
    u = n(73153),
    d = n(933958),
    f = n(182892),
    p = n(587895),
    _ = n(685396),
    h = n(15285),
    m = n(140547),
    g = n(242919),
    E = n(668731),
    y = n(589187),
    b = n(847521),
    O = n(655116),
    v = n(253932),
    A = n(617617),
    I = n(616356),
    S = n(734057),
    T = n(760751),
    C = n(794383),
    N = n(309010),
    w = n(528767),
    R = n(652215);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            P(e, t, n[t])
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

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let M = [],
    j = {};

function k() {
    var e, t;
    let n = [],
        r = v.G2.getSetting();
    null != r && ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) && n.push((0, _.F)(r));
    let i = E.A.getActivities();
    n.push(...i);
    let o = C.A.getStream();
    null != o && n.push(D({
        type: R.$pd.STREAMING
    }, o));
    let l = new Set;
    s().forEach(j, e => {
        let [, t] = e;
        null != t.application_id && (l.add(t.name), n.push(t))
    });
    let c = h.Ay.getVisibleGame(),
        u = null != c && null != c.name && (l.has(c.name) || (0, y.v)(c, [...n, ...w.A.getRemoteActivities()])),
        d = null != c && c.isLauncher,
        f = null != I.A.getCurrentUserActiveStream(),
        p = u || d && !f;
    if (null != c && null != c.name && !p) {
        let t = T.A.getGameByName(c.name);
        n.push(D({
            type: R.$pd.PLAYING,
            name: c.name,
            application_id: null != (e = c.id) ? e : null == t ? void 0 : t.id,
            timestamps: {
                start: c.start
            }
        }, (0, b.CO)(c)))
    }
    let A = O.A.getActivity();
    null != A && n.push(D({
        type: R.$pd.LISTENING
    }, A));
    let P = g.A.getCurrentHangStatus();
    if (null != P) {
        let e = g.A.getCustomHangStatus(),
            {
                defaultStatusVariant: r
            } = (0, m.ko)({
                guildId: null == (t = S.A.getChannel(N.A.getVoiceChannelId())) ? void 0 : t.guild_id,
                location: "LocalActivityStore"
            });
        n.push({
            type: R.$pd.HANG_STATUS,
            name: "Hang Status",
            state: "".concat(P, ":").concat(r),
            details: null == e ? void 0 : e.status,
            emoji: null == e ? void 0 : e.emoji
        })
    }
    a()(M, n) || (M = n)
}

function U() {
    j = {}, k()
}

function G(e) {
    let {
        socketId: t,
        pid: n,
        activity: r,
        partyPrivacy: i
    } = e;
    if (a()(j[t], [n, r, i])) return !1;
    null != r ? j[t] = [n, r, i] : delete j[t], k()
}

function V(e) {
    let {
        socketId: t
    } = e;
    delete j[t], k()
}

function F(e) {
    let {
        localActivities: t
    } = e;
    j = D({}, t), k()
}

function B() {
    let e = {},
        t = !1;
    for (let [i, [a, o, s]] of Object.entries(j)) {
        var n, r;
        let c = null != (n = o.flags) ? n : 0,
            u = (0, f.E)(o, (0, l.Lt)(null != (r = null == o ? void 0 : o.flags) ? r : 0, R.jUm.INSTANCE), o.platform === R.yTV.EMBEDDED, (0, f.e)(o), s);
        u !== c ? (e[i] = [a, x(D({}, o), {
            flags: u
        }), s], t = !0) : e[i] = [a, o, s]
    }
    return t ? (j = e, "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES"
}

function H() {
    B(), k()
}
class Y extends(r = c.Ay.Store) {
    initialize() {
        this.waitFor(p.A, I.A, S.A, d.Ay, C.A, E.A, T.A, g.A, h.Ay, N.A, w.A, O.A, A.A), this.syncWith([E.A, g.A], () => k())
    }
    getActivities() {
        return M
    }
    getPrimaryActivity() {
        return M[0]
    }
    getApplicationActivity(e) {
        return this.findActivity(t => t.application_id === e)
    }
    getCustomStatusActivity() {
        return this.findActivity(e => e.type === R.$pd.CUSTOM_STATUS)
    }
    findActivity(e) {
        return M.find(e)
    }
    getApplicationActivities() {
        return j
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(j))
            if (t === e) return n;
        return null
    }
}
P(Y, "displayName", "LocalActivityStore");
let W = new Y(u.h, {
    ROBLOX_SUBGAME_UPDATE: k,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
    OVERLAY_INITIALIZE: F,
    START_SESSION: U,
    LOCAL_ACTIVITY_UPDATE: G,
    RPC_APP_DISCONNECTED: V,
    RUNNING_GAMES_CHANGE: k,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
    SPOTIFY_PLAYER_STATE: k,
    SPOTIFY_PLAYER_PLAY: k,
    STREAMING_UPDATE: k,
    USER_CONNECTIONS_UPDATE: k,
    STREAM_START: k,
    STREAM_STOP: k,
    USER_SETTINGS_PROTO_UPDATE: H,
    EMBEDDED_ACTIVITY_CLOSE: k,
    UPDATE_HANG_STATUS: k,
    RUNNING_GAME_TOGGLE_DETECTION: k
})