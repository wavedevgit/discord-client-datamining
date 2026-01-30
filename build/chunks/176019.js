/** chunk id: 176019, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => D,
    waitForCSSLoad: () => j
}), n(896048), n(65821);
var r = n(627968),
    l = n(64700),
    a = n(311907),
    o = n(684013),
    i = n(964486),
    c = n(573435),
    s = n(626584),
    u = n(87001),
    d = n(923917),
    _ = n(555528),
    f = n(309010),
    p = n(531685),
    A = n(723702),
    b = n(837921),
    h = n(9302),
    m = n(365971),
    I = n(777334),
    y = n(41984),
    g = n(200042),
    O = n(833551),
    v = n(395011),
    E = n(682763),
    C = n(222506),
    N = n(203322),
    P = n(644434),
    T = n(652215);
n(703552), n(921955);
let x = !A.isPlatformEmbedded && !1,
    w = new s.A("AppOverlay");

function j(e, t) {
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
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (A.isPlatformEmbedded) {
        try {
            await b.Ay.isAlwaysOnTop(t)
        } catch (e) {
            w.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, y.Ue.OutOfProcess)
        }
        for (let a = 0; a < r; a++) try {
            if (!await b.Ay.waitForIPCReady(n, e)) throw Error("IPC not ready");
            b.Ay.showInactive(t);
            return
        } catch (e) {
            var l;
            if ((null == (l = e.message) ? void 0 : l.includes("IPC")) && a < r - 1) {
                let t = n / 2 * Math.pow(2, a + 1);
                w.error("Failed to show inactive, retrying in ".concat(t, "ms"), e), await new Promise(e => setTimeout(e, t))
            } else throw (0, I.pj)(e, y.Ue.OutOfProcess), e
        }
    }
}

function L() {
    o.A.setFocusedPID(h.DEV_PID, null)
}

function k() {
    o.A.setFocusedPID(null, null)
}
let D = l.memo(function(e) {
    let t, {
        withTitleBar: n,
        windowKey: s
    } = e;
    t = (0, a.bG)([u.A], () => u.A.getWindow(s)), (0, i.Ay)(() => {
        if (null != t) return x && (t.document.hasFocus() && o.A.setFocusedPID(h.DEV_PID, null), t.addEventListener("focus", L), t.addEventListener("blur", k)), () => {
            x && (t.removeEventListener("focus", L), t.removeEventListener("blur", k))
        }
    });
    let b = function(e, t) {
            let n, r, c = (0, a.bG)([v.A], () => !A.isPlatformEmbedded || v.A.isWindowHandleInitialized()),
                s = (0, a.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, a.bG)([v.A], () => v.A.getFocusedPID()),
                b = l.useMemo(() => !A.isPlatformEmbedded || null != d && d !== h.UNSET_PID, [d]),
                [I, g] = l.useState(!1),
                C = l.useRef(!1),
                P = l.useCallback(() => {
                    let e = v.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    o.A.track(T.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: v.A.isPinned(T.uss.TEXT),
                        overlay_render_method: y.Ue[O.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t)
                    }), (0, E.Fd)()
                }, [t]),
                x = l.useRef(!1),
                L = l.useRef(null),
                k = l.useCallback(async (e, t) => {
                    try {
                        if (await j(e, L), x.current) return;
                        (0, N.A)("cssLoaded", !0)
                    } catch (e) {
                        w.error("Timed out waiting for CSS to load", e), o.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, N.A)("errorMessage", "CSS failed load");
                        return
                    }
                    try {
                        if (await S(e, t), x.current) return;
                        (0, E.Mq)()
                    } catch (e) {
                        o.A.setOverlayCrashed(v.A.getTargetPID(), e), (0, N.A)("errorMessage", "showInactive failed");
                        return
                    }
                    await new Promise(t => {
                        e.setTimeout(() => t(), 100)
                    }), x.current || (g(!0), P())
                }, [P]),
                D = l.useRef(!1);
            return l.useEffect(() => {
                if (!C.current && ((0, N.A)("hasUseEffectFired", !0), (0, N.A)("trackedPidFocused", b), c)) {
                    if (null == s) return void(0, N.A)("errorMessage", "No targetOverlayWindow");
                    if (!b) {
                        D.current || (o.A.updateOverlayState(v.A.getTargetPID(), y.AR.WAITING_FOR_PID_FOCUS, "AppOverlay - not focused"), D.current = !0);
                        return
                    }
                    C.current = !0, (0, N.A)("reactInitializationStarted", !0), k(s, e)
                }
            }, [k, b, e, s, c]), (0, i.l0)(() => {
                clearInterval(L.current), x.current = !0
            }), n = (0, a.bG)([p.A], () => p.A.windowSize(null != s ? (0, m.Q2)(s) : void 0)), r = (0, a.bG)([v.A], () => v.A.getFocusedWindowHandle()), l.useEffect(() => {
                let e, t;
                if (null != s && I && s.innerHeight === n.height && s.innerWidth === n.width) return e = s.requestAnimationFrame(() => {
                    e = s.requestAnimationFrame(() => {
                        s.clearTimeout(t), o.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
                    })
                }), t = s.setTimeout(() => {
                    s.cancelAnimationFrame(e), o.A.overlayUIFocusedPid(null != d ? d : h.UNSET_PID, r)
                }, 500), () => {
                    s.cancelAnimationFrame(e), s.clearTimeout(t)
                }
            }, [I, s, d, r, n]), I
        }(s, P.G),
        I = (0, a.bG)([v.A], () => v.A.getFocusedPID()),
        D = (0, a.bG)([C.A], () => C.A.isInputLocked(I), [I]);
    return b ? (0, r.jsxs)(d.A, {
        themeOverride: T.NJ8.MIDNIGHT,
        withTitleBar: n,
        windowKey: s,
        title: "Discord Overlay",
        hideModals: D,
        children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(c.Al, {})]
    }) : null
})