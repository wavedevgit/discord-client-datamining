/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968),
    s = t(64700),
    l = t(311907),
    r = t(397927),
    a = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    A = t(412775),
    _ = t(86404),
    x = t(738759),
    p = t(518477),
    m = t(985018),
    I = t(643146),
    f = t(843796);

function g(e) {
    let {
        section: n,
        user: t,
        currentUser: s,
        displayProfile: l,
        guildId: r,
        channelId: a,
        onClose: o
    } = e;
    return n === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: s,
        guildId: r,
        onClose: o
    }) : n === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(_.A, {
        user: t,
        guildId: r,
        channelId: a,
        onClose: o
    }) : n === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(x.A, {
        user: t,
        onClose: o
    }) : n === p.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === p.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: l,
        guildId: r,
        onClose: o
    }) : (0, i.jsx)(A.A, {
        user: t,
        displayProfile: l,
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
        initialSection: A = p.RP.USER_INFO,
        onClose: _
    } = e, {
        trackUserProfileAction: x
    } = (0, o.NJ)(), h = (0, l.bG)([a.A], () => a.A.hidePersonalInformation), [b, j] = s.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === A
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === b) && j(u[0].section)
    }, [u, b]);
    let C = s.useCallback(e => {
        x({
            action: "PRESS_SECTION",
            section: e
        }), j(e)
    }, [x]);
    return h ? (0, i.jsx)("div", {
        className: f.kL,
        children: (0, i.jsxs)("div", {
            className: I.Ie,
            children: [(0, i.jsx)("div", {
                className: I.hB
            }), (0, i.jsx)("div", {
                className: I.BI,
                children: m.intl.string(m.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: f.kL,
        children: [(0, i.jsx)(r.VQ0, {
            className: f.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: C,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(r.VQ0.Item, {
                    className: f.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(g, {
            items: u,
            section: b,
            user: n,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            onClose: _
        })]
    })
}