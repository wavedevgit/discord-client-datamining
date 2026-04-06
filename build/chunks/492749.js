/** chunk id: 492749 params = (module,exports,require) **/
n.d(t, {
    R: () => r
});
var i = n(64700),
    l = n(253932),
    s = n(371794),
    a = n(545509);

function r(e, t) {
    let {
        shouldAnimate: n = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = l.kt.useSetting(), o = (0, a.j)(), d = n && o && r;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, s.YE)(e.application_id, e.image_asset, t, d ? void 0 : "webp")
    }, [t, e, d])
}