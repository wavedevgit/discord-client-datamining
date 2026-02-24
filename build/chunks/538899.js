/** chunk id: 538899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => N
});
var a = n(627968),
    i = n(64700),
    r = n(158954),
    l = n(311907),
    s = n(562465),
    o = n(732955),
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
    T = n(292348),
    x = n(518960),
    I = n(382287),
    C = n(853742),
    E = n(835369),
    S = n(218152),
    y = n(652215),
    v = n(818348),
    j = n(985018),
    R = n(304439);
async function M(e) {
    let t, {
            thread: n,
            attachments: a,
            setIsUploading: i,
            guild: r,
            onClose: l
        } = e,
        o = A.default.castChannelIdAsMessageId(n.id),
        m = new u.A;
    m.on("progress", e => {
        let t = (0, g.o2)(r.id);
        e.currentSize > t && (m.cancel(), i(!1), l(), (0, x.V)(n, (0, I.LJ)(a)))
    });
    let p = h.A.getMessage(n.id, o),
        b = null != p ? p.attachments : [];
    i(!0);
    try {
        t = await m.uploadFiles(a)
    } catch (e) {
        i(!1);
        return
    }
    let C = [...b, ...t.map((e, t) => (0, T.OW)(e, t)) ?? []];
    try {
        await s.Bo.patch({
            url: y.Rsh.MESSAGE(n.id, o),
            body: {
                attachments: C
            },
            rejectWithError: !1
        }), l(), d.A.clearAll(n.id, f.C.ChannelMessage)
    } catch (e) {
        i(!1), e.body?.code === y.t02.EXPLICIT_CONTENT && (l(), c.A.sendExplicitMediaClydeError(n.id, e.body?.attachments, _.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.A.clearAll(n.id, f.C.ChannelMessage))
    }
}

function N(e) {
    let {
        threadId: t,
        attachments: n,
        sendMessage: s,
        transitionState: c,
        onClose: d
    } = e, u = (0, l.bG)([p.A], () => p.A.getChannel(t), [t]), _ = (0, l.bG)([b.A], () => b.A.getGuild(u?.getGuildId()), [u]), f = (0, l.bG)([p.A], () => p.A.getChannel(u?.parent_id), [u]), h = n[0]?.item, [g, A] = i.useState(null);
    i.useEffect(() => {
        null != h && (0, m.JF)(h.file, (e, t) => A(e), v.tE)
    }, [h]);
    let T = null != h && null != g ? {
            src: g,
            width: E.T5,
            height: E.Co,
            spoiler: n[0].spoiler,
            alt: n[0].description
        } : null,
        [x, I] = i.useState(!1),
        y = i.useCallback(() => {
            (0, C.jh)({
                added: !1
            }), s(), d()
        }, [s, d]),
        N = i.useCallback(() => {
            null != u && null != _ && ((0, C.jh)({
                added: !0
            }), M({
                thread: u,
                attachments: n,
                setIsUploading: I,
                guild: _,
                onClose: d
            }))
        }, [u, n, I, _, d]);
    return null == f ? null : (0, a.jsx)(r.Modal, {
        title: j.intl.string(j.t["+SZF6S"]),
        subtitle: j.intl.string(j.t["0Ycgw5"]),
        transitionState: c,
        onClose: d,
        actionBarInput: (0, a.jsx)(o.QWc, {
            variant: "secondary",
            disabled: x,
            onClick: d,
            text: j.intl.string(j.t["ETE/oC"])
        }),
        actions: [{
            variant: "secondary",
            text: j.intl.string(j.t["8rKVHL"]),
            disabled: x,
            onClick: y
        }, {
            variant: "primary",
            text: j.intl.string(j.t.d611xH),
            loading: x,
            onClick: N,
            autoFocus: !0
        }],
        children: (0, a.jsx)(S.Cp, {
            channel: f,
            children: (0, a.jsx)(E.Ay, {
                threadId: t,
                goToThread: v.tE,
                overrideMedia: T,
                className: R.u
            })
        })
    })
}