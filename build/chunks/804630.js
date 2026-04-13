/** chunk id: 804630 params = (module,exports,require) **/
n.d(t, {
    Gf: () => N,
    Tf: () => C,
    _Q: () => b,
    vP: () => v
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(990078),
    c = n(397927),
    o = n(672979),
    d = n(90644),
    u = n(432166),
    p = n(587895),
    m = n(769015),
    h = n(172710),
    _ = n(763758),
    g = n(139675),
    A = n(486020),
    f = n(652215),
    x = n(985018),
    I = n(257081);

function b(e) {
    return ({
        [f.$pd.PLAYING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.COMPETING]: x.intl.string(x.t.J4MQFX),
        [f.$pd.WATCHING]: x.intl.string(x.t.xeqvTg),
        [f.$pd.LISTENING]: x.intl.string(x.t.ep6av7)
    })[e] ?? x.intl.string(x.t["1+boPi"])
}

function N(e, t, n) {
    let i;
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
    } : null != n ? (i = t?.type === f.$pd.WATCHING ? f.$pd.WATCHING : f.$pd.PLAYING, {
        isSpotify: !1,
        isEmbedded: !0,
        isGame: !1,
        name: n.application.name,
        type: i,
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

function v(e) {
    let {
        resolvedActivity: t,
        showHeader: n = !0
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
    return (0, i.jsxs)("div", {
        className: I.ec,
        children: [n ? (0, i.jsx)("div", {
            className: I.N1,
            children: (0, i.jsx)(c.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: b(t.type)
            })
        }) : null, (0, i.jsxs)("div", {
            className: I.Wh,
            children: [null != x ? (0, i.jsx)(r.m, {
                text: a?.large_text ?? null,
                position: "top",
                children: (0, i.jsx)(c.DUT, {
                    onClick: () => (0, h.QX)(f, A),
                    className: I.nf,
                    children: (0, i.jsx)("img", {
                        alt: a?.large_text ?? "",
                        src: (0, g.uD)(s, x, [128, 128]),
                        className: I.Sl
                    })
                })
            }) : null, (0, i.jsxs)("div", {
                className: I.wt,
                children: [null != o && o.length > 0 && (0, i.jsx)(c.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != p ? (0, i.jsx)(c.DUT, {
                        onClick: () => (0, h.Mp)(f),
                        className: I.nf,
                        children: o
                    }) : o
                }), null != d && d.length > 0 && (0, i.jsx)("div", {
                    className: l()(I.QJ, I.p9, I.Mo),
                    children: (0, i.jsx)(_.A, {
                        artists: d,
                        canOpen: null != p,
                        linkClassName: I.QJ,
                        onOpenSpotifyArtist: e => (0, h.mN)(f, A, e)
                    })
                })]
            })]
        }), m?.start != null && m?.end != null && (0, i.jsx)(u.A, {
            start: m.start,
            end: m.end,
            className: I.Jq,
            themed: !0,
            singleLine: !0
        })]
    })
}

function C(e) {
    let {
        resolvedActivity: t
    } = e, n = (0, s.bG)([p.A], () => null != t.applicationId ? p.A.getApplication(t.applicationId) : null, [t.applicationId]), {
        assets: a,
        isGame: l,
        isEmbedded: c
    } = t;
    if (null == a || null == a.large_image && null == a.small_image) return c && null != t.embeddedIconUrl ? (0, i.jsx)(r.m, {
        text: t.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, i.jsx)("img", {
            alt: t.embeddedApplicationName,
            src: t.embeddedIconUrl,
            className: I.Sl
        })
    }) : l ? (0, i.jsx)(m.A, {
        game: n,
        className: I.Sl
    }) : null;
    let o = a.large_image ?? a.small_image;
    return null != o ? (0, i.jsx)("img", {
        alt: a.large_text ?? "",
        src: (0, g.uD)(t.applicationId, o, [128, 128]),
        className: I.Sl
    }) : null
}