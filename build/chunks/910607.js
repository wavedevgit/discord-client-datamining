/** chunk id: 910607, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I,
    k: () => A
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(3026),
    o = n(342952),
    s = n(990078),
    l = n(397927),
    c = n(956793),
    u = n(47167),
    d = n(263063),
    f = n(378570),
    p = n(345942),
    _ = n(576705),
    h = n(575731),
    m = n(21241),
    g = n(939496),
    E = n(10862),
    y = n(652215),
    b = n(996988),
    O = n(985018),
    v = n(380297);
let A = 3;

function I(e) {
    let {
        user: t,
        guild: n,
        channel: I,
        onAction: S,
        onClose: T
    } = e, {
        themeType: C
    } = (0, g.E)(), N = (0, h.A)(I), w = (0, u.Ay)(I), {
        canViewChannel: R,
        canConnect: P
    } = (0, i.cf)([_.A], () => ({
        canViewChannel: _.A.can(y.xBc.VIEW_CHANNEL, I),
        canConnect: I.isPrivate() || _.A.can(y.xBc.CONNECT, I)
    }));
    if (!R) return null;
    let D = () => {
            let e = e => {
                e.stopPropagation(), (0, p.u)(n.id), null == S || S({
                    action: "OPEN_VOICE_GUILD"
                }), null == T || T()
            };
            return (0, r.jsx)(s.m, {
                asContainer: !0,
                text: n.name,
                "aria-label": !1,
                children: (0, r.jsx)(d.A, {
                    guild: n,
                    size: d.A.Sizes.SMOL,
                    className: v.$f,
                    onClick: e
                })
            })
        },
        L = () => {
            if (!P) return (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                lineClamp: 1,
                children: (0, r.jsx)(a.A, {
                    children: w
                })
            });
            let e = e => {
                e.stopPropagation(), c.default.selectVoiceChannel(I.id), (0, f.iN)(I.id), null == S || S({
                    action: "OPEN_VOICE_CHANNEL"
                }), null == T || T()
            };
            return (0, r.jsx)(l.DUT, {
                onClick: e,
                className: v.sd,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.A, {
                        children: w
                    })
                })
            })
        },
        x = C !== b.d.MODAL && C !== b.d.MODAL_V2 && C !== b.d.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.A, {
            className: v.Ph
        }), (0, r.jsxs)("div", {
            className: v.gx,
            children: [D(), (0, r.jsx)(l._BQ, {
                size: "xxs",
                color: l.LU0.colors.TEXT_SUBTLE
            }), (0, r.jsxs)("div", {
                className: v.FH,
                children: [(0, r.jsx)(E.A, {
                    channel: I,
                    size: "xxs",
                    color: l.LU0.colors.TEXT_SUBTLE,
                    className: v.Ow
                }), L()]
            }), (0, r.jsx)(o.A, {
                users: N,
                guildId: n.id,
                channelId: I.id,
                maxUsers: A,
                size: l._3J.SIZE_16,
                overflowCountColor: "text-subtle",
                overflowCountClassName: v.NS,
                onClickOverflow: e => {
                    e.stopPropagation(), null == S || S({
                        action: "PRESS_VOICE_CHANNEL_AVATARS"
                    })
                },
                onUserClick: e => e.stopPropagation(),
                disableUserPopout: !!x || (e => e === t.id),
                "aria-label": O.intl.string(O.t["jNqDh/"])
            })]
        })]
    })
}