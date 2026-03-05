/** chunk id: 905552 params = (module,exports,require) **/
let l;
s.d(t, {
    A: () => a
});
var n = s(9302);

function a(e, t) {
    if (__OVERLAY__) {
        let e = t.getGame(),
            s = (0, n.getPID)();
        return null == e || null == s ? null : l?.id === e.id && l?.pid === s ? l : l = {
            id: e.id,
            pid: s,
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