/** chunk id: 200042, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => es
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(192308),
    u = n(397927),
    d = n(442433),
    c = n(684013),
    h = n(964486),
    m = n(793574),
    g = n(688810),
    p = n(607470),
    A = n(880144),
    f = n(616356),
    x = n(734057),
    E = n(71393),
    S = n(430452),
    v = n(309010),
    C = n(532624),
    I = n(256415),
    T = n(531685),
    _ = n(203982),
    y = n(723702),
    j = n(350535),
    b = n(365971),
    w = n(41984),
    O = n(589051),
    N = n(223251),
    M = n(935975),
    R = n(555153),
    k = n(155052),
    L = n(452075),
    D = n(302614),
    z = n(833551),
    P = n(592598),
    G = n(395011),
    V = n(222506),
    U = n(127242),
    H = n(237984),
    Y = n(243612),
    F = n(575530),
    Z = n(545807),
    W = n(672396),
    X = n(644434),
    K = n(652215),
    B = n(661272);
let q = !y.isPlatformEmbedded && !1,
    Q = q ? (0, i.jsx)(p.A, {
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
        className: B.pN,
        autoPlay: !0,
        loop: !0,
        muted: !0
    }) : null;

function J(e) {
    e.preventDefault()
}

function $(e) {
    (0, d.L3)(e, async () => {
        let {
            default: e
        } = await n.e("86437").then(n.bind(n, 171300));
        return t => (0, i.jsx)(e, {
            ...t,
            layoutId: X.G,
            version: 4
        })
    }, {
        context: K.BRT.OVERLAY
    })
}
let ee = l.memo(function(e) {
        let {
            keybind: t,
            onClick: n,
            locked: l
        } = e, r = (0, O.X4)(m.A.OVERLAY);
        return (0, i.jsx)(u.DUT, {
            className: s()(B.LK, {
                [B.Zo]: !l,
                [B.vZ]: l
            }),
            onMouseDown: e => {
                let {
                    currentTarget: t,
                    target: i,
                    button: l
                } = e;
                l === K.hE4.PRIMARY && t === i && n()
            },
            onContextMenu: $,
            children: l ? null : (0, i.jsxs)(D.A, {
                className: B.BE,
                children: [r ? (0, i.jsx)(M.A, {
                    onClick: () => (0, H.b)(m.A.OVERLAY, K.BRT.OVERLAY),
                    IconComponent: u.iFK
                }) : null, (0, i.jsx)(M.A, {
                    keybind: t,
                    onClick: n,
                    IconComponent: u.d$L
                })]
            })
        })
    }),
    et = l.memo(function(e) {
        let {
            locked: t,
            focused: n
        } = e;
        return t && n ? (0, i.jsx)(D.A, {
            className: B.BE,
            children: (0, i.jsx)(M.A, {
                onClick: () => c.A.setInputLocked(!1, G.A.getTargetPID()),
                IconComponent: u.wUM
            })
        }) : null
    });

function en() {
    c.A.setInputLocked(!0, G.A.getTargetPID())
}

function ei(e) {
    let t = V.A.isInputLocked(G.A.getTargetPID());
    "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? _._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !0
        }) : "keydown" === e.type.toLowerCase() && _._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, {
            show: !1
        })),
        function(e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && c.A.setInputLocked(!0, G.A.getTargetPID())
        }(e, t), q && function(e) {
            if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
            let t = C.Ay.getOverlayKeybind();
            return !!t.enabled && 0 !== t.shortcut.length && (0, j.pi)(t.shortcut).some(t => 0 !== t.keyCode && t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.metaKey === e.metaKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey)
        }(e) && (e.preventDefault(), e.stopPropagation(), c.A.setInputLocked(!t, G.A.getTargetPID()))
}
let el = l.memo(function() {
        return (0, a.bG)([U.A], () => U.A.hasRenderDebugMode(w.x7.WindowContainer)) ? (0, i.jsx)("div", {
            className: B.N1
        }) : null
    }),
    er = l.memo(function() {
        let e = (0, Z.A)(),
            t = (0, a.bG)([G.A], () => G.A.getTargetPID()),
            n = (0, a.bG)([V.A], () => V.A.isInputLocked(t), [t]),
            r = (0, a.bG)([G.A], () => G.A.isFocused(t), [t]),
            d = (0, a.bG)([C.Ay], () => null != C.Ay.getOverlayKeybind() ? (0, j.dI)(C.Ay.getOverlayKeybind()?.shortcut, !0) : "???", []);
        return l.useEffect(() => {
            if (_._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, {
                    show: !0
                }), n) return (0, o.closeAllModalsInContext)(u.KX8), e.addEventListener("contextmenu", J, !1), () => {
                e.removeEventListener("contextmenu", J, !1)
            };
            e.removeEventListener("contextmenu", J, !1)
        }, [n, e]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(ee, {
                locked: n,
                keybind: d,
                onClick: en
            }), (0, i.jsx)(k.A, {
                className: s()({
                    [B.ZK]: n,
                    [B.al]: !n
                })
            }), q && (0, i.jsx)(et, {
                locked: n,
                focused: r
            }), (0, i.jsx)(R.A, {
                locked: n
            })]
        })
    });

function es(e) {
    var t, n;
    let r, s, o, {
            isEmbeddedActivity: d
        } = e,
        p = (0, Z.A)(),
        C = (0, a.bG)([I.default], () => I.default.incompatibleApp),
        _ = (0, a.bG)([T.A], () => {
            let e = (0, b.Q2)(p),
                t = T.A.windowSize(e);
            return t.height < 360 || t.width < 640
        }, [p]),
        {
            analyticsLocations: y
        } = (0, g.Ay)(m.A.OVERLAY);
    return (0, L.e)(), (0, h.Ay)(() => {
        (0, O.E)()
    }), r = (0, Z.A)(), t = () => {
        c.A.overlayReady(G.A.getTargetPID()), r.addEventListener("keydown", ei, !0), r.addEventListener("keyup", ei)
    }, n = () => {
        r.removeEventListener("keydown", ei, !0), r.removeEventListener("keyup", ei)
    }, s = l.useRef({
        mount: t,
        unmount: n
    }), l.useEffect(() => {
        s.current = {
            mount: t,
            unmount: n
        }
    }), l.useEffect(() => (s.current.mount(), () => {
        s.current.unmount()
    }), []), (o = l.useRef(null), (0, h.Ay)(() => {
        let e = (0, Y.qv)(),
            t = v.A.getVoiceChannelId(),
            n = x.A.getChannel(t),
            i = null != n ? E.A.getGuild(n.guild_id) : null,
            l = null != f.A.getCurrentUserActiveStream(),
            r = null != t,
            s = (0, A.A)(S.Ay) && !l && null != e,
            a = r && null != i && null != t,
            u = G.A.getTargetPID();
        if (z.default.hasChangedRenderMode(u)) return;
        let d = P.A.isNotificationDisabled(W.KS.WelcomeNudge),
            h = P.A.isNotificationDisabled(W.KS.GoLiveNudge),
            m = P.A.isNotificationDisabled(W.KS.ActivityInvite),
            g = [];
        !d && (g.push({
            type: W.Jr.WELCOME
        }), !h && (s && a ? g.push({
            type: W.Jr.GO_LIVE_VOICE,
            game: e,
            voiceChannelId: t,
            voiceGuild: i
        }) : s && g.push({
            type: W.Jr.GO_LIVE_NON_VOICE,
            game: e
        })), m || g.push({
            type: W.Jr.CONTENT_INVENTORY,
            entries: []
        })), null != o.current && clearTimeout(o.current), o.current = setTimeout(() => {
            c.A.overlayMounted(...g)
        }, 1e3)
    }), (0, h.l0)(() => {
        null != o.current && (clearTimeout(o.current), o.current = null)
    }), _ || C) ? null : (0, i.jsx)(g.f5, {
        value: y,
        children: (0, i.jsxs)("div", {
            id: "overlay-container",
            className: B.Lw,
            children: [!d && Q, (0, i.jsx)(er, {}), (0, i.jsx)(F.A, {}), (0, i.jsx)(N.A, {}), (0, i.jsx)(u.N9M, {
                appContext: K.BRT.OVERLAY
            }), (0, i.jsx)(el, {})]
        })
    })
}