/** Chunk was on web.js **/
/** chunk id: 559908, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => j,
    gN: () => D
}), n(896048);
var r, i = n(311907),
    a = n(713402),
    o = n(451988),
    s = n(73153),
    l = n(961350),
    c = n(309010),
    u = n(203982),
    d = n(3137),
    f = n(103640),
    p = n(31408),
    _ = n(652215);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function y(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = b(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function b(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let O = 7,
    v = 1e3,
    A = new Set,
    I = new a.J(function(e) {
        let {
            userId: t,
            channelId: n
        } = e;
        return [t, n]
    }, function(e) {
        let {
            userId: t,
            channelId: n
        } = e;
        return "".concat(n, "-").concat(t)
    });

function S(e) {
    return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1)
}
let T = new a.J(function(e) {
        let {
            messageId: t,
            channelId: n,
            combo: {
                userId: r
            }
        } = e;
        return [t, n, r]
    }, function(e) {
        let {
            messageId: t,
            channelId: n,
            combo: {
                userId: r
            }
        } = e;
        return "".concat(n, "-").concat(r, "-").concat(t)
    }),
    C = e => {
        let {
            userId: t,
            channelId: n
        } = e;
        return "".concat(t, "-").concat(n)
    };

function N(e) {
    var t, n, r, i, a, s;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        c = I.get(C(e)),
        u = E(m({}, c, e), {
            value: null != (t = null != (n = e.value) ? n : null == c ? void 0 : c.value) ? t : 0,
            multiplier: Math.min(null != (r = null != (i = e.multiplier) ? i : null == c ? void 0 : c.multiplier) ? r : 1, O),
            decayInterval: null != (a = null == c ? void 0 : c.decayInterval) ? a : new o.IX
        });
    I.set(C(e), u), l && (null == (s = u.decayInterval) || s.start(v, () => {
        let e = I.get(C(u));
        if (null != e) {
            let n = u.multiplier !== e.multiplier && u.value !== e.value;
            if (e.value <= 0 || n) {
                var t;
                null == (t = e.decayInterval) || t.stop(), e.value <= 0 && (N(E(m({}, e), {
                    value: 0,
                    multiplier: 1
                })), M.emitChange())
            } else N(E(m({}, e), {
                value: e.value - 1
            })), M.emitChange()
        }
    }))
}

function w(e) {
    T.set(e.messageId, e)
}

function R(e) {
    let {
        type: t
    } = e, n = y(e, ["type"]);
    if (!d.A.isEnabled()) return !1;
    N(n)
}

function P(e) {
    let {
        comboMessage: t
    } = e;
    if (!d.A.isEnabled()) return !1;
    w(t)
}

function D(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0)
}

function L(e) {
    var t, n;
    let {
        channelId: r,
        message: {
            mentions: i,
            author: a,
            nonce: o
        }
    } = e;
    if (!d.A.isEnabled()) return !1;
    let s = l.default.getId();
    if (!D(null == a ? void 0 : a.id, s, o, A)) return !1;
    let c = I.get(C({
        userId: null != (t = null == a ? void 0 : a.id) ? t : "???",
        channelId: r
    }));
    if (d.A.screenshakeEnabled && d.A.screenshakeEnabledLocations[p.uD.MENTION] && null != i && null != i.find(e => e.id === s)) {
        let e = null != c ? null != (n = (0, f.U$)(c, p.fZ.LEVEL_4)) ? n : .001 : 4 * Math.random();
        return u._.dispatch(_.jej.SHAKE_APP, {
            duration: 1e3,
            intensity: e
        }), !0
    }
    return !1
}
class x extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.default, d.A, c.A)
    }
    getComboScore(e, t) {
        let n = I.get(C({
            userId: e,
            channelId: t
        }));
        return null == n ? 0 : (0, f.RL)(n)
    }
    getUserCombo(e, t) {
        return I.get(C({
            userId: e,
            channelId: t
        }))
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= d.A.combosRequiredCount && S(n)
    }
    getMessageCombo(e) {
        var t;
        let n = T.get(e);
        return null != (t = null == n ? void 0 : n.combo) ? t : void 0
    }
    getMostRecentMessageCombo(e) {
        let t = T.values(e);
        return t[t.length - 1]
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, f.U$)(i, r) * n : 0
    }
}
h(x, "displayName", "PoggermodeStore");
let M = new x(s.h, {
        POGGERMODE_UPDATE_COMBO: R,
        POGGERMODE_UPDATE_MESSAGE_COMBO: P,
        MESSAGE_CREATE: L
    }),
    j = M