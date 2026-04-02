/** chunk id: 804630 params = (module,exports,require) **/
i.d(e, {
    Gf: () => A,
    Tf: () => h
});
var n = i(627968);
i(64700), i(503698);
var l = i(311907),
    r = i(990078);
i(397927);
var s = i(672979),
    a = i(90644);
i(432166);
var o = i(587895),
    d = i(769015);
i(290987), i(172710), i(763758);
var u = i(139675),
    c = i(486020),
    p = i(652215);
i(985018);
var m = i(257081);

function A(t, e, i) {
    let n;
    return null != e && (0, a.A)(e) ? {
        isSpotify: !0,
        name: e.details ?? e.name ?? "",
        type: p.$pd.LISTENING,
        assets: e.assets ?? void 0,
        applicationId: e.application_id,
        state: e.state ?? void 0,
        syncId: e.sync_id ?? void 0,
        timestamps: e.timestamps ?? void 0,
        rawActivity: e,
        userId: t
    } : null != i ? (n = e?.type === p.$pd.WATCHING ? p.$pd.WATCHING : p.$pd.PLAYING, {
        isSpotify: !1,
        isEmbedded: !0,
        isGame: !1,
        name: i.application.name,
        type: n,
        applicationId: i.application.id,
        embeddedIconUrl: c.Ay.getApplicationIconURL({
            id: i.application.id,
            icon: i.application.icon
        }) ?? void 0,
        embeddedApplicationName: i.application.name,
        assets: e?.assets ?? void 0,
        details: e?.details ?? void 0,
        state: e?.state ?? void 0,
        timestamps: e?.timestamps ?? void 0,
        userId: t
    }) : {
        isSpotify: !1,
        isEmbedded: !1,
        isGame: (0, s.A)(e),
        name: e?.name ?? "",
        type: e?.type ?? p.$pd.PLAYING,
        applicationId: e?.application_id,
        embeddedIconUrl: void 0,
        embeddedApplicationName: void 0,
        assets: e?.assets ?? void 0,
        details: e?.details ?? void 0,
        state: e?.state ?? void 0,
        timestamps: e?.timestamps ?? void 0,
        userId: t
    }
}

function h(t) {
    let {
        resolvedActivity: e
    } = t, i = (0, l.bG)([o.A], () => null != e.applicationId ? o.A.getApplication(e.applicationId) : null, [e.applicationId]), {
        assets: s,
        isGame: a,
        isEmbedded: c
    } = e;
    if (null == s || null == s.large_image && null == s.small_image) return c && null != e.embeddedIconUrl ? (0, n.jsx)(r.m, {
        text: e.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, n.jsx)("img", {
            alt: e.embeddedApplicationName,
            src: e.embeddedIconUrl,
            className: m.Sl
        })
    }) : a ? (0, n.jsx)(d.A, {
        game: i,
        className: m.Sl
    }) : null;
    let p = s.large_image ?? s.small_image;
    return null != p ? (0, n.jsx)("img", {
        alt: s.large_text ?? "",
        src: (0, u.uD)(e.applicationId, p, [128, 128]),
        className: m.Sl
    }) : null
}