/** chunk id: 510059 params = (module,exports,require) **/
t.d(l, {
    A: () => C
});
var n = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(311907),
    r = t(990078),
    o = t(397927),
    d = t(573648),
    c = t(58149),
    u = t(681819),
    m = t(370480),
    p = t(169869),
    x = t(773669),
    A = t(486020),
    g = t(307600),
    f = t(652215),
    h = t(783419),
    j = t(985018),
    v = t(622376);

function I(e) {
    let {
        account: l,
        locale: t,
        userId: i
    } = e, s = l.metadata ?? {}, a = (0, m.An)(s[h.pK.CREATED_AT], t), x = d.A.get((0, u.ML)(l.type));
    return (0, n.jsx)(y, {
        renderAccountName: () => {
            let e = x?.getPlatformUserUrl?.(l);
            return null == e ? (0, n.jsx)(r.m, {
                overflowOnly: !0,
                text: l.name,
                children: (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: v.GW,
                    children: l.name
                })
            }) : (0, n.jsx)(o.MzZ, {
                href: e,
                className: v.Y2,
                useDefaultUnderlineStyles: !1,
                "aria-label": x?.name != null ? `${x.name}, ${l.name}, ${j.intl.string(j.t.q5jLJB)}` : `${l.name}, ${j.intl.string(j.t.q5jLJB)}`,
                onClick: t => {
                    (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
                        platform_type: l.type,
                        other_user_id: i
                    }), (0, g.h)({
                        href: e,
                        trusted: x?.type !== f.fg2.DOMAIN
                    }, t)
                },
                children: (0, n.jsxs)("div", {
                    className: v.vi,
                    children: [(0, n.jsx)(r.m, {
                        overflowOnly: !0,
                        text: l.name,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: v.GW,
                            children: l.name
                        })
                    }), (0, n.jsx)(o.I9m, {
                        size: "xs",
                        color: "currentColor"
                    })]
                })
            })
        },
        renderMetadata: () => l.type === f.fg2.REDDIT ? (0, p.xE)(s) : l.type === f.fg2.STEAM ? (0, p.dy)(s) : l.type === f.fg2.BLUESKY || l.type === f.fg2.MASTODON || l.type === f.fg2.TWITTER ? (0, p.ED)(s) : l.type === f.fg2.PAYPAL ? (0, p.gZ)(s) : l.type === f.fg2.EBAY ? (0, p.ub)(s) : l.type === f.fg2.TIKTOK ? (0, p.HU)(s) : null,
        platformIcon: x?.icon.lightPNG,
        platformName: x?.name,
        createdAtDate: a
    })
}

function N(e) {
    let {
        identityWithApplication: l
    } = e, {
        identity: t,
        application: i
    } = l;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let s = A.Ay.getApplicationIconURL({
        id: i.id,
        icon: i.icon
    });
    return (0, n.jsx)(y, {
        renderAccountName: () => (0, n.jsx)(r.m, {
            overflowOnly: !0,
            text: t.profile.username,
            children: (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: v.GW,
                children: t.profile.username
            })
        }),
        renderMetadata: () => null,
        platformIcon: s,
        platformName: i.name,
        createdAtDate: void 0
    })
}

function y(e) {
    let {
        renderAccountName: l,
        renderMetadata: t,
        platformName: i,
        platformIcon: s,
        createdAtDate: a
    } = e;
    return (0, n.jsxs)("li", {
        className: v.FI,
        children: [(0, n.jsx)(r.m, {
            __unsupportedReactNodeAsText: i,
            children: (0, n.jsx)("div", {
                className: v.k_,
                children: (0, n.jsx)("img", {
                    alt: j.intl.formatToPlainString(j.t.rtm15P, {
                        name: i
                    }),
                    className: v.tV,
                    src: s
                })
            })
        }), (0, n.jsxs)("div", {
            className: v.Hd,
            children: [(0, n.jsxs)("div", {
                children: [l(), null != a && (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    children: j.intl.format(j.t["9rfonh"], {
                        date: a
                    })
                })]
            }), (0, n.jsx)("div", {
                className: v.yu,
                children: t()
            })]
        })]
    })
}

function C(e) {
    let {
        connections: l,
        applicationIdentities: t,
        userId: i,
        className: r
    } = e, o = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === l.length && 0 === t.length ? null : (0, n.jsxs)("ul", {
        className: s()(v.kL, r),
        children: [l.map(e => (0, n.jsx)(I, {
            account: e,
            userId: i,
            locale: o
        }, `${e.type}:${e.id}`)), t?.map(e => (0, n.jsx)(N, {
            identityWithApplication: e
        }, e.identity.application_id))]
    })
}