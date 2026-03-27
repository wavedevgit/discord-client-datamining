/** chunk id: 630117 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var r = n(512750),
    i = n(6316),
    s = n(141406),
    l = n(738072),
    o = n(136708),
    a = n(985018);

function d(e) {
    let t = (0, s.A)(e),
        n = (0, i.A)(e),
        d = t.length > 0 || n.length > 0;
    if (!d) return {
        shouldShow: !1,
        expiringPowerups: [],
        expiringPowerupNames: [],
        warnings: []
    };
    let u = n.length > 0 ? a.intl.string(l.default["B3OfL/"]) : void 0,
        c = [...t.map(e => e.title), ...null != u ? [u] : []],
        m = [];
    return t.some(e => e.skuId === r.FB) && m.push(a.intl.string(o.default.Sfr0Jw)), n.length > 0 && m.push(a.intl.string(l.default.wiungr)), {
        shouldShow: d,
        expiringPowerups: t,
        expiringPowerupNames: c,
        warnings: m
    }
}