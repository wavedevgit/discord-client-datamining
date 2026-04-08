/** chunk id: 538899 params = (module,exports,require) **/
n.d(t, {
    default: () => N
});
var a = n(627968),
    i = n(64700),
    r = n(158954),
    s = n(311907),
    o = n(562465),
    l = n(732955),
    c = n(843472),
    d = n(608299),
    u = n(425059),
    _ = n(390248),
    m = n(946274),
    p = n(734057),
    f = n(31717),
    b = n(71393),
    h = n(320501),
    g = n(453771),
    A = n(661191),
    x = n(292348),
    T = n(518960),
    C = n(382287),
    I = n(853742),
    S = n(835369),
    E = n(218152),
    y = n(652215),
    v = n(818348),
    j = n(985018),
    R = n(747490);
async function M(e) {
    let t, {
            thread: n,
            attachments: a,
            setIsUploading: i,
            guild: r,
            onClose: s
        } = e,
        l = A.default.castChannelIdAsMessageId(n.id),
        m = new u.A;
    m.on("progress", e => {
        let t = (0, g.o2)(r.id);
        e.currentSize > t && (m.cancel(), i(!1), s(), (0, T.V)(n, (0, C.LJ)(a)))
    });
    let p = h.A.getMessage(n.id, l),
        b = null != p ? p.attachments : [];
    i(!0);
    try {
        t = await m.uploadFiles(a)
    } catch (e) {
        i(!1);
        return
    }
    let I = [...b, ...t.map((e, t) => (0, x.OW)(e, t)) ?? []];
    try {
        await o.Bo.patch({
            url: y.Rsh.MESSAGE(n.id, l),
            body: {
                attachments: I
            },
            rejectWithError: !1
        }), s(), d.A.clearAll(n.id, f.C.ChannelMessage)
    } catch (e) {
        i(!1), e.body?.code === y.t02.EXPLICIT_CONTENT && (s(), c.A.sendExplicitMediaClydeError(n.id, e.body?.attachments, _.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.A.clearAll(n.id, f.C.ChannelMessage))
    }
}

function N(e) {
    let {
        threadId: t,
        attachments: n,
        sendMessage: o,
        transitionState: c,
        onClose: d
    } = e, u = (0, s.bG)([p.A], () => p.A.getChannel(t), [t]), _ = (0, s.bG)([b.A], () => b.A.getGuild(u?.getGuildId()), [u]), f = (0, s.bG)([p.A], () => p.A.getChannel(u?.parent_id), [u]), h = n[0]?.item, [g, A] = i.useState(null);
    i.useEffect(() => {
        null != h && (0, m.JF)(h.file, (e, t) => A(e), v.tE)
    }, [h]);
    let x = null != h && null != g ? {
            src: g,
            width: S.T5,
            height: S.Co,
            spoiler: n[0].spoiler,
            alt: n[0].description
        } : null,
        [T, C] = i.useState(!1),
        y = i.useCallback(() => {
            (0, I.jh)({
                added: !1
            }), o(), d()
        }, [o, d]),
        N = i.useCallback(() => {
            null != u && null != _ && ((0, I.jh)({
                added: !0
            }), M({
                thread: u,
                attachments: n,
                setIsUploading: C,
                guild: _,
                onClose: d
            }))
        }, [u, n, C, _, d]);
    return null == f ? null : (0, a.jsx)(r.Modal, {
        title: j.intl.string(j.t["+SZF6S"]),
        subtitle: j.intl.string(j.t["0Ycgw5"]),
        transitionState: c,
        onClose: d,
        actionBarInput: (0, a.jsx)(l.QWc, {
            variant: "secondary",
            disabled: T,
            onClick: d,
            text: j.intl.string(j.t["ETE/oC"])
        }),
        actions: [{
            variant: "secondary",
            text: j.intl.string(j.t["8rKVHL"]),
            disabled: T,
            onClick: y
        }, {
            variant: "primary",
            text: j.intl.string(j.t.d611xH),
            loading: T,
            onClick: N,
            autoFocus: !0
        }],
        children: (0, a.jsx)(E.Cp, {
            channel: f,
            children: (0, a.jsx)(S.Ay, {
                threadId: t,
                goToThread: v.tE,
                overrideMedia: x,
                className: R.u
            })
        })
    })
}