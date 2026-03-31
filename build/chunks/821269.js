/** chunk id: 821269 params = (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => d
});
var i = n(64700),
    s = n(311907),
    a = n(994500),
    l = n(287809),
    r = n(922590);
let o = [];

function d(e) {
    let {
        userId: t
    } = e, n = (0, s.bG)([a.A, l.default], () => a.A.isFriend(t) || l.default.getUser(t)?.isProvisional), d = (0, r.f1)(t);
    return i.useMemo(() => n ? o : d.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [d, n])
}