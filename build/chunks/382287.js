/** chunk id: 382287 params = (module,exports,require) **/
i.d(t, {
    LJ: () => d,
    WQ: () => s,
    fJ: () => c
}), i(321073);
var n = i(565150),
    a = i(453771),
    l = i(927578),
    o = i(788868),
    r = i(985018);

function s(e, t) {
    let i = a.Hb(a.o2(t));
    return l.Ay.isPremium(e, o.PremiumTypes.TIER_2) ? r.intl.formatToPlainString(r.t.fxEKdS, {
        maxSize: i
    }) : l.Ay.isPremium(e, o.PremiumTypes.TIER_1) ? r.intl.formatToPlainString(r.t["Nr+LsZ"], {
        maxSize: i
    }) : r.intl.formatToPlainString(r.t.fxEKdS, {
        maxSize: i
    })
}

function c(e, t) {
    return a.SH(e, t) || a.Aw(e)
}

function d(e) {
    return e.reduce((e, t) => (t.item.platform === n.xz.WEB && e.push(t.item.file), e), [])
}