/** chunk id: 341645 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
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
    I = n(354287),
    E = n(574660),
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
    M = n(218394),
    w = n(255345),
    D = n(652215),
    k = n(360469),
    O = n(768349),
    U = n(985018),
    B = n(897251);
let G = r.memo(e => {
    let {
        start: t
    } = e, [n, i] = r.useState(0), a = (0, M.j)(), l = (0, s.bG)([u.A], () => u.A.useReducedMotion), d = !1 === a || l;
    return r.useEffect(() => {
        let e = new o.IX;
        return e.start(d ? 15 * R.A.Millis.SECOND : R.A.Millis.SECOND, () => {
            i((new Date().getTime() - t) / R.A.Millis.SECOND)
        }), () => e.stop()
    }, [d, t]), (0, v.fU)(n)
});
G.displayName = "ActivityRuntimeCounter";
let F = r.memo(function(e) {
    let t, {
            application: n,
            channelId: a,
            guildId: o,
            message: u
        } = e,
        {
            analyticsLocations: v
        } = (0, A.Ay)(g.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, c.p)(),
        M = (0, s.bG)([y.A], () => y.A.getChannel(a), [a]),
        F = M?.isThread?.() ? M?.parent_id : a,
        H = (0, s.bG)([T.default], () => T.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: q,
            activityLaunchState: W
        } = (0, s.cf)([_.Ay], () => ({
            embeddedActivity: _.Ay.getEmbeddedActivitiesForChannel(F ?? "").find(e => e.applicationId === n.id),
            currentEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
            activityLaunchState: _.Ay.getLaunchState(n.id, F ?? void 0)
        }), [F, n.id]),
        Y = V?.userIds,
        z = (0, s.yK)([N.default], () => Array.from(Y ?? []).map(e => N.default.getUser(e)).filter(P.Vq), [Y]),
        Q = (0, s.bG)([S.A], () => {
            if (null == Y) return null;
            for (let e of Y) {
                let t = S.A.findActivity(e, e => e.application_id === n.id);
                if (null != t) return t
            }
            return null
        }, [n.id, Y]),
        K = Q?.details,
        J = r.useMemo(() => {
            let e = new b.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.Gl), e
        }, [n]),
        X = (0, p.vG)({
            userId: H,
            channelId: a,
            application: J
        }),
        Z = null == V,
        $ = (0, w.I3)({
            embeddedActivity: V,
            joinability: X,
            currentEmbeddedActivity: q,
            channel: M
        }),
        ee = r.useId(),
        et = null != W && W.isLaunching && W.componentId === ee,
        en = async () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: M?.type,
                is_activity_start: Z,
                cta: "Play"
            }), Z ? await (0, h.A)({
                targetApplicationId: n.id,
                channelId: a,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee,
                commandOrigin: x.iw.ACTIVITY_INSTANCE_EMBED
            }) : await (0, m.A)({
                applicationId: V.applicationId,
                activityChannelId: a,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee
            })
        }, ei = $.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), er = (0, E.F)(J, () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: M?.type,
                cta: "View"
            })
        }), ea = L.Ay.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot
        });
    $.disabled && (t = $.tooltip);
    let el = z.length,
        es = Q?.timestamps?.start ?? Q?.created_at,
        eo = (0, C.y)({
            activity: Q,
            activityUsersCount: el
        }),
        ed = [{
            label: $.text,
            trackingArea: I.kY.PLAY,
            onClick: en,
            disabled: $.disabled,
            disabledReason: t,
            submitting: et
        }];
    return (0, i.jsx)(f.h, {
        header: U.intl.string(U.t.pkq6Vq),
        title: n.name,
        iconSrc: ea,
        info: (0, i.jsx)("div", {
            className: B.QR,
            children: Z ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: ei
            }) : (0, i.jsxs)(i.Fragment, {
                children: [null != K && (0, i.jsxs)("div", {
                    className: B.oL,
                    children: [null != es && (0, i.jsxs)("div", {
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
                                start: es
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: l()(B.DT, B.PK),
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
                }), el > 0 && (0, i.jsx)(C.$, {
                    activityUsers: z,
                    guildId: o,
                    activityText: eo.text
                })]
            })
        }),
        actions: ed,
        onClickContent: er,
        trackingConfig: {
            id: n.id,
            linkType: O.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: a,
            messageId: u.id,
            isDeadEnd: Z
        }
    })
})