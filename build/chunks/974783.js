/** Chunk was on 86142 **/
/** chunk id: 974783, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => g
});
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(17372),
    a = n(975571),
    o = n(843376),
    c = n(652215),
    d = n(985018),
    u = n(188335);
let h = {
        [l.tY.MESSAGE]: d.t.fuqnBC,
        [l.tY.USER]: d.t.F4jrRW,
        [l.tY.GUILD]: d.t.gH3aMs
    },
    p = e => {
        let {
            title: t,
            menuType: n,
            onReopen: l
        } = e, a = i.useCallback(() => {
            (0, o.i)(n, l)()
        }, [n, l]);
        return (0, r.jsxs)(s.DUT, {
            className: u.b0,
            onClick: a,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                children: t
            }), (0, r.jsx)(s.n2b, {
                size: "sm",
                style: {
                    transform: "rotate(180deg)"
                }
            })]
        })
    },
    g = e => {
        let {
            showBackButton: t,
            onBack: n,
            dsaCapabilities: i,
            renderFooter: o,
            onClose: g,
            onReopen: _
        } = e, f = t && null != n ? (0, r.jsx)("div", {
            className: u.Hq,
            children: (0, r.jsx)(s.Button, {
                variant: "secondary",
                text: d.intl.string(d.t["13/7kX"]),
                onClick: n
            })
        }) : null;
        return (0, r.jsxs)(s.BJc, {
            gap: 16,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                children: d.intl.string(d.t.Z11w18)
            }), (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: d.intl.format(d.t["532l+q"], {
                    supportURL: a.A.getArticleURL(c.MVz.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, r.jsx)("div", {
                className: u.kL,
                children: i.map(e => e === l.tY.MEDIA_TAKEDOWN || null == h[e] ? null : (0, r.jsx)(p, {
                    title: d.intl.string(h[e]),
                    menuType: e,
                    onClose: g,
                    onReopen: _
                }, e))
            }), null == o ? void 0 : o(f)]
        })
    }