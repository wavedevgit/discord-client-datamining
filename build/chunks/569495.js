/** chunk id: 569495 params = (module,exports,require) **/
a.d(t, {
    A: () => L
}), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(607399),
    o = a(311907),
    c = a(397927),
    d = a(787389),
    u = a(688810),
    m = a(735991),
    h = a(204776),
    p = a(50268),
    _ = a(928658),
    g = a(976860),
    x = a(611010),
    A = a(287809),
    f = a(954571),
    b = a(957565),
    C = a(692848),
    v = a(412461),
    j = a(310419),
    I = a(652215),
    S = a(985018),
    E = a(972729);
let N = "start_application_install",
    y = "launch_activity";

function T(e) {
    let {
        renderDropdown: t,
        size: a
    } = e, l = i.useRef(null);
    return (0, n.jsx)(c.YNO, {
        targetElementRef: l,
        renderPopout: e => {
            let {
                closePopout: a
            } = e;
            return t(a)
        },
        position: "left",
        align: "top",
        animation: c.YNO.Animation.NONE,
        children: e => (0, n.jsx)(c.K0, {
            buttonRef: l,
            variant: "secondary",
            size: a,
            icon: c.jNK,
            "aria-label": S.intl.string(S.t["UKOtz+"]),
            ...e
        })
    })
}

function R(e) {
    var t;
    let a, l, {
            application: s,
            variant: o,
            size: d,
            contentWidth: u
        } = e,
        {
            onClickInstallApplication: m,
            canInstall: p
        } = (t = s, a = (0, v.DB)(), l = i.useCallback(() => {
            let e = j.h.getField("guildId") ?? void 0;
            (0, C.o)({
                applicationId: t.id,
                customInstallUrl: t.custom_install_url,
                installParams: t.install_params,
                integrationTypesConfig: t.integration_types_config,
                guildId: e,
                source: "product_page"
            })
        }, [t]), i.useEffect(() => {
            let e = new URL(location.href);
            if (a && "true" === e.searchParams.get(N)) {
                e.searchParams.delete(N);
                let t = e.pathname + e.search;
                (0, g.bG)(t), l()
            }
        }, [a, l]), {
            onClickInstallApplication: i.useCallback(() => {
                if ((0, v.TR)(I.HAw.APP_DIRECTORY_INSTALL_CLICKED, {
                        application_id: t.id
                    }), (r.Fr || r.v1) && null == t.custom_install_url) {
                    let e = (0, C.Z)({
                        applicationId: t.id,
                        customInstallUrl: t.custom_install_url,
                        installParams: t.install_params,
                        integrationTypesConfig: t.integration_types_config
                    });
                    if (null != e) return void window.open(e, "_blank")
                }
                if (a) l();
                else {
                    let e = j.h.getField("guildId");
                    f.default.track(I.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                        application_id: t.id,
                        guild_id: e,
                        auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                        source: "product_page",
                        device_platform: r.Fr ? "mobile_web" : "desktop_web"
                    }), (0, v.jL)({
                        [N]: "true"
                    })
                }
            }, [t, l, a]),
            canInstall: i.useMemo(() => (0, h.Ie)({
                customInstallUrl: t.custom_install_url,
                installParams: t.install_params,
                integrationTypesConfig: t.integration_types_config
            }), [t])
        });
    return "icon" === u ? (0, n.jsx)(c.K0, {
        variant: o,
        icon: c.pa$,
        size: d,
        onClick: m,
        "aria-label": S.intl.string(S.t.NgXl3C),
        disabled: !p
    }) : (0, n.jsx)(c.Button, {
        variant: o,
        size: d,
        text: "small" === u ? S.intl.string(S.t.qRZ35t) : S.intl.string(S.t.NgXl3C),
        onClick: m,
        disabled: !p
    })
}

