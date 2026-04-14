/** chunk id: 492749 params = (module,exports,require) **/
n.d(t, {
    R: () => s
});
var i = n(64700),
    a = n(253932),
    l = n(371794),
    r = n(545509);

function s(e, t) {
    let {
        shouldAnimate: n = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = a.kt.useSetting(), o = (0, r.j)(), d = n && o && s;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, l.YE)(e.application_id, e.image_asset, t, d ? void 0 : "webp")
    }, [t, e, d])
}