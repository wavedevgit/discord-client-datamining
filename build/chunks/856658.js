/** chunk id: 856658 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(825638),
    u = n(397927),
    o = n(697397),
    c = n(341915),
    d = n(646764),
    E = n(80026),
    m = n(777555);
let f = {
        duration: 250
    },
    _ = e => {
        let {
            currentPx: t,
            indicator: n,
            isAnimated: a,
            quest: _,
            sourceQuestContent: S,
            expansionSpring: p,
            onClick: v,
            onMouseEnter: g,
            onMouseLeave: h
        } = e, {
            label: A,
            targetSec: C,
            leftPx: x,
            rightPx: T,
            index: D
        } = n, I = _.userStatus?.completedAt != null, [b, y] = s.useState(!1), O = x - E.Ue, R = t >= O ? Math.min(1, (t - O) / (T - O)) : 0, L = 0 === D && !I, {
            fill: k
        } = (0, u.zhh)({
            fill: 100 * R,
            config: f,
            onRest: () => {
                R <= 0 && y(!1)
            },
            onStart: () => {
                y(!0)
            }
        });
        return (0, r.jsxs)(i.animated.div, {
            className: l()(m.ck, {
                [m.a]: L && b,
                [m.C9]: !L && b
            }),
            style: {
                left: a ? p.to(e => x - e) : x,
                "--custom-indicator-size": a ? p.to(e => `${E.lS+2*e}px`) : `${E.lS}px`,
                "--custom-indicator-fill": k.to(e => e)
            },
            children: [(0, r.jsx)(u.DUT, {
                className: m.E6,
                onClick: null != v ? e => {
                    e.stopPropagation(), v()
                } : void 0,
                onMouseEnter: g,
                onMouseLeave: h,
                children: (0, r.jsx)(d.A, {
                    fullWidth: !0,
                    quest: _,
                    questContent: c.uF.VIDEO_MODAL,
                    sourceQuestContent: S,
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