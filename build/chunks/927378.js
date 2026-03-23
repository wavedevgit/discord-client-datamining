/** chunk id: 927378 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(287809),
    u = n(975571),
    m = n(115063),
    _ = n(104954),
    g = n(975648),
    A = n(106148),
    x = n(652215),
    p = n(985018),
    h = n(657204);

function T() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        {
            currentHarvestType: t,
            awaitingInitialRequest: l
        } = (0, r.cf)([g.A], () => ({
            currentHarvestType: g.A.harvestType,
            awaitingInitialRequest: g.A.requestingHarvest
        })),
        [T, E] = s.useState(!1);
    if (null == e) return null;
    let f = (0, m.Oj)(t, e) || l,
        S = null != t && a()().diff(a()(t.created_at), "days") < x.n83,
        C = f && S,
        b = e.isStaff(),
        N = !e.verified;
    return (0, i.jsxs)(A.h, {
        children: [(0, i.jsx)(A._, {
            header: p.intl.string(p.t.XAHCgJ),
            description: p.intl.format(p.t.P3kNfr, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.GDPR_REQUEST_DATA)
            })
        }), C ? (0, i.jsx)(o.ZpM, {
            className: h.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: p.intl.format(p.t.RNDlV9, {
                    date: a()(t.created_at).add(x.n83, "days").format("MMMM Do YYYY")
                })
            })
        }) : b ? (0, i.jsx)(o.ZpM, {
            className: h.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: p.intl.string(p.t.ZPQLH2)
            })
        }) : (0, i.jsxs)(i.Fragment, {
            children: [N ? (0, i.jsx)(o.ZpM, {
                className: h.N,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: p.intl.string(p.t.c1f88z)
                })
            }) : null, (0, i.jsx)("div", {
                className: h.x,
                children: (0, i.jsx)(o.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t.dmBSKo),
                    disabled: f,
                    onClick: () => {
                        (e => {
                            let {
                                onConfirm: t
                            } = e;
                            (0, o.mMO)(async () => {
                                let {
                                    default: e
                                } = await n.e("81153").then(n.bind(n, 890904));
                                return n => (0, i.jsx)(e, {
                                    modalProps: n,
                                    onConfirm: t
                                })
                            })
                        })({
                            onConfirm: e => {
                                E(!0), (0, _.$)(e).then(e => {
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
                                }).finally(() => E(!1))
                            }
                        })
                    },
                    loading: T || l
                })
            })]
        })]
    })
}