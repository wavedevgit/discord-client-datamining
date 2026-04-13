/** chunk id: 510898 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(403362),
    a = n(143582),
    o = n(915043),
    d = n(888848),
    c = n(331441),
    u = n(20770),
    m = n(985018);
class g extends s.PureComponent {
    state = {
        hasError: !1
    };
    static getDerivedStateFromError(e) {
        return {
            hasError: !0
        }
    }
    render() {
        return this.state.hasError ? (0, i.jsxs)(l.$Td, {
            color: l.Hv$.DANGER,
            style: {
                borderRadius: 0
            },
            children: [m.intl.format(m.t.IIHUUF, {
                subscriptionId: this.props.subscription.id
            }), " ", m.intl.format(m.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        }) : this.props.children
    }
}

function _(e) {
    let {
        subscriptions: t,
        updateHeader: n
    } = e, [l, _] = s.useState({
        route: c.R.HOME
    }), {
        route: x
    } = l, A = () => {
        _({
            route: c.R.HOME
        })
    }, h = e => {
        _({
            route: c.R.SWITCH_APP_PLANS,
            ...e
        }), n(m.intl.string(m.t.VFqtkP), A)
    }, [p, T] = s.useState({});
    s.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t && (T(t => ({
                ...t,
                [e.id]: d.G.LOADING
            })), (0, a._R)(t).then(() => {
                T(t => ({
                    ...t,
                    [e.id]: d.G.DONE
                }))
            }).catch(() => {
                T(t => ({
                    ...t,
                    [e.id]: d.G.ERROR
                }))
            }))
        }
    }, [t]);
    let {
        loadState: f
    } = (0, o.E)(), S = f !== o.mJ.LOADED;
    switch (x) {
        case c.R.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map(e => (0, i.jsx)(g, {
                    subscription: e,
                    children: (0, i.jsx)(d.A, {
                        subscription: e,
                        navigateToSwitchPlan: h,
                        loadingState: S ? d.G.LOADING : p[e.id] ?? d.G.LOADING
                    })
                }, e.id))
            });
        case c.R.SWITCH_APP_PLANS:
            let {
                route: E, ...b
            } = l;
            return (0, i.jsx)(u.A, {
                ...b,
                navigateToHome: A
            });
        default:
            (0, r.xb)(x)
    }
}