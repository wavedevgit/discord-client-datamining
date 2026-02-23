/** chunk id: 94264, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => x
});
var n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(892227),
    i = r(311907),
    d = r(827734),
    o = r(732955),
    u = r(613566),
    c = r(895944),
    m = r(649032),
    h = r(837902);
let p = {
        churning: {
            start: d.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: d.A.unsafe_rawColors.RED_NEW_30.css
        },
        active: {
            start: d.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: d.A.unsafe_rawColors.GREEN_NEW_30.css
        }
    },
    x = e => {
        let {
            className: t
        } = e, {
            passesProgressBarInvariant: r,
            programReward: a,
            totalDays: d
        } = (0, i.cf)([c.A], () => ({
            passesProgressBarInvariant: c.A.passesProgressBarInvariant(m.W.NITRO),
            programReward: c.A.getRewardForProgram(m.W.NITRO),
            totalDays: c.A.getTotalDaysInDuration(m.W.NITRO)
        }));
        if (!r || null == a || null == d) return null;
        let x = (0, l.default)(new Date(a.next_reward_date), new Date),
            g = a.program_current_state === m.L.PREMIUM_CHURNING,
            _ = g ? p.churning.start : p.active.start,
            f = g ? p.churning.end : p.active.end;
        return (0, n.jsxs)("div", {
            className: s()(h.k, t),
            children: [(0, n.jsx)(u.Ay, {
                variant: u.qP.UNSET,
                progress: d - x,
                maximum: d,
                override: {
                    default: {
                        gradientStart: _,
                        gradientEnd: f
                    }
                }
            }), g ? (0, n.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: h.K
            }) : (0, n.jsx)(o.Cp8, {
                size: "sm",
                color: "currentColor",
                className: h.K
            })]
        })
    }