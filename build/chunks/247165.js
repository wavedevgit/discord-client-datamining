/** Chunk was on 28636 **/
/** chunk id: 247165, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(747238), n(938796);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(9578),
    c = n(549711),
    d = n(123791),
    u = n(55926),
    p = n(311321),
    h = n(163437),
    m = n(67480),
    g = n(412461),
    _ = n(656106),
    b = n(435220),
    f = n(652215),
    x = n(985018),
    v = n(70345);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function A(e) {
    let {
        application: t
    } = e;
    return (0, r.jsxs)("div", {
        className: v.ZM,
        children: [(0, r.jsx)(y, {
            application: t
        }), (0, r.jsx)(O, {
            application: t
        })]
    })
}

function y(e) {
    let {
        application: t
    } = e, {
        subscriptions: n,
        otps: l
    } = (0, d.C)(t.id);
    return (0, r.jsxs)("div", {
        className: v.ZM,
        children: [n.length > 0 && (0, r.jsxs)("div", {
            className: v.dD,
            children: [(0, r.jsx)(p.A, {
                subscriptions: n,
                color: "text-strong"
            }), (0, r.jsx)("div", {
                className: v.ZE,
                children: n.map(e => {
                    let n = (0, h.bg)(e.skuFlags) ? "user" : "guild";
                    return (0, r.jsx)(u.B4, {
                        appId: t.id,
                        listing: e,
                        subscriptionType: n,
                        onDetails: () => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                    }, e.id)
                })
            })]
        }), l.length > 0 && (0, r.jsxs)("div", {
            className: v.dD,
            children: [(0, r.jsx)(i.DZT, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.yUGTs8)
            }), (0, r.jsx)("div", {
                className: v.ZE,
                children: l.map(e => (0, r.jsx)(u.B8, {
                    skuId: e.skuId,
                    appId: t.id,
                    onDetails: () => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                }, e.id))
            })]
        }), (0, r.jsx)(c.A, {
            path: f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            exact: !0,
            render: e => (0, r.jsx)(C, j({}, e))
        })]
    })
}

function C(e) {
    let {
        match: {
            params: {
                applicationId: t,
                skuId: i
            }
        }
    } = e, o = (0, a.bG)([m.A], () => m.A.get(i), [i]), c = (0, a.bG)([m.A], () => null != i ? m.A.getParentSKU(i) : void 0, [i]), d = l.useId(), u = l.useCallback(() => (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE)), [t]);
    return l.useLayoutEffect(() => {
        var e;
        switch (null == o ? void 0 : o.type) {
            case f.Puh.CONSUMABLE:
            case f.Puh.DURABLE:
                return void(0, s.mMO)(async () => {
                    let {
                        ItemDetailsModal: e
                    } = await Promise.resolve().then(n.bind(n, 963179));
                    return n => (0, r.jsx)(e, j({
                        appId: t,
                        skuId: i
                    }, n))
                }, {
                    modalKey: d,
                    onCloseCallback: () => {
                        S() || (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE))
                    }
                });
            case f.Puh.SUBSCRIPTION:
                if ((null == c ? void 0 : c.flags) == null) return;
                return e = (0, h.bg)(c.flags) ? "user" : "guild", void(0, s.mMO)(async () => {
                    let {
                        SubscriptionDetailsModal: l
                    } = await Promise.resolve().then(n.bind(n, 168393));
                    return n => (0, r.jsx)(l, j({
                        appId: t,
                        subscriptionType: e,
                        skuId: i,
                        guildId: void 0
                    }, n))
                }, {
                    modalKey: d,
                    onCloseCallback: () => {
                        S() || (0, _.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE))
                    }
                })
        }
    }, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, i]), l.useLayoutEffect(() => () => {
        (0, s.OoC)(d)
    }, [d]), null
}

function O(e) {
    let {
        application: t
    } = e, n = (0, g.DB)(), l = t.terms_of_service_url, a = t.privacy_policy_url;
    if (null == l && null == a) return null;
    let s = (e, t) => (0, r.jsx)(o.A, {
        href: t,
        trusted: !n,
        children: e
    });
    return (0, r.jsx)("div", {
        className: v.V6,
        children: (0, r.jsx)(i.EYj, {
            color: "text-strong",
            variant: "text-sm/normal",
            children: null != l && null != a ? x.intl.format(x.t.nylPOT, {
                termsHook: e => s(e, l),
                privacyHook: e => s(e, a)
            }) : null != l ? x.intl.format(x.t["0cPyDz"], {
                termsHook: e => s(e, l)
            }) : null != a ? x.intl.format(x.t["loYGC/"], {
                privacyHook: e => s(e, a)
            }) : null
        })
    })
}

function S() {
    return window.location.pathname.startsWith("/login")
}