/** chunk id: 200042, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => er
}), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(192308),
    u = n(397927),
    c = n(442433),
    d = n(684013),
    h = n(964486),
    p = n(793574),
    f = n(688810),
    g = n(607470),
    m = n(880144),
    A = n(616356),
    y = n(734057),
    O = n(71393),
    v = n(430452),
    b = n(309010),
    E = n(532624),
    _ = n(256415),
    S = n(531685),
    x = n(203982),
    I = n(723702),
    j = n(350535),
    C = n(365971),
    T = n(41984),
    w = n(589051),
    N = n(223251),
    P = n(935975),
    D = n(555153),
    R = n(155052),
    L = n(302614),
    k = n(833551),
    M = n(592598),
    z = n(395011),
    V = n(222506),
    U = n(127242),
    G = n(237984),
    H = n(243612),
    Y = n(575530),
    F = n(545807),
    W = n(672396),
    K = n(644434),
    Z = n(652215),
    B = n(661272);
let X = !I.isPlatformEmbedded && !1,
    J = X ? (0, i.jsx)(g.A, {
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
        className: B.pN,
        autoPlay: !0,
        loop: !0,
        muted: !0
    }) : null;

function Q(e) {
    e.preventDefault()
}

function q(e) {
    (0, c.L3)(e, async () => {
        let {
            default: e
        } = await n.e("86437").then(n.bind(n, 171300));
        return t => {
            var n, r;
            return (0, i.jsx)(e, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        var i;
                        i = n[t], t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i
                    })
                }
                return e
            }({}, t), r = r = {
                layoutId: K.G,
                version: 4
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n))
        }
    }, {
        context: Z.BRT.OVERLAY
    })
}
let $ = r.memo(function(e) {
        let {
            keybind: t,
            onClick: n,
            locked: r
        } = e, l = (0, w.X4)(p.A.OVERLAY);
        return (0, i.jsx)(u.DUT, {
            className: a()(B.LK, {
                [B.Zo]: !r,
                [B.vZ]: r
            }),
            onMouseDown: e => {
                let {
                    currentTarget: t,
                    target: i,
                    button: r
                } = e;
                r === Z.hE4.PRIMARY && t === i && n()
            },
            onContextMenu: q,
            children: r ? null : (0, i.jsxs)(L.A, {
                className: B.BE,
                children: [l ? (0, i.jsx)(P.A, {
                    onClick: () => (0, G.b)(p.A.OVERLAY, Z.BRT.OVERLAY),
                    IconComponent: u.iFK
                }) : null, (0, i.jsx)(P.A, {
                    keybind: t,
                    onClick: n,
                    IconComponent: u.d$L
                })]
            })
        })
    }),
    ee = r.memo(function(e) {
        let {
            locked: t,
            focused: n
        } = e;
        return t && n ? (0, i.jsx)(L.A, {
            className: B.BE,
            children: (0, i.jsx)(P.A, {
                onClick: () => d.A.setInputLocked(!1, z.A.getTargetPID()),
                IconComponent: u.wUM
            })
        }) : null
    });

function et() {
    d.A.setInputLocked(!0, z.A.getTargetPID())
}

function en(e) {
    let t = V.A.isInputLocked(z.A.getTargetPID());
    "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? x._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, {
        show: !0
    }) : "keydown" === e.type.toLowerCase() && x._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, {
        show: !1
    }))
}

function ei() {
    return (0, o.bG)([U.A], () => U.A.hasRenderDebugMode(T.x7.WindowContainer)) ? (0, i.jsx)("div", {
        className: B.N1
    }) : null
}

function er(e) {
    var t, n;
    let l, c, {
            isEmbeddedActivity: g
        } = e,
        I = (0, F.A)(),
        T = (0, o.bG)([z.A], () => z.A.getTargetPID()),
        {
            locked: P,
            focused: L,
            incompatibleApp: U,
            hasZeroSizeDimension: G,
            keybind: K
        } = (0, o.cf)([z.A, _.default, S.A, E.Ay, V.A], () => {
            let e = S.A.windowSize((0, C.Q2)(I)),
                t = E.Ay.getOverlayKeybind();
            return {
                locked: V.A.isInputLocked(T),
                focused: z.A.isFocused(T),
                incompatibleApp: _.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, j.dI)(t.shortcut, !0) : "???"
            }
        }, [I, T]),
        {
            analyticsLocations: q
        } = (0, f.Ay)(p.A.OVERLAY);
    return (0, h.Ay)(() => {
        (0, w.E)()
    }), t = () => {
        d.A.overlayReady(z.A.getTargetPID()), I.addEventListener("keydown", en), I.addEventListener("keyup", en)
    }, n = () => {
        I.removeEventListener("keydown", en), I.removeEventListener("keyup", en)
    }, l = r.useRef({
        mount: t,
        unmount: n
    }), r.useEffect(() => {
        l.current = {
            mount: t,
            unmount: n
        }
    }), r.useEffect(() => (l.current.mount(), () => {
        l.current.unmount()
    }), []), c = r.useRef(null), (0, h.Ay)(() => {
        let e = (0, H.qv)(),
            t = b.A.getVoiceChannelId(),
            n = y.A.getChannel(t),
            i = null != n ? O.A.getGuild(n.guild_id) : null,
            r = null != A.A.getCurrentUserActiveStream(),
            l = null != t,
            a = (0, m.A)(v.A) && !r && null != e,
            o = l && null != i && null != t,
            s = z.A.getTargetPID();
        if (k.default.hasChangedRenderMode(s)) return;
        let u = M.A.isNotificationDisabled(W.KS.WelcomeNudge),
            h = M.A.isNotificationDisabled(W.KS.GoLiveNudge),
            p = M.A.isNotificationDisabled(W.KS.ActivityInvite),
            f = [];
        !u && (f.push({
            type: W.Jr.WELCOME
        }), !h && (a && o ? f.push({
            type: W.Jr.GO_LIVE_VOICE,
            game: e,
            voiceChannelId: t,
            voiceGuild: i
        }) : a && f.push({
            type: W.Jr.GO_LIVE_NON_VOICE,
            game: e
        })), p || f.push({
            type: W.Jr.CONTENT_INVENTORY,
            entries: []
        })), null != c.current && clearTimeout(c.current), c.current = setTimeout(() => {
            d.A.overlayMounted(...f)
        }, 1e3)
    }), (0, h.l0)(() => {
        null != c.current && (clearTimeout(c.current), c.current = null)
    }), r.useEffect(() => {
        if (x._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, {
                show: !0
            }), P) return (0, s.closeAllModalsInContext)(u.KX8), I.addEventListener("contextmenu", Q, !1), () => {
            I.removeEventListener("contextmenu", Q, !1)
        };
        I.removeEventListener("contextmenu", Q, !1)
    }, [P, I]), (0, i.jsx)(f.f5, {
        value: q,
        children: G || U ? null : (0, i.jsxs)("div", {
            id: "overlay-container",
            className: B.Lw,
            children: [!g && J, (0, i.jsx)($, {
                locked: P,
                keybind: K,
                onClick: et
            }), (0, i.jsx)(R.A, {
                className: a()({
                    [B.ZK]: P,
                    [B.al]: !P
                })
            }), (0, i.jsx)(Y.A, {}), !g && X && (0, i.jsx)(ee, {
                locked: P,
                focused: L
            }), (0, i.jsx)(N.A, {}), (0, i.jsx)(D.A, {
                locked: P
            }), (0, i.jsx)(u.N9M, {
                appContext: Z.BRT.OVERLAY
            }), (0, i.jsx)(ei, {})]
        })
    })
}