/** chunk id: 94264 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    l = a(892227),
    i = a(827734),
    d = a(732955),
    o = a(914410),
    c = a(649032),
    u = a(320118),
    m = a(837902);
let p = {
        churning: {
            start: i.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: i.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: i.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    f = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: a,
            programReward: r,
            totalDays: i
        } = (0, u.F)();
        if (!a || null == r || null == i) return null;
        let f = (0, l.default)(new Date(r.next_reward_date), new Date),
            b = r.program_current_state === c.L.PREMIUM_CHURNING,
            A = b ? p.churning.start : p.active.start,
            h = b ? p.churning.end : p.active.end;
        return (0, n.jsxs)("div", {
            className: s()(m.k, t),
            children: [(0, n.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: i - f,
                maximum: i,
                override: {
                    default: {
                        gradientStart: A,
                        gradientEnd: h
                    }
                }
            }), b ? (0, n.jsx)(d.tvc, {
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