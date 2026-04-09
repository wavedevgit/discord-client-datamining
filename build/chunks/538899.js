/** chunk id: 538899 params = (module,exports,require) **/
n.d(t, {
    default: () => R
});
var a = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    r = n(562465),
    o = n(732955),
    c = n(843472),
    d = n(608299),
    u = n(425059),
    m = n(390248),
    p = n(946274),
    _ = n(734057),
    h = n(31717),
    A = n(71393),
    g = n(320501),
    f = n(453771),
    b = n(661191),
    T = n(292348),
    x = n(518960),
    I = n(382287),
    C = n(853742),
    y = n(835369),
    E = n(218152),
    S = n(652215),
    v = n(818348),
    M = n(985018),
    N = n(747490);
async function j(e) {
    let t, {
            thread: n,
            attachments: a,
            setIsUploading: i,
            guild: l,
            onClose: s
        } = e,
        o = b.default.castChannelIdAsMessageId(n.id),
        p = new u.A;
    p.on("progress", e => {
        let t = (0, f.o2)(l.id);
        e.currentSize > t && (p.cancel(), i(!1), s(), (0, x.V)(n, (0, I.LJ)(a)))
    });
    let _ = g.A.getMessage(n.id, o),
        A = null != _ ? _.attachments : [];
    i(!0);
    try {
        t = await p.uploadFiles(a)
    } catch (e) {
        i(!1);
        return
    }
    let C = [...A, ...t.map((e, t) => (0, T.OW)(e, t)) ?? []];
    try {
        await r.Bo.patch({
            url: S.Rsh.MESSAGE(n.id, o),
            body: {
                attachments: C
            },
            rejectWithError: !1
        }), s(), d.A.clearAll(n.id, h.C.ChannelMessage)
    } catch (e) {
        i(!1), e.body?.code === S.t02.EXPLICIT_CONTENT && (s(), c.A.sendExplicitMediaClydeError(n.id, e.body?.attachments, m.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.A.clearAll(n.id, h.C.ChannelMessage))
    }
}

function R(e) {
    let {
        threadId: t,
        attachments: n,
        sendMessage: r,
        transitionState: c,
        onClose: d
    } = e, u = (0, s.bG)([_.A], () => _.A.getChannel(t), [t]), m = (0, s.bG)([A.A], () => A.A.getGuild(u?.getGuildId()), [u]), h = (0, s.bG)([_.A], () => _.A.getChannel(u?.parent_id), [u]), g = n[0]?.item, [f, b] = i.useState(null);
    i.useEffect(() => {
        null != g && (0, p.JF)(g.file, (e, t) => b(e), v.tE)
    }, [g]);
    let T = null != g && null != f ? {
            src: f,
            width: y.T5,
            height: y.Co,
            spoiler: n[0].spoiler,
            alt: n[0].description
        } : null,
        [x, I] = i.useState(!1),
        S = i.useCallback(() => {
            (0, C.jh)({
                added: !1
            }), r(), d()
        }, [r, d]),
        R = i.useCallback(() => {
            null != u && null != m && ((0, C.jh)({
                added: !0
            }), j({
                thread: u,
                attachments: n,
                setIsUploading: I,
                guild: m,
                onClose: d
            }))
        }, [u, n, I, m, d]);
    return null == h ? null : (0, a.jsx)(l.Modal, {
        title: M.intl.string(M.t["+SZF6S"]),
        subtitle: M.intl.string(M.t["0Ycgw5"]),
        transitionState: c,
        onClose: d,
        actionBarInput: (0, a.jsx)(o.QWc, {
            variant: "secondary",
            disabled: x,
            onClick: d,
            text: M.intl.string(M.t["ETE/oC"])
        }),
        actions: [{
            variant: "secondary",
            text: M.intl.string(M.t["8rKVHL"]),
            disabled: x,
            onClick: S
        }, {
            variant: "primary",
            text: M.intl.string(M.t.d611xH),
            loading: x,
            onClick: R,
            autoFocus: !0
        }],
        children: (0, a.jsx)(E.Cp, {
            channel: h,
            children: (0, a.jsx)(y.Ay, {
                threadId: t,
                goToThread: v.tE,
                overrideMedia: T,
                className: N.u
            })
        })
    })
}