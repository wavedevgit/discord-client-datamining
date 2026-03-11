/** chunk id: 585052 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(975571),
    r = n(809505),
    o = n(253932),
    d = n(84373),
    c = n(871930),
    u = n(531525),
    _ = n(652215),
    g = n(985018);

function A() {
    let e = (0, d.o)(),
        t = s.useMemo(() => (0, r.YS)(), []);
    return (0, i.jsxs)(c.h, {
        setting: u.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [(0, i.jsx)(c._, {
            header: g.intl.string(g.t.tiCXaH),
            description: g.intl.format(g.t.RvjRRI, {
                appealLink: a.A.getArticleURL(_.MVz.SAFE_DIRECT_MESSAGING)
            })
        }), (0, i.jsx)(l.z6M, {
            value: e,
            options: t,
            onChange: e => o.he.updateSetting(e)
        })]
    })
}