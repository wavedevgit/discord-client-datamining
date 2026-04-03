/** chunk id: 395332 params = (module,exports,require) **/
n.d(t, {
    QR: () => c,
    VA: () => g,
    w$: () => u,
    zd: () => d
});
var i = n(64700),
    l = n(207803),
    a = n(403362),
    s = n(369374),
    r = n(415539);

function o(e, t) {
    let {
        data: n
    } = (0, l.FY)(), s = (0, r.A)(n?.map(t).filter(a.Vq) ?? [], e);
    return i.useMemo(() => [...s.values()].some(e => e.enabled), [s])
}

function c(e) {
    let {
        enabled: t
    } = s.A.useConfig({
        location: e.location
    }), n = o(e, e => e.editExperiment);
    return !t && n
}

function d(e) {
    let {
        enabled: t
    } = s.A.useConfig({
        location: e.location
    }), n = o(e, e => e.coachmarkExperiment);
    return !t && n
}

function u(e) {
    let {
        enabled: t
    } = s.A.useConfig({
        location: e.location
    }), {
        data: n
    } = (0, l.FY)(), a = (0, r.A)(n?.map(e => e.editExperiment) ?? [], e);
    return i.useMemo(() => t ? [] : n?.filter(e => a.get(e.editExperiment)?.enabled === !0), [t, n, a])
}

function g(e) {
    let {
        enabled: t
    } = s.A.useConfig({
        location: e.location
    }), {
        data: n
    } = (0, l.FY)(), o = (0, r.A)(n?.map(e => e.editExperiment) ?? [], e), c = (0, r.A)(n?.map(e => e.coachmarkExperiment).filter(a.Vq) ?? [], e);
    return i.useMemo(() => t ? [] : n?.filter(e => o.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && c.get(e.coachmarkExperiment)?.enabled === !0), [t, n, o, c])
}