/** Chunk was on 342 **/
/** chunk id: 692026, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(228524), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(713654),
    o = n(857071),
    c = n(734057),
    u = n(71393),
    d = n(287809),
    x = n(794782),
    g = n(9448),
    m = n(691012),
    h = n(895202),
    j = n(985018),
    v = n(330156);

function f(e) {
    var t, n;
    let {
        guildId: f,
        guildEvent: p,
        guildEventId: b,
        error: y
    } = e, O = r.useMemo(() => (0, x.hQ)(p, f), [p, f]), {
        channel_id: A,
        name: E,
        image: N,
        description: P
    } = O, C = (0, i.bG)([c.A], () => c.A.getChannel(A), [A]), S = (0, i.bG)([u.A], () => u.A.getGuild(f), [f]), T = (0, g.oF)(O), w = (0, i.bG)([d.default], () => null != p.creatorId ? d.default.getUser(p.creatorId) : d.default.getCurrentUser(), [p.creatorId]), I = (0, i.bG)([o.A], () => o.A.isLurking(f), [f]), D = (0, a.gU)(C, S);
    return (0, l.jsxs)("div", {
        className: v.Qs,
        children: [(0, l.jsx)(h.A, {
            className: v.B0,
            guild: S,
            channel: C,
            location: null != T ? T : void 0,
            creator: w,
            name: E,
            description: P,
            imageSource: (n = (0, x.hQ)(p, f, b), null == N && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, m.A)(n)),
            isActive: !1,
            isUserLurking: I,
            speakers: [],
            speakerCount: 0,
            rsvped: !0,
            guildEvent: O,
            eventPreview: O,
            hideAgeVerificationNotice: !0
        }), (0, l.jsxs)("div", {
            className: v.FS,
            children: [(0, l.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                children: j.intl.string(j.t.yBsFE3)
            }), (0, l.jsx)(s.Text, {
                color: "text-subtle",
                variant: "text-md/normal",
                className: v.m_,
                children: null != location ? j.intl.string(j.t.KDPFi9) : j.intl.format(j.t.f55NX0, {
                    channelName: null != (t = null == C ? void 0 : C.name) ? t : "",
                    channelHook: () => {
                        var e;
                        return (0, l.jsxs)("div", {
                            className: v.HA,
                            children: [null != D ? (0, l.jsx)(D, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: v.Kk
                            }) : (0, l.jsx)(s.BT6, {
                                size: "custom",
                                color: "currentColor",
                                height: 18,
                                width: 18,
                                className: v.NR
                            }), null != (e = null == C ? void 0 : C.name) ? e : T]
                        })
                    }
                })
            }), null != y && (0, l.jsx)(s.Text, {
                color: "text-feedback-critical",
                variant: "text-xs/normal",
                className: v.m_,
                children: y.getAnyErrorMessage()
            })]
        })]
    })
}