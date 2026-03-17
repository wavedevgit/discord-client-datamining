/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    s = t(64700),
    l = t(311907),
    a = t(397927),
    r = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    m = t(412775),
    x = t(86404),
    A = t(738759),
    p = t(518477),
    _ = t(985018),
    f = t(781425),
    h = t(368519);

function g(e) {
    let {
        section: n,
        user: t,
        currentUser: s,
        displayProfile: l,
        guildId: a,
        channelId: r,
        onClose: o
    } = e;
    return n === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: s,
        guildId: a,
        onClose: o
    }) : n === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(x.A, {
        user: t,
        guildId: a,
        channelId: r,
        onClose: o
    }) : n === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(A.A, {
        user: t,
        onClose: o
    }) : n === p.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === p.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: l,
        guildId: a,
        onClose: o
    }) : (0, i.jsx)(m.A, {
        user: t,
        displayProfile: l,
        onClose: o
    })
}

function j(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: d,
        guildId: c,
        items: u,
        initialSection: m = p.RP.USER_INFO,
        onClose: x
    } = e, {
        trackUserProfileAction: A
    } = (0, o.NJ)(), j = (0, l.bG)([r.A], () => r.A.hidePersonalInformation), [I, b] = s.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === m
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === I) && b(u[0].section)
    }, [u, I]);
    let v = s.useCallback(e => {
        A({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [A]);
    return j ? (0, i.jsx)("div", {
        className: h.kL,
        children: (0, i.jsxs)("div", {
            className: f.Ie,
            children: [(0, i.jsx)("div", {
                className: f.hB
            }), (0, i.jsx)("div", {
                className: f.BI,
                children: _.intl.string(_.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)(a.VQ0, {
            className: h.$H,
            type: "top",
            selectedItem: I,
            onItemSelect: v,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(a.VQ0.Item, {
                    className: h.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(g, {
            items: u,
            section: I,
            user: n,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            onClose: x
        })]
    })
}