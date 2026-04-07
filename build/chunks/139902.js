/** chunk id: 139902 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(573648),
    l = n(153331),
    r = n(855511),
    s = n(652215),
    a = n(985018);

function o(t, e, n) {
    let o = (0, r.A)(t) ?? "",
        u = e === l.O.VOICE_CHANNEL && n;
    switch (o) {
        case s.yTV.PS4:
        case s.yTV.PS5:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: o.toUpperCase()
            });
        case s.yTV.XBOX:
        case s.yTV.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: i.A.get(o).name
            });
        default:
            return a.intl.string(u ? a.t.J4MQFX : a.t["2TbM/G"])
    }
}