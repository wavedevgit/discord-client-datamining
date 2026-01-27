/** Chunk was on 39048 **/
/** chunk id: 366846, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(241499),
    u = n(555337),
    g = n(564864),
    m = n(501381),
    p = n(985018),
    f = n(82196);

function h(e) {
    let {
        requireTerms: t,
        rules: n
    } = e, l = (0, o.bG)([u.A], () => u.A.getProps().guild), h = null == l ? void 0 : l.id, b = i.useCallback(e => {
        if (null == h || null == n) return null;
        g.A.setPendingInviteRules(h, e, [...n])
    }, [h, n]), x = i.useCallback(e => {
        if (null == h) return null;
        g.A.setPendingInviteRules(h, t, e)
    }, [h, t]);
    return null == l ? null : null == n ? (0, r.jsx)(c.y$y, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.dOG, {
            label: p.intl.string(p.t.d21uOr),
            description: p.intl.string(p.t.SzpUBF),
            onChange: b,
            checked: t
        }), t && (0, r.jsx)(m.o, {
            guildId: l.id
        }), (0, r.jsx)("div", {
            className: s()(f.aO, {
                [f.r9]: !t
            }),
            children: (0, r.jsxs)("div", {
                inert: t ? void 0 : "",
                children: [(0, r.jsx)(a.DZT, {
                    variant: "text-xs/bold",
                    color: "text-muted",
                    className: f.lo,
                    children: p.intl.string(p.t.XcAzbo)
                }), (0, r.jsx)(d._, {
                    guild: l,
                    rules: n,
                    setRules: x,
                    disabled: !t
                })]
            })
        })]
    })
}