/** chunk id: 176019 params = (module,exports,require) **/
"use strict";
a.r(t), a.d(t, {
    default: () => k,
    waitForCSSLoad: () => w
});
var n = a(627968),
    i = a(64700),
    r = a(311907),
    s = a(684013),
    o = a(964486),
    l = a(573435),
    c = a(626584),
    _ = a(87001),
    d = a(923917),
    u = a(555528),
    f = a(309010),
    p = a(531685),
    m = a(723702),
    A = a(837921),
    h = a(9302),
    g = a(365971),
    b = a(777334),
    I = a(41984),
    v = a(200042),
    C = a(833551),
    y = a(395011),
    x = a(682763),
    E = a(222506),
    S = a(203322),
    T = a(644434),
    L = a(652215);
a(703552), a(921955);
let N = !m.isPlatformEmbedded && !1,
    P = new c.A("AppOverlay");

function w(e, t) {
    return new Promise((a, n) => {
        let i = Date.now();
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
            Date.now() - i > 12e4 && (n(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function D(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(t)
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, b.pj)(e, I.Ue.OutOfProcess)
        }
        for (let i = 0; i < n; i++) try {
            if (!await A.Ay.waitForIPCReady(a, e)) throw Error("IPC not ready");
            A.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && i < n - 1) {
                let t = a / 2 * Math.pow(2, i + 1);
                P.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, b.pj)(e, I.Ue.OutOfProcess), e
        }
    }
}

function O() {
    s.A.setFocusedPID(h.DEV_PID, null)
}

function G() {
    s.A.setFocusedPID(null, null)
}
let k = i.memo(function(e) {
    let t, {
        withTitleBar: a,
        windowKey: c
    } = e;
    t = (0, r.bG)([_.A], () => _.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return N && (t.document.hasFocus() && s.A.setFocusedPID(h.DEV_PID, null), t.addEventListener("focus", O), t.addEventListener("blur", G)), () => {
            N && (t.removeEventListener("focus", O), t.removeEventListener("blur", G))
        }
    });
    let A = function(e, t) {
            let a, n, l = (0, r.bG)([y.A], () => !m.isPlatformEmbedded || y.A.isWindowHandleInitialized()),
                c = (0, r.bG)([_.A], () => _.A.getWindow(e)),
                d = (0, r.bG)([y.A], () => y.A.getFocusedPID()),
                A = i.useMemo(() => !m.isPlatformEmbedded || null != d && d !== h.UNSET_PID, [d]),
                [b, v] = i.useState(!1),
                E = i.useRef(!1),
                T = i.useCallback(() => {
                    let e = y.A.getTargetPID(),
                        a = null != f.A.getVoiceChannelId();
                    s.A.track(L.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: y.A.isPinned(L.uss.TEXT),
                        overlay_render_method: I.Ue[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, x.Fd)()
                }, [t]),
                N = i.useRef(!1),
                O = i.useRef(null),
                G = i.useCallback(async (e, t) => {
                    try {
                        if (await w(e, O), N.current) return;
                        (0, S.A)("cssLoaded", !0)
                    } catch (e) {
                        P.error("Timed out waiting for CSS to load", e), s.A.setOverlayCrashed(y.A.getTargetPID(), e), (0, S.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await D(e, t), N.current) return;
                        (0, x.Mq)()
                    } catch (e) {
                        s.A.setOverlayCrashed(y.A.getTargetPID(), e), (0, S.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), N.current || (v(!0), T())
                }, [T]),
                k = i.useRef(!1);
            return i.useEffect(() => {
                if (!E.current && ((0, S.A)("hasUseEffectFired", !0), (0, S.A)("trackedPidFocused", A), l)) {
                    if (null == c) return void(0, S.A)("errorMessage", "No targetOverlayWindow");
                    if (!A) {
                        k.current || (s.A.updateOverlayState(y.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = !0);
                        return
                    }
                    E.current = !0, (0, S.A)("reactInitializationStarted", !0), G(c, e)
                }
            }, [G, A, e, c, l]), (0, o.l0)(() => {
                clearInterval(O.current), N.current = !0
            }), a = (0, r.bG)([p.A], () => p.A.windowSize(null != c ? (0, g.Q2)(c) : void 0)), n = (0, r.bG)([y.A], () => y.A.getFocusedWindowHandle()), i.useEffect(() => {
                let e, t;
                if (null != c && b && c.innerHeight === a.height && c.innerWidth === a.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), s.A.overlayUIFocusedPid(d ?? h.UNSET_PID, n)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(d ?? h.UNSET_PID, n)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [b, c, d, n, a]), b
        }(c, T.G),
        b = (0, r.bG)([y.A], () => y.A.getFocusedPID()),
        k = (0, r.bG)([E.A], () => E.A.isInputLocked(b), [b]);
    return A ? (0, n.jsxs)(d.A, {
        themeOverride: L.NJ8.MIDNIGHT,
        appContext: L.BRT.OVERLAY,
        withTitleBar: a,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: k,
        children: [(0, n.jsx)(v.A, {}), (0, n.jsx)(l.Al, {})]
    }) : null
})