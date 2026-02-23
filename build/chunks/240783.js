/** chunk id: 240783, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    s = t(64700),
    l = t(311907),
    a = t(397927),
    r = t(351906),
    d = t(183555),
    c = t(382120),
    o = t(128490),
    u = t(539548),
    A = t(412775),
    x = t(86404),
    m = t(738759),
    _ = t(518477),
    p = t(985018),
    f = t(781425),
    h = t(368519);

function I(e) {
    let {
        section: n,
        user: t,
        currentUser: s,
        displayProfile: l,
        guildId: a,
        channelId: r,
        onClose: d
    } = e;
    return n === _.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: s,
        guildId: a,
        onClose: d
    }) : n === _.RP.MUTUAL_FRIENDS ? (0, i.jsx)(x.A, {
        user: t,
        guildId: a,
        channelId: r,
        onClose: d
    }) : n === _.RP.MUTUAL_GUILDS ? (0, i.jsx)(m.A, {
        user: t,
        onClose: d
    }) : n === _.RP.BOT_DATA_ACCESS ? (0, i.jsx)(c.A, {
        user: t
    }) : n === _.RP.BOT_INFO ? (0, i.jsx)(o.A, {
        user: t,
        displayProfile: l,
        guildId: a,
        onClose: d
    }) : (0, i.jsx)(A.A, {
        user: t,
        displayProfile: l,
        onClose: d
    })
}

function j(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: c,
        guildId: o,
        items: u,
        initialSection: A = _.RP.USER_INFO,
        onClose: x
    } = e, {
        trackUserProfileAction: m
    } = (0, d.NJ)(), j = (0, l.bG)([r.A], () => r.A.hidePersonalInformation), [g, b] = s.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === A
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === g) && b(u[0].section)
    }, [u, g]);
    let N = s.useCallback(e => {
        m({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [m]);
    return j ? (0, i.jsx)("div", {
        className: h.kL,
        children: (0, i.jsxs)("div", {
            className: f.Ie,
            children: [(0, i.jsx)("div", {
                className: f.hB
            }), (0, i.jsx)("div", {
                className: f.BI,
                children: p.intl.string(p.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)(a.VQ0, {
            className: h.$H,
            type: "top",
            selectedItem: g,
            onItemSelect: N,
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
        }), (0, i.jsx)(I, {
            items: u,
            section: g,
            user: n,
            currentUser: t,
            displayProfile: c,
            guildId: o,
            onClose: x
        })]
    })
}