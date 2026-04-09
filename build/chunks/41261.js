/** chunk id: 41261 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(311907),
    s = n(397927),
    o = n(528767),
    d = n(790381),
    c = n(266080),
    u = n(30529),
    A = n(544105),
    _ = n(985018),
    h = n(438835);

function m(e) {
    let {
        platform: t
    } = e;
    return t === A.f$.XBOX ? (0, i.jsx)(c.A, {
        className: h.Kk
    }) : t === A.f$.PLAYSTATION ? (0, i.jsx)(d.A, {
        className: h.Kk
    }) : null
}

function g(e) {
    let {
        voiceState: t,
        awaitingRemoteSessionInfo: n
    } = e, a = null != n ? (0, u.X)(n.type) : null, d = (0, l.bG)([o.A], () => o.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os), c = a ?? d;
    if (null == c || !A.hv.has(c)) return null;
    let g = null != n,
        p = g ? c === A.f$.XBOX ? _.intl.string(_.t.UjA4HX) : _.intl.string(_.t.QCw1oW) : c === A.f$.XBOX ? _.intl.format(_.t["ynEs/Y"], {}) : _.intl.format(_.t.TZ17Bg, {});
    return (0, i.jsxs)("div", {
        className: r()(h.zr, g ? h.jI : h.aW),
        children: [(0, i.jsx)(m, {
            platform: c
        }), (0, i.jsx)(s.Text, {
            color: g ? "text-strong" : "always-white",
            variant: "text-xs/medium",
            children: p
        })]
    })
}