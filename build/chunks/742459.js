/** chunk id: 742459 params = (module,exports,require) **/
i.d(t, {
    A: () => p
}), i(321073);
var s = i(284009),
    a = i.n(s),
    n = i(656470),
    d = i.n(n),
    r = i(731854);
let o = [r.fS.WINDOW, r.fS.SCREEN];

function p(e, t, i) {
    let s = window.DiscordNative;
    a()(null != s, "Can't get desktop sources outside of native app"), t = t?.filter(e => o.includes(e)) ?? o, i = i ?? {
        width: 150,
        height: 150
    };
    let n = [];
    return t.includes(r.fS.SCREEN) && e.supports(r.O5.SCREEN_PREVIEWS) && (n.push(e.getScreenPreviews(i.width, i.height)), t = t.filter(e => e !== r.fS.SCREEN)), t.includes(r.fS.WINDOW) && e.supports(r.O5.WINDOW_PREVIEWS) && (n.push(e.getWindowPreviews(i.width, i.height)), t = t.filter(e => e !== r.fS.WINDOW)), 0 !== t.length && n.push(s.desktopCapture.getDesktopCaptureSources({
        types: t,
        thumbnailSize: i
    })), Promise.all(n).then(e => d()(e))
}