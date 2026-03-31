/** chunk id: 525104 params = (module,exports,require) **/
s.d(t, {
    A: () => o
}), s(321073);
var n = s(64700),
    a = s(311907),
    r = s(555337),
    l = s(645619),
    i = s(743981);

function o() {
    let e = (0, a.bG)([r.A], () => r.A.getGuild()),
        t = (0, a.bG)([l.A], () => l.A.getStateForGuild(e?.id)?.allPowerups);
    return (0, n.useMemo)(() => {
        let s = i.hc.map(e => ({
                kind: e
            })),
            n = [];
        return e?.features == null || Object.keys(i.Tf).forEach(a => {
            let r = i.Tf[a],
                l = i.kO[a],
                o = t?.[l],
                c = o?.title,
                d = r.map(e => ({
                    kind: e,
                    packName: c
                }));
            e.features.has(a) ? s.push(...d) : n.push(...d)
        }), {
            unlockedBadges: s,
            lockedBadges: n
        }
    }, [e?.features, t])
}