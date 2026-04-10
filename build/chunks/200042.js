/** chunk id: 200042 params = (module,exports,require) **/
n.d(t, {
    A: () => ea
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    d = n(192308),
    s = n(397927),
    u = n(442433),
    c = n(684013),
    A = n(964486),
    h = n(793574),
    f = n(688810),
    g = n(607470),
    m = n(880144),
    y = n(616356),
    p = n(734057),
    v = n(71393),
    _ = n(430452),
    w = n(309010),
    x = n(532624),
    E = n(256415),
    b = n(531685),
    I = n(203982),
    C = n(723702),
    O = n(350535),
    L = n(365971),
    k = n(41984),
    N = n(589051),
    D = n(223251),
    P = n(935975),
    j = n(555153),
    T = n(155052),
    S = n(452075),
    G = n(302614),
    R = n(833551),
    M = n(592598),
    V = n(395011),
    U = n(222506),
    W = n(127242),
    K = n(237984),
    Y = n(243612),
    F = n(575530),
    B = n(545807),
    z = n(672396),
    H = n(644434),
    X = n(652215),
    J = n(650519);
let Z = !C.isPlatformEmbedded && !1,
    Q = Z ? (0, r.jsx)(g.A, {
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
        className: J.pN,
        autoPlay: !0,
        loop: !0,
        muted: !0
    }) : null;

function q(e) {
    e.preventDefault()
}

function $(e) {
    (0, u.L3)(e, async () => {
        let {
            default: e
        } = await n.e("86437").then(n.bind(n, 171300));
        return t => (0, r.jsx)(e, {
            ...t,
            layoutId: H.G,
            version: 4
        })
    }, {
        context: X.BRT.OVERLAY
    })
}
let ee = i.memo(function(e) {
        let {
            keybind: t,
            onClick: n,
            locked: i
        } = e;
        return (0, r.jsx)(s.DUT, {
            className: a()(J.LK, {
                [J.Zo]: !i,
                [J.vZ]: i
            }),
            onMouseDown: e => {
                let {
                    currentTarget: t,
                    target: r,
                    button: i
                } = e;
                i === X.hE4.PRIMARY && t === r && n()
            },
            onContextMenu: $,
            children: i ? null : (0, r.jsxs)(G.A, {
                className: J.BE,
                children: [(0, r.jsx)(P.A, {
                    onClick: () => (0, K.b)(h.A.OVERLAY, X.BRT.OVERLAY),
                    IconComponent: s.iFK
                }), (0, r.jsx)(P.A, {
                    keybind: t,
                    onClick: n,
                    IconComponent: s.d$L
                })]
            })
        })
    }),
    et = i.memo(function(e) {
        let {
            locked: t,
            focused: n
        } = e;
        return t && n ? (0, r.jsx)(G.A, {
            className: J.BE,
            children: (0, r.jsx)(P.A, {
                onClick: () => c.A.setInputLocked(!1, V.A.getTargetPID()),
                IconComponent: s.wUM
            })
        }) : null
    });

function en() {
    c.A.setInputLocked(!0, V.A.getTargetPID())
}

function er(e) {
    let t = U.A.isInputLocked(V.A.getTargetPID());
    "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? I._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !0
        }) : "keydown" === e.type.toLowerCase() && I._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !1
        })),
        function(e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && c.A.setInputLocked(!0, V.A.getTargetPID())
        }(e, t), Z && function(e) {
            if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
            let t = x.Ay.getOverlayKeybind();
            return !!t.enabled && 0 !== t.shortcut.length && (0, O.pi)(t.shortcut).some(t => 0 !== t.keyCode && t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.metaKey === e.metaKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey)
        }(e) && (e.preventDefault(), e.stopPropagation(), c.A.setInputLocked(!t, V.A.getTargetPID()))
}
let ei = i.memo(function() {
        return (0, o.bG)([W.A], () => W.A.hasRenderDebugMode(k.x7.WindowContainer)) ? (0, r.jsx)("div", {
            className: J.N1
        }) : null
    }),
    el = i.memo(function() {
        let e = (0, B.A)(),
            t = (0, o.bG)([V.A], () => V.A.getTargetPID()),
            n = (0, o.bG)([U.A], () => U.A.isInputLocked(t), [t]),
            l = (0, o.bG)([V.A], () => V.A.isFocused(t), [t]),
            u = (0, o.bG)([x.Ay], () => null != x.Ay.getOverlayKeybind() ? (0, O.dI)(x.Ay.getOverlayKeybind()?.shortcut, !0) : "???", []);
        return i.useEffect(() => {
            if (I._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, {
                    show: !0
                }), n) return (0, d.closeAllModalsInContext)(s.KX8), e.addEventListener("contextmenu", q, !1), () => {
                e.removeEventListener("contextmenu", q, !1)
            };
            e.removeEventListener("contextmenu", q, !1)
        }, [n, e]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ee, {
                locked: n,
                keybind: u,
                onClick: en
            }), (0, r.jsx)(T.A, {
                className: a()({
                    [J.ZK]: n,
                    [J.al]: !n
                })
            }), Z && (0, r.jsx)(et, {
                locked: n,
                focused: l
            }), (0, r.jsx)(j.A, {
                locked: n
            })]
        })
    });

