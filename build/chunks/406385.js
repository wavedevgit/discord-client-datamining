/** chunk id: 406385, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AU: () => x,
    Ey: () => A,
    QF: () => S,
    do: () => h,
    eC: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(523436),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    f = n(681636);
let E = "-:--",
    h = 1500,
    v = {
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
    } = e, l = null != t ? (0, c.rB)(t) : E, i = null != n ? (0, c.rB)(n) : E;
    return (0, r.jsxs)("div", {
        className: a()(f.d$, f.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [(0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: f.Ue,
            children: l
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: f.zO,
            children: "/"
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: f.Ue,
            children: i
        })]
    })
}
let A = l.forwardRef(function(e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: i,
        ariaLabel: c,
        active: p,
        disabled: E,
        tooltipLabel: v,
        tooltipDelayMs: x = h,
        shortcut: S,
        onClick: A,
        buttonSize: C = u.n4.MD,
        "data-testid": b
    } = e, _ = e => (0, r.jsx)(m.DUT, {
        ...e,
        onClick: !0 === E ? void 0 : A,
        className: a()(f.K5, {
            [f.Iy]: E
        }),
        "aria-label": c,
        "aria-disabled": E,
        "data-testid": b,
        innerRef: t,
        children: (0, r.jsx)(s.animated.div, {
            className: f.K5,
            style: {
                opacity: (0, s.to)([l.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${i?e:Math.pow(e,8)}`),
                height: {
                    [u.n4.LG]: "32px",
                    [u.n4.MD]: "24px"
                } [C]
            },
            children: (0, r.jsx)(n, {
                size: g[C],
                color: !0 !== E ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                className: a()(f.jk, {
                    [f.x2]: p,
                    [f.Wr]: !E
                })
            })
        })
    });
    return null != v && i ? (0, r.jsx)(d.m_, {
        text: v,
        keyboardShortcut: "" !== (S ?? "").trim() ? S : void 0,
        delay: x,
        children: _()
    }) : _()
})