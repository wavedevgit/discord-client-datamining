/** chunk id: 637706 params = (module,exports,require) **/
n.d(t, {
    C: () => u,
    a: () => d
});
var i = n(311907),
    r = n(97352),
    a = n(975571),
    s = n(927578),
    l = n(580630),
    o = n(788868),
    c = n(985018);

function d(e) {
    let t = "...",
        n = (0, i.bG)([r.A], () => r.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n) try {
        let e = s.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
        t = (0, l.$g)(e.amount, e.currency)
    } catch {}
    return e.replace(/\{price\}/g, t)
}

function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : c.intl.string(c.t["sBp+u0"]);
    return {
        url: a.A.getArticleURL(n),
        linkText: i
    }
}