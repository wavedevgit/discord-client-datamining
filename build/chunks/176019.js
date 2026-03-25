/** chunk id: 176019 params = (module,exports,require) **/
"use strict";
a.r(t), a.d(t, {
    default: () => M,
    waitForCSSLoad: () => P
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
    m = a(531685),
    p = a(723702),
    b = a(837921),
    g = a(9302),
    h = a(365971),
    A = a(777334),
    v = a(41984),
    I = a(200042),
    y = a(833551),
    x = a(395011),
    C = a(682763),
    S = a(222506),
    T = a(203322),
    w = a(644434),
    E = a(652215);
a(703552), a(921955);
let N = !p.isPlatformEmbedded && !1,
    L = new c.A("AppOverlay");

function P(e, t) {
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
async function k(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await b.Ay.isAlwaysOnTop(t)
        } catch (e) {
            L.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, v.Ue.OutOfProcess)
        }
        for (let i = 0; i < n; i++) try {
            if (!await b.Ay.waitForIPCReady(a, e)) throw Error("IPC not ready");
            b.Ay.showInactive(t);
            return
        } catch (e) {
            if (e.message?.includes("IPC") && i < n - 1) {
                let t = a / 2 * Math.pow(2, i + 1);
                L.error(`Failed to show inactive, retrying in ${t}ms`, e), await new Promise(e => setTimeout(e, t))
            } else throw (0, A.pj)(e, v.Ue.OutOfProcess), e
        }
    }
}

function R() {
    s.A.setFocusedPID(g.DEV_PID, null)
}

function O() {
    s.A.setFocusedPID(null, null)
}
let M = i.memo(function(e) {
    let t, {
        withTitleBar: a,
        windowKey: c
    } = e;
    t = (0, r.bG)([_.A], () => _.A.getWindow(c)), (0, o.Ay)(() => {
        if (null != t) return N && (t.document.hasFocus() && s.A.setFocusedPID(g.DEV_PID, null), t.addEventListener("focus", R), t.addEventListener("blur", O)), () => {
            N && (t.removeEventListener("focus", R), t.removeEventListener("blur", O))
        }
    });
    let b = function(e, t) {
            let a, n, l = (0, r.bG)([x.A], () => !p.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
                c = (0, r.bG)([_.A], () => _.A.getWindow(e)),
                d = (0, r.bG)([x.A], () => x.A.getFocusedPID()),
                b = i.useMemo(() => !p.isPlatformEmbedded || null != d && d !== g.UNSET_PID, [d]),
                [A, I] = i.useState(!1),
                S = i.useRef(!1),
                w = i.useCallback(() => {
                    let e = x.A.getTargetPID(),
                        a = null != f.A.getVoiceChannelId();
                    s.A.track(E.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: x.A.isPinned(E.uss.TEXT),
                        overlay_render_method: v.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, C.Fd)()
                }, [t]),
                N = i.useRef(!1),
                R = i.useRef(null),
                O = i.useCallback(async (e, t) => {
                    try {
                        if (await P(e, R), N.current) return;
                        (0, T.A)("cssLoaded", !0)
                    } catch (e) {
                        L.error("Timed out waiting for CSS to load", e), s.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, T.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await k(e, t), N.current) return;
                        (0, C.Mq)()
                    } catch (e) {
                        s.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, T.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), N.current || (I(!0), w())
                }, [w]),
                M = i.useRef(!1);
            return i.useEffect(() => {
                if (!S.current && ((0, T.A)("hasUseEffectFired", !0), (0, T.A)("trackedPidFocused", b), l)) {
                    if (null == c) return void(0, T.A)("errorMessage", "No targetOverlayWindow");
                    if (!b) {
                        M.current || (s.A.updateOverlayState(x.A.getTargetPID(), v.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), M.current = !0);
                        return
                    }
                    S.current = !0, (0, T.A)("reactInitializationStarted", !0), O(c, e)
                }
            }, [O, b, e, c, l]), (0, o.l0)(() => {
                clearInterval(R.current), N.current = !0
            }), a = (0, r.bG)([m.A], () => m.A.windowSize(null != c ? (0, h.Q2)(c) : void 0)), n = (0, r.bG)([x.A], () => x.A.getFocusedWindowHandle()), i.useEffect(() => {
                let e, t;
                if (null != c && A && c.innerHeight === a.height && c.innerWidth === a.width) return e = c.requestAnimationFrame(() => {
                    e = c.requestAnimationFrame(() => {
                        c.clearTimeout(t), s.A.overlayUIFocusedPid(d ?? g.UNSET_PID, n)
                    })
                }), t = c.setTimeout(() => {
                    c.cancelAnimationFrame(e), s.A.overlayUIFocusedPid(d ?? g.UNSET_PID, n)
                }, 500), () => {
                    c.cancelAnimationFrame(e), c.clearTimeout(t)
                }
            }, [A, c, d, n, a]), A
        }(c, w.G),
        A = (0, r.bG)([x.A], () => x.A.getFocusedPID()),
        M = (0, r.bG)([S.A], () => S.A.isInputLocked(A), [A]);
    return b ? (0, n.jsxs)(d.A, {
        themeOverride: E.NJ8.MIDNIGHT,
        appContext: E.BRT.OVERLAY,
        withTitleBar: a,
        windowKey: c,
        title: "Discord Overlay",
        hideModals: M,
        children: [(0, n.jsx)(I.A, {}), (0, n.jsx)(l.Al, {})]
    }) : null
})