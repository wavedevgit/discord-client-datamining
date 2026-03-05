/** chunk id: 719847, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => m
});
var s = i(627968),
    l = i(64700),
    r = i(991660),
    n = i(158954),
    C = i(311907),
    a = i(397927),
    c = i(627363),
    o = i(587895),
    d = i(575926),
    p = i(957565),
    _ = i(997997),
    h = i(123791),
    u = i(55926),
    L = i(816709),
    x = i(652215),
    f = i(435220),
    b = i(985018),
    g = i(801059),
    S = i(22789);

function m(e) {
    let {
        onClose: t,
        transitionState: i,
        appId: m,
        guildId: j
    } = e, v = (0, C.bG)([o.A], () => o.A.getApplication(m), [m]), [w, A] = l.useState(() => o.A.isFetchingApplication(m) ? {
        status: 1
    } : {
        status: 0
    });
    l.useEffect(() => {
        0 === w.status && (A({
            status: 1
        }), c.Ay.fetchApplication(m).then(() => {
            A({
                status: 2
            })
        }).catch(e => {
            A({
                status: 3,
                error: e.message
            })
        }))
    }, [m, w.status]);
    let {
        subscriptions: V,
        otps: y
    } = (0, h.C)(m);
    if (null == v) return null;
    let T = b.intl.formatToPlainString(b.t.XDRjs5, {
            appName: v.name
        }),
        P = (0, s.jsx)("div", {
            className: g.K,
            children: (0, s.jsx)(d.h, {})
        }),
        D = p.p5 ? (0, s.jsx)(a.K0, {
            "aria-label": b.intl.string(b.t.WqhZss),
            icon: () => (0, s.jsx)(a.qYV, {
                size: "sm"
            }),
            onClick: () => {
                let e = `${location.protocol}//${location.host}${x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m,f.GlobalDiscoveryAppsSections.STORE)}`;
                (0, p.C)(e, () => (0, a.showToast)((0, a.createToast)(b.intl.string(b.t["L/PwZf"]), a.ToastType.SUCCESS))), (0, _.K)(m, _.C.STORE_MODAL)
            },
            variant: "icon-only"
        }) : void 0;
    return (0, s.jsxs)(n.dWK, {
        transitionState: i,
        "aria-label": T,
        onClose: t,
        size: "xxl",
        children: [(0, s.jsx)(n.rQ0, {
            leading: P,
            title: T,
            trailing: D
        }), (0, s.jsx)(r.A, {
            children: (0, s.jsx)("main", {
                className: S.bodyInner,
                children: (0, s.jsx)(u.Mp, {
                    app: v,
                    guildId: j,
                    subscriptions: V,
                    otps: y
                })
            })
        }), (0, s.jsx)(n.jlY, {
            children: (0, s.jsx)(a.Text, {
                variant: "text-md/normal",
                children: null != v.termsOfServiceUrl || null != v.privacyPolicyUrl ? (0, s.jsx)(L.A, {
                    termsOfServiceUrl: v.termsOfServiceUrl,
                    privacyPolicyUrl: v.privacyPolicyUrl
                }) : b.intl.string(b.t["3ZY+0D"])
            })
        })]
    })
}