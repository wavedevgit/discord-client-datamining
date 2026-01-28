/** Chunk was on 78528 **/
/** chunk id: 272997, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(627363),
    a = n(769015),
    o = n(25528),
    c = n(961350),
    u = n(69555),
    d = n(266069),
    p = n(709889);

function h(e) {
    var t;
    let {
        guildId: n,
        onSetActivityStatus: h
    } = e, f = (0, i.bG)([c.default], () => c.default.getId()), g = (0, o.A)(f, n)[0], m = null != (t = (0, s.YY)(null == g ? void 0 : g.application_id).data) ? t : void 0, b = l.useCallback(() => {
        null != m && ((0, u.xA)(m.id, !0), h())
    }, [m, h]);
    return null == m ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.u, {
            label: m.name,
            icon: (0, r.jsx)(a.A, {
                game: m,
                className: p.K
            }),
            setStatus: b
        }), (0, r.jsx)("div", {
            role: "separator",
            className: p.m
        })]
    })
}