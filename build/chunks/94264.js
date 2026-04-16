/** chunk id: 94264 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(892227),
    i = n(827734),
    d = n(732955),
    o = n(914410),
    c = n(649032),
    u = n(320118),
    m = n(992501);
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
            passesProgressBarInvariant: n,
            programReward: l,
            totalDays: i
        } = (0, u.F)();
        if (!n || null == l || null == i) return null;
        let x = (0, a.default)(new Date(l.next_reward_date), new Date),
            C = l.program_current_state === c.L.PREMIUM_CHURNING,
            p = C ? h.churning.start : h.active.start,
            _ = C ? h.churning.end : h.active.end;
        return (0, r.jsxs)("div", {
            className: s()(m.k, t),
            children: [(0, r.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: i - x,
                maximum: i,
                override: {
                    default: {
                        gradientStart: p,
                        gradientEnd: _
                    }
                }
            }), C ? (0, r.jsx)(d.tvc, {
                size: "sm",
                color: "currentColor",
                className: m.K
            }) : (0, r.jsx)(d.Cp8, {
                size: "sm",
                color: "currentColor",
                className: m.K
            })]
        })
    }