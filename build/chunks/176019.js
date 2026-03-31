/** chunk id: 176019 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => w,
    waitForCSSLoad: () => O
});
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(684013),
    o = n(964486),
    s = n(573435),
    c = n(626584),
    d = n(87001),
    _ = n(923917),
    u = n(555528),
    A = n(309010),
    f = n(531685),
    h = n(723702),
    p = n(837921),
    m = n(9302),
    b = n(365971),
    g = n(777334),
    I = n(41984),
    E = n(200042),
    C = n(833551),
    v = n(395011),
    y = n(682763),
    x = n(222506),
    T = n(203322),
    S = n(644434),
    N = n(652215);
n(703552), n(921955);
let P = !h.isPlatformEmbedded && !1,
    L = new c.A("AppOverlay");

function O(e, t) {
    return new Promise((n, a) => {
        let i = Date.now();
        t.current = setInterval(() => {
            if (function() {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        a = new Map;
                    for (let e of n) null != e.href && a.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = a.get(e.href);
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
            Date.now() - i > 12e4 && (a(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (h.isPlatformEmbedded) {
        try {
            await p.Ay.isAlwaysOnTop(t)
        } catch (e) {
            L.error("Window does not exist while trying to show inactive", e), (0, g.pj)(e, I.Ue.OutOfProcess)
        }
        for (let i = 0; i < a; i++) try {
            if (!await p.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            p.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && i < a - 1) {
                let t = n / 2 * Math.pow(2, i + 1);
                L.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, g.pj)(e, I.Ue.OutOfProcess), e
        }
    }
}

function G() {
    l.A.setFocusedPID(m.DEV_PID, null)
}

function R() {
    l.A.setFocusedPID(null, null)
}
let w = i.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: c
    } = e;
    t = (0, r.bG)([d.A], () => d.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return P && (t.document.hasFocus() && l.A.setFocusedPID(m.DEV_PID, null), t.addEventListener("focus", G), t.addEventListener("blur", R)), () => {
            P && (t.removeEventListener("focus", G), t.removeEventListener("blur", R))
        }
    });
    let p = function(e, t) {
            let n, a, s = (0, r.bG)([v.A], () => !h.isPlatformEmbedded || v.A.isWindowHandleInitialized()),
                c = (0, r.bG)([d.A], () => d.A.getWindow(e)),
                _ = (0, r.bG)([v.A], () => v.A.getFocusedPID()),
                p = i.useMemo(() => !h.isPlatformEmbedded || null != _ && _ !== m.UNSET_PID, [_]),
                [g, E] = i.useState(!1),
                x = i.useRef(!1),
                S = i.useCallback(() => {
                    let e = v.A.getTargetPID(),
                        n = null != A.A.getVoiceChannelId();
                    l.A.track(N.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: v.A.isPinned(N.uss.TEXT),
                        overlay_render_method: I.Ue[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, y.Fd)()
                }, [t]),
                P = i.useRef(!1),
                G = i.useRef(null),
                R = i.useCallback(async (e, t) => {
                    try {
                        if (await O(e, G), P.current) return;
                        (0, T.A)("cssLoaded", !0)
                    } catch (e) {
                        L.error("Timed out waiting for CSS to load", e), l.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await D(e, t), P.current) return;
                        (0, y.Mq)()
                    } catch (e) {
                        l.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), P.current || (E(!0), S())
                }, [S]),
                w = i.useRef(!1);
            return i.useEffect(() => {
                if (!x.current && ((0, T.A)("hasUseEffectFired", !0), (0, T.A)("trackedPidFocused", p), s)) {
                    if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
                    if (!p) {
                        w.current || (l.A.updateOverlayState(v.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), w.current = !0);
                        return
                    }
                    x.current = !0, (0, T.A)("reactInitializationStarted", !0), R(c, e)
                }
            }, [R, p, e, c, s]), (0, o.l0)(() => {
                clearInterval(G.current), P.current = !0
            }), n = (0, r.bG)([f.A], () => f.A.windowSize(null != c ? (0, b.Q2)(c) : void 0)), a = (0, r.bG)([v.A], () => v.A.getFocusedWindowHandle()), i.useEffect(() => {
                let e, t;
                if (null != c && g && c.innerHeight === n.height && c.innerWidth === n.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), l.A.overlayUIFocusedPid(_ ?? m.UNSET_PID, a)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(_ ?? m.UNSET_PID, a)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [g, c, _, a, n]), g
        }(c, S.G),
        g = (0, r.bG)([v.A], () => v.A.getFocusedPID()),
        w = (0, r.bG)([x.A], () => x.A.isInputLocked(g), [g]);
    return p ? (0, a.jsxs)(_.A, {
        themeOverride: N.NJ8.MIDNIGHT,
        appContext: N.BRT.OVERLAY,
        withTitleBar: n,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: w,
        children: [(0, a.jsx)(E.A, {}), (0, a.jsx)(s.Al, {})]
    }) : null
})