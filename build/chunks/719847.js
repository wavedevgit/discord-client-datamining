/** chunk id: 719847 params = (module,exports,require) **/
s.d(e, {
    default: () => A
});
var i = s(627968),
    r = s(64700),
    a = s(991660),
    n = s(158954),
    l = s(311907),
    o = s(397927),
    c = s(627363),
    p = s(587895),
    _ = s(575926),
    d = s(957565),
    u = s(997997),
    x = s(123791),
    h = s(55926),
    S = s(816709),
    f = s(652215),
    m = s(435220),
    g = s(985018),
    j = s(698265),
    C = s(277355);

function A(t) {
    let {
        onClose: e,
        transitionState: s,
        appId: A,
        guildId: b
    } = t, v = (0, l.bG)([p.A], () => p.A.getApplication(A), [A]), [y, T] = r.useState(() => p.A.isFetchingApplication(A) ? {
        status: 1
    } : {
        status: 0
    });
    r.useEffect(() => {
        0 === y.status && (T({
            status: 1
        }), c.Ay.fetchApplication(A).then(() => {
            T({
                status: 2
            })
        }).catch(t => {
            T({
                status: 3,
                error: t.message
            })
        }))
    }, [A, y.status]);
    let {
        subscriptions: E,
        otps: O
    } = (0, x.C)(A);
    if (null == v) return null;
    let P = g.intl.formatToPlainString(g.t.XDRjs5, {
            appName: v.name
        }),
        k = (0, i.jsx)("div", {
            className: j.K,
            children: (0, i.jsx)(_.h, {})
        }),
        w = d.p5 ? (0, i.jsx)(o.K0, {
            "aria-label": g.intl.string(g.t.WqhZss),
            icon: () => (0, i.jsx)(o.qYV, {
                size: "sm"
            }),
            onClick: () => {
                let t = `${location.protocol}//${location.host}${f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A,m.GlobalDiscoveryAppsSections.STORE)}`;
                (0, d.C)(t, () => (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["L/PwZf"]), o.ToastType.SUCCESS))), (0, u.K)(A, u.C.STORE_MODAL)
            },
            variant: "icon-only"
        }) : void 0;
    return (0, i.jsxs)(n.dWK, {
        transitionState: s,
        "aria-label": P,
        onClose: e,
        size: "xxl",
        children: [(0, i.jsx)(n.rQ0, {
            leading: k,
            title: P,
            trailing: w
        }), (0, i.jsx)(a.A, {
            children: (0, i.jsx)("main", {
                className: C.bodyInner,
                children: (0, i.jsx)(h.Mp, {
                    app: v,
                    guildId: b,
                    subscriptions: E,
                    otps: O
                })
            })
        }), (0, i.jsx)(n.jlY, {
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: null != v.termsOfServiceUrl || null != v.privacyPolicyUrl ? (0, i.jsx)(S.A, {
                    termsOfServiceUrl: v.termsOfServiceUrl,
                    privacyPolicyUrl: v.privacyPolicyUrl
                }) : g.intl.string(g.t["3ZY+0D"])
            })
        })]
    })
}