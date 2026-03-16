/** chunk id: 855344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
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
    x = n(954571),
    f = n(652176),
    v = n(652215),
    j = n(746080),
    N = n(985018),
    C = n(530358);
let b = e => {
    let {
        roleIcon: t,
        guild: n
    } = e, {
        name: b
    } = t;
    (0, r.Ay)(() => {
        x.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(A.A.getChannelId(n.id)))
        })
    });
    let E = (0, i.bG)([p.A], () => null != t.roleId ? p.A.getRole(n.id, t.roleId) : void 0),
        I = (0, d.U)(E),
        y = I ? N.intl.formatToPlainString(N.t.t0928V, {
            name: b
        }) : N.intl.formatToPlainString(N.t.UDDkGy, {
            name: b
        }),
        T = {
            ...t,
            src: null == t.src ? t.src : (0, u.ux)(t.src, 40),
            size: 40
        },
        R = I ? () => {
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
        children: (0, l.jsx)(f.Uq, {
            children: (0, l.jsxs)("div", {
                className: C.jC,
                children: [(0, l.jsxs)("div", {
                    className: C.rb,
                    children: [(0, l.jsx)("div", {
                        className: C.Xq,
                        children: (0, l.jsx)(m.A, {
                            ...T,
                            enableTooltip: !1,
                            className: C.__invalid_roleIcon,
                            enableHeight: !1
                        })
                    }), (0, l.jsxs)("div", {
                        className: C.bM,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: C.S3,
                            children: (0, l.jsx)(s.A, {
                                children: b
                            })
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: y
                        })]
                    })]
                }), (0, l.jsx)(a.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: N.intl.string(N.t["H930+H"]),
                    onClick: R,
                    icon: a._Jp,
                    fullWidth: !0,
                    autoFocus: !0
                })]
            })
        })
    })
}