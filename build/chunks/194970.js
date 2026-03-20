/** chunk id: 194970 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(615300),
    a = n(365659),
    l = n(73153),
    r = n(272355),
    s = n(869146);
class o extends r.A {
    _initialize() {
        s.A.addChangeListener(this.handlePopoutWindowChange), l.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
    }
    _terminate() {
        s.A.removeChangeListener(this.handlePopoutWindowChange), l.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
    }
    handleMainWindowFocus = e => {
        e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window)
    };
    handlePopoutWindowChange = () => {
        let e = s.A.getWindowKeys().find(e => s.A.getWindowFocused(e));
        if (null == e) return this.injectWindowAnimationFrame(window);
        let t = s.A.getWindow(e);
        if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
        this.injectWindowAnimationFrame(t)
    };
    injectWindowAnimationFrame(e) {
        let t = t => e.requestAnimationFrame(t),
            n = t => e.cancelAnimationFrame(t);
        i.A.inject.RequestAnimationFrame(t), i.A.inject.CancelAnimationFrame(n), a.W.setRAF(t, n)
    }
}
let d = new o