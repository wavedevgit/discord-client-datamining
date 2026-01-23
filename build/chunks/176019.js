/** Chunk was on 12925 **/
/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => G,
    waitForCSSLoad: () => P
}), n(896048), n(65821);
var a = n(627968),
    r = n(64700),
    l = n(311907),
    i = n(684013),
    o = n(964486),
    c = n(573435),
    s = n(626584),
    d = n(87001),
    _ = n(923917),
    u = n(555528),
    p = n(309010),
    f = n(531685),
    b = n(723702),
    h = n(837921),
    A = n(9302),
    m = n(365971),
    I = n(777334),
    g = n(41984),
    v = n(200042),
    y = n(833551),
    x = n(395011),
    C = n(682763),
    T = n(222506),
    w = n(203322),
    N = n(644434),
    E = n(652215);
n(703552), n(921955);
let S = !b.isPlatformEmbedded && !1,
    O = new s.A("AppOverlay");

function P(e, t) {
    return new Promise((n, a) => {
        let r = Date.now();
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
            Date.now() - r > 12e4 && (a(Error("Timed out waiting for CSS to load")), clearInterval(t.current))
        }, 200)
    })
}
async function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await h.Ay.isAlwaysOnTop(t)
        } catch (e) {
            O.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, g.Ue.OutOfProcess)
        }
        for (let l = 0; l < a; l++) try {
            if (!await h.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            h.Ay.showInactive(t);
            return
        } catch (e) {
            var r;
            if ((null == (r = e.message) ? void 0 : r.includes("IPC")) && l < a - 1) {
                let t = n / 2 * Math.pow(2, l + 1);
                O.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, I.pj)(e, g.Ue.OutOfProcess), e
        }
    }
}

function j() {
    i.A.setFocusedPID(A.DEV_PID, null)
}

function D() {
    i.A.setFocusedPID(null, null)
}
let G = r.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: s
    } = e;
    t = (0, l.bG)([d.A], () => d.A.getWindow(s)), (0, o.Ay)(() => {
        if (null != t) return S && (t.document.hasFocus() && i.A.setFocusedPID(A.DEV_PID, null), t.addEventListener("focus", j), t.addEventListener("blur", D)), () => {
            S && (t.removeEventListener("focus", j), t.removeEventListener("blur", D))
        }
    });
    let h = function(e, t) {
            let n, a, c = (0, l.bG)([x.A], () => !b.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
                s = (0, l.bG)([d.A], () => d.A.getWindow(e)),
                _ = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
                h = r.useMemo(() => !b.isPlatformEmbedded || null != _ && _ !== A.UNSET_PID, [_]),
                [I, v] = r.useState(!1),
                T = r.useRef(!1),
                N = r.useCallback(() => {
                    let e = x.A.getTargetPID(),
                        n = null != p.A.getVoiceChannelId();
                    i.A.track(E.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: x.A.isPinned(E.uss.TEXT),
                        overlay_render_method: g.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, C.Fd)()
                }, [t]),
                S = r.useRef(!1),
                j = r.useRef(null),
                D = r.useCallback(async (e, t) => {
                    try {
                        if (await P(e, j), S.current) return;
                        (0, w.A)("cssLoaded", !0)
                    } catch (e) {
                        O.error("Timed out waiting for CSS to load", e), i.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, w.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await k(e, t), S.current) return;
                        (0, C.Mq)()
                    } catch (e) {
                        i.A.setOverlayCrashed(x.A.getTargetPID(), e), (0, w.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), S.current || (v(!0), N())
                }, [N]),
                G = r.useRef(!1);
            return r.useEffect(() => {
                if (!T.current && ((0, w.A)("hasUseEffectFired", !0), (0, w.A)("trackedPidFocused", h), c)) {
                    if (null == s) return void(0, w.A)("errorMessage", "No targetOverlayWindow");
                    if (!h) {
                        G.current || (i.A.updateOverlayState(x.A.getTargetPID(), g.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), G.current = !0);
                        return
                    }
                    T.current = !0, (0, w.A)("reactInitializationStarted", !0), D(s, e)
                }
            }, [D, h, e, s, c]), (0, o.l0)(() => {
                clearInterval(j.current), S.current = !0
            }), n = (0, l.bG)([f.A], () => f.A.windowSize(null != s ? (0, m.Q2)(s) : void 0)), a = (0, l.bG)([x.A], () => x.A.getFocusedWindowHandle()), r.useEffect(() => {
                let e, t;
                if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
                    e = s.requestAnimationFrame(() => {
                        s.clearTimeout(t), i.A.overlayUIFocusedPid(null != _ ? _ : A.UNSET_PID, a)
                    })
                }), t = s.setTimeout(() => {
                    s.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(null != _ ? _ : A.UNSET_PID, a)
                }, 500), () => {
                    s.cancelAnimationFrame(e), s.clearTimeout(t)
                }
            }, [I, s, _, a, n]), I
        }(s, N.G),
        I = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
        G = (0, l.bG)([T.A], () => T.A.isInputLocked(I), [I]);
    return h ? (0, a.jsxs)(_.A, {
        themeOverride: E.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: s,
        title: "Discord Overlay",
        hideModals: G,
        children: [(0, a.jsx)(v.A, {}), (0, a.jsx)(c.Al, {})]
    }) : null
})