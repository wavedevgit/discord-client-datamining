/** chunk id: 240783 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(351906),
    d = n(183555),
    o = n(382120),
    c = n(128490),
    u = n(539548),
    A = n(412775),
    m = n(86404),
    x = n(738759),
    p = n(518477),
    _ = n(985018),
    f = n(230836),
    h = n(735633);

function g(e) {
    let {
        section: t,
        user: n,
        currentUser: s,
        displayProfile: r,
        guildId: a,
        channelId: l,
        onClose: d
    } = e;
    return t === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: n,
        currentUser: s,
        guildId: a,
        onClose: d
    }) : t === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(m.A, {
        user: n,
        guildId: a,
        channelId: l,
        onClose: d
    }) : t === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(x.A, {
        user: n,
        onClose: d
    }) : t === p.RP.BOT_DATA_ACCESS ? (0, i.jsx)(o.A, {
        user: n
    }) : t === p.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: n,
        displayProfile: r,
        guildId: a,
        onClose: d
    }) : (0, i.jsx)(A.A, {
        user: n,
        displayProfile: r,
        onClose: d
    })
}

function I(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: o,
        guildId: c,
        items: u,
        initialSection: A = p.RP.USER_INFO,
        onClose: m
    } = e, {
        trackUserProfileAction: x
    } = (0, d.NJ)(), I = (0, r.bG)([l.A], () => l.A.hidePersonalInformation), [j, b] = s.useState(() => u.find(e => {
        let {
            section: t
        } = e;
        return t === A
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === j) && b(u[0].section)
    }, [u, j]);
    let v = s.useCallback(e => {
        x({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [x]);
    return I ? (0, i.jsx)("div", {
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
            selectedItem: j,
            onItemSelect: v,
            children: u.map(e => {
                let {
                    section: t,
                    text: n
                } = e;
                return (0, i.jsx)(a.VQ0.Item, {
                    className: h.YU,
                    id: t,
                    "aria-label": n,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: n
                    })
                }, t)
            })
        }), (0, i.jsx)(g, {
            items: u,
            section: j,
            user: t,
            currentUser: n,
            displayProfile: o,
            guildId: c,
            onClose: m
        })]
    })
}