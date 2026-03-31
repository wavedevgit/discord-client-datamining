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
    g = n(104954),
    _ = n(975648),
    A = n(106148),
    x = n(652215),
    h = n(985018),
    p = n(850605);

function T() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        {
            currentHarvestType: t,
            awaitingInitialRequest: l
        } = (0, r.cf)([_.A], () => ({
            currentHarvestType: _.A.harvestType,
            awaitingInitialRequest: _.A.requestingHarvest
        })),
        [T, f] = s.useState(!1);
    if (null == e) return null;
    let E = (0, m.Oj)(t, e) || l,
        S = null != t && a()().diff(a()(t.created_at), "days") < x.n83,
        b = E && S,
        C = e.isStaff(),
        N = !e.verified;
    return (0, i.jsxs)(A.h, {
        children: [(0, i.jsx)(A._, {
            header: h.intl.string(h.t.XAHCgJ),
            description: h.intl.format(h.t.P3kNfr, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.GDPR_REQUEST_DATA)
            })
        }), b ? (0, i.jsx)(o.ZpM, {
            className: p.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: h.intl.format(h.t.RNDlV9, {
                    date: a()(t.created_at).add(x.n83, "days").format("MMMM Do YYYY")
                })
            })
        }) : C ? (0, i.jsx)(o.ZpM, {
            className: p.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: h.intl.string(h.t.ZPQLH2)
            })
        }) : (0, i.jsxs)(i.Fragment, {
            children: [N ? (0, i.jsx)(o.ZpM, {
                className: p.N,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: h.intl.string(h.t.c1f88z)
                })
            }) : null, (0, i.jsx)("div", {
                className: p.x,
                children: (0, i.jsx)(o.Button, {
                    variant: "primary",
                    text: h.intl.string(h.t.dmBSKo),
                    disabled: E,
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
                                f(!0), (0, g.$)(e).then(e => {
                                    null != e && null != e.body ? d.A.show({
                                        title: h.intl.string(h.t.i2iul5),
                                        body: h.intl.string(h.t["6Nmv4i"])
                                    }) : d.A.show({
                                        title: h.intl.string(h.t.OjbtDm),
                                        body: h.intl.string(h.t["0F5Jyt"])
                                    })
                                }, e => {
                                    let t = e?.message || e?.body?.message || h.intl.string(h.t["0F5Jyt"]);
                                    d.A.show({
                                        title: h.intl.string(h.t.OjbtDm),
                                        body: t
                                    })
                                }).finally(() => f(!1))
                            }
                        })
                    },
                    loading: T || l
                })
            })]
        })]
    })
}