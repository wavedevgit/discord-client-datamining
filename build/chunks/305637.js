/** chunk id: 305637 params = (module,exports,require) **/
i.d(e, {
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
    m = i(616356),
    p = i(734057),
    A = i(203982),
    h = i(652215),
    g = i(985018);

function f(t) {
    let {
        isCurrentUser: e,
        applicationStream: i,
        onAction: f
    } = t, {
        activeStream: T,
        watchingOtherStream: v
    } = (0, l.cf)([m.A], () => ({
        activeStream: m.A.getActiveStreamForApplicationStream(i),
        watchingOtherStream: null != i && m.A.getAllActiveStreamsForChannel(i.channelId).filter(t => {
            let {
                ownerId: e
            } = t;
            return e !== i.ownerId
        }).length > 0
    })), C = (0, l.bG)([p.A], () => p.A.getChannel(i?.channelId)), [S, E] = (0, u.zP)(C), x = (0, c.aL)(), y = null != T && null != i && T.state !== h.XYD.ENDED && T.ownerId === i.ownerId, _ = t => {
        null != i && (f?.(), o.default.selectVoiceChannel(i.channelId), y || (0, d.Nl)(i, {
            forceMultiple: t
        }), x.dispatch(h.jej.POPOUT_CLOSE), A._.dispatch(h.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == i) return null;
    let N = (0, u.CT)(E);
    return e ? N = g.intl.string(g.t.XvBdeT) : y && (N = g.intl.string(g.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: y ? "secondary" : "active",
            icon: s.Fzq,
            text: N,
            disabled: e || y || !S,
            onClick: () => _(!1),
            fullWidth: !0
        }), v && !y ? (0, n.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, n.jsx)(s.K0, {
                variant: "secondary",
                size: "sm",
                icon: s.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    _(!0)
                }
            })
        }) : null]
    })
}