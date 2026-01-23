/** Chunk was on 21968 **/
/** chunk id: 761437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(582754),
    a = n(397927),
    s = n(157559),
    o = n(824953),
    c = n(964486),
    d = n(736653),
    u = n(235986),
    p = n(975571),
    m = n(267001),
    g = n(652215),
    b = n(985018),
    f = n(851121),
    h = n(734087),
    x = n(609621);

function j(e) {
    let t, n, {
            guild: j,
            channel: O,
            customWebhooks: y,
            editedWebhook: A,
            selectableWebhookChannels: v,
            refToScroller: _,
            errors: N,
            canNavigate: w
        } = e,
        T = (0, d.Ay)(),
        [E, C] = r.useState(null),
        [S, I] = r.useState(null);
    if (null != O) n = O;
    else {
        let e = Object.values(v);
        n = e.length > 0 ? e[0] : null
    }
    let P = r.useCallback(async () => {
        if (w() && null !== n) {
            let e = await o.A.create(j.id, n.id).catch(e => {
                let {
                    body: t,
                    status: n
                } = e;
                return t && t.code === g.t02.TOO_MANY_WEBHOOKS ? s.A.show({
                    title: b.intl.string(b.t.cCqsca),
                    body: b.intl.string(b.t["w+QZoX"])
                }) : 429 === n ? s.A.show({
                    title: b.intl.string(b.t.cCqsca),
                    body: b.intl.string(b.t["YBM+UW"])
                }) : s.A.show({
                    title: b.intl.string(b.t.cCqsca),
                    body: b.intl.string(b.t["/4TwKf"])
                }), null
            });
            null != e && (I(e.id), C(e))
        }
    }, [w, n, j]);
    (0, c.Ay)(() => {
        0 === y.length && P()
    });
    let k = null !== n;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: b.intl.format(b.t.WL0d0e, {
                helpdeskArticle: p.A.getArticleURL(g.MVz.WEBHOOKS),
                developersArticle: g.X7G.API_DOCS_WEBHOOKS
            })
        }), (0, i.jsx)(a.cGx, {
            className: f.zN
        }), y.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.Tf,
                children: (0, i.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: b.intl.string(b.t["nrO/HH"]),
                    disabled: !k,
                    onClick: P
                })
            }), (0, i.jsx)(m.A, {
                webhooks: y,
                editedWebhook: A,
                selectableWebhookChannels: v,
                lastCreatedWebhookId: null == E ? void 0 : E.id,
                errors: N,
                canNavigate: w
            })]
        }) : (t = (0, l.Mw)(T) ? h : x, (0, i.jsxs)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            children: [(0, i.jsx)("img", {
                alt: "",
                src: t,
                className: f.QT
            }), (0, i.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: b.intl.string(b.t.LzmsWl)
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: f.nM,
                children: (0, i.jsx)(a.Button, {
                    variant: "primary",
                    text: b.intl.string(b.t.lOQqJK),
                    disabled: !k,
                    onClick: P
                })
            })]
        }))]
    })
}