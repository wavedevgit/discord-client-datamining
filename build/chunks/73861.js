/** chunk id: 73861 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(189081),
    a = n(67480),
    s = n(674378),
    o = n(598429),
    d = n(979604);

function c(e) {
    let {
        application: t,
        fullWidth: n = !1,
        size: c = "md",
        playButtonVariant: u,
        disabledVariant: _,
        hideNotLaunchable: m,
        tooltipPosition: h,
        onClick: p,
        className: g,
        source: A,
        hover: x,
        innerClassName: f
    } = e, C = {
        fullWidth: n,
        size: c,
        disabledVariant: _,
        tooltipPosition: h,
        onClick: p,
        className: g,
        hover: x,
        innerClassName: f
    }, E = (0, l.bG)([r.A], () => r.A.getActiveLibraryApplication(t.id)), I = null != E ? E.sku.id : null, b = null != I ? I : t.primarySkuId, T = (0, l.bG)([a.A], () => null != b && !a.A.didFetchingSkuFail(b));
    return null != E && (0, s.XZ)(E) ? (0, i.jsx)(d.A, {
        ...C,
        playButtonVariant: u,
        libraryApplication: E,
        source: A
    }) : T ? (0, i.jsx)("div", {
        children: "deprecated!"
    }) : (0, i.jsx)(o.A, {
        ...C,
        variant: u,
        hideNotLaunchable: m,
        applicationId: t.id
    })
}