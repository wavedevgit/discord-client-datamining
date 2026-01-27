/** Chunk was on 80717 **/
/** chunk id: 382287, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LJ: () => u,
    WQ: () => s,
    fJ: () => c
}), n(321073);
var r = n(565150),
    i = n(453771),
    l = n(927578),
    o = n(788868),
    a = n(985018);

function s(e, t) {
    let n = i.Hb(i.o2(t));
    return l.Ay.isPremium(e, o.PremiumTypes.TIER_2) ? a.intl.formatToPlainString(a.t.fxEKdS, {
        maxSize: n
    }) : l.Ay.isPremium(e, o.PremiumTypes.TIER_1) ? a.intl.formatToPlainString(a.t["Nr+LsZ"], {
        maxSize: n
    }) : a.intl.formatToPlainString(a.t.fxEKdS, {
        maxSize: n
    })
}

function c(e, t) {
    return i.SH(e, t) || i.Aw(e)
}

function u(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), [])
}