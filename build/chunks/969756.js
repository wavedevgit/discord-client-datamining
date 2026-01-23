/** Chunk was on 21968 **/
/** chunk id: 969756, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(397927),
    o = n(282956),
    c = n(429913),
    d = n(713654),
    u = n(769015),
    p = n(887501),
    m = n(975571),
    g = n(523352),
    b = n(652215),
    f = n(985018),
    h = n(358330);

function x(e) {
    let {
        applicationId: t,
        channels: n
    } = e, r = (0, c.h)(t);
    return 0 === n.length || null == r ? null : (0, i.jsxs)("div", {
        className: h.kF,
        children: [(0, i.jsxs)("div", {
            className: h.wx,
            children: [(0, i.jsx)(u.A, {
                game: r,
                size: u.M.XSMALL
            }), (0, i.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                children: null == r ? void 0 : r.name
            })]
        }), n.map(e => {
            var t;
            return (0, i.jsx)(g.q, {
                channel: e,
                application: r,
                name: e.name,
                icon: null != (t = (0, d.gU)(e)) ? t : void 0,
                iconWrapperClassName: h.N3,
                hasNextSection: !0,
                trailing: (0, i.jsx)(s.R2l, {
                    size: "xs"
                })
            }, e.id)
        })]
    })
}

function j(e) {
    let {
        guild: t
    } = e, n = (0, p.A)(t.id), l = a().groupBy(n, e => {
        var t;
        return null == (t = e.linkedLobby) ? void 0 : t.application_id
    }), c = Object.keys(l);
    return r.useEffect(() => {
        0 === n.length && o.A.setSection(b.wLn.OVERVIEW)
    }, [n]), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: f.intl.format(f.t["9gsSLu"], {
                helpdeskArticle: m.A.getArticleURL(b.MVz.LINKED_LOBBIES)
            })
        }), (0, i.jsx)(s.cGx, {
            className: h.zN
        }), c.map(e => (0, i.jsx)(x, {
            applicationId: e,
            channels: l[e]
        }, e))]
    })
}