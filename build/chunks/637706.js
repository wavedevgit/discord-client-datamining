/** chunk id: 637706 params = (module,exports,require) **/
n.d(t, {
    a: () => o
});
var i = n(311907),
    s = n(97352),
    l = n(927578),
    r = n(580630),
    a = n(788868);

function o(e) {
    let t = "...",
        n = (0, i.bG)([s.A], () => s.A.isLoadedForSKU(a.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n) try {
        let e = l.Ay.getDefaultPrice(a.gD.PREMIUM_MONTH_TIER_2);
        t = (0, r.$g)(e.amount, e.currency)
    } catch {}
    return e.replace(/\{price\}/g, t)
}