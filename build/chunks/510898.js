/** chunk id: 510898, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(403362),
    r = n(143582),
    o = n(915043),
    d = n(888848),
    c = n(331441),
    u = n(20770),
    _ = n(985018);
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
            children: [_.intl.format(_.t.IIHUUF, {
                subscriptionId: this.props.subscription.id
            }), " ", _.intl.format(_.t.fh65ES, {
                helpLink: "https://support.discord.com/hc/en-us"
            })]
        }) : this.props.children
    }
}

function m(e) {
    let {
        subscriptions: t,
        updateHeader: n
    } = e, [l, m] = s.useState({
        route: c.R.HOME
    }), {
        route: A
    } = l, h = () => {
        m({
            route: c.R.HOME
        })
    }, p = e => {
        m({
            route: c.R.SWITCH_APP_PLANS,
            ...e
        }), n(_.intl.string(_.t.VFqtkP), h)
    }, [x, E] = s.useState({});
    s.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t && (E(t => ({
                ...t,
                [e.id]: d.G.LOADING
            })), (0, r._R)(t).then(() => {
                E(t => ({
                    ...t,
                    [e.id]: d.G.DONE
                }))
            }).catch(() => {
                E(t => ({
                    ...t,
                    [e.id]: d.G.ERROR
                }))
            }))
        }
    }, [t]);
    let {
        loadState: T
    } = (0, o.E)(), S = T !== o.mJ.LOADED;
    switch (A) {
        case c.R.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map(e => (0, i.jsx)(g, {
                    subscription: e,
                    children: (0, i.jsx)(d.A, {
                        subscription: e,
                        navigateToSwitchPlan: p,
                        loadingState: S ? d.G.LOADING : x[e.id] ?? d.G.LOADING
                    })
                }, e.id))
            });
        case c.R.SWITCH_APP_PLANS:
            let {
                route: C, ...f
            } = l;
            return (0, i.jsx)(u.A, {
                ...f,
                navigateToHome: h
            });
        default:
            (0, a.xb)(A)
    }
}