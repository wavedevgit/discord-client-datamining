/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968),
    l = t(64700),
    a = t(311907),
    s = t(397927),
    r = t(351906),
    d = t(183555),
    o = t(382120),
    c = t(128490),
    u = t(539548),
    A = t(412775),
    _ = t(86404),
    p = t(738759),
    x = t(518477),
    g = t(985018),
    m = t(643146),
    I = t(843796);

function f(e) {
    let {
        section: n,
        user: t,
        currentUser: l,
        displayProfile: a,
        guildId: s,
        channelId: r,
        onClose: d
    } = e;
    return n === x.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: l,
        guildId: s,
        onClose: d
    }) : n === x.RP.MUTUAL_FRIENDS ? (0, i.jsx)(_.A, {
        user: t,
        guildId: s,
        channelId: r,
        onClose: d
    }) : n === x.RP.MUTUAL_GUILDS ? (0, i.jsx)(p.A, {
        user: t,
        onClose: d
    }) : n === x.RP.BOT_DATA_ACCESS ? (0, i.jsx)(o.A, {
        user: t
    }) : n === x.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: a,
        guildId: s,
        onClose: d
    }) : (0, i.jsx)(A.A, {
        user: t,
        displayProfile: a,
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
        initialSection: A = x.RP.USER_INFO,
        onClose: _
    } = e, {
        trackUserProfileAction: p
    } = (0, d.NJ)(), b = (0, a.bG)([r.A], () => r.A.hidePersonalInformation), [h, j] = l.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === A
    })?.section ?? u[0]?.section);
    l.useEffect(() => {
        null == u.find(e => e.section === h) && j(u[0].section)
    }, [u, h]);
    let v = l.useCallback(e => {
        p({
            action: "PRESS_SECTION",
            section: e
        }), j(e)
    }, [p]);
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
            onItemSelect: v,
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
            onClose: _
        })]
    })
}