/** chunk id: 463156 params = (module,exports,require) **/
n.d(l, {
    A: () => c
});
var t = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(958805),
    o = n(61881),
    d = n(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: n
    } = e, c = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), u = i.useCallback(() => {
        l && c ? r.A.notifyUnsavedWidgets() : n()
    }, [l, c, n]);
    return (0, t.jsx)(a.K0, {
        "aria-label": d.intl.string(d.t.cpT0Cq),
        icon: a.PGe,
        onClick: u,
        variant: "secondary",
        size: "sm"
    })
}