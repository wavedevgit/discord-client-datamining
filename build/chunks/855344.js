/** chunk id: 855344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
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
    b = n(679444);
let T = e => {
    let {
        roleIcon: t,
        guild: n
    } = e, {
        name: T
    } = t;
    (0, a.Ay)(() => {
        p.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(f.A.getChannelId(n.id)))
        })
    });
    let E = (0, s.bG)([A.A], () => null != t.roleId ? A.A.getRole(n.id, t.roleId) : void 0),
        j = (0, d.U)(E),
        I = j ? N.intl.formatToPlainString(N.t.t0928V, {
            name: T
        }) : N.intl.formatToPlainString(N.t.UDDkGy, {
            name: T
        }),
        _ = {
            ...t,
            src: null == t.src ? t.src : (0, u.ux)(t.src, 40),
            size: 40
        },
        S = j ? () => {
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
                className: b.jC,
                children: [(0, l.jsxs)("div", {
                    className: b.rb,
                    children: [(0, l.jsx)("div", {
                        className: b.Xq,
                        children: (0, l.jsx)(m.A, {
                            ..._,
                            enableTooltip: !1,
                            className: b.__invalid_roleIcon,
                            enableHeight: !1
                        })
                    }), (0, l.jsxs)("div", {
                        className: b.bM,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            className: b.S3,
                            children: (0, l.jsx)(i.A, {
                                children: T
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
                    onClick: S,
                    icon: r._Jp,
                    fullWidth: !0,
                    autoFocus: !0
                })]
            })
        })
    })
}