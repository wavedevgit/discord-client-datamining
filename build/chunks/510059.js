/** chunk id: 510059 params = (module,exports,require) **/
l.d(n, {
    A: () => C
});
var i = l(627968);
l(64700);
var t = l(503698),
    s = l.n(t),
    a = l(311907),
    r = l(990078),
    o = l(397927),
    d = l(573648),
    c = l(58149),
    u = l(681819),
    m = l(370480),
    p = l(169869),
    x = l(773669),
    A = l(486020),
    g = l(307600),
    f = l(652215),
    h = l(783419),
    v = l(985018),
    j = l(622376);

function I(e) {
    let {
        account: n,
        locale: l,
        userId: t
    } = e, s = n.metadata ?? {}, a = (0, m.An)(s[h.pK.CREATED_AT], l), x = d.A.get((0, u.ML)(n.type));
    return (0, i.jsx)(y, {
        renderAccountName: () => {
            let e = x?.getPlatformUserUrl?.(n);
            return null == e ? (0, i.jsx)(r.m, {
                overflowOnly: !0,
                text: n.name,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: j.GW,
                    children: n.name
                })
            }) : (0, i.jsx)(o.MzZ, {
                href: e,
                className: j.Y2,
                useDefaultUnderlineStyles: !1,
                "aria-label": x?.name != null ? `${x.name}, ${n.name}, ${v.intl.string(v.t.q5jLJB)}` : `${n.name}, ${v.intl.string(v.t.q5jLJB)}`,
                onClick: l => {
                    (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
                        platform_type: n.type,
                        other_user_id: t
                    }), (0, g.h)({
                        href: e,
                        trusted: x?.type !== f.fg2.DOMAIN
                    }, l)
                },
                children: (0, i.jsxs)("div", {
                    className: j.vi,
                    children: [(0, i.jsx)(r.m, {
                        overflowOnly: !0,
                        text: n.name,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: j.GW,
                            children: n.name
                        })
                    }), (0, i.jsx)(o.I9m, {
                        size: "xs",
                        color: "currentColor"
                    })]
                })
            })
        },
        renderMetadata: () => n.type === f.fg2.REDDIT ? (0, p.xE)(s) : n.type === f.fg2.STEAM ? (0, p.dy)(s) : n.type === f.fg2.BLUESKY || n.type === f.fg2.MASTODON || n.type === f.fg2.TWITTER ? (0, p.ED)(s) : n.type === f.fg2.PAYPAL ? (0, p.gZ)(s) : n.type === f.fg2.EBAY ? (0, p.ub)(s) : n.type === f.fg2.TIKTOK ? (0, p.HU)(s) : null,
        platformIcon: x?.icon.lightPNG,
        platformName: x?.name,
        createdAtDate: a
    })
}

function N(e) {
    let {
        identityWithApplication: n
    } = e, {
        identity: l,
        application: t
    } = n;
    if (null == l.profile || null == l.profile.username || null == t) return null;
    let s = A.Ay.getApplicationIconURL({
        id: t.id,
        icon: t.icon
    });
    return (0, i.jsx)(y, {
        renderAccountName: () => (0, i.jsx)(r.m, {
            overflowOnly: !0,
            text: l.profile.username,
            children: (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: j.GW,
                children: l.profile.username
            })
        }),
        renderMetadata: () => null,
        platformIcon: s,
        platformName: t.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0
    })
}

function y(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: t,
        platformIcon: a,
        createdAtDate: d,
        applyIconBorderRadius: c = !1
    } = e;
    return (0, i.jsxs)("li", {
        className: j.FI,
        children: [(0, i.jsx)(r.m, {
            __unsupportedReactNodeAsText: t,
            children: (0, i.jsx)("div", {
                className: j.k_,
                children: (0, i.jsx)("img", {
                    alt: v.intl.formatToPlainString(v.t.rtm15P, {
                        name: t
                    }),
                    className: s()(j.tV, c ? j.sN : null),
                    src: a
                })
            })
        }), (0, i.jsxs)("div", {
            className: j.Hd,
            children: [(0, i.jsxs)("div", {
                children: [n(), null != d && (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: v.intl.format(v.t["9rfonh"], {
                        date: d
                    })
                })]
            }), (0, i.jsx)("div", {
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
        userId: t,
        className: r
    } = e, o = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === n.length && 0 === l.length ? null : (0, i.jsxs)("ul", {
        className: s()(j.kL, r),
        children: [n.map(e => (0, i.jsx)(I, {
            account: e,
            userId: t,
            locale: o
        }, `${e.type}:${e.id}`)), l?.map(e => (0, i.jsx)(N, {
            identityWithApplication: e
        }, e.identity.application_id))]
    })
}