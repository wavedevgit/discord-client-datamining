/** Chunk was on 6500 **/
/** chunk id: 305637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
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
    _ = n(652215),
    y = n(985018);

function A(e) {
    let {
        isCurrentUser: t,
        applicationStream: n,
        onAction: A
    } = e, {
        defaultWatchMultipleStreams: b
    } = (0, u.W)({
        location: "WatchStreamButton"
    }), {
        activeStream: h,
        watchingOtherStream: v
    } = (0, i.cf)([f.A], () => ({
        activeStream: f.A.getActiveStreamForApplicationStream(n),
        watchingOtherStream: null != n && f.A.getAllActiveStreamsForChannel(n.channelId).filter(e => {
            let {
                ownerId: t
            } = e;
            return t !== n.ownerId
        }).length > 0
    })), O = (0, i.bG)([m.A], () => m.A.getChannel(null == n ? void 0 : n.channelId)), [j, S] = (0, d.zP)(O), I = (0, p.aL)(), x = null != h && null != n && h.state !== _.XYD.ENDED && h.ownerId === n.ownerId, E = e => {
        null != n && (null == A || A(), o.default.selectVoiceChannel(n.channelId), x || (0, c.Nl)(n, {
            forceMultiple: e
        }), I.dispatch(_.jej.POPOUT_CLOSE), g._.dispatch(_.jej.MODAL_CLOSE), s.A.popAll())
    };
    if (null == n) return null;
    let P = (0, d.CT)(S);
    return t ? P = y.intl.string(y.t.XvBdeT) : x && (P = y.intl.string(y.t["JH1SJ+"])), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Button, {
            size: "sm",
            variant: x ? "secondary" : "active",
            icon: a.Fzq,
            text: P,
            disabled: t || x || !j,
            onClick: () => E(!1),
            fullWidth: !0
        }), !v || x || b ? null : (0, r.jsx)(l.m, {
            text: y.intl.string(y.t.wCrzut),
            children: (0, r.jsx)(a.K0, {
                variant: "secondary",
                size: "sm",
                icon: a.vAm,
                "aria-label": y.intl.string(y.t.wCrzut),
                onClick: () => {
                    E(!0)
                }
            })
        })]
    })
}