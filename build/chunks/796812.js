/** Chunk was on web.js **/
/** chunk id: 796812, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => T
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(990078),
    u = n(397927),
    d = n(610411),
    f = n(894010),
    p = n(495756),
    _ = n(486020),
    h = n(541830),
    m = n(409626),
    g = n(692969),
    E = n(503364),
    y = n(985018),
    b = n(643850);

function O(e) {
    let {
        detectedGame: t
    } = e, n = i.useMemo(() => {
        if (null == t) return "";
        let {
            artwork: e,
            screenshots: n
        } = t;
        if (e.length > 0) {
            let t = Math.floor(Math.random() * e.length);
            return e[t]
        }
        if (n.length > 0) {
            let e = Math.floor(Math.random() * n.length);
            return n[e]
        }
        return ""
    }, [t]);
    return (0, r.jsx)("div", {
        className: b.is,
        style: null != n && n.length > 0 ? {
            backgroundImage: 'url("'.concat(n, '")')
        } : {
            backgroundColor: u.LU0.colors.BACKGROUND_BRAND.css
        }
    })
}

function v(e) {
    let {
        application: t
    } = e, n = null == t ? void 0 : t.getIconURL(160, _.QB ? "webp" : "png");
    return (0, r.jsx)("div", {
        className: b.zc,
        children: null != n && n.length > 0 ? (0, r.jsx)("img", {
            className: b.Gt,
            src: n,
            height: 80,
            alt: y.intl.formatToPlainString(y.t["nh+jWk"], {
                game: t.name
            })
        }) : (0, r.jsx)(u._7Z, {
            size: "lg",
            className: b.ct,
            color: u.LU0.colors.BACKGROUND_SURFACE_HIGH,
            style: {
                backgroundColor: u.LU0.colors.BACKGROUND_BRAND.css
            }
        })
    })
}

function A(e) {
    var t;
    let {
        application: n,
        detectedGame: a
    } = e, s = i.useMemo(() => null == a ? void 0 : a.genres.map(h.du).join(", "), [a]), l = null != (t = a.name) ? t : null == n ? void 0 : n.name;
    return (0, r.jsxs)("div", {
        className: b.wR,
        children: [(0, r.jsx)(o.DZT, {
            variant: "heading-lg/bold",
            color: "text-strong",
            children: l
        }), (0, r.jsx)(o.EYj, {
            variant: "text-xs/medium",
            color: "text-subtle",
            children: s
        })]
    })
}

function I(e) {
    var t;
    let {
        detectedGame: n,
        openFullGameProfile: i
    } = e;
    return (0, r.jsxs)("div", {
        className: b.IP,
        children: [(0, r.jsxs)("div", {
            className: b.I8,
            children: [(0, r.jsx)(o.EYj, {
                variant: "text-sm/medium",
                color: "text-strong",
                lineClamp: 3,
                children: null != (t = n.summaryLocalized) ? t : n.summary
            }), (0, r.jsx)(u.DUT, {
                className: b.vk,
                onClick: i,
                children: (0, r.jsx)(o.EYj, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: y.intl.string(y.t.lBeKY2)
                })
            })]
        }), (0, r.jsx)(u.Button, {
            variant: "secondary",
            size: "sm",
            onClick: i,
            text: "View Game Profile",
            fullWidth: !0
        })]
    })
}

function S(e) {
    let {
        application: t
    } = e, n = (0, l.bG)([p.A], () => p.A.getMute(t.id)), a = i.useMemo(() => n ? y.intl.string(y.t.tpvw4T) : y.intl.string(y.t["6EwEwp"]), [n]);
    return (0, r.jsxs)("div", {
        className: b.fc,
        children: [(0, r.jsx)(c.m, {
            asContainer: !0,
            tag: "span",
            text: a,
            "aria-label": a,
            delay: 750,
            children: (0, r.jsx)(u.DUT, {
                className: b.hP,
                "aria-label": a,
                onClick: () => {
                    (0, d.i1)({
                        gameName: t.name,
                        applicationId: t.id,
                        label: n ? d.VD.UNMUTED : d.VD.MUTED,
                        source: d.eh.MINI_GAME_PROFILE_BELL_ICON
                    }), (0, f.b)(t.id, !n)
                },
                children: n ? (0, r.jsx)(u.a_I, {
                    size: "xs",
                    color: u.LU0.colors.WHITE
                }) : (0, r.jsx)(u.XFE, {
                    size: "xs",
                    color: u.LU0.colors.WHITE
                })
            })
        }), (0, r.jsx)(E.A, {
            applicationId: t.id,
            className: b.hP
        })]
    })
}

function T(e) {
    let {
        application: t,
        detectedGame: n,
        className: a,
        onClose: o
    } = e, l = (0, g.A)({
        location: "MiniGameProfile",
        applicationId: t.id,
        source: m.Ob.MiniGameProfile,
        trackEntryPointImpression: !0,
        sourceUserId: void 0
    }, {}), c = i.useCallback(e => {
        null == o || o(), null == l || l(e)
    }, [o, l]);
    return (0, r.jsxs)("div", {
        className: s()(b.kL, a),
        children: [(0, r.jsx)(O, {
            detectedGame: n
        }), (0, r.jsx)(S, {
            application: t
        }), (0, r.jsx)(v, {
            application: t
        }), (0, r.jsx)(A, {
            application: t,
            detectedGame: n
        }), (0, r.jsx)(I, {
            application: t,
            detectedGame: n,
            openFullGameProfile: c
        })]
    })
}