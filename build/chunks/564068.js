/** chunk id: 564068, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(228524);
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(311907),
    o = n(582754),
    s = n(397927),
    l = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    f = n(976860),
    p = n(71393),
    _ = n(384684),
    h = n(985242),
    m = n(652215),
    g = n(746080),
    E = n(985018),
    y = n(765490);
let b = () => {
    let e = (0, l.Ay)();
    return (0, o.qB)(e) ? n(454333) : n(674463)
};

function O(e) {
    let {
        onClose: t,
        guildId: n,
        emojiId: o
    } = e, l = b(), {
        analyticsLocations: O
    } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: O,
            emoji_guild_id: n,
            emoji_id: null != o ? o : null
        }
    });
    let v = () => {
            (0, f.pX)(m.BVt.CHANNEL(n, g.VV.ROLE_SUBSCRIPTIONS), {
                sourceLocationStack: O
            })
        },
        A = (0, a.bG)([p.A], () => p.A.getGuild(n)),
        I = (0, a.bG)([_.A], () => null != n && _.A.getUserSubscriptionRoles(n).size > 0),
        S = I ? E.intl.string(E.t.GoLM9z) : E.intl.formatToPlainString(E.t["h0u/Hi"], {
            serverName: null == A ? void 0 : A.name
        }),
        T = I ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)("div", {
            className: y.Tp
        }), (0, r.jsxs)("div", {
            className: y.Qs,
            children: [(0, r.jsx)(s.DUT, {
                className: y.b,
                "aria-label": E.intl.string(E.t.cpT0Cq),
                onClick: t,
                children: (0, r.jsx)(s.PGe, {
                    size: "xs",
                    color: "currentColor",
                    "aria-label": E.intl.string(E.t.cpT0Cq),
                    className: y.yP
                })
            }), (0, r.jsx)("img", {
                alt: "",
                src: l,
                className: y.Tn
            }), (0, r.jsx)(s.hKd, {
                size: 22
            }), (0, r.jsx)(s.Heading, {
                color: "text-strong",
                variant: "heading-lg/extrabold",
                className: y.wx,
                children: E.intl.string(E.t.cBjkcx)
            }), (0, r.jsx)(s.hKd, {
                size: 4
            }), (0, r.jsx)(s.Text, {
                color: "text-default",
                variant: "text-md/normal",
                className: y.h_,
                children: S
            }), (0, r.jsx)(s.hKd, {
                size: 24
            }), (0, r.jsx)(h.A, {
                text: T,
                onClick: v
            })]
        })]
    })
}