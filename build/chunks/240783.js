/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968),
    a = t(64700),
    s = t(311907),
    l = t(397927),
    r = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    _ = t(412775),
    A = t(86404),
    x = t(738759),
    p = t(518477),
    g = t(985018),
    I = t(272823),
    m = t(613761);

function f(e) {
    let {
        section: n,
        user: t,
        currentUser: a,
        displayProfile: s,
        guildId: l,
        channelId: r,
        onClose: o
    } = e;
    return n === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: a,
        guildId: l,
        onClose: o
    }) : n === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(A.A, {
        user: t,
        guildId: l,
        channelId: r,
        onClose: o
    }) : n === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(x.A, {
        user: t,
        onClose: o
    }) : n === p.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === p.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: s,
        guildId: l,
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
        initialSection: _ = p.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: x
    } = (0, o.NJ)(), h = (0, s.bG)([r.A], () => r.A.hidePersonalInformation), [b, j] = a.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === _
    })?.section ?? u[0]?.section);
    a.useEffect(() => {
        null == u.find(e => e.section === b) && j(u[0].section)
    }, [u, b]);
    let v = a.useCallback(e => {
        x({
            action: "PRESS_SECTION",
            section: e
        }), j(e)
    }, [x]);
    return h ? (0, i.jsx)("div", {
        className: m.kL,
        children: (0, i.jsxs)("div", {
            className: I.Ie,
            children: [(0, i.jsx)("div", {
                className: I.hB
            }), (0, i.jsx)("div", {
                className: I.BI,
                children: g.intl.string(g.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: m.kL,
        children: [(0, i.jsx)(l.VQ0, {
            className: m.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: v,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(l.VQ0.Item, {
                    className: m.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(f, {
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