/** chunk id: 855344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
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
    g = n(976860),
    h = n(734057),
    A = n(317525),
    f = n(309010),
    p = n(954571),
    x = n(652176),
    v = n(652215),
    C = n(746080),
    N = n(985018),
    E = n(183819);
let I = e => {
    let {
        roleIcon: t,
        guild: n
    } = e, {
        name: I
    } = t;
    (0, r.Ay)(() => {
        p.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(h.A.getChannel(f.A.getChannelId(n.id)))
        })
    });
    let _ = (0, i.bG)([A.A], () => null != t.roleId ? A.A.getRole(n.id, t.roleId) : void 0),
        b = (0, d.U)(_),
        S = b ? N.intl.formatToPlainString(N.t.t0928V, {
            name: I
        }) : N.intl.formatToPlainString(N.t.UDDkGy, {
            name: I
        }),
        T = {
            ...t,
            src: null == t.src ? t.src : (0, u.ux)(t.src, 40),
            size: 40
        },
        j = b ? () => {
            (0, g.pX)(v.BVt.CHANNEL(n.id, C.VV.ROLE_SUBSCRIPTIONS))
        } : () => {
            (0, c.K4)({
                guildId: n.id,
                location: {
                    section: v.JJy.ROLE_ICON_POPOUT
                }
            })
        };
    return (0, l.jsx)(a.lGe, {
        children: (0, l.jsx)(x.Uq, {
            children: (0, l.jsxs)("div", {
                className: E.jC,
                children: [(0, l.jsxs)("div", {
                    className: E.rb,
                    children: [(0, l.jsx)("div", {
                        className: E.Xq,
                        children: (0, l.jsx)(m.A, {
                            ...T,
                            enableTooltip: !1,
                            className: E.__invalid_roleIcon,
                            enableHeight: !1
                        })
                    }), (0, l.jsxs)("div", {
                        className: E.bM,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: E.S3,
                            children: (0, l.jsx)(s.A, {
                                children: I
                            })
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: S
                        })]
                    })]
                }), (0, l.jsx)(a.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: N.intl.string(N.t["H930+H"]),
                    onClick: j,
                    icon: a._Jp,
                    fullWidth: !0,
                    autoFocus: !0
                })]
            })
        })
    })
}