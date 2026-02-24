/** chunk id: 382287, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LJ: () => c,
    WQ: () => _,
    fJ: () => s
}), n(321073);
var r = n(565150),
    i = n(453771),
    a = n(927578),
    o = n(788868),
    l = n(985018);

function _(e, t) {
    let n = i.Hb(i.o2(t));
    return a.Ay.isPremium(e, o.PremiumTypes.TIER_2) ? l.intl.formatToPlainString(l.t.fxEKdS, {
        maxSize: n
    }) : a.Ay.isPremium(e, o.PremiumTypes.TIER_1) ? l.intl.formatToPlainString(l.t["Nr+LsZ"], {
        maxSize: n
    }) : l.intl.formatToPlainString(l.t.fxEKdS, {
        maxSize: n
    })
}

function s(e, t) {
    return i.SH(e, t) || i.Aw(e)
}

function c(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), [])
}