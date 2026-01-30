/** chunk id: 348056, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(148810),
    s = n(521502),
    l = n(380610),
    c = n(446347),
    u = n(390486);
async function d(e) {
    if (200 !== (await (0, o.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0)
}
async function f(e) {
    if (200 !== (await (0, o.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0)
}
async function p() {
    await (0, o.iD)(), window.location.reload(!0)
}
let _ = i.memo(function(e) {
    let {
        url: t
    } = e, n = (0, a.cf)([s.A], () => s.A.getCurrentBuildOverride()), o = (0, a.bG)([s.A], () => s.A.getBuildOverride(t)), {
        payload: _,
        validatedURL: h
    } = o, m = n.state === s.U.Resolving || o.state === s.U.Resolving, g = i.useCallback(() => {
        if ((0, l.h4)(o.url) && null != o.override) {
            var e;
            return f(null == (e = o.override) ? void 0 : e.targetBuildOverride)
        }
        return null == _ ? Promise.reject(Error("Invalid override payload")) : ((0, u.R)(o.override, _), d(_))
    }, [_, o]);
    return null != h ? (0, r.jsx)(c.A, {
        loading: m,
        linkMeta: o.override,
        currentOverrides: n.overrides,
        applyBuildOverride: g,
        clearBuildOverride: p,
        url: h
    }) : null
})