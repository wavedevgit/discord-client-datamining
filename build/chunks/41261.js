/** chunk id: 41261, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(397927),
    o = n(528767),
    c = n(790381),
    u = n(266080),
    d = n(30529),
    p = n(544105),
    h = n(985018),
    g = n(839549);

function f(e) {
    let {
        platform: t
    } = e;
    return t === p.f$.XBOX ? (0, r.jsx)(u.A, {
        className: g.Kk
    }) : t === p.f$.PLAYSTATION ? (0, r.jsx)(c.A, {
        className: g.Kk
    }) : null
}

function m(e) {
    let {
        voiceState: t,
        awaitingRemoteSessionInfo: n
    } = e, i = null != n ? (0, d.X)(n.type) : null, c = (0, a.bG)([o.A], () => {
        var e, n;
        return null == (n = o.A.getSessionById(null != (e = null == t ? void 0 : t.sessionId) ? e : "")) ? void 0 : n.clientInfo.os
    }), u = null != i ? i : c;
    if (null == u || !p.hv.has(u)) return null;
    let m = null != n,
        A = m ? u === p.f$.XBOX ? h.intl.string(h.t.UjA4HX) : h.intl.string(h.t.QCw1oW) : u === p.f$.XBOX ? h.intl.format(h.t["ynEs/Y"], {}) : h.intl.format(h.t.TZ17Bg, {});
    return (0, r.jsxs)("div", {
        className: l()(g.zr, m ? g.jI : g.aW),
        children: [(0, r.jsx)(f, {
            platform: u
        }), (0, r.jsx)(s.Text, {
            color: m ? "text-strong" : "always-white",
            variant: "text-xs/medium",
            children: A
        })]
    })
}