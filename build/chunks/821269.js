/** chunk id: 821269 params = (module,exports,require) **/
"use strict";
i.d(t, {
    q: () => d
});
var n = i(64700),
    s = i(311907),
    a = i(994500),
    l = i(287809),
    r = i(922590);
let o = [];

function d(e) {
    let {
        userId: t
    } = e, i = (0, s.bG)([a.A, l.default], () => a.A.isFriend(t) || l.default.getUser(t)?.isProvisional), d = (0, r.f1)(t);
    return n.useMemo(() => i ? o : d.map(e => {
        let {
            applicationId: t
        } = e;
        return t
    }), [d, i])
}