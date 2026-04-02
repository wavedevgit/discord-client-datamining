/** chunk id: 309777 params = (module,exports,require) **/
a.d(t, {
    A: () => w
});
var l = a(627968),
    n = a(64700),
    i = a(311907),
    s = a(342952),
    r = a(397927),
    o = a(442433),
    u = a(429913),
    d = a(713654),
    c = a(769015),
    m = a(145497),
    h = a(734057),
    p = a(540999),
    f = a(71393),
    g = a(287809),
    v = a(405269),
    x = a(403362),
    b = a(661191),
    j = a(274372),
    _ = a(372684),
    C = a(399925),
    k = a(718812),
    y = a(794905),
    N = a(429364),
    E = a(696016),
    A = a(985018),
    S = a(233442);

function w(e) {
    let {
        clip: t,
        channelId: w,
        onClose: I
    } = e, T = t.type === _.nQ.SCREENSHOT, {
        getEditedClip: L,
        voiceAudioEnabled: R,
        setVoiceAudioEnabled: M,
        applicationAudioEnabled: O,
        setApplicationAudioEnabled: U,
        soundboardAudioEnabled: D,
        setSoundboardAudioEnabled: P,
        pause: $,
        clipName: z,
        setClipName: G,
        isTemporary: B,
        setIsTemporary: V
    } = (0, N.T)(), F = (0, u.h)(t.applicationId), K = (0, i.bG)([j.A], () => j.A.isClipExporting(t.id)), {
        onShareClick: H
    } = (0, y.A)(w), W = (0, i.bG)([p.A], () => p.A.isDeveloper), J = (0, k.h)(t), X = n.useCallback(async () => {
        await (0, C.w7)(t.id), V(!1)
    }, [t.id, V]), q = (0, i.yK)([g.default], () => t.users.map(g.default.getUser).filter(x.Vq)), Q = n.useMemo(() => new Date(b.default.extractTimestamp(t.id)), [t.id]), Y = (0, i.bG)([f.A], () => t.version >= 3 && null != t.guildId ? f.A.getGuild(t.guildId) : null), Z = (0, i.bG)([h.A], () => t.version >= 3 && null != t.channelId ? h.A.getChannel(t.channelId) : null), ee = null != Z ? (0, d.gU)(Z, Y) : null;
    return (0, l.jsxs)("div", {
        className: S.XV,
        children: [(0, l.jsxs)("div", {
            className: S.eW,
            children: [(0, l.jsxs)("div", {
                className: S.VW,
                children: [(0, l.jsx)(c.A, {
                    game: F,
                    size: c.M.XSMALL
                }), (0, l.jsx)(r.Heading, {
                    variant: "heading-md/medium",
                    color: "text-default",
                    className: S.qd,
                    children: F?.name ?? t.applicationName
                })]
            }), (0, l.jsxs)("div", {
                className: S.Pz,
                children: [W && (0, l.jsx)(r.K0, {
                    onClick: function() {
                        (0, r.mMO)(async () => {
                            let {
                                default: e
                            } = await a.e("10000").then(a.bind(a, 224883));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                clip: t
                            })
                        }, {
                            stackingBehavior: "stack"
                        })
                    },
                    icon: r.Q5O,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": "Debug Info"
                }), (0, l.jsx)(r.K0, {
                    onClick: I,
                    icon: r.d$L,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": A.intl.string(A.t.cpT0Cq)
                })]
            })]
        }), (0, l.jsx)(r.IpV, {
            className: S.Md,
            children: (0, l.jsxs)(r.nVY, {
                children: [B && (0, l.jsx)(r.wx6, {
                    type: "info",
                    children: (0, l.jsxs)(r.BJc, {
                        gap: 8,
                        children: [(0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: A.intl.string(A.t.EkUv4u)
                        }), (0, l.jsx)(r.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: X,
                            text: A.intl.string(A.t["BfLmm+"])
                        })]
                    })
                }), (0, l.jsx)(r.ksK, {
                    label: A.intl.string(A.t.SJKc5n),
                    onChange: e => {
                        "" === e ? G(void 0) : G(e)
                    },
                    value: z,
                    minLength: E.U_,
                    maxLength: E.mk,
                    placeholder: J
                }), !T && (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.Ad5, {
                        label: A.intl.string(A.t.GnQui9),
                        checked: O,
                        onChange: U
                    }), (0, l.jsx)(r.Ad5, {
                        label: A.intl.string(A.t["5mVOCb"]),
                        checked: R,
                        onChange: M
                    }), (0, l.jsx)(r.Ad5, {
                        label: A.intl.string(A.t["8K7Ges"]),
                        checked: D,
                        onChange: P
                    })]
                }), (0, l.jsx)(r.D0$, {
                    label: A.intl.string(A.t.g8pDeY),
                    layout: "horizontal",
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, v.mk)(Q)
                    })
                }), (0, l.jsx)(r.D0$, {
                    label: A.intl.string(A.t.WTozwe),
                    layout: "horizontal",
                    children: (0, l.jsx)(s.A, {
                        users: q,
                        maxUsers: 10
                    })
                }), null != Y && (0, l.jsx)(r.D0$, {
                    label: A.intl.string(A.t.vVKqVh),
                    layout: "horizontal",
                    children: (0, l.jsxs)("div", {
                        className: S._c,
                        children: [(0, l.jsx)(m.Ay, {
                            guild: Y,
                            iconSize: 16
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: Y.name
                        })]
                    })
                }), null != Z && null != ee && (0, l.jsx)(r.D0$, {
                    label: A.intl.string(A.t.GPxI1G),
                    layout: "horizontal",
                    children: (0, l.jsxs)("div", {
                        className: S._c,
                        children: [(0, l.jsx)(ee, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor"
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: Z.name
                        })]
                    })
                }), t.version >= 3 && null != t.activity && (null != t.activity.state || null != t.activity.details) && (0, l.jsx)(r.D0$, {
                    label: A.intl.string(A.t.aTpwmw),
                    layout: "horizontal",
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: [t.activity.state, t.activity.details].filter(Boolean).join(" › ")
                    })
                })]
            })
        }), (0, l.jsx)("div", {
            className: S.G3,
            children: (0, l.jsxs)(r.ButtonGroup, {
                direction: "horizontal",
                fullWidth: !0,
                children: [(0, l.jsx)(r.Button, {
                    loading: K,
                    disabled: K,
                    variant: "primary",
                    icon: r.liv,
                    iconPosition: "start",
                    onClick: () => H({
                        clips: [L()]
                    }),
                    text: A.intl.string(A.t.RDE0Sc)
                }), (0, l.jsx)(r.K0, {
                    "aria-label": A.intl.string(A.t.PdRCRg),
                    loading: K,
                    disabled: K,
                    variant: "secondary",
                    onClick: function(e) {
                        $(), (0, o.L3)(e, async () => {
                            let {
                                default: e
                            } = await a.e("80628").then(a.bind(a, 183903));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                clips: [L()],
                                channelId: w,
                                onAfterDelete: I
                            })
                        })
                    },
                    icon: r.jNK
                })]
            })
        })]
    })
}