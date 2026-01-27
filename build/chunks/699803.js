/** Chunk was on web.js **/
/** chunk id: 699803, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(429913),
    o = n(989837),
    s = n(485878);

function l() {
    let e = (0, i.bG)([o.A], () => o.A.initialState(), []),
        t = (0, a.h)(null == e ? void 0 : e.applicationId);
    return r.useMemo(() => {
        if (null == e) return;
        let n = [{
            type: s.Wy.HOME
        }];
        return null != e.applicationId && null != t && n.push({
            type: s.Wy.APPLICATION,
            application: t
        }), n
    }, [e, t])
}