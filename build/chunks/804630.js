/** chunk id: 804630 params = (module,exports,require) **/
i.d(e, {
    Gf: () => T,
    Tf: () => N,
    _Q: () => I,
    vP: () => S
});
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(311907),
    r = i(990078),
    d = i(397927),
    o = i(672979),
    c = i(90644),
    u = i(432166),
    p = i(587895),
    m = i(769015),
    A = i(172710),
    h = i(763758),
    E = i(139675),
    g = i(486020),
    _ = i(652215),
    f = i(985018),
    v = i(257081);

function I(t) {
    return ({
        [_.$pd.PLAYING]: f.intl.string(f.t.J4MQFX),
        [_.$pd.COMPETING]: f.intl.string(f.t.J4MQFX),
        [_.$pd.WATCHING]: f.intl.string(f.t.xeqvTg),
        [_.$pd.LISTENING]: f.intl.string(f.t.ep6av7)
    })[t] ?? f.intl.string(f.t["1+boPi"])
}

function T(t, e, i) {
    let n;
    return null != e && (0, c.A)(e) ? {
        isSpotify: !0,
        name: e.details ?? e.name ?? "",
        type: _.$pd.LISTENING,
        assets: e.assets ?? void 0,
        applicationId: e.application_id,
        state: e.state ?? void 0,
        syncId: e.sync_id ?? void 0,
        timestamps: e.timestamps ?? void 0,
        rawActivity: e,
        userId: t
    } : null != i ? (n = e?.type === _.$pd.WATCHING ? _.$pd.WATCHING : _.$pd.PLAYING, {
        isSpotify: !1,
        isEmbedded: !0,
        isGame: !1,
        name: i.application.name,
        type: n,
        applicationId: i.application.id,
        embeddedIconUrl: g.Ay.getApplicationIconURL({
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
        isGame: (0, o.A)(e),
        name: e?.name ?? "",
        type: e?.type ?? _.$pd.PLAYING,
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

function S(t) {
    let {
        resolvedActivity: e,
        showHeader: i = !0
    } = t, {
        assets: a,
        applicationId: s,
        name: o,
        state: c,
        syncId: p,
        timestamps: m,
        userId: g,
        rawActivity: _
    } = e, f = a?.large_image ?? a?.small_image;
    return (0, n.jsxs)("div", {
        className: v.ec,
        children: [i ? (0, n.jsx)("div", {
            className: v.N1,
            children: (0, n.jsx)(d.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: I(e.type)
            })
        }) : null, (0, n.jsxs)("div", {
            className: v.Wh,
            children: [null != f ? (0, n.jsx)(r.m, {
                text: a?.large_text ?? null,
                position: "top",
                children: (0, n.jsx)(d.DUT, {
                    onClick: () => (0, A.QX)(_, g),
                    className: v.nf,
                    children: (0, n.jsx)("img", {
                        alt: a?.large_text ?? "",
                        src: (0, E.uD)(s, f, [128, 128]),
                        className: v.Sl
                    })
                })
            }) : null, (0, n.jsxs)("div", {
                className: v.wt,
                children: [null != o && o.length > 0 && (0, n.jsx)(d.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != p ? (0, n.jsx)(d.DUT, {
                        onClick: () => (0, A.Mp)(_),
                        className: v.nf,
                        children: o
                    }) : o
                }), null != c && c.length > 0 && (0, n.jsx)("div", {
                    className: l()(v.QJ, v.p9, v.Mo),
                    children: (0, n.jsx)(h.A, {
                        artists: c,
                        canOpen: null != p,
                        linkClassName: v.QJ,
                        onOpenSpotifyArtist: t => (0, A.mN)(_, g, t)
                    })
                })]
            })]
        }), m?.start != null && m?.end != null && (0, n.jsx)(u.A, {
            start: m.start,
            end: m.end,
            className: v.Jq,
            themed: !0,
            singleLine: !0
        })]
    })
}

function N(t) {
    let {
        resolvedActivity: e
    } = t, i = (0, s.bG)([p.A], () => null != e.applicationId ? p.A.getApplication(e.applicationId) : null, [e.applicationId]), {
        assets: a,
        isGame: l,
        isEmbedded: d
    } = e;
    if (null == a || null == a.large_image && null == a.small_image) return d && null != e.embeddedIconUrl ? (0, n.jsx)(r.m, {
        text: e.embeddedApplicationName,
        position: "top",
        asContainer: !0,
        children: (0, n.jsx)("img", {
            alt: e.embeddedApplicationName,
            src: e.embeddedIconUrl,
            className: v.Sl
        })
    }) : l ? (0, n.jsx)(m.A, {
        game: i,
        className: v.Sl
    }) : null;
    let o = a.large_image ?? a.small_image;
    return null != o ? (0, n.jsx)("img", {
        alt: a.large_text ?? "",
        src: (0, E.uD)(e.applicationId, o, [128, 128]),
        className: v.Sl
    }) : null
}