/** chunk id: 94264 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    i = a(892227),
    d = a(827734),
    l = a(732955),
    o = a(914410),
    c = a(649032),
    u = a(320118),
    _ = a(404613);
let m = {
        churning: {
            start: d.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: d.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: d.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: d.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    p = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: a,
            programReward: r,
            totalDays: d
        } = (0, u.F)();
        if (!a || null == r || null == d) return null;
        let p = (0, i.default)(new Date(r.next_reward_date), new Date),
            b = r.program_current_state === c.L.PREMIUM_CHURNING,
            f = b ? m.churning.start : m.active.start,
            g = b ? m.churning.end : m.active.end;
        return (0, n.jsxs)("div", {
            className: s()(_.k, t),
            children: [(0, n.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: d - p,
                maximum: d,
                override: {
                    default: {
                        gradientStart: f,
                        gradientEnd: g
                    }
                }
            }), b ? (0, n.jsx)(l.tvc, {
                size: "sm",
                color: "currentColor",
                className: _.K
            }) : (0, n.jsx)(l.Cp8, {
                size: "sm",
                color: "currentColor",
                className: _.K
            })]
        })
    }