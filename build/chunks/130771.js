/** chunk id: 130771, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
}), n(896048);
var i = n(64700),
    s = n(425587);
let r = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            refreshOnDepChange: t
        } = e,
        [n, r] = i.useState([]),
        [l, o] = i.useState(!0),
        a = async () => {
            o(!0);
            try {
                let e = await s.A.fetchTeams(!0);
                r(e.body)
            } catch (e) {}
            o(!1)
        }, d = i.useRef(!0);
    return i.useEffect(() => {
        (d.current || t) && (d.current = !1, a())
    }, [t]), {
        teams: n,
        loading: l,
        refresh: a
    }
}