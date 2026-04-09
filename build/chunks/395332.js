/** chunk id: 395332 params = (module,exports,require) **/
i.d(t, {
    QR: () => d,
    VA: () => g,
    w$: () => u,
    zd: () => c
});
var n = i(64700),
    s = i(207803),
    l = i(403362),
    a = i(369374),
    r = i(415539);

function o(e, t) {
    let {
        data: i
    } = (0, s.FY)(), a = (0, r.A)(i?.map(t).filter(l.Vq) ?? [], e);
    return n.useMemo(() => [...a.values()].some(e => e.enabled), [a])
}

function d(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), i = o(e, e => e.editExperiment);
    return !t && i
}

function c(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), i = o(e, e => e.coachmarkExperiment);
    return !t && i
}

function u(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), {
        data: i
    } = (0, s.FY)(), l = (0, r.A)(i?.map(e => e.editExperiment) ?? [], e);
    return n.useMemo(() => t ? [] : i?.filter(e => l.get(e.editExperiment)?.enabled === !0), [t, i, l])
}

function g(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), {
        data: i
    } = (0, s.FY)(), o = (0, r.A)(i?.map(e => e.editExperiment) ?? [], e), d = (0, r.A)(i?.map(e => e.coachmarkExperiment).filter(l.Vq) ?? [], e);
    return n.useMemo(() => t ? [] : i?.filter(e => o.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && d.get(e.coachmarkExperiment)?.enabled === !0), [t, i, o, d])
}