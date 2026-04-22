/** chunk id: 195073 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(732955),
    r = n(397927),
    o = n(824552),
    c = n(933958),
    d = n(869003),
    u = n(496231),
    h = n(546183),
    m = n(543465),
    A = n(954571),
    g = n(33364),
    p = n(652215),
    _ = n(985018);

function f(e) {
    let {
        channel: t
    } = e, l = (0, a.bG)([m.Ay], () => m.Ay.isChannelMuted(null, t.id));
    return (0, i.jsx)(r.Button, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? _.intl.string(_.t.YqAjXy) : _.intl.string(_.t.w4m945),
        onClick: function() {
            (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("99312").then(n.bind(n, 259763));
                return n => (0, i.jsx)(e, {
                    channelId: t.id,
                    ...n
                })
            })
        }
    })
}

function E(e) {
    let {
        channel: t,
        application: n,
        oauth2Token: l
    } = e, u = (0, a.bG)([c.Ay], () => c.Ay.getSelfEmbeddedActivities());

    function h() {
        o.A.delete(l.id);
        let e = u.get(n.id);
        null != e && d.A.leaveActivity({
            location: e.location,
            applicationId: n.id
        })
    }
    return (0, i.jsx)(r.Button, {
        variant: "secondary",
        text: _.intl.string(_.t["5S3sQF"]),
        onClick: () => {
            (0, r.qfG)(e => (0, i.jsx)(s.aFV, {
                title: _.intl.string(_.t["DT39A+"]),
                subtitle: _.intl.formatToPlainString(_.t.QWGvxA, {
                    applicationName: n.name
                }),
                actions: [{
                    text: _.intl.string(_.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: e.onClose
                }, {
                    text: _.intl.string(_.t.xUqheM),
                    variant: "critical-primary",
                    onClick: () => {
                        h(), e.onClose()
                    }
                }],
                ...e
            })), A.default.track(p.HAw.APP_MANAGE_CTA_CLICKED, {
                application_id: n.id,
                channel_id: t.id,
                channel_type: t.type
            })
        }
    })
}

function C(e) {
    let {
        channel: t,
        user: n
    } = e, s = (0, u.A)(n?.id ?? p.dJq), {
        authorizedAppToken: c,
        authorizedAppsFetchState: d
    } = (0, a.cf)([h.default], () => ({
        authorizedAppToken: h.default.getNewestTokenForApplication(s?.id),
        authorizedAppsFetchState: h.default.getFetchState()
    }));
    return (l.useEffect(() => {
        n.bot && d === h.FetchState.NOT_FETCHED && o.A.fetch()
    }, [n.bot, d]), n.bot && null != s && null != c) ? (0, i.jsxs)(r.ButtonGroup, {
        size: "sm",
        children: [(0, i.jsx)(f, {
            channel: t
        }), (0, i.jsx)(E, {
            application: s,
            channel: t,
            oauth2Token: c
        }), (0, i.jsx)(g.A, {
            channel: t,
            user: n
        })]
    }) : (0, i.jsx)(r.ButtonGroup, {
        size: "sm",
        children: (0, i.jsx)(g.A, {
            channel: t,
            user: n
        })
    })
}