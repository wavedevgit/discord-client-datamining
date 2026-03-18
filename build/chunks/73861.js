/** chunk id: 73861 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(189081),
    l = n(67480),
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
    }, I = (0, r.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)), E = null != I ? I.sku.id : null, v = null != E ? E : t.primarySkuId, b = (0, r.bG)([l.A], () => null != v && !l.A.didFetchingSkuFail(v));
    return null != I && (0, s.XZ)(I) ? (0, i.jsx)(d.A, {
        ...C,
        playButtonVariant: u,
        libraryApplication: I,
        source: A
    }) : b ? (0, i.jsx)("div", {
        children: "deprecated!"
    }) : (0, i.jsx)(o.A, {
        ...C,
        variant: u,
        hideNotLaunchable: m,
        applicationId: t.id
    })
}