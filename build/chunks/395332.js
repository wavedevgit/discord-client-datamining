/** chunk id: 395332 params = (module,exports,require) **/
n.d(t, {
    QR: () => c,
    VA: () => m,
    w$: () => u,
    zd: () => d
});
var a = n(64700),
    i = n(207803),
    l = n(403362),
    r = n(369374),
    s = n(415539);

function o(e, t) {
    let {
        data: n
    } = (0, i.FY)(), r = (0, s.A)(n?.map(t).filter(l.Vq) ?? [], e);
    return a.useMemo(() => [...r.values()].some(e => e.enabled), [r])
}

function c(e) {
    let {
        enabled: t
    } = r.A.useConfig({
        location: e.location
    }), n = o(e, e => e.editExperiment);
    return !t && n
}

function d(e) {
    let {
        enabled: t
    } = r.A.useConfig({
        location: e.location
    }), n = o(e, e => e.coachmarkExperiment);
    return !t && n
}

function u(e) {
    let {
        enabled: t
    } = r.A.useConfig({
        location: e.location
    }), {
        data: n
    } = (0, i.FY)(), l = (0, s.A)(n?.map(e => e.editExperiment) ?? [], e);
    return a.useMemo(() => t ? [] : n?.filter(e => l.get(e.editExperiment)?.enabled === !0), [t, n, l])
}

function m(e) {
    let {
        enabled: t
    } = r.A.useConfig({
        location: e.location
    }), {
        data: n
    } = (0, i.FY)(), o = (0, s.A)(n?.map(e => e.editExperiment) ?? [], e), c = (0, s.A)(n?.map(e => e.coachmarkExperiment).filter(l.Vq) ?? [], e);
    return a.useMemo(() => t ? [] : n?.filter(e => o.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && c.get(e.coachmarkExperiment)?.enabled === !0), [t, n, o, c])
}