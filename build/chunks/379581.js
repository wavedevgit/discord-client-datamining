/** chunk id: 379581 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var n = a(627968);
a(64700);
var i = a(503698),
    l = a.n(i),
    s = a(582754),
    r = a(397927),
    o = a(9578),
    c = a(736653),
    d = a(573648),
    u = a(412461),
    m = a(985018),
    h = a(355584);

function p(e) {
    let {
        application: t,
        className: a,
        innerClassName: i
    } = e, s = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || s.length > 0 ? (0, n.jsxs)("div", {
        className: l()(h.kL, a),
        children: [(0, n.jsx)(r.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: m.intl.string(m.t.l6DP2n)
        }), (0, n.jsxs)("div", {
            className: l()(h.p_, i),
            children: [s.map((e, t) => (0, n.jsx)(_, {
                url: e.url,
                children: e.name
            }, t)), null != t.terms_of_service_url ? (0, n.jsx)(g, {
                icon: r.oSV,
                url: t.terms_of_service_url,
                children: m.intl.string(m.t.s7STcY)
            }) : null, null != t.privacy_policy_url ? (0, n.jsx)(g, {
                icon: r.XAi,
                url: t.privacy_policy_url,
                children: m.intl.string(m.t.kH3JR5)
            }) : null]
        })]
    }) : null
}

function _(e) {
    let {
        url: t,
        children: a
    } = e, i = (0, c.Ay)(), l = d.A.getByUrl(t), o = (0, s.Mw)(i) ? l?.icon?.darkSVG : l?.icon?.lightSVG;
    return (0, n.jsx)(g, {
        icon: void 0 === o ? r.qYV : void 0,
        imageSrc: o,
        url: t,
        children: a
    })
}

function g(e) {
    let {
        icon: t,
        imageSrc: a,
        iconColor: i,
        url: s,
        children: c
    } = e, d = (0, u.DB)(), m = null;
    null != t ? m = (0, n.jsx)(t, {
        className: h.GU,
        color: i ?? "currentColor",
        width: 20,
        height: 20,
        size: "custom"
    }) : null != a && (m = (0, n.jsx)("img", {
        className: h.GR,
        src: a,
        alt: ""
    }));
    let p = (0, n.jsxs)(n.Fragment, {
        children: [m, (0, n.jsx)(r.Text, {
            className: h.so,
            variant: "text-sm/medium",
            selectable: !0,
            children: c
        })]
    });
    return (0, n.jsx)(o.A, {
        href: s,
        className: l()(h.Aw, h.SF),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: p
    })
}