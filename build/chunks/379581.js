/** chunk id: 379581, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(582754),
    s = n(397927),
    o = n(9578),
    c = n(736653),
    d = n(573648),
    u = n(412461),
    p = n(985018),
    h = n(125257);

function m(e) {
    var t, n;
    let {
        application: l,
        className: a,
        innerClassName: o
    } = e, c = null != (t = null == (n = l.directory_entry) ? void 0 : n.external_urls) ? t : [];
    return null != l.terms_of_service_url || null != l.privacy_policy_url || c.length > 0 ? (0, r.jsxs)("div", {
        className: i()(h.kL, a),
        children: [(0, r.jsx)(s.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: p.intl.string(p.t.l6DP2n)
        }), (0, r.jsxs)("div", {
            className: i()(h.p_, o),
            children: [c.map((e, t) => (0, r.jsx)(g, {
                url: e.url,
                children: e.name
            }, t)), null != l.terms_of_service_url ? (0, r.jsx)(_, {
                icon: s.oSV,
                url: l.terms_of_service_url,
                children: p.intl.string(p.t.s7STcY)
            }) : null, null != l.privacy_policy_url ? (0, r.jsx)(_, {
                icon: s.XAi,
                url: l.privacy_policy_url,
                children: p.intl.string(p.t.kH3JR5)
            }) : null]
        })]
    }) : null
}

function g(e) {
    var t, n;
    let {
        url: l,
        children: i
    } = e, o = (0, c.Ay)(), u = d.A.getByUrl(l), p = (0, a.Mw)(o) ? null == u || null == (t = u.icon) ? void 0 : t.darkSVG : null == u || null == (n = u.icon) ? void 0 : n.lightSVG;
    return (0, r.jsx)(_, {
        icon: void 0 === p ? s.qYV : void 0,
        imageSrc: p,
        url: l,
        children: i
    })
}

function _(e) {
    let {
        icon: t,
        imageSrc: n,
        iconColor: l,
        url: a,
        children: c
    } = e, d = (0, u.DB)(), p = null;
    null != t ? p = (0, r.jsx)(t, {
        className: h.GU,
        color: null != l ? l : "currentColor",
        width: 20,
        height: 20,
        size: "custom"
    }) : null != n && (p = (0, r.jsx)("img", {
        className: h.GR,
        src: n,
        alt: ""
    }));
    let m = (0, r.jsxs)(r.Fragment, {
        children: [p, (0, r.jsx)(s.Text, {
            className: h.so,
            variant: "text-sm/medium",
            selectable: !0,
            children: c
        })]
    });
    return (0, r.jsx)(o.A, {
        href: a,
        className: i()(h.Aw, h.SF),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: m
    })
}