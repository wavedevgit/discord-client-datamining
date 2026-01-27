/** Chunk was on web.js **/
/** chunk id: 144914, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s,
    S: () => o
});
var r = n(674378),
    i = n(723702),
    a = n(837921);

function o() {
    return (0, i.isWindows)() && "arm64" !== a.Ay.architecture || (0, i.isMac)()
}

function s(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: i,
        ConnectedAppsStore: a,
        applicationId: o,
        branchId: s
    } = e;
    if (a.isConnected(o) || (null == s && (s = o), i.isLaunchable(o, s))) return !0;
    let l = t.getLibraryApplication(o, s);
    return !(null != l && (0, r.XZ)(l)) && n.isLaunchable(o)
}