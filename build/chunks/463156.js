/** chunk id: 463156 params = (module,exports,require) **/
n.d(l, {
    A: () => c
});
var i = n(627968),
    t = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(958805),
    o = n(61881),
    d = n(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: n,
        className: c
    } = e, u = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), A = t.useCallback(() => {
        l && u ? r.A.notifyUnsavedWidgets() : n()
    }, [l, u, n]);
    return (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.cpT0Cq),
            icon: a.PGe,
            onClick: A,
            variant: "secondary",
            size: "sm"
        })
    })
}