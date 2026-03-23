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
    m = i(734057),
    p = i(203982),
    h = i(652215),
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
    })), E = (0, l.bG)([m.A], () => m.A.getChannel(i?.channelId)), [C, v] = (0, u.zP)(E), _ = (0, c.aL)(), x = null != T && null != i && T.state !== h.XYD.ENDED && T.ownerId === i.ownerId, y = e => {
        null != i && (f?.(), o.default.selectVoiceChannel(i.channelId), x || (0, d.Nl)(i, {
            forceMultiple: e
        }), _.dispatch(h.jej.POPOUT_CLOSE), p._.dispatch(h.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == i) return null;
    let I = (0, u.CT)(v);
    return t ? I = g.intl.string(g.t.XvBdeT) : x && (I = g.intl.string(g.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: x ? "secondary" : "active",
            icon: s.Fzq,
            text: I,
            disabled: t || x || !C,
            onClick: () => y(!1),
            fullWidth: !0
        }), S && !x ? (0, n.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, n.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    y(!0)
                }
            })
        }) : null]
    })
}