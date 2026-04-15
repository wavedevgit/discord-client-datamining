/** chunk id: 804630 params = (module,exports,require) **/
n.d(t, {
    Gf: () => v,
    Tf: () => N,
    _Q: () => I,
    vP: () => C
});
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    r = n(990078),
    c = n(397927),
    o = n(672979),
    d = n(90644),
    u = n(432166),
    p = n(587895),
    m = n(769015),
    h = n(172710),
    g = n(763758),
    _ = n(139675),
    A = n(486020),
    f = n(652215),
    x = n(985018),
    b = n(257081);

function I(e) {
    return ({
        [f.$pd.PLAYING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.COMPETING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.WATCHING]: x.intl.string(x.t.xeqvTg),
        [f.$pd.LISTENING]: x.intl.string(x.t.ep6av7)
    })[e] ?? x.intl.string(x.t["1+boPi"])
}

function v(e, t, n) {
    let a;
    return null != t && (0, d.A)(t) ? {
        isSpotify: !0,
        name: t.details ?? t.name ?? "",
        type: f.$pd.LISTENING,
        assets: t.assets ?? void 0,
        applicationId: t.application_id,
        state: t.state ?? void 0,
        syncId: t.sync_id ?? void 0,
        timestamps: t.timestamps ?? void 0,
        rawActivity: t,
        userId: e
    } : null != n ? (a = t?.type === f.$pd.WATCHING ? f.$pd.WATCHING : f.$pd.PLAYING, {
        isSpotify: !1,
        isEmbedded: !0,
        isGame: !1,
        name: n.application.name,
        type: a,
        applicationId: n.application.id,
        embeddedIconUrl: A.Ay.getApplicationIconURL({
            id: n.application.id,
            icon: n.application.icon
        }) ?? void 0,
        embeddedApplicationName: n.application.name,
        assets: t?.assets ?? void 0,
        details: t?.details ?? void 0,
        state: t?.state ?? void 0,
        timestamps: t?.timestamps ?? void 0,
        userId: e
    }) : {
        isSpotify: !1,
        isEmbedded: !1,
        isGame: (0, o.A)(t),
        name: t?.name ?? "",
        type: t?.type ?? f.$pd.PLAYING,
        applicationId: t?.application_id,
        embeddedIconUrl: void 0,
        embeddedApplicationName: void 0,
        assets: t?.assets ?? void 0,
        details: t?.details ?? void 0,
        state: t?.state ?? void 0,
        timestamps: t?.timestamps ?? void 0,
        userId: e
    }
}

function C(e) {
    let {
        resolvedActivity: t,
        showHeader: n = !0
    } = e, {
        assets: i,
        applicationId: s,
        name: o,
        state: d,
        syncId: p,
        timestamps: m,
        userId: A,
        rawActivity: f
    } = t, x = i?.large_image ?? i?.small_image;
    return (0, a.jsxs)("div", {
        className: b.ec,
        children: [n ? (0, a.jsx)("div", {
            className: b.N1,
            children: (0, a.jsx)(c.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: I(t.type)
            })
        }) : null, (0, a.jsxs)("div", {
            className: b.Wh,
            children: [null != x ? (0, a.jsx)(r.m, {
                text: i?.large_text ?? null,
                position: "top",
                children: (0, a.jsx)(c.DUT, {
                    onClick: () => (0, h.QX)(f, A),
                    className: b.nf,
                    children: (0, a.jsx)("img", {
                        alt: i?.large_text ?? "",
                        src: (0, _.uD)(s, x, [128, 128]),
                        className: b.Sl
                    })
                })
            }) : null, (0, a.jsxs)("div", {
                className: b.wt,
                children: [null != o && o.length > 0 && (0, a.jsx)(c.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != p ? (0, a.jsx)(c.DUT, {
                        onClick: () => (0, h.Mp)(f),
                        className: b.nf,
                        children: o
                    }) : o
                }), null != d && d.length > 0 && (0, a.jsx)("div", {
                    className: l()(b.QJ, b.p9, b.Mo),
                    children: (0, a.jsx)(g.A, {
                        artists: d,
                        canOpen: null != p,
                        linkClassName: b.QJ,
                        onOpenSpotifyArtist: e => (0, h.mN)(f, A, e)
                    })
                })]
            })]
        }), m?.start != null && m?.end != null && (0, a.jsx)(u.A, {
            start: m.start,
            end: m.end,
            className: b.Jq,
            themed: !0,
            singleLine: !0
        })]
    })
}

function N(e) {
    let {
        resolvedActivity: t
    } = e, n = (0, s.bG)([p.A], () => null != t.applicationId ? p.A.getApplication(t.applicationId) : null, [t.applicationId]), {
        assets: i,
        isGame: l,
        isEmbedded: c
    } = t;
    if (null == i || null == i.large_image && null == i.small_image) return c && null != t.embeddedIconUrl ? (0, a.jsx)(r.m, {
        text: t.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, a.jsx)("img", {
            alt: t.embeddedApplicationName,
            src: t.embeddedIconUrl,
            className: b.Sl
        })
    }) : l ? (0, a.jsx)(m.A, {
        game: n,
        className: b.Sl
    }) : null;
    let o = i.large_image ?? i.small_image;
    return null != o ? (0, a.jsx)("img", {
        alt: i.large_text ?? "",
        src: (0, _.uD)(t.applicationId, o, [128, 128]),
        className: b.Sl
    }) : null
}