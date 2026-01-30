/** chunk id: 684448, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(3026),
    s = n(397927),
    l = n(140547),
    c = n(886019),
    u = n(559405),
    d = n(890330),
    f = n(51183);
n(851883);
var p = n(123511);
let _ = 14;

function h(e) {
    let {
        customStatusActivity: t,
        textClassName: n,
        iconClassName: i,
        tooltipClassName: h,
        voiceChannel: m,
        hangStatus: g,
        userId: E,
        textSize: y = "xs",
        animateEmoji: b = !0,
        hideEmoji: O = !1,
        hideTooltip: v = !1
    } = e, A = (0, d.v)("ActivityStatus", m), {
        defaultStatusVariant: I
    } = (0, l.$j)({
        guildId: null == m ? void 0 : m.guild_id,
        location: "CustomStatusActivityStatus"
    });
    if (null == t && null == g) return null;
    let S = null != g && A,
        T = S && null != E ? (0, c.Au)(E, g, I) : null,
        C = null == t ? void 0 : t.emoji,
        N = null != T ? T : null == t ? void 0 : t.state,
        w = null != N && "" !== N,
        R = null;
    S && null != E ? R = (0, r.jsx)(u.A, {
        userId: E,
        size: _,
        className: a()(i, p.W9),
        hangStatusActivity: g
    }) : null == C || O || (R = (0, r.jsx)(f.A, {
        emoji: C,
        animate: b,
        className: i,
        hideTooltip: v || w
    }));
    let P = w && (null != R ? " ".concat(N) : N),
        D = () => {
            let e = null != C && !O && !w;
            return v || e ? (0, r.jsxs)(r.Fragment, {
                children: [R, P]
            }) : (0, r.jsxs)(o.A, {
                delay: 150,
                tooltipClassName: h,
                children: [R, P]
            })
        };
    return (0, r.jsx)(s.Text, {
        variant: "text-".concat(y, "/medium"),
        color: "none",
        className: a()(p.ps, n),
        children: D()
    })
}