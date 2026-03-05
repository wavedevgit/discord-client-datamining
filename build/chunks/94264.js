/** chunk id: 94264, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var r = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(892227),
    i = n(827734),
    d = n(732955),
    u = n(914410),
    o = n(649032),
    c = n(320118),
    m = n(417340);
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
            passesProgressBarInvariant: n,
            programReward: a,
            totalDays: i
        } = (0, c.F)();
        if (!n || null == a || null == i) return null;
        let R = (0, l.default)(new Date(a.next_reward_date), new Date),
            h = a.program_current_state === o.L.PREMIUM_CHURNING,
            p = h ? _.churning.start : _.active.start,
            x = h ? _.churning.end : _.active.end;
        return (0, r.jsxs)("div", {
            className: s()(m.k, t),
            children: [(0, r.jsx)(u.Ay, {
                variant: u.qP.UNSET,
                progress: i - R,
                maximum: i,
                override: {
                    default: {
                        gradientStart: p,
                        gradientEnd: x
                    }
                }
            }), h ? (0, r.jsx)(d.tvc, {
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