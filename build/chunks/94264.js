/** chunk id: 94264 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var a = r(627968);
r(64700);
var n = r(503698),
    i = r.n(n),
    s = r(892227),
    l = r(827734),
    o = r(732955),
    d = r(914410),
    c = r(649032),
    u = r(320118),
    m = r(400076);
let _ = {
        churning: {
            start: l.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: l.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: l.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: l.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    p = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: r,
            programReward: n,
            totalDays: l
        } = (0, u.F)();
        if (!r || null == n || null == l) return null;
        let p = (0, s.default)(new Date(n.next_reward_date), new Date),
            f = n.program_current_state === c.L.PREMIUM_CHURNING,
            h = f ? _.churning.start : _.active.start,
            b = f ? _.churning.end : _.active.end;
        return (0, a.jsxs)("div", {
            className: i()(m.k, t),
            children: [(0, a.jsx)(d.Ay, {
                variant: d.qP.UNSET,
                progress: l - p,
                maximum: l,
                override: {
                    default: {
                        gradientStart: h,
                        gradientEnd: b
                    }
                }
            }), f ? (0, a.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: m.K
            }) : (0, a.jsx)(o.Cp8, {
                size: "sm",
                color: "currentColor",
                className: m.K
            })]
        })
    }