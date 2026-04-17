/** chunk id: 176019 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => j,
    waitForCSSLoad: () => N
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
    g = n(531685),
    f = n(723702),
    m = n(837921),
    y = n(9302),
    p = n(365971),
    v = n(777334),
    _ = n(41984),
    x = n(200042),
    b = n(833551),
    E = n(395011),
    w = n(682763),
    C = n(222506),
    I = n(203322),
    O = n(644434),
    L = n(652215);
n(703552), n(921955);
let D = !f.isPlatformEmbedded && !1,
    k = new s.A("AppOverlay");

function N(e, t) {
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
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (f.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t)
        } catch (e) {
            k.error("Window does not exist while trying to show inactive", e), (0, v.pj)(e, _.Ue.OutOfProcess)
        }
        for (let i = 0; i < r; i++) try {
            if (!await m.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            m.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && i < r - 1) {
                let t = n / 2 * Math.pow(2, i + 1);
                k.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, v.pj)(e, _.Ue.OutOfProcess), e
        }
    }
}

function S() {
    a.A.setFocusedPID(y.DEV_PID, null)
}

function P() {
    a.A.setFocusedPID(null, null)
}
let j = i.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: s
    } = e;
    t = (0, l.bG)([u.A], () => u.A.getWindow(s)), (0, o.Ay)(() => {
        if (null != t) return D && (t.document.hasFocus() && a.A.setFocusedPID(y.DEV_PID, null), t.addEventListener("focus", S), t.addEventListener("blur", P)), () => {
            D && (t.removeEventListener("focus", S), t.removeEventListener("blur", P))
        }
    });
    let m = function(e, t) {
            let n, r, d = (0, l.bG)([E.A], () => !f.isPlatformEmbedded || E.A.isWindowHandleInitialized()),
                s = (0, l.bG)([u.A], () => u.A.getWindow(e)),
                c = (0, l.bG)([E.A], () => E.A.getFocusedPID()),
                m = i.useMemo(() => !f.isPlatformEmbedded || null != c && c !== y.UNSET_PID, [c]),
                [v, x] = i.useState(!1),
                C = i.useRef(!1),
                O = i.useCallback(() => {
                    let e = E.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    a.A.track(L.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.A.isPinned(L.uss.TEXT),
                        overlay_render_method: _.Ue[b.default.getOverlayMethod(e)],
                        unpinned_widget_types: A.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, w.Fd)()
                }, [t]),
                D = i.useRef(!1),
                S = i.useRef(null),
                P = i.useCallback(async (e, t) => {
                    try {
                        if (await N(e, S), D.current) return;
                        (0, I.A)("cssLoaded", !0)
                    } catch (e) {
                        k.error("Timed out waiting for CSS to load", e), a.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, I.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await T(e, t), D.current) return;
                        (0, w.Mq)()
                    } catch (e) {
                        a.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, I.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), D.current || (x(!0), O())
                }, [O]),
                j = i.useRef(!1);
            return i.useEffect(() => {
                if (!C.current && ((0, I.A)("hasUseEffectFired", !0), (0, I.A)("trackedPidFocused", m), d)) {
                    if (null == s) return void(0, I.A)("errorMessage", "No targetOverlayWindow");
                    if (!m) {
                        j.current || (a.A.updateOverlayState(E.A.getTargetPID(), _.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), j.current = !0);
                        return
                    }
                    C.current = !0, (0, I.A)("reactInitializationStarted", !0), P(s, e)
                }
            }, [P, m, e, s, d]), (0, o.l0)(() => {
                clearInterval(S.current), D.current = !0
            }), n = (0, l.bG)([g.A], () => g.A.windowSize(null != s ? (0, p.Q2)(s) : void 0)), r = (0, l.bG)([E.A], () => E.A.getFocusedWindowHandle()), i.useEffect(() => {
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
        j = (0, l.bG)([C.A], () => C.A.isInputLocked(v), [v]);
    return m ? (0, r.jsxs)(c.A, {
        themeOverride: L.NJ8.MIDNIGHT,
        appContext: L.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: s,
        title: "Discord Overlay",
        hideModals: j,
        children: [(0, r.jsx)(x.A, {}), (0, r.jsx)(d.Al, {})]
    }) : null
})