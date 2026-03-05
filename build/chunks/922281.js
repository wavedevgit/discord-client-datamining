/** chunk id: 922281, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var s = r(397927),
    l = r(58736),
    a = r(851580),
    i = r(44022),
    o = r(985018);

function c(e) {
    let {
        onOpen: t,
        onClose: r,
        className: c
    } = e;
    return (0, n.jsx)(i.$, {
        onOpen: t,
        onClose: r,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, r, i, u) => (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.In, {
                ...r,
                ref: u,
                className: c,
                onClick: e,
                icon: s.cFy,
                "aria-label": o.intl.string(o.t["2pAkDA"]),
                tooltip: t ? null : o.intl.string(o.t["2pAkDA"]),
                selected: t,
                showBadge: i
            }), (0, n.jsx)(a.v, {
                location: "bookmarks-button",
                targetElementRef: u
            })]
        })
    })
}