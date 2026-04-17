/** chunk id: 804630 params = (module,exports,require) **/
n.d(t, {
    Gf: () => C,
    Tf: () => T,
    _Q: () => I,
    vP: () => N
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(672979),
    c = n(90644),
    u = n(432166),
    h = n(587895),
    A = n(769015),
    _ = n(172710),
    m = n(763758),
    p = n(139675),
    g = n(486020),
    f = n(652215),
    E = n(985018),
    x = n(145225);

function I(e) {
    return ({
        [f.$pd.PLAYING]: E.intl.string(E.t.J4MQFX),
        [f.$pd.COMPETING]: E.intl.string(E.t.J4MQFX),
        [f.$pd.WATCHING]: E.intl.string(E.t.xeqvTg),
        [f.$pd.LISTENING]: E.intl.string(E.t.ep6av7)
    })[e] ?? E.intl.string(E.t["1+boPi"])
}

function C(e, t, n) {
    let i;
    return null != t && (0, c.A)(t) ? {
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
        embeddedIconUrl: g.Ay.getApplicationIconURL({
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
        isGame: (0, d.A)(t),
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

function N(e) {
    let {
        resolvedActivity: t,
        showHeader: n = !0
    } = e, {
        assets: l,
        applicationId: a,
        name: d,
        state: c,
        syncId: h,
        timestamps: A,
        userId: g,
        rawActivity: f
    } = t, E = l?.large_image ?? l?.small_image;
    return (0, i.jsxs)("div", {
        className: x.ec,
        children: [n ? (0, i.jsx)("div", {
            className: x.N1,
            children: (0, i.jsx)(o.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: I(t.type)
            })
        }) : null, (0, i.jsxs)("div", {
            className: x.Wh,
            children: [null != E ? (0, i.jsx)(r.m, {
                text: l?.large_text ?? null,
                position: "top",
                children: (0, i.jsx)(o.DUT, {
                    onClick: () => (0, _.QX)(f, g),
                    className: x.nf,
                    children: (0, i.jsx)("img", {
                        alt: l?.large_text ?? "",
                        src: (0, p.uD)(a, E, [128, 128]),
                        className: x.Sl
                    })
                })
            }) : null, (0, i.jsxs)("div", {
                className: x.wt,
                children: [null != d && d.length > 0 && (0, i.jsx)(o.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != h ? (0, i.jsx)(o.DUT, {
                        onClick: () => (0, _.Mp)(f),
                        className: x.nf,
                        children: d
                    }) : d
                }), null != c && c.length > 0 && (0, i.jsx)("div", {
                    className: s()(x.QJ, x.p9, x.Mo),
                    children: (0, i.jsx)(m.A, {
                        artists: c,
                        canOpen: null != h,
                        linkClassName: x.QJ,
                        onOpenSpotifyArtist: e => (0, _.mN)(f, g, e)
                    })
                })]
            })]
        }), A?.start != null && A?.end != null && (0, i.jsx)(u.A, {
            start: A.start,
            end: A.end,
            className: x.Jq,
            themed: !0,
            singleLine: !0
        })]
    })
}

function T(e) {
    let {
        resolvedActivity: t
    } = e, n = (0, a.bG)([h.A], () => null != t.applicationId ? h.A.getApplication(t.applicationId) : null, [t.applicationId]), {
        assets: l,
        isGame: s,
        isEmbedded: o
    } = t;
    if (null == l || null == l.large_image && null == l.small_image) return o && null != t.embeddedIconUrl ? (0, i.jsx)(r.m, {
        text: t.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, i.jsx)("img", {
            alt: t.embeddedApplicationName,
            src: t.embeddedIconUrl,
            className: x.Sl
        })
    }) : s ? (0, i.jsx)(A.A, {
        game: n,
        className: x.Sl
    }) : null;
    let d = l.large_image ?? l.small_image;
    return null != d ? (0, i.jsx)("img", {
        alt: l.large_text ?? "",
        src: (0, p.uD)(t.applicationId, d, [128, 128]),
        className: x.Sl
    }) : null
}