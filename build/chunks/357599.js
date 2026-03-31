/** chunk id: 357599 params = (module,exports,require) **/
n.d(t, {
    _: () => o
}), n(321073);
var a = n(64700),
    i = n(792216),
    l = n(505779),
    r = n(778591);
let s = new Set(["1402418703554842694", "356877880938070016"]),
    c = [l.V.EPICGAMES, l.V.STEAM, l.V.ROBLOX, l.V.BATTLENET, l.V.RIOT, l.V.MINECRAFT];

function o(e) {
    let t = (0, r.I)(e?.applicationId),
        n = e?.applicationId,
        o = e?.websites,
        d = e?.steamReleaseStatus;
    return a.useMemo(() => {
        if (null == o || null == n) return [];
        let e = o.filter(e => (e.category !== l.V.EPICGAMES || !!s.has(n)) && (e.category !== l.V.STEAM || d !== i.Y.RETIRED_ABANDONED) && c.includes(e.category));
        return null == t || d === i.Y.RETIRED_ABANDONED || e.some(e => e.category === l.V.STEAM) || e.push({
            category: l.V.STEAM,
            url: t
        }), e.sort((e, t) => e.category === l.V.STEAM ? -1 : +(t.category === l.V.STEAM))
    }, [t, o, n, d])
}