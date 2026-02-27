/** chunk id: 961255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(475539),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    p = n(203908),
    f = n(779238);
let E = {
        duration: 250
    },
    h = e => {
        let {
            currentPx: t,
            indicator: n,
            isAnimated: i,
            quest: h,
            sourceQuestContent: v,
            expansionSpring: x,
            onClick: g,
            onMouseEnter: S,
            onMouseLeave: A
        } = e, {
            label: C,
            targetSec: b,
            leftPx: _,
            rightPx: y,
            index: T
        } = n, {
            completedRatio: N
        } = (0, d.O9)(h), [D, I] = l.useState(!1), L = _ - p.Ue, j = t >= L ? Math.min(1, (t - L) / (y - L)) : 0, M = 0 === T && N < 1, {
            fill: w
        } = (0, o.zhh)({
            fill: 100 * j,
            config: E,
            onRest: () => {
                j <= 0 && I(!1)
            },
            onStart: () => {
                I(!0)
            }
        });
        return (0, r.jsxs)(s.animated.div, {
            className: a()(f.ck, {
                [f.a]: M && D,
                [f.C9]: !M && D
            }),
            style: {
                left: i ? x.to(e => _ - e) : _,
                "--custom-indicator-size": i ? x.to(e => `${p.lS+2*e}px`) : `${p.lS}px`,
                "--custom-indicator-fill": w.to(e => e)
            },
            children: [(0, r.jsx)(o.DUT, {
                className: f.E6,
                onClick: null != g ? e => {
                    e.stopPropagation(), g()
                } : void 0,
                onMouseEnter: S,
                onMouseLeave: A,
                children: (0, r.jsx)(m.A, {
                    fullWidth: !0,
                    quest: h,
                    questContent: c.uF.VIDEO_MODAL,
                    sourceQuestContent: v,
                    autoplay: !1
                })
            }), (0, r.jsxs)("div", {
                className: f.Ru,
                role: "tooltip",
                "aria-label": null != C ? `${(0,u.rB)(b)} - ${C}` : (0, u.rB)(b),
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: (0, u.rB)(b)
                }), null != C && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", {
                        className: f.AE,
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