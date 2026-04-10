/** chunk id: 603293 params = (module,exports,require) **/
n.d(t, {
    b: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(500380),
    o = n(518977),
    d = n(985018),
    c = n(124440);

function u(e) {
    let {
        country: t,
        countryName: n,
        ...o
    } = e, u = s.useCallback(() => null == t ? null : (0, i.jsx)("img", {
        alt: "",
        className: c.b,
        src: (0, a.t)(t)
    }), [t]), m = null != n && null != t ? {
        text: n,
        leadingIcon: u
    } : n ?? void 0;
    return (0, i.jsx)(l.Modal, {
        ...o,
        title: d.intl.string(d.t.EeFkoB),
        subtitle: m,
        actions: [{
            text: d.intl.string(d.t.cpT0Cq),
            onClick: o.onClose,
            variant: "secondary"
        }],
        children: (0, i.jsxs)(r.BJc, {
            gap: 16,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: d.intl.string(d.t["J+TYwL"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: d.intl.string(d.t.M57KeT)
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: d.intl.string(d.t.PDsztK)
            })]
        })
    })
}

function m(e) {
    let t = null != e ? (0, o.Gw)(e) : null;
    (0, r.qfG)(n => (0, i.jsx)(u, {
        ...n,
        country: e,
        countryName: t
    }))
}