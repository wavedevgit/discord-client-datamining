/** chunk id: 768146 params = (module,exports,require) **/
n.d(t, {
    AU: () => v,
    Ey: () => y,
    QF: () => b,
    do: () => x,
    eC: () => E
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(827734),
    u = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    p = n(985018),
    f = n(256181);
let h = "-:--",
    x = 1500,
    E = {
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
    v = {
        [u.oA.MD]: u.n4.MD,
        [u.oA.LG]: u.n4.LG
    },
    g = {
        [u.n4.MD]: "md",
        [u.n4.LG]: "lg"
    };

function b(e) {
    let {
        current: t,
        duration: n
    } = e, l = null != t ? (0, c.rB)(t) : h, a = null != n ? (0, c.rB)(n) : h;
    return (0, r.jsxs)("div", {
        className: i()(f.d$, f.jk),
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
            children: a
        })]
    })
}
let y = l.forwardRef(function(e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: a,
        ariaLabel: c,
        active: p,
        disabled: h,
        tooltipLabel: E,
        tooltipDelayMs: v = x,
        shortcut: b,
        onClick: y,
        buttonSize: S = u.n4.MD,
        "data-testid": C
    } = e, A = e => (0, r.jsx)(m.DUT, {
        ...e,
        onClick: !0 === h ? void 0 : y,
        className: i()(f.K5, {
            [f.Iy]: h
        }),
        "aria-label": c,
        "aria-disabled": h,
        "data-testid": C,
        innerRef: t,
        children: (0, r.jsx)(s.animated.div, {
            className: f.K5,
            style: {
                opacity: (0, s.to)([l.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${a?e:Math.pow(e,8)}`),
                height: {
                    [u.n4.LG]: "32px",
                    [u.n4.MD]: "24px"
                } [S]
            },
            children: (0, r.jsx)(n, {
                size: g[S],
                color: !0 !== h ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                className: i()(f.jk, {
                    [f.x2]: p,
                    [f.Wr]: !h
                })
            })
        })
    });
    return null != E && a ? (0, r.jsx)(d.m_, {
        text: E,
        keyboardShortcut: "" !== (b ?? "").trim() ? b : void 0,
        delay: v,
        children: A()
    }) : A()
})