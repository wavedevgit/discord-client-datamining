/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => I
});
var i = t(627968),
    s = t(64700),
    r = t(311907),
    l = t(397927),
    a = t(351906),
    o = t(183555),
    d = t(382120),
    c = t(128490),
    u = t(539548),
    A = t(412775),
    m = t(86404),
    _ = t(738759),
    x = t(518477),
    p = t(985018),
    f = t(781425),
    h = t(368519);

function g(e) {
    let {
        section: n,
        user: t,
        currentUser: s,
        displayProfile: r,
        guildId: l,
        channelId: a,
        onClose: o
    } = e;
    return n === x.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: s,
        guildId: l,
        onClose: o
    }) : n === x.RP.MUTUAL_FRIENDS ? (0, i.jsx)(m.A, {
        user: t,
        guildId: l,
        channelId: a,
        onClose: o
    }) : n === x.RP.MUTUAL_GUILDS ? (0, i.jsx)(_.A, {
        user: t,
        onClose: o
    }) : n === x.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === x.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: r,
        guildId: l,
        onClose: o
    }) : (0, i.jsx)(A.A, {
        user: t,
        displayProfile: r,
        onClose: o
    })
}

function I(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: d,
        guildId: c,
        items: u,
        initialSection: A = x.RP.USER_INFO,
        onClose: m
    } = e, {
        trackUserProfileAction: _
    } = (0, o.NJ)(), I = (0, r.bG)([a.A], () => a.A.hidePersonalInformation), [j, b] = s.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === A
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === j) && b(u[0].section)
    }, [u, j]);
    let v = s.useCallback(e => {
        _({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [_]);
    return I ? (0, i.jsx)("div", {
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
        children: [(0, i.jsx)(l.VQ0, {
            className: h.$H,
            type: "top",
            selectedItem: j,
            onItemSelect: v,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(l.VQ0.Item, {
                    className: h.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(g, {
            items: u,
            section: j,
            user: n,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            onClose: m
        })]
    })
}