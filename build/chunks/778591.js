/** chunk id: 778591, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => m
});
var i = n(792216),
    l = n(505779),
    a = n(311907),
    s = n(587895),
    r = n(223273),
    o = n(136086),
    c = n(760751),
    d = n(240248),
    u = n(652215);

function m(e) {
    return (0, a.bG)([c.A, o.A, s.A], () => {
        if (null == e) return null;
        let t = c.A.getDetectableGame(e),
            n = o.A.getGame(e),
            a = n?.supplementalData,
            m = s.A.getApplication(e);
        if (a?.steamReleaseStatus === i.Y.RETIRED_ABANDONED) return null;
        if (m?.linkedGames?.some(e => e.type === r.Mh.OFFICIAL) === !0) {
            let e = t?.thirdPartySkus?.find(e => e.distributor === u.d3x.STEAM),
                n = e?.id;
            if (!(0, d.uJ)(n)) return "https://store.steampowered.com/app/{app_id}".replace("{app_id}", n);
            return null
        }
        if (a?.websites == null) return null;
        let x = a.websites.find(e => e.category === l.V.STEAM);
        return x?.url ?? null
    }, [e])
}