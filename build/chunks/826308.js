/** Chunk was on 84264 **/
/** chunk id: 826308, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => p
});
var l = e(627968),
    o = e(64700),
    a = e(284009),
    c = e.n(a),
    i = e(397927),
    r = e(954571),
    d = e(723702),
    s = e(652215),
    u = e(985018);

function p(n) {
    let t = o.useCallback(() => {
        c()(null != n, "text cannot be null"), r.default.track(s.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(n)), "_blank")
    }, [n]);
    return d.isPlatformEmbedded && null != n && (null == n ? void 0 : n.length) !== 0 ? [(0, l.jsx)(i.Drp, {
        id: "search-google",
        label: u.intl.string(u.t["Rd/Mko"]),
        leadingAccessory: {
            type: "icon",
            icon: i.$p$
        },
        action: t
    }, "search-google")] : null
}