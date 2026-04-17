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
    g = n(688810),
    f = n(607470),
    m = n(880144),
    y = n(616356),
    p = n(734057),
    v = n(71393),
    _ = n(430452),
    x = n(309010),
    b = n(532624),
    E = n(256415),
    w = n(531685),
    C = n(203982),
    I = n(723702),
    O = n(350535),
    L = n(365971),
    D = n(41984),
    k = n(589051),
    N = n(223251),
    T = n(935975),
    S = n(555153),
    P = n(155052),
    j = n(452075),
    G = n(302614),
    R = n(833551),
    M = n(592598),
    U = n(395011),
    W = n(222506),
    Y = n(127242),
    V = n(237984),
    K = n(243612),
    F = n(575530),
    B = n(545807),
    z = n(672396),
    X = n(644434),
    H = n(652215),
    J = n(649831);
let Z = !I.isPlatformEmbedded && !1,
    Q = Z ? (0, r.jsx)(f.A, {
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
            layoutId: X.G,
            version: 4
        })
    }, {
        context: H.BRT.OVERLAY
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
                i === H.hE4.PRIMARY && t === r && n()
            },
            onContextMenu: $,
            children: i ? null : (0, r.jsxs)(G.A, {
                className: J.BE,
                children: [(0, r.jsx)(T.A, {
                    onClick: () => (0, V.b)(h.A.OVERLAY, H.BRT.OVERLAY),
                    IconComponent: s.iFK
                }), (0, r.jsx)(T.A, {
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
            children: (0, r.jsx)(T.A, {
                onClick: () => c.A.setInputLocked(!1, U.A.getTargetPID()),
                IconComponent: s.wUM
            })
        }) : null
    });

function en() {
    c.A.setInputLocked(!0, U.A.getTargetPID())
}

function er(e) {
    let t = W.A.isInputLocked(U.A.getTargetPID());
    "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? C._.dispatch(H.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !0
        }) : "keydown" === e.type.toLowerCase() && C._.dispatch(H.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !1
        })),
        function(e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && c.A.setInputLocked(!0, U.A.getTargetPID())
        }(e, t), Z && function(e) {
            if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
            let t = b.Ay.getOverlayKeybind();
            return !!t.enabled && 0 !== t.shortcut.length && (0, O.pi)(t.shortcut).some(t => 0 !== t.keyCode && t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.metaKey === e.metaKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey)
        }(e) && (e.preventDefault(), e.stopPropagation(), c.A.setInputLocked(!t, U.A.getTargetPID()))
}
let ei = i.memo(function() {
        return (0, o.bG)([Y.A], () => Y.A.hasRenderDebugMode(D.x7.WindowContainer)) ? (0, r.jsx)("div", {
            className: J.N1
        }) : null
    }),
    el = i.memo(function() {
        let e = (0, B.A)(),
            t = (0, o.bG)([U.A], () => U.A.getTargetPID()),
            n = (0, o.bG)([W.A], () => W.A.isInputLocked(t), [t]),
            l = (0, o.bG)([U.A], () => U.A.isFocused(t), [t]),
            u = (0, o.bG)([b.Ay], () => null != b.Ay.getOverlayKeybind() ? (0, O.dI)(b.Ay.getOverlayKeybind()?.shortcut, !0) : "???", []);
        return i.useEffect(() => {
            if (C._.dispatch(H.jej.OVERLAY_V3_SHOW_WIDGETS, {
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
            }), (0, r.jsx)(P.A, {
                className: a()({
                    [J.ZK]: n,
                    [J.al]: !n
                })
            }), Z && (0, r.jsx)(et, {
                locked: n,
                focused: l
            }), (0, r.jsx)(S.A, {
                locked: n
            })]
        })
    });

function ea() {
    var e, t;
    let n, l, a, d = (0, B.A)(),
        u = (0, o.bG)([E.default], () => E.default.incompatibleApp),
        f = (0, o.bG)([w.A], () => {
            let e = (0, L.Q2)(d),
                t = w.A.windowSize(e);
            return t.height < 360 || t.width < 640
        }, [d]),
        {
            analyticsLocations: b
        } = (0, g.Ay)(h.A.OVERLAY);
    return (0, j.e)(), (0, A.Ay)(() => {
        (0, k.E)()
    }), n = (0, B.A)(), e = () => {
        c.A.overlayReady(U.A.getTargetPID()), n.addEventListener("keydown", er, !0), n.addEventListener("keyup", er)
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
        let e = (0, K.qv)(),
            t = x.A.getVoiceChannelId(),
            n = p.A.getChannel(t),
            r = null != n ? v.A.getGuild(n.guild_id) : null,
            i = null != y.A.getCurrentUserActiveStream(),
            l = null != t,
            o = (0, m.A)(_.Ay) && !i && null != e,
            d = l && null != r && null != t,
            s = U.A.getTargetPID();
        if (R.default.hasChangedRenderMode(s)) return;
        let u = M.A.isNotificationDisabled(z.KS.WelcomeNudge),
            A = M.A.isNotificationDisabled(z.KS.GoLiveNudge),
            h = M.A.isNotificationDisabled(z.KS.ActivityInvite),
            g = [];
        !u && (g.push({
            type: z.Jr.WELCOME
        }), !A && (o && d ? g.push({
            type: z.Jr.GO_LIVE_VOICE,
            game: e,
            voiceChannelId: t,
            voiceGuild: r
        }) : o && g.push({
            type: z.Jr.GO_LIVE_NON_VOICE,
            game: e
        })), h || g.push({
            type: z.Jr.CONTENT_INVENTORY,
            entries: []
        })), null != a.current && clearTimeout(a.current), a.current = setTimeout(() => {
            c.A.overlayMounted(...g)
        }, 1e3)
    }), (0, A.l0)(() => {
        null != a.current && (clearTimeout(a.current), a.current = null)
    }), f || u) ? null : (0, r.jsx)(g.f5, {
        value: b,
        children: (0, r.jsxs)("div", {
            id: "overlay-container",
            className: J.Lw,
            children: [Q, (0, r.jsx)(el, {}), (0, r.jsx)(F.A, {}), (0, r.jsx)(N.A, {}), (0, r.jsx)(s.N9M, {
                appContext: H.BRT.OVERLAY
            }), (0, r.jsx)(ei, {})]
        })
    })
}