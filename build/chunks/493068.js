/** chunk id: 493068 params = (module,exports,require) **/
n.d(t, {
    a: () => T,
    d: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(813077),
    d = n(500380),
    c = n(518977),
    u = n(419954),
    _ = n(287809),
    m = n(780964),
    g = n(798572),
    A = n(985018),
    x = n(13506);

function h() {
    let e = (0, l.bG)([_.default], () => _.default.getCurrentUser()?.storeCountry),
        t = e?.setAt != null ? A.intl.format(A.t.ZkWzXG, {
            date: new Date(e.setAt)
        }) : null,
        n = s.useCallback(() => {
            (0, g.b)(e?.country ?? null)
        }, [e?.country]);
    if (null == e) return (0, i.jsxs)("div", {
        className: x.OO,
        children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: A.intl.string(A.t.jGL0O5)
        }), (0, i.jsx)(a.$nd, {
            variant: "secondary",
            size: "sm",
            text: A.intl.string(A.t.EeFkoB),
            onClick: n
        })]
    });
    let o = (0, c.Gw)(e.country);
    return (0, i.jsxs)("div", {
        className: x.OO,
        children: [(0, i.jsxs)("div", {
            className: x.wI,
            children: [(0, i.jsx)("div", {
                className: x.Gh,
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: x.MY,
                    src: (0, d.t)(e.country)
                })
            }), (0, i.jsxs)("div", {
                className: x.d0,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children: o
                }), null != t ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: t
                }) : null]
            })]
        }), (0, i.jsx)(a.$nd, {
            variant: "secondary",
            size: "sm",
            text: A.intl.string(A.t.EeFkoB),
            onClick: n
        })]
    })
}
let p = (0, u.E2)(m.X.BILLING_STORE_COUNTRY, {
        Component: h,
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useSearchTerms: () => [A.intl.string(A.t["3pIjBH"])]
    }),
    T = (0, u.zZ)(m.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => (0, o.wI)("StoreCountrySetting"),
        useTitle: () => A.intl.string(A.t["3pIjBH"]),
        buildLayout: () => [p]
    })