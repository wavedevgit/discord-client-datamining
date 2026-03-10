/** chunk id: 176019 params = (module,exports,require) **/
"use strict";
a.r(t), a.d(t, {
    default: () => D,
    waitForCSSLoad: () => L
});
var n = a(627968),
    r = a(64700),
    i = a(311907),
    s = a(684013),
    o = a(964486),
    l = a(573435),
    c = a(626584),
    _ = a(87001),
    d = a(923917),
    u = a(555528),
    f = a(309010),
    m = a(531685),
    p = a(723702),
    g = a(837921),
    b = a(9302),
    h = a(365971),
    A = a(777334),
    I = a(41984),
    v = a(200042),
    y = a(833551),
    C = a(395011),
    x = a(682763),
    S = a(222506),
    T = a(203322),
    E = a(644434),
    w = a(652215);
a(703552), a(921955);
let N = !p.isPlatformEmbedded && !1,
    P = new c.A("AppOverlay");

function L(e, t) {
    return new Promise((a, n) => {
        let r = Date.now();
        t.current = setInterval(() => {
            if (function() {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        a = e.document.styleSheets,
                        n = new Map;
                    for (let e of a) null != e.href && n.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = n.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1
                        } catch (e) {}
                    }
                    return !0
                }()) {
                a(), clearInterval(t.current);
                return
            }
            Date.now() - r > 12e4 && (n(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function k(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await g.Ay.isAlwaysOnTop(t)
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, I.Ue.OutOfProcess)
        }
        for (let r = 0; r < n; r++) try {
            if (!await g.Ay.waitForIPCReady(a, e)) throw Error("IPC not ready");
            g.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && r < n - 1) {
                let t = a / 2 * Math.pow(2, r + 1);
                P.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, A.pj)(e, I.Ue.OutOfProcess), e
        }
    }
}

function R() {
    s.A.setFocusedPID(b.DEV_PID, null)
}

function M() {
    s.A.setFocusedPID(null, null)
}
let D = r.memo(function(e) {
    let t, {
        withTitleBar: a,
        windowKey: c
    } = e;
    t = (0, i.bG)([_.A], () => _.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return N && (t.document.hasFocus() && s.A.setFocusedPID(b.DEV_PID, null), t.addEventListener("focus", R), t.addEventListener("blur", M)), () => {
            N && (t.removeEventListener("focus", R), t.removeEventListener("blur", M))
        }
    });
    let g = function(e, t) {
            let a, n, l = (0, i.bG)([C.A], () => !p.isPlatformEmbedded || C.A.isWindowHandleInitialized()),
                c = (0, i.bG)([_.A], () => _.A.getWindow(e)),
                d = (0, i.bG)([C.A], () => C.A.getFocusedPID()),
                g = r.useMemo(() => !p.isPlatformEmbedded || null != d && d !== b.UNSET_PID, [d]),
                [A, v] = r.useState(!1),
                S = r.useRef(!1),
                E = r.useCallback(() => {
                    let e = C.A.getTargetPID(),
                        a = null != f.A.getVoiceChannelId();
                    s.A.track(w.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: C.A.isPinned(w.uss.TEXT),
                        overlay_render_method: I.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, x.Fd)()
                }, [t]),
                N = r.useRef(!1),
                R = r.useRef(null),
                M = r.useCallback(async (e, t) => {
                    try {
                        if (await L(e, R), N.current) return;
                        (0, T.A)("cssLoaded", !0)
                    } catch (e) {
                        P.error("Timed out waiting for CSS to load", e), s.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await k(e, t), N.current) return;
                        (0, x.Mq)()
                    } catch (e) {
                        s.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), N.current || (v(!0), E())
                }, [E]),
                D = r.useRef(!1);
            return r.useEffect(() => {
                if (!S.current && ((0, T.A)("hasUseEffectFired", !0), (0, T.A)("trackedPidFocused", g), l)) {
                    if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
                    if (!g) {
                        D.current || (s.A.updateOverlayState(C.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = !0);
                        return
                    }
                    S.current = !0, (0, T.A)("reactInitializationStarted", !0), M(c, e)
                }
            }, [M, g, e, c, l]), (0, o.l0)(() => {
                clearInterval(R.current), N.current = !0
            }), a = (0, i.bG)([m.A], () => m.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), n = (0, i.bG)([C.A], () => C.A.getFocusedWindowHandle()), r.useEffect(() => {
                let e, t;
                if (null != c && A && c.innerHeight === a.height && c.innerWidth === a.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), s.A.overlayUIFocusedPid(d ?? b.UNSET_PID, n)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(d ?? b.UNSET_PID, n)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [A, c, d, n, a]), A
        }(c, E.G),
        A = (0, i.bG)([C.A], () => C.A.getFocusedPID()),
        D = (0, i.bG)([S.A], () => S.A.isInputLocked(A), [A]);
    return g ? (0, n.jsxs)(d.A, {
        themeOverride: w.NJ8.MIDNIGHT,
        appContext: w.BRT.OVERLAY,
        withTitleBar: a,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: D,
        children: [(0, n.jsx)(v.A, {}), (0, n.jsx)(l.Al, {})]
    }) : null
})