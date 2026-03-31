/** chunk id: 139902 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(573648),
    a = i(153331),
    l = i(855511),
    s = i(652215),
    r = i(985018);

function o(e, t, i) {
    let o = (0, l.A)(e) ?? "",
        c = t === a.O.VOICE_CHANNEL && i;
    switch (o) {
        case s.yTV.PS4:
        case s.yTV.PS5:
            return r.intl.formatToPlainString(r.t.A17aM8, {
                platform: o.toUpperCase()
            });
        case s.yTV.XBOX:
        case s.yTV.SAMSUNG:
            return r.intl.formatToPlainString(r.t.A17aM8, {
                platform: n.A.get(o).name
            });
        default:
            return r.intl.string(c ? r.t.J4MQFX : r.t["2TbM/G"])
    }
}