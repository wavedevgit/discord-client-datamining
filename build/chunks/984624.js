/** Chunk was on 1113 **/
/** chunk id: 984624, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(267102),
    o = n(931991),
    c = n(246356),
    u = n(404355),
    d = n(734057),
    h = n(707592),
    p = n(496092),
    g = n(132860),
    f = n(508654),
    m = n(985018);

function b(e) {
    let {
        channelId: t,
        onClick: n
    } = e, b = (0, a.Us)(), A = (0, f.Qs)(t), y = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]), {
        canManageGuildEvent: O
    } = (0, o.nr)(y), _ = O(A), j = l.useRef(null);
    if (null == A) return null;
    let x = () => {
            null != y && (0, g.A)(y) ? (0, h.Py)(y, b) : n()
        },
        v = () => {
            p.A.endEvent(A.id, A.guild_id)
        };
    return _ ? (0, r.jsx)(s.YNO, {
        targetElementRef: j,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, r.jsx)(c.A, {
                children: (0, r.jsx)(s.W1t, {
                    "data-menu-migrated": !0,
                    navId: "exit-options",
                    onSelect: () => {},
                    "aria-label": m.intl.string(m.t["K6/mk3"]),
                    onClose: t,
                    children: (0, r.jsx)(s.Drp, {
                        id: "end-voice-event",
                        color: "danger",
                        action: v,
                        label: m.intl.string(m.t.qaYzPA),
                        leadingAccessory: {
                            type: "icon",
                            icon: s.aXh
                        },
                        icon: s.aXh
                    })
                })
            })
        },
        align: "center",
        position: "top",
        animation: s.YNO.Animation.FADE,
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(u.A, {
                buttonRef: j,
                label: m.intl.string(m.t["6vrfgt"]),
                onClick: x,
                onPopoutClick: t
            })
        }
    }) : (0, r.jsx)(u.A, {
        label: m.intl.string(m.t["6vrfgt"]),
        onClick: n
    })
}