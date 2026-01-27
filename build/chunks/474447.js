/** Chunk was on 21425 **/
/** chunk id: 474447, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(573648),
    i = n(855511),
    l = n(652215),
    a = n(985018);

function s(e) {
    var t;
    let n = null != (t = (0, i.A)(e)) ? t : "";
    switch (n) {
        case l.yTV.PS4:
        case l.yTV.PS5:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: n.toUpperCase()
            });
        case l.yTV.XBOX:
        case l.yTV.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aM8, {
                platform: r.A.get(n).name
            });
        default:
            return a.intl.string(a.t["2TbM/G"])
    }
}