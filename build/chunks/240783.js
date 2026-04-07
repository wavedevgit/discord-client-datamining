/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    s = t(397927),
    r = t(351906),
    d = t(183555),
    o = t(382120),
    c = t(128490),
    u = t(539548),
    _ = t(412775),
    A = t(86404),
    x = t(738759),
    p = t(518477),
    g = t(985018),
    m = t(643146),
    I = t(843796);

function f(e) {
    let {
        section: n,
        user: t,
        currentUser: a,
        displayProfile: l,
        guildId: s,
        channelId: r,
        onClose: d
    } = e;
    return n === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: a,
        guildId: s,
        onClose: d
    }) : n === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(A.A, {
        user: t,
        guildId: s,
        channelId: r,
        onClose: d
    }) : n === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(x.A, {
        user: t,
        onClose: d
    }) : n === p.RP.BOT_DATA_ACCESS ? (0, i.jsx)(o.A, {
        user: t
    }) : n === p.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: l,
        guildId: s,
        onClose: d
    }) : (0, i.jsx)(_.A, {
        user: t,
        displayProfile: l,
        onClose: d
    })
}

function b(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: o,
        guildId: c,
        items: u,
        initialSection: _ = p.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: x
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
        x({
            action: "PRESS_SECTION",
            section: e
        }), v(e)
    }, [x]);
    return b ? (0, i.jsx)("div", {
        className: I.kL,
        children: (0, i.jsxs)("div", {
            className: m.Ie,
            children: [(0, i.jsx)("div", {
                className: m.hB
            }), (0, i.jsx)("div", {
                className: m.BI,
                children: g.intl.string(g.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: I.kL,
        children: [(0, i.jsx)(s.VQ0, {
            className: I.$H,
            type: "top",
            selectedItem: h,
            onItemSelect: j,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(s.VQ0.Item, {
                    className: I.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(f, {
            items: u,
            section: h,
            user: n,
            currentUser: t,
            displayProfile: o,
            guildId: c,
            onClose: A
        })]
    })
}