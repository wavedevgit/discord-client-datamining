/** Chunk was on web.js **/
/** chunk id: 706752, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => O
});
var r = n(323073),
    i = n(793574),
    a = n(376708),
    s = n(976860),
    o = n(138298),
    l = n(940382),
    c = n(734057),
    u = n(808728),
    d = n(309010),
    f = n(167866),
    p = n(985925),
    _ = n(486974),
    h = n(652215),
    m = n(746080);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function O(e, t, n) {
    var g, y, O;
    let v, A = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        modViewPanel: _.g.INFO
    };
    if (!(0, p.r)(e)) return Promise.resolve();
    let I = null != (g = A.modViewPanel) ? g : _.g.INFO,
        S = null != (y = A.sourceLocation) ? y : i.A.MEMBER_SAFETY_PAGE,
        T = d.A.getCurrentlySelectedChannelId(),
        C = null != T ? c.A.getChannel(T) : null;
    if (n !== m.VV.MEMBER_SAFETY && (null == C || C.getGuildId() !== e)) {
        let t = u.Ay.getDefaultChannel(e);
        null == t || (0, r.qR)(t) || (0, s.pX)(h.BVt.CHANNEL(e, t.id))
    }
    let N = n;
    return (0, a.G9)(N, t) && (v = N), (0, f.e)(e, t, I, S), o.A.openGuildSidebar({
        guildId: e,
        baseChannelId: n,
        sidebarType: l.QV.GUILD_MEMBER_MOD_VIEW,
        details: b(E({
            type: l.LU.GUILD_MEMBER_MOD_VIEW,
            userId: t,
            guildId: e
        }, A), {
            modViewPanel: null != (O = A.modViewPanel) ? O : _.g.INFO,
            moderatorReportId: v
        })
    })
}