/** chunk id: 226884 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(964486),
    r = n(58149),
    a = n(652176),
    o = n(448290),
    u = n(734057),
    c = n(309010),
    d = n(954571),
    m = n(652215),
    h = n(985018),
    g = n(616903);
let A = function(e) {
    let {
        guild: t,
        message: n,
        onClose: A
    } = e, f = u.A.getChannel(c.A.getChannelId(t.id));
    return ((0, s.Ay)(() => {
        d.default.track(m.HAw.OPEN_POPOUT, {
            type: "New Member Badge Popout",
            guild_id: t.id,
            channel_id: f?.id
        })
    }), null == f) ? null : (0, l.jsx)(a.Uq, {
        className: g.cc,
        children: (0, l.jsxs)("div", {
            className: g.jC,
            children: [(0, l.jsxs)("div", {
                className: g.rb,
                children: [(0, l.jsx)("div", {
                    className: g.zc,
                    children: (0, l.jsx)(i.NVf, {
                        size: "custom",
                        color: "currentColor",
                        width: 40,
                        height: 40
                    })
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        className: g.wx,
                        children: h.intl.string(h.t["v/OYd2"])
                    }), (0, l.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: h.intl.string(h.t.Z85MlD)
                    })]
                })]
            }), (0, l.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: g.lI,
                children: (0, l.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: h.intl.format(h.t["+xsVS6"], {
                        username: n.author.username
                    }),
                    fullWidth: !0,
                    onClick: () => {
                        r.Ay.trackWithMetadata(m.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                            target_user_id: n.author.id
                        }), A(), (0, o.C)(n.author, f.id)
                    }
                })
            })]
        })
    })
}