/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => s
});
var r = n(64700),
    i = n(253932),
    l = n(371794),
    a = n(545509);

function s(e, t) {
    let {
        shouldAnimate: n = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = i.kt.useSetting(), o = (0, a.j)(), c = n && o && s;
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, l.YE)(e.application_id, e.image_asset, t, c ? void 0 : "webp")
    }, [t, e, c])
}