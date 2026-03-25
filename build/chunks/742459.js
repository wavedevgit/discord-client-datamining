/** chunk id: 742459 params = (module,exports,require) **/
a.d(t, {
    A: () => u
}), a(321073);
var n = a(284009),
    s = a.n(n),
    l = a(656470),
    i = a.n(l),
    r = a(731854);
let d = [r.fS.WINDOW, r.fS.SCREEN];

function u(e, t, a) {
    let n = window.DiscordNative;
    s()(null != n, "Can't get desktop sources outside of native app"), t = t?.filter(e => d.includes(e)) ?? d, a = a ?? {
        width: 150,
        height: 150
    };
    let l = [];
    return t.includes(r.fS.SCREEN) && e.supports(r.O5.SCREEN_PREVIEWS) && (l.push(e.getScreenPreviews(a.width, a.height)), t = t.filter(e => e !== r.fS.SCREEN)), t.includes(r.fS.WINDOW) && e.supports(r.O5.WINDOW_PREVIEWS) && (l.push(e.getWindowPreviews(a.width, a.height)), t = t.filter(e => e !== r.fS.WINDOW)), 0 !== t.length && l.push(n.desktopCapture.getDesktopCaptureSources({
        types: t,
        thumbnailSize: a
    })), Promise.all(l).then(e => i()(e))
}