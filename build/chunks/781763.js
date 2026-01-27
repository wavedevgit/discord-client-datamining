/** Chunk was on web.js **/
/** chunk id: 781763, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => f,
    w: () => p
}), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    o = n(73153),
    s = n(922512),
    l = n(189081),
    c = n(144914),
    u = n(652215);
let d = 50;
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.entitledBranchIds;
    if (!(0, c.S)() || 0 === e.length) return [];
    let t = i().chunk(e, d);
    try {
        let e = t.map(async e => (await a.Bo.post({
                url: u.Rsh.APPLICATION_BRANCHES,
                body: {
                    branch_ids: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })).body.map(s.A.createFromServer)),
            n = await Promise.all(e),
            r = i().flatten(n);
        return o.h.dispatch({
            type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
            branches: r
        }), r
    } catch (t) {
        return o.h.dispatch({
            type: "APPLICATION_BRANCHES_FETCH_FAIL",
            branchIds: e
        }), []
    }
}
async function p(e) {
    try {
        let t = await a.Bo.get({
                url: u.Rsh.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = Array.isArray(t.body) ? t.body.map(s.A.createFromServer) : [];
        return o.h.dispatch({
            type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
            applicationId: e,
            branches: n
        }), n
    } catch (t) {
        return o.h.dispatch({
            type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
            applicationId: e
        }), []
    }
}