/** chunk id: 854788 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968),
    i = a(64700),
    l = a(397927),
    s = a(412461),
    r = a(310419),
    o = a(656106),
    c = a(652215),
    d = a(985018),
    u = a(380272);

function m(e) {
    let {
        application: t,
        className: a
    } = e, m = i.useCallback(e => {
        (0, s.TR)(c.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
            category: e.name,
            category_id: e.id,
            current_page: r.ev.APPLICATION
        }), (0, o.JX)({
            categoryId: e.id
        })
    }, []);
    return null == t.categories || 0 === t.categories.length ? null : (0, n.jsxs)("div", {
        className: a,
        children: [(0, n.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.s7iald)
        }), (0, n.jsx)("div", {
            className: u.L,
            children: t.categories.map(e => (0, n.jsx)(l.DUT, {
                className: u.c,
                onClick: () => m(e),
                children: (0, n.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    color: "redesign-button-tertiary-text",
                    children: e.name
                })
            }, e.id))
        })]
    })
}