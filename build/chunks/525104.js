/** chunk id: 525104, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(321073), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(555337),
    s = n(645619),
    a = n(743981);

function o() {
    let e = (0, i.bG)([l.A], () => l.A.getGuild()),
        t = (0, i.bG)([s.A], () => {
            var t;
            return null == (t = s.A.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups
        });
    return (0, r.useMemo)(() => {
        let n = a.hc.map(e => ({
                kind: e
            })),
            r = [];
        return (null == e ? void 0 : e.features) == null || Object.keys(a.Tf).forEach(i => {
            let l = a.Tf[i],
                s = a.kO[i],
                o = null == t ? void 0 : t[s],
                c = null == o ? void 0 : o.title,
                d = l.map(e => ({
                    kind: e,
                    packName: c
                }));
            e.features.has(i) ? n.push(...d) : r.push(...d)
        }), {
            unlockedBadges: n,
            lockedBadges: r
        }
    }, [null == e ? void 0 : e.features, t])
}