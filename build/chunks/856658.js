/** chunk id: 856658 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(969528),
    u = n(397927),
    o = n(697397),
    c = n(341915),
    d = n(646764),
    E = n(80026),
    m = n(684739);
let _ = {
        duration: 250
    },
    f = e => {
        let {
            currentPx: t,
            indicator: n,
            isAnimated: i,
            quest: f,
            sourceQuestContent: p,
            expansionSpring: S,
            onClick: v,
            onMouseEnter: h,
            onMouseLeave: g
        } = e, {
            label: A,
            targetSec: C,
            leftPx: x,
            rightPx: D,
            index: T
        } = n, I = f.userStatus?.completedAt != null, [y, R] = s.useState(!1), b = x - E.Ue, N = t >= b ? Math.min(1, (t - b) / (D - b)) : 0, O = 0 === T && !I, {
            fill: L
        } = (0, u.zhh)({
            fill: 100 * N,
            config: _,
            onRest: () => {
                N <= 0 && R(!1)
            },
            onStart: () => {
                R(!0)
            }
        });
        return (0, r.jsxs)(l.animated.div, {
            className: a()(m.ck, {
                [m.a]: O && y,
                [m.C9]: !O && y
            }),
            style: {
                left: i ? S.to(e => x - e) : x,
                "--custom-indicator-size": i ? S.to(e => `${E.lS+2*e}px`) : `${E.lS}px`,
                "--custom-indicator-fill": L.to(e => e)
            },
            children: [(0, r.jsx)(u.DUT, {
                className: m.E6,
                onClick: null != v ? e => {
                    e.stopPropagation(), v()
                } : void 0,
                onMouseEnter: h,
                onMouseLeave: g,
                children: (0, r.jsx)(d.A, {
                    fullWidth: !0,
                    quest: f,
                    questContent: c.uF.VIDEO_MODAL,
                    sourceQuestContent: p,
                    autoplay: !1
                })
            }), (0, r.jsxs)("div", {
                className: m.Ru,
                role: "tooltip",
                "aria-label": null != A ? `${(0,o.rB)(C)} - ${A}` : (0, o.rB)(C),
                children: [(0, r.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "always-white",
                    children: (0, o.rB)(C)
                }), null != A && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", {
                        className: m.AE,
                        "aria-hidden": "true"
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: A
                    })]
                })]
            })]
        })
    }