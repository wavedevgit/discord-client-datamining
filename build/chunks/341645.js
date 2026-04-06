/** chunk id: 341645 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
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
    N = n(734057),
    y = n(290863),
    S = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(927813),
    P = n(403362),
    D = n(218394),
    M = n(255345),
    w = n(652215),
    k = n(360469),
    O = n(768349),
    U = n(985018),
    B = n(746338);
let G = l.memo(e => {
    let {
        start: t
    } = e, [n, i] = l.useState(0), s = (0, D.j)(), r = (0, a.bG)([u.A], () => u.A.useReducedMotion), d = !1 === s || r;
    return l.useEffect(() => {
        let e = new o.IX;
        return e.start(d ? 15 * R.A.Millis.SECOND : R.A.Millis.SECOND, () => {
            i((new Date().getTime() - t) / R.A.Millis.SECOND)
        }), () => e.stop()
    }, [d, t]), (0, v.fU)(n)
});
G.displayName = "ActivityRuntimeCounter";
let F = l.memo(function(e) {
    let t, {
            application: n,
            channelId: s,
            guildId: o,
            message: u
        } = e,
        {
            analyticsLocations: v
        } = (0, A.Ay)(g.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, c.p)(),
        D = (0, a.bG)([N.A], () => N.A.getChannel(s), [s]),
        F = D?.isThread?.() ? D?.parent_id : s,
        H = (0, a.bG)([T.default], () => T.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: q,
            activityLaunchState: W
        } = (0, a.cf)([_.Ay], () => ({
            embeddedActivity: _.Ay.getEmbeddedActivitiesForChannel(F ?? "").find(e => e.applicationId === n.id),
            currentEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
            activityLaunchState: _.Ay.getLaunchState(n.id, F ?? void 0)
        }), [F, n.id]),
        Y = V?.userIds,
        z = (0, a.yK)([S.default], () => Array.from(Y ?? []).map(e => S.default.getUser(e)).filter(P.Vq), [Y]),
        Q = (0, a.bG)([y.A], () => {
            if (null == Y) return null;
            for (let e of Y) {
                let t = y.A.findActivity(e, e => e.application_id === n.id);
                if (null != t) return t
            }
            return null
        }, [n.id, Y]),
        K = Q?.details,
        J = l.useMemo(() => {
            let e = new b.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.Gl), e
        }, [n]),
        X = (0, p.vG)({
            userId: H,
            channelId: s,
            application: J
        }),
        Z = null == V,
        $ = (0, M.I3)({
            embeddedActivity: V,
            joinability: X,
            currentEmbeddedActivity: q,
            channel: D
        }),
        ee = l.useId(),
        et = null != W && W.isLaunching && W.componentId === ee,
        en = async () => {
            j.default.track(w.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: s,
                channel_type: D?.type,
                is_activity_start: Z,
                cta: "Play"
            }), Z ? await (0, h.A)({
                targetApplicationId: n.id,
                channelId: s,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee,
                commandOrigin: x.iw.ACTIVITY_INSTANCE_EMBED
            }) : await (0, m.A)({
                applicationId: V.applicationId,
                activityChannelId: s,
                locationObject: R.location,
                analyticsLocations: v,
                componentId: ee
            })
        }, ei = $.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), el = (0, I.F)(J, () => {
            j.default.track(w.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: s,
                channel_type: D?.type,
                cta: "View"
            })
        }), es = L.Ay.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot
        });
    $.disabled && (t = $.tooltip);
    let er = z.length,
        ea = Q?.timestamps?.start ?? Q?.created_at,
        eo = (0, C.y)({
            activity: Q,
            activityUsersCount: er
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
        iconSrc: es,
        info: (0, i.jsx)("div", {
            className: B.QR,
            children: Z ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: ei
            }) : (0, i.jsxs)(i.Fragment, {
                children: [null != K && (0, i.jsxs)("div", {
                    className: B.oL,
                    children: [null != ea && (0, i.jsxs)("div", {
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
                                start: ea
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: r()(B.DT, B.PK),
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
                }), er > 0 && (0, i.jsx)(C.$, {
                    activityUsers: z,
                    guildId: o,
                    activityText: eo.text
                })]
            })
        }),
        actions: ed,
        onClickContent: el,
        trackingConfig: {
            id: n.id,
            linkType: O.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: s,
            messageId: u.id,
            isDeadEnd: Z
        }
    })
})