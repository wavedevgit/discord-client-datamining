/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => M,
    waitForCSSLoad: () => S
}), n(896048), n(65821);
var r = n(627968),
    l = n(64700),
    a = n(311907),
    i = n(684013),
    o = n(964486),
    s = n(573435),
    c = n(626584),
    u = n(87001),
    d = n(923917),
    _ = n(555528),
    f = n(309010),
    p = n(531685),
    m = n(723702),
    A = n(837921),
    b = n(9302),
    h = n(365971),
    g = n(777334),
    y = n(41984),
    v = n(200042),
    I = n(833551),
    C = n(395011),
    E = n(682763),
    O = n(222506),
    T = n(203322),
    N = n(644434),
    x = n(652215);
n(703552), n(921955);
let P = !m.isPlatformEmbedded && !1,
    w = new c.A("AppOverlay");

function S(e, t) {
    return new Promise((n, r) => {
        let l = Date.now();
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
            Date.now() - l > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(t)
        } catch (e) {
            w.error("Window does not exist while trying to show inactive", e), (0, g.pj)(e, y.Ue.OutOfProcess)
        }
        for (let a = 0; a < r; a++) try {
            if (!await A.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            A.Ay.showInactive(t);
            return
        } catch (e) {
            var l;
            if ((null == (l = e.message) ? void 0 : l.includes("IPC")) && a < r - 1) {
                let t = n / 2 * Math.pow(2, a + 1);
                w.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, g.pj)(e, y.Ue.OutOfProcess), e
        }
    }
}

function R() {
    i.A.setFocusedPID(b.DEV_PID, null)
}

function k() {
    i.A.setFocusedPID(null, null)
}
let M = l.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, a.bG)([u.A], () => u.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return P && (t.document.hasFocus() && i.A.setFocusedPID(b.DEV_PID, null), t.addEventListener("focus", R), t.addEventListener("blur", k)), () => {
            P && (t.removeEventListener("focus", R), t.removeEventListener("blur", k))
        }
    });
    let A = function(e, t) {
            let n, r, s = (0, a.bG)([C.A], () => !m.isPlatformEmbedded || C.A.isWindowHandleInitialized()),
                c = (0, a.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
                A = l.useMemo(() => !m.isPlatformEmbedded || null != d && d !== b.UNSET_PID, [d]),
                [g, v] = l.useState(!1),
                O = l.useRef(!1),
                N = l.useCallback(() => {
                    let e = C.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    i.A.track(x.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: C.A.isPinned(x.uss.TEXT),
                        overlay_render_method: y.Ue[I.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, E.Fd)()
                }, [t]),
                P = l.useRef(!1),
                R = l.useRef(null),
                k = l.useCallback(async (e, t) => {
                    try {
                        if (await S(e, R), P.current) return;
                        (0, T.A)("cssLoaded", !0)
                    } catch (e) {
                        w.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await j(e, t), P.current) return;
                        (0, E.Mq)()
                    } catch (e) {
                        i.A.setOverlayCrashed(C.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), P.current || (v(!0), N())
                }, [N]),
                M = l.useRef(!1);
            return l.useEffect(() => {
                if (!O.current && ((0, T.A)("hasUseEffectFired", !0), (0, T.A)("trackedPidFocused", A), s)) {
                    if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
                    if (!A) {
                        M.current || (i.A.updateOverlayState(C.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), M.current = !0);
                        return
                    }
                    O.current = !0, (0, T.A)("reactInitializationStarted", !0), k(c, e)
                }
            }, [k, A, e, c, s]), (0, o.l0)(() => {
                clearInterval(R.current), P.current = !0
            }), n = (0, a.bG)([p.A], () => p.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), r = (0, a.bG)([C.A], () => C.A.getFocusedWindowHandle()), l.useEffect(() => {
                let e, t;
                if (null != c && g && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), i.A.overlayUIFocusedPid(null != d ? d : b.UNSET_PID, r)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != d ? d : b.UNSET_PID, r)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [g, c, d, r, n]), g
        }(c, N.G),
        g = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
        M = (0, a.bG)([O.A], () => O.A.isInputLocked(g), [g]);
    return A ? (0, r.jsxs)(d.A, {
        themeOverride: x.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: M,
        children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(s.Al, {})]
    }) : null
})