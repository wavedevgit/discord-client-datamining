/** chunk id: 463156 params = (module,exports,require) **/
t.d(l, {
    A: () => c
});
var n = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(958805),
    o = t(61881),
    d = t(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: t
    } = e, c = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), u = i.useCallback(() => {
        l && c ? r.A.notifyUnsavedWidgets() : t()
    }, [l, c, t]);
    return (0, n.jsx)(a.K0, {
        "aria-label": d.intl.string(d.t.cpT0Cq),
        icon: a.PGe,
        onClick: u,
        variant: "secondary",
        size: "sm"
    })
}