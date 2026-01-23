/** Chunk was on 77986 **/
/** chunk id: 315960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(988794),
    c = n(985018),
    o = n(45750);

function u(e) {
    let {
        selectedTab: t,
        onTabSelected: n,
        userCount: u
    } = e, a = r.useRef(null);
    return r.useEffect(() => {
        var e, t, n;
        return null == (n = a.current) || null == (t = n.ref) || null == (e = t.blur) ? void 0 : e.call(t)
    }, []), (0, l.jsx)("div", {
        className: o.kL,
        children: (0, l.jsxs)(i.VQ0, {
            className: o.$H,
            "aria-label": c.intl.string(c.t["+1H47t"]),
            selectedItem: t,
            type: "top",
            onItemSelect: n,
            children: [(0, l.jsx)(i.VQ0.Item, {
                className: o.YU,
                id: s.al.EVENT_INFO,
                children: c.intl.string(c.t.iW6Xuo)
            }), (0, l.jsx)(i.VQ0.Item, {
                className: o.YU,
                id: s.al.RSVP_LIST,
                children: c.intl.formatToPlainString(c.t["ZrTT/N"], {
                    userCount: u
                })
            })]
        })
    })
}