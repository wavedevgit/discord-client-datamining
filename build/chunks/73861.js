/** chunk id: 73861 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(189081),
    r = n(67480),
    a = n(674378),
    o = n(598429),
    d = n(979604);

function c(e) {
    let {
        application: t,
        fullWidth: n = !1,
        size: c = "md",
        playButtonVariant: u,
        disabledVariant: m,
        hideNotLaunchable: _,
        tooltipPosition: h,
        onClick: p,
        className: g,
        source: A,
        hover: x,
        innerClassName: f
    } = e, C = {
        fullWidth: n,
        size: c,
        disabledVariant: m,
        tooltipPosition: h,
        onClick: p,
        className: g,
        hover: x,
        innerClassName: f
    }, E = (0, l.bG)([s.A], () => s.A.getActiveLibraryApplication(t.id)), I = null != E ? E.sku.id : null, v = null != I ? I : t.primarySkuId, b = (0, l.bG)([r.A], () => null != v && !r.A.didFetchingSkuFail(v));
    return null != E && (0, a.XZ)(E) ? (0, i.jsx)(d.A, {
        ...C,
        playButtonVariant: u,
        libraryApplication: E,
        source: A
    }) : b ? (0, i.jsx)("div", {
        children: "deprecated!"
    }) : (0, i.jsx)(o.A, {
        ...C,
        variant: u,
        hideNotLaunchable: _,
        applicationId: t.id
    })
}