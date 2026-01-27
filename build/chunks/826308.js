/** Chunk was on 84264 **/
/** chunk id: 826308, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => p
});
var l = t(627968),
    o = t(64700),
    a = t(284009),
    c = t.n(a),
    i = t(397927),
    r = t(954571),
    d = t(723702),
    s = t(652215),
    u = t(985018);

function p(n) {
    let e = o.useCallback(() => {
        c()(null != n, "text cannot be null"), r.default.track(s.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(n)), "_blank")
    }, [n]);
    return d.isPlatformEmbedded && null != n && (null == n ? void 0 : n.length) !== 0 ? [(0, l.jsx)(i.Drp, {
        id: "search-google",
        label: u.intl.string(u.t["Rd/Mko"]),
        leadingAccessory: {
            type: "icon",
            icon: i.$p$
        },
        action: e
    }, "search-google")] : null
}