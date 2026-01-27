/** Chunk was on 39048 **/
/** chunk id: 33888, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(649640),
    u = n(946274),
    g = n(71393),
    m = n(486020),
    p = n(835517),
    f = n(997509),
    h = n(652215),
    b = n(282435),
    x = n(985018),
    j = n(168938);

function _(e) {
    let {
        profile: t,
        canManageGuild: n,
        handleClick: i,
        hasCustomBanner: l
    } = e, a = (0, d.b2)(), u = (0, d.aG)({
        profile: t,
        defaultColor: a.hex(),
        forceDefaultColor: !1
    });
    return (0, r.jsx)(o.m, {
        asContainer: !0,
        text: x.intl.string(x.t.W4Nd7Q),
        children: (0, r.jsx)(c.DUT, {
            "aria-disabled": !n,
            tabIndex: n ? 0 : -1,
            "aria-label": x.intl.string(x.t.W4Nd7Q),
            onClick: n ? i : void 0,
            style: {
                background: (0, d.n6)(u)
            },
            className: s()(j.DB, {
                [j.r9]: !n
            }),
            children: (0, r.jsx)("div", {
                className: s()({
                    [j.z2]: !l && null == t.brandColorPrimary
                })
            })
        })
    })
}

function O(e) {
    let {
        isDiscoverable: t,
        profile: n,
        onCustomBannerChange: l,
        canManageGuild: a
    } = e, o = null != n.customBanner, d = i.useMemo(() => {
        if (null == n.customBanner) return null;
        let e = n.customBanner;
        return m.aq.test(e) ? e : m.Ay.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.customBanner,
            size: 300 * (0, p.A)()
        })
    }, [n]);
    if (!t) return null;
    let g = null != d ? (0, r.jsx)("img", {
        className: j.qX,
        src: d,
        alt: "",
        "aria-hidden": !0
    }) : (0, r.jsx)(c.kpT, {
        size: "md"
    });
    return (0, r.jsx)("div", {
        className: j.sK,
        children: (0, r.jsx)(c.vN3, {
            within: !0,
            children: (0, r.jsx)("div", {
                className: s()(j.K7, {
                    [j.e7]: o
                }),
                children: (0, r.jsxs)("div", {
                    className: s()(j.vw, {
                        [j.r9]: !a
                    }),
                    children: [g, (0, r.jsx)("div", {
                        className: j.Lw
                    }), (0, r.jsx)(c.R2l, {
                        size: "custom",
                        className: j.QY,
                        width: 20,
                        height: 20,
                        color: "white"
                    }), (0, r.jsx)(u.Ay, {
                        multiple: !1,
                        tabIndex: 0,
                        onChange: l,
                        disabled: !a
                    })]
                })
            })
        })
    })
}

function v(e) {
    var t;
    let {
        profile: n,
        onCustomBannerChange: l,
        canManageGuild: u
    } = e, m = (0, a.bG)([g.A], () => g.A.getGuild(n.id)), p = null != (t = null == m ? void 0 : m.features.has(h.GuildFeatures.DISCOVERABLE)) && t, v = n.id, y = i.useCallback(e => () => {
        f.A.updateGuildProfile(v, {
            brandColorPrimary: e,
            customBanner: null
        })
    }, [v]), A = i.useCallback(e => (!p || null == n.customBanner) && e === n.brandColorPrimary, [n, p]);
    return (0, r.jsx)(c.D0$, {
        label: x.intl.string(x.t.BSVog8),
        children: (0, r.jsxs)("div", {
            className: j.Vg,
            children: [(0, r.jsx)(_, {
                profile: n,
                canManageGuild: u,
                handleClick: y(null),
                hasCustomBanner: p && null != n.customBanner
            }), b.aA.map(e => {
                let {
                    name: t,
                    color: n
                } = e;
                return (0, r.jsx)(o.m, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: t,
                    children: (0, r.jsx)(c.DUT, {
                        "aria-disabled": !u,
                        tabIndex: u ? 0 : -1,
                        "aria-label": t,
                        onClick: u ? y(n) : void 0,
                        style: {
                            background: (0, d.n6)(n)
                        },
                        className: s()(j.DB, {
                            [j.r9]: !u
                        }),
                        children: (0, r.jsx)("div", {
                            className: s()({
                                [j.z2]: A(n)
                            })
                        })
                    })
                }, t)
            }), (0, r.jsx)(O, {
                canManageGuild: u,
                isDiscoverable: p,
                profile: n,
                onCustomBannerChange: l
            })]
        })
    })
}