/** chunk id: 918192 params = (module,exports,require) **/
n.d(t, {
    Bw: () => _,
    ld: () => A
});
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(827734),
    r = n(397927),
    s = n(442433),
    c = n(85448),
    d = n(994500),
    o = n(427262),
    u = n(312006),
    h = n(366098),
    g = n(985018),
    x = n(723327);
let _ = e => {
        let {
            channelId: t
        } = e;
        return (0, l.jsx)(m, {
            channelId: t
        })
    },
    m = e => {
        let {
            channelId: t
        } = e, n = (0, h.D3)(t), i = (0, h.Xk)(t);
        if (0 === n && 0 === i) return null;
        let c = e => {
            (0, s.jA)(e, e => (0, l.jsx)(T, {
                ...e,
                channelId: t
            }), {
                position: "left",
                align: "bottom"
            })
        };
        return n > 0 && i > 0 ? (0, l.jsxs)("div", {
            className: x.jC,
            children: [(0, l.jsx)(r.KTN, {
                size: "lg",
                color: a.A.unsafe_rawColors.RED_400.css
            }), (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: g.intl.string(g.t["P/KFXz"])
            }), (0, l.jsx)(r.DUT, {
                className: x.R5,
                onClick: c,
                children: g.intl.string(g.t.rUEjBe)
            })]
        }) : i > 0 ? (0, l.jsxs)("div", {
            className: x.jC,
            children: [(0, l.jsx)(r.G3N, {
                size: "lg"
            }), (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: g.intl.format(g.t.Ri3o33, {
                    number: i
                })
            }), (0, l.jsx)(r.DUT, {
                className: x.R5,
                onClick: c,
                children: g.intl.string(g.t.rUEjBe)
            })]
        }) : (0, l.jsxs)("div", {
            className: x.jC,
            children: [(0, l.jsx)(r.KTN, {
                size: "lg",
                color: a.A.unsafe_rawColors.RED_400.css
            }), (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: g.intl.format(g.t["6Tcdt7"], {
                    number: n
                })
            }), (0, l.jsx)(r.DUT, {
                className: x.R5,
                onClick: c,
                children: g.intl.string(g.t.rUEjBe)
            })]
        })
    },
    A = e => {
        let {
            user: t,
            showStatus: n,
            speaker: a,
            channelId: s
        } = e, h = (0, i.bG)([u.Ay], () => u.Ay.isModerator(t.id, s)), _ = (0, i.bG)([d.A], () => d.A.isBlocked(t.id)), m = null;
        return n && (m = a ? g.intl.string(g.t.LqMmG2) : h ? g.intl.string(g.t.GMZqSi) : g.intl.string(g.t.suRApw)), (0, l.jsxs)("div", {
            className: x.kQ,
            children: [(0, l.jsx)(c.A, {
                src: t.getAvatarURL(null, 32),
                size: r._3J.SIZE_32,
                muted: !1,
                deafen: !1,
                speaking: !1,
                ringing: !1,
                renderIcon: a ? () => (0, l.jsx)(r.cNw, {
                    size: "md",
                    color: "currentColor",
                    className: x.Kk
                }) : null
            }, t.id), (0, l.jsxs)("div", {
                className: x.eF,
                children: [(0, l.jsxs)("div", {
                    className: x.Xh,
                    children: [(0, l.jsx)(r.Text, {
                        variant: n ? "text-md/normal" : "text-sm/normal",
                        children: o.Ay.getName(t)
                    }), (0, l.jsx)(r.Text, {
                        variant: n ? "text-md/normal" : "text-sm/normal",
                        color: "text-subtle",
                        children: `#${t.discriminator}`
                    })]
                }), (0, l.jsxs)("div", {
                    className: x.Xh,
                    children: [(0, l.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: _ ? "text-feedback-critical" : "text-default",
                        children: _ ? g.intl.string(g.t["4bDptI"]) : g.intl.string(g.t.tFY5Zb)
                    }), (0, l.jsxs)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ["| ", m]
                    })]
                })]
            })]
        })
    },
    T = e => {
        let {
            channelId: t
        } = e, n = (0, h.mT)(t), i = (0, h.Iv)(t);
        return (0, l.jsx)(r.HOs, {
            className: x.kL,
            children: [...n, ...i].map(e => {
                let {
                    user: n
                } = e;
                return (0, l.jsx)(A, {
                    user: n,
                    channelId: t
                }, n.id)
            })
        })
    }