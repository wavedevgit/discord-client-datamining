/** Chunk was on 5490 **/
/** chunk id: 826153, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => j
});
var s = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(390544),
    d = n(158954),
    c = n(311907),
    o = n(116833),
    u = n(397927),
    f = n(793574),
    p = n(46054),
    x = n(801264),
    m = n(665171),
    _ = n(522055),
    h = n(500897),
    v = n(117265),
    A = n(294726),
    N = n(985018),
    g = n(889801);

function j(t) {
    let {
        guildId: e,
        instance: n,
        onClose: l,
        transitionState: j
    } = t, S = (0, c.bG)([_.A], () => {
        var t;
        return null == (t = _.A.getStateForGuild(e)) ? void 0 : t.instructions[n.planId]
    });
    i.useEffect(() => {
        null == S && (0, m.tT)(e, n.planId)
    }, [e, n.planId, S]);
    let C = (0, v.A)(n),
        {
            handleCopyServerIp: T,
            animateCopyIcon: I
        } = (0, h.A)(e, n.id, f.A.GAME_SERVER_INSTRUCTIONS_MODAL, null != C ? C : ""),
        E = i.useMemo(() => {
            switch (n.status) {
                case r.M.STARTING:
                    return N.intl.string(A.default.ud4hxY);
                case r.M.OFFLINE:
                    return N.intl.string(A.default.ABAm7x);
                default:
                    return
            }
        }, [n.status]);
    return (0, s.jsxs)(d.dWK, {
        size: "lg",
        paddingSize: "lg",
        transitionState: j,
        onClose: l,
        children: [(0, s.jsx)(d.rQ0, {
            gradientColor: "purple",
            graphic: {
                type: "dynamic",
                component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                props: {
                    instance: n
                }
            },
            alignCenter: !0,
            title: n.name,
            subtitle: N.intl.string(A.default["4HqfaU"])
        }), null == S ? (0, s.jsx)(u.y$y, {}) : (0, s.jsxs)("div", {
            className: g.Qs,
            children: [null != E && (0, s.jsx)(x.A, {
                className: g.et,
                children: E
            }), (0, s.jsx)("div", {
                className: g.$6,
                children: S.map((t, e) => (0, s.jsxs)("div", {
                    className: g.PM,
                    children: [(0, s.jsx)("div", {
                        className: g.CD,
                        children: (0, s.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "text-subtle",
                            children: N.intl.formatToPlainString(A.default.oSU1fF, {
                                step: e + 1
                            })
                        })
                    }), (0, s.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: p.A.parse(t, !1, {
                            allowLinks: !0
                        })
                    })]
                }, e))
            }), null != C && (0, s.jsxs)("div", {
                className: g.i7,
                children: [(0, s.jsx)("div", {
                    className: a()(g.Nk, I && g.i0),
                    children: (0, s.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: C
                    })
                }), (0, s.jsx)(u.Button, {
                    variant: I ? "active" : "primary",
                    text: I ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                    onClick: T,
                    icon: u.TdU
                })]
            })]
        })]
    })
}