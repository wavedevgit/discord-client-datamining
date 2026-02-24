/** chunk id: 826308, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    a = n(64700),
    o = n(284009),
    r = n.n(o),
    c = n(397927),
    i = n(954571),
    s = n(723702),
    d = n(652215),
    u = n(985018);

function p(e) {
    let t = a.useCallback(() => {
        r()(null != e, "text cannot be null"), i.default.track(d.HAw.MESSAGE_MENU_GOOGLE_SEARCHED), window.open(`https://www.google.com/search?q=${encodeURIComponent(e)}`, "_blank")
    }, [e]);
    return s.isPlatformEmbedded && null != e && e?.length !== 0 ? [(0, l.jsx)(c.Drp, {
        id: "search-google",
        label: u.intl.string(u.t["Rd/Mko"]),
        leadingAccessory: {
            type: "icon",
            icon: c.$p$
        },
        action: t
    }, "search-google")] : null
}