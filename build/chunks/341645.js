/** chunk id: 341645 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(451988),
    d = n(397927),
    c = n(212245),
    u = n(775602),
    _ = n(933958),
    m = n(447031),
    h = n(956549),
    p = n(550151),
    g = n(793574),
    A = n(688810),
    x = n(392054),
    f = n(572211),
    C = n(178910),
    E = n(354287),
    I = n(574660),
    v = n(853390),
    b = n(611010),
    T = n(961350),
    y = n(734057),
    S = n(290863),
    N = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(927813),
    P = n(403362),
    w = n(218394),
    D = n(255345),
    M = n(652215),
    k = n(360469),
    O = n(768349),
    U = n(985018),
    B = n(746338);
let G = a.memo(e => {
    let {
        start: t
    } = e, [n, i] = a.useState(0), l = (0, w.j)(), s = (0, r.bG)([u.A], () => u.A.useReducedMotion), d = !1 === l || s;
    return a.useEffect(() => {
        let e = new o.IX;
        return e.start(d ? 15 * R.A.Millis.SECOND : R.A.Millis.SECOND, () => {
            i((new Date().getTime() - t) / R.A.Millis.SECOND)
        }), () => e.stop()
    }, [d, t]), (0, v.fU)(n)
});
G.displayName = "ActivityRuntimeCounter";
let F = a.memo(function(e) {
    let t, {
            application: n,
            channelId: l,
            guildId: o,
            message: u
        } = e,
        {
            analyticsLocations: v
        } = (0, A.Ay)(g.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, c.p)(),
        w = (0, r.bG)([y.A], () => y.A.getChannel(l), [l]),
        F = w?.isThread?.() ? w?.parent_id : l,
        H = (0, r.bG)([T.default], () => T.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: q,
            activityLaunchState: W
        } = (0, r.cf)([_.Ay], () => ({
            embeddedActivity: _.Ay.getEmbeddedActivitiesForChannel(F ?? "").find(e => e.applicationId === n.id),
            currentEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
            activityLaunchState: _.Ay.getLaunchState(n.id, F ?? void 0)
        }), [F, n.id]),
        z = V?.userIds,
        Y = (0, r.yK)([N.default], () => Array.from(z ?? []).map(e => N.default.getUser(e)).filter(P.Vq), [z]),
        Q = (0, r.bG)([S.A], () => {
            if (null == z) return null;
            for (let e of z) {
                let t = S.A.findActivity(e, e => e.application_id === n.id);
                if (null != t) return t
            }
            return null
        }, [n.id, z]),
        K = Q?.details,
        X = a.useMemo(() => {
            let e = new b.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.Gl), e
        }, [n]),
        J = (0, p.vG)({
            userId: H,
            channelId: l,
            application: X
        }),
        Z = null == V,
        $ = (0, D.I3)({
            embeddedActivity: V,
            joinability: J,
            currentEmbeddedActivity: q,
            channel: w
        }),
        ee = a.useId(),
        et = null != W && W.isLaunching && W.componentId === ee,
        en = async () => {
            j.default.track(M.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: l,
                channel_type: w?.type,
                is_activity_start: Z,
                cta: "Play"
            }), Z ? await (0, h.A)({
                targetApplicationId: n.id,
                channelId: l,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee,
                commandOrigin: x.iw.ACTIVITY_INSTANCE_EMBED
            }) : await (0, m.A)({
                applicationId: V.applicationId,
                activityChannelId: l,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee
            })
        }, ei = $.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), ea = (0, I.F)(X, () => {
            j.default.track(M.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: l,
                channel_type: w?.type,
                cta: "View"
            })
        }), el = L.Ay.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot
        });
    $.disabled && (t = $.tooltip);
    let es = Y.length,
        er = Q?.timestamps?.start ?? Q?.created_at,
        eo = (0, C.y)({
            activity: Q,
            activityUsersCount: es
        }),
        ed = [{
            label: $.text,
            trackingArea: E.kY.PLAY,
            onClick: en,
            disabled: $.disabled,
            disabledReason: t,
            submitting: et
        }];
    return (0, i.jsx)(f.h, {
        header: U.intl.string(U.t.pkq6Vq),
        title: n.name,
        iconSrc: el,
        info: (0, i.jsx)("div", {
            className: B.QR,
            children: Z ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: ei
            }) : (0, i.jsxs)(i.Fragment, {
                children: [null != K && (0, i.jsxs)("div", {
                    className: B.oL,
                    children: [null != er && (0, i.jsxs)("div", {
                        className: B.DT,
                        children: [(0, i.jsx)("div", {
                            className: B.y9,
                            children: (0, i.jsx)(eo.Icon, {
                                size: "xxs",
                                color: "currentColor"
                            })
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: (0, i.jsx)(G, {
                                start: er
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: s()(B.DT, B.PK),
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(d.ueQ, {
                                size: "xxs",
                                color: "currentColor"
                            })
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "none",
                            lineClamp: 1,
                            children: K
                        })]
                    })]
                }), es > 0 && (0, i.jsx)(C.$, {
                    activityUsers: Y,
                    guildId: o,
                    activityText: eo.text
                })]
            })
        }),
        actions: ed,
        onClickContent: ea,
        trackingConfig: {
            id: n.id,
            linkType: O.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: l,
            messageId: u.id,
            isDeadEnd: Z
        }
    })
})