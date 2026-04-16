/** chunk id: 940481 params = (module,exports,require) **/
s.d(a, {
    default: () => b
});
var r = s(627968),
    t = s(64700),
    n = s(512750),
    o = s(311907),
    l = s(397927),
    i = s(645619),
    d = s(503852),
    c = s(43594),
    _ = s(363487),
    m = s(490557),
    u = s(214676),
    x = s(499623),
    p = s(448836),
    g = s(428050),
    v = s(568065),
    h = s(853513),
    k = s(985018),
    C = s(973606);

function b(e) {
    let {
        guildId: a,
        powerup: s,
        ...b
    } = e, [f, j] = t.useState(void 0), N = t.useMemo(() => {
        switch (s.skuId) {
            case n.SL:
                return (0, r.jsx)(u.L, {
                    guildId: a
                });
            case n.aN:
                return (0, r.jsx)(u.T, {});
            case n.FB:
                return (0, r.jsx)(g.A, {});
            default:
                return
        }
    }, [s, a]);
    (0, d.Z)(a, s, d.q.DETAIL);
    let w = (0, _.A)(a),
        I = (0, c.D)("GuildPowerupPerkModal"),
        y = v.wr[s.skuId],
        A = null != y ? v.a8[y] : null,
        S = (0, o.bG)([i.A], () => i.A.getStateForGuild(a)),
        P = null != A ? S?.allPowerups[A] : null;
    return (0, r.jsxs)(l.EOs, {
        "data-migration-pending": !0,
        className: C.yl,
        size: l.rIJ.DYNAMIC,
        ...b,
        parentComponent: "GuildPowerupPerkModal",
        children: [(0, r.jsxs)(l.$mQ, {
            "data-migration-pending": !0,
            className: C._F,
            scrollbarType: "none",
            children: [(0, r.jsxs)("div", {
                className: C.pz,
                children: [(0, r.jsx)(l.hLv, {
                    className: C.Rp,
                    children: (0, r.jsx)(m.l, {
                        className: C.UZ,
                        powerup: s
                    })
                }), (0, r.jsxs)("div", {
                    className: C.hQ,
                    children: [(0, r.jsx)(l.Heading, {
                        variant: "heading-xl/extrabold",
                        children: s.title
                    }), (0, r.jsx)(l.Text, {
                        className: C.h_,
                        variant: "text-sm/normal",
                        children: s.description
                    }), null != s.deactivationCooldownPeriodDays && s.deactivationCooldownPeriodDays > 0 && (0, r.jsxs)("div", {
                        className: C.sh,
                        children: [(0, r.jsx)(l.mir, {
                            size: "xs",
                            color: l.LU0.colors.TEXT_MUTED
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: k.intl.formatToPlainString(h.default.GMhQcE, {
                                cooldownDays: s.deactivationCooldownPeriodDays
                            })
                        })]
                    }), null != P && (0, r.jsx)(l.Text, {
                        className: C.h_,
                        variant: "text-sm/normal",
                        children: k.intl.formatToPlainString(h.default.NAFGkH, {
                            level: P.title
                        })
                    }), (0, r.jsx)(x.F, {
                        powerup: s
                    }), null != f && (0, r.jsx)(l.Text, {
                        className: C.z3,
                        color: "text-feedback-critical",
                        variant: "text-sm/semibold",
                        children: f
                    }), w && (0, r.jsx)(p.A, {
                        className: C.qr,
                        guildId: a,
                        powerup: s,
                        expressiveCta: "refresh_expressive_cta" === I,
                        onError: j
                    })]
                })]
            }), null != N && (0, r.jsx)("div", {
                className: C._9,
                children: N
            })]
        }), (0, r.jsx)(l.s_y, {
            "data-migration-pending": !0,
            className: C.VN,
            onClick: b.onClose
        })]
    })
}