/** chunk id: 463156 params = (module,exports,require) **/
i.d(l, {
    A: () => c
});
var n = i(627968),
    t = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(958805),
    o = i(61881),
    d = i(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: i,
        className: c
    } = e, u = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), A = t.useCallback(() => {
        l && u ? r.A.notifyUnsavedWidgets() : i()
    }, [l, u, i]);
    return (0, n.jsx)("div", {
        className: c,
        children: (0, n.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.cpT0Cq),
            icon: a.PGe,
            onClick: A,
            variant: "secondary",
            size: "sm"
        })
    })
}