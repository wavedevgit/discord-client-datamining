/** chunk id: 857253, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(961350),
    l = n(977997),
    a = n(643501);

function r() {
    return (0, i.bG)([s.default, l.A, a.default], () => {
        let e = s.default.getId(),
            t = a.default.getRemoteSessionId();
        return l.A.getVoiceStateForSession(e, t) ?? void 0
    }, [])
}