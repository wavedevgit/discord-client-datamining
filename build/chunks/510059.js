/** chunk id: 510059 params = (module,exports,require) **/
l.d(n, {
    A: () => C
});
var t = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(311907),
    r = l(990078),
    o = l(397927),
    d = l(573648),
    c = l(58149),
    u = l(681819),
    m = l(370480),
    A = l(169869),
    p = l(773669),
    x = l(486020),
    g = l(307600),
    f = l(652215),
    h = l(783419),
    v = l(985018),
    j = l(985176);

function I(e) {
    let {
        account: n,
        locale: l,
        userId: i
    } = e, s = n.metadata ?? {}, a = (0, m.An)(s[h.pK.CREATED_AT], l), p = d.A.get((0, u.ML)(n.type));
    return (0, t.jsx)(y, {
        renderAccountName: () => {
            let e = p?.getPlatformUserUrl?.(n);
            return null == e ? (0, t.jsx)(r.m, {
                overflowOnly: !0,
                text: n.name,
                children: (0, t.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: j.GW,
                    children: n.name
                })
            }) : (0, t.jsx)(o.MzZ, {
                href: e,
                className: j.Y2,
                useDefaultUnderlineStyles: !1,
                "aria-label": p?.name != null ? `${p.name}, ${n.name}, ${v.intl.string(v.t.q5jLJB)}` : `${n.name}, ${v.intl.string(v.t.q5jLJB)}`,
                onClick: l => {
                    (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
                        platform_type: n.type,
                        other_user_id: i
                    }), (0, g.h)({
                        href: e,
                        trusted: p?.type !== f.fg2.DOMAIN
                    }, l)
                },
                children: (0, t.jsxs)("div", {
                    className: j.vi,
                    children: [(0, t.jsx)(r.m, {
                        overflowOnly: !0,
                        text: n.name,
                        children: (0, t.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: j.GW,
                            children: n.name
                        })
                    }), (0, t.jsx)(o.I9m, {
                        size: "xs",
                        color: "currentColor"
                    })]
                })
            })
        },
        renderMetadata: () => n.type === f.fg2.REDDIT ? (0, A.xE)(s) : n.type === f.fg2.STEAM ? (0, A.dy)(s) : n.type === f.fg2.BLUESKY || n.type === f.fg2.MASTODON || n.type === f.fg2.TWITTER ? (0, A.ED)(s) : n.type === f.fg2.PAYPAL ? (0, A.gZ)(s) : n.type === f.fg2.EBAY ? (0, A.ub)(s) : n.type === f.fg2.TIKTOK ? (0, A.HU)(s) : null,
        platformIcon: p?.icon.lightPNG,
        platformName: p?.name,
        createdAtDate: a
    })
}

function N(e) {
    let {
        identityWithApplication: n
    } = e, {
        identity: l,
        application: i
    } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let s = x.Ay.getApplicationIconURL({
        id: i.id,
        icon: i.icon
    });
    return (0, t.jsx)(y, {
        renderAccountName: () => (0, t.jsx)(r.m, {
            overflowOnly: !0,
            text: l.profile.username,
            children: (0, t.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: j.GW,
                children: l.profile.username
            })
        }),
        renderMetadata: () => null,
        platformIcon: s,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0
    })
}

function y(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: a,
        createdAtDate: d,
        applyIconBorderRadius: c = !1
    } = e;
    return (0, t.jsxs)("li", {
        className: j.FI,
        children: [(0, t.jsx)(r.m, {
            __unsupportedReactNodeAsText: i,
            children: (0, t.jsx)("div", {
                className: j.k_,
                children: (0, t.jsx)("img", {
                    alt: v.intl.formatToPlainString(v.t.rtm15P, {
                        name: i
                    }),
                    className: s()(j.tV, c ? j.sN : null),
                    src: a
                })
            })
        }), (0, t.jsxs)("div", {
            className: j.Hd,
            children: [(0, t.jsxs)("div", {
                children: [n(), null != d && (0, t.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: v.intl.format(v.t["9rfonh"], {
                        date: d
                    })
                })]
            }), (0, t.jsx)("div", {
                className: j.yu,
                children: l()
            })]
        })]
    })
}

function C(e) {
    let {
        connections: n,
        applicationIdentities: l,
        userId: i,
        className: r
    } = e, o = (0, a.bG)([p.default], () => p.default.locale);
    return 0 === n.length && 0 === l.length ? null : (0, t.jsxs)("ul", {
        className: s()(j.kL, r),
        children: [n.map(e => (0, t.jsx)(I, {
            account: e,
            userId: i,
            locale: o
        }, `${e.type}:${e.id}`)), l?.map(e => (0, t.jsx)(N, {
            identityWithApplication: e
        }, e.identity.application_id))]
    })
}