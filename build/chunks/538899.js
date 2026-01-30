/** chunk id: 538899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => O
}), n(896048), n(228524);
var a = n(627968),
    o = n(64700),
    i = n(158954),
    r = n(311907),
    c = n(562465),
    l = n(732955),
    s = n(843472),
    _ = n(608299),
    b = n(425059),
    u = n(390248),
    d = n(946274),
    f = n(734057),
    p = n(31717),
    h = n(71393),
    m = n(320501),
    g = n(453771),
    x = n(661191),
    y = n(292348),
    j = n(518960),
    C = n(382287),
    v = n(853742),
    T = n(835369),
    w = n(218152),
    E = n(652215),
    A = n(818348),
    I = n(985018),
    S = n(304439);
async function k(e) {
    var t, n, a;
    let o, {
            thread: i,
            attachments: r,
            setIsUploading: l,
            guild: d,
            onClose: f
        } = e,
        h = x.default.castChannelIdAsMessageId(i.id),
        v = new b.A;
    v.on("progress", e => {
        let t = (0, g.o2)(d.id);
        e.currentSize > t && (v.cancel(), l(!1), f(), (0, j.V)(i, (0, C.LJ)(r)))
    });
    let T = m.A.getMessage(i.id, h),
        w = null != T ? T.attachments : [];
    l(!0);
    try {
        o = await v.uploadFiles(r)
    } catch (e) {
        l(!1);
        return
    }
    let A = [...w, ...null != (t = o.map((e, t) => (0, y.OW)(e, t))) ? t : []];
    try {
        await c.Bo.patch({
            url: E.Rsh.MESSAGE(i.id, h),
            body: {
                attachments: A
            },
            rejectWithError: !1
        }), f(), _.A.clearAll(i.id, p.C.ChannelMessage)
    } catch (e) {
        l(!1), (null == (n = e.body) ? void 0 : n.code) === E.t02.EXPLICIT_CONTENT && (f(), s.A.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, u.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), _.A.clearAll(i.id, p.C.ChannelMessage))
    }
}

function O(e) {
    var t;
    let {
        threadId: n,
        attachments: c,
        sendMessage: s,
        transitionState: _,
        onClose: b
    } = e, u = (0, r.bG)([f.A], () => f.A.getChannel(n), [n]), p = (0, r.bG)([h.A], () => h.A.getGuild(null == u ? void 0 : u.getGuildId()), [u]), m = (0, r.bG)([f.A], () => f.A.getChannel(null == u ? void 0 : u.parent_id), [u]), g = null == (t = c[0]) ? void 0 : t.item, [x, y] = o.useState(null);
    o.useEffect(() => {
        null != g && (0, d.JF)(g.file, (e, t) => y(e), A.tE)
    }, [g]);
    let j = null != g && null != x ? {
            src: x,
            width: T.T5,
            height: T.Co,
            spoiler: c[0].spoiler,
            alt: c[0].description
        } : null,
        [C, E] = o.useState(!1),
        O = o.useCallback(() => {
            (0, v.jh)({
                added: !1
            }), s(), b()
        }, [s, b]),
        M = o.useCallback(() => {
            null != u && null != p && ((0, v.jh)({
                added: !0
            }), k({
                thread: u,
                attachments: c,
                setIsUploading: E,
                guild: p,
                onClose: b
            }))
        }, [u, c, E, p, b]);
    return null == m ? null : (0, a.jsx)(i.Modal, {
        title: I.intl.string(I.t["+SZF6S"]),
        subtitle: I.intl.string(I.t["0Ycgw5"]),
        transitionState: _,
        onClose: b,
        actionBarInput: (0, a.jsx)(l.QWc, {
            variant: "secondary",
            disabled: C,
            onClick: b,
            text: I.intl.string(I.t["ETE/oC"])
        }),
        actions: [{
            variant: "secondary",
            text: I.intl.string(I.t["8rKVHL"]),
            disabled: C,
            onClick: O
        }, {
            variant: "primary",
            text: I.intl.string(I.t.d611xH),
            loading: C,
            onClick: M,
            autoFocus: !0
        }],
        children: (0, a.jsx)(w.Cp, {
            channel: m,
            children: (0, a.jsx)(T.Ay, {
                threadId: n,
                goToThread: A.tE,
                overrideMedia: j,
                className: S.u
            })
        })
    })
}