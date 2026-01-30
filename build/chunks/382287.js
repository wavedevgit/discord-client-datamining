/** Chunk was on 89488 **/
/** chunk id: 382287, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LJ: () => s,
    WQ: () => _,
    fJ: () => c
}), n(321073);
var r = n(565150),
    i = n(453771),
    o = n(927578),
    a = n(788868),
    l = n(985018);

function _(e, t) {
    let n = i.Hb(i.o2(t));
    return o.Ay.isPremium(e, a.PremiumTypes.TIER_2) ? l.intl.formatToPlainString(l.t.fxEKdS, {
        maxSize: n
    }) : o.Ay.isPremium(e, a.PremiumTypes.TIER_1) ? l.intl.formatToPlainString(l.t["Nr+LsZ"], {
        maxSize: n
    }) : l.intl.formatToPlainString(l.t.fxEKdS, {
        maxSize: n
    })
}

function c(e, t) {
    return i.SH(e, t) || i.Aw(e)
}

function s(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), [])
}