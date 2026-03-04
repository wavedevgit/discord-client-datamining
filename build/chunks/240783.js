/** chunk id: 240783, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(351906),
    d = n(183555),
    o = n(382120),
    c = n(128490),
    u = n(539548),
    A = n(412775),
    x = n(86404),
    _ = n(738759),
    m = n(518477),
    p = n(985018),
    f = n(781425),
    h = n(368519);

function I(e) {
    let {
        section: t,
        user: n,
        currentUser: s,
        displayProfile: l,
        guildId: r,
        channelId: a,
        onClose: d
    } = e;
    return t === m.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: n,
        currentUser: s,
        guildId: r,
        onClose: d
    }) : t === m.RP.MUTUAL_FRIENDS ? (0, i.jsx)(x.A, {
        user: n,
        guildId: r,
        channelId: a,
        onClose: d
    }) : t === m.RP.MUTUAL_GUILDS ? (0, i.jsx)(_.A, {
        user: n,
        onClose: d
    }) : t === m.RP.BOT_DATA_ACCESS ? (0, i.jsx)(o.A, {
        user: n
    }) : t === m.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: n,
        displayProfile: l,
        guildId: r,
        onClose: d
    }) : (0, i.jsx)(A.A, {
        user: n,
        displayProfile: l,
        onClose: d
    })
}

function g(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: o,
        guildId: c,
        items: u,
        initialSection: A = m.RP.USER_INFO,
        onClose: x
    } = e, {
        trackUserProfileAction: _
    } = (0, d.NJ)(), g = (0, l.bG)([a.A], () => a.A.hidePersonalInformation), [j, b] = s.useState(() => u.find(e => {
        let {
            section: t
        } = e;
        return t === A
    })?.section ?? u[0]?.section);
    s.useEffect(() => {
        null == u.find(e => e.section === j) && b(u[0].section)
    }, [u, j]);
    let N = s.useCallback(e => {
        _({
            action: "PRESS_SECTION",
            section: e
        }), b(e)
    }, [_]);
    return g ? (0, i.jsx)("div", {
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
        children: [(0, i.jsx)(r.VQ0, {
            className: h.$H,
            type: "top",
            selectedItem: j,
            onItemSelect: N,
            children: u.map(e => {
                let {
                    section: t,
                    text: n
                } = e;
                return (0, i.jsx)(r.VQ0.Item, {
                    className: h.YU,
                    id: t,
                    "aria-label": n,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: n
                    })
                }, t)
            })
        }), (0, i.jsx)(I, {
            items: u,
            section: j,
            user: t,
            currentUser: n,
            displayProfile: o,
            guildId: c,
            onClose: x
        })]
    })
}