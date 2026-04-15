/** chunk id: 761437 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    s = n(582754),
    a = n(397927),
    r = n(157559),
    o = n(824953),
    d = n(964486),
    c = n(736653),
    u = n(235986),
    m = n(975571),
    x = n(267001),
    g = n(652215),
    h = n(985018),
    p = n(660356),
    A = n(734087),
    b = n(609621);

function f(e) {
    let t, n, {
            guild: f,
            channel: _,
            customWebhooks: j,
            editedWebhook: N,
            selectableWebhookChannels: v,
            refToScroller: T,
            errors: C,
            canNavigate: E
        } = e,
        I = (0, c.Ay)(),
        [S, y] = l.useState(null),
        [O, w] = l.useState(null);
    if (null != _) n = _;
    else {
        let e = Object.values(v);
        n = e.length > 0 ? e[0] : null
    }
    let k = l.useCallback(async () => {
        if (E() && null !== n) {
            let e = await o.A.create(f.id, n.id).catch(e => {
                let {
                    body: t,
                    status: n
                } = e;
                return t && t.code === g.t02.TOO_MANY_WEBHOOKS ? r.A.show({
                    title: h.intl.string(h.t.cCqsca),
                    body: h.intl.string(h.t["w+QZoX"])
                }) : 429 === n ? r.A.show({
                    title: h.intl.string(h.t.cCqsca),
                    body: h.intl.string(h.t["YBM+UW"])
                }) : r.A.show({
                    title: h.intl.string(h.t.cCqsca),
                    body: h.intl.string(h.t["/4TwKf"])
                }), null
            });
            null != e && (w(e.id), y(e))
        }
    }, [E, n, f]);
    (0, d.Ay)(() => {
        0 === j.length && k()
    });
    let R = null !== n;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: h.intl.format(h.t.WL0d0e, {
                helpdeskArticle: m.A.getArticleURL(g.MVz.WEBHOOKS),
                developersArticle: g.X7G.API_DOCS_WEBHOOKS
            })
        }), (0, i.jsx)(a.cGx, {
            className: p.zN
        }), j.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.Tf,
                children: (0, i.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: h.intl.string(h.t["nrO/HH"]),
                    disabled: !R,
                    onClick: k
                })
            }), (0, i.jsx)(x.A, {
                webhooks: j,
                editedWebhook: N,
                selectableWebhookChannels: v,
                lastCreatedWebhookId: S?.id,
                errors: C,
                canNavigate: E
            })]
        }) : (t = (0, s.Mw)(I) ? A : b, (0, i.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            children: [(0, i.jsx)("img", {
                alt: "",
                src: t,
                className: p.QT
            }), (0, i.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.string(h.t.LzmsWl)
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.nM,
                children: (0, i.jsx)(a.Button, {
                    variant: "primary",
                    text: h.intl.string(h.t.lOQqJK),
                    disabled: !R,
                    onClick: k
                })
            })]
        }))]
    })
}