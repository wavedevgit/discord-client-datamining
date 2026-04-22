/** chunk id: 94264 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var s = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(892227),
    i = n(827734),
    d = n(732955),
    o = n(914410),
    c = n(649032),
    u = n(320118),
    h = n(992501);
let m = {
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
            programReward: a,
            totalDays: i
        } = (0, u.F)();
        if (!n || null == a || null == i) return null;
        let x = (0, r.default)(new Date(a.next_reward_date), new Date),
            C = a.program_current_state === c.L.PREMIUM_CHURNING,
            _ = C ? m.churning.start : m.active.start,
            p = C ? m.churning.end : m.active.end;
        return (0, s.jsxs)("div", {
            className: l()(h.k, t),
            children: [(0, s.jsx)(o.Ay, {
                variant: o.qP.UNSET,
                progress: i - x,
                maximum: i,
                override: {
                    default: {
                        gradientStart: _,
                        gradientEnd: p
                    }
                }
            }), C ? (0, s.jsx)(d.tvc, {
                size: "sm",
                color: "currentColor",
                className: h.K
            }) : (0, s.jsx)(d.Cp8, {
                size: "sm",
                color: "currentColor",
                className: h.K
            })]
        })
    }