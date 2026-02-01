/** chunk id: 447216, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => Y
}), n(896048), n(638769);
var r = n(735438),
    i = n.n(r),
    a = n(947320),
    o = n(873298),
    s = n(506774),
    l = n(439372),
    c = n(108713),
    u = n(643501),
    d = n(209932),
    f = n(961350),
    p = n(430452),
    _ = n(661191),
    h = n(879172),
    m = n(409826),
    g = n(594061),
    E = n(731854);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let A = 300,
    I = 2e3,
    S = e => "AudioContextSettingsMigrated:".concat(e),
    T = e => e === E.x.STREAM ? a.i.STREAM : a.i.USER;

function C(e, t, n) {
    return e[t].volume !== T(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e
}

function N(e) {
    let t = _.default.entries(e),
        n = t.length;
    if (n <= A) return;
    let r = t.sort((e, t) => {
            let [n, {
                modifiedAt: r
            }] = e, [i, {
                modifiedAt: a
            }] = t;
            return Number(r) - Number(a)
        }),
        i = n - A;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n]
    }
}

function w(e) {
    return o.oP.create({
        muted: !1,
        volume: T(e)
    })
}

function R() {
    s.w.get(S(f.default.getId())) || g.wc.updateAsync("audioContextSettings", e => {
        let t = !1;
        for (let [n, r] of Object.entries(p.A.getState().settingsByContext)) {
            let i = (0, m.o)(n);
            if (null == i) continue;
            let a = e[i],
                o = String(Date.now()),
                s = {};
            for (let [e, t] of Object.entries(r.localMutes)) s[e] = {
                muted: t,
                volume: T(n),
                modifiedAt: o,
                soundboardMuted: !1
            };
            for (let [e, t] of Object.entries(r.localVolumes)) s[e] = v(b({
                muted: !1,
                modifiedAt: o
            }, s[e]), {
                volume: (0, m.z)(t, n)
            });
            let l = Object.keys(a).length;
            for (let [e, [n, r]] of Object.entries(s).entries()) {
                if (A - l - (e + 1) <= 0) break;
                null == a[n] && (t = !0, a[n] = r)
            }
        }
        return s.w.set(S(f.default.getId()), !0), t
    }, g.Sb.AUTOMATED)
}

function P(e, t, n, r) {
    var i;
    let a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = (0, m.o)(n);
    if (null == o) return !1;
    let s = e[o];
    return s[t] = null != (i = s[t]) ? i : w(n), r(s[t]), s[t].modifiedAt = String(Date.now()), a && C(s, t, n), N(s), !0
}

function D() {
    R()
}
let L = i().debounce(() => {
    U()
}, I);

function x(e, t, n) {
    (0, h.gq)(e, t, {
        volume: n
    }), L()
}

function M(e, t, n) {
    (0, h.gq)(e, t, {
        muted: n
    }), L.cancel(), U()
}

function j(e, t, n) {
    (0, h.gq)(e, t, {
        soundboardMuted: n
    }), L.cancel(), U()
}
let k = i().debounce(c.VR, 500, {
    maxWait: 500
});

function U() {
    g.wc.updateAsync("audioContextSettings", e => {
        let t = !1;
        return (0, h.rQ)((n, r, i) => {
            let a = P(e, r, n, e => {
                Object.assign(e, i)
            });
            t = t || a
        }), t
    }, g.Sb.INFREQUENT_USER_ACTION)
}

function G(e) {
    let {
        context: t,
        userId: n,
        volume: r
    } = e;
    if (n === f.default.getId()) return;
    let i = u.default.getRemoteSessionId();
    null != i && k(i, n, t, {
        muted: p.A.isLocalMute(n, t),
        volume: r
    }), x(t, n, r)
}

function V(e) {
    let {
        context: t,
        userId: n
    } = e;
    n !== f.default.getId() && M(t, n, p.A.isLocalMute(n, t))
}

function F(e) {
    let {
        context: t,
        userId: n
    } = e;
    n !== f.default.getId() && j(t, n, d.A.isLocalSoundboardMuted(n))
}

function B(e) {
    let {} = e;
    g.wc.updateAsync("audioContextSettings", e => {
        e.user = {}, e.stream = {}
    }, g.Sb.INFREQUENT_USER_ACTION)
}
class H extends l.A {
    constructor(...e) {
        super(...e), y(this, "actions", {
            POST_CONNECTION_OPEN: D,
            AUDIO_SET_LOCAL_VOLUME: G,
            AUDIO_TOGGLE_LOCAL_MUTE: V,
            AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: F,
            MEDIA_ENGINE_RESET_SETTINGS: B
        })
    }
}
let Y = new H