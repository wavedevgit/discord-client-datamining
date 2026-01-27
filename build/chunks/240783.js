/** Chunk was on 63974 **/
/** chunk id: 240783, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    o = n(351906),
    a = n(183555),
    d = n(382120),
    c = n(128490),
    u = n(539548),
    p = n(412775),
    f = n(86404),
    m = n(738759),
    A = n(518477),
    x = n(985018),
    g = n(781425),
    j = n(368519);

function h(e) {
    let {
        section: t,
        user: n,
        currentUser: i,
        displayProfile: r,
        guildId: s,
        channelId: o,
        onClose: a
    } = e;
    return t === A.RP.ACTIVITY ? (0, l.jsx)(u.A, {
        user: n,
        currentUser: i,
        guildId: s,
        onClose: a
    }) : t === A.RP.MUTUAL_FRIENDS ? (0, l.jsx)(f.A, {
        user: n,
        guildId: s,
        channelId: o,
        onClose: a
    }) : t === A.RP.MUTUAL_GUILDS ? (0, l.jsx)(m.A, {
        user: n,
        onClose: a
    }) : t === A.RP.BOT_DATA_ACCESS ? (0, l.jsx)(d.A, {
        user: n
    }) : t === A.RP.BOT_INFO ? (0, l.jsx)(c.A, {
        user: n,
        displayProfile: r,
        guildId: s,
        onClose: a
    }) : (0, l.jsx)(p.A, {
        user: n,
        displayProfile: r,
        onClose: a
    })
}

function b(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: d,
        guildId: c,
        items: u,
        initialSection: p = A.RP.USER_INFO,
        onClose: f
    } = e, {
        trackUserProfileAction: m
    } = (0, a.NJ)(), b = (0, r.bG)([o.A], () => o.A.hidePersonalInformation), [v, I] = i.useState(() => {
        var e, t, n;
        return null != (e = null == (t = u.find(e => {
            let {
                section: t
            } = e;
            return t === p
        })) ? void 0 : t.section) ? e : null == (n = u[0]) ? void 0 : n.section
    });
    i.useEffect(() => {
        null == u.find(e => e.section === v) && I(u[0].section)
    }, [u, v]);
    let y = i.useCallback(e => {
        m({
            action: "PRESS_SECTION",
            section: e
        }), I(e)
    }, [m]);
    return b ? (0, l.jsx)("div", {
        className: j.kL,
        children: (0, l.jsxs)("div", {
            className: g.Ie,
            children: [(0, l.jsx)("div", {
                className: g.hB
            }), (0, l.jsx)("div", {
                className: g.BI,
                children: x.intl.string(x.t.Br1ls3)
            })]
        })
    }) : (0, l.jsxs)("div", {
        className: j.kL,
        children: [(0, l.jsx)(s.VQ0, {
            className: j.$H,
            type: "top",
            selectedItem: v,
            onItemSelect: y,
            children: u.map(e => {
                let {
                    section: t,
                    text: n
                } = e;
                return (0, l.jsx)(s.VQ0.Item, {
                    className: j.YU,
                    id: t,
                    "aria-label": n,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: n
                    })
                }, t)
            })
        }), (0, l.jsx)(h, {
            items: u,
            section: v,
            user: t,
            currentUser: n,
            displayProfile: d,
            guildId: c,
            onClose: f
        })]
    })
}