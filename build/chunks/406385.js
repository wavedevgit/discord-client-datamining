/** chunk id: 406385, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AU: () => x,
    Ey: () => C,
    QF: () => S,
    do: () => v,
    eC: () => h
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(442215),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    E = n(221190);
let f = "-:--",
    v = 1500,
    h = {
        [u.Q6.PLAYING]: {
            icon: m.E$n,
            label: p.intl.string(p.t.ZcgDJX)
        },
        [u.Q6.PAUSED]: {
            icon: m.udU,
            label: p.intl.string(p.t.RscU7I)
        },
        [u.Q6.ENDED]: {
            icon: m.mqY,
            label: p.intl.string(p.t.hsvh0i)
        }
    },
    x = {
        [u.oA.MD]: u.n4.MD,
        [u.oA.LG]: u.n4.LG
    },
    g = {
        [u.n4.MD]: "md",
        [u.n4.LG]: "lg"
    };

function S(e) {
    let {
        current: t,
        duration: n
    } = e, i = null != t ? (0, c.rB)(t) : f, s = null != n ? (0, c.rB)(n) : f;
    return (0, r.jsxs)("div", {
        className: l()(E.d$, E.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [(0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: E.Ue,
            children: i
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: E.zO,
            children: "/"
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: E.Ue,
            children: s
        })]
    })
}
let C = i.forwardRef(function(e, t) {
    let {
        iconComponent: n,
        animationTime: i,
        visible: s,
        ariaLabel: c,
        active: p,
        disabled: f,
        tooltipLabel: h,
        tooltipDelayMs: x = v,
        shortcut: S,
        onClick: C,
        buttonSize: A = u.n4.MD,
        "data-testid": _
    } = e, b = e => (0, r.jsx)(m.DUT, {
        ...e,
        onClick: !0 === f ? void 0 : C,
        className: l()(E.K5, {
            [E.Iy]: f
        }),
        "aria-label": c,
        "aria-disabled": f,
        "data-testid": _,
        innerRef: t,
        children: (0, r.jsx)(a.animated.div, {
            className: E.K5,
            style: {
                opacity: (0, a.to)([i.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${s?e:Math.pow(e,8)}`),
                height: {
                    [u.n4.LG]: "32px",
                    [u.n4.MD]: "24px"
                } [A]
            },
            children: (0, r.jsx)(n, {
                size: g[A],
                color: !0 !== f ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                className: l()(E.jk, {
                    [E.x2]: p,
                    [E.Wr]: !f
                })
            })
        })
    });
    return null != h && s ? (0, r.jsx)(d.m_, {
        text: h,
        keyboardShortcut: "" !== (S ?? "").trim() ? S : void 0,
        delay: x,
        children: b()
    }) : b()
})