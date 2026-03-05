/** chunk id: 940481 params = (module,exports,require) **/
s.d(t, {
    default: () => j
});
var n = s(627968),
    a = s(64700),
    r = s(512750),
    l = s(311907),
    i = s(397927),
    o = s(645619),
    c = s(503852),
    d = s(363487),
    u = s(722523),
    _ = s(490557),
    m = s(214676),
    x = s(499623),
    g = s(428050),
    b = s(568065),
    f = s(136708),
    h = s(985018),
    p = s(400415);

function j(e) {
    let {
        guildId: t,
        powerup: s,
        ...j
    } = e, [C, k] = a.useState(void 0), v = a.useMemo(() => {
        switch (s.skuId) {
            case r.SL:
                return (0, n.jsx)(m.L, {
                    guildId: t
                });
            case r.aN:
                return (0, n.jsx)(m.T, {});
            case r.FB:
                return (0, n.jsx)(g.A, {});
            default:
                return
        }
    }, [s, t]);
    (0, c.Z)(t, s, c.q.DETAIL);
    let N = (0, d.A)(t),
        S = b.wr[s.skuId],
        A = null != S ? b.a8[S] : null,
        I = (0, l.bG)([o.A], () => o.A.getStateForGuild(t)),
        E = null != A ? I?.allPowerups[A] : null;
    return (0, n.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: p.yl,
        size: i.rIJ.DYNAMIC,
        ...j,
        parentComponent: "GuildPowerupPerkModal",
        children: [(0, n.jsxs)(i.$mQ, {
            "data-migration-pending": !0,
            className: p._F,
            scrollbarType: "none",
            children: [(0, n.jsxs)("div", {
                className: p.pz,
                children: [(0, n.jsx)(i.hLv, {
                    className: p.UZ,
                    children: (0, n.jsx)(_.l, {
                        powerup: s
                    })
                }), (0, n.jsxs)("div", {
                    className: p.hQ,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-xl/extrabold",
                        children: s.title
                    }), (0, n.jsx)(i.Text, {
                        className: p.h_,
                        variant: "text-sm/normal",
                        children: s.description
                    }), null != E && (0, n.jsx)(i.Text, {
                        className: p.h_,
                        variant: "text-sm/normal",
                        children: h.intl.formatToPlainString(f.default.NAFGkH, {
                            level: E.title
                        })
                    }), (0, n.jsx)(x.F, {
                        powerup: s
                    }), null != C && (0, n.jsx)(i.Text, {
                        className: p.z3,
                        color: "text-feedback-critical",
                        variant: "text-sm/semibold",
                        children: C
                    }), N && (0, n.jsx)(u.Ay, {
                        className: p.qr,
                        guildId: t,
                        powerup: s,
                        onError: k
                    })]
                })]
            }), null != v && (0, n.jsx)("div", {
                className: p._9,
                children: v
            })]
        }), (0, n.jsx)(i.s_y, {
            "data-migration-pending": !0,
            className: p.VN,
            onClick: j.onClose
        })]
    })
}