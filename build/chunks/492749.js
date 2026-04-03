/** chunk id: 492749 params = (module,exports,require) **/
n.d(t, {
    R: () => a
});
var i = n(64700),
    l = n(253932),
    r = n(371794),
    s = n(545509);

function a(e, t) {
    let {
        shouldAnimate: n = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = l.kt.useSetting(), o = (0, s.j)(), d = n && o && a;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, r.YE)(e.application_id, e.image_asset, t, d ? void 0 : "webp")
    }, [t, e, d])
}