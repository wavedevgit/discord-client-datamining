/** chunk id: 984624 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(267102),
    o = n(931991),
    c = n(246356),
    d = n(404355),
    u = n(734057),
    h = n(707592),
    A = n(496092),
    m = n(132860),
    g = n(508654),
    p = n(985018);

function _(e) {
    let {
        channelId: t,
        onClick: n
    } = e, _ = (0, r.Us)(), f = (0, g.Qs)(t), x = (0, l.bG)([u.A], () => u.A.getChannel(t), [t]), {
        canManageGuildEvent: C
    } = (0, o.nr)(x), E = C(f), I = s.useRef(null);
    if (null == f) return null;
    let N = () => {
            null != x && (0, m.A)(x) ? (0, h.Py)(x, _) : n()
        },
        b = () => {
            A.A.endEvent(f.id, f.guild_id)
        };
    return E ? (0, i.jsx)(a.YNO, {
        targetElementRef: I,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(c.A, {
                children: (0, i.jsx)(a.W1t, {
                    "data-menu-migrated": !0,
                    navId: "exit-options",
                    onSelect: () => {},
                    "aria-label": p.intl.string(p.t["K6/mk3"]),
                    onClose: t,
                    children: (0, i.jsx)(a.Drp, {
                        id: "end-voice-event",
                        color: "danger",
                        action: b,
                        label: p.intl.string(p.t.qaYzPA),
                        leadingAccessory: {
                            type: "icon",
                            icon: a.aXh
                        },
                        icon: a.aXh
                    })
                })
            })
        },
        align: "center",
        position: "top",
        animation: a.YNO.Animation.FADE,
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, i.jsx)(d.A, {
                buttonRef: I,
                label: p.intl.string(p.t["6vrfgt"]),
                onClick: N,
                onPopoutClick: t
            })
        }
    }) : (0, i.jsx)(d.A, {
        label: p.intl.string(p.t["6vrfgt"]),
        onClick: n
    })
}