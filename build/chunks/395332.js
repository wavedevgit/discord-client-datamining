/** chunk id: 395332 params = (module,exports,require) **/
n.d(t, {
    QR: () => c,
    VA: () => m,
    w$: () => u,
    zd: () => d
});
var a = n(64700),
    l = n(207803),
    i = n(403362),
    r = n(369374),
    s = n(415539);

function o(e, t) {
    let {
        data: n
    } = (0, l.FY)(), r = (0, s.A)(n?.map(t).filter(i.Vq) ?? [], e);
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
    } = (0, l.FY)(), i = (0, s.A)(n?.map(e => e.editExperiment) ?? [], e);
    return a.useMemo(() => t ? [] : n?.filter(e => i.get(e.editExperiment)?.enabled === !0), [t, n, i])
}

function m(e) {
    let {
        enabled: t
    } = r.A.useConfig({
        location: e.location
    }), {
        data: n
    } = (0, l.FY)(), o = (0, s.A)(n?.map(e => e.editExperiment) ?? [], e), c = (0, s.A)(n?.map(e => e.coachmarkExperiment).filter(i.Vq) ?? [], e);
    return a.useMemo(() => t ? [] : n?.filter(e => o.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && c.get(e.coachmarkExperiment)?.enabled === !0), [t, n, o, c])
}