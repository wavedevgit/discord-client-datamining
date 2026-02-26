/** chunk id: 395332, original params: e,t,n (module,exports,require) **/
n.d(t, {
    DB: () => m,
    JY: () => d,
    on: () => u,
    ul: () => g
});
var i = n(64700),
    l = n(207803),
    a = n(368629),
    s = n(403362),
    r = n(415539);

function o(e) {
    return (0, a.r)({
        location: e.location,
        autoTrackExposure: e.autoTrackExposure
    })
}

function c(e, t) {
    let {
        data: n
    } = (0, l.FY)(), a = (0, r.A)(n?.map(t).filter(s.Vq) ?? [], e), c = o(e);
    return i.useMemo(() => !c && [...a.values()].some(e => e.enabled), [c, a])
}

function d(e) {
    return c(e, e => e.editExperiment)
}

function u(e) {
    return c(e, e => e.coachmarkExperiment)
}

function m(e) {
    let {
        data: t
    } = (0, l.FY)(), n = (0, r.A)(t?.map(e => e.editExperiment) ?? [], e), a = o(e);
    return i.useMemo(() => a ? [] : t?.filter(e => n.get(e.editExperiment)?.enabled === !0), [t, n, a])
}

function g(e) {
    let {
        data: t
    } = (0, l.FY)(), n = (0, r.A)(t?.map(e => e.editExperiment) ?? [], e), a = (0, r.A)(t?.map(e => e.coachmarkExperiment).filter(s.Vq) ?? [], e), c = o(e);
    return i.useMemo(() => c ? [] : t?.filter(e => n.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && a.get(e.coachmarkExperiment)?.enabled === !0), [t, n, a, c])
}