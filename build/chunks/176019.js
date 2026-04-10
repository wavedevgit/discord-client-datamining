/** chunk id: 176019 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => S,
    waitForCSSLoad: () => D
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(684013),
    o = n(964486),
    d = n(573435),
    s = n(626584),
    u = n(87001),
    c = n(923917),
    A = n(555528),
    h = n(309010),
    f = n(531685),
    g = n(723702),
    m = n(837921),
    y = n(9302),
    p = n(365971),
    v = n(777334),
    _ = n(41984),
    w = n(200042),
    x = n(833551),
    E = n(395011),
    b = n(682763),
    I = n(222506),
    C = n(203322),
    O = n(644434),
    L = n(652215);
n(703552), n(921955);
let k = !g.isPlatformEmbedded && !1,
    N = new s.A("AppOverlay");

function D(e, t) {
    return new Promise((n, r) => {
        let i = Date.now();
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
            Date.now() - i > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (g.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t)
        } catch (e) {
            N.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, _.Ue.OutOfProcess)
        }
        for (let i = 0; i < r; i++) try {
            if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            m.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && i < r - 1) {
                let t = n / 2 * Math.pow(2, i + 1);
                N.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, v.pj)(e, _.Ue.OutOfProcess), e
        }
    }
}

function j() {
    a.A.setFocusedPID(y.DEV_PID, null)
}

function T() {
    a.A.setFocusedPID(null, null)
}
let S = i.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: s
    } = e;
    t = (0, l.bG)([u.A], () => u.A.getWindow(s)), (0, o.Ay)(() => {
        if (null != t) return k && (t.document.hasFocus() && a.A.setFocusedPID(y.DEV_PID, null), t.addEventListener("focus", j), t.addEventListener("blur", T)), () => {
            k && (t.removeEventListener("focus", j), t.removeEventListener("blur", T))
        }
    });
    let m = function(e, t) {
            let n, r, d = (0, l.bG)([E.A], () => !g.isPlatformEmbedded || E.A.isWindowHandleInitialized()),
                s = (0, l.bG)([u.A], () => u.A.getWindow(e)),
                c = (0, l.bG)([E.A], () => E.A.getFocusedPID()),
                m = i.useMemo(() => !g.isPlatformEmbedded || null != c && c !== y.UNSET_PID, [c]),
                [v, w] = i.useState(!1),
                I = i.useRef(!1),
                O = i.useCallback(() => {
                    let e = E.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    a.A.track(L.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.A.isPinned(L.uss.TEXT),
                        overlay_render_method: _.Ue[x.default.getOverlayMethod(e)],
                        unpinned_widget_types: A.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, b.Fd)()
                }, [t]),
                k = i.useRef(!1),
                j = i.useRef(null),
                T = i.useCallback(async (e, t) => {
                    try {
                        if (await D(e, j), k.current) return;
                        (0, C.A)("cssLoaded", !0)
                    } catch (e) {
                        N.error("Timed out waiting for CSS to load", e), a.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, C.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await P(e, t), k.current) return;
                        (0, b.Mq)()
                    } catch (e) {
                        a.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, C.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), k.current || (w(!0), O())
                }, [O]),
                S = i.useRef(!1);
            return i.useEffect(() => {
                if (!I.current && ((0, C.A)("hasUseEffectFired", !0), (0, C.A)("trackedPidFocused", m), d)) {
                    if (null == s) return void(0, C.A)("errorMessage", "No targetOverlayWindow");
                    if (!m) {
                        S.current || (a.A.updateOverlayState(E.A.getTargetPID(), _.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), S.current = !0);
                        return
                    }
                    I.current = !0, (0, C.A)("reactInitializationStarted", !0), T(s, e)
                }
            }, [T, m, e, s, d]), (0, o.l0)(() => {
                clearInterval(j.current), k.current = !0
            }), n = (0, l.bG)([f.A], () => f.A.windowSize(null != s ? (0, p.Q2)(s) : void 0)), r = (0, l.bG)([E.A], () => E.A.getFocusedWindowHandle()), i.useEffect(() => {
                let e, t;
                if (null != s && v && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
                    e = s.requestAnimationFrame(() => {
                        s.clearTimeout(t), a.A.overlayUIFocusedPid(c ?? y.UNSET_PID, r)
                    })
                }), t = s.setTimeout(() => {
                    s.cancelAnimationFrame(e), a.A.overlayUIFocusedPid(c ?? y.UNSET_PID, r)
                }, 500), () => {
                    s.cancelAnimationFrame(e), s.clearTimeout(t)
                }
            }, [v, s, c, r, n]), v
        }(s, O.G),
        v = (0, l.bG)([E.A], () => E.A.getFocusedPID()),
        S = (0, l.bG)([I.A], () => I.A.isInputLocked(v), [v]);
    return m ? (0, r.jsxs)(c.A, {
        themeOverride: L.NJ8.MIDNIGHT,
        appContext: L.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: s,
        title: "Discord Overlay",
        hideModals: S,
        children: [(0, r.jsx)(w.A, {}), (0, r.jsx)(d.Al, {})]
    }) : null
})