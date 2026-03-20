/** chunk id: 579153 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(688810),
    r = n(592982),
    o = n(384059),
    c = n(480890),
    d = n(246356),
    u = n(709562),
    h = n(806931),
    A = n(985018);
let m = e => {
    let {
        channel: t,
        remoteMode: n = !1
    } = e, {
        parentAnalyticsLocation: m
    } = (0, a.Ay)(), _ = s.useRef(null);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: _,
        renderPopout: e => {
            let {
                closePopout: s
            } = e;
            return (0, i.jsx)(d.A, {
                children: (0, i.jsx)(r.A, {
                    onClose: s,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.s)("MoreSettingsMenu", m, {
                        entrypoint: h.GK.THREE_DOT
                    })
                })
            })
        },
        align: "right",
        position: "top",
        animation: l.YNO.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: s
            } = t;
            return (0, i.jsx)(u.l, {
                ref: _,
                isTrayButton: !0,
                onClick: e => {
                    (0, o.X)(m, o.O.MORE), n(e)
                },
                label: A.intl.string(A.t.PdRCRg),
                iconComponent: l.jNK,
                color: "primaryDark",
                isActive: s
            })
        }
    })
}