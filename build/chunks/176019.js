/** chunk id: 176019 params = (module,exports,require) **/
a.r(t), a.d(t, {
    default: () => G,
    waitForCSSLoad: () => w
});
var n = a(627968),
    i = a(64700),
    r = a(311907),
    l = a(684013),
    s = a(964486),
    o = a(573435),
    _ = a(626584),
    c = a(87001),
    d = a(923917),
    u = a(555528),
    f = a(309010),
    m = a(531685),
    h = a(723702),
    A = a(837921),
    p = a(9302),
    g = a(365971),
    b = a(777334),
    I = a(41984),
    v = a(200042),
    C = a(833551),
    E = a(395011),
    y = a(682763),
    x = a(222506),
    S = a(203322),
    T = a(644434),
    N = a(652215);
a(703552), a(921955);
let L = !h.isPlatformEmbedded && !1,
    P = new _.A("AppOverlay");

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
async function O(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (h.isPlatformEmbedded) {
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

function D() {
    l.A.setFocusedPID(p.DEV_PID, null)
}

function R() {
    l.A.setFocusedPID(null, null)
}
let G = i.memo(function(e) {
    let t, {
        withTitleBar: a,
        windowKey: _
    } = e;
    t = (0, r.bG)([c.A], () => c.A.getWindow(_)), (0, s.Ay)(() => {
        if (null != t) return L && (t.document.hasFocus() && l.A.setFocusedPID(p.DEV_PID, null), t.addEventListener("focus", D), t.addEventListener("blur", R)), () => {
            L && (t.removeEventListener("focus", D), t.removeEventListener("blur", R))
        }
    });
    let A = function(e, t) {
            let a, n, o = (0, r.bG)([E.A], () => !h.isPlatformEmbedded || E.A.isWindowHandleInitialized()),
                _ = (0, r.bG)([c.A], () => c.A.getWindow(e)),
                d = (0, r.bG)([E.A], () => E.A.getFocusedPID()),
                A = i.useMemo(() => !h.isPlatformEmbedded || null != d && d !== p.UNSET_PID, [d]),
                [b, v] = i.useState(!1),
                x = i.useRef(!1),
                T = i.useCallback(() => {
                    let e = E.A.getTargetPID(),
                        a = null != f.A.getVoiceChannelId();
                    l.A.track(N.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: E.A.isPinned(N.uss.TEXT),
                        overlay_render_method: I.Ue[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, y.Fd)()
                }, [t]),
                L = i.useRef(!1),
                D = i.useRef(null),
                R = i.useCallback(async (e, t) => {
                    try {
                        if (await w(e, D), L.current) return;
                        (0, S.A)("cssLoaded", !0)
                    } catch (e) {
                        P.error("Timed out waiting for CSS to load", e), l.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, S.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await O(e, t), L.current) return;
                        (0, y.Mq)()
                    } catch (e) {
                        l.A.setOverlayCrashed(E.A.getTargetPID(), e), (0, S.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), L.current || (v(!0), T())
                }, [T]),
                G = i.useRef(!1);
            return i.useEffect(() => {
                if (!x.current && ((0, S.A)("hasUseEffectFired", !0), (0, S.A)("trackedPidFocused", A), o)) {
                    if (null == _) return void(0, S.A)("errorMessage", "No targetOverlayWindow");
                    if (!A) {
                        G.current || (l.A.updateOverlayState(E.A.getTargetPID(), I.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), G.current = !0);
                        return
                    }
                    x.current = !0, (0, S.A)("reactInitializationStarted", !0), R(_, e)
                }
            }, [R, A, e, _, o]), (0, s.l0)(() => {
                clearInterval(D.current), L.current = !0
            }), a = (0, r.bG)([m.A], () => m.A.windowSize(null != _ ? (0, g.Q2)(_) : void 0)), n = (0, r.bG)([E.A], () => E.A.getFocusedWindowHandle()), i.useEffect(() => {
                let e, t;
                if (null != _ && b && _.innerHeight === a.height && _.innerWidth === a.width) return e = _.requestAnimationFrame(() => {
                    e = _.requestAnimationFrame(() => {
                        _.clearTimeout(t), l.A.overlayUIFocusedPid(d ?? p.UNSET_PID, n)
                    })
                }), t = _.setTimeout(() => {
                    _.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(d ?? p.UNSET_PID, n)
                }, 500), () => {
                    _.cancelAnimationFrame(e), _.clearTimeout(t)
                }
            }, [b, _, d, n, a]), b
        }(_, T.G),
        b = (0, r.bG)([E.A], () => E.A.getFocusedPID()),
        G = (0, r.bG)([x.A], () => x.A.isInputLocked(b), [b]);
    return A ? (0, n.jsxs)(d.A, {
        themeOverride: N.NJ8.MIDNIGHT,
        appContext: N.BRT.OVERLAY,
        withTitleBar: a,
        windowKey: _,
        title: "Discord Overlay",
        hideModals: G,
        children: [(0, n.jsx)(v.A, {}), (0, n.jsx)(o.Al, {})]
    }) : null
})