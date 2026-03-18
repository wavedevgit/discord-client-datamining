/** chunk id: 240783 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(351906),
    o = n(183555),
    d = n(382120),
    c = n(128490),
    u = n(539548),
    _ = n(412775),
    A = n(86404),
    m = n(738759),
    x = n(518477),
    p = n(985018),
    f = n(781425),
    h = n(368519);

function g(e) {
    let {
        section: t,
        user: n,
        currentUser: s,
        displayProfile: r,
        guildId: a,
        channelId: l,
        onClose: o
    } = e;
    return t === x.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: n,
        currentUser: s,
        guildId: a,
        onClose: o
    }) : t === x.RP.MUTUAL_FRIENDS ? (0, i.jsx)(A.A, {
        user: n,
        guildId: a,
        channelId: l,
        onClose: o
    }) : t === x.RP.MUTUAL_GUILDS ? (0, i.jsx)(m.A, {
        user: n,
        onClose: o
    }) : t === x.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: n
    }) : t === x.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: n,
        displayProfile: r,
        guildId: a,
        onClose: o
    }) : (0, i.jsx)(_.A, {
        user: n,
        displayProfile: r,
        onClose: o
    })
}

function I(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: d,
        guildId: c,
        items: u,
        initialSection: _ = x.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: m
    } = (0, o.NJ)(), I = (0, r.bG)([l.A], () => l.A.hidePersonalInformation), [j, b] = s.useState(() => u.find(e => {
        let {
            section: t
        } = e;
        return t === _
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === j) && b(u[0].section)
    }, [u, j]);
    let v = s.useCallback(e => {
        m({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [m]);
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
            displayProfile: d,
            guildId: c,
            onClose: A
        })]
    })
}