/** chunk id: 240783 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(351906),
    o = n(183555),
    d = n(382120),
    c = n(128490),
    u = n(539548),
    m = n(412775),
    A = n(86404),
    x = n(738759),
    _ = n(518477),
    p = n(985018),
    f = n(781425),
    h = n(368519);

function g(e) {
    let {
        section: t,
        user: n,
        currentUser: s,
        displayProfile: r,
        guildId: l,
        channelId: a,
        onClose: o
    } = e;
    return t === _.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: n,
        currentUser: s,
        guildId: l,
        onClose: o
    }) : t === _.RP.MUTUAL_FRIENDS ? (0, i.jsx)(A.A, {
        user: n,
        guildId: l,
        channelId: a,
        onClose: o
    }) : t === _.RP.MUTUAL_GUILDS ? (0, i.jsx)(x.A, {
        user: n,
        onClose: o
    }) : t === _.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: n
    }) : t === _.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: n,
        displayProfile: r,
        guildId: l,
        onClose: o
    }) : (0, i.jsx)(m.A, {
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
        initialSection: m = _.RP.USER_INFO,
        onClose: A
    } = e, {
        trackUserProfileAction: x
    } = (0, o.NJ)(), I = (0, r.bG)([a.A], () => a.A.hidePersonalInformation), [j, b] = s.useState(() => u.find(e => {
        let {
            section: t
        } = e;
        return t === m
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
                    section: t,
                    text: n
                } = e;
                return (0, i.jsx)(l.VQ0.Item, {
                    className: h.YU,
                    id: t,
                    "aria-label": n,
                    children: (0, i.jsx)(l.Text, {
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