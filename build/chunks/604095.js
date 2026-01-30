/** chunk id: 604095, original params: e,t,i (module,exports,require) **/
i.d(t, {
    AZ: () => u,
    Cp: () => a,
    _s: () => r,
    fk: () => s,
    tA: () => o
});
var n = i(839214),
    l = i(837921);
let s = (0, n.D)(() => ({
    openOnStartup: !0,
    startMinimized: !1,
    minimizeToTray: !0
}));
async function r() {
    let e = await l.Ay.getOpenOnStart(),
        t = await l.Ay.getSetting("START_MINIMIZED", !1),
        i = await l.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    s.setState({
        openOnStartup: e,
        startMinimized: t,
        minimizeToTray: i
    })
}

function a(e) {
    s.setState({
        openOnStartup: e
    }), l.Ay.send("TOGGLE_OPEN_ON_STARTUP", e)
}

function u(e) {
    s.setState({
        startMinimized: e
    }), l.Ay.send("TOGGLE_START_MINIMIZED", e)
}

function o(e) {
    s.setState({
        minimizeToTray: e
    }), l.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e)
}