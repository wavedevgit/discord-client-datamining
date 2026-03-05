/** chunk id: 285820 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(505779),
    r = n(60465),
    s = n(778591),
    c = n(145963),
    o = n(985018);
let d = new Set(["1402418703554842694", "356877880938070016"]),
    u = function(e) {
        let {
            detectedGame: t
        } = e, n = function(e) {
            let t = (0, s.I)(e.applicationId),
                {
                    applicationId: n,
                    websites: l
                } = e;
            return a.useMemo(() => {
                let e = l.reduce((e, t) => (e[t.category] = t, e), {}),
                    a = [];
                return null != e[i.V.EPICGAMES] && d.has(n) && a.push(e[i.V.EPICGAMES]), null != t && a.push({
                    category: i.V.STEAM,
                    url: t
                }), null != e[i.V.ROBLOX] && a.push(e[i.V.ROBLOX]), null != e[i.V.BATTLENET] && a.push(e[i.V.BATTLENET]), null != e[i.V.RIOT] && a.push(e[i.V.RIOT]), null != e[i.V.MINECRAFT] && a.push(e[i.V.MINECRAFT]), a
            }, [t, l, n])
        }(t);
        return 0 === n.length ? null : 1 === n.length ? (0, l.jsx)(c.uC, {
            website: n[0]
        }) : (0, l.jsx)(c.rZ, {
            text: o.intl.string(o.t["/hMurx"]),
            "aria-label": o.intl.string(o.t.nK60cc),
            onClick: () => r.A.openGameProfileStoreLinksModal({
                detectedGame: t,
                storeWebsites: n
            })
        })
    }