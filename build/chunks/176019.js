/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => k,
    waitForCSSLoad: () => L
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
    A = n(531685),
    p = n(723702),
    b = n(837921),
    h = n(9302),
    m = n(365971),
    g = n(777334),
    I = n(41984),
    y = n(200042),
    E = n(833551),
    O = n(395011),
    v = n(682763),
    C = n(222506),
    N = n(203322),
    T = n(644434),
    P = n(652215);
n(703552), n(921955);
let x = !p.isPlatformEmbedded && !1,
    S = new c.A("AppOverlay");

function L(e, t) {
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
async function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await b.Ay.isAlwaysOnTop(t)
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, g.pj)(e, I.Ue.OutOfProcess)
        }
        for (let a = 0; a < r; a++) try {
            if (!await b.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            b.Ay.showInactive(t);
            return
        } catch (e) {
            var l;
            if ((null == (l = e.message) ? void 0 : l.includes("IPC")) && a < r - 1) {
                let t = n / 2 * Math.pow(2, a + 1);
                S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, g.pj)(e, I.Ue.OutOfProcess), e
        }
    }
}

function j() {
    i.A.setFocusedPID(h.DEV_PID, null)
}

function D() {
    i.A.setFocusedPID(null, null)
}
let k = l.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, a.bG)([u.A], () => u.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return x && (t.document.hasFocus() && i.A.setFocusedPID(h.DEV_PID, null), t.addEventListener("focus", j), t.addEventListener("blur", D)), () => {
            x && (t.removeEventListener("focus", j), t.removeEventListener("blur", D))
        }
    });
    let b = function(e, t) {
            let n, r, s = (0, a.bG)([O.A], () => !p.isPlatformEmbedded || O.A.isWindowHandleInitialized()),
                c = (0, a.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, a.bG)([O.A], () => O.A.getFocusedPID()),
                b = l.useMemo(() => !p.isPlatformEmbedded || null != d && d !== h.UNSET_PID, [d]),
                [g, y] = l.useState(!1),
                C = l.useRef(!1),
                T = l.useCallback(() => {
                    let e = O.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    i.A.track(P.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: O.A.isPinned(P.uss.TEXT),
                        overlay_render_method: I.Ue[E.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, v.Fd)()
                }, [t]),
                x = l.useRef(!1),
                j = l.useRef(null),
                D = l.useCallback(async (e, t) => {
                    try {
                        if (await L(e, j), x.current) return;
                        (0, N.A)("cssLoaded", !0)
                    } catch (e) {
                        S.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, N.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await w(e, t), x.current) return;
                        (0, v.Mq)()
                    } catch (e) {
                        i.A.setOverlayCrashed(O.A.getTargetPID(), e), (0, N.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), x.current || (y(!0), T())
                }, [T]),
                k = l.useRef(!1);
            return l.useEffect(() => {
                if (!C.current && ((0, N.A)("hasUseEffectFired", !0), (0, N.A)("trackedPidFocused", b), s)) {
                    if (null == c) return void(0, N.A)("errorMessage", "No targetOverlayWindow");
                    if (!b) {
                        k.current || (i.A.updateOverlayState(O.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), k.current = !0);
                        return
                    }
                    C.current = !0, (0, N.A)("reactInitializationStarted", !0), D(c, e)
                }
            }, [D, b, e, c, s]), (0, o.l0)(() => {
                clearInterval(j.current), x.current = !0
            }), n = (0, a.bG)([A.A], () => A.A.windowSize(null != c ? (0, m.Q2)(c) : void 0)), r = (0, a.bG)([O.A], () => O.A.getFocusedWindowHandle()), l.useEffect(() => {
                let e, t;
                if (null != c && g && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), i.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [g, c, d, r, n]), g
        }(c, T.G),
        g = (0, a.bG)([O.A], () => O.A.getFocusedPID()),
        k = (0, a.bG)([C.A], () => C.A.isInputLocked(g), [g]);
    return b ? (0, r.jsxs)(d.A, {
        themeOverride: P.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: k,
        children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(s.Al, {})]
    }) : null
})