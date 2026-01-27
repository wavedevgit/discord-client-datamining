/** Chunk was on web.js **/
/** chunk id: 928550, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => d,
    d: () => f
});
var r = n(311907),
    i = n(627363),
    a = n(651743),
    o = n(134861),
    s = n(760751),
    l = n(189081),
    c = n(194871),
    u = n(144914);

function d(e) {
    return (0, r.bG)([l.A, a.A, c.A, o.A], () => null != e && (0, u.A)({
        LibraryApplicationStore: l.A,
        LaunchableGameStore: a.A,
        DispatchApplicationStore: c.A,
        ConnectedAppsStore: o.A,
        applicationId: e
    }), [e])
}

function f(e) {
    let {
        data: t
    } = (0, i.YY)(e), n = (0, r.bG)([s.A], () => {
        var e;
        return null != t ? null != (e = s.A.getOfficialGame(t)) ? e : s.A.getGameByApplication(t) : null
    }, [t]), a = d(e), o = d(null == n ? void 0 : n.id);
    return null != n && o ? n.id : a && null != e ? e : null
}