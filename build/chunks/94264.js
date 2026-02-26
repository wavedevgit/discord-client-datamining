/** chunk id: 94264, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => x
});
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(892227),
    i = r(827734),
    d = r(732955),
    u = r(613566),
    o = r(649032),
    c = r(320118),
    m = r(417340);
let h = {
        churning: {
            start: i.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: i.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: i.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    x = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: r,
            programReward: a,
            totalDays: i
        } = (0, c.F)();
        if (!r || null == a || null == i) return null;
        let x = (0, s.default)(new Date(a.next_reward_date), new Date),
            p = a.program_current_state === o.L.PREMIUM_CHURNING,
            _ = p ? h.churning.start : h.active.start,
            f = p ? h.churning.end : h.active.end;
        return (0, n.jsxs)("div", {
            className: l()(m.k, t),
            children: [(0, n.jsx)(u.Ay, {
                variant: u.qP.UNSET,
                progress: i - x,
                maximum: i,
                override: {
                    default: {
                        gradientStart: _,
                        gradientEnd: f
                    }
                }
            }), p ? (0, n.jsx)(d.tvc, {
                size: "sm",
                color: "currentColor",
                className: m.K
            }) : (0, n.jsx)(d.Cp8, {
                size: "sm",
                color: "currentColor",
                className: m.K
            })]
        })
    }