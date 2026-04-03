/** chunk id: 768146 params = (module,exports,require) **/
n.d(t, {
    AU: () => E,
    Ey: () => y,
    QF: () => g,
    do: () => x,
    eC: () => b
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(827734),
    u = n(876230),
    d = n(61491),
    c = n(435371),
    m = n(397927),
    h = n(985018),
    p = n(246878);
let f = "-:--",
    x = 1500,
    b = {
        [u.Q6.PLAYING]: {
            icon: m.E$n,
            label: h.intl.string(h.t.ZcgDJX)
        },
        [u.Q6.PAUSED]: {
            icon: m.udU,
            label: h.intl.string(h.t.RscU7I)
        },
        [u.Q6.ENDED]: {
            icon: m.mqY,
            label: h.intl.string(h.t.hsvh0i)
        }
    },
    E = {
        [u.oA.MD]: u.n4.MD,
        [u.oA.LG]: u.n4.LG
    },
    v = {
        [u.n4.MD]: "md",
        [u.n4.LG]: "lg"
    };

function g(e) {
    let {
        current: t,
        duration: n
    } = e, l = null != t ? (0, d.rB)(t) : f, a = null != n ? (0, d.rB)(n) : f;
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
        ariaLabel: d,
        active: h,
        disabled: f,
        tooltipLabel: b,
        tooltipDelayMs: E = x,
        shortcut: g,
        onClick: y,
        buttonSize: S = u.n4.MD,
        "data-testid": C
    } = e, A = e => (0, r.jsx)(m.DUT, {
        ...e,
        onClick: !0 === f ? void 0 : y,
        className: i()(p.K5, {
            [p.Iy]: f
        }),
        "aria-label": d,
        "aria-disabled": f,
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
                    [u.n4.LG]: "32px",
                    [u.n4.MD]: "24px"
                } [S]
            },
            children: (0, r.jsx)(n, {
                size: v[S],
                color: !0 !== f ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                className: i()(p.jk, {
                    [p.x2]: h,
                    [p.Wr]: !f
                })
            })
        })
    });
    return null != b && a ? (0, r.jsx)(c.m_, {
        text: b,
        keyboardShortcut: "" !== (g ?? "").trim() ? g : void 0,
        delay: E,
        children: A()
    }) : A()
})