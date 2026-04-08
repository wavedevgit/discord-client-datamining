/** chunk id: 94264 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var n = r(627968);
r(64700);
var a = r(503698),
    i = r.n(a),
    s = r(892227),
    l = r(827734),
    d = r(732955),
    o = r(914410),
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
            programReward: a,
            totalDays: l
        } = (0, u.F)();
        if (!r || null == a || null == l) return null;
        let p = (0, s.default)(new Date(a.next_reward_date), new Date),
            f = a.program_current_state === c.L.PREMIUM_CHURNING,
            b = f ? _.churning.start : _.active.start,
            h = f ? _.churning.end : _.active.end;
        return (0, n.jsxs)("div", {
            className: i()(m.k, t),
            children: [(0, n.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: l - p,
                maximum: l,
                override: {
                    default: {
                        gradientStart: b,
                        gradientEnd: h
                    }
                }
            }), f ? (0, n.jsx)(d.tvc, {
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