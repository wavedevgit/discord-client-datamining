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
    A = i(734057),
    h = i(203982),
    p = i(652215),
    g = i(985018);

function f(t) {
    let {
        isCurrentUser: e,
        applicationStream: i,
        onAction: f
    } = t, {
        activeStream: T,
        watchingOtherStream: S
    } = (0, l.cf)([m.A], () => ({
        activeStream: m.A.getActiveStreamForApplicationStream(i),
        watchingOtherStream: null != i && m.A.getAllActiveStreamsForChannel(i.channelId).filter(t => {
            let {
                ownerId: e
            } = t;
            return e !== i.ownerId
        }).length > 0
    })), E = (0, l.bG)([A.A], () => A.A.getChannel(i?.channelId)), [C, v] = (0, u.zP)(E), I = (0, c.aL)(), _ = null != T && null != i && T.state !== p.XYD.ENDED && T.ownerId === i.ownerId, x = t => {
        null != i && (f?.(), o.default.selectVoiceChannel(i.channelId), _ || (0, d.Nl)(i, {
            forceMultiple: t
        }), I.dispatch(p.jej.POPOUT_CLOSE), h._.dispatch(p.jej.MODAL_CLOSE), a.A.popAll())
    };
    if (null == i) return null;
    let N = (0, u.CT)(v);
    return e ? N = g.intl.string(g.t.XvBdeT) : _ && (N = g.intl.string(g.t["JH1SJ+"])), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
            size: "sm",
            variant: _ ? "secondary" : "active",
            icon: s.Fzq,
            text: N,
            disabled: e || _ || !C,
            onClick: () => x(!1),
            fullWidth: !0
        }), S && !_ ? (0, n.jsx)(r.m, {
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