function ea() {
    var e, t;
    let n, l, a, d = (0, B.A)(),
        u = (0, o.bG)([E.default], () => E.default.incompatibleApp),
        g = (0, o.bG)([b.A], () => {
            let e = (0, L.Q2)(d),
                t = b.A.windowSize(e);
            return t.height < 360 || t.width < 640
        }, [d]),
        {
            analyticsLocations: x
        } = (0, f.Ay)(h.A.OVERLAY);
    return (0, S.e)(), (0, A.Ay)(() => {
        (0, N.E)()
    }), n = (0, B.A)(), e = () => {
        c.A.overlayReady(V.A.getTargetPID()), n.addEventListener("keydown", er, !0), n.addEventListener("keyup", er)
    }, t = () => {
        n.removeEventListener("keydown", er, !0), n.removeEventListener("keyup", er)
    }, l = i.useRef({
        mount: e,
        unmount: t
    }), i.useEffect(() => {
        l.current = {
            mount: e,
            unmount: t
        }
    }), i.useEffect(() => (l.current.mount(), () => {
        l.current.unmount()
    }), []), (a = i.useRef(null), (0, A.Ay)(() => {
        let e = (0, Y.qv)(),
            t = w.A.getVoiceChannelId(),
            n = p.A.getChannel(t),
            r = null != n ? v.A.getGuild(n.guild_id) : null,
            i = null != y.A.getCurrentUserActiveStream(),
            l = null != t,
            o = (0, m.A)(_.Ay) && !i && null != e,
            d = l && null != r && null != t,
            s = V.A.getTargetPID();
        if (R.default.hasChangedRenderMode(s)) return;
        let u = M.A.isNotificationDisabled(z.KS.WelcomeNudge),
            A = M.A.isNotificationDisabled(z.KS.GoLiveNudge),
            h = M.A.isNotificationDisabled(z.KS.ActivityInvite),
            f = [];
        !u && (f.push({
            type: z.Jr.WELCOME
        }), !A && (o && d ? f.push({
            type: z.Jr.GO_LIVE_VOICE,
            game: e,
            voiceChannelId: t,
            voiceGuild: r
        }) : o && f.push({
            type: z.Jr.GO_LIVE_NON_VOICE,
            game: e
        })), h || f.push({
            type: z.Jr.CONTENT_INVENTORY,
            entries: []
        })), null != a.current && clearTimeout(a.current), a.current = setTimeout(() => {
            c.A.overlayMounted(...f)
        }, 1e3)
    }), (0, A.l0)(() => {
        null != a.current && (clearTimeout(a.current), a.current = null)
    }), g || u) ? null : (0, r.jsx)(f.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            id: "overlay-container",
            className: J.Lw,
            children: [Q, (0, r.jsx)(el, {}), (0, r.jsx)(F.A, {}), (0, r.jsx)(D.A, {}), (0, r.jsx)(s.N9M, {
                appContext: X.BRT.OVERLAY
            }), (0, r.jsx)(ei, {})]
        })
    })
}