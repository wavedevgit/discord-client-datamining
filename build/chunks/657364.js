/** chunk id: 657364 params = (module,exports,require) **/
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
    _ = n(115063),
    g = n(104954),
    m = n(975648),
    A = n(871930),
    h = n(531525),
    p = n(652215),
    x = n(985018),
    E = n(711459);

function T() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        {
            currentHarvestType: t,
            awaitingInitialRequest: l
        } = (0, r.cf)([m.A], () => ({
            currentHarvestType: m.A.harvestType,
            awaitingInitialRequest: m.A.requestingHarvest
        })),
        [T, S] = s.useState(!1);
    if (null == e) return null;
    let C = (0, _.Oj)(t, e) || l,
        f = null != t && a()().diff(a()(t.created_at), "days") < p.n83,
        I = C && f,
        b = e.isStaff(),
        N = !e.verified;
    return (0, i.jsxs)(A.h, {
        setting: h.H.PRIVACY_DATA_REQUEST_V2,
        children: [(0, i.jsx)(A._, {
            header: x.intl.string(x.t.XAHCgJ),
            description: x.intl.format(x.t.P3kNfr, {
                helpdeskArticle: u.A.getArticleURL(p.MVz.GDPR_REQUEST_DATA)
            })
        }), I ? (0, i.jsx)(o.ZpM, {
            className: E.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: x.intl.format(x.t.RNDlV9, {
                    date: a()(t.created_at).add(p.n83, "days").format("MMMM Do YYYY")
                })
            })
        }) : b ? (0, i.jsx)(o.ZpM, {
            className: E.N,
            children: (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                children: x.intl.string(x.t.ZPQLH2)
            })
        }) : (0, i.jsxs)(i.Fragment, {
            children: [N ? (0, i.jsx)(o.ZpM, {
                className: E.N,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: x.intl.string(x.t.c1f88z)
                })
            }) : null, (0, i.jsx)("div", {
                className: E.x,
                children: (0, i.jsx)(o.Button, {
                    variant: "primary",
                    text: x.intl.string(x.t.dmBSKo),
                    disabled: C,
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
                                S(!0), (0, g.$)(e).then(e => {
                                    null != e && null != e.body ? d.A.show({
                                        title: x.intl.string(x.t.i2iul5),
                                        body: x.intl.string(x.t["6Nmv4i"])
                                    }) : d.A.show({
                                        title: x.intl.string(x.t.OjbtDm),
                                        body: x.intl.string(x.t["0F5Jyt"])
                                    })
                                }, e => {
                                    let t = e?.message || e?.body?.message || x.intl.string(x.t["0F5Jyt"]);
                                    d.A.show({
                                        title: x.intl.string(x.t.OjbtDm),
                                        body: t
                                    })
                                }).finally(() => S(!1))
                            }
                        })
                    },
                    loading: T || l
                })
            })]
        })]
    })
}