/** chunk id: 794383, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(896048), n(747238), n(65821), n(321073), n(848778);
var r, i = n(812729),
    a = n.n(i),
    o = n(311907),
    s = n(562465),
    l = n(73153),
    c = n(77468),
    u = n(573648),
    d = n(139675),
    f = n(927813),
    p = n(962173),
    _ = n(351906),
    h = n(652215);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
    E = +f.A.Millis.MINUTE,
    y = e => "https://youtube.com/watch?v=".concat(e),
    b = 5 * f.A.Millis.MINUTE,
    O = "https://api.twitch.tv/helix",
    v = /live_user_(.*)-\{width\}/,
    A = 128,
    I = null,
    S = 0,
    T = null,
    C = new Set,
    N = {};

function w(e) {
    var t;
    return null == (t = v.exec(e)) ? void 0 : t[1]
}

function R(e, t, n) {
    return s.Bo.get({
        url: "".concat(O).concat(e),
        query: t,
        headers: {
            "Client-ID": g,
            Authorization: "Bearer ".concat(n)
        },
        rejectWithError: !1
    })
}
async function P(e, t) {
    var n;
    let r = N[e];
    if (null != r) return r;
    let {
        body: {
            data: i
        }
    } = await R("/games", {
        id: e
    }, t), a = null == (n = i[0]) ? void 0 : n.name;
    return N[e] = a, a
}
class D {
    start() {
        this._started || (this._started = !0, p.A.isFetching() ? c.A.fetch() : this._check())
    }
    stop() {
        this._started = !1, T = null, S = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.h.dispatch({
            type: "STREAMING_UPDATE",
            stream: null
        })
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
        try {
            var n, r, i;
            let {
                body: {
                    data: a
                }
            } = await R("/streams", {
                user_id: e.id,
                first: 1
            }, t), o = a[0];
            if (null == o || "live" !== o.type) throw Error("no stream");
            let {
                thumbnail_url: s,
                game_id: l,
                title: c
            } = o, f = {
                large_image: null != s && null != (n = (0, d.Di)(h.fg2.TWITCH, s)) ? n : void 0
            }, p = await P(l, t), _ = u.A.get(h.fg2.TWITCH), m = null != (r = w(s)) ? r : e.name, g = null != c && "" !== c ? c.slice(0, A) : void 0, E = null != p && "" !== p ? p.slice(0, A) : void 0;
            return {
                url: null == (i = _.getPlatformUserUrl) ? void 0 : i.call(_, {
                    id: e.id,
                    name: m
                }),
                name: _.name,
                assets: f,
                details: g,
                state: E
            }
        } catch (n) {
            if (401 === n.status && null == t) return c.A.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
            return null
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (T = null, e.revoked || C.has(e.id)) return null;
        try {
            var n;
            let {
                body: {
                    items: r
                }
            } = await s.Bo.get({
                url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                query: {
                    part: "id,snippet",
                    broadcastStatus: "active",
                    broadcastType: "all"
                },
                headers: {
                    Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (r.length < 1) throw Error("no stream");
            let {
                id: i,
                snippet: {
                    title: a,
                    thumbnails: o
                }
            } = r[0], l = {
                large_image: null != (n = (0, d.Di)(h.fg2.YOUTUBE, o.high.url)) ? n : void 0
            }, c = null != a && "" !== a ? a.slice(0, A) : void 0;
            return T = {
                url: y(i),
                name: u.A.get(h.fg2.YOUTUBE).name,
                details: c,
                assets: l
            }
        } catch (n) {
            if (401 === n.status && null == t) return c.A.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
            return 403 === n.status && C.add(e.id), null
        }
    }
    _check() {
        if (!this._started) return;
        let e = p.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [h.fg2.TWITCH],
            n = Date.now();
        S <= n && (t.push(h.fg2.YOUTUBE), S = n + b), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === h.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
            if (this._started) {
                var t;
                let n = null == (t = e.find(e => "fulfilled" === e.status && null != e.value)) ? void 0 : t.value;
                null == n && null != T && (n = T), l.h.dispatch({
                    type: "STREAMING_UPDATE",
                    stream: n
                })
            }
            this._scheduleCheck()
        })
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), E))
    }
    constructor() {
        m(this, "_nextCheck", void 0), m(this, "_started", void 0), this._started = !1
    }
}
let L = new D;

function x() {
    _.A.enabled ? L.start() : L.stop()
}

function M(e) {
    var t;
    if (a()(e.stream, I)) return !1;
    I = null != (t = e.stream) ? t : null
}
class j extends(r = o.Ay.Store) {
    initialize() {
        x(), this.waitFor(p.A, _.A), this.syncWith([_.A], x)
    }
    getStream() {
        return I
    }
}
m(j, "displayName", "ExternalStreamingStore");
let k = new j(l.h, {
    STREAMING_UPDATE: M,
    USER_CONNECTIONS_UPDATE: () => L._check()
})