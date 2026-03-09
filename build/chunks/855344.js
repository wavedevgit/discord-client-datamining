/** chunk id: 855344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(3026),
    a = n(397927),
    r = n(964486),
    o = n(58149),
    u = n(376304),
    c = n(509536),
    d = n(98318),
    m = n(657048),
    h = n(976860),
    g = n(734057),
    p = n(317525),
    A = n(309010),
    f = n(954571),
    x = n(652176),
    v = n(652215),
    j = n(746080),
    N = n(985018),
    b = n(679444);
let C = e => {
    let {
        roleIcon: t,
        guild: n
    } = e, {
        name: C
    } = t;
    (0, r.Ay)(() => {
        f.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(A.A.getChannelId(n.id)))
        })
    });
    let E = (0, i.bG)([p.A], () => null != t.roleId ? p.A.getRole(n.id, t.roleId) : void 0),
        I = (0, d.U)(E),
        R = I ? N.intl.formatToPlainString(N.t.t0928V, {
            name: C
        }) : N.intl.formatToPlainString(N.t.UDDkGy, {
            name: C
        }),
        T = {
            ...t,
            src: null == t.src ? t.src : (0, u.ux)(t.src, 40),
            size: 40
        },
        y = I ? () => {
            (0, h.pX)(v.BVt.CHANNEL(n.id, j.VV.ROLE_SUBSCRIPTIONS))
        } : () => {
            (0, c.K)({
                guildId: n.id,
                location: {
                    section: v.JJy.ROLE_ICON_POPOUT
                }
            })
        };
    return (0, l.jsx)(a.lGe, {
        children: (0, l.jsx)(x.Uq, {
            children: (0, l.jsxs)("div", {
                className: b.jC,
                children: [(0, l.jsxs)("div", {
                    className: b.rb,
                    children: [(0, l.jsx)("div", {
                        className: b.Xq,
                        children: (0, l.jsx)(m.A, {
                            ...T,
                            enableTooltip: !1,
                            className: b.__invalid_roleIcon,
                            enableHeight: !1
                        })
                    }), (0, l.jsxs)("div", {
                        className: b.bM,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: b.S3,
                            children: (0, l.jsx)(s.A, {
                                children: C
                            })
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: R
                        })]
                    })]
                }), (0, l.jsx)(a.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: N.intl.string(N.t["H930+H"]),
                    onClick: y,
                    icon: a._Jp,
                    fullWidth: !0,
                    autoFocus: !0
                })]
            })
        })
    })
}