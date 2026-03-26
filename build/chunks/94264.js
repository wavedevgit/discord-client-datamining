/** chunk id: 94264 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var r = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    s = a(892227),
    l = a(827734),
    d = a(732955),
    o = a(914410),
    c = a(649032),
    u = a(320118),
    _ = a(404613);
let m = {
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
            passesProgressBarInvariant: a,
            programReward: n,
            totalDays: l
        } = (0, u.F)();
        if (!a || null == n || null == l) return null;
        let p = (0, s.default)(new Date(n.next_reward_date), new Date),
            b = n.program_current_state === c.L.PREMIUM_CHURNING,
            f = b ? m.churning.start : m.active.start,
            g = b ? m.churning.end : m.active.end;
        return (0, r.jsxs)("div", {
            className: i()(_.k, t),
            children: [(0, r.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: l - p,
                maximum: l,
                override: {
                    default: {
                        gradientStart: f,
                        gradientEnd: g
                    }
                }
            }), b ? (0, r.jsx)(d.tvc, {
                size: "sm",
                color: "currentColor",
                className: _.K
            }) : (0, r.jsx)(d.Cp8, {
                size: "sm",
                color: "currentColor",
                className: _.K
            })]
        })
    }