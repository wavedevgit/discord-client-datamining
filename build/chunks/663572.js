/** chunk id: 663572 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(611010),
    l = n(95701),
    a = n(427157),
    o = n(860689),
    d = n(949155),
    c = n(131929),
    u = n(652215),
    h = n(985018),
    _ = n(588477);

function p(e) {
    let {
        invite: t,
        onAcceptInvite: n,
        disableUser: p = !1
    } = e;
    if (null == t) return null;
    let g = null != t.guild ? (0, o.DY)(t.guild) : null,
        m = null != t.channel ? (0, l.OY)(t.channel) : null,
        A = null != t.target_application ? new r.Ay(t.target_application) : null,
        f = p || null == t.inviter ? null : new a.A(t.inviter),
        E = !(null != t.approximate_member_count && t.approximate_member_count > d.FC || null != g && g.features.has(u.GuildFeatures.COMMUNITY)) && null != f && (0, d.B_)(t),
        x = (e => {
            let {
                state: t
            } = e;
            switch (t) {
                case u.elq.ACCEPTING:
                case u.elq.APP_OPENING:
                    return !0;
                default:
                    return !1
            }
        })(t),
        I = {
            invite: t,
            user: f,
            guild: g,
            channel: m,
            application: A
        };
    return (0, d.Fk)(t) ? (0, i.jsx)(c.A, {
        invite: t,
        channel: m,
        isSubmitting: x,
        onAcceptInvite: n
    }) : (0, i.jsxs)("div", {
        className: _.kL,
        children: [(0, i.jsx)(d.zN, {
            application: A,
            guild: g,
            user: E || (0, d.PX)(t) ? f : null
        }), (0, d.PX)(t) ? null : (0, i.jsx)(d.ji, {
            ...I,
            showBigUserIcon: E
        }), (0, i.jsx)(d.TZ, {
            ...I,
            showBigUserIcon: E
        }), (0, i.jsx)(d.IK, {
            ...I
        }), (0, i.jsx)("div", {
            className: _.xG,
            children: (0, i.jsx)(s.Button, {
                variant: "primary",
                size: "md",
                text: h.intl.string(h.t.ohMvm1),
                onClick: n,
                loading: x,
                fullWidth: !0
            })
        })]
    })
}