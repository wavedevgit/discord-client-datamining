/** chunk id: 637706, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => o
}), n(747238), n(812715);
var r = n(311907),
    i = n(97352),
    l = n(927578),
    s = n(580630),
    a = n(788868);

function o(e) {
    let t = "...",
        n = (0, r.bG)([i.A], () => i.A.isLoadedForSKU(a.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n) try {
        let e = l.Ay.getDefaultPrice(a.gD.PREMIUM_MONTH_TIER_2);
        t = (0, s.$g)(e.amount, e.currency)
    } catch (e) {}
    return e.replace(/\{price\}/g, t)
}