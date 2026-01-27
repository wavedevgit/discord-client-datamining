/** Chunk was on 52390 **/
/** chunk id: 309632, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(602582),
    a = n(946132);

function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        o = e.id,
        [s, u] = (0, l.yK)([a.A], () => t ? [null, !0] : [a.A.message(n, o), a.A.isLatest(n, o)]);
    return (0, r.useEffect)(() => {
        null == o || u || i.A.addWant(o)
    }, [o, u]), s
}