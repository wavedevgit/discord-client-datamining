/** chunk id: 563988 params = (module,exports,require) **/
n.d(t, {
    R: () => s
});
var a = n(627968);
n(64700);
var l = n(720462),
    i = n(183802),
    r = n(209968);

function s(e) {
    let {
        applicationId: t,
        skuIds: n,
        guildId: s,
        analyticsLocations: c,
        onCardClick: o
    } = e;
    return null == n || 0 === n.length ? null : (0, a.jsx)(l.A, {
        gap: "md",
        children: n.map((e, n) => (0, a.jsx)("div", {
            className: r.B,
            children: (0, a.jsx)(i.A, {
                positionInSection: n,
                applicationId: t,
                skuId: e,
                variant: i.s.SMALL,
                guildId: s,
                analyticsLocations: c,
                onClick: null != o ? t => {
                    t.preventDefault(), o(e)
                } : void 0
            })
        }, `${e}-${n}`))
    })
}