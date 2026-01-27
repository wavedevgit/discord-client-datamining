/** Chunk was on 92201 **/
/** chunk id: 719847, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => j
}), r(896048);
var i = r(627968),
    n = r(64700),
    l = r(991660),
    s = r(158954),
    o = r(311907),
    c = r(397927),
    a = r(627363),
    C = r(587895),
    p = r(575926),
    d = r(957565),
    u = r(997997),
    f = r(123791),
    b = r(55926),
    h = r(816709),
    _ = r(652215),
    g = r(435220),
    y = r(985018),
    L = r(801059),
    x = r(22789);

function j(e) {
    let {
        onClose: t,
        transitionState: r,
        appId: j,
        guildId: O
    } = e, w = (0, o.bG)([C.A], () => C.A.getApplication(j), [j]), [m, S] = n.useState(() => C.A.isFetchingApplication(j) ? {
        status: 1
    } : {
        status: 0
    });
    n.useEffect(() => {
        0 === m.status && (S({
            status: 1
        }), a.Ay.fetchApplication(j).then(() => {
            S({
                status: 2
            })
        }).catch(e => {
            S({
                status: 3,
                error: e.message
            })
        }))
    }, [j, m.status]);
    let {
        subscriptions: v,
        otps: P
    } = (0, f.C)(j);
    if (null == w) return null;
    let A = y.intl.formatToPlainString(y.t.XDRjs5, {
            appName: w.name
        }),
        D = (0, i.jsx)("div", {
            className: L.K,
            children: (0, i.jsx)(p.h, {})
        }),
        E = d.p5 ? (0, i.jsx)(c.K0, {
            "aria-label": y.intl.string(y.t.WqhZss),
            icon: () => (0, i.jsx)(c.qYV, {
                size: "sm"
            }),
            onClick: () => {
                let e = "".concat(location.protocol, "//").concat(location.host).concat(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(j, g.GlobalDiscoveryAppsSections.STORE));
                (0, d.C)(e, () => (0, c.showToast)((0, c.createToast)(y.intl.string(y.t["L/PwZf"]), c.ToastType.SUCCESS))), (0, u.K)(j, u.C.STORE_MODAL)
            },
            variant: "icon-only"
        }) : void 0;
    return (0, i.jsxs)(s.dWK, {
        transitionState: r,
        "aria-label": A,
        onClose: t,
        size: "xxl",
        children: [(0, i.jsx)(s.rQ0, {
            leading: D,
            title: A,
            trailing: E
        }), (0, i.jsx)(l.A, {
            children: (0, i.jsx)("main", {
                className: x.bodyInner,
                children: (0, i.jsx)(b.Mp, {
                    app: w,
                    guildId: O,
                    subscriptions: v,
                    otps: P
                })
            })
        }), (0, i.jsx)(s.jlY, {
            children: (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                children: null != w.termsOfServiceUrl || null != w.privacyPolicyUrl ? (0, i.jsx)(h.A, {
                    termsOfServiceUrl: w.termsOfServiceUrl,
                    privacyPolicyUrl: w.privacyPolicyUrl
                }) : y.intl.string(y.t["3ZY+0D"])
            })
        })]
    })
}