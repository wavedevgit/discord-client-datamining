/** chunk id: 465424 params = (module,exports,require) **/
n.d(t, {
    D: () => p
});
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(956793),
    s = n(714114),
    o = n(323073),
    u = n(47167),
    c = n(378570),
    A = n(323443),
    g = n(332789),
    b = n(10862),
    m = n(70963),
    f = n(961350),
    E = n(576705),
    x = n(977997),
    h = n(652215),
    C = n(212590);

function M(e) {
    let {
        channel: t
    } = e, n = (0, u.Ay)(t);
    return (0, l.jsxs)("div", {
        className: C.W,
        children: [(0, l.jsx)(b.A, {
            channel: t,
            color: "currentColor",
            size: "xs",
            className: C.p
        }), (0, l.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            lineClamp: 1,
            children: n
        })]
    })
}

function p(e) {
    let {
        userId: t
    } = e, {
        voiceChannel: n
    } = (0, s.A)({
        userId: t
    }), u = (0, a.bG)([E.A], () => {
        if (null == n) return !1;
        let e = (0, o.r9)() && (0, o.UK)(n.id);
        return (n.isPrivate() || E.A.can(h.xBc.CONNECT, n)) && !e
    }), b = (0, a.bG)([x.A], () => x.A.isInChannel(n?.id)), C = (0, a.bG)([f.default], () => f.default.getId() === t), p = i.useCallback(() => {
        null != n && (n.isGuildStageVoice() ? (0, A.av)(n) : (d.default.selectVoiceChannel(n.id), (0, c.iN)(n.id)))
    }, [n]), {
        enabled: j
    } = (0, g.j)("useJoinVoiceItem");
    return j && u && !C && null != n ? (0, l.jsx)(r.Drp, {
        id: "join-voice",
        label: b ? (0, m.om)(n) : (0, m.M)(n),
        subtext: (0, l.jsx)(M, {
            channel: n
        }),
        action: p
    }) : null
}