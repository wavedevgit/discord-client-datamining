/** chunk id: 778591 params = (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => m
});
var a = n(792216),
    l = n(505779),
    i = n(311907),
    r = n(587895),
    s = n(223273),
    c = n(136086),
    o = n(760751),
    d = n(240248),
    u = n(652215);

function m(e) {
    return (0, i.bG)([o.A, c.A, r.A], () => {
        if (null == e) return null;
        let t = o.A.getDetectableGame(e),
            n = c.A.getGame(e),
            i = n?.supplementalData,
            m = r.A.getApplication(e);
        if (i?.steamReleaseStatus === a.Y.RETIRED_ABANDONED) return null;
        if (m?.linkedGames?.some(e => e.type === s.Mh.OFFICIAL) === !0) {
            let e = t?.thirdPartySkus?.find(e => e.distributor === u.d3x.STEAM),
                n = e?.id;
            if (!(0, d.uJ)(n)) return "https://store.steampowered.com/app/{app_id}".replace("{app_id}", n);
            return null
        }
        if (i?.websites == null) return null;
        let x = i.websites.find(e => e.category === l.V.STEAM);
        return x?.url ?? null
    }, [e])
}