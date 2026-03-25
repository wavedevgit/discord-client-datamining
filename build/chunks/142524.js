/** chunk id: 142524 params = (module,exports,require) **/
i.d(t, {
    A: () => y
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    d = i(80682),
    o = i(643501),
    u = i(616356),
    c = i(961350),
    A = i(71393),
    m = i(576705),
    g = i(290863),
    h = i(977997),
    p = i(954571),
    x = i(279250),
    f = i(834757),
    I = i(727353),
    S = i(652215),
    E = i(945354);
class v extends l.PureComponent {
    componentDidMount() {
        let {
            user: e,
            streamApplication: t
        } = this.props;
        p.default.track(S.HAw.OPEN_POPOUT, {
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
            onAction: s,
            hideTip: r,
            onWatch: d,
            activeStream: o,
            currentUserId: u,
            canWatch: c,
            unavailableReason: A,
            streamApplication: m
        } = this.props;
        return null == i ? null : (0, n.jsx)("div", {
            className: a()(E.yt, {
                [E.P0]: l
            }),
            children: (0, n.jsx)(I.Z, {
                stream: i,
                activeStream: o,
                streamActivity: e,
                streamApplication: m,
                user: t,
                currentUserId: u,
                canWatch: c ?? !1,
                unavailableReason: A,
                onWatchStream: d,
                onAction: s,
                hideTip: r
            })
        })
    }
}

function y(e) {
    let {
        user: t,
        channel: i,
        ...s
    } = e, [a, p] = (0, r.yK)([h.A, A.A, m.A, o.default], () => (0, x.eo)(i, h.A, A.A, m.A, o.default)), I = (0, r.bG)([u.A], () => u.A.getStreamForUser(t.id, i.getGuildId())), S = (0, r.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(I)), E = (0, r.bG)([c.default], () => c.default.getId()), y = (0, f.AO)(I), N = (0, r.bG)([g.A], () => (0, f.nr)(I, g.A)), V = l.useMemo(() => ({
        [i.guild_id]: [t.id]
    }), [i.guild_id, t.id]);
    return (0, d.Eq)(V, "StreamPreviewPopout"), (0, n.jsx)(v, {
        ...s,
        canWatch: a,
        unavailableReason: p,
        user: t,
        streamApplication: y,
        stream: I,
        activeStream: S,
        currentUserId: E,
        activity: N,
        channel: i
    })
}