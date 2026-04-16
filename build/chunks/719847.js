/** chunk id: 719847 params = (module,exports,require) **/
i.d(t, {
    default: () => T
});
var s = i(627968),
    r = i(64700),
    n = i(991660),
    l = i(158954),
    a = i(311907),
    c = i(397927),
    o = i(627363),
    d = i(587895),
    _ = i(575926),
    u = i(957565),
    p = i(997997),
    b = i(123791),
    S = i(55926),
    f = i(816709),
    h = i(652215),
    m = i(435220),
    x = i(985018),
    C = i(617114),
    A = i(967744);

function T(e) {
    let {
        onClose: t,
        transitionState: i,
        appId: T,
        guildId: g
    } = e, D = (0, a.bG)([d.A], () => d.A.getApplication(T), [T]), [E, j] = r.useState(() => d.A.isFetchingApplication(T) ? {
        status: 1
    } : {
        status: 0
    });
    r.useEffect(() => {
        0 === E.status && (j({
            status: 1
        }), o.Ay.fetchApplication(T).then(() => {
            j({
                status: 2
            })
        }).catch(e => {
            j({
                status: 3,
                error: e.message
            })
        }))
    }, [T, E.status]);
    let {
        subscriptions: v,
        otps: O
    } = (0, b.C)(T);
    if (null == D) return null;
    let y = x.intl.formatToPlainString(x.t.XDRjs5, {
            appName: D.name
        }),
        I = (0, s.jsx)("div", {
            className: C.K,
            children: (0, s.jsx)(_.h, {})
        }),
        N = u.p5 ? (0, s.jsx)(c.K0, {
            "aria-label": x.intl.string(x.t.WqhZss),
            icon: () => (0, s.jsx)(c.qYV, {
                size: "sm"
            }),
            onClick: () => {
                let e = `${location.protocol}//${location.host}${h.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(T,m.GlobalDiscoveryAppsSections.STORE)}`;
                (0, u.C)(e, () => (0, c.showToast)((0, c.createToast)(x.intl.string(x.t["L/PwZf"]), c.ToastType.SUCCESS))), (0, p.K)(T, p.C.STORE_MODAL)
            },
            variant: "icon-only"
        }) : void 0;
    return (0, s.jsxs)(l.dWK, {
        transitionState: i,
        "aria-label": y,
        onClose: t,
        size: "xxl",
        children: [(0, s.jsx)(l.rQ0, {
            leading: I,
            title: y,
            trailing: N
        }), (0, s.jsx)(n.A, {
            children: (0, s.jsx)("main", {
                className: A.bodyInner,
                children: (0, s.jsx)(S.Mp, {
                    app: D,
                    guildId: g,
                    subscriptions: v,
                    otps: O
                })
            })
        }), (0, s.jsx)(l.jlY, {
            children: (0, s.jsx)(c.Text, {
                variant: "text-md/normal",
                children: null != D.termsOfServiceUrl || null != D.privacyPolicyUrl ? (0, s.jsx)(f.A, {
                    termsOfServiceUrl: D.termsOfServiceUrl,
                    privacyPolicyUrl: D.privacyPolicyUrl
                }) : x.intl.string(x.t["3ZY+0D"])
            })
        })]
    })
}