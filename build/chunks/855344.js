/** chunk id: 855344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var l = n(627968);
n(64700);
var s = n(311907),
    i = n(3026),
    r = n(397927),
    a = n(964486),
    o = n(58149),
    u = n(376304),
    c = n(509536),
    d = n(98318),
    m = n(657048),
    h = n(976860),
    g = n(734057),
    A = n(317525),
    f = n(309010),
    p = n(954571),
    x = n(652176),
    v = n(652215),
    C = n(746080),
    N = n(985018),
    T = n(530358);
let b = e => {
    let {
        roleIcon: t,
        guild: n
    } = e, {
        name: b
    } = t;
    (0, a.Ay)(() => {
        p.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(f.A.getChannelId(n.id)))
        })
    });
    let j = (0, s.bG)([A.A], () => null != t.roleId ? A.A.getRole(n.id, t.roleId) : void 0),
        E = (0, d.U)(j),
        I = E ? N.intl.formatToPlainString(N.t.t0928V, {
            name: b
        }) : N.intl.formatToPlainString(N.t.UDDkGy, {
            name: b
        }),
        S = {
            ...t,
            src: null == t.src ? t.src : (0, u.ux)(t.src, 40),
            size: 40
        },
        _ = E ? () => {
            (0, h.pX)(v.BVt.CHANNEL(n.id, C.VV.ROLE_SUBSCRIPTIONS))
        } : () => {
            (0, c.K)({
                guildId: n.id,
                location: {
                    section: v.JJy.ROLE_ICON_POPOUT
                }
            })
        };
    return (0, l.jsx)(r.lGe, {
        children: (0, l.jsx)(x.Uq, {
            children: (0, l.jsxs)("div", {
                className: T.jC,
                children: [(0, l.jsxs)("div", {
                    className: T.rb,
                    children: [(0, l.jsx)("div", {
                        className: T.Xq,
                        children: (0, l.jsx)(m.A, {
                            ...S,
                            enableTooltip: !1,
                            className: T.__invalid_roleIcon,
                            enableHeight: !1
                        })
                    }), (0, l.jsxs)("div", {
                        className: T.bM,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            className: T.S3,
                            children: (0, l.jsx)(i.A, {
                                children: b
                            })
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: I
                        })]
                    })]
                }), (0, l.jsx)(r.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: N.intl.string(N.t["H930+H"]),
                    onClick: _,
                    icon: r._Jp,
                    fullWidth: !0,
                    autoFocus: !0
                })]
            })
        })
    })
}