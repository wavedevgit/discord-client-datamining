/** chunk id: 492749 params = (module,exports,require) **/
n.d(t, {
    R: () => s
});
var i = n(64700),
    r = n(253932),
    a = n(371794),
    l = n(545509);

function s(e, t) {
    let {
        shouldAnimate: n = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = r.kt.useSetting(), o = (0, l.j)(), d = n && o && s;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, a.YE)(e.application_id, e.image_asset, t, d ? void 0 : "webp")
    }, [t, e, d])
}