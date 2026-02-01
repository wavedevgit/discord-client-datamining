/** chunk id: 305637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(990078),
    a = n(397927),
    s = n(630054),
    o = n(956793),
    c = n(401843),
    u = n(315606),
    d = n(279250),
    p = n(267102),
    f = n(616356),
    m = n(734057),
    g = n(203982),
    y = n(652215),
    b = n(985018);

function _(e) {
    let {
        isCurrentUser: t,
        applicationStream: n,
        onAction: _
    } = e, {
        defaultWatchMultipleStreams: h
    } = (0, u.W)({
        location: "WatchStreamButton"
    }), {
        activeStream: A,
        watchingOtherStream: v
    } = (0, l.cf)([f.A], () => ({
        activeStream: f.A.getActiveStreamForApplicationStream(n),
        watchingOtherStream: null != n && f.A.getAllActiveStreamsForChannel(n.channelId).filter(e => {
            let {
                ownerId: t
            } = e;
            return t !== n.ownerId
        }).length > 0
    })), O = (0, l.bG)([m.A], () => m.A.getChannel(null == n ? void 0 : n.channelId)), [S, j] = (0, d.zP)(O), x = (0, p.aL)(), I = null != A && null != n && A.state !== y.XYD.ENDED && A.ownerId === n.ownerId, E = e => {
        null != n && (null == _ || _(), o.default.selectVoiceChannel(n.channelId), I || (0, c.Nl)(n, {
            forceMultiple: e
        }), x.dispatch(y.jej.POPOUT_CLOSE), g._.dispatch(y.jej.MODAL_CLOSE), s.A.popAll())
    };
    if (null == n) return null;
    let C = (0, d.CT)(j);
    return t ? C = b.intl.string(b.t.XvBdeT) : I && (C = b.intl.string(b.t["JH1SJ+"])), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Button, {
            size: "sm",
            variant: I ? "secondary" : "active",
            icon: a.Fzq,
            text: C,
            disabled: t || I || !S,
            onClick: () => E(!1),
            fullWidth: !0
        }), !v || I || h ? null : (0, r.jsx)(i.m, {
            text: b.intl.string(b.t.wCrzut),
            children: (0, r.jsx)(a.K0, {
                variant: "secondary",
                size: "sm",
                icon: a.vAm,
                "aria-label": b.intl.string(b.t.wCrzut),
                onClick: () => {
                    E(!0)
                }
            })
        })]
    })
}