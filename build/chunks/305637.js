/** chunk id: 305637 params = (module,exports,require) **/
i.d(t, {
    A: () => f
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(990078),
    s = i(397927),
    a = i(630054),
    o = i(956793),
    d = i(401843),
    u = i(279250),
    c = i(267102),
    A = i(616356),
    h = i(734057),
    m = i(203982),
    p = i(652215),
    g = i(985018);

function f(e) {
    let {
        isCurrentUser: t,
        applicationStream: i,
        onAction: f
    } = e, {
        activeStream: T,
        watchingOtherStream: S
    } = (0, l.cf)([A.A], () => ({
        activeStream: A.A.getActiveStreamForApplicationStream(i),
        watchingOtherStream: null != i && A.A.getAllActiveStreamsForChannel(i.channelId).filter(e => {
            let {
                ownerId: t
            } = e;
            return t !== i.ownerId
        }).length > 0
    })), E = (0, l.bG)([h.A], () => h.A.getChannel(i?.channelId)), [C, v] = (0, u.zP)(E), _ = (0, c.aL)(), y = null != T && null != i && T.state !== p.XYD.ENDED && T.ownerId === i.ownerId, x = e => {
        null != i && (f?.(), o.default.selectVoiceChannel(i.channelId), y || (0, d.Nl)(i, {
            forceMultiple: e
        }), _.dispatch(p.jej.POPOUT_CLOSE), m._.dispatch(p.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == i) return null;
    let I = (0, u.CT)(v);
    return t ? I = g.intl.string(g.t.XvBdeT) : y && (I = g.intl.string(g.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: y ? "secondary" : "active",
            icon: s.Fzq,
            text: I,
            disabled: t || y || !C,
            onClick: () => x(!1),
            fullWidth: !0
        }), S && !y ? (0, n.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, n.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    x(!0)
                }
            })
        }) : null]
    })
}