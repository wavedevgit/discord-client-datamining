/** chunk id: 905552, original params: e,t,l (module,exports,require) **/
let s;
l.d(t, {
    A: () => a
});
var n = l(9302);

function a(e, t) {
    if (__OVERLAY__) {
        let e = t.getGame(),
            l = (0, n.getPID)();
        return null == e || null == l ? null : s?.id === e.id && s?.pid === l ? s : s = {
            id: e.id,
            pid: l,
            pidPath: [],
            nativeProcessObserverId: 0,
            hidden: !1,
            elevated: !1,
            name: e.name,
            lastFocused: 0,
            exePath: "",
            exeName: "",
            cmdLine: "",
            processName: "",
            distributor: null,
            windowHandle: null,
            fullscreenType: 0
        }
    }
    return e.getVisibleGame()
}