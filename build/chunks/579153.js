/** Chunk was on 97492 **/
/** chunk id: 579153, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    p = n(806931),
    h = n(985018);
let f = e => {
    let {
        channel: t,
        remoteMode: n = !1
    } = e, {
        parentAnalyticsLocation: f
    } = (0, s.Ay)(), g = l.useRef(null);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: g,
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(u.A, {
                children: (0, r.jsx)(a.A, {
                    onClose: l,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.s)("MoreSettingsMenu", f, {
                        entrypoint: p.GK.THREE_DOT
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
                ref: g,
                isTrayButton: !0,
                onClick: e => {
                    (0, o.X)(f, o.O.MORE), n(e)
                },
                label: h.intl.string(h.t.PdRCRg),
                iconComponent: i.jNK,
                color: "primaryDark",
                isActive: l
            })
        }
    })
}