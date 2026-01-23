/** Chunk was on 91798 **/
/** chunk id: 538899, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => S
}), a(896048), a(228524);
var n = a(627968),
    l = a(64700),
    r = a(158954),
    i = a(311907),
    o = a(562465),
    s = a(732955),
    c = a(843472),
    u = a(608299),
    d = a(425059),
    b = a(390248),
    f = a(946274),
    p = a(734057),
    _ = a(31717),
    g = a(71393),
    h = a(320501),
    m = a(453771),
    y = a(661191),
    x = a(292348),
    v = a(518960),
    j = a(382287),
    C = a(853742),
    w = a(835369),
    A = a(218152),
    E = a(652215),
    O = a(818348),
    T = a(985018),
    I = a(304439);
async function M(e) {
    var t, a, n;
    let l, {
            thread: r,
            attachments: i,
            setIsUploading: s,
            guild: f,
            onClose: p
        } = e,
        g = y.default.castChannelIdAsMessageId(r.id),
        C = new d.A;
    C.on("progress", e => {
        let t = (0, m.o2)(f.id);
        e.currentSize > t && (C.cancel(), s(!1), p(), (0, v.V)(r, (0, j.LJ)(i)))
    });
    let w = h.A.getMessage(r.id, g),
        A = null != w ? w.attachments : [];
    s(!0);
    try {
        l = await C.uploadFiles(i)
    } catch (e) {
        s(!1);
        return
    }
    let O = [...A, ...null != (t = l.map((e, t) => (0, x.OW)(e, t))) ? t : []];
    try {
        await o.Bo.patch({
            url: E.Rsh.MESSAGE(r.id, g),
            body: {
                attachments: O
            },
            rejectWithError: !1
        }), p(), u.A.clearAll(r.id, _.C.ChannelMessage)
    } catch (e) {
        s(!1), (null == (a = e.body) ? void 0 : a.code) === E.t02.EXPLICIT_CONTENT && (p(), c.A.sendExplicitMediaClydeError(r.id, null == (n = e.body) ? void 0 : n.attachments, b.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.A.clearAll(r.id, _.C.ChannelMessage))
    }
}

function S(e) {
    var t;
    let {
        threadId: a,
        attachments: o,
        sendMessage: c,
        transitionState: u,
        onClose: d
    } = e, b = (0, i.bG)([p.A], () => p.A.getChannel(a), [a]), _ = (0, i.bG)([g.A], () => g.A.getGuild(null == b ? void 0 : b.getGuildId()), [b]), h = (0, i.bG)([p.A], () => p.A.getChannel(null == b ? void 0 : b.parent_id), [b]), m = null == (t = o[0]) ? void 0 : t.item, [y, x] = l.useState(null);
    l.useEffect(() => {
        null != m && (0, f.JF)(m.file, (e, t) => x(e), O.tE)
    }, [m]);
    let v = null != m && null != y ? {
            src: y,
            width: w.T5,
            height: w.Co,
            spoiler: o[0].spoiler,
            alt: o[0].description
        } : null,
        [j, E] = l.useState(!1),
        S = l.useCallback(() => {
            (0, C.jh)({
                added: !1
            }), c(), d()
        }, [c, d]),
        P = l.useCallback(() => {
            null != b && null != _ && ((0, C.jh)({
                added: !0
            }), M({
                thread: b,
                attachments: o,
                setIsUploading: E,
                guild: _,
                onClose: d
            }))
        }, [b, o, E, _, d]);
    return null == h ? null : (0, n.jsx)(r.Modal, {
        title: T.intl.string(T.t["+SZF6S"]),
        subtitle: T.intl.string(T.t["0Ycgw5"]),
        transitionState: u,
        onClose: d,
        actionBarInput: (0, n.jsx)(s.QWc, {
            variant: "secondary",
            disabled: j,
            onClick: d,
            text: T.intl.string(T.t["ETE/oC"])
        }),
        actions: [{
            variant: "secondary",
            text: T.intl.string(T.t["8rKVHL"]),
            disabled: j,
            onClick: S
        }, {
            variant: "primary",
            text: T.intl.string(T.t.d611xH),
            loading: j,
            onClick: P,
            autoFocus: !0
        }],
        children: (0, n.jsx)(A.Cp, {
            channel: h,
            children: (0, n.jsx)(w.Ay, {
                threadId: a,
                goToThread: O.tE,
                overrideMedia: v,
                className: I.u
            })
        })
    })
}