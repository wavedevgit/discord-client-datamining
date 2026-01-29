/** Chunk was on 1113 **/
/** chunk id: 435084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(435371),
    a = n(397927),
    o = n(378939),
    c = n(734057),
    u = n(309010),
    d = n(187508),
    h = n(652215),
    p = n(985018);

function g(e) {
    let {
        closePopout: t,
        onSelect: n
    } = e, l = (0, i.bG)([c.A, u.A], () => c.A.getChannel(u.A.getChannelId())), {
        everyoneFilter: s,
        roleFilter: g,
        guildFilter: f
    } = (0, i.cf)([d.Ay], () => {
        let {
            everyoneFilter: e,
            roleFilter: t,
            guildFilter: n
        } = d.Ay;
        return {
            everyoneFilter: e,
            roleFilter: t,
            guildFilter: n
        }
    });
    return (0, r.jsxs)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": p.intl.string(p.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [(0, r.jsx)(a.sLh, {
            id: "Everyone",
            label: p.intl.string(p.t.cdyUsV),
            action: function() {
                o.A.setGuildFilter({
                    everyoneFilter: !s
                })
            },
            checked: s
        }), (0, r.jsx)(a.sLh, {
            id: "Roles",
            label: p.intl.string(p.t.lZejCq),
            action: function() {
                o.A.setGuildFilter({
                    roleFilter: !g
                })
            },
            checked: g
        }), null == l || l.isPrivate() ? null : (0, r.jsx)(a.sLh, {
            id: "All Servers",
            label: p.intl.string(p.t.GWMA6s),
            action: function() {
                o.A.setGuildFilter({
                    guildFilter: f === h.KE7.THIS_SERVER ? h.KE7.ALL_SERVERS : h.KE7.THIS_SERVER
                })
            },
            checked: f === h.KE7.ALL_SERVERS
        })]
    })
}

function f() {
    let e = l.useRef(null);
    return (0, r.jsx)(a.YNO, {
        targetElementRef: e,
        align: "right",
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, r.jsx)(g, {
                closePopout: t
            })
        },
        children: t => {
            let {
                onClick: n
            } = t;
            return (0, r.jsx)(s.m_, {
                text: p.intl.string(p.t.pEasFX),
                targetElementRef: e,
                children: (0, r.jsx)(a.K0, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": p.intl.string(p.t.pEasFX),
                    color: a.o5d.TERTIARY,
                    icon: a.RgP,
                    onClick: n
                })
            })
        }
    })
}