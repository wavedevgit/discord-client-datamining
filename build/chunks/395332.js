/** Chunk was on 42944 **/
/** chunk id: 395332, original params: e,a,n (module,exports,require) **/
n.d(a, {
    DB: () => m,
    JY: () => d,
    on: () => u,
    ul: () => p
}), n(896048);
var t = n(64700),
    l = n(207803),
    i = n(368629),
    r = n(403362),
    s = n(415539);

function o(e) {
    return (0, i.r)({
        location: e.location,
        autoTrackExposure: e.autoTrackExposure
    })
}

function c(e, a) {
    var n;
    let {
        data: i
    } = (0, l.FY)(), c = (0, s.A)(null != (n = null == i ? void 0 : i.map(a).filter(r.Vq)) ? n : [], e), d = o(e);
    return t.useMemo(() => !d && [...c.values()].some(e => e.enabled), [d, c])
}

function d(e) {
    return c(e, e => e.editExperiment)
}

function u(e) {
    return c(e, e => e.coachmarkExperiment)
}

function m(e) {
    var a;
    let {
        data: n
    } = (0, l.FY)(), i = (0, s.A)(null != (a = null == n ? void 0 : n.map(e => e.editExperiment)) ? a : [], e), r = o(e);
    return t.useMemo(() => r ? [] : null == n ? void 0 : n.filter(e => {
        var a;
        return (null == (a = i.get(e.editExperiment)) ? void 0 : a.enabled) === !0
    }), [n, i, r])
}

function p(e) {
    var a, n;
    let {
        data: i
    } = (0, l.FY)(), c = (0, s.A)(null != (a = null == i ? void 0 : i.map(e => e.editExperiment)) ? a : [], e), d = (0, s.A)(null != (n = null == i ? void 0 : i.map(e => e.coachmarkExperiment).filter(r.Vq)) ? n : [], e), u = o(e);
    return t.useMemo(() => u ? [] : null == i ? void 0 : i.filter(e => {
        var a, n;
        return (null == (a = c.get(e.editExperiment)) ? void 0 : a.enabled) === !0 && null != e.coachmarkExperiment && (null == (n = d.get(e.coachmarkExperiment)) ? void 0 : n.enabled) === !0
    }), [i, c, d, u])
}