/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => D,
    waitForCSSLoad: () => N
}), n(896048), n(65821);
var r = n(627968),
    a = n(64700),
    i = n(311907),
    s = n(684013),
    l = n(964486),
    o = n(573435),
    c = n(626584),
    d = n(87001),
    u = n(923917),
    _ = n(555528),
    p = n(309010),
    f = n(531685),
    b = n(723702),
    m = n(837921),
    g = n(9302),
    h = n(365971),
    A = n(777334),
    x = n(41984),
    v = n(200042),
    y = n(833551),
    I = n(395011),
    C = n(682763),
    T = n(222506),
    w = n(203322),
    O = n(644434),
    j = n(652215);
n(703552), n(921955);
let E = !b.isPlatformEmbedded && !1,
    S = new c.A("AppOverlay");

function N(e, t) {
    return new Promise((n, r) => {
        let a = Date.now();
        t.current = setInterval(() => {
            if (function() {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        r = new Map;
                    for (let e of n) null != e.href && r.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = r.get(e.href);
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
            Date.now() - a > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t)
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, x.Ue.OutOfProcess)
        }
        for (let i = 0; i < r; i++) try {
            if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            m.Ay.showInactive(t);
            return
        } catch (e) {
            var a;
            if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && i < r - 1) {
                let t = n / 2 * Math.pow(2, i + 1);
                S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, A.pj)(e, x.Ue.OutOfProcess), e
        }
    }
}

function G() {
    s.A.setFocusedPID(g.DEV_PID, null)
}

function k() {
    s.A.setFocusedPID(null, null)
}
let D = a.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, i.bG)([d.A], () => d.A.getWindow(c)), (0, l.Ay)(() => {
        if (null != t) return E && (t.document.hasFocus() && s.A.setFocusedPID(g.DEV_PID, null), t.addEventListener("focus", G), t.addEventListener("blur", k)), () => {
            E && (t.removeEventListener("focus", G), t.removeEventListener("blur", k))
        }
    });
    let m = function(e, t) {
            let n, r, o = (0, i.bG)([I.A], () => !b.isPlatformEmbedded || I.A.isWindowHandleInitialized()),
                c = (0, i.bG)([d.A], () => d.A.getWindow(e)),
                u = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
                m = a.useMemo(() => !b.isPlatformEmbedded || null != u && u !== g.UNSET_PID, [u]),
                [A, v] = a.useState(!1),
                T = a.useRef(!1),
                O = a.useCallback(() => {
                    let e = I.A.getTargetPID(),
                        n = null != p.A.getVoiceChannelId();
                    s.A.track(j.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.A.isPinned(j.uss.TEXT),
                        overlay_render_method: x.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, C.Fd)()
                }, [t]),
                E = a.useRef(!1),
                G = a.useRef(null),
                k = a.useCallback(async (e, t) => {
                    try {
                        if (await N(e, G), E.current) return;
                        (0, w.A)("cssLoaded", !0)
                    } catch (e) {
                        S.error("Timed out waiting for CSS to load", e), s.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, w.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await P(e, t), E.current) return;
                        (0, C.Mq)()
                    } catch (e) {
                        s.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, w.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), E.current || (v(!0), O())
                }, [O]),
                D = a.useRef(!1);
            return a.useEffect(() => {
                if (!T.current && ((0, w.A)("hasUseEffectFired", !0), (0, w.A)("trackedPidFocused", m), o)) {
                    if (null == c) return void(0, w.A)("errorMessage", "No targetOverlayWindow");
                    if (!m) {
                        D.current || (s.A.updateOverlayState(I.A.getTargetPID(), x.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = !0);
                        return
                    }
                    T.current = !0, (0, w.A)("reactInitializationStarted", !0), k(c, e)
                }
            }, [k, m, e, c, o]), (0, l.l0)(() => {
                clearInterval(G.current), E.current = !0
            }), n = (0, i.bG)([f.A], () => f.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), r = (0, i.bG)([I.A], () => I.A.getFocusedWindowHandle()), a.useEffect(() => {
                let e, t;
                if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), s.A.overlayUIFocusedPid(null != u ? u : g.UNSET_PID, r)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(null != u ? u : g.UNSET_PID, r)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [A, c, u, r, n]), A
        }(c, O.G),
        A = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
        D = (0, i.bG)([T.A], () => T.A.isInputLocked(A), [A]);
    return m ? (0, r.jsxs)(u.A, {
        themeOverride: j.NJ8.MIDNIGHT,
        appContext: j.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: D,
        children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(o.Al, {})]
    }) : null
})