/** chunk id: 309632, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048);
var l = n(64700),
    r = n(311907),
    i = n(602582),
    s = n(946132);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        a = e.id,
        [o, u] = (0, r.yK)([s.A], () => t ? [null, !0] : [s.A.message(n, a), s.A.isLatest(n, a)]);
    return (0, l.useEffect)(() => {
        null == a || u || i.A.addWant(a)
    }, [a, u]), o
}