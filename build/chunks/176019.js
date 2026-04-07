/** chunk id: 176019 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => D,
    waitForCSSLoad: () => j
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(684013),
    s = n(964486),
    o = n(573435),
    d = n(626584),
    c = n(87001),
    u = n(923917),
    _ = n(555528),
    h = n(309010),
    m = n(531685),
    f = n(723702),
    p = n(837921),
    g = n(9302),
    A = n(365971),
    x = n(777334),
    I = n(41984),
    E = n(200042),
    b = n(833551),
    v = n(395011),
    S = n(682763),
    C = n(222506),
    y = n(203322),
    T = n(644434),
    N = n(652215);
n(703552), n(921955);
let w = !f.isPlatformEmbedded && !1,
    L = new d.A("AppOverlay");

function j(e, t) {
    return new Promise((n, i) => {
        let a = Date.now();
        t.current = setInterval(() => {
            if (function() {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        i = new Map;
                    for (let e of n) null != e.href && i.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = i.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1
                        } catch (e) {}
                    }
                    return !0
                }()) {
                n(), clearInterval(t.current);
                return
            }
            Date.now() - a > 12e4 && (i(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (f.isPlatformEmbedded) {
        try {
            await p.Ay.isAlwaysOnTop(t)
        } catch (e) {
            L.error("Window does not exist while trying to show inactive", e), (0, x.pj)(e, I.Ue.OutOfProcess)
        }
        for (let a = 0; a < i; a++) try {
            if (!await p.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            p.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && a < i - 1) {
                let t = n / 2 * Math.pow(2, a + 1);
                L.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, x.pj)(e, I.Ue.OutOfProcess), e
        }
    }
}

function P() {
    l.A.setFocusedPID(g.DEV_PID, null)
}

function R() {
    l.A.setFocusedPID(null, null)
}
let D = a.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: d
    } = e;
    t = (0, r.bG)([c.A], () => c.A.getWindow(d)), (0, s.Ay)(() => {
        if (null != t) return w && (t.document.hasFocus() && l.A.setFocusedPID(g.DEV_PID, null), t.addEventListener("focus", P), t.addEventListener("blur", R)), () => {
            w && (t.removeEventListener("focus", P), t.removeEventListener("blur", R))
        }
    });
    let p = function(e, t) {
            let n, i, o = (0, r.bG)([v.A], () => !f.isPlatformEmbedded || v.A.isWindowHandleInitialized()),
                d = (0, r.bG)([c.A], () => c.A.getWindow(e)),
                u = (0, r.bG)([v.A], () => v.A.getFocusedPID()),
                p = a.useMemo(() => !f.isPlatformEmbedded || null != u && u !== g.UNSET_PID, [u]),
                [x, E] = a.useState(!1),
                C = a.useRef(!1),
                T = a.useCallback(() => {
                    let e = v.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    l.A.track(N.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: v.A.isPinned(N.uss.TEXT),
                        overlay_render_method: I.Ue[b.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, S.Fd)()
                }, [t]),
                w = a.useRef(!1),
                P = a.useRef(null),
                R = a.useCallback(async (e, t) => {
                    try {
                        if (await j(e, P), w.current) return;
                        (0, y.A)("cssLoaded", !0)
                    } catch (e) {
                        L.error("Timed out waiting for CSS to load", e), l.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, y.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await O(e, t), w.current) return;
                        (0, S.Mq)()
                    } catch (e) {
                        l.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, y.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), w.current || (E(!0), T())
                }, [T]),
                D = a.useRef(!1);
            return a.useEffect(() => {
                if (!C.current && ((0, y.A)("hasUseEffectFired", !0), (0, y.A)("trackedPidFocused", p), o)) {
                    if (null == d) return void(0, y.A)("errorMessage", "No targetOverlayWindow");
                    if (!p) {
                        D.current || (l.A.updateOverlayState(v.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = !0);
                        return
                    }
                    C.current = !0, (0, y.A)("reactInitializationStarted", !0), R(d, e)
                }
            }, [R, p, e, d, o]), (0, s.l0)(() => {
                clearInterval(P.current), w.current = !0
            }), n = (0, r.bG)([m.A], () => m.A.windowSize(null != d ? (0, A.Q2)(d) : void 0)), i = (0, r.bG)([v.A], () => v.A.getFocusedWindowHandle()), a.useEffect(() => {
                let e, t;
                if (null != d && x && d.innerHeight === n.height && d.innerWidth === n.width) return e = d.requestAnimationFrame(() => {
                    e = d.requestAnimationFrame(() => {
                        d.clearTimeout(t), l.A.overlayUIFocusedPid(u ?? g.UNSET_PID, i)
                    })
                }), t = d.setTimeout(() => {
                    d.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(u ?? g.UNSET_PID, i)
                }, 500), () => {
                    d.cancelAnimationFrame(e), d.clearTimeout(t)
                }
            }, [x, d, u, i, n]), x
        }(d, T.G),
        x = (0, r.bG)([v.A], () => v.A.getFocusedPID()),
        D = (0, r.bG)([C.A], () => C.A.isInputLocked(x), [x]);
    return p ? (0, i.jsxs)(u.A, {
        themeOverride: N.NJ8.MIDNIGHT,
        appContext: N.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: d,
        title: "Discord Overlay",
        hideModals: D,
        children: [(0, i.jsx)(E.A, {}), (0, i.jsx)(o.Al, {})]
    }) : null
})