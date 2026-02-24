/** chunk id: 896447, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => c
});
var n = t(627968),
    s = t(64700),
    i = t(397927),
    a = t(439303),
    r = t(183802),
    d = t(205830),
    o = t(770887);

function c(e) {
    let {
        analyticsSectionId: l,
        applicationId: t,
        guildId: c,
        sectionTitle: u,
        skuIds: _,
        variant: g = r.s.SMALL
    } = e, p = s.useMemo(() => ({
        pageSection: l,
        pageSectionTitle: u
    }), [l, u]);
    return null == _ || 0 === _.length ? null : (0, n.jsx)(a.E9, {
        newValue: p,
        children: (0, n.jsxs)("div", {
            className: o.h,
            children: [null != u && u.length > 0 && (0, n.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                lineClamp: 1,
                className: o.G,
                children: u
            }), (0, n.jsx)(d.$, {
                applicationId: t,
                skuIds: _,
                variant: g,
                guildId: c
            })]
        })
    })
}