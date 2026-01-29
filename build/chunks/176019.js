/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => L,
    waitForCSSLoad: () => w
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
    A = n(723702),
    m = n(837921),
    b = n(9302),
    h = n(365971),
    g = n(777334),
    v = n(41984),
    I = n(200042),
    y = n(833551),
    E = n(395011),
    C = n(682763),
    T = n(222506),
    N = n(203322),
    O = n(644434),
    x = n(652215);
n(703552), n(921955);
let P = !A.isPlatformEmbedded && !1,
    S = new c.A("AppOverlay");

function w(e, t) {
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
async function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (A.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t)
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, g.pj)(e, v.Ue.OutOfProcess)
        }
        for (let a = 0; a < r; a++) try {
            if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            m.Ay.showInactive(t);
            return
        } catch (e) {
            var l;
            if ((null == (l = e.message) ? void 0 : l.includes("IPC")) && a < r - 1) {
                let t = n / 2 * Math.pow(2, a + 1);
                S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, g.pj)(e, v.Ue.OutOfProcess), e
        }
    }
}

function R() {
    i.A.setFocusedPID(b.DEV_PID, null)
}

function k() {
    i.A.setFocusedPID(null, null)
}
let L = l.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, a.bG)([u.A], () => u.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return P && (t.document.hasFocus() && i.A.setFocusedPID(b.DEV_PID, null), t.addEventListener("focus", R), t.addEventListener("blur", k)), () => {
            P && (t.removeEventListener("focus", R), t.removeEventListener("blur", k))
        }
    });
    let m = function(e, t) {
            let n, r, s = (0, a.bG)([E.A], () => !A.isPlatformEmbedded || E.A.isWindowHandleInitialized()),
                c = (0, a.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, a.bG)([E.A], () => E.A.getFocusedPID()),
                m = l.useMemo(() => !A.isPlatformEmbedded || null != d && d !== b.UNSET_PID, [d]),
                [g, I] = l.useState(!1),
                T = l.useRef(!1),
                O = l.useCallback(() => {
                    let e = E.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    i.A.track(x.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.A.isPinned(x.uss.TEXT),
                        overlay_render_method: v.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, C.Fd)()
                }, [t]),
                P = l.useRef(!1),
                R = l.useRef(null),
                k = l.useCallback(async (e, t) => {
                    try {
                        if (await w(e, R), P.current) return;
                        (0, N.A)("cssLoaded", !0)
                    } catch (e) {
                        S.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, N.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await M(e, t), P.current) return;
                        (0, C.Mq)()
                    } catch (e) {
                        i.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, N.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), P.current || (I(!0), O())
                }, [O]),
                L = l.useRef(!1);
            return l.useEffect(() => {
                if (!T.current && ((0, N.A)("hasUseEffectFired", !0), (0, N.A)("trackedPidFocused", m), s)) {
                    if (null == c) return void(0, N.A)("errorMessage", "No targetOverlayWindow");
                    if (!m) {
                        L.current || (i.A.updateOverlayState(E.A.getTargetPID(), v.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), L.current = !0);
                        return
                    }
                    T.current = !0, (0, N.A)("reactInitializationStarted", !0), k(c, e)
                }
            }, [k, m, e, c, s]), (0, o.l0)(() => {
                clearInterval(R.current), P.current = !0
            }), n = (0, a.bG)([p.A], () => p.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), r = (0, a.bG)([E.A], () => E.A.getFocusedWindowHandle()), l.useEffect(() => {
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
        }(c, O.G),
        g = (0, a.bG)([E.A], () => E.A.getFocusedPID()),
        L = (0, a.bG)([T.A], () => T.A.isInputLocked(g), [g]);
    return m ? (0, r.jsxs)(d.A, {
        themeOverride: x.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: L,
        children: [(0, r.jsx)(I.A, {}), (0, r.jsx)(s.Al, {})]
    }) : null
})