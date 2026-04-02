/** chunk id: 856658 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(687498),
    o = n(397927),
    u = n(697397),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    E = n(80026),
    _ = n(464554);
let f = {
        duration: 250
    },
    p = e => {
        let {
            currentPx: t,
            indicator: n,
            isAnimated: i,
            quest: p,
            sourceQuestContent: S,
            expansionSpring: v,
            onClick: h,
            onMouseEnter: g,
            onMouseLeave: A
        } = e, {
            label: C,
            targetSec: x,
            leftPx: T,
            rightPx: D,
            index: I
        } = n, {
            completedRatio: y
        } = (0, d.O9)(p), [R, N] = s.useState(!1), O = T - E.Ue, b = t >= O ? Math.min(1, (t - O) / (D - O)) : 0, L = 0 === I && y < 1, {
            fill: M
        } = (0, o.zhh)({
            fill: 100 * b,
            config: f,
            onRest: () => {
                b <= 0 && N(!1)
            },
            onStart: () => {
                N(!0)
            }
        });
        return (0, r.jsxs)(l.animated.div, {
            className: a()(_.ck, {
                [_.a]: L && R,
                [_.C9]: !L && R
            }),
            style: {
                left: i ? v.to(e => T - e) : T,
                "--custom-indicator-size": i ? v.to(e => `${E.lS+2*e}px`) : `${E.lS}px`,
                "--custom-indicator-fill": M.to(e => e)
            },
            children: [(0, r.jsx)(o.DUT, {
                className: _.E6,
                onClick: null != h ? e => {
                    e.stopPropagation(), h()
                } : void 0,
                onMouseEnter: g,
                onMouseLeave: A,
                children: (0, r.jsx)(m.A, {
                    fullWidth: !0,
                    quest: p,
                    questContent: c.uF.VIDEO_MODAL,
                    sourceQuestContent: S,
                    autoplay: !1
                })
            }), (0, r.jsxs)("div", {
                className: _.Ru,
                role: "tooltip",
                "aria-label": null != C ? `${(0,u.rB)(x)} - ${C}` : (0, u.rB)(x),
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: (0, u.rB)(x)
                }), null != C && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", {
                        className: _.AE,
                        "aria-hidden": "true"
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: C
                    })]
                })]
            })]
        })
    }