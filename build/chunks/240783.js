/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968),
    a = t(64700),
    s = t(311907),
    r = t(397927),
    l = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    _ = t(412775),
    A = t(86404),
    p = t(738759),
    x = t(518477),
    f = t(985018),
    m = t(643146),
    g = t(843796);

function I(e) {
    let {
        section: n,
        user: t,
        currentUser: a,
        displayProfile: s,
        guildId: r,
        channelId: l,
        onClose: o
    } = e;
    return n === x.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: a,
        guildId: r,
        onClose: o
    }) : n === x.RP.MUTUAL_FRIENDS ? (0, i.jsx)(A.A, {
        user: t,
        guildId: r,
        channelId: l,
        onClose: o
    }) : n === x.RP.MUTUAL_GUILDS ? (0, i.jsx)(p.A, {
        user: t,
        onClose: o
    }) : n === x.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === x.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: s,
        guildId: r,
        onClose: o
    }) : (0, i.jsx)(_.A, {
        user: t,
        displayProfile: s,
        onClose: o
    })
}

function h(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: d,
        guildId: c,
        items: u,
        initialSection: _ = x.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: p
    } = (0, o.NJ)(), h = (0, s.bG)([l.A], () => l.A.hidePersonalInformation), [b, j] = a.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === _
    })?.section ?? u[0]?.section);
    a.useEffect(() => {
        null == u.find(e => e.section === b) && j(u[0].section)
    }, [u, b]);
    let v = a.useCallback(e => {
        p({
            action: "PRESS_SECTION",
            section: e
        }), j(e)
    }, [p]);
    return h ? (0, i.jsx)("div", {
        className: g.kL,
        children: (0, i.jsxs)("div", {
            className: m.Ie,
            children: [(0, i.jsx)("div", {
                className: m.hB
            }), (0, i.jsx)("div", {
                className: m.BI,
                children: f.intl.string(f.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: g.kL,
        children: [(0, i.jsx)(r.VQ0, {
            className: g.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: v,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(r.VQ0.Item, {
                    className: g.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(I, {
            items: u,
            section: b,
            user: n,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            onClose: A
        })]
    })
}