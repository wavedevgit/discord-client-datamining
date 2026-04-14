/** chunk id: 644119 params = (module,exports,require) **/
l.d(t, {
    A: () => a,
    b: () => i
});
var r = l(567243),
    n = l(652215);

function i(e) {
    return null != e && "open.spotify.com" === e
}

function a(e) {
    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== n.Auw.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return i(t)
    } catch (e) {
        return !1
    }
}