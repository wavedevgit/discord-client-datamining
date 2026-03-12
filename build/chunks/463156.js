/** chunk id: 463156 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(958805),
    o = n(61881),
    d = n(985018);

function c(e) {
    let {
        isCurrentUser: t,
        onClose: n,
        className: c
    } = e, u = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), A = i.useCallback(() => {
        t && u ? r.A.notifyUnsavedWidgets() : n()
    }, [t, u, n]);
    return (0, l.jsx)("div", {
        className: c,
        children: (0, l.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.cpT0Cq),
            icon: a.PGe,
            onClick: A,
            variant: "secondary",
            size: "sm"
        })
    })
}