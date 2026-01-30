/** chunk id: 474447, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(573648),
    l = n(855511),
    i = n(652215),
    a = n(985018);

function s(e) {
    var t;
    let n = null != (t = (0, l.A)(e)) ? t : "";
    switch (n) {
        case i.yTV.PS4:
        case i.yTV.PS5:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: n.toUpperCase()
            });
        case i.yTV.XBOX:
        case i.yTV.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: r.A.get(n).name
            });
        default:
            return a.intl.string(a.t["2TbM/G"])
    }
}