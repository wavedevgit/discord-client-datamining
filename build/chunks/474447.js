/** chunk id: 474447, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(573648),
    l = n(153331),
    r = n(855511),
    a = n(652215),
    s = n(985018);

function o(t, e, n) {
    let o = (0, r.A)(t) ?? "",
        d = e === l.O.VOICE_CHANNEL && n;
    switch (o) {
        case a.yTV.PS4:
        case a.yTV.PS5:
            return s.intl.formatToPlainString(s.t.A17aM8, {
                platform: o.toUpperCase()
            });
        case a.yTV.XBOX:
        case a.yTV.SAMSUNG:
            return s.intl.formatToPlainString(s.t.A17aM8, {
                platform: i.A.get(o).name
            });
        default:
            return s.intl.string(d ? s.t.J4MQFX : s.t["2TbM/G"])
    }
}