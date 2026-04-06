/** chunk id: 463156 params = (module,exports,require) **/
i.d(l, {
    A: () => c
});
var t = i(627968),
    n = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(958805),
    o = i(61881),
    d = i(985018);

function c(e) {
    let {
        isCurrentUser: l,
        onClose: i
    } = e, c = (0, s.bG)([o.A], () => o.A.hasUnsavedChanges()), u = n.useCallback(() => {
        l && c ? r.A.notifyUnsavedWidgets() : i()
    }, [l, c, i]);
    return (0, t.jsx)(a.K0, {
        "aria-label": d.intl.string(d.t.cpT0Cq),
        icon: a.PGe,
        onClick: u,
        variant: "secondary",
        size: "sm"
    })
}