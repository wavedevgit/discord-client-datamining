/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => G,
    waitForCSSLoad: () => T
}), n(896048), n(65821);
var r = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(684013),
    o = n(964486),
    c = n(573435),
    s = n(626584),
    d = n(87001),
    u = n(923917),
    _ = n(555528),
    p = n(309010),
    f = n(531685),
    b = n(723702),
    h = n(837921),
    A = n(9302),
    m = n(365971),
    I = n(777334),
    y = n(41984),
    g = n(200042),
    v = n(833551),
    O = n(395011),
    E = n(682763),
    C = n(222506),
    P = n(203322),
    N = n(644434),
    x = n(652215);
n(703552), n(921955);
let w = !b.isPlatformEmbedded && !1,
    S = new s.A("AppOverlay");

function T(e, t) {
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
async function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await h.Ay.isAlwaysOnTop(t)
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, y.Ue.OutOfProcess)
        }
        for (let l = 0; l < r; l++) try {
            if (!await h.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            h.Ay.showInactive(t);
            return
        } catch (e) {
            var a;
            if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && l < r - 1) {
                let t = n / 2 * Math.pow(2, l + 1);
                S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, I.pj)(e, y.Ue.OutOfProcess), e
        }
    }
}

function L() {
    i.A.setFocusedPID(A.DEV_PID, null)
}

function D() {
    i.A.setFocusedPID(null, null)
}
let G = a.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: s
    } = e;
    t = (0, l.bG)([d.A], () => d.A.getWindow(s)), (0, o.Ay)(() => {
        if (null != t) return w && (t.document.hasFocus() && i.A.setFocusedPID(A.DEV_PID, null), t.addEventListener("focus", L), t.addEventListener("blur", D)), () => {
            w && (t.removeEventListener("focus", L), t.removeEventListener("blur", D))
        }
    });
    let h = function(e, t) {
            let n, r, c = (0, l.bG)([O.A], () => !b.isPlatformEmbedded || O.A.isWindowHandleInitialized()),
                s = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                u = (0, l.bG)([O.A], () => O.A.getFocusedPID()),
                h = a.useMemo(() => !b.isPlatformEmbedded || null != u && u !== A.UNSET_PID, [u]),
                [I, g] = a.useState(!1),
                C = a.useRef(!1),
                N = a.useCallback(() => {
                    let e = O.A.getTargetPID(),
                        n = null != p.A.getVoiceChannelId();
                    i.A.track(x.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: O.A.isPinned(x.uss.TEXT),
                        overlay_render_method: y.Ue[v.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, E.Fd)()
                }, [t]),
                w = a.useRef(!1),
                L = a.useRef(null),
                D = a.useCallback(async (e, t) => {
                    try {
                        if (await T(e, L), w.current) return;
                        (0, P.A)("cssLoaded", !0)
                    } catch (e) {
                        S.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, P.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await j(e, t), w.current) return;
                        (0, E.Mq)()
                    } catch (e) {
                        i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, P.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), w.current || (g(!0), N())
                }, [N]),
                G = a.useRef(!1);
            return a.useEffect(() => {
                if (!C.current && ((0, P.A)("hasUseEffectFired", !0), (0, P.A)("trackedPidFocused", h), c)) {
                    if (null == s) return void(0, P.A)("errorMessage", "No targetOverlayWindow");
                    if (!h) {
                        G.current || (i.A.updateOverlayState(O.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), G.current = !0);
                        return
                    }
                    C.current = !0, (0, P.A)("reactInitializationStarted", !0), D(s, e)
                }
            }, [D, h, e, s, c]), (0, o.l0)(() => {
                clearInterval(L.current), w.current = !0
            }), n = (0, l.bG)([f.A], () => f.A.windowSize(null != s ? (0, m.Q2)(s) : void 0)), r = (0, l.bG)([O.A], () => O.A.getFocusedWindowHandle()), a.useEffect(() => {
                let e, t;
                if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
                    e = s.requestAnimationFrame(() => {
                        s.clearTimeout(t), i.A.overlayUIFocusedPid(null != u ? u : A.UNSET_PID, r)
                    })
                }), t = s.setTimeout(() => {
                    s.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != u ? u : A.UNSET_PID, r)
                }, 500), () => {
                    s.cancelAnimationFrame(e), s.clearTimeout(t)
                }
            }, [I, s, u, r, n]), I
        }(s, N.G),
        I = (0, l.bG)([O.A], () => O.A.getFocusedPID()),
        G = (0, l.bG)([C.A], () => C.A.isInputLocked(I), [I]);
    return h ? (0, r.jsxs)(u.A, {
        themeOverride: x.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: s,
        title: "Discord Overlay",
        hideModals: G,
        children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(c.Al, {})]
    }) : null
})