/** chunk id: 463156 params = (module,exports,require) **/
t.d(l, {
    A: () => c
});
var i = t(627968),
    n = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(958805),
    o = t(61881),
    d = t(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: t,
        className: c
    } = e, u = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), m = n.useCallback(() => {
        l && u ? r.A.notifyUnsavedWidgets() : t()
    }, [l, u, t]);
    return (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(a.K0, {
            "aria-label": d.intl.string(d.t.cpT0Cq),
            icon: a.PGe,
            onClick: m,
            variant: "secondary",
            size: "sm"
        })
    })
}