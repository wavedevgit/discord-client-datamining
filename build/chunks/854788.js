/** chunk id: 854788, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(412461),
    s = n(310419),
    o = n(656106),
    c = n(652215),
    d = n(985018),
    u = n(101386);

function p(e) {
    let {
        application: t,
        className: n
    } = e, p = l.useCallback(e => {
        (0, a.TR)(c.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
            category: e.name,
            category_id: e.id,
            current_page: s.ev.APPLICATION
        }), (0, o.JX)({
            categoryId: e.id
        })
    }, []);
    return null == t.categories || 0 === t.categories.length ? null : (0, r.jsxs)("div", {
        className: n,
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.s7iald)
        }), (0, r.jsx)("div", {
            className: u.L,
            children: t.categories.map(e => (0, r.jsx)(i.DUT, {
                className: u.c,
                onClick: () => p(e),
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "redesign-button-tertiary-text",
                    children: e.name
                })
            }, e.id))
        })]
    })
}