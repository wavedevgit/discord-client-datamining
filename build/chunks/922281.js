/** chunk id: 922281 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(966871),
    r = n(851580),
    s = n(44022),
    o = n(985018);

function d(e) {
    let {
        onOpen: t,
        onClose: n
    } = e;
    return (0, i.jsx)(s.$, {
        onOpen: t,
        onClose: n,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, s, d) => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.A, {
                ...n,
                ref: d,
                onClick: e,
                icon: a.cFy,
                tooltip: o.intl.string(o.t["2pAkDA"]),
                selected: t,
                showBadge: s
            }), (0, i.jsx)(r.v, {
                location: "bookmarks-button",
                targetElementRef: d
            })]
        })
    })
}