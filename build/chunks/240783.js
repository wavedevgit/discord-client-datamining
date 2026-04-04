/** chunk id: 240783 params = (module,exports,require) **/
i.d(n, {
    A: () => b
});
var t = i(627968),
    a = i(64700),
    l = i(311907),
    s = i(397927),
    r = i(351906),
    d = i(183555),
    o = i(382120),
    c = i(128490),
    u = i(539548),
    _ = i(412775),
    A = i(86404),
    p = i(738759),
    x = i(518477),
    g = i(985018),
    m = i(643146),
    I = i(843796);

function f(e) {
    let {
        section: n,
        user: i,
        currentUser: a,
        displayProfile: l,
        guildId: s,
        channelId: r,
        onClose: d
    } = e;
    return n === x.RP.ACTIVITY ? (0, t.jsx)(u.A, {
        user: i,
        currentUser: a,
        guildId: s,
        onClose: d
    }) : n === x.RP.MUTUAL_FRIENDS ? (0, t.jsx)(A.A, {
        user: i,
        guildId: s,
        channelId: r,
        onClose: d
    }) : n === x.RP.MUTUAL_GUILDS ? (0, t.jsx)(p.A, {
        user: i,
        onClose: d
    }) : n === x.RP.BOT_DATA_ACCESS ? (0, t.jsx)(o.A, {
        user: i
    }) : n === x.RP.BOT_INFO ? (0, t.jsx)(c.A, {
        user: i,
        displayProfile: l,
        guildId: s,
        onClose: d
    }) : (0, t.jsx)(_.A, {
        user: i,
        displayProfile: l,
        onClose: d
    })
}

function b(e) {
    let {
        user: n,
        currentUser: i,
        displayProfile: o,
        guildId: c,
        items: u,
        initialSection: _ = x.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: p
    } = (0, d.NJ)(), b = (0, l.bG)([r.A], () => r.A.hidePersonalInformation), [h, v] = a.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === _
    })?.section ?? u[0]?.section);
    a.useEffect(() => {
        null == u.find(e => e.section === h) && v(u[0].section)
    }, [u, h]);
    let j = a.useCallback(e => {
        p({
            action: "PRESS_SECTION",
            section: e
        }), v(e)
    }, [p]);
    return b ? (0, t.jsx)("div", {
        className: I.kL,
        children: (0, t.jsxs)("div", {
            className: m.Ie,
            children: [(0, t.jsx)("div", {
                className: m.hB
            }), (0, t.jsx)("div", {
                className: m.BI,
                children: g.intl.string(g.t.Br1ls3)
            })]
        })
    }) : (0, t.jsxs)("div", {
        className: I.kL,
        children: [(0, t.jsx)(s.VQ0, {
            className: I.$H,
            type: "top",
            selectedItem: h,
            onItemSelect: j,
            children: u.map(e => {
                let {
                    section: n,
                    text: i
                } = e;
                return (0, t.jsx)(s.VQ0.Item, {
                    className: I.YU,
                    id: n,
                    "aria-label": i,
                    children: (0, t.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: i
                    })
                }, n)
            })
        }), (0, t.jsx)(f, {
            items: u,
            section: h,
            user: n,
            currentUser: i,
            displayProfile: o,
            guildId: c,
            onClose: A
        })]
    })
}