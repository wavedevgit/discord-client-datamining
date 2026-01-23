/** Chunk was on web.js **/
/** chunk id: 112848, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $F: () => I,
    Lh: () => E,
    Wo: () => g,
    Xb: () => b,
    bu: () => O,
    p3: () => S,
    rG: () => y
});
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(439174),
    o = n(622543),
    l = n(287809),
    c = n(166403),
    u = n(474090),
    d = n(416654),
    f = n(788868);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
var g = function(e) {
    return e.UPCOMING = "upcoming", e.EARNED = "earned", e
}({});

function E() {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, d.v)(null == e ? void 0 : e.id);
    return null != t ? t : null
}
let y = e => (0, a.bG)([o.A], () => {
    if (null == e) return null;
    let t = o.A.getUserProfile(e);
    return null == t ? void 0 : t.premiumSince
});

function b() {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, u.YE)(e, f.PremiumTypes.TIER_2),
        n = (0, a.bG)([c.A], () => {
            let e = c.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        r = y(null == e ? void 0 : e.id);
    return null != n ? n : r
}
let O = () => {
        let e = Object.values(f.VD),
            t = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
            n = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription());
        if (!(0, u.YE)(t, f.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = i()(),
            s = i()(n.premiumSince).add(1, "day"),
            o = r.diff(s, "months");
        return e.reduce((e, t) => {
            let {
                id: n,
                tenureReqNumMonths: r
            } = t;
            return o >= r ? n : e
        }, null)
    },
    v = () => {
        let e = E(),
            t = (0, a.bG)([c.A], () => c.A.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince)
    },
    A = () => {
        let e = b(),
            t = Object.values(f.VD);
        if (null == e || null == t) return null;
        let n = i()().diff(e, "days"),
            r = t[0],
            a = 30 * r.tenureReqNumMonths - n;
        return a <= 0 ? null : m(_({}, r), {
            daysLeft: a,
            status: "upcoming"
        })
    },
    I = () => {
        let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
            t = S(null == e ? void 0 : e.id),
            n = v(),
            r = A();
        return null != t ? m(_({}, t), {
            earnedOnDate: n,
            status: "earned"
        }) : null != r ? r : null
    },
    S = e => {
        let t = (0, d.v)(e);
        return null == t ? null : f.VD[t]
    }