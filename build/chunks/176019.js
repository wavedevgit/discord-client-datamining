/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => k,
    waitForCSSLoad: () => S
}), n(896048), n(65821);
var r = n(627968),
    a = n(64700),
    i = n(311907),
    l = n(684013),
    s = n(964486),
    o = n(573435),
    c = n(626584),
    u = n(87001),
    d = n(923917),
    p = n(555528),
    f = n(309010),
    _ = n(531685),
    b = n(723702),
    m = n(837921),
    g = n(9302),
    h = n(365971),
    A = n(777334),
    v = n(41984),
    x = n(200042),
    y = n(833551),
    I = n(395011),
    C = n(682763),
    T = n(222506),
    O = n(203322),
    j = n(644434),
    w = n(652215);
n(703552), n(921955);
let E = !b.isPlatformEmbedded && !1,
    N = new c.A("AppOverlay");

function S(e, t) {
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
            N.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, v.Ue.OutOfProcess)
        }
        for (let i = 0; i < r; i++) try {
            if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            m.Ay.showInactive(t);
            return
        } catch (e) {
            var a;
            if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && i < r - 1) {
                let t = n / 2 * Math.pow(2, i + 1);
                N.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, A.pj)(e, v.Ue.OutOfProcess), e
        }
    }
}

function D() {
    l.A.setFocusedPID(g.DEV_PID, null)
}

function G() {
    l.A.setFocusedPID(null, null)
}
let k = a.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, i.bG)([u.A], () => u.A.getWindow(c)), (0, s.Ay)(() => {
        if (null != t) return E && (t.document.hasFocus() && l.A.setFocusedPID(g.DEV_PID, null), t.addEventListener("focus", D), t.addEventListener("blur", G)), () => {
            E && (t.removeEventListener("focus", D), t.removeEventListener("blur", G))
        }
    });
    let m = function(e, t) {
            let n, r, o = (0, i.bG)([I.A], () => !b.isPlatformEmbedded || I.A.isWindowHandleInitialized()),
                c = (0, i.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
                m = a.useMemo(() => !b.isPlatformEmbedded || null != d && d !== g.UNSET_PID, [d]),
                [A, x] = a.useState(!1),
                T = a.useRef(!1),
                j = a.useCallback(() => {
                    let e = I.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    l.A.track(w.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.A.isPinned(w.uss.TEXT),
                        overlay_render_method: v.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: p.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, C.Fd)()
                }, [t]),
                E = a.useRef(!1),
                D = a.useRef(null),
                G = a.useCallback(async (e, t) => {
                    try {
                        if (await S(e, D), E.current) return;
                        (0, O.A)("cssLoaded", !0)
                    } catch (e) {
                        N.error("Timed out waiting for CSS to load", e), l.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, O.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await P(e, t), E.current) return;
                        (0, C.Mq)()
                    } catch (e) {
                        l.A.setOverlayCrashed(I.A.getTargetPID(), e), (0, O.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), E.current || (x(!0), j())
                }, [j]),
                k = a.useRef(!1);
            return a.useEffect(() => {
                if (!T.current && ((0, O.A)("hasUseEffectFired", !0), (0, O.A)("trackedPidFocused", m), o)) {
                    if (null == c) return void(0, O.A)("errorMessage", "No targetOverlayWindow");
                    if (!m) {
                        k.current || (l.A.updateOverlayState(I.A.getTargetPID(), v.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = !0);
                        return
                    }
                    T.current = !0, (0, O.A)("reactInitializationStarted", !0), G(c, e)
                }
            }, [G, m, e, c, o]), (0, s.l0)(() => {
                clearInterval(D.current), E.current = !0
            }), n = (0, i.bG)([_.A], () => _.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), r = (0, i.bG)([I.A], () => I.A.getFocusedWindowHandle()), a.useEffect(() => {
                let e, t;
                if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), l.A.overlayUIFocusedPid(null != d ? d : g.UNSET_PID, r)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(null != d ? d : g.UNSET_PID, r)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [A, c, d, r, n]), A
        }(c, j.G),
        A = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
        k = (0, i.bG)([T.A], () => T.A.isInputLocked(A), [A]);
    return m ? (0, r.jsxs)(d.A, {
        themeOverride: w.NJ8.MIDNIGHT,
        appContext: w.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: k,
        children: [(0, r.jsx)(x.A, {}), (0, r.jsx)(o.Al, {})]
    }) : null
})