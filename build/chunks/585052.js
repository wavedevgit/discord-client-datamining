/** Chunk was on 2827 **/
/** chunk id: 585052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(975571),
    a = n(809505),
    o = n(253932),
    c = n(84373),
    d = n(871930),
    u = n(531525),
    _ = n(652215),
    p = n(985018);

function m() {
    let e = (0, c.o)(),
        t = i.useMemo(() => (0, a.YS)(), []);
    return (0, r.jsxs)(d.h, {
        setting: u.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [(0, r.jsx)(d._, {
            header: p.intl.string(p.t.tiCXaH),
            description: p.intl.format(p.t.RvjRRI, {
                appealLink: s.A.getArticleURL(_.MVz.SAFE_DIRECT_MESSAGING)
            })
        }), (0, r.jsx)(l.z6M, {
            value: e,
            options: t,
            onChange: e => o.he.updateSetting(e)
        })]
    })
}