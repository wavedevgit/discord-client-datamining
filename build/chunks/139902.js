/** chunk id: 139902 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(573648),
    l = n(855511),
    s = n(652215),
    a = n(985018);

function r(e) {
    let t = (0, l.A)(e) ?? "";
    switch (t) {
        case s.yTV.PS4:
        case s.yTV.PS5:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: t.toUpperCase()
            });
        case s.yTV.XBOX:
        case s.yTV.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: i.A.get(t).name
            });
        default:
            return a.intl.string(a.t["2TbM/G"])
    }
}