function P(e) {
    let {
        size: t,
        contentWidth: a,
        onClick: i,
        isSubmitting: l
    } = e;
    return "icon" === a ? (0, n.jsx)(c.K0, {
        variant: "primary",
        icon: c.udU,
        size: t,
        onClick: i,
        loading: l,
        "aria-label": S.intl.string(S.t.QO7rO6)
    }) : (0, n.jsx)(c.Button, {
        variant: "primary",
        size: t,
        text: S.intl.string(S.t.QO7rO6),
        onClick: i,
        loading: l
    })
}
let L = i.forwardRef(function(e, t) {
    let {
        application: a,
        size: l
    } = e, {
        analyticsLocations: r
    } = (0, u.Ay)(), h = i.useCallback(() => {
        let e;
        (0, v.TR)(I.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
            application_id: a.id
        }), (0, b.C)((e = a.id, `${location.protocol}//${location.host}${I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`), () => (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["L/PwZf"]), c.ToastType.SUCCESS)))
    }, [a.id]), f = i.useCallback(() => {
        let e = x.Ay.createFromServer(a);
        (0, _.r3)({
            application: e,
            entrypoint: "app_directory"
        })
    }, [a]), C = (0, p.A)({
        id: a.id,
        label: S.intl.string(S.t["FfCL+6"]),
        onSuccess: () => (0, c.showToast)((0, c.createToast)(S.intl.string(S.t.eNjAah), c.ToastType.SUCCESS))
    }), j = i.useCallback((e, t) => (0, n.jsxs)(c.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "application-directory-profile",
        "aria-label": S.intl.string(S.t["/7I4/C"]),
        onClose: t,
        onSelect: void 0,
        children: [e ? (0, n.jsx)(c.rXV, {
            children: (0, n.jsx)(c.Drp, {
                id: "copy",
                label: S.intl.string(S.t.z4sP5J),
                action: h,
                icon: c.qYV,
                leadingAccessory: {
                    type: "icon",
                    icon: c.qYV
                }
            })
        }) : null, (0, n.jsx)(c.rXV, {
            children: (0, n.jsx)(c.Drp, {
                id: "report",
                label: S.intl.string(S.t.NgA5vp),
                color: "danger",
                leadingAccessory: {
                    type: "icon",
                    icon: c.iFK
                },
                action: f
            })
        }), null != C ? (0, n.jsx)(c.rXV, {
            children: C
        }) : null]
    }), [C, f, h]), {
        onClickLaunchActivity: N,
        isSubmitting: L
    } = function(e, t) {
        let a = e.id,
            n = e?.bot?.id,
            l = null != n && (0, m.$B)(e) && (0, m.Ag)(e),
            [s, r] = i.useState(!1),
            c = (0, v.DB)(),
            u = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
            h = (0, d.A)({
                applicationId: a,
                analyticsLocations: t,
                runBeforeLaunchAttempt: () => r(!0),
                runAfterLaunchAttempt: () => r(!1)
            });
        i.useEffect(() => {
            let e = new URL(location.href),
                t = "true" === e.searchParams.get(y);
            if (c && l && t && null != n && null != u) {
                e.searchParams.delete(y);
                let t = e.pathname + e.search;
                (0, g.bG)(t), h()
            }
        }, [c, l, n, u, h]);
        let p = i.useCallback(async () => {
            if (null != n) {
                if ((0, v.TR)(I.HAw.APP_DIRECTORY_LAUNCH_CLICKED, {
                        application_id: a
                    }), !c) return void(0, v.jL)({
                    [y]: "true"
                });
                await h()
            }
        }, [a, n, c, h]);
        return {
            onClickLaunchActivity: l ? p : void 0,
            isSubmitting: s
        }
    }(a, r), D = null != N, O = D ? "secondary" : "primary";
    return (0, n.jsxs)("div", {
        ref: t,
        children: [(0, n.jsxs)("div", {
            className: s()(E.Ik, E.U),
            children: [D && (0, n.jsx)(P, {
                size: l,
                contentWidth: "normal",
                onClick: N,
                isSubmitting: L
            }), (0, n.jsx)(R, {
                application: a,
                size: l,
                contentWidth: "normal",
                variant: O
            }), b.p5 ? (0, n.jsx)(c.K0, {
                variant: "secondary",
                size: l,
                icon: c.qYV,
                onClick: h,
                "aria-label": S.intl.string(S.t.z4sP5J)
            }) : null, (0, n.jsx)(T, {
                renderDropdown: e => j(!1, e),
                size: l
            })]
        }), (0, n.jsxs)("div", {
            className: s()(E.Ik, E.EX),
            children: [D && (0, n.jsx)(P, {
                size: l,
                contentWidth: "small",
                onClick: N,
                isSubmitting: L
            }), (0, n.jsx)(R, {
                application: a,
                size: l,
                contentWidth: "small",
                variant: O
            }), (0, n.jsx)(T, {
                renderDropdown: e => j(b.p5, e),
                size: l
            })]
        }), (0, n.jsxs)("div", {
            className: s()(E.Ik, E.nU),
            children: [D && (0, n.jsx)(P, {
                size: l,
                contentWidth: "icon",
                onClick: N,
                isSubmitting: L
            }), (0, n.jsx)(R, {
                application: a,
                size: l,
                contentWidth: "icon",
                variant: O
            }), (0, n.jsx)(T, {
                renderDropdown: e => j(b.p5, e),
                size: l
            })]
        })]
    })
})