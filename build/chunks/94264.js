/** chunk id: 94264, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => R
});
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(892227),
    i = r(827734),
    d = r(732955),
    u = r(914410),
    o = r(649032),
    c = r(320118),
    m = r(837902);
let _ = {
        churning: {
            start: i.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: i.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: i.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    R = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: r,
            programReward: a,
            totalDays: i
        } = (0, c.F)();
        if (!r || null == a || null == i) return null;
        let R = (0, s.default)(new Date(a.next_reward_date), new Date),
            p = a.program_current_state === o.L.PREMIUM_CHURNING,
            h = p ? _.churning.start : _.active.start,
            A = p ? _.churning.end : _.active.end;
        return (0, n.jsxs)("div", {
            className: l()(m.k, t),
            children: [(0, n.jsx)(u.Ay, {
                variant: u.qP.UNSET,
                progress: i - R,
                maximum: i,
                override: {
                    default: {
                        gradientStart: h,
                        gradientEnd: A
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