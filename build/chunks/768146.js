/** chunk id: 768146 params = (module,exports,require) **/
n.d(t, {
    AU: () => E,
    Ey: () => y,
    QF: () => g,
    do: () => x,
    eC: () => v
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(827734),
    o = n(876230),
    c = n(61491),
    d = n(435371),
    m = n(397927),
    f = n(985018),
    p = n(834926);
let h = "-:--",
    x = 1500,
    v = {
        [o.Q6.PLAYING]: {
            icon: m.E$n,
            label: f.intl.string(f.t.ZcgDJX)
        },
        [o.Q6.PAUSED]: {
            icon: m.udU,
            label: f.intl.string(f.t.RscU7I)
        },
        [o.Q6.ENDED]: {
            icon: m.mqY,
            label: f.intl.string(f.t.hsvh0i)
        }
    },
    E = {
        [o.oA.MD]: o.n4.MD,
        [o.oA.LG]: o.n4.LG
    },
    b = {
        [o.n4.MD]: "md",
        [o.n4.LG]: "lg"
    };

function g(e) {
    let {
        current: t,
        duration: n
    } = e, l = null != t ? (0, c.rB)(t) : h, a = null != n ? (0, c.rB)(n) : h;
    return (0, r.jsxs)("div", {
        className: i()(p.d$, p.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [(0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: p.Ue,
            children: l
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: p.zO,
            children: "/"
        }), (0, r.jsx)(m.Text, {
            variant: "text-xs/normal",
            className: p.Ue,
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
        active: f,
        disabled: h,
        tooltipLabel: v,
        tooltipDelayMs: E = x,
        shortcut: g,
        onClick: y,
        buttonSize: S = o.n4.MD,
        "data-testid": C
    } = e, A = e => (0, r.jsx)(m.DUT, {
        ...e,
        onClick: !0 === h ? void 0 : y,
        className: i()(p.K5, {
            [p.Iy]: h
        }),
        "aria-label": c,
        "aria-disabled": h,
        "data-testid": C,
        innerRef: t,
        children: (0, r.jsx)(s.animated.div, {
            className: p.K5,
            style: {
                opacity: (0, s.to)([l.to({
                    range: [0, 1],
                    output: [0, 1]
                })], e => `${a?e:Math.pow(e,8)}`),
                height: {
                    [o.n4.LG]: "32px",
                    [o.n4.MD]: "24px"
                } [S]
            },
            children: (0, r.jsx)(n, {
                size: b[S],
                color: !0 !== h ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                className: i()(p.jk, {
                    [p.x2]: f,
                    [p.Wr]: !h
                })
            })
        })
    });
    return null != v && a ? (0, r.jsx)(d.m_, {
        text: v,
        keyboardShortcut: "" !== (g ?? "").trim() ? g : void 0,
        delay: E,
        children: A()
    }) : A()
})