/** chunk id: 142524 params = (module,exports,require) **/
i.d(t, {
    A: () => _
});
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(311907),
    o = i(80682),
    d = i(643501),
    u = i(616356),
    c = i(961350),
    A = i(71393),
    m = i(576705),
    p = i(290863),
    h = i(977997),
    g = i(954571),
    f = i(279250),
    T = i(834757),
    S = i(727353),
    E = i(652215),
    C = i(945354);
class v extends l.PureComponent {
    componentDidMount() {
        let {
            user: e,
            streamApplication: t
        } = this.props;
        g.default.track(E.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        })
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: i,
            previewIsOpen: l,
            onAction: r,
            hideTip: a,
            onWatch: o,
            activeStream: d,
            currentUserId: u,
            canWatch: c,
            unavailableReason: A,
            streamApplication: m
        } = this.props;
        return null == i ? null : (0, n.jsx)("div", {
            className: s()(C.yt, {
                [C.P0]: l
            }),
            children: (0, n.jsx)(S.Z, {
                stream: i,
                activeStream: d,
                streamActivity: e,
                streamApplication: m,
                user: t,
                currentUserId: u,
                canWatch: c ?? !1,
                unavailableReason: A,
                onWatchStream: o,
                onAction: r,
                hideTip: a
            })
        })
    }
}

function _(e) {
    let {
        user: t,
        channel: i,
        ...r
    } = e, [s, g] = (0, a.yK)([h.A, A.A, m.A, d.default], () => (0, f.eo)(i, h.A, A.A, m.A, d.default)), S = (0, a.bG)([u.A], () => u.A.getStreamForUser(t.id, i.getGuildId())), E = (0, a.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(S)), C = (0, a.bG)([c.default], () => c.default.getId()), _ = (0, T.AO)(S), x = (0, a.bG)([p.A], () => (0, T.nr)(S, p.A)), y = l.useMemo(() => ({
        [i.guild_id]: [t.id]
    }), [i.guild_id, t.id]);
    return (0, o.Eq)(y, "StreamPreviewPopout"), (0, n.jsx)(v, {
        ...r,
        canWatch: s,
        unavailableReason: g,
        user: t,
        streamApplication: _,
        stream: S,
        activeStream: E,
        currentUserId: C,
        activity: x,
        channel: i
    })
}