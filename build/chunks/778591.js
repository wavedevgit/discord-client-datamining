/** chunk id: 778591 params = (module,exports,require) **/
n.d(t, {
    I: () => u
});
var l = n(792216),
    a = n(505779),
    i = n(311907),
    r = n(587895),
    s = n(223273),
    c = n(136086),
    o = n(240248),
    d = n(652215);

function u(e) {
    return (0, i.bG)([c.A, r.A], () => {
        if (null == e) return null;
        let t = c.A.getGame(e),
            n = t?.supplementalData,
            i = r.A.getApplication(e);
        if (n?.steamReleaseStatus === l.Y.RETIRED_ABANDONED) return null;
        if (i?.linkedGames?.some(e => e.type === s.Mh.OFFICIAL)) {
            let e = t?.thirdPartySkus?.find(e => e.distributor === d.d3x.STEAM),
                n = e?.id;
            if (!(0, o.uJ)(n)) return `https://store.steampowered.com/app/${encodeURIComponent(n)}`;
            return null
        }
        if (n?.websites == null) return null;
        let u = n.websites.find(e => e.category === a.V.STEAM);
        return u?.url ?? null
    }, [e])
}