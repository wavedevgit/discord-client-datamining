/** chunk id: 657364 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(989349),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(287809),
    u = n(975571),
    _ = n(115063),
    m = n(104954),
    g = n(975648),
    A = n(871930),
    h = n(531525),
    x = n(652215),
    p = n(985018),
    T = n(711459);

function E() {
    let e = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        {
            currentHarvestType: t,
            awaitingInitialRequest: l
        } = (0, a.cf)([g.A], () => ({
            currentHarvestType: g.A.harvestType,
            awaitingInitialRequest: g.A.requestingHarvest
        })),
        [E, C] = s.useState(!1);
    if (null == e) return null;
    let S = (0, _.Oj)(t, e) || l,
        f = null != t && r()().diff(r()(t.created_at), "days") < x.n83,
        N = S && f,
        b = e.isStaff(),
        I = !e.verified;
    return (0, i.jsxs)(A.h, {
        setting: h.H.PRIVACY_DATA_REQUEST_V2,
        children: [(0, i.jsx)(A._, {
            header: p.intl.string(p.t.XAHCgJ),
            description: p.intl.format(p.t.P3kNfr, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.GDPR_REQUEST_DATA)
            })
        }), N ? (0, i.jsx)(o.ZpM, {
            className: T.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: p.intl.format(p.t.RNDlV9, {
                    date: r()(t.created_at).add(x.n83, "days").format("MMMM Do YYYY")
                })
            })
        }) : b ? (0, i.jsx)(o.ZpM, {
            className: T.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: p.intl.string(p.t.ZPQLH2)
            })
        }) : (0, i.jsxs)(i.Fragment, {
            children: [I ? (0, i.jsx)(o.ZpM, {
                className: T.N,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: p.intl.string(p.t.c1f88z)
                })
            }) : null, (0, i.jsx)("div", {
                className: T.x,
                children: (0, i.jsx)(o.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t.dmBSKo),
                    disabled: S,
                    onClick: () => {
                        (e => {
                            let {
                                onConfirm: t
                            } = e;
                            (0, o.mMO)(async () => {
                                let {
                                    default: e
                                } = await n.e("98171").then(n.bind(n, 481398));
                                return n => (0, i.jsx)(e, {
                                    modalProps: n,
                                    onConfirm: t
                                })
                            })
                        })({
                            onConfirm: e => {
                                C(!0), (0, m.$)(e).then(e => {
                                    null != e && null != e.body ? d.A.show({
                                        title: p.intl.string(p.t.i2iul5),
                                        body: p.intl.string(p.t["6Nmv4i"])
                                    }) : d.A.show({
                                        title: p.intl.string(p.t.OjbtDm),
                                        body: p.intl.string(p.t["0F5Jyt"])
                                    })
                                }, e => {
                                    let t = e?.message || e?.body?.message || p.intl.string(p.t["0F5Jyt"]);
                                    d.A.show({
                                        title: p.intl.string(p.t.OjbtDm),
                                        body: t
                                    })
                                }).finally(() => C(!1))
                            }
                        })
                    },
                    loading: E || l
                })
            })]
        })]
    })
}