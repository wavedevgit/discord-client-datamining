/** chunk id: 417876, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(960488),
    a = n(311907),
    o = n(49463),
    s = n(961350),
    l = n(652215);
let c = e => {
        let {
            hasLoadedExperiments: t,
            token: n
        } = e;
        return null != n ? (0, r.jsx)(i.rd, {
            to: l.BVt.APP
        }) : t ? (0, r.jsx)(i.rd, {
            to: l.BVt.DEFAULT_LOGGED_OUT
        }) : null
    },
    u = a.Ay.connectStores([o.A, s.default], () => {
        let e = s.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || o.A.hasLoadedExperiments
        }
    })(c)