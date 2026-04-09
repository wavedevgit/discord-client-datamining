/** chunk id: 637706 params = (module,exports,require) **/
n.d(t, {
    a: () => c
});
var i = n(311907),
    r = n(97352),
    a = n(927578),
    s = n(580630),
    l = n(788868);

function c(e) {
    let t = "...",
        n = (0, i.bG)([r.A], () => r.A.isLoadedForSKU(l.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n) try {
        let e = a.Ay.getDefaultPrice(l.gD.PREMIUM_MONTH_TIER_2);
        t = (0, s.$g)(e.amount, e.currency)
    } catch {}
    return e.replace(/\{price\}/g, t)
}