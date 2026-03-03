/** chunk id: 305637, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => E
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(990078),
    a = n(397927),
    s = n(630054),
    o = n(956793),
    d = n(401843),
    u = n(279250),
    c = n(267102),
    A = n(616356),
    p = n(734057),
    m = n(203982),
    h = n(652215),
    g = n(985018);

function E(t) {
    let {
        isCurrentUser: e,
        applicationStream: n,
        onAction: E
    } = t, {
        activeStream: f,
        watchingOtherStream: C
    } = (0, l.cf)([A.A], () => ({
        activeStream: A.A.getActiveStreamForApplicationStream(n),
        watchingOtherStream: null != n && A.A.getAllActiveStreamsForChannel(n.channelId).filter(t => {
            let {
                ownerId: e
            } = t;
            return e !== n.ownerId
        }).length > 0
    })), S = (0, l.bG)([p.A], () => p.A.getChannel(n?.channelId)), [T, v] = (0, u.zP)(S), y = (0, c.aL)(), N = null != f && null != n && f.state !== h.XYD.ENDED && f.ownerId === n.ownerId, x = t => {
        null != n && (E?.(), o.default.selectVoiceChannel(n.channelId), N || (0, d.Nl)(n, {
            forceMultiple: t
        }), y.dispatch(h.jej.POPOUT_CLOSE), m._.dispatch(h.jej.MODAL_CLOSE), s.A.popAll())
    };
    if (null == n) return null;
    let _ = (0, u.CT)(v);
    return e ? _ = g.intl.string(g.t.XvBdeT) : N && (_ = g.intl.string(g.t["JH1SJ+"])), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.Button, {
            size: "sm",
            variant: N ? "secondary" : "active",
            icon: a.Fzq,
            text: _,
            disabled: e || N || !T,
            onClick: () => x(!1),
            fullWidth: !0
        }), C && !N ? (0, i.jsx)(r.m, {
            text: g.intl.string(g.t.wCrzut),
            children: (0, i.jsx)(a.K0, {
                variant: "secondary",
                size: "sm",
                icon: a.vAm,
                "aria-label": g.intl.string(g.t.wCrzut),
                onClick: () => {
                    x(!0)
                }
            })
        }) : null]
    })
}