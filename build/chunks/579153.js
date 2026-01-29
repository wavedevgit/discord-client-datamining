/** Chunk was on 1113 **/
/** chunk id: 579153, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(688810),
    a = n(592982),
    o = n(384059),
    c = n(480890),
    u = n(246356),
    d = n(709562),
    h = n(806931),
    p = n(985018);
let g = e => {
    let {
        channel: t,
        remoteMode: n = !1
    } = e, {
        parentAnalyticsLocation: g
    } = (0, s.Ay)(), f = l.useRef(null);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: f,
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(u.A, {
                children: (0, r.jsx)(a.A, {
                    onClose: l,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.s)("MoreSettingsMenu", g, {
                        entrypoint: h.GK.THREE_DOT
                    })
                })
            })
        },
        align: "right",
        position: "top",
        animation: i.YNO.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, r.jsx)(d.l, {
                ref: f,
                isTrayButton: !0,
                onClick: e => {
                    (0, o.X)(g, o.O.MORE), n(e)
                },
                label: p.intl.string(p.t.PdRCRg),
                iconComponent: i.jNK,
                color: "primaryDark",
                isActive: l
            })
        }
    })
}