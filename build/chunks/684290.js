/** chunk id: 684290 params = (module,exports,require) **/
l.d(t, {
    A: () => a,
    k: () => i
});
var r = l(567243),
    n = l(652215);

function i(e) {
    return "music.apple.com" === e
}

function a(e) {
    if (null == e.url || e.provider?.name !== "Apple Music" || e.type !== n.Auw.ARTICLE && e.type !== n.Auw.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return i(t)
    } catch (e) {
        return !1
    }
}