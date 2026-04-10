/** chunk id: 804630 params = (module,exports,require) **/
i.d(t, {
    Gf: () => N,
    Tf: () => v,
    _Q: () => I,
    vP: () => C
});
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(311907),
    r = i(990078),
    c = i(397927),
    o = i(672979),
    d = i(90644),
    u = i(432166),
    p = i(587895),
    m = i(769015),
    _ = i(172710),
    h = i(763758),
    g = i(139675),
    A = i(486020),
    f = i(652215),
    x = i(985018),
    b = i(257081);

function I(e) {
    return ({
        [f.$pd.PLAYING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.COMPETING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.WATCHING]: x.intl.string(x.t.xeqvTg),
        [f.$pd.LISTENING]: x.intl.string(x.t.ep6av7)
    })[e] ?? x.intl.string(x.t["1+boPi"])
}

function N(e, t, i) {
    let n;
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
    } : null != i ? (n = t?.type === f.$pd.WATCHING ? f.$pd.WATCHING : f.$pd.PLAYING, {
        isSpotify: !1,
        isEmbedded: !0,
        isGame: !1,
        name: i.application.name,
        type: n,
        applicationId: i.application.id,
        embeddedIconUrl: A.Ay.getApplicationIconURL({
            id: i.application.id,
            icon: i.application.icon
        }) ?? void 0,
        embeddedApplicationName: i.application.name,
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
        showHeader: i = !0
    } = e, {
        assets: a,
        applicationId: s,
        name: o,
        state: d,
        syncId: p,
        timestamps: m,
        userId: A,
        rawActivity: f
    } = t, x = a?.large_image ?? a?.small_image;
    return (0, n.jsxs)("div", {
        className: b.ec,
        children: [i ? (0, n.jsx)("div", {
            className: b.N1,
            children: (0, n.jsx)(c.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: I(t.type)
            })
        }) : null, (0, n.jsxs)("div", {
            className: b.Wh,
            children: [null != x ? (0, n.jsx)(r.m, {
                text: a?.large_text ?? null,
                position: "top",
                children: (0, n.jsx)(c.DUT, {
                    onClick: () => (0, _.QX)(f, A),
                    className: b.nf,
                    children: (0, n.jsx)("img", {
                        alt: a?.large_text ?? "",
                        src: (0, g.uD)(s, x, [128, 128]),
                        className: b.Sl
                    })
                })
            }) : null, (0, n.jsxs)("div", {
                className: b.wt,
                children: [null != o && o.length > 0 && (0, n.jsx)(c.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != p ? (0, n.jsx)(c.DUT, {
                        onClick: () => (0, _.Mp)(f),
                        className: b.nf,
                        children: o
                    }) : o
                }), null != d && d.length > 0 && (0, n.jsx)("div", {
                    className: l()(b.QJ, b.p9, b.Mo),
                    children: (0, n.jsx)(h.A, {
                        artists: d,
                        canOpen: null != p,
                        linkClassName: b.QJ,
                        onOpenSpotifyArtist: e => (0, _.mN)(f, A, e)
                    })
                })]
            })]
        }), m?.start != null && m?.end != null && (0, n.jsx)(u.A, {
            start: m.start,
            end: m.end,
            className: b.Jq,
            themed: !0,
            singleLine: !0
        })]
    })
}

function v(e) {
    let {
        resolvedActivity: t
    } = e, i = (0, s.bG)([p.A], () => null != t.applicationId ? p.A.getApplication(t.applicationId) : null, [t.applicationId]), {
        assets: a,
        isGame: l,
        isEmbedded: c
    } = t;
    if (null == a || null == a.large_image && null == a.small_image) return c && null != t.embeddedIconUrl ? (0, n.jsx)(r.m, {
        text: t.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, n.jsx)("img", {
            alt: t.embeddedApplicationName,
            src: t.embeddedIconUrl,
            className: b.Sl
        })
    }) : l ? (0, n.jsx)(m.A, {
        game: i,
        className: b.Sl
    }) : null;
    let o = a.large_image ?? a.small_image;
    return null != o ? (0, n.jsx)("img", {
        alt: a.large_text ?? "",
        src: (0, g.uD)(t.applicationId, o, [128, 128]),
        className: b.Sl
    }) : null
}