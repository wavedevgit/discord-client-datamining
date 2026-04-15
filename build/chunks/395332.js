/** chunk id: 395332 params = (module,exports,require) **/
i.d(t, {
    QR: () => o,
    VA: () => g,
    w$: () => u,
    zd: () => c
});
var n = i(64700),
    l = i(207803),
    s = i(403362),
    a = i(369374),
    r = i(415539);

function d(e, t) {
    let {
        data: i
    } = (0, l.FY)(), a = (0, r.A)(i?.map(t).filter(s.Vq) ?? [], e);
    return n.useMemo(() => [...a.values()].some(e => e.enabled), [a])
}

function o(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), i = d(e, e => e.editExperiment);
    return !t && i
}

function c(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), i = d(e, e => e.coachmarkExperiment);
    return !t && i
}

function u(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), {
        data: i
    } = (0, l.FY)(), s = (0, r.A)(i?.map(e => e.editExperiment) ?? [], e);
    return n.useMemo(() => t ? [] : i?.filter(e => s.get(e.editExperiment)?.enabled === !0), [t, i, s])
}

function g(e) {
    let {
        enabled: t
    } = a.A.useConfig({
        location: e.location
    }), {
        data: i
    } = (0, l.FY)(), d = (0, r.A)(i?.map(e => e.editExperiment) ?? [], e), o = (0, r.A)(i?.map(e => e.coachmarkExperiment).filter(s.Vq) ?? [], e);
    return n.useMemo(() => t ? [] : i?.filter(e => d.get(e.editExperiment)?.enabled === !0 && null != e.coachmarkExperiment && o.get(e.coachmarkExperiment)?.enabled === !0), [t, i, d, o])
}